# Chapter 30 — Encoding-dependent response to identical perturbations

A spatially correlated magnetic perturbation can act simultaneously on three nearby defects. The three physical spins may encode a two-level logical subspace, while all other states are excluded from the intended dynamics.

The perturbation acts directly on the three physical spins and therefore cannot be analyzed solely within the logical encoding. Projection of the perturbation onto the encoded subspace produces a \(2\times2\) operator acting on the logical states. The complementary component couples the logical subspace to excluded states and can produce leakage, defined as population transfer out of the encoded subspace.

A cluster modifies the coupling between microscopic perturbations and the encoded states rather than eliminating those perturbations. Increasing the number of physical spins does not automatically reduce noise. Instead, the encoding assigns different signs and amplitudes to noise sources already present in the crystal.

## Perturbation channels in a cluster encoding

Consider a linear combination of three site-dependent signals. If the three signals have equal coefficients, independent fluctuations are partially suppressed because their cross-correlations vanish and their noise powers add incoherently. A perturbation that is identical at all three sites is not suppressed by this equal-weight combination. A coefficient pattern in which one site has the opposite sign can cancel a spatially uniform perturbation, but the same coefficient pattern produces a nonzero response to spatial gradients.

A cluster encoding implements such a linear combination through the matrix elements of physical operators within the selected logical subspace. The sites are microscopic defect sites, and the coefficients are determined by the encoded states.

A perturbation has three possible effects.

- It can shift the two retained energy levels by different amounts. The resulting random relative phase causes dephasing, defined as the loss of coherence between the logical basis states. This is the same process that Chapter 4 characterized through decay of an off-diagonal density-matrix element, now applied to the encoded pair.

- It can mix the two retained levels. This transfers population within the encoded subspace and produces relaxation or excitation of the logical qubit.

- It can transfer population out of the retained pair. This process is leakage into the \(Q\) subspace introduced in Chapter 11.

Static fabrication errors introduce a fourth practical issue: nominally equivalent clusters can realize different Hamiltonians. Slow temporal drift makes this disorder time dependent.

An encoding can reject a spatially uniform magnetic field while remaining strongly sensitive to a field gradient, a fluctuating exchange bond, or a control pulse that addresses several constituent defects simultaneously. Without the assumption that additional spins average statistically independent bath fluctuations, a perfectly common perturbation can produce an unattenuated encoded response. The response is determined by the encoding’s matrix elements.

## Three spins and a local field

Consider three spin-\(1/2\) defects with strong, approximately isotropic exchange coupling. Isotropic exchange is a spin-spin interaction with equal strength along all Cartesian spin directions. Let \(|\uparrow\rangle\) and \(|\downarrow\rangle\) denote eigenstates of the single-spin operator \(S^z\), with eigenvalues \(+1/2\) and \(-1/2\), respectively. The spin operators are dimensionless. An energy-valued local field \(\xi_i(t)\), measured in joules (J), couples to the spins through

\[
\delta H_z(t)=\sum_{i=1}^{3}\xi_i(t)S_i^z .
\]

Here \(\delta H_z(t)\) is the longitudinal perturbation Hamiltonian, and \(i\) labels the physical defect site.

Restrict attention to the total-magnetization sector \(S^z_{\rm tot}=+1/2\). Choose the logical basis states

\[
|0_L\rangle=\frac{|\uparrow\downarrow\uparrow\rangle-|\downarrow\uparrow\uparrow\rangle}{\sqrt2},
\]

\[
|1_L\rangle=\sqrt{\frac23}|\uparrow\uparrow\downarrow\rangle
-\frac{|\uparrow\downarrow\uparrow\rangle+|\downarrow\uparrow\uparrow\rangle}{\sqrt6}.
\]

These states are the same type of three-spin pair retained in Chapter 11. Define the projector onto this logical doublet by

\[
P=|0_L\rangle\langle0_L|+|1_L\rangle\langle1_L|.
\]

Define logical Pauli operators within the doublet as

\[
\tau_z=|0_L\rangle\langle0_L|-|1_L\rangle\langle1_L|,
\qquad
\tau_x=|0_L\rangle\langle1_L|+|1_L\rangle\langle0_L|.
\]

Direct evaluation of the matrix elements gives

\[
\begin{aligned}
P S_1^zP&=\frac16 I-\frac16\tau_z-\frac{\sqrt3}{6}\tau_x,\\
P S_2^zP&=\frac16 I-\frac16\tau_z+\frac{\sqrt3}{6}\tau_x,\\
P S_3^zP&=\frac16 I+\frac13\tau_z .
\end{aligned}
\]

These equations express each physical spin operator as an effective operator within the logical subspace. Substitution into the perturbation Hamiltonian gives

\[
P\delta H_zP=h_0 I+h_x\tau_x+h_z\tau_z,
\]

where

\[
h_0=\frac{\xi_1+\xi_2+\xi_3}{6},\qquad
h_x=\frac{\sqrt3}{6}(-\xi_1+\xi_2),
\]

\[
h_z=\frac{-\xi_1-\xi_2+2\xi_3}{6}.
\]

The identity contribution \(h_0I\) gives both logical basis states the same phase and therefore does not alter the encoded logical state. Low-frequency fluctuations in \(h_z\) produce logical dephasing. Fluctuations in \(h_x\) near the logical angular frequency \(\omega_L\), measured in radians per second, drive transitions between the logical states.

For a perfectly common longitudinal fluctuation, set \(\xi_1=\xi_2=\xi_3=\xi_c\). Both \(h_x\) and \(h_z\) then vanish because

\[
P(S_1^z+S_2^z+S_3^z)P=\frac12 I.
\]

Thus, a perfectly common longitudinal fluctuation is rejected to first order. [Theory] This is decoherence-free behavior with respect to one specified operator; it is not general immunity to magnetic noise. If spatial uniformity is removed, for example by allowing \(\xi_3\) to differ from \(\xi_1\) and \(\xi_2\), the longitudinal logical field \(h_z\) becomes nonzero immediately.

For equal and mutually uncorrelated site noise, define the two-sided energy-noise spectrum by

\[
S_\xi(\omega)=\int_{-\infty}^{\infty}dt\,e^{i\omega t}
\langle\xi_i(t)\xi_i(0)\rangle .
\]

A two-sided spectrum includes both positive and negative angular frequencies. Its units are \({\rm J^2\,s}\), because the correlation function has units of \({\rm J^2}\) and \(dt\) contributes seconds. Under the assumptions of equal spectra and zero cross-correlations between sites, the projected spectra are

\[
S_{h_x}(\omega)=S_{h_z}(\omega)=\frac16S_\xi(\omega).
\]

The factor of six represents a reduction in these projected noise spectra under the stated assumptions. It does not imply a universal sixfold increase in lifetime. Dephasing depends on the low-frequency filter function, which describes the frequency-dependent response of a control sequence to noise. Relaxation depends on the spectrum near \(\omega_L\), whereas leakage depends on higher-frequency spectral components near the cluster excitation gap.

The state

\[
|Q\rangle=\frac{|\uparrow\downarrow\uparrow\rangle+|\downarrow\uparrow\uparrow\rangle+|\uparrow\uparrow\downarrow\rangle}{\sqrt3}
\]

belongs to the total-spin-\(3/2\) manifold rather than the encoded doublet. Local field gradients have nonzero matrix elements \(\langle Q|S_i^z|0_L\rangle\) and \(\langle Q|S_i^z|1_L\rangle\). Consequently, noise with spectral weight at the cluster excitation energy can cause leakage.

A uniform longitudinal field is proportional to total \(S^z\) and cannot drive this transition. The cluster encoding therefore suppresses one spatial-correlation channel while retaining sensitivity to gradient and leakage channels.

## Projection of microscopic bath operators

Let the ideal cluster Hamiltonian be \(H_C\). Assume that its logical doublet is separated from every other cluster state by a minimum energy \(\Delta_C\), measured in J. Define

\[
Q=I-P
\]

as the projector onto the unwanted states outside the logical subspace. Write a general microscopic disturbance as

\[
\delta H(t)=\sum_a \xi_a(t)O_a.
\]

The index \(a\) specifies the site, Cartesian component, and physical mechanism. For example, \(O_a\) may be a spin component, an orbital or strain operator, a local charge projector, or a bond operator \(\mathbf S_i\cdot\mathbf S_j\). The coefficient \(\xi_a(t)\) has the units required for \(\xi_aO_a\) to have units of energy.

Any projected operator acting within a two-dimensional logical subspace can be expanded in the identity and logical Pauli operators:

\[
PO_aP=c_{a0}I+\frac12\sum_{\mu=x,y,z}g_{a\mu}\tau_\mu.
\]

The coefficient \(c_{a0}\) is a common energy shift and does not affect the logical state. The coefficients \(g_{a\mu}\) are the cluster’s noise susceptibilities. A noise susceptibility quantifies how strongly the projected physical operator contributes to the logical Pauli component \(\tau_\mu\).

The resulting effective logical fields are

\[
b_\mu(t)=\sum_a g_{a\mu}\xi_a(t),
\qquad
P\delta H P=\text{common shift}+\frac12\sum_\mu b_\mu\tau_\mu.
\]

If the unperturbed logical splitting is oriented along the logical \(z\) axis, slow fluctuations in \(b_z\) produce phase fluctuations. Spectral components of \(b_x\) and \(b_y\) near \(\omega_L\) drive logical transitions. Therefore, whether a physical disturbance is longitudinal or transverse is determined after projection into the logical basis, not solely by its laboratory description.

The frequency-dependent covariance of two bath variables is represented by the cross-spectrum

\[
S_{ab}(\omega)=\int dt\,e^{i\omega t}
\langle\delta\xi_a(t)\delta\xi_b(0)\rangle.
\]

Diagonal elements describe the noise power of each bath variable at frequency \(\omega\). Off-diagonal elements describe correlations between distinct bath variables. The corresponding logical spectral matrix is

\[
S^{(L)}_{\mu\nu}(\omega)=
\sum_{a,b}g_{a\mu}g_{b\nu}S_{ab}(\omega).
\]

This equation defines the projected noise model. The diagonal entries give the logical noise power along each Pauli axis, while the off-diagonal entries retain correlations between different logical axes. In a Markovian weak-noise calculation, where bath correlations decay sufficiently rapidly to justify memoryless dynamics, the logical relaxation rate is proportional to

\[
[S^{(L)}_{xx}(\omega_L)+S^{(L)}_{yy}(\omega_L)]/\hbar^2.
\]

The dimensions are consistent:

\[
{\rm J^2s}/({\rm J^2s^2})={\rm s^{-1}}.
\]

Exact numerical prefactors depend on whether one-sided or two-sided spectral conventions are used. A simulation must therefore state its spectral convention explicitly to avoid an unintended factor of two.

A complete characterization requires the full frequency-dependent logical spectral matrix together with the couplings to states in \(Q\), rather than a single coherence time. Neglecting the off-diagonal blocks of \(S_{ab}\) can reverse the predicted effect of the encoding.

## Effects of spatial noise correlations

Suppose the same type of operator acts at \(N\) sites with logical coefficients \(g_i\). If the site noises are independent and have the same spectrum \(S_0\), the logical spectrum is

\[
S_L=S_0\sum_i g_i^2.
\]

If the site noises are perfectly correlated, the logical spectrum is instead

\[
S_L=S_0\left(\sum_i g_i\right)^2.
\]

For a delocalized average with \(g_i=1/N\), independent noise decreases as \(1/N\), whereas common noise remains unchanged. For a decoherence-free sign pattern satisfying \(\sum_i g_i=0\), common noise cancels. Conversely, if all \(g_i\) have the same order-one sign, the common-noise power grows as \(N^2\).

Noise correlation is therefore not intrinsically beneficial or harmful. Its effect must be calculated by contracting the bath covariance matrix with the projected susceptibility vector. [Theory] A prediction based only on \(\sum_i g_i^2\) fails for common-mode noise: an encoding that suppresses independent noise through equal-weight averaging can respond strongly to correlated noise.

## Leakage outside the logical subspace

Projection onto \(P\) describes only dynamics within the logical subspace. The discarded operator block \(QO_aP\) determines transitions from the logical subspace into unwanted states.

For an unwanted eigenstate \(|m\rangle\) with energy difference \(E_m-E_L=\hbar\omega_{mL}\), the weak-noise transition rate contains

\[
\Gamma_{L\rightarrow m}\propto
\frac{1}{\hbar^2}\sum_{a,b}
\langle L|O_a|m\rangle
\langle m|O_b|L\rangle
S_{ab}(\omega_{mL}).
\]

The matrix elements \(\langle m|O_a|L\rangle\) are the components of \(QO_aP\). A large cluster gap \(\Delta_C\) suppresses leakage only if the environment has little spectral weight at \(\Delta_C/\hbar\) and if applied controls are slow or spectrally narrow relative to that frequency.

Strong pulses, resonant phonons, and charge-switching events need not satisfy these spectral conditions. Every microscopic noise operator must therefore be characterized through both \(PO_aP\), which determines its action inside the logical subspace, and \(QO_aP\), which determines leakage. A single quoted \(T_2\) does not retain either complete set of information.

## Classification of microscopic noise sources

The microscopic source, coupling mechanism, projected channel, and conditions for suppression or enhancement must be distinguished. The source names below denote physical mechanisms rather than interchangeable descriptions of decoherence.

| Microscopic source | Typical microscopic coupling | Main channel after projection | Clustering can suppress when… | Clustering can worsen when… |
|---|---|---|---|---|
| Host nuclear spins, including \(^{13}\mathrm C\) in diamond | Hyperfine fields and nuclear flip-flops | Quasistatic dephasing, spectral diffusion; sometimes resonant relaxation | the nuclear field is common across a fixed-magnetization encoding, or isotopic purification removes most bath spins | each constituent samples a different Overhauser field, and the cluster contains more strongly coupled nuclei |
| Paramagnetic impurities and unintended defects | Magnetic dipolar fields, bath flip-flops, cross-relaxation | Dephasing, relaxation, correlated magnetic bursts | symmetry rejects common field; detuning avoids bath resonances | high defect density supplies both desired coupling and a denser spin bath |
| Surface spins | Fluctuating magnetic dipoles at interfaces | Dephasing and relaxation, often depth dependent | the cluster is deep and compact compared with the field’s correlation length | shallow fabrication exposes every constituent and a nearby fluctuator acts nonuniformly |
| Charge noise | Electric/Stark shifts; modulation of orbital energies and exchange | Dephasing, bond noise, optical spectral diffusion | a clock point makes the logical splitting first-order insensitive | one trap modulates several bonds or shifts the cluster through an avoided crossing |
| Strain and electric-field noise | Crystal-field, spin-orbit, Stark, and spin-strain terms | Dephasing, relaxation, coupling disorder | symmetry makes uniform strain an identity operation | long-wavelength strain drives all sites coherently with non-cancelling matrix elements |
| Phonons | Dynamic strain and orbital/spin-phonon coupling | \(T_1\), orbital relaxation, leakage, temperature-dependent dephasing | the encoded transition has a vanishing matrix element or no resonant phonon density | collective matrix elements add, or a phonon matches \(\Delta_C\) |
| Implantation/processing damage | Vacancies, interstitials, strain fields, traps, paramagnetic complexes | Static disorder plus magnetic, charge, and strain noise | annealing and materials processing remove or passivate damage | adding more implanted constituents multiplies nearby damage and increases the distribution widths of \(J\) and \(\Delta_C\) |
| Charge-state instability | Ionization/recombination of the active defect | Leakage or erasure; abrupt Hamiltonian change | redundant heralding detects the event | one constituent changing charge destroys the encoded Hamiltonian and perturbs neighbors |

Nuclear and paramagnetic baths are environments formed by surrounding nuclear spins or electron spins. In diamond NV systems, coherent evolution coupled to \(^{13}\mathrm C\) nuclei and nitrogen-related electron-spin baths has been observed directly. Dynamical decoupling, meaning pulse sequences designed to produce a frequency-dependent response to environmental fluctuations, can modify the effective bath spectrum rather than eliminate it [Experiment] [R214]; [R215].

The same distinction applies to a cluster. Isotopic purification reduces the abundance of nuclear spins, whereas pulse filtering suppresses selected frequency components. Pulse filtering is the reduction of sensitivity to specified spectral components through the filter function of a control sequence. Neither procedure guarantees small leakage matrix elements.

A deliberately dense array can also convert spectator defects, residual implantation products, and unintended charge states into a correlated electron-spin bath.

Surface spins are fluctuating magnetic moments located at or near an interface. Measurements using shallow NV centers support a substantial contribution from surface-related magnetic noise [Experiment] [R216].

A compact cluster whose dimensions are much smaller than its distance from a source can experience an approximately common magnetic field and may reject that field. If one defect is substantially closer to the interface, the common-mode approximation fails.

Nanostructuring introduced for optical access can therefore alter both the noise magnitude and its spatial covariance. The \(T_2\) of a single defect does not determine the encoded \(T_2\).

Charge noise consists of temporal fluctuations in local electric potentials or charge configurations. Optical spectral diffusion is the resulting time-dependent fluctuation of an optical transition frequency. NV experiments have identified regimes dominated by magnetic noise and regimes dominated by electric-field noise [Experiment] [R217], and electric coupling to an individual NV spin has been measured directly [Experiment] [R191].

Charge traps can shift optical transition frequencies and change a defect’s charge state. In a cluster, electric noise may shift individual logical levels, modulate the intra-cluster exchange \(J_{ij}\), or modulate inter-cluster coupling.

These effects correspond to three distinct operators and therefore require three sets of coefficients \(g_{a\mu}\). Charge conversion is more severe than ordinary phase noise. If a constituent no longer occupies the required charge or spin manifold, the event is leakage or erasure rather than a small Pauli error.

Near-surface NV ensembles exhibit coupled charge dynamics and density-dependent charge-state behavior [Experiment] [R218].

Static strain is a time-independent spatial distortion and therefore contributes disorder. Time-dependent strain constitutes noise.

Spin-strain coupling has been driven and measured in NV–mechanical systems [Experiment] [R219]. Phonons, which are quantized lattice vibrations, can also relax orbital branches and spins.

For inversion-symmetric group-IV vacancy centers, orbital phonon processes are central to models of temperature-dependent coherence [Theory/Experiment] [R201]. A long-wavelength acoustic mode can be strongly correlated across a cluster with nanometre-scale dimensions.

Such correlation is beneficial only if the projected uniform-strain operator is proportional to \(I\). Otherwise, coherent addition of the matrix elements can amplify logical driving or leakage.

Ion implantation enables spatial placement of defects but also produces collision cascades, vacancies, interstitials, local strain, and charge traps. Annealing converts only part of this damaged region into the desired centers [Experiment/Review] [R212].

Implantation damage is therefore not a single decay channel. It generates static disorder in \(J_{ij}\) and produces magnetic, electric, and strain fluctuators.

A model of a fabricated array must correlate damage statistics with placement statistics instead of sampling them independently.

Spectral diffusion is the temporal fluctuation of a transition frequency as surrounding spins or charges change state.

Spectral diffusion is not an additional microscopic substance. Slow nuclear flip-flops, electron-spin flips, and telegraph switching of charge traps can all cause spectral diffusion [R213]; [R214]; [R217].

Gaussian white noise, defined by Gaussian statistics and a frequency-independent spectrum, is often an inadequate model. A single nearby trap can produce discrete, non-Gaussian jumps, whereas an ensemble with a broad distribution of switching rates can generate an approximate \(1/f\) spectrum. Echo sequences may refocus slow frequency fluctuations during idle evolution, but the same fluctuations can detune optical initialization, readout, or cluster-mediated gates.

## Static and dynamic bond disorder

Let the intended microscopic coupling on bond \(ij\) be \(J_{ij}\), measured in J. Decompose it as

\[
J_{ij}(t)=\bar J_{ij}+\delta J_{ij}^{\rm static}+\delta J_{ij}^{\rm
dyn}(t).
\]

Here \(\bar J_{ij}\) is the intended mean coupling, \(\delta J_{ij}^{\rm static}\) is a time-independent fabrication error, and \(\delta J_{ij}^{\rm dyn}(t)\) is a time-dependent fluctuation. The static term produces distributions of cluster splittings, leakage gaps, and projected inter-cluster couplings. The dynamic term is bond noise.

Dipolar coupling depends on both separation and orientation, so positional disorder changes it multiplicatively. Exchange coupling is generally even more sensitive to atomic-scale geometry.

After projection, a fluctuating bond operator \(\delta J_{ij}\mathbf S_i\cdot\mathbf S_j\) can produce a logical \(\tau_z\) field, a transverse logical term, or leakage. The result depends on the encoding and the relevant matrix elements.

An array-level model should retain at least four correlation classes:

- **Local independent noise:** Separate nuclei or traps near each constituent produce fluctuations that are approximately uncorrelated between sites.

- **Intra-cluster common-mode noise:** Long-wavelength magnetic, electric, or strain fluctuations act coherently across one cluster.

- **Inter-cluster correlations:** A surface region, electrode, laser, or acoustic mode affects multiple encoded qubits.

- **Control correlations:** Pulse-amplitude error, detuning, crosstalk, and global-drive phase noise act coherently because of the control design.

Control correlations can be particularly important in a cluster. A global pulse intended to rotate every constituent may have a transition matrix element that scales as \(N\), producing error power proportional to \(N^2\).

Fast control can also populate the \(Q\) subspace. A symmetry that cancels passive common-mode noise may suppress the desired control interaction at the same order. Implementing control can then require gradient fields or symmetry-breaking pulses, which restore sensitivity to previously suppressed perturbations.

A cluster doublet is an encoded qubit constructed from physical defect spins. Projection of microscopic noise onto logical Pauli operators does not create topological order.

Even if a subsequent many-body Hamiltonian supports emergent anyons, charge-state changes and transitions out of a cluster doublet occur in microscopic degrees of freedom not represented by the anyon description. Such errors cannot be assumed to produce only local anyon pairs that do not cause logical errors.

Similarly, a digital simulation that imposes a selected Pauli channel does not demonstrate that the material realizes the corresponding native noise correlations.

## Experimental characterization status

For individual color centers and ensembles, experiments can measure Ramsey decay, echo decay, relaxation, noise spectra under pulse sequences, optical spectral diffusion, charge-state switching, strain response, and, in some cases, spatial variation near surfaces [R213]; [R214]; [R215]; [R216]; [R217]; [R191]; [R218]; [R219]; [R201]. Ramsey measurements probe free phase evolution, echo measurements refocus sufficiently slow fluctuations, and relaxation measurements determine population-decay times. [Experiment] These measurements establish that the listed mechanisms occur physically. They do not yet provide a complete covariance matrix \(S_{ab}(\omega)\) for a fabricated, strongly coupled cluster containing 5–20 defects, and still less for a large array of such clusters.

A characterization procedure sufficient to evaluate the encoding would include the following steps:

- Measure each constituent while individual addressability remains available. The measurements should include resonance frequency, charge state, \(T_1\), Ramsey decay, echo decay, and optical stability.

- Identify the logical doublet and every nearby leakage level spectroscopically, thereby determining \(\omega_L\) and \(\Delta_C/\hbar\).

- Apply calibrated common-mode and gradient magnetic, electric, and strain perturbations to determine the coefficients \(g_{a\mu}\).

- Measure simultaneous time traces or cross-spectra for multiple constituents or clusters rather than assuming statistical independence.

- Fit static bond disorder separately from dynamic bond noise.

- Incorporate measured spectra and leakage matrix elements into many-body simulations rather than replacing them with a single average \(T_2\).

[Proposal] No cited experiment demonstrates that clustering color centers produces a topologically ordered array with a measured passive-protection advantage. The projection framework provides a falsifiable test: measured susceptibilities and noise spectra must predict logical-error and leakage rates below the relevant interaction and topological-gap scales. Until such a comparison is available, noise resilience from cluster encoding remains a design hypothesis.

## Common analytical errors

- Using only \(T_2\), the measured transverse coherence time, does not specify a complete noise model. Its value depends jointly on the applied pulse sequence, the noise spectrum, and the operating point. It does not characterize charge erasure, optical instability, correlated errors, or leakage.

- Treating all fluctuations as statistically independent neglects correlations produced by common electrodes, surfaces, laser fields, strain waves, and fabrication damage. Here \(S_{ab}\) denotes the cross-spectral density between noise sources \(a\) and \(b\). Setting \(S_{ab}=0\) for \(a\ne b\) can reverse the predicted benefit of an encoding.

- Treating every common-mode fluctuation as harmless is also incorrect. Cancellation of a microscopic operator \(\mu\) requires \(\sum_a g_{a\mu}=0\), where \(g_{a\mu}\) is the projected susceptibility of constituent \(a\) to that operator. Common exchange fluctuations or transverse fields need not satisfy this condition.

- Projecting into the logical subspace while neglecting \(Q\), the complementary nonlogical subspace, can invalidate the effective model. An effective Pauli model represents dynamics within the logical subspace \(P\) using Pauli operators. It is incomplete when noise or control has spectral weight near \(\Delta_C/\hbar\), where \(\Delta_C\) is the cluster excitation gap and \(\hbar\) is the reduced Planck constant. Under these conditions, transitions out of \(P\) can occur, and leakage can increase with the number of constituent levels.

- Static disorder and decoherence are distinct effects. Static disorder is time-independent variation of device parameters. It does not by itself destroy phase coherence in one isolated device, but it can change Hamiltonian parameters, close local gaps, impede calibration, and cause ensemble dephasing. Drift is dynamic disorder because the relevant parameters vary in time.

- Echo sequences do not resolve all architectural noise mechanisms. An echo is a control sequence designed to average selected noise contributions. It can reject selected low-frequency terms, but it can also average away desired interactions. It does not reverse irreversible \(T_1\) relaxation, charge conversion, or unobserved leakage.

- Optimizing isolated defects does not necessarily optimize a cluster. A site with the best individual coherence may produce an unsuitable interaction graph, whereas the cluster with the strongest couplings may be located in the most damaging implantation-induced bath. Feasibility therefore depends on the joint distribution of coherence, coupling, geometry, and fabrication-induced noise.

- Topological protection is not a universal suppression mechanism. Topological order can suppress particular local processes under particular energy and temperature conditions. This argument can be bypassed by correlated faults that span multiple effective sites, leakage outside the effective model, or time-dependent disorder in the Hamiltonian.

Independent and correlated noise components contract differently with the cluster susceptibilities, which quantify the response of the logical degrees of freedom to microscopic perturbations. Static bond disorder, static onsite disorder, dynamic dephasing, relaxation, charge erasure, and leakage are distinct error channels.

Clustering suppresses a noise source only when the relevant symmetry and spatial or temporal correlation pattern make the projected logical matrix element small. This projected-noise description, rather than a single-center lifetime taken from another setting, is the minimum model required to test whether an apparent many-body gap remains effective in a realistic defect array.

## Verification of noise-model derivations

- A microscopic perturbation dephases or relaxes the cluster qubit according to its coefficients after projection into the logical subspace. A logical \(\tau_z\) component, where \(\tau_z\) is the longitudinal logical Pauli operator, causes dephasing when its noise is concentrated near zero frequency. Logical \(\tau_x\) or \(\tau_y\) components, which are transverse logical Pauli operators, drive transitions when their noise has spectral weight near the logical transition frequency \(\omega_L\).

- A perfectly common longitudinal field is invisible within the three-spin doublet because both logical states have total spin projection \(S^z_{\rm tot}=+1/2\). Consequently,
  \[
  P(S_1^z+S_2^z+S_3^z)P=\frac12 I.
  \]
  Here \(P\) projects onto the logical doublet, \(S_i^z\) is the longitudinal spin operator for site \(i\), and \(I\) is the identity operator within that subspace. The projected field therefore contributes only a common phase and does not distinguish the logical states.

- Perfectly correlated site noise invalidates the expression for independent noise. The independent-source result
  \[
  S_L=S_0\sum_i g_i^2
  \]
  is replaced by
  \[
  S_L=S_0(\sum_i g_i)^2,
  \]
  where \(S_L\) is the logical noise spectral density, \(S_0\) is the common site-noise spectral density, and \(g_i\) is the logical susceptibility to noise at site \(i\). Statistical averaging then disappears. A decoherence-free sign pattern still produces cancellation, whereas same-sign coefficients produce \(N^2\) amplification for \(N\) constituents.

- Leakage is a transition from the logical doublet \(P\) into another cluster state in \(Q\). It is driven by microscopic noise or control with spectral weight at the corresponding transition energy. For a microscopic operator \(O_a\), the relevant transition matrix elements are contained in \(QO_aP\).

- Spectral diffusion is not a separate elementary bath. It is the observed wandering of a transition frequency and can result from nuclear, paramagnetic, or charge dynamics.

- Charge-state switching cannot generally be modeled as a small Stark shift. A Stark shift, defined as an energy shift produced by an electric field, may project into the logical subspace as dephasing. A change of charge state can instead remove the spin required from a constituent and modify the entire cluster Hamiltonian. The resulting event can produce leakage or erasure rather than a Pauli error confined to \(P\).

## Sources

- [R212] S. Pezzagna and J. Meijer, “Quantum computer based on color
centers in diamond,” Applied Physics Reviews
8, 011308 (2021). DOI: [10.1063/5.0007444](https://doi.org/10.1063/5.0007444).

- [R213] C. L. Degen, F. Reinhard, and P. Cappellaro, “Quantum
sensing,” Reviews of Modern Physics 89, 035002
(2017). DOI: [10.1103/RevModPhys.89.035002](https://doi.org/10.1103/RevModPhys.89.035002).

- [R214] L. Childress et al., “Coherent dynamics of coupled
electron and nuclear spin qubits in diamond,” Science
314, 281–285 (2006). DOI: [10.1126/science.1131871](https://doi.org/10.1126/science.1131871).

- [R215] G. de Lange, Z. H. Wang, D. Ristè, V. V. Dobrovitski, and R.
Hanson, “Universal dynamical decoupling of a single solid-state spin
from a spin bath,” Science 330, 60–63 (2010).
DOI: [10.1126/science.1192739](https://doi.org/10.1126/science.1192739).

- [R216] T. Rosskopf et al., “Investigation of surface
magnetic noise by shallow spins in diamond,” Physical Review
Letters 112, 147602 (2014). DOI: [10.1103/PhysRevLett.112.147602](https://doi.org/10.1103/PhysRevLett.112.147602).

- [R217] P. Jamonneau et al., “Competition between electric
field and magnetic field noise in the decoherence of a single spin in
diamond,” Physical Review B 93, 024305 (2016).
DOI: [10.1103/PhysRevB.93.024305](https://doi.org/10.1103/PhysRevB.93.024305).

- [R191] F. Dolde et al., “Electric-field sensing using
single diamond spins,” Nature Physics 7,
459–463 (2011). DOI: [10.1038/nphys1969](https://doi.org/10.1038/nphys1969).

- [R218] S. Dhomkar, H. Jayakumar, P. R. Zangara, and C. A. Meriles,
“Charge dynamics in near-surface, variable-density ensembles of
nitrogen-vacancy centers in diamond,” Nano Letters
18, 4046–4052 (2018). DOI: [10.1021/acs.nanolett.8b01739](https://doi.org/10.1021/acs.nanolett.8b01739).

- [R219] J. Teissier, A. Barfuss, P. Appel, E. Neu, and P. Maletinsky,
“Strain coupling of a nitrogen-vacancy center spin to a diamond
mechanical oscillator,” Physical Review Letters
113, 020503 (2014). DOI: [10.1103/PhysRevLett.113.020503](https://doi.org/10.1103/PhysRevLett.113.020503).

- [R201] K. D. Jahnke et al., “Electron–phonon processes of
the silicon-vacancy centre in diamond,” New Journal of Physics
17, 043011 (2015). DOI: [10.1088/1367-2630/17/4/043011](https://doi.org/10.1088/1367-2630/17/4/043011).

---
