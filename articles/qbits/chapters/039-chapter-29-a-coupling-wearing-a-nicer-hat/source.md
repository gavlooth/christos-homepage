# Chapter 29 — Distinguishing microscopic coupling from topological gap

A coupling \(J\) between two defects and a topological gap \(\Delta_{\rm topo}\) are distinct physical quantities. The symbol \(\Delta_{\rm topo}\) is justified only after the relevant many-body spectrum has been established.

The parameter \(J\) denotes a coupling between neighboring degrees of freedom and may, for example, correspond to fifty megahertz when expressed as a frequency. By contrast, a many-body gap is the energy of the lowest excitation that lies outside the ground-state family of the entire lattice.

Projection into an effective low-energy subspace, a fourth-order perturbative gadget, finite temperature, disorder, and decoherence can all reduce the usable energy-scale margin. None of these effects converts \(J\) into a topological gap merely through a change of notation.

All energy scales will therefore be expressed in common units. No experimentally measured material value of \(\Delta_{\rm topo}\) is currently available for insertion at the end of the analysis.

## Consistent units for energy-scale comparisons

Several energy scales can compete within a single spectrum. A quantitative scale budget requires all of them to be written in the same units and prevents one energy contribution from being counted more than once.

Although energies are not consumed literally, their relative magnitudes must be ordered consistently.

An energy \(E\) will usually be quoted as the ordinary frequency \(E/h\), where \(h\) is Planck’s constant. Thus, a table entry of \(1\ \mathrm{MHz}\) denotes the energy \(h\times 10^6\ \mathrm{s^{-1}}\), not an angular frequency. Temperature is converted to frequency units using

\[
\frac{k_B T}{h}=20.8366\ \frac{\mathrm{GHz}}{\mathrm{K}}T
=20.8366\ \frac{\mathrm{MHz}}{\mathrm{mK}}T.
\]

Here \(k_B\) is Boltzmann’s constant, and \(T\) is the thermodynamic temperature in kelvin. The numerical conversion follows from the exact SI values of \(k_B\) and \(h\) [R196]. Expressing energies as ordinary frequencies avoids unintended factors of \(2\pi\).

Consequently, 1 mK corresponds to 20.8366 MHz in these units, while a kilohertz coupling corresponds to \(4.8\times10^{-5}\) mK. A calculation becomes inconsistent if it mixes cyclic frequency with angular frequency or identifies the cryostat temperature with the sample temperature without justification.

## Local interaction terms and topological phases

Consider an ideal effective Hamiltonian term

\[
H_p=-K B_p,
\]

where \(K>0\) is an energy and \(B_p\) is a dimensionless operator with eigenvalues \(+1\) and \(-1\). The index \(p\) may label a plaquette, meaning a local elementary face of a lattice. A single plaquette term does not by itself establish a topological phase.

The two eigenenergies of this term are \(-K\) and \(+K\). Reversing the eigenvalue of \(B_p\) therefore costs

\[
\Delta_p=(+K)-(-K)=2K.
\]

This energy difference, rather than the coefficient \(K\) alone, is the excitation energy of the isolated term. In a closed lattice, constraints may require excitations to occur in pairs. Under those conditions, the lowest allowed bulk process may cost \(4K\).

Boundaries can alter this numerical factor. A valid value of \(\Delta_{\rm topo}\) must therefore be derived from the spectrum and boundary conditions of the specified model.

In many effective models, \(K\) is not a fundamental microscopic parameter. In the strongly anisotropic limit of Kitaev’s honeycomb model, fourth-order perturbation theory generates a plaquette coefficient of the form [R017]

\[
K=\frac{J_x^2J_y^2}{16\Lambda^3}.
\]

Here \(J_x\) and \(J_y\) are weak bond energies, while \(\Lambda\) denotes the strong bond scale, which is called \(J_z\) in the original model. Setting \(J_x=J_y=J\) gives

\[
K=\frac{J^4}{16\Lambda^3}
=\frac{J}{16}\left(\frac{J}{\Lambda}\right)^3.
\]

The dimensional relation is consistent because \([J^4/\Lambda^3]=\mathrm{energy}\). If \(J/\Lambda=0.1\), then the coefficient is \(J/16{,}000\), before disorder or other corrections are included.

[Theory] This fourth-order result is established for the specified honeycomb limit [R017]. It is not a derived coefficient for a diamond, SiC, or sapphire defect array, and the honeycomb phase in this limit is not doubled Fibonacci order.

For the conservative illustrative scale budget below, define

\[
\Delta_{\rm topo}=2K.
\]

[Assumption] The factor of two represents one violated effective term. This choice is deliberately less favorable than a periodic pair threshold of \(4K\). It remains an illustrative assumption rather than a claim about a material gap.

Identifying \(K\) directly with the gap would confuse the coefficient of a local Hamiltonian term with the first allowed excitation of the full lattice. Pair-creation constraints and boundary conditions can change the numerical factor. In addition, a crystal does not acquire a value of \(K\) from an abstract model in which that coefficient was chosen freely.

## Spectral definition of the topological gap

Let \(E_0\le E_1\le E_2\le\cdots\) denote the eigenenergies of a finite effective Hamiltonian. A topologically ordered system may contain several nearly degenerate ground states. Let \(\mathcal G\) denote this low-energy ground-state family. The topological gap is defined by

\[
\Delta_{\rm topo}=E_{\rm first\ outside\ \mathcal G}-E_{\rm top\ of\
\mathcal G}.
\]

Thus, \(\Delta_{\rm topo}\) is a many-body spectral quantity: it measures the separation between the highest-energy state in the ground-state family and the lowest-energy state outside that family. It is not an alternative notation for \(J\).

The finite-size width within \(\mathcal G\) is a separate quantity:

\[
\delta_{\rm fs}=E_{\rm top\ of\ \mathcal G}-E_{\rm bottom\ of\ \mathcal
G}.
\]

Both \(\Delta_{\rm topo}\) and \(\delta_{\rm fs}\) have units of joules. They will be quoted as \(\Delta_{\rm topo}/h\) and \(\delta_{\rm fs}/h\), respectively, in hertz.

A cluster leakage gap \(\Lambda\), an optical transition energy, and a bare nearest-neighbor coupling \(J\) are not equivalent to \(\Delta_{\rm topo}\). Instead, these quantities constrain the derivation of the effective Hamiltonian.

The gap of that effective Hamiltonian can be obtained only through diagonalization, a controlled analytic solution, or defensible many-body numerical calculations. Exactly solvable commuting-projector string-net models demonstrate that a local Hamiltonian can exhibit topological order [R018]. However, the overall energy scale of such an abstract model is chosen freely.

A physical crystal does not automatically inherit that normalization.

A defect spin is a physical degree of freedom. A cluster doublet, meaning a selected pair of low-energy cluster states, is an encoded local degree of freedom.

A circuit that prepares a string-net wavefunction constitutes digital emulation unless the undriven hardware Hamiltonian already realizes the corresponding phase. The quantity \(\Delta_{\rm topo}\) is a property of the many-body Hamiltonian and its spectrum. Realizing a logical qubit additionally requires controlled initialization, operations, and readout within the ground-state family.

A measurement of a two-spin avoided crossing does not, by itself, establish any of those three logical-qubit capabilities.

The distinction between \(\delta_{\rm fs}\) and \(\Delta_{\rm topo}\) is essential. If it is omitted, a small splitting within the ground-state family may be misidentified as a small excitation gap. A small \(\delta_{\rm fs}\) is desirable, whereas a small \(\Delta_{\rm topo}\) is undesirable.

## Perturbative suppression and uncertainty propagation

Write the microscopic Hamiltonian as

\[
H=H_0+V,
\]

where \(H_0\) separates a retained cluster subspace from leakage states by an energy \(\Lambda\), and \(V\) contains weaker intercluster couplings with characteristic local strength \(J\). The retained subspace is the set of low-energy states used to define the effective model, while leakage states are states outside that subspace. The dimensionless ratio

\[
\epsilon=\frac{J}{\Lambda}
\]

is the perturbative expansion parameter. Each additional power of \(\epsilon\) suppresses a higher-order contribution.

For an interaction that first appears at perturbative order \(n\), dimensional analysis gives

\[
K_n=c_n\frac{J^n}{\Lambda^{n-1}}
=c_nJ\epsilon^{n-1},
\]

where \(c_n\) is a dimensionless coefficient determined by the actual interaction graph, matrix elements, energy denominators, and interference among virtual paths. A virtual path is a sequence of intermediate transitions through states outside the retained low-energy subspace. Perturbative gadgets can generate higher-body interactions from two-body couplings, but the intended terms and the associated errors must be bounded together [R209]. [Theory] The scaling law is a bookkeeping relation; neither \(n\) nor \(c_n\) can be selected retrospectively to obtain a desired result.

Suppose that the first omitted contribution is approximately

\[
R_{n+1}=c_{n+1}J\epsilon^n.
\]

Then

\[
\frac{|R_{n+1}|}{|K_n|}
\approx \left|\frac{c_{n+1}}{c_n}\right|\epsilon.
\]

A small \(\epsilon\) improves perturbative control but reduces \(K_n\). A large \(\epsilon\) increases the nominal target term while weakening the validity of the expansion. The choice of \(\epsilon\) is therefore an optimization problem. A value such as \(\epsilon=0.9\) cannot be assumed to lie in a controlled perturbative regime without an explicit remainder analysis.

Variations in a microscopic bond produce variations in the effective coefficient \(K\). For \(K=cJ^n\Lambda^{1-n}\), logarithmic differentiation gives

\[
\frac{\delta K}{K}
=n\frac{\delta J}{J}-(n-1)\frac{\delta\Lambda}{\Lambda}+\frac{\delta
c}{c}.
\]

A spatially common drift in \(J\) is amplified by the factor \(n\). By contrast, if \(n\) independent bond factors each have the same small fractional standard deviation \(s\), the product has fractional standard deviation approximately \(\sqrt n\,s\) to leading order.

The resulting distribution of \(K\) therefore depends on the correlations among microscopic variations. A single standard deviation for implantation position does not determine that distribution.

Fourth-order generation is consequently not an unqualified improvement. Relative to \(J\), it introduces a suppression of order \(\epsilon^3\), requires adequate perturbative control, and can amplify the effects of bond variation.

## Thermal, disorder, decoherence, and finite-size scales

**Temperature.** Thermal excitation is controlled by the energy scale \(k_BT\). In a dilute, noninteracting estimate, the occupation of an excitation with energy \(\Delta_{\rm topo}\) contains the Boltzmann factor

\[
p_1\sim e^{-\Delta_{\rm topo}/k_BT}.
\]

[Theory] This expression captures thermal activation but does not include diffusion, entropy, boundaries, or interactions among anyons. Anyons are quasiparticle excitations with topological exchange and fusion properties. Reviews of finite-temperature quantum memories emphasize that a nonzero gap alone does not make a two-dimensional memory self-correcting [R169]. If there are \(N\) approximately independent locations at which an excitation can occur, the crude expected number of excitations is \(Np_1\). Requiring this expected count to remain below a target \(p_\star\) gives

\[
\frac{\Delta_{\rm topo}}{k_BT}\gtrsim
\ln\!\left(\frac{N}{p_\star}\right).
\]

This system-size-dependent condition is more restrictive than the inequality \(\Delta_{\rm topo}>k_BT\) alone.

**Disorder.** Define \(\sigma_J\) as the root-mean-square energy variation of the relevant projected local terms after static calibration. Root-mean-square variation characterizes the typical magnitude of fluctuations around a reference value.

This definition is important because raw microscopic coupling variation can partially renormalize \(K\), generate random effective fields at lower perturbative order, or mix the retained and leakage subspaces.

The relevant local comparison is

\[
\sigma_J\ll\Delta_{\rm topo}.
\]

A total operator norm that increases with the number of sites is not the appropriate local comparison scale. An RMS value is also insufficient when the underlying distributions have long tails or spatial correlations.

[Theory] Stability theorems establish persistence of spectral bands for certain topologically ordered commuting-projector Hamiltonians under sufficiently weak, bounded, short-range local perturbations [R142]. These theorems do not yield a universal percentage tolerance for a proposed defect device.

**Decoherence broadening.** Define the effective decoherence rate as

\[
\Gamma=\frac{1}{T_{2,\rm eff}},
\]

where \(T_{2,\rm eff}\) is the decay time, in seconds, of the projected degree of freedom under the specified control sequence. The associated energy scale is \(\hbar\Gamma\), where \(\hbar=h/(2\pi)\). In ordinary frequency units,

\[
\frac{\hbar\Gamma}{h}=\frac{1}{2\pi T_{2,\rm eff}}.
\]

This convention is distinct from a spectroscopic full width at half maximum, which may differ by a numerical factor. In addition, a single scalar \(T_2\) cannot characterize leakage, non-Markovian noise, or correlated errors. The condition \(\hbar\Gamma\ll\Delta_{\rm topo}\) is necessary to resolve coherent many-body dynamics, but it is not sufficient for fault tolerance.

**Finite size.** In a gapped local topological phase, virtual processes that wind around the sample can split the nominal ground-state family. A common asymptotic form is

\[
\delta_{\rm fs}\sim A\Delta_{\rm topo}e^{-L/\xi},
\]

where \(L\) is the shortest noncontractible linear size, \(\xi\) is a correlation length expressed in the same units, and \(A\) is dimensionless. A noncontractible path is one that cannot be continuously shrunk to a point within the sample geometry. [Theory] Stability results support exponentially narrow low-energy bands under appropriate weak local perturbations [R142], but the prefactor and the regime in which the asymptotic expression is useful depend on the model. Exactly solvable commuting-projector points can have zero splitting, whereas generic perturbations restore a nonzero splitting.

The condition \(\Delta_{\rm topo}>k_BT\) alone omits entropy, system size, local disorder, linewidth, and splitting within the ground-state family. Any one of these effects can eliminate the remaining scale margin.

## Combined scale-ordering criterion

A compact screening criterion is

\[
\boxed{
\Delta_{\rm topo}\gg
k_BT,\quad \sigma_J,\quad \hbar\Gamma,\quad \delta_{\rm fs}
}
\]

subject to two additional requirements:

- Unwanted projected terms and perturbative remainders must also be locally much smaller than \(\Delta_{\rm topo}\).

- Thermal performance must be evaluated using \(\Delta_{\rm topo}/k_BT\gtrsim\ln(N/p_\star)\), rather than only the comparison with one.

For a numerical screening test, define

\[
\mathcal M=\frac{\Delta_{\rm topo}}
{\max(k_BT,\sigma_J,\hbar\Gamma,\delta_{\rm fs})}.
\]

A value \(\mathcal M<1\) fails even the basic scale-ordering test. A value \(\mathcal M>1\) passes only that test. The condition represented by \(\gg\) requires a quantitative margin determined by the target error probability and system size; it is stronger than a simple greater-than relation.

Accordingly, a ratio of 4.86 does not by itself constitute a sufficient gap margin. It must still be compared with \(\ln(N/p_\star)\).

## Three illustrative scale budgets

The following calculation evaluates sensitivity to assumed parameters; it is not a prediction. Every uncited number in the input table is explicitly treated as an assumption.

[Proposal; Assumptions] The calculation uses the fourth-order illustrative coefficient \(K=J^4/(16\Lambda^3)\), motivated by the specified honeycomb limit [R017]. It sets \(\Delta_{\rm topo}=2K\), adopts the finite-size prefactor \(A=1\), and assumes that the tabulated quantities apply after projection:

| Input | Optimistic | Base | Pessimistic |
|---|---:|---:|---:|
| cluster separation \(\Lambda/h\) | \(1000\ \mathrm{MHz}\) | \(250\ \mathrm{MHz}\) | \(50\ \mathrm{MHz}\) |
| weak coupling \(J/h\) | \(300\ \mathrm{MHz}\) | \(50\ \mathrm{MHz}\) | \(5\ \mathrm{MHz}\) |
| expansion ratio \(\epsilon=J/\Lambda\) | \(0.30\) | \(0.20\) | \(0.10\) |
| physical temperature \(T\) | \(0.010\ \mathrm{mK}\) | \(1.0\ \mathrm{mK}\) | \(100\ \mathrm{mK}\) |
| residual effective disorder \(\sigma_J/h\) | \(0.100\ \mathrm{MHz}\) | \(0.025\ \mathrm{MHz}\) | \(0.001\ \mathrm{MHz}\) |
| projected \(T_{2,\rm eff}\) | \(1\ \mathrm{ms}\) | \(0.10\ \mathrm{ms}\) | \(0.010\ \mathrm{ms}\) |
| linear size \(L/\xi\) | \(10\) | \(5\) | \(2\) |

The optimistic temperature is \(10\ \mathrm{\mu K}\). This value is an aggressive assumed spin temperature, not a cited capability of a dense defect array.

The other temperatures, couplings, disorder values, and projected coherence times are also scenario inputs. Experiments have separately demonstrated coherent coupling between individual diamond defect spins [R080] and long electronic-spin coherence under specialized material and decoupling conditions [R211]. Those results do not establish that all parameters in this table can be achieved simultaneously.

Using ordinary frequency units eliminates repeated factors of \(h\):

\[
\frac{K}{h}=\frac{1}{16}
\frac{(J/h)^4}{(\Lambda/h)^3},\qquad
\frac{\Delta_{\rm topo}}{h}=2\frac{K}{h}.
\]

For the base scenario,

\[
\frac{K}{h}
=\frac{1}{16}\frac{(50\ \mathrm{MHz})^4}{(250\ \mathrm{MHz})^3}
=0.025\ \mathrm{MHz},
\]

so \(\Delta_{\rm topo}/h=0.050\ \mathrm{MHz}=50\ \mathrm{kHz}\). The units reduce according to \(\mathrm{MHz}^4/\mathrm{MHz}^3=\mathrm{MHz}\).

Applying the same calculation to all three scenarios gives:

| Derived quantity | Optimistic | Base | Pessimistic |
|---|---:|---:|---:|
| \(K/h\) | \(0.50625\ \mathrm{MHz}\) | \(0.025\ \mathrm{MHz}\) | \(0.0003125\ \mathrm{MHz}\) |
| \(\Delta_{\rm topo}/h\) | \(1.0125\ \mathrm{MHz}\) | \(0.050\ \mathrm{MHz}\) | \(0.000625\ \mathrm{MHz}\) |
| \(k_BT/h\) | \(0.20837\ \mathrm{MHz}\) | \(20.8366\ \mathrm{MHz}\) | \(2083.66\ \mathrm{MHz}\) |
| \(\sigma_J/h\) | \(0.100\ \mathrm{MHz}\) | \(0.025\ \mathrm{MHz}\) | \(0.001\ \mathrm{MHz}\) |
| \(\hbar\Gamma/h\) | \(0.000159\ \mathrm{MHz}\) | \(0.001592\ \mathrm{MHz}\) | \(0.015915\ \mathrm{MHz}\) |
| assumed \(\delta_{\rm fs}/h\) | \(0.0000460\ \mathrm{MHz}\) | \(0.000337\ \mathrm{MHz}\) | \(0.0000846\ \mathrm{MHz}\) |
| scale margin \(\mathcal M\) | \(4.86\) | \(2.40\times10^{-3}\) | \(3.00\times10^{-7}\) |

All displayed digits are arithmetic outputs rather than statements of measurement precision. The temperature conversion uses the SI constants [R196].

The decoherence calculation uses \(1/(2\pi T_{2,\rm eff})\). The finite-size splitting uses the explicit assumption \(A=1\) together with the listed values of \(L/\xi\).

**Assessment.** [Proposal] The base and pessimistic scenarios fail because \(k_BT\) exceeds the illustrative gap. In the pessimistic scenario, both decoherence broadening and effective disorder also exceed the gap. The optimistic scenario passes only the weakest scale-ordering test, with temperature determining \(\mathcal M=4.86\). For an illustrative array with \(N=1000\) possible excitation locations and an assumed target \(p_\star=0.01\), the dilute estimate requires

\[
\frac{\Delta_{\rm topo}}{k_BT}\gtrsim
\ln(1000/0.01)=11.51,
\]

whereas the optimistic ratio is \(4.86\). The optimistic scenario therefore also fails this stated thermal target.

These conclusions follow only from the displayed illustrative formula, the exact unit conversion, and the labeled assumptions. They do not imply that a real defect architecture has any of the three calculated gaps.

The calculation also identifies a design tradeoff. Reducing \(J/\Lambda\) from \(0.30\) to \(0.10\) improves the nominal control of fourth-order perturbation theory. However, together with the assumed absolute scales, this reduction decreases the illustrative gap from megahertz to hundreds of hertz. A feasibility proposal must therefore optimize perturbative validity and gap magnitude simultaneously and must include the leading unwanted terms.

## Current experimental status

[Experiment] Coherent coupling between individual defect spins and long coherence have each been demonstrated in diamond [R080]; [R211]. These are important components of a possible architecture. They do not constitute measurements of a bulk topological gap, a correlation length, or a topological ground-state family.

For the defect-cluster architecture considered here, the gap analysis currently lacks four experimentally connected elements:

- A fabricated lattice with the required interaction graph.

- Spectroscopy that validates the projected many-body Hamiltonian and characterizes its unwanted terms.

- Finite-size scaling that distinguishes ground-family splitting from the excitation gap.

- Evidence that the fitted phase has the claimed topological data, rather than only a similar low-energy spectrum.

Consequently, no supported material value of \(\Delta_{\rm topo}\) is available for insertion into the analysis. [Proposal] A defensible experimental and computational program would first measure small-cluster spectra and parameter distributions, fit a microscopic Hamiltonian without omitting unfavorable terms, compute the resulting phase diagram and gap with uncertainty propagation, and then compare progressively larger patches. Any reported gap should specify the host, defect species, charge state, geometry, field, strain, temperature, boundary conditions, and model-fitting procedure.

Temperature must also be characterized carefully. The refrigerator temperature, phonon-bath temperature, and effective temperature of driven spins need not be equal.

Similarly, a single-defect echo \(T_2\) measured under a pulse sequence is not necessarily the \(T_{2,\rm eff}\) of a continuously interacting cluster lattice. Combining the best coupling measured in one device, the best coherence measured in another, and the lowest cryostat temperature obtained in a third does not produce a physically consistent scale budget.

## Common analytical errors

- **Identifying the largest energy scale as the gap.** Suppose that the zero-field splitting is a gigahertz while the fourth-order topological term is a kilohertz. The largest energy scale may safely separate some microscopic levels, but it does not specify the gap of the phase. The relevant gap is spectral and phase-specific.

- **Using the normalized gap of the target Hamiltonian as a material energy.** Writing a string-net Hamiltonian with unit coefficients establishes a normalization convention. It does not demonstrate that a defect implementation supplies one joule, one kelvin, or one megahertz [R018]. Without an explicit conversion, the calculation incorrectly assigns the abstract model’s unit normalization to the crystal.

- **Ignoring lower-order unwanted terms.** A desired fourth-order plaquette term is ineffective if a symmetry-breaking field remains at first or second order and dominates it. Local norms of projected remainder terms must be compared with \(\Delta_{\rm topo}\).

- **Treating RMS disorder as a complete disorder model.** Rare defective bonds can nucleate low-energy excitations. Correlated drift and heavy-tailed distributions differ from independent Gaussian variation. An RMS value describes a typical bond but does not characterize the most unfavorable bond present in the lattice.

- **Equating a nonzero gap with a passive memory.** Thermally created anyons can diffuse and implement a logical operator without paying an energy proportional to the distance traveled. A two-dimensional topological phase can remain stable while providing poor self-correcting memory at nonzero temperature [R169].

- **Confusing ground-state splitting with the bulk gap.** A small \(\delta_{\rm fs}\) is desirable, whereas a small \(\Delta_{\rm topo}\) is undesirable. A finite patch may exhibit both quantities. If spectroscopy interchanges their labels, a narrow ground-state family can be misidentified as a small bulk gap, leading to an incorrect negative or positive assessment of the architecture.

- **Using \(T_2\) as an energy gap.** The quantity \(T_2\) determines a linewidth scale only after a convention and noise model have been specified. By itself, it provides no evidence of topological order.

- **Interpreting digital evidence as an analog gap.** A programmable device can prepare and manipulate states with anyonic fusion rules even when its native Hamiltonian is an ordinary qubit Hamiltonian. An analog-material claim requires the low-energy spectrum and phase of the material itself to realize the topological order without continuous synthesis by a gate sequence.

- **Extrapolating a perturbation series beyond its controlled regime.** Increasing \(J/\Lambda\) raises both the target coefficient and every omitted perturbative order. The remainder must be calculated or bounded.

- **Reporting only one favorable parameter point.** A phase must occupy a finite region of parameter space. Because fabrication produces a distribution of parameters, uncertainty propagation and finite-size scaling are necessary components of the claim.

## Verification of definitions and estimates

- **What defines \(\Delta_{\rm topo}\)?**

  The topological gap \(\Delta_{\rm topo}\) is the energy difference between the highest-energy state in the finite-size ground-state family and the first state outside that family. The finite-size ground-state family is the set of low-energy states associated with the ground-state sector of a finite system. This definition applies only after specifying the Hamiltonian, which determines the system’s energies, and the boundary condition.

- **Show that if \(K=J^4/(16\Lambda^3)\) and \(J/\Lambda=0.1\), then \(K=J/16{,}000\).**

  Here, \(J\) is the bare coupling, \(\Lambda\) is the energy scale appearing in the perturbative denominator, and \(K\) is the resulting effective coupling. Direct substitution gives
  \[
  K=\frac{J}{16}\left(\frac{J}{\Lambda}\right)^3
  =\frac{J}{16}\times10^{-3}
  =\frac{J}{16{,}000}.
  \]
  Projection, meaning restriction to a selected low-energy subspace, and the perturbative order \(n\) can reduce an effective coefficient to
  \[
  c_nJ(J/\Lambda)^{n-1},
  \]
  where \(c_n\) is the coefficient at order \(n\). The spectral gap, defined as an energy difference between specified spectral sectors, also includes a model-dependent factor. Consequently, the bare coupling \(J\) is not itself the gap.

- **Show that \(1\ \mathrm{mK}\) is \(20.8366\ \mathrm{MHz}\) in these units.**

  Thermal energy is converted to frequency using \(k_BT/h\), where \(k_B\) is the Boltzmann constant, \(T\) is the temperature, and \(h\) is the Planck constant. At \(T=1\ \mathrm{mK}\),
  \[
  k_BT/h=20.8366\ \mathrm{MHz},
  \]
  using exact SI constants [R196].

- **Show that if \(T_{2,\rm eff}=100\ \mathrm{\mu s}\) and \(\Gamma=1/T_{2,\rm eff}\), then \(\hbar\Gamma/h=1.59\ \mathrm{kHz}\).**

  The effective coherence time is \(T_{2,\rm eff}\), and \(\Gamma\) is the corresponding decoherence rate under the stated assumption \(\Gamma=1/T_{2,\rm eff}\). Since \(\hbar/h=1/(2\pi)\),
  \[
  \frac{\hbar\Gamma}{h}
  =\frac{1}{2\pi T_{2,\rm eff}}
  =1.59\ \mathrm{kHz}.
  \]

- **What is omitted if the only requirement is \(\Delta_{\rm topo}>k_BT\)?**

  This condition does not account for entropy or system size. In a dilute-excitation estimate, the required ratio is approximately
  \[
  \Delta_{\rm topo}/k_BT\gtrsim\ln(N/p_\star),
  \]
  where \(N\) is the relevant system-size measure and \(p_\star\) is the stated target probability. Disorder, decoherence, finite-size splitting, and residual terms left by projection must also be considered.

- **What evidence is required to convert a budgeted gap into a gap claim?**

  The effective Hamiltonian must first be derived or fitted with quantified errors. Controlled analytic or numerical spectroscopy must then determine its spectrum, and finite-size scaling must establish how the result changes with system size. Experimental spectroscopy provides stronger evidence.

A coupling is a coefficient in a Hamiltonian, whereas a gap is an energy difference in the Hamiltonian’s spectrum.

The screening condition is
\[
\Delta_{\rm topo}\gg k_BT,\sigma_J,\hbar\Gamma,\delta_{\rm fs},
\]
where \(k_BT\) is the thermal energy scale, \(\sigma_J\) is the disorder scale in the coupling, \(\hbar\Gamma\) is the decoherence energy scale, and \(\delta_{\rm fs}\) is the finite-size splitting. The symbol \(\gg\) requires \(\Delta_{\rm topo}\) to be substantially larger than each competing scale. Small projected remainders and the logarithmic thermal penalty must also be included. The three quantitative budgets in this chapter represent scenarios only.

There is no measured material \(\Delta_{\rm topo}\) to put in the last cell.

## Sources

- [R017] Alexei Kitaev, “Anyons in an exactly solved model and
beyond,” Annals of Physics 321, 2–111 (2006).
DOI: [10.1016/j.aop.2005.10.005](https://doi.org/10.1016/j.aop.2005.10.005);
arXiv: [cond-mat/0506438](https://arxiv.org/abs/cond-mat/0506438).

- [R018] Michael A. Levin and Xiao-Gang Wen, “String-net condensation:
A physical mechanism for topological phases,” Physical Review B
71, 045110 (2005). DOI: [10.1103/PhysRevB.71.045110](https://doi.org/10.1103/PhysRevB.71.045110);
arXiv: [cond-mat/0404617](https://arxiv.org/abs/cond-mat/0404617).

- [R209] Roberto Oliveira and Barbara M. Terhal, “The complexity of
quantum spin systems on a two-dimensional square lattice,” Quantum
Information & Computation 8, 900–924 (2008).
arXiv: [quant-ph/0504050](https://arxiv.org/abs/quant-ph/0504050).

- [R142] Sergey Bravyi, Matthew B. Hastings, and Spyridon Michalakis,
“Topological quantum order: Stability under local perturbations,”
Journal of Mathematical Physics 51, 093512
(2010). DOI: [10.1063/1.3490195](https://doi.org/10.1063/1.3490195); arXiv:
[1001.0344](https://arxiv.org/abs/1001.0344).

- [R169] Benjamin J. Brown, Daniel Loss, Jiannis K. Pachos, Chris N.
Self, and James R. Wootton, “Quantum memories at finite temperature,”
Reviews of Modern Physics 88, 045005 (2016).
DOI: [10.1103/RevModPhys.88.045005](https://doi.org/10.1103/RevModPhys.88.045005);
arXiv: [1411.6643](https://arxiv.org/abs/1411.6643).

- [R196] Bureau International des Poids et Mesures, The
International System of Units (SI Brochure), 9th ed., updated 2026.
DOI: [10.59161/AUEZ1291](https://doi.org/10.59161/AUEZ1291);
[stable publication page](https://www.bipm.org/en/publications/si-brochure).

- [R080] F. Dolde et al., “Room-temperature entanglement
between single defect spins in diamond,” Nature Physics
9, 139–143 (2013). DOI: [10.1038/nphys2545](https://doi.org/10.1038/nphys2545).

- [R211] N. Bar-Gill, L. M. Pham, A. Jarmola, D. Budker, and R. L.
Walsworth, “Solid-state electronic spin coherence time approaching one
second,” Nature Communications 4, 1743 (2013).
DOI: [10.1038/ncomms2771](https://doi.org/10.1038/ncomms2771).

---
