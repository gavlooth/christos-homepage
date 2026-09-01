# Appendix G — Stabilizer checks without logical-state measurement

Consider three coins on a table that are required to display the same face. Two comparisons are sufficient to verify this condition: whether coin 1 matches coin 2, and whether coin 2 matches coin 3. If both comparisons succeed, all three coins agree. These comparisons do not determine whether the common face is heads or tails. The undetermined common value is the information preserved by the checks.

A general pure state of \(n\) qubits requires \(2^n\) complex amplitudes. Some important quantum states can instead be specified by a short list of constraints. For example, the condition “all three bits agree” specifies the allowed computational-basis strings more compactly than listing all eight strings and assigning zero amplitude to six of them.

## Stabilizers and their invariant states

Suppose that an allowed state \(|\psi\rangle\) is unchanged by an operator \(S\):

\[
S|\psi\rangle=|\psi\rangle.
\]

The operator \(S\) is then called a stabilizer of \(|\psi\rangle\). Equivalently, \(|\psi\rangle\) is a \(+1\) eigenstate of \(S\). The eigenvalue \(+1\) indicates that the constraint represented by \(S\) is satisfied.

A stabilizer code is the common \(+1\) eigenspace of a commuting set of Pauli operators. Describing this eigenspace by its stabilizer constraints provides the compression that makes error correction, the toric code, and efficient classical simulation of Clifford circuits possible [R028]; [R031].

The stabilizer formalism does not efficiently describe every quantum state or every quantum gate. Non-stabilizer resources, often described as magic, remain computationally expensive.

## Single-qubit Pauli matrices

The four Pauli matrices on one qubit are

\[
I=\begin{pmatrix}1&0\\0&1\end{pmatrix},\quad
X=\begin{pmatrix}0&1\\1&0\end{pmatrix},\quad
Y=\begin{pmatrix}0&-i\\i&0\end{pmatrix},\quad
Z=\begin{pmatrix}1&0\\0&-1\end{pmatrix}.
\]

They satisfy \(X^2=Y^2=Z^2=I\). Some pairs anticommute; for example,

\[
XZ=-ZX.
\]

The \(n\)-qubit Pauli group \(\mathcal P_n\) consists of tensor products of these matrices multiplied by phases in \(\{+1,-1,+i,-i\}\). Tensor-product notation is abbreviated: \(Z_1Z_2\) denotes \(Z\otimes Z\otimes I\otimes\cdots\).

Any two Pauli strings either commute or anticommute. Their commutation relation can be determined by counting the qubit positions at which both strings have nonidentity factors that anticommute. The strings commute when this count is even and anticommute when it is odd. Pauli commutation is therefore determined by a binary parity.

## Conditions on a stabilizer group

A stabilizer group \(\mathcal S\subset\mathcal P_n\) must be Abelian, meaning that all its elements commute, and it must not contain \(-I\). If \(-I\) belonged to \(\mathcal S\), a stabilized state would be required to satisfy both \(|\psi\rangle=|\psi\rangle\) and \(-|\psi\rangle=|\psi\rangle\). The only vector satisfying both equations is the zero vector.

Suppose that \(\mathcal S\) has \(r\) independent generators \(S_1,\ldots,S_r\). Independence means that no nonempty product of generators equals \(I\). The projector onto the code space \(\mathcal C\) is

\[
\Pi_{\mathcal C}=\prod_{j=1}^r\frac{I+S_j}{2}.
\]

Each factor \((I+S_j)/2\) projects onto the \(+1\) eigenspace of \(S_j\). Because the constraints commute and are independent, each constraint halves the dimension of the allowed subspace. Therefore,

\[
\dim\mathcal C=2^{n-r}.
\]

A Hilbert space of dimension \(2^k\) represents \(k\) logical qubits. The code consequently encodes

\[
k=n-r
\]

logical qubits and is denoted \([[n,k,d]]\) once its distance \(d\) is known.

The dimension formula also follows from the trace of the projector. The rank of a projector equals its trace. Expanding \(\Pi_{\mathcal C}\) produces \(2^{-r}\) times a sum of stabilizer elements. Every nonidentity Pauli operator has trace zero, whereas \(\operatorname{Tr}I=2^n\). Independence ensures that only the empty product of generators produces \(I\). Thus,

\[
\operatorname{Tr}\Pi_{\mathcal C}=2^{-r}2^n=2^{n-r}.
\]

If the listed generators are not independent, counting all of them overestimates the number of constraints. A redundant check does not remove an additional logical qubit.

## Three-qubit repetition code

Consider three physical qubits with two stabilizer generators,

\[
S_1=Z_1Z_2,\qquad S_2=Z_2Z_3.
\]

These generators commute. The simultaneous \(+1\) eigenvalue condition requires qubits 1 and 2 to agree and qubits 2 and 3 to agree. The resulting code space is

\[
\mathcal C=\operatorname{span}\{|000\rangle,|111\rangle\}.
\]

Here \(n=3\) and there are \(r=2\) independent generators, so the code encodes \(k=1\) logical qubit. A logical computational basis can be chosen as

\[
|0_L\rangle=|000\rangle,
\qquad
|1_L\rangle=|111\rangle.
\]

A physical bit-flip error \(X_1\) anticommutes with \(S_1\) and commutes with \(S_2\). Measuring the two stabilizers returns their eigenvalues. The collection of these eigenvalues is called the syndrome. It records which constraints have changed sign without determining the encoded logical value. Representing \(+1\) by the bit 0 and \(-1\) by the bit 1 gives:

| error | \(S_1\) | \(S_2\) | syndrome |
|---|---|---|---|
| \(I\) | \(+1\) | \(+1\) | 00 |
| \(X_1\) | \(-1\) | \(+1\) | 10 |
| \(X_2\) | \(-1\) | \(-1\) | 11 |
| \(X_3\) | \(+1\) | \(-1\) | 01 |

The syndrome identifies any single \(X\) error without measuring whether the logical state is \(|0_L\rangle\) or \(|1_L\rangle\). Stabilizer measurement therefore extracts relations associated with errors rather than the encoded amplitudes.

A logical Pauli operator must preserve the code space while acting nontrivially within it. One possible choice is

\[
\overline X=X_1X_2X_3,
\qquad
\overline Z=Z_1.
\]

The overbar denotes a logical operator. Both operators commute with \(S_1\) and \(S_2\), and they satisfy the logical Pauli anticommutation relation

\[
\overline X\overline Z=-\overline Z\overline X.
\]

Multiplying a logical operator by a stabilizer changes its physical representative but not its action on code states. For example, \(Z_1\), \(Z_2\), and \(Z_3\) are equivalent representatives of logical \(\overline Z\).

This code corrects one bit flip when the noise model is restricted to \(X\) errors. As a quantum code against arbitrary single-qubit Pauli errors, however, it has distance one because \(Z_1\) is already a weight-one undetectable logical operation.

Its full label is \([[3,1,1]]\) [R028]. Describing it as a “single-error-correcting quantum code” without specifying the noise model would conflate correction of restricted bit-flip noise with correction of arbitrary single-qubit quantum errors.

## Normalizer and undetectable logical operators

The normalizer of \(\mathcal S\) within the Pauli group is

\[
N(\mathcal S)=\{P\in\mathcal P_n:PS=SP\ \text{for every }S\in\mathcal
S\}.
\]

Thus, \(N(\mathcal S)\) contains the Pauli strings that commute with every stabilizer check. For Pauli operators, commuting with every stabilizer is equivalent to normalizing the group, up to the physically irrelevant global phases that are usually quotiented out. A normalizer element therefore produces no change in any stabilizer syndrome.

A Pauli error \(E\) belongs to one of three relevant classes:

- If \(E\) anticommutes with at least one generator, it changes at least one syndrome value and is detectable.

- If \(E\in\mathcal S\), it acts trivially on every code state.

- If \(E\in N(\mathcal S)\setminus\mathcal S\), it is an undetectable, nontrivial logical Pauli operator.

The weight \(\operatorname{wt}(E)\) of a Pauli operator is the number of qubits on which \(E\) acts by an operator other than \(I\). The code distance is

\[
d=\min_{E\in N(\mathcal S)\setminus\mathcal S}\operatorname{wt}(E).
\]

A distance-\(d\) code detects all Pauli errors of weight less than \(d\) and corrects arbitrary errors on at most \(\lfloor(d-1)/2\rfloor\) qubits, assuming ideal syndrome extraction and a suitable decoder [R028]; [R029]. A code is degenerate when distinct physical errors have the same action on the code because they differ by a stabilizer.

The set difference \(N(\mathcal S)\setminus\mathcal S\) is essential in the distance definition. Omitting it would incorrectly count stabilizers as logical operators, even though stabilizers lie in the normalizer and act as the identity on the code space.

## Syndrome measurement and energetic enforcement

For a generator \(S_j\), the projectors onto its \(s_j=\pm1\) eigenspaces are

\[
\Pi_{s_j}=\frac{I+s_jS_j}{2}.
\]

In a quantum circuit, an ancilla qubit can acquire the parity associated with \(S_j\) and then be measured. Alternatively, an analog system can use the stabilizer Hamiltonian

\[
H_{\rm stab}=-\sum_jK_jS_j,
\]

where \(K_j>0\) has units of energy. Violating stabilizer \(S_j\) changes its contribution to the energy from \(-K_j\) to \(+K_j\), producing an energy cost \(2K_j\). Passive energetic enforcement and active repeated syndrome extraction are distinct mechanisms, although both use the same stabilizer operators.

A stabilizer by itself is an algebraic constraint. A measured stabilizer code implements active quantum error correction.

A static stabilizer Hamiltonian energetically favors a code space. Establishing topological order additionally requires locality, system-size-dependent logical operators, and the appropriate many-body phase.

These four roles are distinct and cannot be established merely by applying the same terminology to all of them.

## Binary symplectic representation

Global phases do not affect Pauli commutation. A Pauli string can therefore be encoded by two binary vectors \(\mathbf x,\mathbf z\in\mathbb F_2^n\), where \(\mathbb F_2=\{0,1\}\) is the finite field with arithmetic modulo two:

\[
P\longleftrightarrow(\mathbf x\mid\mathbf z).
\]

At qubit \(j\), the correspondence is

\[
(0,0)\leftrightarrow I,\quad
(1,0)\leftrightarrow X,\quad
(0,1)\leftrightarrow Z,\quad
(1,1)\leftrightarrow Y
\]

up to phase. Under this representation, multiplication of Pauli strings becomes binary vector addition. Two Pauli operators \(u=(\mathbf x\mid\mathbf z)\) and \(v=(\mathbf x'\mid\mathbf z')\) commute exactly when their symplectic inner product vanishes:

\[
[u,v]_{\rm sp}
=\mathbf x\cdot\mathbf z'
+\mathbf z\cdot\mathbf x'
=0\pmod 2.
\]

The symplectic inner product is a binary pairing that records whether two Pauli strings commute or anticommute. Computational implementations evaluate this pairing rather than multiplying the full matrices.

The \(r\) generator vectors can be arranged as the rows of a binary check matrix,

\[
H=(H_X\mid H_Z).
\]

Pairwise commutation of all generators is equivalent to the matrix condition

\[
H_XH_Z^T+H_ZH_X^T=0\pmod 2.
\]

For an error vector \(e=(\mathbf x_e\mid\mathbf z_e)\), each syndrome bit is the symplectic product of \(e\) with the corresponding generator row. Gaussian elimination over \(\mathbb F_2\) determines the rank \(r\), identifies redundant checks, constructs logical representatives, and detects inconsistencies. This binary representation provides a practical connection between operator notation and software implementations.

## Toric-code star and plaquette stabilizers

Place one qubit on each edge of a square lattice with periodic boundary conditions. For each vertex \(v\), define the star operator

\[
A_v=\prod_{e\ni v}X_e,
\]

where the product is over edges incident on \(v\). For each plaquette \(p\), define the plaquette operator

\[
B_p=\prod_{e\in\partial p}Z_e,
\]

where \(\partial p\) is the boundary of \(p\).

A star and a plaquette share either zero edges or two edges. Each shared edge contributes one anticommutation relation \(XZ=-ZX\). When two edges are shared, the two minus signs cancel. Therefore every \(A_v\) commutes with every \(B_p\) [R030].

On a periodic connected square lattice, the product of all star operators is the identity, and the product of all plaquette operators is also the identity. These relations produce two dependencies among the listed generators.

For an \(L\times L\) torus, there are \(n=2L^2\) edge qubits and \(r=2L^2-2\) independent stabilizers, so \(k=2\). [Theory] The two logical qubits correspond to noncontractible loop operators [R030].

A shortest logical loop has weight \(L\), so the ideal periodic square-lattice code has distance \(d=L\). Boundaries and lattice defects alter this counting and must be specified.

An open \(Z\) string anticommutes with the two star operators at its endpoints, producing a pair of electric syndromes. Extending the string moves an endpoint without leaving a sequence of violated checks along the interior of the string.

A closed contractible string is a stabilizer, whereas a closed noncontractible string is a logical operator. This distinction is the algebraic basis of Chapter 16’s error-chain description.

## Limitations of stabilizer checks

Stabilizer algebra establishes exact commutation relations, ground-space dimension, syndromes, and the logical-loop structure of the ideal toric code. It does not, by itself, establish that a microscopic defect Hamiltonian realizes that code.

A perturbative gadget may be designed to generate a term \(-K_jS_j\) in a low-energy subspace. The corresponding Schrieffer–Wolff calculation, which constructs an effective low-energy Hamiltonian perturbatively, must also report unwanted terms.

If a correction anticommutes with stabilizers, it can create excitations. If it belongs to the normalizer but not the stabilizer group, it can split or rotate the logical manifold. Classifying corrections by their commutation relations is therefore more informative than listing their coefficients alone.

For a proposed small code patch, software should first construct the binary check matrix and verify pairwise commutation, rank, encoded-qubit count, logical representatives, and distance where tractable. Sparse exact diagonalization can then test the predicted ground-space dimension and excitation energies. Under non-Pauli perturbations, stabilizer labels need not remain exact. Appropriate diagnostics include expectation values \(\langle S_j\rangle\), Wilson loops, and overlap with the ideal code subspace, rather than assigning every state an exact syndrome.

The Gottesman–Knill theorem permits efficient classical simulation of stabilizer states evolving under Clifford gates, Pauli measurements, and classical feed-forward [R028]; [R031]. [Theory] This efficiency applies to that restricted computational family. It does not show that the corresponding quantum material can be simulated efficiently under arbitrary interactions.

## Common errors in stabilizer analysis

- Including \(-I\) in the stabilizer group makes the purported code space empty.

- Counting listed generators rather than independent generators overestimates the number of constraints. Redundant checks do not remove another logical qubit.

- Ignoring phases when defining the code space can select the wrong eigenspace. Binary vectors suffice for commutation calculations, but generator signs determine the \(+1\) eigenspace.

- Treating every normalizer element as a logical operator incorrectly includes stabilizers, which belong to the normalizer but act trivially.

- Quoting a distance without specifying the boundaries is incomplete. A planar patch, torus, puncture, and rough or smooth edge have different logical operators.

- Equating code distance with an energy gap conflates different quantities. Distance counts the support size of an operator, whereas a Hamiltonian gap has units of energy.

- Assuming that a syndrome identifies a unique error neglects decoding ambiguity. A decoder selects among equivalence classes and noise-weighted possibilities.

## Exercises and solutions

- Show that if \(-I\in\mathcal S\), then the code space is \(\{0\}\).

  A stabilized state would have to satisfy both \(|\psi\rangle=|\psi\rangle\) and \(-|\psi\rangle=|\psi\rangle\). These conditions imply \(|\psi\rangle=0\).

- Show that \(r\) independent stabilizers on \(n\) qubits encode \(k=n-r\) logical qubits.

  The projector \(\Pi_{\mathcal C}\) has trace \(2^{n-r}\), which equals \(\dim\mathcal C\). Hence \(k=n-r\).

- What condition makes a Pauli error detectable?

  A Pauli error is detectable when it anticommutes with at least one stabilizer generator and therefore flips the corresponding syndrome bit.

- Show that \(Z_1\), \(Z_2\), and \(Z_3\) are equivalent logical \(\overline Z\) representatives for the three-qubit code.

  They differ by products of \(S_1=Z_1Z_2\) and \(S_2=Z_2Z_3\), so they have the same action on every code state.

- Explain why the repetition code is only \([[3,1,1]]\) as a full quantum code.

  A weight-one \(Z\) operator is an undetectable logical operation.

- Show that toric-code stars and plaquettes commute.

  Their supports overlap on an even number of edges, so the minus signs produced by \(XZ=-ZX\) cancel in pairs.

## Sources

- [R028] Daniel Gottesman, Stabilizer Codes and Quantum Error
Correction, PhD thesis, California Institute of Technology (1997).
DOI: [10.7907/rzr7-dt72](https://doi.org/10.7907/rzr7-dt72);
arXiv: [quant-ph/9705052](https://arxiv.org/abs/quant-ph/9705052).

- [R029] A. R. Calderbank, E. M. Rains, P. W. Shor, and N. J. A.
Sloane, “Quantum error correction via codes over GF(4),” IEEE
Transactions on Information Theory 44, 1369–1387
(1998). DOI: [10.1109/18.681315](https://doi.org/10.1109/18.681315); arXiv:
[quant-ph/9608006](https://arxiv.org/abs/quant-ph/9608006).

- [R030] Alexei Kitaev, “Fault-tolerant quantum computation by
anyons,” Annals of Physics 303, 2–30 (2003).
DOI: [10.1016/S0003-4916(02)00018-0](https://doi.org/10.1016/S0003-4916(02)00018-0);
arXiv: [quant-ph/9707021](https://arxiv.org/abs/quant-ph/9707021).

- [R031] Scott Aaronson and Daniel Gottesman, “Improved simulation of
stabilizer circuits,” Physical Review A 70,
052328 (2004). DOI: [10.1103/PhysRevA.70.052328](https://doi.org/10.1103/PhysRevA.70.052328);
arXiv: [quant-ph/0406196](https://arxiv.org/abs/quant-ph/0406196).

---
