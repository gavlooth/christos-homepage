---
title: Hegel with a GPU
date: 2026-06-17
summary: I built an adversarial reasoner, the model named it "dialectic," and it kept rescuing stuck LLMs — which is awkward, because I am a positivist who thinks Hegel is rubbish. This is how I made my peace with it.
---

I am a logical positivist by temperament and a skeptic by habit. I want rules I
can check, premises I can identify, and conclusions that either follow or do not.
By that standard, Hegelian dialectic has always looked like rhetoric: a way to turn
vague disagreement into vaguer agreement.

Which made it awkward to watch a version of it work on language models for a year.

Here is how I got cornered.

## I set out to build an adversary, not a Hegelian

I wanted an adversarial reasoning tool. Multi-agent debate has a simple premise: one
model tends to defend the line it has begun; another model can expose what it misses.
That is the intuition behind [Du et al.'s multi-agent debate
paper](https://arxiv.org/abs/2305.14325). I built a Go MCP server with several
reasoning strategies. The important one ran three roles in a loop:

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

This was meant to be multi-agent debate, not Hegel. The model helping me build it
suggested the name **dialectic reasoning** and supplied `thesis`, `antithesis`, and
`synthesis`. I kept the names because they described the structure exactly. That was
my first annoyance: I built an adversary and accidentally inherited a philosopher.

## The part I couldn't argue with

The tool did something I did not expect. When a model was stuck — repeating a wrong
approach with growing confidence — a few rounds often dislodged it. Not always, but
far too often to dismiss as noise.

**Language models generate forward, and that is the trap.** Each token conditions
the next, so the likely continuation of a bad line is more of the same. “Wait, no”
is a low-probability move once the model has committed itself. Its earlier words
dig a basin of plausibility; being stuck means sliding down that slope.

The antithesis is **licensed self-negation**. It changes the context and requires the
otherwise unlikely move: “this is false because…”. It adds no rule of inference. It
adds the reversal that forward generation suppresses. That is enough to explain the
effect. Hegel need not be right about anything else.

## Why "rubbish" and "works" are the same sentence

Here is the reconciliation that let a positivist sleep.

My objection was always that dialectic is not truth-preserving. Propositional logic
keeps truth if the premises are true; dialectic stages a tension and resolves it. But
an LLM is not deducing from propositions. It predicts what language will accept as
the next move: not what is true, but what sounds warranted.

Dialectic is a grammar for those moves. A claim invites an objection; an objection
invites a reconciliation. It tells us what conventionally follows, not what validly
follows. That is poor logic for most of what I care about. It is well matched to a
machine whose competence is choosing the next widely warranted phrase.

Dialectic works on LLMs **because** it is loose, not despite that looseness. The
defect I disliked matches the medium.

This concedes no metaphysics. I need not believe that contradiction drives history
or that Hegel discovered reality’s structure. I need only observe that a procedure
helps a particular system, and test that claim. The metaphysics stays in the bin;
the procedure earns its place at the bench.

## But it only sometimes works — and the failures are the interesting part

The tool fails at least as often as it helps. Those failures matter more than the
successes. They come in three forms.

**Collapse.** A synthesis needs two strong positions in real tension. If either is
weak, the “synthesis” simply passes through the stronger one. A weak antithesis
relaunders the thesis; a weak thesis crowns the antithesis. Strong is not the same as
right: an articulate, confident error is a strong pole and usually wins.

**Convergence.** After enough rounds — about five in my use — even honest positions
settle into agreement. Without an external check, mutual coherence is the only force
in the system. The result is a fixed point of **consensus, not truth**. Debate can
raise agreement and confidence faster than accuracy; copies of a model can talk
themselves into certainty.

My stop condition amplified this. I stopped at `Confidence >= 0.85`, borrowing a
reasonable rule from a method where confidence measures the solidity of one thought.
Here it tracked consensus. I had made the loop stop just as the models agreed, then
mistook that social fixed point for a solution. The mechanism was sound; its meaning
changed with the system around it.

**Forced negation.** The weakest antitheses often sound like red herrings. The model
has been ordered to disagree while its priors favor the thesis, so it manufactures an
objection it does not endorse. It reaches for the peripheral and deniable: a serious
objection would name a real flaw, if one existed, and would be easy to test.

**Genuine disagreement goes for the throat; manufactured disagreement clears its
throat.** Once I learned that sound, I heard it everywhere.

## Relaundering is worse than wasted work

Wasted tokens would be tolerable. The worse failure is **manufactured authority**.
When a weak pole is absorbed, the survivor does not merely persist; it appears to
have survived adversarial review. A confident error paired with a dutiful, limp
antithesis exits credentialed by a process that never tested it. I built an
adversary to strip unearned confidence. Its failure mode prints it.

Hegel gives this bug a useful name. Negation should be *immanent*: the contradiction
should come out of the thesis’s own tensions, not be assigned from outside as a job
title. My tool imposed negation externally by giving a model the role of antithesis.
If the content contains no contradiction, the critic must invent one. The red herring
is not stupidity; it is a model with nothing to say being required to say something.

## The dialectic that actually worked had a GPU in it

I found the correction in a different project: a relation-extraction model trained
over weeks, with a running log of each session. The log was a working dialectic, for
the reason my tool was not.

The apparent diagnosis was straightforward: held-out F1 was ~1% while training loss
was ~0.5, so the model must be **overfitting**. The apparent fix was more data. It
was a crisp, confident, wrong thesis — precisely the kind an ungrounded loop would
likely ratify.

It fell to a missing control: decode the *training* split, the data the model had
actually seen.

<p class="code-label">The contradiction, stated as evidence</p>
<div class="pseudo">

```text
training loss        ≈ 0.50      # the model "fits"
held-out  F1         ≈ 1%        # ...but can't generalize   → looks like overfitting
TRAIN     F1         ≈ 4.4%      # ...and is just as bad on data it trained on
                                 #    → NOT overfitting. The thesis is refuted.
```

</div>

The model was equally bad on its training data. You cannot call that overfitting.
The thesis fell not to a better argument but to a measurement indifferent to anyone’s
confidence. The fault was in decoding, not the data. The resulting rule is simple:
**always decode the train split as a control.**

That is immanent negation. Nobody was assigned to disagree; the number did. A loss
of 0.5 and a train F1 of 4.4% cannot describe the same successful fit. No amount of
conversation can relaunder a measurement.

Each log entry followed an *action on the world*: run an evaluation, decode a split,
hit an out-of-memory error. Every action supplied fresh, non-negotiable tension, so
the process could not relax into consensus. My MCP loop ran argument between actions
and therefore relaxed. **Same dialectic; only one touched something that could say
no.**

## What a skeptic gets to keep

This is where I land.

Ungrounded dialectic is mostly what I thought: it tends toward the loudest coherent
consensus and stamps it as truth. I was wrong only to call it useless. Add a referent
— a measurement, an execution, a genuinely independent model, anything the argument
cannot ventriloquize — and the same loose machinery can move a stuck system toward
something real. Grounding does more than strengthen a weak pole: it **exposes the
fake one**. Manufactured dissent returns empty; genuine dissent returns with
evidence.

<figure class="diagram">
<svg viewBox="0 0 720 300" role="img" aria-labelledby="dialectic-title dialectic-desc" xmlns="http://www.w3.org/2000/svg" font-family="Manrope, sans-serif">
<title id="dialectic-title">Argument alone versus argument tested against evidence</title>
<desc id="dialectic-desc">Without external evidence, thesis and antithesis settle into consensus. With a test or measurement that can contradict them, each candidate is constrained by evidence and revised.</desc>
<defs><marker id="ad" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#5a6b73"/></marker><marker id="ae" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#0a556e"/></marker></defs>
<rect x="18" y="20" width="330" height="260" rx="12" fill="#f7f4ef" stroke="#d9d2c6"/>
<rect x="372" y="20" width="330" height="260" rx="12" fill="#f3f8f9" stroke="#b9d4dc"/>
<text x="42" y="50" fill="#1f2a2f" font-size="15" font-weight="600">Argument only</text>
<text x="42" y="70" fill="#5a6b73" font-size="12">coherence is the only constraint</text>
<text x="396" y="50" fill="#0a556e" font-size="15" font-weight="600">Argument + evidence</text>
<text x="396" y="70" fill="#5a6b73" font-size="12">a claim must survive a test</text>
<g fill="#ffffff" stroke="#1f2a2f" stroke-width="1.5"><rect x="53" y="96" width="105" height="36" rx="8"/><rect x="207" y="96" width="105" height="36" rx="8"/></g>
<g fill="#1f2a2f" font-family="ui-monospace, monospace" font-size="12" text-anchor="middle"><text x="105" y="119">thesis</text><text x="259" y="119">critic</text></g>
<g stroke="#5a6b73" stroke-width="1.5" fill="none" marker-end="url(#ad)"><path d="M111,134 Q148,164 165,182"/><path d="M253,134 Q216,164 196,182"/></g>
<rect x="111" y="183" width="135" height="42" rx="9" fill="#ffffff" stroke="#1f2a2f" stroke-width="1.5"/>
<text x="178" y="209" fill="#1f2a2f" font-size="13" text-anchor="middle">consensus</text>
<path d="M246,204 C288,204 288,144 260,144" stroke="#5a6b73" stroke-width="1.4" fill="none" stroke-dasharray="4 3" marker-end="url(#ad)"/>
<text x="178" y="252" fill="#5a6b73" font-size="12" text-anchor="middle">the loop can agree with itself</text>
<g fill="#ffffff" stroke="#1f2a2f" stroke-width="1.5"><rect x="407" y="96" width="100" height="36" rx="8"/><rect x="565" y="96" width="100" height="36" rx="8"/></g>
<g fill="#1f2a2f" font-family="ui-monospace, monospace" font-size="12" text-anchor="middle"><text x="457" y="119">thesis</text><text x="615" y="119">critic</text></g>
<g stroke="#5a6b73" stroke-width="1.5" fill="none" marker-end="url(#ad)"><path d="M463,134 Q505,157 518,170"/><path d="M609,134 Q565,157 544,170"/></g>
<rect x="486" y="171" width="90" height="34" rx="8" fill="#ffffff" stroke="#1f2a2f" stroke-width="1.5"/>
<text x="531" y="193" fill="#1f2a2f" font-size="12" text-anchor="middle">candidate</text>
<rect x="585" y="187" width="96" height="44" rx="8" fill="#e4f1f4" stroke="#0a556e" stroke-width="1.5"/>
<text x="633" y="206" fill="#0a556e" font-size="11" text-anchor="middle">test / measure</text><text x="633" y="220" fill="#0a556e" font-size="11" text-anchor="middle">can say no</text>
<line x1="578" y1="205" x2="583" y2="205" stroke="#0a556e" stroke-width="1.6" marker-end="url(#ae)"/>
<path d="M531,207 C531,242 470,242 457,138" stroke="#0a556e" stroke-width="1.5" fill="none" stroke-dasharray="4 3" marker-end="url(#ae)"/>
<text x="531" y="262" fill="#0a556e" font-size="12" text-anchor="middle">evidence forces revision</text>
</svg>
<figcaption>Argument alone can settle into agreement. Add a test, measurement, or execution the models cannot ventriloquize, and every candidate remains answerable to evidence.</figcaption>
</figure>

That lets a positivist accept that Hegelian machinery can help without converting.
**Negation has teeth only when it answers to something outside the conversation.**
Dialectic among minds converges on agreement. Dialectic among minds and a world can
converge on truth. The difference is whether every round must touch something able to
say no.

Hegel without a referent is rhetoric at its fixed point. Hegel with a GPU is science
with extra steps. I can live with that.
