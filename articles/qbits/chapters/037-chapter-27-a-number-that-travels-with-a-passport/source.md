# Chapter 27 — Unit conversion and interpretation of measured quantities

A coherence time cannot be specified by only a value such as 13 ms. The value must remain associated with the conditions under which it was measured.

The reported 13 ms coherence time is valid for one negatively charged silicon-vacancy center, SiV\(^-\), specifically for its electron spin near 100 mK after a 32-pulse Carr–Purcell–Meiboom–Gill sequence (CPMG-32) in diamond containing \(10^{-3}\%\) \(^{13}\)C [R083]. Changing the temperature, omitting the pulse sequence, or restoring a higher carbon-13 concentration changes the physical system or measurement protocol and therefore changes the quantity being characterized.

In this chapter, a numerical value together with all conditions required to interpret it is defined as a measurement-condition record.

A frequency, time, or fidelity without such a record is not suitable for use as a parameter in a Hamiltonian, which is the operator that specifies the energy and dynamics of a quantum system. The value may remain qualitatively informative, but it cannot support a quantitative engineering comparison across different systems or operating conditions.

## Three physical quantities expressed in a common unit

The values 2.87 GHz, 4.93 kHz, and 12.7 kHz can all be expressed in hertz, but they represent three physically distinct types of quantity.

The first type is a static level splitting, meaning an energy difference between stationary states. Such a splitting determines a local basis. One example is the zero-field splitting of the negatively charged nitrogen-vacancy center, NV\(^-\), in its electronic ground state. This splitting distinguishes the \(m_s=0\) spin projection from the \(m_s=\pm1\) projections before an external magnetic field is applied.

The second type is a coupling, meaning a Hamiltonian interaction that can transfer quantum information or generate entanglement. The fitted dipolar matrix element for a pair of NV centers separated by 25 nm is an example.

The third type is a decay rate or linewidth, meaning a measure of phase loss or spectral broadening. Ramsey linewidths, spin-echo linewidths, and phonon-broadened optical linewidths are examples. These quantities are also not interchangeable because they arise from different measurement protocols and noise processes.

All three types can be reported in megahertz, but the common unit does not imply a common physical interpretation.

Consequently, a large on-site splitting cannot compensate for a small intercluster coupling, and a millisecond spin-echo time does not imply that undriven many-body evolution remains coherent for a millisecond. Similarly, operation at room temperature does not imply that thermal equilibrium prepares the desired spin state.

Two comparisons will recur:

\[
\begin{aligned}
\text{useful coupling}
&> \text{uncontrolled broadening and drift},\\
\text{effective gap}
&> \text{thermal and disorder scales}.
\end{aligned}
\]

The numerical values used on both sides of these inequalities will retain their measurement conditions. Satisfying either inequality does not by itself establish a topological gap. A topological gap is a property of the many-body energy spectrum, which is not calculated on this page.

Each numerical entry should be represented as a record with the following mandatory fields:

```text
quantity | platform and charge state | sample | temperature
| field/strain/drive protocol | measurement definition | source
```

If any field is omitted, the value may be applied incorrectly in an inequality describing a different physical regime.

## Conversion between frequency and temperature units

Experimental measurements are commonly reported as frequencies, temperatures, or energies. A Hamiltonian has dimensions of energy, strictly expressed in joules in the International System of Units. These representations describe the same energy interval only after the conversion convention has been stated.

Let \(\nu\) denote ordinary cyclic frequency in hertz, where one hertz is one cycle per second. Let \(\omega=2\pi\nu\) denote angular frequency in radians per second. Let \(E\) denote energy in joules or electronvolts. Define

\[
E=h\nu=\hbar\omega,
\qquad
T_E=\frac{E}{k_{\mathrm B}}=\frac{h\nu}{k_{\mathrm B}},
\]

where \(h\) is Planck’s constant, \(\hbar=h/(2\pi)\) is the reduced Planck constant, and \(k_{\mathrm B}\) is Boltzmann’s constant. The quantity \(T_E\) is the equivalent temperature associated with the energy \(E\).

The equivalent temperature is not necessarily the cryostat temperature. It is the temperature at which the thermal energy scale \(k_{\mathrm B}T\) equals \(E\).

The constants \(h=6.62607015\times10^{-34}\ \mathrm{J\,s}\), \(k_{\mathrm B}=1.380649\times10^{-23}\ \mathrm{J\,K^{-1}}\), and the elementary charge are exact in the SI [R196]. Therefore

\[
\begin{aligned}
1\ \mathrm{GHz}&\leftrightarrow 4.135667696\ \mu\mathrm{eV}
\leftrightarrow 47.9924307\ \mathrm{mK},\\
1\ \mathrm{MHz}&\leftrightarrow 0.004135667696\ \mu\mathrm{eV}
\leftrightarrow 47.9924307\ \mu\mathrm{K},\\
1\ \mathrm{kHz}&\leftrightarrow 4.135667696\times10^{-6}\ \mu\mathrm{eV}
\leftrightarrow 47.9924307\ \mathrm{nK},\\
1\ \mathrm{K}&\leftrightarrow 86.1733326\ \mu\mathrm{eV}
\leftrightarrow 20.8366191\ \mathrm{GHz}.
\end{aligned}
\]

The arrows indicate numerical conversions between representations of the same energy interval. They do not imply that gigahertz is itself a unit of energy.

Gigahertz is a unit of cyclic frequency. Microelectronvolts are units of energy.

Millikelvin in these conversions denotes equivalent temperature. A Hamiltonian coefficient should be written explicitly as \(E=h\nu\) or \(E/h=\nu\).

Dimensional analysis verifies the conversion: \((\mathrm{J\,s})(\mathrm{s^{-1}})=\mathrm J\), and \(\mathrm J/(\mathrm{J\,K^{-1}})=\mathrm K\).

In this chapter, Hamiltonian coefficients are quoted as cyclic frequencies. If a Hamiltonian term has energy \(J\), the corresponding table entry is \(J/h\) in hertz.

If a paper writes \(H=\hbar g(\cdots)\), then \(g\) normally denotes an angular frequency. The corresponding cyclic frequency is \(g/(2\pi)\). Omitting the factor of \(2\pi\) changes every subsequent numerical comparison by approximately a factor of six.

The equivalent temperature \(T_E\) must also be distinguished from the cryostat set point. At a cryostat temperature of 100 mK, the thermal scale \(k_{\mathrm B}T\) is much larger than the energy associated with a 5 kHz splitting, whose equivalent temperature is only a fraction of a microkelvin.

## Conversion of three measured quantities into common units

For the NV zero-field splitting, consider the NV\(^-\) ground-state spin triplet near room temperature. Its splitting is \(D/h\approx2.87\ \mathrm{GHz}\) [R197]. The corresponding energy and equivalent temperature are

\[
E_D=h(2.87\ \mathrm{GHz})=11.87\ \mu\mathrm{eV},
\qquad
T_D=0.1377\ \mathrm K.
\]

At 300 K, \(k_{\mathrm B}T/h\approx6.251\ \mathrm{THz}\), which is much larger than \(D/h\). Room-temperature optical polarization therefore operates through a driven optical cycle that is out of thermal equilibrium. It does not operate because the \(m_s=0\) state is thermally isolated from the \(m_s=\pm1\) states.

For a measured NV–NV coupling, consider an implanted pair separated by \(25\pm2\ \mathrm{nm}\) at room temperature. The fitted secular dipolar coupling, meaning the component of the magnetic dipole interaction retained under the relevant rotating-frame and energy-conservation approximation, was \(4.93\pm0.05\ \mathrm{kHz}\) [R080]. Its energy and equivalent temperature are

\[
E_{dd}=2.039\times10^{-5}\ \mu\mathrm{eV},
\qquad
T_{dd}=2.366\times10^{-7}\ \mathrm K.
\]

This small equivalent temperature does not prevent implementation of a driven gate at 300 K. It does imply that thermal equilibrium cannot preferentially populate states separated only by this bare pair coupling.

For comparison, at a cryostat set point of \(T=100\ \mathrm{mK}\),

\[
k_{\mathrm B}T=8.617\ \mu\mathrm{eV},
\qquad
\frac{k_{\mathrm B}T}{h}=2.084\ \mathrm{GHz}.
\]

An SiV orbital splitting with cyclic frequency 46 GHz has an equivalent temperature of 2.21 K. Its upper orbital branch is therefore strongly suppressed at 100 mK. A 5 kHz dipolar splitting is not thermally resolved under the same conditions. A single cryostat temperature can consequently suppress excitations of one degree of freedom while producing nearly equal thermal populations for another degree of freedom, corresponding to an effectively infinite-temperature regime for the latter.

Reporting only the refrigerator temperature does not identify which energy splittings are resolved by thermal equilibrium.

## Distinction between decay times and energy gaps

Let \(T_2\) denote a coherence time, which characterizes the decay of phase coherence under a specified protocol. If the coherence envelope is assumed to be purely exponential, \(\exp(-t/T_2)\), the corresponding Lorentzian full width at half maximum is

\[
\Delta\nu_{\mathrm{FWHM}}=\frac{1}{\pi T_2}.
\]

A Lorentzian is the spectral line shape obtained from exponential temporal decay. This conversion is model-dependent and is not a general definition of linewidth. Gaussian Ramsey decay, spectral diffusion, stretched-exponential decay, and pulse-filtered noise do not obey the same relation. The measurement protocol and fitted envelope should therefore be retained with the reported value.

A gate duration \(t_g\) defines an inverse operation timescale \(1/t_g\). This rate is not automatically a Hamiltonian gap.

For example, \(t_g=20\ \mathrm{ns}\) gives \(1/t_g=50\ \mathrm{MHz}\). The resonant Rabi frequency required for a \(\pi\) rotation can differ from this inverse duration by factors determined by the pulse convention. The quantity should therefore be identified as an inverse duration rather than relabeled as an energy.

If the exponential-decay assumption is omitted, the same reported \(T_2\) can describe physically different noise processes. A quasi-static, calibratable detuning and an irreversible Markovian linewidth can produce the same decay time in a Ramsey measurement, even though a subsequent control pulse may reverse the former but not the latter.

## Upper-level population

For two nondegenerate energy levels separated by energy \(\Delta\), thermal equilibrium gives

\[
\frac{p_1}{p_0}=\exp\!\left(-\frac{\Delta}{k_{\mathrm B}T}\right),
\]

where \(p_0\) and \(p_1\) are the probabilities of occupying the lower and upper levels, respectively. Define the dimensionless thermal-resolution ratio

\[
R_T=\frac{\Delta}{k_{\mathrm B}T}.
\]

This ratio determines whether thermal equilibrium resolves the level splitting.

When \(R_T\ll1\), the two levels have nearly equal thermal populations unless a drive, measurement, or engineered reservoir creates a nonequilibrium state. When \(R_T\gg1\), thermal excitation into the upper level is exponentially suppressed. If either energy level is degenerate, the multiplicity of states contributes an additional degeneracy factor, and the displayed Boltzmann relation must be modified accordingly.

For an engineered architecture, two additional quantities are required:

\[
R_C=\frac{|J|/h}{\Delta\nu_{\mathrm{noise}}},
\qquad
N_{\mathrm{coh}}=\frac{|J|T_{2,\mathrm{relevant}}}{h}.
\]

Here \(J\) is the coupling energy, \(\Delta\nu_{\mathrm{noise}}\) is the relevant noise broadening expressed as a cyclic frequency, and \(N_{\mathrm{coh}}\) is approximately the number of coupling cycles completed within the applicable coherence time. The applicable coherence time must be obtained from free-induction evolution or from a protection protocol compatible with the Hamiltonian of interest, rather than selected solely because it is the longest available dynamical-decoupling result.

Thus, \(R_T\) and \(R_C\) characterize different physical comparisons, and neither quantity is a many-body gap. A system may fail to thermally resolve a splitting while still permitting driven gates based on that splitting. Conversely, a thermally resolved splitting may still be unusable if noise is too large.

## Experimentally reported quantities

The following table is not a ranking. It reports conditional ranges obtained from identifiable experiments or, where explicitly marked, transparent conversions based on measurements.

A range can represent tensor components, crystallographically inequivalent defect configurations, or different protocols applied to the same sample. The “conditions” column identifies the relevant interpretation. Such a range is not treated as a measured distribution across an entire defect population.

The selected rows emphasize samples relevant to interacting-defect architectures, including bulk and nanostructured hosts, implanted pairs with measured couplings, and protocols with stated temperatures. Results obtained with strong dynamical decoupling are retained, but they are distinguished from coherence during undriven analog evolution. If a comparable single-defect metric is unavailable, that absence is retained rather than replaced by an ensemble measurement addressing a different task.

Every frequency-valued Hamiltonian entry is expressed as \(E/h\). “Equivalent \(T_E\)” denotes \(E/k_{\mathrm B}\), not the operating temperature. Uncertainties and ranges retain the meanings assigned by their original sources.

| Quantity | Platform and defensible value | Explicit conversion | Conditions and what the range means | Status/source |
|---|---|---|---|---|
| Ground-state zero-field splitting | NV\(^-\), \(D/h\approx2.87\ \mathrm{GHz}\) | \(11.87\ \mu\mathrm{eV}\); \(T_E=0.1377\ \mathrm K\) | The value applies to single NV centers in bulk type-IIa diamond during room-temperature optical and microwave work. The final digits vary with temperature, strain, and sample. Therefore, \(D/h=2.87\ \mathrm{GHz}\) is a representative value rather than a universal exact constant. | [Experiment] [R197]; [R198] |
| Inequivalent zero-field splittings | Neutral divacancies in 4H-SiC, about \(1.30\)–\(1.34\ \mathrm{GHz}\) | \(5.38\)–\(5.54\ \mu\mathrm{eV}\); \(T_E=62.4\)–\(64.3\ \mathrm{mK}\) | These values were measured for single c-axis divacancy configurations in high-purity semi-insulating 4H-SiC at 20 K. The range represents crystallographically inequivalent configurations rather than temperature drift [R096]. | [Experiment] [R096] |
| Ruby zero-field transition | Cr\(^{3+}\!:\)Al\(_2\)O\(_3\), \(11.493\pm0.004\ \mathrm{GHz}\) | \(47.53\pm0.02\ \mu\mathrm{eV}\); \(T_E=551.6\pm0.2\ \mathrm{mK}\) | A dilute Cr\(^{3+}\) ensemble in ruby was measured in a dilution refrigerator. The optically inferred local temperature reached a minimum of \(143\pm7\ \mathrm{mK}\), although the cryostat reached 20 mK. This result concerns an ensemble transition rather than a demonstrated array of single-defect qubits [R088]. | [Experiment] [R088] |
| Hyperfine tensor | NV\(^-\)–\(^{14}\)N, \(|A|/h\approx2.14\)–\(2.70\ \mathrm{MHz}\) | \(0.00885\)–\(0.01117\ \mu\mathrm{eV}\); \(T_E=0.103\)–\(0.130\ \mathrm{mK}\) | The values were obtained by room-temperature electron paramagnetic resonance and electron–nuclear double resonance, EPR/ENDOR, on NV ensembles. The interval gives the magnitudes of axial and transverse components of the hyperfine tensor, which describes the anisotropic interaction between electron and nuclear spins. It does not represent variation among nominally equivalent centers. Nearby \(^{13}\)C sites can have very different hyperfine couplings [R197]. | [Experiment] [R197] |
| Direct electron-spin coupling | NV\(^-\) pair, \(4.93\pm0.05\ \mathrm{kHz}\) | \((2.039\pm0.021)\times10^{-5}\ \mu\mathrm{eV}\); \(T_E=0.2366\pm0.0024\ \mu\mathrm K\) | The sample contained two \(^{15}\)N-implanted NV centers separated by \(25\pm2\ \mathrm{nm}\) and operated at room temperature. The reported value is the fitted secular dipolar interaction for that orientation. The same experiment measured double-quantum phase accumulation four times faster, but this does not imply a fourfold increase in the microscopic dipole coupling [R080]. | [Experiment] [R080] |
| Dipolar engineering range | Electron spins at 10–50 nm: roughly \(0.4\)–\(100\ \mathrm{kHz}\) before angular cancellation | \(1.7\times10^{-6}\)–\(4.1\times10^{-4}\ \mu\mathrm{eV}\); \(T_E\approx0.02\)–\(4.8\ \mu\mathrm K\) | [Theory] The interval follows from the electron dipolar \(r^{-3}\) distance scaling and order-unity angular factors, constrained by the measured 25 nm pair above. It is a geometry-conditioned design range rather than a survey of fabricated pairs. Exchange interactions at atomic separations are excluded. | [Theory] based on [R080] |
| Static strain response | SiV\(^-\) orbital transitions, order \(0.1\)–\(1\ \mathrm{PHz}\) per unit strain; demonstrated optical tuning \(150\ \mathrm{GHz}\) | The observed tuning is \(620\ \mu\mathrm{eV}\), or \(7.20\ \mathrm K\) equivalent | The measurements used individual SiV centers in an actuated diamond cantilever at 4 K. The susceptibility interval distinguishes spin-sensitive channels from orbital or symmetry channels. The 150 GHz value is the observed tuning range of one optical line, not a coherent spin–spin coupling [R200]. | [Experiment] [R200] |
| Phonon-induced broadening | SiV\(^-\) optical D line about \(0.10\)–\(0.48\ \mathrm{GHz}\) over 4–20 K | \(0.41\)–\(1.99\ \mu\mathrm{eV}\); \(T_E=4.8\)–\(23\ \mathrm{mK}\) | The values were measured in low-strain high-pressure, high-temperature and chemical-vapor-deposition, HPHT/CVD, bulk samples. Before a crossover, the low-temperature linewidth approximately followed \(\Gamma=(-1.05+24.26T/\mathrm K)\ \mathrm{MHz}\), and it saturated near the lifetime limit around 4 K. This quantity is a measured phonon-sensitive linewidth rather than a single-mode coupling constant [R201]. | [Experiment] [R201] |
| Optical linewidth | Same low-strain SiV\(^-\) D transition: near \(100\ \mathrm{MHz}\) at 4 K, increasing with temperature | \(0.414\ \mu\mathrm{eV}\); \(T_E=4.80\ \mathrm{mK}\) at 100 MHz | This value is a single-site photoluminescence-excitation linewidth measured in bulk material. Nanostructure strain, spectral diffusion, power broadening, and the selected optical line can increase the linewidth. The bulk value therefore cannot be assigned directly to an implanted nanodevice [R201]. | [Experiment] [R201] |
| Coherence without/with refocusing | Coupled NV pair: \(T_2^*=22.6\)–\(27.8\ \mu\mathrm s\); double-quantum echo \(T_2=150\)–\(514\ \mu\mathrm s\) | Exponential-equivalent widths: \(11.5\)–\(14.1\ \mathrm{kHz}\) for \(T_2^*\), and \(0.62\)–\(2.12\ \mathrm{kHz}\) for echo | The two values in each interval correspond to the two implanted centers in the same 25 nm pair at room temperature. Ramsey and echo measurements are distinct protocols and cannot be combined into a single undifferentiated coherence value [R080]. | [Experiment] [R080] |
| Coherence under strong protection | SiV\(^-\): \(T_2^*\approx1.5\)–\(13\ \mu\mathrm s\) in \(10^{-3}\%\ ^{13}\)C material; \(T_2=13\pm1.7\ \mathrm{ms}\) with CPMG-32 | For 13 ms, exponential-equivalent width \(\approx24\ \mathrm{Hz}\) | The measurement used a single SiV center near 100 mK. Natural-abundance diamond in the same study gave \(T_2^*\sim0.3\ \mu\mathrm s\). The 13 ms result characterizes pulse-protected memory and does not demonstrate 13 ms of unperturbed analog dynamics [R083]. | [Experiment] [R083] |
| Coherence in another host | 4H-SiC divacancy, Hahn-echo \(T_2\approx1.2\)–\(1.25\ \mathrm{ms}\) | Exponential-equivalent width \(\approx255\)–\(265\ \mathrm{Hz}\) | The measurements involved isolated neutral divacancies in high-purity semi-insulating 4H-SiC at 20 K. A Hahn echo is a refocusing sequence containing one inversion pulse. The interval covers reported single centers or configurations under Hahn echo rather than shallow implanted arrays [R096]. | [Experiment] [R096] |
| MW gate-duration and optical-initialization examples | NV\(^-\): a 20 ns near-inversion MW pulse in the measured Rabi sequence; a 1.3 \(\mu\)s, 532 nm polarization pulse | Inverse durations: 50 MHz and 0.77 MHz; these are rates, not gaps | The experiment used a single NV center in type-IIa HPHT diamond at 300 K. The study did not associate an average gate fidelity with the 20 ns pulse. It is therefore an example of duration rather than a platform-wide gate benchmark [R198]. | [Experiment] [R198] |
| Readout and initialization fidelity | NV\(^-\): electron initialization \(\ge99.7\pm0.1\%\); single-shot electron readout \(93.2\pm0.5\%\) using a 40 \(\mu\)s window | Readout inverse duration \(25\ \mathrm{kHz}\), not an energy splitting | The measurements used a single NV center in bulk diamond below 10 K with resonant, spin-selective optical excitation. Room-temperature off-resonant fluorescence normally requires repeated averaging and cannot be assigned this cryogenic fidelity [R199]. | [Experiment] [R199] |
| Slow cryogenic optical operations | SiV\(^-\): optical pumping timescale about 30 ms; single-shot readout about 89% with 20 ms integration | Inverse durations about 33 Hz and 50 Hz | The experiment used a single SiV center near 100 mK with the magnetic field aligned to the defect axis. The long-coherence experiment used still longer preparation and readout pulses. These durations characterize optical cycling and photon collection rather than microwave gate speed [R083]. | [Experiment] [R083] |

The quantities in the table are compared only after their distinct physical meanings and measurement conditions have been specified.

NV centers can be controlled rapidly at room temperature, while the demonstrated dipolar coupling for a pair separated by 25 nm remains in the kilohertz range. SiV centers provide narrow and stable optical transitions, while phonon interactions involving their orbital states require millikelvin operation to obtain the longest reported spin memory.

SiC can exhibit millisecond Hahn-echo coherence at 20 K, but this result was obtained from isolated defects in high-quality material rather than from a densely implanted interacting lattice.

Ruby provides a robust ensemble transition at \(E/h=11.493\ \mathrm{GHz}\). However, modern evidence for arrays of individually initialized and coupled Cr\(^{3+}\) defects with a complete set of initialization, control, coupling, and readout capabilities remains absent [R088].

## Three representations of a single pair interaction

The measured room-temperature NV pair provides an example in which the coupling, coherence, and temperature data come from the same experimental context. Let the coupling be \(J/h=4.93\ \mathrm{kHz}\). For the two centers, take \(T_2^*=22.6\)–\(27.8\ \mu\mathrm s\) and echo times of 150–514 \(\mu\mathrm s\), all from the same sample and protocol family [R080]. The number of free-induction coupling cycles is then

\[
N_{\mathrm{coh}}^*=\frac{J}{h}T_2^*=0.11\text{–}0.14,
\]

whereas the corresponding echo-based quantity is

\[
N_{\mathrm{coh}}^{\mathrm{echo}}=0.74\text{–}2.53.
\]

The free-induction value is therefore less than one coupling cycle. Echo refocusing increases the corresponding coherence measure, and the reported entangling sequence used tailored double-quantum phase accumulation together with refocusing [R080].

A static many-body Hamiltonian cannot be assumed to benefit from the same pulse sequence. Refocusing pulses can average out the interaction that the analog evolution is intended to preserve.

For thermal equilibrium at 300 K,

\[
R_T=\frac{h(4.93\ \mathrm{kHz})}{k_{\mathrm B}(300\ \mathrm K)}
\approx7.9\times10^{-10}.
\]

The experiment can therefore demonstrate driven entanglement while remaining far from passive thermal polarization in the interaction eigenbasis. These observations are consistent because driven quantum control and equilibrium many-body protection are distinct physical capabilities.

If an exponential \(T_2^*=25\ \mu\mathrm s\) is assumed, then \(\Delta\nu=1/(\pi T_2^*)=12.7\ \mathrm{kHz}\). Comparison with a 4.93 kHz coupling gives \(R_C\approx0.39\).

This estimate is conservative only for the stated line shape and measurement protocol. A quasi-static, calibratable detuning and an irreversible Markovian linewidth can produce the same Ramsey timescale while having substantially different consequences for quantum control.

A measured noise spectrum is required to distinguish these processes; additional numerical precision in a single decay time does not provide that information.

## Common analytical errors

- Comparing \(D\) directly with the noise does not establish that the useful coupling is protected. Here, \(D\) is the on-site zero-field-splitting parameter. For example, suppose \(D/h=2.87\ \mathrm{GHz}\) and the linewidth, defined as the spectral width of the transition, is a kilohertz.

  This comparison shows only that the on-site splitting is well resolved. It provides no information about the interaction intended to generate a topological stabilizer, which is an operator that defines the protected subspace of a topological code. The relevant quantities are the projected intercluster interaction and the projected noise, where projection means restricting the physical Hamiltonian and noise operators to the chosen low-energy or encoded subspace.

- An optical linewidth cannot be used as a spin linewidth without identifying the corresponding noise operators. For example, suppose the optical D line has a width of 100 MHz.

  This width can affect photon indistinguishability and resonant optical readout. Assigning it directly to the spin would incorrectly treat the optical noise spectrum as the spin noise spectrum. Optical and microwave transitions couple to different operators and therefore generally sample different noise processes.

- An inverse time is not an energy until a Hamiltonian and frequency convention have been specified. For example, suppose a pulse lasts 20 ns.

  The inverse duration,
  \[
  1/(20\ \mathrm{ns})=50\ \mathrm{MHz},
  \]
  is a useful characteristic frequency. It is not, by itself, a 50 MHz energy gap because no Hamiltonian coefficient has been identified. In addition, the resonant Rabi frequency, defined as the driven oscillation frequency between two quantum states, required for a \(\pi\) rotation can differ according to the pulse convention.

- The cryostat temperature is not necessarily the local sample temperature. For example, suppose the refrigerator reaches 20 mK.

  In the ruby experiment, this refrigerator temperature did not imply that the optically illuminated spin ensemble was at 20 mK. At low optical power, the inferred local temperature was \(143\pm7\ \mathrm{mK}\) [R088]. A complete parameter record must therefore include laser heating, imperfect thermal anchoring, and microwave dissipation.

- A protection protocol can also modify or suppress the intended Hamiltonian. Dynamical decoupling is a sequence of control pulses that extends memory coherence by reversing selected couplings.

  If the corresponding toggling-frame average, meaning the Hamiltonian averaged in the control-defined rotating frame, cancels \(J\), then the interaction \(J\) required by the architecture is removed along with the noise. The resulting increase in \(T_2\), the transverse coherence time, is then numerically large but irrelevant to that architecture.

  High-fidelity resonant nitrogen-vacancy (NV) readout below 10 K does not imply passive low-temperature order [R199]. Conversely, weak thermal polarization does not preclude active optical initialization.

- A driven entangled pair is not a topological qubit. A pulse sequence that creates entanglement between two NV centers is an experiment on driven physical qubits.

  Such an experiment does not demonstrate an encoded topological qubit, an emergent anyon, or topological order. An anyon is a quasiparticle excitation with exchange statistics specific to two-dimensional many-body systems. A future projection onto a cluster subspace would generate new effective couplings and new effective noise operators. Those effective scales must be derived rather than copied from a table of physical-spin parameters.

- Record values obtained under different experimental conditions cannot be combined into one parameter set. A record coherence time often requires an unusually pure host, a deep defect, low defect density, low temperature, and many refocusing pulses.

  A dense implanted array generally degrades several of these conditions. Combining the best coherence from one sample, the best optical linewidth from another, and the closest defect pair from a third produces a parameter set that has not been realized in any single crystal. \(T_2^*\), the inhomogeneous dephasing time; echo \(T_2\), the coherence time measured using a spin-echo sequence; and dynamically decoupled \(T_2\) must therefore remain in separate columns. The recorded temperature must also be the local temperature under illumination rather than only the refrigerator temperature.

[Proposal] Until a candidate cluster has been fabricated, proposals should use scenario ranges rather than a single “best” input. A pessimistic case should be tied to implanted or shallow-defect data, a base case should be tied to reproducible bulk or device data, and an optimistic case should state every required enabling condition. The best coherence from one sample, the best optical linewidth from another, and the closest pair from a third must not be treated as properties of one crystal. Such a combined sample has not been experimentally realized.

[Experiment] Across demonstrated defect platforms, local cyclic frequencies \(E/h\), defined as energies \(E\) expressed in cycles per second by division by Planck’s constant \(h\), span roughly 1–12 GHz in the specific NV, 4H-SiC divacancy, and ruby cases tabulated here. By contrast, directly measured electron dipolar interactions over tens of nanometres can occur at kilohertz scales [R197]; [R080]; [R096]; [R088]. An optical strain susceptibility quantifies the change in an optical transition frequency caused by strain and can be very large, but static optical tuning is not itself a coherent interaction between defects [R200]. For silicon-vacancy (SiV) centers, phonon processes can strongly change linewidths between 4 and 20 K [R201].

[Theory] These observations establish a hierarchy of energy and frequency scales rather than an impossibility result. Projection into an effective subspace and perturbative gadgets, which generate desired effective interactions through higher-order virtual processes, usually reduce useful intercluster scales further, while disorder and leakage remain. Leakage is population transfer out of the intended computational or encoded subspace. Any viable proposal must calculate the effective \(J_{\mathrm eff}\), the effective linewidth, and the many-body gap from the same conditional parameter set.

[Speculation] Strain-enhanced, phonon-mediated, exchange-assisted, or cavity-mediated designs may produce interactions larger than bare dipolar kilohertz scales. This chapter provides no experimental basis for assigning a specific topological gap to such a design. A proposed coupling must remain in a separate row until it has been measured.

## Verification calculations and parameter checks

- For
  \[
  H=\hbar g\,S_x
  \]
  with
  \[
  g=2\pi\times5\ \mathrm{MHz},
  \]
  \(g\) is an angular frequency and \(S_x\) is the spin operator along the \(x\) axis. The cyclic frequency used in this parameter record is
  \[
  g/(2\pi)=5\ \mathrm{MHz}.
  \]
  The corresponding energy is
  \[
  \hbar g=h(5\ \mathrm{MHz}).
  \]

- A cyclic frequency of 1 MHz corresponds to an energy of
  \[
  0.0041357\ \mu\mathrm{eV}
  \]
  and an equivalent temperature of
  \[
  47.992\ \mu\mathrm K.
  \]
  The equivalent temperature is defined by \(T=E/k_{\mathrm B}\), where \(k_{\mathrm B}\) is the Boltzmann constant.

- An NV splitting with
  \[
  D/h=2.87\ \mathrm{GHz}
  \]
  does not thermally polarize the spin at 300 K. Its equivalent temperature is only
  \[
  0.1377\ \mathrm K.
  \]
  The useful spin polarization is instead produced by optical pumping, a nonequilibrium initialization process.

- The 13 ms SiV coherence time cannot be inserted directly into a static analog-simulation parameter set. It was obtained using CPMG-32, a Carr–Purcell–Meiboom–Gill dynamical-decoupling sequence containing 32 refocusing pulses, near 100 mK in isotopically purified diamond. The pulse sequence and isotope conditions must be compatible with the intended Hamiltonian because the protection sequence can average away the interaction that the simulation is intended to retain.

- A reported readout fidelity must be accompanied by the platform, sample, temperature, optical protocol, integration time, state definition, and a statement of whether the measurement is single-shot.

- Comparing the zero-field splitting with the noise does not establish that the useful coupling is protected. \(D\) is an on-site splitting. The relevant comparison is between the projected useful coupling and the projected noise, and ultimately between the many-body gap and the projected noise.

A numerical parameter without experimental and theoretical provenance is not sufficient for architectural analysis. Hamiltonian coefficients are reported here as cyclic frequencies \(E/h\).

The equivalent temperature is \(E/k_{\mathrm B}\); it is not necessarily equal to the cryostat temperature. The laboratory local cyclic frequencies span roughly 1–12 GHz in the tabulated NV, 4H-SiC divacancy, and ruby cases, while a measured electron dipolar coupling at 25 nm is 4.93 kHz.

Driven entanglement at 300 K and thermal resolution of the same coupling are distinct experimental capabilities. The next chapter examines the actual separations between defects.

## Sources

- [R196] Bureau International des Poids et Mesures, The
International System of Units (SI Brochure), 9th ed., version 3.01,
2024. Stable URL: [https://www.bipm.org/en/publications/si-brochure](https://www.bipm.org/en/publications/si-brochure).

- [R197] S. Felton et al., “Hyperfine interaction in the
ground state of the negatively charged nitrogen vacancy center in
diamond,” Physical Review B 79, 075203 (2009).
DOI: [10.1103/PhysRevB.79.075203](https://doi.org/10.1103/PhysRevB.79.075203).

- [R080] F. Dolde et al., “Room-temperature entanglement
between single defect spins in diamond,” Nature Physics
9, 139–143 (2013). DOI: [10.1038/nphys2545](https://doi.org/10.1038/nphys2545); arXiv:
[1212.2804](https://arxiv.org/abs/1212.2804).

- [R198] L. Robledo et al., “Spin dynamics in the optical
cycle of single nitrogen-vacancy centres in diamond,” New Journal of
Physics 13, 025013 (2011). DOI: [10.1088/1367-2630/13/2/025013](https://doi.org/10.1088/1367-2630/13/2/025013);
arXiv: [1010.1192](https://arxiv.org/abs/1010.1192).

- [R199] L. Robledo et al., “High-fidelity projective
read-out of a solid-state spin quantum register,” Nature
477, 574–578 (2011). DOI: [10.1038/nature10401](https://doi.org/10.1038/nature10401);
arXiv: [1301.0392](https://arxiv.org/abs/1301.0392).

- [R083] D. D. Sukachev et al., “Silicon-vacancy spin qubit
in diamond: a quantum memory exceeding 10 ms with single-shot state
readout,” Physical Review Letters 119, 223602
(2017). DOI: [10.1103/PhysRevLett.119.223602](https://doi.org/10.1103/PhysRevLett.119.223602);
arXiv: [1708.08852](https://arxiv.org/abs/1708.08852).

- [R200] S. Meesala et al., “Strain engineering of the
silicon-vacancy center in diamond,” Physical Review B
97, 205444 (2018). DOI: [10.1103/PhysRevB.97.205444](https://doi.org/10.1103/PhysRevB.97.205444);
arXiv: [1801.09833](https://arxiv.org/abs/1801.09833).

- [R201] K. D. Jahnke et al., “Electron–phonon processes of
the silicon-vacancy centre in diamond,” New Journal of Physics
17, 043011 (2015). DOI: [10.1088/1367-2630/17/4/043011](https://doi.org/10.1088/1367-2630/17/4/043011);
arXiv: [1411.2871](https://arxiv.org/abs/1411.2871).

- [R096] D. J. Christle et al., “Isolated electron spins in
silicon carbide with millisecond coherence times,” Nature
Materials 14, 160–163 (2015). DOI: [10.1038/nmat4144](https://doi.org/10.1038/nmat4144); arXiv: [1406.7325](https://arxiv.org/abs/1406.7325).

- [R088] V. K. Sewani et al., “Spin thermometry and spin
relaxation of optically detected Cr\(^{3+}\) ions in Al\(_2\)O\(_3\) (ruby),” Physical Review B
102, 104114 (2020). DOI: [10.1103/PhysRevB.102.104114](https://doi.org/10.1103/PhysRevB.102.104114);
arXiv: [2007.07493](https://arxiv.org/abs/2007.07493).

---
