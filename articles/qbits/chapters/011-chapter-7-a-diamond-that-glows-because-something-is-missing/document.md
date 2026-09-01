# Chapter 7 — Nitrogen-vacancy centers in diamond


When a diamond containing an appropriate atomic defect is illuminated with a green laser, a single localized site can emit red light while the surrounding crystal remains dark.

The diamond consists of an almost perfect carbon lattice, meaning a periodic arrangement of carbon atoms. At the emitting site, one carbon atom is absent, producing a vacancy, and a neighboring carbon site is occupied by nitrogen rather than carbon.

An additional electron is localized on this nitrogen–vacancy pair and is responsible for the optical emission.

Although such a structure is a crystallographic defect, it is the physical system of interest here. The discussion proceeds from its red emission to its internal spin degree of freedom and then to related defects that emit at other wavelengths.

## Structure of the nitrogen-vacancy center

Removing one carbon atom from diamond and replacing a neighboring carbon atom with nitrogen produces a nitrogen–vacancy defect. The defect is not a surface dye; it is an atomic-scale structure embedded in the crystal. It has a preferred axis along the line joining the nitrogen and the vacancy, and it lacks a mirror operation that exchanges the two ends of that axis.

Illumination of this defect with 532-nm green light produces red emission.

Most of the emitted red light is distributed over a broad spectral band. A narrow component occurs near 637 nm.

This narrow spectral feature identifies the nitrogen–vacancy defect in a particular charge state.

A color center is defined here as a localized crystal defect that absorbs light at one wavelength and emits at another. The emitted color provides the laboratory signal, while the term *center* denotes the localized position of the defect in the crystal.

The useful charge state for most applications is the negatively charged nitrogen-vacancy center, denoted NV\(^-\). Its ground-state energy levels form a spin triplet, which is a three-level manifold with total electronic spin \(S=1\).

NV\(^-\) can operate at room temperature. Its optical transition remains sensitive to local electric fields, and only a small fraction of its emission lies in the narrow feature at 637 nm.

Consequently, identifying a defect as a color center does not establish that it is a usable qubit. Additional mechanisms are required to prepare, control, and measure the spin of NV\(^-\).

## Optical zero-phonon line

Broad red emission is unsuitable when two defects must behave as spectrally identical emitters. During most optical decays, lattice vibrations remove part of the emitted energy and broaden the spectrum.

The narrow component associated with emission that creates no lattice vibration is called the zero-phonon line, or ZPL. A phonon is a quantized lattice vibration. The term *zero-phonon* therefore means that the optical transition exchanges no phonon with the lattice; it does not mean that no photon is emitted. Because no vibrational energy is transferred, the ZPL is the part of the emission that can potentially match the optical transition of another center.

For NV\(^-\), the ZPL is at 637 nm. If the additional electron is removed, the defect becomes neutral NV\(^0\), whose ZPL is instead at about 575 nm [R074].

The nitrogen and vacancy remain unchanged, but the electron count and optical wavelength differ. The emitted spectrum therefore provides information about the defect’s charge state.

A common room-temperature optical cycle is represented schematically as follows:

```
532-nm light
|
v
3E excited triplet ---- red fluorescence ----> 3A2 ground triplet
| ^
+-- spin-selective leak into singlets -------------+
(stronger for m_s = ±1)
```

NV\(^-\) has a triplet ground-state manifold \(^3A_2\), an optically excited triplet manifold \(^3E\), and intermediate singlet states [R074]. A manifold is a set of related quantum states, and a singlet has total electronic spin \(S=0\). Green illumination excites population from \(^3A_2\) to \(^3E\). The excited state can decay directly to the ground triplet by red fluorescence, or it can undergo an indirect transition through the singlet states.

The indirect singlet pathway is spin selective: it is stronger for spin projection \(m_s=\pm1\) along the NV axis than for \(m_s=0\). Repeated green excitation therefore transfers an increasing fraction of the population into \(m_s=0\). During the initial fluorescence interval, the red emission is brighter for \(m_s=0\) than for \(m_s=\pm1\).

A single laser can therefore perform both optical spin preparation and statistical spin readout. Preparation occurs through preferential population of \(m_s=0\), while readout uses the spin-dependent fluorescence intensity. At room temperature, one conventional excitation pulse usually does not determine the spin state with certainty, so the measurement must be repeated.

Substantially improved readout can be obtained using resonant optical excitation at low temperature or a nearby nucleus as an auxiliary system. These methods require different experimental conditions and should not be treated as equivalent implementations of the room-temperature fluorescence protocol.

If the spin-selective singlet pathway is removed, green excitation still produces fluorescence. However, it no longer polarizes the spin into \(m_s=0\), and the brightness no longer measures \(m_s\).

The optical cycle is also not permanently closed. Optical excitation can convert NV\(^-\) into NV\(^0\).

Charge-repump illumination can probabilistically restore the additional electron. Both charge conversion and spin relaxation can suppress the desired red signal, but they are physically distinct failure mechanisms.

## Electron count and orbital occupancy

The structural designation “NV” specifies the nitrogen–vacancy geometry but not the number of electrons localized on the defect. Changing that number changes the electronic system.

Chapter 6 defined this integer electron-count classification as the charge state. The additional electron in NV\(^-\) produces the \(S=1\) ground state used in most sensing and qubit applications.

NV\(^0\) has different electronic levels and optical transitions and is not the same triplet qubit. NV\(^+\) is generally optically dark under the usual experimental conditions.

The stable charge state depends on nearby donors and acceptors, which respectively supply and capture electrons, as well as on the surface, optical power, and applied electrodes [R074].

Accordingly, NV\(^-\), rather than the less specific “NV,” should be used when referring to the qubit. The charge state is part of the physical specification.

This distinction is particularly important for the group-IV defects discussed below. The commonly studied spin–photon charge states are SiV\(^-\), GeV\(^-\), SnV\(^-\), and the less mature PbV\(^-\).

Neutral SiV\(^0\) is a distinct \(S=1\) center with an optical line near 946 nm. The evidence for single-center qubit operation in neutral GeV and SnV is substantially less mature.

Charge-state stabilization is therefore a device requirement rather than merely a matter of notation [R082].

## Neutral nitrogen-vacancy centers


A related class of defects contains a group-IV impurity atom \(M\)—silicon, germanium, tin, or lead—positioned between two carbon vacancies:

```
carbon lattice ... vacancy — M — vacancy ... carbon lattice
^ inversion center
```

This arrangement is called a split-vacancy structure. The midpoint is an inversion center: spatial inversion through that point maps the atomic arrangement onto itself.

The approximate point-group symmetry of this structure is denoted \(D_{3d}\). A point group classifies the symmetry operations that leave a localized structure unchanged. By comparison, the NV defect has a preferred axis but no inversion center and belongs to the \(C_{3v}\) point group.

Because the split-vacancy defect is invariant under inversion, a uniform electric field produces no first-order shift of its optical transition. Optical lines from separate defects can therefore be closer in frequency. This reduced first-order electric-field sensitivity is the relevant consequence of the geometry.

The useful negative charge state, \(M\)V\(^-\), has effective electronic spin \(S=1/2\) within orbitally degenerate ground and excited manifolds. Orbital degeneracy means that distinct orbital states have the same energy before additional interactions are included. Spin–orbit coupling, which couples the electron’s spin and orbital degrees of freedom, splits these manifolds. Heavier impurity atoms generally produce larger splittings. At a fixed cryogenic temperature, a larger splitting suppresses some phonon-mediated processes. However, it can also make direct microwave spin transitions less accessible unless strain or magnetic-field orientation mixes the states [R082].

Inversion symmetry should therefore be interpreted as an optical-line property, not as evidence that spin control is straightforward. Without inversion symmetry, first-order electric-field shifts return. Even when inversion symmetry is retained, strain, higher-order Stark shifts, local charges, and fabrication damage can still perturb the defect. A Stark shift is a change in an energy level or transition frequency caused by an electric field.

## Microwave transitions between spin-triplet sublevels

Quantitative modeling of the NV\(^-\) ground-state spin is required because microwave pulses provide controlled transitions between selected spin levels and thereby define an operational two-level system.

Let the NV symmetry axis define the \(z\) direction. Let \(S_x\), \(S_y\), and \(S_z\) be the dimensionless spin-1 matrices, with
\(S_z|m_s\rangle=m_s|m_s\rangle\) and \(m_s\in\{-1,0,+1\}\). The Hamiltonian is expressed in frequency units by dividing the energy operator \(H\) by Planck’s constant \(h\). A useful ground-state model is

\[
\frac{H}{h}=
D S_z^2
+\gamma_e\mathbf B\cdot\mathbf S
+E(S_x^2-S_y^2)
+\mathbf S\cdot\mathbf A\cdot\mathbf I
-\gamma_n\mathbf B\cdot\mathbf I
+P I_z^2.
\]

This Hamiltonian separates the principal interactions affecting the electronic and nuclear spins. Here \(D\) is the axial zero-field splitting in hertz; \(\gamma_e\) is the electron gyromagnetic ratio in hertz per tesla; \(\mathbf B\) is the magnetic field in tesla; \(E\) is a transverse strain- or electric-field-induced splitting in hertz; \(\mathbf I\) is the nitrogen nuclear-spin operator; \(\mathbf A\) is the hyperfine tensor in hertz, describing coupling between the electronic and nuclear spins; \(\gamma_n\) is the nuclear gyromagnetic ratio in hertz per tesla; and \(P\) is the quadrupole coefficient, present when the nucleus has \(I\ge1\). The term \(-\gamma_n\mathbf B\cdot\mathbf I\) is the nuclear Zeeman interaction, while \(P I_z^2\) represents the nuclear quadrupole interaction.

The parameter \(D\) is the zero-field splitting introduced in Chapter 6. The commonly quoted value 2.87 GHz does not arise from an applied magnetic field. It is the intrinsic crystal-field splitting that separates \(m_s=0\) from the degenerate \(m_s=\pm1\) levels before an external field is applied.

For the common \(^{14}\)NV\(^-\) center, the nitrogen nuclear spin is \(I=1\). For \(^{15}\)NV\(^-\), \(I=1/2\), so the nuclear quadrupole term is absent. At room temperature, the axial splitting is approximately \(D=2.87\) GHz, and \(\gamma_e\approx28.0\) GHz/T [R074].

To obtain a simple estimate of the microwave transition frequencies, assume that strain and hyperfine structure are negligible and that the magnetic field is aligned with \(z\). Under these assumptions,

\[
\frac{E_{m_s}}{h}=D m_s^2+\gamma_e B_zm_s.
\]

This equation gives the frequency-equivalent energy of each electronic spin projection. At \(B_z=10\) mT \(=0.010\) T, the magnitude of the electronic Zeeman shift is

\[
(28.0\ \mathrm{GHz/T})(0.010\ \mathrm T)=0.280\ \mathrm{GHz}.
\]

The corresponding microwave transition frequencies from \(|0\rangle\) are

\[
f_{0\rightarrow +1}=3.150\ \mathrm{GHz},\qquad
f_{0\rightarrow -1}=2.590\ \mathrm{GHz}.
\]

A resonant microwave pulse can therefore address either transition selectively. If \(|0\rangle\) and \(|-1\rangle\) are chosen as the computational basis states, \(|+1\rangle\) remains a leakage state, meaning a physical state outside the intended qubit subspace. The system functions as a qubit because it supports preparation, coherent rotation, and measurement, not simply because two energy levels can be identified.

If the magnetic field is not aligned with the NV axis, transverse contributions and the \(E\) term mix the spin states. If the third spin level is omitted from the model, pulse-induced population transfer into \(|+1\rangle\) will be incorrectly excluded from the error accounting.

## Hyperfine interaction with the adjacent nitrogen nucleus

Most carbon in diamond is \(^{12}\)C, which has nuclear spin \(I=0\). Natural diamond also contains about 1.1% \(^{13}\)C, for which \(I=1/2\).

Isotopic enrichment in \(^{12}\)C reduces the surrounding nuclear-spin bath, meaning the ensemble of uncontrolled spins that perturbs the central electronic spin. In contrast, a selected nearby \(^{13}\)C can be resolved and controlled as a long-lived quantum memory [R074].

The impurity atom can also provide an intrinsic nuclear spin:

nucleus |
nuclear spin \(I\) |
practical consequence |
|

\(^{14}\)N / \(^{15}\)N |
1 / 1/2 |
intrinsic NV hyperfine register; \(^{14}\)N also has quadrupole structure |
|

\(^{29}\)Si |
1/2 |
optional intrinsic SiV nuclear memory; spin-zero Si isotopes remove
it |
|

\(^{73}\)Ge |
9/2 |
a larger intrinsic register, but a more crowded hyperfine
spectrum |
|

\(^{117}\)Sn, \(^{119}\)Sn |
1/2 |
isotope-selectable SnV hyperfine degree of freedom |
|

\(^{207}\)Pb |
1/2 |
possible intrinsic PbV nuclear degree of freedom |
|

The group-IV isotope spins listed here, together with their spin-zero alternatives, are summarized in the group-IV review [R082].

[Experiment] A nearby nuclear spin can extend quantum-state storage and enable repetitive readout. It also introduces additional spectral transitions and calibration requirements. Its role depends on experimental control: unresolved, weak, and uncontrolled couplings constitute a spin bath, whereas resolved and controllable couplings constitute a register, meaning a set of addressable quantum degrees of freedom.

If a particular \(^{13}\)C nucleus is unresolved and uncontrolled, it contributes to the bath, and isotopic purification is beneficial.

If the same nucleus is spectrally resolved and actively driven, it acts as a register. In that case, isotopic purification would remove the memory together with the unwanted bath spins.

## Four crystallographic orientations and their experimental conditions


For NV\(^-\), the standard protocol uses off-resonant green excitation, microwave control, and spin-dependent red fluorescence. Radio-frequency fields address the lower-frequency transitions of \(^{14}\)N, \(^{15}\)N, or a resolved \(^{13}\)C nucleus.

Room-temperature operation is routine. Low-temperature operation remains useful when the optical line must be sufficiently narrow for photonic networking.

The inversion-symmetric group-IV defects require different operating protocols.

SiV\(^-\). Resonant optical excitation can prepare and read the spin through nearly cycling transitions, which repeatedly return population to the same states with limited leakage.

Microwave or Raman control can rotate the spin. Raman control uses two optical fields to drive an effective transition through an intermediate state. The inversion-symmetric optical transition is useful when photons from different emitters must be spectrally similar.

At roughly 4 K, however, phonons readily transfer population between ground-state orbital branches separated by only tens of gigahertz, causing rapid spin decoherence. Cooling to about 100 mK suppressed this process sufficiently to obtain \(T_2=13\) ms, \(T_1>1\) s, and 89% single-shot spin readout in one bulk-device experiment [R083].

These three performance values apply specifically to operation at about 100 mK.

GeV\(^-\). Its optical zero-phonon line is near 602 nm, and its ground-state orbital splitting is larger than that of SiV\(^-\) [R082].

Coherent microwave control and optical readout have been demonstrated. [Experiment] A millikelvin experiment reported Ramsey \(T_2^*\approx1.43\ \mu\)s, spin-echo coherence of roughly \(0.44\) ms, and more than 20 ms under Carr–Purcell–Meiboom–Gill, or CPMG, dynamical decoupling [R084]. Ramsey \(T_2^*\) measures free-induction dephasing, whereas CPMG applies a sequence of refocusing pulses to suppress selected noise. The reported “more than 20 ms” is therefore not an unconditioned free-induction time.

SnV\(^-\). Its zero-phonon line is near 619 nm, and its ground-state orbital splitting is about 0.85 THz. Relative to SiV\(^-\), this larger splitting reduces thermal orbital excitation at helium-like temperatures [R082].

Applied strain enables magnetic transitions that would otherwise be optically or magnetically forbidden. [Experiment] In a cryogenic strained device containing a superconducting microwave waveguide, a Hahn-echo sequence produced about \(0.43\) ms, while CPMG-64 extended \(T_2\) to \(10(1)\) ms; the reported single-pulse fidelity was about 99.1% [R085]. The notation \(10(1)\) ms reports the stated uncertainty in the final digit.

These measurements were obtained from one center using specified pulse sequences and should not be interpreted as median performance across an array.

PbV\(^-\). Optical emitters attributed to a lead-vacancy split-vacancy family have been reported, together with large spin–orbit splittings [R082].

Coherent spin initialization, gate operations, readout, and pairwise coupling have not been established at the same level of maturity as for NV\(^-\), SiV\(^-\), GeV\(^-\), and SnV\(^-\). A larger spin–orbit splitting may improve thermal isolation while making microwave access more difficult.

[Proposal] PbV\(^-\) is therefore a candidate for experimental evaluation rather than a demonstrated, directly deployable qubit.

Each group-IV center has a different combination of optical contrast, phonon isolation, and microwave accessibility. Any quoted \(T_2\) value must therefore be accompanied by its temperature and pulse sequence because changing those conditions defines a different experiment.

## Tabulated properties and associated experimental conditions

The following rows report published benchmarks rather than universal or typical constants. The experiments differ in temperature, magnetic field, sample, pulse sequence, and measurement definition. The final column applies a deliberately strict criterion for scalable interacting arrays.

center |
useful electronic/optical facts |
representative spin result and conditions |
readout/control demonstrated |
demonstrated coupling |
evidence for a scalable interacting array |
|

NV\(^-\) |
\(S=1\); \(D\approx 2.87\) GHz; 637-nm ZPL; weak ZPL
fraction |
\(T_2 = 1.8\) ms in an isotopically
engineered bulk sample at room temperature under Hahn echo [R079] |
room-temperature optical preparation/fluorescence and microwave
control; cryogenic resonant single-shot methods |
two NV electron spins at about 25 nm were entangled at room
temperature with dipolar coupling \(4.93(5)\) kHz [R080]; remote NV registers
later supported a teleported CNOT [R081] |
No. Pair and network-node demonstrations do not
establish a uniform dense lattice |
|

SiV\(^-\) |
\(S=1/2\) Kramers branches; about
737-nm ZPL; strong ZPL emission and inversion symmetry [R082] |
\(T_2 = 13\) ms and \(T_1 > 1\) s at about 100 mK in bulk
diamond [R083] |
resonant optical initialization/readout, Raman and microwave
control; 89% single-shot readout in that experiment [R083] |
two SiV optical emitters coupled through one nanocavity showed
superradiant/subradiant collective modes [R086] |
No. The cavity experiment was a selected emitter
pair, not a fabricated spin lattice |
|

GeV\(^-\) |
\(S=1/2\); about 602-nm ZPL; larger
orbital splitting than SiV\(^-\)
[R082] |
\(T_2^* \approx 1.43\ \mu\)s, echo
\(\sim 0.44\) ms, CPMG \(> 20\) ms at millikelvin temperature
[R084] |
optical spin readout and coherent microwave control |
local hyperfine coupling is usable; no multi-GeV spin entangling
result is used as evidence here |
No. Long coherence of one center says nothing about
placement yield or coupling uniformity |
|


SnV\(^-\) |
\(S=1/2\); about 619-nm ZPL; ground
orbital splitting \(\sim 0.85\) THz
[R082] |
echo \(\sim 0.43\) ms; CPMG-64
\(10(1)\) ms in a cryogenic strained,
superconducting-waveguide device [R085] |
optical preparation/readout and strain-enabled microwave control;
about 99.1% single-pulse fidelity in that device [R085] |
coupling to a nearby \(^{13}\)C was
observed [R085]; photonic-interface work does not yet equal a two-SnV
gate |
No. Site-controlled creation exists, but a coherent
interacting array has not been shown |
|

PbV\(^-\) / SiV\(^0\) |
PbV\(^-\): less mature group-IV
optical center; SiV\(^0\): distinct
neutral \(S=1\) center near 946 nm |
no directly comparable benchmark adopted |
partial optical/spin functionality, platform dependent [R082] |
no array-level coupling evidence adopted |
No; exploratory. Do not average these distinct
charge states into the rows above |
|

[Experiment] The 2026 NV network experiment implemented an unconditional teleported controlled-NOT, or CNOT, operation between remote diamond registers. The \(^{13}\)C nuclei served as data qubits, while the NV electron spins provided local logic, readout, and photonic entanglement [R081]. This result demonstrates substantial system-level integration. However, the interaction was modular and operated through measurement and feed-forward, meaning that measurement outcomes were used to determine subsequent operations. It was not a static nearest-neighbor interaction energy in a dense crystal array.

Similarly, the two-SiV nanocavity experiment observed coherent photon-mediated collective optical states [R086]. In that experiment, a shared photonic mode coupled selected emitters.

Such coupling does not by itself demonstrate a deterministic two-spin gate, a uniform graph of couplings, or passive many-body order. Any claim of an interaction must specify both the coupled physical quantities and the protocol under which the coupling operates.

An NV electron spin is a physical qubit. A collection of controlled electronic and nuclear spins constitutes a processor register only when an encoding is specified.

Two remote registers connected through heralded photons form a quantum network. Heralding means that a measurement signal indicates successful generation of the desired photonic link. None of these observations alone demonstrates an emergent anyon, a topologically ordered medium, or a topologically protected logical qubit.

## Three characteristic spatial scales


Color centers can be fabricated by incorporating the impurity during chemical-vapor-deposition, or CVD, growth; by focused ion implantation followed by annealing; by creating vacancies near pre-existing dopants; or by femtosecond-laser processing. Annealing is controlled heating that promotes vacancy motion and defect formation. Nanopillars, waveguides, and photonic-crystal cavities can subsequently improve photon collection or coupling to an optical cavity. Each fabrication step can introduce strain, surface charge noise, paramagnetic damage, or spectral diffusion, which is a time-dependent fluctuation of the optical transition frequency [R082].

Three distinct spatial metrics must be considered separately.

- Delivery resolution is the spatial precision with which an ion beam or laser deposits energy.

- Final defect distribution is the resulting spatial distribution after ion straggle, vacancy migration, and defect-complex formation. Ion straggle is the stochastic spread of implanted-ion trajectories within the material.

- Usable-qubit yield is the fraction of processed sites that have the required charge state, orientation, optical transition frequency, and coherence class.

[Experiment] A 2025 SnV\(^-\) study combined focused implantation, local laser annealing, and in-situ fluorescence feedback. It reported sub-50-nm site positioning, implantation doses as low as a Poisson mean of one implanted ion per site, and site-selective formation of individual SnV\(^-\) emitters [R087]. A Poisson mean of one describes a stochastic implantation process whose expected ion count is one per site, not a deterministic count of exactly one.

The same study identified high-yield activation as an unresolved scaling problem. Sub-50-nm site registration does not demonstrate that every site contains exactly one mutually resonant and coherent SnV\(^-\) center at a selected three-dimensional coordinate.

CVD growth generally provides high crystalline quality but statistical defect positions. Implantation provides mask-defined coordinates but introduces lattice damage and incurs penalties from conversion yield and ion straggle.

Laser feedback improves control over activation but does not establish an interacting array. To realize a specified defect Hamiltonian, fabrication must simultaneously satisfy requirements on position, orientation, charge state, optical frequency, and coherence.

If five independent fabrication criteria each have a yield below unity, their combined yield is the product of those five probabilities and can therefore be small. This limitation follows from elementary probability rather than from topological physics.

## Residual spin-decoherence mechanisms

For NV\(^-\), important decoherence and control-error channels include the \(^{13}\)C nuclear-spin bath, substitutional-nitrogen electron spins, surface spins for shallow defects, magnetic-field drift, temperature- and strain-induced shifts of \(D\), microwave-amplitude errors, optical spectral diffusion, and charge conversion [R074]. Isotopic purification removes much of the \(^{13}\)C bath but does not eliminate surface effects or noise from the control electronics.

For negatively charged group-IV centers, inversion symmetry reduces the first-order electric-field sensitivity of optical transitions. It does not eliminate sensitivity to strain, higher-order Stark shifts, local charges, or fabrication damage.

A principal low-temperature limitation of these defects is orbital–phonon scattering, in which lattice vibrations transfer population or coherence between orbital states. Cooling suppresses thermal occupation, as does increasing the spin–orbit splitting.

Strain introduced to enable control can also modify transition selection rules and spectra [R082]; [R083]; [R084]; [R085]. Selection rules specify which transitions are allowed or suppressed by the symmetries and matrix elements of the system.

Dense arrays introduce mechanisms that may be absent or less important in isolated-center measurements. Implantation damage accumulates, optical transitions become spectrally crowded, microwave fields become spatially nonuniform, dipolar neighbors act both as interaction resources and as a spin bath, and nanophotonic structures place defects closer to surfaces.

[Speculation] A defect that performs best in a pristine bulk sample may perform less well after the fabrication required for coupling and individual addressing. Measurements on fabricated ensembles and arrays are required to determine the actual performance ordering.

## Common analytical errors

- Reporting the largest \(T_2\) without specifying the pulse sequence is misleading. \(T_2^*\), Hahn-echo \(T_2\), and CPMG-protected coherence measure responses to different noise spectra and control conditions. A many-body gate cannot automatically use a CPMG-protected memory time if the decoupling sequence is incompatible with the required interaction.

- Wavelength alone does not characterize an optical interface. The zero-phonon fraction, linewidth, spectral diffusion, quantum efficiency, cavity cooperativity, collection loss, and charge stability are also relevant. Cavity cooperativity quantifies the relative strength of coherent emitter–cavity coupling compared with dissipative losses. An optical line that is narrow in bulk diamond can broaden after nanofabrication.

- Charge-state and isotope labels cannot be omitted. NV\(^0 \ne\) NV\(^-\), and SiV\(^0 \ne\) SiV\(^-\). A \(^{73}\)GeV center has a different hyperfine state space from a GeV center containing a spin-zero germanium isotope.

- Single-center performance cannot be directly extrapolated to \(N\) centers. A single-center coherence time does not characterize the array-wide distributions of coherence, transition frequency, charge stability, or coupling strength. Pairwise entanglement demonstrates a protocol for one pair, not an extensible lattice.

- Remote coupling is not equivalent to a local material Hamiltonian. Heralded photonic links, cavity-mediated optical modes, direct magnetic dipole interactions, and hyperfine interactions are physically distinct resources. A teleported gate is a genuine quantum coupling operation, but it is not passive local exchange.

- A controllable register is not necessarily topological. The NV and group-IV experiments described in this chapter demonstrate physical qubits, memories, and network primitives. None of the experiments cited here demonstrates emergent topological order in an array of diamond color centers.

## Conceptual checks

- **Charge-state notation for NV centers.** “NV” denotes a nitrogen-vacancy defect, consisting of a substitutional nitrogen atom adjacent to a vacant lattice site. In a qubit discussion, the notation must include a charge superscript because the electron count determines the spin and optical level structure. NV\(^-\) is the standard \(S = 1\) qubit, whereas NV\(^0\) and NV\(^+\) are physically different systems.

- **Microwave transition frequencies at \(B_z = 10\) mT.** The Zeeman interaction is the energy shift produced by a magnetic field. For the axial field \(B_z = 10\) mT, its frequency contribution is
  \[
  (28.0\ \mathrm{GHz/T})(0.010\ \mathrm T) = 0.280\ \mathrm{GHz}.
  \]
  Therefore, the two microwave transition frequencies from \(|0\rangle\) are given by \(D \pm \gamma_e B_z\), where \(D\) is the zero-field splitting and \(\gamma_e\) is the electron gyromagnetic ratio. The resulting frequencies are
  \[
  2.87 + 0.28 = 3.15\ \mathrm{GHz}
  \]
  and
  \[
  2.87 - 0.28 = 2.59\ \mathrm{GHz}.
  \]
  Thus, the two frequencies are \(3.150\) GHz and \(2.590\) GHz.

- **Temperature dependence of SiV\(^-\) operation.** SiV\(^-\) denotes the negatively charged silicon-vacancy center. At about 4 K, phonons induce population transfer between the nearby orbital branches, causing the spin to lose coherence. The cited \(T_2 = 13\) ms, \(T_1 > 1\) s, and 89% single-shot readout apply to operation at the lower temperature of about 100 mK. Here, \(T_2\) is the spin-coherence time, \(T_1\) is the longitudinal spin-relaxation time, and single-shot readout is the determination of the spin state from one measurement attempt.

- **Interpretation of a 10 ms CPMG result.** CPMG denotes the Carr–Purcell–Meiboom–Gill dynamical-decoupling sequence, which uses refocusing pulses to suppress specified sources of dephasing. A 10 ms CPMG coherence result is therefore the coherence time obtained under that particular pulse sequence, not an unrestricted interval available for gate operations. A many-body gate that is incompatible with the refocusing pulses cannot use the reported coherence time as its available gate time.

- **Scope of direct two-NV dipolar entanglement.** A direct dipolar interaction is the magnetic coupling between two spin dipole moments. Experiments using this interaction have established that a selected pair of NV centers can be coherently coupled and entangled at room temperature. They have not established controlled yield or uniformity for a large array.

- **Limitations of sub-50-nm site registration.** Site registration specifies the measured location of a defect-delivery site. Sub-50-nm registration alone does not constitute a scalable interacting array because occupancy, charge state, resonance frequency, coherence, and designed coupling are independent requirements. The cited SnV study, concerning tin-vacancy centers, identified high-yield activation as an unresolved problem.

NV\(^-\) provides mature room-temperature spin control but has a comparatively difficult optical interface, meaning the mechanism that couples the spin qubit to optical photons. Inversion-symmetric group-IV negative centers, which are negatively charged vacancy defects containing group-IV impurity atoms and possessing inversion symmetry, provide stronger coherent optical emission and generally require cryogenic operation that accounts for phonon-induced processes.

The charge state and isotope are both part of the device specification. Direct dipolar coupling, hyperfine coupling between electron and nuclear spins, cavity-mediated coupling through a confined optical mode, and remote photonic coupling have all been demonstrated in limited settings.

No cited result involving a single center, a pair of centers, a cavity, a network, or site placement establishes a scalable interacting diamond array.

## Sources

- [R074] M. W. Doherty, N. B. Manson, P. Delaney, F. Jelezko, J. Wrachtrup, and L. C. L. Hollenberg, “The nitrogen-vacancy colour centre in diamond,” Physics Reports 528, 1–45 (2013). DOI: [10.1016/j.physrep.2013.02.001](https://doi.org/10.1016/j.physrep.2013.02.001).

- [R079] G. Balasubramanian et al., “Ultralong spin coherence time in isotopically engineered diamond,” Nature Materials 8, 383–387 (2009). DOI: [10.1038/nmat2420](https://doi.org/10.1038/nmat2420).

- [R080] F. Dolde et al., “Room-temperature entanglement between single defect spins in diamond,” Nature Physics 9, 139–143 (2013). DOI: [10.1038/nphys2545](https://doi.org/10.1038/nphys2545).

- [R081] M. Iuliano et al., “Unconditionally teleported quantum gates between remote solid-state qubit registers,” Nature Communications 17 (2026). DOI: [10.1038/s41467-026-72818-6](https://doi.org/10.1038/s41467-026-72818-6).

- [R082] C. Bradac, W. Gao, J. Forneris, M. E. Trusheim, and I. Aharonovich, “Quantum nanophotonics with group IV defects in diamond,” Nature Communications 10, 5625 (2019). DOI: [10.1038/s41467-019-13332-w](https://doi.org/10.1038/s41467-019-13332-w).

- [R083] D. D. Sukachev et al., “Silicon-vacancy spin qubit in diamond: a quantum memory exceeding 10 ms with single-shot state readout,” Physical Review Letters 119, 223602 (2017). DOI: [10.1103/PhysRevLett.119.223602](https://doi.org/10.1103/PhysRevLett.119.223602).

- [R084] K. Senkalla, G. Genov, M. H. Metsch, P. Siyushev, and F. Jelezko, “Germanium vacancy in diamond quantum memory exceeding 20 ms,” Physical Review Letters 132, 026901 (2024). DOI: [10.1103/PhysRevLett.132.026901](https://doi.org/10.1103/PhysRevLett.132.026901); arXiv: [2308.09666](https://arxiv.org/abs/2308.09666).

- [R085] I. Karapatzakis et al., “Microwave control of the tin-vacancy spin qubit in diamond with a superconducting waveguide,” Physical Review X 14, 031036 (2024). DOI: [10.1103/PhysRevX.14.031036](https://doi.org/10.1103/PhysRevX.14.031036).

- [R086] R. E. Evans et al., “Photon-mediated interactions between quantum emitters in a diamond nanocavity,” Science 362, 662–665 (2018). DOI: [10.1126/science.aau4691](https://doi.org/10.1126/science.aau4691); arXiv: [1807.04265](https://arxiv.org/abs/1807.04265).

- [R087] X. Cheng et al., “Laser activation of single group-IV colour centres in diamond,” Nature Communications 16, 5124 (2025). DOI: [10.1038/s41467-025-60373-5](https://doi.org/10.1038/s41467-025-60373-5).

---
