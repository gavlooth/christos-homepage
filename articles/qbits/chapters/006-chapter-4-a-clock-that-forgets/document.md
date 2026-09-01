# Chapter 4 — Relaxation, dephasing, and fidelity in qubits


A two-level quantum system can lose useful information through at least two distinct mechanisms. Energy relaxation transfers to the surroundings the energy that distinguishes the excited state from the lower-energy state.

Dephasing is the randomization of the relative phase between the two selected states. Dephasing can occur even while the excited-state population remains high.

Because energy relaxation and dephasing affect different observables, they require different state-preparation, control, and measurement protocols. A reported lifetime is therefore meaningful only when accompanied by its protocol and measured observable.

This chapter analyzes a single two-level system, a controlled waiting interval, and measurements that distinguish these two failure mechanisms.

## Measurement of energy relaxation


Let the upper level be denoted by \(|1\rangle\) and the lower level by \(|0\rangle\). The energy-relaxation protocol prepares \(|1\rangle\), waits for a time \(t\), measured in seconds, and measures whether the system remains in \(|1\rangle\).

When the experiment is repeated many times, the fraction of outcomes corresponding to \(|1\rangle\) estimates the excited-state population. A population is a probability and therefore lies between 0 and 1. Assume that the temperature is sufficiently low that the surroundings almost never re-excite the system. Under the additional assumption of a constant decay rate, the remaining excited-state population decreases by the same factor during every equal time interval.

These assumptions produce exponential decay. Let \(\rho_{11}\) denote the excited-state population. It is the diagonal matrix element of the density operator introduced in Chapter 2, where a density operator is the mathematical representation of a quantum state that can include both statistical mixtures and quantum coherence.

The time constant for this population decay is \(T_1\). Operationally, \(T_1\) is defined by the protocol that prepares the excited state, waits, and measures its population:

\[
\rho_{11}(t)=\rho_{11}(0)e^{-t/T_1}.
\]

At finite temperature, the population does not generally decay to zero. Instead, it approaches a nonzero thermal equilibrium population.

In that case, \(T_1\) is the time constant for the approach to thermal equilibrium rather than a time to complete depopulation. Bloch-equation treatments of solid-state qubits identify this process as relaxation along the energy axis [R058].

A long \(T_1\) therefore indicates that the system retains its excitation energy. It does not imply that an initially encoded relative phase remains measurable.

## Measurement of phase coherence

A phase-coherence experiment can instead prepare an equal superposition. This is the state denoted by \(|x+\rangle\) in Chapter 1 and represented on the equator of the Bloch sphere in Chapter 3:

\[
|+x\rangle=\frac{|0\rangle+|1\rangle}{\sqrt{2}}.
\]

For this state, the relevant quantity is not solely the excited-state population. It is the off-diagonal density-matrix element \(\rho_{01}\), called a coherence. This complex number represents the relative phase and amplitude relation between the \(|0\rangle\) and \(|1\rangle\) components.

In the simplest memoryless model, the coherence evolves at the transition frequency while its magnitude decays. Let \(\omega\) denote the angular transition frequency in radians per second.

For this model and free-evolution protocol, \(T_2\) is the time at which the coherence magnitude has decayed to \(1/e\) of its initial value. It is the decay constant of an off-diagonal density-matrix element and is distinct from \(T_1\):

\[
\rho_{01}(t)=\rho_{01}(0)e^{-i\omega t}e^{-t/T_2}.
\]

A memoryless stochastic process is called Markovian. This term specifies an assumption of the model; it is not an intrinsic classification of the atom independent of its environment and experimental conditions.

Energy relaxation contributes to the decay of \(\rho_{01}\) because a population is the squared magnitude of an amplitude. If the excited-state population decays as \(e^{-t/T_1}\), the corresponding excited-state amplitude decays as \(e^{-t/(2T_1)}\). Since the coherence \(\rho_{01}\) contains one factor of that amplitude, energy relaxation alone multiplies \(\rho_{01}\) by \(e^{-t/(2T_1)}\).

Assume that independent phase noise contributes an additional factor \(e^{-t/T_\phi}\), where \(T_\phi\) is the time constant associated only with dephasing that does not arise from energy relaxation. Multiplying the independent decay factors gives

\[
e^{-t/T_2}=e^{-t/(2T_1)}e^{-t/T_\phi},
\qquad
\boxed{\frac{1}{T_2}=\frac{1}{2T_1}+\frac{1}{T_\phi}}.
\]

It follows that \(T_2\leq 2T_1\) in this model. Equality indicates the absence of additional phase-only noise within the model. It does not imply perfect control pulses, perfect readout, or adequate performance for computation.

Consequently, a long \(T_1\) does not guarantee a long \(T_2\). Excitation energy can remain in the system after the relative phase has become unobservable.

## Ramsey dephasing from shot-to-shot detuning

Chapter 3 introduced a two-pulse sequence with a fixed phase. The same sequence can be used when the residual frequency mismatch varies between experimental repetitions.

Consider a reference frame rotating with the control oscillator. If the two-level transition frequency differs from the oscillator frequency, the two levels accumulate opposite phases. Let the residual mismatch, or detuning, be the angular frequency \(\Delta\), measured in radians per second. In this rotating frame, the residual Hamiltonian is

\[
H=\frac{\hbar\Delta}{2}\sigma_z.
\]

Here \(H\) is the energy operator, \(\hbar\) is Planck’s reduced constant in joule-seconds, and \(\sigma_z\) is the Pauli \(z\) operator, with eigenvalue \(+1\) on \(|0\rangle\) and \(-1\) on \(|1\rangle\). Because a radian is dimensionless, \(\Delta t\) is a dimensionless phase.

The pulse sequence, introduced by Ramsey in separated-field spectroscopy [R056], is

```
|0> -- pi/2 -- free evolution for t -- -pi/2 -- measure
```

The first pulse is chosen to implement

\[
|0\rangle\longrightarrow |+x\rangle
=\frac{|0\rangle+|1\rangle}{\sqrt{2}}.
\]

Evolution under the residual Hamiltonian then produces

\[
|\psi(t)\rangle
=\frac{e^{-i\Delta t/2}|0\rangle+e^{+i\Delta t/2}|1\rangle}{\sqrt{2}}.
\]

The second pulse converts the relative phase into a measurable population difference. With this pulse convention, the ideal probability of measuring 0 is

\[
P_0^{\mathrm{Ramsey}}(t)=\frac{1+\cos(\Delta t)}{2}.
\]

If \(\Delta\) has the same value in every experimental repetition, this Ramsey fringe oscillates indefinitely without losing contrast.

Now assume that the mismatch differs between repetitions. Let the additional offset be a static random variable \(\delta\) with mean zero and Gaussian standard deviation \(\sigma\), measured in radians per second. “Static” here means constant during one repetition, although it can vary between repetitions. Averaging the phase factor over repetitions gives

\[
\left\langle e^{i\delta t}\right\rangle
=e^{-\sigma^2t^2/2}.
\]

The oscillatory term consequently acquires a Gaussian decay envelope:

\[
P_0^{\mathrm{Ramsey}}(t)
=\frac{1+e^{-\sigma^2t^2/2}\cos(\Delta t)}{2}.
\]

The time parameter that expresses this envelope as \(e^{-(t/T)^2}\) is denoted by \(T_2^*\). The asterisk indicates that the measured decay includes reversible shot-to-shot frequency variation; it does not denote multiplication of \(T_2\) by another quantity.

\[
T_2^*=\frac{\sqrt{2}}{\sigma},
\qquad
P_0^{\mathrm{Ramsey}}(t)
=\frac{1+e^{-(t/T_2^*)^2}\cos(\Delta t)}{2}.
\]

The dimensions are consistent because \((\mathrm{rad\,s^{-1}})^{-1}=\mathrm{s}\), with radians carrying no physical dimension. A short \(T_2^*\) can therefore coexist with a long \(T_1\): the excitation energy can remain while ensemble averaging removes the Ramsey-fringe contrast. This additional broadening is sometimes called inhomogeneous broadening. The defining protocol remains state preparation, free evolution, and measurement of the fringe.

## Refocusing with a Hahn echo

A Hahn echo [R057] inserts a \(\pi\) pulse between two equal free-evolution intervals:

```
|0> -- pi/2 -- free tau -- pi -- free tau -- -pi/2 -- measure
```

Let the total free-evolution time be \(t=2\tau\). The \(\pi\) pulse reverses the sign with which a static mismatch contributes to the accumulated phase. Define the switching function \(y(s)\) to equal \(+1\) before the pulse and \(-1\) after it. The unwanted phase is then

\[
\phi_{\mathrm{echo}}
=\delta\int_0^{2\tau}y(s)\,ds
=\delta(\tau-\tau)=0.
\]

An ideal echo therefore refocuses any mismatch that remains constant during a single experimental repetition. It does not reverse energy relaxation, rapidly varying noise, or pulse errors. Hahn refocusing compensates only the specified class of phase histories.

For a numerical example, take \(\sigma/(2\pi)=100\ \mathrm{kHz}\). Then

\[
\sigma=2\pi\times10^5\ \mathrm{s^{-1}},\qquad
T_2^*=\frac{\sqrt{2}}{2\pi\times10^5\ \mathrm{s^{-1}}}
=2.25\ \mu\mathrm{s}.
\]

Suppose also that this hypothetical qubit has \(T_1=1.00\ \mathrm{ms}\) and a Markovian phase-only time \(T_\phi=100\
\mu\mathrm{s}\). The boxed relation above then gives \(T_2=95.2\ \mu\mathrm{s}\).

At \(t=10\ \mu\mathrm{s}\), the quasistatic Ramsey contrast is

\[
e^{-(10/2.25)^2}\approx2.7\times10^{-9},
\]

whereas an idealized echo limited only by the stated exponential \(T_2\) retains

\[
e^{-10/95.2}\approx0.900
\]

of its transverse contrast. During the same interval, the excited population retains \(e^{-10/1000}\approx0.990\) of its initial excess. These are three distinct results for one qubit and one time interval because they describe different observables and protocols; they are mutually consistent.

In many devices, the echo time exceeds \(T_2^*\) because the echo rejects frequency mismatch that is approximately constant during one repetition. This ordering is not guaranteed. Noise introduced by the \(\pi\) pulse can make the echo result worse. A nonexponential envelope may be fitted using

\[
C(t)=C_0\exp[-(t/T)^n],
\]

where \(C_0\) is the dimensionless contrast, \(T\) is the reported time in seconds, and \(n\) is a dimensionless fit exponent. A complete coherence-time claim specifies the pulse sequence, measured observable, envelope model, fitting convention, sample conditions, and uncertainty.

## Sequence-dependent filtering of frequency noise

Let \(\delta\omega(s)\) denote a time-dependent fluctuation in angular frequency. The accumulated phase is

\[
\phi(t)=\int_0^t y(s)\delta\omega(s)\,ds.
\]

For a Ramsey sequence, \(y(s)=1\). For a Hahn echo, \(y(s)=+1\) during the first half of the evolution and \(-1\) during the second half.

A zero-frequency offset contributes to the Ramsey integral but cancels in the echo integral. Noise that changes appreciably between the two halves does not cancel.

Additional pulses define other switching functions and therefore other frequency-dependent noise filters. These pulses alter the measurement protocol rather than the identity of the material. Filter-function theory provides a formal description of this sequence dependence [R059].

A longer echo time therefore does not demonstrate that the material itself has become less noisy. It shows that the chosen pulse sequence rejects a larger contribution from the noise relevant to the corresponding measurement.

## Fidelity between quantum states

A qualitative statement that an experiment succeeded does not specify how closely its final state matches a target. State fidelity is a dimensionless quantity between 0 and 1 that measures this similarity.

For states represented by density operators \(\rho\) and \(\sigma\), the fidelity is

\[
F(\rho,\sigma)
=\left[\operatorname{Tr}\sqrt{\sqrt{\rho}\,\sigma\sqrt{\rho}}\right]^2,
\qquad 0\leq F\leq1.
\]

This expression uses the squared Uhlmann–Jozsa convention. Jozsa gives the mixed-state definition and its properties [R060]. Some authors instead call the unsquared square root “fidelity,” so every numerical report must specify the convention.

If the target is the pure state \(|\psi\rangle\), the expression reduces to

\[
F(|\psi\rangle,\rho)=\langle\psi|\rho|\psi\rangle.
\]

This quantity is the probability that a projective test for \(|\psi\rangle\) accepts the state \(\rho\). Fidelity must therefore identify the two objects being compared. State fidelity alone does not characterize a pulse, a readout apparatus, or an error-correcting code.

## Average fidelity of a quantum operation

A quantum gate is an operation rather than a state. Let \(U\) denote the target unitary operation and \(\mathcal{E}\) the operation actually implemented by the apparatus. For a \(d\)-dimensional computational space, the average gate fidelity is

\[
F_{\mathrm{avg}}(\mathcal{E},U)
=\int d\psi\,
\langle\psi|U^\dagger\mathcal{E}(|\psi\rangle\langle\psi|)U|\psi\rangle,
\]

where the integral is uniform over pure input states and \(d\psi\) is a normalized dimensionless measure. Nielsen derives practical formulas for this average [R061]. This definition specifies both the object being assessed, namely a gate, and the averaging procedure, namely equal weighting over all pure input states.

The complementary quantity \(r=1-F_{\mathrm{avg}}\) is the average gate infidelity. It is a dimensionless, probability-like quantity. It is neither a coherence time nor a worst-case error bound.

[Experiment] Randomized benchmarking estimates an average error parameter while reducing sensitivity to state-preparation and measurement errors under its modeling assumptions. Interleaved benchmarking inserts a target gate to estimate that gate’s contribution [R062]. Randomized benchmarking does not reconstruct the full noise channel. Coherent, correlated, time-dependent, and leakage errors can require additional diagnostics.

## Binary readout assignment fidelity

Readout produces a classical decision. For binary single-shot readout, the experiment repeatedly prepares \(|0\rangle\) and \(|1\rangle\), records the corresponding reported labels, and averages the two correct-assignment probabilities:

\[
F_{\mathrm{RO}}
=\frac{P(\widehat{0}\mid0)+P(\widehat{1}\mid1)}{2}.
\]

Here \(P(\widehat{j}\mid j)\) is the conditional probability that the apparatus reports label \(j\) after state \(j\) was prepared. This balanced assignment fidelity is one common definition of readout fidelity [R063]. Reporting the two conditional probabilities separately prevents asymmetry between them from being concealed by the average.

This score includes any preparation errors that the calibration procedure has not independently removed. It is neither Uhlmann state fidelity nor gate fidelity. It quantifies the accuracy of a classical assignment.

## Leakage from the computational subspace

A bit flip maps \(|0\rangle\) to \(|1\rangle\) while remaining within the selected two-level system. Excitation to \(|2\rangle\) leaves that two-level system. These processes are distinct errors.

Let \(P\) be the projector onto the computational subspace spanned by \(|0\rangle\) and \(|1\rangle\), and let \(Q=I-P\) project onto all other levels. For a state \(\rho\), leakage is the population outside the computational subspace:

\[
L(\rho)=\operatorname{Tr}(Q\rho)=1-\operatorname{Tr}(P\rho).
\]

Leakage is dimensionless and lies between 0 and 1. Its definition separates population outside the computational subspace from errors that remain within that subspace.

A quantum channel can also be assigned leakage and seepage rates. Leakage transfers population from \(P\) to \(Q\), whereas seepage returns population from \(Q\) to \(P\) [R064]. Postselecting, or discarding, leaked experimental outcomes can produce a high fidelity for the retained data even when the unconditional operation performs poorly. The discarded fraction must therefore be reported with the conditioned score.

Without an explicit computational-subspace boundary, a high in-subspace metric can incorrectly suggest closed two-level dynamics.

## Logical lifetimes of encoded states

The information of interest is not always stored in one physical two-level system. It may instead be encoded across several such systems and protected by a specified protocol.

A logical lifetime is the decay time of a specified logical observable, or of a logical-state survival probability, under a specified noise model, control schedule, syndrome-extraction procedure, and decoder. A syndrome-extraction procedure measures information used to identify errors without directly measuring the encoded logical state, and a decoder uses the measured syndrome to infer a correction or logical outcome. Experimental surface-code studies commonly report the closely related logical error probability per correction cycle [R065]. The term “logical lifetime” applies to the complete encoded experiment rather than to any one physical subsystem.

A logical lifetime has units of seconds, or units of cycles if the cycle duration is reported separately.

As a simple example, suppose each correction cycle lasts \(\tau_c\) seconds and independently causes an absorbing logical failure with probability \(p_L\). An absorbing failure is one after which the state is counted as failed for the remainder of the survival analysis. The survival probability after \(N\) cycles is

\[
S(N)=(1-p_L)^N
=\exp\!\left[-\frac{N\tau_c}{T_L}\right],
\]

which defines

\[
T_L=-\frac{\tau_c}{\ln(1-p_L)}
\approx\frac{\tau_c}{p_L}
\quad\text{when }p_L\ll1.
\]

The approximation is dimensionally consistent because seconds divided by a dimensionless probability gives seconds. A logical Pauli expectation under a symmetric Pauli channel decays with a different factor, so the observable and fitting model must be stated. A reported logical lifetime without this information is not fully defined.

[Experiment] Surface-code experiments report logical error per correction cycle and compare code distances. Under the conditions of one 2023 experiment, increasing the code distance improved the measured logical performance, although the logical error per cycle remained finite [R065].

This result is evidence of scaling under active error correction. It does not show that the superconducting hardware acquired an emergent topological phase.

A long \(T_L\) can result from an ordinary repetition code, a decoherence-free encoding, active correction, passive energy barriers, or topological order. The responsible mechanism must be identified separately. No single coherence time establishes the existence of a phase.

## Experimental definitions and reporting requirements

The idealized equations omit state-preparation error, measurement error, pulse distortion, drift, multiple decay rates, and finite sampling. Laboratory measurements therefore produce protocol-dependent fitted data rather than context-independent values of \(T_2\).

Claimed quantity |
Minimal protocol |
Direct observable |
What it does not establish |
|

\(T_1\) |
prepare excited state; vary delay; measure population |
population approach to equilibrium |
phase coherence, gate accuracy, or fault tolerance |
|

\(T_2^*\) |
Ramsey/free induction |
fringe contrast versus free time |
irreversible dephasing alone |
|

echo \(T_2\) |
\(\pi/2-\tau-\pi-\tau\)
sequence |
refocused contrast versus \(2\tau\) |
passive material protection or immunity to fast noise |
|

gate fidelity |
characterize a specified gate set and metric |
tomography, randomized sequences, or another declared estimator |
worst-case error, readout fidelity, or zero leakage |
|

readout fidelity |
prepare labels; construct assignment matrix |
conditional classical outcome frequencies |
premeasurement state fidelity |

|

leakage |
resolve or infer levels outside the code space |
population outside \(P\),
preferably with return dynamics |
an ordinary bit/phase error rate |
|

logical lifetime |
prepare encoded states; run full protocol; decode at varied
duration |
logical survival or observable decay |
topological order or universal fault tolerance by itself |
|

[Experiment] Ramsey and echo data are often analyzed using more than one envelope model because different noise spectra produce Gaussian, exponential, stretched-exponential, or oscillatory decay [R058]; [R059]. Selecting the model after inspecting the result can change the reported time. Residuals, confidence intervals, and the fitting window are part of the result, even when abbreviated presentations omit them.

Meaningful comparisons also require matched experimental conditions, including temperature, magnetic field, qubit transition, sample, control power, pulse sequence, number of refocusing pulses, and whether the measurement concerns one qubit or an ensemble. A coherence time obtained using many-pulse dynamical decoupling should not be reported as an “intrinsic \(T_2\)” without qualification. The numerical value can be correct while the description of the measured quantity is inaccurate.

## Common interpretation errors

- **Inferring memory quality from \(T_1\) alone is incorrect.** \(T_1\) constrains only energy relaxation. Slow frequency drift can produce a short \(T_2^*\) even when \(T_1\) is long. In the Markovian relation, phase-only noise can dominate \(1/T_2\).

- **Interpreting an echo-enhanced lifetime as passive protection is incorrect.** Echo is an applied-control protocol that cancels phase accumulated from sufficiently slow fluctuations. Removing the pulse restores the Ramsey decay. Dynamical decoupling can be highly effective without constituting a material energy barrier or topological protection.

- **Treating all percentages as equivalent fidelity measures is incorrect.** State fidelity, average gate fidelity, postselected fidelity, readout assignment fidelity, and survival probability answer different questions. Even measurements with the same label may use squared or unsquared conventions. A complete report specifies the object, estimator, subspace, conditioning, and averaging distribution.

- **Inferring negligible leakage from high in-subspace gate fidelity is incorrect.** A reported gate metric may be conditioned on remaining in the computational space or may have limited sensitivity to rare excursions. \(F_{\mathrm{avg}}\) and leakage should be reported separately. Leakage can persist across cycles and produce correlated downstream errors [R064].

- **A logical qubit outliving one physical qubit does not necessarily demonstrate fault tolerance.** The physical and logical comparisons must involve matched tasks. Fault tolerance concerns controlled scaling of logical error as code resources increase below a threshold, including the effects of operations and measurements. A single favorable lifetime can constitute progress without demonstrating scalable error suppression. Conversely, an encoded qubit can be useful even if its protection is entirely non-topological.

- **A single fitted time is usually an incomplete material characterization.** The noise spectrum and pulse-dependent filter jointly determine coherence decay. Sample preparation, nearby spins, charge motion, temperature, and the control sequence also affect the result. The protocol must be reported with the fitted time.

- **Physical-qubit times do not fully characterize encoded information, and a long encoded lifetime does not characterize a phase.** \(T_1\), \(T_2\), \(T_2^*\), physical-gate fidelity, physical readout fidelity, and physical leakage characterize a physical qubit and its controls. An encoded qubit instead has logical observables, logical gates, logical leakage, and a logical lifetime. A digital circuit that emulates a code can demonstrate logical behavior without producing an emergent many-body phase. Passive robustness associated with an emergent topological phase is a property of the energy operator involving a gap, locality, system size, temperature, and perturbations. No single coherence time establishes it.

## Conceptual checks

- In the no-memory model represented by
  \[
  \frac{1}{T_2}=\frac{1}{2T_1}+\frac{1}{T_\phi},
  \]
  \(T_1\) is the population-relaxation time, \(T_2\) is the coherence time, and \(T_\phi\) is the pure-dephasing time. Because \(T_\phi>0\), the pure-dephasing contribution \(1/T_\phi\) is nonnegative. Therefore,
  \[
  T_2\leq 2T_1.
  \]
  Equality requires \(1/T_\phi=0\).

- Consider a qubit with \(T_1=5\ \mathrm{ms}\) and Ramsey \(T_2^*=2\ \mu\mathrm{s}\), where \(T_2^*\) is the inhomogeneous coherence time inferred from Ramsey interferometry. Treating the long \(T_1\) as evidence of a good quantum memory is invalid. Population can relax slowly while quasistatic frequency noise, meaning detuning that changes little during an individual measurement but varies between measurements, rapidly suppresses phase coherence. Neither number establishes fault tolerance.

- Suppose Ramsey fringes decay in \(3\ \mu\mathrm{s}\), while Hahn-echo contrast decays in \(80\ \mu\mathrm{s}\). A Hahn echo is a pulse sequence that refocuses phase accumulation caused by sufficiently slow detuning fluctuations. The measurements directly support the conclusion that much of the Ramsey decay is refocusable on the echo timescale, consistent with slow detuning noise. Echo does not prove passive protection. Both reported times must be accompanied by the pulse sequences used and by the fitted decay envelopes.

- Consider a gate for which the retained shots have fidelity \(0.999\), while \(0.02\) of all shots occupy \(|2\rangle\). Retained-shot fidelity is conditioned on excluding specified outcomes, whereas leakage is population that leaves the intended computational subspace. Here, the escaped population is leakage \(L=0.02\). The high retained-shot fidelity does not remove this leakage error. Both quantities and the conditioning rule must be reported.

- Readout fidelity is not the same quantity as the fidelity of the quantum state before measurement. Balanced readout fidelity averages the two classical probabilities of correctly assigning the prepared basis states. State fidelity instead compares density operators, which represent quantum states. Preparation errors and measurement errors therefore require separate calibration.

- Suppose an encoded state survives for ten times the physical \(T_2^*\), where an encoded state stores quantum information in a larger physical Hilbert space. This lifetime enhancement does not by itself establish topological order, a many-body property associated with a topological phase. The improvement could result from echo, a decoherence-free subspace, active correction, postselection, or another encoding. Demonstrating topological order requires independent many-body evidence. Any reported logical lifetime must also identify the measured logical observable and the protocol used.

These times and performance measures quantify distinct physical properties and cannot be substituted for one another. The next section examines how a crystal produces two levels to which these times can be assigned.

## Sources

- [R056] N. F. Ramsey, “A Molecular Beam Resonance Method with
Separated Oscillating Fields,” Physical Review
78, 695–699 (1950). DOI: [10.1103/PhysRev.78.695](https://doi.org/10.1103/PhysRev.78.695).

- [R057] E. L. Hahn, “Spin Echoes,” Physical Review
80, 580–594 (1950). DOI: [10.1103/PhysRev.80.580](https://doi.org/10.1103/PhysRev.80.580).

- [R058] G. Ithier et al., “Decoherence in a superconducting quantum
bit circuit,” Physical Review B 72, 134519
(2005). DOI: [10.1103/PhysRevB.72.134519](https://doi.org/10.1103/PhysRevB.72.134519);
[arXiv:cond-mat/0508588](https://arxiv.org/abs/cond-mat/0508588).

- [R059] Ł. Cywiński, R. M. Lutchyn, C. P. Nave, and S. Das Sarma,
“How to enhance dephasing time in superconducting qubits,” Physical
Review B 77, 174509 (2008). DOI: [10.1103/PhysRevB.77.174509](https://doi.org/10.1103/PhysRevB.77.174509);
[arXiv:0712.2225](https://arxiv.org/abs/0712.2225).

- [R060] R. Jozsa, “Fidelity for Mixed Quantum States,” Journal of
Modern Optics 41, 2315–2323 (1994). DOI: [10.1080/09500349414552171](https://doi.org/10.1080/09500349414552171).

- [R061] M. A. Nielsen, “A simple formula for the average gate
fidelity of a quantum dynamical operation,” Physics Letters A
303, 249–252 (2002). DOI: [10.1016/S0375-9601(02)01272-0](https://doi.org/10.1016/S0375-9601(02)01272-0);
[arXiv:quant-ph/0205035](https://arxiv.org/abs/quant-ph/0205035).

- [R062] E. Magesan et al., “Efficient Measurement of Quantum Gate
Error by Interleaved Randomized Benchmarking,” Physical Review
Letters 109, 080505 (2012). DOI: [10.1103/PhysRevLett.109.080505](https://doi.org/10.1103/PhysRevLett.109.080505);
[arXiv:1203.4550](https://arxiv.org/abs/1203.4550).

- [R063] D. Keith et al., “Benchmarking high fidelity single-shot
readout of semiconductor qubits,” arXiv:1811.03630 (2018). Stable URL:
[https://arxiv.org/abs/1811.03630](https://arxiv.org/abs/1811.03630).

- [R064] C. J. Wood and J. M. Gambetta, “Quantification and
characterization of leakage errors,” Physical Review A
97, 032306 (2018). DOI: [10.1103/PhysRevA.97.032306](https://doi.org/10.1103/PhysRevA.97.032306);
[arXiv:1704.03081](https://arxiv.org/abs/1704.03081).

- [R065] Google Quantum AI and R. Acharya et al., “Suppressing quantum
errors by scaling a surface code logical qubit,” Nature
614, 676–681 (2023). DOI: [10.1038/s41586-022-05434-1](https://doi.org/10.1038/s41586-022-05434-1);
[arXiv:2207.06431](https://arxiv.org/abs/2207.06431).

---
