# Chapter 9 — Silicon carbide and related defect-spin platforms



Silicon carbide is a commercially manufactured semiconductor rather than a gemstone. It is already used in electric-vehicle inverters and is available as wafers at industrial scale. A neighboring silicon atom and carbon atom can be removed from the crystal, leaving localized electrons with an experimentally accessible spin degree of freedom.

This adjacent pair of missing atoms is related to vacancy defects in diamond, but it is embedded in an industrially produced crystal.

The silicon-carbide platform already supports wafer processing, ion implantation, etching, electronic integration, and optical waveguides. This chapter examines how effectively those technologies support defect-spin systems and compares them with other material platforms.

No host material is universally superior. Each provides a different combination of physical properties and fabrication capabilities.

Silicon carbide has the broadest industrial processing infrastructure among the optical defect hosts considered here. Hexagonal boron nitride provides an atomically thin host geometry.

Rare-earth-doped crystals provide high-performance quantum memories. Silicon provides a distinct, highly developed semiconductor platform.

Oxides form a broad class of candidate materials. Diamond remains the benchmark established two chapters earlier.

The relevant comparison is therefore more specific than identifying the material with the longest measured memory time. The central question is which host permits many spins to be placed, distinguished, coupled, tuned, and measured under a mutually compatible set of operating conditions.

## Single-defect quality and array performance

A single defect may support reliable initialization, stable quantum evolution, and measurable signals. Initialization is the preparation of a known quantum state; coherent control is the deliberate unitary manipulation of that state; coherence is the preservation of quantum phase information; and readout is the inference of the state from an experimental signal. These properties characterize one spin.

An array imposes additional requirements. Defects of the required type must be created at selected sites, individual spins must be controlled without unintentionally controlling adjacent spins, each spin must be measurable, and fabrication must preserve the properties of neighboring defects.

A six-hour memory does not compensate for an unsuitable device geometry. Conversely, a patterned grid of optical emitters is insufficient if the identities and spin properties of those emitters are unknown.

Define the first performance category as single-defect quality: the initialization, coherent control, coherence, and readout of one spin. Define the second category as array performance: the ability to place, distinguish, couple, tune, and measure many spins under one compatible set of conditions.

These categories describe different physical systems. Ten high-quality but isolated spins do not constitute an array.

The two performance categories can initially be represented as qualitative labels rather than numerical figures of merit:

- \(Q_{\mathrm{single}}\) is the
quality of initialization, coherent control, coherence, and readout for
one defect;


- \(Q_{\mathrm{array}}\) is placement
yield, interaction reproducibility, addressability, routing, and
compatibility with fabrication.

Array performance is governed by a bottleneck condition:

\[
Q_{\mathrm{array}}\ \text{is limited by its weakest required operation.}
\]

A long transverse coherence time \(T_2\), which measures the persistence of spin-phase coherence, cannot replace a missing two-spin interaction. Atomic-scale placement cannot replace an unavailable readout mechanism. Similarly, combining record values obtained from different samples, temperatures, and pulse sequences does not describe a realizable device operating under one set of conditions.

Ignoring the bottleneck criterion would favor the host with the longest published memory time. Applying the criterion shows that six-hour nuclear coherence without a designed nearest-neighbor interaction still does not establish an array.

## Adjacent vacancy defects in silicon carbide

The principal silicon-carbide defects considered here are a neighboring missing silicon atom and carbon atom, commonly written \(V_{\mathrm{Si}}V_{\mathrm C}^0\), and a negatively charged missing silicon atom, \(V_{\mathrm{Si}}^-\). A vacancy is an unoccupied atomic site in an otherwise ordered crystal lattice, and the superscripts specify the defect charge state.

The adjacent vacancy pair is called a divacancy, meaning two neighboring vacancies.

![Two panels compare chromium substituting for aluminum in corundum with adjacent silicon and carbon vacancies in silicon carbide.](/notes/assets/defects-to-topological-qubits/host-defect-comparison.svg)

*Ruby contains chromium substituted on an aluminum site within an oxygen coordination cage. The silicon-carbide divacancy consists of adjacent unoccupied sites, one on each sublattice.*

The neutral divacancy has electronic spin \(S=1\), where \(S\) is the total spin quantum number. The silicon vacancy commonly used in 4H-SiC has \(S=3/2\).

Silicon carbide occurs in multiple polytypes, which are crystal structures with the same chemical composition but different periodic stacking sequences.

The common wafer polytype considered here is 4H-SiC. Different stacking sequences and inequivalent lattice sites produce different optical and spin spectra.

This structural diversity provides possible tuning options, but it also increases the number of defect configurations that must be identified and controlled.

Consequently, “a spin in SiC” does not specify a unique physical system. Charge state, crystal stacking, and lattice site all affect the spectrum before a control pulse is designed.

## Single-spin control

Consider a single spin-1 divacancy in 4H-SiC. Using dimensionless spin operators \(S_x,S_y,S_z\), the ground-state Hamiltonian, expressed in frequency units, is


\[
\frac{H}{h}
=
D\!\left(S_z^2-\frac{S(S+1)}{3}\right)
+E(S_x^2-S_y^2)
+\gamma_e\mathbf B\cdot\mathbf S.
\]

Here \(H\) is energy in joules,
\(h\) is Planck’s constant in
joule-seconds, \(D\) and \(E\) are axial and transverse
zero-field-splitting frequencies in hertz, \(\mathbf B\) is the magnetic field in tesla,
and \(\gamma_e=g\mu_B/h\) is the
electron-spin gyromagnetic ratio in hertz per tesla. Zero-field splitting is the energy splitting between spin sublevels in the absence of an applied magnetic field. The electron \(g\)-factor is near 2, so \(\gamma_e\approx28\
\mathrm{GHz\,T^{-1}}\).

Assume that the magnetic field has a component \(B_z\) along the defect axis and that \(E\) is small compared with the other Hamiltonian terms. Under these assumptions, the microwave transition frequencies from \(m_s=0\) to \(m_s=\pm1\), where \(m_s\) is the spin projection quantum number, are approximately

\[
\nu_\pm=D\pm\gamma_e B_z.
\]

This expression shows that the axial magnetic field shifts the two transitions in opposite directions. A 2024 SiC-on-insulator experiment measured a PL6 center with \(D=1340.4\pm1.3\ \mathrm{MHz}\) and a field
slope of \(2.82\pm0.02\
\mathrm{MHz\,G^{-1}}\), while coherently controlling the
implanted single spin at room temperature [R099]. For \(B_z=5.0\ \mathrm{mT}=50\ \mathrm G\), the Zeeman shift is


\[
\gamma_e B_z
=(2.82\ \mathrm{MHz\,G^{-1}})(50\ \mathrm G)
=141\ \mathrm{MHz},
\]

and the two transition frequencies are therefore

\[
\nu_-\approx1.199\ \mathrm{GHz},\qquad
\nu_+\approx1.481\ \mathrm{GHz}.
\]

The dimensional consistency follows from \(\mathrm{MHz/G}\times\mathrm
G=\mathrm{MHz}\). An optical pulse initializes the spin. A microwave tone near one transition then drives Rabi oscillations, which are coherent oscillations of the spin-state population under resonant driving. Spin-dependent fluorescence, in which the emitted light depends on the spin state, or spin-to-charge conversion, in which the spin state is mapped onto a measurable charge state, provides readout. [Experiment] These operations have each been
demonstrated for SiC divacancies, although not all record values occur
in one room-temperature dense array [R096]; [R097]; [R098]; [R099].

An implanted PL6 spin can therefore be spectrally selected and coherently controlled. This result contributes to \(Q_{\mathrm{single}}\), but it does not establish the identity or interaction of neighboring sites.

## Site-selective control and crosstalk

The same spin can be used to analyze addressability, defined as the ability to control one selected site without significantly affecting another. Assume, as a design condition rather than a reported array result, that local strain or a magnetic-field gradient separates the transition frequencies of neighboring sites by \(\Delta=20\ \mathrm{MHz}\). Let one site be driven with cyclic-frequency Rabi rate \(\Omega=2\
\mathrm{MHz}\). A resonant \(\pi\) pulse, which transfers the population between the two driven levels, has duration

\[
t_\pi=\frac{1}{2\Omega}=250\ \mathrm{ns}.
\]

The neighboring spin is detuned from resonance. In the regime where \(\Omega\) is small compared with \(\Delta\), the leading residual population transferred at the unintended site scales approximately as

\[
p_{\mathrm{xtalk}}\sim\left(\frac{\Omega}{\Delta}\right)^2=10^{-2}.
\]

This residual excitation is crosstalk: an intended operation on one spin also perturbs another spin. It results from incomplete spectral selectivity.

Increasing \(\Omega\) shortens the gate time but increases crosstalk at fixed \(\Delta\). Increasing \(\Delta\) improves site selection, but it requires reproducible gradients or local tuning and may make nominally identical couplings unequal.

Selective control does not by itself provide an interaction. A two-spin coupling rate \(J\) must also exceed the relevant spectral linewidth and decoherence rates. The next chapter quantifies this trade-off rather than treating scalability as an unspecified property.


The implanted object described above is a physical defect-spin qubit. A defect electron coupled to a nearby \(^{13}\mathrm
C\) nuclear spin forms a small quantum register, meaning a set of coupled quantum degrees of freedom that can store and process information. Patterning 64 sites changes the number of fabricated sites, but not the physical category of the qubits.

If the detuning is removed, the same pulse controls both sites. If the detuning is made very large, the interaction strengths \(J_{ij}\) may cease to be uniform. Addressability and coupling therefore impose competing design requirements.

## Interaction topology in a defect array

For defects indexed by \(i\), a
minimal many-spin Hamiltonian expressed in frequency units is

\[
\frac{H_{\mathrm{array}}}{h}
=
\sum_i \frac{H_i}{h}
+
\sum_{i<j}J_{ij}\,\mathbf S_i\cdot\mathbf S_j
+
\frac{H_{\mathrm{drive}}}{h}.
\]

Here \(H_i\) is the single-defect
Hamiltonian defined above, \(J_{ij}\) is
a coupling frequency in hertz between sites \(i\) and \(j\), and \(H_{\mathrm{drive}}\) contains optical,
microwave, electric, or strain control terms. The isotropic scalar product \(\mathbf S_i\cdot\mathbf S_j\) serves only as a simplified representation of the interaction. Magnetic dipolar coupling is anisotropic, meaning that it depends on the orientation of the spins and their displacement. Exchange coupling depends strongly on electronic wavefunction overlap, while cavity-mediated and phonon-mediated interactions depend on the spatial structure of the relevant electromagnetic or vibrational mode.

The interaction graph is the set of coupled site pairs, including unintended couplings. Physical geometry alone does not determine this graph. The positions of two optical spots in an image do not determine \(J_{ij}\).

An array proposal must therefore specify five mappings:

- site map: intended position \(\rightarrow\) actual active defect and
charge state;

- spectrum map: actual defect \(\rightarrow\) optical and microwave
transition frequencies;

- control map: control line or beam \(\rightarrow\) addressed subset and
crosstalk;

- interaction map: geometry \(\rightarrow J_{ij}\), including unwanted
edges;


- measurement map: physical signal \(\rightarrow\) inferred local or collective
observable.

Omission of any one of these maps leaves a major part of the device operation unspecified.

## Experimentally demonstrated silicon-carbide capabilities

[Experiment] Individual neutral divacancies in
high-purity 4H-SiC have been optically isolated and coherently
controlled; ensemble Hahn-echo coherence exceeded \(1\ \mathrm{ms}\) at low temperature [R096]. A Hahn echo is a pulse sequence that refocuses reversible dephasing in a spin ensemble. In isotopically purified 4H-SiC at \(5\
\mathrm K\), a single divacancy reached \(T_2=5.3\pm1.3\ \mathrm s\) using up to
16,384 dynamical-decoupling pulses, with end-to-end spin-to-charge
readout fidelity \(80.8\pm0.6\%\)
[R097]. Dynamical decoupling uses repeated control pulses to suppress selected environmental noise, and readout fidelity is the probability of correctly inferring the prepared state. The operating condition is essential to interpreting the result: “five-second coherence” is not a bare
Hahn echo, not room temperature, and not an implanted dense array.

SiC is also compatible with relevant fabrication processes. [Experiment] Implanted \(V_{\mathrm{Si}}^-\) centers retained nearly lifetime-limited optical emission and high spin coherence in etched nanophotonic waveguides, with control of nearby nuclear spins [R098]. Lifetime-limited emission has an optical linewidth close to the minimum set by the excited-state lifetime.

[Experiment] In 2024, selective carbon implantation through an \(8\times8\) mask of 100-nm-diameter holes created a designed PL6 array in SiC-on-insulator; the same study integrated an electron–nuclear register into a waveguide and reported ambient-condition entangled-state fidelities of 0.89 before and 0.88 after integration [R099]. These results provide unusually complete evidence spanning materials processing, spin control, and photonic integration.

[Experiment] The electronic readout route also advanced in
2025: room-temperature photoelectrical magnetic-resonance readout of a
single \(V_{\mathrm{Si}}^-\) spin
produced a signal-to-noise ratio 1.7–2 times that of optical detection
in the same study [R104]. Photoelectrical magnetic resonance detects spin-dependent electrical signals under optical excitation. This result supports the feasibility of integrated charge collection, but it does not yet establish parallel, high-fidelity readout of a coupled array.

These experiments have not yet produced the required interacting electron-spin lattice. The mask pitch and defect-activation statistics do not imply nanometer-accurate final defect coordinates.

One optically bright location may contain zero, one, or several relevant defects. The 2024 entanglement was between one defect electron and a nearby nuclear spin, not between selected electron defects across the \(8\times8\) pattern [R099].

SiC has a leading position among industrially processable optical defect hosts because several necessary technologies coexist in one material system, not because a controlled interaction graph has already been demonstrated.

Thus, SiC has substantial \(Q_{\mathrm{single}}\), and several components of \(Q_{\mathrm{array}}\) have been demonstrated. The remaining bottleneck is the absence of controlled electron–electron interaction edges.


## Atomically thin hexagonal boron nitride

A monolayer or few-layer sheet of hexagonal boron nitride, abbreviated hBN, places every defect close to a surface, electrostatic gate, resonator, and potential neighboring defect. This geometry is favorable for planar interaction graphs and photonic integration. It also exposes the spins to noise from adsorbed atoms and molecules.

[Experiment] Single carbon-related hBN defects
showed room-temperature optically detected magnetic resonance: the
fluorescence changed when a microwave tone hit the spin. Optically detected magnetic resonance, or ODMR, identifies spin transitions through microwave-induced changes in fluorescence. In the reported
material only 27 of more than 400 investigated isolated defects showed a
measurable signal — about 5% — and saturated linewidths were about 35
MHz [R100]. The microscopic structures and spin multiplicities were not
uniquely established.

This result demonstrates promising behavior at selected individual sites, but defect yield and microscopic identity remain poorly controlled. A two-dimensional host reduces the separation between the spin and an engineered interface. It also increases the spin’s exposure to surface contamination and surface-induced noise.

The atomically thin geometry necessarily includes strong surface proximity. Consequently, chemical identity, uniformity, lifetime, and yield remain separate requirements that must each be established.

## Rare-earth-ion-doped crystals

Some crystals are doped with rare-earth ions such as Eu\(^{3+}\), Er\(^{3+}\), and Yb\(^{3+}\). Doping is the intentional incorporation of impurity ions into a host crystal. The partly filled \(4f\) electron shell of a rare-earth ion is shielded by closed outer shells,
so its optical transitions can be extremely narrow and its spin coherence times can be extremely long.

[Experiment] \(^{151}\mathrm{Eu}^{3+}:\mathrm{Y_2SiO_5}\)
reached \(370\pm60\) minutes of
hyperfine coherence at \(2\ \mathrm K\)
with dynamical decoupling [R101]. Hyperfine coherence refers to coherence between states split by interactions involving electronic and nuclear magnetic moments. [Experiment] A single
\(^{171}\mathrm{Yb}^{3+}\) ion in a
YVO\(_4\) nanophotonic cavity showed an
optical linewidth below 1 MHz, spin coherence beyond 30 ms, and
conditional single-shot readout above 95% [R102]. Conditional single-shot readout is a state measurement performed in one experimental trial, with the quoted fidelity conditioned on the specified experimental acceptance criteria. These measurements establish strong performance as quantum-memory and network nodes.

For a dense local interaction Hamiltonian, however, dilute dopants are commonly distributed randomly in space, direct interactions are weak or inhomogeneous, and operation is generally cryogenic. Spectral multiplexing, which distinguishes ions by transition frequency within one optical mode, can identify many ions. It does not automatically produce a designed nearest-neighbor lattice.


A long memory can therefore increase \(Q_{\mathrm{single}}\) without improving
\(Q_{\mathrm{array}}\). For rare-earth systems, the principal bottleneck is the interaction map rather than the coherence time.

## Silicon spin-qubit platforms

Silicon provides the strongest alternative to an exclusively optical-defect approach. Isotopically enriched \(^{28}\mathrm{Si}\), in which magnetic isotopes are strongly reduced, provides a low-noise nuclear environment. Silicon also has unmatched industrial electronic-processing infrastructure. In addition, scanning-tunneling-microscope hydrogen lithography can place phosphorus donors on selected lattice sites.

An electron in silicon can occupy more than one equivalent minimum, or valley, in the electronic dispersion relation in momentum space. Interference between these valley components causes the exchange energy of two nearby donors to depend strongly on the direction of their displacement as well as on their separation.

This behavior is called a valley effect; a valley is a local minimum of the electronic energy surface in momentum space. [Experiment/Theory] Atomic-scale imaging and modeling show that aligning donors along favorable crystallographic directions suppresses, but does not abolish, exchange variability [R103].

Gate-defined silicon spin qubits already support electrically
controlled two-qubit logic in devices that are not color centers. A color center is an optically active point defect whose electronic transitions can provide spin initialization or readout. Relative to an optical defect lattice, silicon platforms require millikelvin operation, elaborate gate stacks and charge reservoirs, and standard phosphorus-donor nodes lack a naturally bright, cycling optical transition. A cycling transition repeatedly produces photons while approximately preserving the measured state. For a programmable electrical spin Hamiltonian rather than a spin–photon network, silicon may instead be the preferred material.

Without an optical-interface requirement, silicon has the strongest \(Q_{\mathrm{array}}\) case in this chapter. If that requirement is retained, the absence of a cycling optical transition is the bottleneck.

## Wide-gap oxide hosts

“Oxide” denotes a broad material class rather than a single platform. It includes chemically and structurally distinct hosts such as MgO, ZnO, TiO\(_2\), Y\(_2\)O\(_3\), and many others.

Candidate spin systems include transition-metal defects, oxygen vacancies, and rare-earth dopants. Rare-earth oxides therefore overlap with the rare-earth-ion systems discussed above.


[Theory/Experiment] Reviews identify low
nuclear-spin abundance, large band gaps, and mature thin-film processing
as useful search criteria, while also emphasizing charge-state
stability, optical cycling, and reproducible defect formation as
independent requirements [R073]. As of the evidence surveyed here, no
generic wide-gap oxide combines deterministic single-spin placement, a
high-fidelity optical lifecycle, preserved coherence after
nanofabrication, and a demonstrated controlled interaction graph. Oxides
therefore constitute a broad discovery space rather than a single validated alternative device platform.

## Comparative assessment

The following matrix evaluates the hosts specifically as platforms for interacting arrays. “High
coherence” means only what the cited experiment measured under its
stated conditions. The ratings are comparative judgments rather than unreported numerical data.

Host and representative spin |
Native/engineered coupling route |
Placement and yield |
Coherence evidence |
Photonics and readout |
Maturity and typical temperature |
Platform assessment |
|

4H-SiC: neutral divacancy, \(V_{\mathrm{Si}}^-\) |
Nearby nuclear hyperfine demonstrated; electron dipolar/exchange at
short range; cavity, strain, and electrical mediation plausible |
Implantation, masks, annealing, commercial wafers; designed \(8\times8\) PL6 pattern demonstrated, but
not an atomically registered interacting electron array [R099] |
\(>1\) ms ensemble Hahn echo at
low temperature [R096]; single-spin \(5.3\pm1.3\) s at 5 K with isotopic
purification and 16,384-pulse decoupling [R097] |
Near-infrared optical transitions, spin-to-charge readout,
waveguides and SiC-on-insulator integration [R097]; [R098]; [R099] |
Highest combined materials/device maturity here; room-temperature
control exists, best resonant optical/readout records often
cryogenic |
Most complete combination of optical and wafer-processing capabilities considered here; activation statistics,
final position, spectral disorder, and controlled electron–electron
edges still open |
|


hBN: boron vacancy and carbon-related spins |
Short-range exchange/dipolar interactions are geometrically
accessible in 2D; resonator coupling possible |
Transfer, growth, irradiation and local writing are available;
microscopic identity and reproducible spin-active yield remain weak |
Room-temperature single-defect ODMR; about 5% ODMR-active yield in
one >400-defect survey and roughly 35 MHz saturated linewidth
[R100] |
Bright visible emitters and easy planar integration; spectral and
photodynamic variability substantial [R100] |
Rapidly developing, room-temperature demonstrations |
High-potential planar platform, but not yet a reproducible many-spin
component library |
|

Rare-earth crystals: Eu:YSO, Yb:YVO\(_4\), Er:YSO |
Weak direct ion–ion coupling; cavity-mediated and
spectral-multiplexed links are natural |
Dopants are usually dilute and spatially random; individual ions
selected spectrally or by cavity overlap |
Eu nuclear hyperfine \(370\pm60\)
min at 2 K with decoupling [R101]; single Yb spin >30 ms in a cavity
[R102] |
Exceptional narrow optical lines; single-ion cavity readout >95%
conditional fidelity [R102] |
Mature memories and emerging nanophotonics; usually
kelvin-scale |
Strong capabilities for memory and network applications; less natural for a dense prescribed
local interaction graph |
|


Silicon: P donors or gate-defined electron
spins |
Electrically tunable exchange is strong; capacitive and resonator
links available |
CMOS gates plus STM donor placement can approach lattice-site
precision; exchange remains sensitive to valley phase and interfaces
[R103] |
Long coherence in enriched \(^{28}\)Si is established, but values depend
strongly on electron versus nucleus, ensemble versus single device, and
pulse sequence [R073] |
Excellent electrical readout/control; standard donor architecture
lacks a bright cycling optical interface |
Most mature semiconductor control stack; generally
dilution-refrigerator temperatures |
Strongest electrical programmable-array platform; less suited to an
optical color-center route |
|


Wide-gap oxides: oxygen vacancies, transition-metal
or rare-earth dopants |
Dipolar/exchange possible in principle; oxide electronics and strain
offer mediators |
Thin-film processing is mature for some hosts, but quantum-active
defect identity, charge state, activation and placement are
host-specific [R073] |
Isolated or ensemble coherence exists in selected systems; no
transferable “oxide value” is meaningful [R073] |
Some excellent emitters or microwave ensembles, rarely a complete
single-spin lifecycle |
Fragmented; temperatures range from ambient sensing to cryogenic
spectroscopy |
Discovery portfolio, not presently a validated interacting-array
platform |
|


Diamond baseline: NV and group-IV vacancies |
Dipolar/exchange, nuclear registers, and strong nanophotonic
interfaces |
Implantation and delta doping mature but deterministic
nanometer-scale coupled arrays remain difficult |
Platform-leading single-node demonstrations, with defect- and
temperature-dependent trade-offs [R073] |
Most mature color-center networking evidence; nanofabrication and
surfaces can degrade performance |
Mature, spanning room-temperature NV control to cryogenic group-IV
optics |
Benchmark rather than automatic winner; SiC offers stronger
wafer/electronics integration, not yet stronger end-to-end coupled-array
evidence |
|


The matrix distinguishes two claims that are often combined without adequate justification:

- [Experiment] single-defect quality: SiC, rare-earth
ions, silicon, diamond, and now hBN all contain individually
controllable quantum systems, although the depth of evidence and operating
conditions differ substantially.

- [Proposal] array suitability: none of these hosts
has demonstrated a dense, designed, coherently interacting defect
lattice.

The appropriate material therefore depends on the required device architecture. For an optically addressable interacting-defect program, SiC and diamond are the two primary platforms. SiC is favored when monolithic wafer electronics and photonics are dominant requirements. hBN is a high-risk planar alternative. Rare-earth crystals favor cavity-mediated or spectral architectures rather than short-range lattices, and selected oxides remain discovery targets.

For an entirely electrical exchange-coupled array, silicon becomes the leading platform. This ordering remains uncertain: a convincing two-dimensional hBN placement-and-yield result or a deterministic rare-earth implantation method could change the comparative assessment.

## Common analytical errors

- Combining independent record values does not characterize a single device. A five-second spin-coherence time \(T_2\), where \(T_2\) is the transverse decoherence time, was measured in SiC at 5 K using 16,384 control pulses [R097]. A room-temperature implanted array was reported separately [R099], as was a nanophotonic linewidth measurement [R098]. These results were obtained from different devices and cannot be combined into the specification of one device.

- A fabricated pattern does not establish the final defect positions. A lithographic aperture constrains the nominal ion trajectory during implantation. The final location and identity of an active center are also determined by collision straggle, meaning the statistical spread of implanted-ion trajectories; vacancy diffusion; annealing; charge-state conversion; and the possible occupation of one site by multiple defects. Consequently, observing an optical spot at every mask location does not determine the atomic coordinates of the associated defects.

- Addressability does not establish coupling. Spectral addressability is the ability to distinguish and control sites through differences in their transition frequencies. Resolving two sites spectrally demonstrates that the controls can distinguish them, but it does not determine the pairwise coupling \(J_{ij}\), demonstrate coherent exchange of quantum states, or establish entanglement.

- A high defect density does not necessarily produce a useful interaction graph. An interaction graph represents defects as vertices and selected couplings as edges. Increasing the defect density simultaneously increases the intended coupling strengths, unintended couplings, implantation damage, spectral crowding, and charge noise. The physical interactions in the crystal are therefore not restricted to the edges specified by the intended design.

- A long memory time does not imply fast processing. Rare-earth nuclear spins can exhibit extraordinary coherence [R101], while their direct local interactions remain weak. An operational array requires a favorable ratio of the gate or coupling rate to the error rate; a large \(T_2\) alone is insufficient.

- A two-dimensional host does not by itself provide a complete qubit platform. Hexagonal boron nitride (hBN) provides geometric access to defects in an atomically thin material, but it does not automatically provide controlled chemical identity, uniformity, lifetime, or fabrication yield. The reported optically detected magnetic resonance (ODMR) evidence for single carbon-related defects also documents substantial variability [R100]. ODMR is the optical measurement of spin-dependent changes produced by resonant microwave excitation.

- Semiconductor compatibility does not imply that a fabrication process is qualified. Silicon carbide (SiC) can support electronics and photonics, but every implantation, etching, oxidation, metallization, and annealing step must be evaluated for its effects on charge stability and spin-optical coherence. Establishing compatibility therefore requires systematic process development and testing.

- Coupled qubits do not automatically realize a new phase of matter. Even a perfect SiC or silicon spin array would initially constitute an ordinary interacting quantum system. A many-body phase is a collective state characterized by properties not reducible to isolated constituents. The host material alone does not imply the existence of a gapped many-body phase, meaning a phase separated from excitations by a finite energy gap, or of nonlocal observables, which depend on spatially extended degrees of freedom.

## Required operation rates

Let \(J\) denote the frequency associated with a desired coupling, and let \(\Gamma_2=1/T_2\) denote the effective decoherence rate during an operation. Let \(\sigma_J\) be the standard deviation of coupling disorder, which quantifies the variation of coupling frequencies across the array. Let \(\Omega\) be the control rate, and let \(\Delta_{\rm addr}\) be the spectral detuning between the addressed transition and the nearest unwanted transition. A useful operating regime requires, schematically,

\[
J\gg\Gamma_2,\qquad J\gg\sigma_J,\qquad
\Gamma_2\ll\Omega\ll\Delta_{\rm addr}.
\]

The first inequality requires the desired interaction to act much faster than decoherence. The second requires the intended coupling to exceed its disorder-induced variation. The final pair of inequalities requires control to be faster than decoherence but slower than the frequency separation needed for selective addressing. All symbols are frequencies in hertz, so these comparisons are dimensionally consistent. No host material in the comparison matrix has yet satisfied all of these inequalities across a large, deliberately designed defect array. The next several chapters quantify these conditions.

## Conceptual checks

- Selecting the host with the longest reported \(T_2\) does not identify the best array platform. Placement, coupling, addressability, readout, yield, and mutually compatible operating conditions remain independent bottlenecks. The array-level performance metric \(Q_{\mathrm{array}}\) is limited by the weakest required operation.

- SiC’s principal array-level advantage is the coexistence of optically addressable spins with commercial wafers, ion implantation, electronics, mechanics, and monolithic photonics.

- For the cited PL6 center, a 5.0 mT magnetic field produces microwave transition frequencies of approximately 1.199 GHz and 1.481 GHz. Using the electron gyromagnetic ratio \(\gamma_e\) and an axial magnetic field \(B_z\),

  \[
  \gamma_e B_z=(2.82\ \mathrm{MHz\,G^{-1}})(50\ \mathrm G)=141\ \mathrm{MHz},
  \]

  so

  \[
  \nu_\pm=1340.4\pm141\ \mathrm{MHz}.
  \]

- Treating the \(8\times8\) optical-spot pattern as an interaction graph is not justified. The pattern does not determine nanometer-registered electron coordinates, and the entanglement reported in 2024 was electron–nuclear entanglement rather than entanglement along selected electron–electron edges.

- Silicon can outrank SiC when the intended platform is an all-electrical, exchange-coupled, programmable spin array and a direct optical interface is unnecessary.

- Under the stated design assumptions, the estimated crosstalk probability is \(10^{-2}\). With a control rate \(\Omega=2\ \mathrm{MHz}\) and detuning \(\Delta=20\ \mathrm{MHz}\),

  \[
  p_{\mathrm{xtalk}}\sim(\Omega/\Delta)^2=(1/10)^2=10^{-2}.
  \]

  This value is not a measured array error. It is the crosstalk predicted directly from the specified drive rate and detuning.

## Sources

- [R096] D. J. Christle, A. L. Falk, P. Andrich, et al.,
“Isolated electron spins in silicon carbide with millisecond coherence
times,” Nature Materials 14, 160–163 (2015).
DOI: [10.1038/nmat4144](https://doi.org/10.1038/nmat4144).

- [R097] C. P. Anderson, E. O. Glen, C. Zeledon, et al.,
“Five-second coherence of a single spin with single-shot readout in
silicon carbide,” Science Advances 8, eabm5912
(2022). DOI: [10.1126/sciadv.abm5912](https://doi.org/10.1126/sciadv.abm5912);
arXiv: [2110.01590](https://arxiv.org/abs/2110.01590).

- [R098] C. Babin, R. Stöhr, N. Morioka, et al., “Fabrication
and nanophotonic waveguide integration of silicon carbide colour centres
with preserved spin-optical coherence,” Nature Materials
21, 67–73 (2022). DOI: [10.1038/s41563-021-01148-3](https://doi.org/10.1038/s41563-021-01148-3).

- [R099] H. Hu, Y. Zhou, A. Yi, et al., “Room-temperature
waveguide integrated quantum register in a semiconductor photonic
platform,” Nature Communications 15, 10256
(2024). DOI: [10.1038/s41467-024-54606-2](https://doi.org/10.1038/s41467-024-54606-2).

- [R100] H. L. Stern, Q. Gu, J. Jarman, et al.,
“Room-temperature optically detected magnetic resonance of single
defects in hexagonal boron nitride,” Nature Communications
13, 618 (2022). DOI: [10.1038/s41467-022-28169-z](https://doi.org/10.1038/s41467-022-28169-z).

- [R101] M. Zhong, M. P. Hedges, R. L. Ahlefeldt, et al.,
“Optically addressable nuclear spins in a solid with a six-hour
coherence time,” Nature 517, 177–180 (2015).
DOI: [10.1038/nature14025](https://doi.org/10.1038/nature14025).

- [R102] J. M. Kindem, A. Ruskuc, J. G. Bartholomew, et al.,
“Control and single-shot readout of an ion embedded in a nanophotonic
cavity,” Nature 580, 201–204 (2020). DOI: [10.1038/s41586-020-2160-9](https://doi.org/10.1038/s41586-020-2160-9);
arXiv: [1907.12161](https://arxiv.org/abs/1907.12161).

- [R103] B. Voisin, J. Bocquel, A. Tankasala, et al., “Valley
interference and spin exchange at the atomic scale in silicon,”
Nature Communications 11, 6124 (2020). DOI: [10.1038/s41467-020-19835-1](https://doi.org/10.1038/s41467-020-19835-1).

- [R073] G. Wolfowicz, F. J. Heremans, C. P. Anderson, et
al., “Quantum guidelines for solid-state spin defects,” Nature
Reviews Materials 6, 906–925 (2021). DOI: [10.1038/s41578-021-00306-y](https://doi.org/10.1038/s41578-021-00306-y).

- [R104] T. Nishikawa, N. Morioka, H. Abe, et al., “Coherent
photoelectrical readout of single spins in silicon carbide at room
temperature,” Nature Communications 16, 3405
(2025). DOI: [10.1038/s41467-025-58629-1](https://doi.org/10.1038/s41467-025-58629-1).

---
