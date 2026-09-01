# Chapter 28 — Separation and successful atom placement

Two nitrogen-vacancy (NV) centers separated by exactly ten nanometres would have a point-dipole coefficient of 52 kHz if both occupied their intended positions. A fabrication procedure can define target coordinates, implant nitrogen through apertures, anneal the crystal, and detect fluorescence. However, specifying two target coordinates does not establish that a usable pair of centers has formed.

The interaction energy depends on the actual displacement between the centers and on whether the intended charge-stable spin forms at each endpoint. If the mean separation is 10 nm but individual positions vary by several nanometres, the resulting couplings have a broad distribution. If only a small fraction of target sites contain the intended spin, most nominal pairs are incomplete.

A commanded spacing therefore does not define a functional device. The relevant problem is to determine the measured positions of centers that satisfy optical, spin, charge-state, and coherence requirements. The Hamiltonian, which is the operator describing the system’s energy and dynamics, depends on those accepted centers. All earlier fabrication coordinates and distributions are proxies for this final configuration.

## Distinguishing beam position from final defect position

An implantation system assigns a coordinate to an incoming ion, but the fabrication process involves at least five distinct spatial or probabilistic quantities. These quantities are not interchangeable measures of resolution.

- The first quantity is the position at which the incoming ion crosses the crystal surface. It is determined by the beam spot or by the aperture in a mask.

- The second is the ion’s stopping position after transport through the solid.

- The third is the displacement of a mobile vacancy during annealing before it is captured, recombines, forms a cluster, or is lost at a surface.

- The fourth is the probability that the delivered ion or a created vacancy forms the specified structural defect in the specified charge state.

- The fifth is the measured position after retaining only those centers that also satisfy optical, spin, charge-state, and coherence acceptance tests.

The lateral and depth-dependent spread associated with the second quantity is called implantation straggle. This distinction is necessary because instrument specifications generally report beam properties, whereas the crystal introduces additional positional variation.

For example, a beam narrower than 10 nm can produce a stopping distribution with 20 nm straggle. Conversely, even if an implanted nitrogen atom has a narrowly distributed stopping position, it can capture a vacancy that migrated during annealing.

A center can also occupy the intended position while remaining optically dark. Instrument documentation normally reports the surface-entry distribution because that is the quantity directly controlled by the instrument. The Hamiltonian instead depends on the fifth quantity: the positions of usable centers.

The sequence can be represented schematically as follows:

```
commanded site
|
+-- surface entry: beam/aperture distribution
|
+-- stopping point: entry convolved with ion straggle
|
+-- annealed complex: vacancy migration and capture
|
+-- created center: structural/charge conversion succeeds
|
`-- usable center: position measured; spin passes acceptance tests
```

A convolution is the probability distribution obtained when independent random displacements are added as random variables. For independent Gaussian one-dimensional errors with standard deviations \(\sigma_1,\sigma_2,\ldots\), the total standard deviation is

\[
\sigma_{\mathrm{total}}=\sqrt{\sigma_1^2+\sigma_2^2+\cdots}.
\]

Thus, independent random errors combine in quadrature. Systematic registration offsets are biases rather than random errors. They must be added explicitly and removed or reduced through calibration; they are not included through the quadrature relation.

Reporting only the beam distribution characterizes surface entry. It does not characterize stopping positions, vacancy capture, or the conditional position distribution of centers that subsequently pass a spin-acceptance test.

## Dipolar interaction between two localized spins

Consider two localized electron spins separated by a displacement vector \(\mathbf r\). Its magnitude is \(r\), and the corresponding unit vector is \(\hat{\mathbf r}=\mathbf r/r\). Let \(\mathbf S_1\) and \(\mathbf S_2\) denote dimensionless spin operators, whose eigenvalues are therefore pure numbers. For electron Landé factors \(g_1\) and \(g_2\), the point-dipole interaction energy is

\[
H_{dd}=h\nu_d(r)
\left[
\mathbf S_1\!\cdot\!\mathbf S_2
-3(\mathbf S_1\!\cdot\!\hat{\mathbf r})
(\mathbf S_2\!\cdot\!\hat{\mathbf r})
\right],
\]

where \(h\) is Planck’s constant and

\[
\nu_d(r)=\frac{\mu_0}{4\pi}\frac{g_1g_2\mu_B^2}{h r^3}.
\]

Here, \(\mu_0\) is the vacuum permeability, \(\mu_B\) is the Bohr magneton, and \(\nu_d\) is the dipolar coefficient. The equation defines the long-range magnetic interaction in the point-dipole approximation.

The dipolar coefficient is not necessarily equal to an observed transition splitting or gate rate. Those measured or operational quantities also depend on the angular factor, spin-state matrix elements, detuning, and pulse-sequence conventions.

For two electron-like spins with \(g_1=g_2=2.0023\), using rounded 2022 CODATA values [R208],

\[
\frac{\mu_0}{4\pi}\approx10^{-7}\ {\rm N\,A^{-2}},\qquad
\mu_B=9.274010\times10^{-24}\ {\rm J\,T^{-1}},
\]

\[
h=6.62607015\times10^{-34}\ {\rm J\,s},
\]

the coefficient is

\[
\nu_d(r)\approx \frac{52.04\ {\rm MHz\,nm^3}}{r^3}.
\]

A tesla is \({\rm T=N\,(A\,m)^{-1}}\). Therefore,

\[
\left({\rm N\,A^{-2}}\right)
\frac{\left({\rm J\,T^{-1}}\right)^2}
{\left({\rm J\,s}\right){\rm m^3}}
=
\left({\rm N\,A^{-2}}\right)
\frac{\left({\rm A\,m^2}\right)^2}
{\left({\rm N\,m\,s}\right){\rm m^3}}
={\rm s^{-1}}.
\]

This dimensional analysis confirms that \(\nu_d\) has units of frequency. Substituting \(r=1\,{\rm nm}=10^{-9}\,{\rm m}\) gives \(5.204\times10^7\ {\rm s^{-1}}=52.04\ {\rm MHz}\). The other values follow from the \(r^{-3}\) scaling.

| Separation \(r\) | \(r^3\) (nm\(^3\)) | Dipolar coefficient \(\nu_d\) | Square-lattice density proxy \(1/r^2\) (sites/µm\(^2\)) |
|---|---:|---:|---:|
| 1 nm | 1 | 52.0 MHz | 1,000,000 |
| 2 nm | 8 | 6.50 MHz | 250,000 |
| 5 nm | 125 | 416 kHz | 40,000 |
| 10 nm | 1,000 | 52.0 kHz | 10,000 |
| 20 nm | 8,000 | 6.50 kHz | 2,500 |
| 50 nm | 125,000 | 416 Hz | 400 |

The density column is only the geometric value for one site per square of side \(r\). Honeycomb, kagome, cluster, routing, and optical-access layouts have different areas per site.

The dipolar values are consistent in scale with an [Experiment] demonstrating coherent coupling between two NV electron spins whose inferred separation was \(9.8\pm0.3\) nm. After the geometry was included, the observed coupling was in the tens-of-kilohertz range [R181]. That experiment established one coupled pair; it did not establish a deterministic array containing 10,000 sites per square micrometre.

The angular dependence is essential. If both spin moments are quantized along a unit vector \(\hat{\mathbf z}\), a common secular coefficient, obtained by retaining the energy-conserving part of the interaction in the chosen quantization basis, contains

\[
A(\theta)=1-3\cos^2\theta,
\]

where \(\theta\) is the angle between \(\hat{\mathbf r}\) and \(\hat{\mathbf z}\). The factor ranges from \(-2\) to \(+1\) and vanishes at the magic angle

\[
\theta=\cos^{-1}(1/\sqrt3)\approx54.7^\circ.
\]

Consequently, the statement that a 10 nm separation gives 52 kHz specifies a coefficient scale rather than a guaranteed usable 52 kHz interaction. If the angular factor is omitted, a pair at the magic angle can be incorrectly interpreted as lacking a coupling rather than having a geometry that cancels the secular coefficient. When the angular dependence is retained, 52 kHz is an upper-scale envelope determined by geometry, not a delivered gate rate.

## Breakdown of the point-dipole approximation at nanometre separations

At separations of 1–2 nm, representing each defect as a point magnetic dipole is not a complete microscopic model. Electronic wavefunctions can overlap, and the interaction can depend on charge configuration, relative crystallographic orientation, strain, and the exact atomic realization of the pair.

The remaining short-range interaction includes exchange, which arises from wavefunction overlap and the fermionic symmetry of the electrons. Exchange is not generally a small correction to the tabulated dipolar values. Its magnitude often varies approximately exponentially with separation rather than following a universal power law. [Numerics] Atomistic calculations for diamond spin centers found strongly orientation-dependent exchange interactions that can exceed dipolar coupling for some NV-pair geometries below roughly 3 nm [R107].

This result does not imply that every 2 nm pair has a strong, uniform, or useful exchange link. It implies that the 6.50 MHz dipolar entry represents only the long-range contribution to a site-specific Hamiltonian.

At these separations, the actual pair must be calculated or measured. The analysis must verify that two recognizable defects and their desired charge states remain stable and must include exchange, tunnelling, altered orbital levels, and implantation damage. Adding an assumed exchange contribution to the table without a microscopic calculation or measurement would not be justified.

If only the \(r^{-3}\) term is retained below 2 nm, the universal long-range contribution is included while a nonuniversal short-range contribution that can dominate is omitted.

## Propagation of placement uncertainty into coupling uncertainty

Let the intended separation be \(r_0\), and let \(\delta r\) be a small error in separation along the bond direction. Because \(\nu_d=C r^{-3}\), where \(C=52.04\ {\rm MHz\,nm^3}\) for the electron-like case,

\[
\frac{d\nu_d}{dr}=-3Cr^{-4}=-\frac{3\nu_d}{r}.
\]

A first-order expansion about \(r_0\) gives

\[
\frac{\delta\nu_d}{\nu_d}\approx-3\frac{\delta r}{r_0}.
\]

This equation relates small radial placement errors to fractional variations in the dipolar coefficient.

Suppose that each endpoint has an independent one-axis placement standard deviation \(\sigma_{\rm site}\) along the bond. The standard deviation of the relative displacement is then

\[
\sigma_r=\sqrt2\,\sigma_{\rm site},
\qquad
\frac{\sigma_\nu}{\nu_d}\approx
\frac{3\sqrt2\,\sigma_{\rm site}}{r_0}.
\]

This is an optimistic estimate that includes only radial disorder. It omits disorder in the angular factor, non-Gaussian tails, missing sites, and variation in exchange interactions. Requiring radial dipolar disorder below 10% gives

\[
\sigma_{\rm site}<\frac{0.10}{3\sqrt2}r_0\approx0.0236r_0.
\]

| Target spacing | Maximum independent per-site \(\sigma_{\rm site}\) for 10% radial coupling scatter |
|---|---:|
| 1 nm | 0.024 nm |
| 2 nm | 0.047 nm |
| 5 nm | 0.118 nm |
| 10 nm | 0.236 nm |
| 20 nm | 0.471 nm |
| 50 nm | 1.18 nm |

These values are derived tolerances, not claimed fabrication capabilities.

For example, a 2 nm per-site standard deviation would produce an estimated fractional radial coupling scatter of

\[
3\sqrt2(2/10)\approx0.85,
\]

or 85%, for a design with 10 nm spacing. Increasing the spacing to 50 nm relaxes the relative placement tolerance, but the bare dipolar coefficient decreases to 416 Hz. Spatial design therefore involves a trade-off between placement tolerance and interaction strength.

The linear approximation is invalid when \(\sigma_r/r_0\) is not small. If a scalar Gaussian model is applied without suitable constraints, it can also assign nonzero probability to unphysical negative distances.

A more complete disorder model samples three-dimensional endpoint positions, computes \(\mathbf r\), evaluates the full dipolar tensor and any short-range terms, and rejects configurations that are atomically impossible or correspond to merged defects. The resulting distribution should be reported using quantiles of \(J\), where \(J\) denotes the interaction strength, rather than only \(J\) evaluated at the mean distance. Because \(r^{-3}\) is a convex function for positive \(r\), rare close pairs produce a long tail of strong couplings.

Reporting only \(J\) at the mean distance therefore omits the disproportionate contribution from the close-distance tail. The typical coupling and the mean coupling need not be equal.

## Conditional probability of obtaining a usable site

A target site is usable only if several successive conditions are satisfied. Define the following events for one target site:

- \(A\): the intended ion or vacancy is delivered;
- \(C\): the desired structural complex forms;
- \(Q\): the complex has the usable charge state;
- \(O\): the center can be initialized and read out;
- \(S\): its spin and coherence satisfy the specification; and
- \(G\): its final geometry lies within tolerance.

The exact usable-site probability is

\[
p_{\rm use}=P(A)P(C\mid A)P(Q\mid A,C)P(O\mid A,C,Q)
P(S\mid A,C,Q,O)P(G\mid A,C,Q,O,S).
\]

This product defines a yield as a chain of conditional probabilities rather than as one undifferentiated success probability.

The factors need not be statistically independent. Detection of a single implanted ion addresses event \(A\), but it does not establish the remaining events. A reported “20% conversion” addresses a version of event \(C\) under specified processing conditions; it does not directly give \(p_{\rm use}\). Similarly, “33 nm placement” is meaningful only after specifying whether it refers to lateral position, depth, or one standard deviation,

If \(N\) sites were independent and every site were required, the defect-free array yield would be \(p_{\rm use}^N\). At \(p_{\rm use}=0.96\), an array of 100 sites would have

\[
0.96^{100}\approx1.69\%
\]

defect-free yield. At 1,000 sites, the value is about \(1.9\times10^{-18}\). Repair, repeated implantation, movable qubits, redundant layouts, or tolerance of missing sites can change this conclusion. Site yield nevertheless cannot be substituted for array yield without explicitly accounting for array size and architecture.

A related limitation occurs when the number of created centers per target follows a Poisson distribution with mean \(\lambda\). The probability of creating exactly one center is

\[
P(1)=\lambda e^{-\lambda},
\]

which is maximized at \(\lambda=1\), where

\[
P(1)=e^{-1}\approx36.8\%.
\]

Under a Poisson model, dose tuning alone cannot exceed this ceiling. Feedback or postselection changes the physical or statistical process and therefore changes the applicable model.

A reported percentage is not a device yield unless its denominator, conditioning events, and array size are specified.

## Experimental measures of placement and creation yield

The following rows intentionally retain different definitions. They should not be reduced to a single ranking called “resolution.” Full width at half maximum (FWHM) is the width of a distribution measured between the two points where its value is half its maximum. PMMA is poly(methyl methacrylate), used here as a lithographic mask. SRIM is a numerical ion-transport simulation package used to estimate stopping and straggle distributions.

| Host and process | Surface-entry control | Straggle/stopping distribution | Vacancy motion | Reported creation yield | Final measured placement or usability statement |
|---|---|---|---|---|---|
| Diamond, 20 keV N component of implanted CN\(^-\) through a PMMA mask | 80 nm diameter aperture | [Numerics] SRIM stopping depth \(30\pm10\) nm and about 9 nm straggle | 800 °C, 2 h anneal; diffusion contribution not separately measured | [Experiment] mean 3.5 NV centers from about 50 N atoms per aperture, approximately 7% N-to-NV conversion, over 49 sites [R202] | Emission sites followed the mask; the paper did not establish a sub-10-nm final usable-position distribution [R202] |
| Diamond, focused Si implantation for SiV | Typical beam FWHM below 40 nm | [Numerics] 19 nm lateral straggle; combining a 40 nm FWHM beam (\(\sigma\approx17\) nm) and straggle predicted \(\sigma\approx26\) nm | High-temperature anneal; vacancy capture controls conversion | [Experiment] up to about 2.5% at 100 keV; electron irradiation plus re-anneal raised a tested bulk-sample value to about 20% [R190] | [Experiment] created single SiVs had 32 nm one-axis standard deviations; radial offset \(40\pm20\) nm. Cavity targeting gave \(48\pm21\) nm [R190] |
| Diamond, femtosecond vacancy writing plus local annealing and optical feedback | Diffraction-scale optical focus, not an ion beam | No implanted-ion straggle | Vacancy creation and local annealing are the mechanism; feedback stops once emission is detected | [Experiment] approximately 96% single-NV creation yield under the reported feedback protocol [R203] | [Experiment] about 33 nm in-plane positioning deviation; this is not equivalent to 33 nm three-dimensional nearest-neighbour control [R203] |
| Diamond, nitrogen delta-doping during growth plus irradiation/anneal | No deterministic lateral coordinate | [Experiment] a roughly 1–2 nm doped layer; cap thickness selected nominal NV depths from about 5 to 100 nm | Vacancies supplied after growth and annealed into the N layer | Not reported as a deterministic per-site useful yield in this study | [Experiment] tight depth engineering, but no lateral array placement; shallow nominal 5 nm layers retained \(T_2>100\ \mu{\rm s}\) under reported conditions [R204] |

Diamond, delta-doped N plus localized electron irradiation used a 200 keV electron beam with a 20 nm spot.

Electrons create vacancies along a narrow path; the N layer, rather than ion stopping, sets depth.

850 °C, 11 min anneal; [Numerics] diffusion-capture modeling accompanied the measurement.

[Exper

| Host and process | Surface-entry control | Straggle/stopping distribution | Vacancy motion | Reported creation yield | Final measured placement or usability statement |
|---|---|---|---|---|---|
| 4H-SiC, 30 keV carbon implantation through a lithographic mask | Mask-defined target arrays | [Numerics] implantation selected shallow silicon vacancies at roughly 40 nm depth | Host- and defect-specific activation; diamond diffusion numbers do not transfer | [Experiment] \(19\pm4\)% silicon-vacancy generation efficiency and \(34\pm4\)% probability of a single emitter at optimized dose [R205] | Predetermined arrays were demonstrated, but those yield figures do not by themselves establish sub-10-nm final pair-spacing distributions [R205] |

The SiV row provides an explicit uncertainty calculation. For a beam with FWHM 40 nm, conversion to a Gaussian standard deviation gives

\[
40/2.355\approx17\ {\rm nm}.
\]

Combining this standard deviation with 19 nm straggle gives

\[
\sqrt{17^2+19^2}\approx25.5\ {\rm nm},
\]

which is consistent with the paper’s predicted value of 26 nm.

The measured distribution of created centers was broader, with a standard deviation of 32 nm per axis [R190]. Thus, a beam reported as narrower than 40 nm did not produce a final location distribution narrower than 40 nm. This difference demonstrates why the endpoint distribution must be measured.

The CN-mask row supports another uncertainty propagation, although it does not provide a direct endpoint measurement. If entry points were uniformly distributed across a circular aperture of radius \(a=40\) nm, one Cartesian coordinate would have

\[
\sigma_x=a/2=20\ {\rm nm}.
\]

Combining this idealized aperture distribution with 9 nm straggle gives

\[
\sqrt{20^2+9^2}\approx22\ {\rm nm}
\]

before including alignment error, diffusion, channeling tails, or optical-localization uncertainty. This calculation illustrates the use of the reported inputs; it is not a measured final NV standard deviation [R202].

A small pitch between adjacent apertures does not imply a narrow distribution of center separations within an aperture.

Vacancy diffusion can either enable center formation or degrade the intended geometry. [Experiment] In nitrogen-rich type-Ib diamond implanted with focused Ar ions, Räcke and colleagues measured 0.04–0.79 created NV centers per implanted Ar ion over 12–132 keV [R206].

[Numerics] Their model of vacancy loss to the surface placed an upper bound of about 300 nm on the single-vacancy diffusion length for an 800 °C anneal [R206]. This upper bound does not imply that every NV moves 300 nm, and it cannot be treated as a Gaussian placement error.

The implanted nitrogen is comparatively immobile. Formation of the complex requires a mobile vacancy to reach a neighboring lattice site. The final position distribution is therefore a reaction-and-capture distribution conditioned on nitrogen density, depth, surfaces, damage, charge state, temperature, and time.

The available fabrication methods control different quantities. Delta doping can confine the depth distribution while leaving lateral positions random. A focused beam can target lateral coordinates while ion scattering broadens both depth and lateral position. Laser feedback can increase center-creation yield without providing atomic-scale three-dimensional registration.

[Experiment] By 2025, delta doping combined with localized electron-created vacancies had demonstrated about 4 nm depth confinement and 46(1) nm lateral confinement in 280 nm diamond pillars, but not the sub-nanometre relative placement required for a uniform 10 nm dipolar graph [R207].

Application of such hybrid methods to a dense interacting lattice remains a [Proposal] until the final pair distribution and usable-array yield are measured.

A regularly spaced fluorescence image establishes an array of physical emitters, but not necessarily an array of coherently coupled qubits. A small number of coupled defects does not establish an encoded cluster. Similarly, a fabricated interaction graph is not evidence of a topological phase.

Successful spatial fabrication provides one necessary input to the microscopic Hamiltonian. It does not establish emergence, a many-body energy gap, or a logical qubit.

## Common errors in interpreting placement data

- **Reporting the beam distribution as the final defect distribution.** An ion-optical spot of 10 nm specifies the surface-entry distribution, not the stopping distribution. In the reported SiV experiment, the nominal beam was smaller than 40 nm, the calculated lateral straggle was 19 nm, and the measured one-axis spread of created centers was 32 nm [R190]. Each of these numbers describes a different physical quantity; omitting any one of them changes the interpretation.

- **Treating a transport simulation as an endpoint measurement.** Transport simulations are valuable [Numerics] because they model ion trajectories and damage under assumptions about an initially ideal target. They do not, by themselves, measure charge-state stability, the position of the annealed complex, channeling tails in a particular crystal, or usable-spin yield. Simulated distributions must be validated using microscopy, spectroscopy, or coupling-based localization.

- **Equating conversion yield with deterministic placement.** Detection of a single implanted ion does not guarantee formation of the requested center. Conversely, a 96% laser-feedback creation result does not imply that 96% of sites lie within a 1 nm tolerance or satisfy a coherence threshold [R203]. A percentage cannot be interpreted without its denominator, conditioning events, and acceptance tests.

- **Ignoring distribution tails and the nearest unintended neighbors.** The mean and standard deviation are insufficient when rare close pairs dominate an \(r^{-3}\) interaction. Damage-related paramagnetic defects can also lie closer than the intended qubit and couple more strongly. Because the convexity of \(r^{-3}\) gives disproportionate weight to the close-distance tail, analyses should report a three-dimensional point-process distribution, tail quantiles, and the identities of dark spins where possible.

- **Transferring diamond statistics to another host material.** Stopping distributions depend on ion species, energy, crystal orientation, density, channeling, and target composition. Vacancy migration and complex formation depend on the host’s defect chemistry. The 300 nm diamond upper bound [R206], the 7% CN-to-NV result [R202], and the SiC yield [R205] are distinct conditioned experimental results rather than interchangeable constants. For sapphire in particular, a proposed array has no defensible spatial-error budget until the selected defect, charge state, implantation species, annealing procedure, and final spin-acceptance measurement are specified.

- **Assuming that a stronger interaction is necessarily preferable.** At 1–2 nm, exchange, tunnelling, altered defect identity, and implantation damage can invalidate the intended isolated-spin model [R107]. At 50 nm, placement is less demanding, but a bare dipolar coupling of 416 Hz may be smaller than the linewidth or decoherence rate. The viable range is therefore the range in which the measured distribution of useful couplings exceeds the Chapter 27 noise rates while remaining within the domain of validity of the intended Hamiltonian model.

## Technical assessment

- A focused beam with a 10 nm spot does not establish a 10 nm final defect-position uncertainty. The beam spot specifies the transverse extent of the incident beam, whereas ion straggle—the stochastic displacement of an implanted ion from its nominal trajectory—remains. Registration bias, defined as a systematic offset between the intended and realized coordinates, also remains. Additional uncertainties arise from annealing and capture physics and from the conditional final-position distribution of successfully created usable centers.

- For two electron spins separated by 20 nm, the electron-spin dipolar coefficient is 6.50 kHz:

  \[
  52.04\ {\rm MHz\,nm^3}/20^3=6.50\ {\rm
  kHz},
  \]

  before angular and matrix-element factors are included. Angular factors account for the orientation of the displacement vector relative to the spin quantization axes, while matrix-element factors account for the spin states coupled by the interaction.

- A 1 nm table entry is not a complete coupling prediction. At this separation, wavefunction overlap and site-specific exchange, tunnelling, charge, and structural changes can rival or dominate the point-dipole term. Exchange is the spin coupling produced by wavefunction overlap and fermionic antisymmetry, while tunnelling is the quantum-mechanical transfer amplitude between sites.

- Independent 1 nm bond-direction placement errors at a 10 nm pitch produce approximately 42% radial dipolar scatter. Here, pitch is the nominal center-to-center site separation, and the bond direction is the direction of the vector connecting the two sites. In the small-error approximation,

  \[
  3\sqrt2(1/10)\approx0.42.
  \]

  Angular disorder contributes additional variation.

- A 20% conversion yield does not imply a 20% usable-site yield. Conversion yield is the fraction of starting implantation or creation events that produce the target defect. Usable-site yield additionally depends on the probabilities of obtaining the required charge state, readout performance, coherence, and geometric tolerance. These selection conditions may be correlated.

- A fabrication paper for this architecture must report three-dimensional final-position distributions, non-Gaussian tails and biases, the exact denominator used to define creation yield, charge and spin acceptance criteria, missing and extra defects, the pair-coupling distribution, and the array-level yield under the stated processing conditions.

A nominal 10 nm design spacing does not establish a realized 10 nm defect geometry. For electron-like spins, meaning localized spins with electron magnetic moments, the point-dipole coefficient is \(52.04\ {\rm MHz\,nm^3}/r^3\), where \(r\) is the spin separation. This expression gives 52.0 MHz, 6.50 MHz, 416 kHz, 52.0 kHz, 6.50 kHz, and 416 Hz at 1, 2, 5, 10, 20, and 50 nm.

Angular factors and short-range exchange must be evaluated separately from this radial point-dipole coefficient. For small radial placement errors, the fractional standard deviation of the coupling is

\[
\sigma_J/J\approx3\sqrt2\sigma_{\rm site}/r,
\]

where \(J\) is the dipolar coupling, \(\sigma_J\) is its standard deviation, and \(\sigma_{\rm site}\) is the per-site bond-direction position uncertainty. Under this small-error approximation, achieving 10% coupling uniformity requires a per-site bond-direction error below about \(0.0236r\).

Existing laboratory results provide several relevant capabilities: coupled 10 nm-class pairs, nanometre-scale stopping calculations, measured final placement at the tens-of-nanometres scale, and process-dependent creation yields. They do not yet provide a dense, defect-free interaction graph with sub-nanometre placement tolerance. Specifying the spacing alone is therefore insufficient to establish a functional device.


## Sources

- [R181] P. Neumann et al., “Quantum register based on
coupled electron spins in a room-temperature solid,” Nature
Physics 6, 249–253 (2010). DOI: [10.1038/nphys1536](https://doi.org/10.1038/nphys1536); [arXiv:1004.5090](https://arxiv.org/abs/1004.5090).

- [R107] V. R. Kortan, C. Şahin, and M. E. Flatté, “Nanometer-scale
exchange interactions between spin centers in diamond,” Physical
Review B 93, 220402(R) (2016). DOI: [10.1103/PhysRevB.93.220402](https://doi.org/10.1103/PhysRevB.93.220402);
[arXiv:1603.03485](https://arxiv.org/abs/1603.03485).

- [R202] P. Spinicelli et al., “Engineered arrays of NV color
centers in diamond based on implantation of CN\(^-\) molecules through nanoapertures,”
New Journal of Physics 13, 025014 (2011). DOI:
[10.1088/1367-2630/13/2/025014](https://doi.org/10.1088/1367-2630/13/2/025014);
[arXiv:1008.1483](https://arxiv.org/abs/1008.1483).

- [R190] T. Schröder et al., “Scalable focused ion beam
creation of nearly lifetime-limited single quantum emitters in diamond
nanostructures,” Nature Communications 8,
15376 (2017). DOI: [10.1038/ncomms15376](https://doi.org/10.1038/ncomms15376);
stable full text: [PMC5458551](https://pmc.ncbi.nlm.nih.gov/articles/PMC5458551/).

- [R203] Y.-C. Chen et al., “Laser writing of individual
nitrogen-vacancy defects in diamond with near-unity yield,”
Optica 6, 662–667 (2019). DOI: [10.1364/OPTICA.6.000662](https://doi.org/10.1364/OPTICA.6.000662).

- [R204] K. Ohno et al., “Engineering shallow spins in
diamond with nitrogen delta-doping,” Applied Physics Letters
101, 082413 (2012). DOI: [10.1063/1.4748280](https://doi.org/10.1063/1.4748280); [arXiv:1207.2784](https://arxiv.org/abs/1207.2784).


- [R205] J. Wang et al., “Efficient generation of an array of
single silicon-vacancy defects in silicon carbide,” Physical Review
Applied 7, 064021 (2017). DOI: [10.1103/PhysRevApplied.7.064021](https://doi.org/10.1103/PhysRevApplied.7.064021).

- [R206] P. Räcke, L. Pietzonka, J. Meijer, D. Spemann, and R.
Wunderlich, “Vacancy diffusion and nitrogen-vacancy center formation
near the diamond surface,” Applied Physics Letters
118, 204003 (2021). DOI: [10.1063/5.0046031](https://doi.org/10.1063/5.0046031).

- [R207] S. Kim et al., “Scalable nanoscale positioning of
highly coherent color centers in prefabricated diamond nanostructures,”
Nature Communications 16, 9803 (2025). DOI: [10.1038/s41467-025-64758-4](https://doi.org/10.1038/s41467-025-64758-4).

- [R208] P. J. Mohr et al., “CODATA recommended values of the
fundamental physical constants: 2022,” Reviews of Modern
Physics 97, 025002 (2025). DOI: [10.1103/RevModPhys.97.025002](https://doi.org/10.1103/RevModPhys.97.025002);
stable constants database: [NIST Reference on Constants, Units, and Uncertainty](https://physics.nist.gov/cuu/Constants/).


---
