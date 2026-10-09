// Dedicated print renderer: never runs the interactive reader's lazy loader.
import { spawn } from 'node:child_process';
import { mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

const [input, output] = process.argv.slice(2);
if (!input || !output) throw new Error('Usage: node print-qubits.mjs input.html output.pdf');
const profile = mkdtempSync(join(tmpdir(), 'qubit-print-chrome-'));
const chrome = spawn(process.env.CHROMIUM_BIN || 'chromium', ['--headless=new','--no-sandbox','--disable-dev-shm-usage','--allow-file-access-from-files','--remote-debugging-port=0',`--user-data-dir=${profile}`,'about:blank'], {stdio:['ignore','ignore','pipe']});
let socket;
const pending = new Map();
try {
  const endpoint = await new Promise((resolve,reject) => {
    const timer=setTimeout(()=>reject(new Error('Chromium startup timed out')),30000);
    chrome.once('error',reject);
    chrome.stderr.on('data',chunk=>{
      const line=chunk.toString();
      const match=line.match(/DevTools listening on (ws:\/\/\S+)/);
      if(match){clearTimeout(timer);resolve(match[1]);}
    });
  });
  const port=new URL(endpoint).port;
  const tabs=await(await fetch(`http://127.0.0.1:${port}/json/list`)).json();
  socket=new WebSocket(tabs.find(t=>t.type==='page').webSocketDebuggerUrl);
  await new Promise((resolve,reject)=>{socket.addEventListener('open',resolve,{once:true});socket.addEventListener('error',reject,{once:true});});
  let serial=0;
  socket.addEventListener('message',event=>{
    const message=JSON.parse(event.data);
    if(message.id && pending.has(message.id)){
      const {resolve,reject,timer}=pending.get(message.id);clearTimeout(timer);pending.delete(message.id);
      if(message.error)reject(new Error(JSON.stringify(message.error)));else resolve(message.result);
    }
  });
  const send=(method,params={})=>new Promise((resolve,reject)=>{
    const id=++serial;
    const timer=setTimeout(()=>{pending.delete(id);reject(new Error(`${method} timed out`));},600000);
    pending.set(id,{resolve,reject,timer});socket.send(JSON.stringify({id,method,params}));
  });
  const evaluate=async expression=>{
    const result=await send('Runtime.evaluate',{expression,awaitPromise:true,returnByValue:true});
    if(result.exceptionDetails)throw new Error(JSON.stringify(result.exceptionDetails));
    return result.result.value;
  };
  await send('Page.enable');
  await send('Page.navigate',{url:pathToFileURL(input).href});
  await evaluate(`new Promise((resolve,reject)=>{let ticks=0;const timer=setInterval(()=>{if(window.MathJax?.startup?.promise){clearInterval(timer);window.MathJax.startup.promise.then(resolve,reject);}else if(++ticks>600){clearInterval(timer);reject(new Error('MathJax did not load'));}},100);})`);
  const setup=await evaluate(`(()=>{
    const count=document.querySelectorAll('.math').length;
    const roots=Array.from(document.body.children).flatMap(node=>node.matches('main')?Array.from(node.children):[node]);
    window.printUnits=roots.filter(node=>node.matches('.math')||node.querySelector('.math')).map(node=>{
      const math=Array.from(node.querySelectorAll('.math'));if(node.matches('.math'))math.unshift(node);
      const marker=document.createComment('print unit');node.replaceWith(marker);
      return {node,marker,math};
    });
    return {count,units:window.printUnits.map(unit=>unit.math.length)};
  })()`);
  const count=setup.count;
  const batchSize=750;
  let rendered=0;
  for(let unit=0;unit<setup.units.length;unit++){
    await evaluate(`window.printUnits[${unit}].marker.replaceWith(window.printUnits[${unit}].node)`);
    for(let start=0;start<setup.units[unit];start+=batchSize){
      const began=performance.now();
      const errors=await evaluate(`(async()=>{
        const batch=window.printUnits[${unit}].math.slice(${start},${start+batchSize});
        await MathJax.typesetPromise(batch);
        const errors=batch.flatMap(node=>Array.from(node.querySelectorAll('[data-mml-node="merror"],mjx-merror'),error=>({message:error.textContent,tex:MathJax.startup.document.getMathItemsWithin(node).map(item=>item.math)})));
        // Static printing keeps the output, not interactive re-render state.
        MathJax.typesetClear();
        return errors;
      })()`);
      if(errors.length)throw new Error(`Invalid equations: ${JSON.stringify(errors)}`);
      rendered+=Math.min(batchSize,setup.units[unit]-start);
      console.log(`Math rendered: ${rendered}/${count} (${((performance.now()-began)/1000).toFixed(2)}s batch)`);
    }
    await evaluate(`(async()=>{
      const unit=window.printUnits[${unit}];await document.fonts.ready;
      // Measure before changing zoom; alternating reads/writes forces layouts.
      const scales=Array.from(unit.node.querySelectorAll('mjx-container'),container=>{
        const available=container.closest('.math.display')?.clientWidth || container.closest('td,li,p')?.clientWidth || 650;
        return {container,scale:available/container.scrollWidth};
      });
      for(const {container,scale} of scales)if(scale<1)container.style.zoom=String(scale);
      // Keep completed chapters out of layout while rendering the next one.
      unit.node.replaceWith(unit.marker);
    })()`);
  }
  await evaluate(`for(const unit of window.printUnits)unit.marker.replaceWith(unit.node)`);
  const validation=await evaluate(`(async()=>{
    await Promise.all([...document.images].map(image=>image.decode()));await document.fonts.ready;
    return {figures:document.querySelectorAll('figure').length,math:document.querySelectorAll('mjx-container').length,errors:[...document.querySelectorAll('[data-mml-node="merror"],mjx-merror')].map(error=>({message:error.textContent}))};
  })()`);
  console.log('Print validation:',JSON.stringify(validation));
  if(validation.errors.length || validation.math<count)throw new Error('Incomplete or invalid equation rendering');
  const result=await send('Page.printToPDF',{printBackground:true,preferCSSPageSize:true,transferMode:'ReturnAsStream',generateDocumentOutline:true});
  const chunks=[];
  while(true){const chunk=await send('IO.read',{handle:result.stream});chunks.push(Buffer.from(chunk.data,chunk.base64Encoded?'base64':'utf8'));if(chunk.eof)break;}
  await send('IO.close',{handle:result.stream});
  writeFileSync(output,Buffer.concat(chunks));
  console.log(`PDF written: ${output}`);
} finally {
  for(const {timer} of pending.values())clearTimeout(timer);
  socket?.close();
  if(chrome.pid && chrome.exitCode===null){
    const stopped=new Promise(resolve=>chrome.once('close',resolve));
    chrome.kill('SIGTERM');await stopped;
  }
  // Only the exact freshly created browser profile is removed.
  rmSync(profile,{recursive:true,force:true});
}
