# Chapter 18 — Fusion constraints in string-net models

Consider a honeycomb lattice whose edges can be blank or colored. A blank edge represents the absence of a string, while each colored edge carries one string type. Because the honeycomb is trivalent, exactly three edges meet at each vertex. A local branching rule specifies which triples of edge labels are allowed at such a vertex.

For the rules considered below, two edges of one color and one edge of another color may form an allowed triple. Three edges of the same color may also be allowed. A vertex with one colored edge and two blank edges is forbidden.

An individual edge-label configuration is not the physical state of interest. The relevant state is a quantum superposition of many legal configurations, each with an amplitude. Local transformations can create a small closed loop, move it across a vertex by recoupling the adjacent strings, and absorb it into the surrounding network.

A Levin–Wen model is defined here as a lattice Hamiltonian with a finite set of labels assigned to the edges of a trivalent lattice, a local branching rule specifying which triples of labels may meet, and a second local rule that inserts and recouples contractible loops. A contractible loop is one that can be continuously reduced to a point on the underlying surface. Enforcing only the branching rule does not produce a topological phase.

## Allowed trivalent-vertex label combinations

The smallest useful label set in this discussion is obtained from Fibonacci fusion. The blank edge is the vacuum label, denoted \(1\). The nontrivial label is denoted \(\tau\). Both labels are self-dual, meaning that reversing the orientation of a string leaves its label unchanged. Their fusion rules are

\[
1\times a=a,\qquad
\tau\times\tau=1+\tau,
\]

where \(a\) may be \(1\) or \(\tau\). Fusion specifies the possible outcomes when two labels are combined. The plus sign denotes two distinct allowed fusion channels, rather than the simultaneous presence of two particles.

On a trivalent lattice, the allowed unordered label triples are

\[
(1,1,1),\qquad (1,\tau,\tau),\qquad(\tau,\tau,\tau),
\]

including all permutations. A vertex containing exactly one \(\tau\) label is forbidden. The triple \((\tau,\tau,\tau)\) allows two \(\tau\) strings to meet with \(\tau\) as the continuing fusion channel.

This list defines the branching rule, which is a local constraint on the three labels incident on each vertex. Imposing this constraint alone does not establish a topological phase.

If the triple \((\tau,\tau,\tau)\) is removed, the remaining branching rule is Abelian: two \(\tau\) strings may meet only through the vacuum channel. The resulting loop algebra cannot reproduce Fibonacci fusion.

## Superpositions of admissible string-net configurations

The branching rule excludes configurations containing forbidden vertices, but it does not determine which superposition of legal configurations is the ground state.

The required ground state is a coherent superposition of many legal edge-label configurations. Coherence means that the relative amplitudes and phases between configurations are physically significant.

A local transformation may create a small closed loop, move it across a vertex, and absorb it into the surrounding network. These transformations produce closed, branching configurations over all length scales.

A string-net is such a fluctuating superposition of legal labeled networks. Levin and Wen showed that a string-net wavefunction can be realized as the exact ground state of a Hamiltonian composed of commuting local projectors [R018]. [Theory]

The toric code is a simpler example of the same general construction. It uses local projectors and elementary string rules for labels with Abelian exchange properties. In the present construction, strings may branch, and the recoupling amplitudes are not restricted to \(\pm 1\) bit-flip amplitudes.

An edge label is a microscopic basis state of the lattice Hilbert space. A closed labeled network is one component of a many-body wavefunction.

An endpoint or ribbon excitation that remains distinct under all local equivalences can represent an emergent quasiparticle. A diagrammatic endpoint or ribbon is not, solely because it has been drawn, a defect-center spin or a digitally emulated anyon.

## Equivalent representations on a single hexagonal plaquette

Consider a single hexagonal plaquette whose six outward legs all carry the vacuum label \(1\). Within this boundary condition, the branching rule permits only two boundary configurations:

```
|0> : six boundary edges are 1
|R> : six boundary edges are τ, forming a ring
```

Insert a \(\tau\) loop into \(|0\rangle\) and move it outward until it coincides with the plaquette boundary. Since \(\tau\times 1=\tau\), the resulting state is \(|R\rangle\). Denote the corresponding loop-insertion operator by \(B^\tau\). In this two-state sector, inserting and fusing a second \(\tau\) loop uses the fusion rule \(\tau\times\tau=1+\tau\). Therefore,

\[
B^\tau|0\rangle=|R\rangle,
\qquad
B^\tau|R\rangle=|0\rangle+|R\rangle.
\]

In the ordered basis \((|0\rangle,|R\rangle)\), the operator is consequently

\[
B^\tau=
\begin{pmatrix}
0&1\\
1&1
\end{pmatrix}.
\]

Define the golden ratio by

\[
\varphi=\frac{1+\sqrt5}{2}.
\]

The quantum dimensions, which assign positive algebraic weights to the label types, are \(d_1=1\) and \(d_\tau=\varphi\). The squared total quantum dimension of the input labels is

\[
\mathcal D^2=d_1^2+d_\tau^2=1+\varphi^2=\varphi+2.
\]

This operation is not equivalent to independently flipping six edge bits. It inserts and fuses a loop according to the fusion algebra. The empty configuration and the ring configuration therefore do not remain separate classical states; the operator mixes them.

If the six outward legs are not all vacuum, this two-dimensional matrix does not describe the complete action. Additional intermediate fusion channels become available, and transitions beyond the isolated-hexagon sector require an \(F\)-move, which is a basis transformation between different orders of fusion.

## Loop-weight factors

The empty network alone is not the ground state. The plaquette operation must average over loop types with weights given by their quantum dimensions:

\[
B_p=\frac{1}{\mathcal D^2}\sum_{s\in\{1,\tau\}}d_s B_p^s
=\frac{I+\varphi B_p^\tau}{\varphi+2},
\]

where \(B_p^1=I\). Here \(B_p^s\) inserts a loop of type \(s\) into plaquette \(p\), and \(I\) is the identity operator. This weighted average is the plaquette projector. It is not a six-bit flip; it projects onto the superposition selected by the input fusion data.

In the two-state sector,

\[
B_p=\frac{1}{\varphi+2}
\begin{pmatrix}
1&\varphi\\
\varphi&\varphi^2
\end{pmatrix}
=|g\rangle\!\langle g|,
\]

with

\[
|g\rangle=\frac{|0\rangle+\varphi|R\rangle}{\sqrt{\varphi+2}}.
\]

This calculation establishes three properties. First, \(B_p^2=B_p\), so \(B_p\) is a projector. Second, the selected ground-state component is not merely the empty network. Third, the relative amplitude \(\varphi\) is fixed by the input labels. The loop insertion is followed by fusion and coherent recoupling.

This two-state sector omits the additional channel structure that appears when outward legs carry \(\tau\). In that case, several intermediate fusion channels are allowed.

Moving an inserted loop through a vertex then changes how three successive fusions are parenthesized. This change of fusion basis is an \(F\)-move and is required once the hexagon is coupled to a nontrivial surrounding network.

Replacing the weights \(d_s\) with equal weights would generally eliminate idempotence. In the two-state example, the empty network and the ring would no longer define the image of a rank-one projector.

## Edge-label assignments

The single-hexagon construction extends to an oriented trivalent lattice, commonly a honeycomb. Orientation assigns a direction to each edge and is required to distinguish a label from its dual in a general theory.

Each oriented edge \(e\) carries a label \(i_e\) from a finite set \(I=\{0,1,\ldots\}\). The label \(0\), also written \(1\), denotes the vacuum.

Reversing the orientation of an edge replaces a label \(i\) by its dual \(i^*\). A dual label represents the same string type with reversed orientation. Fibonacci labels are self-dual, so their labels do not visibly change under orientation reversal.

For a general label set, the distinction between \(i\) and \(i^*\) is necessary.

A basis vector is a complete assignment of labels to all edges:

\[
|\{i_e\}\rangle=\bigotimes_e |i_e\rangle.
\]

The fusion multiplicity \(N_{ij}^{k}\) is the number of independent fusion channels in which labels \(i\) and \(j\) combine to produce \(k\). In the multiplicity-free models considered here, \(N_{ij}^{k}\) is either zero or one.

For appropriately oriented labels \(i,j,k\), a trivalent vertex is allowed when \(N_{ij}^{k^*}>0\). If the fusion data have multiplicities greater than one, an additional vertex-channel index is required to distinguish the independent channels.

Suppressing this index is therefore a simplifying assumption specific to multiplicity-free input data.

The quantum dimension \(d_i>0\) is the positive solution of

\[
d_i d_j=\sum_k N_{ij}^{k}d_k.
\]

For Fibonacci fusion, this relation gives \(d_\tau^2=1+d_\tau\), whose positive solution is \(\varphi\). These are the same quantum dimensions that determine the loop weights in the hexagon example.

The honeycomb edge labels therefore constitute the microscopic basis of the many-body Hilbert space. They are not auxiliary drawings placed over a separate set of physical degrees of freedom.

## Vertex projectors

Define \(Q_v\) to be diagonal in the edge-label basis:

\[
Q_v|i,j,k\rangle=
\begin{cases}
|i,j,k\rangle,&N_{ij}^{k^*}>0,\\
0,&N_{ij}^{k^*}=0.
\end{cases}
\]

Because its eigenvalues are zero or one, \(Q_v^2=Q_v\). A state annihilated by \(Q_v\) violates the local fusion rule at vertex \(v\).

Thus, \(Q_v\) is the vertex projector that implements the branching rule as a Hamiltonian term. It preserves allowed triples and annihilates forbidden triples.

In the Hamiltonian defined below, changing a satisfied vertex from eigenvalue one to eigenvalue zero increases the energy by \(J_v\), before any associated plaquette violations are included.

The vertex energy may equivalently be written as the penalty \(J_v(1-Q_v)\). This expression differs from \(-J_v Q_v\) only by an additive constant, which does not affect the dynamics or eigenstates.

If \(Q_v\) is omitted, illegal triples, including a vertex containing a single \(\tau\), remain in the low-energy Hilbert space. The subsequent loop operators then fail to act within a fusion-consistent subspace.

## Fusion-order transformations

Three labels can be fused in different sequential orders:

\[
((a\times b)\to x)\times c\to d
\quad\longleftrightarrow\quad
a\times((b\times c)\to y)\to d.
\]

The unitary change of basis between these two orders is

\[
|((ab)x c)d\rangle
=\sum_y [F^{abc}_{d}]_{xy}
|a(bc)y;d\rangle.
\]

Here \(a,b,c,d\) are labels, while \(x\) and \(y\) are allowed intermediate fusion channels. The coefficients \([F^{abc}_{d}]_{xy}\) are the matrix elements of an \(F\)-matrix. The \(F\)-matrices obey the pentagon equation.

The pentagon equation is a consistency condition requiring two different sequences of recouplings around a five-leg fusion tree to produce the same transformation. This condition makes neighboring plaquette operations mutually compatible [R018]; [R155].

[Theory]

In a common unitary gauge, meaning a basis convention in which the \(F\)-matrices are unitary, the only nontrivial two-dimensional Fibonacci matrix is

\[
F^{\tau\tau\tau}_{\tau}=
\begin{pmatrix}
\varphi^{-1}&\varphi^{-1/2}\\
\varphi^{-1/2}&-\varphi^{-1}
\end{pmatrix},
\]

where the rows and columns are ordered by the intermediate channels \((1,\tau)\). This matrix is real, symmetric, and unitary. Its individual signs and phases depend on the gauge convention, but consistent gauge transformations do not change measurable topological data.

When a \(\tau\) loop is moved through a vertex whose outward legs already carry \(\tau\), this matrix specifies the recoupling amplitudes. Without these amplitudes, the isolated two-state hexagon calculation cannot be extended to sectors containing additional fusion channels.

If the pentagon equation is not satisfied, neighboring operators \(B_p\) need not commute. The resulting model is then not a commuting-projector Hamiltonian.

## Action of a loop operator on a string-net configuration

For each string type \(s\), define \(B_p^s\) by the following graphical algorithm:

- Insert a closed loop of type \(s\) just inside plaquette \(p\).

- Fuse that loop into the boundary edges.

- Apply an \(F\)-move at each boundary vertex to recouple the inserted loop through the existing network.

- Sum coherently over all allowed intermediate fusion channels.

For a hexagonal plaquette, this procedure consists of six local recouplings. It does not imply that the resulting operator is a simple product of six Pauli matrices. Its matrix elements also depend on the labels carried by the legs extending outward from the plaquette.

The loop operators reproduce the fusion algebra:

\[
B_p^r B_p^s=\sum_t N_{rs}^{t}B_p^t.
\]

The weighted sum

\[
B_p=\frac{1}{\mathcal D^2}\sum_s d_s B_p^s,
\qquad
\mathcal D=\sqrt{\sum_s d_s^2},
\]

is a projector. The quantum-dimension identities establish \(B_p^2=B_p\). The pentagon equation establishes \([B_p,B_{p'}]=0\), including when \(p\) and \(p'\) are adjacent plaquettes. The branching and recoupling data also imply \([Q_v,B_p]=0\) [R018]; [R155].

The origin of the quantum-dimension weights can be expressed algebraically. Define the formal weighted loop

\[
\Omega=\sum_s d_s s.
\]

Fusion with a label \(r\) gives

\[
r\times\Omega=\sum_{s,t}d_s N_{rs}^{t}t=d_r\Omega.
\]

Consequently, fusing two weighted loops gives \(\Omega\times\Omega=\mathcal D^2\Omega\). Normalizing loop insertion by \(\mathcal D^2\) therefore makes the operation idempotent. The plaquette projector is a normalized projector onto vacuum flux.

A six-edge bit flip supplemented by chosen coefficients defines a different Hamiltonian and need not reproduce this fusion algebra.

## Hamiltonian enforcement of vertex and plaquette constraints

Let \(v\) index vertices and \(p\) index plaquettes. The dimensionless projector \(Q_v\) accepts allowed label triples at vertex \(v\), while the dimensionless projector \(B_p\) enforces the plaquette recoupling rule at plaquette \(p\). The positive energy scales \(J_v\) and \(J_p\) specify the costs of violating the corresponding rules. The many-body Hamiltonian is

\[
H=-J_v\sum_v Q_v-J_p\sum_p B_p.
\]

Every term in \(H\) has units of energy. Setting \(J_v=J_p=1\), as is often done, is a choice of energy units.

The vertex terms exclude illegal local fusion configurations. The plaquette terms place locally equivalent legal networks within the same coherent quantum state.

The construction can be organized as follows:

```
microscopic edge degree of freedom
↓
allowed fusion at every vertex Q_v = 1
↓
coherent loop fluctuations B_p = 1
↓
nonlocal ground sectors and emergent anyons
```

This Hamiltonian is an exact theoretical construction rather than a prescription for realizing the required interactions in a material. Distinguishing these two roles is essential for the subsequent analysis.

## Common eigenspace of all projectors

Because all Hamiltonian terms commute, the model is frustration free. A frustration-free Hamiltonian has a ground state that simultaneously minimizes every local term. Thus, a ground state \(|\Psi_0\rangle\) satisfies

\[
Q_v|\Psi_0\rangle=|\Psi_0\rangle,
\qquad
B_p|\Psi_0\rangle=|\Psi_0\rangle
\]

for every \(v\) and \(p\). [Theory] The first equation states that the wavefunction has support only on legal networks. The second states that it is invariant under the weighted insertion and recoupling of a contractible loop [R018]. Tensor-network constructions provide explicit representations of this coherent superposition [R159].

In this context, “condensed” does not imply that each edge has a high occupation probability. It means that closed networks fluctuate over arbitrarily large length scales in the ideal ground state, with local reconnections related by the fusion and recoupling data.

This scale-spanning proliferation of closed, branching networks is called string-net condensation [R018]. The term denotes a property of the ground-state wavefunction. It is distinct from anyon condensation, in which an already-emergent bosonic quasiparticle is identified with the vacuum.

On a surface with noncontractible cycles, meaning closed paths that cannot be continuously reduced to a point, local transformations cannot always remove global winding information. Distinct winding sectors form the topological ground-state space.

Imposing only \(Q_v=1\) produces a constrained Hilbert space of legal edge-label configurations. Without coherent dynamics generated by \(B_p\), this space may remain a classical collection of networks rather than a topological quantum phase.

## Open-string endpoints

A local operator can create a state that violates one or more projectors. A violated vertex constraint has the character of an electric charge.

A violated plaquette constraint has the character of a flux. In a non-Abelian string-net model, however, the fully mobile quasiparticles are generally composites of charge and flux.

Ribbon operators are nonlocal operators supported along extended paths. They create quasiparticles in pairs, transport them along paths, and encode their fusion and braiding through the algebra of intersecting ribbons.

The input label \(\tau\) on an edge is not itself one of these emergent quasiparticles. It is a microscopic basis label. An emergent anyon is an excitation of the collective Hamiltonian that remains distinguishable under all local equivalences.

The bulk superselection sectors, which classify excitations that cannot be transformed into one another by local operators, are systematically described by the Drinfeld center \(Z(\mathcal C)\) of the input fusion category \(\mathcal C\) [R156]; [R157]. [Theory] The Drinfeld center associates an object with consistent data specifying how it passes every string type.

This additional consistency information supplies the emergent braiding data. A separate microscopic braid operator does not have to be assigned to every edge.

Treating an edge label as an anyon therefore counts the input data rather than the excitations of \(H\).

## Intrinsic doubled topological order

For modular Fibonacci input,

\[
Z(\mathrm{Fib})\simeq \mathrm{Fib}\boxtimes\overline{\mathrm{Fib}},
\]

where the overline denotes the mirror theory with opposite braiding chirality, and \(\boxtimes\) denotes the product of the two sectors. The four bulk charges may be labeled

\[
(1,\bar1),\quad(\tau,\bar1),\quad(1,\bar\tau),\quad(\tau,\bar\tau),
\]

with quantum dimensions \(1,\varphi,\varphi,\varphi^2\), respectively. On a torus, the ideal doubled-Fibonacci model consequently has four topological ground sectors [R156]; [R158]. [Theory]

This phase is called doubled-Fibonacci order. It consists of a Fibonacci sector paired with its time-reversed partner, so the net chirality cancels.

The input label \(\tau\) is not itself an emergent anyon, and the bulk phase is not a single chiral Fibonacci theory. Chapter 19 will examine the computational consequences and limitations of this distinction.

Removing the mirror sector describes a different phase. The ordinary two-dimensional Levin–Wen construction with Fibonacci input does not produce an isolated chiral Fibonacci liquid.

## Limitations of physical crystal lattices

The Levin–Wen Hamiltonian is an exact existence proof and a precise theoretical benchmark. It does not specify a set of couplings that occurs naturally in diamond, sapphire, or silicon carbide.

A proposed defect-based implementation would first require an isolated local Hilbert space for each effective edge, with \(|1\rangle\) and \(|\tau\rangle\) encoded in two states that can be controlled reliably. It would then require a large energy penalty implementing the three-edge branching projector \(Q_v\). More stringently, it would require plaquette matrix elements generated by a product of \(F\)-moves with the exact ratio \(d_1:d_\tau=1:\varphi\).

Microscopic defect interactions are commonly pairwise at leading order. By contrast, \(B_p\) is a correlated and label-dependent operation involving an entire plaquette and its attached legs. It is not equivalent to a uniform ring-exchange interaction.

[Proposal] Ancilla-mediated perturbative gadgets, periodic drives, or digital circuits could synthesize such an operator. Each approach must independently establish the effective coefficients, unwanted terms, many-body gap, and regime of validity. The code and Turaev–Viro literature provides mathematical and computational constructions [R155]; [R158], but those results do not establish a passive defect-material phase.

[Speculation] A defect-cluster architecture might encode one edge label in each cluster and use mediators to generate \(Q_v\) and \(B_p\). The central microscopic requirement is not merely the placement of spins on a honeycomb lattice. The architecture must reproduce the category-consistent multi-edge recoupling amplitudes with sufficient accuracy that residual two-body terms, disorder, leakage, and temperature do not close the topological gap. No result in the sources used for this chapter demonstrates this hierarchy in a crystalline defect array.

Exact commutation is not required at every point throughout a topological phase. Commuting-projector topological order is stable against sufficiently weak local perturbations while the many-body gap remains open [R142]. [Theory] However, the meaning of “sufficiently weak” must be derived or measured for the proposed effective Hamiltonian. It does not justify omitting an inconvenient interaction term without analysis.

## Common conceptual errors

- **Identifying an edge label with an anyon.** The microscopic \(\tau\) label is input data. Emergent anyons are excitations of the collective Hamiltonian and belong to \(Z(\mathrm{Fib})\).

- **Equating branching constraints with topological order.** Enforcing \(Q_v=1\) produces a constrained Hilbert space. Without coherent \(B_p\) dynamics, it may remain a classical collection of legal networks.

- **Replacing recoupling with a bit flip.** The Fibonacci operator \(B_p\) depends on fusion channels and \(F\)-symbols. A six-edge flip with selected coefficients generally defines a different Hamiltonian.

- **Calling every superposition a condensate.** String-net condensation requires scale-spanning fluctuations of closed networks and the associated topological equivalences. Preparing a superposition of two configurations does not establish a phase.

- **Confusing string-net condensation with anyon condensation.** String-net condensation constructs a ground-state liquid of fluctuating networks. Anyon condensation changes topological order by condensing an emergent bosonic sector.

- **Omitting the mirror sector.** Fibonacci input in the ordinary two-dimensional Levin–Wen construction produces doubled Fibonacci rather than an isolated chiral Fibonacci phase.

- **Treating digital enforcement as passive emergence.** Measuring projectors and applying corrections can emulate or stabilize a code space. Passive topological order requires the material Hamiltonian itself to select the phase energetically.

- **Assuming exact solvability is the protection mechanism.** Commuting projectors simplify the analysis. Protection instead depends on locality, a persistent many-body gap, system size, temperature, and control of perturbations. Exact algebra characterizes the ideal model but does not by itself establish physical robustness.

## Verification exercises

- Show that \(Q_v\) is a projector. It is diagonal in the edge-label basis, with eigenvalue \(1\) on allowed triples and \(0\) on forbidden triples. Therefore, \(Q_v^2=Q_v\).

- What is the action of \(B_p^s\)? It inserts an \(s\)-type loop into plaquette \(p\), fuses that loop into the boundary, and recouples the resulting fusion trees using \(F\)-moves.

- Show that the weights \(d_s/\mathcal D^2\) make \(B_p\) a projector. The formal loop \(\Omega=\sum_s d_s s\) satisfies \(\Omega\times\Omega=\mathcal D^2\Omega\). Dividing the insertion operator by \(\mathcal D^2\) makes it idempotent, so \(B_p^2=B_p\).

- What is missing if \(Q_v=1\) is enforced without coherent \(B_p\) dynamics? The result is a constrained space of legal networks. Without loop recoupling, those networks need not form a topological liquid.

- What topological order follows from Fibonacci input? The bulk theory is \(Z(\mathrm{Fib})\), which is equivalent to Fibonacci times mirror Fibonacci and therefore has doubled-Fibonacci order.

- What fails if the edge label \(\tau\) is treated as an emergent anyon? The label \(\tau\) is microscopic input data. The bulk charges belong to \(Z(\mathrm{Fib})\) and include the mirror sector.

## Sources

- [R018] Michael A. Levin and Xiao-Gang Wen, “String-net condensation:
A physical mechanism for topological phases,” Physical Review B
71, 045110 (2005). DOI: [10.1103/PhysRevB.71.045110](https://doi.org/10.1103/PhysRevB.71.045110);
arXiv: [cond-mat/0404617](https://arxiv.org/abs/cond-mat/0404617).

- [R155] Lukasz Fidkowski, Michael Freedman, Chetan Nayak, Kevin
Walker, and Zhenghan Wang, “From string nets to nonabelions,”
Communications in Mathematical Physics 287,
805–827 (2009). DOI: [10.1007/s00220-009-0757-9](https://doi.org/10.1007/s00220-009-0757-9);
arXiv: [cond-mat/0610583](https://arxiv.org/abs/cond-mat/0610583).

- [R156] Alexei Kitaev and Liang Kong, “Models for gapped boundaries
and domain walls,” Communications in Mathematical Physics
313, 351–373 (2012). DOI: [10.1007/s00220-012-1500-5](https://doi.org/10.1007/s00220-012-1500-5);
arXiv: [1104.5047](https://arxiv.org/abs/1104.5047).

- [R157] Alexander Kirillov Jr., “String-net model of Turaev–Viro
invariants,” arXiv:1106.6033 (2011). DOI: [10.48550/arXiv.1106.6033](https://doi.org/10.48550/arXiv.1106.6033);
stable URL: [arXiv:1106.6033](https://arxiv.org/abs/1106.6033).

- [R158] Robert König, Greg Kuperberg, and Ben W. Reichardt, “Quantum
computation with Turaev–Viro codes,” Annals of Physics
325, 2707–2749 (2010). DOI: [10.1016/j.aop.2010.08.001](https://doi.org/10.1016/j.aop.2010.08.001);
arXiv: [1002.2816](https://arxiv.org/abs/1002.2816).

- [R159] Oliver Buerschaper, Miguel Aguado, and Guifré Vidal,
“Explicit tensor network representation for the ground states of
string-net models,” Physical Review B 79,
085119 (2009). DOI: [10.1103/PhysRevB.79.085119](https://doi.org/10.1103/PhysRevB.79.085119);
arXiv: [0809.2393](https://arxiv.org/abs/0809.2393).

- [R142] Sergey Bravyi, Matthew B. Hastings, and Spyridon Michalakis,
“Topological quantum order: Stability under local perturbations,”
Journal of Mathematical Physics 51, 093512
(2010). DOI: [10.1063/1.3490195](https://doi.org/10.1063/1.3490195); arXiv:
[1001.0344](https://arxiv.org/abs/1001.0344).

---
