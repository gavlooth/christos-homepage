---
title: Concurrent state evolution
date: 2026-06-13
summary: How a vehicle-animation bug, a paper on loops and recursion, and the Redux pattern collided into one way of evolving state across a channel.
---

You can call this my origin story as a developer. I will tell it in chronological order.

And no—the story did not turn me into a villain. That remains true even though I am a Doctor (a PhD).

## The bug that started it

My first assignment at a new job was a replay engine: it read coordinates saved from an earlier trip and moved a vehicle marker along that route. It could pause and resume, and it animated movement between recorded points.

The implementation used a Clojure `go-loop` to read coordinates from a channel. A channel is a communication abstraction for sending and receiving values. Concurrent tasks have work whose lifetimes can overlap; they need not execute simultaneously. A channel can connect concurrent producers or consumers, but it need not have multiple of either. An unbuffered channel does not store a queue of values; see the [core.async channel contracts](https://clojure.github.io/core.async/clojure.core.async.html).

A `go-loop` can park while waiting for a channel value, allowing other work to run. But one loop does not start its next iteration while its current body is still running. Ordinary expressions in that body execute in order. The important distinction is between handling a message and work that a handler starts and leaves running after it returns.

Here is a possible timing trace, not a reconstruction of the omitted production code. A handler starts an asynchronous marker update for step A and returns. The loop can then handle a newer pause or step B. If A's completion later writes to the marker, that old result can appear after the newer command. On a single JavaScript thread, the callbacks still run one at a time; the surprising order comes from when they are scheduled to run, not from synchronous statements executing simultaneously.

That is the ownership problem I encountered: two pieces of work appeared to choose what happened next, and the marker jumped. The source does not show the callback mechanism, so I cannot say exactly which operations overlapped. The lesson is narrower: a single consumer orders the messages it handles, but it does not automatically serialize external effects through completion or prevent another callback from writing the same marker.

## A vehicle is a state machine

At the same time, I was reading Guy Steele’s [*Lambda: The Ultimate GOTO*](https://dspace.mit.edu/handle/1721.1/5753). One useful idea in the paper is that a loop can be expressed as a function that calls itself at the end. More generally, functions can choose and invoke their successors to express state transitions. That describes a state machine when the named conditions and transition rules are explicit; no special state-machine framework is required.

A state records the machine’s current condition. A transition changes that condition, and its successor is the next condition. For replay, `:stopped`, `:running`, and `:paused` describe modes. The historical diagram also draws `:resumed` as a state. In the code, it is a `:status` dispatch value whose handler restores the saved command. It can therefore be understood as a transient resume status, not an `execute-action` command. The omitted entry wiring prevents a complete account of its lifecycle.

The diagram also places `[:running :frames]` inside `:running`. Read this as a two-part status: broad mode `:running`, local phase `:frames`. The vector groups a detail with its broader context. It does not create automatic parent-state dispatch; the code below dispatches on the whole status value.

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
<figcaption>The broad mode is <code>:running</code>; frame interpolation is the nested status <code>[:running :frames]</code>. The grouping is a modeling convention, not automatic hierarchical dispatch.</figcaption>
</figure>

I stored the state in an [atom](https://clojure.org/reference/atoms), Clojure’s reference type for a value that can change. `@state-atom` reads its current value; `swap!` applies an update function to that value. Atom updates are atomic individually; that does not make a sequence of reads, scheduled callbacks, and effects one indivisible protocol. A pause click could arrive while scheduled work was pending.

A [multimethod](https://clojure.org/reference/multimethods) selects a handler from a dispatch value. In this sample, `resolve-state` dispatches on the current `:status`; `execute-action` later dispatches on the separate `:command`. These are different vocabularies, even where their values are vectors.

The following is a partial historical illustration, not a complete replay implementation or a paste-ready namespace. The omitted application supplies `next-position-index`, the `rf` subscriptions, a numeric `speeds` map, geometry helpers, and `execute-async`. The excerpt also omits namespace imports, the binding of `rename-keys`, and any forward declaration of `execute-action`. Their exact environment and helper behavior are not shown, so the sample cannot establish a complete pause protocol or concurrency guarantee.

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

The status `[:running :frames]` selects a different method from the keyword `:running`: the dispatch function returns the entire `:status`, and no parent projection or hierarchy is shown. A multimethod registered for `:running` will not automatically handle that vector. Code that needs the broad mode must explicitly inspect or derive it.

The speed expression deserves care. If the selected key is present, the code expects `step` to be a numeric distance increment per iteration. `distance`, `distance-elapsed`, and `step` must use the same distance unit. Forward movement along a nonzero-length segment needs a positive increment; zero would keep repeating the initialization branch. If the key is absent, [`get`](https://clojure.github.io/clojure/clojure.core-api.html) returns its third argument literally, the keyword `:1x`. That keyword is then stored as `:distance-elapsed` or added to a number, which is not a valid numeric step. The map is omitted, so these are conditions on the example, not claims about the original runtime.

## Running has a smaller phase inside it

Between two GPS points, replay has a temporary job: frame interpolation. A GPS point is a location measured by the Global Positioning System; a frame is one displayed step of animation. The broader mode remains `:running`, while `[:running :frames]` identifies the local phase.

Keeping the phase in a vector distinguishes it from a sibling mode such as `:paused`. The first element answers the broad-mode question; the second identifies the detail. This representation is useful for dispatching on the exact combination, but other code must deliberately select the first element if it wants broad-mode behavior. The vector itself supplies no inheritance.

## Decide, then do

Conceptually, one part chooses a command and another performs its effect, such as moving the marker. A pure decision calculates its result from explicit inputs without changing state or performing external work. In the historical code, `resolve-state` updates `:command` in the atom, and `execute-action` dispatches on that value. This separation makes the intended responsibilities visible; it does not make the shown decider pure or prove that only one writer exists.

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

Read the two vector values according to the dispatch slot. `[:running :frames]` is a status used by `resolve-state`; `[:advance :frames]` is a command used by `execute-action`. They are not interchangeable. In this excerpt the frame-status method writes the frame command, and the effect method writes the frame status again while the segment continues. The other commands include `:advance`, `:pause`, and `:stop`; the stop effect is not included. Resume restores a prior command, but the UI entry wiring and full relationship between status and command are omitted. Thus this partial listing does not show every possible mapping or establish that all transitions are consistent in the original application.

The frame effect publishes a position only when `distance-elapsed` is strictly less than `distance`. At or beyond the distance it changes status to `:running` without explicitly publishing `end`. The next route selection might publish a new start point, but that helper is omitted. This snippet alone therefore does not guarantee an endpoint frame, gap-free interpolation, real-time speed, or smooth rendering.

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

This pseudocode is an idealized sketch, not a literal account of the preceding Clojure methods. Its `decide` both assigns a command and schedules work, so the comment calling it pure is not accurate in the strict functional sense: a pure decision would return a command without mutating state or scheduling an effect. The last call is presented as trampoline scheduling, but the historical methods visibly call `resolve-state` directly. Their cycle is `resolve-state → execute-async → execute-action → resolve-state`, assuming `execute-async` schedules its closure. Only if that helper defers the work until the current call unwinds does it break the synchronous call chain. Its implementation is absent, so that condition is unverified; do not read the mutual calls as a channel trampoline.

A [trampoline](https://en.wikipedia.org/wiki/Trampoline_(computing)), in the recursion technique meant here, repeatedly runs next-call descriptions through a dispatcher instead of nesting every call. Recursion occurs when a function calls itself, directly or through other functions. A tail call is the caller's final operation, with no further work after that call returns. Implementations supporting proper tail calls need not grow the stack for such calls, including mutual recursion. Here, bounded stack use depends on the omitted scheduling boundary. A channel-based consumer later provides a different explicit dispatcher.

The atom is not merely a passive mailbox: the decider mutates it, and the scheduled closure captures the atom reference, not a snapshot of its command. For example, suppose it schedules an `execute-action` closure, then a pause handler changes `:command` before that closure runs. Since `execute-action` dereferences the atom when invoked, it may dispatch on the newer command rather than the one present when scheduling occurred. This hypothetical trace illustrates why the example does not prove ownership; it is not a claim about the exact cause of my original bug.

## The channel replaces the setTimeout

Then I saw a similar shape in [Redux in ClojureScript with Rum](https://slonoed.net/redux-in-closurescript-with-rum/). Redux keeps state in one place and routes state changes through a reducer. An event is a value describing something that happened; a reducer calculates the next state from the current state and one event. In my design, a multimethod served as the reducer.

For message number k, write the reducer rule as:

```text
sₖ₊₁ = R(sₖ, eₖ)
```

Here `sₖ` is the owned state before message k, `eₖ` is that message, `R` is a pure next-state calculation, and `sₖ₊₁` is the resulting state. The owner applies that result. The equation describes state calculation, not input/output operations such as database access or marker updates, and not the whole effectful flow.

The historical excerpt below shows a channel consumer calling `swap!` with `transform`. In `(swap! state transform data type)`, Clojure passes the current value first, then `data`, then `type` to `transform`. This is a schematic example: `transform` is not defined, and the snippet does not show who enqueues actions or how effects are separated from state calculation. The consumer installs the next state through `swap!`; `transform` can still be a pure reducer returning that value. Its definition is absent, so its purity cannot be established from this excerpt. On JVM Clojure, [`swap!` may retry its function](https://clojure.org/reference/atoms), so a transform used this way must not perform side effects.

```clojure
(go-loop []
  (when-let [[type data] (<! actions)]
    (swap! state transform data type)
    (recur)))
```

One consumer handles one dequeued message at a time: it takes a value, runs the synchronous handler body, then takes the next. A parked `<!` lets the go block resume when a value arrives; it does not wait for asynchronous work that the handler launched separately. If a handler starts an effect and returns, the next message can be processed before that effect finishes. Completion order can therefore differ from message or start order.

I replaced a `setTimeout` scheduling step with a channel in this historical design. A [timer schedules work after a delay](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout); a channel transports messages but does not itself supply that delay or align work with display refresh. The excerpt demonstrates explicit transition transport, not the animation's pacing mechanism. The channel order is the order accepted and received by this consumer. Concurrent producers can race to submit messages, and stale completion messages still need a currentness decision.

I call the resulting pattern **concurrent state evolution**: evolve owned state through an explicit sequence of messages while other tasks may run concurrently. The guarantee depends on the ownership boundary: outside callbacks must not also mutate the owned state or choose its successor directly.

## The payload rides with the name

In the channel version, a transition message has the form `[action data]`. The action identifies the next handler; `data` is its payload, the explicit, transition-specific input that handler needs. A handler submits a successor message rather than directly calling its successor.

“Carries what the next step needs” is deliberately limited. The pair does not contain every dependency, such as shared configuration, a database, an assistant client, or the channel itself. Nor does an identifier freeze the external data it refers to. Pairing action and payload makes the transition's explicit input travel together; it does not by itself make execution reproducible or independent of ambient state.

Later, I used this pattern in an email-extraction pipeline, an ordered series of processing steps. The steps are pipeline actions rather than vehicle modes. This is an illustrative historical excerpt, not a complete namespace: `p/create-email!`, `load-body`, `assistant`, `dispatch-action`, `dispatch-error!`, configuration, channel construction, handler registry, and later persistence/error handlers are supplied elsewhere or omitted. The replay excerpt uses re-frame and is ClojureScript-flavoured; `catch Throwable` below is JVM Clojure syntax. These examples are not one paste-ready program.

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

The first handler calls `p/create-email!` synchronously as written, then submits the saved identifier. The next calls `load-body` and `.processMessage` before submitting order details. Their contracts are absent; an ordinary function call executes inline, although its API may launch separate work. A database call or assistant call that blocks occupies the handler until it returns. Calling it from a `go-loop` does not convert arbitrary blocking work into a parking operation. As the [go-block guide explains](https://clojure.org/guides/core_async_go), the macro does not translate parking operations hidden inside ordinary function definitions.

The successor submission helper is also omitted. Because this loop is the only consumer shown, submission must allow the current handler to return so the loop can take the new message. A blocking put to an open unbuffered channel with no other consumer can deadlock: it waits for a take this loop cannot perform until the handler returns. A blocking put to a full bounded buffer can create the same dependency. The excerpt does not say whether `dispatch-action` uses nonblocking submission, buffering, or another arrangement. It therefore establishes neither safe enqueueing nor back-pressure, the policy for slowing submission when the consumer or buffer cannot accept more work. The same limitation applies to `dispatch-error!`.

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
<figcaption>The channel transports transition values to one consumer. The consumer handles one synchronous handler body at a time; an effect launched by a handler may still finish later and out of order.</figcaption>
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

This is conceptual pseudocode, not a drop-in implementation. It omits channel creation and buffering, handler registration, termination, and payload/error policy. `take` blocks in this language-neutral sketch; it should not be read as a claim about a particular Clojure or JavaScript thread. The `ai.extract` operation is depicted synchronously. If real work runs separately, its completion must return as a message rather than mutate owner state on its own.

## What this buys you

Putting transitions through one consumer gives a useful vantage point, but only for messages that reach it. Each consumed message can be logged there, and its synchronous handler body is processed one at a time. Logging is a possible extension, not something the displayed loop already implements. One log line can describe a transition; it cannot by itself describe unreported work running elsewhere.

A handler exception thrown before the handler returns can be caught by the shown `try`/`catch` and represented as an error action. That makes failure available to the same dispatcher, but the loop does not define an error policy by itself. The error action needs a handler or terminal policy. If handling an error merely emits another error action, the flow can loop forever. If `dispatch-error!` itself throws, that exception escapes this `try`/`catch`.

A [saga](https://learn.microsoft.com/en-us/azure/architecture/patterns/saga) coordinates a sequence of local transactions and explicitly designed compensating actions for failures. Compensation is a new operation intended to counteract an earlier completed operation; it is not a database transaction rollback. It need not restore the exact prior world, and [compensation can itself fail](https://learn.microsoft.com/en-us/azure/architecture/patterns/compensating-transaction). Some effects, such as an already-sent message, may not be erasable. The excerpt shows an error-dispatch hook, not a compensation handler, transaction boundary, or idempotency policy specifying how to make repeating an operation have no additional effect. A failure in a later step could trigger compensation for an earlier database write only if the application implements that behavior with the information it needs.

## One thing the loop can't catch

A `try`/`catch` handles errors thrown while its protected call is still running. In the shown loop it can catch a synchronous exception from `evolve-flow` before that call returns.

A handler can also start work that continues independently, such as work on another thread or a fire-and-forget request. Once the handler returns, its surrounding `try`/`catch` cannot catch a later failure from that work. The operation must observe its own result through the API it uses and report success or failure to the owner as a new action if that result advances the flow.

The same rule applies to success: detached work should return its result as a message, not mutate shared state or choose the next transition directly. The consumer then decides whether the result still applies. For example, an old frame result may arrive after a pause or restart. A channel does not cancel it, supervise it through completion, or know whether it is stale. The flow needs a correlation rule to associate the result with its originating work, and a currentness rule to decide whether that work still applies. The excerpts show no such rules, so they do not guarantee stale work is rejected.

That is the whole pattern I still use. Before stopping, I should say that I did not invent it.

## This is not exacly new

Recursion, state-machine thinking, and the Redux-style single update loop all predate my implementation. I am describing the ingredients I recognized, not claiming to establish their origin or chronology.

My useful observation was that these ideas shared a shape in this project. Naming each next step and passing it through one consumer made the sequence easier for me to reason about. That does not by itself supervise detached work or guarantee that its completion is still current.

**Name the next state instead of calling it. Carry its transition-specific payload with it. Let a channel perform the dispatch recursion.**