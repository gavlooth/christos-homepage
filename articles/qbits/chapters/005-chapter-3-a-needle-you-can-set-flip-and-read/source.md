# Chapter 3 — Preparation, control, and measurement of a two-level quantum system

A quantum-control experiment requires three distinct operations: preparation, unitary control, and measurement.

Preparation produces a known input state. Unitary control applies a calibrated, time-dependent Hamiltonian to that state; a unitary transformation is one represented by a matrix \(U\) satisfying \(U^\dagger U=I\). Measurement couples the final quantum state to a detector and assigns a classical result to the detector output.

A two-level quantum system cannot be interpreted as a classical magnetic moment with a definite but unknown orientation. Its experimental control requires spectral selectivity: the ability to drive the selected transition without strongly exciting nearby transitions.

A drive can also populate a third level outside the selected two-level subspace. This process is called leakage. In addition, a detector can respond to an event unrelated to the selected state, producing an incorrect state assignment.

## State preparation, phase control, and measurement

The state labels introduced in Chapter 1 will be retained. Consider a spin-\(1/2\) particle in a magnetic field that defines the \(z\)-axis.

The spin state with Pauli-\(Z\) eigenvalue \(+1\) is denoted by \(|0\rangle\), and the state with eigenvalue \(-1\) is denoted by \(|1\rangle\).

A different laboratory may interchange these labels. Such an interchange is a convention and does not change the physics.

\[
|0\rangle=\begin{pmatrix}1\\0\end{pmatrix},
\qquad
|1\rangle=\begin{pmatrix}0\\1\end{pmatrix}.
\]

Consider a phase-sensitive experiment consisting of five operations. First, prepare \(|0\rangle\). Second, rotate the state through \(+\pi/2\) about the \(y\)-axis. Third, allow a phase \(\phi\) to accumulate; this operation is a rotation about the \(z\)-axis. Fourth, rotate the state through \(-\pi/2\) about the \(y\)-axis. Finally, measure in the computational basis \(\{|0\rangle,|1\rangle\}\).

A rotation through an angle \(\vartheta\) about axis \(j\), where \(j\) is \(x\), \(y\), or \(z\), is represented by

\[
R_j(\vartheta)=\exp\!\left(-\frac{i\vartheta\sigma_j}{2}\right).
\]

Here \(i^2=-1\), \(\vartheta\) is an angle measured in radians, and \(\sigma_j\) is the corresponding Pauli matrix defined in Chapter 1. The matrices \(R_j(\vartheta)\) are unitary rotation operators. For the two axes required in this experiment,

\[
R_y(\vartheta)=
\begin{pmatrix}
\cos(\vartheta/2)&-\sin(\vartheta/2)\\
\sin(\vartheta/2)&\cos(\vartheta/2)
\end{pmatrix},
\qquad
R_z(\phi)=
\begin{pmatrix}
e^{-i\phi/2}&0\\
0&e^{i\phi/2}
\end{pmatrix}.
\]

The appearance of half-angles in these matrix elements is an intrinsic property of spin-\(1/2\) rotations. Applying the first pulse gives

\[
R_y(\pi/2)|0\rangle
=\frac{|0\rangle+|1\rangle}{\sqrt{2}}.
\]

The subsequent phase rotation gives

\[
R_z(\phi)R_y(\pi/2)|0\rangle
=\frac{e^{-i\phi/2}|0\rangle+e^{i\phi/2}|1\rangle}{\sqrt{2}}.
\]

If the state were measured in the \(Z\) basis at this stage, each outcome would occur with probability \(1/2\). Such a measurement would not reveal the relative phase between the two amplitudes. The final pulse converts this relative phase into a population difference that can be detected by a \(Z\)-basis measurement:

\[
|\psi_{\mathrm f}\rangle
:=R_y(-\pi/2)R_z(\phi)R_y(\pi/2)|0\rangle
=\cos(\phi/2)|0\rangle+i\sin(\phi/2)|1\rangle.
\]

The Born rule, which assigns to each basis outcome the squared magnitude of its probability amplitude, therefore predicts

\[
P(0)=\cos^2(\phi/2),
\qquad
P(1)=\sin^2(\phi/2),
\qquad
P(0)+P(1)=1.
\]

The final pulse consequently functions as an analyzer: it converts a relative phase into a measurable population. For \(\phi=\pi/3\), the probabilities are \(P(0)=3/4\) and \(P(1)=1/4\).

In 100 independent repetitions, approximately 75 outcomes of 0 and 25 outcomes of 1 are typical, but exactly 75 outcomes of 0 are not guaranteed.

The standard deviation of the number of zero outcomes is

\[
\sqrt{100\cdot(3/4)\cdot(1/4)}\approx 4.3.
\]

This sequence is an interferometer. The first pulse creates two quantum amplitudes, the intermediate evolution changes their relative phase, and the final pulse recombines them.

The measurement detects the resulting interference. If the final rotation is omitted, the relative phase remains present in the state but cannot be observed with a \(Z\)-basis measurement.

[Experiment] Resonant control producing coherent oscillations of a single electron spin, and single-shot conversion of a spin state into a detectable charge signal, have both been demonstrated in semiconductor quantum dots [R052]; [R053]. The preceding calculation describes an ideal system. The cited experiments provide concrete physical implementations of control and readout.

## Parameterization of two-level states

Every pure state in this two-dimensional Hilbert space can be written as

\[
|\psi\rangle=\alpha|0\rangle+\beta|1\rangle,
\]

where the complex amplitudes \(\alpha\) and \(\beta\) satisfy the normalization condition \(|\alpha|^2+|\beta|^2=1\). A computational-basis measurement returns 0 with probability \(|\alpha|^2\) and 1 with probability \(|\beta|^2\).

A common overall, or global, phase has no observable effect: \(|\psi\rangle\) and \(e^{i\chi}|\psi\rangle\) represent the same physical pure state for any real angle \(\chi\). By contrast, the relative phase between \(\alpha\) and \(\beta\) can affect experimental outcomes, as demonstrated by the five-step sequence.

The normalization constraint removes one real parameter, and the unobservable global phase removes another. Two independent real parameters remain. They may be chosen as the polar angle \(\theta\), with \(0\leq\theta\leq\pi\), and the azimuthal angle \(\varphi\), with \(0\leq\varphi<2\pi\):

\[
|\psi(\theta,\varphi)\rangle
=\cos(\theta/2)|0\rangle
+e^{i\varphi}\sin(\theta/2)|1\rangle.
\]

These two angles specify a point on a sphere. The connection between the state and three measurable expectation values can be made explicit by writing the Pauli operators as

\[
X=\begin{pmatrix}0&1\\1&0\end{pmatrix},\qquad
Y=\begin{pmatrix}0&-i\\i&0\end{pmatrix},\qquad
Z=\begin{pmatrix}1&0\\0&-1\end{pmatrix}.
\]

These are the same matrices as \(\sigma_x,\sigma_y,\sigma_z\) from Chapter 1. The identity operator \(I\) leaves every state unchanged. For a state \(|\psi\rangle\), the expectation value of an operator \(A\) is the statistical average predicted for repeated measurements and is defined by \(\langle A\rangle=\langle\psi|A|\psi\rangle\). The three Pauli expectation values form the vector

\[
\mathbf r=(\langle X\rangle,\langle Y\rangle,\langle Z\rangle).
\]

Substitution of the two-angle state gives

\[
\mathbf r=
(\sin\theta\cos\varphi,\;\sin\theta\sin\varphi,\;\cos\theta).
\]

Its length is one because \(\sin^2\theta+\cos^2\theta=1\). Thus, every pure two-level state maps to the surface of a unit sphere.

The north pole represents \(|0\rangle\), and the south pole represents \(|1\rangle\).

The point on the \(+x\) axis represents \(|+\rangle=(|0\rangle+|1\rangle)/\sqrt{2}\). The point on the \(+y\) axis represents \((|0\rangle+i|1\rangle)/\sqrt{2}\).

This geometric representation is the Bloch sphere. A density operator \(\rho\), which represents either a pure or a mixed two-level state, can be written as

\[
\rho=\frac{1}{2}\left(I+\mathbf r\cdot\boldsymbol\sigma\right),
\]

where \(\boldsymbol\sigma=(X,Y,Z)\) and the dot product denotes \(r_x X+r_y Y+r_z Z\). Pure states satisfy \(|\mathbf r|=1\) and therefore lie on the surface.

Mixed states, which represent statistical mixtures not describable by a single state vector, satisfy \(|\mathbf r|<1\) and lie inside the sphere. The maximally mixed state \(I/2\) lies at the center.

Laboratory noise does not, in general, produce only random changes in the direction of a pure-state Bloch vector. It can also reduce the vector’s length. Once the condition \(|\mathbf r|=1\) is relaxed, the state lies inside the sphere but remains a valid two-level quantum state.

For any unit vector \(\mathbf n=(n_x,n_y,n_z)\), define

\[
\mathbf n\cdot\boldsymbol\sigma=n_x X+n_y Y+n_z Z.
\]

The Pauli algebra gives \((\mathbf n\cdot\boldsymbol\sigma)^2=I\). Separating the exponential series into even and odd powers yields

\[
e^{-i\vartheta\mathbf n\cdot\boldsymbol\sigma/2}
=I\cos(\vartheta/2)-i(\mathbf n\cdot\boldsymbol\sigma)\sin(\vartheta/2).
\]

This unitary operator rotates the Bloch vector through an angle \(\vartheta\) about \(\mathbf n\). The amplitudes contain \(\vartheta/2\) because a two-component spin state provides a double cover of ordinary spatial rotations. A \(2\pi\) rotation of the Bloch vector multiplies the ket by \(-1\), and only a \(4\pi\) rotation returns the ket itself to its original value.

## Quantum gates as target transformations

An intended operation on a two-level system is represented ideally by a unitary matrix \(U\), acting according to

\[
|\psi\rangle\mapsto U|\psi\rangle.
\]

Up to a physically irrelevant overall phase, every such unitary represents a rotation of the Bloch vector:

\[
U=\exp\!\left(-\frac{i\vartheta}{2}\mathbf
n\cdot\boldsymbol\sigma\right).
\]

When an intended operation is assigned a name and represented on a circuit diagram, it is called a gate. A gate symbol specifies a target transformation; it does not specify the experimental pulse or other control procedure used to implement that transformation.

The Pauli gates \(X\), \(Y\), and \(Z\) correspond, up to global phase, to \(\pi\) rotations about their respective axes. The Hadamard gate is

\[
H=\frac{1}{\sqrt{2}}
\begin{pmatrix}1&1\\1&-1\end{pmatrix}.
\]

It maps \(|0\rangle\) to \(|+\rangle\) and converts between the \(Z\) and \(X\) measurement bases.

A circuit box labeled \(H\) therefore does not indicate how the laboratory produces \(H\). Different devices synthesize the same target operation using microwaves, optical fields, voltages, exchange couplings, frame updates, or combinations of these methods. The circuit symbol contains no information about which implementation is used.

## Time-dependent pulse implementation

A control Hamiltonian connects a target gate to its time-dependent physical implementation. Suppose that a resonant drive produces

\[
\widehat H_{\mathrm d}
=\frac{\hbar\Omega}{2}
\left(\cos\delta\,X+\sin\delta\,Y\right).
\]

Here \(\widehat H_{\mathrm d}\) is an energy operator, \(\hbar\) is Planck’s reduced constant in joule-seconds, \(\Omega\) is an angular frequency in radians per second, and \(\delta\) is the drive phase in radians. Applying the drive for a duration \(t\), measured in seconds, gives

\[
U(t)=e^{-i\widehat H_{\mathrm d}t/\hbar}
=\exp\!\left[-\frac{i\Omega t}{2}
(\cos\delta\,X+\sin\delta\,Y)\right].
\]

The resulting rotation angle is \(\vartheta=\Omega t\). The dimensional consistency of the exponent follows from

\[
[\Omega t]=(\mathrm{s}^{-1})(\mathrm{s})=1,
\]

because an exponential’s argument must be dimensionless. Choosing \(\delta=0\) produces a rotation about the \(x\)-axis. Choosing \(\delta=\pi/2\) produces a rotation about the \(y\)-axis.

The angular speed \(\Omega\) is the Rabi frequency. For fixed \(\Omega\), selecting the pulse duration \(t\) determines the rotation angle.

A gate is therefore an intended state transformation, whereas a pulse is the application of a Hamiltonian for a specified duration. The notation \(R_x(\pi/2)\) specifies an ideal transformation but does not by itself specify a waveform.

[Experiment] Electrically or magnetically driven spin resonance implements this control logic in solid-state spins, although the microscopic coupling and calibration differ by platform [R051]; [R052]; [R054].

## Operational requirements for a qubit

Preparing a specified initial state with known reliability requires an explicit physical process rather than merely activating the apparatus. One method is to wait for relaxation toward a ground state. Other methods include optical pumping, reservoir-assisted loading, measurement followed by a conditional pulse, and active reset.

An ideal computational-basis measurement is represented by the projectors

\[
M_0=|0\rangle\langle0|,
\qquad
M_1=|1\rangle\langle1|.
\]

A projector is an operator that selects the component of a state associated with a specified measurement outcome. For a density operator \(\rho\), outcome \(m\) occurs with probability

\[
P(m)=\operatorname{Tr}(M_m\rho),
\qquad m\in\{0,1\}.
\]

The trace \(\operatorname{Tr}\) is the sum of the diagonal elements of a matrix. Real instruments do not directly output the abstract variable \(m\).

Instead, they produce photons, currents, voltages, or charge-sensor traces. A classifier then maps the resulting analog record to the classical value 0 or 1.

[Experiment] Energy-selective tunneling has been used to map a single electron’s spin state to a charge transition detectable by a nearby sensor [R053]. Optically interfaced solid-state defects use spin-dependent optical dynamics to initialize and infer spin states; the relevant mechanisms and limitations vary strongly among centers [R054].

The complete operational loop is therefore:

- Specify \(|0\rangle\) and \(|1\rangle\), the associated axis, and the conditions under which the two states remain isolated.

- Prepare a known initial state and quantify the residual preparation error.

- Calibrate pulse amplitude, phase, frequency, and duration to implement target gates.

- Allow the intended single-system, two-system, or sensing energy to act.

- Rotate the desired measurement observable into the basis readable by the instrument.

- Acquire a classical record and assign an outcome.

- Reset and repeat the experiment while verifying that the calibration has not drifted.

A single result is a classical bit. Repeated results provide estimates of quantum probabilities. A measurement does not directly output the system’s wavefunction.

A pair of levels together with this operational loop constitutes a qubit. The term expresses an operational claim rather than merely identifying a doublet in a spectrum. DiVincenzo organized this claim into a widely used checklist: the states must be distinguishable, one of them must be preparable, a useful set of coherent operations must be available, and the result must be readable. For computation, errors must also remain low, leakage into other levels must be limited, recalibration must be possible, and more than one qubit must be coupled [R050].

If isolation or readout is absent, the system still has two levels, but it does not satisfy these operational requirements for a qubit.

## Encoded information distributed across multiple devices

In some systems, the two relevant logical outcomes are not represented by two levels of a single device. Instead, they are represented by two patterns distributed across several devices:

\[
|0_L\rangle=|\text{pattern A}\rangle,
\qquad
|1_L\rangle=|\text{pattern B}\rangle.
\]

These patterns can be entangled states of many components. Quantum error-correcting codes select the pair of patterns so that specified physical errors can be detected or reversed. This capability is a property of the code and the selected error set, not a consequence of the notation \(L\) [R055].

The pair of patterns defines one encoded bit. Several devices can therefore store one encoded bit, and an individual device does not automatically constitute one encoded bit.

Counting physical hardware is consequently not equivalent to counting encoded bits. A controllable, resettable, and readable doublet is a candidate qubit.

A two-dimensional subspace distributed across several qubits is a candidate encoded bit. Programming ordinary qubits to reproduce the amplitudes of another model is a computation performed on the existing hardware.

Such programming does not change the physical identity of the hardware.

## Physical degrees of freedom outside the selected subspace

A spin in a real device is not an isolated Pauli degree of freedom. The device also contains orbital states, nearby spins, phonons, electromagnetic modes, control wiring or optical components, and a detector. The states denoted by \(|0\rangle\) and \(|1\rangle\) are a selected pair within this larger state space.

For an ideal spin-\(1/2\) in a static magnetic field, the Hamiltonian is often written as

\[
\widehat H_0=-\frac{\hbar\omega_0}{2}Z,
\]

where \(\omega_0\) is the angular transition frequency in radians per second. A resonant field drives transitions between the two levels.

In an actual solid, spin–orbit coupling, hyperfine interactions, charge motion, strain, and higher-energy levels modify this idealized model. Later chapters will identify these terms for specific defects.

[Proposal] Electron spins confined in quantum dots were proposed as physical qubits with controlled exchange interactions [R051]. [Experiment] Subsequent experiments demonstrated ingredients including single-spin readout and coherent single-spin rotations [R052]; [R053]. Demonstrating an individual ingredient provides evidence for that ingredient, but it does not by itself establish a fault-tolerant processor.

The same distinction applies to crystalline defects. [Experiment] Reviews of optically active solid-state spins document initialization, microwave or optical manipulation, and optical interfaces in several material platforms [R054].

Whether a particular defect functions as a useful qubit depends on its charge state, temperature, magnetic field, collection efficiency, nearby noise, and the exact experimental protocol. The presence of spin in a material is only the beginning of a device specification.

## Common conceptual and experimental errors

- **Identifying any two levels as a qubit.** A transition may be too weak to drive, too broad to address selectively, or spectrally indistinguishable from nearby transitions. Control can also cause leakage into a third state. A two-level approximation is valid only over specified ranges of energy, drive strength, temperature, and time.

- **Interpreting the Bloch sphere as ordinary physical space.** For a physical spin in a magnetic field, the Bloch-sphere axes can correspond to physical spin components. For a superconducting circuit, charge configuration, orbital doublet, or cluster encoding, the axes are abstract coordinates defined by a selected basis. The Bloch vector does not necessarily specify a direction in laboratory space.

- **Interpreting a single measurement outcome as a probability amplitude.** One computational-basis measurement returns either 0 or 1. Estimating \(\alpha\), \(\beta\), or a Bloch vector requires many identically prepared trials in several measurement bases. If the preparation drifts between trials, the reconstructed state may not represent any state produced consistently by the experiment.

- **Equating relative phase with population.** The states \((|0\rangle+|1\rangle)/\sqrt{2}\) and \((|0\rangle-|1\rangle)/\sqrt{2}\) both produce 50–50 outcomes in the \(Z\) basis, although they are orthogonal. An analyzer rotation is required to make their difference observable. The five-step sequence provides an explicit example of this conversion.

- **Equating a gate with its control waveform.** The expression \(R_x(\pi/2)\) denotes an ideal transformation. Its laboratory implementation is a finite-duration pulse applied while unwanted Hamiltonian terms continue to act. Pulse calibration, leakage, drift, and noise determine how accurately the implemented operation approximates the ideal symbol.

- **Equating an encoded bit with one physical doublet.** Several qubits can store one encoded bit without introducing a new type of particle. A code can detect selected errors actively even when the hardware does not provide a protective energy gap. These properties follow from the physical implementation and code structure, not from terminology alone.

## Conceptual checks

- **Operational criterion for a qubit:** Two levels constitute a qubit only when the selected pair supports a usable operational loop consisting of preparation, control, readout, and reset, while remaining isolated under stated conditions.

- **Number of parameters in a pure two-level state:** The complex amplitudes \(\alpha\) and \(\beta\) initially contain four real parameters. Normalization removes one real parameter, and an unobservable global phase removes another, leaving the two Bloch-sphere angles \(\theta\) and \(\varphi\).

- **Location of a mixed state on the Bloch sphere:** A mixed state lies inside the sphere. Its density operator is \(\rho=(I+\mathbf r\cdot\boldsymbol\sigma)/2\) with \(|\mathbf r|<1\); the maximally mixed state lies at the center.

- **Probability produced by the five-step sequence:** The analyzer produces the state \(\cos(\phi/2)|0\rangle+i\sin(\phi/2)|1\rangle\). Applying the Born rule to the first amplitude gives \(P(0)=\cos^2(\phi/2)\).

- **Counting devices that store \(0_L\) and \(1_L\):** The two distributed patterns \(0_L\) and \(1_L\) define one encoded bit. The term “encoded” identifies a selected two-dimensional subspace rather than the number of physical devices.

- **Information obtained from one computational-basis measurement:** A single measurement returns 0 or 1 and does not determine \(\alpha\) and \(\beta\). The amplitudes must be estimated from many repeated, identically prepared runs, usually using more than one measurement basis.

A two-level system functions as a controllable and readable qubit only when preparation, control, and measurement operate with specified performance. The next stage is to assign times and error rates to each of these operations.

## Sources

- [R049] F. Bloch, “Nuclear Induction,” Physical Review
70, 460–474 (1946). DOI: [10.1103/PhysRev.70.460](https://doi.org/10.1103/PhysRev.70.460).

- [R050] D. P. DiVincenzo, “The Physical Implementation of Quantum
Computation,” Fortschritte der Physik 48,
771–783 (2000). arXiv: [quant-ph/0002077](https://arxiv.org/abs/quant-ph/0002077); DOI:
[10.1002/1521-3978(200009)48:9/113.0.CO;2-E](https://doi.org/10.1002/1521-3978(200009)48:9/11%3C771::AID-PROP771%3E3.0.CO;2-E).

- [R051] D. Loss and D. P. DiVincenzo, “Quantum Computation with
Quantum Dots,” Physical Review A 57, 120–126
(1998). DOI: [10.1103/PhysRevA.57.120](https://doi.org/10.1103/PhysRevA.57.120).

- [R052] F. H. L. Koppens, C. Buizert, K. J. Tielrooij, I. T. Vink, K.
C. Nowack, T. Meunier, L. P. Kouwenhoven, and L. M. K. Vandersypen,
“Driven Coherent Oscillations of a Single Electron Spin in a Quantum
Dot,” Nature 442, 766–771 (2006). DOI: [10.1038/nature05065](https://doi.org/10.1038/nature05065).

- [R053] J. M. Elzerman, R. Hanson, L. H. Willems van Beveren, B.
Witkamp, L. M. K. Vandersypen, and L. P. Kouwenhoven, “Single-Shot
Read-Out of an Individual Electron Spin in a Quantum Dot,”
Nature 430, 431–435 (2004). DOI: [10.1038/nature02693](https://doi.org/10.1038/nature02693).

- [R054] D. D. Awschalom, R. Hanson, J. Wrachtrup, and B. B. Zhou,
“Quantum Technologies with Optically Interfaced Solid-State Spins,”
Nature Photonics 12, 516–527 (2018). DOI: [10.1038/s41566-018-0232-2](https://doi.org/10.1038/s41566-018-0232-2).

- [R055] E. Knill and R. Laflamme, “Theory of Quantum Error-Correcting
Codes,” Physical Review A 55, 900–911 (1997).
DOI: [10.1103/PhysRevA.55.900](https://doi.org/10.1103/PhysRevA.55.900);
arXiv: [quant-ph/9604034](https://arxiv.org/abs/quant-ph/9604034).


---
