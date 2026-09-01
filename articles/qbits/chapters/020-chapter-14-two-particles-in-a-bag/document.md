# Chapter 14 — Fusion and topological charge

Consider two particles enclosed within a region whose internal configuration cannot be observed from outside. An external measurement can determine only a coarse property: the type of source represented by the region as a whole.

Rearranging the particles locally within the region does not change this externally observable property. The region therefore has a label that is invariant under local rearrangements.

The previous chapter established that exchanging two such particles can rotate an internal state. This chapter identifies the structure of that state.

The discussion begins with a multiplication table describing how particle labels combine. It then introduces two diagrammatic operations: an \(F\)-move, which changes the grouping of particles, and an \(R\)-move, which exchanges two particles.

## Topological charge as a locally invariant label

Consider a loop enclosing several quasiparticles, where a quasiparticle is an emergent particle-like excitation of a many-body system. An observer outside the loop can characterize the type of source contained inside it. Operations performed locally within the loop cannot change that external characterization.

This characterization is called a charge. More specifically, it is often called a topological charge because a perturbation confined to one location cannot change it. Throughout this chapter, charge denotes this collective label of the enclosed region.

Possible charges are denoted by symbols such as \(a\), \(b\), and \(c\). No allowed local operation can transform an isolated system of total charge \(a\) into a system with a different total charge \(b\).

A region containing no residual excitation is assigned the distinguished label \(1\), called the vacuum charge. The symbol \(1\) is a charge label rather than an ordinary numerical value.

If locality is not imposed, a distant operation may change the total charge by acting on the region from outside. When operations remain local, each charge label specifies a sector in the sense developed in the previous two chapters: states with different total charges cannot be connected by the allowed local operations.

## Fusion of two charge labels

Two regions can be combined and treated as a single larger region. The total charge of the combined region need not be unique. Charges \(a\) and \(b\) can admit several possible total charges.

The fusion product records these allowed totals:

\[
a\times b=\sum_c N_{ab}^{c}\,c.
\]

The quantity \(N_{ab}^{c}\) is a nonnegative integer called a fusion coefficient. The value zero means that total charge \(c\) is forbidden. The value one means that there is one independent way for \(a\) and \(b\) to have total charge \(c\). The value two means that there are two independent ways to obtain the same externally visible total charge \(c\).

This combination process is called fusion. Fusion does not imply that the quasiparticles are destroyed or converted into collision debris. It specifies only the total charge observed when the two particles are treated as one composite region.

The plus sign in the fusion product lists alternative allowed totals. It does not describe a statistical mixture, and it does not imply that a measurement produces every listed result simultaneously. A quantum state can be a superposition of these alternatives only when the complete experimental configuration permits such a superposition.

A fusion product therefore specifies allowed total charges. By itself, it specifies neither a prepared superposition nor a probability distribution.

## Fusion rules of the Ising model

The Ising model contains three charge labels: \(1\), \(\psi\), and \(\sigma\). Its fusion products are

\[
1\times a=a,\qquad
\psi\times\psi=1,\qquad
\psi\times\sigma=\sigma,\qquad
\sigma\times\sigma=1+\psi.
\]

In the first relation, \(a\) denotes any of the three charge labels. Fusion with the vacuum charge leaves a charge unchanged.

The relation \(\psi\times\psi=1\) states that two \(\psi\) charges have vacuum total charge. The relation \(\psi\times\sigma=\sigma\) states that combining \(\psi\) with \(\sigma\) gives total charge \(\sigma\).

The final relation states that two \(\sigma\) charges can have total charge either \(1\) or \(\psi\).

The same fusion rules can be represented as a table in which each entry lists the allowed total charges:

\(\times\) |
\(1\) |
\(\psi\) |
\(\sigma\) |
|

\(1\) |
\(1\) |
\(\psi\) |
\(\sigma\) |
|

\(\psi\) |
\(\psi\) |
\(1\) |
\(\sigma\) |
|

\(\sigma\) |
\(\sigma\) |
\(\sigma\) |
\(1+\psi\) |
|

Every nonempty entry in this table contains one total charge except the final entry. Each allowed total occurs with coefficient one.

The integer multiplying a total charge, conventionally omitted when it equals one, is the fusion coefficient. It counts independent fusion states and is not a probability.

All nonzero fusion coefficients in the Ising model equal one. The model is therefore multiplicity-free, meaning that each allowed total has exactly one fusion channel and each forbidden total has none.

The vector space of ways in which charges \(a\) and \(b\) can have total charge \(c\) is denoted by

\[
V_{ab}^{c},\qquad \dim V_{ab}^{c}=N_{ab}^{c}.
\]

This space is called a fusion space, and its dimension equals the corresponding fusion coefficient. For two \(\sigma\) charges, \(V_{\sigma\sigma}^{1}\) and \(V_{\sigma\sigma}^{\psi}\) are each one-dimensional, whereas \(V_{\sigma\sigma}^{\sigma}\) is zero-dimensional and therefore represents a forbidden channel.

If one were instead to propose \(N_{\sigma\sigma}^{\sigma}=1\), two \(\sigma\) charges would also be allowed to have total charge \(\sigma\). The resulting fusion table would not be the Ising table. The absence of this channel is part of the defining fusion data.

## Diagrammatic representation of a fusion vertex

A basis vector in \(V_{ab}^{c}\) can be represented by a trivalent vertex, meaning a vertex with three incident edges. Diagrams in this chapter are read from top to bottom: the incoming charges enter at the top, and their total charge exits at the bottom.

```
a b
\ /
\ /
c
```

When \(N_{ab}^{c}>1\), a multiplicity label \(\mu=1,\ldots,N_{ab}^{c}\) must be placed beside the vertex. The fusion channel is then specified by the complete tuple \((a,b;c,\mu)\), rather than by \(c\) alone.

Three or more charges must be represented using a sequence of pairwise fusion operations. Such a diagram is called a fusion tree.

The internal edges of a fusion tree carry intermediate charges. Selecting the labels on these edges, together with any required multiplicity labels, selects a basis state.

A fusion tree is a representation of a many-particle state. It does not assert that the system underwent a literal temporal sequence in which one collision occurred before another.

If multiplicity labels are omitted when \(N_{ab}^{c}>1\), multiple independent states with the same total charge are incorrectly represented as a single vector. The statement that an internal-edge label specifies the state is valid only when every relevant fusion coefficient is zero or one.

## Three-particle fusion bases

Consider three Ising \(\sigma\) charges constrained to have total charge \(\sigma\). In the left-associated basis, the left pair is fused first. Its intermediate charge \(x\) can be \(1\) or \(\psi\), and either intermediate result can then fuse with the third \(\sigma\) to produce total charge \(\sigma\):

```
Left pairing: ((σ σ)_x σ)_σ

σ σ σ
\ / |
\ / |
x |
\ /
\ /
σ

x = 1 or ψ
```

Alternatively, the right pair can be fused first. Its intermediate charge \(y\) can likewise be \(1\) or \(\psi\):

```
Right pairing: (σ (σ σ)_y)_σ

σ σ σ
| \ /
| \ /
| y
\ /
\ /
σ

y = 1 or ψ
```

These two trees have identical external charges and the same total charge. They define two different bases of one vector space rather than two distinct physical systems.

This common vector space is the three-particle fusion space. It is the state space on which the braid operations introduced in the previous chapter act.

The dimension follows directly from the fusion table. In the left pairing, the first pair can have total charge \(1\) or \(\psi\), and either intermediate charge can fuse with the remaining \(\sigma\) to give total charge \(\sigma\).

The left pairing therefore contains two states. The right pairing describes the same two-dimensional space in a different basis.

Consequently, three \(\sigma\) charges constrained to total charge \(\sigma\) support a two-dimensional fusion space. A different total-charge constraint can produce a different fusion space.

## The \(F\)-move as a change of fusion basis

The following diagram represents a change of pairing rather than motion of the particles:

```
σ σ σ σ σ σ
\ / | | \ /
x | --> | y
\ / \ /
σ σ
```

This change of pairing is called an \(F\)-move. A distinct operation introduced later, the \(R\)-move, exchanges particle positions.

Let \(|x\rangle_L\) denote orthonormal states in the left-pairing basis, and let \(|y\rangle_R\) denote orthonormal states in the right-pairing basis. The \(F\)-move is the basis transformation

\[
|x\rangle_L=\sum_{y\in\{1,\psi\}}
\left[F^{\sigma\sigma\sigma}_{\sigma}\right]_{xy}|y\rangle_R.
\]

In a standard gauge for Ising anyons,

\[
F^{\sigma\sigma\sigma}_{\sigma}
=\frac{1}{\sqrt 2}
\begin{pmatrix}
1&1\\
1&-1
\end{pmatrix},
\]

where the rows correspond to \(x=(1,\psi)\) and the columns correspond to \(y=(1,\psi)\) [R015]; [R023]. Here a gauge is a choice of phases for the basis vectors at fusion vertices. The explicit basis transformation is

\[
|1\rangle_L=\frac{|1\rangle_R+|\psi\rangle_R}{\sqrt2},
\qquad
|\psi\rangle_L=\frac{|1\rangle_R-|\psi\rangle_R}{\sqrt2}.
\]

Suppose the first two charges are prepared with definite fusion channel \(x=1\). If the last two charges are measured instead, the amplitudes are \(1/\sqrt2\) for \(y=1\) and \(1/\sqrt2\) for \(y=\psi\).

By the Born rule, which assigns a measurement probability equal to the squared magnitude of the corresponding amplitude, each result has probability \(1/2\). These probabilities are determined by the \(F\)-matrix.

The fusion table alone does not determine these probabilities.

The amplitudes satisfy the normalization condition

\[
\left|\frac{1}{\sqrt2}\right|^2+
\left|\frac{1}{\sqrt2}\right|^2=1.
\]

In addition, \(F^\dagger F=I\), where \(F^\dagger\) is the conjugate transpose and \(I\) is the \(2\times2\) identity matrix. Thus, changing the pairing preserves inner products and measurement probabilities.

An \(F\)-move is therefore a unitary change of basis within a fixed fusion space. It does not exchange particle positions.

If \(F\) were not unitary, inner products and therefore Born probabilities would depend on which pairing was used to represent the state. The two fusion trees could then not be interpreted as two bases of a single physical state space.

## Antiparticles and the vacuum channel

Each simple charge \(a\), where a simple charge is an irreducible charge type, has a partner \(\bar a\) such that their fusion contains the vacuum channel:

\[
N_{a\bar a}^{1}\ge 1.
\]

The charge \(\bar a\) is called the antiparticle of \(a\). The pair can fuse to vacuum, analogous to the disappearance of a particle-antiparticle pair into the vacuum sector.

In the common simple setting, the vacuum channel occurs exactly once. A charge can be its own antiparticle. In the Ising fusion table, \(\bar\sigma=\sigma\) and \(\bar\psi=\psi\).

A physical fusion experiment can have probabilistic outcomes even when every fusion coefficient \(N_{ab}^{c}\) is zero or one. A fusion coefficient counts basis states rather than outcome probabilities.

Probabilities depend on the prepared quantum state. Conversely, \(N_{ab}^{c}=2\) means that two orthogonal states have the same external labels \(a,b,c\).

In that case, a multiplicity label is required before amplitudes are considered.

If no \(\bar a\) existed, charge \(a\) could not fuse to vacuum. The vacuum sector would be unreachable from that charge, and the theory would lack duals in the sense used later.

## Associativity and dimension counting

For fixed total charge \(d\), the left-associated fusion space of three charges decomposes as

\[
V_{abc}^{d}\cong
\bigoplus_e V_{ab}^{e}\otimes V_{ec}^{d}.
\]

Here \(e\) ranges over allowed intermediate charges, \(\oplus\) denotes a direct sum over alternative intermediate sectors, and \(\otimes\) combines the two vertex spaces along a selected fusion path. The same fusion space has the right-associated decomposition

\[
V_{abc}^{d}\cong
\bigoplus_f V_{bc}^{f}\otimes V_{af}^{d}.
\]

Because these are two decompositions of the same vector space, their dimensions must agree. This requirement gives an integer consistency condition on the fusion table before any phases are assigned:

\[
\sum_e N_{ab}^{e}N_{ec}^{d}
=
\sum_f N_{bc}^{f}N_{af}^{d}.
\]

If proposed fusion coefficients violate this equation, no choice of phases can make the fusion rules associative.

For three \(\sigma\) charges with total charge \(\sigma\), the left-associated dimension is

\[
N_{\sigma\sigma}^{1}N_{1\sigma}^{\sigma}
+
N_{\sigma\sigma}^{\psi}N_{\psi\sigma}^{\sigma}
+
N_{\sigma\sigma}^{\sigma}N_{\sigma\sigma}^{\sigma}
=
(1)(1)+(1)(1)+(0)(0)
=2.
\]

The right-associated calculation is the same sum with the first pair replaced by the last pair, and it also equals \(2\). The Ising fusion table therefore passes this consistency test.

For \(n\) charges, the construction is repeated. External edges record the \(n\) individual charges, internal edges record intermediate charges, and the root records the total charge. The number of admissible edge labelings, including vertex multiplicities, equals the dimension of the fusion space with fixed total charge.

This multiplicity of internal labelings explains how non-Abelian charges can store information. Even when the total charge is fixed, several distinct internal fusion states can remain.

A local measurement enclosing only one separated particle cannot determine the complete internal fusion pattern. [Theory] In an ideal topological phase, operations supported far from one another act on this nonlocal fusion space according to the theory’s data, up to corrections caused by finite separation and unwanted excitations [R015]; [R017].

This is a claim about an effective theory and does not by itself guarantee the behavior of a fabricated device.

Associativity of fusion therefore imposes a numerical identity on the fusion coefficients at the level of dimensions. If the identity fails, no consistent three-charge fusion space exists.

## Quantum dimensions and fusion-space growth

The quantum dimension \(d_a\) measures the asymptotic contribution of charge \(a\) to the growth of large fusion spaces. For a unitary theory, the quantum dimensions are chosen as positive numbers satisfying

\[
d_a d_b=\sum_c N_{ab}^{c}d_c,
\qquad d_1=1.
\]

Equivalently, define the fusion matrix \((N_a)^c{}_{b}=N_{ab}^{c}\). Then \(d_a\) is its largest positive eigenvalue in the relevant sector. This follows from the Perron–Frobenius theorem and is not a fitted parameter [R017]; [R016].

Applying these relations to the Ising fusion table, \(\psi\times\psi=1\) gives \(d_\psi^2=1\). Positivity therefore requires \(d_\psi=1\). Similarly, \(\sigma\times\sigma=1+\psi\) gives

\[
d_\sigma^2=d_1+d_\psi=2,
\qquad d_\sigma=\sqrt2.
\]

The irrational value \(\sqrt2\) is not the dimension of an ordinary local vector space, because finite-dimensional vector spaces have integer dimensions.

Instead, \(d_\sigma\) characterizes asymptotic growth. For \(2n\) Ising \(\sigma\) charges constrained to have total charge \(1\), the fusion-space dimension is \(2^{n-1}\): two charges give one state, four give two, six give four, and the pattern continues.

The characteristic multiplicative contribution associated with each additional \(\sigma\) approaches \(\sqrt2\).

In a unitary fusion theory, a charge with \(d_a=1\) is Abelian. A charge with \(d_a>1\) supports non-Abelian growth of its fusion spaces. The total quantum dimension is

\[
\mathcal D=\sqrt{\sum_a d_a^2},
\]

where the sum extends over all simple charges. For the Ising theory, \(\mathcal D=\sqrt{1+1+2}=2\).

Thus, \(d_\sigma=\sqrt2\) is an asymptotic growth rate rather than a local Hilbert-space dimension. Interpreting it as the number of local on-site levels would contradict the integer-valued dimensions of vector spaces.

## General \(F\)-moves with fusion multiplicities

Let \(a,b,c\) be three incoming charges with total charge \(d\). In the left-associated tree, let \(e\) denote the intermediate charge, let \(\mu\) label a basis of \(V_{ab}^{e}\), and let \(\nu\) label a basis of \(V_{ec}^{d}\). In the right-associated tree, let \(f\), \(\alpha\), and \(\beta\) denote the corresponding intermediate charge and multiplicity labels. The general basis transformation is

\[
\big|((ab)_e c)_d;\mu,\nu\big\rangle
=
\sum_{f,\alpha,\beta}
\left[F^{abc}_{d}\right]_{(e,\mu,\nu)(f,\alpha,\beta)}
\big|(a(bc)_f)_d;\alpha,\beta\big\rangle.
\]

This equation defines the \(F\)-matrix convention used in this chapter. Other sources may use the inverse transformation, take a complex conjugate, or arrange the labels differently. Such alternatives are equivalent provided that the convention is stated and applied consistently.

An \(F\)-move remains a change of basis and does not exchange particle positions. Its individual matrix entries depend on the phase choices assigned to the vertex basis states.

These phase choices constitute a gauge. Observable probabilities and complete braid amplitudes are gauge-independent.

Rephasing a vertex basis changes the individual \(F\)-symbols. It does not change closed-process probabilities, consistency relations, or physically defined interference signals. An individual gauge-dependent matrix entry is therefore not itself an observable.

## The \(R\)-move as particle exchange

An \(R\)-move exchanges two neighboring particles. For a counterclockwise exchange of charges \(a\) and \(b\) in total channel \(c\), it is the unitary map

\[
R^{ab}_{c}:V_{ab}^{c}\longrightarrow V_{ba}^{c}.
\]

Diagrammatically, an \(R\)-move contains a crossing rather than a change of pairing:

```
a b b a
\ / --> \ /
c c
```

The \(R\)-move represents an actual braid and is distinct from an \(F\)-move.

In a multiplicity-free theory, each allowed \(R^{ab}_{c}\) is a phase. In the same standard Ising gauge used above,

\[
R^{\sigma\sigma}_{1}=e^{-i\pi/8},
\qquad
R^{\sigma\sigma}_{\psi}=e^{3i\pi/8}
\]

for a chosen counterclockwise convention [R015]; [R023]. Reversing the direction of exchange applies the inverse phases.

In the left-pairing basis of three \(\sigma\) charges, exchanging the first two particles is represented by the diagonal matrix

\[
B_{12}=
\begin{pmatrix}
R^{\sigma\sigma}_{1}&0\\
0&R^{\sigma\sigma}_{\psi}
\end{pmatrix}.
\]

To exchange the last two particles, the state is first transformed into the basis in which those particles fuse directly. Their \(R\)-move is then applied, followed by the inverse basis transformation:

\[
B_{23}=F\,B_{12}\,F^{-1}
\]

for the matrix convention used in the worked example. Because \(F\) mixes the two fusion channels and the two \(R\) phases are different, \(B_{12}\) and \(B_{23}\) do not commute. This provides the explicit mechanism for a non-Abelian braid action.

A braid involving particles that are not adjacent fusion partners generally requires both operations: \(F\) changes the fusion grouping, whereas \(R\) performs the exchange. A basis change alone is not a braid.

If the two \(R\) phases were equal, \(B_{12}\) would be a global phase. The matrix \(B_{23}\) would be the same global phase, and the two operations would commute. The non-Abelian action on this two-dimensional fusion space would then disappear even though the fusion table remained unchanged.

## Coherence conditions for fusion and braiding data

Four charges can be regrouped through different sequences of \(F\)-moves. When two sequences begin and end with the same fusion trees, they must define the same linear map.

This consistency requirement is the pentagon equation. Similarly, two equivalent sequences of regrouping and exchanging three charges lead to the hexagon equations, which constrain \(F\) and \(R\) jointly.

These coherence equations ensure that a complicated diagram has a unique value independent of the intermediate bookkeeping choices [R022].

The associated algebraic structure is a fusion category: a finite semisimple linear category whose simple objects represent charge types, whose tensor product represents fusion, whose unit object is \(1\), and whose associator is represented by the \(F\)-matrices. Semisimplicity means that objects decompose into finite direct sums of simple objects.

Dual objects represent antiparticles. A braided fusion category additionally contains a braiding isomorphism represented by \(R\).

A fusion category need not have \(R\)-moves. A unitary modular tensor category further imposes unitarity and a nondegeneracy condition on braiding, providing the standard algebraic structure for a complete two-dimensional anyon theory [R017]; [R016].

The fusion table, \(F\)-moves, and \(R\)-moves are the explicit computational data. The categorical terminology organizes these data into a unified mathematical structure.

The same fusion coefficients \(N_{ab}^{c}\) can admit inequivalent but internally consistent choices of \(F\)- and \(R\)-data. Fusion rules are necessary input but do not uniquely characterize the theory [R016]. If the pentagon or hexagon equations fail, a larger diagram does not have a well-defined value because different evaluation routes give different results.

## Operational evidence in laboratory systems

The preceding symbols define an effective theory. A laboratory system instead consists of a finite sample, control mechanisms, detectors, unwanted excitations, boundaries, and a microscopic Hamiltonian. Fusion-category data are therefore inferred from measurements rather than read directly from a dedicated instrument.

[Experiment] Evidence for fusion data must be based on operationally distinguishable outcomes. Relevant procedures include creating or identifying excitations, combining spatial regions, measuring total charge, and showing that the observed channels agree with a consistent fusion rule. Interferometry provides one possible method for measuring charge because a probe can respond to the monodromy of the enclosed charge, where monodromy is the effect produced by winding the probe around that charge [R023]. A single spectral peak or degeneracy is insufficient to reconstruct \(N\), and still less sufficient to determine \(F\) and \(R\).

[Experiment] Evidence for an \(F\)-matrix requires comparison of incompatible fusion-tree measurements while maintaining enough phase coherence to recover amplitudes rather than only the set of allowed outcomes. Evidence for \(R\) requires controlled exchanges, or an operationally equivalent braid, together with measurements of channel-dependent phases. Multiple operation sequences should satisfy the braid and coherence relations within the measured uncertainty.

[Theory] Even exact agreement with a limited set of matrices would establish only the effective operations that were tested. A claim of emergent anyons additionally requires that the excitations arise from a many-body phase, remain deconfined over the relevant length scale, and possess data stable under allowed local perturbations.

A claim of topological protection must also bound errors from non-topological processes, thermal excitation, finite-size splitting, and control faults. These are physical requirements beyond the fusion and braiding algebra [R015]; [R017].

## Digital emulation, defects, and emergent anyons

A digital processor can encode the two Ising fusion-tree basis states in ordinary qubits and implement the Hadamard matrix displayed above. Such an implementation is a digital emulation of an \(F\)-move.

A collection of defect spins can similarly encode a two-dimensional subspace. Neither construction by itself produces emergent \(\sigma\) anyons or topological order.

Extrinsic defects can carry nontrivial projective fusion and braiding properties, but they must be distinguished from intrinsic quasiparticles that propagate freely within the host phase [R021]. The same algebra can occur in several physical settings, and experimental evidence from the hardware determines which setting is realized.

Assigning anyonic labels to the energy levels of defect spins does not establish an anyon model. The proposed microscopic Hamiltonian must generate emergent excitations whose low-energy states obey consistent fusion and braiding data. Later chapters examine whether this more demanding physical requirement is plausible.

A programmed braid and an emergent anyon therefore remain distinct claims when the relevant algebra concerns fusion rather than exchange.

## Common conceptual errors

- Interpreting “\(+\)” as a prepared quantum superposition is incorrect. In a fusion rule, “\(+\)” denotes the allowed total-charge sectors. A quantum state, including its amplitudes in those sectors, can be specified only with additional preparation information.

- Interpreting \(N_{ab}^{c}\) as a probability is incorrect. The fusion multiplicity \(N_{ab}^{c}\) is the integer dimension of the space of fusion channels in which charges \(a\) and \(b\) combine to total charge \(c\). Probabilities instead follow from normalized state amplitudes together with a specified measurement protocol.

- Interpreting quantum dimension as the number of states at a single site is incorrect. Quantum dimension characterizes the asymptotic growth of fusion-space dimension as the number of charges increases. Thus, \(d_\sigma=\sqrt2\) cannot be the dimension of a finite local vector space.

- Not every basis transformation is a braid. An \(F\)-move changes the grouping, or parenthesization, of a fusion tree without exchanging the spatial positions of charges. An \(R\)-move exchanges two charges. Braiding nonadjacent fusion partners generally requires both \(F\)- and \(R\)-moves.

- The total-charge constraint cannot be omitted. Three \(\sigma\) charges constrained to have total charge \(\sigma\) form the two-dimensional example discussed above. A different total-charge constraint generally produces a different fusion space.

- Multiplicity labels cannot be omitted in a general theory. The statement that an internal-edge label completely specifies a fusion-tree basis state is valid only when all relevant fusion multiplicities satisfy \(N_{ab}^{c}\le1\). If a fusion vertex has multiplicity greater than one, an additional vertex label is required to distinguish the independent fusion channels.

- Gauge-dependent matrix entries are not themselves observables. Here, a gauge choice is a choice of basis phases at fusion vertices. Rephasing such a vertex basis changes individual \(F\)- and \(R\)-symbols, which are the matrix elements associated with reassociation and exchange operations. By contrast, probabilities for closed processes, consistency relations, and physically defined interference signals are gauge invariant, meaning that they do not depend on this basis choice.

- Fusion rules do not uniquely determine a topological phase. The same fusion coefficients \(N_{ab}^{c}\) can admit inequivalent sets of consistent \(F\)- and \(R\)-data. Fusion rules are therefore necessary input, but they are not a complete specification of the phase [R016].

- Labels used in a simulator must not be identified automatically with material excitations. A quantum circuit can reproduce fusion-space algebra accurately even when every underlying carrier is an ordinary physical qubit, meaning a physical two-level quantum system. Such a construction is a simulation rather than, by itself, evidence for emergent material excitations.

- Algebraic data do not establish the existence of a microscopic energy gap. A consistent set of \(F\)- and \(R\)-tables does not prove that a proposed defect Hamiltonian realizes those data. Such a realization additionally requires a gapped many-body phase, appropriate excitations, and stability under realistic perturbations.

## Verification exercises

- The equation \(N_{ab}^{c}=2\) states that there are two linearly independent fusion channels in which charges \(a\) and \(b\) combine to total charge \(c\). A multiplicity label is therefore required to distinguish them.

- Both pairings of three Ising \(\sigma\) charges with total charge \(\sigma\) have dimension two. For the left pairing,
  \[
  N_{\sigma\sigma}^{1}N_{1\sigma}^{\sigma}+N_{\sigma\sigma}^{\psi}N_{\psi\sigma}^{\sigma}=1+1=2.
  \]
  The right pairing gives the same sum when it is applied to the last pair. The two fusion trees therefore provide two different bases for the same two-dimensional fusion space.

- A fusion tree records the organization of successive fusion operations. Its external edges specify the initial charges, its internal edges specify intermediate charges, its vertices may carry multiplicity labels, and its root specifies the total charge.

- If \(F\) were not unitary, inner products would depend on the pairing used to represent the state. A unitary transformation preserves inner products, so failure of unitarity would cause Born probabilities—the probabilities obtained from squared state amplitudes—for the same physical question to disagree between pairings.

- An \(F\)-move changes the pairing of charges without exchanging their positions. An \(R\)-move exchanges neighboring charges within a specified fusion channel.

- Reproducing an \(F\)-matrix with defect-spin qubits does not by itself demonstrate emergent anyons. It demonstrates an encoded operation unless independent evidence establishes both a many-body topological phase and its emergent excitations.

The preceding construction provides fusion rules, an \(F\)-move for regrouping three charges, and an \(R\)-move for exchanging two charges. The next analysis applies this framework to a single nontrivial charge \(\tau\), for which the fusion-space dimensions generate the Fibonacci numbers.

## Sources

- [R015] C. Nayak, S. H. Simon, A. Stern, M. Freedman, and S. Das
Sarma, “Non-Abelian Anyons and Topological Quantum Computation,”
Reviews of Modern Physics 80, 1083–1159
(2008). DOI: [10.1103/RevModPhys.80.1083](https://doi.org/10.1103/RevModPhys.80.1083);
[arXiv:0707.1889](https://arxiv.org/abs/0707.1889).

- [R017] A. Kitaev, “Anyons in an Exactly Solved Model and Beyond,”
Annals of Physics 321, 2–111 (2006). DOI: [10.1016/j.aop.2005.10.005](https://doi.org/10.1016/j.aop.2005.10.005);
[arXiv:cond-mat/0506438](https://arxiv.org/abs/cond-mat/0506438).

- [R023] P. Bonderson, K. Shtengel, and J. K. Slingerland,
“Interferometry of Non-Abelian Anyons,” Annals of Physics
323, 2709–2755 (2008). DOI: [10.1016/j.aop.2008.01.012](https://doi.org/10.1016/j.aop.2008.01.012);
[arXiv:0707.4206](https://arxiv.org/abs/0707.4206).

- [R016] E. C. Rowell and Z. Wang, “Mathematics of Topological Quantum
Computing,” Bulletin of the American Mathematical Society
55, 183–238 (2018). DOI: [10.1090/bull/1605](https://doi.org/10.1090/bull/1605); [arXiv:1705.06206](https://arxiv.org/abs/1705.06206).

- [R022] G. Moore and N. Seiberg, “Classical and Quantum Conformal
Field Theory,” Communications in Mathematical Physics
123, 177–254 (1989). DOI: [10.1007/BF01238857](https://doi.org/10.1007/BF01238857).

- [R021] M. Barkeshli, P. Bonderson, M. Cheng, and Z. Wang, “Symmetry
Fractionalization, Defects, and Gauging of Topological Phases,”
Physical Review B 100, 115147 (2019). DOI: [10.1103/PhysRevB.100.115147](https://doi.org/10.1103/PhysRevB.100.115147);
[arXiv:1410.4540](https://arxiv.org/abs/1410.4540).


---
