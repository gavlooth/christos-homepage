# Chapter 8 — Chromium and other defects in corundum

Ruby is a hard, transparent, red crystal. Its color is caused by chromium impurities that substitute for aluminum atoms in a crystal composed of aluminum and oxygen, rather than by an added dye.

Sapphire has the same host crystal structure. Corundum can be colorless, blue, yellow, or another color when chromium is absent or when another impurity is substituted, depending on the impurity species and charge state.

Gemological grading classifies these materials primarily by color. The relevant technical criterion is whether the established impurities in corundum can perform the functions demonstrated by the nitrogen-vacancy center in diamond. A nitrogen-vacancy center consists of a substitutional nitrogen atom adjacent to a vacant carbon lattice site.

The first laser used ruby, and early masers also used ruby. A maser is a device that produces coherent microwave amplification by stimulated emission.

Titanium-doped sapphire remains a standard tunable laser medium in many laboratories. Impurities in corundum have therefore provided technologically useful optical and microwave properties for approximately sixty years.

The central issue is why defects in diamond, rather than established impurities in corundum, are routinely initialized, coherently rotated, and read out as individual quantum systems.

## Corundum, ruby, and sapphire

Corundum consists of an approximately close-packed arrangement of oxygen ions in which aluminum occupies two thirds of the available interstitial sites. An interstitial site is a region between ions in the host lattice that can accommodate another ion.

The term *corundum* denotes the underlying material because the gemstone names *ruby* and *sapphire* refer to different impurity compositions of the same host crystal structure.

When chromium ions replace some aluminum ions, the material is called ruby. The same lattice is usually called sapphire when it is used as a window, watch crystal, or microwave resonator.

The substitution is chemically favorable because chromium and aluminum both commonly adopt a \(+3\) charge state. Chromium can therefore occupy an aluminum site without necessarily requiring an additional charge-compensating defect.

Each chromium ion is coordinated by six oxygen ions in a slightly distorted octahedral environment. This local oxygen coordination determines the electronic structure of the chromium impurity.

The local distortion defines preferred spin orientations for the three remaining chromium electrons even in the absence of an applied magnetic field. Optical excitation can promote these electrons to higher-energy states.

Microwave fields can drive transitions among the four lowest spin states. These optical and microwave transitions enabled the chromium impurity to function as the active medium in the first laser and as a system for electron spin resonance. Electron spin resonance, or ESR, is spectroscopy based on microwave-driven transitions between electron-spin energy levels.

Ruby and sapphire are therefore different impurity realizations of the same host lattice rather than distinct materials platforms. However, a crystal containing many equivalent local coordination environments does not by itself constitute a register of individually identified and addressable qubits.

At chromium concentrations suitable for a ruby laser, the optical field within a laser spot and the microwave field of a resonator interact with an ensemble containing many ions. An ensemble is a collection of nominally similar emitters or spins measured collectively. At concentrations low enough to isolate individual ions, the signal from an individual ion can fall below the experimental noise.

Sapphire can also form an exceptionally low-loss microwave resonator. This resonator property must be distinguished from a many-body phase and from an individually controllable defect system. Assessment of corundum defects therefore requires the same operational criteria already satisfied by diamond defects.

## Ground-state spin structure of \(\text{Cr}^{3+}\)

A chromium ion that has lost three electrons retains three electrons in its outer \(3d\) shell. Their spins preferentially align in parallel, producing four allowed spin projections:

\[
m=-3/2,-1/2,+1/2,+3/2.
\]

An applied magnetic field changes the energies of these four spin levels.

Even at zero magnetic field, the distorted oxygen coordination splits the four levels into two pairs. This zero-field splitting, defined in Chapter 6, is an experimentally measurable energy separation between spin states in the absence of an applied magnetic field.

In spectroscopic notation, the ion is \(\text{Cr}^{3+}\) with electronic configuration \(3d^3\).

Within the oxygen coordination environment, the three electrons occupy the lower-energy orbitals with parallel spins. This configuration produces an orbital-singlet ground term \({}^{4}A_2\) with total electron spin \(S=3/2\). An orbital singlet is a state with no orbital degeneracy. The local environment is slightly stretched along the crystal \(c\)-axis, and this distortion produces the zero-field splitting [R088].

Define the dimensionless spin operators \(S_x,S_y,S_z\), with \(S_z\) eigenvalues equal to the four values of \(m\) listed above. Let \(D\) denote an energy, \(\mu_B\) the Bohr magneton in joules per tesla, \(B_i\) the magnetic-field components in tesla, and \(g_\parallel,g_\perp\) the dimensionless spin factors parallel and perpendicular to the \(c\)-axis. The effective ground-state Hamiltonian is

\[
H=g_\perp\mu_B(B_xS_x+B_yS_y)+g_\parallel\mu_B B_zS_z
+D\left[S_z^2-\frac{S(S+1)}{3}\right].
\]

The first two terms describe the Zeeman interaction between the spin and the applied magnetic field. The final term describes the zero-field splitting produced by the anisotropic local crystal environment. This Hamiltonian assumes that the low-energy behavior can be represented within the \(S=3/2\) ground-state manifold.

At zero field, \(S(S+1)/3=5/4\), so the eigenenergies are

\[
E_{\pm3/2}=D,\qquad E_{\pm1/2}=-D.
\]

For ruby, \(D<0\). The \(|\pm3/2\rangle\) pair is therefore lower in energy, and the frequency separation between the two doublets is

\[
\nu_0=\frac{-2D}{h}\simeq 11.493\ \text{GHz},
\]

where \(h\) is Planck’s constant [R088]; [R089]. At zero magnetic field, time-reversal symmetry preserves the degeneracy between the \(+m\) and \(-m\) states. The four states therefore form two degenerate doublets rather than four separate spectral lines.

A dimensional and thermal calculation gives

\[
\frac{h\nu_0}{k_B}
=\frac{(6.626\times10^{-34}\ \text{J s})(11.493\times10^9\
\text{s}^{-1})}
{1.381\times10^{-23}\ \text{J K}^{-1}}
\approx0.552\ \text{K}.
\]

The product of joule-seconds and inverse seconds has units of joules. Dividing this energy by joules per kelvin produces a temperature in kelvin. The result is the thermal energy scale corresponding to the zero-field transition frequency.

Substantial passive thermal polarization between the two doublets therefore requires temperatures well below approximately \(0.5\ \text{K}\). Operation of a ruby laser at room temperature establishes the existence of an optical excitation and emission cycle, but it does not establish that the ground-state spin is predominantly initialized in its lowest-energy doublet.

For a magnetic field parallel to the \(c\)-axis, the Hamiltonian remains diagonal in the \(|m\rangle\) basis:

\[
E_m=D\left(m^2-\frac54\right)+g_\parallel\mu_B B_zm.
\]

Magnetic-dipole microwave transitions ordinarily satisfy the selection rule \(\Delta m=\pm1\). If the magnetic field is tilted away from the \(c\)-axis, the \(|m\rangle\) basis states mix, changing the transition strengths and allowing field-insensitive operating points known as clock transitions. A clock transition is a transition whose frequency is insensitive to magnetic-field fluctuations to first order.

Clock transitions may improve coherence, but their existence does not itself constitute a measurement of the coherence time \(T_2\). Here, \(T_2\) is the timescale over which a coherent superposition retains its relative phase.

If time-reversal symmetry is broken, the zero-field doublets can split. If time-reversal symmetry is retained, the system still contains four levels arranged as two pairs. Representing this four-level system as an ideal two-level atom therefore introduces possible leakage into states outside the selected qubit subspace.

## Optical and microwave energy scales

The chromium ion also absorbs red light. At cryogenic temperature, two sharp optical lines occur near 693.6 nm and 692.2 nm, corresponding to approximately 1.788 eV and 1.792 eV [R088].

These photons drive transitions from the four ground-state levels to a higher-energy pair of states. The excited pair is denoted \({}^{2}E\) in spectroscopic notation.

The numerical transition energies identify the optical energy scale, while the \({}^{2}E\) label specifies the excited-state term required for comparison with the spectroscopy literature.

The optical transition is formally spin-forbidden, meaning that it violates the leading-order spin selection rule. Coupling to lattice vibrations nevertheless gives the transition a nonzero amplitude.

Resonant optical excitation can distinguish the ground-state sublevels, and phonon-assisted fluorescence can be used to infer their populations. A phonon is a quantized lattice vibration. These processes enable ensemble optical initialization and ensemble detection of magnetic resonance, but they do not automatically provide single-shot measurement of an individual chromium spin.

The optical and microwave energy scales differ because the oxygen coordination environment first separates orbital terms on the electron-volt scale. The smaller local distortion, together with spin–orbit coupling between the electrons’ spin and orbital degrees of freedom, then produces a residual gigahertz-scale splitting within the ground term. Optical transitions involve an energy of approximately \(1.8\ \text{eV}\), whereas microwave transitions involve energies of tens of microelectron-volts.

The optical and microwave transitions therefore do not constitute equivalent descriptions of a single two-level atom. A complete model must include their distinct selection rules and the leakage channels associated with the four-level ground-state structure.

## Microwave losses and the nuclear-spin environment

Sapphire is transparent over a broad optical range, mechanically hard, chemically stable, and an exceptional microwave dielectric. A microwave field can form a whispering-gallery mode in a high-purity sapphire disk. A whispering-gallery mode is a resonant electromagnetic mode confined by repeated internal propagation near the boundary of the dielectric.

The resonator quality factor \(Q\) is the stored energy divided by the energy lost per radian of oscillation. A large \(Q\) is an advantageous property of the host resonator, but it is not a measurement of the coherence time of an impurity spin.

[Experiment] At about 100 mK, high-purity sapphire whispering-gallery resonators have shown microwave \(Q\) values in the \(10^8\)–\(10^9\) range. For an 11 GHz mode with \(Q=2\times10^9\), the photon energy-decay timescale is \(Q/(2\pi f)\approx29\
\text{ms}\) [R090].

The nuclear-spin environment is less favorable than that of isotopically enriched diamond. Natural aluminum consists essentially entirely of \({}^{27}\text{Al}\), which has nuclear spin \(I=5/2\). Every substitutional chromium ion is therefore surrounded by a dense bath of host nuclear spins. A nuclear-spin bath is an ensemble of surrounding nuclei whose magnetic fluctuations can perturb the electron spin.

Natural \({}^{52}\text{Cr}\), the dominant chromium isotope, has \(I=0\), whereas \({}^{53}\text{Cr}\) has \(I=3/2\) [R088]; [R090]. Isotopic selection can therefore remove the chromium ion’s own nuclear spin.

No spin-zero isotope of aluminum is available. The aluminum nuclear-spin bath cannot therefore be eliminated by isotopic enrichment.

Hyperfine structure and spectral diffusion are consequently intrinsic materials issues rather than effects attributable only to imperfect crystal growth. Hyperfine structure is the splitting produced by coupling between electron and nuclear spins. Spectral diffusion is the time-dependent fluctuation of a transition frequency caused by changes in the surrounding environment. A model that omits the aluminum nuclear spins does not describe actual corundum.

## Experimental measurements on ruby

A laser spot focused on ruby generally contains many chromium ions rather than a single ion. The resulting measurement is therefore an ensemble measurement.

Ensemble measurements must not be interpreted as single-spin measurements, even when they yield favorable numerical results.

[Experiment] Sewani and co-workers studied a 0.005% ruby crystal in a dilution refrigerator. Under 15 nW continuous resonant excitation, they inferred a ruby temperature of \(143\pm7\ \text{mK}\), measured a maximum spin-lattice relaxation time \(T_1=3.67\pm0.35\ \text{s}\), and observed optically detected magnetic resonance, or ODMR, transitions [R088]. The spin-lattice relaxation time \(T_1\) is the timescale over which spin-state populations return toward thermal equilibrium. ODMR detects spin transitions through changes in an optical signal.

Their resonant confocal measurement sampled an area of approximately \(1\ \mu\text{m}^2\), rather than a single ion. The paper identified coherence-time measurement as future work.

It did not report Ramsey fringes, Hahn-echo \(T_2\), single-qubit gates, single-shot readout, or two-ion entanglement. Ramsey and Hahn-echo measurements are pulse protocols used to characterize phase coherence and refocus selected sources of dephasing, respectively.

The distinction between \(T_1\) and \(T_2\) prevents the incorrect substitution of a population-relaxation time for a phase-coherence time. A seconds-long \(T_1\) at millikelvin temperature is favorable, but phase coherence may decay much more rapidly because of aluminum nuclear spins, chromium–chromium dipolar interactions, magnetic-field noise, and inhomogeneous strain.

[Experiment] A 2025 experiment placed a 0.05% ruby sample on a 5.5 GHz high-\(T_c\) superconducting resonator and measured ensemble spin–photon coupling from 30 mK to 16 K [R089]. A high-\(T_c\) superconductor is a material with a comparatively high superconducting transition temperature.

At 65 mK, one transition reached a collective coupling of \(\bar\Omega/2\pi\approx21\ \text{MHz}\) with spin decay \(\gamma_s/2\pi\approx44\ \text{MHz}\). This gave a cooperativity of approximately 15 but did not satisfy the strict strong-coupling condition \(\bar\Omega>\gamma_s\) [R089]. Cooperativity is a dimensionless measure comparing coherent coupling with dissipative losses. The sample contained an estimated \(2.6\times10^{15}\) spins.

The authors inferred an average single-spin coupling of only approximately 0.41 Hz when averaged over all spins, or 1.25 Hz when only the subset in the high-field-volume region was counted [R089].

These results establish significant collective cavity behavior but do not provide strong coupling between individually selected neighboring spins.

The measured 21 MHz coupling is enhanced by the ensemble factor \(\sqrt N\), where \(N\) is the number of participating spins. It is not the coupling of one defect. In that experiment, spin damping was too rapid to permit coherent photon re-emission.

Assigning the full 21 MHz coupling to a single spin would contradict the same paper’s model, which places the single-spin coupling in the hertz range. Such an assignment would incorrectly neglect collective enhancement.

## Other transition-metal impurities

Sapphire can contain many transition-metal impurities because these ions can occupy aluminum sites in several charge states. Different valence states and charge-compensation histories produce substantially different electronic and optical systems.

| Species in sapphire | Established behavior | Relevance to defect-qubit operation |
|---|---|---|
| \(\text{Cr}^{3+}\), \(S=3/2\) | Ruby R-line fluorescence, laser/maser gain, EPR/ODMR, seconds-scale \(T_1\) at mK, ensemble cavity coupling [R088]; [R089] | Best-characterized candidate, but the complete set of modern single-center coherent-control capabilities is absent |
| \(\text{Fe}^{3+}\), \(S=5/2\) | EPR and microwave transitions in nominally pure sapphire; useful or parasitic in frequency standards [R090] | Demonstrated ensemble spectroscopy, not optical single-spin initialization/readout |
| \(\text{V}^{2+}\), \(S=3/2\), \({}^{51}\text{V}\) with \(I=7/2\) | Eight-line hyperfine structure resolved by whispering-gallery ESR [R090] | Multiple spin and hyperfine levels, but substantial nuclear-spin complexity and no demonstrated qubit lifecycle |
| \(\text{Ti}^{3+}\), \(3d^1\) | Broad vibronic gain underlying the tunable Ti:sapphire laser, approximately 650–1100 nm [R091] | Excellent classical gain medium; broad electron–phonon optical transitions are not evidence of a narrow spin–photon qubit interface |
| Co, Ni, Mn and other ions | Optical absorption/EPR reported under charge-state- and growth-dependent conditions | A spectroscopic line identifies a candidate species but does not establish a scalable defect center |

Vibronic gain is optical amplification involving coupled electronic and vibrational transitions. A qubit lifecycle comprises initialization, coherent control, and readout of the same physical degree of freedom.

[Experiment] Farr and co-workers detected native \(\text{Fe}^{3+}\), \(\text{Cr}^{3+}\), and \(\text{V}^{2+}\) impurities at parts-per-billion to parts-per-million concentrations in high-purity sapphire near 115 mK using 8–19 GHz whispering-gallery spectroscopy [R090]. This sensitivity has two implications. It demonstrates that dilute spins couple to microwave modes, and it shows that nominally pure sapphire already contains uncontrolled spin species.

A catalog of impurity species is therefore not equivalent to a catalog of operational qubits. A spectroscopic line can identify a candidate species, but it does not demonstrate initialization, coherent rotation, or readout of an individual spin.

## Oxygen vacancies

Removing an \(\text{O}^{2-}\) ion creates an unoccupied oxygen lattice site denoted \(V_O\). Charge-state terminology is defined by the number of electrons remaining at the vacancy.

A nominally neutral oxygen vacancy that traps two electrons is called an \(F\) center. In the literature, this term denotes a specific defect species.

Removing one electron from the same vacancy produces an \(F^+\) center, also denoted \(V_O^+\), with one remaining electron. Aggregates of vacancies are labelled \(F_2\), \(F_2^+\), and so forth, although historical assignments can depend on sample-processing conditions.

[Experiment] Irradiated or reduced alpha-alumina shows an \(F\)-center absorption band near 6.1 eV and luminescence near 3.0 eV. The \(F^+\) center has absorption structure near 4.8 and 5.4 eV and emission near 3.8 eV [R092]; [R095].

The \(F\)-center emission lifetime was measured as \(36\pm4\ \text{ms}\), consistent with a spin-forbidden relaxed transition [R092]. [Theory] Modern hybrid-density-functional calculations reproduce the principal absorption and emission assignments and distinguish internal vacancy transitions from transitions involving band edges [R093]. A hybrid density functional is an electronic-structure approximation that combines components of local or semilocal density-functional theory with nonlocal exact exchange.

Agreement between measured and calculated optical energies does not establish qubit operation.

The one-electron \(F^+\) center is paramagnetic and can therefore be observed by EPR in suitable samples. The two electrons of the neutral \(F\) center can form singlet and triplet configurations involved in its luminescence. A singlet has total spin zero, whereas a triplet has total spin one.

For the literature survey used here through 24 August 2026, no peer-reviewed report was located that demonstrated an isolated oxygen-vacancy center in bulk sapphire with all of the following capabilities: photon antibunching tied to that center, spin-selective optical initialization, coherent single-spin rotations, a measured single-center \(T_2\), and single-shot readout. Photon antibunching is a suppression of simultaneous photon detections and is commonly used as evidence of emission from an individual quantum emitter.

The available literature establishes ensemble color-center spectroscopy and theoretical modeling [R092]; [R093]; [R095]. The complete operational sequence required for a single-defect qubit has not been demonstrated.

Oxygen vacancies can be created by irradiation, reducing growth conditions, or annealing. They can also aggregate or change charge state under illumination. These methods provide some control over defect density.

However, these processes can also produce displacement damage and heterogeneous local environments. Ultraviolet excitation at approximately 5–6 eV is less convenient for low-loss nanophotonics and for biological or fiber interfaces than visible or near-infrared excitation.

Classifying an oxygen vacancy as a deep defect in a wide-band-gap material specifies an important electronic property, but this classification does not define a device architecture.

## Chromium implantation and spatial control

Bulk ruby growth produces a uniform average chromium concentration with random atomic positions. Focused-ion-beam or masked implantation can place chromium within a selected surface region and depth range.

[Experiment] Chromium implanted into sapphire at 150 keV, followed by annealing at 1450 °C, produced substitutional ruby-like R-line luminescence in a thin implanted layer [R094]. The demonstrated fluences were ensemble-scale, \(6\times10^{14}\) to \(4\times10^{15}\ \text{cm}^{-2}\), and the reported internal optical efficiency was approximately 50% under those processing conditions [R094].

This experiment demonstrates optical activation after implantation. However, the high annealing temperature, implantation collision straggle, residual damage, charge-state control, and chromium diffusion remain complications for constructing a nanometre-scale interaction graph. Collision straggle is the statistical spread in implanted-ion positions caused by scattering in the target material.

No sapphire result located for this chapter combined deterministic registration of a single implanted ion, verified optical and spin behavior of one chromium center, and controllable coupling between two chromium centers. Diamond implantation also exhibits straggle and surface noise, but single-defect verification has been demonstrated many times in diamond [R074].

Chromium implantation is therefore an established materials-processing result, but it is not a demonstration of deterministic defect placement. R-line emission from a thin layer shows that chromium ions occupied aluminum sites, but it does not determine the exact sites or demonstrate coherent interaction between two selected ions.

## Comparison with diamond defects

A direct comparison must use capabilities demonstrated under stated experimental conditions rather than combining hypothetical optimum features.

| Criterion | Sapphire/corundum evidence | Diamond reference point | Consequence for a selected-neighbor qubit register |
|---|---|---|---|
| Single-defect identification | Ruby and vacancy work reviewed here is predominantly ensemble spectroscopy; no intrinsic sapphire antibunching-plus-spin-control demonstration was located [R088]; [R092]; [R095] | Single NV centers support room-temperature confocal fluorescence, ODMR, initialization and coherent control; mature review in [R074] | Diamond decisively ahead |
| Coherence | Cr ruby: \(T_1=3.67\pm0.35\) s at mK; that study did not measure \(T_2\) [R088] | Single NV Hahn-echo \(T_2=1.8\) ms at room temperature in isotopically purified bulk diamond [R079] | Values are not directly comparable; sapphire’s needed single-spin \(T_2\) datum is absent |
| Optical interface | Narrow ruby R lines and ensemble resonant readout near 693 nm at cryogenic temperature [R088] | Single-NV spin–photon entanglement and remote-node components have been demonstrated [R074] | Sapphire has spectroscopy, not a demonstrated single-spin network node |
| Microwave interface | Very high-\(Q\) sapphire resonators and collective coupling; 2025 ruby device had 21 MHz ensemble coupling versus 44 MHz spin decay [R089]; [R090] | Diamond spin ensembles and single NVs couple to microwave structures; single-defect control is routine [R074] | Sapphire excels as a resonator, not yet as a register of individually coupled defects |
| Placement | Random bulk doping; ensemble Cr implantation and activation after 1450 °C anneal [R094] | Implantation, delta doping, nanofabrication, and registration all demonstrated, with nonzero yield/straggle limitations [R074] | Neither is perfect; sapphire lacks the single-center end-to-end evidence |
| Density and selected interactions | Cr–Cr effects and collective \(\sqrt N\) enhancement exist, but chosen pairwise coherent gates were not located [R089] | Dipolar-coupled NV pairs and multi-spin registers have been coherently controlled [R074] | Ensemble interaction does not define an individually addressable interaction graph |
| Temperature | Optical ruby operation is possible at room temperature, but the strongest quantum-spin characterization here used 65–186 mK [R088]; [R089] | NV spin initialization, control and readout operate at room temperature; high-quality optical networking usually uses cryogenics [R074] | The consequence depends on the application, but sapphire does not show NV-like room-temperature qubit operation |
| Host spin bath | Unavoidable dense \({}^{27}\text{Al}\), \(I=5/2\) | \({}^{12}\text{C}\), \(I=0\), can be isotopically enriched [R074]; [R079] | Diamond has a fundamental materials advantage |

| Claim | Status | Platform | Evidence | Reference |
|---|---|---|---|---|
| Optical population readout, ODMR and seconds-long \(T_1\) | Experimentally demonstrated | Cr:ruby ensemble, dilution refrigerator | Resonant PLE/ODMR and all-optical relaxation | [R088] |
| Coherent strong coupling of one Cr spin to one cavity photon | Not demonstrated | Cr:ruby | Inferred average single-spin coupling in hertz; collective mode failed \(\bar\Omega>\gamma_s\) | [R089] |
| Trace transition-metal spins couple to sapphire microwave modes | Experimentally demonstrated | Fe, Cr, V ensembles | Avoided crossings and ESR/hyperfine spectra | [R090] |
| Oxygen vacancies are optically active deep defects | Experimentally demonstrated and theoretically modeled | \(F\), \(F^+\) in alpha-alumina | Ensemble absorption/luminescence plus hybrid-DFT assignments | [R092]; [R093] |
| Oxygen vacancy is an optically readable single spin qubit | No supporting demonstration located | Sapphire \(V_O\) | Required antibunching/control/readout sequence absent from located literature | [R092]; [R093] |
| Implanted chromium can be optically activated | Experimentally demonstrated, ensemble | Cr-implanted sapphire | R-line luminescence after high-temperature anneal | [R094] |
| Deterministic interacting array of sapphire defects | No supporting demonstration located | Any sapphire center | No selected pair gates, array calibration, or many-body Hamiltonian validation located | [R088]; [R089]; [R090]; [R091]; [R092]; [R093]; [R094] |
| Sapphire defects realize topological order | Speculation | Sapphire defect lattice | No microscopic implementation or phase diagnostic | — |

A chromium ion in ruby is a physical spin. Two selected ions with a calibrated coherent interaction would constitute a coupled-qubit primitive.

A macroscopic spin ensemble collectively coupled to a single cavity mode is a distinct collective degree of freedom. An individual physical spin, a coupled pair, and a collective ensemble mode are not, solely by virtue of their existence, an encoded qubit, an emergent anyon, or a realization of topological order.

The cavity anticrossing reported in 2025 is therefore evidence for a collective hybrid spin–photon system, not for a topological material.

## Common analytical errors

A long longitudinal relaxation time \(T_1\), which characterizes the decay of spin-state populations toward thermal equilibrium, must not be interpreted as a long transverse coherence time \(T_2\), which characterizes the loss of relative phase coherence. A population can remain in an excited state for seconds even when phase coherence decays rapidly. A credible array proposal therefore requires Ramsey measurements of free-induction coherence, spin-echo measurements that refocus quasistatic dephasing, and driven-gate error measurements. These quantities must be measured for the same defect species, defect density, temperature, and device geometry proposed for the array.

Collective spin–photon coupling must also be distinguished from local single-spin coupling. If \(N\) similar spins couple to one electromagnetic mode, their in-phase superposition forms a bright collective mode whose coupling is enhanced by approximately \(\sqrt N\). The orthogonal collective superpositions are dark modes, which do not couple directly to that electromagnetic mode. Consequently, the measured collective coupling of 21 MHz cannot be assigned to a single spin. The model used in the ruby experiment placed the average single-spin coupling in the hertz range [R089]. Inhomogeneous broadening, meaning a distribution of spin-transition frequencies across the ensemble, and the inability to address a selected ion remain additional limitations.

Optical color does not by itself establish spin readout. An absorption band demonstrates that a defect has electronic transitions, while luminescence demonstrates that some excitation energy is emitted radiatively. Single-photon antibunching, which indicates emission from an individual quantum emitter; spin-dependent optical contrast; stable repeated optical cycling; photon indistinguishability; and charge-state stability are distinct experimental tests.

The performance of a host device must be evaluated separately from the performance of a defect qubit within that host. Sapphire’s large microwave quality factor \(Q\), defined as the ratio of stored resonator energy to the energy dissipated per cycle up to the conventional angular-frequency factor, makes it an excellent resonator substrate. The same low-loss resonators also make unwanted paramagnetic impurities at parts-per-billion concentrations experimentally detectable [R090]. Resonator performance and qubit performance must therefore be assessed independently.

A random increase in defect density is not equivalent to controlled fabrication. Increasing the chromium concentration reduces the average separation between chromium ions, but it does not specify the interaction graph, defined by the set of interacting defects and their pairwise couplings. Higher concentrations also introduce Cr pairs, energy transfer, dipolar broadening, and local strain. A designed Hamiltonian requires calibrated coupling signs, anisotropies, and connectivities rather than only a large number of nearby spins.

A theoretically calculated vacancy spectrum does not by itself establish a qubit platform. Agreement between first-principles calculations and measured optical bands supports the assignment of a spectral feature to a particular defect [R093]. It does not determine fabrication yield, the distribution of coherence times, readout fidelity, or the performance of a two-qubit gate.

## Evidence-supported assessment

[Experiment] Sapphire supports well-characterized paramagnetic dopants, meaning impurity ions with nonzero magnetic moments; narrow chromium optical lines; long low-temperature spin-relaxation times; exceptionally low-loss microwave modes; optical and microwave ensemble readout; radiation-induced vacancy color centers; and activation of implanted chromium [R088]; [R089]; [R090]; [R091]; [R092]; [R093]; [R094]. These capabilities are substantial components of masers, sensors, frequency standards, ensemble memories, and hybrid-resonator experiments.

For the specific objective of a dense and controllable architecture of interacting defects, the evidence available as of 24 August 2026 does not make sapphire competitive with diamond in demonstrated end-to-end qubit capability. The principal missing demonstrations are spin-selective optical readout from a single center, modern measurements of single-center \(T_2\) and gate fidelities, deterministic and verified defect placement, coherent gates between selected sapphire defects, and scalable nanophotonic integration around those defects. The unavoidable \({}^{27}\text{Al}\) nuclear-spin bath, which provides a source of magnetic noise and dephasing, is an additional materials disadvantage.

This assessment does not prove that such an architecture is impossible. [Proposal] A credible program for establishing sapphire as a defect-qubit platform would first demonstrate one identified \(\text{Cr}^{3+}\) or \(F^+\) center. It would then measure the inhomogeneous dephasing time \(T_2^*\), the Hahn-echo coherence time \(T_2\), optical-cycling behavior, and charge-state stability. The next requirement would be the creation and spectral resolution of a registered pair, meaning two defects with verified placement or identity, whose coherent coupling exceeds both transition linewidths.

An array-level Hamiltonian proposal would become evidence-based only after these milestones had been achieved. [Speculation] Extrapolating directly from ruby ensemble measurements to Fibonacci-like order omits all of these necessary intermediate demonstrations.

## Quantitative and conceptual checks

- Explain the four ground-state spin levels of \(\text{Cr}^{3+}\) in ruby.

  The \(3d^3\) electronic configuration gives total spin \(S=3/2\), so the allowed spin projections are \(m=\pm3/2,\pm1/2\). The distorted local crystal-field environment splits these four states into two pairs. Time-reversal symmetry keeps the members of each pair degenerate.

- Convert the 11.493 GHz zero-field splitting into an equivalent temperature.

  The zero-field splitting is the transition-frequency separation present without an applied magnetic field. Its thermal-energy equivalent is
  \[
  h\nu_0/k_B=(6.626\times10^{-34}\ \text{J
  s})(11.493\times10^9\ \text{s}^{-1})/(1.381\times10^{-23}\ \text{J
  K}^{-1})\approx0.552\ \text{K}.
  \]
  Thus, the 11.493 GHz splitting corresponds to only about half a kelvin. Strong passive thermal polarization therefore favors sub-kelvin operation.

- Identify the error in treating the 3.67 s \(T_1\) as a coherence result.

  \(T_1\) measures population relaxation. Phase noise can make \(T_2\) much shorter than \(T_1\), and the cited millikelvin ruby study did not measure \(T_2\).

- Demonstrate that the 21 MHz ruby-cavity result is not a single-spin coupling.

  Approximately \(2.6\times10^{15}\) spins shared the electromagnetic mode. The paper inferred an average coupling of 0.41 Hz per spin, or 1.25 Hz for the subset within the high-field mode volume. The measured 21 MHz value is the collective rate enhanced by \(\sqrt N\). Even this collective rate did not satisfy \(\bar\Omega>\gamma_s\), where \(\bar\Omega\) is the average collective coupling rate and \(\gamma_s\) is the spin linewidth.

- Identify the missing evidence when an \(F^+\) center is classified as a qubit solely because it is paramagnetic and luminescent.

  Evidence for isolation, coherent control, spin-dependent readout, stability, and measured error rates remains absent. Ensemble optical color does not establish this complete set of qubit capabilities.

- State sapphire’s strongest demonstrated advantage and its clearest weakness for defect arrays.

  Sapphire can exhibit extraordinarily low microwave dielectric loss. In comparison with diamond, however, the current evidence for single-defect qubits and controllable interactions between selected defects is sparse.

The resulting evidence establishes a ruby ion with four ground-state spin levels, an approximately 11.5 GHz splitting, and a seconds-long \(T_1\) that is not a measurement of \(T_2\). The comparative assessment therefore continues to favor diamond. The next analysis applies the same operational criteria to silicon carbide rather than treating the existence of a band gap alone as evidence of qubit performance.

## Sources

- [R088] V. K. Sewani, R. J. Stöhr, R. Kolesov, H. H. Vallabhapurapu,
T. Simmet, A. Morello, and A. Laucht, “Spin thermometry and spin
relaxation of optically detected Cr3+ ions in Al2O3 (ruby),”
Physical Review B 102, 104114 (2020). DOI: [10.1103/PhysRevB.102.104114](https://doi.org/10.1103/PhysRevB.102.104114).

- [R089] Z. Velluire-Pellat, E. Maréchal, C. Feuillet-Palma, and N.
Bergeal, “Spin-photon interaction between a ruby crystal and a
high-critical-temperature superconducting microwave cavity,”
Communications Physics 8, 236 (2025). DOI: [10.1038/s42005-025-02159-1](https://doi.org/10.1038/s42005-025-02159-1).

- [R090] W. G. Farr, D. L. Creedon, M. Goryachev, K. Benmessai, and M.
E. Tobar, “Ultrasensitive microwave spectroscopy of paramagnetic
impurities of sapphire crystals at millikelvin temperatures,”
Physical Review B 88, 224426 (2013). DOI: [10.1103/PhysRevB.88.224426](https://doi.org/10.1103/PhysRevB.88.224426).

- [R091] P. F. Moulton, “Spectroscopic and laser characteristics of
Ti:Al2O3,” Journal of the Optical Society of America B
3, 125–133 (1986). DOI: [10.1364/JOSAB.3.000125](https://doi.org/10.1364/JOSAB.3.000125).

- [R092] K. H. Lee and J. H. Crawford Jr., “Luminescence of the F
center in sapphire,” Physical Review B 19,
3217–3221 (1979). DOI: [10.1103/PhysRevB.19.3217](https://doi.org/10.1103/PhysRevB.19.3217).

- [R093] C. Wilhelmer, M. E. Turiansky, D. Waldhör, L. Cvitkovich, C.
G. Van de Walle, and T. Grasser, “Optical properties of vacancies in
aluminum oxide (alpha-Al2O3) from first principles,” Physical Review
Materials 9, 096202 (2025). DOI: [10.1103/5kvl-hktd](https://doi.org/10.1103/5kvl-hktd).

- [R094] T. M. Hensen, M. J. A. de Dood, and A. Polman, “Luminescence
quantum efficiency and local optical density of states in thin film ruby
made by ion implantation,” Journal of Applied Physics
88, 5142–5147 (2000). DOI: [10.1063/1.1314322](https://doi.org/10.1063/1.1314322).

- [R074] M. W. Doherty, N. B. Manson, P. Delaney, F. Jelezko, J.
Wrachtrup, and L. C. L. Hollenberg, “The nitrogen-vacancy colour centre
in diamond,” Physics Reports 528, 1–45 (2013).
DOI: [10.1016/j.physrep.2013.02.001](https://doi.org/10.1016/j.physrep.2013.02.001).

- [R079] G. Balasubramanian et al., “Ultralong spin coherence time in
isotopically engineered diamond,” Nature Materials
8, 383–387 (2009). DOI: [10.1038/nmat2420](https://doi.org/10.1038/nmat2420).

- [R095] B. D. Evans and M. Stapelbroek, “Optical properties of the
\(F^+\) center in crystalline Al2O3,”
Physical Review B 18, 7089–7098 (1978). DOI:
[10.1103/PhysRevB.18.7089](https://doi.org/10.1103/PhysRevB.18.7089).


---
