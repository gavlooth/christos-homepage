[Skip to the guide](#guide)

<!-- refine:coverage {"version":1,"sourceUnitCount":439,"issueCount":41,"extracted":44,"source_fallback":0,"unresolved":395} -->

[Christos Chatzifountas](/)

[About](/#about)
[Work](/#work)
[Notebook](/notes/)
[Contact](/#contact)

Reader-first technical explainer

# Δ-Nets

A slower walk through an interaction-based proposal for optimal parallel λ-reduction—diagrams first, notation second.

Based on Daniel Augusto Rizzi Salvadori’s paper
arXiv:2505.20314v4
[Read the formal source ↗](https://arxiv.org/html/2505.20314v4)

Reading size

A
A+
A++

Appearance

☾
Dark mode

In this guide

- [00 How to read this](#orientation)

- [01 The problem to solve](#problem)

- [02 From terms to interactions](#shift)

- [03 The three-agent core](#agents)

- [04 When agents meet](#meetings)

- [05 Encoding a λ-term](#compile)

<!-- refine:issue {"id":"n0000562","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: extract-0001-flat-01 timed out after 90s","sourceUnitIds":["u000001","u000002","u000003","u000004","u000005","u000006","u000007","u000008","u000009","u000010","u000011","u000012","u000013","u000014","u000015","u000016","u000017","u000018"],"annotations":["repair_parsing_error"]} -->

- [05a Trace a λ-term](#lambda-trace)

- [06 Reduction discipline](#discipline)

- [07 What the proposal claims](#guarantees)

- [08 Glossary & source](#glossary)

Scope. This guide rearranges the paper’s argument for learning and uses original diagrams. The paper remains the authority for definitions and proofs.

## Read this before the notation

Δ-Nets is a proposed graph-rewriting model. Instead of walking a syntax tree, you turn a program into a graph of tiny nodes and wires, then repeatedly replace small matching pieces of that graph. The aim is optimal parallel reduction: do not spend effort on work that will later be thrown away, and do each necessary reduction once even when an expression is used in several places.

### The core idea

Build the program as a net of very small agents. Let local pairs interact on their own. Put sharing in the graph itself, not in a side table of copies.

### The important caveat

“Optimal” and the confluence guarantees here are the paper’s claims, argued in the linked source. This guide teaches the design. The definitions and proofs stay with the paper.

### Six ideas you need before Chapter 1

#### λ-term

A tiny functional program. λx.t is a function with parameter x and body t. t u means “apply t to u.”

#### Bound vs. free

<!-- refine:issue {"id":"n0000574","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: extract-0001-flat-02 exited 1: Working...\nDeadline exceeded","sourceUnitIds":["u000019","u000020","u000021","u000022","u000023","u000024","u000025","u000026","u000027","u000028","u000029","u000030","u000031","u000032","u000033"],"annotations":["repair_parsing_error"]} -->

An occurrence of x is bound when a surrounding λx owns it. It is free when no surrounding abstraction does—like a name that still comes from outside the term.

#### Levels & Δ

Levels track nested abstractions. Each level shift adds a cost (a "delta") when a variable travels through a lambda. This is how we keep track of scopes without global lookups.

01 Motivation

## The problem is wasted work.

Ordinary λ-calculus is wonderfully compact. The familiar story—“replace a variable with an argument”—hides a cost question: what should happen when the variable is unused, or when it appears many times?

03 Mechanics

## The anatomy of a connection

In interaction nets, we model λ-terms as wiring. The λ-node has a binding port (for the parameter) and a body port (for the expression). The logic depends on how variables are distributed.

Δ

### The "Why" of Deltas

Deltas are not just numbers; they are the cost of crossing a scope. When a variable moves out of one lambda and into another, it gains depth. Deltas ensure that the interaction net "knows" where its variables live without ever scanning the code.

### How connections resolve

When an application node (the @) meets a λ-abstraction, they interact. The λ-node's binding port determines if it needs to replicate the variable (using a Replicator node) or erase it (if it doesn't appear in the body).

<!-- refine:issue {"id":"n0000585","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: extract-0001-flat-03 exited 1: Working...\nDeadline exceeded","sourceUnitIds":["u000034","u000035","u000036","u000037","u000038","u000039","u000040","u000041","u000042","u000043","u000044","u000045","u000046","u000047"],"annotations":["repair_parsing_error"]} -->

#### Redex and reduction

A redex is a place you can simplify right now—here, a function already sitting next to its argument. A reduction is one such step.

#### Normal form

A term or net is in normal form when nothing left can fire. Normalizing means some sequence of steps gets you there.

The substitution view

(λx. t) u → t[x := u]

<!-- refine:issue {"id":"n0000062","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Model node had no text.","sourceUnitIds":["u000053"],"annotations":["parsing_error"]} -->

That one sentence hides two very different edge cases. They are where the paper begins.

Erasure

### Work that gets discarded

If t never mentions x, the argument u vanishes. Any work you already did inside u was wasted.

Sharing

### Work that gets duplicated

If x occurs more than once, naive substitution copies u. If u still contains redexes, you may redo the same necessary work in every copy.

### 1.2 The four familiar fragments of the λ-calculus

The paper frames the issue with a simple grid of variable-use rules. A bound variable is an occurrence owned by a surrounding λ—the x in λx.x, for example. Start from the linear calculus, where every bound variable appears exactly once. Then allow omission, repetition, or both.

#### λL — linear

<!-- refine:issue {"id":"n0000596","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: extract-0001-flat-04 exited 1: Working...\nDeadline exceeded","sourceUnitIds":["u000048","u000049","u000050","u000051","u000052","u000053","u000054","u000055","u000056","u000057","u000058","u000059","u000060","u000061","u000062","u000063"],"annotations":["repair_parsing_error"]} -->

Each bound variable appears exactly once.

→

#### λA — affine

It appears once, or not at all. Erasure is allowed.

#### λI — relevant

It appears at least once. Sharing is allowed.

↘

#### λK — full

Any number of appearances. Both erasure and sharing are allowed.

The paper names ΔL, ΔA, ΔI, and ΔK as corresponding Δ-Net subsystems.

### 1.3 Why choosing a clever order is not enough

A reduction order says which redex to simplify next. For erasure, normal order—outermost application before its argument—can avoid reducing something a function is about to throw away. Sharing is harder. The paper follows Lévy: some shared terms have no ordinary sequential order that avoids every duplicated reduction.

↯

### The design target

Put sharing in the graph. Reduce a shared subgraph once, then let every use see the result.

02 Model shift

## Stop treating a program as a tree.

<!-- refine:issue {"id":"n0000610","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: extract-0001-flat-05 timed out after 90s","sourceUnitIds":["u000064","u000065","u000066","u000067","u000068","u000069","u000070","u000071","u000072","u000073","u000074","u000075","u000076","u000077","u000078","u000079","u000080"],"annotations":["repair_parsing_error"]} -->

The paper leaves the sequential substitution machine behind and moves to an interaction system: a graph whose tiny local rewrites can happen independently. First, pin down what “local” and “independent” mean here.

### 2.1 Graphs make sharing visible

A syntax tree treats every occurrence as its own copy. A graph can let several uses point at one shared subgraph—a connected piece of the larger graph. That is the essential move: compute the shared piece once, then reuse it.

Textual substitution

flowchart TB
u1[use] --> a1[argument]
u1 --> w1[work]
u2[use] --> a2[argument]
u2 --> w2[work]

<!-- refine:issue {"id":"n0000098","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Model node had no text.","sourceUnitIds":["u000085"],"annotations":["parsing_error"]} -->

Graph representation

flowchart TB
u3[use] --> share[share]
u4[use] --> share
share --> arg[one argument]

<!-- refine:issue {"id":"n0000100","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Model node had no text.","sourceUnitIds":["u000087"],"annotations":["parsing_error"]} -->

Why a net at all? A graph can keep one identity for many uses. Δ-Nets is one local way to manage that identity while the graph rewrites.

### 2.2 Interaction systems, in one minute

An interaction system has agents and interaction rules. An agent is a small node with sockets called ports. One socket is special—the principal port—and that is what can start a rewrite. The rest are auxiliary ports; they carry the surrounding wiring through the rewrite.

When two agents meet principal-to-principal, they form an active pair. A rule rewrites that pattern by reconnecting only the wires attached right there. The pair and those nearby wires are the rule’s entire input.

01

### Find an active pair

Only a principal-to-principal wire counts. Each local decision stays sharply bounded.

<!-- refine:issue {"id":"n0000623","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: extract-0001-flat-06 exited 1: Working...\nDeadline exceeded","sourceUnitIds":["u000081","u000082","u000083","u000084","u000085","u000086","u000087","u000088","u000089","u000090","u000091","u000092","u000093","u000094"],"annotations":["repair_parsing_error"]} -->

02

### Apply its local rule

The pair either disappears or passes through the other, reconnecting only nearby wires. That single application is one interaction step.

03

### Do independent work together

Each agent has one principal port, so two distinct active pairs never share an agent. They can fire at the same time and pick their local rules independently.

### 2.3 “Perfect confluence” is the parallelism enabler

Confluence asks whether different valid reduction choices can disagree. The one-step diamond property is a strong “no”: if a net N has two possible single steps, either choice leads to a net that meets the other after exactly one more interaction.

The one-step diamond

flowchart TB
N((N))
N1((N₁))
N2((N₂))
M((M))
N -->|one interaction| N1
N -->|one interaction| N2
N1 -->|one interaction| M
N2 -->|one interaction| M

How to read the diamond. Starting at N, choose either available step. The paths meet at M. Every arrow shows exactly one local interaction.

The paper calls this perfect confluence. Each active pair owns the only principal port of each of its two agents, so distinct active pairs use distinct agents. Their rewrites commute: left-then-right and right-then-left leave the same nearby wiring.

◇

### Agreement and termination are separate questions

The diamond says competing local steps agree. Termination is separate: some nets can reduce forever. The paper’s claim is narrower: when a core interaction order normalizes, every normalizing order reaches the same result in the same number of interactions.

<!-- refine:issue {"id":"n0000626","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: extract-0002-flat-01 exited 1: Working...\nDeadline exceeded","sourceUnitIds":["u000097","u000098","u000099","u000100","u000101","u000102","u000103","u000104","u000105","u000106","u000107","u000108","u000109"],"annotations":["repair_parsing_error"]} -->

### 2.4 What earlier optimal-reduction nets struggled with

Earlier interaction-net approaches tracked sharing scopes—regions governed by one duplication context, the way a λ governs its bound uses. They marked those regions with indexed fans plus extra delimiter agents (brackets, croissants, and kin). The critique is practical as much as theoretical: delimiters pile up, and their interactions can outnumber the useful fan work. Some systems also let indices grow without bound.

!

### The proposed simplification

Δ-Nets folds that bookkeeping into one variable-arity agent—the replicator—with a level and a per-port delta. One structure holds the sharing context.

03 Core vocabulary

## Three agents carry the whole core.

A Δ-Net is built from three agents: fan, eraser, and replicator. Think of each as a tiny component. The principal port is the socket that can start a rewrite. The auxiliary ports carry the surrounding wiring through that rewrite.

Fan · 2 auxiliary ports

flowchart TB
Fp["principal"]
F@{ shape: triangle, label: "F" }
Fa0@{ shape: rect, label: "1st aux" }
Fa1@{ shape: rect, label: "2nd aux" }
Fp -->|principal| F
F --- Fa0
F --- Fa1

Eraser · no auxiliary ports

flowchart TB
E@{ shape: stadium, label: "E" }

Replicator · any number of auxiliary ports

<!-- refine:issue {"id":"n0000627","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: extract-0002-flat-02 timed out after 90s","sourceUnitIds":["u000110","u000111","u000112","u000113","u000114","u000115","u000116","u000117","u000118","u000119","u000120","u000121","u000122"],"annotations":["repair_parsing_error"]} -->

flowchart TB
Rp["principal"]
R@{ shape: trapezoid, label: "R" }
Rd0@{ shape: rect, label: "aux d₀" }
Rd1@{ shape: rect, label: "aux d₁" }
Rd2@{ shape: rect, label: "aux d₂" }
Rdn@{ shape: rect, label: "aux …" }
Rp -->|principal| R
R --- Rd0
R --- Rd1
R --- Rd2
R --- Rdn

Diagram key. Application and function fans are triangles: the principal port is fixed at the top apex and the two auxiliary wires leave fixed, symmetric positions along the bottom edge. Only replicators are trapezoids: the principal port is centered on the short top side and the auxiliary wires are evenly spaced along the wide bottom side. Rectangles label fragments or wire endpoints; they are not agents. An eraser has only a principal port.

Structure

### Fan

Exactly two auxiliary ports. Fans build the application and abstraction skeleton of a λ-term. When two fans annihilate, that is β-reduction in graph form.

Discard

### Eraser

No auxiliary ports. It marks “this bound variable is unused,” and deletes an agent it meets in a distinct-agent interaction.

Share

### Replicator

Any natural-number arity—one, two, three auxiliary ports, and so on. It joins the uses of one shared value and records the sharing context: a level on the agent, plus a delta on each auxiliary port.

Context

### Level delta

<!-- refine:issue {"id":"n0000628","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: extract-0002-flat-03 exited 1: Working...\nDeadline exceeded","sourceUnitIds":["u000123","u000124","u000125","u000126","u000127","u000128","u000129","u000130","u000131","u000132","u000133","u000134","u000135"],"annotations":["repair_parsing_error"]} -->

The integer level names the replicator’s sharing context. Each auxiliary port carries an integer delta. A replica that leaves through a port adds that delta to its current level—like a signed offset stamped on the exit door.

### 3.1 Four systems fall out of the same pieces

System | Agents permitted | Corresponding term fragment | |

ΔL | Fan | Linear: exactly one use. | |

ΔA | Fan + eraser | Affine: a use may be absent. | |

ΔI | Fan + replicator | Relevant: a use may repeat. | |

ΔK | Fan + eraser + replicator | Full: absence and repetition are both allowed. | |

In plain language: linear means exactly one bound use, affine at most one, relevant at least one, and full any count. The split mirrors the paper’s opening taxonomy and shows which agent pays for which feature: fans for structure, erasers for omission, replicators for sharing.

### 3.2 Equality is deliberately local in practice

Formally, equal replicators must match in level, arity, and every port delta. For well-formed nets from the paper’s λ-term translation, active replicators at the same level are already equal—so an implementation may compare levels alone in that setting. Hand-built nets do not get that shortcut.

What does “fan-in” versus “fan-out” mean here?

Parent and child are direction labels on a wire. In a rooted net, a parent points toward the root and a child points away from it—think “who faces whom,” not family trees. Canonical nets start with unpaired fan-in replicators: auxiliaries are parents, principal is a child. Reduction can also create fan-outs, with that orientation flipped. A fan-out is paired upstream with at least one fan-in; a fan-in need not have a partner. Levels and deltas let you reason about that pairing locally.

<!-- refine:issue {"id":"n0000629","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: extract-0002-flat-04 timed out after 90s","sourceUnitIds":["u000136","u000137","u000138","u000139","u000140","u000141","u000142","u000143","u000144","u000145","u000146","u000147"],"annotations":["repair_parsing_error"]} -->

04 Local dynamics

## When two principal ports touch, one of three things happens.

The interaction rules are the engine. This chapter groups their wire reconnections into three families: cancellation, deletion, and passage-with-copying. Each name describes what happens to one active pair.

### 1. Annihilation

Equal agents cancel. In a well-formed net from a λ-term, active replicators at the same level are equal: both nodes disappear and matching auxiliary ports reconnect. For fans, that same cancellation is applying a λ to its argument.

### 2. Erasure

An eraser is distinct from its neighbour and has zero auxiliary ports, so the agent it meets has nowhere to continue through. It is deleted.

### 3. Commutation

Distinct non-eraser agents pass through each other. How many outgoing copies you get depends on the other agent’s auxiliary ports.

flowchart TB
E@{ shape: stadium, label: "E" }
F@{ shape: triangle, label: "F" }
M@{ shape: rect, label: "subnet M" }
N@{ shape: rect, label: "subnet N" }
E -->|"principal ↔ principal"| F
F --- M
F --- N

After: E reaches both branches

flowchart TB
E1["E"]
E2["E"]
M2["subnet M"]
N2["subnet N"]
E1 --> M2
E2 --> N2

Why erasure propagates. Distinct agents pass through one another once per auxiliary port. Because E has zero auxiliary ports, the fan produces zero surviving copies; because the fan has two auxiliary ports, two copies of E continue into M and N. An n-port replicator would analogously leave n erasers. This is the erasure family from [the paper’s core interaction rules](https://arxiv.org/html/2505.20314v4#S2.F4).

<!-- refine:issue {"id":"n0000630","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: extract-0002-flat-05 exited 1: Working...\nDeadline exceeded","sourceUnitIds":["u000148","u000149","u000150","u000151","u000152","u000153","u000154","u000155","u000156","u000157","u000158","u000159","u000160"],"annotations":["repair_parsing_error"]} -->

### 4.1 Fan meets fan: the familiar redex disappears

Applications and abstractions are both fans. You tell them apart by how their wires point when you look from the root—the unique top entry of the whole net. When the right pair of fans meets principal-to-principal, they annihilate: both nodes go away and matching auxiliary ports reconnect. Auxiliary ports are ordered clockwise when the principal port points down; flipping one fan upside down swaps its visible left and right, so the wires cross in the drawing. That is β-reduction at the net level.

flowchart TB
res@{ shape: rect, label: "result · 1st aux" }
arg@{ shape: rect, label: "argument · 2nd aux" }
app@{ shape: triangle, label: "app" }
lam@{ shape: triangle, label: "λ" }
body@{ shape: rect, label: "body · 1st aux" }
var@{ shape: rect, label: "variable · 2nd aux" }
res --- app
arg --- app
app -->|"principal ↔ principal"| lam
lam --- var
lam --- body
body ~~~ var

After: matching indices reconnect

flowchart TB
res2@{ shape: rect, label: "result · 1st" }
arg2@{ shape: rect, label: "argument · 2nd" }
body2@{ shape: rect, label: "body · 1st" }
var2@{ shape: rect, label: "variable · 2nd" }
res2 -->|1st ↔ 1st| body2
arg2 -->|2nd ↔ 2nd| var2

The crossing is structural. For the downward application fan, the left auxiliary is first and the right auxiliary is second. For the rotated upward abstraction fan, the right auxiliary is first and the left auxiliary is second. Matching first-to-first and second-to-second—not geometric sides—therefore crosses the wires.

### 4.2 Replicator meets fan: structure splits around sharing

When a replicator meets a fan, the replicator leaves through the fan’s two auxiliary ports as two exact copies. At the same time, the fan leaves through every auxiliary port of the replicator—one fan per port. Each keeps its role, but now sits in the other’s surrounding context.

Before: R meets F

<!-- refine:issue {"id":"n0000631","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: extract-0002-flat-06 exited 1: Working...\nDeadline exceeded","sourceUnitIds":["u000161","u000162","u000163","u000164","u000165","u000166","u000167","u000168","u000169"],"annotations":["repair_parsing_error"]} -->

flowchart TB
d0@{ shape: rect, label: "d₀" }
d1@{ shape: rect, label: "d₁" }
d2@{ shape: rect, label: "d₂" }
R@{ shape: trapezoid, label: "R" }
F@{ shape: triangle, label: "F" }
a1@{ shape: rect, label: "a₁" }
a0@{ shape: rect, label: "a₀" }
d0 --- R
d1 --- R
d2 --- R
R -->|"principal ↔ principal"| F
F --- a1
F --- a0

After: (Fᵢ)ⱼ ↔ (Rʲ)ᵢ

flowchart TB
F0@{ shape: triangle, label: "F₀" }
F1@{ shape: triangle, label: "F₁" }
F2@{ shape: triangle, label: "F₂" }
R1@{ shape: trapezoid, label: "R¹" }
R0@{ shape: trapezoid, label: "R⁰" }
F0 --- R1
F0 --- R0
F1 --- R1
F1 --- R0
F2 --- R1
F2 --- R0

Finite version of the paper’s fan–replicator rule. Port identities, not geometric sides, determine the reconnection: (Fᵢ)ⱼ ↔ (Rʲ)ᵢ. This guide-specific diagram uses a three-port replicator so every copy has a visible port and wire. It adapts the structure of [Figure 4 in the source paper](https://arxiv.org/html/2505.20314v4#S2.F4) (CC BY 4.0).

<!-- refine:issue {"id":"n0000134","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"extract-0002 failed after 1 attempt(s): OMP exited 1: Working...\nDeadline exceeded\n","sourceUnitIds":["u000097","u000098","u000099","u000100","u000101","u000102","u000103","u000104","u000105","u000106","u000107","u000108","u000109","u000110","u000111","u000112","u000113","u000114","u000115","u000116","u000117","u000118","u000119","u000120","u000121","u000122","u000123","u000124","u000125","u000126","u000127","u000128","u000129","u000130","u000131","u000132","u000133","u000134","u000135","u000136","u000137","u000138","u000139","u000140","u000141","u000142","u000143","u000144","u000145","u000146","u000147","u000148","u000149","u000150","u000151","u000152","u000153","u000154","u000155","u000156","u000157","u000158","u000159","u000160","u000161","u000162","u000163","u000164","u000165","u000166","u000167","u000168","u000169","u000170","u000171","u000172","u000173"],"annotations":["parsing_error"]} -->
<!-- refine:issue {"id":"n0000632","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: extract-0002-flat-07 exited 1: Working...\nDeadline exceeded","sourceUnitIds":["u000170","u000171","u000172","u000173"],"annotations":["repair_parsing_error"]} -->

Count both sides. R has three auxiliary ports, so three fans F₀, F₁, F₂ appear. F has two auxiliary ports, so two replicators R⁰, R¹ appear. Because F points upward, its clockwise auxiliary-port order is visible right-to-left: a₁ is on the left and a₀ is on the right. Thus the old visible-left a₁ wire remains attached to R¹, while the old visible-right a₀ wire remains attached to R⁰; those two outer wires do not cross. Internally, auxiliary port j of each new Fᵢ connects to port dᵢ of Rʲ.

### 4.3 Replicator meets replicator: equal levels cancel; different levels commute

First compare the two levels. If they match—and the net came from a well-formed λ translation—the replicators are equal: they annihilate, both nodes disappear, and matching auxiliary ports reconnect. No replicas are created. In a hand-built net, matching levels alone are not enough; arity and every port delta must match too.

If the levels differ, the replicators are distinct and commute. Call the lower-level one R and the higher-level one H. R makes one replica of H for each of R’s auxiliary ports; H makes exact copies of R for each of H’s ports. Each H replica takes the delta on its exit port through R and adds it to H’s current level. The second diagram shows that different-level case.

Before: equal level = 2

flowchart TB
u0["d₀"]
u1["d₁"]
u2["d₂"]
Ru@{ shape: trapezoid, label: "R" }
Rl@{ shape: trapezoid, label: "R" }
l0["d₀"]
l1["d₁"]
l2["d₂"]
u0 --> Ru
u1 --> Ru
u2 --> Ru
Ru -->|"principal ↔ principal"| Rl
Rl --> l0
Rl --> l1
Rl --> l2

After: matching ports reconnect

flowchart TB
tu0["d₀"]
tu1["d₁"]
tu2["d₂"]
tl0["d₀"]
tl1["d₁"]
tl2["d₂"]
tu0 --> tl0
tu1 --> tl1
tu2 --> tl2

Same-level annihilation. The lower replicator is rotated, so its clockwise auxiliary-port indices appear right-to-left. Matching indices reconnect—top d₀ to lower d₀, and so on—making the two outer wires cross. Both replicators are gone.

Before: R level 2 meets H level 7

<!-- refine:issue {"id":"n0000633","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: extract-0003-flat-01 exited 1: Working...\nDeadline exceeded","sourceUnitIds":["u000174","u000175","u000176","u000177","u000178","u000179","u000180","u000181","u000182","u000183"],"annotations":["repair_parsing_error"]} -->

flowchart TB
rd0["d = 0"]
rd1["d = +3"]
rd2["d = −1"]
Rlow@{ shape: trapezoid, label: "R · ℓ = 2" }
Hhi@{ shape: trapezoid, label: "H · ℓ = 7" }
e1["e₁"]
e0["e₀"]
rd0 --- Rlow
rd1 --- Rlow
rd2 --- Rlow
Rlow ---|"principal ↔ principal"| Hhi
Hhi --- e1
Hhi --- e0

After: 3 H replicas · 2 R copies

flowchart TB
d0["d₀"]
d1["d₁"]
d2["d₂"]
H0@{ shape: trapezoid, label: "H · ℓ = 7" }
H1@{ shape: trapezoid, label: "H · ℓ = 10" }
H2@{ shape: trapezoid, label: "H · ℓ = 6" }
Rc1@{ shape: trapezoid, label: "R¹ · ℓ = 2" }
Rc0@{ shape: trapezoid, label: "R⁰ · ℓ = 2" }
e1["e₁"]
e0["e₀"]
d0 ---|principal| H0
d1 ---|principal| H1
d2 ---|principal| H2
H0 --- Rc1
H0 --- Rc0
H1 --- Rc1
H1 --- Rc0
H2 --- Rc1
H2 --- Rc0
Rc1 ---|principal| e1
Rc0 ---|principal| e0

Two simultaneous outcomes. The upper copies of H inherit R’s three port deltas, so their levels become 7, 10, and 6. The lower copies R¹ and R⁰ leave through H’s ports e₁ and e₀; both are exact copies that keep R’s level 2 and deltas 0, +3, −1. This diagram adapts the structure of [Figure 4 in the source paper](https://arxiv.org/html/2505.20314v4#S2.F4) (CC BY 4.0).

Read both halves of the result. Across the top, R’s three auxiliary ports create three H replicas, and each port’s delta shifts that replica’s level. Across the bottom, H’s two auxiliary ports create two exact R copies: R’s level and deltas stay put. The old eⱼ wire stays on the principal port of Rʲ. Between the families, the wires form a complete 3-by-2 grid: auxiliary port j of every H replica meets the matching port of Rʲ.

+

### The operational rule

Every port carries one integer. When an H replica leaves through that port, add the integer to H’s current level. The delta is the level change stamped on that particular exit.

#### A worked example

Suppose R sits at level 2 with two auxiliary ports. The first meets a wire endpoint at level 2, so its delta is 2 − 2 = 0. The second meets an endpoint at level 5, so its delta is 5 − 2 = +3. Now let a higher-level replicator H, at level 7, meet R.

01

<!-- refine:issue {"id":"n0000634","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: extract-0003-flat-02 exited 1: Working...\nDeadline exceeded","sourceUnitIds":["u000184","u000185","u000186","u000187","u000188","u000189","u000190","u000191","u000192","u000193","u000194"],"annotations":["repair_parsing_error"]} -->

#### Write the local differences

R’s own level is 2. Each port stores how far its endpoint sits from that 2.

port A: 2 − 2 = 0
port B: 5 − 2 = +3

02

#### Copy H once per R port

H is higher, so R replicates it. Both replicas start from H’s old level: 7.

old level of H = 7

03

#### Add the exit’s delta

The copy leaving port A stays at 7. The copy leaving port B shifts up by 3.

A: 7 + 0 = 7
B: 7 + 3 = 10

Before the interaction

flowchart TB
A["port A · d = 0"]
B["port B · d = +3"]
Rbox@{ shape: trapezoid, label: "R · ℓ = 2" }
Hbox@{ shape: trapezoid, label: "H · ℓ = 7" }
e1b["e₁"]
e0b["e₀"]
A --- Rbox
B --- Rbox
Rbox ---|"principal ↔ principal"| Hbox
Hbox --- e1b
Hbox --- e0b

H replicas after leaving R

flowchart TB
HA["through A · 7 + 0 = 7"]
HB["through B · 7 + 3 = 10"]

Read the calculation from left to right. Port B stores +3. The H replica begins at level 7, then follows that port’s instruction: 7 + 3 = 10.

The general rule, after the example

<!-- refine:issue {"id":"n0000635","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: extract-0003-flat-03 exited 1: Working...\nDeadline exceeded","sourceUnitIds":["u000195","u000196","u000197","u000198","u000199","u000200","u000201","u000202","u000203","u000204","u000205","u000206","u000207","u000208","u000209","u000210","u000211"],"annotations":["repair_parsing_error"]} -->

new level of an H replica = old H level + delta on the R port it leaves through

“Duplicate” means exact copies. “Replicate” is the paper’s word for copies that may differ by level. That distinction does real work: it replaces the separate indexed delimiters of older systems. A delta may be negative, zero, or positive; this example sticks to zero and a positive value only to keep the arithmetic easy to see.

How a delta carries context through an interaction

Several higher-level replicators can arrive at the same R port with different current levels. The port applies the same local adjustment to each. With delta +3, level 7 becomes 10 and level 12 becomes 15.

Read the pair as an instruction: the replicator level is the current context; the chosen port adds the change for that exit. Chapter 5 shows how translation writes those deltas into the initial net.

05 Translation

## Compile a λ-term into one rooted net.

For each of λL, λA, λI, and λK, the paper defines a bijection φ from terms to canonical Δ-Nets. A bijection is a one-to-one, reversible map: every term has one canonical net, and that net reads back as one term. The translation is inductive: translate the smaller pieces first, then wire those fragments into the larger term.

Vocabulary

flowchart TB
abs["λx.M · parameter x · body M"]
app["M N · function M · argument N"]
occ["x₀ and x₁ · two uses of x"]

Example: (λx. x (g x)) A

flowchart TB
A["argument A"]
lam["λx"]
body["body = x₀ (g x₁)"]
A --> lam
lam --> body

<!-- refine:issue {"id":"n0000636","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: extract-0003-flat-04 exited 1: Working...\nDeadline exceeded","sourceUnitIds":["u000212","u000213","u000214","u000215","u000216","u000217","u000218","u000219","u000220","u000221","u000222","u000223"],"annotations":["repair_parsing_error"]} -->

The vocabulary used by the translation. λx.M defines a function; x is its parameter and M is its body. M N applies function M to argument N. In the example, A is the actual argument supplied to the abstraction, while x₀ and x₁ are the two places that use x.

### 5.1 Start with a uniform interface

Every fragment has an interface: one incoming wire at the top and zero or more outgoing wires at the bottom. The outermost fragment hangs from a single root. Free variables—names no surrounding λ owns—become named interface nodes. That stable shape lets you plug a fragment into its parent the way a function plugs into a call.

abstraction fragment [λx.M]ℓ

flowchart TB
rootA((root))
lam@{ shape: triangle, label: "λ" }
Rx@{ shape: trapezoid, label: "Rₓ" }
M@{ shape: rect, label: "[M]ℓ body" }
uses@{ shape: rect, label: "bound uses" }
rootA -->|principal · parent| lam
lam ---|2nd aux · variable → principal| Rx
lam ---|1st aux · body| M
Rx ---|auxiliary ports| uses
M ~~~ Rx

application fragment [M N]ℓ

flowchart TB
rootB((root))
app@{ shape: triangle, label: "app" }
Mf@{ shape: rect, label: "[M]ℓ function" }
resB@{ shape: rect, label: "parent / result" }
Narg@{ shape: rect, label: "[N]ℓ₊₁ argument" }
rootB --- resB
Mf -->|principal · function| app
app ---|1st aux · result| resB
app ---|2nd aux · argument| Narg

Canonical fragment interface. In the abstraction, the parent enters λ’s principal port; λ’s right auxiliary reaches body M, while its left auxiliary reaches the replicator’s principal port when x is shared. In the application, function M reaches the application’s principal port; the parent/result wire and argument N use its two auxiliary ports.

### 5.2 The variable cases

Free variable

### A named boundary node

<!-- refine:issue {"id":"n0000637","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: extract-0003-flat-05 exited 1: Working...\nDeadline exceeded","sourceUnitIds":["u000224","u000225","u000226","u000227","u000228","u000229","u000230","u000231","u000232","u000233","u000234"],"annotations":["repair_parsing_error"]} -->

A variable free in the outermost term becomes a single-port, non-agent node labelled with its name. It sits on the net’s interface, not among the rewriting agents.

Bound occurrence

### Just a wire—until it meets sharing

A bound occurrence is just a vertical wire. Its lower end later joins an auxiliary port of the sharing replicator—when sharing is required at all.

Free in the whole term

flowchart TB
inY((fragment input))
y["y · named boundary"]
inY --> y

Bound by a surrounding λx

flowchart TB
inX((fragment input))
endp["wire endpoint · ℓᵢ"]
Rx2@{ shape: trapezoid, label: "Rₓ" }
inX --> endp
endp -->|one aux port| Rx2

The distinction is at the fragment boundary. A free variable survives as a named node in the canonical net’s interface. A bound occurrence introduces no variable agent at all: it is a wire whose endpoint is later connected to its owning λx, directly when there is one use or through Rx when that value is shared. This follows the two variable clauses in [the paper’s inductive translation](https://arxiv.org/html/2505.20314v4#S3.F5).

### 5.3 The abstraction cases

An abstraction is an upward-pointing fan (the λ label is only visual). Its first auxiliary port is the body and its second auxiliary port is the bound variable; in this upward view, those appear on the right and left respectively. If that variable is unused, the second auxiliary port meets an eraser—only in the erasure-capable systems ΔA and ΔK.

<!-- refine:issue {"id":"n0000638","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: extract-0003-flat-06 exited 1: Working...\nDeadline exceeded","sourceUnitIds":["u000235","u000236","u000237","u000238","u000239","u000240","u000241","u000242","u000243","u000244","u000245"],"annotations":["repair_parsing_error"]} -->

When a used variable has several occurrences, a replicator joins the abstraction’s variable port to those uses. Each auxiliary port of R lands on a concrete use site: for λx.x x, one auxiliary meets the application’s argument port and the other meets its function port. The application itself hangs from the abstraction’s body port. A one-port replicator with zero delta is just a wire, so canonical construction leaves it out.

One bound occurrence · λx.x

flowchart TB
root0((root))
lam0@{ shape: triangle, label: "λ" }
var0@{ shape: rect, label: "2nd aux · variable" }
body0@{ shape: rect, label: "1st aux · body" }
use0@{ shape: rect, label: "x" }
root0 -->|principal · parent| lam0
lam0 --- var0
lam0 --- body0
body0 ~~~ var0
body0 --- use0
var0 --- use0

No bound occurrence · λx.y

<!-- refine:issue {"id":"n0000212","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"extract-0003 failed after 1 attempt(s): OMP exited 1: Working...\nDeadline exceeded\n","sourceUnitIds":["u000174","u000175","u000176","u000177","u000178","u000179","u000180","u000181","u000182","u000183","u000184","u000185","u000186","u000187","u000188","u000189","u000190","u000191","u000192","u000193","u000194","u000195","u000196","u000197","u000198","u000199","u000200","u000201","u000202","u000203","u000204","u000205","u000206","u000207","u000208","u000209","u000210","u000211","u000212","u000213","u000214","u000215","u000216","u000217","u000218","u000219","u000220","u000221","u000222","u000223","u000224","u000225","u000226","u000227","u000228","u000229","u000230","u000231","u000232","u000233","u000234","u000235","u000236","u000237","u000238","u000239","u000240","u000241","u000242","u000243","u000244","u000245","u000246","u000247","u000248","u000249"],"annotations":["parsing_error"]} -->
<!-- refine:issue {"id":"n0000639","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: extract-0003-flat-07 exited 1: Working...\nDeadline exceeded","sourceUnitIds":["u000246","u000247","u000248","u000249"],"annotations":["repair_parsing_error"]} -->

flowchart TB
root1((root))
lam1@{ shape: triangle, label: "λ" }
var1@{ shape: rect, label: "2nd aux · variable" }
body1@{ shape: rect, label: "1st aux · body" }
erase@{ shape: stadium, label: "E" }
freeY@{ shape: rect, label: "y" }
root1 -->|principal · parent| lam1
lam1 --- var1
lam1 --- body1
body1 ~~~ var1
var1 --- erase
body1 --- freeY

Several bound occurrences · λx.x x

flowchart TB
root2((root))
lam2@{ shape: triangle, label: "λ" }
var2@{ shape: rect, label: "2nd aux · variable" }
body2@{ shape: rect, label: "1st aux · body" }
R@{ shape: trapezoid, label: "R" }
app2@{ shape: triangle, label: "app" }
res2@{ shape: rect, label: "result" }
fun2@{ shape: rect, label: "function x₀" }
arg2@{ shape: rect, label: "argument x₁" }
root2 -->|principal · parent| lam2
lam2 --- var2
lam2 --- body2
body2 ~~~ var2
body2 --- res2
app2 --- res2
var2 --- R
R --- fun2
R --- arg2
fun2 -->|principal| app2
app2 --- arg2

Read each picture from its λ binder. The second auxiliary port is the bound parameter x: it closes directly to one occurrence, terminates at E when unused, or reaches R when several occurrences must share one incoming value. The first auxiliary port is the body. In λx.x x that body port meets the application’s result port; the replicator’s auxiliary ports meet the application’s function and argument ports. §5.7 adds the levels and deltas.

### 5.4 The application case

An application is a triangular fan (the app label is only visual). Its principal port is fixed at the top apex and meets the function fragment. Its result and argument auxiliary ports are fixed symmetrically along the bottom edge. During reduction the application fan eventually meets an abstraction fan; their principal-port annihilation is the application.

Source syntax

flowchart TB
appS["[M N] · ℓ"]
MS["[M]ℓ · same level"]
NS["[N]ℓ₊₁ · one deeper"]
appS -->|function +0| MS
appS -->|argument +1| NS

Three fan ports

flowchart TB
resN@{ shape: rect, label: "1st aux · result" }
appN@{ shape: triangle, label: "app" }
Mf2@{ shape: rect, label: "function M · ℓ" }
Nf2@{ shape: rect, label: "argument N · ℓ+1" }
Mf2 -->|principal| appN
appN --- resN
appN --- Nf2

<!-- refine:issue {"id":"n0000640","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: extract-0004-flat-01 exited 1: Working...\nDeadline exceeded","sourceUnitIds":["u000250","u000251","u000252","u000253","u000254","u000255","u000256","u000257","u000258","u000259"],"annotations":["repair_parsing_error"]} -->

One syntax constructor, three connections. For [M N]ℓ, the result or parent wire uses the first auxiliary port, [N]ℓ+1 uses the second auxiliary port, and [M]ℓ meets the principal port. This is why a λ-fan connected to the function side can later form the active pair for β-reduction.

### 5.5 Where levels come from

Keep every word tied to the source syntax. An abstraction is the literal term λx.M: parameter x, body M. An application is the literal term M N: function M, argument N. A bound occurrence of x is one of the x leaves in M owned by that particular λx.

@

### “Context” here is not a runtime closure

Calculate levels by walking the written λ-term. Start the whole term at level 0. For an abstraction λx.M at level ℓ, continue into M at the same level ℓ. For an application M N at level ℓ, keep level ℓ on the function M and write level ℓ + 1 on the argument N. Repeat inside each subtree. During graph reduction those coordinates track sharing contexts; they do not count captured values or surrounding λ symbols the way a runtime closure would.

λ-calculus syntax | Given | Assign | |

Whole term T | T is the root program. | level(T) = 0 | |

Abstraction λx.M | level(λx.M) = l | level(M) = l; the replicator Rx belongs to level l + 1. | |

Application M N | level(M N) = l | level(M) = l; level(N) = l + 1. | |

Occurrence x | x is reached at level li. | Its wire endpoint has level li. | |

Use the same instructions at every step. For λx.λy.x, start at level 0 and carry 0 through both bodies, so x sits at level 0. For λx.f (g x), carry 0 into the body, give the outer function f level 0, and give its argument g x level 1. Apply the rule again inside that argument: g stays at 1, and x lands at 2.

<!-- refine:issue {"id":"n0000641","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: extract-0004-flat-02 exited 1: Working...\nDeadline exceeded","sourceUnitIds":["u000260","u000261","u000262","u000263","u000264","u000265","u000266","u000267","u000268","u000269","u000270","u000271"],"annotations":["repair_parsing_error"]} -->

Walk the syntax tree

flowchart TB
T["[λx. x (g x)]₀"]
binder["λx · ℓ = 0"]
outer["x (g x) · ℓ = 0"]
x0["x₀ · ℓ = 0"]
gx["g x · ℓ = 1"]
g["g · ℓ = 1"]
x1["x₁ · ℓ = 2"]
T --> binder
binder --> outer
outer -->|function +0| x0
outer -->|argument +1| gx
gx -->|function +0| g
gx -->|argument +1| x1

Turn the two x levels into deltas

flowchart TB
Rx@{ shape: trapezoid, label: "Rₓ · ℓ = 1" }
p0["x₀ · d = 0 − 1 = −1"]
p1["x₁ · d = 2 − 1 = +1"]
Rx --> p0
Rx --> p1

Walk λx.x (g x) mechanically. Begin at level 0 and keep that level through λx into its body x (g x). At the outer application, give the function x₀ level 0 and the argument g x level 1. Now apply the same rule to g x: g stays at 1 and x₁ lands at 2. The binder’s replicator is at level 1, so the stored deltas are ⟨−1, +1⟩.

To encode a term by hand:

- Fully parenthesize applications so every function and argument position is unambiguous.

- Write level 0 on the whole term, then walk inward. Keep the current level through every λx.M body and every function position; add one only when you enter an application’s argument.

- For each binder λx at level l, put its sharing replicator Rx at level l + 1 when a replicator is needed.

- Connect each bound occurrence xi to one auxiliary port of Rx. If that occurrence was reached at level li, label its port di = li − (l + 1).

A wire endpoint level is simply the level of that concrete variable occurrence. Its port delta is the gap between where the occurrence sits and where its binder’s replicator sits:

Construction rule

port delta = level of its connected wire endpoint − level of the replicator

<!-- refine:issue {"id":"n0000642","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: extract-0004-flat-03 exited 1: Working...\nDeadline exceeded","sourceUnitIds":["u000272","u000273","u000274","u000275","u000276","u000277","u000278","u000279","u000280","u000281","u000282","u000283","u000284"],"annotations":["repair_parsing_error"]} -->

That is where Chapter 4’s numbers came from: a replicator at level 2 wired to an occurrence at level 5 stores delta +3. During reduction, that +3 is the local adjustment whenever another replicator exits through the port. Section [5.8](#deep-deltas) works the full calculation for four occurrences of one bound variable.

### 5.6 Follow a β-redex from term, to net, to term

The rules feel less abstract when one small program stays on screen the whole way. Start with the closed linear term (λx.x)(λy.y). Each bound variable occurs once, so this is a ΔL example: fans only—no eraser, no replicator.

λ-calculus view

(λx.x)(λy.y) →β λy.y

Canonical ΔL net — orange link is the active pair

flowchart TB
rootI((root))
resI@{ shape: rect, label: "result" }
appI@{ shape: triangle, label: "app" }
argI@{ shape: rect, label: "argument" }
lamx@{ shape: triangle, label: "λx" }
lamy@{ shape: triangle, label: "λy" }
rootI --- resI
resI --- appI
appI -->|"principal ↔ principal"| lamx
appI --- argI
argI --- lamy

After one fan annihilation

flowchart TB
rootR((root))
lamy2@{ shape: triangle, label: "λy" }
rootR --> lamy2

How to read the wiring. The downward @-fan’s first auxiliary port is the application result (the root reaches it); its principal port leads to the function; its second auxiliary port leads to the argument. The upward λ-fan’s first auxiliary port is its body and its second auxiliary port is its bound variable. Since the body and variable ports of λx.x are already joined, annihilating the two principal ports connects the root directly to λy.y.

ordinary wire
active principal-port connection
wire exposed after annihilation

### 5.7 The δ in λx.x x is where Δ-Net levels enter

<!-- refine:issue {"id":"n0000643","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: extract-0004-flat-04 timed out after 90s","sourceUnitIds":["u000285","u000286","u000287","u000288","u000289","u000290","u000291","u000292","u000293","u000294","u000295","u000296"],"annotations":["repair_parsing_error"]} -->

The [Katharos diagram for λx.x x](https://zicklag.katharos.group/_astro/lam-x-xx.excalidraw.394327a5_ZJMpfg.webp) is useful because the extra structure is visible: γ nodes carry λ/application shape, and the δ node splits one bound input x into two uses. That image uses symmetric interaction combinators, not Δ-Net notation itself. The map below is conceptual: each γ role becomes a Δ-Net fan; the binary δ becomes a two-port replicator R.

The same sharing is exercised by a redex

(λx.x x)(λy.y) →β (λy.y)(λy.y) →β λy.y

Canonical [λx.x x]₀ — ports, not sides

flowchart TB
root7((root))
lam7@{ shape: triangle, label: "λ" }
var7@{ shape: rect, label: "2nd aux · variable" }
body7@{ shape: rect, label: "1st aux · body" }
R7@{ shape: trapezoid, label: "R · ℓ = 1" }
app7@{ shape: triangle, label: "app" }
res7@{ shape: rect, label: "result" }
fun7@{ shape: rect, label: "function x₀" }
arg7@{ shape: rect, label: "argument x₁" }
root7 -->|parent| lam7
lam7 --- var7
lam7 --- body7
body7 ~~~ var7
body7 --- res7
res7 --- app7
var7 --- R7
R7 --- fun7
R7 --- arg7
fun7 ---|function| app7
arg7 --- app7
class app7 orient-left

What the numbers mean in this exact term. The application hangs from the λ body port: its first auxiliary is the result. One replicator auxiliary meets the application’s argument port; the other meets its function (principal) port. The outer term has level 0. The body application is also level 0; the application rule puts the argument occurrence at level 1, while the function occurrence stays at level 0. The replicator belongs to the surrounding abstraction, so it has level 0 + 1 = 1. Therefore its function-use port stores d0 = 0 − 1 = −1, and its argument-use port stores d1 = 1 − 1 = 0.

A level delta is not a copy count, and it is not a source-level variable value. The two-port replicator already says “one bound value, two consumers.” Level and per-port deltas only record the relative sharing context at each consumer. When replicators later commute through structure, those deltas adjust the levels of replicas leaving through their ports. That bookkeeping is how Δ-Nets express the sharing a δ would introduce—without separate scope-delimiter agents.

### 5.8 Let right nesting expose a deeper delta vector

<!-- refine:issue {"id":"n0000644","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: extract-0004-flat-05 exited 1: Working...\nDeadline exceeded","sourceUnitIds":["u000297","u000298","u000299","u000300","u000301","u000302","u000303","u000304"],"annotations":["repair_parsing_error"]} -->

The previous term has only one application, so its two use sites differ by a single level. A clearer closed term is λx. x (x (x x)). The parentheses matter: each successive occurrence on the right sits inside another application’s argument, and every argument edge adds one to the term level.

Source-level effect

(λx. x (x (x x))) N →β N (N (N N))

[λx. x (x (x x))]₀ — each @ result is a body/parent; each R auxiliary is a use

flowchart TB
root8((root))
lam8@{ shape: triangle, label: "λ" }
var8@{ shape: rect, label: "2nd aux · variable" }
body8@{ shape: rect, label: "1st aux · body" }
R8@{ shape: trapezoid, label: "R · ℓ = 1" }
a0@{ shape: triangle, label: "app0" }
r0@{ shape: rect, label: "result" }
g0@{ shape: rect, label: "argument" }
a1@{ shape: triangle, label: "app1" }
r1@{ shape: rect, label: "result" }
g1@{ shape: rect, label: "argument" }
a2@{ shape: triangle, label: "app2" }
r2@{ shape: rect, label: "result" }
g2@{ shape: rect, label: "argument x₃" }
root8 -->|parent| lam8
lam8 --- var8
lam8 --- body8
body8 ~~~ var8
body8 --- r0
r0 --- a0
var8 --- R8
R8 ---|function| a0
a0 --- g0
g0 --- r1
r1 --- a1
R8 ---|function| a1
a1 --- g1
g1 --- r2
r2 --- a2
R8 ---|function| a2
a2 --- g2
class a0,a1,a2 orient-right

Why the vector grows. The outer application hangs from the λ body port. Each inner application hangs from the argument port of the application above it. The four replicator auxiliaries meet the three function ports and the deepest argument port. The abstraction is at level 0, so its replicator is at level 1. The four bound-variable endpoints are at levels 0, 1, 2, 3. Applying di = li − lR yields ⟨−1, 0, +1, +2⟩.

Occurrence | Position in the term | Endpoint level | Stored delta | |

x₀ | Function of the outer application. | 0 | 0 − 1 = −1 | |

x₁ | Function inside the first argument. | 1 | 1 − 1 = 0 | |

x₂ | Function inside the second argument. | 2 | 2 − 1 = +1 | |

x₃ | Argument of the deepest application. | 3 | 3 − 1 = +2 | |

<!-- refine:issue {"id":"n0000645","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: extract-0004-flat-06 timed out after 90s","sourceUnitIds":["u000305","u000306","u000307","u000308","u000309","u000310","u000311","u000312","u000313","u000314","u000315"],"annotations":["repair_parsing_error"]} -->

Apply this abstraction to a term N and the replicator stands for four consumers of that one argument. When later interactions move sharing through the nested applications, exits through the four ports adjust an arriving replica’s level by −1, 0, +1, or +2. The numbers keep track of where each use belongs. They still do not say how many copies to make.

06 Beyond core interaction

<!-- refine:issue {"id":"n0000289","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"extract-0004 failed after 1 attempt(s): OMP exited 1: Working...\nDeadline exceeded\n","sourceUnitIds":["u000250","u000251","u000252","u000253","u000254","u000255","u000256","u000257","u000258","u000259","u000260","u000261","u000262","u000263","u000264","u000265","u000266","u000267","u000268","u000269","u000270","u000271","u000272","u000273","u000274","u000275","u000276","u000277","u000278","u000279","u000280","u000281","u000282","u000283","u000284","u000285","u000286","u000287","u000288","u000289","u000290","u000291","u000292","u000293","u000294","u000295","u000296","u000297","u000298","u000299","u000300","u000301","u000302","u000303","u000304","u000305","u000306","u000307","u000308","u000309","u000310","u000311","u000312","u000313","u000314","u000315","u000316","u000317"],"annotations":["parsing_error"]} -->
<!-- refine:issue {"id":"n0000646","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: extract-0004-flat-07 timed out after 90s","sourceUnitIds":["u000316","u000317"],"annotations":["repair_parsing_error"]} -->

## Reduction needs housekeeping and a schedule.

The full algorithm is more than the interaction core. It adds canonicalization—cleanup rewrites that restore the special term-like net shape—and, for the nonlinear systems, a global leftmost-outermost schedule.

### 6.1 Canonical and proper are different states

Translation produces a canonical net: the standard shape the reverse translation knows how to read. After zero or more core interactions you have a proper net—any intermediate shape reachable during reduction. Canonicalization is the cleanup that walks a proper net back to canonical form.

State | Meaning in the paper | Why a reader should care | |

Canonical | Directly produced by the φ translation and in the special normal shape the back-translation expects. | It is the stable, term-like representation. | |

Proper | Reachable from a canonical net by zero or more Δ interactions. | It is the broader space where reduction does its work. | |

### 6.2 Erasure needs a root-reachability sweep

In ΔA and ΔK, an eraser can leave disconnected subnets—smaller graph regions—behind. Erasure canonicalization gathers that unreachable material in one reachability sweep:

A

### Mark from the root

Walk parent–child wires from the root and mark every node you reach.

B

### Discard what was not marked

<!-- refine:issue {"id":"n0000647","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: extract-0005-flat-01 timed out after 90s","sourceUnitIds":["u000318","u000319","u000320","u000321","u000322","u000323","u000324","u000325","u000326","u000327","u000328","u000329","u000330","u000331"],"annotations":["repair_parsing_error"]} -->

Delete the unmarked nodes. Wires that still touch them end in erasers instead.

C

### Choose the space/time trade-off

Run the sweep at the end, or earlier to save space. When memory matters most, the paper recommends it after every application of an abstraction that ignores its argument.

1 · Proper net with a detached island

flowchart TB
rootS((root))
keep["reachable subnet"]
island["unmarked island"]
rootS --> keep

2–3 · Mark, then delete unmarked

flowchart TB
rootC((root))
keep2["reachable subnet"]
Ecap["E · exposed wires"]
rootC --> keep2
keep2 -.-> Ecap

This is a global cleanup pass, not a principal-port interaction. The sweep begins at the distinguished root, marks the graph material reachable through the parent–child wiring, and deletes everything else. Where deleting an unmarked node exposes a connection that remains in the net, that connection is terminated by E. The schematic follows the erasure canonicalization described in [Section 4 of the paper](https://arxiv.org/html/2505.20314v4#S4).

### 6.3 Sharing needs replicator cleanup

In ΔI and ΔK, interactions can build trees made only of replicators. A merge rule collapses consecutive replicators once a local level test shows they are unpaired. Pairing information stays intact; the tree gets shorter.

Δ

### The local merge test

<!-- refine:issue {"id":"n0000648","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: extract-0005-flat-02 exited 1: Working...\nDeadline exceeded","sourceUnitIds":["u000332","u000333","u000334","u000335","u000336","u000337","u000338","u000339","u000340","u000341","u000342","u000343","u000344"],"annotations":["repair_parsing_error"]} -->

For consecutive replicators A and B joined through a port with delta d, B is known unpaired when 0 ≤ lB − lA ≤ d. In the paper’s reading, B cannot interact before A is annihilated—and since A is unpaired, that never happens. The inequality is a safety proof, not a performance hint.

Before: two-agent replicator tree

flowchart TB
rootM((root))
A["A · unpaired · ℓ = 2"]
live["endpoint ℓ = 2"]
B["B · ℓ = 4"]
b1["endpoint ℓ = 3"]
b2["endpoint ℓ = 6"]
rootM --> A
A -->|d = 0| live
A -->|d = 3| B
B --> b1
B --> b2

After: one equivalent replicator

flowchart TB
rootN((root))
Am["A merged · ℓ = 2"]
e0["ℓ = 2 · d = 0"]
e1["ℓ = 3 · d = +1"]
e2["ℓ = 6 · d = +4"]
rootN --> Am
Am --> e0
Am --> e1
Am --> e2

The inequality establishes safety; endpoint levels determine the new numbers. Here A is known unpaired, and its connecting port has d = 3. Since 0 ≤ lB − lA = 2 ≤ 3, B is also known unpaired and the consecutive agents may merge. The surviving replicator keeps level 2; the external endpoint levels remain 2, 3, 6, so the new deltas are ⟨0, +1, +4⟩.

ΔK has one more cleanup: unpaired replicator decay. Drop auxiliary ports of unpaired replicators that lead straight into erasers. If one zero-delta port remains, the replicator collapses to the wire it already was.

Before: unpaired R with two erasers

flowchart TB
inD((input))
Rd@{ shape: trapezoid, label: "R · unpaired" }
live0["live · d = 0"]
Ee1@{ shape: stadium, label: "E" }
Ee2@{ shape: stadium, label: "E" }
inD ---|principal| Rd
Rd --- live0
Rd --- Ee1
Rd --- Ee2

After: one-port zero-delta R is a wire

flowchart TB
inW((input))
outW["live wire"]
inW --> outW

<!-- refine:issue {"id":"n0000649","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: extract-0005-flat-03 timed out after 90s","sourceUnitIds":["u000345","u000346","u000347","u000348","u000349","u000350","u000351","u000352","u000353","u000354","u000355"],"annotations":["repair_parsing_error"]} -->

Decay removes only eraser-bound auxiliary ports. In this ΔK example, the two E-bound exits contribute no surviving consumers, so they are deleted. The remaining one-port replicator has delta 0; by the canonical representation rule it carries no information beyond the connection itself and collapses to a wire. The paper applies this cleanup during erasure canonicalization or lazily just before relevant replication rules.

### 6.4 Why the algorithm specifies leftmost-outermost

Core interaction rules enjoy local confluence. Canonicalization can touch ports that are not a principal-to-principal pair, so it needs a schedule. Leftmost-outermost first picks an outermost reducible pattern—one with no reducible pattern wrapped around it—then takes the leftmost candidate in the term-like reading of the net. “Sequential” here just means that priority rule chooses the next interaction. The paper uses that order for ΔA, ΔI, and ΔK so cleanup runs early and merges beat later commutations.

Choose work from the outside, then leftward

flowchart TB
first["1 · outermost leftmost"]
second["2 · outer later"]
third["3 · nested"]
fourth["4 · nested later"]
first --> third
second --> fourth

Important nuance. The paper also permits a reducible pair to run early if it will eventually reach the leftmost-outermost position unchanged. This preserves some safe parallelism while retaining the schedule’s optimality rationale.

07 Synthesis

## What does this proposal actually promise?

The paper’s final claim is an algorithm for optimal parallel λ-reduction: translate a term to a canonical net, reduce with the core rules plus the required cleanups and schedule, then read the canonical net back as a term.

The whole algorithm in one line

flowchart LR
t["t · source λ-term"]
phi["φ(t) · canonical net"]
proper["Δ* · proper states"]
omega["Ω(φ(t)) · normal canonical"]
tp["t′ · λ normal form"]
t -->|encode| phi
phi -->|interact| proper
proper -->|normalize + canonicalize| omega
omega -->|φ⁻¹ read back| tp

<!-- refine:issue {"id":"n0000650","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: extract-0005-flat-04 exited 1: Working...\nDeadline exceeded","sourceUnitIds":["u000356","u000357","u000358","u000359","u000360","u000361","u000362","u000363","u000364","u000365","u000366"],"annotations":["repair_parsing_error"]} -->

Keep the state changes separate. The bijection φ creates the initial canonical net. Core interactions enter the broader space of proper nets; the subsystem’s prescribed interaction order and canonicalizations are collected by Ω until the net is both normal and canonical. Only then does φ−1 read it back as a λ-term. This is the construction formalized near the end of [Section 4 of the paper](https://arxiv.org/html/2505.20314v4#S4).

01 / NO DISCARDED WORK

### Erasure is controlled

Leftmost-outermost reduction avoids evaluating a subnet that will later be erased; the reachability sweep clears the leftover garbage.

02 / NO REPEATED WORK

### Sharing stays interior

Replicators put shared use in the graph, so necessary work need not be redone merely because an expression has several consumers.

03 / LOCAL PARALLELISM

### Independent pairs can run

Perfect confluence in the interaction core lets disjoint active pairs choose and apply their local rules independently.

### 7.1 The guarantee differs by subsystem

In ΔL, fan annihilation is the only interaction. The paper states that every proper net is already canonical, and that if n β-reductions normalize a λL term, n interactions normalize its ΔL encoding in any order. ΔA, ΔI, and ΔK add canonicalization for erasure and sharing structure.

System | Extra concern | Paper’s prescribed response | |

ΔL | None beyond fan annihilation. | Any interaction order; perfect confluence. | |

<!-- refine:issue {"id":"n0000651","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: edge 15 has invalid endpoints 23 -> 24","sourceUnitIds":["u000367","u000368","u000369","u000370","u000371","u000372","u000373","u000374","u000375","u000376","u000377","u000378","u000379","u000380"],"annotations":["repair_parsing_error"]} -->

ΔA | Discarded subnet garbage. | Leftmost-outermost annihilations + erasure canonicalization. | |

ΔI | Replicator trees and early copies. | Leftmost-outermost + unpaired merging / canonicalization. | |

ΔK | Both garbage and sharing context. | Leftmost-outermost + erasure, merge, and decay canonicalizations. | |

### 7.2 A useful way to separate the claims

- Expressiveness: every term in the four λ fragments has a canonical net, via a stated bijection.

- Local behavior: the three-agent core is an interaction system with the one-step diamond property.

- Whole-algorithm behavior: add canonicalization and the global schedule, and the paper claims Church–Rosser confluence and optimality for the nonlinear systems. Church–Rosser is the broader agreement property: paths that start together can be continued to a common result—not necessarily in one step.

The split matters. The third layer needs erasure sweeps, replicator merging, decay, and leftmost-outermost scheduling on top of the core rules.

### 7.3 The broader proposition

The paper invites you to see λ-calculus as a projection of Δ-Nets. λ-terms force a narrow form of sharing; nets can say sharing relationships that plain syntax hides. If the reduction machinery holds up, that freedom could matter for parallel runtimes and machine architectures.

✓

### One-sentence takeaway

Δ-Nets tries to make optimal parallel evaluation practical by packing each sharing context into a variable-arity replicator, then combining local interactions with only as much global discipline as you need to avoid preventable work.

<!-- refine:issue {"id":"n0000652","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: extract-0005-flat-06 timed out after 90s","sourceUnitIds":["u000381","u000382","u000383","u000384","u000385","u000386","u000387","u000388","u000389","u000390","u000391","u000392","u000393"],"annotations":["repair_parsing_error"]} -->

08 Keep nearby

## A compact glossary, then the source.

Keep these short definitions nearby while reading the formal article. They aim at intuition. Exact notation and proofs stay with the paper.

### λ-term

<!-- refine:issue {"id":"n0000358","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"extract-0005 failed after 1 attempt(s): JSON Parse error: Expected ']'","sourceUnitIds":["u000318","u000319","u000320","u000321","u000322","u000323","u000324","u000325","u000326","u000327","u000328","u000329","u000330","u000331","u000332","u000333","u000334","u000335","u000336","u000337","u000338","u000339","u000340","u000341","u000342","u000343","u000344","u000345","u000346","u000347","u000348","u000349","u000350","u000351","u000352","u000353","u000354","u000355","u000356","u000357","u000358","u000359","u000360","u000361","u000362","u000363","u000364","u000365","u000366","u000367","u000368","u000369","u000370","u000371","u000372","u000373","u000374","u000375","u000376","u000377","u000378","u000379","u000380","u000381","u000382","u000383","u000384","u000385","u000386","u000387","u000388","u000389","u000390","u000391","u000392","u000393","u000394","u000395","u000396","u000397"],"annotations":["parsing_error"]} -->
<!-- refine:issue {"id":"n0000653","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: extract-0005-flat-07 timed out after 90s","sourceUnitIds":["u000394","u000395","u000396","u000397"],"annotations":["repair_parsing_error"]} -->

A program made from variables, abstractions, and applications. In λx.t, the abstraction binds parameter x in body t. In t u, t is the function and u is its argument.

### β-redex / β-reduction

A β-redex is a function already applied to an argument, (λx.t)u. Its β-reduction substitutes u for the bound occurrences of x in t.

### Normal form / normalizing

Normal form means no reducible pattern remains. A term or net is normalizing if some reduction sequence eventually reaches normal form; it need not do so in every system or every sequence.

### Interaction system

A graph-rewriting system made of agent types and rules that apply only when two agents meet at their principal ports.

### Agent / port

An agent is one small node in a net. Ports are its connection sockets. Each agent has one principal port and zero or more auxiliary ports.

### Active pair

Two agents connected through their principal ports; exactly the local configuration that an interaction rule rewrites.

### One-step diamond

If two different single interactions can begin at the same net, the results can meet after one more interaction each. Every edge of the “diamond” is exactly one step.

### Perfect confluence

The paper’s name for the one-step diamond property of its interaction-system core. It means competing local steps agree immediately.

### Church–Rosser confluence

The broader common-result property for reduction paths. It says divergent valid reductions can be joined again, not necessarily in one step.

### Canonical Δ-Net

A net produced by the term-to-net translation, in the special representation expected by the translation back to a λ-term.

### Canonicalization

A cleanup rewrite used to return a proper intermediate net to canonical, term-like form. It is not itself a core principal-port interaction.

### Commutation

An interaction of distinct, non-eraser agents. Each travels through the other and may be copied according to the other’s arity.

### Fan

The two-auxiliary-port structural agent. In a rooted net it can encode either application or abstraction, and fan annihilation expresses β-reduction.

### Level / delta

In a canonical λ encoding, entering the argument of an application adds one level; entering its function or an abstraction body does not. A replicator port’s delta is its bound-variable occurrence level minus the replicator level.

### Proper Δ-Net

Any net reachable from a canonical net through zero or more core Δ interactions; it can contain noncanonical intermediate shapes.

### Replicator

The variable-arity agent used for sharing. It has a level and an integer delta associated with each auxiliary port.

### Sharing scope

The region controlled by one duplication context. Older interaction-net approaches often marked scope boundaries with separate delimiter agents.

### Leftmost-outermost

A priority order: choose a reducible pattern not nested inside another, then choose the leftmost such pattern in the term-like reading of the net.

### Primary source

Daniel Augusto Rizzi Salvadori, “Δ-Nets: Interaction-Based System for Optimal Parallel λ-Reduction,” arXiv:2505.20314v4, 22 July 2026.

- [Read the HTML version on arXiv](https://arxiv.org/html/2505.20314v4)

- [Read the arXiv abstract and download formats](https://arxiv.org/abs/2505.20314)

About this edition. An independently structured teaching summary of the paper’s abstract and Sections 1–5. Diagrams and wording here are original explanatory material, not reproductions of the author’s figures.

Δ-Nets, decoded · A single-file companion for slower technical reading.

Source paper: [arXiv:2505.20314v4 ↗](https://arxiv.org/html/2505.20314v4)
