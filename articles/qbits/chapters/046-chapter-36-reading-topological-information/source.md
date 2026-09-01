# Chapter 36 — Measurement of topological information

A single spin can be measured by applying an optical pulse and collecting spin-dependent fluorescence. The resulting photon record can be classified as the spin state conventionally labelled “up” or “down.” This procedure measures a specific microscopic degree of freedom with a physical detector.

A proposed topological bit has a different encoding structure. No individual spin carries the complete information. Instead, the information is encoded in a nonlocal sector: one of two globally distinct many-body configurations that produce identical outcomes under every local measurement in a specified set.

Measurement of such information therefore requires a hierarchy of operators and protocols. The sequence begins with single-spin readout and proceeds to tests of local constraints involving four neighboring spins. Spectroscopy then determines the energies accessible to a drive. Open string operators test whether excitations appear at their endpoints. Noncontractible closed loops distinguish global sectors, and fusion experiments determine the total charge obtained when two excitations are combined.

Each measurement objective corresponds to a different operator. An experimental claim is incomplete unless it specifies the measured operator.

## Measurement hierarchy

A single-site measurement identifies a local physical state. A four-site parity measurement determines whether a local constraint is satisfied. Neither measurement determines whether a configuration has nontrivial winding around the complete system. That information requires an extended path measurement or a comparison between globally distinct configurations.

The hierarchy can be represented as follows:

```text
one-site readout -> physical spin or edge label
local parity -> stabilizer / nearby excitation
spectral response -> energy and transition matrix element
open string endpoints -> created or moved charges
closed loop -> enclosed charge or logical sector
fusion experiment -> possible total-charge channels
many-basis data -> tomography or selected correlators
```

A quantum measurement is represented by an operator together with the probability distribution of its possible outcomes. Let the data system be in a state \(\rho\), where \(\rho\) is the density operator: a positive, unit-trace operator that represents either a pure state or a statistical mixture. For an observable \(M\) with eigenvalues \(m\), the ideal projective outcome probabilities are

\[
P(m)=\operatorname{Tr}(\rho\Pi_m),
\]

where \(\Pi_m\) is the projector onto the eigenspace of \(M\) with eigenvalue \(m\). This equation gives the Born-rule probability for obtaining outcome \(m\). A readout protocol is physically meaningful only if the detector record can be mapped onto these ideal outcomes using a calibrated model of measurement errors.

A recurring distinction is that between local stabilizers and nonlocal logical operators. A stabilizer is an operator whose specified eigenvalue defines a local constraint of a quantum code. A local stabilizer therefore tests whether a small neighborhood satisfies one term of the code Hamiltonian.

A nonlocal logical loop distinguishes globally different code states that can satisfy every local stabilizer constraint. Local-stabilizer and logical-loop circuits may both implement parity measurements and may therefore have similar hardware implementations, but the operators have different physical meanings.

Every claimed signal should be accompanied by the measured operator, preparation assumptions, measurement circuit, calibration procedure, error model, and plausible competing explanations. Without this information, a measured data set does not identify the underlying physical phenomenon.

## Four-edge stabilizer measurement

Adopt the toric-code convention of placing one physical two-level system on every edge of a square lattice with periodic boundary conditions. A two-level system has a two-dimensional Hilbert space and may be represented as a spin or qubit. Periodic boundary conditions identify opposite boundaries of the square lattice, giving the lattice the topology of a torus. For each edge \(e\), let \(X_e\) and \(Z_e\) denote Pauli operators. Define the plaquette operator

\[
B_p=\prod_{e\in\partial p} Z_e,
\]

where \(\partial p\) is the set of four edges forming the boundary of plaquette \(p\). The possible eigenvalues of this operator are \(b_p=+1\) and \(-1\). At every vertex \(s\), define the star operator

\[
A_s=\prod_{e\ni s}X_e,
\]

where \(e\ni s\) denotes the four edges incident on \(s\). The ideal toric-code ground space is the simultaneous \(+1\) eigenspace of every star and plaquette operator, so \(A_s=+1\) and \(B_p=+1\) for all \(s\) and \(p\) [R030]. [Theory]

The operator \(B_p\) can be measured using an additional two-level system \(a\), called an ancilla. The ancilla is initialized in \(|0\rangle_a\). It is not part of the encoded data system; its purpose is to record the value of one parity operator.

For each of the four data edges in \(\partial p\), apply a controlled-NOT gate with the data edge as the control and the ancilla as the target. Then measure the ancilla operator \(Z_a\). In the computational basis, the ancilla records the parity of the four data bits:

\[
m_a=z_1z_2z_3z_4=b_p,
\]

where each \(z_j=\pm1\) is the corresponding \(Z\)-eigenvalue and \(m_a\) is the ancilla outcome. In the ideal circuit, \(m_a=-1\) indicates a violated plaquette constraint.

For a coherent superposition, the circuit measures the collective operator \(B_p\), rather than four classical bits that possessed definite values before measurement. The measurement projects the data into a \(B_p\) eigenspace without revealing the individual values of the four \(Z_e\) operators.

Repeated ancilla-mediated stabilizer extraction is an established technique in superconducting surface-code experiments [R230]. [Experiment] This result demonstrates a measurement primitive: repeated measurement of stabilizer operators. It does not establish passive topological order in the processor.

If the ancilla is omitted and the four edges are instead measured individually, multiplying their outcomes still gives the plaquette parity. However, the individual measurements also reveal the factors in that product and generally destroy coherence in bases incompatible with \(Z\). The measurement circuit therefore determines both the information obtained and the measurement back-action.

## Noncontractible logical-loop measurement

Choose a closed path \(C_x\) that winds once around the torus in the \(x\) direction. Define the logical \(Z\) operator

\[
\overline Z_x=W_Z(C_x)=\prod_{e\in C_x}Z_e.
\]

Here \(W_Z(C_x)\) is a \(Z\)-type loop operator supported on the edges of \(C_x\). An ancilla initialized for this measurement can measure the operator using the same form of parity circuit as for \(B_p\), except that the ancilla is coupled to every edge along \(C_x\) before it is measured. The resulting value \(\overline z_x=\pm1\) distinguishes two logical sectors. Because the loop commutes with every stabilizer, states with different values of \(\overline z_x\) can produce identical local stabilizer outcomes.

The topology of the path is essential. If a closed path \(C\) is contractible, meaning that it can be continuously deformed to a point, then its \(Z\)-type loop is a product of the enclosed plaquette stabilizers in the ideal code.

Such a contractible loop is not an independent logical measurement. A loop defines a logical operator on the torus only when it is noncontractible, meaning that it cannot be continuously deformed to a point. In a planar surface code, the corresponding logical path must connect the appropriate boundaries or encircle a puncture.

The spatial length of a path does not determine whether it is logical. Its topology determines whether the associated operator is independent of the local stabilizers.

| Measurement | Support | Ideal question | A \(-1\) result means |
|---|---|---|---|
| \(B_p\) | four nearby edges | Is this local constraint satisfied? | a local syndrome/excitation is present |
| \(\overline Z_x\) | a system-spanning noncontractible path | Which logical sector is occupied? | logical eigenvalue \(-1\), not necessarily a local defect |

The two operators can be measured with similar hardware. However, \(B_p\) is a local term in the code Hamiltonian, whereas \(\overline Z_x\) is a logical observable. Measuring \(B_p=+1\) for every plaquette does not determine \(\overline Z_x\).

Conversely, measuring \(\overline Z_x\) once does not establish that all local constraints are satisfied.

A destructive alternative is to measure every data edge along the selected path in the \(Z\) basis and multiply the outcomes. This procedure estimates the same parity in that experimental shot, but it also reveals the individual measurement values and generally destroys coherence in incompatible bases.

Destructive measurement is often simpler and can provide an effective final readout. It is unsuitable when the state must remain coherent for a subsequent braid operation.

A long correlator should not be classified as a logical loop solely because of its length. A contractible product of plaquette operators remains a stabilizer product rather than an independent sector label.

## Physical detector records and Pauli observables

A local readout maps a microscopic state onto a classical detector record such as photon number, electric charge, current, resonator phase, or another measured signal. In diamond nitrogen-vacancy centers, confocal fluorescence combined with magnetic resonance enabled detection of individual defect centers [R240], and spin-selective optical protocols later achieved projective readout of a solid-state spin register [R199]. [Experiment] Related platforms use spin-dependent tunnelling, spin-to-charge conversion, cavity transmission, or dispersive frequency shifts.

The directly measured quantity depends on the platform. In particular, a fluorescence count is not itself the Pauli observable \(Z\).

Calibration determines the conditional distributions \(P(r|z=+1)\) and \(P(r|z=-1)\), where \(r\) is the detector record and \(z=\pm1\) denotes the inferred \(Z\)-eigenvalue. The inference must account for preparation errors, state changes during readout, background counts, crosstalk, and the chosen decision threshold.

Reporting only a thresholded binary result removes information needed to evaluate and reproduce that inference.

Local spin readout provides measurements of local quantities, including occupation, polarization, a component measured after a basis rotation, or correlations assembled from repeated experimental shots. Measurements of many local systems can reconstruct an extended operator by multiplying local outcomes. This procedure does not make the resulting extended measurement robust against the increasing number of local readout errors.

A calibrated transducer is therefore necessary but not sufficient. The measured operator must still be specified, and the total measurement error generally increases with the size of the operator support.

## Ancilla measurement of Pauli products

Consider a Pauli product

\[
S=P_1P_2\cdots P_w,
\]

where each \(P_j\) is \(X\), \(Y\), or \(Z\) acting on one data system, and \(w\) is the operator weight, defined as the number of data systems on which the product acts nontrivially. An ancilla can be used to acquire the eigenvalue of \(S\). Basis rotations transform measurements of \(X\)- or \(Y\)-parity into a \(Z\)-parity circuit. Measuring the ancilla then reveals \(s=\pm1\) while ideally preserving coherent superpositions within the same eigenspace of \(S\).

The gate schedule affects fault propagation. A single ancilla fault can propagate through several two-body gates and generate a correlated error on multiple data systems.

Fault-tolerant layouts therefore constrain gate ordering, add flag ancillas that detect dangerous fault propagation, repeat measurement rounds, and decode the complete measurement history rather than accepting one bit as conclusive. Modern surface-code experiments demonstrate repeated stabilizer extraction and below-threshold logical-error scaling in engineered superconducting circuits [R230].

[Experiment] These results demonstrate active error correction. They should not be interpreted as evidence for a naturally occurring topological phase.

Stabilizer expectation values can also estimate the energy of an ideal commuting Hamiltonian such as

\[
H=-J\sum_s A_s-J\sum_p B_p,
\]

where \(J\) is an energy, \(A_s\) is a star operator, and \(B_p\) is a plaquette operator. Because the Hamiltonian is a sum of these observables, measurements of \(\langle A_s\rangle\) and \(\langle B_p\rangle\) estimate \(\langle H\rangle\). This energy estimate does not, by itself, determine the spectral gap, long-range entanglement, or robustness against perturbations that were not measured.

An energy estimate is therefore not a phase identification. A stabilizer value near its ideal target cannot serve as a topological certificate without the remaining preparation, measurement, calibration, error, and alternative-model evidence.

## Spectroscopic measurement of energy gaps

Spectroscopy applies a drive at angular frequency \(\omega\) and measures absorption, fluorescence, resonator response, or state transfer. A resonance satisfying

\[
\hbar\omega=E_n-E_0
\]

connects an initial state of energy \(E_0\) to an excited state of energy \(E_n\), provided that the drive operator has a nonzero transition matrix element between those states. Both sides of the equation have units of joules. By varying momentum, position, polarization, and the drive operator, an experiment can probe energy gaps, dispersion relations, selection rules, bound states, and continuum thresholds.

A spectral gap is required by many arguments for topological protection, but the existence of a gap does not imply that the phase is topological. Topologically trivial magnets and molecules can have nonzero excitation-energy gaps. Spectroscopic evidence becomes more persuasive when the measured states also exhibit the predicted charge, fusion behavior, nonlocal response, and dependence on perturbations.

A gap measurement establishes an energy difference under the conditions and with the drive operators that were tested. It does not establish the existence of a nonlocal sector, anyonic statistics, or robustness of logical sectors.

## Open-string and closed-loop measurements

An open string operator is a product of local operators along a path with distinct endpoints. In the toric code, applying an open string creates, moves, or annihilates excitations at its endpoints while commuting with stabilizers away from those endpoints [R030]. Comparing endpoint syndromes before and after applying the string tests this predicted behavior. A syndrome is the set of measured stabilizer eigenvalues used to locate constraint violations.

A closed Wilson loop \(W_a(C)\) represents transporting or testing a charge type \(a\) around a closed contour \(C\). Both the contour and the charge label \(a\) are part of the observable.

Depending on the model, the expectation value of a Wilson loop can diagnose confinement, identify enclosed topological charge, or measure a logical sector. Contractible loops and noncontractible logical loops must be identified separately.

There are three practical measurement methods:

- **Ancilla accumulation:** One ancilla is coherently coupled to every term in the operator product, after which its accumulated phase or parity is measured.

- **Destructive multiplication:** Every site is measured in an appropriate local basis, and the outcomes are multiplied separately for each experimental shot.

- **Interferometry:** A probe is coherently placed in a superposition of two propagation paths, one path is made to encircle a region, and the path amplitudes are recombined. The output probabilities are used to infer an acquired Abelian phase or non-Abelian action.

Interferometry directly probes the charge enclosed by a loop. In an Abelian theory, taking one charge around another can contribute a scalar phase.

In a non-Abelian theory, braiding acts as a matrix on a fusion space, which is the Hilbert space of possible collective fusion channels. A single output intensity is therefore generally insufficient. The experiment also requires controlled state preparation and a final measurement of the fusion channel [R015]. [Theory] Reduced interference visibility may result from dephasing, path distinguishability, leakage, thermal quasiparticles, or a statistical mixture of charge types.

Consequently, visibility loss is not automatically evidence of non-Abelian behavior.

Reduced fringe contrast does not determine a braid matrix. Competing mechanisms for the loss of contrast must be tested before the signal is attributed to particle statistics.

## Fusion-channel measurement

A fusion-rule measurement requires the preparation of identified quasiparticles, their controlled motion toward one another or an equivalent code deformation, and a measurement of the total topological charge in the enclosing region. For Fibonacci charge \(\tau\),

\[
\tau\times\tau=1+\tau
\]

indicates that two \(\tau\) charges can fuse to either vacuum charge \(1\) or charge \(\tau\). A useful experiment must provide more than two peaks in a histogram. It must establish a calibrated mapping from those peaks to charge projectors, demonstrate repeatability or specify controlled destructiveness, and measure the dependence on preparation and braid history.

The total charge of a region can be measured using a Wilson loop around its boundary, by interferometry, or by applying a known fusion circuit that maps the charge onto local degrees of freedom and then measuring those degrees of freedom. The final procedure is often called destructive fusion readout: the anyons are combined, the resulting local syndrome is measured, and the original encoded state is not preserved.

Digital superconducting-processor experiments have implemented code deformations and non-Abelian graph-vertex braiding [R132], and a 27-transmon experiment prepared a Fibonacci string-net state and measured creation, fusion, and braiding signatures [R138]. [Experiment: digital simulation] These experiments demonstrate protocols in controlled Hilbert spaces. They did not observe intrinsic Fibonacci quasiparticles emerging from an unprogrammed defect material; instead, the operations were compiled into gates acting on ordinary processor qubits [R132]; [R138].

Logical-charge measurement applies the same principle at the encoding scale. If logical information is stored in the total charge of a set of anyons or holes, the measurement must use a loop enclosing exactly that set or must fuse the objects according to the encoding tree and measure the final channel.

The loop geometry, orientation, charge label, and selected fusion basis all define the observable. An instruction that specifies only a measurement of the anyons does not specify a measurement circuit.

Two spectral peaks alone do not establish a fusion rule. Without calibrated charge projectors and controlled history-dependent tests, the data remain consistent with two ordinary resonances.

## State tomography and selected observables

Full state tomography measures a sufficient set of observables to reconstruct \(\rho\). Tomography determines a quantum state; it does not by itself identify a phase of matter.

For \(N\) two-level systems, \(\rho\) is a \(2^N\times 2^N\) matrix, so unrestricted reconstruction requires resources that scale exponentially with \(N\). Full tomography is therefore practical only for small patches.

Larger arrays require more restricted methods, including selected correlators, stabilizer sampling, reduced density matrices, randomized measurements, or classical-shadow protocols [R241]. [Theory/Protocol] A reduced density matrix describes a subsystem after the remaining degrees of freedom have been traced out. Classical-shadow protocols use randomized measurements and classical post-processing to estimate selected properties without reconstructing the complete density matrix.

Reconstructing a small state that is close to an ideal code state verifies preparation on that finite patch. It does not independently establish thermodynamic ground-state degeneracy or stability with increasing system size. Conversely, observables selected to probe nonlocal structure or entanglement may test a specific hypothesis more efficiently than full state reconstruction.

Complete tomography of four spins establishes properties of those four spins. Without scaling tests, the reconstructed density matrix cannot certify a many-body phase in the thermodynamic regime.

## Existing experimental capabilities

The required measurement techniques already exist, although they have not all been integrated into one platform. Individual defects can be optically located and their spins can be read out [R240]; [R199].

Superconducting processors repeatedly measure high-weight parity checks using ancillas [R230]. A superconducting experiment prepared a toric-code state and probed its excitations and topological observables [R125].

[Experiment: digital state preparation] A programmable Rydberg array measured signatures consistent with a toric-code-type spin liquid [R126]. [Experiment: analog quantum simulation] Non-Abelian and Fibonacci protocols have been implemented digitally on superconducting processors [R132]; [R138].

These experiments address different physical questions. In a gate-based processor, the measured operator is usually known because it has been explicitly compiled into a gate sequence.

The principal issues are fidelity, scaling, and whether the prepared state retains the predicted structure. In an analog simulator, the Hamiltonian is less directly specified by a gate program, so phase identification depends more strongly on a combined set of observables.

A defect lattice requires additional interfaces: local optical or microwave addressability, ancillas or mediator modes for parity measurements, sufficiently nondestructive measurement cycles, and a method for implementing extended loops without an overwhelming accumulation of errors.

A credible defect experiment should report at least the raw and corrected outcomes, detector calibration, leakage and loss, control sequence, operator support, error bars, blind or held-out model comparisons where practical, and results as functions of system size, temperature, preparation time, and controlled perturbations. Results should be displayed both with and without readout correction. Otherwise, a large corrected Wilson-loop value may primarily reflect assumptions in the calibration model.

Similar measurement terminology is used for physically distinct situations. A stabilizer circuit acting on programmed qubits performs active syndrome extraction.

A prepared code state is a digital emulation unless it is an equilibrium phase or a dynamically stable phase of the physical Hamiltonian under investigation. An analog simulator may realize an engineered many-body Hamiltonian, but signatures measured on one finite patch do not automatically demonstrate thermodynamic topological order.

An emergent anyon is an excitation of such a many-body phase. A logical qubit is information encoded in a nonlocal sector of that phase or code. The physical setting must therefore be stated explicitly rather than inferred from shared terminology.

## Common interpretation errors

- **Identifying one stabilizer with topology.** A local constraint can be satisfied by a trivial product state or by a state prepared specifically to satisfy that check. The complete constraint pattern and independent nonlocal observables must also be measured.

- **Identifying a long correlator with a logical loop.** Length is insufficient. The path must have the appropriate topology and operator content. A contractible loop may be only a product of stabilizers.

- **Using postselection to produce idealized results.** Discarding shots with leakage or unwanted syndromes changes the sampled ensemble. Acceptance rates and conclusions obtained without postselection must be reported.

- **Applying readout mitigation that assumes an incorrect noise model.** Independent single-site confusion matrices can fail in the presence of correlated crosstalk. The correction should be validated on states with known multi-site parity.

- **Identifying an energy gap with a phase.** Spectroscopy can demonstrate an energy gap. Topological order additionally requires nonlocal structure and robustness.

- **Identifying fusion-like populations with fusion rules.** Evidence for fusion requires controlled charges, a defined fusion basis, calibrated charge projectors, and history-dependent tests. Two peaks alone establish only spectroscopic structure.

- **Interpreting finite prepared-state signatures as passive protection.** The toric-code and Fibonacci processor demonstrations [R125]; [R132]; [R138] measured deliberately prepared or digitally evolved states. [Experiment] They do not show that the same hardware passively relaxes into that phase or passively protects it.

- **Treating one Wilson-loop value as universal evidence.** Loop behavior depends on the contour, state, temperature, boundaries, matter content, and noise. It must be combined with local syndromes, gap data, entanglement diagnostics, sector structure, and perturbation tests.

- **Calling destructive parity measurement nondemolition.** Multiplying individually measured spin outcomes can estimate a loop value but destroys coherence in incompatible bases. A quantum-nondemolition claim requires repeated agreement beyond what can be explained by state re-preparation or detector memory.

A cumulative evidence hierarchy is:

| Evidence | What it supports | What remains open |
|---|---|---|
| Local spin contrast | controllable/readable constituents | interactions and collective phase |
| Stabilizers near target values | local code constraints | nonlocal sector and long-range entanglement |
| Gap spectroscopy | energetic isolation | topology of the gapped state |
| Open-string endpoint rule | candidate quasiparticle motion | statistics and deconfinement |
| Noncontractible loops | global sector information | robustness and thermodynamic scaling |
| Fusion and braid matrices | anyonic process within calibrated space | intrinsic emergence versus compiled simulation |
| Size/perturbation/temperature trends plus entanglement data | coherent phase-identification dossier | ultimate scalability and protection |

No level in this hierarchy eliminates the need for the preceding levels. Strong phase identification combines local constraint measurements, independent nonlocal observables, spectral and entanglement information, controlled excitation creation and fusion, scaling tests, and exclusion of plausible topologically trivial models.

Satzinger et al. and Semeghini et al. provide complementary examples of digital and analog evidence sets rather than a single decisive measurement [R125]; [R126]. [Experiment]

## Conceptual assessment

- **Ancilla-based stabilizer measurement.** An ancilla is an auxiliary quantum system used to extract information from the data system. A stabilizer is an operator whose eigenvalue specifies a code-space constraint. Measuring a stabilizer with an ancilla reveals the eigenvalue of a specified local product of operators while, ideally, revealing no individual data values within the corresponding eigenspace, which is the subspace associated with that eigenvalue.

- **Dependence of a contractible \(Z\) loop on the torus.** A contractible loop is a closed path that can be continuously reduced to a point on the surface. In the ideal code, a contractible \(Z\) loop is the product of the enclosed plaquette operators \(B_p\), where each \(B_p\) is a stabilizer associated with a plaquette. Therefore, any two ground states satisfying every \(B_p=+1\) have the same eigenvalue for that loop, so the loop is not an independent logical observable. By contrast, a noncontractible loop, which cannot be continuously reduced to a point on the torus, cannot be expressed as that product and can distinguish the ground states.

- **Destructive and nondestructive loop readout.** Destructive readout measures the individual sites that constitute a loop and multiplies their measurement outcomes to obtain the loop eigenvalue. Nondestructive ancilla readout instead extracts only the loop eigenvalue and ideally preserves coherence between states within the corresponding eigenspace.

- **Limitations of identifying a spectral gap with topological order.** A spectral gap is an energy difference between the ground-state sector and an excited-state sector. Its measurement establishes only an energy difference under the conditions being probed. Because ordinary magnets can also be gapped, a gap alone does not demonstrate topological order. In particular, it does not establish nonlocal entanglement, anyonic statistics, or robustness of logical sectors.

- **Limitations of interpreting two histogram peaks as a fusion rule.** A fusion rule specifies the possible total charges obtained by combining identified input charges. Evidence for such a rule requires identified input charges, a defined fusion basis, calibrated projectors onto charge sectors, and tests that depend on the preceding operation history. Without these elements, two histogram peaks constitute spectroscopic data rather than evidence of a fusion rule.

- **Appropriate description of a gate-compiled Fibonacci experiment.** A gate-compiled experiment implements a target model through a sequence of programmed quantum gates. The minimum justified description is a digital simulation or emulation of Fibonacci states and operations unless independent evidence establishes intrinsic emergent Fibonacci order in the hardware Hamiltonian.

Local spins are measured through calibrated transducers, which convert the spin-dependent response into a detectable signal. Products of Pauli operators can be measured either with ancillas or from destructive snapshots of the constituent sites.

Spectroscopy determines energy differences. Open-string operators, defined along paths with distinct endpoints, test the charges located at those endpoints.

Closed-loop operators and interferometers probe enclosed charge or logical charge. Fusion readout projects the system onto a defined total-charge channel.

Quantum-state tomography reconstructs selected state information from measurements, but full-state tomography has a cost that grows exponentially with system size. None of these methods alone directly measures topology.

Any physical claim must therefore be associated with a specific observable, and the interpretation of that observable requires a documented record of its definition, calibration, assumptions, and limitations.

## Sources

- [R240] A. Gruber, A. Dräbenstedt, C. Tietz, L. Fleury, J. Wrachtrup,
and C. von Borczyskowski, “Scanning Confocal Optical Microscopy and
Magnetic Resonance on Single Defect Centers,” Science
276, 2012–2014 (1997). DOI: [10.1126/science.276.5321.2012](https://doi.org/10.1126/science.276.5321.2012).

- [R199] L. Robledo, L. Childress, H. Bernien, B. Hensen, P. F. A.
Alkemade, and R. Hanson, “High-fidelity projective read-out of a
solid-state spin quantum register,” Nature
477, 574–578 (2011). DOI: [10.1038/nature10401](https://doi.org/10.1038/nature10401).

- [R030] A. Yu. Kitaev, “Fault-tolerant quantum computation by
anyons,” Annals of Physics 303, 2–30 (2003).
DOI: [10.1016/S0003-4916(02)00018-0](https://doi.org/10.1016/S0003-4916(02)00018-0).
arXiv: [quant-ph/9707021](https://arxiv.org/abs/quant-ph/9707021).

- [R230] Google Quantum AI and Collaborators, “Quantum error
correction below the surface code threshold,” Nature
638, 920–926 (2025). DOI: [10.1038/s41586-024-08449-y](https://doi.org/10.1038/s41586-024-08449-y).
arXiv: [2408.13687](https://arxiv.org/abs/2408.13687).

- [R125] K. J. Satzinger et al., “Realizing topologically
ordered states on a quantum processor,” Science
374, 1237–1241 (2021). DOI: [10.1126/science.abi8378](https://doi.org/10.1126/science.abi8378).
arXiv: [2104.01180](https://arxiv.org/abs/2104.01180).

- [R126] G. Semeghini et al., “Probing topological spin
liquids on a programmable quantum simulator,” Science
374, 1242–1247 (2021). DOI: [10.1126/science.abi8794](https://doi.org/10.1126/science.abi8794).
arXiv: [2104.04119](https://arxiv.org/abs/2104.04119).

- [R132] Google Quantum AI and Collaborators, “Non-Abelian braiding of
graph vertices in a superconducting processor,” Nature
618, 264–269 (2023). DOI: [10.1038/s41586-023-05954-4](https://doi.org/10.1038/s41586-023-05954-4).
arXiv: [2211.09802](https://arxiv.org/abs/2211.09802).

- [R138] S. Xu et al., “Non-Abelian braiding of Fibonacci
anyons with a superconducting processor,” Nature Physics
20, 1469–1475 (2024). DOI: [10.1038/s41567-024-02529-6](https://doi.org/10.1038/s41567-024-02529-6).
arXiv: [2305.14028](https://arxiv.org/abs/2305.14028).

- [R241] H.-Y. Huang, R. Kueng, and J. Preskill, “Predicting many
properties of a quantum system from very few measurements,” Nature
Physics 16, 1050–1057 (2020). DOI: [10.1038/s41567-020-0932-7](https://doi.org/10.1038/s41567-020-0932-7).
arXiv: [2002.08953](https://arxiv.org/abs/2002.08953).

- [R015] C. Nayak, S. H. Simon, A. Stern, M. Freedman, and S. Das
Sarma, “Non-Abelian anyons and topological quantum computation,”
Reviews of Modern Physics 80, 1083–1159
(2008). DOI: [10.1103/RevModPhys.80.1083](https://doi.org/10.1103/RevModPhys.80.1083).
arXiv: [0707.1889](https://arxiv.org/abs/0707.1889).

---
