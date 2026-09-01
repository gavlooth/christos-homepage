# Chapter 5 — Translational symmetry and defect localization in a crystal

A crystal is invariant under specific spatial translations. Starting from one atom and moving by a fixed distance to the next identical atom reproduces the same local arrangement throughout an ideal crystal. An additional electron may occupy any of these equivalent atomic sites.

Changing one atom or leaving one lattice site vacant modifies the crystal only near that location.

These two situations have different electronic consequences. In a perfect crystal, an electron generally occupies a state distributed over all equivalent sites. A local modification can instead confine an electronic state near the altered site. The following minimal model describes both extended and localized states.

## One-dimensional translational symmetry

Choose an atom as the origin and translate by a fixed distance \(a\) to the next identical atom. Repeated translations generate the positions

\[
\ldots,\; -2a,\; -a,\; 0,\; a,\; 2a,\; \ldots
\]

These are the translations that leave the ideal crystal unchanged. This discrete set of translation points is a lattice.

![A two-panel schematic separates lattice translation points from the repeated two-atom motif attached to each point.](/notes/assets/defects-to-topological-qubits/lattice-unit-cell.svg)

*A lattice specifies translations that reproduce a pattern. A motif specifies the atoms repeated at each lattice point. This is a two-dimensional schematic.*

In one dimension, the lattice is defined as the set \(a\mathbb{Z}\), where \(a>0\) is fixed and \(\mathbb{Z}\) is the set of integers.

The distance \(a\), measured in metres, is the one-dimensional lattice constant. Crystals in two or three dimensions can have two or three independent translation vectors. In every dimension, the lattice is the set of translations that leave the ideal pattern invariant.

Two crystals can therefore have the same lattice but different motifs. The lattice specifies the allowed translations, whereas the motif specifies the atoms associated with each lattice point. Crystals with the same spacing \(a\) are not necessarily the same physical structure.

## Nearest-neighbor hopping

Associate one localized orbital \(|n\rangle\) with each lattice point. The integer \(n\) labels the site on which the electron is localized. Assume that these orbitals form an orthonormal basis:

\[
\langle m|n\rangle=\delta_{mn},
\]

where the Kronecker delta \(\delta_{mn}\) equals 1 when \(m=n\) and 0 otherwise. As introduced in Chapter 1, the inner product between a bra and a ket is a number.

The electron can move between neighboring orbitals. The hopping parameter \(t>0\), measured in joules or electronvolts, sets the energy scale associated with this motion.

Consider \(N\) sites with periodic boundary conditions, meaning that site \(N\) is identified with site \(0\). This assumption removes physical ends from the chain.

Each site then has two nearest neighbors. The model includes only processes in which the electron moves from a site to one of these neighbors and the corresponding reverse process.

The Hamiltonian, or energy operator, containing these nearest-neighbor hopping terms is

\[
H_0=-t\sum_{n=0}^{N-1}\bigl(|n\rangle\langle n+1|+|n+1\rangle\langle
n|\bigr),
\]

with the indices wrapping around according to the periodic boundary conditions. The overall minus sign is a convention. With this convention, the lowest-energy state is the state whose amplitude varies most slowly across the lattice.

A site state is not an eigenstate of \(H_0\), because the Hamiltonian mixes neighboring orbitals. If \(t=0\), each site state is an eigenstate and no propagation occurs.

A model formulated in terms of localized orbitals and hopping between nearby sites is called a tight-binding model. Tight binding is an approximation organized around the limit of weak coupling between localized orbitals; it is not an alternative fundamental law [R067].

## Energy band of the uniform chain

Because every site is equivalent under translation, consider a state whose phase changes by the same factor at each lattice step:

\[
|k\rangle=\frac{1}{\sqrt{N}}\sum_{n=0}^{N-1}e^{ikna}|n\rangle.
\]

The quantity \(k\) is a wavevector measured in inverse metres. Consequently, \(ka\) is dimensionless and represents the phase change per lattice step. This wavevector is unrelated to a point on the two-level Bloch sphere discussed in earlier chapters.

Periodic boundary conditions require the phase to return to its original value after \(N\) steps:

\[
e^{ikNa}=1.
\]

This condition restricts the wavevector to \(k=2\pi m/(Na)\), where \(m\) is an integer. Applying the Hamiltonian to the state gives one phase factor from each of the two neighboring sites:

\[
H_0|k\rangle=-t\bigl(e^{ika}+e^{-ika}\bigr)|k\rangle=-2t\cos(ka)|k\rangle.
\]

The energy dispersion relation, which specifies the energy as a function of wavevector, is therefore

\[
E(k)=-2t\cos(ka).
\]

A complete set of distinct wavevectors can be chosen in the interval \(-\pi/a<k\leq\pi/a\). Over this interval, the cosine ranges from \(-1\) to \(1\), so the allowed energies occupy the interval \([-2t,2t]\).

This continuous interval is one energy band. Its width is \(4t\), which has units of energy.

Translation symmetry therefore does not select one energy. Instead, it permits a range of energies labeled by the wavevector \(k\).

The state \(|k\rangle\) is extended over the entire chain. The probability at each site is

\[
\bigl|1/\sqrt{N}\bigr|^2=1/N.
\]

This result does not describe a classical particle following an orbit from site to site. It describes a stationary wavefunction with nonzero support on every site.

Doubling the number of sites halves the probability assigned to each site. If translation symmetry is removed, classification of the states by \(k\) is no longer required.

## A single-site defect

Modify the on-site energy of site \(0\) by an amount \(U\), which also has units of energy:

\[
H=H_0+U|0\rangle\langle0|.
\]

A defect is defined here as a departure from the ideal lattice. The term \(U|0\rangle\langle0|\) is the simplest such modification because it changes one scalar on-site energy at one site.

For an infinite chain, consider a reflection-symmetric state with amplitudes

\[
\psi_n=\langle n|\psi\rangle=A\lambda^{|n|},\qquad |\lambda|<1.
\]

The constant \(A\) is fixed by normalization. The condition \(|\lambda|<1\) ensures that the amplitude decreases with distance from the defect.

Away from the defect, the eigenvalue equation contains only the two nearest-neighbor hopping terms. For \(n\geq 1\),

\[
E\,A\lambda^n=-t\bigl(A\lambda^{n-1}+A\lambda^{n+1}\bigr),
\]

which implies

\[
E=-t\bigl(\lambda+\lambda^{-1}\bigr).
\]

At site \(0\), the additional energy \(U\) contributes, and both neighboring amplitudes equal \(A\lambda\). The eigenvalue equation is therefore

\[
E=U-2t\lambda.
\]

Equating the two expressions for \(E\) gives

\[
U=t\bigl(\lambda-\lambda^{-1}\bigr).
\]

Multiplication by \(\lambda\) produces a quadratic equation. Exactly one of its two roots has magnitude below 1. The magnitude of this root and the corresponding bound-state energy are

\[
|\lambda|=\frac{\sqrt{U^2+4t^2}-|U|}{2t},
\qquad
E_{\mathrm d}=\operatorname{sgn}(U)\sqrt{U^2+4t^2}.
\]

The quantity \(E_{\mathrm d}\) is the defect-state energy. The sign function \(\operatorname{sgn}(U)\) equals \(+1\) for positive \(U\) and \(-1\) for negative \(U\).

It follows that \(|E_{\mathrm d}|>2t\), so the defect-state energy lies outside the clean chain’s band. For \(U<0\), the state lies below the band, and its amplitudes have the same sign at every site. For \(U>0\), the state lies above the band, and the signs of its amplitudes alternate between neighboring sites.

Thus, a single altered site in an infinite chain binds a normalizable state with an energy unavailable to the traveling-wave states of \(H_0\).

The exponentially decreasing envelope can be written as \(e^{-|n|a/\xi}\). This expression defines the localization length \(\xi\), the characteristic length scale over which the amplitude decreases:

\[
\xi=-\frac{a}{\ln|\lambda|}
=\frac{a}{\operatorname{arsinh}(|U|/2t)}.
\]

Both \(a\) and \(\xi\) have units of length. The arguments of the logarithm and the inverse hyperbolic sine must be dimensionless. In particular, an energy cannot appear inside a logarithm unless it is divided by another energy.

As an explicit example, set \(U=-t\). Then

\[
E_{\mathrm d}=-\sqrt{5}\,t,\qquad
|\lambda|=\frac{\sqrt{5}-1}{2}\approx0.618,
\qquad
\xi\approx2.08a.
\]

Normalization gives

\[
|A|^2=\frac{1-|\lambda|^2}{1+|\lambda|^2}=\frac{1}{\sqrt{5}}.
\]

In this model, approximately \(0.447\) of the total probability is located at the defect site. The remaining probability forms exponentially decreasing tails.

The total probability remains exactly 1. [Theory] These numerical results follow from the chosen one-dimensional Hamiltonian; they are not predictions for diamond, sapphire, or any other real host material.

If \(U=0\), then \(|\lambda|=1\), and the amplitude does not decay. If the condition \(|\lambda|<1\) is omitted on an infinite chain, the proposed state is not normalizable. On a finite ring, the tail wraps around the periodic boundary. The probability can remain concentrated near site \(0\), but the resulting state is not the infinite-chain bound state derived above.

## Evanescent states outside the energy band

For a clean chain, the energy satisfies \(E=-2t\cos(ka)\). If \(|E|\leq 2t\), a real wavevector \(k\) exists, and the factor \(e^{ikna}\) has constant magnitude. Such a state propagates through the chain. If \(|E|>2t\), no real value of \(k\) satisfies the dispersion relation.

For an energy below the band, write \(k=i\kappa\), where \(\kappa>0\) has units of inverse length. Then

\[
e^{ikna}=e^{-\kappa na}.
\]

The absence of a real wavevector therefore produces an exponential, or evanescent, tail. The defect does not act as an infinitely hard barrier. Instead, it produces a state at an energy for which the host has no traveling channel.

This bound state is localized, but it is not an in-gap state because the chain has only one energy band.

The additional level lies outside that band rather than in an interval between two bands. A model with such an internal interval is introduced below.

If the condition \(|E|>2t\) is removed, a real wavevector already exists and an exponential ansatz is not required.

## Bloch waves in a periodic potential

The preceding chain is a discrete model. A real crystal is a continuous medium with a spatially periodic potential:

\[
V(\mathbf r+\mathbf R)=V(\mathbf r)
\]

for every lattice translation \(\mathbf R\). Bloch’s theorem states that an energy eigenfunction in such a periodic potential can be written as

\[
\psi_{n\mathbf k}(\mathbf r)=e^{i\mathbf k\cdot\mathbf r}u_{n\mathbf
k}(\mathbf r),
\]

where \(\mathbf r\) is position, \(\mathbf k\) is the crystal wavevector, and \(n\) is the band index. The cell-periodic function \(u_{n\mathbf k}\) satisfies \(u_{n\mathbf k}(\mathbf r+\mathbf R)=u_{n\mathbf k}(\mathbf r)\) [R066]. The dot product \(\mathbf k\cdot\mathbf r\) is dimensionless.

An eigenfunction of this form is called a Bloch wave. The terminology refers to Felix Bloch, who formulated the crystal-wave theorem in 1929. It is distinct from the Bloch sphere used to represent two-level quantum states.

A Bloch wave consists of a plane-wave phase factor multiplied by a function that repeats within every unit cell.

The tight-binding state \(|k\rangle\) is the corresponding discrete construction. Other approximations begin with nearly free electrons rather than localized orbitals. Tight-binding and nearly-free-electron descriptions are approximations organized around different physical limits, not competing fundamental laws.

Periodicity of \(V\) therefore does not require the eigenfunction to be a plane wave alone. It requires a plane-wave factor multiplied by a cell-periodic function. If \(V\) is not periodic, Bloch’s theorem does not apply.

Linear combinations of Bloch waves can form wave packets localized near individual cells. Such localized orbitals are sometimes called Wannier functions.

The possibility of choosing Wannier functions that decay exponentially contains additional information about the band. The elementary chain considered here has no obstruction to such a choice [R068]. A defect-bound state is nevertheless a different object because the defect breaks translation symmetry and fixes the envelope near a particular site.

## Formation of an energy gap

The one-orbital chain has one continuous band and no internal energy interval without states.

A minimal lattice with such an interval contains two inequivalent sites, \(A\) and \(B\), in each repeated unit. Assign on-site energies \(+\Delta\) and \(-\Delta\), where \(\Delta\) has units of energy, and connect nearest neighbors using the same hopping parameter \(t\).

In the ordered basis \((A,B)\), the Hamiltonian at wavevector \(k\) is the two-by-two matrix

\[
H(k)=
\begin{pmatrix}
\Delta & -t(1+e^{-ika})\\
-t(1+e^{ika}) & -\Delta
\end{pmatrix}.
\]

Solving this two-dimensional eigenvalue problem gives

\[
E_{\pm}(k)=\pm\sqrt{\Delta^2+4t^2\cos^2(ka/2)}.
\]

When \(\Delta\neq 0\), the upper and lower bands do not meet. Their minimum separation occurs at the edge of the \(k\) interval and is

\[
E_{\mathrm g}=2|\Delta|.
\]

The empty energy interval between the bands is the band gap. The quantity \(E_{\mathrm g}\) has units of energy. A gap is an interval containing no traveling host state; it is not a physical void in the crystal.

Thus, two inequivalent sites per repeating unit, with \(\Delta\neq 0\), divide the spectrum into two bands separated by a forbidden interval. If \(\Delta=0\), the bands touch and \(E_{\mathrm g}=0\).

At zero temperature, electrons fill the lower band. This band is called the valence band, and its upper edge is denoted \(E_{\mathrm v}\).

The next available band is the conduction band, whose lower edge is denoted \(E_{\mathrm c}\). The band gap is then \(E_{\mathrm g}=E_{\mathrm c}-E_{\mathrm v}>0\).

## Localized states within a band gap

A defect can be introduced by changing an atom, removing an atom, or adding a local orbital. In the atomic limit \(t=0\), a defect orbital with on-site energy \(E_{\mathrm d}\) between \(-|\Delta|\) and \(+|\Delta|\) is perfectly localized. Restoring the hopping terms produces spatial tails.

If the full eigenvalue remains between the two band continua, the host has no real traveling Bloch wave at that energy, so these tails decay. This is the gapped analogue of the bound state derived for the one-band chain.

A decaying, normalizable state whose energy lies within the gap is a localized in-gap state. Most of its probability is concentrated in a bounded spatial region, and its energy lies where the perfect host cannot support a traveling wave.

By contrast, an extended state occupies a number of unit cells that increases with the sample size.

Define the energy separations from the valence- and conduction-band edges by

\[
\delta_{\mathrm v}=E_{\mathrm d}-E_{\mathrm v},\qquad
\delta_{\mathrm c}=E_{\mathrm c}-E_{\mathrm d}.
\]

For a one-electron level to lie in the gap, both quantities must be positive. A larger \(E_{\mathrm g}\) allows, but does not guarantee, larger isolation margins.

Stronger coupling between the defect and the host can shift or broaden the defect level. If the level lies inside a band, it becomes a resonance rather than a truly bound state.

A band gap therefore provides an allowed energy interval for defect levels but does not ensure that any such level exists. A weakly bound state near a band edge can extend across many unit cells.

A level farther from both band edges is often more tightly localized around the altered site. Levels near and far from a band edge are commonly described as “shallow” and “deep,” respectively.

Here, “deep” refers to the energy position within the gap, not to a physical depth below a surface.

A wide-gap host is useful because it provides a larger possible energy interval in which a defect level can remain separated from both band continua. [Theory] A wide band gap does not by itself create a suitable defect, guarantee a spin, or produce a qubit.

It only makes energetic isolation more plausible. Candidate defects must still be evaluated according to charge-state stability, wavefunctions, lattice relaxation, optical transitions, and coupling to noise [R069]; [R070]; [R071].

## Nuclear vibrations and phonons

Nuclei fluctuate around their equilibrium positions. For sufficiently small displacements, their collective normal modes can be approximated as harmonic oscillators.

A phonon is a quantum of a normal mode of lattice vibration.

A phonon mode is labeled by a wavevector \(\mathbf q\) and a branch index \(\nu\). Its angular frequency is \(\omega_{\mathbf q\nu}\), measured in radians per second, and its energy is

\[
E_{\mathrm{phonon}}=\hbar\omega_{\mathbf q\nu}\bigl(n_{\mathbf
q\nu}+\tfrac12\bigr),
\]

where \(n_{\mathbf q\nu}\) is a nonnegative integer and \(\hbar\) has units of joule-seconds.

Electronic energies depend on nuclear positions, so a defect electron couples to phonons. Electron-phonon coupling can produce optical sidebands, shift energy levels, dephase a quantum superposition, and enable nonradiative transitions through the emission of several phonons.

[Theory] Quantitative nonradiative transition rates require potential-energy surfaces, vibrational modes, and electron-phonon matrix elements. A band diagram alone does not provide this information [R072].

Treating the lattice as static is therefore a model assumption rather than an exact description of a laboratory crystal. If electronic energies were independent of nuclear positions, the electron would not couple to phonons.

Cooling reduces the thermal population of phonons. It does not eliminate the quantum motion of the nuclei or fix them at mathematical points.

## Additional physics in real crystals

The tight-binding chain contains one electron, one orbital per site, static nuclei, nearest-neighbor hopping, and an adjustable scalar \(U\). A laboratory sample also contains many electrons and nuclei, surfaces, strain, impurities, isotopes, electric fields, and finite-temperature effects. The simplified model demonstrates a mechanism rather than predicting the properties of a material.

A realistic calculation generally begins from specified nuclear species and positions and approximates the electronic structure using a method such as density-functional theory, often within a periodically repeated supercell. Calculations of charged defects require careful electrostatic finite-size corrections.

The atomic coordinates must be allowed to relax. Errors in the calculated band gap can place defect levels at incorrect energies.

Reviews by Van de Walle and Neugebauer and by Freysoldt and collaborators explain why defect formation energies, charge corrections, chemical potentials, and transition levels require more detailed treatment than identifying a level in a schematic band diagram [R069]; [R070].

Several distinct quantities are commonly called defect energies, and they must not be treated as interchangeable:

- A single-particle orbital energy labels an orbital in an approximate independent-particle calculation.

- A thermodynamic charge-transition level is obtained from total-energy differences between relaxed charge states. It identifies the electron chemical potential at which the stable defect charge changes.

- A vertical optical transition occurs faster than nuclear rearrangement, so it connects states at approximately fixed nuclear geometry.

- A zero-phonon optical transition connects vibrational ground levels. Phonon-assisted transitions produce sidebands.

- A spin excitation can occur within one electronic configuration and can have a much lower energy than an optical transition.

These energies need not be equal. Kohn–Sham eigenvalues are useful computational quantities, but most are not automatically the measurable quasiparticle energies for electron addition or removal [R069]; [R070]. Electron correlation can also make a many-electron defect state qualitatively more complex than a description based on one electron in one orbital.

[Experiment] Spectroscopy can detect absorption or emission lines, phonon sidebands, ionization thresholds, and spin resonances. These measurements constrain models of a defect, but assigning a microscopic structure generally requires a combination of experiment and electronic-structure calculations. [Theory] Systematic searches for solid-state spin defects therefore apply several criteria simultaneously: a suitable host, a stable charge state and spin, defect levels separated from host bands, controllable transitions, and tolerable environmental coupling [R071].

A wide-gap material provides three limited advantages. First, it offers a larger energy interval in which defect levels can remain far from both band edges.

Second, visible or near-infrared transitions between defect states can occur without necessarily exciting carriers across the host band gap. Third, thermal exchange with the bands can be reduced when the relevant activation energy is large compared with \(k_{\mathrm B}T\), where \(k_{\mathrm B}\) is Boltzmann’s constant and \(T\) is absolute temperature.

None of these outcomes follows automatically from a wide band gap. The actual defect-level positions, optical selection rules, and nonradiative pathways determine the physical behavior.

## Common conceptual errors

- Drawing a line inside a band gap does not establish the existence of a localized state. Such a line in a schematic is only a hypothesis.

  Localization must be demonstrated using a wavefunction, an inverse participation measure, a spatial charge or spin density, or experimentally supported modeling. A state close to a band edge may be highly extended.

  A computed localized state can also be an artifact of a finite supercell.

- A wide host band gap does not imply that every defect electron is trapped. A defect may produce no gap state, a shallow state adjacent to a band, or a resonance within a band.

  The defect may also favor an undesired charge state. The gap permits possible defect levels but does not guarantee them.

- The toy chain is not a complete electronic-structure model. Its parameters \(t\) and \(U\), together with its single basis orbital, omit three-dimensional bonding, multiple orbitals, spin, Coulomb repulsion, screening, spin-orbit coupling, and nuclear relaxation.

  Fitting a simplified model after observing a result does not make the model predictive. Its value is that it isolates the relation among propagation, forbidden energies, and exponential decay.

- One in-gap orbital is not sufficient to define a qubit. A qubit requires two controllable states, initialization, coherent gates, readout, and acceptable leakage and noise.

  The orbital may be empty, doubly occupied, chemically unstable, optically dark, or strongly coupled to phonons. The operational definition introduced in Chapter 3 still applies.

- Spatial localization does not imply complete isolation from the environment.

  A localized state can still couple through electric fields, magnetic fields, strain, phonons, photons, nuclear spins, and exponentially small or dipolar interactions with other defects. Depending on the intended application, these couplings can be useful or harmful.

- A Bloch wave is not a point on the Bloch sphere. A Bloch wave is a crystal eigenstate labeled by \(\mathbf k\).

  The Bloch sphere represents the state space of a two-level system. These two concepts do not share the same geometry.

A localized defect orbital is a microscopic electronic state. A spin associated with that defect becomes a physical qubit only after control and readout have been demonstrated.

Such a state is not an encoded qubit, an emergent quasiparticle, or an instance of topological order. The periodic boundary conditions used in the calculation are a mathematical convenience and do not imply physical protection.

## Verification exercises

- **Nearest-neighbor dispersion.** Let \(|k\rangle\) denote a Bloch state with wavevector \(k\), \(H_0\) the nearest-neighbor hopping Hamiltonian, \(t\) the hopping amplitude, and \(a\) the lattice spacing. Each hop multiplies the state amplitude by the phase factor of the neighboring site, \(e^{\pm ika}\). Summing the contributions from the two neighboring sites gives
  \[
  -t(e^{ika}+e^{-ika})=-2t\cos(ka).
  \]
  Therefore,
  \[
  H_0|k\rangle=-2t\cos(ka)|k\rangle.
  \]

- **Normalizability of the defect-state ansatz.** In the defect ansatz, \(\lambda\) controls the change in amplitude between successive sites. The condition \(|\lambda|<1\) ensures exponential spatial decay away from the defect. If this condition is removed, the amplitudes no longer decay, so the candidate state is not a normalizable bound state on the infinite chain. A normalizable bound state has finite total probability and remains spatially localized.

- **Position of the defect energy.** Let \(E_{\mathrm d}\) denote the defect-state energy and \(U\) the defect potential. The energy is
  \[
  E_{\mathrm d}=\operatorname{sgn}(U)\sqrt{U^2+4t^2},
  \]
  where \(\operatorname{sgn}(U)\) is the sign of \(U\). For any nonzero \(U\),
  \[
  \sqrt{U^2+4t^2}>2t.
  \]
  It follows that \(|E_{\mathrm d}|>2t\) whenever \(U\neq 0\).

- **Vanishing gap in the two-site cell.** In the two-site unit-cell model, \(\Delta\) controls the separation of the two bands. If \(\Delta=0\), the two bands touch and the band gap \(E_{\mathrm g}\), defined as the forbidden energy interval between them, becomes \(E_{\mathrm g}=0\). Consequently, there is no internal energy window in which an in-gap level can occur.

- **Implication of a wide host gap.** The host gap is the forbidden energy interval between the allowed bands of the defect-free lattice. A wider host gap guarantees only a larger possible energy window. It does not guarantee a defect level, localization, a stable charge state, a spin, an optical transition, or a qubit.

- **Limitations of a band diagram.** A band diagram represents energy-level positions but does not provide a complete description of a defect, even when those positions are correct. It omits wavefunctions, occupations, many-electron multiplets, lattice relaxation, transition matrix elements, and environmental couplings. Many-electron multiplets are sets of states produced by interactions among multiple electrons; transition matrix elements determine the strengths of transitions between states; and environmental couplings describe interactions between the defect and its surroundings.

The preceding analysis has established a lattice, a band of allowed energies, a forbidden energy window, a state that can lie within that window, and the terminology for the lattice’s vibrations. The next section examines concrete point defects, including substitutions and vacancies, together with the additional physical complications they introduce.

## Sources

- [R066] F. Bloch, “Über die Quantenmechanik der Elektronen in
Kristallgittern,” Zeitschrift für Physik 52,
555–600 (1929). DOI: [10.1007/BF01339455](https://doi.org/10.1007/BF01339455).

- [R067] J. C. Slater and G. F. Koster, “Simplified LCAO Method for
the Periodic Potential Problem,” Physical Review
94, 1498–1524 (1954). DOI: [10.1103/PhysRev.94.1498](https://doi.org/10.1103/PhysRev.94.1498).

- [R068] W. Kohn, “Analytic Properties of Bloch Waves and Wannier
Functions,” Physical Review 115, 809–821
(1959). DOI: [10.1103/PhysRev.115.809](https://doi.org/10.1103/PhysRev.115.809).

- [R069] C. G. Van de Walle and J. Neugebauer, “First-principles
calculations for defects and impurities: Applications to III-nitrides,”
Journal of Applied Physics 95, 3851–3879
(2004). DOI: [10.1063/1.1682673](https://doi.org/10.1063/1.1682673).

- [R070] C. Freysoldt, B. Grabowski, T. Hickel, J. Neugebauer, G.
Kresse, A. Janotti, and C. G. Van de Walle, “First-principles
calculations for point defects in solids,” Reviews of Modern
Physics 86, 253–305 (2014). DOI: [10.1103/RevModPhys.86.253](https://doi.org/10.1103/RevModPhys.86.253).

- [R071] J. R. Weber, W. F. Koehl, J. B. Varley, A. Janotti, B. B.
Buckley, C. G. Van de Walle, and D. D. Awschalom, “Quantum computing
with defects,” Proceedings of the National Academy of Sciences
107, 8513–8518 (2010). DOI: [10.1073/pnas.1003052107](https://doi.org/10.1073/pnas.1003052107).

- [R072] A. Alkauskas, Q. Yan, and C. G. Van de Walle,
“First-principles theory of nonradiative carrier capture via multiphonon
emission,” Physical Review B 90, 075202
(2014). DOI: [10.1103/PhysRevB.90.075202](https://doi.org/10.1103/PhysRevB.90.075202).

---
