---
title: Hegel with a GPU
date: 2026-06-17
summary: I built an adversarial reasoner, the model named it "dialectic," and it kept rescuing stuck LLMs — which is awkward, because I am a positivist who thinks Hegel is rubbish. This is how I made my peace with it.
---

I should declare my bias up front: I am a logical positivist by temperament and a
skeptic by habit. I like inference rules I can check, premises I can point at, and
conclusions that follow or don't. By that standard Hegelian dialectic has always
struck me as rubbish — a machine for turning vague disagreement into vaguer
agreement, dressed in enough vocabulary to look like it earned something. So it has
been genuinely uncomfortable to spend a year watching it *work*, on machines, in
front of me.

Here is how I got cornered.

## I set out to build an adversary, not a Hegelian

I wanted a reasoning tool. There is a line of papers on getting better answers out
of language models by making several of them argue — multiagent debate, after [Du et
al., *Improving Factuality and Reasoning in Language Models through Multiagent
Debate*](https://arxiv.org/abs/2305.14325) — and the idea is sound on its face: a
single model commits to a line and then defends it; two models with different priors
can catch what one misses. I built an MCP server in Go
for this, with a few reasoning strategies in it. The one I cared about ran a problem
through rounds of three roles:

<p class="code-label">Go — the dialectic loop, roughly</p>

```go
for round := 1; round <= cfg.MaxRounds; round++ {
    thesis     := generate(thesisProvider, problem, lastSynthesis)
    antithesis := challenge(antithesisProvider, thesis)   // a different model
    synthesis  := reconcile(synthesisProvider, thesis, antithesis)

    if synthesis.Confidence >= cfg.ConfidenceTarget {     // stop at 0.85
        break
    }
    lastSynthesis = synthesis
}
```

I did not set out to summon Hegel. In my head this was multiagent debate — an
adversarial reasoner, two models with different priors trying to catch each other
out. The Hegel came from the machine. Vibe-coding the thing, the model I was building
*with* proposed calling it **dialectic reasoning**, and then reached for the whole
Hegelian vocabulary to name the parts — `thesis`, `antithesis`, `synthesis`. I let
the names stand because, structurally, they were exactly right. But that was the
first small annoyance: I was trying to build an adversary and avoid a philosopher,
and the machine reached past the word I wanted straight for the one I didn't.

## The part I couldn't argue with

The tool did something I did not predict. When a model was *stuck* — looping on a
wrong approach, confidently restating the same dead end — proposing a few rounds of
dialectic would often shake it loose. Not always. But often enough that I couldn't
call it noise.

This offended me, so I tried to explain it away, and the explanation is where my
positivism actually started to bend.

**A language model generates forward, and that is exactly its problem.** Every token
is conditioned on all the tokens before it, so the most likely continuation of a
wrong line of reasoning is *more of the wrong line*. Spontaneous self-contradiction —
"wait, no, scrap that" — is intrinsically low-probability. The model isn't missing
the better answer; its own previous words have dug a basin, and the slope of
plausibility points inward. That is what "stuck" is.

The antithesis step is a **licensed self-negation**. It changes the conditioning and
gives the model permission — obligation, really — to emit the low-probability "this
is false because…" move it would otherwise almost never sample. Dialectic doesn't
add a rule of inference. It adds a sanctioned reversal, which is precisely the thing
that forward generation suppresses. That's the whole trick, and it has nothing to do
with whether Hegel was *right*.

## Why "rubbish" and "works" are the same sentence

Here is the reconciliation that let a positivist sleep.

My objection to dialectic was always that it isn't truth-preserving. Propositional
logic preserves truth across propositions; that's its job and its dignity. Dialectic
preserves nothing — it manufactures a tension and then a move that dissolves it.
**But a language model is not running inference over propositions.** It is running a
different inference that also deserves the name: at each step it predicts the phrase
most likely to be *accepted* as the right next one — "right" not as in true, but as
in what the broad consensus of language would expect to follow. There are no
premises and no truth values in that operation, only the next conventionally
warranted move. Dialectic is a logic of exactly that: how one concept conventionally
gives way to the next, how a claim summons its objection and the objection its
reconciliation. It is a grammar of which phrase legitimately follows which — by wide
acceptance, not by valid inference. That is a worse logic than mine for almost
everything I care about. It happens to be the *right* logic for a machine whose
whole competence is choosing the next widely-warranted phrase.

So dialectic works on LLMs **because** it is loose, not despite it. The looseness I
sneered at is a match to the medium. That sentence cost me something to write.

And notice what it does *not* commit me to. I do not have to believe Hegel
discovered the structure of reality, or that contradiction is the engine of history,
or any of it. I only have to grant that a certain *procedure* has operational value
for a certain kind of system, measured the only way I trust — empirically, by
whether the stuck model gets unstuck. That is a thoroughly positivist concession.
The metaphysics stays in the bin. The procedure earns its keep at the bench.

## But it only sometimes works — and the failures are the interesting part

If the story ended at "dialectic rescues stuck models," I'd be a convert, and I'm
not. The tool *underperforms* at least as often as it shines, and watching *how* it
fails is what actually taught me something. Three distinct failure modes, and they
are not the same shape.

**Collapse.** A real synthesis needs two strong poles in genuine tension. If either
pole is weak, there's nothing to reconcile, so the synthesis just passes the stronger
one through. Weak antithesis, and it relaunders the thesis. Weak *thesis*, and the
antithesis walks out wearing the crown. The direction depends on which side was
flimsy — and crucially, "flimsy" is not the same as "wrong." A confident, articulate,
*incorrect* thesis is a strong pole. It wins the collapse.

**Convergence.** Run enough rounds — five or more, in my experience — and even two
honest poles relax into agreement. This one took me a while to see clearly: with no
external check, the only force in the system is *mutual coherence*, so the synthesis
drifts toward the most agreeable story all the models can sign. That story is a fixed
point of **consensus, not of truth.** It's a social attractor. (The debate
literature backs this up, somewhat to my satisfaction: debate raises agreement and
*confidence* faster than it raises accuracy. Copies of a model talk themselves into
sureness.) And my stop condition quietly amplified it. I'd borrowed a sensible idea
from a different reasoning method — score each thought for confidence, and stop once
a thought scores high enough — and dropped it into the dialectic loop to halt at
`Confidence >= 0.85`. It is a perfectly good mechanism in its home: there, the score
tracks how solid an individual thought is. But transplanted into dialectic the same
number measures something else, because here confidence rises with *consensus*. So I
was stopping precisely when the models had talked each other into agreeing — reading
a social fixed point as a solved problem. Not a bad mechanism; the wrong one for this
loop, and the mismatch is invisible until you know what the score is really tracking.

**Forced negation.** This is the one I find most revealing, and it's the detail that
finally made the mechanism concrete for me. Often the weak antithesis didn't feel
weak in the ordinary way — it felt like a *red herring*. The antithesis model was
plainly trying too hard, reaching for an objection it didn't seem to hold, straining
against something. What it was straining against was its own knowledge. The protocol
ordered it to disagree; its priors wanted to *affirm* the thesis; and it resolved
that conflict by manufacturing an objection it didn't believe.

And it reaches for a red herring *specifically*, not a strong objection, for a reason
worth stating: a strong objection would have to name a real flaw, which it can't do
honestly if it sees none, and which would be easy to refute and expose the bluff. So
it retreats to the peripheral, the vague, the deniable. **Genuine disagreement goes
for the throat; manufactured disagreement clears its throat.** Once I had the ear for
it, I could hear the difference every time.

## Relaundering is worse than wasted work

It would be tolerable if these failures just burned tokens. They do something worse:
they **manufacture authority.** When the weak pole gets absorbed, the survivor
doesn't merely persist — it exits *stamped*, "survived adversarial review." A
confident wrong thesis paired with a limp, dutiful antithesis comes out the far end
credentialed by a process that never tested it. That is the precise opposite of what
I wanted the tool for. I built an adversary to *strip* unearned confidence, and in
its failure mode it *prints* it.

There is a clean Hegelian way to name the bug, and it even flatters Hegel, so let me
be fair about it. His negation is supposed to be *immanent* — the contradiction
arises from inside the thing, from the thesis's own tensions. My tool imposes
negation *externally*, by handing a model the job title "antithesis." When the content
holds no real contradiction, an externally-assigned critic has no choice but to
fabricate one. The red herring isn't a model being dumb. It's a model being honest
about having nothing, while under orders to have something.

## The dialectic that actually worked had a GPU in it

I didn't resolve any of this by thinking harder. I resolved it by accident, in a
different project — a relation-extraction model I'd been training for weeks, with a
running log of every session. That log, it turned out, was a working dialectic, and
it worked for the exact reason the tool didn't.

At one point I had a confident thesis: the model's held-out F1 was ~1%, training loss
had fallen to ~0.5, so it was **overfitting** — too little data. The fix wrote itself:
five times more data. It was articulate and it was wrong, and in my ungrounded tool
it would have sailed through, because a limp antithesis would have rubber-stamped a
confident thesis and I'd have burned two days collecting data.

What killed it instead was a number. Someone pushed back and ran the control the
first evaluation had skipped — decode the *training* split, the data the model had
actually seen:

<p class="code-label">The contradiction, stated as evidence</p>
<div class="pseudo">

```text
training loss        ≈ 0.50      # the model "fits"
held-out  F1         ≈ 1%        # ...but can't generalize   → looks like overfitting
TRAIN     F1         ≈ 4.4%      # ...and is just as bad on data it trained on
                                 #    → NOT overfitting. The thesis is refuted.
```

</div>

The model was equally bad on data it had memorized. You cannot overfit to data you
fail on. The thesis didn't fall to a better argument — no argument could have moved
it — it fell to a measurement that didn't care how confident anyone was. And the
synthesis that replaced it was sharp and *correct*: the problem was in the decode
path, not the data, and the real lesson distilled to one line that now lives in the
project's rules — **always decode the train split as a control.**

That is immanent negation. Nobody had to be *assigned* to disagree. The number
disagreed. The contradiction came from inside the thing — a loss of 0.5 cannot live
in the same world as a train F1 of 4.4% — and it could not be relaundered, because
you cannot talk a measurement into agreeing with you.

Every round of that log is separated from the last by an *action on the world*: run
the eval, decode the split, watch the GPU run out of memory. Fresh, non-negotiable
tension gets injected every round, so the dialectic never relaxes into consensus —
reality keeps resetting the distance between the poles. My MCP ran rounds of pure
argument between actions, so it relaxed. **Same dialectic. One of them touched
something that could say no.**

## What a skeptic gets to keep

So here is where I land, and it lets me keep my prejudices mostly intact, which is
the most any of us can hope for.

Ungrounded dialectic really is rubbish, more or less the way I always thought —
left to itself it spirals to the loudest coherent consensus and stamps it as
truth. I was right about that. What I was wrong about is that this makes dialectic
*useless*. Bolt a referent onto it — a measurement, a second model that genuinely
disagrees, anything the argument cannot ventriloquize — and the same loose machine
becomes a way of dragging a stuck mind toward something real. Grounding doesn't just
strengthen the weak pole; it **exposes the fake one**, because a red herring cannot
survive being made to run itself. Manufactured dissent comes back empty. Genuine
dissent comes back with a number.

<figure class="diagram">
<svg viewBox="0 0 720 300" role="img" aria-label="Two attractors: ungrounded dialectic converges to consensus; grounded dialectic is pulled toward truth" xmlns="http://www.w3.org/2000/svg" font-family="Manrope, sans-serif">
<defs><marker id="ad" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#5a6b73"/></marker></defs>
<line x1="360" y1="24" x2="360" y2="282" stroke="#1f2a2f" stroke-width="1" stroke-dasharray="3 4" opacity="0.35"/>
<text x="180" y="22" text-anchor="middle" fill="#1f2a2f" font-size="14" font-weight="600">Ungrounded</text>
<text x="540" y="22" text-anchor="middle" fill="#1f2a2f" font-size="14" font-weight="600">Grounded</text>
<g fill="#ffffff" stroke="#1f2a2f" stroke-width="1.5"><rect x="55" y="54" width="96" height="30" rx="8"/><rect x="205" y="54" width="112" height="30" rx="8"/></g>
<g fill="#1f2a2f" font-family="ui-monospace, monospace" font-size="13" text-anchor="middle"><text x="103" y="74">thesis</text><text x="261" y="74">antithesis</text></g>
<g stroke="#5a6b73" stroke-width="1.5" fill="none" marker-end="url(#ad)"><path d="M110,86 Q160,150 176,166"/><path d="M255,86 Q205,150 188,166"/></g>
<path d="M206,178 A26 26 0 1 1 205,177" stroke="#5a6b73" stroke-width="1.3" fill="none" marker-end="url(#ad)"/>
<circle cx="180" cy="180" r="6" fill="#1f2a2f"/>
<text x="180" y="210" text-anchor="middle" fill="#1f2a2f" font-size="13">consensus</text>
<text x="180" y="246" text-anchor="middle" fill="#5a6b73" font-size="12">rounds spiral inward to agreement</text>
<g fill="#ffffff" stroke="#1f2a2f" stroke-width="1.5"><rect x="415" y="54" width="96" height="30" rx="8"/><rect x="560" y="54" width="112" height="30" rx="8"/></g>
<g fill="#1f2a2f" font-family="ui-monospace, monospace" font-size="13" text-anchor="middle"><text x="463" y="74">thesis</text><text x="616" y="74">antithesis</text></g>
<g stroke="#5a6b73" stroke-width="1.5" fill="none" marker-end="url(#ad)"><path d="M470,86 Q510,116 506,134"/><path d="M612,86 Q548,116 518,134"/></g>
<circle cx="505" cy="146" r="5" fill="#5a6b73"/>
<text x="498" y="139" text-anchor="end" fill="#5a6b73" font-size="11">synthesis</text>
<line x1="505" y1="151" x2="505" y2="242" stroke="#5a6b73" stroke-width="1.5" marker-end="url(#ad)"/>
<circle cx="505" cy="250" r="6" fill="#0a556e"/>
<text x="505" y="276" text-anchor="middle" fill="#0a556e" font-size="13">truth</text>
<rect x="560" y="178" width="138" height="40" rx="8" fill="#eef3f5" stroke="#0a556e" stroke-width="1.3"/>
<text x="629" y="195" text-anchor="middle" fill="#0a556e" font-size="11">a referent</text>
<text x="629" y="210" text-anchor="middle" fill="#0a556e" font-size="11">that can say no</text>
<line x1="558" y1="198" x2="513" y2="198" stroke="#0a556e" stroke-width="1.5" stroke-dasharray="4 3" marker-end="url(#ad)"/>
</svg>
<figcaption>Two attractors. Left: with nothing outside the argument, the rounds spiral into a fixed point of <em>consensus</em>. Right: a referent the argument cannot ventriloquize keeps pulling the synthesis toward <em>truth</em>.</figcaption>
</figure>

And that, finally, is the move that lets a positivist accept Hegel works on machines
without converting: the part of dialectic that works is the part that is secretly
mine. **Negation only has teeth when it answers to something outside the
conversation** — which is just verificationism wearing a toga. Dialectic among minds
converges to agreement. Dialectic among minds *and a world* converges to truth. The
whole difference is whether each round is forced to touch something that can say no.

Hegel without a referent is rhetoric reaching its fixed point. Hegel with a GPU is
just science with extra steps — and I can live with science.

*P.S. — None of the above is knowledge, and it isn't belief either. It would be a
mistake to believe something you don't know. I merely suspect it.*
