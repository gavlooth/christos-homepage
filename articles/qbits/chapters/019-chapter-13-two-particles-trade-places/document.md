# Chapter 13 — Exchange of two identical particles

Consider two identical particles initially located at distinct positions on a two-dimensional surface. After they are moved so that each occupies the other’s original position, the initial and final configurations are physically indistinguishable because the particles have no observable labels.

The trajectory connecting these configurations contains information that is absent from the endpoint configurations. One particle may move around the other clockwise or counterclockwise, and it may wind around the other more than once.

In two spatial dimensions, there is no third spatial direction through which one trajectory can be lifted over another to remove the winding continuously.

For quantum particles that are forbidden to occupy the same point, the exchange history can act on the quantum state as a factor of \(+1\), a factor of \(-1\), a general complex phase, or a matrix. These possibilities will be developed in that order.

## Worldline representation

An endpoint configuration does not specify the trajectory between its endpoints. A trajectory can instead be represented by drawing one spatial direction horizontally and time vertically. Each particle then traces a curve through spacetime.

```
time
^ \ /
| X exchange
| / \
+------------> plane
```

The crossing in this diagram does not represent a collision. It indicates that one particle moved around the other while both remained in the plane. If the particles cannot occupy the same point, one worldline cannot be continuously pulled through the other.

A **worldline** is the trajectory of an object through spacetime. The relevant physical object is therefore a history of the particle configuration rather than only a set of positions at one time.

Two histories are considered equivalent if one diagram can be continuously deformed into the other without allowing the worldlines to intersect, changing the endpoints, or reversing the direction of time.

If collisions are allowed, one worldline can be pulled through another, and the apparent crossing carries no invariant information. If collisions remain forbidden, the worldline diagram retains information about how the particles moved.

## Comparison with three spatial dimensions

If the same exchange occurs in three spatial dimensions rather than on a two-dimensional surface, an additional spatial direction is available.

One path can then be lifted over the other, and a double exchange can be continuously undone. Under the usual assumptions for identical point particles, the remaining information records the final permutation of the particles rather than the number of times their trajectories wound around one another.

This deformation is unavailable in two spatial dimensions. Clockwise and counterclockwise exchanges therefore correspond to distinct histories.

Performing the same exchange of neighboring particles twice produces one complete winding of their worldlines. As long as collisions are forbidden, this winding cannot be continuously deformed into the trivial history.

Leinaas and Myrheim derived this enlarged set of possibilities from the topology of the space of allowed particle configurations. The additional exchange classes follow from the geometry and topology of two-dimensional configuration space. [Theory] [R127]

Consequently, identical initial and final configurations in two spatial dimensions can be connected by inequivalent trajectories.

## Bosonic exchange statistics

Although the configurations before and after an exchange are identical, the quantum state is not required to return in exactly the same form. After a counterclockwise exchange, every amplitude may return unchanged, so that the entire state is multiplied by \(+1\).

This exchange law defines a **boson**. Photons are bosons, and two photons are allowed to occupy the same quantum state.

If exchange were required to implement only an ordinary permutation of particle labels, multiplication by \(+1\) would be one allowed possibility. Multiplication by \(-1\), discussed next, would be the other, and no more general exchange factors would occur.

Two dimensions permit additional possibilities, but the bosonic value \(+1\) remains allowed.

## Fermionic exchange statistics

A second possibility is multiplication of the complete quantum state by a global minus sign. After the same counterclockwise exchange, every amplitude changes sign, and the state is multiplied by \(-1\).

This exchange law defines a **fermion**. Electrons are fermions. The exchange minus sign leads to the Pauli exclusion principle, which prevents two electrons from occupying the same single-particle quantum state.

Both bosonic and fermionic exchange laws are allowed in two dimensions. A particle confined to two dimensions is not necessarily more general than a boson or a fermion.

Thus, \(+1\) and \(-1\) remain possible exchange factors in two dimensions. In three or more spatial dimensions, they exhaust the usual exchange possibilities for identical point particles.

When the two-dimensional restriction is removed, the winding associated with a double exchange can be continuously eliminated. When the restriction is retained, \(+1\) and \(-1\) are special cases rather than the only possible exchange laws.

## Abelian anyonic exchange phase

In two spatial dimensions, the state may return from an exchange multiplied by an arbitrary phase,

\[
e^{i\theta},
\]

where the real angle \(\theta\) is measured in radians and is defined modulo \(2\pi\). A clockwise exchange contributes \(e^{-i\theta}\). The bosonic value \(+1\) corresponds to \(\theta = 0\), and the fermionic value \(-1\) corresponds to \(\theta = \pi\).

Wilczek introduced the term **anyon** for the general case because the exchange phase can have any angular value. [Theory] [R128] The term is a pun, but it also expresses the physical claim that exchange can produce a phase not restricted to \(\pm 1\).

If exchange acts only by multiplication by a phase, all exchange operations commute. Changing their order cannot rotate one internal basis state into another. Such a phase becomes observable only through a comparison between different paths, typically by interference. [Theory] [R128]; [R129]

One exchange of neighboring particles contributes \(e^{i\theta}\). Moving one particle completely around the other consists of two exchanges and contributes \(e^{i 2\theta}\). A full winding and a single exchange are therefore distinct histories.

**Abelian anyonic statistics** is consequently a one-dimensional exchange representation characterized by a phase. Bosons and fermions correspond to two particular values of that phase.

## The braid group

With two worldlines, there is only one neighboring pair, so there is no pair of distinct crossings whose ordering can be compared.

Consider instead three particles at positions labeled left, middle, and right. First exchange the left pair counterclockwise and then exchange the right pair counterclockwise. Reversing this order produces a visibly different worldline history, even before any matrix representation is introduced.

```
left then right right then left

\ / | | \ /
X | | X
/ \ | | / \
| \ / \ / |
| X X |
| / \ / \ |
```

A worldline tangle considered up to continuous deformations that never allow strands to pass through one another is called a **braid**. Two braids are composed by stacking one above the other. The set of all braids on \(N\) strands, equipped with this stacking operation, forms the **braid group**.

The braid group on \(N\) strands is denoted by \(B_N\). Its generators are the counterclockwise exchanges of neighboring strands.

Denote these generators by \(\sigma_1,\ldots,\sigma_{N-1}\). The generator \(\sigma_i\) exchanges the objects currently occupying neighboring positions \(i\) and \(i+1\).

Its inverse, \(\sigma_i^{-1}\), performs the corresponding clockwise exchange, and therefore

\[
\sigma_i\sigma_i^{-1} = 1.
\]

The relation \(\sigma_i^2 = 1\) is not imposed. A braid retains winding information rather than recording only the final permutation. If that additional relation were imposed, the braid group would reduce to the ordinary permutation group that describes the corresponding exchange classes in three dimensions.

Crossings involving well-separated pairs do not affect one another and therefore commute:

\[
\sigma_i\sigma_j = \sigma_j\sigma_i
\quad\text{when }|i-j|\ge 2.
\]

Adjacent generators obey an additional deformation rule. Sliding one crossing through the junction formed by two others changes the drawing but not the braid class:

\[
\sigma_i\sigma_{i+1}\sigma_i
=
\sigma_{i+1}\sigma_i\sigma_{i+1}.
\]

These relations provide the complete presentation used here. Generators with nonadjacent indices commute, adjacent generators satisfy the three-strand braid relation, and generator squares are not the identity.

It follows that two generators can fail to commute even though each represents an exchange of neighboring particles.

If the relation \(\sigma_i^2=1\) were imposed, a double exchange would become trivial, clockwise and counterclockwise exchanges would become equivalent, and the resulting group would be the permutation group. The absence of this relation is the essential two-dimensional enlargement.

## Configuration space of identical particles

Braids describe the collision-free histories of identical particles rather than an additional structure imposed on those histories.

For \(N\) point-like objects in the plane, an ordered list of positions is

\[
(\mathbf r_1,\ldots,\mathbf r_N)\in(\mathbb R^2)^N,
\]

where \(\mathbf r_j = (x_j,y_j)\) has units of length. The set of configurations containing at least one collision is

\[
\Delta = \{(\mathbf r_1,\ldots,\mathbf r_N):\mathbf r_j=\mathbf r_k
\text{ for at least one }j\ne k\}.
\]

The set \(\Delta\) must be removed because an exchange path is assumed to keep all objects at distinct positions. For identical objects, a permutation of temporary particle labels does not change the physical configuration. The resulting **configuration space**, meaning the space of physically distinct allowed arrangements, is

\[
\mathcal C_N(\mathbb R^2)
=
\frac{(\mathbb R^2)^N\setminus\Delta}{S_N},
\]

where \(S_N\) is the group of all permutations of \(N\) labels.

A motion that begins and ends at the same physical configuration is a loop in \(\mathcal C_N\). Two loops belong to the same class if one can be continuously deformed into the other without intersecting \(\Delta\). These equivalence classes form the **fundamental group**, which is the group of deformation classes of loops based at a fixed configuration. For particles in the plane, this group is the braid group:

\[
\pi_1\!\left(\mathcal C_N(\mathbb R^2)\right) = B_N.
\]

[Theory] [R127]; [R129] This equation establishes the relation between collision-free exchange paths and braids. In three or more spatial dimensions, the analogous ordinary-exchange classes reduce to the permutation group.

A wavefunction is not required to return to the same complex value after transport around such a loop. Equivalently, paths may be lifted to a simply connected covering space, with a unitary transformation imposed when the projected path closes in the original configuration space.

Consistency requires this transformation to depend only on the loop class and to preserve the composition operation defined by stacking loops. These requirements define a **unitary representation** of \(B_N\), meaning a group homomorphism from braid classes to unitary linear operators.

[Theory] [R127]; [R129]

Every braid matrix introduced later is therefore a linear action associated with a loop class in configuration space.

If the identification of identical particles is omitted, the resulting ordered trajectories retain unphysical particle labels. If \(\Delta\) is not removed, collisions are permitted and the fundamental group collapses.

## A two-dimensional matrix representation of three-strand braids

A **representation** assigns a matrix to each braid so that braid composition corresponds to matrix multiplication. Let \(\rho(b)\) denote the matrix assigned to a braid \(b\). The representation preserves composition:

\[
\rho(b_1 b_2) = \rho(b_1)\rho(b_2).
\]

Products of operators act on a ket from right to left. The symbol \(\rho\) denotes the representation and is not a density matrix.

An overall phase can be unobservable for a closed, isolated quantum system. Relative phases between distinct paths can be measured through interference.

For two strands, there is only one neighboring exchange generator, so no pair of generators exists whose ordering can be tested. Three strands provide the smallest case in which noncommutativity can be examined. Consider a two-dimensional state space with orthonormal basis kets \(|0\rangle\) and \(|1\rangle\). Define the Pauli matrices

\[
Z = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix},\qquad
X = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix},
\]

and assign

\[
A \equiv \rho(\sigma_1) = e^{-i\pi Z/4}
= \frac{1}{\sqrt{2}}\begin{pmatrix} 1-i & 0 \\ 0 & 1+i
\end{pmatrix},
\]

\[
B \equiv \rho(\sigma_2) = e^{-i\pi X/4}
= \frac{1}{\sqrt{2}}\begin{pmatrix} 1 & -i \\ -i & 1
\end{pmatrix}.
\]

The imaginary unit satisfies \(i^2 = -1\). Both matrices are unitary, meaning that their inverses equal their conjugate transposes. Direct multiplication gives \(A^\dagger A = B^\dagger B = I\), where \(\dagger\) denotes conjugate transpose and \(I\) is the identity matrix.

The two possible orderings are

\[
AB = \frac12\begin{pmatrix}
1-i & -1-i \\
1-i & 1+i
\end{pmatrix},\qquad
BA = \frac12\begin{pmatrix}
1-i & 1-i \\
-1-i & 1+i
\end{pmatrix}.
\]

These matrices are unequal. Their actions on \(|0\rangle\), up to an overall phase, are

\[
AB|0\rangle \sim \frac{|0\rangle+|1\rangle}{\sqrt{2}},\qquad
BA|0\rangle \sim \frac{|0\rangle-i|1\rangle}{\sqrt{2}}.
\]

An \(X\)-basis measurement of the first state produces the outcome \((|0\rangle+|1\rangle)/\sqrt{2}\) with certainty. The same outcome occurs for the second state with probability \(1/2\). The two operation orders are therefore experimentally distinguishable.

Although the matrices do not commute, they must still satisfy the braid-group relation. Direct calculation gives

\[
ABA = BAB = -\frac{i}{\sqrt{2}}
\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}.
\]

This is the three-strand braid relation. Up to basis and overall-phase conventions, these matrices form an Ising-type two-dimensional braid representation.

[Theory] [R015]; [R134] They are used here as an algebraic model. Programming these matrices into a pulse sequencer would not by itself create Ising anyons.

Thus, \(AB\neq BA\) is compatible with \(ABA=BAB\). The first equality expresses noncommutativity, while the second expresses the braid relation. Both properties are required.

## Four classes of exchange action

A one-dimensional representation assigns each neighboring exchange a single complex number of magnitude one.

For a boson,

\[
\rho(\sigma_i) = +1.
\]

For a fermion,

\[
\rho(\sigma_i) = -1.
\]

For an anyon whose exchange action is only a phase,

\[
\rho(\sigma_i) = e^{i\theta}.
\]

Bosons and fermions correspond to the special values \(\theta = 0\) and \(\theta = \pi\). All complex phase factors commute, so changing the order of exchanges cannot rotate one internal basis state into another.

The three-strand example is different. The same particle positions support a two-dimensional state space, and the two neighboring exchanges are represented by matrices satisfying

\[
AB \ne BA.
\]

When exchange acts by matrices on a state space of dimension greater than one, and at least one pair of those matrices fails to commute, the exchange statistics are called **non-Abelian**. This term describes the representation. It does not refer to electric charge, and it does not imply that the particle paths physically collide.

A single exchange matrix cannot demonstrate non-Abelian statistics. The test requires enough strands to define at least two operations whose ordering can be compared, as in the preceding calculation.

Arbitrary noncommuting matrices are also insufficient. The matrices must satisfy the braid relations and must be unitary.

The matrices \(A\) and \(B\) satisfy these requirements.

Non-Abelian statistics is therefore a property of a representation of \(B_N\), rather than a phase attached to one isolated exchange.

## Degenerate fusion spaces at fixed particle positions

The two-dimensional state space in the preceding example can exist even when the particle positions remain fixed. The basis states \(|0\rangle\) and \(|1\rangle\) represent distinct quantum states associated with the same spatial configuration.

For example, consider a pair of identical anyons and classify it according to the effective excitation observed from far away. Two anyons of the same type may collectively appear either as no additional excitation or as one residual excitation. These are two distinct possible outcomes.

A prepared state may be a superposition of these outcomes. Measuring the pair selects one of them.

```
a a
\ /
\ /
?
```

The question mark denotes the residual label. For fixed particle positions and a fixed total residual label, the set of allowed residual outcomes spans a **fusion space**.

Combining particles is therefore already a quantum operation. Particle motion is not required for the system to possess more than one state.

Only the existence of multiple basis states is needed in this chapter. The matrices \(A\) and \(B\) act on such a space. The next chapter will introduce the residual labels, the tree diagrams that organize them, and the \(F\)-matrices that describe changes between different tree groupings and underlie explicit braid representations.

If the degeneracy is removed, no multidimensional state space remains on which exchange can act as a nontrivial matrix; each braid can then contribute at most a phase. Conversely, degeneracy without the braid relations defines a degenerate subspace but not exchange statistics.

## Adiabatic transport and holonomy

Suppose a Hamiltonian \(H(\boldsymbol\lambda)\) depends on control parameters \(\boldsymbol\lambda\) that specify the positions of well-separated quasiparticles. A **Hamiltonian** is the operator that determines the system’s energies and time evolution. If the parameters are varied slowly around a closed path while the system remains within a degenerate low-energy subspace, the state can acquire a matrix-valued geometric transformation.

After ordinary dynamical phases, which depend on the elapsed time, are removed, the remaining geometric transformation is called a **holonomy**. A holonomy depends on the path in parameter space rather than only on the duration of the evolution. In an ideal topological phase, the resulting unitary operator depends only on the braid class. [Theory] [R015]

The requirements of slow motion and large separation correspond to physical inequalities. The motion must be slow enough to avoid exciting states across the many-body energy gap, but it must also finish before decoherence or uncontrolled quasiparticle motion destroys the state.

The quasiparticles must remain separated by distances much greater than the correlation length of the phase. The **correlation length** is the characteristic distance over which local correlations decay. This separation suppresses local couplings that would otherwise substantially split the intended degeneracy. Later chapters will express these requirements as energy, length, and timing budgets.

No dimensional estimate is required here. A braid operator and a statistical angle are dimensionless. Laboratory time is measured in seconds, while energy gaps are measured in joules or electronvolts. The relevant inequalities depend on the specific Hamiltonian and cannot be obtained from braid topology alone.

If adiabaticity is not maintained, the motion populates excited states, and the resulting transformation is no longer the holonomy of the intended subspace. If the particles are not sufficiently separated, the degeneracy splits, and the motion becomes ordinary dynamical evolution of a unique ground state.

## Emergent quasiparticles and microscopic defects

An **emergent quasiparticle** is a localized excitation of an interacting many-body Hamiltonian that behaves as an effective particle at low energy, even though no corresponding fundamental particle is present among the microscopic constituents. A phonon is an emergent quasiparticle but is not an anyon. An emergent anyon is the more specific case in which exchanges of the excitation realize a nontrivial braid representation in an effectively two-dimensional topological phase.

A defect in diamond is a microscopic imperfection with electronic and nuclear degrees of freedom. Being point-like or capable of encoding a qubit does not make such a defect an anyon.

Defects could eventually serve as microscopic components of a two-dimensional Hamiltonian whose collective excitations are anyons. Establishing the connection from microscopic ingredients to an emergent topological phase constitutes most of the engineering problem.

Fractional quantum Hall devices provide evidence for Abelian anyonic statistics. [Experiment] At filling factor \(\nu = 1/3\), collider measurements reported correlations consistent with fractional exchange statistics, while an electronic Fabry–Pérot interferometer reported a statistical phase associated with quasiparticle braiding.

[R130]; [R131] These experiments concern collective excitations of an interacting electron system rather than software labels assigned to ordinary particles. Inferring a statistical angle from an interference or correlation signal remains dependent on models and device details. Therefore, “evidence consistent with” is more accurate than claiming that a braid matrix was directly observed.

A physical anyon is consequently an excitation of a many-body phase rather than a renamed microscopic defect.

## Emulated braids and hardware realizations

A programmable processor can prepare an encoded many-qubit state and apply gates whose logical action realizes a braid representation. An **emulated braid** is a braid implemented through a designed sequence of gates, measurements, or code deformations rather than by adiabatic transport of persistent quasiparticle eigenstates of the hardware Hamiltonian.

[Experiment] In 2023, a superconducting processor implemented a generalized stabilizer code and a unitary protocol for projective Ising-type graph defects, testing fusion and non-Abelian exchange effects. [R132] The paper explicitly states that its mobile objects were not quasiparticles that persisted as eigenstates throughout Hamiltonian evolution; instead, gates deformed the stabilizer graph. This procedure constitutes a substantive emulation of braid physics, but it does not show that the processor material passively occupies a non-Abelian topological phase.

In a defect-engineered platform, implementing a braid matrix through programmed microwave pulses demonstrates control of the encoded state space. It does not establish the existence of an emergent excitation spectrum.

A stronger claim requires the material or effective analog Hamiltonian itself to support the relevant phase and localized excitations. Exchanges must then implement the braid representation while the system remains within its low-energy manifold. [Proposal] Engineered defect arrays could be designed toward this objective.

[Speculation] Arranging defects on a planar lattice or drawing crossing paths between them is not by itself sufficient to establish anyonic behavior.

A programmed braid and an emergent anyon are therefore distinct physical claims, even when they are described by the same matrix.

## Distinct physical and computational concepts

A **physical defect qubit** is a controlled microscopic degree of freedom, such as a defect spin.

An **encoded qubit** is a selected subspace distributed across multiple physical degrees of freedom.

An **emulated braid** is a protocol whose logical gates reproduce a braid representation.

An **emergent quasiparticle** is an excitation of the many-body Hamiltonian. It is an anyon only if its physical exchanges exhibit the required braid statistics.

**Topological order** is a property of a many-body phase rather than of an individual gate sequence.

These descriptions can all apply within one experiment, but none follows automatically from the preceding description.

## Common conceptual errors

- **Incorrect claim: Only bosons and fermions exist.** This conclusion assumes the permutation topology applicable in three or more spatial dimensions. Permutation topology classifies exchanges only by the resulting permutation of particle positions. In two spatial dimensions, however, the collision-free configuration space—the space of all allowed particle positions with coincident positions excluded—has braid-group topology. The braid group retains information about how particle trajectories wind around one another. [R127]; [R129]

- **Incorrect claim: Every two-dimensional excitation is an anyon.** Ordinary bosons and fermions can also exist in two dimensions. The particle statistics are determined by the exchange representation, which assigns a phase or operator to each allowed exchange.

- **Incorrect claim: Every unusual exchange phase is non-Abelian.** A scalar exchange factor \(e^{i\theta}\), regardless of the value of \(\theta\), defines Abelian statistics because scalar factors commute. Non-Abelian statistics requires a multidimensional state space and braid operators that do not all commute.

- **Incorrect claim: If \(AB\) and \(BA\) are different matrices, then \(A\) and \(B\) automatically define valid braids.** Arbitrary noncommuting matrices are insufficient. A braid-group representation must also satisfy the braid relations, which encode consistent deformations of braid trajectories, and unitarity, which preserves quantum-state norms and probabilities. The matrices used in the worked example satisfied both requirements.

- **Incorrect claim: A full winding is equivalent to one exchange.** One exchange of neighboring objects is represented by the braid-group generator \(\sigma_i\). Moving one object completely around the other corresponds to two successive exchanges and is represented by \(\sigma_i^2\). For an Abelian anyon, whose exchange operation is a scalar phase, the corresponding factors are \(e^{i\theta}\) and \(e^{i 2\theta}\), respectively.

- **Incorrect claim: A quasiparticle is a small constituent particle.** A quasiparticle is a collective low-energy excitation of a many-body system. Its usefulness as an effective description does not require it to be a microscopic constituent. Its identity depends on the system’s Hamiltonian, which specifies its dynamics, and on the many-body phase realized by that Hamiltonian.

- **Incorrect claim: Executing the required unitary operators proves that the associated particles are emergent.** A conventional processor can compile the operators \(A\) and \(B\) exactly. Such an implementation demonstrates an emulated braid representation. Emergent anyons require that the representation arise physically from exchanging quasiparticle excitations supported by the system’s many-body phase.

- **Incorrect claim: Topological protection is perfect.** Topological dependence is an ideal low-energy property in which an operation depends on the topological class of a trajectory rather than its detailed geometry. Finite separation, finite temperature, disorder, nonadiabatic motion, leakage, measurement error, and stray quasiparticles can all damage a braid.

[Theory] [R015]; [R030] Topological protection suppresses specified local errors under specified conditions. It does not suppress every possible error mechanism.

## Concept checks

- **Explain why exchange in two spatial dimensions can be richer than exchange in three spatial dimensions.**

  In two dimensions, collision-free loops in the configuration space of identical particles form the braid group. Consequently, a double exchange need not be continuously deformable to the trivial path. The exchange history can therefore retain winding information that is absent from the corresponding permutation description in three or more dimensions.

- **Show that imposing \(\sigma_i^2=1\) reduces the braid group to the permutation group.**

  The additional relation \(\sigma_i^2=1\) makes a double exchange trivial. It therefore identifies clockwise and counterclockwise exchanges and removes winding information. Only the permutation of the final particle positions remains.

- **State the relation among a boson, a fermion, and an Abelian anyon.**

  All three have one-dimensional exchange representations. Their exchange factors are, respectively, \(+1\), \(-1\), and the general phase \(e^{i\theta}\). Bosons and fermions are the special cases \(\theta = 0\) and \(\theta = \pi\).

- **Determine what fails when \(AB\neq BA\) but \(ABA\neq BAB\).**

  The matrices do not represent the braid group. The condition \(AB\neq BA\) establishes noncommutativity, but noncommutativity alone does not define particle statistics. The matrices must also satisfy the three-strand braid relation \(ABA=BAB\), which expresses the equivalence of the corresponding continuous rearrangements of three strands.

- **State the defining feature of a non-Abelian anyon.**

  Braids act as unitary matrices on a multidimensional degenerate state space, meaning a space of distinct quantum states with the same energy, and at least some braid operations do not commute.

- **Assess whether a gate sequence implementing \(A\) and \(B\) establishes the existence of emergent anyons.**

  It does not. Such a gate sequence establishes an emulated braid representation. Emergence additionally requires exchangeable quasiparticle excitations produced by the many-body Hamiltonian.

At this stage, the description includes worldlines, which are particle trajectories in spacetime; the possible exchange laws; the braid group that classifies ordered exchanges; a pair of noncommuting matrices; and a fusion space on which those matrices act. A fusion space is the state space associated with the possible collective fusion outcomes of anyons. The next chapter constructs that space from residual labels and tree representations.

## Sources

- [R127] J. M. Leinaas and J. Myrheim, “On the theory of identical
particles,” Il Nuovo Cimento B 37, 1–23
(1977). DOI: [10.1007/BF02727953](https://doi.org/10.1007/BF02727953).

- [R128] F. Wilczek, “Quantum mechanics of fractional-spin particles,”
Physical Review Letters 49, 957–959 (1982).
DOI: [10.1103/PhysRevLett.49.957](https://doi.org/10.1103/PhysRevLett.49.957).

- [R129] Y.-S. Wu, “General theory for quantum statistics in two
dimensions,” Physical Review Letters 52,
2103–2106 (1984). DOI: [10.1103/PhysRevLett.52.2103](https://doi.org/10.1103/PhysRevLett.52.2103).

- [R015] C. Nayak, S. H. Simon, A. Stern, M. Freedman, and S. Das
Sarma, “Non-Abelian anyons and topological quantum computation,”
Reviews of Modern Physics 80, 1083–1159
(2008). DOI: [10.1103/RevModPhys.80.1083](https://doi.org/10.1103/RevModPhys.80.1083);
arXiv: [0707.1889](https://arxiv.org/abs/0707.1889).

- [R030] A. Yu. Kitaev, “Fault-tolerant quantum computation by
anyons,” Annals of Physics 303, 2–30 (2003).
DOI: [10.1016/S0003-4916(02)00018-0](https://doi.org/10.1016/S0003-4916(02)00018-0);
arXiv: [quant-ph/9707021](https://arxiv.org/abs/quant-ph/9707021).

- [R130] H. Bartolomei et al., “Fractional statistics in
anyon collisions,” Science 368, 173–177
(2020). DOI: [10.1126/science.aaz5601](https://doi.org/10.1126/science.aaz5601);
arXiv: [2006.13157](https://arxiv.org/abs/2006.13157).

- [R131] J. Nakamura, S. Liang, G. C. Gardner, and J. M. Manfra,
“Direct observation of anyonic braiding statistics,” Nature
Physics 16, 931–936 (2020). DOI: [10.1038/s41567-020-1019-1](https://doi.org/10.1038/s41567-020-1019-1).

- [R132] M. B. Andersen et al. (Google Quantum AI and
Collaborators), “Non-Abelian braiding of graph vertices in a
superconducting processor,” Nature 618,
264–269 (2023). DOI: [10.1038/s41586-023-05954-4](https://doi.org/10.1038/s41586-023-05954-4);
arXiv: [2210.10255](https://arxiv.org/abs/2210.10255).

- [R133] A. Stern, “Anyons and the quantum Hall effect—a pedagogical
review,” Annals of Physics 323, 204–249
(2008). DOI: [10.1016/j.aop.2007.10.008](https://doi.org/10.1016/j.aop.2007.10.008);
arXiv: [0711.4697](https://arxiv.org/abs/0711.4697).

- [R134] D. A. Ivanov, “Non-Abelian statistics of half-quantum
vortices in p-wave superconductors,” Physical Review Letters
86, 268–271 (2001). DOI: [10.1103/PhysRevLett.86.268](https://doi.org/10.1103/PhysRevLett.86.268);
arXiv: [cond-mat/0005069](https://arxiv.org/abs/cond-mat/0005069).

---
