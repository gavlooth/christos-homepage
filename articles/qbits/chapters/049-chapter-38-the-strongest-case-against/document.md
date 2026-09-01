# Chapter 38 — The strongest case against

A rigorous critique should focus on the requirements that support the entire proposal rather than on every isolated limitation.

A color center—a point defect in a crystal with optically or electronically accessible internal states—can function effectively as a sensor, network node, or physical qubit while remaining unsuitable for realizing an analog topological phase, meaning a topologically ordered phase generated directly by a continuously acting many-body Hamiltonian. The proposal considered in this book is more specific than placing defects in diamond. It requires the following sequence of physical and engineering steps:

\[
\begin{aligned}
\text{defects}
&\to\text{clusters}\to\text{pseudospins}\to\text{target graph}\\
&\to\text{many-body terms}\to\text{gapped phase}
\to\text{logical protection}.
\end{aligned}
\]

Here, a pseudospin is an effective two-level degree of freedom encoded in a larger physical system, and the target graph specifies which effective degrees of freedom interact. This sequence is conjunctive: every implication must hold simultaneously in the same sample and within the same parameter regime.

Ten separate papers that demonstrate ten separate implications do not establish the complete sequence. The strongest objection is therefore not merely that diamond is difficult to fabricate or control. The more fundamental issue is that several demanding requirements must be satisfied simultaneously, while the perturbative procedures used to generate the desired Hamiltonian reduce the useful energy scale.

The requirements that support the entire proposal should be treated as foundational constraints. Interaction strength, cluster isolation, defect placement, and graph fidelity have this status.

The effective plaquette term—a local many-body interaction associated with a face of the target graph—depends on these constraints. The topological gap then depends on the effective plaquette term.

State preparation and thermal stability must be evaluated relative to that gap. Scaling requires the same structure to be reproduced hundreds or thousands of times.

## Two criteria for ranking obstacles

The obstacles can be ranked along two axes.

The first axis measures how directly the available evidence applies to the intended hardware. A claim may have been measured in a relevant defect array, established only for an individual component, derived for an idealized model, or proposed without direct demonstration.

This criterion is called evidence proximity. A theorem about an ideal Hamiltonian does not constitute a measurement of a fabricated patch.

The second axis measures how many subsequent requirements fail if the obstacle is not resolved. A problem with a workaround may impose substantial cost, whereas failure of a foundational inequality may invalidate the entire proposal. This criterion is called reach leverage.

A low rank does not imply that a problem is easy. It means that another obstacle is currently more likely to make its solution irrelevant. Later-stage protocols should not receive priority when the underlying physical requirements remain unsatisfied.

## Perturbative suppression of the useful energy scale

Consider a deliberately favorable toy model. Each cluster has a low-energy residual doublet, meaning two low-lying states used as the encoded degree of freedom. These states are separated from unwanted cluster states by an energy \(\Delta_c\), measured in joules. Neighboring defects or clusters interact through a two-body energy \(J\). The dimensionless perturbative parameter that determines whether the unwanted cluster states can be neglected is

\[
\epsilon=\frac{J}{\Delta_c}.
\]

Projection into the doublet requires \(\epsilon\ll1\). Assume that the desired four-body plaquette coefficient \(K\) first appears at fourth order in perturbation theory. Perturbative-gadget theory exhibits the general difficulty: a \(k\)-body term constructed from two-body couplings can first arise at order \(k\) [R174]. If the dimensionless geometry coefficient \(c\) is retained but its detailed value is not specified, then

\[
K\sim c\,J\epsilon^3
=c\frac{J^4}{\Delta_c^3}.
\]

Thus, the same small ratio that protects the encoded doublet also suppresses the interaction intended to protect the topological state.

The dependencies among the relevant quantities are as follows.

```
fabrication and charge-state yield
|
+-- positions and orientations ------> pair couplings J_ij and graph
| |
| +--> coupling disorder sigma_J
|
+-- cluster spectrum ----------------> isolated doublet, gap Delta_c
|
+-- require epsilon = J/Delta_c K ~ J epsilon^3
|
+----------------------------+------------------+
| | |
unwanted terms topological gap preparation gap
delta H Delta_topo Delta_min
| | |
+---------- require --------+--------+---------+
|
Delta_topo >> sigma_K, ||delta H||, hbar Gamma, k_B T
|
finite patch and logical sector
|
repeat with adequate yield and control
```

Now assign hypothetical rather than measured values:

\[
\frac{\Delta_c}{h}=5\ \mathrm{GHz},\qquad
\frac{J}{h}=100\ \mathrm{MHz},\qquad c=1,
\]

where \(h\) is Planck’s constant. These values give \(\epsilon=0.02\), and therefore

\[
\frac{K}{h}=100\ \mathrm{MHz}\times(0.02)^3=800\ \mathrm{Hz}.
\]

The projection condition is comfortably satisfied, but the resulting many-body energy scale is small. For a hypothetical coherence time \(T_2=1\ \mathrm{ms}\), define the decoherence rate \(\Gamma=1/T_2=10^3\ \mathrm{s^{-1}}\). The corresponding energy linewidth, expressed in frequency units, is

\[
\frac{\hbar\Gamma}{h}=\frac{\Gamma}{2\pi}=159\ \mathrm{Hz}.
\]

It follows that \(K/(\hbar\Gamma)\approx5\), which does not establish a robust \(\gg1\) hierarchy. The remaining margin could be eliminated by a dimensionless coefficient smaller than the optimistic value \(c=1\), by an additional perturbative order, or by correlated noise.

Placement errors are also amplified. For a magnetic dipolar coupling,

\[
J\propto r^{-3},
\]

where \(r\) is the separation in metres. A small radial error \(\delta r\) produces

\[
\frac{\delta J}{J}\approx-3\frac{\delta r}{r}.
\]

Because \(K\propto J^4\) along this toy perturbative path,

\[
\frac{\delta K}{K}\approx4\frac{\delta J}{J}
\approx-12\frac{\delta r}{r}.
\]

In this simplified common-coupling estimate, a 5% spread in separation therefore produces approximately a 60% spread in \(K\). This arithmetic is a sensitivity calculation rather than a universal disorder law. Independent bonds and angular errors must be analyzed using the actual Hamiltonian.

State preparation is constrained by the same small gap. Let the minimum many-body gap along an interpolation be optimistically \(\Delta_{\min}=h\times800\ \mathrm{Hz}\), and let the norm of the Hamiltonian derivative with respect to the dimensionless interpolation coordinate \(s\) be \(\lVert dH/ds\rVert=h\times100\
\mathrm{MHz}\). A common sufficient adiabatic timescale is [R245]

\[
t_f\gg\frac{\hbar\lVert dH/ds\rVert}{\Delta_{\min}^2}
=\frac{1}{2\pi}\frac{10^8}{800^2}\ \mathrm{s}
\approx25\ \mathrm{s}.
\]

This duration is approximately \(2.5\times10^4\) hypothetical coherence times. The precise bound depends on the interpolation schedule and the theorem used, but the inverse-gap dependence remains physically significant.

At \(T=10\
\mathrm{mK}\),

\[
\frac{k_BT}{h}
=(20.84\ \mathrm{GHz/K})(0.010\ \mathrm{K})
\approx208\ \mathrm{MHz},
\]

which is much larger than an equilibrium gap of 800 Hz. Driven preparation can temporarily avoid thermal equilibrium, but this changes the proposed realization from a passive thermal phase into a controlled nonequilibrium experiment.

The hierarchy fails not because an 800 Hz coefficient is intrinsically impossible to use, but because the same 800 Hz scale must simultaneously exceed disorder, decoherence, and temperature while also permitting preparation within an inverse-gap timescale.

If any one of these inequalities is omitted, the toy model can appear promising. When all of them are imposed together, it does not.

## Ranking of ten obstacles

The following ranking assesses the defect-cluster route to an analog, emergent, gapped topological Hamiltonian. It does not assess defect qubits in general. “Direct” means that evidence exists for the relevant ingredient; no cited experiment integrates all of the ingredients. Leverage ranges from 1, denoting a localized cost, to 5, denoting a failure that blocks the central claim.

| Rank | Obstacle | Evidence proximity | Leverage | Basis for ranking |
|---:|---|---|:---:|---|
| 1 | Generate the required high-order terms | strong theory; architecture-specific implementation is a proposal | 5 | Without the stabilizer/plaquette algebra, there is no target phase to protect. |
| 2 | Retain a usable topological gap | rigorous stability theory starts from an already gapped target; defect value unmeasured | 5 | Every noise, preparation, and thermal inequality is paid from this one scale. |
| 3 | Scale yield and calibration | direct component evidence; no phase-scale array | 5 | Per-site and per-link imperfections compound with system size. |
| 4 | Place the right defects at the right coordinates | direct fabrication evidence | 5 | Position controls coupling, graph, cluster spectrum, and disorder at once. |
| 5 | Make interactions coherent and strong enough | direct pair-level evidence | 5 | \(J\lesssim\hbar\Gamma\) kills coherent Hamiltonian engineering before topology enters. |
| 6 | Control disorder | direct evidence for inhomogeneity sources; phase-level tolerance model-dependent | 4 | Disorder perturbs denominators and effective terms and can close or fill the gap. |
| 7 | Realize the right interaction graph | microscopic interactions known; graph conversion is a proposal | 4 | Extra long-range and angular couplings are Hamiltonian terms, not merely wiring inconvenience. |
| 8 | Survive finite temperature | strong theory; thermalization rates platform-dependent | 4–5 | It is existential for passive memory, but can be deferred for a short proof-of-principle state. |
| 9 | Prepare the phase before it decoheres | strong adiabatic theory; no integrated demonstration | 4 | A small minimum gap can make a formally valid Hamiltonian experimentally unreachable. |
| 10 | Initialize, address, drive, and read the array | direct small-register evidence; array extrapolation uncertain | 3–4 | Severe, but global protocols and improved interfaces offer more workaround space than missing terms do. |

Ranks 3–7 are close. A host material with mediator-enhanced coupling could lower the ranking of interaction strength while introducing additional control or loss problems.

If the objective is an equilibrium passive memory rather than a finite-time demonstration of a phase, thermal stability rises to rank 3. The table provides a decision order rather than a universal ranking.

### Required many-body interaction algebra

String-net Hamiltonians require local constraints and plaquette recoupling operations that obey a precise algebra [R018]. The available defect interactions are predominantly two-body interactions.

Perturbative gadgets can generate many-body terms [Theory], but higher perturbative order suppresses the desired coefficient and also produces lower-order energy shifts and unwanted operators [R174]. Symmetry can cancel some of these terms, but such cancellation becomes sensitive to strain, orientation, and coupling imbalance.

The relevant condition is not merely that a four-body term can be obtained in perturbation theory. The required hierarchy is

\[
\lVert H_{\mathrm{unwanted}}\rVert,
\ \sigma_K,
\ \hbar\Gamma
\ll K
\]

throughout a manufacturable patch. Here, \(H_{\mathrm{unwanted}}\) denotes unwanted Hamiltonian terms, \(\sigma_K\) denotes disorder in the effective plaquette coupling, and \(\Gamma\) is the decoherence rate. No defect-cluster experiment cited here has measured this hierarchy. [Proposal] Until such a measurement exists, the central analog-Hamiltonian step remains an engineering hypothesis.

A nonzero perturbative coefficient establishes only that a term occurs in an expansion. It does not establish that this term dominates the physical Hamiltonian.

### Limits of topological-gap stability theorems

Topological-order stability theorems show that certain ideal Hamiltonians that are already local and gapped retain separated spectral bands under sufficiently weak local perturbations [R142]. [Theory] This result becomes relevant only after the engineered Hamiltonian lies within the target phase and its perturbations remain below the theorem’s threshold. It does not imply that a weak approximate plaquette term can overcome larger parasitic terms.

Define \(\Delta_{\mathrm{topo}}\) as the many-body energy gap above the relevant ground-state manifold. The required hierarchy is

\[
\Delta_{\mathrm{topo}}
\gg \max(k_BT,\sigma_K,\lVert H_{\mathrm{unwanted}}\rVert,
\hbar\Gamma,\delta_{\mathrm{fs}}),
\]

where \(\sigma_K\) is effective-coupling disorder, \(T\) is temperature in kelvin, \(k_B\) is Boltzmann’s constant, \(\Gamma\) is a decoherence rate in inverse seconds, and \(\delta_{\mathrm{fs}}\) is a finite-size splitting in joules. An experimentally observed spectral gap is not by itself evidence of topological order. The excitations, nonlocal operators, and robustness must also agree with those of the target phase.

Applying a stability theorem before the target term dominates would assume the central conclusion as an input.

### Yield reduction under scaling

Assume that every required site works independently with probability \(p\). The yield of an \(N\)-site patch in which every site works is then

\[
Y_N=p^N.
\]

This toy model neglects correlated fabrication errors and repair mechanisms. It nevertheless demonstrates the effect of multiplicative yield: for \(N=1000\), \(p=0.99\) gives \(Y_N\approx4.3\times10^{-5}\), whereas \(p=0.999\) gives \(Y_N\approx0.368\). Links, orientations, charge states, optical usability, and cluster spectra impose additional conditions unless the architecture tolerates vacancies and can reroute around them.

Scaling also requires calibration of an extensive number of nonidentical frequencies and couplings. A design that requires a separate analog cancellation tone for every parasitic bond may have a scalable component count while requiring an impractical amount of calibration information. This is why scaling ranks above several severe limitations observed in individual devices.

Correlated fabrication or repair could improve the yield relative to the independence model. Under the independence assumption, however, \(p=0.99\) gives a negligible all-good yield at one thousand sites.

### Required defect-placement precision

[Experiment] A 2025 diamond experiment combined nitrogen delta doping with localized electron irradiation in prefabricated nanopillars. It reported approximately 4 nm depth precision and 46(1) nm lateral precision in 280 nm-diameter pillars, with mean Hahn-echo \(T_2=98\ \mu\mathrm{s}\) for the created single NV centers [R207]. These results are important fabrication advances under the conditions of that experiment. They do not demonstrate arbitrary three-dimensional, few-nanometre, orientation-selected interacting lattices.

Placement performance must be compared with the tolerance required by the proposed architecture rather than with a general classification as nanoscale fabrication. If a dipolar design uses separation \(r\) and permits a relative coupling spread \(q\), radial placement alone requires approximately

\[
\sigma_r/r\lesssim q/3.
\]

Exchange-mediated proposals may be more position-sensitive because exchange coupling often varies exponentially with wave-function overlap. Post-fabrication mapping can determine the structure that was produced, but the mapped graph must still remain in the desired topological phase or permit repair.

The reported 46 nm lateral precision does not rule out every future fabrication process. It does show that the 2025 process had not already achieved a few-nanometre interacting lattice.

### Pair interactions compared with lattice-scale requirements

[Experiment] Two engineered NV electron spins separated by approximately 25 nm were entangled at room temperature using their roughly 5 kHz magnetic dipolar coupling [R080]. This experiment provides decisive evidence for coherent defect–defect interaction. It does not show that the same interaction can generate a clean high-order gap across a large lattice. The demonstration used control sequences and a selected pair.

Dipolar interactions do not provide independent control over coupling strength, angle, and range:

\[
J_{ij}\propto\frac{1-3\cos^2\theta_{ij}}{r_{ij}^3},
\]

where \(\theta_{ij}\) is the angle between the separation vector and the quantization axis. Reducing the defect separation increases \(J\), but it generally also increases fabrication damage, spectral crowding, unwanted exchange, and difficulty of individual addressability.

Optical, phononic, or cavity mediators can increase the interaction range, but they add constraints associated with loss, fabrication, and mode crowding. They relocate the limiting requirement rather than eliminating it.

Consequently, satisfying \(J/\hbar=10\Gamma\) for one pair establishes only a pair-level interaction-to-decoherence comparison. The later requirement concerns the topological gap rather than the bare coupling \(J\).

### Nonlinear amplification of disorder

Microscopic disorder first modifies bare frequencies, orientations, and the pair couplings \(J_{ij}\). It then modifies the denominators in perturbation theory, causing nonlinear variation of the effective coefficients. A cluster can therefore lose its clean low-energy doublet before the array-level topological phase is evaluated.

Local disorder below the stability threshold of an established phase need not be fatal [R142]. The difficult regime is not weak generic disorder acting on a phase with a large gap. It is disorder comparable to a gap that has already been reduced by projection.

Echo techniques can refocus certain single-spin frequency offsets. However, they cannot refocus a static error in the Hamiltonian being implemented without also altering the target dynamics.

If the perturbative denominators are ignored, disorder appears to be only a local-field problem. When their dependence is included, the clean cluster doublet can disappear before anyonic excitations become relevant.

### Unintended graph edges as Hamiltonian terms

A string-net or bond-directional model specifies both which degrees of freedom interact and which operator acts on each edge or plaquette [R018]. A three-dimensional crystal instead provides fixed crystallographic orientations, long-range dipolar tails, and surfaces. These features do not constitute a freely editable interaction graph.

Graph structure can be encoded through clusters, frequency selection, pulse sequences, or mediators. Each method introduces smaller effective energy scales, time-dependent control, additional hardware, or some combination of these costs. [Proposal] A digitally toggled average Hamiltonian may emulate the required graph, but its protection then depends on control and should not be described as an autonomous material Hamiltonian.

An additional dipolar tail is an operator in \(H\), not merely a wiring complication.

### Finite-temperature limitations

At nonzero temperature, excitations are generated at rates determined by both the energy gap and the bath dynamics. These excitations can diffuse and implement logical operators.

The finite-temperature quantum-memory literature shows that dimensionality, energy barriers, kinetics, and decoding all matter; the existence of a zero-temperature gap is not sufficient [R169]. [Theory] Under the assumptions of the Bravyi–Terhal no-go theorem, two-dimensional local stabilizer Hamiltonians cannot provide a self-correcting quantum memory with a macroscopic energy barrier [R168].

This theorem is not a universal impossibility result for every non-Abelian, driven, long-range, or actively corrected architecture. It does, however, exclude the general claim that any two-dimensional local Hamiltonian automatically provides indefinitely stable storage.

A short-duration ground-state experiment may use active cooling and rapid measurement even when \(k_BT>\Delta_{\mathrm{topo}}\). Such an experiment can demonstrate properties of a model, but it does not demonstrate passive thermal protection.

The physically relevant comparison is \(k_BT/\Delta_{\mathrm{topo}}\), not the refrigerator temperature alone. A millikelvin operating temperature does not provide protection when the emergent gap is on a hertz scale.

### Preparation within the coherence window

Even when the final Hamiltonian lies in the desired phase, an adiabatic path can encounter a smaller gap \(\Delta_{\min}\). Adiabatic bounds depend on the complete schedule, derivatives of the Hamiltonian, and transition matrix elements, not solely on the final gap [R245]. [Theory] As system size increases, \(\Delta_{\min}\) can decrease near a phase transition, while decoherence and calibration drift accumulate over the longer preparation interval.

Measurement-assisted or dissipative preparation could be faster. These alternatives constitute new protocols and introduce requirements for ancillas, reset, measurement, and verification. Preparing a wavefunction once also does not establish an equilibrium phase. The subsequent Hamiltonian and its response must provide the relevant evidence.

A formally valid Hamiltonian that cannot be reached within an experimental operating window does not constitute an operational device.

### Control and readout as comparatively tractable constraints

[Experiment] A seven-spin diamond processor demonstrated fault-tolerant protocol primitives for a five-qubit-code logical qubit, including flagged stabilizer measurements and real-time processing [R234]. The authors explicitly stated that fidelity and qubit number still required improvement before logical errors could be suppressed below physical errors. This result demonstrates sophisticated control in a selected local register, but not dense analog control of an extensive defect lattice.

Reviews of color-center networks similarly identify simultaneous requirements for spin coherence, optical interfaces, spectral stability, and integrated fabrication [R246]. Local tuning can compensate for disorder but may break cluster symmetry. Spectral distinguishability improves addressability but introduces detuning. Dense packing strengthens interactions but increases crosstalk. These requirements are therefore not independent control parameters.

Control ranks last because it admits more potential workarounds. By contrast, absent plaquette algebra has no workaround that preserves the proposed phase.

## Current experimental and theoretical evidence

The evidence available through 2026 is asymmetric.

- [Experiment] Individual defects, small registers, coherent pair coupling, logical-protocol primitives, and improving registered fabrication have been demonstrated [R207]; [R080]; [R234].

- [Theory] Perturbative generation, stability of ideal topological phases, adiabatic conditions, and finite-temperature limitations are well developed [R174]; [R245]; [R018]; [R142]; [R169]; [R168].

- [Proposal] Mapping a particular manufacturable defect-cluster Hamiltonian to a clean non-Abelian string-net model remains a proposal.

- [Numerics] Small-model numerical calculations can validate a specified effective Hamiltonian, but they cannot determine fabrication distributions or decoherence parameters that have not been measured.

- [Speculation] Extrapolating present defect components to a scalable, passively protected Fibonacci-like material is scientifically coherent but remains unsupported as an integrated hardware claim.

The resulting negative assessment is not that the proposal is impossible. It is that the central conjunction of requirements has no demonstrated margin. The strongest experimental results establish lower-level components of the dependency structure, whereas the proposed topologically protected phase depends on the complete structure.

## Common analytical errors

- Evaluating individual components rather than testing all required inequalities simultaneously is insufficient. A long coherence time \(T_2\), where \(T_2\) is the transverse dephasing time; a strong pairwise coupling \(J\); accurate implantation, meaning controlled placement of defects; and realization of a topological model in four different samples do not constitute a single functional device. The relevant quantity is the joint distribution—the correlated statistical variation—of \(J\), the cluster-isolation energy \(\Delta_c\), disorder, coherence, fabrication yield, and control performance within the same fabricated patch.

- An arbitrary effective interaction should not be identified as a plaquette term. A plaquette term is a Hamiltonian operator supported on the degrees of freedom around an elementary face of a lattice. Observation of a four-spin spectral shift alone is insufficient. The operator structure, coefficient sign, competing Hamiltonian terms, spatial pattern, and validity of the perturbative approximation must all agree with the target Hamiltonian, which is the model intended for physical realization. Otherwise, the experiment demonstrates a higher-order interaction but not the required operator algebra.

- A digital implementation does not demonstrate passive emergence of the same Hamiltonian. Pulse synthesis can cancel unwanted interaction edges and generate multi-body average Hamiltonians. Such an implementation may provide an effective digital or Floquet simulation, where Floquet simulation uses periodic driving to produce a time-averaged Hamiltonian. However, if continuous calibration and periodic driving are essential, the protection mechanism cannot be attributed solely to an autonomous equilibrium Hamiltonian.

- Topological-stability results must not be applied circularly. The relevant theorem states that an appropriate topological phase survives sufficiently weak perturbations. It cannot be invoked until the target term has been shown to dominate the competing terms and the unperturbed system has been established to lie within that phase.

- Postselection must not conceal fabrication yield. Postselection means retaining only realizations that satisfy a chosen success criterion. Selecting one successful pair from a large implanted field demonstrates pair-level physics. A scalable architecture must also account for failed sites, unusable charge states, missing interaction links, calibration time, and the effects of graph repair on the interaction network.

- Refrigerator temperature and effective-Hamiltonian temperature scales must be distinguished. The relevant dimensionless comparison is \(k_BT/\Delta_{\mathrm{topo}}\), where \(k_B\) is Boltzmann’s constant, \(T\) is temperature, and \(\Delta_{\mathrm{topo}}\) is the topological excitation gap. Refrigerator temperature alone is not the relevant criterion. A millikelvin temperature does not provide strong thermal protection if the emergent gap is on the hertz scale.

- Several physically distinct claims must not be treated as equivalent. A physical defect qubit can exhibit coherence. A cluster can encode a residual degree of freedom. A controlled array can digitally emulate a string-net Hamiltonian, where a string-net Hamiltonian is a many-body model that can support emergent topological order. An analog material can possess emergent topological order. An encoded state can also be protected through active error correction. Failure of the analog defect-cluster route would not invalidate the other four claims.

## Consistency checks

- **Reason for ranking high-order-term generation above control complexity.** Control complexity may admit architectural workarounds. By contrast, absence of the target plaquette or stabilizer algebra eliminates the proposed phase itself. A stabilizer algebra is the set of mutually compatible constraint operators that defines the intended encoded subspace. High-order synthesis also determines the small energy scale inherited by several subsequent performance tests.

- **Calculation of \(K/h=800\) Hz and \(K/(\hbar\Gamma)\approx5\).** Here, \(K\) is the effective high-order coupling energy, \(h\) is Planck’s constant, \(\hbar=h/2\pi\) is the reduced Planck constant, \(\Gamma\) is the decoherence rate, and \(\epsilon\) is the perturbative expansion parameter. With \(J/h=100\) MHz and \(\epsilon=0.02\),
  \[
  K/h=100\,\mathrm{MHz}\times(0.02)^3=800\ \mathrm{Hz}.
  \]
  For \(T_2=1\) ms, \(\Gamma=10^3\,\mathrm{s}^{-1}\) and \(\hbar\Gamma/h=\Gamma/2\pi=159\) Hz. Therefore, the ratio is about 5 rather than \(\gg1\), so the effective coupling is not parametrically larger than the decoherence scale.

- **Consequence of increasing cluster isolation \(\Delta_c/J\) to protect the doublet.** The doublet is the intended two-dimensional low-energy subspace of a cluster. A fourth-order coefficient scales as
  \[
  J(J/\Delta_c)^3.
  \]
  Increasing \(\Delta_c/J\) improves the validity of projection into the doublet, but it also reduces the desired effective interaction. Better cluster isolation can therefore decrease the topological gap.

- **Effect of a 5% radial spread on \(K\) for a fourth-order dipolar path.** For a dipolar interaction, the fractional coupling variation satisfies
  \[
  \delta J/J\approx-3\delta r/r,
  \]
  where \(r\) is the separation and \(\delta r\) is its variation. Because
  \[
  K\propto J^4,
  \]
  the corresponding variation is
  \[
  \delta K/K\approx-12\delta r/r.
  \]
  Thus,
  \[
  12\times0.05=0.60.
  \]
  A 5% radial spread therefore produces approximately a 60% spread in \(K\) along this fourth-order dipolar path. The effects of independent bonds and angular variations require analysis of the actual Hamiltonian.

- **Interpretation of 46 nm lateral positioning precision for a few-nanometre architecture.** This result does not rule out future improvements or all fabrication methods. It establishes that one advanced, high-yield process reported in 2025 did not satisfy the hypothetical few-nanometre tolerance. A valid architectural assessment must specify the required tolerance and compare it with a directly comparable fabrication process.

- **Consequences of \(k_BT>\Delta_{\mathrm{topo}}\).** This inequality does not imply that every experiment lacks value. Fast, driven, cooled, measured, or postselected experiments may still reveal the dynamics of the model. However, such results would not establish a passive equilibrium memory operating at that temperature.

The analysis must test the logical dependencies between requirements rather than isolated favorable results. Improvement of a later-stage protocol cannot compensate for the absence of an earlier essential requirement.

## Sources

- [R174] S. P. Jordan and E. Farhi, “Perturbative Gadgets at Arbitrary
Orders,” Physical Review A 77, 062329 (2008).
DOI: [10.1103/PhysRevA.77.062329](https://doi.org/10.1103/PhysRevA.77.062329);
[arXiv:0802.1874](https://arxiv.org/abs/0802.1874).

- [R245] T. Albash and D. A. Lidar, “Adiabatic quantum computation,”
Reviews of Modern Physics 90, 015002 (2018).
DOI: [10.1103/RevModPhys.90.015002](https://doi.org/10.1103/RevModPhys.90.015002);
[arXiv:1611.04471](https://arxiv.org/abs/1611.04471).

- [R018] M. A. Levin and X.-G. Wen, “String-net condensation: A
physical mechanism for topological phases,” Physical Review B
71, 045110 (2005). DOI: [10.1103/PhysRevB.71.045110](https://doi.org/10.1103/PhysRevB.71.045110);
[arXiv:cond-mat/0404617](https://arxiv.org/abs/cond-mat/0404617).

- [R142] S. Bravyi, M. B. Hastings, and S. Michalakis, “Topological
quantum order: Stability under local perturbations,” Journal of
Mathematical Physics 51, 093512 (2010). DOI: [10.1063/1.3490195](https://doi.org/10.1063/1.3490195); [arXiv:1001.0344](https://arxiv.org/abs/1001.0344).

- [R207] S. Kim et al., “Scalable nanoscale positioning of highly
coherent color centers in prefabricated diamond nanostructures,”
Nature Communications 16, 9803 (2025). DOI: [10.1038/s41467-025-64758-4](https://doi.org/10.1038/s41467-025-64758-4);
[arXiv:2502.01198](https://arxiv.org/abs/2502.01198).

- [R080] F. Dolde et al., “Room-temperature entanglement between
single defect spins in diamond,” Nature Physics
9, 139–143 (2013). DOI: [10.1038/nphys2545](https://doi.org/10.1038/nphys2545); [arXiv:1212.2804](https://arxiv.org/abs/1212.2804).

- [R169] B. J. Brown, D. Loss, J. K. Pachos, C. N. Self, and J. R.
Wootton, “Quantum memories at finite temperature,” Reviews of Modern
Physics 88, 045005 (2016). DOI: [10.1103/RevModPhys.88.045005](https://doi.org/10.1103/RevModPhys.88.045005);
[arXiv:1411.6643](https://arxiv.org/abs/1411.6643).

- [R168] S. Bravyi and B. M. Terhal, “A no-go theorem for a
two-dimensional self-correcting quantum memory based on stabilizer
codes,” New Journal of Physics 11, 043029
(2009). DOI: [10.1088/1367-2630/11/4/043029](https://doi.org/10.1088/1367-2630/11/4/043029);
[arXiv:0810.1983](https://arxiv.org/abs/0810.1983).


- [R234] M. H. Abobeih et al., “Fault-tolerant operation of a logical
qubit in a diamond quantum processor,” Nature
606, 884–889 (2022). DOI: [10.1038/s41586-022-04819-6](https://doi.org/10.1038/s41586-022-04819-6);
[arXiv:2108.01646](https://arxiv.org/abs/2108.01646).

- [R246] M. Ruf, N. H. Wan, H. Choi, D. Englund, and R. Hanson,
“Quantum networks based on color centers in diamond,” Journal of
Applied Physics 130, 070901 (2021). DOI: [10.1063/5.0056534](https://doi.org/10.1063/5.0056534); [arXiv:2105.04341](https://arxiv.org/abs/2105.04341).


---
