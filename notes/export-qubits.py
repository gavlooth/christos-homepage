#!/usr/bin/env python3
"""Export the canonical illustrated reader; no independent manuscript copies.

Requires Python 3 + beautifulsoup4, Pandoc, Node >=22, and Chromium.
The PDF renderer fetches the same MathJax distribution as the web edition.
Generated outputs are installed only after both conversions pass checks.
"""
from pathlib import Path
from bs4 import BeautifulSoup
import hashlib
import json
import subprocess
import tempfile

ROOT = Path(__file__).resolve().parent
SLUG = 'defects-to-topological-qubits'
SOURCE = ROOT / 'pages' / (SLUG + '.html')
ASSETS = ROOT / 'assets'
VISUALS = ASSETS / SLUG

def log(message):
    print(message, flush=True)

def main():
    original = SOURCE.read_text()
    source = BeautifulSoup(original, 'html.parser')
    dependencies = {ASSETS / image['src'].removeprefix('/notes/assets/')
                    for image in source.select('img[src^="/notes/assets/"]')}
    input_hashes = {str(path.relative_to(ROOT)):hashlib.sha256(path.read_bytes()).hexdigest()
                    for path in dependencies}
    with tempfile.TemporaryDirectory(prefix='qubit-exports-') as directory:
        temporary = Path(directory)
        # Remove reader controls, not substantive material. Expand every detail
        # into ordinary sections for both linear export formats.
        book = BeautifulSoup('<!doctype html><html lang="en"><head><meta charset="utf-8"></head><body></body></html>', 'html.parser')
        book.head.append(source.title.extract())
        book.head.append(source.style.extract())
        for selector in ['.book-hero','.reading-guide','.notation-guide','#book-content']:
            book.body.append(source.select_one(selector).extract())
        for node in book.select('button,.chapter-tools,.chapter-pagination,.guide-tools'):
            node.decompose()
        for node in book.select('details'):
            node.name = 'section'
            node.attrs.pop('open',None)
        for node in book.select('summary'):
            node.name = 'p'
            strong = book.new_tag('strong')
            for child in list(node.contents): strong.append(child.extract())
            node.append(strong)
        for node in book.select('img'):
            node['loading'] = 'eager'
            if node['src'].startswith('/notes/assets/'):
                node['src'] = (ASSETS / node['src'].removeprefix('/notes/assets/')).as_uri()
        figure_count = len(book.select('figure'))
        math_count = len(book.select('.math'))
        log(f'Exporting {figure_count} figures and {math_count} equations; all detailed notes included.')

        markdown_book = BeautifulSoup(str(book), 'html.parser')
        # These labels are block-level in the screen stylesheet. Preserve their
        # separation when the stylesheet is absent in Markdown.
        for label in markdown_book.select('.journey span,.journey strong,.route-list strong'):
            label.insert_after(' — ')
        for card in markdown_book.select('.route-list > a'):
            paragraph = markdown_book.new_tag('p')
            card.wrap(paragraph)
        svg_outputs = {}
        for index, svg in enumerate(markdown_book.select('figure svg'),1):
            name = f'assessment-diagram-{index}.svg'
            svg['xmlns'] = 'http://www.w3.org/2000/svg'
            # HTML parsing normalizes attribute case; standalone SVG is XML.
            if svg.has_attr('viewbox'): svg['viewBox'] = svg.attrs.pop('viewbox')
            svg_outputs[name] = str(svg)+'\n'
            img = markdown_book.new_tag('img',src=f'{SLUG}/{name}')
            img['alt'] = svg.title.get_text(' ',strip=True) if svg.title else f'Assessment diagram {index}'
            svg.replace_with(img)
        for img in markdown_book.select('img[src^="file:"]'):
            img['src'] = f'{SLUG}/'+img['src'].split('/')[-1]
        equations = {}
        for index, math in enumerate(markdown_book.select('.math')):
            token = f'QBITEXPORTMATH{index:06d}'
            tex = math.get_text().strip()
            display = 'display' in math.get('class',[])
            assert tex[:2] == ('\\[' if display else '\\('), tex[:100]
            equations[token] = {'t':'Math','c':[{'t':'DisplayMath' if display else 'InlineMath'},tex[2:-2].strip()]}
            replacement = markdown_book.new_tag('code'); replacement.string = token
            math.replace_with(replacement)
        # Structural wrappers help the HTML UI, but would obscure Markdown.
        for node in list(markdown_book.select('div,section,article,main,header,nav')):
            if node.get('id'):
                anchor = markdown_book.new_tag('a',id=node['id'])
                node.insert_before(anchor)
            node.unwrap()
        for node in markdown_book.select('[class]'): del node['class']
        ast = json.loads(subprocess.check_output(['pandoc','-f','html','-t','json'],input=str(markdown_book).encode()))
        def restore(value):
            if isinstance(value,dict):
                if value.get('t') == 'Code' and value['c'][1] in equations:
                    return equations[value['c'][1]]
                return {key:restore(item) for key,item in value.items()}
            if isinstance(value,list): return [restore(item) for item in value]
            return value
        ast = restore(ast)
        md = subprocess.check_output(['pandoc','-f','json','-t','markdown','--wrap=none'],input=json.dumps(ast).encode()).decode()
        assert 'QBITEXPORTMATH' not in md
        roundtrip = json.loads(subprocess.check_output(['pandoc','-f','markdown','-t','json'],input=md.encode()))
        def count_nodes(value,kind):
            if isinstance(value,dict):
                return int(value.get('t') == kind) + sum(count_nodes(item,kind) for item in value.values())
            if isinstance(value,list): return sum(count_nodes(item,kind) for item in value)
            return 0
        assert count_nodes(roundtrip,'Math') == math_count, 'Markdown lost an equation.'
        assert count_nodes(roundtrip,'Image') == figure_count, 'Markdown lost a figure.'
        assert count_nodes(roundtrip,'CodeBlock') == len(book.select('pre')), 'Markdown lost a code block.'
        md = '<!-- Generated from notes/pages/'+SLUG+'.html by npm run notes:export:qubits. Edit the HTML source, not this export. -->\n\n'+md
        (temporary / 'book.md').write_text(md)

        # Use browser math rendering for print, preserving the web edition's
        # TeX and SVGs without a second set of LaTeX-specific substitutions.
        for script in source.head.select('script'): book.head.append(script.extract())
        style = book.new_tag('style')
        style.string = '''
@page{size:A4;margin:16mm 14mm}
html{scroll-padding:0}body{width:182mm;max-width:182mm;margin:0 auto;background:white;font-size:10pt;line-height:1.48}
.book-hero h1{font-size:34pt}.book-chapter>h2{font-size:25pt}.book-part>h2{font-size:11pt}
h3,.topic-group>h3{font-size:16pt}h4,.topic-group>.topic>h4{font-size:12pt}
.book-chapter{margin:0}.book-chapter>h2{break-before:page}.topic{margin-top:1.6rem;padding-top:1rem}
.deep-dive{padding:10pt;background:#f7faf8}.notation-guide{padding:10pt}
.table-scroll,.diagram-scroll,.math.display{overflow:visible!important;max-width:100%}
table{width:100%;min-width:0!important;font-size:7.3pt;table-layout:fixed}th,td{overflow-wrap:anywhere;padding:4pt}
figure{padding:5pt;margin:12pt 0;break-inside:avoid}.diagram-scroll>svg,.diagram-scroll>img{width:100%;min-width:0!important;max-width:100%;height:auto}
pre{white-space:pre-wrap;overflow-wrap:anywhere;font-size:8pt}mjx-container{overflow:visible!important}
.math.display{padding:6pt;margin:8pt 0}a{overflow-wrap:anywhere}p,li{orphans:3;widows:3}
@media print{body{width:182mm;max-width:182mm;font-size:10pt}.book-hero h1{font-size:34pt}.book-chapter{break-before:auto}.book-chapter>h2{break-before:page}h2,h3,h4,h5,h6{break-after:avoid}thead{display:table-header-group}}
'''
        book.head.append(style)
        (temporary / 'book.html').write_text(str(book))
        subprocess.run(['node',str(ROOT/'print-qubits.mjs'),str(temporary/'book.html'),str(temporary/'book.pdf')],check=True)
        subprocess.run(['pdfinfo',str(temporary/'book.pdf')],check=True)
        text = subprocess.check_output(['pdftotext',str(temporary/'book.pdf'),'-']).decode()
        for phrase in ['Assessment I','Assessment II','Assessment III','Annotated bibliography']:
            assert phrase.lower() in text.lower(), f'PDF missing {phrase}'
        assert SOURCE.read_text() == original, 'Manuscript changed during export; rerun the export.'
        for name,digest in input_hashes.items():
            assert hashlib.sha256((ROOT/name).read_bytes()).hexdigest() == digest, 'Illustration changed during export; rerun the export.'
        VISUALS.mkdir(exist_ok=True)
        for name,content in svg_outputs.items(): (VISUALS/name).write_text(content)
        (ASSETS/(SLUG+'.md')).write_text(md)
        (ASSETS/(SLUG+'.pdf')).write_bytes((temporary/'book.pdf').read_bytes())
        outputs = [ASSETS/(SLUG+'.md'),ASSETS/(SLUG+'.pdf'),*[VISUALS/name for name in svg_outputs]]
        manifest = {'source':str(SOURCE.relative_to(ROOT.parent)),'sha256':hashlib.sha256(original.encode()).hexdigest(),'figures':figure_count,'equations':math_count,
                    'inputs':input_hashes,'outputs':{str(p.relative_to(ROOT)):hashlib.sha256(p.read_bytes()).hexdigest() for p in outputs}}
        (ROOT/'qubits-exports.json').write_text(json.dumps(manifest,indent=2)+'\n')
        log('Installed matching Markdown, PDF, diagram exports, and freshness manifest. Run npm run build to publish locally.')

if __name__ == '__main__': main()
