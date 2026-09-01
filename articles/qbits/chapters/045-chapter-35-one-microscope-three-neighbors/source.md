# Chapter 35 — Addressing and readout in dense defect arrays

A focused green laser can optically excite a defect in diamond. A detector then records the emitted red fluorescence. For an isolated defect, a specified preparation-and-readout protocol can infer a spin state from the resulting photon-count statistics.

When defects are sufficiently close to interact, one optical spot can collect signals from several neighboring defects. Similarly, a microwave field intended to rotate the spin state of one target can also excite transitions in nearby defects.

A frequency shift can provide spectral selectivity by distinguishing one site from the others through its transition frequency. When the corresponding control is turned off, any residual shift constitutes static disorder, meaning a time-independent site-to-site variation in the Hamiltonian. An experimental architecture therefore requires a quantitative method for selecting one cluster without eliminating the dense coupling that motivates the array.

## Distinct requirements for initialization, selection, control, measurement, and calibration

Demonstrating control of an isolated defect under a microscope does not establish control of an array. In a dense region, each laser spot can contain multiple neighboring defects, each microwave control line can generate fields beyond its intended site, and each imposed frequency shift modifies the Hamiltonian whose uniformity may be required.

Five functions must be distinguished.

- Initialize the charge state, physical spin state, and encoded-cluster state.

- Select a site or cluster by position or frequency.

- Drive a specified physical or encoded transition.

- Measure the selected degree of freedom with a stated degree of destructiveness.

- Calibrate the controls without replacing the many-body model under investigation with a different effective model.

Spectral differences that distinguish sites constitute on-site disorder when the selecting control is off. This tradeoff must be included explicitly in the architecture.

Previous chapters required localized defect states, coherent coupling, a low-energy cluster doublet, an appropriate interaction graph, effective multi-spin terms, and a many-body energy gap. These properties do not determine which cluster is acted on by a particular control pulse.

In an analog implementation of a topological Hamiltonian, the control parameters directly modify the physical system. A magnetic-field gradient changes Zeeman energies, where the Zeeman energy is the spin-dependent energy produced by a magnetic field.

Strain and electric fields shift optical and spin transition frequencies and can alter encoded wavefunctions. A focused optical reset can ionize neighboring defects, deposit heat, or project their quantum states.

Local control therefore perturbs the same system whose symmetry and spatial uniformity are intended to support a phase.

[Experiment] Optical initialization, coherent microwave control, and optical readout are mature techniques for isolated diamond nitrogen-vacancy (NV) centers, and multi-spin registers associated with individual centers have been controlled [R074]; [R119]. [Proposal] Combining those capabilities with dense defect clusters and an intrinsic topological Hamiltonian remains an architectural proposal rather than a demonstrated machine.

A successful single-center register must not be interpreted as a lattice merely by replicating its schematic representation. It remains a register unless the required lattice-scale interactions and controls are demonstrated.

## Spatial, spectral, internal-state, and temporal selection

Selecting a single subsystem from a globally driven array requires a distinguishing label. Available labels include position, transition frequency, timing, polarization, and a dedicated control line.

In a quantum array, such a label often appears as a term in the Hamiltonian. Assigning cluster \(i\) a distinctive frequency \(\omega_i\) introduces a site-dependent energy and can therefore violate the site equivalence required by the model.

Four common selection mechanisms are used.

- Spatial selection focuses light or a near field on one position.

- Spectral selection drives only the transition resonant with a chosen frequency.

- Internal-state selection uses polarization or selection rules to address a particular orientation or transition.

- Temporal selection uses pulse sequences to refocus unwanted evolution.

Practical devices combine these mechanisms. For example, a moderate gradient can separate transition frequencies, a shaped microwave pulse can restrict the addressed bandwidth, and an optical channel can provide readout.

Each selection method requires a quantitative error budget. The statement that a device is “individually addressable” is not a technical specification unless the associated errors are reported.

If two sites have transition frequencies within the driven bandwidth, the spectator site can be excited even when the applied field is spatially concentrated near the target. A selector must therefore be specified as a quantitative spatial or spectral window rather than only as a beam profile.

## Off-resonant excitation of a neighboring spectator

Let target cluster \(C\) have an encoded two-level transition at angular frequency \(\omega_C\), measured in radians per second. An encoded two-level transition connects the two states chosen to represent the cluster’s effective low-energy degree of freedom. Let a neighboring spectator cluster \(S\), which is not intended to be driven, have transition frequency \(\omega_S\). Their detuning, defined as the difference between the spectator and target angular frequencies, is

\[
\Delta_S=\omega_S-\omega_C.
\]

Apply a microwave field resonant with \(C\), and retain only the component of the drive that remains phase matched to the spin transition. Let the target Rabi angular frequency be \(\Omega\), also measured in radians per second. The Rabi frequency specifies the rate at which a resonant coherent drive rotates the target’s two-level state. A square pulse of duration

\[
t_\pi=\frac{\pi}{\Omega}
\]

rotates the target by \(\pi\). The dimensions are consistent because radians are dimensionless, so \((\mathrm{s}^{-1})^{-1}=\mathrm{s}\).

For an ideal two-level spectator initially in its lower state, the maximum off-resonant excitation probability under a constant drive is bounded by

\[
P_{S,\max}=\frac{\Omega^2}{\Omega^2+\Delta_S^2}
\approx\left(\frac{\Omega}{\Delta_S}\right)^2
\quad\text{when }|\Delta_S|\gg\Omega.
\]

This unintended excitation of the neighboring subsystem is crosstalk. Here, crosstalk is an operation error experienced by a spectator, not merely a property of the spatial beam width.

Suppose the design permits at most \(10^{-3}\) spectator excitation from this mechanism. The ideal bound then requires

\[
\frac{|\Delta_S|}{\Omega}\gtrsim\sqrt{10^3}\approx31.6.
\]

This ratio is dimensionless. It is an ideal requirement rather than a guaranteed device performance level.

Additional errors arise from pulse edges, extra energy levels, inhomogeneous broadening, calibration drift, and interactions. Inhomogeneous broadening is the spread of transition frequencies across nominally equivalent systems. Smooth pulses can reduce spectral sidelobes, which are unwanted frequency components outside the principal pulse bandwidth.

Such pulses generally require longer durations.

The cluster also contains unwanted excited states. Let \(\Delta_{\mathrm{leak}}\) denote the energy gap from the encoded doublet to the nearest leakage state, measured in joules. A leakage state is a state outside the intended encoded two-level subspace. Define the corresponding angular frequency as \(\omega_{\mathrm{leak}}=\Delta_{\mathrm{leak}}/\hbar\), measured in radians per second. Selective control requires a parameter window of the form

\[
\Gamma_C\ll\Omega\ll
\min\left(|\Delta_S|,\omega_{\mathrm{leak}}\right),
\]

where \(\Gamma_C\) is the linewidth of the target transition in radians per second. The linewidth quantifies the spectral width of that transition. The left inequality requires the pulse to act faster and to be spectrally clearer than the linewidth. The right inequalities suppress spectator excitation and leakage from the encoded subspace.

This interval defines the available selectivity bandwidth. If no value of \(\Omega\) satisfies the inequalities, pulse optimization cannot create a valid control window.

Faster gates require larger \(\Omega\), whereas spectral selectivity and leakage suppression require smaller \(\Omega\).

Longer control times increase exposure to decoherence, which is the loss of quantum phase coherence through interactions with uncontrolled degrees of freedom. All three inequalities are therefore necessary to define a viable gate.

## Charge-state, physical-spin, and encoded-state initialization

A defect cluster can require at least three distinct initialization layers.

**Charge state and structural configuration.** The intended optical and spin levels exist only when each defect occupies the required charge state and structural configuration.

Optical illumination can both prepare and disturb the charge state. Observing a bright optical spot does not establish that every member of a cluster has the correct charge state.

**Physical-spin state.** Spin-dependent intersystem crossing, which is a nonradiative transition between electronic manifolds with different spin character, permits nonresonant optical pumping of an NV electronic spin.

Resonant cryogenic protocols can provide more selective preparation [R074]. These initialization mechanisms depend on the physical platform.

A group-IV vacancy or a defect in silicon carbide (SiC) has a different level structure and different temperature requirements.

**Encoded cluster state.** Polarizing every constituent spin does not necessarily prepare a chosen eigenstate of an interacting cluster.

Preparation can require a sequence of physical-spin rotations, dissipative pumping, measurement and feedback, or an adiabatic ramp from a Hamiltonian whose state is easier to prepare. Dissipative pumping uses controlled coupling to an environment to favor a desired state. An adiabatic ramp changes the Hamiltonian slowly enough that the system can approximately follow an instantaneous eigenstate. The relevant preparation success probability is the overlap with the desired encoded state, not the fluorescence brightness of one constituent.

Initialization must also be assigned an allowed time within the experimental sequence. Resetting one constituent after preparation of a correlated many-body phase is a local dissipative operation.

Such a reset can create excitations and remove entanglement. A global reset performed before state preparation is therefore substantially less invasive than an arbitrary local reset during a run.

If every physical spin is polarized and no further preparation is performed, the cluster occupies a product state. That state can have almost no overlap with the encoded doublet. Optical brightness does not measure this overlap.

## Limits of optical spatial and spectral selection

Optical control can select a subsystem by position, transition frequency, polarization, or coupling to a photonic mode. Ordinary far-field focusing is diffraction limited, meaning that diffraction sets a minimum focal-spot size. Consequently, several defects separated by nanometres can lie within one optical spot. Super-resolution methods use a nonlinear optical response to reduce the effective point-spread function, which describes the spatial response of an imaging system to a point emitter.

[Experiment] Pezzagna and colleagues combined implantation with stimulated-emission-depletion microscopy to optically distinguish closely spaced NV centers [R235]. This result provides evidence for nanoscale optical selection. It does not establish simultaneous low-crosstalk control of a many-body cluster lattice.

Spectral optical addressing distinguishes defects through differences in their zero-phonon-line frequencies. The zero-phonon line is an optical transition that does not create or annihilate lattice vibrations. This approach can be effective at cryogenic temperature, where narrow resonant transitions permit spin-selective excitation and single-shot protocols.

Spectral addressing is also sensitive to spectral diffusion, strain variation, electric-field noise, and charge rearrangement. Spectral diffusion is the time-dependent fluctuation of a transition frequency. Nanophotonic fabrication can shift and broaden emitter transitions even while improving photon collection.

[Experiment] Integrated diamond nanophotonics has coupled multiple silicon-vacancy centers to optical modes, and two emitters in a cavity have shown photon-mediated interactions after spectral tuning [R086]; [R238]. Separately, a 2025 platform optically resolved and manipulated more than 100 NV centers in parallel while using shared coherent control [R239].

These results improve routing and multiplexing capabilities. They do not demonstrate a uniform, strongly interacting cluster lattice.

Differences between optical transition frequencies can label emitters for photon routing. The same differences can constitute undesirable disorder if the corresponding orbital states mediate spin interactions.

Tuning emitters into mutual optical resonance supports protocols that require indistinguishable photons. Tuning the emitters apart supports frequency-selective local addressing.

The operating schedule must specify which frequency configuration is required at each stage.

Resolving an optical line does not necessarily resolve a cluster. A cluster can have several transitions, and several defects can share one line. Assigning a line to a particular cluster therefore requires controlled perturbations.

## Global microwave fields and local frequency selection

Microwave wavelengths are much larger than typical defect separations, so a conventional antenna produces an approximately global magnetic field across the array. Individual selection must then be obtained from frequency differences, local near-field conductors, magnetic-field gradients, or pulse refocusing.

[Experiment] A microcoil-generated gradient of about
\(0.1\ \mathrm{G\,nm^{-1}}\)
frequency-encoded four NV sites separated by about \(100\ \mathrm{nm}\), enabling site-selective Rabi control; each site contained multiple NVs at smaller separations [R236]. Here \(\mathrm{G}\) denotes gauss, with \(1\ \mathrm{G}=10^{-4}\
\mathrm{T}\), and \(\mathrm{nm}\) denotes nanometre. These values and this geometry were obtained in a sensing-oriented device rather than a demonstrated strongly coupled topological patch.

A local static magnetic gradient changes Zeeman splittings. A local wire can generate a stronger near field, but it also introduces wiring density, dissipation, fabrication variation, and potentially magnetic noise. Frequency multiplexing, in which multiple sites are controlled through distinct frequency channels, reduces the required wire count. However, the minimum channel spacing must exceed the linewidths, drive bandwidth, frequency drift, and interaction-induced shifts.

For an encoded cluster, the microwave field couples through a physical operator projected into the encoded subspace. Let \(P_C\) denote the projector onto the encoded doublet, and let \(S_j^x\) denote the transverse spin operator of constituent \(j\). The encoded drive is governed by

\[
P_C\left(\sum_j g_j S_j^x\right)P_C,
\]

where \(g_j\) is the local field coupling and has units of energy if the drive Hamiltonian is written directly in joules. For a highly symmetric cluster under a spatially uniform field, the matrix element of this operator between the logical states can vanish.

A vanishing matrix element can protect the encoded states against uniform magnetic noise. The same property can prevent a uniform microwave field from implementing the desired gate. Local gradients or deliberately asymmetric couplings can restore a nonzero control matrix element.

These controls can also introduce additional noise and leakage channels.

Symmetry therefore has two relevant consequences: it can suppress an unwanted noise matrix element, and it can suppress the control matrix element required for an operation. Both consequences must be evaluated.

## Measurement back-action and readout volume

Room-temperature NV readout generally converts spin-dependent optical dynamics into different fluorescence statistics and estimates the spin state by averaging over many repetitions [R074]. Cryogenic resonant excitation can provide single-shot, projective electron-spin readout, as demonstrated for an NV center [R199]. A projective readout maps the system onto an eigenstate associated with the measured outcome. Spin-to-charge conversion maps spin information onto a longer-lived charge-state distinction and can improve the photon budget under suitable conditions [R237].

Each method has both a measurement volume and a back-action volume. The measurement volume is the region from which the detector obtains information, whereas the back-action volume is the region whose state can be disturbed by the measurement. Excitation light can optically pump neighboring defects, alter their charge states, and heat a nanostructure.

Photons emitted by several centers can be collected by the same detector. Spectral filters, confocal or super-resolution collection, optical cavities, and separate waveguides can reduce this overlap.

These methods do not eliminate measurement back-action.

Three distinct measurement claims must be separated.

- **Destructive local readout:** The target state can be lost, while effects on neighboring systems are quantitatively bounded.

- **Repeatable local readout:** The target can be measured repeatedly with a stated quantum-nondemolition fidelity. A quantum-nondemolition measurement is designed to preserve the measured observable so that it can be measured again.

- **Phase-preserving many-body readout:** The measurement extracts the intended observable without uncontrolled projection or excitation of the surrounding phase.

Strong single-defect precedents exist for the first claim. The third claim is an architectural requirement and remains [Proposal] for the defect-cluster topological system considered here. Conventional fluorescence readout of one spin is not necessarily a stabilizer measurement, where a stabilizer is an operator whose eigenvalue diagnoses an encoded state. It also does not directly measure a logical topological charge.

A bright photon stream does not by itself establish a nondemolition loop measurement. The measured operator and the measurement repeatability must be specified independently of the detector signal.

## Calibration quantities and scaling

A scalable calibration record must contain more than one resonance frequency. For each physical defect and encoded cluster, it should include:

- charge-state preparation and survival probabilities;

- spin initialization and readout confusion matrices;

- microwave and optical transition frequencies and linewidths;

- Rabi-rate response versus control amplitude;

- pulse phase and timing offsets;

- leakage spectra and encoded-state matrix elements;

- pairwise interaction shifts;

- optical and microwave crosstalk matrices; and

- drift versus time, temperature, and preceding illumination.

A readout confusion matrix gives the conditional probabilities of reporting each outcome for each prepared state. An unconstrained \(N\)-cluster crosstalk matrix has \(N(N-1)\) off-diagonal entries, so exhaustive measurement scales quadratically with the number of clusters. Experimentally verified locality and repeated device geometry can reduce this calibration burden.

Calibration nevertheless consumes experimental repetitions. Practical runs require sacrificial and interleaved reference measurements to track both common drift and local deviations.

A crosstalk value is not equivalent to a beam diameter. It must identify the affected subsystem, the unwanted observable or operation, the control sequence, the neighboring state, and the measurement conditions. Without all of these quantities, the reported value cannot be independently audited.

## Global and local control architectures

Global pulses require fewer control channels and can preserve lattice symmetries. They are suitable for polarization, echo protocols, and repeated bulk sequences. However, they cannot identify individual defects or correct local errors unless the Hamiltonian maps those errors onto collective signals.

Local controls provide additional routing and calibration flexibility. They also introduce disorder, wiring, heat, and crosstalk. A hybrid architecture combining global bulk operations with sparse local controls is [Proposal]; its specification does not establish that sparse controls are sufficient.

Applying the same programmed pulse to every cluster can digitally engineer or Floquet-engineer an effective evolution. Floquet engineering uses periodic driving to produce an effective time-averaged Hamiltonian. Such driven evolution does not demonstrate that the undriven material possesses an intrinsic topological phase.

Conversely, local optical readout of physical defect spins does not by itself measure a logical topological charge. A complete control specification must identify the physical operator, the encoded operator obtained after projection, and whether the phase exists only under active control.

## Competing requirements for uniformity and addressability

Let \(\sigma_\omega\) denote the root-mean-square spread of cluster transition angular frequencies when all addressing controls are off. Let \(J_{\mathrm{eff}}\) be a characteristic intended intercluster coupling energy and \(\Delta_{\mathrm{mb}}\) the many-body energy gap, both measured in joules. A rough uniformity requirement is

\[
\hbar\sigma_\omega\ll\min(|J_{\mathrm{eff}}|,\Delta_{\mathrm{mb}}).
\]

The left-hand side has units \((\mathrm{J\,s})(\mathrm{s}^{-1})=\mathrm{J}\), so the comparison is dimensionally valid. Spectral addressability instead requires neighboring transition-frequency separations to exceed the driven bandwidth and the relevant linewidths:

\[
|\omega_i-\omega_j|\gg\max(\Omega,\Gamma_i,\Gamma_j).
\]

Permanent random detunings generally cannot satisfy both inequalities when the transition energy directly contributes to the target Hamiltonian. Several possible resolutions exist, but each is conditional:

- apply a switchable local shift only during control and return the system to a uniform idle point;

- encode the logical transition so that its addressing frequency changes while the relevant coefficient of the static Hamiltonian does not;

- compensate known offsets in a rotating frame or with echo pulses, thereby accepting active rather than passive operation; or

- use spatial selection without introducing large spectral disorder.

Switching a control field is itself a nonideal process. Turning a local shift on and off can excite leakage states, accumulate unknown phases, or close the local many-body gap. A symmetry-protected encoded state can also be dark to the control operator, meaning that the relevant control matrix element vanishes.

The required test is whether a verified control path connects a uniform idle Hamiltonian to a selective operation and then returns the system to the same idle Hamiltonian with errors below the phase’s tolerance. Omitting the return step leaves the system governed by a different Hamiltonian from the one intended for investigation.

## Nine-stage prepare–probe–read schedule for one cluster

Consider a target cluster \(C\) within a dense region of spectator clusters. The following schedule describes a prepare–probe–read experiment. It does not assume that fluorescence can reset or measure \(C\) nondestructively during an established topological state.

| Stage | Control action | Required observation or bound | Phase status |
|---|---|---|---|
| 0. Sacrificial map | In separate calibration shots, sweep weak microwave and optical probes and fit \(\omega_C\), the linewidth, leakage transitions, neighboring detunings, and the readout confusion matrix. | Obtain stable confidence intervals over the planned run time. Measure the crosstalk matrix rather than inferring it from the beam size. | The target phase is not claimed. |
| 1. Global reset | Prepare the charge states and optically polarize all clusters with the platform-specific sequence. Where possible, herald or reject runs containing incorrect charge states. | Report the per-cluster and whole-patch initialization yields separately. | No many-body phase has yet been prepared. |
| 2. Encoded preparation | Apply calibrated global and local pulses, or an adiabatic cluster ramp, to place each cluster in its low-energy encoded state. | Bound leakage from \(C\) and representative spectators by spectroscopy. | The cluster encoding is prepared, but topology has not yet been established. |
| 3. Hamiltonian ramp | Turn on the intended intercluster Hamiltonian with a globally specified ramp. | Justify the ramp time using the measured finite-patch spectrum and coherence window. | A candidate many-body state is prepared. |
| 4. Select \(C\) | Apply a reversible local Stark, strain, or Zeeman shift \(\delta_{\mathrm{sel}}(t)\), or activate a calibrated gradient. Use a smooth temporal envelope. | During the pulse, require \(|\delta_{\mathrm{sel}}|\gg\Omega,\Gamma\) for spectators. After the pulse, require the residual shift to satisfy the uniformity budget. | The local Hamiltonian is perturbed, and induced excitations must be counted. |
| 5. Drive \(C\) | Apply a shaped encoded microwave pulse with area \(\int\Omega(t)dt=\pi\) for a \(\pi\) rotation, or use the smaller angle required by the probe. | Require \(\Omega\ll\omega_{\mathrm{leak}}\). Verify that the measured spectator error and target leakage satisfy the experiment’s error budget. | The operation produces an intentional local excitation or rotation but is not automatically a logical topological gate. |
| 6. Restore and refocus | Reverse the selection envelope and use a calibrated echo only if it preserves the intended interaction terms. Track the dynamical phase \(\phi_C=\int\delta_{\mathrm{sel}}(t)dt\). | Verify that residual frequency and interaction changes return within idle tolerances. Compensate \(\phi_C\) or include it in the model. | The candidate bulk Hamiltonian is restored. |
| 7. Evolve | Allow the patch to evolve for the protocol’s dwell time. Use global refocusing only when its effective Hamiltonian has been derived. | Keep the total schedule shorter than the relevant encoded coherence time, and bound control-induced heating and drift. | The target dynamics are under test. |
| 8. Read at endpoint | Stop or reverse the phase-preparation ramp if required. Then map the encoded observable onto a readable physical spin and perform optical or spin-to-charge readout. | Report the target confusion matrix and changes in neighboring states. Repeat the procedure over many shots. | Readout can be destructive, and no survival of the phase is claimed afterward. |

Each invasive operation occurs either before phase preparation or is explicitly identified as a perturbation. A claim of nondestructive control within the phase would require evidence that stages 4–6 neither close the local gap nor generate uncontrolled quasiparticles. A quasiparticle is an emergent excitation of the interacting many-body system. It would also require stage 8 to measure the intended encoded observable through an ancilla or an equivalent channel, where an ancilla is an auxiliary quantum subsystem used to mediate measurement. Such evidence does not yet exist for this architecture.

## Experimentally demonstrated capabilities and remaining integration requirements

The strongest available evidence is modular: individual capabilities have been demonstrated separately, but they have not yet been integrated into a single device. A nitrogen-vacancy (NV) center is a point defect in diamond consisting of a substitutional nitrogen atom adjacent to a vacant lattice site. Optical spin preparation initializes its spin state, and fluorescence readout infers that state from emitted light.

| Capability | Status through August 2026 | What it establishes | What it does not establish |
|---|---|---|---|
| Optical spin preparation and fluorescence readout of single NV centers [R074] | [Experiment] | A single defect can be initialized and observed. | Dense-cluster, phase-preserving reset/readout, in which initialization or measurement retains the relevant quantum phase relations. |
| Nanoscale optical distinction of implanted NVs [R235] | [Experiment] | Far-field super-resolution, meaning optical resolution beyond the ordinary diffraction limit, can distinguish selected centers. | Parallel control with low measurement or control back-action at the spacing required for a strongly interacting lattice. |
| Four-site gradient/frequency encoding [R236] | [Experiment] | A field gradient can assign site-dependent resonance frequencies, enabling microwave site selection and coherent control in a small NV array. | Uniform interacting clusters or topological dynamics, meaning dynamics governed by the system’s intended topological many-body structure. |
| Entanglement of two separated NV electronic spins [R080] | [Experiment] | Selective control can coexist with a measured two-spin interaction in a small device. Entanglement is a nonseparable quantum correlation between the two spins. | Scaling to a dense, calibrated many-body patch. |
| Cryogenic single-shot NV readout and spin-to-charge conversion [R199]; [R237] | [Experiment] | Measurement primitives stronger than averaged fluorescence exist. Single-shot readout determines a state from one experimental realization, while spin-to-charge conversion maps spin information onto a charge state before detection. | Neighbor-safe logical topological measurement. |
| Ten-qubit register around one NV [R119] | [Experiment] | Sophisticated calibration and control have been demonstrated for a local electron–nuclear register, which combines an electronic spin with nearby nuclear spins. | A lattice of equivalent defect clusters with intercluster topology. |
| Multi-emitter nanophotonics [R086]; [R238] | [Experiment] | Optical routing, spectral tuning, and integration of multiple emitters into nanoscale photonic structures are advancing. | Intrinsic topological order in a defect array. |
| Parallel control and readout of more than 100 resolved NVs [R239] | [Experiment] | Spatially selective optical manipulation and shared coherent control scale beyond a few sites. | Independent local microwave control or a strongly interacting uniform lattice. |

The absence of an integrated demonstration is consequential. Methods optimized for isolated emitters may separate defects by distances too large for strong direct coupling. Conversely, dense defect creation can broaden spectral lines and make the assignment of observed transitions to specific defects or clusters ambiguous.

Frequency gradients can improve site selection, but they also split sites that are intended to be identical. Consequently, fabrication tolerances, interaction strengths, optical performance, microwave-control constraints, thermal requirements, and calibration resources must be modeled jointly rather than optimized independently. The target Hamiltonian—the operator specifying the system’s energies and interactions—must remain compatible with all of these constraints.

## Common interpretive and design errors

- **A spectrally resolved line does not imply a resolved cluster.** Several transitions from one cluster may be visible, and several defects may contribute to the same spectral line. Reliable assignment therefore requires controlled perturbations that test how each candidate transition responds.

- **Disorder is not a reliable addressing mechanism.** Accidental site-dependent frequency shifts can label individual sites, but those labels drift and modify the target Hamiltonian.

- **Optical spot size does not quantify crosstalk.** Crosstalk is the unintended effect of a control operation on a neighboring subsystem. It must be measured through unwanted rotations, phase shifts, charge-state changes, or Hamiltonian shifts on neighboring sites.

- **Optical readout is not necessarily nondestructive.** A readout protocol must specify both its repeatability and the observable being measured. Nondestructive measurement requires that repeated measurements preserve the relevant state or observable to the stated accuracy.

- **Control of physical spins does not imply control of encoded states.** The applied drive must be projected into the logical doublet, meaning the two-dimensional encoded subspace used as a logical qubit, and leakage out of that subspace must be bounded.

- **Compensation constitutes active operation rather than passive protection.** Continuous echo sequences or site-specific corrections may synthesize useful dynamics, but their success does not demonstrate that the device is intrinsically protected without active intervention.

- **Symmetry breaking can remove protection.** A gradient that enables addressing may also lift a required degeneracy or eliminate cancellation of uniform noise. A complete gate protocol must therefore include restoration of the symmetric idle point after the addressed operation.

## Analytical consistency checks

- **Permanent site-dependent frequencies generally cannot provide both selective addressing and a uniform Hamiltonian.**

  Selective addressing requires
  \[
  |\omega_i-\omega_j|\gg\max(\Omega,\Gamma_i,\Gamma_j).
  \]
  Here, \(\omega_i\) and \(\omega_j\) are the transition angular frequencies of sites \(i\) and \(j\), \(\Omega\) is the drive’s Rabi frequency, and \(\Gamma_i\) and \(\Gamma_j\) are the corresponding linewidths. This inequality states that the frequency separation must greatly exceed both the drive scale and the spectral widths.

  Uniform many-body physics may instead require
  \[
  \hbar\sigma_\omega\ll\min(|J_{\mathrm{eff}}|,\Delta_{\mathrm{mb}}).
  \]
  Here, \(\hbar\) is the reduced Planck constant, \(\sigma_\omega\) characterizes the spread of site frequencies, \(J_{\mathrm{eff}}\) is the effective interaction energy, and \(\Delta_{\mathrm{mb}}\) is the many-body energy gap. This condition requires disorder energy to remain much smaller than the relevant interaction and gap scales. Permanent random detunings generally cannot satisfy both requirements when the transition energy appears in the target Hamiltonian.

- **The ideal two-level leakage bound \(P_{S,\max}\le10^{-3}\) requires \(|\Delta_S|/\Omega\gtrsim31.6\).**

  Let \(P_{S,\max}\) denote the maximum population transferred to a spectator transition, and let \(\Delta_S\) be that transition’s detuning from the applied drive. Under the far-detuned assumption \(|\Delta_S|\gg\Omega\),
  \[
  P_{S,\max}\approx(\Omega/\Delta_S)^2.
  \]
  Setting the right-hand side to \(10^{-3}\) and inverting gives
  \[
  |\Delta_S|/\Omega\gtrsim\sqrt{10^3}\approx31.6.
  \]
  This result applies to the stated ideal two-level bound.

- **Initialization of every physical spin does not necessarily initialize the encoded state.**

  The encoded state of an interacting cluster is a particular collective eigenstate or subspace of the cluster Hamiltonian. A product state in which the constituent spins are individually polarized may have poor overlap with that collective encoded state.

- **A crosstalk specification requires more than beam geometry.**

  A quantitative crosstalk value must identify the victim subsystem, the unwanted observable or operation, the applied control sequence, the state of the neighboring subsystem, and the measurement conditions. Beam geometry alone does not determine the resulting operation error.

- **A uniform field may fail to drive the logical transition of a highly symmetric encoded cluster.**

  Let \(P_C\) be the projector onto the encoded cluster subspace, \(g_j\) the coupling of physical spin \(j\) to the drive, and \(S_j^x\) the \(x\)-component spin operator for that site. The drive restricted to the encoded subspace is
  \[
  P_C(\sum_j g_j S_j^x)P_C.
  \]
  If all \(g_j\) are equal and the logical states transform oppositely under a symmetry that changes the sign of the summed operator, the logical transition matrix element vanishes. The same symmetry that protects the encoded states from uniform noise can therefore make the logical transition inaccessible to a uniform microwave field.

- **Driving one encoded cluster does not generally implement a topological logical gate.**

  A local operator may create quasiparticles, which are collective excitations of the many-body system, or may probe a local degree of freedom. A logical topological operation instead requires the appropriate nonlocal or braided process, together with evidence that the topological phase survives the operation.

Control operations impose physical costs and constraints. Initialization must establish the charge state, the physical-spin state, and the encoded-cluster state as distinct requirements.

A selective drive requires a nonempty bandwidth interval between the linewidth scale and the nearest spectator-transition or leakage scale. Crosstalk is an error in the implemented operation, not a geometric property inferred solely from an image of the control beam.

Optical, microwave, spectral, and local selection mechanisms all perturb the device. Global protocols can preserve symmetry and reduce wiring requirements, but they do not provide arbitrary routing.

Local protocols provide greater routing flexibility while introducing additional disorder and calibration overhead. Measurement of a local physical spin does not constitute logical topological readout.

## Sources

- [R074] M. W. Doherty, N. B. Manson, P. Delaney, F. Jelezko, J.
Wrachtrup, and L. C. L. Hollenberg, “The nitrogen-vacancy colour centre
in diamond,” Physics Reports 528, 1–45 (2013).
DOI: [10.1016/j.physrep.2013.02.001](https://doi.org/10.1016/j.physrep.2013.02.001);
arXiv: [1302.3288](https://arxiv.org/abs/1302.3288).

- [R235] S. Pezzagna, D. Wildanger, P. Mazarov et al.,
“Nanoscale Engineering and Optical Addressing of Single Spins in
Diamond,” Small 6, 2117–2121 (2010). DOI: [10.1002/smll.201000902](https://doi.org/10.1002/smll.201000902).

- [R236] H. Zhang, K. Arai, C. Belthangady, J.-C. Jaskula, and R. L.
Walsworth, “Selective addressing of solid-state spins at the nanoscale
via magnetic resonance frequency encoding,” npj Quantum
Information 3, 31 (2017). DOI: [10.1038/s41534-017-0033-3](https://doi.org/10.1038/s41534-017-0033-3);
arXiv: [1701.01154](https://arxiv.org/abs/1701.01154).

- [R080] F. Dolde, I. Jakobi, B. Naydenov et al.,
“Room-temperature entanglement between single defect spins in diamond,”
Nature Physics 9, 139–143 (2013). DOI: [10.1038/nphys2545](https://doi.org/10.1038/nphys2545); arXiv:
[1212.2804](https://arxiv.org/abs/1212.2804).

- [R199] L. Robledo, L. Childress, H. Bernien et al.,
“High-fidelity projective read-out of a solid-state spin quantum
register,” Nature 477, 574–578 (2011). DOI: [10.1038/nature10401](https://doi.org/10.1038/nature10401);
arXiv: [1108.1196](https://arxiv.org/abs/1108.1196).

- [R237] B. J. Shields, Q. P. Unterreithmeier, N. P. de Leon, H. Park,
and M. D. Lukin, “Efficient Readout of a Single Spin State in Diamond
via Spin-to-Charge Conversion,” Physical Review Letters
114, 136402 (2015). DOI: [10.1103/PhysRevLett.114.136402](https://doi.org/10.1103/PhysRevLett.114.136402);
arXiv: [1410.0370](https://arxiv.org/abs/1410.0370).

- [R119] C. E. Bradley, J. Randall, M. H. Abobeih et al., “A
Ten-Qubit Solid-State Spin Register with Quantum Memory up to One
Minute,” Physical Review X 9, 031045 (2019).
DOI: [10.1103/PhysRevX.9.031045](https://doi.org/10.1103/PhysRevX.9.031045);
arXiv: [1905.02094](https://arxiv.org/abs/1905.02094).

- [R086] R. E. Evans, A. Sipahigil, D. D. Sukachev et al.,
“Photon-mediated interactions between quantum emitters in a diamond
nanocavity,” Science 362, 662–665 (2018). DOI:
[10.1126/science.aau4691](https://doi.org/10.1126/science.aau4691);
arXiv: [1807.04265](https://arxiv.org/abs/1807.04265).

- [R238] A. Sipahigil, R. E. Evans, D. D. Sukachev et al.,
“An integrated diamond nanophotonics platform for quantum-optical
networks,” Science 354, 847–850 (2016). DOI:
[10.1126/science.aah6875](https://doi.org/10.1126/science.aah6875);
arXiv: [1608.05147](https://arxiv.org/abs/1608.05147).

- [R239] M. Cambria, S. Chand, C. M. Reiter, and S. Kolkowitz,
“Scalable Parallel Measurement of Individual Nitrogen-Vacancy Centers,”
Physical Review X 15, 031015 (2025). DOI: [10.1103/jdzq-jbfz](https://doi.org/10.1103/jdzq-jbfz); arXiv:
[2408.11715](https://arxiv.org/abs/2408.11715).

---
