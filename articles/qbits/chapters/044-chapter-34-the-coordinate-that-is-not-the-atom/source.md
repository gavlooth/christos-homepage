# Chapter 34 — Commanded coordinates and realized defect positions

A specified implantation coordinate determines where the beam is directed, not where the implanted nitrogen ion ultimately resides in diamond. After entering the crystal, the ion undergoes collisions with the lattice, transfers energy to electrons and nuclei, and stops at a nearby but generally different position. Subsequent heating, or annealing, permits vacancies—unoccupied lattice sites—to migrate. A mobile vacancy may bind to the implanted nitrogen, reach the surface, or undergo another reaction.

Consequently, the position of an optically active center, if one forms, is determined by the completed implantation, diffusion, and chemical-conversion processes rather than solely by the coordinate supplied to the fabrication system. A list of commanded positions therefore does not determine a Hamiltonian, where the Hamiltonian is the operator that specifies the energies and interactions of the realized physical system.

The realized Hamiltonian depends on missing and additional centers, unintended charge states, optically inactive emitters, damaged spins, and defects displaced by several nanometres from their intended positions. Chapter 28 established that such displacements are significant because the dipolar coupling \(J\) between electron spins scales with their separation \(r\) as \(J\propto r^{-3}\). Thus, to first order, a small fractional error in bond length produces a fractional coupling error three times larger. A graph with 20 nm separations and an allowed coupling variation of 20% therefore has very little positional tolerance.

Several processes can pattern emitters, grow thin impurity-containing layers, or count incident ions individually. None of the cited work has produced a dense, uniformly coupled, defect-complete cluster lattice with the sub-nanometre relative tolerance required by this graph.

## Distinct Fabrication and Acceptance Metrics

Fabrication must be evaluated through seven distinct questions corresponding to successive physical and operational stages.

Beam accuracy specifies the position at which an ion crosses the crystal surface. Straggle is the statistical spread in the ion’s final stopping position after it undergoes collisions within the crystal.

Diffusion specifies the displacement of a mobile vacancy during annealing. Creation yield is the probability that the intended structural defect complex forms.

Charge-state yield is the probability that the complex occupies the required electronic charge state. Optical usability is the probability that optical initialization and readout satisfy the specified criteria.

Spin usability is the probability that the spin can be initialized, remains coherent for the required interval, and responds to control operations within specification.

These metrics are not interchangeable. A bright optical feature at the intended coordinate can fail the spin-usability test, while a defect with excellent spin properties can lie outside the allowed positional tolerance. Unless an architecture explicitly incorporates spare sites and repair procedures, a complete array requires every indispensable site to pass every required test.

The following image tracks a nine-site coordinate file through ion delivery, annealing, and endpoint acceptance. Dashed rings indicate commanded positions, green circles indicate accepted spin-active centers, and positional offsets or failed sites remain part of the realized device specification.

![Commanded coordinates do not determine the final defect array. Ion stopping, vacancy diffusion, structural conversion, charge state, and spin acceptance separate the coordinate file from the realized interaction graph.](/notes/assets/defects-to-topological-qubits/commanded-versus-realized-defects.svg)

Commanded coordinates do not determine the final defect array. Ion stopping, vacancy diffusion, structural conversion, charge state, and spin acceptance separate the coordinate file from the realized interaction graph.

Each fabrication and acceptance stage has an associated conditional probability. A beam-position metric cannot simply be multiplied by a conversion yield and treated as a complete performance measure: the beam-position metric has units of length, whereas conversion yield is a dimensionless probability. A functional device must satisfy both spatial and probabilistic requirements.

## Positional Tolerance for a Nine-Spin Test Structure

Consider [Proposal] three triangular encoded clusters, each containing three electron-spin defects. This nine-site patch is not itself a topological phase. It is a fabrication coupon, meaning a test structure used to determine whether the same intra-cluster interactions can be reproduced across multiple clusters.

Let the intended nearest-neighbour separation within each cluster be \(r=20\ \mathrm{nm}\). Require the root-mean-square radial disorder in the dipolar coupling to remain below 20%. Root-mean-square disorder is the standard deviation of the coupling fluctuations relative to their intended value.

Let \(\sigma_{\rm site}\) denote the independent one-dimensional standard deviation of each bond endpoint along the bond direction. For the dipolar-coupling relation \(J=C/r^3\), where \(C\) contains the distance-independent coupling factors, first-order uncertainty propagation gives

\[
\frac{\sigma_J}{J}\approx
\frac{3\sqrt{2}\,\sigma_{\rm site}}{r}.
\]

This equation converts independent endpoint-position uncertainty into relative coupling uncertainty. The ratio is dimensionless because both \(\sigma_{\rm site}\) and \(r\) have dimensions of length. The corresponding placement allocation is therefore

\[
\sigma_{\rm site}\le
\frac{0.20(20\ \mathrm{nm})}{3\sqrt2}
=0.94\ \mathrm{nm}.
\]

The value \(0.94\ \mathrm{nm}\) is a derived requirement rather than a reported fabrication capability. The derivation also neglects disorder in the angular factor of the dipolar interaction, the discrete set of crystallographic sites, variations in exchange interactions, and correlated registration errors. Including these contributions would reduce the allowable placement uncertainty further.

This requirement can be compared with a measured endpoint distribution. Focused Si implantation followed by annealing produced individual SiV centers, or silicon-vacancy centers, with a one-axis standard deviation of approximately \(32\ \mathrm{nm}\) about the target coordinates [R190]. [Numerics] For an order-of-magnitude comparison only, assume that this endpoint distribution is an unbiased Gaussian distribution and that the acceptance interval is \(|x|<0.94\ \mathrm{nm}\). The resulting one-dimensional acceptance probability is

\[
P(|x|<0.94\ \mathrm{nm})
=\operatorname{erf}\!\left(
\frac{0.94}{\sqrt2(32)}\right)
\approx0.0235.
\]

Here, \(\operatorname{erf}\) is the error function used to integrate a centered Gaussian probability distribution. If the same acceptance interval is imposed independently in two lateral coordinates, the per-site probability is approximately \((0.0235)^2=5.5\times10^{-4}\) before the depth coordinate is tested. Under an additional assumption of independent site outcomes, raising this illustrative value to the ninth power gives approximately \(4.8\times10^{-30}\).

This calculation is not a forecast. The measured endpoint distribution need not remain Gaussian within its central nanometre, and the cited SiV process was not optimized for this fabrication coupon. The calculation instead quantifies the orders-of-magnitude difference between endpoint spreads of tens of nanometres and a sub-nanometre positional allocation derived from the coupling-disorder requirement.

## Conditional Yield Accounting

Placement is only one part of the fabrication budget. Define the events

- \(A\): the requested ion or vacancy is delivered;

- \(C\): the desired structural complex forms;

- \(Q\): the desired charge state is occupied;

- \(O\): initialization and optical readout pass;

- \(S\): spin coherence and control pass;

- \(G\): the final three-dimensional position passes.

The probability that a site is usable is the conditional product

\[
p_{\rm use}=P(A)P(C|A)P(Q|A,C)P(O|A,C,Q)
P(S|A,C,Q,O)P(G|A,C,Q,O,S).
\]

This identity is an application of the probability chain rule and does not assume that the events are independent. Each factor is conditioned on acceptance at the preceding stages.

A single published yield is therefore rarely equal to \(p_{\rm use}\). It usually corresponds to only an initial subset of this product and is evaluated using the acceptance criteria of the particular experiment.

In a deterministic \(^{15}\mathrm
N\) implantation experiment, counted molecular ions were focused
with \(121(35)\ \mathrm{nm}\) lateral
resolution and produced about 0.6% optically identified \(^{15}\mathrm{NV}^{-}\) centers after
annealing [R258]. [Experiment] The reported 0.6% is already a compound result that includes delivery, structural conversion, negative-charge occupation, and optical detection. It does not provide separate measurements of each factor. Even if \(0.006\) were treated as an optimistic upper bound on \(p_{\rm use}\), the nine-site yield would satisfy

\[
Y_9\le(0.006)^9\approx1.0\times10^{-20},
\]

before the 0.94 nm geometric requirement was imposed.

For planning purposes, consider a [Proposal] future fabrication line using the same process but achieving the following explicitly hypothetical conditional values: \(0.995\) for delivery, \(0.50\) for structural conversion, \(0.90\) for the desired charge state, \(0.85\) for optical acceptance, \(0.90\) for spin acceptance, and \(0.80\) for geometric acceptance. Then

\[
p_{\rm use}=0.995(0.50)(0.90)(0.85)(0.90)(0.80)=0.274,
\]

and, if site outcomes are independent, \(Y_9=p_{\rm
use}^9=8.7\times10^{-6}\). Correlated damage across a wafer or systematic annealing drift could reduce the array yield further. Conversely, experimentally measured correlations, spare sites, repeated implantation, or post-fabrication selection would require a different yield model. In the absence of repair, a 50% yield for the complete nine-site array requires

\[
p_{\rm use}\ge0.5^{1/9}=0.926.
\]

Thus, the relevant per-site fabrication target is 92.6%. Deterministic delivery of one ion addresses only the first factor in the conditional product. Omitting the later factors incorrectly equates a counted incident ion with a completed, usable spin.

## Conventional Ion Implantation and Annealing

Conventional implantation accelerates ions of a selected species into a crystal, often through a lithographically defined aperture. The distribution of surface-entry positions is determined by the aperture geometry, alignment, beam divergence, and mechanical vibration.

Within the crystal, the ion loses energy through electronic collisions and nuclear collisions. Electronic collisions transfer energy primarily to electrons, whereas nuclear collisions transfer energy to lattice nuclei. The resulting distributions of stopping depth and lateral displacement are called longitudinal straggle and lateral straggle, respectively.

Straggle denotes the residual statistical spread after beam alignment and is physically distinct from targeting error. Crystal channeling, in which ions propagate preferentially along open crystallographic directions, can also produce non-Gaussian tails in the stopping distribution.

An implanted atom does not automatically form the intended defect center. Implanted nitrogen must acquire a neighbouring vacancy to form a nitrogen-vacancy, or NV, center.

An implanted silicon atom must attain the appropriate split-vacancy configuration to form a SiV center. Annealing increases defect mobility and repairs some collision damage, but it can also cause vacancies to migrate to surfaces, form aggregates, or react with unintended impurities.

In one masked CN\(^-\) implantation
experiment, roughly 50 nitrogen atoms per 80 nm aperture produced a mean
3.5 NV centers — about 7% N-to-NV conversion under an 800 °C, two-hour
anneal [R202]. [Experiment] This experiment demonstrated patterned ensembles rather than exactly one usable NV center at each commanded atomic coordinate.

Implantation energy introduces a recurring trade-off. Lower implantation energy produces shallower stopping and usually reduces straggle, but near-surface charge noise, vacancy loss, and implantation damage can reduce structural conversion and spin coherence.

Higher implantation energy can improve vacancy production and conversion while broadening the depth and lateral distributions [R260]. [Experiment] Implantation precision is therefore not a host-independent quantity. Every reported value must be associated with the ion mass, implantation energy, crystal orientation, target composition, and annealing procedure.

## Focused-Ion-Beam Implantation

A focused ion beam writes coordinates by rastering the beam across the sample. This capability improves registration relative to fabricated pillars, waveguides, and optical cavities, but it does not eliminate ion-stopping straggle.

For focused silicon implantation into diamond, the beam full width at half maximum, or FWHM, was typically below 40 nm, the calculated lateral straggle was 19 nm, and the measured created-center distribution had a one-axis standard deviation of 32 nm [R190]. [Experiment] The measured Si-to-SiV conversion reached approximately 2.5% at 100 keV. Electron irradiation followed by a second anneal increased the measured conversion in a tested bulk sample to approximately 20% [R190]. These values apply to that specific SiV process and cannot be transferred directly to NV centers, SiC, or sapphire.

Focused writing is useful for sparse photonic devices because each coordinate can be registered independently. In dense interacting lattices, however, beam tails, dose calibration, redeposition, accumulated damage, stage drift, and writing time become array-level variables. A nominal beam spot specifies the intended creation position; it does not specify the covariance matrix of the final center positions.

Even an idealized beam with zero entry width would not eliminate positional uncertainty. The ion would still stop according to a collision-induced distribution, and the vacancy would still diffuse during annealing. Therefore, a vanishing surface-entry width does not imply a vanishing error in the realized Hamiltonian.

## Delta-Doped Depth Confinement

Delta doping is the introduction of impurities during a short interval of crystal growth, producing a thin impurity-containing layer. It provides depth confinement but does not assign individual lateral lattice coordinates.

In diamond, nitrogen layers approximately 1–2 nm thick were grown, after which vacancies were introduced by irradiation and annealing. The cap-layer thickness selected nominal NV depths from approximately 5 to 100 nm [R204]. [Experiment] This method provides strong depth control and avoids the stopping distribution associated with implanted nitrogen. It does not select a lateral lattice site because dopants remain randomly distributed within the plane.

Delta doping is therefore complementary to a spatially localized vacancy source. It constrains one coordinate, while another process must select the \(x\) and \(y\) coordinates.

A 2025 experiment combined a nitrogen delta layer with a localized 200 keV electron beam and reported approximately 4 nm depth confinement and a lateral standard deviation of \(46(1)\ \mathrm{nm}\) in 280 nm diamond pillars [R207]. [Experiment] The characterized NV centers had a mean Hahn-echo \(T_2=98(37)\ \mu\mathrm{s}\) under those conditions [R207]. A Hahn echo is a spin-refocusing sequence, and \(T_2\) is the associated coherence time.

This experiment provides both endpoint-position data and a spin-coherence metric. It does not, however, demonstrate a coupled lattice with 20 nm pitch.

Without a lateral localization process, delta doping produces a depth-confined layer containing randomly positioned sites. Such a sample can be useful, but it does not realize a prescribed interaction graph.

## Electron-Induced Vacancy Generation

Energetic electrons can transfer sufficient momentum to lattice atoms to create vacancies while introducing substantially less foreign chemical material than a heavy-ion beam. Uniform electron irradiation can increase the probability that pre-existing or implanted dopants encounter vacancies.

A focused electron beam can localize vacancy generation laterally, while a delta-doped layer provides depth selection [R207]. The vacancy-generation region nevertheless remains three-dimensional, and the generated vacancies can migrate and react during annealing.

Electron irradiation therefore modifies \(P(C|A)\), the conditional probability of structural-complex formation, and changes the damage environment. By itself, it does not guarantee \(A\) for a selected impurity, \(Q\) for the final charge state, or \(S\) for the spin properties.

In the SiV study, irradiation followed by re-annealing improved conversion in a separately tested sample [R190]. It would be invalid to combine the improved yield from that sample with the best placement result from another sample as if both results had been obtained simultaneously.

## Femtosecond-Laser Vacancy Writing with Feedback

A tightly focused femtosecond laser pulse can generate vacancies within diamond without implanting a foreign atom. Subsequent local heating or furnace annealing allows a vacancy to bind to native nitrogen. Optical feedback can terminate the repeated writing and annealing sequence after a single emitter is detected, thereby avoiding the Poisson-limited probability of producing one center at a site that receives a fixed dose without feedback.

Chen and colleagues reported approximately 96% single-NV creation yield using feedback, with an in-plane positioning deviation of approximately 33 nm [R203]. [Experiment] This result demonstrates a high probability of producing a single optically detected NV center.

The 96% value does not represent sub-nanometre three-dimensional placement, 96% NV\(^-\) charge-state occupation under all optical conditions, or 96% spin acceptance. The process also requires suitable pre-existing nitrogen near the laser-generated vacancy.

By observing emitter formation and terminating the process, feedback increases \(P(C|A)\) for a bright center. It does not determine the covariance matrix of the final spin position. Creation yield and positional covariance therefore remain separate entries in the fabrication ledger.

## Scanning-Probe Aperture Alignment

A scanning probe can incorporate a nanometre-scale aperture into its cantilever. The probe images surface markers, aligns the aperture locally, and transmits ions through that aperture.

Persaud and colleagues integrated a piezoresistive scanning probe with an ion beam and demonstrated single highly charged-ion impacts in resist. The terminal aperture limited the spot size [R259]. [Experiment] This method addresses local registration and permits a stencil to be positioned close to the surface.

The method does not remove convolution with the aperture profile, ion straggle, vacancy diffusion, or stochastic structural conversion. The cited instrument study did not demonstrate a complete lattice of charge-stable, coherent color centers. In this context, a scanning probe specifies an alignment and collimation method rather than a complete yield metric.

It therefore does not establish the usable-site probability.

## Vacancy Diffusion During Annealing

Vacancy engineering controls the number and initial spatial distribution of vacancies, together with the competing sinks that can capture them. Heavy ions, electrons, neutrons, and lasers produce different damage profiles. Annealing temperature and duration affect vacancy mobility, recombination, aggregation, loss at surfaces, and capture by dopants.

In nitrogen-rich diamond implanted with focused Ar ions, Räcke and colleagues measured 0.04–0.79 created NV centers per implanted Ar ion over 12–132 keV [R206]. [Experiment] Their model of diffusion and surface loss placed an upper bound of approximately 300 nm on the single-vacancy diffusion length during an 800 °C anneal [R206].

[Numerics] This upper bound does not imply that every final NV center is displaced by 300 nm. Nitrogen was already distributed throughout the crystal, and the final position results from reaction and capture. The bound nevertheless demonstrates that annealing cannot be modeled as a process that removes damage while leaving all relevant positions unchanged.

Annealing can also modify charge compensation and optical linewidth by changing the residual-defect population. The appropriate optimization objective is therefore not maximum luminescence alone. It is the joint distribution of final position, desired charge state, optical linewidth and stability, spin coherence, and nearby optically dark paramagnetic defects.

Treating annealing as a complete positional reset would cause a bright center to be classified as a well-positioned spin without accounting for the vacancy migration that produced it. The 300 nm diffusion-length bound provides a counterexample to that assumption.

## Deterministic Ion Delivery and Endpoint Acceptance

An implantation apparatus can detect or prepare a known number of incident ions and terminate the process when the requested count has been reached. This procedure is deterministic delivery: it controls the number of incident ions, not their subsequent physical fate.

Deterministic delivery removes uncertainty in the incident dose count. It does not make the collision trajectory deterministic and does not force an implanted atom to form a particular structural complex or occupy a specified charge state.

Groot-Berning and colleagues extracted individual laser-cooled \(^{15}\mathrm N_2^+\) ions at 5.9 keV, implanted them without a mask, and verified \(^{15}\mathrm{NV}^{-}\) centers after annealing using optically detected magnetic resonance, or ODMR [R258]. [Experiment] ODMR detects spin resonances through changes in optical emission. The lateral resolution was \(121(35)\ \mathrm{nm}\), and the conversion was approximately 0.6% [R258].

This experiment combined deterministic delivery of the ion number with stochastic creation of usable centers. These two outcomes must remain distinct in fabrication analysis.

## Experimentally Demonstrated Capabilities

The table reports physically distinct metrics in separate columns. A dash indicates that the cited experiment did not establish the corresponding quantity as an array-level probability.

Process and conditions |
Beam or creation accuracy |
Straggle or diffusion |
Structural/charge result |
Optical/spin usability |
Compound-array verdict |
|

CN\(^-\) implanted through 80 nm apertures;
diamond; 800 °C, 2 h [R202] |
Surface entry defined by an 80 nm mask aperture |
Approximately 9 nm simulated straggle for the 20 keV N component [R202] |
Approximately 7% N-to-NV conversion |
Fluorescent NV arrays; no distribution of complete spin-acceptance outcomes |
Patterned sites rather than deterministic individual centers |
|

Focused Si implantation in diamond, up to 100 keV [R190] |
Beam FWHM below 40 nm |
19 nm calculated lateral straggle; 32 nm measured one-axis endpoint
spread |
Up to approximately 2.5% SiV conversion; approximately 20% in a separate irradiation and re-annealing test |
Nearly lifetime-limited emitters occurred in nanostructures; not
every site qualified |
Useful targeting for photonic structures; insufficient evidence for dense, complete
clusters |
|

Nitrogen delta layer combined with focused electrons in diamond [R207] |
20 nm electron-beam spot |
Approximately 4 nm depth confinement; \(46(1)\) nm lateral standard deviation |
Dose-dependent NV count rather than absolute deterministic conversion |
Mean Hahn-echo \(T_2=98(37)\
\mu\mathrm{s}\) for characterized NVs |
Depth-confinement and spin evidence were obtained together; the lateral graph remained broad |
|

Femtosecond vacancy writing with feedback in diamond [R203] |
Diffraction-limited writing focus |
Vacancy generation and local annealing determined the endpoint |
Approximately 96% single-NV creation under feedback |
Optical detection provided the feedback signal; the complete charge-state and spin-acceptance rate remained separate |
High creation yield with approximately 33 nm in-plane deviation |
|

Counted \(^{15}\mathrm N_2^+\) implanted at
5.9 keV in diamond [R258] |
\(121(35)\) nm lateral
resolution |
Included in the measured resolution rather than eliminated |
Approximately 0.6% \(^{15}\mathrm{NV}^{-}\)
conversion |
ODMR and coherence were characterized for the centers that formed |
Deterministic incident-ion counts with a very low compound yield for nine sites |
|

30 keV C implantation through a mask in 4H-SiC [R205] |
Predetermined array coordinates |
Simulated shallow \(V_{\rm Si}\)
depth of approximately 40 nm [R205] |
\(19\pm4\)% generation efficiency;
\(34\pm4\)% probability of a single
emitter at the optimized dose |
Individual emitters identified optically |
Host-specific patterned array; no demonstrated sub-10-nm pair-position distribution |
|

The demonstrated capabilities are complementary rather than cumulative. Delta doping provides narrow depth confinement.

Focused beams and scanning apertures provide lateral registration. Electron beams and lasers localize vacancy generation.

Feedback increases the probability of producing exactly one bright center. Counted-ion implantation fixes the number of incident ions.

Annealing activates defect complexes. No demonstrated process stack cited here simultaneously provides sub-nanometre relative placement, near-unity formation of the desired center, near-unity occupation of the desired charge state, array-wide optical and spin qualification, and a complete interaction graph.

A counted ion is a fabrication event. A fluorescent color center is a physical optical emitter.

An ODMR-active center is a candidate physical spin qubit. Several coupled spins can form an encoded qubit only after the relevant low-energy subspace has been demonstrated.

A regular image of bright points does not establish an interaction graph. An interaction graph, in turn, does not establish an emergent topological phase or a logical topological qubit. Fabrication produces microscopic degrees of freedom and associated disorder distributions.

Terminology alone does not establish topological order.

## Common analytical errors

- Do not identify beam width with placement accuracy. The entry width of the ion beam, the simulated stopping straggle of implanted ions, the spatial spread of defect endpoints after annealing, and the registration error between defects and device structures quantify different contributions to positional uncertainty. Each quantity must be reported with its spatial axis, statistical measure, and experimental or simulation conditions.

- Do not identify deterministic implantation with deterministic defect creation. Deterministic implantation, meaning delivery in which individual ion arrivals are prepared or counted, controls \(A\), the number of delivered ions. The 0.6% \(^{15}\mathrm{NV}^{-}\) result [R258], where \(^{15}\mathrm{NV}^{-}\) denotes a negatively charged nitrogen-vacancy center containing the nitrogen-15 isotope, directly demonstrates that \(C\), complex formation, \(Q\), realization of the required charge state, and defect detection remain stochastic.

- Do not infer charge-state or spin yield from optical brightness alone. A fluorescence threshold can exclude optically dark sites, but this measurement does not by itself establish charge stability during control, the spin-coherence time \(T_2\), gate fidelity, or the absence of nearby optically dark spins.

- Do not treat annealing as restoring an undamaged system without changing defect positions. Annealing, meaning thermal processing that activates defect diffusion and reactions, mobilizes the vacancies required for defect creation and modifies implantation damage. It can also broaden the distribution of capture positions, cause vacancies to be lost at a surface, or produce unwanted defect aggregates [R206].

- Do not combine record values obtained from incompatible samples as though they characterized a single process. The 96% laser-feedback yield [R203], the 1–2 nm delta layer [R204], the 32 nm SiV endpoint spread [R190], where SiV denotes a silicon-vacancy center, and a separate long-coherence sample do not describe one fabrication line.

- Do not substitute single-site yield for full-array yield. If all \(N\) sites are indispensable and statistically independent, the array yield is
  \[
  Y_N=p_{\rm use}^N.
  \]
  Here, \(p_{\rm use}\) is the probability that an individual site is usable, and \(Y_N\) is the probability that all \(N\) sites are usable. If site outcomes are correlated, the array yield requires a measured joint probability model; the exponent cannot simply be omitted.

- Do not represent all spatial disorder by a Gaussian standard deviation. A Gaussian standard deviation describes the width of a normal distribution, but ion channeling and defect diffusion can produce non-Gaussian tails. Because dipolar coupling scales as \(r^{-3}\), where \(r\) is the separation between two centers, rare pairs with small separations can dominate the coupling distribution. A complete disorder specification should include three-dimensional endpoint coordinates, systematic biases, covariance, tail quantiles, missing and additional centers, and statistics for optically dark defects.

- Do not transfer diamond-processing results directly to another host material. The result for 4H-SiC, the 4H polytype of silicon carbide, in [R205] depends on its specific implanted ion, implantation energy, vacancy dynamics, charge-state physics, and annealing behavior. Sapphire or hBN, hexagonal boron nitride, requires a new conditioned accounting of these quantities rather than a relabeling of diamond data.

A lithography file specifies commanded coordinates. In contrast, the Hamiltonian model, meaning the mathematical representation of the system’s energies and interactions, must be derived from the joint probability distribution of the centers that were actually created, acquired the required charge state, produced detectable fluorescence, exhibited the required spin properties, and remained positionally stable. The commanded coordinates and the realized physical system are therefore distinct data sets.

## Conceptual and quantitative checks

- **What quantity is determined by deterministic implantation?**

  Deterministic implantation determines the number of delivered ions when individual arrivals are prepared or detected. It does not determine the ion stopping point, defect-complex formation, charge state, optical usability, or spin quality.

- **Derive the site-position requirement for a 20 nm dipolar graph with 20% radial coupling scatter.**

  A dipolar graph is an interaction network whose edge strengths are dipolar couplings. First-order uncertainty propagation for \(J\propto r^{-3}\) gives
  \[
  \sigma_J/J\approx 3\sqrt{2}\,\sigma_{\rm site}/r.
  \]
  Here, \(J\) is the coupling strength, \(\sigma_J\) is its standard deviation, \(\sigma_{\rm site}\) is the standard deviation of each site position, and \(r\) is the nominal separation. Set the fractional coupling scatter on the left side to \(0.20\) and use \(r=20\ \mathrm{nm}\). Then
  \[
  \sigma_{\rm site}\le 0.20\times20/(3\sqrt{2})=0.94\ \mathrm{nm}.
  \]
  Thus, under the assumptions of independent site-position errors and first-order propagation, the site-position standard deviation must satisfy \(\sigma_{\rm site}\lesssim0.94\) nm.

- **What is the principal spatial advantage of delta doping?**

  Delta doping, meaning dopant incorporation within a very thin layer during material growth, provides strong confinement of dopants in the depth direction. By itself, it does not assign lateral coordinates.

- **What physical effects are omitted when annealing is treated as restoring the initial positions?**

  Vacancies become mobile during annealing. Consequently, capture positions can broaden, surfaces can remove vacancies from the active region, and unwanted aggregates can form. The 300 nm single-vacancy diffusion bound for an 800 °C anneal provides an existence proof that the assumptions “damage erased” and “position unchanged” cannot both be applied.

- **Calculate the nine-site array yield for independent \(p_{\rm use}=0.90\), and determine the single-site yield required for a 50% array target.**

  Under the assumption of statistically independent sites,
  \[
  Y_9=0.90^9\approx0.387.
  \]
  The probability that all nine indispensable sites are usable is therefore about 38.7%. Inverting the same relation for a target array yield of 0.5 gives
  \[
  p_{\rm use}\ge0.5^{1/9}=0.926.
  \]
  Thus, the required single-site usability is at least 92.6%.

- **What data are required as inputs to a Hamiltonian simulation?**

  A Hamiltonian simulation should use sampled three-dimensional center coordinates and species, indicators for missing and additional sites, charge-state and spin-acceptance variables, covariance and distribution tails, and the resulting distributions of intended and unintended couplings. A nominal lattice pitch alone is insufficient.

## Sources

- [R202] P. Spinicelli et al., “Engineered arrays of NV color
centers in diamond based on implantation of CN\(^-\) molecules through nanoapertures,”
New Journal of Physics 13, 025014 (2011). DOI:
[10.1088/1367-2630/13/2/025014](https://doi.org/10.1088/1367-2630/13/2/025014);
[arXiv:1008.1483](https://arxiv.org/abs/1008.1483).

- [R190] T. Schröder et al., “Scalable focused ion beam
creation of nearly lifetime-limited single quantum emitters in diamond
nanostructures,” Nature Communications 8,
15376 (2017). DOI: [10.1038/ncomms15376](https://doi.org/10.1038/ncomms15376); [stable full text](https://pmc.ncbi.nlm.nih.gov/articles/PMC5458551/).

- [R204] K. Ohno et al., “Engineering shallow spins in
diamond with nitrogen delta-doping,” Applied Physics Letters
101, 082413 (2012). DOI: [10.1063/1.4748280](https://doi.org/10.1063/1.4748280); [arXiv:1207.2784](https://arxiv.org/abs/1207.2784).

- [R207] S. Kim et al., “Scalable nanoscale positioning of
highly coherent color centers in prefabricated diamond nanostructures,”
Nature Communications 16, 9803 (2025). DOI: [10.1038/s41467-025-64758-4](https://doi.org/10.1038/s41467-025-64758-4).

- [R203] Y.-C. Chen et al., “Laser writing of individual
nitrogen-vacancy defects in diamond with near-unity yield,”
Optica 6, 662–667 (2019). DOI: [10.1364/OPTICA.6.000662](https://doi.org/10.1364/OPTICA.6.000662).

- [R206] P. Räcke, L. Pietzonka, J. Meijer, D. Spemann, and R.
Wunderlich, “Vacancy diffusion and nitrogen-vacancy center formation
near the diamond surface,” Applied Physics Letters
118, 204003 (2021). DOI: [10.1063/5.0046031](https://doi.org/10.1063/5.0046031).

- [R205] J. Wang et al., “Efficient generation of an array of
single silicon-vacancy defects in silicon carbide,” Physical Review
Applied 7, 064021 (2017). DOI: [10.1103/PhysRevApplied.7.064021](https://doi.org/10.1103/PhysRevApplied.7.064021).

- [R258] K. Groot-Berning, G. Jacob, C. Osterkamp, F. Jelezko, and F.
Schmidt-Kaler, “Fabrication of \(^{15}\mathrm{NV}^{-}\) centers in diamond
using a deterministic single ion implanter,” New Journal of
Physics 23, 063067 (2021). DOI: [10.1088/1367-2630/ac0753](https://doi.org/10.1088/1367-2630/ac0753);
[arXiv:2101.01979](https://arxiv.org/abs/2101.01979).

- [R259] A. Persaud, J. A. Liddle, T. Schenkel, J. Bokor, T. Ivanov,
and I. W. Rangelow, “Ion implantation with scanning probe alignment,”
Journal of Vacuum Science & Technology B
23, 2798–2800 (2005). DOI: [10.1116/1.2062628](https://doi.org/10.1116/1.2062628).

- [R260] S. Pezzagna, B. Naydenov, F. Jelezko, J. Wrachtrup, and J.
Meijer, “Creation efficiency of nitrogen-vacancy centres in diamond,”
New Journal of Physics 12, 065017 (2010). DOI:
[10.1088/1367-2630/12/6/065017](https://doi.org/10.1088/1367-2630/12/6/065017).

---
