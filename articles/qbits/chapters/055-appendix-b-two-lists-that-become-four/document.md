# Appendix B — Tensor products and composite quantum systems

Alice records two numbers, one for each possible outcome of her coin:

\[
\begin{pmatrix} \alpha \\ \beta \end{pmatrix}.
\]

Bob independently records two numbers:

\[
\begin{pmatrix} \gamma \\ \delta \end{pmatrix}.
\]

A description of all pairs of outcomes requires four components rather than two separate pairs of components:

\[
\begin{pmatrix} \alpha\gamma \\ \alpha\delta \\ \beta\gamma \\
\beta\delta \end{pmatrix}.
\]

When each subsystem is represented by a definite column vector, this four-component column is the combined representation. Quantum mechanics retains these four components and permits linear combinations of such combined columns. Some resulting joint vectors cannot be factored into one vector for Alice and one for Bob.

No crystal or environmental bath is required for this construction. The essential concepts are the combination of two short vectors into a larger vector and the reduced description that remains when one subsystem is discarded.

## Tensor products of two vector spaces

Let Alice’s two possible outcomes be \(0\) and \(1\). Represent them by column vectors, written in ket notation as

\[
|0\rangle_A
=
\begin{pmatrix} 1 \\ 0 \end{pmatrix},
\qquad
|1\rangle_A
=
\begin{pmatrix} 0 \\ 1 \end{pmatrix}.
\]

A ket \(|\psi\rangle\) denotes a vector in a complex vector space. Give Bob the same two basis states, with the subsystem label \(B\). A joint outcome is an ordered pair. The four joint basis states are

\[
|00\rangle = |0\rangle_A\otimes|0\rangle_B,
\quad |01\rangle,
\quad |10\rangle,
\quad |11\rangle.
\]

The symbol \(\otimes\) denotes the tensor product. For two column vectors, it is computed by multiplying the entire second column by each entry of the first column and stacking the resulting columns. Two vectors with two components therefore produce a vector with four components rather than a vector with \(2+2\) components.

The tensor-product space is the vector space containing all linear combinations, with complex coefficients, of such product vectors. If Alice’s vector space is \(V\) and Bob’s is \(W\), the tensor product is linear in each argument separately:

\[
(av+bv')\otimes w=a(v\otimes w)+b(v'\otimes w),
\]

\[
v\otimes(aw+bw')=a(v\otimes w)+b(v\otimes w').
\]

Here \(v,v'\in V\), \(w,w'\in W\), and \(a,b\) are complex scalars. This separate linearity is a defining property of the tensor product.

Choose a basis \(\{|e_j\rangle\}\) for \(V\) and a basis \(\{|f_k\rangle\}\) for \(W\). A basis is a linearly independent set that spans the vector space. The product vectors \(\{|e_j\rangle\otimes|f_k\rangle\}\) then form a basis for \(V\otimes W\). Consequently, the dimensions multiply:

\[
\dim(V\otimes W)=(\dim V)(\dim W).
\]

For \(N\) two-level systems, the dimension is \(2^N\). This exponential dependence follows from counting basis states. It does not, by itself, establish a computational speedup.

An inner product is a scalar-valued operation that determines overlaps, norms, and orthogonality. On product vectors, inner products multiply and then extend to general vectors by linearity:

\[
\langle u\otimes x|v\otimes y\rangle
=\langle u|v\rangle\langle x|y\rangle.
\]

When subsystem labels are unambiguous, the abbreviated notation \(|ab\rangle\) denotes \(|a\rangle_A\otimes|b\rangle_B\).

If a matrix \(A\) acts on \(V\) and a matrix \(B\) acts on \(W\), their tensor-product operator is defined by its action on product vectors:

\[
(A\otimes B)(v\otimes w)=Av\otimes Bw.
\]

A local operator is an operator that acts on only one subsystem. An operator acting only on Alice is \(A\otimes I_W\), where \(I_W\) is the identity operator on \(W\). After the subsystem has been specified, this operator is often abbreviated as \(A\). Operators acting on distinct tensor factors commute:

\[
(A\otimes I_W)(I_V\otimes B)=A\otimes B
=(I_V\otimes B)(A\otimes I_W).
\]

A vector of the form \(|a\rangle\otimes|b\rangle\) is called a product state. In such a state, Alice and Bob each have an individual state vector, and the joint state is their tensor product.

**Remark.** If linearity in either argument is removed, the resulting operation is not a tensor product. Ordinary multiplication of two numbers of the same length is a different operation and does not produce a four-component vector from two two-component vectors.

## Entangled bipartite pure states

Not every four-component vector is the tensor product of two two-component vectors. Consider the Bell state

\[
|\Phi^+\rangle=\frac{|00\rangle+|11\rangle}{\sqrt2}.
\]

A Bell state is a maximally entangled two-qubit state. Suppose that this state could be factored as \((a|0\rangle+b|1\rangle)_A\otimes(c|0\rangle+d|1\rangle)_B\). Expanding the tensor product would produce the coefficients \(ac,ad,bc,bd\).

Agreement with \(|\Phi^+\rangle\) would require \(ac=bd=1/\sqrt2\) and \(ad=bc=0\). The nonzero conditions \(ac\ne0\) and \(bd\ne0\) require all four scalars to be nonzero, which contradicts the conditions \(ad=bc=0\).

Therefore, \(|\Phi^+\rangle\) cannot be expressed as a single product state. A pure joint state that cannot be written as one product vector is called entangled. Entanglement here is precisely the failure of the four-component joint vector to factor into separate vectors for the two subsystems; it is not defined merely by interaction or communication between them.

Every bipartite pure state admits orthonormal sets \(\{|u_r\rangle_A\}\) and \(\{|v_r\rangle_B\}\), together with nonnegative numbers \(s_r\), such that

\[
|\psi\rangle_{AB}=\sum_r s_r|u_r\rangle_A|v_r\rangle_B,
\qquad \sum_r s_r^2=1.
\]

This expansion is the Schmidt decomposition, and the numbers \(s_r\) are the Schmidt coefficients. A state is a product state exactly when only one Schmidt coefficient is nonzero. The eigenvalues of either reduced density operator defined below are \(s_r^2\), including zero eigenvalues.

## Density operators for composite systems

A single ket completely specifies a known pure state. More general preparation and subsystem-discarding procedures require a broader state representation.

For example, a classical coin may determine which of two kets is prepared. Alternatively, Bob’s subsystem may be discarded while only Alice’s subsystem is retained. Both cases require an operator that predicts all local measurement probabilities.

For the Bell pair, form an operator by multiplying the ket by its bra:

\[
\rho_{AB}=|\Phi^+\rangle\langle\Phi^+|
=\frac12\bigl(
|00\rangle\langle00|+|00\rangle\langle11|
+|11\rangle\langle00|+|11\rangle\langle11|
\bigr).
\]

The bra \(\langle\psi|\) is the conjugate transpose of the ket \(|\psi\rangle\). The resulting matrix \(\rho_{AB}\) is a density operator. A density operator contains the information required to calculate every measurement probability for a system, whether the state is represented by a single ket or by a statistical mixture of kets.

A density operator \(\rho\) on a Hilbert space \(\mathcal H\), where a Hilbert space is an inner-product vector space, satisfies

\[
\rho\ge0,
\qquad
\operatorname{Tr}\rho=1.
\]

The condition \(\rho\ge0\) means that \(\rho\) is positive: \(\langle\psi|\rho|\psi\rangle\ge0\) for every \(|\psi\rangle\). In finite dimensions, positivity also implies Hermiticity. The trace \(\operatorname{Tr}\rho\), defined as the sum of the diagonal matrix elements in any orthonormal basis, provides normalization.

If a preparation selects normalized pure states \(|\psi_r\rangle\) with classical probabilities \(p_r\ge0\), where \(\sum_rp_r=1\), then

\[
\rho=\sum_rp_r|\psi_r\rangle\langle\psi_r|.
\]

Different ensembles \(\{p_r,|\psi_r\rangle\}\) can produce the same \(\rho\). Because measurement probabilities depend only on \(\rho\), these ensembles cannot be distinguished unless an additional record of the preparation is retained.

A state is pure exactly when \(\rho^2=\rho\), equivalently when \(\operatorname{Tr}(\rho^2)=1\). It is mixed when \(\operatorname{Tr}(\rho^2)<1\). The scalar \(\operatorname{Tr}(\rho^2)\) is called the purity. By the spectral theorem,

\[
\rho=\sum_j q_j|q_j\rangle\langle q_j|,
\]

where \(q_j\ge0\) and \(\sum_jq_j=1\). Thus, a density operator is defined as a positive matrix with unit trace.

For a qubit, every density operator has a Bloch representation

\[
\rho=\frac12(I+\mathbf r\cdot\boldsymbol\sigma),
\]

where \(\mathbf r=(r_x,r_y,r_z)\in\mathbb
R^3\), \(\boldsymbol\sigma=(\sigma_x,\sigma_y,\sigma_z)\),
and positivity requires \(\|\mathbf
r\|\le1\). Here \(\mathbf r\) is the Bloch vector and \(\sigma_x,\sigma_y,\sigma_z\) are the Pauli matrices. Pure states correspond to points on the unit sphere, whereas mixed states correspond to points inside it.

An observable is a Hermitian operator \(M=M^\dagger\) representing a measurable quantity. Its expectation value is

\[
\langle M\rangle=\operatorname{Tr}(\rho M).
\]

More generally, a positive-operator-valued measure, or POVM, is a set of positive operators \(\{E_m\}\) satisfying \(\sum_mE_m=I\). The probability of outcome \(m\) is \(p(m)=\operatorname{Tr}(\rho E_m)\).

A POVM specifies outcome probabilities but does not specify the state remaining after an outcome. A quantum instrument provides the corresponding state-update maps.

**Remark.** Without positivity, \(\operatorname{Tr}(\rho M)\) need not be a probability even when \(0\le M\le I\). The nonuniqueness of ensemble decompositions does not imply nonuniqueness of \(\rho\): many ensembles can represent the same density operator.

## Partial trace and reduced states

Suppose Bob’s half of the Bell pair is inaccessible. Alice’s measurement statistics must then be predicted from a local density operator. This reduced density operator is obtained by summing over Bob’s degrees of freedom in \(\rho_{AB}\). The corresponding operation is the partial trace:

\[
\rho_A=\operatorname{Tr}_B\rho_{AB}.
\]

The partial trace acts as a trace on one tensor factor while leaving the other factor unchanged.

For a rank-one product operator, its action is

\[
\operatorname{Tr}_B\left(|i\rangle_A|j\rangle_B
\langle k|_A\langle\ell|_B\right)
=\langle\ell|j\rangle_B|i\rangle_A\langle k|_A.
\]

For the Bell state, the off-diagonal terms vanish because \(\langle1|0\rangle=0\), while the diagonal terms remain. Therefore,

\[
\rho_A=\frac12\left(|0\rangle\langle0|+|1\rangle\langle1|\right)=\frac12I_A.
\]

The joint Bell state is pure, but either subsystem alone is maximally mixed, with the same outcome probabilities as a fair classical coin.

Consequently, an experiment performed only on Alice cannot distinguish a classical random preparation from the loss of an entangled partner. The density operator does not identify which preparation procedure produced it.

The partial trace is also the unique linear map satisfying

\[
\operatorname{Tr}_B(A\otimes B)=A\operatorname{Tr}(B).
\]

For every observable \(M_A\) acting only on Alice, this definition guarantees

\[
\operatorname{Tr}_{AB}\!\left[\rho_{AB}(M_A\otimes I_B)\right]
=\operatorname{Tr}_A(\rho_AM_A),
\]

where \(\rho_A=\operatorname{Tr}_B\rho_{AB}\). This identity establishes that \(\rho_A\) is the correct local state because it reproduces every local expectation value.

A joint density operator is separable if it can be expressed as a classical mixture of product density operators:

\[
\rho_{AB}=\sum_r p_r\,\rho_A^{(r)}\otimes\rho_B^{(r)}.
\]

A state that is not separable is entangled. Separable states can nevertheless exhibit strong classical correlations. Therefore, a nonfactorizing probability table or a nonzero covariance does not by itself establish entanglement.

The von Neumann entropy of a density operator is

\[
S(\rho)=-\operatorname{Tr}(\rho\log\rho)
=-\sum_jq_j\log q_j,
\]

with the convention \(0\log0=0\). If the logarithm has base two, entropy is measured in bits.

For a bipartite pure state, \(S(\rho_A)=S(\rho_B)\) quantifies the entanglement across that bipartition. For mixed states, the same entropy also includes ordinary statistical mixture.

Local entropy alone is therefore not an entanglement measure.

**Remark.** If the joint state is not pure, \(S(\rho_A)\) does not by itself measure entanglement. It continues to quantify the mixedness of the reduced density operator.

## Quantum channels from discarded environments

Alice’s atom may interact with an unobserved system and subsequently exhibit apparently irreversible dynamics. The combined evolution can remain unitary even though the reduced evolution of Alice’s subsystem is not unitary.

A quantum channel \(\mathcal E\) is a linear map that sends density operators to density operators, including when the input system is one part of a larger composite system. Trace preservation means

\[
\operatorname{Tr}\mathcal E(X)=\operatorname{Tr}X.
\]

Ordinary positivity requires positive inputs to remain positive. This condition alone is insufficient for a physical channel.

Complete positivity is the stronger requirement that, for the identity map \(\mathcal I_R\) on an arbitrary reference system \(R\), the extended map \(\mathcal I_R\otimes\mathcal E\) also preserve positivity. This requirement is necessary because the input may be entangled with an unaffected reference system [R007]; [R008]. A map that is positive but not completely positive can produce an invalid matrix when applied to one half of a Bell pair.

Every finite-dimensional quantum channel has a Kraus representation

\[
\mathcal E(\rho)=\sum_k K_k\rho K_k^\dagger,
\qquad
\sum_kK_k^\dagger K_k=I.
\]

The operators \(K_k\) are called Kraus operators. The second equation is the condition for trace preservation. A Kraus representation is not unique: a unitary transformation among the members of one Kraus list produces another list representing the same channel.

A channel can always be realized by introducing an environment \(E\) in a fixed state, applying a joint unitary operator \(U\), and tracing out \(E\):

\[
\mathcal
E(\rho)=\operatorname{Tr}_E\!\left[U(\rho\otimes|0\rangle_E\langle0|)U^\dagger\right].
\]

This construction is a finite-dimensional Stinespring dilation [R007]. It does not assert that the physical bath is small or memoryless. It establishes that such a mathematical dilation exists.

The Choi operator provides a diagnostic for complete positivity. If the input dimension is \(d\), define the unnormalized maximally entangled vector

\[
|\Omega\rangle=\sum_{j=1}^d|j\rangle_R|j\rangle_A.
\]

Then

\[
J(\mathcal E)=(\mathcal I_R\otimes\mathcal
E)(|\Omega\rangle\langle\Omega|).
\]

Choi’s theorem states that \(\mathcal E\) is completely positive exactly when \(J(\mathcal E)\ge0\) [R008]. For this unnormalized convention, trace preservation is equivalent to

\[
\operatorname{Tr}_{\rm
out}J(\mathcal E)=I_R.
\]

**Remark.** A map that is positive but not completely positive may appear valid on product states. When applied to one half of \(|\Phi^+\rangle\), however, its output need not be a density operator.

## Amplitude damping and unitary dilation

Amplitude damping is a minimal model of relaxation in which the excited state \(|1\rangle\) decays to the ground state \(|0\rangle\), while an environment records whether the decay occurred. Let the system be \(S\), the environment be \(E\), and let \(p\in[0,1]\) be the decay probability. Define the action of a unitary operator on the relevant basis states by

\[
U|0\rangle_S|0\rangle_E=|0\rangle_S|0\rangle_E,
\]

\[
U|1\rangle_S|0\rangle_E=
\sqrt{1-p}|1\rangle_S|0\rangle_E
+\sqrt p|0\rangle_S|1\rangle_E.
\]

The two output vectors are normalized and orthogonal. This isometry can therefore be extended to a unitary operator on the full four-dimensional space. Prepare \(E\) in \(|0\rangle_E\). Taking the environment matrix element \(K_e={}_E\langle e|U|0\rangle_E\) for \(e=0,1\) gives

\[
K_0=|0\rangle\langle0|+\sqrt{1-p}|1\rangle\langle1|
=\begin{pmatrix}1&0\\0&\sqrt{1-p}\end{pmatrix},
\]

\[
K_1=\sqrt p|0\rangle\langle1|
=\begin{pmatrix}0&\sqrt p\\0&0\end{pmatrix}.
\]

These Kraus operators satisfy

\[
K_0^\dagger K_0+K_1^\dagger K_1=I,
\]

so the channel is trace preserving. Its Kraus form also makes complete positivity explicit. For an arbitrary input density operator

\[
\rho=\begin{pmatrix}\rho_{00}&\rho_{01}\\\rho_{10}&\rho_{11}\end{pmatrix},
\]

direct matrix multiplication yields

\[
\mathcal E_p(\rho)=
\begin{pmatrix}
\rho_{00}+p\rho_{11}&\sqrt{1-p}\,\rho_{01}\\
\sqrt{1-p}\,\rho_{10}&(1-p)\rho_{11}
\end{pmatrix}.
\]

The population in \(|1\rangle\) is transferred to \(|0\rangle\), and the coherences are reduced by the factor \(\sqrt{1-p}\). For a Markovian relaxation model with time \(t\ge0\) and relaxation time \(T_1>0\), the decay probability is written as

\[
p(t)=1-e^{-t/T_1}.
\]

Both \(t\) and \(T_1\) have units of seconds, so the exponent is dimensionless. The resulting channels form a semigroup: evolution for \(t_1\) followed by evolution for \(t_2\) is equivalent to evolution for \(t_1+t_2\).

The combined \(S+E\) evolution is unitary. The reduced map on Alice becomes irreversible after \(E\) is discarded.

If the environment retains memory and later interacts with the system again, a one-parameter Markov channel may not be valid. Relaxation does not imply fundamentally nonunitary evolution of the combined laboratory system. It can instead result from unitary evolution followed by a restriction to the observed subsystem.

Under time-homogeneous Markov assumptions, the density operator can obey the Gorini–Kossakowski–Sudarshan–Lindblad equation [R009]; [R010],

\[
\frac{d\rho}{dt}=-\frac{i}{\hbar}[H,\rho]
+\sum_j\gamma_j\left(L_j\rho L_j^\dagger
-\frac12\{L_j^\dagger L_j,\rho\}\right).
\]

Here \(H\) is Hermitian, \(L_j\) are jump operators, \(\gamma_j\ge0\) have units \({\rm s}^{-1}\), \([A,B]=AB-BA\), and \(\{A,B\}=AB+BA\). This generator preserves trace and complete positivity. It is a model based on stated assumptions rather than a definition of all open-system dynamics [R011].

## Encoded subspaces, leakage, and correlated noise

For a cluster of \(N\) physical defects, the microscopic state belongs to the tensor-product Hilbert space

\[
\mathcal H_1\otimes\cdots\otimes\mathcal H_N.
\]

An encoded doublet, meaning a selected two-dimensional subspace used to represent a qubit, is specified by a projector \(P\).

The encoded state is not obtained merely by tracing out the remaining energy levels. Its definition requires the preparation procedure within \(P\), whether transitions into the complementary subspace \(Q=I-P\) are possible, and whether recovery or heralding maps leakage back into the encoded subspace.

Correlated noise acting on two clusters is represented by a joint quantum channel. Such a channel need not factor as \(\mathcal E_A\otimes\mathcal E_B\).

Replacing correlated noise with independent single-cluster channels removes spatial covariance from the model. A many-body reduced density operator can reveal the omitted correlations.

Mixedness alone establishes neither topological order nor its absence. Those diagnoses require the nonlocal tests and scaling analyses performed in later chapters.

The projection

\[
\rho\mapsto P\rho P
\]

is trace decreasing when leakage has occurred. The missing trace,

\[
1-\operatorname{Tr}(P\rho P),
\]

is the leakage probability. Renormalizing \(P\rho P\) describes the state conditioned on detecting no leakage. Reporting this conditional state without its associated success probability conceals device failures.

A tensor product describes a composite system in terms of specified subsystems. Entanglement is a property of a state relative to that subsystem decomposition.

An encoded qubit is a chosen subspace. A noisy channel is a map acting on states.

None of these structures alone constitutes an emergent quasiparticle, a topological phase, or a fault-tolerant logical qubit.

## Common errors

- Treating \(\otimes\) as ordinary multiplication is incorrect. Dimensions and subsystem ordering matter, and \(A\otimes B\) acts on a different space from either factor.

- Not every correlated state is entangled. Separable mixtures can have nonfactorizing classical statistics.

- An ensemble decomposition is not unique. Many lists \(\{p_r,|\psi_r\rangle\}\) can represent the same density operator.

- Positivity cannot replace complete positivity. A merely positive map can produce an invalid operator when applied to one half of an entangled state.

- Trace loss must be included in the analysis. Postselection and leakage projections are trace-nonincreasing, and renormalization changes the claims that can be made about the process.

- Kraus operators should not automatically be interpreted as physical outcomes. They can label outcomes in a chosen dilation or quantum instrument, but different Kraus lists may describe the same unobserved channel.

- A Lindblad fit should not be identified with a unique microscopic model. Non-Markovian baths, slow spectral diffusion, and correlated fluctuators may violate the semigroup assumptions.

- Tracing out a subsystem is not equivalent to asserting that it was measured. Ignoring a subsystem and measuring it without reading the outcome can produce the same reduced state in some experimental arrangements, but their environmental records and the effects of later interventions can still differ.

## Exercises and checks

- Show that \(\dim(V\otimes W)=(\dim V)(\dim W)\). If \(\{|e_j\rangle\}\) is a basis of \(V\) and \(\{|f_k\rangle\}\) is a basis of \(W\), then the product vectors \(\{|e_j\rangle\otimes|f_k\rangle\}\) form a basis of \(V\otimes W\). The dimensions therefore multiply. For two qubits, \(2\times2=4\).

- Show that \(|\Phi^+\rangle\) is not a product state. A product state would have coefficients \(ac,ad,bc,bd\). The required conditions \(ac=bd=1/\sqrt2\) and \(ad=bc=0\) cannot hold simultaneously.

- State the two defining conditions for a density operator. They are positivity and unit trace.

- Show that the reduced state of \(|\Phi^+\rangle\) is \(\frac12 I\). Apply the partial trace to the four terms of \(|\Phi^+\rangle\langle\Phi^+|\). The cross terms vanish by orthogonality, and the diagonal terms contribute \(\frac12|0\rangle\langle0|\) and \(\frac12|1\rangle\langle1|\).

- Explain the meaning of complete positivity. A completely positive map remains positive when tensored with the identity map on an arbitrary unaffected reference system.

- Explain what is omitted when only \(P\rho P/\operatorname{Tr}(P\rho P)\) is reported. This normalized operator is conditioned on the state remaining in \(P\), so reporting it alone conceals the leakage probability \(1-\operatorname{Tr}(P\rho P)\).

The constructions developed here are the tensor product for combining subsystem state spaces, the density operator for states that cannot be represented adequately by a single ket, and the reduced dynamical map obtained after discarding a subsystem.

Later chapters use the following results without rederivation: dimensions of composite spaces multiply; pure entangled states can have mixed reduced states; the partial trace is determined by the requirement that it reproduce local expectation values; density operators are positive and have unit trace; physical deterministic processes are completely positive and trace preserving; every finite-dimensional channel has Kraus and unitary-dilation representations; leakage projections can decrease trace; and independent-channel models fail when a shared environment correlates two clusters.

## Sources

- [R004] M. A. Nielsen and I. L. Chuang, Quantum Computation and
Quantum Information: 10th Anniversary Edition, Cambridge University
Press (2010). DOI: [10.1017/CBO9780511976667](https://doi.org/10.1017/CBO9780511976667).

- [R006] J. Watrous, The Theory of Quantum Information,
Cambridge University Press (2018). DOI: [10.1017/9781316848142](https://doi.org/10.1017/9781316848142).

- [R007] W. F. Stinespring, “Positive functions on C-algebras,”
Proceedings of the American Mathematical Society*
6, 211–216 (1955). DOI: [10.1090/S0002-9939-1955-0069403-4](https://doi.org/10.1090/S0002-9939-1955-0069403-4).

- [R008] M.-D. Choi, “Completely positive linear maps on complex
matrices,” Linear Algebra and its Applications
10, 285–290 (1975). DOI: [10.1016/0024-3795(75)90075-0](https://doi.org/10.1016/0024-3795(75)90075-0).

- [R009] G. Lindblad, “On the generators of quantum dynamical
semigroups,” Communications in Mathematical Physics
48, 119–130 (1976). DOI: [10.1007/BF01608499](https://doi.org/10.1007/BF01608499).

- [R010] V. Gorini, A. Kossakowski, and E. C. G. Sudarshan,
“Completely positive dynamical semigroups of N-level systems,”
Journal of Mathematical Physics 17, 821–825
(1976). DOI: [10.1063/1.522979](https://doi.org/10.1063/1.522979).

- [R011] H.-P. Breuer and F. Petruccione, The Theory of Open
Quantum Systems, Oxford University Press (2002). DOI: [10.1093/acprof:oso/9780199213900.001.0001](https://doi.org/10.1093/acprof:oso/9780199213900.001.0001).


---
