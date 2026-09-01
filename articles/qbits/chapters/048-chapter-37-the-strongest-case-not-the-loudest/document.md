# Chapter 37 — The strongest evidence-based case

The available measurements establish several relevant capabilities. Two nearby defect spins can become entangled. A suitable crystal plane can impose a common sign on dipolar interactions. A molecular ion can implant three nitrogen atoms in a correlated event. A neighboring nuclear spin can retain a state for more than a minute. However, none of these results demonstrates a topological phase, meaning a many-body phase characterized by emergent nonlocal properties rather than by the properties of an individual defect.

The strongest defensible argument for continued development is a steelman: the most rigorous version of a proposal that remains consistent with the evidence. This contrasts with a straw man, which is a deliberately weakened version of an argument.

The relevant architectural feature is the grouping of defects into clusters. The purpose of clustering is to determine whether several defects can provide controllable degrees of freedom that are unavailable from an isolated spin. A cluster may reduce a complicated set of physical spin states to one effective two-state degree of freedom at low energy.

These effective degrees of freedom can interact. If the resulting interactions have the required operator structure and are sufficiently reproducible across cells, the array may realize a many-body phase that is absent from any individual defect.

Each statement of possibility has a distinct evidential status, and those distinctions must be retained.

[Experiment] Several required components have been demonstrated separately:
coherent coupling of nearby defect spins, small multi-defect motifs,
dense two-dimensional dipolar ensembles, local electron–nuclear
registers, controlled optical interfaces, and improving
three-dimensional placement. [Theory] Local two-body
Hamiltonians, which contain interactions between pairs of degrees of freedom, can support emergent topological phases, and projection onto a cluster’s low-energy subspace can generate interactions that are not evident in the microscopic
model. [Speculation] No defect-cluster array has been
shown to realize a topologically ordered phase, doubled-Fibonacci order,
or intrinsic Fibonacci quasiparticles as of August 2026.

## Low-energy cluster degree of freedom

Long coherence times are useful across many physical platforms, as is bright fluorescence. Neither property alone explains how grouping defects could produce emergent topological order.

Assume that the high-energy excitations of a cluster are energetically inaccessible under the relevant operating conditions. The remaining low-energy subspace can then be a two-state degree of freedom separated from other states by an energy gap.

The microscopic degrees of freedom are physical spins and orbitals. The effective low-energy degree of freedom is a doublet, meaning a pair of cluster eigenstates retained in the reduced description.

A cluster performs three functions. It selects one useful low-energy degree of freedom, assigns a large energy cost to unwanted excitations, and maps the physically available interactions onto operators acting within the retained subspace.

For cluster \(C\), write

\[
H=\sum_C H_C+\sum_{\langle C,D\rangle}V_{CD}.
\]

Here \(H\) is the full Hamiltonian, which represents the system’s energy and generates its time evolution. The term \(H_C\) is the internal Hamiltonian of cluster \(C\), while \(V_{CD}\) is the interaction between neighboring clusters \(C\) and \(D\), with \(\langle C,D\rangle\) denoting the relevant interacting pairs.

The internal energy \(H_C\) defines a two-state manifold with projector \(P_C\), where a projector is an operator that restricts states and observables to a specified subspace. The energy difference between that manifold and the nearest excluded cluster state is the cluster gap \(\Delta_C\), measured in joules or electronvolts.

The intercluster interaction \(V_{CD}\) has a characteristic matrix element \(v\), also measured as an energy. If \(v/\Delta_C\ll1\), transitions out of the two-state manifold are perturbatively suppressed. The array may then be described by effective two-state objects, called pseudospins, within the total projected subspace \(P=\prod_C P_C\).

A pseudospin is not necessarily a physical spin. It is an effective two-level degree of freedom obtained after the higher-energy cluster states have been eliminated from the low-energy description.

Projection does not inherently improve interactions. Its structural value is that the cluster spectrum, wavefunctions, symmetry, and placement become design variables. A microscopic term that has an unsuitable form in the physical-spin basis may project onto a useful effective operator:

\[
P V_{CD}P
=J_x\tau_C^x\tau_D^x
+J_y\tau_C^y\tau_D^y
+J_z\tau_C^z\tau_D^z
+\text{local terms},
\]

where \(\tau_C^{x,y,z}\) are Pauli
operators acting on cluster \(C\)’s
doublet, and \(J_x\), \(J_y\), and \(J_z\) are effective coupling energies. Pauli operators are the standard matrices representing the three independent nontrivial observables of a two-state system. Virtual leakage, meaning intermediate transitions through excluded cluster states without permanent occupation of those states, can add terms proportional to \(v^2/\Delta_C\) or higher powers. The projected Hamiltonian defines the available effective interactions.

Reproducibility is necessary for this reduction to describe an array. Random cluster spectra and random projected operators would produce a disordered collection of few-body systems rather than a uniform many-body architecture. The proposal is viable only if cluster-to-cluster spectra and projected operators are sufficiently reproducible for one calibration strategy to apply across an array.

## Effective coupling between two clusters

Consider two identical three-spin clusters, \(A\) and \(B\). Assume that each has a low-energy doublet \(\{|\tilde0\rangle,|\tilde1\rangle\}\) separated by \(\Delta_C\) from the other cluster states.

This doublet is the encoded effective degree of freedom. Its existence alone does not constitute a topological qubit.

Suppose that a physical dipolar or exchange interaction couples one spin in
\(A\) to one spin in \(B\):

\[
V_{AB}=v\,S_{A,3}^zS_{B,1}^z.
\]

A dipolar interaction is the magnetic interaction between spin magnetic moments, whereas an exchange interaction is a quantum-mechanical spin coupling arising from the symmetry of the joint electronic wavefunction. Here \(S^z\) is a dimensionless spin
operator and \(v\) is an energy. Within
the encoded doublets, assume the cluster matrix elements are

\[
P_A S_{A,3}^zP_A=a_0I_A+a_z\tau_A^z,
\qquad
P_B S_{B,1}^zP_B=b_0I_B+b_z\tau_B^z.
\]

Here \(I_A\) and \(I_B\) are identity operators in the respective doublets. The dimensionless coefficients \(a_0,a_z,b_0,b_z\) are determined by the
cluster eigenstates. Projection to first order in \(v\) gives

\[
PV_{AB}P
=v(a_0I_A+a_z\tau_A^z)(b_0I_B+b_z\tau_B^z).
\]

The resulting two-cluster coupling has coefficient

\[
J_{zz}^{(1)}=v a_zb_z.
\]

The same expansion produces the local effective fields \(va_0b_z\tau_B^z\) and \(va_zb_0\tau_A^z\), together with a constant energy offset. Thus, although the microscopic interaction is fixed, the coefficients in the projected Hamiltonian depend on the cluster wavefunctions. Changing the cluster’s internal coupling graph or symmetry can therefore change the effective operator without introducing a different fundamental interaction.

Symmetry may require \(a_0=b_0=0\), thereby eliminating the corresponding local fields. If
symmetry does not impose these conditions, the unwanted terms remain physically present. An engineered effective degree of freedom is useful only if undesired operators are forbidden or shifted to higher perturbative order.

At second order, virtual cluster excitations add terms with characteristic scale

\[
J^{(2)}\sim\alpha\frac{v^2}{\Delta_C},
\]

where the dimensionless coefficient \(\alpha\) is a signed sum over matrix elements and energy denominators. [Theory] Schrieffer–Wolff perturbation theory, a systematic method for eliminating high-energy states from a Hamiltonian, makes this approximation controlled when \(v/\Delta_C\ll1\) [R025].

[Proposal] A repeated array of such clusters could synthesize an interaction graph unavailable from bare defects. However, the two-cluster calculation does not establish that a two-dimensional array has topological order.

## Five structural design variables enabled by clustering

The favorable case depends on five related features. Each is a potential design variable rather than a general property of diamond.

- A cluster can reduce a complicated microscopic state space to a
designed low-energy degree of freedom.

- Crystal orientation and patterned density can control the sign and
effective dimensionality of dipolar interactions.

- Short-range and mediated couplings can, in principle, occupy
different energy or length-scale levels within the interaction hierarchy.

- Nearby nuclear spins and optical transitions can provide local control
and measurement without serving as the encoded topological degree of
freedom.

- A static solid-state array could implement an always-on analog
Hamiltonian, rather than reproducing its time evolution only through a sequence of digital gates.

The next five sections examine these design variables individually. Demonstrating one of them in a different sample does not establish that it functions in the proposed integrated architecture.

## Cluster isolation, energy gap, and functional separation

A bare spin supplies one local state space. A cluster can instead provide
an isolated doublet, a leakage gap, selection rules, and projected
operators. A leakage gap is the energy separation that suppresses transitions out of the encoded subspace. Selection rules are symmetry-derived constraints that permit or forbid particular transitions or matrix elements. These quantities are required for a controlled reduction of the microscopic Hamiltonian.

This structure could be valuable in two ways.

First, strong interactions within a cell and weaker interactions between cells can perform distinct functions. Intracell interactions create the effective degree of freedom and its energy gap.

Intercell interactions generate the many-body model. Geometric separation provides a natural hierarchy for dipolar coupling because it scales as \(r^{-3}\), where \(r\) is the separation. Exchange interactions provide an even sharper short-range dependence.

Second, symmetries can suppress selected local fields or matrix elements. An unwanted operator may then enter only at higher perturbative order, while a desired operator remains present at lower order.

[Theory] This is standard encoded-subspace reasoning, not a defect-specific discovery. [Speculation] No experimentally validated color-center cluster is currently known to project realistic couplings into the complete doubled-Fibonacci string-net operator set. A color center is a point defect in a crystal whose electronic states can produce characteristic optical transitions, and a string-net Hamiltonian is a local many-body model whose collective states can exhibit topological order.

Accordingly, the strongest version of the proposal begins with spectroscopy and
exact diagonalization of one repeatable cluster. Spectroscopy measures the cluster’s energy levels and transitions, while exact diagonalization computes its eigenvalues and eigenstates directly from a finite-dimensional Hamiltonian. If the doublet is not isolated, there is no controlled low-energy subspace onto which the interactions can be projected.

## Crystal orientation as a control of dipolar sign

Dipolar coupling depends on both the separation between spins and the angle between their displacement vector and quantization axes. This angular dependence can introduce unwanted variation, but it can also be used as a design variable.

[Experiment] Hughes and collaborators grew dense,
preferentially aligned, two-dimensional NV ensembles in (111)-oriented
diamond and showed that this geometry gives the in-plane dipolar
interactions a common positive sign in their convention [R242]. An NV center is a nitrogen-vacancy defect in diamond consisting of a substitutional nitrogen atom adjacent to a vacant lattice site. The
observed interaction-dependent line-shape asymmetry changed with spin
polarization, supporting the dipolar interpretation. A 2026 erratum
corrected density and sensitivity calculations, so those corrected
metrology numbers should not be transferred without accounting for the revised analysis. The relevant structural result is the orientation-dependent interaction sign [R242].

This result establishes more than the existence of NV centers in diamond. It shows
that the host crystal plane, defect axis, and system dimensionality can jointly determine
an interaction-sign pattern. However, the
experiment used an ensemble rather than an individually patterned cluster
graph, and same-sign dipolar interactions do not constitute a string-net Hamiltonian.

Without a common orientation, the interaction sign is not a controlled design variable. An ensemble-averaged result also does not demonstrate a lattice of encoded cluster degrees of freedom.

## Correlated fabrication of a multi-defect cluster

If a cluster requires three defects within a few nanometres, independent
placement of each defect compounds the yield loss and registration errors. Correlated implantation provides a different fabrication primitive: several
dopant atoms are delivered by one molecular ion, and their common implantation straggle determines the local motif. Implantation straggle is the statistical spread of implanted-atom positions produced by scattering in the host material.

[Experiment] Haruyama and collaborators used a
nitrogen-bearing molecular ion to create triple NV centers. Their
calculated implanted-nitrogen separation was \(9\pm4\) nm; among 7,116 implantation events
they identified nine optical triples, one strongly coupled triple and
one weakly coupled triple. The total NV creation yield was 7.4%, and the
longest reported Hahn-echo \(T_2\) in
the measured population was 428 \(\mu\)s [R243]. A Hahn echo is a pulse sequence that refocuses static or slowly varying dephasing, and \(T_2\) is the corresponding measured coherence time.

These yields do not establish a scalable fabrication process.

The structural implication is that cluster creation need not require three independent atomic-placement operations. A future process could instead optimize the yield and internal energy spectrum of an entire motif as one fabrication unit.

That hypothesis can be tested before fabrication of a lattice is attempted.

If the motif is not treated as the fabrication primitive, each additional
defect introduces another independent placement error, and the cluster
spectrum is determined by three uncorrelated implantation outcomes.

## Auxiliary degrees of freedom distinct from the encoded state

Dense analog arrays are difficult to initialize, control, and measure. Defect platforms permit a possible division of functions: electron spins can participate in relatively fast
interactions; nearby nuclear spins can store quantum states or provide auxiliary control;
optical transitions can initialize and read out an electron spin; and photonic structures
can route selected optical signals.

[Experiment] A diamond NV register containing one
electron spin, one nitrogen nuclear spin, and eight \(^{13}\)C nuclear spins demonstrated
pairwise control across ten qubits and protected an arbitrary
single-qubit state for more than 75 s at about 3.7 K under
dynamical-decoupling control [R119]. Dynamical decoupling is an active pulse-control method that suppresses the effects of environmental noise. This experiment does not demonstrate a cluster
of electron-spin defects or passive protection. It shows that a
single defect neighborhood can contain addressable auxiliary and memory
resources substantially richer than one two-level system.

[Experiment] Optical photon-mediated interactions
have also been induced between two silicon-vacancy centers in a diamond
nanocavity [R086]. A silicon-vacancy center is a diamond color center containing a silicon impurity associated with lattice vacancies, and a nanocavity is a wavelength-scale optical resonator that enhances and channels light–matter interactions. Such mediation could supply missing graph edges or
separate interaction and readout channels. However, it imposes requirements for spectral matching,
cavity fabrication, external driving, and loss control; it does not
automatically implement an equilibrium, short-range Hamiltonian.

The resulting structural opportunity is functional heterogeneity within a repeated
cell. An encoded degree of freedom, leakage monitor, readout helper, and photonic port
could be physically adjacent while performing distinct tasks. A nuclear memory operated through active control is a control resource, not passive protection.

## Lower-complexity topological targets before Fibonacci order

The strongest research program proceeds through targets of increasing complexity.

[Theory] Kitaev’s honeycomb model proves that local
two-body, bond-dependent spin interactions can yield emergent Majorana
fermions and a non-Abelian Ising phase [R017]. Majorana fermions are quasiparticle excitations represented by self-adjoint fermionic operators, and non-Abelian quasiparticles transform a degenerate state space by noncommuting operations when exchanged. Levin–Wen string-net
Hamiltonians provide commuting-projector targets for doubled topological
orders, including doubled non-Abelian theories [R018]. A commuting-projector Hamiltonian is a sum of mutually commuting local projection operators. These results are
existence proofs for Hamiltonians, not demonstrations in materials.

A defect-cluster platform could first test a projected bond-dependent
model, then a generated stabilizer, and then a small topological patch. A stabilizer is an operator whose specified eigenvalue defines a constrained many-body state or code space. Success with an Abelian or Ising-type model would validate the
architecture’s Hamiltonian engineering but would not establish Fibonacci order. Abelian quasiparticles produce exchange operations that commute, in contrast to non-Abelian quasiparticles. The proposed doubled-Fibonacci phase remains a separate and more demanding target.

Reversing this order would test the most difficult phase before establishing the underlying cluster projection, interaction graph, and effective recoupling coefficients. A failed
Fibonacci experiment would then not identify which of those components was inadequate.

## Quantitative assumptions not yet demonstrated together

Use frequency units to simplify the numerical comparison. For any energy
\(X\), define \(\nu_X=X/h\), where Planck’s constant \(h\) has units joule-seconds. Thus, \(\nu_X\) is the frequency corresponding to the energy \(X\). Consider this
deliberately optimistic design point:

Layer |
Best-case input |
Status |
Depends on |
|

Cluster leakage gap |
\(\nu_{\Delta}=1\) GHz |
[Proposal] design target |
reproducible cluster spectrum |
|

Intercluster matrix element |
\(\nu_v=100\) MHz |
[Speculation] as an array-wide value |
distance, orientation, mediator, disorder |
|

Expansion ratio |
\(\epsilon=\nu_v/\nu_\Delta=0.10\) |
derived |
two rows above |
|

Desired perturbative order |
\(q=2\) |
[Proposal] |
selection rules and projected matrix elements |
|

Path coefficient |
\(\alpha=1\) |
optimistic assumption |
interference among virtual paths |
|

Effective interaction |
\(\nu_{\rm
eff}=\alpha\nu_v\epsilon^{q-1}=10\) MHz |
derived |
all rows above |
|

Generic next-order scale |
\(\nu_{\rm
corr}\sim\nu_{\rm eff}\epsilon=1\) MHz |
scaling estimate |
no enhanced coefficients or small denominators |
|

Gap fraction |
\(c=\Delta_{\rm
topo}/J_{\rm eff}=0.2\) |
[Speculation] model assumption |
verified many-body phase |
|

Topological gap |
\(\nu_{\rm
topo}=c\nu_{\rm eff}=2\) MHz |
derived, not measured |
correct Hamiltonian and thermodynamic extrapolation |
|

Comparator coherence |
\(T_2=100\
\mu\)s, so \(1/T_2=10\) kHz |
[Experiment, borrowed] approximately the mean
Hahn-echo scale of positioned NVs in one 2025 process [R207] |
incompatible sample and control conditions may apply |
|

Disorder target |
\(\sigma_J/h\lesssim0.2\) MHz |
[Proposal] ten-percent-of-gap rule |
placement, strain, charge, calibration |
|

The dimensional check is

\[
\nu_{\rm eff}=\frac{\nu_v^2}{\nu_\Delta}
=\frac{(100\ \text{MHz})^2}{1000\ \text{MHz}}
=10\ \text{MHz}.
\]

Under these assumptions, the proposed topological gap exceeds the borrowed decoherence
rate by a factor of 200:

\[
\nu_{\rm topo}T_2=(2\times10^6\ \text{s}^{-1})(10^{-4}\ \text{s})=200.
\]

This comparison provides the central quantitative rationale for the favorable case: a low-order
generated interaction could, in principle, operate faster than a single-defect
coherence rate. It is not a device prediction, because the 1 GHz cluster
gap, 100 MHz array-wide coupling, coefficient \(\alpha=1\), gap fraction \(c=0.2\), disorder target, and borrowed
\(T_2\) have never been
realized together.

The perturbative order is decisive. Holding the same \(\epsilon=0.1\), a fourth-order target would
have

\[
\nu_{\rm eff}^{(4)}\sim\nu_v\epsilon^3=0.1\ \text{MHz},
\qquad
\nu_{\rm topo}^{(4)}\sim20\ \text{kHz},
\]

which is only twice the borrowed \(1/T_2\)
before accounting for disorder or control errors. Therefore, the favorable case depends on
identifying a first- or second-order parent model, or an exact symmetry
mechanism, rather than generating a high-order Fibonacci
plaquette through perturbation theory.

The thermal requirement is more restrictive. Since \(k_B/h\approx20.84\) GHz/K, where \(k_B\) is Boltzmann’s constant,

\[
\frac{k_BT}{h}\approx208\ \text{MHz}\quad\text{at }T=10\ \text{mK}.
\]

This thermal frequency exceeds the assumed 2 MHz gap by roughly two orders of
magnitude. Equilibrium passive suppression of thermal excitations would require a substantially
larger gap or an effective temperature well below

\[
T_{\rm gap}=\frac{h\nu_{\rm topo}}{k_B}\approx96\ \mu\text{K}.
\]

No cited defect-cluster experiment demonstrates this complete thermal and interaction regime.
The strongest near-term objective is therefore preparation and spectroscopy
of an analog phase over coherent timescales, rather than a passively
self-correcting memory. These are physically distinct objectives and should not be described as equivalent.

The architecture has the following dependency chain:

```
repeatable motif and placement
|
v
cluster spectrum: Delta_C, matrix elements
|
v
uniform intercluster coupling v and correct graph
|
v
low perturbative order q + bounded corrections
|
v
many-body gap Delta_topo and disorder tolerance
|
+--------> preparation faster than decoherence
|
+--------> k_B T below the relevant gap for passive protection
|
v
local and nonlocal observables identify the phase
```

Each stage in this dependency chain can be examined experimentally or numerically. The architecture can therefore be falsified through component-level tests before fabrication of a complete array. Failure of any stage invalidates the conclusions that depend on the stages below it.

## Current experimental and theoretical evidence

The available evidence covers many relevant components but does not integrate them into one system:

Structurally relevant claim |
Status |
What was actually shown |
What remains missing |
|

Nearby defect electron spins can interact coherently |
[Experiment] |
Room-temperature entanglement between two diamond defect spins
[R080] |
repeatable large graph and uniform couplings |
|

A multi-defect motif can be fabricated |
[Experiment] |
one strongly coupled triple NV motif found in a 7,116-event
molecular-implantation data set [R243] |
deterministic yield, target spectrum, replication |
|

Crystal orientation can shape dipolar sign |
[Experiment] |
aligned 2D (111) NV ensembles with same-sign in-plane dipolar
geometry [R242] |
individually defined cluster lattice and topological
Hamiltonian |
|

Defects can be registered to nanostructures |
[Experiment] |
2025 \(\delta\)-doping plus
electron irradiation gave about 4 nm depth precision, 46(1) nm lateral
precision in 280 nm pillars, and mean Hahn-echo \(T_2=98(37)\ \mu\)s [R207] |
nanometre-scale relative placement required for a chosen
direct-coupling graph |
|

One defect neighborhood can host control helpers |
[Experiment] |
ten-qubit electron–nuclear register and long protected nuclear
memory [R119] |
parallel operation inside an interacting analog array |
|

A cavity can mediate emitter interactions |
[Experiment] |
two SiV emitters interacted through one nanocavity [R086] |
low-loss, uniform, many-cell Hamiltonian regime |
|

Cluster projection can synthesize effective operators |
[Theory] |
controlled effective-Hamiltonian formalism [R025] |
measured defect-cluster coefficients |
|

Local spin models can host non-Abelian order |
[Theory] |
solvable honeycomb and string-net models [R017]; [R018] |
mapping from available defect terms with a usable gap |
|

Defect clusters realize doubled-Fibonacci order |
[Speculation] |
no experimental or numerical defect-specific demonstration cited
here |
essentially the entire integrated chain |
|

A separate proposal described how NV registers and optical links might
be organized into a scalable solid-state processor [R244]. That work
supports modular engineering concepts, but it does not establish that the material
Hamiltonian is topologically ordered.

A coupled defect triple is a physical spin cluster. An isolated low-energy doublet within that cluster may serve as an encoded effective degree of freedom.

A lattice of such effective degrees of freedom can digitally emulate a model through gate sequences or realize it directly as an analog Hamiltonian. Emergent anyons exist only if the resulting many-body Hamiltonian lies in the appropriate topological phase.

A topological logical qubit requires a demonstrated nonlocal encoding with the relevant error suppression. A physical spin cluster, an encoded cluster doublet, a simulated many-body model, emergent anyons, and a topological logical qubit therefore represent successive experimental and theoretical tests rather than interchangeable descriptions.

## Failure modes of the evidence-based case

- A claim can fail by combining optimal parameter values obtained from incompatible samples. The parameter stack above intentionally performs this combination once and explicitly identifies it. A final claim cannot assign to a single device the coherence time of a dilute bulk spin, the interaction strength of a damaged close pair, the placement precision of a nanostructure fabrication process, and the optical linewidth of a cryogenic center unless all four properties have been demonstrated under compatible conditions. Here, coherence is the retention of quantum phase information, and optical linewidth is the spectral width of an optical transition.

- Disorder tolerance does not eliminate geometric requirements. A topological phase, meaning a many-body phase characterized by global topological properties, can tolerate bounded local perturbations, which are spatially local changes of limited magnitude. It cannot tolerate an interaction graph—the network specifying which degrees of freedom interact—that fails to approximate the target Hamiltonian, the operator defining the intended system dynamics and energy spectrum.

- A register that relies extensively on auxiliary systems does not constitute passive protection. Nuclear-spin memories and repeated control operations can improve state preparation and readout. However, they remain active resources unless protection is supplied by the static many-body spectrum itself. Passive protection requires the time-independent energy structure to suppress relevant errors without repeated intervention.

- A generated interaction term must be evaluated together with all competing terms. The desired \(v^q/\Delta^{q-1}\) term, where \(v\) is the perturbative coupling scale, \(\Delta\) is the relevant excitation-energy denominator, and \(q\) is the perturbative order, must exceed lower-order local fields, direction-dependent anisotropies, leakage corrections arising from transitions outside the intended low-energy subspace, disorder, and decoherence. The existence of a nonzero coefficient is therefore insufficient to establish useful operation.

- A pair interaction demonstrated at one separation cannot be assumed to scale uniformly across an array. Dipolar coupling, an interaction between dipole moments, amplifies relative placement errors. For \(J\propto r^{-3}\), where \(J\) is the coupling strength and \(r\) is the separation, a small radial error gives \(\delta J/J\approx-3\delta r/r\). A 10% coupling tolerance therefore requires roughly 3% relative distance control before angular errors are included.

- The term “Fibonacci-like” cannot compensate for the absence of the required phase. Ising non-Abelian order, which supports noncommuting particle-exchange operations; doubled-Fibonacci string-net order, a nonchiral topological order described by a string-net model; digital braid emulation, in which controlled gate sequences reproduce braid operations; and genuine chiral Fibonacci order, which supports Fibonacci anyons with a preferred propagation chirality, have different excitations and computational power.

- Long coherence does not remove the temperature requirement. \(T_2\), the transverse coherence time measured under specified control conditions, characterizes phase memory. Thermal excitation instead depends on \(k_BT/\Delta_{\rm topo}\), where \(k_B\) is Boltzmann’s constant, \(T\) is temperature, and \(\Delta_{\rm topo}\) is the topological excitation gap. Satisfying an inequality involving one of these quantities does not imply that the corresponding inequality involving the other is satisfied.

- The principal structural advantage is the coordinated design of the cluster motif, energy spectrum, interaction, auxiliary systems, and measurement protocol. The credible supporting case is not that one host material is universally superior.

## Five testable claims

The strongest version of the proposal is not a completed device. It consists of five independently testable hypotheses that can be evaluated before fabrication of a large array.

- Correlated fabrication can produce a reproducible cluster motif, meaning a repeated spatial arrangement of defects.

- At least one motif has an isolated doublet, meaning a pair of low-energy states separated from other states, with useful operators after projection into that doublet.

- Crystal orientation, together with either local or mediated coupling, can realize the required low-order interaction graph.

- Under a single consistent set of conditions, the resulting many-body gap—the energy separation between the target low-energy sector and relevant excitations—can exceed the energy scales associated with disorder and decoherence.

- Available ancillas, meaning auxiliary quantum degrees of freedom used for control or measurement, can measure the local and nonlocal observables that identify the phase. These measurements must not replace analog emergence, in which the phase arises from the continuously acting Hamiltonian, with digital emulation based on programmed gate sequences.

The proposal is credible only as a staged and falsifiable research program. The next chapter should examine the dependencies to which the conclusion is most sensitive, especially coupling uniformity, perturbative order, thermal scale, and fabrication yield.

## Self-assessment

- **Strongest cluster-specific advantage.**

  A cluster’s spectrum and wavefunctions can convert available microscopic couplings into designed residual operators within the low-energy subspace while placing leakage states behind a measurable energy gap.

- **First-order projection of \(V_{AB}=v S_{A,3}^z S_{B,1}^z\).**

  Let \(P_A\) and \(P_B\) project onto the doublets of clusters \(A\) and \(B\), respectively. Let \(I_A\) and \(I_B\) denote identity operators in those doublets, and let \(\tau_A^z\) and \(\tau_B^z\) denote effective Pauli-\(z\) operators. Inside the doublets,
  \[
  P_A S_{A,3}^z P_A=a_0 I_A+a_z\tau_A^z
  \]
  and
  \[
  P_B S_{B,1}^z P_B=b_0 I_B+b_z\tau_B^z.
  \]
  Expanding the projected product shows that the \(\tau^z\tau^z\) coefficient is \(v a_z b_z\). Therefore, the first-order residual coupling is \(J_{zz}^{(1)}=v a_z b_z\). Local-field terms remain unless symmetry forces \(a_0=b_0=0\).

- **Consequence of using the same \(\epsilon=0.1\) at fourth rather than second order.**

  Here, \(\epsilon\) is the dimensionless perturbative ratio. At fourth order,
  \[
  \nu_{\rm eff}^{(4)}\sim\nu_v\epsilon^3=0.1\ \text{MHz}
  \]
  and
  \[
  \nu_{\rm topo}^{(4)}\sim20\ \text{kHz},
  \]
  which is only twice the adopted \(1/T_2\) estimate before disorder is included. Thus, the optimistic parameter stack exceeds the coherence rate only at low perturbative order.

- **Parameter with the greatest leverage in the worked stack.**

  The perturbative order \(q\) has the greatest effect. At \(v/\Delta_C=0.1\), where \(\Delta_C\) is the cluster excitation gap, increasing the process from second to fourth order suppresses the effective term by \(10^{-2}\).

- **Evaluation and limitation of \(\nu_{\rm topo}T_2=200\) at the optimistic point.**

  \[
  (2\times10^6\,\mathrm{s}^{-1})(10^{-4}\,\mathrm{s})=200.
  \]
  At most, this result indicates that coherent dynamics might resolve a gap under matched conditions. It does not establish thermal protection, realization of the correct phase, or scalable readout.

- **Remaining speculative claim.**

  The unverified claim is that a fabricated defect-cluster array can realize a gapped doubled-Fibonacci Hamiltonian and host its emergent quasiparticles, which are collective excitations of the many-body system.

Grouping defects is a specific design strategy rather than evidence that diamond is universally advantageous. The residual two-state degree of freedom, the crystal plane, the single-fabrication motif, the nearby auxiliary systems, and the continuously acting analog Hamiltonian have each been investigated separately.

These five elements have never been implemented together. The optimistic parameter stack can exceed a coherence rate adopted from another setting only at low perturbative order. Even under that condition, its topological energy scale remains two orders of magnitude below the thermal scale at \(10\) mK.

The strongest defensible case is therefore a staged research program, not a passively self-correcting Fibonacci crystal.

## Sources

- [R242] L. B. Hughes, S. A. Meynell, W. Wu, S. Parthasarathy, L. Chen, Z. Zhang, Z. Wang, E. J. Davis, K. Mukherjee, N. Y. Yao, and A. C. Bleszynski Jayich, “Strongly Interacting, Two-Dimensional, Dipolar Spin Ensembles in (111)-Oriented Diamond,” Physical Review X 15, 021035 (2025). DOI: [10.1103/PhysRevX.15.021035](https://doi.org/10.1103/PhysRevX.15.021035); arXiv: [2404.10075](https://arxiv.org/abs/2404.10075). See also the 2026 [publisher erratum](https://journals.aps.org/prx/abstract/10.1103/vlsl-d2mg).

- [R243] M. Haruyama et al., “Triple nitrogen-vacancy centre fabrication by C5N4H\(_n\) ion implantation,” Nature Communications 10, 2664 (2019). DOI: [10.1038/s41467-019-10529-x](https://doi.org/10.1038/s41467-019-10529-x).

- [R080] F. Dolde et al., “Room-temperature entanglement between single defect spins in diamond,” Nature Physics 9, 139–143 (2013). DOI: [10.1038/nphys2545](https://doi.org/10.1038/nphys2545).

- [R207] S. Kim, P. London, D. Yang, L. B. Hughes, J. Ahlers, S. Meynell, W. J. Mitchell, K. Mukherjee, and A. C. Bleszynski Jayich, “Scalable nanoscale positioning of highly coherent color centers in prefabricated diamond nanostructures,” Nature Communications 16, 9803 (2025). DOI: [10.1038/s41467-025-64758-4](https://doi.org/10.1038/s41467-025-64758-4); arXiv: [2502.01198](https://arxiv.org/abs/2502.01198).

- [R119] C. E. Bradley et al., “A Ten-Qubit Solid-State Spin Register with Quantum Memory up to One Minute,” Physical Review X 9, 031045 (2019). DOI: [10.1103/PhysRevX.9.031045](https://doi.org/10.1103/PhysRevX.9.031045); arXiv: [1905.02094](https://arxiv.org/abs/1905.02094).

- [R086] R. E. Evans et al., “Photon-mediated interactions between quantum emitters in a diamond nanocavity,” Science 362, 662–665 (2018). DOI: [10.1126/science.aau4691](https://doi.org/10.1126/science.aau4691).

- [R025] S. Bravyi, D. P. DiVincenzo, and D. Loss, “Schrieffer–Wolff transformation for quantum many-body systems,” Annals of Physics 326, 2793–2826 (2011). DOI: [10.1016/j.aop.2011.06.004](https://doi.org/10.1016/j.aop.2011.06.004); arXiv: [1105.0675](https://arxiv.org/abs/1105.0675).

- [R017] A. Kitaev, “Anyons in an exactly solved model and beyond,” Annals of Physics 321, 2–111 (2006). DOI: [10.1016/j.aop.2005.10.005](https://doi.org/10.1016/j.aop.2005.10.005); arXiv: [cond-mat/0506438](https://arxiv.org/abs/cond-mat/0506438).

- [R018] M. A. Levin and X.-G. Wen, “String-net condensation: A physical mechanism for topological phases,” Physical Review B 71, 045110 (2005). DOI: [10.1103/PhysRevB.71.045110](https://doi.org/10.1103/PhysRevB.71.045110); arXiv: [cond-mat/0404617](https://arxiv.org/abs/cond-mat/0404617).

- [R244] N. Y. Yao, L. Jiang, A. V. Gorshkov, P. C. Maurer, G. Giedke, J. I. Cirac, and M. D. Lukin, “Scalable architecture for a room temperature solid-state quantum information processor,” Nature Communications 3, 800 (2012). DOI: [10.1038/ncomms1788](https://doi.org/10.1038/ncomms1788); arXiv: [1012.2864](https://arxiv.org/abs/1012.2864).

---
