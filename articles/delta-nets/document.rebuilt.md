# Δ-Nets: Local Graph Rewriting for Shared λ-Reduction

*Based on Daniel Augusto Rizzi Salvadori, “[Δ-Nets: Interaction-Based System for Optimal Parallel λ-Reduction](https://arxiv.org/html/2505.20314v4),” arXiv:2505.20314v4.*

<!-- refine:issue {"id":"n0000562","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: extract-0001-flat-01 timed out after 90s","sourceUnitIds":["u000001","u000002","u000003","u000004","u000005","u000006","u000007","u000008","u000009","u000010","u000011","u000012","u000013","u000014","u000015","u000016","u000017","u000018"],"annotations":["repair_parsing_error"]} -->

## 1. The source-level problem

The λ-calculus constructs terms from variables, abstractions, and applications:

\[
t ::= x \mid \lambda x.t \mid t\,u.
\]

An abstraction \(\lambda x.t\) binds parameter \(x\) in body \(t\). An application \(t\,u\) applies function \(t\) to argument \(u\).

An occurrence of \(x\) is **bound** if a surrounding \(\lambda x\) owns it. It is **free** if no surrounding abstraction owns it.

<!-- refine:issue {"id":"n0000574","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: extract-0001-flat-02 exited 1: Working...\nDeadline exceeded","sourceUnitIds":["u000019","u000020","u000021","u000022","u000023","u000024","u000025","u000026","u000027","u000028","u000029","u000030","u000031","u000032","u000033"],"annotations":["repair_parsing_error"]} -->
<!-- refine:issue {"id":"n0000585","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: extract-0001-flat-03 exited 1: Working...\nDeadline exceeded","sourceUnitIds":["u000034","u000035","u000036","u000037","u000038","u000039","u000040","u000041","u000042","u000043","u000044","u000045","u000046","u000047"],"annotations":["repair_parsing_error"]} -->

The basic β-reduction rule is

\[
(\lambda x.t)\,u \longrightarrow_\beta t[x:=u],
\]

where \(t[x:=u]\) means substituting \(u\) for the bound occurrences of \(x\) in \(t\).

<!-- refine:resolved {"id":"n0000062","status":"resolved","basis":"The source equation from u000053 is reproduced directly."} -->

This rule hides two costs.

If \(x\) is absent from \(t\), then \(u\) is discarded:

\[
(\lambda x.t)\,u \longrightarrow_\beta t.
\]

Reducing inside \(u\) before this step is wasted work.

If \(x\) occurs several times, substitution duplicates \(u\):

\[
(\lambda x.x\,x)\,u \longrightarrow_\beta u\,u.
\]

If \(u\) contains a redex, each copy can repeat the same computation.

<!-- refine:issue {"id":"n0000596","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: extract-0001-flat-04 exited 1: Working...\nDeadline exceeded","sourceUnitIds":["u000048","u000049","u000050","u000051","u000052","u000053","u000054","u000055","u000056","u000057","u000058","u000059","u000060","u000061","u000062","u000063"],"annotations":["repair_parsing_error"]} -->

The intended notion of optimal reduction is therefore: avoid reductions that are later erased, and avoid redoing a needed reduction merely because an expression has multiple consumers.

## 2. From syntax trees to nets

A syntax tree represents every occurrence separately. A graph can instead connect several uses to one shared subgraph.

```text
Tree-shaped substitution:         Graph-shaped sharing:

use₁ ── argument                  use₁ ─┐
use₂ ── argument                         ├── shared argument
                                         │
                                   use₂ ─┘
```

A **net** is a graph-like computational representation built from agents connected by ports. A **graph rewrite** replaces a small matched graph configuration with another local configuration.

<!-- refine:issue {"id":"n0000610","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: extract-0001-flat-05 timed out after 90s","sourceUnitIds":["u000064","u000065","u000066","u000067","u000068","u000069","u000070","u000071","u000072","u000073","u000074","u000075","u000076","u000077","u000078","u000079","u000080"],"annotations":["repair_parsing_error"]} -->

The graph representation preserves one evolving identity for a shared computation. Reducing that graph region once makes its result available to every connected use.

<!-- refine:resolved {"id":"n0000098","status":"resolved","basis":"The source diagram at u000085 directly depicts separate argument and work branches for two uses."} -->
<!-- refine:resolved {"id":"n0000100","status":"resolved","basis":"The source diagram at u000087 directly depicts two uses connected through one shared argument."} -->

## 3. Interaction systems

An **interaction system** has agent types and local interaction rules. Each agent has exactly one **principal port** and zero or more **auxiliary ports**.

Two agents connected at their principal ports form an **active pair**. Its interaction rule reconnects only the wires attached to that pair.

<!-- refine:issue {"id":"n0000623","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: extract-0001-flat-06 exited 1: Working...\nDeadline exceeded","sourceUnitIds":["u000081","u000082","u000083","u000084","u000085","u000086","u000087","u000088","u000089","u000090","u000091","u000092","u000093","u000094"],"annotations":["repair_parsing_error"]} -->

Because an agent has only one principal port, no agent belongs to two active pairs at once. Distinct active pairs therefore use distinct agents and may reduce independently.

If a net \(N\) has two one-step reductions,

\[
N\longrightarrow N_1,
\qquad
N\longrightarrow N_2,
\]

the **one-step diamond property** says there is an \(M\) such that

\[
N_1\longrightarrow M,
\qquad
N_2\longrightarrow M.
\]

The paper calls this **perfect confluence** for the interaction-system core. It means competing local choices agree after one more interaction on each branch.

<!-- refine:issue {"id":"n0000626","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: extract-0002-flat-01 exited 1: Working...\nDeadline exceeded","sourceUnitIds":["u000097","u000098","u000099","u000100","u000101","u000102","u000103","u000104","u000105","u000106","u000107","u000108","u000109"],"annotations":["repair_parsing_error"]} -->

Perfect confluence is not termination. A net may reduce forever even if disjoint local interactions commute.

**Church–Rosser confluence** is broader: divergent finite reduction paths can be extended to a common result, without requiring an immediate one-step join.

## 4. The three Δ-Net agents

| Agent | Auxiliary ports | Purpose |
|---|---:|---|
| Fan \(F\) | 2 | Encodes application and abstraction structure. |
| Eraser \(E\) | 0 | Represents an unused value and propagates deletion. |
| Replicator \(R\) | Any finite number | Represents sharing and local sharing context. |

<!-- refine:issue {"id":"n0000627","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: extract-0002-flat-02 timed out after 90s","sourceUnitIds":["u000110","u000111","u000112","u000113","u000114","u000115","u000116","u000117","u000118","u000119","u000120","u000121","u000122"],"annotations":["repair_parsing_error"]} -->
<!-- refine:issue {"id":"n0000628","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: extract-0002-flat-03 exited 1: Working...\nDeadline exceeded","sourceUnitIds":["u000123","u000124","u000125","u000126","u000127","u000128","u000129","u000130","u000131","u000132","u000133","u000134","u000135"],"annotations":["repair_parsing_error"]} -->

In the guide’s notation, fans are triangles and replicators are trapezoids. Rectangles name endpoints or fragments, not agents.

A fan has two ordered auxiliary ports. In an application \(M\,N\), its principal port connects to \(M\), its first auxiliary port connects to the result or parent, and its second auxiliary port connects to \(N\).

In an abstraction \(\lambda x.M\), the first auxiliary port connects to body \(M\), while the second represents the bound-variable structure for \(x\).

An eraser has no auxiliary ports. When it meets a fan, its erasure propagates into both auxiliary branches; when it meets an \(n\)-port replicator, it propagates into all \(n\) branches.

A replicator has a level \(\ell_R\) and an integer delta \(d_i\) on each auxiliary port. Its ports represent consumers of one shared value.

<!-- refine:issue {"id":"n0000629","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: extract-0002-flat-04 timed out after 90s","sourceUnitIds":["u000136","u000137","u000138","u000139","u000140","u000141","u000142","u000143","u000144","u000145","u000146","u000147"],"annotations":["repair_parsing_error"]} -->

A one-port replicator with delta \(0\) is equivalent to a wire. It has neither branching nor a level adjustment to perform.

## 5. Four variable-use systems

| λ-fragment | Bound-variable rule | Δ-Net subsystem | Permitted agents |
|---|---|---|---|
| \(\lambda L\) | Exactly once | \(\Delta L\) | Fan |
| \(\lambda A\) | At most once | \(\Delta A\) | Fan, eraser |
| \(\lambda I\) | At least once | \(\Delta I\) | Fan, replicator |
| \(\lambda K\) | Any number | \(\Delta K\) | Fan, eraser, replicator |

Fans account for λ-term structure. Erasers account for omitted use. Replicators account for repeated use and sharing.

## 6. Levels and deltas

Start a whole term at level \(0\). For an abstraction at level \(\ell\),

\[
\operatorname{level}(\lambda x.M)=\ell
\quad\Longrightarrow\quad
\operatorname{level}(M)=\ell.
\]

For an application at level \(\ell\),

\[
\operatorname{level}(M\,N)=\ell
\quad\Longrightarrow\quad
\operatorname{level}(M)=\ell,
\qquad
\operatorname{level}(N)=\ell+1.
\]

A needed replicator for binder \(\lambda x.M\) at level \(\ell\) has level

\[
\ell_{R_x}=\ell+1.
\]

If occurrence \(x_i\) has level \(\ell_i\), its port stores

\[
d_i=\ell_i-\ell_{R_x}.
\]

For \(\lambda x.\,x\,(g\,x)\), the two \(x\)-occurrences lie at levels \(0\) and \(2\). The replicator lies at level \(1\), so the delta vector is

\[
\langle-1,+1\rangle.
\]

## 7. Core interactions

### Annihilation

Equal agents cancel, leaving matching auxiliary ports reconnected. Fan annihilation is β-reduction in graph form.

### Erasure

An eraser meeting a distinct agent deletes that local agent and sends erasers along its auxiliary branches.

### Commutation

Distinct non-eraser agents pass through one another. If replicator \(R\) meets fan \(F\), the reconnection is determined by port identities:

\[
(F_i)_j \longleftrightarrow (R^j)_i.
\]

<!-- refine:issue {"id":"n0000630","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: extract-0002-flat-05 exited 1: Working...\nDeadline exceeded","sourceUnitIds":["u000148","u000149","u000150","u000151","u000152","u000153","u000154","u000155","u000156","u000157","u000158","u000159","u000160"],"annotations":["repair_parsing_error"]} -->
<!-- refine:issue {"id":"n0000631","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: extract-0002-flat-06 exited 1: Working...\nDeadline exceeded","sourceUnitIds":["u000161","u000162","u000163","u000164","u000165","u000166","u000167","u000168","u000169"],"annotations":["repair_parsing_error"]} -->

<!-- refine:resolved {"id":"n0000134","status":"resolved","basis":"Direct source-backed recovery nodes cover the core interaction material from the failed extraction chunk."} -->
<!-- refine:issue {"id":"n0000632","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: extract-0002-flat-07 exited 1: Working...\nDeadline exceeded","sourceUnitIds":["u000170","u000171","u000172","u000173"],"annotations":["repair_parsing_error"]} -->

## 8. Replicator equality and commutation

Two replicators are formally equal only when level, arity, and every corresponding delta agree. Equal replicators annihilate and reconnect matching ports.

For well-formed nets translated from λ-terms, same-level active replicators are already equal. This level-only shortcut does not apply to arbitrary hand-built nets.

If lower-level \(R\) meets higher-level \(H\), they commute. \(R\) produces one \(H\)-replica per port of \(R\), while \(H\) produces one exact \(R\)-copy per port of \(H\).

Each \(H\)-replica exiting through \(R\)-port \(i\) receives level

\[
\ell_{H_i}=\ell_H+d_i.
\]

For \(\ell_R=2\), \(\ell_H=7\), and port deltas \(0\) and \(+3\), the resulting \(H\)-levels are \(7\) and \(10\).

<!-- refine:issue {"id":"n0000633","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: extract-0003-flat-01 exited 1: Working...\nDeadline exceeded","sourceUnitIds":["u000174","u000175","u000176","u000177","u000178","u000179","u000180","u000181","u000182","u000183"],"annotations":["repair_parsing_error"]} -->
<!-- refine:issue {"id":"n0000634","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: extract-0003-flat-02 exited 1: Working...\nDeadline exceeded","sourceUnitIds":["u000184","u000185","u000186","u000187","u000188","u000189","u000190","u000191","u000192","u000193","u000194"],"annotations":["repair_parsing_error"]} -->
<!-- refine:issue {"id":"n0000635","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: extract-0003-flat-03 exited 1: Working...\nDeadline exceeded","sourceUnitIds":["u000195","u000196","u000197","u000198","u000199","u000200","u000201","u000202","u000203","u000204","u000205","u000206","u000207","u000208","u000209","u000210","u000211"],"annotations":["repair_parsing_error"]} -->

A duplicate is exact. A replica may differ in level because a delta-labelled port adjusted its sharing context.

## 9. Canonical translation

For each λ-fragment, the paper gives a bijection

\[
\varphi:
\{\text{terms}\}
\longleftrightarrow
\{\text{canonical Δ-Nets}\}.
\]

Translation is inductive: translate smaller terms first, then connect their fragment interfaces.

<!-- refine:issue {"id":"n0000636","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: extract-0003-flat-04 exited 1: Working...\nDeadline exceeded","sourceUnitIds":["u000212","u000213","u000214","u000215","u000216","u000217","u000218","u000219","u000220","u000221","u000222","u000223"],"annotations":["repair_parsing_error"]} -->

Each fragment has one incoming result wire and zero or more outgoing interface wires. The whole net has one distinguished root.

A free variable becomes a named boundary node. A bound occurrence is a wire endpoint connected directly to its owning binder when there is one use, or through a replicator when there are multiple uses.

<!-- refine:issue {"id":"n0000637","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: extract-0003-flat-05 exited 1: Working...\nDeadline exceeded","sourceUnitIds":["u000224","u000225","u000226","u000227","u000228","u000229","u000230","u000231","u000232","u000233","u000234"],"annotations":["repair_parsing_error"]} -->
<!-- refine:issue {"id":"n0000638","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: extract-0003-flat-06 exited 1: Working...\nDeadline exceeded","sourceUnitIds":["u000235","u000236","u000237","u000238","u000239","u000240","u000241","u000242","u000243","u000244","u000245"],"annotations":["repair_parsing_error"]} -->

For an abstraction \(\lambda x.M\), the first fan auxiliary port connects to \(M\), while the second connects to:

- the single occurrence of \(x\);
- an eraser if \(x\) is unused;
- a replicator if \(x\) has several occurrences.

For an application \([M\,N]_\ell\):

- \([M]_\ell\) connects to the principal port;
- the result or parent uses the first auxiliary port;
- \([N]_{\ell+1}\) uses the second auxiliary port.

<!-- refine:resolved {"id":"n0000212","status":"resolved","basis":"Direct source-backed recovery nodes cover the main failed extraction region."} -->
<!-- refine:issue {"id":"n0000639","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: extract-0003-flat-07 exited 1: Working...\nDeadline exceeded","sourceUnitIds":["u000246","u000247","u000248","u000249"],"annotations":["repair_parsing_error"]} -->

## 10. Proper nets and canonicalization

A **canonical net** has the special shape produced by \(\varphi\) and required by \(\varphi^{-1}\). A **proper net** is any net reachable from a canonical net through zero or more core Δ-interactions.

Canonicalization returns a proper net to canonical form. It is not itself a principal-port interaction.

\[
t
\overset{\varphi}{\longmapsto}
\varphi(t)
\overset{\Delta^\ast}{\longmapsto}
\text{proper net}
\overset{\Omega}{\longmapsto}
\text{normal canonical net}
\overset{\varphi^{-1}}{\longmapsto}
t'.
\]

In \(\Delta A\) and \(\Delta K\), erasure can leave unreachable graph regions. Canonicalization marks nodes reachable from the root, deletes unmarked nodes, and uses erasers to terminate exposed surviving connections.

<!-- refine:issue {"id":"n0000640","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: extract-0004-flat-01 exited 1: Working...\nDeadline exceeded","sourceUnitIds":["u000250","u000251","u000252","u000253","u000254","u000255","u000256","u000257","u000258","u000259"],"annotations":["repair_parsing_error"]} -->
<!-- refine:issue {"id":"n0000641","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: extract-0004-flat-02 exited 1: Working...\nDeadline exceeded","sourceUnitIds":["u000260","u000261","u000262","u000263","u000264","u000265","u000266","u000267","u000268","u000269","u000270","u000271"],"annotations":["repair_parsing_error"]} -->
<!-- refine:issue {"id":"n0000642","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: extract-0004-flat-03 exited 1: Working...\nDeadline exceeded","sourceUnitIds":["u000272","u000273","u000274","u000275","u000276","u000277","u000278","u000279","u000280","u000281","u000282","u000283","u000284"],"annotations":["repair_parsing_error"]} -->
<!-- refine:issue {"id":"n0000643","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: extract-0004-flat-04 timed out after 90s","sourceUnitIds":["u000285","u000286","u000287","u000288","u000289","u000290","u000291","u000292","u000293","u000294","u000295","u000296"],"annotations":["repair_parsing_error"]} -->
<!-- refine:issue {"id":"n0000644","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: extract-0004-flat-05 exited 1: Working...\nDeadline exceeded","sourceUnitIds":["u000297","u000298","u000299","u000300","u000301","u000302","u000303","u000304"],"annotations":["repair_parsing_error"]} -->
<!-- refine:issue {"id":"n0000645","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: extract-0004-flat-06 timed out after 90s","sourceUnitIds":["u000305","u000306","u000307","u000308","u000309","u000310","u000311","u000312","u000313","u000314","u000315"],"annotations":["repair_parsing_error"]} -->
<!-- refine:resolved {"id":"n0000289","status":"resolved","basis":"Source-backed recovery nodes cover the main translation and level-assignment claims."} -->
<!-- refine:issue {"id":"n0000646","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: extract-0004-flat-07 timed out after 90s","sourceUnitIds":["u000316","u000317"],"annotations":["repair_parsing_error"]} -->

## 11. Replicator cleanup and scheduling

Consecutive replicators \(A\) and \(B\), joined through a port of delta \(d\), satisfy a merge safety condition when \(A\) is known unpaired and

\[
0\leq \ell_B-\ell_A\leq d.
\]

The condition establishes that \(B\) cannot require a prior interaction before \(A\) would annihilate. Since \(A\) is unpaired, the consecutive replicators may merge.

In \(\Delta K\), an unpaired replicator port leading directly to an eraser can be removed. If one zero-delta port remains, the replicator becomes a wire.

The nonlinear systems use leftmost-outermost scheduling: select an outermost reducible pattern, then select the leftmost candidate in the term-like reading of the net.

<!-- refine:issue {"id":"n0000647","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: extract-0005-flat-01 timed out after 90s","sourceUnitIds":["u000318","u000319","u000320","u000321","u000322","u000323","u000324","u000325","u000326","u000327","u000328","u000329","u000330","u000331"],"annotations":["repair_parsing_error"]} -->
<!-- refine:issue {"id":"n0000648","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: extract-0005-flat-02 exited 1: Working...\nDeadline exceeded","sourceUnitIds":["u000332","u000333","u000334","u000335","u000336","u000337","u000338","u000339","u000340","u000341","u000342","u000343","u000344"],"annotations":["repair_parsing_error"]} -->
<!-- refine:issue {"id":"n0000649","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: extract-0005-flat-03 timed out after 90s","sourceUnitIds":["u000345","u000346","u000347","u000348","u000349","u000350","u000351","u000352","u000353","u000354","u000355"],"annotations":["repair_parsing_error"]} -->
<!-- refine:issue {"id":"n0000650","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: extract-0005-flat-04 exited 1: Working...\nDeadline exceeded","sourceUnitIds":["u000356","u000357","u000358","u000359","u000360","u000361","u000362","u000363","u000364","u000365","u000366"],"annotations":["repair_parsing_error"]} -->
<!-- refine:issue {"id":"n0000651","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: edge 15 has invalid endpoints 23 -> 24","sourceUnitIds":["u000367","u000368","u000369","u000370","u000371","u000372","u000373","u000374","u000375","u000376","u000377","u000378","u000379","u000380"],"annotations":["repair_parsing_error"]} -->
<!-- refine:issue {"id":"n0000652","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: extract-0005-flat-06 timed out after 90s","sourceUnitIds":["u000381","u000382","u000383","u000384","u000385","u000386","u000387","u000388","u000389","u000390","u000391","u000392","u000393"],"annotations":["repair_parsing_error"]} -->
<!-- refine:resolved {"id":"n0000358","status":"resolved","basis":"Source-backed recovery nodes cover the main reduction, cleanup, scheduling, and guarantee claims."} -->
<!-- refine:issue {"id":"n0000653","version":1,"type":"parsing_error","status":"open","action":"enrich_or_preserve","need":"Semantic shard repair failed: extract-0005-flat-07 timed out after 90s","sourceUnitIds":["u000394","u000395","u000396","u000397"],"annotations":["repair_parsing_error"]} -->

## 12. What the proposal claims

| System | Additional concern | Prescribed response |
|---|---|---|
| \(\Delta L\) | Fan annihilation only | Any interaction order. |
| \(\Delta A\) | Unreachable erased subnets | Erasure canonicalization and scheduling. |
| \(\Delta I\) | Replicator trees | Replicator merging and scheduling. |
| \(\Delta K\) | Both concerns | Erasure, merging, decay, and scheduling. |

For \(\Delta L\), the guide attributes a direct step-count correspondence to the paper: \(n\) β-reductions of a normalizing \(\lambda L\) term correspond to \(n\) Δ-interactions of its encoding.

For nonlinear systems, the guide attributes Church–Rosser confluence and optimality claims to the full algorithm, not merely to its locally confluent core. The exact theorem hypotheses and proofs remain in the primary source.

## Conclusion

Δ-Nets turns λ-reduction from textual substitution into graph rewriting.

Fans encode term structure. Erasers encode non-use. Replicators encode shared use, while their levels and deltas transport relative sharing context locally.

The architecture combines

\[
\text{local interaction}
\;+\;
\text{global cleanup and scheduling where needed}.
\]

This division is the proposal’s central idea: preserve parallel local rewriting wherever possible, but impose global discipline when erasure and sharing leave noncanonical or unreachable structure.

## Primary source

Daniel Augusto Rizzi Salvadori, “[Δ-Nets: Interaction-Based System for Optimal Parallel λ-Reduction](https://arxiv.org/html/2505.20314v4),” arXiv:2505.20314v4.

- [Read the HTML paper on arXiv](https://arxiv.org/html/2505.20314v4)
- [Read the arXiv abstract and download formats](https://arxiv.org/abs/2505.20314)
