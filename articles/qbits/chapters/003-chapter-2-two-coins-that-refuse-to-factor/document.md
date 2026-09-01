# Chapter 2 — Nonfactorizable states of two two-level systems

For two classical coins, each coin can land heads or tails, giving four joint outcomes: HH, HT, TH, and TT.

For two fair coins, each joint outcome has probability \(1/4\). For loaded coins, the four probabilities can have any nonnegative values whose sum is one.

A corresponding quantum system consists of two silver atoms of the type whose internal states are separated by a magnetic field. Each atom has two possible measurement outcomes. The pair therefore has four outcome labels, as in the classical case. The essential difference is that a quantum state assigns four complex amplitudes to these labels, and these amplitudes need not factor into one pair of amplitudes for the first atom and another pair for the second.

No crystal is involved at this stage. The system consists only of two atoms, four joint labels, and a set of amplitudes that may be nonfactorizable.

## Joint basis and tensor-product dimension

Denote the atoms by \(A\) and \(B\). Each has the two possible answers introduced in Chapter 1, now written \(0\) and \(1\) rather than \(z+\) and \(z-\). A ket is the notation used to represent a quantum state or basis label. The pair has four joint basis kets:

\[
|00\rangle,\quad |01\rangle,\quad |10\rangle,\quad |11\rangle.
\]

The first digit refers to \(A\), and the second refers to \(B\). Thus, \(|01\rangle\) denotes the outcome in which \(A\) has value 0 and \(B\) has value 1.

A state of the pair is specified by four complex amplitudes, one for each joint label. The squared magnitudes of these amplitudes sum to one. Relative phases are physically consequential because they affect the probabilities of later measurements, just as the minus sign between \(z+\) and \(z-\) affected the outcome of the transverse-magnet measurement in Chapter 1.

The states of two systems are combined using the tensor product. If \(A\) is in the state \(\alpha|0\rangle+\beta|1\rangle\) and \(B\) is in \(|0\rangle\), then the joint state is

\[
(\alpha|0\rangle+\beta|1\rangle)\otimes|0\rangle
=\alpha|00\rangle+\beta|10\rangle.
\]

The symbol \(\otimes\) denotes the tensor product. For states, it combines the state labels of the two systems and multiplies their amplitudes. This rule is taken as the definition here. The same symbol will later be used to combine operators as well as kets.

If \(A\) has \(d_A\) independent basis states and \(B\) has \(d_B\), then the pair has \(d_A d_B\) joint basis states. In particular, two systems with two basis states each produce four joint labels.

Similarly, a three-state system combined with a four-state system has twelve joint basis states. Tensor-product dimensions multiply rather than add.

An operator is a linear transformation acting on quantum states. An operator that acts only on \(A\) is represented on the joint system as \(M_A\otimes I_B\), where \(M_A\) is the original operator and \(I_B\) is the identity operator that leaves \(B\) unchanged. Consequently, \(M_A\otimes I_B\) acts on \(A\) while leaving \(B\) unchanged.

Without the tensor-product rule, the four joint labels could be misinterpreted as four additional states of a single atom. Instead, each label specifies a pair of answers, one from each subsystem.

## Product states

Some four-amplitude joint states factor into two states with two amplitudes each. For example,

\[
|0\rangle_A\otimes|0\rangle_B = |00\rangle.
\]

In this state, \(A\) is definitely 0 and \(B\) is definitely 0. The state of either atom does not depend on the other.

As another example, let both atoms be in the transverse-basis state introduced in Chapter 1,

\[
|+\rangle = \frac{|0\rangle+|1\rangle}{\sqrt{2}}.
\]

Their joint state is then

\[
|+\rangle_A\otimes|+\rangle_B
= \frac{|00\rangle+|01\rangle+|10\rangle+|11\rangle}{2}.
\]

Every joint basis state has the same amplitude. Measuring both atoms gives each of the four joint outcomes with probability one quarter. The two outcomes are independent because the probability of each pair equals the product of the corresponding single-atom probabilities.

A joint state that can be written as one ket for \(A\) tensor-multiplied by one ket for \(B\) is called a product state. The defining issue is whether the joint state factors into two local kets.

Thus, the statement that a pair is in a product state is a factorization claim. It is not merely a claim that measurement outcomes appear uncorrelated in one particular basis.

## Entangled pure states

Consider the state

\[
|\Phi^+\rangle_{AB}
=\frac{|0\rangle_A|0\rangle_B+|1\rangle_A|1\rangle_B}{\sqrt{2}}
=\frac{|00\rangle+|11\rangle}{\sqrt{2}}.
\]

This is called a Bell state. The two joint basis states in the superposition are orthogonal, meaning that their inner product is zero. The state is therefore normalized:

\[
\langle\Phi^+|\Phi^+\rangle=\frac{1+1}{2}=1.
\]

A measurement of both atoms in the \(\{|0\rangle,|1\rangle\}\) basis has only two possible outcomes: 00 and 11, each with probability \(1/2\). The two answers always agree.

To test whether this state is a product, assume that it can be written as

\[
|\Phi^+\rangle=(a|0\rangle+b|1\rangle)_A\otimes(c|0\rangle+d|1\rangle)_B.
\]

Expanding the right-hand side gives the amplitudes \(ac\), \(ad\), \(bc\), and \(bd\) for \(|00\rangle\), \(|01\rangle\), \(|10\rangle\), and \(|11\rangle\), respectively. Equality with the Bell state would require

\[
ac=\frac{1}{\sqrt2},\qquad ad=0,\qquad bc=0,\qquad bd=\frac{1}{\sqrt2}.
\]

The first equation implies that \(a\) and \(c\) are nonzero. The condition \(ad=0\) then requires \(d=0\), which makes it impossible for \(bd\) to equal \(1/\sqrt2\). Therefore, no coefficients \(a,b,c,d\) satisfy all four equations.

A pure joint state that cannot be factorized is called entangled. Entanglement is a property of the joint state and does not imply that a hidden message travels between the atoms. It means that the four joint amplitudes cannot be separated into independent amplitude lists for the two subsystems.

A more general algebraic test follows from the Schmidt decomposition. Any pure bipartite state can be written as

\[
|\Psi\rangle_{AB}=\sum_{k=1}^{r}s_k|u_k\rangle_A|v_k\rangle_B,
\]

where the Schmidt coefficients \(s_k\) are nonnegative and satisfy \(\sum_k s_k^2=1\), while \(\{|u_k\rangle_A\}\) and \(\{|v_k\rangle_B\}\) are orthonormal lists of local states. Orthonormality means that distinct states in each list have zero inner product and each state has norm one.

The number \(r\) of nonzero Schmidt coefficients is the Schmidt rank. A pure state is a product state exactly when its Schmidt rank is 1.

For the Bell pair, \(r=2\) and \(s_1=s_2=1/\sqrt2\).

If the requirement that the local lists be orthonormal is removed, many states can be expressed as sums of product terms. Such an expression does not make the state a product state. The relevant criterion is the Schmidt rank.

## Density operators for pure and mixed states

If the pair is known to be exactly in \(|\Phi^+\rangle\), a ket provides a complete state description. In many situations, however, the preparation is not known as a single ket.

For example, a fair classical coin might determine whether the pair is prepared in \(|00\rangle\) or \(|11\rangle\). Alternatively, only atom \(A\) might be accessible. A single ket cannot represent this type of classical uncertainty.

The appropriate description is a density operator, represented in a chosen basis by a square matrix of complex numbers. For a pure state \(|\psi\rangle\), its density operator is the outer product \(|\psi\rangle\langle\psi|\). The outer product combines a ket and a bra to form an operator. For the Bell pair,

\[
\rho_{AB}=|\Phi^+\rangle\langle\Phi^+|
=\frac12\left(
|00\rangle\langle00|+|00\rangle\langle11|
+|11\rangle\langle00|+|11\rangle\langle11|
\right).
\]

A density operator is also called a density matrix once a basis has been chosen. The same mathematical object describes a definite ket, a classical probability distribution over kets, and—as discussed in the next section—the state remaining for one atom after its partner is ignored.

Every valid density operator \(\rho\) has three properties:

- It is Hermitian, meaning that it equals its adjoint: \(\rho^\dagger=\rho\).

- It is positive semidefinite, meaning that \(\langle\chi|\rho|\chi\rangle\ge0\) for every \(|\chi\rangle\).

- It has unit trace: \(\operatorname{Tr}\rho=1\). The trace is the sum of the diagonal matrix entries in any basis.

If a preparation produces the pure state \(|\psi_k\rangle\) with classical probability \(p_k\), the corresponding density operator is

\[
\rho=\sum_k p_k|\psi_k\rangle\langle\psi_k|.
\]

A yes-or-no measurement outcome labeled \(m\) is represented by a projector \(P_m\), an operator satisfying \(P_m^2=P_m\). The probability of the outcome \(m\) is

\[
\Pr(m)=\operatorname{Tr}(\rho P_m).
\]

A density operator derived from a single ket satisfies \(\rho^2=\rho\), or equivalently \(\operatorname{Tr}(\rho^2)=1\). It also has rank 1. The Bell pair, considered as a complete two-atom system, has this property:

\[
\operatorname{Tr}(\rho_{AB}^2)=1.
\]

A density operator is therefore not a distinct or more obscure type of physical state. It is the smallest table that retains all probability predictions when a ket is insufficient. If Hermiticity, positivity, or unit trace is omitted, the resulting probabilities can become complex, negative, or fail to sum to one.

## Partial trace and reduced states

Assume that only subsystem \(A\) is accessible. All predictions for measurements on \(A\) alone are obtained from a reduced density operator formed by summing over the basis states of \(B\):

\[
\rho_A=\operatorname{Tr}_B(\rho_{AB})
=\sum_{b=0}^{1}{}_B\langle b|\rho_{AB}|b\rangle_B.
\]

This operation is the partial trace over \(B\). It does not represent the physical destruction of \(B\). It constructs the statistics observed when no measurement outcome from \(B\) is retained.

For basis operators, the partial trace satisfies

\[
\operatorname{Tr}_B\left(|a b\rangle\langle a' b'|\right)
=\langle b'|b\rangle\,|a\rangle\langle a'|
=\delta_{b'b}|a\rangle\langle a'|,
\]

where the Kronecker delta \(\delta_{b'b}\) equals 1 when \(b'=b\) and 0 otherwise. The cross terms in the Bell-state density operator contain \(|0\rangle_B\langle1|\) or \(|1\rangle_B\langle0|\). Because these basis states are orthogonal, the cross terms vanish under the partial trace. The remaining terms give

\[
\rho_A=\frac12\left(|0\rangle\langle0|+|1\rangle\langle1|\right)
=\frac{I_A}{2},
\]

where \(I_A\) is the identity operator on \(A\), represented by the two-by-two matrix with ones on the diagonal and zeros elsewhere.

The complete pair is pure, but either atom considered separately is maximally mixed for a two-state system. This is confirmed by

\[
\operatorname{Tr}(\rho_A^2)=\operatorname{Tr}\left(\frac{I_A}{4}\right)=\frac12.
\]

Thus, global purity does not imply local purity. In this case, the local mixedness does not mean that a particular local ket was prepared and subsequently forgotten. No local ket describes the subsystem.

Operationally, every measurement on \(A\) alone is completely predicted by \(\rho_A\). An operator acting only on \(A\) is represented on the pair by \(M_A\otimes I_B\). Its expectation value, or statistical average, is

\[
\langle M_A\rangle=\operatorname{Tr}\!\left[\rho_{AB}(M_A\otimes
I_B)\right].
\]

The reduced density operator \(\rho_A\) is the unique operator that reproduces every such expectation value:

\[
\operatorname{Tr}(\rho_A M_A)
=\operatorname{Tr}\!\left[\rho_{AB}(M_A\otimes I_B)\right].
\]

For a product operator, the partial trace has the simpler form

\[
\operatorname{Tr}_B(X_A\otimes Y_B)=X_A\operatorname{Tr}(Y_B).
\]

Linearity, meaning preservation of sums and scalar multiples, extends this rule to every joint operator.

A local operator chosen only to reproduce one measurement need not reproduce another. The partial trace is unique because it agrees with the joint state for all local measurements.

## Relative phase accessible only through joint measurements

Consider the Bell state with an additional relative phase:

\[
|\Phi_\theta\rangle=\frac{|00\rangle+e^{i\theta}|11\rangle}{\sqrt2},
\]

where \(\theta\) is the relative phase between the two terms. The joint density operator contains the cross terms \(e^{-i\theta}|00\rangle\langle11|\) and \(e^{i\theta}|11\rangle\langle00|\). Both vanish under \(\operatorname{Tr}_B\), so \(\rho_A=I/2\) for every value of \(\theta\).

Joint measurements can therefore detect the phase, but no measurement on \(A\) alone can detect it. The phase information remains in the pair but is not locally accessible.

This family provides a counterexample to the assumption that every relative phase in a two-system state must appear in the state of at least one subsystem.

## Correlation is not sufficient to establish entanglement

Consider the density operator

\[
\rho_{\mathrm{cc}}=\frac12|00\rangle\langle00|+\frac12|11\rangle\langle11|.
\]

Measurements of both atoms in the \(0/1\) basis always produce matching answers, exactly as for \(|\Phi^+\rangle\). However, this state is a classical equal-probability mixture of two product states.

A mixed bipartite state is separable if it can be written as

\[
\rho_{AB}=\sum_k p_k\,\rho_A^{(k)}\otimes\rho_B^{(k)},
\qquad p_k\ge0,\quad \sum_kp_k=1.
\]

The superscript \((k)\) labels a possible component and is not an exponent. The state \(\rho_{\mathrm{cc}}\) is explicitly separable. A mixed state for which no such decomposition exists is entangled.

Consequently, a single pattern of matching measurement outcomes does not establish entanglement. The Bell pair and \(\rho_{\mathrm{cc}}\) agree for every measurement in the \(0/1\) basis but disagree for measurements in a transverse basis.

More stringent tests use several measurement settings. Bell inequalities test whether correlations among multiple measurement choices can be explained by shared pre-existing randomness [R042]; [R043]; [R044]. [Theory] Some entangled mixed states do not violate a given Bell inequality. Entanglement and Bell nonlocality are therefore distinct properties [R044].

## Purity as a measure of mixedness

The quantity \(\operatorname{Tr}(\rho^2)\) is called the purity. It is dimensionless. For a system with \(d\) basis states, purity ranges from \(1/d\) for the maximally mixed density operator \(I/d\) to 1 for a pure state.

For a mixed state in a finite-dimensional state space,

\[
\operatorname{Tr}(\rho^2)<1.
\]

A mixed density operator generally has no unique decomposition into an ensemble of prepared kets. For a single two-state atom,

\[
\frac{I}{2}
=\frac12|0\rangle\langle0|+\frac12|1\rangle\langle1|
=\frac12|+\rangle\langle+|+\frac12|-\rangle\langle-|,
\]

where \(|\pm\rangle=(|0\rangle\pm|1\rangle)/\sqrt2\). The density operator, rather than any preferred ensemble interpretation, contains the operational measurement predictions.

Because the ensemble decomposition is not unique, determining \(\rho\) does not in general determine which local pure states were prepared.

## Populations and coherences

Consider one atom in the state

\[
|+\rangle=\frac{|0\rangle+|1\rangle}{\sqrt2},
\qquad
\rho_+=|+\rangle\langle+|=\frac12
\begin{pmatrix}
1&1\\
1&1
\end{pmatrix}.
\]

This matrix is written in the ordered basis \((|0\rangle,|1\rangle)\). The diagonal entries are called populations and give the probabilities of obtaining 0 and 1 in this basis.

The off-diagonal entries are called coherences. They contain the relative-phase information that permits interference between the two basis-state contributions.

An interaction with an uncontrolled subsystem can reduce these off-diagonal elements without changing the populations. The following calculation describes such a process.

## A dephasing channel

Consider a noisy process that preserves the populations and reduces only the off-diagonal elements. Let the parameter \(\lambda\), with \(0\le\lambda\le1\), specify the fraction of each coherence that remains. One model is

\[
\mathcal E_\lambda(\rho)
:=K_0\rho K_0^\dagger+K_1\rho K_1^\dagger,
\]

with

\[
K_0=\sqrt{\frac{1+\lambda}{2}}\,I,
\qquad
K_1=\sqrt{\frac{1-\lambda}{2}}\,Z,
\qquad 0\le\lambda\le1.
\]

Here \(I\) is the \(2\times2\) identity, and

\[
Z=|0\rangle\langle0|-|1\rangle\langle1|
=\begin{pmatrix}1&0\\0&-1\end{pmatrix}
\]

is the phase-flip operator introduced in Chapter 1. The operators \(K_0\) and \(K_1\), called Kraus operators, satisfy

\[
K_0^\dagger K_0+K_1^\dagger K_1=I,
\]

so the total probability remains normalized. A map constructed by sandwiching \(\rho\) between Kraus operators, summing the results, and preserving the trace is a quantum channel [R045].

More precisely, a valid quantum channel is completely positive and trace-preserving. Complete positivity ensures legal evolution even when the system is part of a larger state, and trace preservation maintains total probability when unobserved degrees of freedom are omitted. Computationally, the channel is evaluated by forming each operator sandwich and adding the results.

This particular channel describes dephasing: it reduces phase coherence while preserving populations.

For a general input state

\[
\rho=\begin{pmatrix}a&c\\c^*&b\end{pmatrix},
\qquad a+b=1,
\]

where \(a\) and \(b\) are real populations and \(c\) is a complex coherence, direct matrix multiplication gives

\[
\mathcal E_\lambda(\rho)
=\begin{pmatrix}a&\lambda c\\\lambda c^*&b\end{pmatrix}.
\]

The populations are unchanged, while the coherences are multiplied by \(\lambda\). Applied to \(|+\rangle\), the channel gives

\[
\rho_+'=\frac12
\begin{pmatrix}1&\lambda\\\lambda&1\end{pmatrix}.
\]

The purity of the output is

\[
\operatorname{Tr}[(\rho_+')^2]=\frac{1+\lambda^2}{2}.
\]

At \(\lambda=1\), the channel leaves the state unchanged and the state remains pure. At \(\lambda=0\), all coherence in this basis is removed and \(\rho_+'=I/2\). For the intermediate value \(\lambda=1/2\), the output is

\[
\rho_+'=\begin{pmatrix}1/2&1/4\\1/4&1/2\end{pmatrix},
\qquad
\operatorname{Tr}[(\rho_+')^2]=\frac58.
\]

This model represents pure dephasing. Energy relaxation is a different channel that changes populations, usually through energy exchange, rather than only reducing off-diagonal elements. Failing to distinguish these processes can lead to the incorrect inference that a long-lived excited-state population implies preserved phase coherence.

## Environmental transfer of phase information

A microscopic model illustrates how local coherence can be transferred to an environment. Let the environment initially be in the state \(|e\rangle\), and suppose the joint unitary evolution is

\[
|0\rangle|e\rangle\longmapsto |0\rangle|e_0\rangle,
\qquad
|1\rangle|e\rangle\longmapsto |1\rangle|e_1\rangle.
\]

An initial state \(|+\rangle|e\rangle\) then evolves to

\[
|\Psi\rangle_{SE}=\frac{|0\rangle|e_0\rangle+|1\rangle|e_1\rangle}{\sqrt2},
\]

where \(S\) denotes the system and \(E\) denotes the environment. Taking the partial trace over \(E\) gives

\[
\rho_S=\frac12
\begin{pmatrix}
1&\langle e_1|e_0\rangle\\
\langle e_0|e_1\rangle&1
\end{pmatrix}.
\]

The remaining system coherence is equal to the overlap of the two environment states. If \(|e_0\rangle\) and \(|e_1\rangle\) are identical, the environment contains no information that distinguishes the system basis states, and the coherence remains. If the environment states are orthogonal, they form a perfectly distinguishable record and the local coherence vanishes.

Decoherence is the process in which uncontrolled interactions transfer phase information into environmental degrees of freedom that are not monitored. It is a dynamical process, not a third category of state in addition to pure and mixed states.

Although decoherence often produces a mixed reduced state, not every mixed state results from decoherence. A mixed state can also arise directly from a classically randomized preparation.

[Theory] Environment-induced entanglement followed by partial tracing provides the standard open-system account of decoherence [R046]; [R047]. The combined system-and-environment state may remain pure and evolve unitarily throughout the process.

Decoherence is therefore not necessarily a collapse postulate. In this description, the system and environment evolve unitarily, while entanglement between them suppresses interference in the reduced system.

This account explains reduced-state dynamics. By itself, it does not resolve every interpretation of quantum measurement.

## Experimental state reconstruction and limitations

An ideal theoretical derivation specifies \(\rho\) directly. A laboratory instead produces detector clicks, voltages, fluorescence counts, and a preparation procedure.

Reconstructing a density operator requires measurements in several bases together with statistical inference. This procedure is called quantum-state tomography. The result is an estimate conditioned on detector calibration and on a model of the measurement apparatus.

The claim that the same state is prepared repeatedly is also an experimental assumption. Slow drift can cause successive trials to differ.

Leakage can invalidate the assumed two-dimensional state space by transferring population into additional states. Selection rules and detector inefficiency can also bias the apparent ensemble.

Density operators remain the appropriate formalism, but the selected state space and noise model require experimental justification.

[Experiment] Bell tests using separated solid-state electron spins have observed correlations incompatible with a local-realist model while closing major detection and locality loopholes under the stated experimental assumptions [R048]. This constitutes substantially stronger evidence than observing matching \(0/1\) outcomes. It does not imply that every correlated density operator is entangled.

Experimental decoherence is inferred from the loss of interference or the decay of off-diagonal coherence, often summarized by fitted time constants. The parameter \(\lambda\) used above is a channel-model parameter rather than a universal law of nature.

Its value may depend on elapsed time, pulse sequence, temperature, noise spectrum, and correlations with previous runs. Later chapters will introduce the distinct quantities \(T_1\), \(T_2\), and \(T_2^*\) instead of representing all noise processes with a single parameter.

## Common conceptual errors

- “Not a product state” and “mixed state” are not synonymous. The Bell state is pure and entangled. The state \(I/2\) is mixed but, when it describes a single subsystem with no specified partner, there is no bipartite pair in which it can be entangled.

- Matching measurement outcomes do not by themselves establish entanglement. The separable state \(\rho_{\mathrm{cc}}\) has perfect \(0/1\) correlation. Entanglement is determined by whether the full density operator admits a separable decomposition, not by whether one measurement plot has matching bars.

- A mixed reduced state need not result from imprecise preparation. One subsystem of a pure entangled state is mixed. Ignoring the partner is sufficient to produce the reduced mixture.

- Not every mixed state has undergone decoherence. Deliberately using a fair coin to prepare either \(|0\rangle\) or \(|1\rangle\) produces \(I/2\) without a subsequent environmental interaction.

- Decoherence need not be treated as a mandatory collapse postulate. In the open-system description, the system and environment can evolve unitarily while their entanglement suppresses local interference [R046]; [R047]. This account explains reduced-state dynamics but does not, by itself, resolve every interpretation of quantum measurement.

- Dephasing and relaxation are distinct processes. Pure dephasing preserves basis populations while reducing off-diagonal terms. Relaxation transfers population, usually with energy exchange. Real quantum channels can include both effects.

- An ensemble decomposition is not unique. Expressing \(I/2\) as a 50–50 mixture of \(|0\rangle\) and \(|1\rangle\) does not prove that those were the actual preparations. The same operator is also a 50–50 mixture of \(|+\rangle\) and \(|-\rangle\).

- A computer simulation of a Bell pair implements a mathematical description of entanglement. It does not imply that the computer contains two physically entangled atoms.

## Concept checks

- **Problem:** Determine the dimension of a composite system whose subsystems have dimensions 3 and 4.

  **Solution:** \(3\times4=12\). Tensor-product dimensions multiply.

- **Problem:** Demonstrate that \(|\Phi^+\rangle\) is not a product state.

  **Solution:** Matching the four amplitudes would require \(ac=1/\sqrt2\), \(ad=0\), \(bc=0\), and \(bd=1/\sqrt2\). The first condition implies \(a,c\neq0\), so \(d=0\), after which \(bd\) cannot equal \(1/\sqrt2\).

- **Problem:** Identify the error in interpreting matching \(0/1\) outcomes as sufficient evidence of entanglement.

  **Solution:** The separable mixture \(\rho_{\mathrm{cc}}\) produces the same matching bars. Entanglement is the absence of a separable decomposition, not the presence of correlation in one measurement plot.

- **Problem:** Explain why tracing out one subsystem of \(|\Phi^+\rangle\) removes the cross terms.

  **Solution:** Those terms contain orthogonal partner-state factors, so the partial trace produces \(\langle1|0\rangle=0\).

- **Problem:** Show that applying \(\mathcal
E_{1/2}\) to \(|+\rangle\) gives a state with purity \(5/8\).

  **Solution:** The output is \(\begin{pmatrix}1/2&1/4\\1/4&1/2\end{pmatrix}\), and \(\operatorname{Tr}[(\rho_+')^2]=(1+(1/2)^2)/2=5/8\).

- **Problem:** Identify the error in describing every mixed state as decohered.

  **Solution:** A coin-flip preparation of \(|0\rangle\) or \(|1\rangle\) already produces \(I/2\), with no subsequent environmental record.

The resulting framework describes a bipartite system, the reduced state obtained by ignoring one subsystem, and the transfer of relative-phase information into unobserved degrees of freedom.

## Sources

- [R042] A. Einstein, B. Podolsky, and N. Rosen, “Can
Quantum-Mechanical Description of Physical Reality Be Considered
Complete?”, Physical Review 47, 777–780
(1935). DOI: [10.1103/PhysRev.47.777](https://doi.org/10.1103/PhysRev.47.777).

- [R043] J. S. Bell, “On the Einstein Podolsky Rosen Paradox,”
Physics Physique Fizika 1, 195–200 (1964).
DOI: [10.1103/PhysicsPhysiqueFizika.1.195](https://doi.org/10.1103/PhysicsPhysiqueFizika.1.195).

- [R044] R. F. Werner, “Quantum states with Einstein-Podolsky-Rosen
correlations admitting a hidden-variable model,” Physical Review
A 40, 4277–4281 (1989). DOI: [10.1103/PhysRevA.40.4277](https://doi.org/10.1103/PhysRevA.40.4277).

- [R045] K. Kraus, “General state changes in quantum theory,”
Annals of Physics 64, 311–335 (1971). DOI: [10.1016/0003-4916(71)90108-4](https://doi.org/10.1016/0003-4916(71)90108-4).

- [R046] W. H. Zurek, “Decoherence, einselection, and the quantum
origins of the classical,” Reviews of Modern Physics
75, 715–775 (2003). DOI: [10.1103/RevModPhys.75.715](https://doi.org/10.1103/RevModPhys.75.715);
arXiv: [quant-ph/0105127](https://arxiv.org/abs/quant-ph/0105127).

- [R047] M. Schlosshauer, “Decoherence, the measurement problem, and
interpretations of quantum mechanics,” Reviews of Modern
Physics 76, 1267–1305 (2005). DOI: [10.1103/RevModPhys.76.1267](https://doi.org/10.1103/RevModPhys.76.1267);
arXiv: [quant-ph/0312059](https://arxiv.org/abs/quant-ph/0312059).

- [R048] B. Hensen et al., “Loophole-free Bell inequality
violation using electron spins separated by 1.3 kilometres,”
Nature 526, 682–686 (2015). DOI: [10.1038/nature15759](https://doi.org/10.1038/nature15759);
arXiv: [1508.05949](https://arxiv.org/abs/1508.05949).

---
