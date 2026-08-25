---
title: Concurrent state evolution
date: 2026-06-13
summary: How a vehicle-animation bug, a paper on loops and recursion, and the Redux pattern collided into one way of evolving state across a channel.
---

You can call this my origin story as a developer, so let me tell it in order. And
no — even though I am a Doctor (a PhD), the origin story did not turn me into a
villain.

## The bug that started it

My first assignment at a new job was a replay engine: it read recorded coordinates
and moved a vehicle marker along a route, with pause, resume, and smooth movement
between points. A Clojure `go-loop` — an asynchronous loop — read coordinates from
a channel, a queue shared between concurrent tasks. Each turn calculated, moved the
marker, and chose what came next. Those jobs could overlap because their order was
not explicit. That was the bug factory: two steps both thought they owned “what
happens next,” and the marker jumped.

## A vehicle is a state machine

At the same time I was reading Guy Steele’s [*Lambda: The Ultimate
GOTO*](https://dspace.mit.edu/handle/1721.1/5753). The paper’s useful claim is
simple: a loop can be a function that names itself at the end, and a handful of
such functions is already a state machine. You do not need a special “state machine
framework.” You need a current mode and a rule that says what mode comes next.

The replay engine was plainly that machine. Its mode was `:stopped`, `:running`,
`:paused`, or `:resumed`. Each transition chose the successor.

<figure class="diagram">
<svg viewBox="0 0 720 300" role="img" aria-labelledby="replay-title replay-desc" xmlns="http://www.w3.org/2000/svg" font-family="Manrope, sans-serif">
<title id="replay-title">Replay state machine with a nested frame phase</title>
<desc id="replay-desc">Stopped enters the running state. Running contains a nested frames phase for interpolation. Running can pause at the route end, then resume and continue.</desc>
<defs><marker id="ar" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#5a6b73"/></marker></defs>
<rect x="26" y="122" width="130" height="52" rx="9" fill="#ffffff" stroke="#1f2a2f" stroke-width="1.5"/>
<text x="91" y="154" fill="#1f2a2f" font-family="ui-monospace, monospace" font-size="14" text-anchor="middle">:stopped</text>
<rect x="232" y="38" width="252" height="224" rx="12" fill="#f7f4ef" stroke="#1f2a2f" stroke-width="1.5"/>
<text x="254" y="68" fill="#1f2a2f" font-family="ui-monospace, monospace" font-size="14" font-weight="600">:running</text>
<text x="254" y="89" fill="#5a6b73" font-size="12">top-level mode</text>
<rect x="266" y="112" width="184" height="54" rx="9" fill="#ffffff" stroke="#1f2a2f" stroke-width="1.5"/>
<text x="358" y="145" fill="#1f2a2f" font-family="ui-monospace, monospace" font-size="13" text-anchor="middle">[:running :frames]</text>
<text x="358" y="194" fill="#5a6b73" font-size="12" text-anchor="middle">interpolate one segment</text>
<rect x="560" y="66" width="130" height="52" rx="9" fill="#ffffff" stroke="#1f2a2f" stroke-width="1.5"/>
<rect x="560" y="190" width="130" height="52" rx="9" fill="#ffffff" stroke="#1f2a2f" stroke-width="1.5"/>
<g fill="#1f2a2f" font-family="ui-monospace, monospace" font-size="14" text-anchor="middle"><text x="625" y="98">:paused</text><text x="625" y="222">:resumed</text></g>
<g stroke="#5a6b73" stroke-width="1.5" fill="none" marker-end="url(#ar)"><line x1="158" y1="148" x2="228" y2="148"/><line x1="358" y1="95" x2="358" y2="108"/><path d="M450,139 C468,139 468,95 450,95"/><line x1="484" y1="82" x2="556" y2="88"/><line x1="625" y1="120" x2="625" y2="186"/><line x1="558" y1="216" x2="488" y2="216"/></g>
<g fill="#5a6b73" font-size="12"><text x="193" y="136" text-anchor="middle">play</text><text x="350" y="106" text-anchor="end">advance</text><text x="460" y="123">segment done</text><text x="520" y="71" text-anchor="middle">reach :end</text><text x="635" y="156">resume</text><text x="520" y="204" text-anchor="middle">continue</text></g>
</svg>
<figcaption>The broad mode is <code>:running</code>; frame interpolation is the nested state <code>[:running :frames]</code>. That keeps a temporary phase from becoming a system-wide top-level concern.</figcaption>
</figure>

I put the state in an atom: Clojure’s small, shared mutable box. The outside world
could interrupt it — a pause click, for example. A multimethod advanced the machine:
one function that picks a handler from a value. Here, the current `:status` chose
the handler.

<p class="code-label">Clojure — the decider</p>

```clojure
(defmulti resolve-state (fn [state-atom] (:status @state-atom)))

;; running: which recorded point do we head for next?
(defmethod resolve-state :running [state-atom]
  (let [next-position (next-position-index state-atom)]
    (if (= next-position :end)
      (swap! state-atom assoc :command :pause)
      (swap! state-atom merge {:command :advance :position-index next-position}))
    (execute-async #(execute-action state-atom))))

;; running between two points: take one step of the slide toward the target
(defmethod resolve-state [:running :frames] [state-atom]
  (let [{:keys [distance-elapsed start end]} @state-atom
        step (get speeds @(rf/subscribe [:replay/playback-speed]) :1x)]
    (if (zero? distance-elapsed)
      (let [line (line-string [start end])]                ; the segment to slide along
        (swap! state-atom assoc :line line :distance (length line) :distance-elapsed step))
      (swap! state-atom update :distance-elapsed + step))
    (swap! state-atom assoc :command [:advance :frames])
    (execute-async #(execute-action state-atom))))

(defmethod resolve-state :stopped [state-atom]
  (swap! state-atom assoc :command :stop)
  (execute-async #(execute-action state-atom)))

(defmethod resolve-state :paused [state-atom]              ; stash what we were doing
  (swap! state-atom rename-keys {:command :prev-command})
  (swap! state-atom assoc :command :pause)
  (execute-async #(execute-action state-atom)))

(defmethod resolve-state :resumed [state-atom]             ; and pick it back up
  (swap! state-atom rename-keys {:prev-command :command})
  (execute-async #(execute-action state-atom)))
```

## Running has a smaller phase inside it

Most of the time the vehicle is simply `:running`. Between two GPS points, though,
it also has a more specific job: move one animation frame at a time. That job
belongs *inside* running. It is not a sibling of `:paused`.

So the state is `[:running :frames]`, not a new top-level label like
`:running-between-frames`. Read it as: “running, specifically in the frame-moving
phase.” The first value answers the broad question; the second adds the detail. The
multimethod can dispatch on the whole vector, while code that only cares about the
broad mode can ignore the rest. The temporary phase stays local instead of leaking
through the system.

## Decide, then do

**`resolve-state` decides; `execute-action` performs.** The first records the next
command without touching the map. The second runs the real work — move the marker,
for example — and hands control back to the decider:

<p class="code-label">Clojure — the effects</p>

```clojure
(defmulti execute-action (fn [state-atom & _] (:command @state-atom)))

;; advance: grab the next pair of route coordinates, drop into frame mode
(defmethod execute-action :advance [state-atom]
  (let [[start end] @(rf/subscribe [:replay/route-coordinates])]
    (rf/dispatch-sync [:replay/vehicle-position start])
    (swap! state-atom assoc
           :start start
           :end end
           :distance-elapsed 0
           :position start
           :status [:running :frames]))
  (resolve-state state-atom))                ; bounce back to deciding

;; advance one frame: slide the marker a step along the current segment
(defmethod execute-action [:advance :frames] [state-atom]
  (let [{:keys [line distance distance-elapsed]} @state-atom]
    (if (< distance-elapsed distance)
      (let [position (along line distance-elapsed)]
        (rf/dispatch-sync [:replay/vehicle-position position])
        (swap! state-atom assoc :position position :status [:running :frames]))
      (swap! state-atom assoc :status :running)))   ; segment finished, back to running
  (resolve-state state-atom))

(defmethod execute-action :pause [state-atom]
  (swap! state-atom assoc :status :paused))
```

<p class="code-label">The two roles, in plain pseudocode</p>
<div class="pseudo">

```text
# Two roles bouncing off each other — no language required.

decide(state):                 # pure: choose the next command, touch nothing
    state.command = transition_for(state.status)
    trampoline(do, state)      # hop — schedule the effect, don't call it directly

do(state):                     # effectful: perform the command, then loop back
    perform(state.command)     # move the marker, persist, call an API…
    trampoline(decide, state)  # name the next, let the trampoline bounce
```

</div>

The two multimethods
[trampoline](https://en.wikipedia.org/wiki/Trampoline_(computing))
off each other: decide, perform, decide. A trampoline schedules the next call
instead of making it directly, so the program keeps returning to the event loop
instead of stacking recursive calls forever.

**A state names its successor rather than calling it.** Here it writes `:status` or
`:command` into the atom, and `execute-async` schedules the next bounce. The atom is
only a place to leave that name. The channel version moves both the name and its data
into an explicit transition value.

## The channel replaces the setTimeout

Then I saw the same shape in [Redux in ClojureScript with
Rum](https://slonoed.net/redux-in-closurescript-with-rum/): one place for state, one
place to change it. Its machinery was exactly what I needed — a `go-loop` taking
events from a channel, and a multimethod as the reducer: current state plus an event
in, next state out.

```clojure
(go-loop []
  (when-let [[type data] (<! actions)]
    (swap! state transform data type)
    (recur)))
```

That was the missing piece. The replay engine already named successors rather than
calling them. Replace `setTimeout` with a channel, and one `go-loop` becomes the
trampoline. I call the resulting pattern **concurrent state evolution**.

## The payload rides with the name

The channel is the trampoline. **A state never calls its successor; it puts the
successor’s name and payload on the channel.** The payload is simply the data the
next step needs. What once hid in an atom now travels with the transition. Each
`[action data]` value is self-contained: what happens next, and to what.

In a later email-extraction pipeline the “states” became pipeline steps rather than
vehicle modes. The loop stayed the same:

<p class="code-label">Clojure — the email pipeline</p>

```clojure
(defmulti evolve-flow (fn [action _data _config _ch] action))

;; persist the raw email, then hand the saved id on to the next step
(defmethod evolve-flow ::persist-email
  [_ email config ch]
  (let [saved (p/create-email! (:db config) email)]
    (dispatch-action ch ::extract-order-data {:email-id (:id saved)})))   ; next state + payload

;; pull structured order fields out of the email body with the assistant
(defmethod evolve-flow ::extract-order-data
  [_ {:keys [email-id]} config ch]
  (let [order (.processMessage assistant (load-body email-id))]
    (dispatch-action ch ::persist-order-details {:email-id email-id :order order})))

(go-loop []
  (when-let [[action data] (<! ch)]
    (try
      (evolve-flow action data config ch)
      (catch Throwable t
        (dispatch-error! ch action t data)))
    (recur)))
```

<figure class="diagram">
<svg viewBox="0 0 720 270" role="img" aria-labelledby="channel-title channel-desc" xmlns="http://www.w3.org/2000/svg" font-family="Manrope, sans-serif">
<title id="channel-title">A channel as the trampoline for state transitions</title>
<desc id="channel-desc">A single go-loop takes one action and payload from the channel, routes it to a handler, and the handler places the next action and payload back onto the channel.</desc>
<defs><marker id="ar2" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#5a6b73"/></marker><marker id="ar2e" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#0a556e"/></marker></defs>
<text x="76" y="38" fill="#5a6b73" font-size="12">transition queue</text>
<rect x="76" y="48" width="568" height="58" rx="10" fill="#ffffff" stroke="#1f2a2f" stroke-width="1.5"/>
<g fill="#efe9df" stroke="#5a6b73" stroke-width="1"><rect x="100" y="62" width="160" height="30" rx="6"/><rect x="280" y="62" width="160" height="30" rx="6"/><rect x="460" y="62" width="160" height="30" rx="6"/></g>
<g fill="#1f2a2f" font-family="ui-monospace, monospace" font-size="11" text-anchor="middle"><text x="180" y="81">[persist · payload]</text><text x="360" y="81">[extract · payload]</text><text x="540" y="81">[error · payload]</text></g>
<text x="76" y="128" fill="#5a6b73" font-size="12">one consumer serializes transitions</text>
<rect x="105" y="164" width="185" height="64" rx="9" fill="#ffffff" stroke="#1f2a2f" stroke-width="1.5"/>
<rect x="430" y="164" width="185" height="64" rx="9" fill="#ffffff" stroke="#1f2a2f" stroke-width="1.5"/>
<g fill="#1f2a2f" text-anchor="middle"><text x="197" y="193" font-size="15">go-loop</text><text x="522" y="193" font-size="15">handler</text></g>
<g fill="#5a6b73" font-family="ui-monospace, monospace" font-size="11" text-anchor="middle"><text x="197" y="213">take [action payload]</text><text x="522" y="213">evolve-flow(action, payload)</text></g>
<g stroke="#5a6b73" stroke-width="1.5" fill="none" marker-end="url(#ar2)"><line x1="197" y1="108" x2="197" y2="160"/><line x1="292" y1="196" x2="426" y2="196"/></g>
<path d="M522,162 C522,130 670,130 670,76 C670,35 642,31 630,49" stroke="#0a556e" stroke-width="1.6" fill="none" marker-end="url(#ar2e)"/>
<g fill="#5a6b73" font-size="12"><text x="187" y="142" text-anchor="end">take next</text><text x="360" y="187" text-anchor="middle">route</text></g>
<text x="636" y="126" fill="#0a556e" font-size="12" text-anchor="middle">emit next transition</text>
</svg>
<figcaption>The channel carries complete transition values. One <code>go-loop</code> takes the next pair, routes it to a handler, and the handler emits the successor pair. It is the trampoline and the one-at-a-time processing point.</figcaption>
</figure>

<p class="code-label">The same loop, beyond Clojure</p>
<div class="pseudo">

```text
# Any language with a queue/channel can run this loop.

loop forever:
    action, payload = take(channel)          # blocks until a message arrives
    try:
        handlers[action](payload, channel)   # may push the next (action, payload)
    except err:
        push(channel, (ERROR, { action, payload, err }))

# A handler names its successor and ships the data that successor needs:
handler EXTRACT_ORDER (payload, channel):
    order = ai.extract(payload.email)
    push(channel, (PERSIST_ORDER, { order }))   # next state + payload
```

</div>

## What this buys you

Putting every transition through one loop gives you a few useful properties:

- **One vantage point.** Every transition passes through the same place. One log
  line can describe the walk, and the loop processes one transition at a time.
- **Failure is an action.** If a handler fails before it returns, the loop turns
  that error into an error action carrying the failing step and its payload. Error
  policy lives in one place instead of every handler.
- **Earlier work can be undone.** Errors can route to a rollback. A later failure
  can undo a database write from an earlier step. That is the basic saga idea:
  compensate for completed work when the full process cannot finish.

## One thing the loop can't catch

**The `try`/`catch` only sees errors thrown before the handler returns.** If a
handler starts separate work — another thread, a fire-and-forget request — that work
must catch and re-dispatch its own errors. The trampoline sequences transitions; it
does not supervise work underneath them.

That is the whole pattern I still use. I should say, before stopping, that I did not
invent it.

## None of it is mine

None of the parts are new. Loops as recursion, state machines, and the Redux loop
all predate this implementation. The useful observation is that they are the same
shape. Align them and a fragile concurrent loop becomes an explicit series of state
transitions you can reason about.

**Name the next state instead of calling it, carry its payload with it, and let a
channel perform the recursion.**
