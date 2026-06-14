---
title: Concurrent state evolution
date: 2026-06-13
summary: How a vehicle-animation bug, a paper on loops and recursion, and the Redux pattern collided into one way of evolving state across a channel.
---

You can call this my origin story as a developer, so let me tell it in order. And
no — even though I am a Doctor (a PhD), the origin story did not turn me into a
villain.

## The bug that started it

My first assignment at a new job was a concurrency problem. There was a replay
engine — it consumed a stream of recorded coordinates and walked a vehicle marker
along a route on a map, pausing, resuming, interpolating between points — and it
misbehaved in a way that was hard to pin down. It was driven by a `go-loop` parked
on a channel of coordinates: for each one it had to calculate, then move the
marker, then resolve to the next. **Those three steps were never cleanly
sequenced, so they raced.**

## A vehicle is a state machine

By coincidence I was reading, at the same time, one of those classic papers — Guy
Steele's [*Lambda: The Ultimate GOTO*](https://dspace.mit.edu/handle/1721.1/5753) —
on how a loop is really just tail recursion wearing a costume, and how a bundle of
mutually tail-recursive functions is just a state machine.

That reframing was already sitting in my head when I went back to the broken loop,
and the two things clicked together: a vehicle replaying a route *is* a state
machine. `:stopped`, `:running`, `:paused`, `:resumed`, and so on. Mutual recursion
is the elegant way to write those transitions — **each state decides the next.**

<figure class="diagram">
<svg viewBox="0 0 720 300" role="img" aria-label="State diagram of the replay engine" xmlns="http://www.w3.org/2000/svg" font-family="Manrope, sans-serif">
<defs><marker id="ar" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#5a6b73"/></marker></defs>
<g fill="#ffffff" stroke="#1f2a2f" stroke-width="1.5"><rect x="20" y="52" width="150" height="46" rx="8"/><rect x="300" y="52" width="150" height="46" rx="8"/><rect x="560" y="52" width="140" height="46" rx="8"/><rect x="240" y="206" width="270" height="46" rx="8"/><rect x="560" y="206" width="140" height="46" rx="8"/></g>
<g fill="#1f2a2f" font-family="ui-monospace, monospace" font-size="14" text-anchor="middle"><text x="95" y="80">:stopped</text><text x="375" y="80">:running</text><text x="630" y="80">:paused</text><text x="375" y="234">[:running :frames]</text><text x="630" y="234">:resumed</text></g>
<g stroke="#5a6b73" stroke-width="1.5" fill="none" marker-end="url(#ar)"><line x1="170" y1="75" x2="296" y2="75"/><line x1="360" y1="98" x2="360" y2="204"/><line x1="392" y1="204" x2="392" y2="98"/><line x1="450" y1="75" x2="558" y2="75"/><line x1="630" y1="98" x2="630" y2="204"/><path d="M558,214 C 500,206 458,150 454,100"/></g>
<g fill="#5a6b73" font-size="12"><text x="233" y="68" text-anchor="middle">play</text><text x="352" y="158" text-anchor="end">advance</text><text x="402" y="140" text-anchor="start">segment done</text><text x="504" y="68" text-anchor="middle">reach :end</text><text x="638" y="158" text-anchor="start">resume</text><text x="516" y="200" text-anchor="start">continue</text></g>
</svg>
<figcaption>The replay engine as a state machine. Every box is a <code>:status</code>; the nested <code>[:running :frames]</code> is a sub-state living inside <code>:running</code>.</figcaption>
</figure>

So I decided to hold the state in an atom. It wasn't a considered design at first —
an atom just seemed like the obvious place for something the outside world might
need to poke at, like a user hitting "pause" halfway down the route. The atom held
the state, and a multimethod advanced it. The `:status` *is* the dispatch value.

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

## A list lets the state be more granular

**TL;DR — a keyword is one flat label; a list nests a sub-state inside it.**

The status doesn't have to be a single keyword — it can be a short list, and that
is more useful than it sounds. Most of the time the vehicle is simply `:running`.
But "running" quietly hides a finer activity: between any two recorded GPS points
the marker doesn't jump, it slides across the gap one animation frame at a time.
That sliding is a phase *inside* running — not a separate mode the way `:paused`
is. I could have minted a new top-level status, `:running-between-frames`, but then
every part of the code that only wants to know "are we playing or not?" would
suddenly have to learn about it too.

So the status becomes a list instead: `[:running :frames]`. The first element is
the big-picture mode — we're running — and the second narrows it to the exact
phase, the frame-by-frame slide. Think of it like an address: `:running` is the
city, `:frames` is the street. Because the multimethod dispatches on the *whole*
value, I can write one handler aimed precisely at `[:running :frames]`, while any
code that only cares about the city keeps reading just the first element and never
notices the street exists. That is how you get one state nested inside another
without the rest of the system having to account for it.

## Decide, then do

**`resolve-state` never touches the map or the data — it only decides.** It has no
side effects; it records that decision — a `:command` — in the atom. A second
multimethod, `execute-action`, then dispatches on that command, performs the actual
effect, and hands control back to `resolve-state`:

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

So the two multimethods
[trampoline](<https://en.wikipedia.org/wiki/Trampoline_(computing)>) off each
other: decide, effect, decide, effect. **A state never passes its successor (the
next state) as an argument — it *names* it** by writing `:status` / `:command` into
the atom, and the bounce runs the next one. The atom is doing less than it looks
here: it is just a convenient place to leave that name. With a little design the
state could ride along as an argument instead — which is exactly what the channel
version is about to do. In this first version the bounce was a `setTimeout` (an
`execute-async` that also yields to pending map zooms), not a channel. That
`setTimeout` is the trampoline. Hold that thought — it is the one piece Redux is
about to replace.

## The channel replaces the setTimeout

Then I remembered where I had seen this skeleton before:
[Redux in ClojureScript with Rum](https://slonoed.net/redux-in-closurescript-with-rum/).
Its whole argument is one sentence — *one place for state, one place to change it* —
and it gets there with the exact machinery I was already reaching for: a `go-loop`
draining a channel, and a multimethod standing in for the reducer.

```clojure
(go-loop []
  (when-let [[type data] (<! actions)]
    (swap! state transform data type)
    (recur)))
```

That was the click. My replay engine already *named* its successor instead of
calling it — that was the whole point of writing `:command` into the atom and
bouncing. What it lacked was a good trampoline; the `setTimeout` worked but left
the transitions scattered across two multimethods and the event loop. Redux showed
the better bounce: a channel and one `go-loop` draining it. Swap the `setTimeout`
for the channel and you get what I have been calling, privately, **concurrent state
evolution** — and unlike the loop I was hired to fix, it just works.

## The payload rides with the name

The channel is the trampoline. **A state still never calls its successor; it puts a
pair on the channel — the *name* of the next state and a *payload*** — and a single
loop bounces. The payload is the part the first version smuggled through the shared
atom: now it travels in the open, as the data the next step needs to do its work.
Every transition becomes a self-contained `[action data]` value, which is what
makes the whole walk inspectable — you can read off, from the channel alone, what
is happening and what it is happening to. In the latest version of this pattern —
an AI pipeline that extracts structured data from emails — the states are no longer
vehicle modes but steps in an effectful process, yet the skeleton is identical:

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
<svg viewBox="0 0 720 270" role="img" aria-label="The channel trampoline loop" xmlns="http://www.w3.org/2000/svg" font-family="Manrope, sans-serif">
<defs><marker id="ar2" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#5a6b73"/></marker></defs>
<text x="110" y="28" fill="#5a6b73" font-size="12">the channel</text>
<rect x="110" y="36" width="500" height="58" rx="10" fill="#ffffff" stroke="#1f2a2f" stroke-width="1.5"/>
<g fill="#efe9df" stroke="#5a6b73" stroke-width="1"><rect x="135" y="50" width="140" height="30" rx="6"/><rect x="290" y="50" width="140" height="30" rx="6"/><rect x="445" y="50" width="140" height="30" rx="6"/></g>
<g fill="#1f2a2f" font-family="ui-monospace, monospace" font-size="11" text-anchor="middle"><text x="205" y="69">[:persist · {…}]</text><text x="360" y="69">[:extract · {…}]</text><text x="515" y="69">[:error · {…}]</text></g>
<g fill="#ffffff" stroke="#1f2a2f" stroke-width="1.5"><rect x="120" y="176" width="180" height="64" rx="8"/><rect x="420" y="176" width="200" height="64" rx="8"/></g>
<g fill="#1f2a2f" text-anchor="middle"><text x="210" y="204" font-size="15">go-loop</text><text x="520" y="204" font-size="15">evolve-flow</text></g>
<g fill="#5a6b73" font-family="ui-monospace, monospace" font-size="11" text-anchor="middle"><text x="210" y="224">(&lt;! ch)</text><text x="520" y="224">dispatch on :action</text></g>
<g stroke="#5a6b73" stroke-width="1.5" fill="none" marker-end="url(#ar2)"><line x1="200" y1="94" x2="200" y2="174"/><line x1="300" y1="208" x2="418" y2="208"/><line x1="520" y1="176" x2="520" y2="96"/></g>
<g fill="#5a6b73" font-size="12"><text x="192" y="142" text-anchor="end">take next</text><text x="360" y="200" text-anchor="middle">run handler</text><text x="528" y="142" text-anchor="start">push (next · payload)</text></g>
</svg>
<figcaption>One loop is the trampoline: the <code>go-loop</code> takes an <code>[action · payload]</code> pair off the channel, runs the matching handler, and the handler pushes the next pair back on. Every transition passes through one place.</figcaption>
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

Because every transition is a value on one loop, the things that were hard in the
original tangled go-loop become almost free:

- **One vantage point.** Every transition passes through one place, so one log line
  describes the whole walk, and nothing races because the loop serializes. **This
  is the most powerful concurrency pattern I know, and it works just about
  everywhere.**
- **Failure is just another action.** The loop's `try`/`catch` turns any
  synchronous throw into an error action carrying the step that failed and the
  payload that broke it. The call sites stay clean and side-effect free, and error
  handling lives in one place instead of being scattered through every transition.
- **Compensation, almost by accident.** Errors are ordinary actions, so you can
  route them. A `derive` hierarchy lets a class of steps share a rollback —
  anything already written to the database derives a `::rollback-persistence`, so a
  failure three steps later can undo the earlier write. That is the saga idea, with
  no extra machinery.

## One thing the loop can't catch

**The `try`/`catch` only wraps synchronous throws.** If a step spawns its own
threads, an exception on one of them sails straight past the loop, so that step has
to catch and re-dispatch its own errors. The trampoline sequences the transitions;
it doesn't supervise the threads underneath them.

## None of it is mine

What I like about this is that none of the three pieces is mine. The loop/recursion
equivalence is decades old, state machines are older, and the Redux loop I borrowed
wholesale. The only contribution was noticing that they were the same shape, and
that lining them up turns a fragile concurrent loop into a state evolution you can
actually reason about. **Name the next state instead of calling it, and let a
channel do the recursion.**
