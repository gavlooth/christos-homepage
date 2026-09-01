# Chapter 33 — Programmable competitor platforms

A superconducting chip can execute a short sequence of microwave control pulses and then perform a measurement. A cold-atom platform can use lasers to confine atoms, excite them into large electronic orbits, and rearrange them into a different interaction graph within a day. Both platforms have prepared states corresponding to models discussed in the preceding chapters.

A lattice of implanted spins could, in principle, support a Fibonacci anyon, a non-Abelian quasiparticle whose exchanges implement transformations associated with Fibonacci fusion rules. Realizing such an excitation would first require suitable material growth, accurate defect placement, and a many-body energy gap separating the relevant low-energy states from excitations. Time spent waiting for that Hamiltonian cannot be used to develop a processor that can already execute a braid circuit, where a braid is a sequence representing the exchange of quasiparticles. The value of the alternative route that is not pursued is the opportunity cost.

No platform will be designated as universally superior. Instead, the same four-spin square will be implemented on three platforms, with the required physical and computational resources evaluated consistently.

## State simulation and protected hardware

Two distinct objectives must be separated because they require different evidence and resources.

The first objective is model investigation: preparing states, creating excitations, measuring braids or correlations, and observing the dynamics of a small system.

The second objective is protected hardware: engineering the low-energy sector of the physical system so that it is topologically ordered. A topologically ordered system contains global information that cannot be substantially changed by sufficiently weak local perturbations. In this setting, a local disturbance should have only a small effect on the encoded information.

Consider a circuit that prepares the exact ground-state wavefunction of a topological model and then leaves the hardware governed by an unrelated Hamiltonian, where a Hamiltonian is the operator that determines the system’s energies and time evolution. At the measurement time, the prepared state may exhibit topological entanglement, meaning an entanglement structure characteristic of a topologically ordered model. It nevertheless has no energetic protection against subsequent local errors if the governing Hamiltonian does not penalize those errors. Therefore, preparing a state does not establish a protected phase.

Superconducting processors and Rydberg arrays already provide strong evidence for the first objective. [Experiment] Superconducting processors have prepared toric-code states and moved their excitations [R125], and have digitally simulated Fibonacci string-net states, fusion, and braiding [R138].

[Experiment] A Rydberg array has shown signatures of a toric-code-type spin liquid in a programmable analog simulator [R126]. None of these observations, by itself, establishes that a stored logical qubit received passive topological protection, meaning protection supplied continuously by the physical Hamiltonian rather than by active error-correction operations.

A defect architecture is relevant to the second objective only if its nearly static microscopic Hamiltonian generates the target model with a useful interaction strength. Flexible simulation and passive protection are distinct capabilities.

Without this distinction, a digitally implemented braid matrix could be incorrectly treated as evidence for a material anyon. The comparisons below are designed to prevent that inference.

## A common four-spin target

Consider four two-level systems located on the edges of one square and labelled \(1,2,3,4\). A two-level system has a computational basis consisting of \(|0\rangle_i\) and \(|1\rangle_i\). For system \(i\), the Pauli operator \(Z_i\) has eigenvalue \(+1\) on \(|0\rangle_i\) and \(-1\) on \(|1\rangle_i\). Define the plaquette operator, which measures the combined \(Z\)-parity of the four spins, by

\[
P_\square=Z_1Z_2Z_3Z_4.
\]

The target Hamiltonian is

\[
H_\square=-K P_\square,
\]

where \(K>0\) is an energy measured in joules or electronvolts. The coefficient \(K\) sets the strength of the four-body plaquette interaction.

Because \(P_\square^2=I\), where \(I\) is the identity operator, the only possible eigenvalues of \(P_\square\) are \(p=\pm1\). The \(p=+1\) sector has energy \(-K\), whereas the \(p=-1\) sector has energy \(+K\). The energy separation between the sectors is therefore \(2K\). A single square consequently imposes a parity constraint and has an energy gap.

This four-spin system does not possess topological order. It has no thermodynamic phase, because it is not a system in the thermodynamic limit; it has no noncontractible loop, meaning a closed path that cannot be continuously reduced to a point within the system; and it has no pair of ground-state sectors that are locally indistinguishable.

The square is useful because the same plaquette term occurs as one component of stabilizer Hamiltonians. A stabilizer Hamiltonian is constructed from operators whose specified eigenvalues define the target subspace, often with mutually commuting terms. A fair comparison requires all three platforms to implement the same small target, include the same accounting of controls and ancillary systems, and satisfy the same criterion for protection.

If these common requirements are omitted, a platform that can execute six gates can appear equivalent to a platform whose native Hamiltonian realizes a phase. The gate sequence is a valid implementation, but it does not by itself establish the existence of that phase.

### Digital synthesis of plaquette evolution

For an evolution time \(\delta t\), measured in seconds, the desired unitary time-evolution operator is

\[
U_\square(\delta t)
=\exp\!\left(-\frac{iH_\square\delta t}{\hbar}\right)
=\exp\!\left(+i\frac{K\delta t}{\hbar}P_\square\right),
\]

where \(\hbar\) is Planck’s reduced constant in joule-seconds. The ratio \(K\delta t/\hbar\) is dimensionless, as required for the argument of an exponential.

Define \(R_z^{(4)}(\phi)=\exp(-i\phi Z_4/2)\) as a rotation of qubit 4 about its \(z\)-axis through an angle \(\phi\), measured in radians. A controlled-NOT gate, or CNOT, flips its target qubit conditionally on the state of its control qubit. Under conjugation, a CNOT with control \(j\) and target 4 transforms \(Z_4\) into \(Z_jZ_4\). It follows that the sequence

```
1: ──■────────────────────────────■──
│ │
2: ──┼──■──────────────────────■──┼──
│ │ │ │
3: ──┼──┼──■────────────────■──┼──┼──
│ │ │ │ │ │
4: ──X──X──X──Rz(φ)─────────X──X──X──
```

implements \(\exp(-i\phi P_\square/2)\). The choice

\[
\phi=-\frac{2K\delta t}{\hbar}
\]

therefore produces \(U_\square(\delta t)\) exactly within the ideal gate model. The digital cost of one plaquette-evolution step is six two-qubit gates and one single-qubit rotation.

If the hardware has sparse connectivity, meaning that direct gates are available only between selected pairs of qubits, additional routing gates may be necessary. Alternatively, a parity-measurement construction can use an ancilla, an auxiliary quantum system that assists the operation without storing the target information. In that case, ancilla reset, readout, and feedforward must be included in the resource accounting. Feedforward is the use of a measurement result to determine a subsequent control operation. A short circuit therefore still has nonzero physical cost.

Suppose the target Hamiltonian is \(H=A+B\), where \(A\) and \(B\) contain terms that do not commute. A first-order product formula approximates the full evolution as

\[
e^{-iH\delta t/\hbar}\approx e^{-iA\delta t/\hbar}e^{-iB\delta t/\hbar}.
\]

The leading operator error per step is proportional to \(\delta t^2[A,B]/\hbar^2\), where \([A,B]=AB-BA\) is the commutator.

Using more steps of shorter duration reduces this digitization error, which arises from approximating continuous evolution by a product of simpler evolutions. It also requires more imperfect gates. Commuting stabilizer terms eliminate the product-formula error, but they do not eliminate hardware errors.

### Generation of four-body interactions in defect systems

A defect-spin array normally provides one-spin terms and two-spin interactions, including dipolar, exchange, superexchange, strain-mediated, or photon-mediated interactions. It does not normally provide a clean \(Z_1Z_2Z_3Z_4\) interaction. Two implementation routes are available.

The digital route compiles the CNOT sequence into the entangling gates supported by the defects. This method requires initialization of all four spins, individual or selective control, readout, and a total error from the six entangling operations that remains within the error budget.

A fixed sparse graph may require a central electron spin, nuclear ancillas, or swap gates that exchange the quantum states of two sites. [Experiment] Pairwise entanglement between individual diamond defect spins has been demonstrated [R080], and a seven-qubit diamond register has implemented fault-tolerant logical operations and flagged stabilizer measurements [R234].

These results establish important control and measurement primitives. They do not demonstrate a dense, static four-body topological Hamiltonian.

The analog route introduces mediator levels or a cluster of defects. A mediator is an auxiliary degree of freedom through which the target spins interact. Virtual excursions into mediator states can generate an effective four-body interaction in the low-energy theory. A virtual excursion is an intermediate transition allowed in perturbation theory even though the mediator is not populated as a final state. To display the associated cost without assuming a specific materials design, consider a fourth-order gadget with microscopic coupling energy \(J\), mediator energy penalty \(\Delta\), and dimensionless coefficient \(c\). Dimensional analysis permits

\[
K_{\mathrm{eff}}=c\frac{J^4}{\Delta^3}.
\]

Here \(K_{\mathrm{eff}}\) is the effective four-body coupling, and both sides of the equation have units of energy. Perturbative control requires \(|J/\Delta|\ll1\), which also implies \(K_{\mathrm{eff}}\ll|J|\). Thus, a gadget that remains within the controlled perturbative regime produces a gap that is small compared with the microscopic coupling scale.

Lower-order energy shifts and unwanted couplings must either be cancelled or tolerated. [Proposal] Defects become competitive for passive Hamiltonian engineering only if the resulting \(K_{\mathrm{eff}}\) exceeds the decoherence, disorder, temperature, leakage, and finite-size scales established in earlier chapters. A pulse sequence cannot compensate for an inadequately small static gap.

### Digital implementation with superconducting circuits

A superconducting implementation maps the exact circuit to calibrated microwave pulses and native two-qubit gates. Planar processors commonly provide a fixed or tunable local coupling graph. The all-to-one connectivity required for this square may be native, mediated by a coupler, or compiled using swap gates. Nanofabrication permits repeated circuit layouts. However, frequency crowding, crosstalk, wiring, leakage beyond the computational doublet, and calibration remain system-level costs [R229]. The computational doublet is the pair of energy levels selected to represent the logical states \(|0\rangle\) and \(|1\rangle\); leakage is population transfer into levels outside that pair.

This architecture provides the most direct route to digital plaquette evolution. Software control also makes it straightforward to change \(K\), reverse its sign, omit a plaquette, or measure a different string operator.

[Experiment] This control method supported the preparation and probing of topologically ordered states on a superconducting processor [R125] and a later digital demonstration of Fibonacci fusion and non-Abelian braid action [R138]. In the Fibonacci experiment, conventional superconducting qubits simulated the string-net Hilbert space and applied gates representing braids. A Hilbert space is the vector space of quantum states available to the model.

The hardware did not contain intrinsic material Fibonacci anyons [R138].

A tunable coupler can also generate driven effective interactions, but an analog superconducting implementation is not necessarily passive. If periodic drives, active calibration, or a finite-depth preparation circuit are required, switching them off generally restores a different native Hamiltonian. [Experiment] Separately, below-threshold surface-code scaling on a 105-qubit superconducting processor is evidence for active quantum error correction, not evidence for a self-correcting topological material [R230].

A superconducting processor that executes the model is therefore a strong instrument for model investigation. That achievement does not by itself establish protected hardware.

### Rydberg blockade and plaquette implementation

A neutral atom can be confined using optical tweezers, which are tightly focused laser fields that create trapping potentials. A laser can then excite the atom’s outer electron into an orbit with a large spatial extent.

An atom in such a highly excited electronic state is a Rydberg atom. The large orbit produces strong interactions over comparatively long distances.

In one commonly used model, the computational state \(|1\rangle_i\) is coupled by a laser toward a Rydberg level. Define \(n_i=(I-Z_i)/2\) as its occupation projector, \(\Omega_i\) as a laser Rabi angular frequency in radians per second, \(\delta_i\) as a detuning in radians per second, and \(V_{ij}\) as an interaction angular frequency. The Rabi frequency sets the rate of coherent laser-driven transitions, while the detuning is the difference between the laser angular frequency and the transition angular frequency. A useful rotating-frame Hamiltonian is

\[
\frac{H_{\mathrm R}}{\hbar}
=\sum_i\left(\frac{\Omega_i}{2}X_i-\delta_i n_i\right)
+\sum_{i<j}V_{ij}n_in_j,
\qquad
V_{ij}=\frac{C_6}{r_{ij}^{6}}.
\]

A rotating frame is a representation that removes a chosen rapid phase evolution associated with the drive frequency. Here \(X_i\) flips the two states, \(r_{ij}\) is the atom separation in metres, and \(C_6\) has units \(\mathrm{rad\,s^{-1}m^6}\). The strong \(r^{-6}\) interaction produces Rydberg blockade, a constraint that prevents nearby atoms from being resonantly excited simultaneously. Geometry, detuning, and drive strength are therefore programmable Hamiltonian parameters [R231].

The native interaction is the pairwise term \(n_in_j\), not the four-body product \(Z_1Z_2Z_3Z_4\). The plaquette interaction can be produced digitally by compiling the same parity circuit into blockade-mediated entangling gates.

A purpose-built multiqubit blockade pulse or an ancilla constraint can reduce the circuit depth, defined as the number of sequential gate layers. Its phase and leakage must still be calibrated. [Experiment] Parallel two-qubit gates with reported 99.5% fidelity on up to 60 atoms, together with low-error three-qubit gates, demonstrate that this route has been implemented experimentally [R232].

These results do not establish a native four-body plaquette term.

Among the three platforms considered here, Rydberg arrays also provide the most rapidly reconfigurable analog simulator. The atoms can be rearranged, and the physical Hamiltonian above can act continuously rather than being decomposed into a gate sequence.

[Experiment] A constrained 219-atom array reported signatures of a topological spin liquid [R126]. This system was a finite, driven atomic simulator with engineered blockade physics.

Its evidence is stronger than a classical simulation of the same Hamiltonian. It does not demonstrate that the apparatus stores an indefinitely passive topological qubit after the lasers are removed.

Removing the lasers generally removes the engineered Hamiltonian. This observation identifies the dependence of the simulated phase on active driving; it is not a criticism of the experiment.

## Resource-based platform comparison

### Physical and programmable connectivity

Connectivity specifies which pairs of sites can interact with sufficient strength and selectivity, including during simultaneous operations. It is not determined solely by the number of connections shown in a hardware diagram.

If two sites share a long-range interaction tail, they are connected in the Hamiltonian. They are not independently programmable unless that interaction can be switched off or compensated through compilation. Thus, physical connectivity and on-demand programmable connectivity are distinct properties.

Defect geometry is largely fixed after fabrication. Dipolar interactions are long-ranged, decrease as \(r^{-3}\), and depend on orientation. Exchange interactions are shorter-ranged and exponentially sensitive to wavefunction overlap. Consequently, a graph that is suitable on average may still perform poorly in individual fabricated samples.

Superconducting circuits use reproducible lithographic nearest-neighbour or coupler graphs. Bus resonators and tunable couplers provide additional connections. Long-range logical edges generally require routing operations, chip area, frequency allocation, or additional electromagnetic modes.

Rydberg optical tweezers permit rearrangement in two and three dimensions, while the blockade radius provides interactions among multiple neighbours. Long-range interaction tails and simultaneous-addressing constraints remain relevant. The graph is programmable, but it is not equivalent to an arbitrary adjacency matrix specified entirely in software.

### Coherence-normalized operation counts

Raw coherence time alone is not an adequate performance metric. Coherence time is the characteristic duration over which a quantum state retains its phase or population information. A slower qubit can outperform a faster one if its gates have proportionally lower error, while a long-lived memory may provide little benefit if initialization occupies most of the experimental cycle. More useful dimensionless metrics include operations per coherence time, error per circuit layer, leakage, and duty cycle. Duty cycle is the fraction of the total experimental time spent performing useful computation.

Superconducting gates are electronically fast and support rapid repetition, but relaxation, dephasing, leakage, and calibration drift occur on the same chip [R229]. Neutral-atom entangling gates use strong Rydberg interactions, while atom loss, Doppler effects, laser noise, spontaneous emission, rearrangement, and imaging contribute to the operational cycle [R231]; [R232]. Defect electron or nuclear spins can provide excellent memories, but entangling remote defects, collecting photons, or addressing dense spectra can become the limiting process.

A valid comparison cannot use one platform’s best memory time as the metric for another platform’s complete algorithm. Omitting duty-cycle accounting would systematically favour the longest-lived spin even when memory lifetime is not the relevant performance constraint.

### Initialization, reset, and measurement

Superconducting qubits are fabricated as electrical circuits and measured through microwave resonators and amplifiers in a dilution refrigerator. Fabrication is sufficiently repeatable for large processors, but each additional control and readout channel increases cryogenic and calibration requirements [R229]; [R230].

Rydberg platforms assemble identical atoms from a reservoir rather than fabricating each atom individually. Rearrangement can repair vacancies before an experimental run, although atom loss may recur during the run.

State-selective fluorescence provides highly parallel readout and is generally destructive for the detected atom. Reloading and sorting must therefore be included in the operating cycle. [Experiment] Reconfigurable arrays have operated an encoded processor with up to 280 physical qubits and 48 logical qubits in sampling circuits [R233].

These counts characterize a logical experiment; they do not imply the permanent availability of 280 error-free atoms.

Defect hosts can contain spins in a compact solid and may permit optical readout. However, the yields for producing the desired defect, charge state, position, orientation, and spectral line are separate quantities. The seven-spin diamond logical experiment [R234] used a local register surrounding one optically active centre. That result does not establish a wafer-scale lattice of equivalent electronic defect clusters.

### Distinct definitions of scalability

The term “scalable” has at least four meanings: increasing the number of physical sites, increasing the number of simultaneously high-quality sites, increasing executable circuit depth, and improving logical performance after accounting for overhead. Atom count primarily demonstrates assembly capability.

Chip count primarily demonstrates integration capability. Neither quantity alone demonstrates protected computation.

Superconducting processors require dilution refrigeration and dense classical-control infrastructure. Rydberg processors require ultrahigh vacuum, laser cooling, optical access, stable lasers, and repeated atom handling, but they do not require a millikelvin solid-state stage [R231]. Defect platforms operate in several distinct regimes. Some defect spins can operate at room temperature, whereas high-quality optical interfaces or particular defect species require cryogenic operation.

The statement that defects require no cryogenics is therefore not valid at the platform level. Any such claim must specify the defect species and interface.

### Direct Hamiltonian programmability

Analog programmability describes which coefficients in \(H\) can be changed without decomposing the time evolution into a sequence of gates.

Rydberg arrays provide tunable geometry, local or global detuning, drive amplitude, and strong finite-range constraints. Their native family of Hamiltonians is extensive but not arbitrary.

Superconducting circuits provide tunable frequencies, drives, and couplers, together with precise waveform control. These capabilities require substantial calibration and are often used through digital compilation. Defects provide the least post-fabrication reconfiguration. Local fields and drives can tune their behaviour, but microscopic exchange paths and defect positions remain fixed.

This limited reconfigurability is a disadvantage during model discovery. It becomes a possible advantage only after the correct static Hamiltonian has been realized. A fixed but incorrect \(H\) provides no corresponding benefit.

## Current experimental status

The evidence in this chapter is assessed through August 2026. The cited experiments are research milestones rather than purchasing recommendations, and all three platforms are developing rapidly.

The compact comparison is:

| Criterion | Crystalline defects | Superconducting processor | Rydberg array |
|---|---|---|---|
| Native interactions | Dipolar, exchange, and optical- or phonon-mediated interactions; strongly materials-dependent | Circuit-mediated two-body gates and tunable couplers | Laser drive plus strong distance-dependent blockade interactions |
| Graph | Fixed and affected by fabrication disorder | Lithographic and usually local; routing or couplers extend it | Reconfigurable geometry with interaction tails |
| Control style | Local microwave or optical control; static interactions are possible | Highly developed, fast digital pulse control | Strong digital gates and unusually direct analog control |
| Readout | Species-dependent optical or electrical interface | Multiplexed microwave readout | Parallel fluorescence imaging, with atom-loss and reload costs |
| Environment | Dependent on the host and transition; room-temperature operation is not universal | Dilution refrigerator and cryogenic wiring | Ultrahigh vacuum, laser cooling, and optical infrastructure |
| Present topological evidence cited here | Defect entanglement and small logical registers, but not a material topological phase [R080]; [R234] | Digital toric-code and Fibonacci simulations [R125]; [R138] | Analog spin-liquid signatures in a finite driven array [R126] |
| Plaquette route | Gate compilation or weak gadget-generated \(K_{\mathrm{eff}}\) | Short digital circuit; driven analog options | Blockade-compiled gate or constrained analog construction |
| Passive-protection opportunity | A static host Hamiltonian could qualify if all scale tests are passed | Usually active QEC or driven simulation | An emergent analog phase may be possible during the drive; passive memory is not automatic |

The table does not identify a universal winner because the preferred platform depends on the objective.

[Experiment] For programmable exploration at present, superconducting processors have directly executed topological-state circuits and digital non-Abelian braid protocols [R125]; [R138]. Rydberg arrays combine flexible geometry with an analog Hamiltonian that has produced signatures of a topological spin liquid [R126]. [Experiment] Defect platforms have demonstrated important capabilities in local control, entanglement, networking, and small registers [R080]; [R234], but the cited evidence does not include a defect lattice realizing an emergent non-Abelian phase.

[Proposal] Defects retain a logically distinct possibility for implementing a static material Hamiltonian: after fabrication, the interaction network could remain active without a long gate schedule. This possibility motivates calculations and measurements of \(K_{\mathrm{eff}}\), disorder, and thermal stability. It does not constitute evidence that such passive protection has been realized.

## Common category errors

### 1. Misidentifying a prepared state as a protected phase

A quantum circuit can prepare the exact ground-state wavefunction of a topological model while the resulting state remains governed by an unrelated hardware Hamiltonian, the operator that determines the physical system’s energies and time evolution. At the time of measurement, the prepared state may exhibit topological entanglement signatures, meaning nonlocal entanglement properties associated with the target topological model. However, the state has no energetic protection against subsequent local errors unless the hardware Hamiltonian itself supplies the required protection.

### 2. Conflating active error correction with passive protection

Surface-code cycles can suppress logical errors through repeated syndrome extraction, decoding, and feedback. Syndrome extraction measures error information without directly measuring the encoded logical state; decoding infers the likely errors from those measurements; and feedback applies the corresponding correction or updates the interpretation of later measurements. This procedure provides genuine active protection and is a major engineering achievement [R230].

Passive protection is physically distinct. It arises when a static Hamiltonian has an energy gap that suppresses local transitions without requiring continual syndrome cycles. The terms *active protection* and *passive protection* should therefore not be used interchangeably.

### 3. Misclassifying a Rydberg analog experiment as purely digital

A Rydberg analog experiment is not merely a digital reproduction of predetermined results. In an analog implementation, the laser-driven many-atom Hamiltonian directly generates the system’s continuous-time dynamics. If this Hamiltonian realizes a phase during its coherent evolution window, the observed correlations and excitations are emergent properties of the analog Hamiltonian rather than a classical playback of stored answers.

Claims about quantum memory nevertheless remain limited by the finite lifetime of the system, its dependence on external drives, boundary effects, state preparation, and readout.

### 4. Neglecting the physical cost of connectivity

Connectivity specifies which physical degrees of freedom can interact. Long-range interactions can generate undesired graph edges as readily as intended ones, while moving an atom requires finite transport time.

A resonator bus introduces additional electromagnetic modes and spectral crowding. A dipolar interaction tail introduces disorder and crosstalk, where crosstalk is an unintended coupling between nominally distinct operations or components.

Consequently, every target interaction graph must be compiled either into simultaneous calibrated operations or into a static Hamiltonian whose deviations from the target are quantitatively controlled.

### 5. Comparing proposed defect arrays directly with demonstrated systems

A projected defect gap must be labelled [Proposal] or [Speculation]. It should not occupy the same table cell as a measured gate or correlation. Conversely, existing programmable hardware should not be described as providing passive Fibonacci protection merely because it displayed a Fibonacci braid matrix.

The superconducting Fibonacci experiment [R138] used physical superconducting qubits to digitally emulate Fibonacci string-net states and braids. The Rydberg spin-liquid experiment [R126] measured correlations that emerged from a driven analog Hamiltonian in a finite atomic array.

A defect spin is a physical qubit, meaning a two-level degree of freedom associated with a material defect. A register code such as [R234] is an encoded logical qubit, meaning that its quantum information is distributed across multiple physical degrees of freedom. A static defect lattice would possess topological order only if its many-body Hamiltonian, energy spectrum, correlations, and excitations satisfied the criteria for a topological phase.

The first three observations do not imply the fourth.

## Conceptual checks and derivations

- **Spectral gap implied by \(P_\square^2=I\).**

  Let \(P_\square\) be a Hermitian plaquette operator, where a plaquette is a local face of the interaction lattice, and let \(I\) denote the identity operator. Because \(P_\square^2=I\), its only eigenvalues are \(\pm1\). For the Hamiltonian term
  \[
  H_\square=-KP_\square,
  \]
  with \(K\) taken to be a positive energy scale, the corresponding energies are \(-K\) and \(+K\). The spectral gap, defined as the energy difference between these sectors, is therefore \(2K\).

- **Absence of topological order in a single plaquette.**

  One plaquette does not constitute topological order because it lacks an extended many-body phase, nonlocal logical sectors, and the system-size scaling properties that make local perturbations ineffective.

- **Difference between a digitally displayed Fibonacci braid and a material anyon.**

  A digital implementation of a Fibonacci braid does not require the hardware Hamiltonian to contain a Fibonacci anyon, which is a physical excitation with non-Abelian exchange statistics. Ordinary qubits can represent the relevant Hilbert space and implement the required gates. In that case, the braid matrix is an output of the circuit rather than an excitation of the chip.

- **Ideal implementation of \(U_\square(\delta t)\) using six CNOT gates.**

  A controlled-NOT (CNOT) gate conditionally flips a target qubit according to the state of a control qubit. In the ideal gate model, conjugation by the three CNOTs transforms the single-qubit rotation \(R_z^{(4)}(\phi)\) into
  \[
  \exp(-i\phi P_\square/2).
  \]
  Choosing
  \[
  \phi=-2K\delta t/\hbar
  \]
  gives
  \[
  \exp(+i K\delta t\,P_\square/\hbar),
  \]
  which is the plaquette time-evolution operator \(U_\square(\delta t)\). Thus, the six-CNOT sequence produces \(U_\square(\delta t)\) in the ideal gate model.

- **Conditions for a scientifically distinct defect implementation.**

  A defect implementation would be scientifically distinct if it quantitatively verified a static low-energy Hamiltonian with a many-body gap and perturbative stability. Such a system could provide passive physics without reproducing the dynamics through a circuit. Long-lived isolated spins alone do not satisfy this condition.

- **Consistent performance comparisons between platforms.**

  One platform’s best memory time should not be compared directly with another platform’s complete algorithm. Relevant performance metrics include the number of operations per coherence time, the error per circuit layer, leakage from the computational state space, and duty cycle. A long-lived spin does not provide an algorithmic advantage if it cannot be entangled or read out on the required schedule.

## Sources

- [R229] P. Krantz, M. Kjaergaard, F. Yan, T. P. Orlando, S.
Gustavsson, and W. D. Oliver, “A quantum engineer’s guide to
superconducting qubits,” Applied Physics Reviews
6, 021318 (2019). DOI: [10.1063/1.5089550](https://doi.org/10.1063/1.5089550).

- [R125] K. J. Satzinger et al., “Realizing topologically
ordered states on a quantum processor,” Science
374, 1237–1241 (2021). DOI: [10.1126/science.abi8378](https://doi.org/10.1126/science.abi8378).

- [R138] S. Xu et al., “Non-Abelian braiding of Fibonacci
anyons with a superconducting processor,” Nature Physics
20, 1469–1475 (2024). DOI: [10.1038/s41567-024-02529-6](https://doi.org/10.1038/s41567-024-02529-6).

- [R230] Google Quantum AI and Collaborators, “Quantum error
correction below the surface code threshold,” Nature
638, 920–926 (2025; published online 2024). DOI: [10.1038/s41586-024-08449-y](https://doi.org/10.1038/s41586-024-08449-y).

- [R231] A. Browaeys and T. Lahaye, “Many-body physics with
individually controlled Rydberg atoms,” Nature Physics
16, 132–142 (2020). DOI: [10.1038/s41567-019-0733-z](https://doi.org/10.1038/s41567-019-0733-z).

- [R126] G. Semeghini et al., “Probing topological spin
liquids on a programmable quantum simulator,” Science
374, 1242–1247 (2021). DOI: [10.1126/science.abi8794](https://doi.org/10.1126/science.abi8794).

- [R232] S. J. Evered et al., “High-fidelity parallel
entangling gates on a neutral-atom quantum computer,” Nature
622, 268–272 (2023). DOI: [10.1038/s41586-023-06481-y](https://doi.org/10.1038/s41586-023-06481-y).

- [R233] D. Bluvstein et al., “Logical quantum processor
based on reconfigurable atom arrays,” Nature
626, 58–65 (2024). DOI: [10.1038/s41586-023-06927-3](https://doi.org/10.1038/s41586-023-06927-3).

- [R080] F. Dolde et al., “Room-temperature entanglement
between single defect spins in diamond,” Nature Physics
9, 139–143 (2013). DOI: [10.1038/nphys2545](https://doi.org/10.1038/nphys2545).

- [R234] M. H. Abobeih et al., “Fault-tolerant operation of a
logical qubit in a diamond quantum processor,” Nature
606, 884–889 (2022). DOI: [10.1038/s41586-022-04819-6](https://doi.org/10.1038/s41586-022-04819-6).

---
