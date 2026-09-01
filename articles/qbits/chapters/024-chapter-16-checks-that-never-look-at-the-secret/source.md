# Chapter 16 — Local stabilizer checks and encoded information

Consider a square lattice with periodic boundary conditions in both directions, so that its underlying surface is a torus. Each edge carries one spin-\(1/2\), which serves as a qubit.

A local binary-valued operator is associated with each vertex, and a different local binary-valued operator is associated with each face. These operators are called checks because their eigenvalues indicate whether the corresponding local constraint is satisfied.

The check outcomes provide only local information. They identify violated vertex or face constraints, but they do not determine whether a loop of flipped edges winds around a noncontractible cycle of the torus.

A toric code is defined here as this lattice model: qubits reside on edges, the two classes of vertex and face checks are those defined below, and those checks specify either a Hamiltonian or a quantum code.

A color-center spin is one physical qubit in a crystal. Assigning one defect to each drawn edge does not by itself produce the required checks or an energy gap.

## Eight-qubit periodic lattice

Consider a \(2\times 2\) square grid with opposite sides identified. The coordinates \(x,y\in\{0,1\}\) are evaluated modulo \(2\). Let \(h_{x,y}\) denote the horizontal edge from \((x,y)\) to \((x+1,y)\), and let \(v_{x,y}\) denote the vertical edge from \((x,y)\) to \((x,y+1)\).

The lattice contains four horizontal edges and four vertical edges. Because each edge carries one qubit, the Hilbert space has dimension \(2^8=256\).

A planar representation of this periodic patch is

```
h00 h10
(0,0) -----> (1,0) ------> (0,0)
| | |
v00| v10 | | periodic
v v v
(0,1) -----> (1,1) ------> (0,1)
h01 h11
| |
v01| v11 |
v v
(0,0) (1,0) (bottom = top)
```

Repeated vertices in this drawing represent periodic identifications rather than additional sites. A \(1\times 1\) periodic representation is too small to display four distinct edges incident on each vertex. The \(2\times 2\) patch is the smallest patch that preserves the intended local incidence pattern while retaining two independent noncontractible cycles.

This construction is therefore already a lattice on a torus rather than a crystal. The eight spins label lattice edges. They are not eight nitrogen-vacancy centers that acquire topology merely by being placed near one another.

If periodicity is removed, the same local checks can still be defined on a planar patch with a boundary. The resulting count of unconstrained states is different because the global topology and boundary conditions have changed.

## Vertex stabilizer operators

Each vertex is incident on four edges: the horizontal edge directed to the right, the horizontal edge arriving from the left, the vertical edge directed upward, and the vertical edge arriving from below.

The vertex operator is the product of Pauli \(X\) operators on these four edges. For the vertex at \((x,y)\), it is

\[
A_{x,y}=X_{h_{x,y}}X_{h_{x-1,y}}X_{v_{x,y}}X_{v_{x,y-1}},
\]

where \(X_e\) is the Pauli \(X\) operator acting on edge \(e\), and every index is evaluated modulo \(2\).

This four-edge operator is called a star operator. A ground state has star eigenvalue \(+1\). An eigenvalue of \(-1\) indicates a violated vertex constraint.

Two stars that share an edge commute because both act with Pauli \(X\) on that edge and contain only \(X\) operators. Consequently, all star operators can be assigned simultaneous definite eigenvalues.

The choice of Pauli type is essential. If a face operator acted with \(X\), rather than \(Z\), on only one edge shared with a star, that star and face operator would anticommute. The division between \(X\)-type vertex checks and \(Z\)-type face checks is therefore part of the model’s defining operator algebra.

## Face stabilizer operators

Each square face is bounded by four edges: its bottom, right, top, and left edges.

The face operator is the product of Pauli \(Z\) operators on these four edges. For the square with lower-left corner at \((x,y)\), it is

\[
B_{x,y}=Z_{h_{x,y}}Z_{v_{x+1,y}}Z_{h_{x,y+1}}Z_{v_{x,y}},
\]

where \(Z_e\) is the Pauli \(Z\) operator acting on edge \(e\). The indices are again evaluated modulo \(2\).

This four-edge operator is called a plaquette operator. A ground state has plaquette eigenvalue \(+1\). An eigenvalue of \(-1\) indicates a violated face constraint.

Stars are products of \(X\), whereas plaquettes are products of \(Z\). This distinction determines the local algebra of the model.

If the four-\(Z\) plaquette product were replaced by four \(X\) operators on the same face, its algebra with the stars would change. A star and that modified face operator would act with matching Pauli types on their shared edges, and the two canceling minus signs associated with the original \(X\)-\(Z\) overlaps would no longer be guaranteed.

## Pair creation and transport around a plaquette

Let \(|\psi_0\rangle\) be a state for which every star and every plaquette has eigenvalue \(+1\). Applying \(Z\) to the single edge \(h_{0,0}\) creates two violated star checks.

Each star contains Pauli \(X\) operators, and \(X\) and \(Z\) anticommute when they act on the same edge. The operator \(Z_{h_{0,0}}\) therefore anticommutes with the two stars incident on \(h_{0,0}\), namely the stars at \((0,0)\) and \((1,0)\).

The eigenvalues of these two stars change from \(+1\) to \(-1\). The resulting violated vertices are called \(e\) anyons, where an anyon is a localized excitation characterized by its fusion and exchange properties in two spatial dimensions.

The label \(e\) denotes a violated star. A different label will be used below for violated plaquettes.

Applying \(Z_{v_{1,0}}\) next changes the star eigenvalue at the shared endpoint \((1,0)\) for a second time, returning it to \(+1\).

A new violated endpoint appears at \((1,1)\). Thus the second operation transports one member of the pair.

Applying \(Z_{h_{0,1}}\) moves that endpoint to \((0,1)\). Applying \(Z_{v_{0,0}}\) then removes both remaining violated endpoints.

The product of the four operations is one plaquette operator:

\[
Z_{h_{0,0}}Z_{v_{1,0}}Z_{h_{0,1}}Z_{v_{0,0}}=B_{0,0}.
\]

Because \(B_{0,0}|\psi_0\rangle=|\psi_0\rangle\), the completed path around a single square produces no change detectable by the checks. Intermediate states contain a pair of excitations, while the complete closed path is itself a stabilizer check.

A different result is obtained if the sequence continues around a periodic direction rather than closing around one square.

When the endpoints meet, they annihilate, and every local check again has eigenvalue \(+1\). The remaining closed loop is noncontractible, meaning that it cannot be continuously reduced to a point on the torus.

Such a loop is not a product of local plaquette operators. The local checks therefore detect no excitation even though the winding sector has changed.

If the sequence stops after three edges, one \(e\) remains. The state still carries excitation energy and has not returned to the codespace, defined as the simultaneous \(+1\) eigenspace of all stabilizer checks.

## Direct- and dual-lattice string operators

A path \(\gamma\) along the ordinary, or direct, edges of the grid defines a \(Z\)-string operator

\[
W_e(\gamma)=\prod_{e\in\gamma} Z_e.
\]

At each interior vertex, the path uses two of the four incident edges. The string therefore anticommutes twice with that star, producing no net sign change. At each endpoint, the path uses one incident edge and flips the corresponding star eigenvalue. These endpoint excitations are the \(e\) anyons described above.

The dual lattice is obtained by placing a dual vertex at the center of every face and drawing dual edges across the original edges. A path \(\gamma^*\) on this dual lattice crosses a set of ordinary edges. Its associated \(X\)-string operator is

\[
W_m(\gamma^*)=\prod_{e\perp\gamma^*}X_e.
\]

This operator flips the plaquette checks at the two endpoint faces of the dual path. The resulting violated faces are called \(m\) anyons.

Star checks detect \(e\) excitations, and plaquette checks detect \(m\) excitations. An open \(Z\) string creates \(e\) excitations at its endpoints, while an open \(X\) string creates \(m\) excitations at its endpoints.

If both types of check are violated at the same location, the composite excitation is \(\varepsilon=e\times m\). It carries one electric violation and one magnetic violation.

A Pauli \(Y\) error on one edge does not define a third independent excitation species. Since \(Y=iXZ\), it contributes to both neighboring star and plaquette syndromes.

## Commutation of the stabilizer checks

Each star \(A_v\) and each plaquette \(B_p\) is Hermitian and squares to the identity. Its only possible eigenvalues are therefore \(+1\) and \(-1\). Here \(v\) labels a vertex and \(p\) labels a face.

Any two stars commute because they contain only Pauli \(X\) operators. Any two plaquettes commute because they contain only Pauli \(Z\) operators.

A star and a plaquette share either no edge or two edges. On one shared edge, the Pauli operators satisfy \(XZ=-ZX\). When two edges are shared, the two minus signs cancel:

\[
A_vB_p=(-1)^2B_pA_v=B_pA_v.
\]

All checks therefore commute and can have simultaneous definite eigenvalues.

These checks are the stabilizers of the model. A stabilizer is an operator that acts as the identity on the valid code states and has eigenvalue \(+1\) on those states.

If a star and a plaquette shared only one edge, they would anticommute. They could not then have simultaneously definite eigenvalues, and a Hamiltonian containing both operators would not be a sum of commuting penalties.

## Energetic penalties for violated checks

When the checks are implemented as persistent energy penalties, the lattice Hamiltonian is

\[
H_{\rm TC}=-J_e\sum_v A_v-J_m\sum_p B_p,
\]

where \(J_e>0\) and \(J_m>0\) have units of energy. Pauli products are dimensionless, so each coefficient \(J\), and hence \(H_{\rm TC}\), must carry units of energy.

A check operator is not itself a projector because its eigenvalues are \(\pm 1\). The projectors onto its two eigenspaces are

\[
P^{\pm}_{v}=\frac{I\pm A_v}{2},\qquad
P^{\pm}_{p}=\frac{I\pm B_p}{2}.
\]

Let \(N_v\) and \(N_p\) denote the numbers of vertices and faces. The Hamiltonian can then be written as

\[
H_{\rm TC}=E_0+2J_e\sum_v P^-_v+2J_m\sum_p P^-_p,
\qquad
E_0=-J_eN_v-J_mN_p.
\]

A violated star raises the energy by \(2J_e\), and a violated plaquette raises it by \(2J_m\). On a closed torus, either species must occur in pairs, so the minimum pair-creation energy is \(4J_e\) for \(e\) excitations or \(4J_m\) for \(m\) excitations.

The model is therefore a commuting-projector Hamiltonian: it is a sum of local projector penalties whose terms all commute. The exact solution and the interpretation of violated checks as anyons are due to Kitaev [R030].

A diamond crystal does not intrinsically realize \(H_{\rm TC}\). The four-body products must be engineered directly, approximated through effective interactions, or compiled into digital operations. Without those interactions, a system of eight or eight thousand spins remains a collection of ordinary spins rather than this energy model.

## Four-dimensional ground space

A ground state of \(H_{\rm TC}\) satisfies

\[
A_v|\psi\rangle=|\psi\rangle,
\qquad
B_p|\psi\rangle=|\psi\rangle
\]

for every vertex and every face. The \(2\times 2\) torus has eight written checks, but these checks are not all independent.

Every edge is incident on two vertices and borders two faces. Consequently,

\[
\prod_v A_v=I,\qquad \prod_p B_p=I.
\]

Only three stars and three plaquettes are therefore independent. Six independent binary constraints on an eight-qubit Hilbert space leave a ground-space dimension

\[
\dim \mathcal H_0=2^{8-6}=4.
\]

Equivalently, the patch encodes \(k=8-6=2\) logical qubits. For the ideal Hamiltonian on a torus, the fourfold degeneracy is exact. More generally, the toric code has \(4^g\) ground states on a closed orientable surface of genus \(g\); a torus has \(g=1\) [R030].

One of the four states can be constructed explicitly. The state \(|0\rangle^{\otimes 8}\) already satisfies \(B_p=+1\) for every face. Averaging it over products of stars gives

\[
|\psi_{00}\rangle\propto
\prod_{v\ne v_0}(I+A_v)|0\rangle^{\otimes 8}.
\]

One star \(v_0\) is omitted because the product of all stars is already \(I\). The resulting state is an equal superposition of contractible loop configurations. Applying either of two independent noncontractible wrapping operators generates the other three sectors.

The ground space therefore contains four locally indistinguishable states.

Incorrectly treating all eight checks as independent would imply that no state remains unconstrained. That conclusion fails because the two global products of checks equal the identity.

## Noncontractible logical loop operators

On the eight-edge patch, two \(Z\) loops that wind around the torus and cannot be contracted to a point are

\[
\bar Z_x=Z_{h_{0,0}}Z_{h_{1,0}},\qquad
\bar Z_y=Z_{v_{0,0}}Z_{v_{0,1}}.
\]

Two \(X\) loops that cross them once can be chosen as

\[
\bar X_x=X_{h_{0,0}}X_{h_{0,1}},\qquad
\bar X_y=X_{v_{0,0}}X_{v_{1,0}}.
\]

Each closed loop commutes with every star and every plaquette. Matching pairs share one edge and therefore anticommute; for example,

\[
\bar X_x\bar Z_x=-\bar Z_x\bar X_x.
\]

Mismatched pairs share either zero edges or two edges, so they commute. These relations are exactly the Pauli algebra of two encoded qubits.

The wrapping products are logical operators: they change the encoded ground-state sector without producing a locally detectable violated check.

A local operator cannot measure the eigenvalue of a wrapping operator. It also cannot transform one locally indistinguishable ground-state sector into another.

On an \(L\times L\) lattice, completing a noncontractible loop requires at least \(L\) single-edge Pauli operations. The minimum weight of such a wrapping operator is the code distance, \(d=L\). It is the minimum number of local errors required to change a winding sector while leaving all checks satisfied.

For sufficiently weak local perturbations that preserve a many-body gap, topological-order stability theorems imply that local indistinguishability persists and that the splitting among the four sectors is exponentially small in system size, subject to the locality assumptions of those theorems [Theory] [R142].

If the many-body gap closes, these theorems no longer apply. Local perturbations can then mix the sectors at a scale that need not vanish as \(L\) increases.

## Abelian fusion and braiding phases

The fusion rules of the four charges are

\[
e\times e=1,\qquad m\times m=1,\qquad
e\times m=\varepsilon,
\]

\[
e\times\varepsilon=m,\qquad
m\times\varepsilon=e,\qquad
\varepsilon\times\varepsilon=1,
\]

where \(1\) denotes the vacuum, meaning that no excitation remains. Every pair of charges has exactly one fusion outcome. Consequently, every fixed-charge fusion space is one-dimensional, so there is no multidimensional basis on which braiding could act by mixing states.

The string operators nevertheless have nontrivial algebra. Transporting an \(e\) around an \(m\) produces a \(Z\) string and an \(X\) string that cross once, so

\[
W_eW_m=-W_mW_e.
\]

The wavefunction therefore acquires a phase of \(-1\). Thus \(e\) and \(m\) have mutual semionic statistics. Individually, \(e\) and \(m\) have bosonic exchange statistics, while their composite \(\varepsilon\) is a fermion [R030].

These anyons are Abelian because every braid multiplies the state by a scalar phase. Non-Abelian anyons instead act through noncommuting matrices on a fusion space of dimension greater than one.

The toric code exhibits topological order, but braiding its anyons does not provide universal quantum computation.

The term “Abelian” does not imply that braiding has no observable effect. The mutual phase \(-1\) is nontrivial and measurable. It remains a single scalar and therefore cannot implement the matrix-valued braids associated with a non-Abelian fusion space.

Topological order does not imply non-Abelian anyons.

## Syndrome endpoints and decoding

Suppose unwanted \(Z\) errors occur on a set of edges \(E\). The corresponding error operator is

\[
Z(E)=\prod_{e\in E}Z_e.
\]

A star check returns \(-1\) exactly at the boundary \(\partial E\), defined here as the set of vertices incident on an odd number of errored edges.

These violated vertices constitute the syndrome, which is the measurement data available to a decoder. The decoder does not observe the complete error path. It observes only the endpoints and must infer a recovery operation.

A decoder selects a recovery chain \(R\) with the same boundary as \(E\). After recovery, the net chain is the symmetric difference \(E\oplus R\), because applying \(Z\) twice gives the identity. Since \(\partial(E\oplus R)=0\), the residual chain is closed. There are two possible topological outcomes:

- If \(E\oplus R\) is contractible, it is a product of plaquettes and does not alter the encoded sector.

- If \(E\oplus R\) winds around the torus, it implements a logical \(\bar Z\) and changes an encoded bit without leaving a nonzero syndrome.

The analogous process for \(X\) errors uses plaquette syndromes and recovery chains on the dual lattice, and it can produce logical \(\bar X\) failures. A general Pauli error \(Y=iXZ\) contributes to both syndromes. Dennis and collaborators formulated this error-chain description and related it to statistical-mechanical decoding [R141].

A vanishing syndrome is therefore not sufficient evidence of successful correction. Both a harmless contractible loop and a damaging noncontractible loop have no endpoints.

A decoder that merely pairs and cancels observed defects without inferring the homology class can apply a recovery that leaves a wrapping loop and changes the logical sector. Homology class here distinguishes closed loops according to whether they can be continuously contracted or instead wind around the torus.

## Passive Hamiltonian protection and active syndrome extraction

The same stabilizer operators can be used in two physically distinct architectures.

In passive Hamiltonian protection, the terms \(-J_eA_v\) and \(-J_mB_p\) remain continuously present in the device Hamiltonian. Leaving the ground space then requires energy.

At low temperature, a thermal environment must supply this energy to create an anyon pair. A many-body gap also supports stability against sufficiently weak local perturbations [Theory] [R142].

This constitutes genuine Hamiltonian protection only if the physical system actually realizes the required interactions and occupies their gapped phase.

The two-dimensional toric code is not a self-correcting quantum memory. After a pair has been created, either pointlike anyon can move across the lattice without increasing the number of excitations.

The maximum energy encountered along a logical-string process therefore remains of order \(J_e\) or \(J_m\). It does not increase with \(L\).

At nonzero temperature, diffusion can complete a noncontractible loop. Consequently, increasing the lattice size without bound does not increase the passive lifetime without bound [Theory] [R143]; [R144]. The gap suppresses pair creation by making pairs energetically costly.

The gap does not localize pairs after they have been created.

In active syndrome extraction, hardware repeatedly measures the star and plaquette operators, usually using additional ancilla qubits and a gate circuit. Classical software compares measurement rounds, infers space-time error chains, and updates either a physical correction or a Pauli frame.

In this architecture, the checks need not appear as energy terms in the data-qubit Hamiltonian. Measurement errors add time as an additional decoding direction, so a single round with an apparently consistent syndrome is insufficient [R141]; [R145].

A static \(H_{\rm TC}\) with thermally occupied energy levels is an analog many-body model. A circuit may prepare a toric-code wavefunction without making \(H_{\rm TC}\) the equilibrium Hamiltonian of the hardware.

Repeated stabilizer measurement is active quantum error correction even when no four-body energy penalty exists. Evidence for a robust emergent \(\mathbb Z_2\) topological phase in a material is stronger than evidence from preparing a state or implementing a short digital braid.

Eight defect spins assigned to the eight edges of a diagram remain eight defect spins unless the star interactions, plaquette interactions, and a many-body gap are shown to exist.

Passive and active strategies can be combined, but they have different error models. Passive energy penalties modify transition energies.

Active correction obtains syndrome information at the cost of control, measurement, and decoding resources. Both architectures may be described as toric-code implementations only if the relevant physical realization is specified.

## Physical requirements for laboratory implementations

The ideal square-lattice Hamiltonian consists of weight-four Pauli products, where the weight is the number of qubits on which an operator acts nontrivially. Most elementary spin interactions in candidate hardware are one-body or two-body. Realizing the exact commuting-projector Hamiltonian therefore requires direct multiqubit interactions, perturbative effective interactions, additional constraints, or digital gate sequences. Each method introduces additional energy scales or control errors.

For a defect array, assigning one defect spin to each edge is only the initial hardware specification. The star and plaquette constraints and a many-body gap must still be demonstrated [Proposal]. A diamond device with well-controlled single-spin coherence is physically distinct from this lattice model.

[Experiment] Satzinger and collaborators prepared and characterized a toric-code ground state using 31 superconducting qubits, measured a topological entanglement signature, and performed anyon operations [R125]. These results provide strong evidence that a programmable processor can synthesize and probe the state. They do not show that the processor’s native equilibrium material realizes a passive toric-code Hamiltonian.

[Experiment] Repeated stabilizer extraction has been demonstrated in planar surface-code devices. Surface codes use boundaries rather than a periodic torus but retain the same local check algebra. Krinner and collaborators operated a distance-three, 17-qubit surface code through repeated correction cycles [R145]. This result demonstrates active syndrome extraction and decoding rather than thermally passive storage.

[Experiment] A trapped-ion processor has also prepared toric-code topological order using measurement and feed-forward under periodic connectivity [R146]. In this case, the preparation protocol supplied the required resource. Turning off the controls does not leave an autonomous topological material.

For defect-engineered crystals, the toric code is therefore a benchmark rather than an automatic consequence of arranging defects. A convincing realization would require spectroscopy or dynamical measurements establishing the intended effective terms, a separated low-energy manifold, nonlocal ground-state sectors, and controlled string excitations. Long coherence times for individual defects, entanglement among a few neighboring defects, or a software-defined stabilizer graph address different physical questions.

## Common conceptual errors

- A stabilizer should not be identified with its projector. The operators \(A_v\) and \(B_p\) have eigenvalues \(\pm 1\). The projectors onto their \(+1\) eigenspaces are \((I+A_v)/2\) and \((I+B_p)/2\). This distinction affects the interpretation of Hamiltonian coefficients.

- The global stabilizer relations must be included in the constraint count. Treating all eight checks on eight qubits as independent would predict no remaining state. Because two products of checks equal the identity, only six constraints are independent, leaving two logical qubits.

- A vanishing syndrome does not prove that correction succeeded. Both a contractible, harmless loop and a noncontractible, damaging loop have no endpoints. Decoding must infer the homology class rather than merely cancel observed defects.

- An energy gap does not imply a self-correcting memory. The two-dimensional toric code has a finite pair-creation cost but no energy barrier that increases with system size [R143]; [R144]. Passive suppression is useful, but it does not provide indefinite thermal protection.

- Abelian braiding is not physically trivial. The mutual phase \(-1\) is topological and measurable. Because it is a scalar rather than a matrix, however, it cannot implement the matrix-valued braids of a non-Abelian fusion space.

- Digital state preparation is not equivalent to emergent topological order. A gate sequence can produce the exact wavefunction and reproduce the anyon algebra. Emergent topological order additionally requires a local physical Hamiltonian for which that sector is robust low-energy physics.

- A torus demonstration should not be interpreted as a direct device layout. The torus provides mathematically simple boundary conditions, whereas laboratory devices usually use planar patches with boundaries. Boundaries alter the ground-state degeneracy and the geometry of logical operators while preserving the local star and plaquette algebra.

- A diamond defect array is not automatically a toric-code realization. Assigning one defect to each edge specifies only a hardware arrangement. Without four-body checks and a many-body gap, the crystal remains a collection of ordinary qubits.

## Verification exercises

- **Commutation of star and plaquette checks.** A star operator \(A_v\) is a stabilizer check formed from Pauli \(X\) operators on the edges incident on vertex \(v\), whereas a plaquette operator \(B_p\) is formed from Pauli \(Z\) operators around plaquette \(p\). Checks of the same type commute because they use the same Pauli type. A star and a plaquette share either zero edges or two edges. Because \(X\) and \(Z\) anticommute on each shared edge, each overlap contributes an \(XZ\) minus sign. The number of such signs is even, so their product is \(+1\), and the star and plaquette commute.

- **Number of logical qubits on the eight-edge torus.** The eight edges support \(n=8\) physical qubits. There are six independent stabilizer generators: three independent stars and three independent plaquettes. The remaining checks are constrained by the relations \(\prod_v A_v=I\) and \(\prod_p B_p=I\), where \(I\) is the identity operator. Thus the stabilizer rank is \(r=6\). For a stabilizer code, the number of encoded logical qubits is \(k=n-r\), so \(k=n-r=8-6=2\). The ground-state subspace therefore contains four states.

- **Creation of \(e\) and \(m\) anyon pairs.** An anyon is a localized topological excitation identified by a violated stabilizer check. An open direct-lattice \(Z\) string, defined as a product of Pauli \(Z\) operators along a path on the original lattice, flips the star checks at the two endpoints and creates a pair of \(e\) anyons. An open dual-lattice \(X\) string, defined as a product of Pauli \(X\) operators along a path on the dual lattice, flips the endpoint plaquette checks and creates a pair of \(m\) anyons.

- **Failure of decoding based only on a vanished syndrome.** A syndrome is the set of violated stabilizer-check outcomes. After decoding, both a shrinkable residual string and a wrapping residual string can have an empty boundary and therefore produce no syndrome. A shrinkable string can be continuously contracted and corresponds to a stabilizer. A wrapping string follows a noncontractible cycle of the torus and is a logical operator. Consequently, a vanished syndrome does not by itself imply successful recovery.

- **Abelian character of the anyons.** Fusion specifies the total topological charge obtained by combining anyons. The fusion outcomes are unique, so each fusion space—the state space associated with a fixed set of anyons and fusion outcomes—is one-dimensional. Braiding therefore multiplies the state by a phase, such as \(-1\), rather than mixing a vector of fusion amplitudes. The anyons are Abelian even though the braiding phase is not \(+1\).

- **Insufficiency of the many-body gap for self-correction.** A many-body gap is the energy separation between the ground-state subspace and the lowest excited states. A self-correcting memory would additionally require an error-process energy barrier that increases with the linear system size \(L\). Once an anyon pair exists, either anyon can move without increasing the number of excitations. The energy barrier along a path that wraps around the system therefore remains of order \(J_e\) or \(J_m\), where \(J_e\) and \(J_m\) set the excitation-energy scales, and does not grow with \(L\).

Local commuting checks define a gapped subspace whose remaining labels are nonlocal. Open string operators create anyons at their endpoints.

Closed shrinkable strings are stabilizers, whereas closed wrapping strings are logical operators.

Crossings between string operators produce the braiding phase. A many-body gap alone does not provide a scalable finite-temperature memory.

Active extraction, in which stabilizer syndromes are repeatedly measured and decoded, is distinct from passive protection by a Hamiltonian. The one-dimensional fusion spaces establish that these anyons are Abelian.

The subsequent lattice model obtains related order from two-body honeycomb bonds rather than four-spin checks.

## Sources

- [R030] A. Yu. Kitaev, “Fault-tolerant quantum computation by anyons,” Annals of Physics 303, 2–30 (2003). DOI: [10.1016/S0003-4916(02)00018-0](https://doi.org/10.1016/S0003-4916(02)00018-0). arXiv: [quant-ph/9707021](https://arxiv.org/abs/quant-ph/9707021).

- [R141] E. Dennis, A. Kitaev, A. Landahl, and J. Preskill, “Topological quantum memory,” Journal of Mathematical Physics 43, 4452–4505 (2002). DOI: [10.1063/1.1499754](https://doi.org/10.1063/1.1499754). arXiv: [quant-ph/0110143](https://arxiv.org/abs/quant-ph/0110143).

- [R142] S. Bravyi, M. B. Hastings, and S. Michalakis, “Topological quantum order: stability under local perturbations,” Journal of Mathematical Physics 51, 093512 (2010). DOI: [10.1063/1.3490195](https://doi.org/10.1063/1.3490195). arXiv: [1001.0344](https://arxiv.org/abs/1001.0344).

- [R143] R. Alicki, M. Fannes, and M. Horodecki, “On thermalization in Kitaev’s 2D model,” Journal of Physics A: Mathematical and Theoretical 42, 065303 (2009). DOI: [10.1088/1751-8113/42/6/065303](https://doi.org/10.1088/1751-8113/42/6/065303). arXiv: [0810.4584](https://arxiv.org/abs/0810.4584).

- [R144] B. M. Terhal, “Quantum error correction for quantum memories,” Reviews of Modern Physics 87, 307–346 (2015). DOI: [10.1103/RevModPhys.87.307](https://doi.org/10.1103/RevModPhys.87.307). arXiv: [1302.3428](https://arxiv.org/abs/1302.3428).

- [R145] S. Krinner et al., “Realizing repeated quantum error correction in a distance-three surface code,” Nature 605, 669–674 (2022). DOI: [10.1038/s41586-022-04566-8](https://doi.org/10.1038/s41586-022-04566-8). arXiv: [2112.03708](https://arxiv.org/abs/2112.03708).

- [R125] K. J. Satzinger et al., “Realizing topologically ordered states on a quantum processor,” Science 374, 1237–1241 (2021). DOI: [10.1126/science.abi8378](https://doi.org/10.1126/science.abi8378). arXiv: [2104.01180](https://arxiv.org/abs/2104.01180).

- [R146] M. Iqbal et al., “Topological order from measurements and feed-forward on a trapped ion quantum computer,” Communications Physics 7, 205 (2024). DOI: [10.1038/s42005-024-01698-3](https://doi.org/10.1038/s42005-024-01698-3). arXiv: [2302.01917](https://arxiv.org/abs/2302.01917).

---
