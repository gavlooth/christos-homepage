---
title: Adversarial reasoning
date: 2026-06-17
summary: I built an adversarial reasoner. The model named it dialectic. It kept rescuing stuck LLMs, which is awkward, because I am a positivist who thinks Hegel is rubbish.
---

I am a logical positivist by temperament and a skeptic by habit. A logical positivist wants claims tied to checks and identifiable premises. A premise is a statement that an argument starts from.

I want rules I can check and premises I can identify. I also want conclusions that either follow or do not. A conclusion follows when the rules carry the premises to it.

By that standard, Hegelian dialectic has always looked like rhetoric. Dialectic stages a disagreement, then tries to resolve its tension. To me, that turns vague disagreement into vaguer agreement.

That made it awkward to watch a version of dialectic help language models for a year. A large language model, or LLM, predicts likely continuations of text.

Here is how I got cornered.

## I set out to build an adversary, not a Hegelian

This section shows how my adversarial tool acquired Hegelian names.

I wanted an adversarial reasoning tool. Adversarial reasoning tests a proposed answer by asking another reasoner to attack it.

Multi-agent debate is a method in which several models examine the same problem. Its premise is simple. One model tends to defend the line it has begun. Another model can expose what the first one misses.

That intuition drives [Du et al.'s multi-agent debate
paper](https://arxiv.org/abs/2305.14325).

I built an MCP server in the Go programming language. An MCP server exposes tools that a model can call. It used several reasoning strategies.

The important strategy ran three roles in a loop. A **thesis** was the proposed answer. An **antithesis** was a different model's challenge to that answer. A **synthesis** reconciled the useful parts of both positions.

The loop also tracked **confidence**. Confidence was a numerical estimate of how strongly the synthesis supported its answer. The loop stopped when that score reached 0.85.

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

I meant this to be multi-agent debate, not Hegel. The model helping me build it suggested the name **dialectic reasoning**. It also supplied `thesis`, `antithesis`, and `synthesis`.

I kept those names because they described the structure exactly. That was my first annoyance. I built an adversary and accidentally inherited a philosopher.

## The part I couldn't argue with

This section explains why the loop could free a model from a bad approach.

The tool did something I did not expect. Sometimes, a model repeated a wrong approach with growing confidence. A few rounds often dislodged it.

This did not always happen. However, it happened far too often for me to dismiss it as noise.

**Language models generate forward, and that is the trap.** A token is a small unit of generated text. Each token changes which token is likely to come next.

A bad line therefore makes more of the same line likely. Once the model has committed itself, “Wait, no” becomes unlikely.

Its earlier words dig a basin of plausibility. Being stuck then resembles sliding down that basin's slope.

The basin is only a physical picture. Nothing literally pulls the model downhill. More precisely, earlier text changes the probabilities of later text.

The antithesis provides **licensed self-negation**. This means the prompt permits the model to reject the line already in context. It also requires the model to explain why that line is false.

This move changes the context. It does not add an inference rule. An inference rule is a formal step for deriving a conclusion.

Instead, the move adds the reversal that forward generation suppresses. That reversal is enough to explain the effect. Hegel need not be right about anything else.

## Why "rubbish" and "works" are the same sentence

This section explains how I can reject Hegel's logic while keeping this procedure.

Here is the reconciliation that let a positivist sleep.

My objection was always that dialectic is not truth-preserving. A method is truth-preserving when true starting statements guarantee a true conclusion.

Propositional logic reasons with statements that are either true or false. If its premises are true, its valid rules preserve truth.

An LLM is not deducing a conclusion from those statements. It predicts which language people will accept as the next move. It predicts what sounds warranted, not what is true.

Dialectic supplies a grammar for those moves. Here, a grammar is a pattern for what usually comes next.

A claim invites an objection. That objection then invites a reconciliation.

This pattern tells us what conventionally follows. It does not tell us what validly follows.

That makes dialectic poor logic for most things I care about. Yet it suits a machine that chooses the next widely warranted phrase.

Dialectic works on LLMs **because** it is loose, not despite that looseness. The defect I disliked matches the medium.

This conclusion concedes no metaphysics. Metaphysics makes claims about the fundamental structure of reality.

I need not believe that contradiction drives history. I also need not believe that Hegel discovered reality's structure.

I need only observe that a procedure helps a particular system. Then I can test that claim.

The metaphysics stays in the bin. The procedure earns its place at the bench.

## But it only sometimes works — and the failures are the interesting part

This section explains why the loop fails, even when its debate sounds convincing.

The tool fails at least as often as it helps. Those failures matter more than the successes. They come in three forms.

**Collapse.** A synthesis needs two strong positions that genuinely conflict.

If either position is weak, the synthesis simply passes through the stronger one. A weak antithesis relaunders the thesis. In other words, it makes the thesis look newly tested without really testing it.

A weak thesis instead crowns the antithesis. However, strong does not mean right. An articulate, confident error is a strong position and usually wins.

**Convergence.** Convergence occurs when the positions gradually settle into agreement.

After enough rounds, even honest positions converge. In my use, this happened after about five rounds.

Without an external check, mutual coherence is the system's only force. The result becomes a fixed point of **consensus, not truth**. A fixed point is a stable state that the loop no longer changes.

Debate can raise agreement and confidence faster than accuracy. Copies of one model can therefore talk themselves into certainty.

My stop condition amplified this problem. Here, confidence still means the score estimating support for the synthesis.

I stopped at `Confidence >= 0.85`. I borrowed that reasonable rule from another method. There, confidence measured the solidity of one thought.

In this loop, the same score tracked consensus. I stopped just as the models agreed. Then I mistook that social fixed point for a solution.

The mechanism was sound. Its meaning changed with the surrounding system.

**Forced negation.** Forced negation makes a model disagree because its assigned role requires disagreement.

The weakest antitheses often sound like red herrings. A red herring is a distracting point that avoids the real issue.

The model has been ordered to disagree. Yet its prior expectations favor the thesis. It therefore manufactures an objection it does not endorse.

The model reaches for peripheral and deniable points. A serious objection would identify a real flaw, if one existed. That flaw would also be easy to test.

**Genuine disagreement goes for the throat; manufactured disagreement clears its
throat.** Once I learned that sound, I heard it everywhere.

## Relaundering is worse than wasted work

This section shows how a failed debate can make an error look more authoritative.

Wasted tokens would be tolerable. The worse failure is **manufactured authority**. This means the process gives credibility to a claim it never truly tested.

When the loop absorbs a weak position, the surviving position does not merely persist. It now appears to have survived adversarial review.

A confident error can face a dutiful, limp antithesis. It then leaves with credentials from a process that never tested it.

I built an adversary to strip unearned confidence. Its failure mode prints that confidence instead.

Hegel gives this bug a useful name. Negation should be *immanent*. Immanent negation comes from tensions inside the thesis itself.

Negation should not arrive from outside as an assigned job title. My tool imposed it externally by assigning a model the antithesis role.

Sometimes the thesis contains no contradiction. The critic must then invent one. That invention produces the red herring.

The red herring does not show stupidity. It shows a model with nothing to say. Its role still requires it to say something.

## The dialectic that actually worked had a GPU in it

This section shows why evidence corrected a diagnosis that debate alone might have preserved.

I found the correction in a different project. I trained a relation-extraction model over several weeks. Such a model identifies stated relationships in text.

I also kept a running log of each session. That log became a working dialectic for a reason my tool did not.

The apparent diagnosis was straightforward. Held-out F1 was about 1%, while training loss was about 0.5.

F1 is the score I used here to measure extraction quality. Held-out data is data excluded from training. Training loss measures how poorly the model fits during training.

Those results made **overfitting** look like the cause. Overfitting occurs when a model learns its training data but fails on unseen data.

The apparent fix was more data. This was a crisp, confident, wrong thesis. An ungrounded loop would likely have ratified exactly this kind of thesis.

The thesis fell because one control was missing. A control is a comparison that checks the diagnosis against another condition.

The missing control was to decode the *training* split. Decoding turns the model's outputs into predicted relations. The training split contained data the model had actually seen.

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

A better argument did not defeat the thesis. A measurement defeated it, and that measurement was indifferent to anyone's confidence.

The fault was in decoding, not the data. The resulting rule is simple: **always decode the train split as a control.**

That is immanent negation. Nobody received an assignment to disagree. The number did the disagreeing.

A loss of 0.5 and a train F1 of 4.4% cannot describe the same successful fit. No amount of conversation can relaunder that measurement.

Each log entry followed an *action on the world*. I might run an evaluation or decode a split. I might hit an out-of-memory error.

Every action supplied fresh tension that the argument could not negotiate away. The process therefore could not relax into consensus.

My MCP loop placed arguments between actions. It therefore relaxed toward agreement. **Same dialectic; only one touched something that could say
no.**

## What a skeptic gets to keep

This section states the limited conclusion that I, as a skeptic, can accept.

This is where I land.

Ungrounded dialectic is mostly what I thought. It tends toward the loudest coherent consensus. Then it stamps that consensus as truth.

I was wrong only to call dialectic useless.

Add a referent, and the same loose machinery can move a stuck system toward something real. A referent is an external thing that the argument cannot control.

The referent might be a measurement or an execution. It might instead be a genuinely independent model. In every case, the argument cannot make it speak whatever answer the argument wants.

This connection to an external check is **grounding**. Grounding does more than strengthen a weak position. It **exposes the fake one**.

Manufactured dissent returns empty. Genuine dissent returns with evidence.

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

The diagram is a structural picture, not proof. More precisely, external evidence can reject a candidate that the debating models accept.

That lets a positivist accept Hegelian machinery without converting. **Negation has teeth only when it answers to something outside the conversation.**

Dialectic among minds converges on agreement. Dialectic among minds and a world can converge on truth. The difference lies in what every round must do.

Each round must touch something able to say no.

Hegel without a referent is rhetoric at its fixed point. Hegel with a GPU is science with extra steps. I can live with that.
