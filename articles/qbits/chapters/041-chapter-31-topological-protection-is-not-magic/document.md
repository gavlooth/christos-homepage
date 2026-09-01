# Chapter 31 — Limitations of topological protection

Consider a single Pauli error that flips one edge of a lattice. The two stabilizer checks incident on that edge change sign, producing two anyonic excitations separated by one lattice spacing.

This event is not yet a logical failure. Subsequent local operations can move the pair together and annihilate it, restoring every local syndrome check to its original value while leaving the encoded information unchanged.

However, the excitations can instead follow a path that winds around a noncontractible cycle of the torus before they meet and annihilate. The final syndrome is again trivial, but the winding path implements a logical operation and changes the encoded information.

Thus, one local fault does not necessarily cause a logical fault. Topological encoding requires a logical error to arise from an extended history of local events, but it does not make such a history impossible. Topological protection therefore does not imply indefinite preservation.

Four distinct concepts must be kept separate: an energy gap, a decoder, an error threshold, and exact error-free operation. This chapter follows the evolution of a local fault into a possible logical error and identifies the role of each concept.

## Local errors and topologically nontrivial paths

A single local event contains no global winding information. By contrast, a continuous path around a periodic direction is global: inspection of any short segment does not determine whether the full path eventually closes around that direction.

A topological code has the same distinction. A local operator generally creates nearby excitations, and additional local operators can move them.

If the excitations meet and annihilate, every local syndrome check can return to its initial value. Nevertheless, the complete trajectory may wind around a hole or handle of the system.

Such winding acts nontrivially on the logical state.

The central limitation is therefore that topology requires a logical fault to have an extended history; it does not make that history impossible. Locality provides code distance, defined as the minimum weight of a physical operator that implements a nontrivial logical operation.

An energy gap provides a Boltzmann suppression of excitation creation at finite temperature. It does not, by itself, provide an energy barrier that grows with system size and inhibits excitation motion.

The corresponding spacetime description is particularly useful. A data error produces a spatial segment in an error history.

Persistence of that error extends the segment through time. An incorrect syndrome measurement produces a time-like segment.

A decoder is a computational procedure that infers which collection of spacetime segments most plausibly produced the observed syndrome endpoints. A logical failure occurs when the inferred error history and the actual error history differ by a topologically nontrivial loop.

A trivial final syndrome does not establish that no error occurred. It is compatible both with a short, contractible path and with a path that winds around the system.

## Logical error chain in the toric code

Consider the toric code on a square lattice with periodic boundary conditions in both spatial directions. Place one physical qubit on each edge. Define the stabilizer operators

\[
A_v=\prod_{e\ni v}X_e,
\qquad
B_p=\prod_{e\in \partial p}Z_e,
\]

where \(v\) labels a vertex, \(p\) labels a plaquette, \(e\) labels an edge, and \(X_e\) and \(Z_e\) are Pauli operators acting on the qubit at edge \(e\). The ground space is the simultaneous \(+1\) eigenspace of every vertex operator \(A_v\) and plaquette operator \(B_p\). A measurement result of \(-1\) is a syndrome defect, interpreted in the ideal model as an anyonic excitation [R030].

Take a periodic row containing four horizontal edges, \(e_1,e_2,e_3,e_4\). Apply consecutive \(Z\) errors defined by

\[
E_j=Z_{e_1}Z_{e_2}\cdots Z_{e_j},\qquad j=1,2,3,4.
\]

A single operator \(Z_e\) anticommutes with the two vertex checks at the endpoints of \(e\). Therefore, \(E_1\) creates two violated vertex checks.

Multiplication by \(Z_{e_2}\) restores the shared vertex check and violates the next vertex check. This operation moves one endpoint of the error chain. The same process occurs when \(Z_{e_3}\) is applied.

After application of \(Z_{e_4}\), the moving endpoint returns to the first endpoint, and both syndrome defects disappear.

| Step | Physical action | Visible syndrome | Topological result |
|---|---|---|---|
| 0 | identity | none | identity |
| 1 | \(Z_{e_1}\) | two endpoints | pair created |
| 2 | \(Z_{e_1}Z_{e_2}\) | two endpoints | one endpoint moved |
| 3 | \(Z_{e_1}Z_{e_2}Z_{e_3}\) | two endpoints | one endpoint moved again |
| 4 | \(\bar Z=\prod_{i=1}^{4}Z_{e_i}\) | none | noncontractible logical loop |

The operator in the last row is not the identity. To establish this, choose a noncontractible logical \(X\) loop \(\bar X\) that crosses the row once. At the single crossing, \(XZ=-ZX\), whereas all other factors commute. Consequently,

\[
\bar X\bar Z=-\bar Z\bar X.
\]

An operator that anticommutes with a logical observable changes the encoded state. Although the final syndrome is empty, the logical qubit has undergone the logical operation \(\bar Z\). This sequence is the basic local-error-chain mechanism [R030]; [R141].

For an \(L\times L\) periodic lattice, the shortest noncontractible loop contains \(L\) edges. The code distance is therefore \(d=L\), and ideal decoding can guarantee correction of at most \(\lfloor(d-1)/2\rfloor\) adversarial Pauli errors.

This correction bound is a worst-case combinatorial guarantee. A threshold, discussed later in this chapter, is a different statement: it concerns the asymptotic behavior of a probability distribution over faults under a specified decoder.

The edge spins in this construction may represent physical qubits, cluster-encoded pseudospins, or digitally emulated variables. The algebra of the error chain is unchanged among these implementations.

Their physical protection is not equivalent. A simulator can implement the code Hamiltonian while the underlying hardware remains protected only by conventional active error correction.

An analog material provides passive topological protection only if its own low-energy spectrum, excitations, and response to local perturbations realize the required structure.

## Energy gaps, excitation creation, and excitation motion

A Hamiltonian can suppress some errors without syndrome measurement and feedback. This mechanism is called passive suppression because it arises from the device spectrum rather than from a decoder or recovery pulse.

Two mechanisms are relevant.

First, a many-body energy gap makes the creation of excitations energetically costly. Let \(\Delta_a\) denote the energy required to create one well-separated anyon, measured in joules (J), and let \(T\) denote absolute temperature, measured in kelvin (K). In the ideal dilute model, creation of an anyon pair costs approximately \(2\Delta_a\). Its thermal weight contains the factor

\[
\exp\!\left(-\frac{2\Delta_a}{k_{\mathrm B}T}\right),
\]

where \(k_{\mathrm B}\) is Boltzmann’s constant in J/K. The exponent is dimensionless because J divided by \((\mathrm{J/K})\mathrm{K}\) is one.

Excitation creation is therefore suppressed when \(k_{\mathrm B}T\ll\Delta_a\) [R169]. This suppression applies to creation, not necessarily to subsequent motion.

Second, nonlocal encoding makes a weak local perturbation ineffective at distinguishing logical sectors. In suitable gapped, topologically ordered Hamiltonians, sufficiently weak local perturbations preserve the phase, and the finite-size splitting between logical states can scale schematically as

\[
\delta E(L)\sim E_0 e^{-L/\xi}.
\]

Here \(\delta E\) and \(E_0\) are energies, \(L\) is a linear system size, and \(\xi\) is a correlation length expressed in the same length unit. [Theory] This stability requires locality, a spectral gap, the relevant topological-order assumptions, and perturbations weak enough that the system remains in the same phase [R142]. It is not a general theorem for an arbitrary fabricated, driven, open array.

Passive suppression neither infers an error chain nor applies a recovery operation. Once an anyon exists, moving it may require little or no additional energy.

For example, the toric-code string described above has no more than two endpoints at any stage. Its maximum energy above the ground space therefore remains constant as \(L\) increases. Under the assumptions of the Bravyi–Terhal no-go theorem, two-dimensional local stabilizer Hamiltonians consequently lack a macroscopic energy barrier [R168].

Thermal analyses of the ideal two-dimensional Kitaev model similarly show that topological order of the ground state alone does not make the encoded information a self-correcting memory [R143]. [Theory] The theorem applies specifically to two-dimensional stabilizer-code Hamiltonians with local interactions and does not establish the same conclusion for every non-Abelian phase.

The relevant physical criterion is therefore the energy barrier along an error path, which must be calculated rather than inferred from the existence of a gap.

## Syndrome extraction and decoding

The four-error loop returns every stabilizer check to its initial value. Detecting and correcting the error before the loop closes requires syndrome measurement, inference of an error history, and application or tracking of a recovery operation.

A decoder is the algorithm or circuit that performs this inference. The hardware does not intrinsically determine which syndrome endpoints originated from the same error process; the decoder must select a candidate history.

Active error correction measures local checks, repeats measurements when those measurements are noisy, decodes the resulting spacetime syndrome, and either applies or classically tracks a recovery. Its operational requirements are:

- extraction of sufficient syndrome information without uncontrolled backaction;

- assignment of time stamps to repeated measurement rounds;

- use of a decoder adequately matched to the actual noise process;

- completion of recovery before accumulated errors exceed the decoder’s capacity.

Active correction can remove thermally created anyon pairs before their worldlines become topologically nontrivial. Comparison of successive measurement rounds can also distinguish a transient detector fault from a persistent data fault.

These operations are not passive and require explicit measurement and computation.

Without a decoder, the four-error loop illustrates the failure mechanism directly: after the loop closes, the syndrome is trivial even though the logical observable has changed sign.

## Conditional meaning of a fault-tolerance threshold

A fault-tolerance threshold is a conditional property of a specified model. It marks a transition between a regime in which increasing code size improves logical performance and one in which increasing code size can worsen it.

More precisely, for a family of codes with increasing distance and for a specified fault model, syndrome circuit, decoder, and operation schedule, there may be a critical physical-fault parameter \(p_{\mathrm{th}}\) such that, when \(p<p_{\mathrm{th}}\), increasing the distance reduces the logical error per operation [R141]. This statement does not imply that every reported component “fidelity” can be compared with a universal percentage.

In the canonical independent stochastic model studied by Dennis and collaborators, the toric/surface-code transition is about \(10.9\%\) when syndrome measurements are perfect. In a phenomenological model with repeated noisy measurements and equal data and measurement error rates, the corresponding value is about \(2.9\%\) [R141]. [Theory/Numerics] These values characterize those specific models; they are not general acceptable-error specifications for a defect device. Leakage, correlations, geometry, boundaries, decoder choice, and circuit design can all change the threshold.

A threshold statement must specify:

- what constitutes a circuit location and what event constitutes a fault;

- whether faults are independent, local stochastic, biased, leaking, or correlated;

- whether state preparation and measurement are noisy;

- whether qubits can disappear or change charge state;

- the decoder and its latency;

- the logical task and error metric.

An energy-scale condition such as \(\Delta_{\mathrm{topo}}>k_{\mathrm B}T\) is a gap margin, not an error-correction threshold. Similarly, the adiabatic condition for a braid is not a threshold theorem. These terms describe distinct physical and computational requirements.

## Exact error-free operation

Error-free operation means that the logical channel is exactly equal to the intended logical channel. It is a mathematical identity rather than a qualitative description of a small error probability.

An ideal commuting-projector model at zero temperature, initialized exactly in its ground space and acted on by exact operators, can have zero error by assumption. A finite experimental run instead has a nonzero logical-error probability, even when that probability is very small.

Operation below threshold means that errors can be suppressed by increasing resources; it does not mean zero error. Passive protection means reduced sensitivity to selected local faults; it also does not mean zero error.

The four concepts can therefore be distinguished as follows:

- An energy gap imposes an energetic cost on excitation creation. It need not impose a cost on excitation motion.

- A decoder infers an error history from syndrome information and attempts to reverse or compensate for it.

- A threshold is a transition defined for a specified noise model, circuit, and decoder.

- Error-free operation means exact realization of the intended logical channel.

Topological protection is therefore not indefinite preservation. The remaining sections describe mechanisms by which a local fault can still produce a logical error.

## Thermal creation and subsequent diffusion

Thermal errors involve two distinct stages. Excitation creation incurs an energy cost, whereas subsequent diffusion may not.

Let \(a\) be the lattice spacing in metres, and suppose that the dilute equilibrium anyon density per site scales as \(n_a\sim e^{-\Delta_a/(k_{\mathrm B}T)}\). In two dimensions, the characteristic separation between anyons then scales as

\[
\ell_a\sim \frac{a}{\sqrt{n_a}}
\sim a\,e^{\Delta_a/(2k_{\mathrm B}T)}.
\]

Both \(\ell_a\) and \(a\) have units of metres, and the exponential is dimensionless. [Theory] This estimate neglects species degeneracy, interactions, boundaries, nonequilibrium baths, and kinetic bottlenecks. It nevertheless demonstrates that system size and mean thermal separation are distinct length scales [R169].

For a hypothetical anyon energy \(\Delta_a/h=10\,\mathrm{GHz}\) at \(T=0.10\,\mathrm K\), use \(k_{\mathrm B}T/h\approx2.08\,\mathrm{GHz}\). It follows that \(\Delta_a/(k_{\mathrm B}T)\approx4.8\). The ideal single-anyon Boltzmann factor is therefore about \(8\times10^{-3}\), whereas the pair factor is about \(7\times10^{-5}\).

This calculation is illustrative rather than a prediction for a defect array. A quantitative forecast also requires the attempt rate, the number of possible creation sites, the bath spectrum, and the actual many-body gap. For example, ten thousand opportunities can make a small per-site thermal weight operationally significant.

After creation, an anyon can undergo a random walk, move under disorder gradients, or be displaced by control crosstalk. A boundary can absorb one member of a pair and leave a topological charge whose preceding history is difficult to reconstruct.

For non-Abelian anyons, diffusion has consequences beyond classical displacement: unrecorded exchanges and fusion events act on the fusion space, which is the Hilbert space associated with the possible collective fusion channels [R015]. Active syndrome extraction and decoding must operate faster than this kinetic process, rather than addressing only the initial Boltzmann factor.

Consequently, the condition that the temperature is below the gap addresses only excitation creation. The Boltzmann factor does not localize excitations after they have formed.

## Competing effects of increasing system size

A physical code patch is finite. Its behavior depends on at least three competing lengths: its linear size \(L\), the correlation length \(\xi\), and the characteristic separation or travel length of unwanted quasiparticles. Increasing \(L/\xi\) can exponentially suppress virtual tunnelling between boundaries or around a handle.

The corresponding coherent phase rate is \(\delta E/\hbar\), because energy divided by \(\hbar\) has units s\(^{-1}\). However, increasing area also creates more possible sites for thermal-pair production and introduces more hardware components that can fail. Increasing size therefore improves one protection mechanism while degrading another.

Disorder cannot be characterized by a single scalar parameter. Weak, bounded, static local perturbations may deform a stable topological phase without destroying it [R142].

[Theory] Fabrication disorder can nevertheless produce spatial variations in local gaps, couplings, cluster projectors, and measurement responses. A rare region with a small local gap can become a preferred site for thermal excitation.

A sign error or a missing interaction can alter the effective Hamiltonian rather than merely perturb it. Sufficiently strong disorder can close the mobility gap or spectral gap and drive the system out of the target phase.

Localization of unwanted quasiparticles can reduce diffusion and improve memory performance in some models [R169]. [Theory/Numerics] This benefit is not unconditional.

The same localization can obstruct intended braids, trap poisoning quasiparticles near computational anyons, broaden spectroscopic features, and invalidate a decoder based on homogeneous quasiparticle motion. A protection claim must therefore specify the disorder distribution, including its tails, and model both equilibrium behavior and dynamics.

## Quasiparticle poisoning and leakage

Quasiparticle poisoning and leakage can both take the device outside its intended computational description, but they are physically distinct processes.

Quasiparticle poisoning occurs when an uncontrolled topological charge enters, leaves, or changes the computational region. The resulting fault is an additional anyon rather than a small control-pulse error.

Thermal creation is one source of poisoning. Other sources include injection from an edge, a reservoir, a driven hotspot, or a nonequilibrium defect. In a non-Abelian device, a stray anyon can fuse with a computational anyon and change its fusion channel.

Subsequent nominal braids then implement an incorrect unitary [R015]. Local charge measurements may not reveal this error until information has already escaped from the intended computational space.

Leakage occurs when a physical constituent leaves the two-level subspace used by the code. The affected site can no longer be modeled as the qubit assumed by the decoder.

For a defect cluster, let \(P\) be the projector onto the intended low-energy doublet, and let \(Q=I-P\) project onto all other cluster states. An ordinary encoded error has support within \(P\).

A leakage event transfers population into \(Q\). The projected Pauli model then ceases to describe the site, and coupling to other sites can propagate errors with amplitudes absent from the decoder’s noise model.

Topological distance does not suppress an individual leakage event solely because the intended code is topological. Active leakage-reduction procedures instead remove, reset, swap, or explicitly detect leaked population at regular intervals.

Surface-code studies show that untreated leakage can propagate through syndrome-extraction circuits and requires dedicated mitigation [R220]. [Theory/Numerics] This result concerns an active code architecture and does not prove that the same mitigation protocol applies to an interacting defect phase.

In an analog cluster array, resetting one cluster can itself abruptly change local couplings and create anyons.

Charge-state switching can have several simultaneous effects. It can constitute leakage from the cluster doublet, remove or alter a coupling in the many-body Hamiltonian, and cause optical-readout failure. Representing the entire event as one Pauli error can therefore underestimate its effect.

## Initialization, control, and readout errors

Topological protection applies after the system has entered the intended phase and logical sector. Cooling below the gap does not guarantee preparation of a known ground state. A finite system can retain trapped quasiparticles, freeze into an incorrect flux sector, or traverse a small gap nonadiabatically. Initialization therefore requires a verified preparation procedure, such as cooling, pumping, syndrome measurement, boundary-charge removal, or a combination of these methods, together with a measurement of total topological charge.

Control operations must satisfy a finite operating window. A pulse with spectral weight near a leakage transition can populate the \(Q\) subspace.

A local control field sufficiently strong to close the gap along a path can nucleate excitations. An intended adiabatic braid must proceed slowly relative to the relevant inverse-gap timescales, but a slower operation increases exposure to poisoning, drift, and dephasing.

The approximate timescale \(\hbar/\Delta\) has units of seconds because \((\mathrm{J\,s})/\mathrm J=\mathrm s\). It provides only a necessary scale, not a complete adiabatic bound. A complete bound also depends on transition matrix elements and the minimum gap encountered along the path [R015]. Topology can make the ideal braid unitary insensitive to smooth geometric deformations.

It does not make arbitrary pulse errors, unintended braids, or dynamical phases harmless.

Readout has two distinct levels. Local syndrome readout determines where excitations are present.

Logical readout determines a nonlocal loop value, boundary parity, or fusion outcome. A local detector can exhibit assignment error, measurement backaction, crosstalk, and dead time.

Repeating a noisy stabilizer measurement converts decoding into a three-dimensional spacetime inference problem; repetition does not make the measurement exact [R141]. The interpretation of a readout result also requires a confidence model conditioned on leakage and charge state.

Destructive optical readout may be sufficient at the end of a computation while remaining unsuitable for repeated error correction.

A useful experimental report should therefore provide separate confusion matrices for local checks and logical readout, statistics conditioned on leakage, measurements of backaction, the correction-cycle duration, and decoder latency. Reporting only the highest single-defect readout fidelity does not characterize the full many-body protocol.

## Spatially and temporally correlated faults

Threshold estimates often rely strongly on locality assumptions. One formal local-stochastic condition requires that the probability that every location in a set \(S\) is faulty be bounded by a quantity that decreases exponentially with \(|S|\). Correlations may be present, but high-weight fault events must become rapidly less probable.

A global magnetic transient, laser-intensity excursion, strain wave, shared microwave phase slip, or calibration error can affect many clusters simultaneously. If one physical event creates a length-\(L\) error string with probability proportional to a single-event rate, rather than to that rate raised to the \(L\)th power, increasing code distance may provide little improvement.

Long temporal correlations can likewise cause repeated syndrome rounds to agree because the same persistent fault affects each round. Studies of correlated environments show that fault-tolerance behavior depends on the spatial and temporal decay of correlations, rather than on a single per-qubit error probability [R221].

[Theory]

Correlations do not necessarily eliminate fault tolerance. Short-range and sufficiently weak correlations can remain consistent with threshold results under appropriate assumptions.

The required analysis is to measure or bound the correlation function, map the correlated noise through the cluster projector, and incorporate the resulting model into decoding and logical-level simulations. Reducing a covariance matrix to one averaged “error rate” removes spatial and temporal information that is essential to evaluating topological protection.

## Current experimental capabilities

For a defect-cluster proposal, where a defect cluster is a local collection of engineered defects used to encode a qubit, the protection stack must be demonstrated sequentially. The protection stack is the set of distinct physical and computational mechanisms required to obtain and maintain a reliable logical qubit. Evidence for one layer does not by itself establish the properties associated with later layers.

| Layer | Required evidence | What it does not establish |
|---|---|---|
| Cluster encoding | An isolated doublet, meaning two spectrally separated states used as the encoded subspace; a measured leakage gap, meaning the energy separation from states outside that subspace; and projected controls that act within the encoded subspace | Topological order |
| Many-body phase | A many-body gap, correlation measurements, and evidence for topological sectors or anyons, where anyons are quasiparticle excitations with topologically nontrivial exchange or fusion properties | Useful logical lifetime |
| Passive suppression | Scaling of error suppression against local perturbations, temperature, and system size | Active correction or zero error |
| Syndrome system | Repeated check or fusion measurements, where a syndrome is the set of measurement outcomes used to diagnose errors, with measurement backaction characterized | Operation below threshold |
| Active logical memory | Logical-error scaling versus code distance and measurement rounds under experimentally measured noise | Universal protected computation |
| Braiding/control | The correct process on the fusion space, meaning the state space associated with the possible fusion outcomes of anyons, together with bounds on poisoning and leakage | Error-free gates |

[Proposal] A fabricated defect array will contain placement disorder, missing or incorrect charge states, cluster leakage, local drives, and imperfect optical or microwave readout. These effects are absent from the ideal Hamiltonian unless they are included explicitly.

Exact diagonalization, which numerically computes the eigenvalues and eigenstates of a finite Hamiltonian, can therefore establish a property of a clean model patch but cannot establish passive protection under laboratory conditions. Similarly, successful decoding of synthetically injected, independent Pauli errors provides a benchmark for the decoder. It does not demonstrate that the physical noise is independent or describable by Pauli operators.

The decisive test is a scaling experiment. Such an experiment varies a physically meaningful code distance or quasiparticle separation while keeping the relevant physical conditions fixed, characterizes the microscopic noise, and measures the resulting change in logical-error rate.

Repeating the measurement as a function of temperature distinguishes thermally activated errors from control-limited error floors. Repeating it as a function of syndrome cadence, the rate at which syndrome measurements are performed, distinguishes passive suppression from the additional benefit of active correction. If increasing the sample size introduces additional poisoning sources, where poisoning is an uncontrolled change in topological charge within the computational region, the scaling data will reveal that effect.

A scaling result remains scientifically informative even when the logical-error rate worsens with increasing system size or distance.

## Common analytical errors

- The inference that exponentially small ground-state splitting implies a self-correcting memory is incorrect. Small virtual splitting suppresses coherent mixing between topological sectors. It does not suppress the distinct processes of thermal excitation creation and subsequent diffusion.

- The inference that no anyons exist when the temperature is below the gap is incorrect. Boltzmann suppression remains finite, the sample contains many possible excitation sites, and nonequilibrium injection can dominate the anyon population.

- The statement that the physical error rate is below the surface-code threshold is incomplete unless the relevant error rate, code, circuit, leakage model, correlations, decoder, and measurement model are specified. A threshold is the error-rate boundary below which logical error can decrease as computational resources increase, subject to a particular set of assumptions.

- The inference that topological braiding eliminates all control errors is incorrect. Smooth deformations of a braiding path can be harmless when the evolution remains within the same gapped sector. Protection does not apply when the process leaves that sector, braids the wrong topological charge, or poisons the fusion space.

- The inference that weak disorder is beneficial merely because it localizes anyons is incomplete. Disorder may improve one kinetic channel while degrading energy gaps, controls, readout, or the intended motion of quasiparticles.

- The absence of an observed syndrome does not imply the absence of a logical error. A noncontractible loop, meaning a closed path that cannot be continuously contracted to a point on the encoded geometry, can produce an empty syndrome while implementing a logical operation.

- Repeated measurement is not passive protection. It constitutes active error correction even when software records or tracks the recovery operation instead of applying it physically.

- Operation below threshold does not imply error-free operation. It means that logical error can decrease with increasing resources under the stated assumptions. Every finite implementation retains a residual probability of failure.

## Verification of topological-protection criteria

- **Four local \(Z\) errors on a noncontractible row can leave no syndrome while flipping the logical qubit.**

  The endpoints of the error chain annihilate when the chain closes. The resulting closed chain winds nontrivially and anticommutes with a crossing logical \(X\) loop. Consequently,
  \(\bar X\bar Z=-\bar Z\bar X\).

- **Treating the gap as a barrier to quasiparticle motion fails because the gap controls creation rather than diffusion.**

  The gap sets the energy cost of creating excitations. Once two endpoints exist, moving one endpoint around the lattice need not require additional energy. The two-dimensional stabilizer no-go result follows from the absence of this additional energy barrier.

- **Passive protection and active correction are distinct mechanisms.**

  Passive protection follows from the Hamiltonian and encoding without syndrome feedback. Active correction measures syndromes, decodes the measurement outcomes, and either applies recovery operations or tracks the inferred errors.

- **A published threshold is not automatically a hardware specification.**

  The threshold applies to a particular code, noise model, syndrome circuit, decoder, and definition of an operation. Leakage and correlated noise can alter or invalidate that threshold.

- **Poisoning and leakage describe different departures from the intended computational model.**

  Poisoning changes the uncontrolled topological charge in the computational region. Leakage moves a constituent outside its intended local encoded subspace. A single physical event can produce both effects.

- **Calling a finite device error-free merely because it operates below threshold is incorrect.**

  Below-threshold operation describes favorable logical-error scaling under stated assumptions. A finite noisy run still has a nonzero logical-error probability. Error-free operation requires the logical channel to be exactly the intended channel.

A logical fault is a topologically nontrivial spacetime history. An energy gap suppresses excitation creation but does not automatically suppress excitation diffusion.

Finite system size produces a tradeoff between exponentially small virtual splitting and an extensive number of possible fault locations. Disorder can preserve the many-body phase while creating local regions with dangerously weak protection.

Poisoning and leakage take the system outside its intended computational description. Initialization, control, and readout therefore require separate error models.

Correlations can prevent logical errors from being suppressed by increasing code distance. Passive suppression, active correction, threshold operation, and error-free operation are four distinct claims.

Protection does not imply an infinite lifetime.

## Sources

- [R030] A. Yu. Kitaev, “Fault-tolerant quantum computation by
anyons,” Annals of Physics 303, 2–30 (2003).
DOI: [10.1016/S0003-4916(02)00018-0](https://doi.org/10.1016/S0003-4916(02)00018-0).
[arXiv:quant-ph/9707021](https://arxiv.org/abs/quant-ph/9707021).

- [R141] E. Dennis, A. Kitaev, A. Landahl, and J. Preskill,
“Topological quantum memory,” Journal of Mathematical Physics
43, 4452–4505 (2002). DOI: [10.1063/1.1499754](https://doi.org/10.1063/1.1499754). [arXiv:quant-ph/0110143](https://arxiv.org/abs/quant-ph/0110143).

- [R168] S. Bravyi and B. Terhal, “A no-go theorem for a
two-dimensional self-correcting quantum memory based on stabilizer
codes,” New Journal of Physics 11, 043029
(2009). DOI: [10.1088/1367-2630/11/4/043029](https://doi.org/10.1088/1367-2630/11/4/043029).
[arXiv:0810.1983](https://arxiv.org/abs/0810.1983).

- [R143] R. Alicki, M. Fannes, and M. Horodecki, “On thermalization in
Kitaev’s 2D model,” Journal of Physics A: Mathematical and
Theoretical 42, 065303 (2009). DOI: [10.1088/1751-8113/42/6/065303](https://doi.org/10.1088/1751-8113/42/6/065303).
[arXiv:0810.4584](https://arxiv.org/abs/0810.4584).

- [R169] B. J. Brown, D. Loss, J. K. Pachos, C. N. Self, and J. R.
Wootton, “Quantum memories at finite temperature,” Reviews of Modern
Physics 88, 045005 (2016). DOI: [10.1103/RevModPhys.88.045005](https://doi.org/10.1103/RevModPhys.88.045005).
[arXiv:1411.6643](https://arxiv.org/abs/1411.6643).

- [R142] S. Bravyi, M. B. Hastings, and S. Michalakis, “Topological
quantum order: stability under local perturbations,” Journal of
Mathematical Physics 51, 093512 (2010). DOI: [10.1063/1.3490195](https://doi.org/10.1063/1.3490195). [arXiv:1001.0344](https://arxiv.org/abs/1001.0344).

- [R015] C. Nayak, S. H. Simon, A. Stern, M. Freedman, and S. Das
Sarma, “Non-Abelian anyons and topological quantum computation,”
Reviews of Modern Physics 80, 1083–1159
(2008). DOI: [10.1103/RevModPhys.80.1083](https://doi.org/10.1103/RevModPhys.80.1083).
[arXiv:0707.1889](https://arxiv.org/abs/0707.1889).

- [R220] A. G. Fowler, “Coping with qubit leakage in topological
codes,” Physical Review A 88, 042308 (2013).
DOI: [10.1103/PhysRevA.88.042308](https://doi.org/10.1103/PhysRevA.88.042308).
[arXiv:1308.6642](https://arxiv.org/abs/1308.6642).

- [R221] E. Novais, E. R. Mucciolo, and H. U. Baranger, “Resilient
quantum computation in correlated environments: A quantum phase
transition perspective,” Physical Review Letters
98, 040501 (2007). DOI: [10.1103/PhysRevLett.98.040501](https://doi.org/10.1103/PhysRevLett.98.040501).
[arXiv:quant-ph/0607155](https://arxiv.org/abs/quant-ph/0607155).

---
