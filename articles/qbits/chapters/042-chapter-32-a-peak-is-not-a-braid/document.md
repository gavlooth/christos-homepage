# Chapter 32 — Distinguishing spectroscopic peaks from braiding operations

Two other research programs pursue the same general objective as defect-engineered topological qubits: localized excitations that can be transported around one another so that their shared quantum state undergoes a transformation that cannot be reproduced by a local perturbation. Such an exchange operation is called a braid.

The first program uses a thin semiconductor wire coupled to a conventional superconductor and exposed to a magnetic field. The objective is to produce localized electronic modes at the two ends of the wire that do not behave as ordinary electrons. If these end modes have the properties predicted by the relevant theory, their braiding statistics are those of Ising anyons. An anyon is a quasiparticle or defect in two spatial dimensions whose exchange can produce a phase or, in the non-Abelian case, a noncommuting unitary transformation within a degenerate state space.

The second program uses a two-dimensional electron system at very low temperature and in a magnetic field strong enough to quantize orbital motion into Landau levels. A Landau level is a discrete orbital-energy level formed by charged particles moving in a perpendicular magnetic field. At a particular filling factor, the aim is to realize an electron liquid whose vortex-like excitations braid as Fibonacci anyons.

Neither platform consists of a crystal containing an engineered array of defects, which is the platform considered in this book.

These two research programs are more established and have received greater experimental attention than defect-based proposals in some areas. They therefore provide useful evaluation criteria: the computational operations predicted by their braid representations, the phenomena actually demonstrated in experiments, and the distinctions that must be maintained when interpreting evidence.

A zero-bias conductance peak does not demonstrate a braid. A resistance plateau does not establish the existence of a Fibonacci anyon. Experimental observations must be distinguished from the theoretical interpretations they may support.

## Distinguishing allowed phases, identified excitations, and controlled operations

Evidence for a topological platform can be organized into three distinct levels:

- **An allowed phase.** A Hamiltonian, which is the operator governing the system’s energy and dynamics, contains a topological region in an idealized phase diagram.

- **An identified excitation.** Several independent measurements exclude ordinary states and determine the excitation’s electric charge, fusion rules, and exchange statistics. Fusion rules specify the possible total topological charges obtained when excitations are combined, while exchange statistics specify the quantum transformation produced when they are exchanged.

- **A controlled computational operation.** Initialization, a braid or parity-measurement sequence, and readout implement a reproducible unitary transformation on an encoded state space. Parity here denotes whether the relevant fermion occupation number is even or odd.

These three levels provide the scorecard used below.

Majorana nanowires have substantial theoretical support at the first level and partial evidence at the second. Fractional quantum Hall fluids have conclusive demonstrations of Abelian fractional charge and statistics at some filling factors. Abelian statistics produce only a scalar phase under exchange, whereas non-Abelian statistics act by matrices on a multidimensional fusion space.

These results do not identify Fibonacci quasiparticles at filling factor \(12/5\). Evidence for one excitation type or filling factor cannot be substituted for evidence concerning another.

The relevant excitations also have physically distinct origins.

A mode localized at the end of a one-dimensional superconducting segment is an extrinsic defect mode. An extrinsic defect is introduced by fabrication or by an externally imposed boundary; in this case, the segment ends are deliberately created.

A vortex in an appropriate two-dimensional topological superconductor can behave as an Ising anyon. A Majorana operator implemented by digital control is an emulation rather than an emergent material excitation.

A quasihole in an intrinsic quantum Hall fluid is an emergent excitation of the correlated electron liquid. “Intrinsic” means that the topological order is a property of the many-body phase itself rather than of a fabricated boundary or programmed operation. These different objects can obey the same braid algebra without having the same experimental evidence or the same degree of passive protection.

## Computational capability of Ising braiding

The comparison begins with ideal anyon theories. This is a theoretical calculation rather than an assessment of experimental status.

The Ising theory has three topological charges: \(1\), denoting the vacuum sector; \(\psi\), denoting a fermion; and \(\sigma\), denoting the non-Abelian Ising anyon. Two \(\sigma\) anyons obey the fusion rule

\[
\sigma\times\sigma=1+\psi.
\]

The plus sign indicates that the pair can have either total charge \(1\) or total charge \(\psi\).

One qubit can be encoded in four \(\sigma\) anyons constrained to have total charge \(1\). Define \(|0\rangle\) as the state in which the first pair fuses to \(1\), and define \(|1\rangle\) as the state in which that pair fuses to \(\psi\). Let \(B_1\) represent a counterclockwise exchange of the first two anyons, and let \(B_2\) represent an exchange of the middle two. In a common phase convention, and after removing a common global phase that has no observable effect on the encoded state,

\[
B_1=\begin{pmatrix}1&0\\0&i\end{pmatrix},\qquad
B_2=\frac{1}{2}
\begin{pmatrix}
1+i&1-i\\
1-i&1+i
\end{pmatrix}.
\]

Multiplying these braid matrices gives

\[
B_1B_2B_1=\frac{1+i}{2}
\begin{pmatrix}1&1\\1&-1\end{pmatrix}
=e^{i\pi/4}H,
\]

where

\[
H=2^{-1/2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}
\]

is the Hadamard gate. Thus, up to global phases, Ising braids provide the phase gate \(S=\operatorname{diag}(1,i)\) and the Hadamard gate \(H\). These operations belong to the Clifford gate set, the set of quantum gates that maps Pauli operators to Pauli operators under conjugation [R015].

A required non-Clifford gate can be written as

\[
T=\operatorname{diag}(1,e^{i\pi/4}).
\]

No braid of Ising anyons can approximate \(T\) arbitrarily accurately. Ising braiding generates only a finite projective Clifford image, rather than a dense subset of all one-qubit rotations. A dense gate set is one whose finite sequences can approximate arbitrary target unitaries to any desired accuracy. Universal computation with Ising anyons therefore requires an additional non-topological resource, commonly a specially prepared magic state, a non-topological phase operation, or an appropriate measurement protocol [R015]. A magic state is an ancillary quantum state that enables a non-Clifford operation when combined with Clifford gates and measurements.

Non-Abelian statistics therefore do not by themselves imply computational universality. Ising anyons are non-Abelian, but they do not provide the gate set available from ideal Fibonacci braiding.

## Computational capability of Fibonacci braiding

The Fibonacci theory has two topological charges, \(1\) and \(\tau\), with fusion rule

\[
\tau\times\tau=1+\tau.
\]

One qubit can be encoded in three \(\tau\) anyons constrained to have total charge \(\tau\). Define \(|0\rangle\) and \(|1\rangle\) according to whether the first pair fuses to \(1\) or to \(\tau\). Let

\[
\varphi=\frac{1+\sqrt 5}{2}
\]

denote the golden ratio. A standard choice of the basis-change matrix \(F\) and exchange matrix \(R\) is

\[
F=
\begin{pmatrix}
\varphi^{-1}&\varphi^{-1/2}\\
\varphi^{-1/2}&-\varphi^{-1}
\end{pmatrix},\qquad
R=
\begin{pmatrix}
e^{-4\pi i/5}&0\\
0&e^{3\pi i/5}
\end{pmatrix}.
\]

The \(F\) matrix changes between fusion bases, while the \(R\) matrix describes exchange in a basis where the exchanged pair has definite fusion charge. The first exchange is \(B_1=R\). To exchange the second and third anyons, the state is first transformed to the appropriate fusion basis, the exchange is performed, and the basis transformation is then reversed:

\[
B_2=F^{-1}RF=FRF,
\]

because this convention has \(F^{-1}=F\). The relative phase between the two eigenvalues of \(B_1\) is

\[
\frac{e^{3\pi i/5}}{e^{-4\pi i/5}}=e^{7\pi i/5}=e^{-3\pi i/5},
\]

which is not a Clifford \(Z\)-rotation. In addition, \(B_1\) and \(B_2\) produce rotations about different axes of the encoded Bloch sphere.

Braid words, meaning ordered products of elementary braid generators, form a dense representation on the computational space. Longer braid words can approximate an arbitrary one-qubit unitary, and suitable braids in larger encodings provide entangling gates [R015]. An entangling gate produces correlations that cannot be written as a product of independent single-qubit states. Alternative phase conventions can change signs and common phases in these matrices, but they do not change the conclusion about the available gate set.

The comparison is:

| Anyon model | Elementary fusion | Braiding supplies | Braiding alone universal? | Missing engineering |
|---|---|---|---|---|
| Ising/Majorana | \(\sigma\times\sigma=1+\psi\) | Clifford gates such as \(H\) and \(S\) | No; no dense gate set | non-Clifford resource, parity control, leakage control |
| Fibonacci | \(\tau\times\tau=1+\tau\) | dense single-qubit rotations and entangling braids | Yes, ideally | compilation, initialization, fusion readout, thermal and leakage control |

Universality is a mathematical property of a braid representation. It does not demonstrate that the corresponding anyons exist in a physical sample.

## Majorana endpoint modes in a semiconductor wire

Consider a one-dimensional semiconductor with strong spin–orbit coupling, coupled to a conventional \(s\)-wave superconductor and placed in a magnetic field. Spin–orbit coupling links a particle’s momentum to its spin. An \(s\)-wave superconductor has an isotropic pairing amplitude in momentum space. Cooper pairing, the pairing of electrons into superconducting correlations, enters the semiconductor through the interface.

The wire is described as proximitized because its superconducting pairing is induced by an adjacent superconductor rather than originating within the semiconductor itself.

A minimal Bogoliubov–de Gennes Hamiltonian is

\[
H(p)=\left(\frac{p^2}{2m^*}-\mu\right)\tau_z
+\alpha p\,\sigma_y\tau_z
+V_Z\sigma_x
+\Delta\tau_x.
\]

A Bogoliubov–de Gennes Hamiltonian describes superconducting quasiparticles in a particle–hole basis. Here \(p\) is momentum in kg m s\(^{-1}\); \(m^*\) is the electron effective mass in kg; \(\mu\) is chemical potential in joules or electronvolts; \(\alpha\) is the spin–orbit coefficient in energy-times-length; \(V_Z\) is Zeeman energy; and \(\Delta\) is the induced superconducting pairing energy. Zeeman energy is the spin-energy splitting produced by the magnetic field. The Pauli matrices \(\sigma_a\) act on spin, while \(\tau_a\) act on particle–hole space. Every term has units of energy. For example, \(\alpha p\) is energy-times-length multiplied by inverse length.

For the ideal, uniform, single-band model, the bulk excitation gap closes and reopens at

\[
V_Z^2=\Delta^2+\mu^2.
\]

A bulk gap is the minimum energy required to create an excitation in the extended system. The region

\[
V_Z>\sqrt{\Delta^2+\mu^2}
\]

is topological and supports a localized mode near each end of a sufficiently long segment [Theory] [R222]. In this model, spin–orbit coupling, Zeeman splitting, and conventional pairing together produce an effective spinless \(p\)-wave channel. A \(p\)-wave pairing channel has a pairing amplitude that changes sign under reversal of relative momentum.

The endpoint mode is represented by a Majorana operator \(\gamma_j\), defined by

\[
\gamma_j^\dagger=\gamma_j,\qquad
\{\gamma_i,\gamma_j\}=2\delta_{ij},
\]

where \(\delta_{ij}=1\) for \(i=j\) and zero otherwise. The first relation states that a Majorana operator is Hermitian, and the second gives its fermionic anticommutation algebra. Two Majorana operators define one ordinary fermion:

\[
f=\frac{\gamma_1+i\gamma_2}{2},\qquad
i\gamma_1\gamma_2=2f^\dagger f-1.
\]

The occupation number \(f^\dagger f\) is encoded nonlocally between the two ends. Four Majoranas with fixed total fermion parity provide a qubit. Subject to the chosen orientation convention, an ideal counterclockwise exchange is represented by

\[
U_{ij}=\exp\!\left(\frac{\pi}{4}\gamma_i\gamma_j\right).
\]

These are the Ising operations used in the preceding calculation.

If the end modes decay over a localization length \(\xi\), meaning the characteristic distance over which their wavefunctions decrease, their overlap in a clean wire of length \(L\) is approximately proportional to \(e^{-L/\xi}\), often multiplied by an oscillatory prefactor. Increasing \(L/\xi\) can therefore suppress coherent energy splitting caused by end-mode overlap.

This geometric suppression does not eliminate quasiparticle poisoning, in which an unwanted quasiparticle changes fermion parity. It also does not suppress a stray low-energy state near one end, a poorly transmitting tunnel barrier, or a control pulse that closes the excitation gap. Nonlocal encoding protects against a specified class of local perturbations, not against every experimental error mechanism.

## Alternative platforms for localized endpoint modes

Semiconductor nanowires are not the only proposed platform. Two-dimensional semiconductor–superconductor heterostructures can form gate-defined networks. A heterostructure is an interface or layered structure composed of different materials. Magnetic-atom chains on superconductors can produce effective topological bands, and vortices or boundaries in candidate intrinsic topological superconductors can host zero-energy states [Proposal/Theory] [R223].

The distinction between intrinsic and engineered superconducting topology is important. In an intrinsic topological superconductor, the superconducting bulk itself carries the relevant topological invariant, a quantity that remains unchanged under continuous deformations that do not close the bulk gap.

In a hybrid device, individually conventional components collectively realize an effective topological phase under tuned conditions. A sharp zero-energy spectroscopic feature is compatible with a Majorana mode in either setting. However, ordinary Andreev bound states, disorder, and inhomogeneous potentials can reproduce important signatures [R223]. An Andreev bound state is a localized subgap state produced by repeated electron–hole conversion at a superconducting interface.

Spectroscopy can identify a candidate state, but it does not by itself establish the state’s fusion rules or exchange statistics.

## Fractional quantum Hall systems

A two-dimensional electron gas in a perpendicular magnetic field \(B\) forms Landau levels. Define the dimensionless filling factor

\[
\nu=\frac{nh}{eB},
\]

where \(n\) is the areal electron density in m\(^{-2}\), \(h\) is Planck’s constant in J s, and \(e\) is the elementary charge in C. The filling factor gives the number of occupied Landau levels, including fractional occupation when interactions are important. The units cancel because \(eB/h\) has units of inverse area.

Electron interactions can stabilize incompressible fractional quantum Hall liquids at rational values of \(\nu\). “Incompressible” means that changing the particle density requires a finite excitation energy. The \(k=3\) Read–Rezayi state occurs at partial filling \(3/5\) in its simplest spin-polarized form and contains a Fibonacci topological sector [Theory] [R139]. A topological sector is a class of excitations characterized by a particular topological charge and associated fusion and braiding data.

With two lower Landau levels filled, partial filling \(3/5\) corresponds to total filling \(13/5\). Particle–hole conjugation within the active Landau level maps this state to partial filling \(2/5\), and therefore to total filling \(12/5\). Particle–hole conjugation interchanges occupied and unoccupied orbitals within the specified Landau level.

The conjugate state reverses the appropriate chiral data but retains Fibonacci fusion content. Chirality describes the propagation direction of edge modes and related handedness-dependent topological data. The phrase “Read–Rezayi at \(12/5\)” is therefore commonly used as shorthand for this candidate family rather than as an experimentally established identification.

The microscopic Coulomb interaction does not require the system to realize this candidate family. Landau-level mixing, finite quantum-well thickness, disorder, spin polarization, and charge-density order can favor competing phases. Landau-level mixing is the interaction-induced admixture of states from different Landau levels, while charge-density order is a spatial modulation of electron density.

Exact-diagonalization and density-matrix-renormalization studies have identified parameter regimes consistent with the Read–Rezayi state or its particle–hole conjugate [Numerics] [R225]; [R227]; [R228]. Exact diagonalization computes eigenstates of a finite many-body Hamiltonian directly. Density-matrix renormalization is a variational numerical method that approximates low-energy many-body states using restricted entanglement. Finite system sizes and model-dependent corrections leave room for competing Abelian or symmetry-broken interpretations.

Agreement with a trial-state overlap or an entanglement spectrum is substantial numerical evidence. A trial-state overlap measures the similarity between a computed state and a proposed wavefunction, while an entanglement spectrum characterizes the eigenvalue structure obtained by partitioning the state. Neither quantity constitutes an experimental quasiparticle braid.

## Significance and identification requirements for Fibonacci quasiholes

A quasihole in the Fibonacci sector carries both electromagnetic charge and topological charge. Its electromagnetic charge affects transport and interferometric phase, while its topological charge determines the relevant fusion space. Exchanging quasiholes acts on that fusion space through the \(F\) and \(R\) matrices given above. A decisive experimental program must therefore connect several observables:

- a robust incompressible plateau and activated longitudinal resistance;

- fractional quasiparticle charge;

- edge or thermal measurements compatible with the candidate topological order;

- fusion-channel-dependent interference or projective fusion outcomes;

- noncommuting, order-dependent braid operations consistent with the predicted matrices.

Activated longitudinal resistance is a temperature-dependent resistance consistent with thermally excited charge carriers across an energy scale. Projective fusion outcomes are measurements that resolve the total topological charge produced when quasiparticles are combined.

No single item replaces the complete set of evidence. A plateau without fusion evidence, or an interferometer signal obtained before the phase is identified, remains evidence at the first level or only part of the second.

## Current experimental evidence

The evidence assessment below follows peer-reviewed literature through 2026 and reports the strongest justified conclusion rather than the most favorable possible interpretation.

| Claim | Status | Platform | What was measured or established | Verdict |
|---|---|---|---|---|
| The ideal spin–orbit nanowire has a topological phase and endpoint Majoranas above the phase boundary | [Theory] established | semiconductor–superconductor | BdG invariant and gap closing/reopening in model Hamiltonians [R222] | candidate mechanism, not material identification |
| Hybrid and candidate intrinsic superconductors show zero-energy and related signatures | [Experiment] partial | nanowires, planar hybrids, chains, vortex systems | tunnelling and spatial spectroscopy; trivial states can imitate key features [R223] | compatible evidence, platform-dependent and not a braid |
| Single-shot interferometric parity readout is feasible in an InAs–Al device | [Experiment] demonstrated operation | gate-defined InAs–Al hybrid | up to 1 fF capacitance shift, signal-to-noise ratio 1 in 3.6 µs, state dwell time above 1 ms near 2 T, and 1% assignment error [R224] | a strong readout primitive; the paper analyzes both trivial and topological origins |
| Majorana fusion rules and non-Abelian exchange have been conclusively demonstrated in these solid-state devices | not established | Majorana candidates | no accepted controlled exchange establishing the Ising braid representation [R223]; [R224] | remains a required experiment |
| An incompressible \(12/5\) fractional quantum Hall state exists in high-quality GaAs | [Experiment] demonstrated | GaAs quantum well | activated transport; one 30-nm-well study reported a zero-tilt activation gap near 30 mK [R226] | establishes the plateau, not its topological order |
| The \(12/5\) state is the particle–hole-conjugate \(k=3\) Read–Rezayi phase | [Numerics/Theory] supported candidate | second Landau level | finite-size spectra, entanglement data, and competing-order studies [R225]; [R227]; [R228] | plausible but not uniquely identified experimentally |
| Fractional statistics can be measured in an electronic quantum Hall interferometer | [Experiment] demonstrated for Abelian anyons | \(\nu=1/3\) Laughlin state | phase slips consistent with quasiparticles encircling localized fractional charge [R131] | validates an important method, but not Fibonacci statistics |
| Fibonacci fusion and braiding have been observed at \(12/5\) | not established | fractional quantum Hall | no conclusive quasiparticle-identification-and-braid sequence [R139]; [R225]; [R226]; [R227]; [R228] | theoretical candidate, not demonstrated Fibonacci hardware |

The thermal scale illustrates the difficulty of operating the quantum Hall state. A reported \(12/5\) activation gap of \(30\ \mathrm{mK}\) corresponds to

\[
k_B T=(8.617\times10^{-5}\ \mathrm{eV\,K^{-1}})(0.030\ \mathrm{K})
\approx2.6\ \mu\mathrm{eV},
\]

where \(k_B\) is Boltzmann’s constant [R226]. The product of energy per kelvin and temperature in kelvin has units of energy.

This value is an activation scale extracted from transport and is not necessarily equal to the intrinsic many-body gap of a disorder-free system. In either interpretation, electrical wiring, filtering, and local electrostatic control must avoid heating a fluid whose relevant energy scale is very small.

## Required advances for each platform

### Requirements for the wire platform

- **Identification before scaling.** Disorder and smooth confinement can produce low-energy Andreev states that resemble endpoint Majoranas. Replicating an ambiguous device element only produces a larger system with the same ambiguity.

- **A hard, uniform gap.** A hard gap is a superconducting density of states with strongly suppressed subgap spectral weight. Gate operation, magnetic field, semiconductor carrier density, and superconductivity must coexist across every segment and junction. The ideal inequality \(V_Z>\sqrt{\Delta^2+\mu^2}\) is not by itself an experimental acceptance criterion.

- **Networks and effective exchange.** Endpoints in one dimension cannot physically pass one another. Braiding therefore requires junction networks or measurement-only parity sequences. Both approaches require calibrated tunnel couplings and paths that preserve the excitation gap.

- **Parity lifetime and readout.** Quasiparticle poisoning changes the encoded parity sector. Fast, repeatable, quantum-nondemolition parity measurements are therefore integral to the qubit. A quantum-nondemolition measurement is designed to preserve the measured observable so that repeated measurements return the same value in the absence of physical transitions.

- **Resources beyond non-universal braids.** Even ideal Ising braiding requires a high-quality non-Clifford resource. This resource can dominate the computational overhead and limits claims that all gates are topologically protected.

### Requirements for the quantum Hall fluid

- **Phase identification.** A \(12/5\) plateau must be distinguished from competing ordered phases before its quasiparticles can be treated as computational resources.

- **A small operating energy scale.** The fragile state requires ultralow electron temperature, extremely clean material, and low-noise electrostatic gates [R226].

- **Controlled quasiparticles.** Gates must create, position, move, and fuse individual quasiholes without closing the gap or unintentionally reconstructing the edge. Edge reconstruction is a change in the spatial structure and mode content of the boundary caused by confinement and interactions.

- **Stable interferometry.** Coulomb charging, changes in device area, localized quasiparticles, and edge equilibration can modify measured phases. A scalable processor would require simultaneous calibration of many such elements.

- **Readout and leakage control.** Fusion charge must be measured without inadvertently creating additional quasiparticles. Leakage is an unwanted transition from the encoded computational subspace into other physical states. Universal braid mathematics does not specify the required control wiring.

## Required milestones for a defect array

A defect array may provide site-specific fabrication and conventional spin readout that are unavailable in a quantum Hall fluid. Its principal limitation is that the required topological Hamiltonian and associated anyons have not yet been shown to emerge. Comparison with the two established research programs identifies five milestones:

- Derive a many-body topological phase from measured microscopic defect parameters rather than only from a proposed interaction graph.

- Measure the bulk gap and topological diagnostics while excluding a deliberately prepared but unprotected state.

- Create localized excitations and determine their fusion channels.

- Demonstrate order-dependent braid operations or an equivalent measurement-only protocol.

- Show that the logical error rate decreases as separation, code distance, or another theoretically predicted protection parameter increases. Code distance is the minimum number or spatial extent of physical errors required to produce an undetectable logical error.

The relevant benchmark is not merely the observation of a two-level system, which Majorana devices achieved long ago. The necessary standard is whether the entire sequence from microscopic Hamiltonian to protected operation remains valid after plausible alternative explanations are tested.

## Common errors in interpreting evidence

- **“A zero-bias peak is a Majorana.”** A zero-bias peak is a spectroscopic observation. Identifying a Majorana requires correlated evidence concerning spatial localization, the excitation gap, parity, fusion, and ultimately exchange statistics. Trivial bound states can produce similar peaks [R223].

- **“Parity readout proves what carries the parity.”** The 2025 InAs–Al experiment demonstrated a high-quality measurement primitive and explicitly considered both topologically trivial and non-trivial interpretations [R224]. Instrument performance does not determine quasiparticle identity.

- **“The \(12/5\) plateau proves Fibonacci order.”** Quantized Hall response and activated transport establish an incompressible phase. They do not uniquely determine its fusion category, meaning the mathematical structure that specifies topological charges and their fusion rules [R225]; [R226]; [R227]; [R228].

- **“Quantum Hall anyons have been braided, therefore Fibonacci anyons have been braided.”** The direct interferometric result in Ref. [R131] concerns Abelian Laughlin anyons at \(\nu=1/3\), not the non-Abelian candidate at \(12/5\).

- **“Non-Abelian means universal.”** Ising anyons are non-Abelian, but their braids produce only Clifford operations. Fibonacci anyons are computationally universal by braiding in the ideal theory [R015].

- **“Universal means scalable.”** Universality means that a gate set is dense in the required unitary space. It does not determine the excitation gap, poisoning rate, control-wiring requirements, braid duration, readout fidelity, fabrication yield, or heat load.

- **“A simulated braid settles the material question.”** A processor can implement the same matrices without hosting the corresponding emergent quasiparticles. Such a result validates the control protocol and the mathematical theory, but it does not establish intrinsic topological order.

Four distinct terms must remain separate. A **candidate phase** is an ideal or numerically studied Hamiltonian that supports the proposed topological order.

A **compatible signature** is an observation that agrees with a prediction but also permits alternative explanations. **Quasiparticle identification** requires independent observables that establish charge, fusion, and statistics.

A **topological qubit** is an encoded state that can be initialized, operated, and read out with an error advantage attributable to topology. Evidence at one of these levels must not be represented as evidence for a later level.

## Technical checks

- **Majorana zero modes and Ising computation.** A Majorana zero mode is a zero-energy quasiparticle excitation represented by a self-adjoint fermionic operator. Majorana zero modes are associated with Ising rather than Fibonacci computation because their fusion space—the Hilbert space spanned by possible fusion outcomes—and their exchange operators realize the Ising braid representation. This representation generates Clifford gates, but it does not generate a dense universal gate set.

- **Hadamard operation from Ising braids.** Let \(B_1\) and \(B_2\) denote the exchange operators for adjacent Ising anyons. Direct multiplication gives \(\frac{1+i}{2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}=e^{i\pi/4}H\). Thus, the Ising braid product \(B_1B_2B_1\) implements the Hadamard gate \(H\) up to the global phase \(e^{i\pi/4}\), which multiplies the entire quantum state by the same complex factor. Braiding alone still cannot supply the non-Clifford \(T\) gate.

- **Fibonacci interest at filling \(12/5\).** The Landau-level filling factor is the ratio of electron density to magnetic-flux density in units of the flux quantum. At total filling \(12/5\), the active, partially occupied Landau level has filling \(2/5\). This filling is the particle–hole conjugate of the \(k=3\) Read–Rezayi state at \(3/5\), meaning that occupied and unoccupied orbitals are interchanged within the active Landau level. The topological order of the \(k=3\) Read–Rezayi state contains a Fibonacci sector, whose quasiparticles obey Fibonacci fusion rules. This relationship motivates interest in Fibonacci physics at \(12/5\).

- **Result of the 2025 InAs–Al experiment.** A single-shot measurement determines an observable from one experimental trial, while interferometric measurement extracts that observable from phase-dependent interference. The experiment established fast single-shot interferometric measurement of fermion parity—the parity of the number of fermions—with 1% assignment error under the reported conditions. It did not conclusively establish Majorana identity, fusion, or braiding [R224].

- **Limitations of interpreting an activated \(12/5\) plateau as a Fibonacci qubit.** An activated plateau is a quantized Hall plateau accompanied by thermally activated transport behavior. It establishes an incompressible phase, meaning a gapped phase that resists changes in particle density. It does not uniquely establish the phase’s fusion content, controlled quasiparticle creation and manipulation, fusion-channel readout, a non-Abelian braid test, or scaling of protected logical operations. Therefore, the plateau alone does not establish a Fibonacci qubit.

- **Criterion for defect-engineered proposals.** Each link in the proposed chain of inference must be measured: the microscopic Hamiltonian, the resulting phase, its excitations, their exchange statistics, and the corresponding logical operation. Alternative explanations must remain under consideration until an experiment excludes them.

The semiconductor–superconductor wire has a simple effective Hamiltonian, defined as the low-energy model governing its relevant degrees of freedom, but the identity of the residual experimental feature remains disputed. The quantum Hall system has an experimentally established incompressible liquid, but its specific topological order remains disputed.

Neither platform has demonstrated a controlled non-Abelian braid in its intended solid-state device. A defect array is not experimentally more advanced than these platforms and has not yet reached the corresponding stage of experimental discrimination.

## Sources

- [R015] C. Nayak, S. H. Simon, A. Stern, M. Freedman, and S. Das
Sarma, “Non-Abelian anyons and topological quantum computation,”
Reviews of Modern Physics 80, 1083–1159
(2008). DOI: [10.1103/RevModPhys.80.1083](https://doi.org/10.1103/RevModPhys.80.1083).
[arXiv:0707.1889](https://arxiv.org/abs/0707.1889).

- [R222] R. M. Lutchyn, J. D. Sau, and S. Das Sarma, “Majorana
fermions and a topological phase transition in
semiconductor-superconductor heterostructures,” Physical Review
Letters 105, 077001 (2010). DOI: [10.1103/PhysRevLett.105.077001](https://doi.org/10.1103/PhysRevLett.105.077001).
[arXiv:1002.4033](https://arxiv.org/abs/1002.4033).

- [R223] K. Flensberg, F. von Oppen, and A. Stern, “Engineered
platforms for topological superconductivity and Majorana zero modes,”
Nature Reviews Materials 6, 944–958 (2021).
DOI: [10.1038/s41578-021-00336-6](https://doi.org/10.1038/s41578-021-00336-6).
[arXiv:2103.05548](https://arxiv.org/abs/2103.05548).

- [R224] Microsoft Azure Quantum, M. Aghaee, A. Alcaraz Ramirez, Z.
Alam, et al., “Interferometric single-shot parity measurement
in InAs–Al hybrid devices,” Nature 638,
651–655 (2025). DOI: [10.1038/s41586-024-08445-2](https://doi.org/10.1038/s41586-024-08445-2).
[arXiv:2401.09549](https://arxiv.org/abs/2401.09549).

- [R139] N. Read and E. Rezayi, “Beyond paired quantum Hall states:
Parafermions and incompressible states in the first excited Landau
level,” Physical Review B 59, 8084–8092
(1999). DOI: [10.1103/PhysRevB.59.8084](https://doi.org/10.1103/PhysRevB.59.8084).
[arXiv:cond-mat/9809384](https://arxiv.org/abs/cond-mat/9809384).

- [R225] E. H. Rezayi and N. Read, “Non-Abelian quantized Hall states
of electrons at filling factors 12/5 and 13/5 in the first excited
Landau level,” Physical Review B 79, 075306
(2009). DOI: [10.1103/PhysRevB.79.075306](https://doi.org/10.1103/PhysRevB.79.075306).
[arXiv:cond-mat/0608346](https://arxiv.org/abs/cond-mat/0608346).

- [R226] C. Zhang, C. Huan, J. S. Xia, N. S. Sullivan, W. Pan, K. W.
Baldwin, K. W. West, L. N. Pfeiffer, and D. C. Tsui, “Spin polarization
of the \(\nu=12/5\) fractional quantum
Hall state,” Physical Review B 85, 241302(R)
(2012). DOI: [10.1103/PhysRevB.85.241302](https://doi.org/10.1103/PhysRevB.85.241302).
[arXiv:1204.0903](https://arxiv.org/abs/1204.0903).

- [R227] W. Zhu, S. S. Gong, F. D. M. Haldane, and D. N. Sheng,
“Fractional quantum Hall states at \(\nu=13/5\) and \(12/5\) and their non-Abelian nature,”
Physical Review Letters 115, 126805 (2015).
DOI: [10.1103/PhysRevLett.115.126805](https://doi.org/10.1103/PhysRevLett.115.126805).
[arXiv:1505.03050](https://arxiv.org/abs/1505.03050).

- [R228] R. S. K. Mong, M. P. Zaletel, F. Pollmann, and Z. Papić,
“Fibonacci anyons and charge density order in the 12/5 and 13/5 quantum
Hall plateaus,” Physical Review B 95, 115136
(2017). DOI: [10.1103/PhysRevB.95.115136](https://doi.org/10.1103/PhysRevB.95.115136).
[arXiv:1505.02843](https://arxiv.org/abs/1505.02843).

- [R131] J. Nakamura, S. Liang, G. C. Gardner, and M. J. Manfra,
“Direct observation of anyonic braiding statistics,” Nature
Physics 16, 931–936 (2020). DOI: [10.1038/s41567-020-1019-1](https://doi.org/10.1038/s41567-020-1019-1).
[arXiv:2006.14115](https://arxiv.org/abs/2006.14115).

---
