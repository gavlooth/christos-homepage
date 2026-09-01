# Chapter 1 — Discrete outcomes in the Stern–Gerlach experiment

In the Stern–Gerlach experiment, a beam of silver atoms passes through a nonuniform magnetic field, meaning that the magnetic field varies with position. The detector records two discrete spatial outcomes. By contrast, a classical magnetic moment with a continuously variable orientation would permit a continuous range of deflections.

In 1922, Otto Stern and Walther Gerlach observed these two outcomes. This chapter develops the minimal rules for quantum states and measurements that predict both this result and the result obtained when a second magnet is oriented perpendicular to the first.

## Complex amplitudes and interference

In classical probability theory, each outcome has a nonnegative probability, and the probabilities of all mutually exclusive outcomes sum to one. Quantum mechanics instead assigns a complex amplitude to each outcome. The Born rule converts an amplitude into a probability by taking its squared magnitude.

A complex number has the form

\[
z = a + ib,
\]

where \(a\) and \(b\) are real numbers, and \(i^2=-1\). The complex conjugate of \(z\) is \(z^*=a-ib\). The squared magnitude of \(z\) is

\[
|z|^2 = z^* z = a^2 + b^2.
\]

Because this squared magnitude cannot be negative, it can represent a probability.

An amplitude is not itself a probability. Amplitudes with opposite phases can add to zero before the squared magnitude is taken. This addition and cancellation of amplitudes is called interference.

The analysis of the second magnet depends on this amplitude addition.

Denote the two amplitudes by \(\alpha\) and \(\beta\), and arrange them as a column vector:

\[
|\psi\rangle
=
\begin{pmatrix}
\alpha \\
\beta
\end{pmatrix}.
\]

This notation is called a ket. A ket is a column vector representing a quantum state in a chosen basis, where a basis is a specified set of state vectors used to express other states. Ket notation distinguishes a state vector from the operator or measurement used to analyze it.

The normalization condition requires the squared magnitudes of the two amplitudes to sum to one:

\[
|\alpha|^2+|\beta|^2=1.
\]

This condition ensures that the total Born probability for the two outcomes is one.

In this chapter, a state is represented by a normalized column vector. Vectors that differ only by an overall complex factor of magnitude one represent the same physical state.

## Basis states and superposition

Label the two observed positions as “along the magnet, up” and “along the magnet, down”:

\[
|z+\rangle
=
\begin{pmatrix} 1 \\ 0 \end{pmatrix},
\qquad
|z-\rangle
=
\begin{pmatrix} 0 \\ 1 \end{pmatrix}.
\]

The state of an atom can then be written as

\[
|\psi\rangle = \alpha |z+\rangle + \beta |z-\rangle.
\]

This expression is a superposition in the \(z\) basis. A superposition is a linear combination of basis states. It specifies the two amplitudes used to calculate the outcome probabilities of a \(z\)-basis measurement. It does not assign the atom a simultaneous pair of classical orientations.

The dual of a ket is obtained by transposing the column vector and complex-conjugating every entry. The resulting row vector is called a bra:

\[
\langle\psi| = \begin{pmatrix} \alpha^* & \beta^* \end{pmatrix}.
\]

Multiplying a bra by a ket gives one complex number, called the inner product and written \(\langle\phi|\psi\rangle\). For the state of the atom,

\[
\langle\psi|\psi\rangle = |\alpha|^2 + |\beta|^2 = 1.
\]

A Hilbert space is a vector space equipped with an inner product. For this chapter, the relevant operations are vector addition, multiplication by complex scalars, and inner products between state vectors.

## Sequential measurements along perpendicular axes

An idealized Stern–Gerlach magnet implements a two-outcome measurement of one spin component. A spin component is the projection of the intrinsic angular momentum along a specified axis. Blocking one output and retaining the other postselects the corresponding eigenstate, where postselection means retaining only the systems that produced a specified measurement outcome. This procedure prepares a state by measurement.

A perpendicular magnet measures a different spin component. Denote its outcomes by \(x+\) and \(x-\), and define

\[
|x+\rangle = \frac{|z+\rangle + |z-\rangle}{\sqrt{2}},
\qquad
|x-\rangle = \frac{|z+\rangle - |z-\rangle}{\sqrt{2}}.
\]

The relative minus sign makes the two new states orthogonal. Orthogonal states have an inner product equal to zero:

\[
\langle x+|x-\rangle
=
\frac12 \bigl(\langle z+| + \langle z-|\bigr)
\bigl(|z+\rangle - |z-\rangle\bigr)
=
\frac12(1-1)
=
0.
\]

In step 1, an initially unselected ensemble of atoms passes through a \(z\)-oriented magnet. The \(z-\) output is blocked, and the \(z+\) output is retained. Every surviving atom is then in the state

\[
|\psi_1\rangle = |z+\rangle.
\]

A second \(z\)-oriented magnet sends all these atoms to its \(z+\) output. The corresponding amplitude is \(1\), and the probability is \(1\).

In step 2, the next magnet is oriented perpendicular to the first, and only the \(x+\) output is retained. The transition amplitude is

\[
\langle x+|z+\rangle
=
\frac{1}{\sqrt{2}}
\bigl(\langle z+| + \langle z-|\bigr)|z+\rangle
=
\frac{1}{\sqrt{2}}.
\]

The Born rule therefore gives

\[
P(x+\mid z+) = \Bigl|\frac{1}{\sqrt{2}}\Bigr|^2 = \frac12.
\]

Approximately half of the atoms survive this postselection. Each surviving atom is no longer in the state \(z+\). Its state is

\[
|\psi_2\rangle = |x+\rangle = \frac{|z+\rangle + |z-\rangle}{\sqrt{2}}.
\]

The probability that an atom passes the filter and the state of an atom conditioned on passing the filter are therefore distinct objects. The postselected state of each survivor is normalized.

In step 3, the \(z\) component is measured again. The relevant amplitudes are

\[
\langle z+|x+\rangle = \frac{1}{\sqrt{2}},
\qquad
\langle z-|x+\rangle = \frac{1}{\sqrt{2}},
\]

so

\[
P(z+\mid x+) = P(z-\mid x+) = \frac12.
\]

The perpendicular measurement removes the certainty established in step 1. It does not reveal a pre-existing \(x\) value while preserving the previously prepared \(z\) state. In this ideal model, measuring one component prepares an eigenstate of that component, and that state generally gives a distribution of possible outcomes for a different component.

For 100 atoms already prepared in \(z+\), the expected counts are approximately 50 atoms in the \(x+\) output and then approximately 25 atoms in each final \(z\) output. Small experimental samples fluctuate around these expected counts, but the conditional probabilities remain one half and one half.

## Overall and relative phase

Multiplying an entire ket by \(e^{i\gamma}\), where \(\gamma\) is real, leaves every probability unchanged:

\[
\bigl|\langle a|e^{i\gamma}\psi\rangle\bigr|^2
=
|e^{i\gamma}|^2 \,\bigl|\langle a|\psi\rangle\bigr|^2
=
\bigl|\langle a|\psi\rangle\bigr|^2.
\]

Thus, \(|\psi\rangle\) and \(e^{i\gamma}|\psi\rangle\) represent the same physical state. The equivalence class of vectors related by such an overall phase is called a ray. An overall phase has no observable effect.

A relative phase is the phase difference between components of a superposition. It is observable through suitable interference measurements. The two states

\[
\frac{|z+\rangle + |z-\rangle}{\sqrt{2}} = |x+\rangle,
\qquad
\frac{|z+\rangle - |z-\rangle}{\sqrt{2}} = |x-\rangle
\]

give the same probabilities for a \(z\)-basis measurement but opposite definite outcomes for an \(x\)-basis measurement. The distinction between overall and relative phase is therefore necessary to explain the result of the second magnet.

## The Born rule and projection

Let \(\{|a_j\rangle\}\) be a complete set of mutually exclusive measurement outcomes. Mutual exclusivity means that every pair of distinct states is orthogonal, and completeness means that the set includes every possible outcome. The Born rule states that the probability of outcome \(j\) is

\[
P(j) = \bigl|\langle a_j|\psi\rangle\bigr|^2.
\]

Born introduced the probabilistic interpretation of the wavefunction in 1926. In modern notation, each outcome is associated with a projector

\[
\Pi_j = |a_j\rangle\langle a_j|.
\]

A projector is an operator that extracts the component of a state lying in a specified subspace. The Born probability can then be written as

\[
P(j) = \langle\psi|\Pi_j|\psi\rangle.
\]

These projectors are idempotent and Hermitian. Idempotence means that applying the projector twice has the same effect as applying it once, and Hermiticity means that the projector equals its adjoint. For a complete measurement, the projectors sum to the identity:

\[
\sum_j \Pi_j = I.
\]

This completeness relation ensures that the probabilities sum to one. If the measurement produces the unique outcome \(j\), the ideal post-measurement state is \(|a_j\rangle\). More generally, it is the normalized projection

\[
|\psi_j\rangle
=
\frac{\Pi_j|\psi\rangle}{\sqrt{\langle\psi|\Pi_j|\psi\rangle}}.
\]

If the measurement outcome is not recorded or is ignored, a single ket is no longer sufficient to describe the resulting state. That case is addressed in the next chapter.

## Operators and observables

An operator is a linear map from kets to kets. Linearity means that

\[
A\bigl(c_1|u\rangle + c_2|v\rangle\bigr)
=
c_1 A|u\rangle + c_2 A|v\rangle.
\]

In a finite basis, an operator is represented by a matrix. The adjoint \(A^\dagger\) is obtained by transposing the matrix and complex-conjugating its entries. If

\[
A = A^\dagger,
\]

the matrix is Hermitian. In the ideal measurement framework used here, measurable quantities are represented by Hermitian operators. Their possible measurement results, called eigenvalues, are real, and eigenstates associated with different eigenvalues are orthogonal. An eigenstate satisfies

\[
A|a_j\rangle = a_j |a_j\rangle.
\]

Here, \(|a_j\rangle\) is an eigenstate of \(A\), and \(a_j\) is its corresponding eigenvalue.

For the two-state atom, define the Pauli matrices

\[
\sigma_z
=
\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix},
\qquad
\sigma_x
=
\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}.
\]

Both matrices are Hermitian. Direct multiplication gives

\[
\sigma_z |z\pm\rangle = \pm |z\pm\rangle,
\qquad
\sigma_x |x\pm\rangle = \pm |x\pm\rangle.
\]

These Pauli matrices are dimensionless. For an ideal spin-\(1/2\) system, the corresponding angular-momentum components are

\[
S_z = \frac{\hbar}{2}\sigma_z,
\qquad
S_x = \frac{\hbar}{2}\sigma_x,
\]

so an \(S_z\) measurement returns \(+\hbar/2\) or \(-\hbar/2\), measured in joule-seconds. The labels \(z+\) and \(z-\) denote these two eigenstates.

The two Pauli matrices do not commute:

\[
[\sigma_z,\sigma_x] \equiv \sigma_z\sigma_x - \sigma_x\sigma_z \ne 0.
\]

The commutator \([A,B]\) measures the difference between applying \(A\) before \(B\) and applying \(B\) before \(A\). Because \(\sigma_z\) and \(\sigma_x\) do not commute, they cannot share a complete set of eigenstates. The three-magnet sequence demonstrates this noncommutativity experimentally.

If this noncommutativity is neglected, one might assign a hidden pair of labels to each atom, one for \(z\) and one for \(x\). Retaining the noncommutative operator structure rules out that description within this model.

The expectation value of \(A\) in the state \(|\psi\rangle\) is

\[
\langle A\rangle_\psi = \langle\psi|A|\psi\rangle = \sum_j a_j P(j).
\]

An expectation value is the average result over many identically prepared experimental runs. It need not equal any possible result of a single measurement.

For \(|x+\rangle\), a measurement of \(\sigma_z\) returns \(+1\) and \(-1\) equally often, so the expectation value is \(0\). Zero is not a possible single-shot result.

If \(q = \langle\psi|A|\psi\rangle\) and \(A = A^\dagger\), then \(q^* = q\). Therefore, expectation values of Hermitian operators are real.

## Unitary time evolution

Between measurements, an isolated system evolves without changing inner products between states. Such evolution is represented by a unitary matrix \(U\), defined by

\[
U^\dagger U = U U^\dagger = I.
\]

If \(|\psi'\rangle = U|\psi\rangle\), then

\[
\langle\psi'|\psi'\rangle
=
\langle\psi|U^\dagger U|\psi\rangle
=
\langle\psi|\psi\rangle.
\]

Unitary evolution therefore preserves normalization.

The generator of time evolution is the energy operator, called the Hamiltonian \(H\). Schrödinger’s equation is

\[
i\hbar \frac{d}{dt}|\psi(t)\rangle = H|\psi(t)\rangle.
\]

Time \(t\) is measured in seconds, and \(\hbar\) is measured in joule-seconds. The units are consistent because

\[
[\hbar\, d/dt] = (\mathrm{J\,s})(1/\mathrm{s}) = \mathrm{J} = [H].
\]

If \(H\) does not depend on time, the solution is

\[
|\psi(t)\rangle = U(t)\,|\psi(0)\rangle,
\qquad
U(t) = e^{-iHt/\hbar}.
\]

The exponential is defined by its power series. The quantity \(Ht/\hbar\) is dimensionless. Because \(H\) is Hermitian, \(U(t)\) is unitary.

As a concrete example, consider

\[
H = \frac{\hbar\omega}{2}\sigma_z,
\]

where \(\omega\) is an angular frequency measured in radians per second. Starting from \(|x+\rangle\), the state evolves as

\[
|\psi(t)\rangle
=
\frac{e^{-i\omega t/2}|z+\rangle + e^{+i\omega
t/2}|z-\rangle}{\sqrt{2}}.
\]

The probabilities of the two \(z\)-basis outcomes remain fifty-fifty, while the relative phase changes with time. An \(x\)-basis measurement detects this change:

\[
P(x+;t) = \bigl|\langle x+|\psi(t)\rangle\bigr|^2 = \cos^2\bigl(\omega
t/2\bigr).
\]

Time evolution can therefore be undetectable in one measurement basis and detectable in another. A list of probabilities for only one basis omits the phase information retained by the amplitudes.

## Physical implementation of the 1922 experiment

The idealized operators in this analysis represent components of a physical apparatus. Stern and Gerlach used a source, a beam of neutral silver atoms, a magnet with a spatially varying field, two resulting paths, and detectors with finite response and observation limits. In a semiclassical approximation, the force is

\[
\mathbf F \approx \boldsymbol\nabla(\boldsymbol\mu\cdot\mathbf B),
\]

where \(\boldsymbol\mu\) is the magnetic moment, measured in joules per tesla, and \(\mathbf B\) is the magnetic field, measured in tesla. The gradient contributes units of inverse metres, so the right-hand side has units of newtons. The internal magnetic state of the atom thereby produces a measurable change in its trajectory.

The 1922 paper predates the 1925 proposal of electron spin. The standard classroom interpretation in terms of spin was developed later.

Ground-state silver can be represented by a two-dimensional angular-momentum subspace. The complete atom, magnet, and surrounding spatial degrees of freedom occupy a much larger state space.

Describing the experiment as a “spin-1/2 measurement” is therefore an effective description. It does not imply that the remaining degrees of freedom of the atom are absent.

The ideal analyzer also combines several physical processes into a single projection. The magnet first correlates the atom’s internal state with its path through ordinary unitary evolution of the larger system.

A detector or blocker then produces a record or selects one path. Real devices include imperfect preparation, overlapping beams, misaligned fields, particle loss, and noisy counters.

These imperfections alter the observed counts. They do not modify the Born rule.

A two-component ket represents a physical degree of freedom within an effective model. By itself, it is not a computer bit, a protected code, or an unusual particle localized in a crystal.

## Common conceptual errors

- A probability is obtained by taking the squared magnitude \(|c|^2 = c^*c\), not by simply squaring a complex amplitude. Omitting the complex conjugate can produce a negative or complex quantity that cannot represent a probability.

- The column \((\alpha,\beta)^T\) must not be treated as a basis-independent object. A superposition is always expressed relative to a specified basis and therefore to a specified measurement.

- An overall phase has no observable effect, whereas a relative phase can affect interference measurements. These two kinds of phase must be distinguished.

- An expectation value is not generally a possible single-shot result. It is an average over repeated, identically prepared measurements.

- A postselected measurement must not be described as only unitary evolution of the atom. Projection removes unselected alternatives. The combined atom–magnet system may evolve unitarily before conditioning on a detector event.

- Hermitian and unitary are distinct properties. Hermitian operators represent observables in this ideal framework, whereas unitary operators preserve inner products. A Pauli matrix is both Hermitian and unitary, but most operators are neither.

- Simulating these matrices on a computer does not make the computer physically equivalent to a silver atom. A simulation implements a mathematical description of the system.

- The existence of two levels does not by itself establish a protected qubit. Preparation, control, readout, and protection require additional physical mechanisms.

## Self-assessment

- **Specification of a pure-state experiment:** A normalized ket, defined up to an overall phase, predicts a pure-state experiment. Measurements and time evolution act on this state.

- **Conversion of an amplitude into a probability:** The amplitude for outcome \(j\) is \(\langle a_j|\psi\rangle\). Its squared magnitude gives the probability:
  \(P(j) = |\langle a_j|\psi\rangle|^2\).

- **Normalization in the \(z\) basis:** The condition \(|\alpha|^2 + |\beta|^2 = 1\) follows because these two quantities are the probabilities of the two possible \(z\)-basis outcomes, and the atom must produce one of them.

- **Failure of a non-Hermitian measurement operator:** If \(A\) is not Hermitian, its eigenvalues need not be real, and eigenstates associated with different readings need not be orthogonal. It therefore cannot represent an ideal measurement in this framework.

- **Difference between unitary evolution and postselection:** Unitary evolution preserves every inner product. Selecting one measurement output projects the state and then renormalizes it.

- **Outcomes after the sequence \(z+\), then \(x+\), then \(z\):** The final probabilities are one half for \(z+\) and one half for \(z-\). If the second magnet merely revealed an \(x\) value while leaving \(z+\) unchanged, every survivor would return to the \(z+\) output. The observed result is inconsistent with that description.

The framework now includes a state, a measurement rule, and a law for evolution between measurements. The next chapter extends the description to two atoms and shows that the state of a pair cannot always be written as a separate state for each atom.

## Sources

- [R037] M. Born, “Zur Quantenmechanik der Stoßvorgänge,”
Zeitschrift für Physik 37, 863–867 (1926).
DOI: [10.1007/BF01397477](https://doi.org/10.1007/BF01397477).

- [R038] W. Gerlach and O. Stern, “Der experimentelle Nachweis der
Richtungsquantelung im Magnetfeld,” Zeitschrift für Physik
9, 349–352 (1922). DOI: [10.1007/BF01326983](https://doi.org/10.1007/BF01326983).

- [R039] B. Friedrich and D. Herschbach, “Stern and Gerlach: How a Bad
Cigar Helped Reorient Atomic Physics,” Physics Today
56(12), 53–59 (2003). DOI: [10.1063/1.1650229](https://doi.org/10.1063/1.1650229).

- [R040] P. A. M. Dirac, The Principles of Quantum Mechanics,
4th ed., Oxford University Press (1958; reissued 1981). ISBN:
978-0-19-852011-5.

- [R041] E. Schrödinger, “Quantisierung als Eigenwertproblem (Vierte
Mitteilung),” Annalen der Physik 386, 109–139
(1926). DOI: [10.1002/andp.19263861802](https://doi.org/10.1002/andp.19263861802).

- [R004] M. A. Nielsen and I. L. Chuang, Quantum Computation and
Quantum Information: 10th Anniversary Edition, Cambridge University
Press (2010). DOI: [10.1017/CBO9780511976667](https://doi.org/10.1017/CBO9780511976667).

---
