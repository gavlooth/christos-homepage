# Chapter 6 — An empty lattice site does not imply a residual spin

A substitutional defect is produced when an atom in a perfect crystal is replaced by an atom of a different element. A neighboring lattice site may also be empty. When these two defects are adjacent, they can form a single bound defect complex. By contrast, an additional atom located away from the regular lattice sites is an interstitial defect.

A displacement of an entire line of the lattice is a distinct type of structural defect. None of these structures necessarily produces an unpaired spin, and none necessarily provides a qubit. Defects must first be classified by geometry. The nitrogen atom adjacent to a missing carbon atom in diamond then provides a specific example in which charge, spin, strain, and nearby nuclear degrees of freedom can be distinguished.

## Classification of structural defects

A perfect crystal consists of a periodically repeated arrangement of atoms. A structural defect is any departure from that periodic arrangement. This term specifies the geometry of the disruption; it does not by itself specify an optical transition, a spin state, or a computational bit.

A useful initial classification is based on the spatial dimensionality of the defect.

| Kind | What happened | What the electrons often notice | What not to assume |
|---|---|---|---|
| Wrong atom on a lattice site | A host atom is replaced by a different element | A different valence, size, electronegativity, and local potential | That it leaves an unpaired spin. It may just donate or accept charge. |
| Empty site | A lattice site has no atom | Neighboring leftover bonds may sit in the gap and the neighbors may lean in | That reconstruction has not paired every electron. Charge matters. |
| Extra atom stuffed in | An atom sits off the regular sites | Strong local squeeze and new bonds; the extra atom may wander | That there is only one geometry or one charge. |
| Two accidents bound together | Nearby defects lock into one structural unit | New symmetry and molecular-like combinations of the leftover bonds | That the pair is the sum of the two isolated level diagrams. |
| A slipped line | A one-dimensional line defect, marked by a Burgers vector — how far the lattice slipped | A messy core plus a long-range elastic field; sometimes a band of core states | That the whole line is one localized emitter. |
| A mis-stacked plane | The usual stacking of planes is interrupted | A local change of stacking, a shift of the bands, and an extended squeeze | That a sheet of electronic states is a point-like two-level system. |

A substitution occupies a normal lattice site in place of a host atom. A vacancy is an unoccupied lattice site. An interstitial occupies an additional site that is not part of the regular lattice. A bound defect pair consists of two nearby defects whose electronic and structural properties must be solved together rather than treated independently.

Dislocations and stacking faults are extended defects. A dislocation alters the crystal along a line, whereas a stacking fault interrupts the normal ordering of atomic planes.

![Five lattice panels compare a substitution, vacancy, interstitial, dislocation, and stacking fault.](/notes/assets/defects-to-topological-qubits/defect-taxonomy.svg)

*Substitutions, vacancies, and interstitials are point defects. A dislocation extends along a line. A stacking fault interrupts a plane.*

The total amount of structural disorder is therefore not the most informative initial quantity. The relevant problem is to determine the energies and spatial forms of the states supported by the combined host crystal and defect.

A point defect can produce a spatially localized orbital inside a wide band gap. It can instead produce a shallow state that merges into an electronic band, a closed-shell state with total spin zero, or a nonradiative trap that dissipates energy without emitting light.

Extended defects can trap charge carriers, impose strain on nearby point defects, or introduce additional noise. Geometric classification identifies the appropriate starting point, but it does not determine the final electronic behavior [R070]; [R073].

Static lattice strain is not an additional class of structural defect, and a lattice vibration is not a defect species. Both nevertheless affect defect energy levels and dynamics.

## Charge and spin states of a vacancy

Consider a vacancy. Three or four neighboring atoms may retain orbitals associated with bonds that previously connected them to the missing atom. These are commonly called dangling-bond orbitals. Their presence does not establish that the vacancy contains an unpaired electron or a nonzero spin.

The neighboring atoms often relax toward new positions and reconstruct their bonds. Electrons may also enter or leave the defect region if doing so lowers the total energy. The resulting state can therefore be a closed shell in which all electron spins are paired.

The relevant integer is the charge state, defined here by the number of electrons in the defective region relative to the neutral atomic electron count. The same vacancy with one additional electron and with one electron removed represents two distinct physical states. These charge states can have different equilibrium structures, optical transitions, and total spins.

Defect geometry therefore does not uniquely determine spin. A vacancy can be assigned a spin only after its electron occupancy has been specified. Omitting the charge label combines physically distinct systems under the same geometric representation.

## Nitrogen adjacent to a carbon vacancy

A tractable example is obtained by replacing one carbon atom in diamond with nitrogen and removing an adjacent carbon atom. This nitrogen-vacancy pair is notable because its residual symmetry can be analyzed directly. Its behavior should not be assumed to apply to every impurity-vacancy complex.

The line passing from the nitrogen atom through the vacant site defines a preferred axis, usually one of the \([111]\) directions of diamond. In the ideal unstrained structure, the three carbon atoms neighboring the vacancy are equivalent. The structure is unchanged by a \(120^\circ\) rotation about the defect axis or by reflection through any of three mirror planes.

The collection of rotations and reflections that leave the local structure invariant is its local point group. For the nitrogen-vacancy pair, this point group is \(C_{3v}\) [R074]; [R075].

![A schematic diamond projection shows substitutional nitrogen beside an empty carbon site, three neighboring carbons, and the nitrogen-vacancy axis.](/notes/assets/defects-to-topological-qubits/nv-center-geometry.svg)

*In an ideal NV center, substitutional nitrogen borders an empty carbon site. Three equivalent carbon neighbors face the vacancy around the nitrogen-vacancy axis. The projection does not show bond lengths.*

Terms in the Hamiltonian must respect the residual symmetries unless an external or local perturbation breaks them. Breaking a residual symmetry can produce a spectroscopic line splitting. Symmetry alone does not determine the magnitude of an energy separation. If the three carbon atoms cease to be equivalent, the local symmetry is no longer \(C_{3v}\), and degeneracies protected by that point group need not remain.

## Symmetry-adapted combinations of the carbon orbitals

Let \(|c_1\rangle\), \(|c_2\rangle\), and \(|c_3\rangle\) denote the three carbon dangling-bond orbitals directed toward the vacancy. Symmetry-adapted linear combinations are orbital combinations that transform according to the irreducible representations of the local point group. For the threefold axis, they are

\[
|a_C\rangle=\frac{|c_1\rangle+|c_2\rangle+|c_3\rangle}{\sqrt 3},
\]

\[
|e_x\rangle=\frac{2|c_1\rangle-|c_2\rangle-|c_3\rangle}{\sqrt 6},
\qquad
|e_y\rangle=\frac{|c_2\rangle-|c_3\rangle}{\sqrt 2}.
\]

The first combination is invariant under a \(120^\circ\) rotation and therefore transforms as an \(a\) representation.

The other two combinations transform into linear combinations of each other under the same rotation. They must consequently have the same energy while the three carbon sites remain equivalent. Together, they form an \(e\) representation.

The nitrogen dangling-bond orbital also transforms as an \(a\) representation. It can therefore mix with \(|a_C\rangle\), producing two \(a_1\) combinations at different energies. In this restricted basis, the carbon \(e\) pair has no nitrogen orbital of matching symmetry with which to mix. It remains doubly degenerate while ideal \(C_{3v}\) symmetry is preserved.

This symmetry analysis provides the following connection between the atomic structure and a qualitative level diagram:

```text
N substitution + neighboring vacancy
|
v
C3v symmetry
|
+--------+--------+
| |
two a1 levels one e doublet
```

Residual symmetry therefore determines which degeneracies are permitted and which orbital mixings are forbidden. Actual defect orbitals extend beyond the four dangling-bond orbitals included in this basis, and their energies require an electronic-structure calculation.

Symmetry does not determine the energy scale [R070]; [R075]. If the threefold symmetry axis is removed, the two states in the \(e\) pair are no longer required to have the same energy.

## Electron occupancy and the spin-triplet ground multiplet

Geometry does not determine electron occupancy. The negatively charged nitrogen-vacancy center, denoted NV\(^{-}\), is described by six electrons in the configuration

\[
a_1(1)^2a_1(2)^2e^2.
\]

The two occupied \(a_1\) orbitals are closed shells, meaning that each contains two electrons with paired spins. Two electrons remain in the \(e\) pair. Coulomb repulsion and exchange favor parallel alignment of these two spins, producing a spin-triplet ground-state set with total electron spin \(S=1\), conventionally labeled \({}^{3}A_2\).

This conclusion does not follow from the geometric representation of an empty lattice site. It follows from the charge state, the orbital energy ordering, and the interacting many-electron problem [R074]; [R075]. [Theory]

A multiplet is a set of many-electron states that share a specified total spin and residual spatial symmetry. It denotes a family of energy levels, not an individual dangling bond or an arbitrarily selected pair of levels.

The spin is therefore a property of the occupied many-electron state rather than of the vacancy alone. Changing the charge state or reversing the order of two orbital energies can produce a different multiplet for the same atomic geometry.

## Ground-state zero-field splitting

For the ground-state triplet, an effective Hamiltonian written in frequency units is

\[
\frac{H_{\mathrm{gs}}}{h}
=D\!\left[S_z^2-\frac{S(S+1)}{3}\right]
+E\left(S_x^2-S_y^2\right)
+\frac{\mu_B}{h}\,\mathbf B\!\cdot\!\mathbf g\!\cdot\!\mathbf S.
\]

Here \(H_{\mathrm{gs}}\) is energy and \(h\) is Planck’s constant, so every term on the right-hand side has units of frequency. \(S_x\), \(S_y\), and \(S_z\) are dimensionless spin-1 operators.

The parameters \(D\) and \(E\) are zero-field-splitting frequencies in hertz. The Bohr magneton \(\mu_B\) has units of joules per tesla, \(\mathbf B\) is the magnetic field in tesla, and \(\mathbf g\) is the dimensionless electron \(g\)-tensor, which describes the directional magnetic response of the electron spin.

The first term separates the \(m_s=0\) level from the \(m_s=\pm1\) levels even at zero applied magnetic field. This energy difference is the zero-field splitting. It is a splitting between spin levels and is distinct from the orbital splitting produced when the neighboring environment becomes nonspherical.

The second term is permitted when transverse strain or another symmetry-breaking perturbation distinguishes the \(x\) and \(y\) directions. The third term is the electron Zeeman interaction between the applied magnetic field and the electron spin.

For NV\(^{-}\) near room temperature, the axial splitting is approximately \(D=2.87\ \mathrm{GHz}\) [R074]; [R076]. [Experiment] The dimensional relation is consistent because multiplying \(2.87\times10^9\ \mathrm{s^{-1}}\) by \(h\) produces an energy.

The ideal \(C_{3v}\) model has \(E=0\). A real center commonly has a small transverse term.

Thus, the zero-field spectrum of the triplet is already split, and the magnitude of the splitting is an experimentally measured frequency rather than a consequence of the structural drawing alone. The existence of this Hamiltonian does not establish that the system functions as a qubit. If \(D=0\) and \(E=0\), all three spin projections have the same energy until an applied magnetic field separates them.

## Requirements for a two-level qubit

A magnetic field applied along the defect axis can separate the \(m_s=+1\) and \(m_s=-1\) levels. One possible two-level working subspace is then \(|0\rangle=|m_s=0\rangle\) and \(|1\rangle=|m_s=-1\rangle\). Transitions within this subspace can be driven by a resonant microwave magnetic field.

NV\(^{-}\) also has a sharp optical transition between its triplet ground-state and excited-state families near \(637\ \mathrm{nm}\), corresponding to approximately \(1.945\ \mathrm{eV}\) [R074]. [Experiment] The conversion follows from \(hc\approx1240\ \mathrm{eV\,nm}\):

\[
\frac{hc}{\lambda}\approx\frac{1240\ \mathrm{eV\,nm}}{637\ \mathrm{nm}}
\approx1.95\ \mathrm{eV}.
\]

Spin-dependent nonradiative pathways through intermediate singlet states allow optical excitation to prepare the spin preferentially in one level and cause the fluorescence intensity to depend on the occupied spin level. These pathways, together with charge-state preparation, microwave control, and photon collection, allow part of the spectrum to function as a laboratory qubit [R074]. [Experiment]

The relevant descriptions must remain distinct. “Nitrogen next to a vacancy” specifies a structural defect pair.

“NV\(^{-}\)” additionally specifies its charge state. “\({}^{3}A_2\)” denotes a many-electron multiplet.

“The \(m_s=0,-1\) pair” specifies a selected two-level subspace. “A qubit” denotes a subspace that can be initialized, coherently controlled, read out, and kept sufficiently isolated for the required operation to be completed.

These descriptions are related but are not synonymous.

Two spectral levels are therefore only a candidate computational subspace. Without initialization, control, readout, or charge stability, the defect does not constitute an operational qubit.

## Defect formation energy

The thermodynamic cost of a defect can be evaluated by comparing the energy of a simulation cell containing the defect with that of a corresponding perfect cell.

This comparison must also account for atoms added to or removed from the cell and for electrons exchanged with an external reservoir. The resulting quantity is the defect formation energy.

For defect \(D\) in charge state \(q\),

\[
E_f(D^q)=E_{\mathrm{tot}}(D^q)-E_{\mathrm{tot}}(\mathrm{bulk})
-\sum_i n_i\mu_i+q(E_F+E_{\mathrm{VBM}})+E_{\mathrm{corr}}.
\]

Every term has units of energy, usually electronvolts. \(E_{\mathrm{tot}}(D^q)\) and \(E_{\mathrm{tot}}(\mathrm{bulk})\) are the total energies of the defective and perfect simulation cells.

The integer \(n_i\) counts atoms of species \(i\) added to the cell, and \(\mu_i\) is the chemical potential of that species. The quantity \(E_F\) is the electron Fermi energy measured upward from the valence-band maximum, while \(E_{\mathrm{VBM}}\) places that maximum in the total-energy reference.

The correction \(E_{\mathrm{corr}}\) compensates for artifacts associated with the finite simulation cell.

Sign conventions for \(n_i\) differ among publications, so the convention used in a specific calculation must be identified explicitly [R070].

The formation energy predicts thermodynamic favorability only under the stated chemical and electronic conditions. It does not predict implantation yield, kinetic trapping, optical brightness, or coherence.

Charge-transition levels are values of the electron chemical potential at which two charge states have equal formation energy and exchange thermodynamic stability. A compensating impurity, a surface, a gate, or illumination can therefore change the same atomic geometry from a spin-active state to a spinless state.

The geometry can remain unchanged while the occupancy and electronic behavior change. Omitting the \(q(E_F+E_{\mathrm{VBM}})\) term incorrectly compares different charge states without accounting for the surrounding electron reservoir.

## Crystal-field splitting

An isolated atom is rotationally invariant, whereas neighboring atoms define preferred spatial directions.

The five \(d\)-orbital states that have the same energy in an isolated atom split into a pair and a triplet when surrounding atoms occupy the corners of a tetrahedron or an octahedron. The ordering of these two groups depends on the geometry and bonding.

The nonspherical electrostatic and covalent environment produced by neighboring atoms is called the crystal field. Its Hamiltonian contribution is denoted \(H_{\mathrm{CF}}\).

The eigenstates of \(H_{\mathrm{CF}}\) are orbital combinations labeled by residual-symmetry representations such as \(A\), \(E\), or \(T\). An additional low-symmetry distortion can further split an \(E\) or \(T\) family.

Crystal-field splitting is therefore an orbital energy splitting. It is distinct from the spin-triplet zero-field splitting \(D\), although both can occur in the absence of an applied magnetic field.

Crystal-field splitting reorganizes orbital states. Zero-field splitting reorganizes the spin levels within an already specified multiplet.

If the neighboring environment were perfectly spherical, the five \(d\)-orbital states would remain degenerate.

## Spin–orbit coupling

Orbital motion and intrinsic electron spin both produce magnetic moments and can interact. In an isolated-manifold approximation, this coupling is written

\[
H_{\mathrm{SO}}=\lambda\,\mathbf L\cdot\mathbf S,
\]

where \(\mathbf L\) and \(\mathbf S\) are dimensionless orbital and spin angular-momentum operators, respectively, and \(\lambda\) is an energy. A realistic defect may require a tensorial coupling or a representation expressed in terms of the residual point-group symmetry.

This interaction is the spin–orbit term. Its presence does not by itself establish that a defect has useful qubit properties.

If the crystal field leaves an orbital degeneracy, spin–orbit coupling can contribute at first order and strongly organize the energy levels. If the orbital ground state is a single nondegenerate state, the orbital angular momentum is described as quenched.

Spin–orbit coupling can still contribute through virtual mixing with excited orbitals. Such mixing can make the \(g\)-factors direction dependent, contribute to the zero-field splitting, and produce spin-selective optical selection rules [R073]; [R075].

[Theory]

The same spin–orbit interaction can therefore enable optical access to the spin and increase the spin’s sensitivity to lattice motion. A single operator can support control while also introducing noise. If \(\lambda=0\), both the first-order coupling and these virtual-mixing effects vanish, eliminating both mechanisms.

## Interactions between unpaired electron spins

Two or more unpaired electrons also interact through their magnetic moments. After projection into a total-spin multiplet, their dipolar and spin–orbit-mediated effects are often represented by

\[
H_{\mathrm{SS}}=\mathbf S\cdot\mathbf D\cdot\mathbf S,
\]

where \(\mathbf D\) is a zero-field-splitting tensor with units of energy. Under axial symmetry, this expression reduces, up to an additive constant, to \(hD[S_z^2-S(S+1)/3]\). This is the same \(D\) introduced for NV\(^{-}\).

Thus, the zero-field splitting of an integer-spin multiplet can arise from interactions among the electrons rather than from an applied magnetic field. A half-integer spin retains a doublet at zero magnetic field when time-reversal symmetry remains intact.

An integer spin is not guaranteed to retain such a pair. Neither result guarantees long coherence.

Even a symmetry-protected doublet can remain sensitive to perturbations.

## Electron Zeeman and hyperfine interactions

An applied magnetic field contributes the electron Zeeman term

\[
H_Z=\mu_B\,\mathbf B\cdot\mathbf g\cdot\mathbf S.
\]

A localized electron spin can also interact with nearby nuclei that possess nonzero nuclear magnetic moments.

If nucleus \(k\) has nuclear spin \(\mathbf I_k\), the electron–nuclear coupling is

\[
H_{\mathrm{hf}}=\sum_k \mathbf S\cdot\mathbf A_k\cdot\mathbf I_k,
\]

where \(\mathbf A_k\) is the hyperfine tensor for that nucleus and has units of energy. Hyperfine coupling is the interaction between an electron spin and a nuclear spin.

The tensor contains an approximately isotropic contact contribution, which is sensitive to the electron spin density at the nucleus, and an anisotropic dipolar contribution. Nuclei with spin quantum number \(I_k\ge 1\) may also have a quadrupole term \(\mathbf I_k\cdot\mathbf Q_k\cdot\mathbf I_k\), where \(\mathbf Q_k\) is an energy tensor.

Nuclear spins therefore provide an additional degree of freedom. Hyperfine coupling can distinguish nuclear configurations, store a quantum state, or implement a conditional gate.

Uncontrolled host nuclei instead shift the electron transition frequency and reduce phase coherence. The same hyperfine term is a resource when the nucleus is identified and controlled, and a source of noise when it is not [R073].

If every nearby nucleus has \(I=0\), the hyperfine interaction is absent.

## Static strain coupling

Let \(\mathbf u(\mathbf r)\) denote the lattice displacement at position \(\mathbf r\), measured in metres. For small distortions, the dimensionless strain tensor is

\[
\varepsilon_{ij}=\frac{1}{2}\left(\frac{\partial u_i}{\partial r_j}
+\frac{\partial u_j}{\partial r_i}\right).
\]

Static strain is a time-independent deformation field rather than a separate defect species. A defect can generate static strain, respond to externally applied strain, and exchange energy with lattice vibrations.

Within a projected defect-state manifold, strain couples through operators \(O_\alpha\) allowed by the residual symmetry:

\[
H_\varepsilon=\sum_\alpha g_\alpha\varepsilon_\alpha O_\alpha.
\]

Here \(\varepsilon_\alpha\) are symmetry-adapted combinations of strain components, \(O_\alpha\) are dimensionless orbital or spin operators, and the strain susceptibilities \(g_\alpha\) have units of energy. The product of dimensionless strain and an energy therefore has the required units of energy.

Axial strain may shift a transition without lifting a doublet degeneracy. Transverse strain may reduce the residual symmetry, split orbitals, or mix spin projections.

The point group determines the permitted coupling structure. The coefficients must be obtained from experiment or a microscopic calculation [R077].

[Theory]

Static strain therefore enters the energy model independently of lattice vibrations. If \(\varepsilon=0\), this contribution vanishes, and degeneracies that would otherwise be split by strain remain intact.

## Dynamic strain and phonon coupling

Phonons, introduced in Chapter 5, make strain time dependent. A phonon is a quantized normal mode of lattice vibration. For normal mode \(k\), let \(\omega_k\) be its angular frequency in radians per second, and let \(b_k^\dagger\) and \(b_k\) create and annihilate one vibrational quantum, respectively. Then

\[
H_{\mathrm{ph}}=\sum_k\hbar\omega_k\left(b_k^\dagger b_k+\frac12\right),
\qquad
H_{\mathrm{def-ph}}=\sum_{k,\alpha}\kappa_{k\alpha}
(b_k+b_k^\dagger)O_\alpha,
\]

where \(\kappa_{k\alpha}\) is a coupling energy. A phonon can drive a transition when its energy and residual symmetry are compatible with that transition.

One-phonon emission or absorption, two-phonon Raman processes, and thermally activated transitions through higher-energy states can relax the spin or randomize its phase. The dominant process depends on the defect spectrum, the phonon density of states, and the temperature [R078].

[Theory]

Cooling reduces the thermal phonon population. It does not remove static strain or eliminate all spontaneous emission.

Static strain and phonons are therefore distinct: the former is a time-independent deformation, whereas the latter describes dynamical lattice excitations. They can couple through related residual-symmetry channels. Removing the operators \(b_k\) retains static strain while excluding all phonon-induced dynamical transitions.

## Combined effective Hamiltonian

The contributions relevant to a defect-state family can be collected as

\[
H_{\mathrm{system}}=H_{\mathrm{CF}}+H_{\mathrm{SO}}+H_{\mathrm{SS}}+H_Z
+H_{\mathrm{hf}}+H_Q+H_\varepsilon+H_{\mathrm{ph}}+H_{\mathrm{def-ph}}.
\]

This sum is the working Hamiltonian, meaning the operator that determines the modeled energies and dynamics. Its existence does not establish that the defect is a functional device.

Not every term contributes in every defect-state family. Residual symmetry can force a matrix element to vanish.

Projection into a restricted state manifold can reduce an orbital operator to zero. An isotope may have \(I=0\), eliminating its nuclear-spin terms.

Conversely, an interaction omitted from a simplified level diagram can dominate the experimentally observed linewidth.

The analysis must therefore begin with defect geometry and charge state.

The localized orbital problem must then be solved, followed by construction of the interacting many-electron states.

Only after those steps should the model be projected into a selected spin or orbital manifold and restricted to the terms that act within it. Beginning with a spin Hamiltonian and inferring the earlier structure in reverse assumes the projection that the geometric, electronic, and many-body analysis is intended to justify.

## Selection rules imposed by residual symmetry

Let the states \(|i\rangle\) and \(|f\rangle\) transform according to residual-symmetry representations \(\Gamma_i\) and \(\Gamma_f\), respectively, and let a perturbation operator \(O\) transform according to \(\Gamma_O\). A representation specifies how a state or operator transforms under the rotations and reflections that remain symmetries of the defect. The matrix element \(\langle f|O|i\rangle\), which gives the transition amplitude induced by \(O\), can be nonzero only if the tensor product

\[
\Gamma_f^*\otimes\Gamma_O\otimes\Gamma_i
\]

contains the totally symmetric representation. Here, \(\Gamma_f^*\) is the conjugate representation, \(\otimes\) denotes a tensor product, and the totally symmetric representation is unchanged under every residual rotation and reflection.

This selection rule forces the transition amplitude to vanish exactly when the ideal residual symmetry forbids the transition. If the representation product permits the transition, symmetry establishes only that the matrix element may be nonzero. It does not determine the wavefunction overlap, coupling strength, or lifetime. Strain, defined as a deformation of the crystal lattice, can mix states belonging to different residual-symmetry representations and thereby make a previously forbidden matrix element allowed.

Residual symmetry therefore predicts exact zeros but does not determine numerical values. If strain, a nearby defect, or a surface breaks the residual symmetry, a matrix element that previously vanished is no longer required to remain zero.

## Experimental properties of fabricated defects

A fabricated sample contains a distribution of local defect environments rather than a single ideal defect.

[Experiment] Electron-paramagnetic resonance, a spectroscopic method that detects transitions between electron-spin states, measures spin splittings and hyperfine structure. Hyperfine structure results from coupling between electronic and nuclear degrees of freedom. Photoluminescence, the emission of light following optical excitation, identifies optical transitions.

Optically detected magnetic resonance correlates changes in fluorescence with spin resonance. Stress spectroscopy and electric-field spectroscopy test assignments based on residual symmetry.

Agreement among these measurements and many-electron calculations provides stronger support for a level model than any single spectral line [R073]; [R074]; [R075].

The local environment varies among defect sites. Different isotopes modify the hyperfine coupling.

Residual impurities shift the range of conditions over which a charge state is stable. Surfaces and interfaces produce spatial variation in the electronic bands.

Ion implantation produces vacancies, extra atoms, and extended damage in addition to the intended defect center. Annealing, which thermally activates defect motion, causes defects to migrate and recombine. This process can form the intended defect pair, but it can instead produce a recombination center that does not have the desired properties.

Slipped lines and mis-stacked planes introduce spatially varying deformation and can also support their own electronic states.

Ideal residual symmetry provides a reference model. Small perturbations split degenerate spectral lines, where degeneracy means equality of energy, and rotate the eigenstates into new linear combinations.

These effects can be useful. Strain can tune two emitters into resonance, meaning that their transition energies become equal, and hyperfine coupling can provide a nuclear memory. Reproducible device engineering nevertheless requires measurement of the perturbation and explicit inclusion of that perturbation in the energy model.

The nitrogen-vacancy (NV) center is unusually well characterized. Its properties do not constitute a generic prediction for all vacancy complexes.

Reviews of candidate spin defects identify several requirements that must be satisfied simultaneously: a stable charge state, suitable spin and optical transitions, controllable initialization and readout, sufficiently long coherence, and compatibility with fabrication and photonics [R073]. [Theory/Experiment synthesis] A material may satisfy three of these requirements while consistently failing the fourth.

## Common conceptual errors

- The presence of a vacancy and a dangling electron does not by itself establish the presence of a spin. Atomic reconstruction and charge transfer can produce a closed electronic shell. The charge state and many-electron occupancy must therefore be determined.

- An in-gap level, meaning an electronic energy level within the host material’s band gap, is not by itself a qubit. A single level does not provide two controllable states. Even a pair of levels requires initialization, coherent control, readout, and acceptably small leakage and noise.

- A color center is not necessarily a spin center. A color center absorbs or emits visible light but can have total spin zero. Conversely, a spin-active center may lack a useful optical cycle.

- Crystal-field splitting and zero-field splitting are distinct effects. Crystal fields primarily split orbital states. Zero-field splitting separates spin sublevels in the absence of an applied field and can arise from electron spin–spin interactions and spin–orbit-mediated effects.

- Static strain is not a phonon. In the relevant model, static strain is a time-independent deformation. Phonons are quantized dynamical modes of lattice motion. Static strain and phonons can couple through related residual-symmetry channels, but they produce different experimental signatures.

- A slipped line is not a large point defect. Its line core and long-range elastic field make it an extended defect.

  Similarly, a mis-stacked plane is a planar defect. The electronic states associated with these extended defects need not form spatially isolated two-level systems.

- Density-functional orbitals are not equivalent to the many-electron multiplet spectrum. A multiplet is a set of many-electron states related by their spin and orbital structure. A one-electron orbital diagram provides useful input, but exchange, correlation, excited-state relaxation, and spin–orbit coupling determine the many-electron states. Quantitative assignments of optical and spin transitions require an appropriate many-body treatment and experimental validation [R070]; [R075].

- Residual point-group symmetry does not provide the same protection as a many-body topological phase. A point group is the set of rotations and reflections that leave a local structure invariant. Local residual symmetry can forbid a matrix element, but only while that symmetry remains unbroken.

  A many-body topological phase is a distinct physical system characterized by emergent excitations and global sectors. Local symmetry protection and many-body topological protection address different problems.

  In the classical theory of ordered media, a vacancy, slipped line, or mis-stacked plane may be called a topological defect because it carries a winding or a Burgers vector. This terminology does not imply quantum topological order, anyons, or a protected logical qubit.

  Arranging many structural defects on a lattice supplies microscopic degrees of freedom. Establishing an emergent topological phase additionally requires a demonstrated many-body Hamiltonian and an analysis of its phases.

## Conceptual checks

- The transformation of \(|a_C\rangle\), \(|e_x\rangle\), and \(|e_y\rangle\) under a cyclic permutation of the three carbon orbitals provides a direct symmetry check. Under

  \[
  c_1\to c_2\to c_3\to c_1,
  \]

  the equal-weight sum \(|a_C\rangle\) remains unchanged, whereas the two \(e\) combinations \(|e_x\rangle\) and \(|e_y\rangle\) transform into linear combinations of one another.

- The assumption that an empty site necessarily leaves an unpaired spin fails because reconstruction and charge transfer can close the electronic shell. Total spin is determined by electronic occupancy rather than by geometry alone.

- The photon-energy relation verifies that a line at \(637\ \mathrm{nm}\) corresponds to approximately \(1.95\ \mathrm{eV}\):

  \[
  hc/\lambda\approx 1240/637\approx 1.95\ \mathrm{eV}.
  \]

- For NV\(^{-}\), the \(C_{3v}\) residual symmetry organizes the residual-bond combinations into \(a_1\) singlets and an \(e\) doublet. It also constrains allowed mixing and identifies how a transverse deformation can lift the degeneracy. It does not determine numerical energies.

- Treating static strain as a phonon fails because static strain is a time-independent deformation, whereas phonons are quantized dynamical modes. They couple through related residual-symmetry channels but are not the same physical object.

- A spin doublet becomes a usable qubit only when there is a demonstrated method to initialize it, implement coherent operations, read it out, maintain its charge state, and suppress leakage and decoherence over the operation timescale.

The analysis of a damaged crystal therefore proceeds by determining the remaining geometry, identifying the localized orbitals, establishing their electronic occupancy, deriving the resulting total spin, and determining which of crystal-field, spin–orbit, spin–spin, hyperfine, strain, and phonon interactions split or mix the levels. These results alone do not establish that the defect is a qubit. The next analysis applies the same criteria to diamond and examines which well-known centers satisfy them.

## Sources

- [R070] C. Freysoldt, B. Grabowski, T. Hickel, J. Neugebauer, G.
Kresse, A. Janotti, and C. G. Van de Walle, “First-principles
calculations for point defects in solids,” Reviews of Modern
Physics 86, 253–305 (2014). DOI: [10.1103/RevModPhys.86.253](https://doi.org/10.1103/RevModPhys.86.253).

- [R073] G. Wolfowicz et al., “Quantum guidelines for
solid-state spin defects,” Nature Reviews Materials
6, 906–925 (2021). DOI: [10.1038/s41578-021-00306-y](https://doi.org/10.1038/s41578-021-00306-y).

- [R074] M. W. Doherty, N. B. Manson, P. Delaney, F. Jelezko, J.
Wrachtrup, and L. C. L. Hollenberg, “The nitrogen-vacancy colour centre
in diamond,” Physics Reports 528, 1–45 (2013).
DOI: [10.1016/j.physrep.2013.02.001](https://doi.org/10.1016/j.physrep.2013.02.001);
arXiv: [1302.3288](https://arxiv.org/abs/1302.3288).

- [R075] Á. Gali, “Ab initio theory of the nitrogen-vacancy center in
diamond,” Reviews of Modern Physics 91, 015004
(2019). DOI: [10.1103/RevModPhys.91.015004](https://doi.org/10.1103/RevModPhys.91.015004);
arXiv: [1906.00047](https://arxiv.org/abs/1906.00047).

- [R076] M. W. Doherty, N. B. Manson, P. Delaney, and L. C. L.
Hollenberg, “The negatively charged nitrogen-vacancy centre in diamond:
the electronic solution,” New Journal of Physics
13, 025019 (2011). DOI: [10.1088/1367-2630/13/2/025019](https://doi.org/10.1088/1367-2630/13/2/025019);
arXiv: [1008.5224](https://arxiv.org/abs/1008.5224).

- [R077] P. Udvarhelyi, V. O. Shkolnikov, A. Gali, G. Burkard, and A.
Pályi, “Spin-strain interaction in nitrogen-vacancy centers in diamond,”
Physical Review B 98, 075201 (2018). DOI: [10.1103/PhysRevB.98.075201](https://doi.org/10.1103/PhysRevB.98.075201);
arXiv: [1712.02684](https://arxiv.org/abs/1712.02684).

- [R078] A. Norambuena, E. Muñoz, H. T. Dinani, A. Jarmola, P.
Maletinsky, D. Budker, and J. R. Maze, “Spin-lattice relaxation of
individual solid-state spins,” Physical Review B
97, 094304 (2018). DOI: [10.1103/PhysRevB.97.094304](https://doi.org/10.1103/PhysRevB.97.094304);
arXiv: [1711.10280](https://arxiv.org/abs/1711.10280).

---
