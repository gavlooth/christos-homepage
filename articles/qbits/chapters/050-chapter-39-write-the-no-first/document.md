# Chapter 39 — Define rejection criteria before experimentation

A project intended to produce a stable bit in a cooled crystal may require years of experimental work. Before committing resources such as cryogenic infrastructure, the project should specify the numerical result that would invalidate its central claim.

This threshold should not be selected to reflect the expected or desired result. It should identify the outcome that would end the specific claim if the data fall on the unfavorable side. It must be recorded before experimental complexity and interpretive flexibility increase.

Such a predeclared rejection threshold is a kill criterion. Unlike a general list of design objectives, a kill criterion specifies a measurable condition under which the project will change direction or terminate a claim.

For example, a design target may state that a larger energy gap is desirable. A kill criterion instead states that, if the experimentally supported upper bound on the activation gap remains below a specified value after measurement X, the project will stop pursuing a memory intended to remain stable at temperature \(T\).

All relevant constraints apply simultaneously.

A low cluster yield reduces the probability of fabricating a complete patch. A weak coupling reduces the energy gap.

A smaller gap increases the preparation time. A longer preparation time increases exposure to decoherence.

Project viability therefore depends on the combined effect of all factors rather than on the most favorable individual factor.

This procedure is not an expression of pessimism. It is a commitment to a quantitative decision rule before the result is known.

## Components of a useful rejection criterion

A useful kill criterion has five components:

- a specific claim that remains identifiable after the measurement;

- a metric with defined units and a specified measurement or calculation protocol;

- a threshold derived from that claim;

- an uncertainty rule established before the result is observed;

- a predetermined action: continue, redesign, pivot, or stop.

The fourth component is preregistration, meaning that the decision rule is fixed before the data are examined. The threshold must not be moved after the result is known.

There is no universal criterion such as \(J/\Gamma>10\), where \(J\) is an interaction energy and \(\Gamma\) is a decay rate expressed as an angular-frequency scale. The required ratio depends on the number of interaction times consumed by the protocol and the fraction of the total error budget allocated to decoherence.

Similarly, the condition \(\Delta>k_{\mathrm B}T\), where \(\Delta\) is an energy gap, \(k_{\mathrm B}\) is Boltzmann’s constant, and \(T\) is temperature, is not sufficient for a thousand-site sample when the permitted probability of even one thermally generated harmful excitation is very small. The criterion must incorporate both the physical model and the operational task.

Without a predeclared action, a failed threshold can be treated as a subject for further discussion. With a predeclared action, it produces a decision.

## Example decision table

Consider a deliberately hypothetical target rather than a claim about an existing material. [Proposal] The proposal assumes that one thousand residual cluster degrees of freedom form a two-dimensional analog topological memory with \(N_s=1000\) required sites and \(N_b=1500\) required bonds.

The effective interaction frequency is estimated as \(\nu_{\mathrm{eff}}=J_{\mathrm{eff}}/h=20\,\mathrm{MHz}\), with a credible interval of \(10\)–\(40\,\mathrm{MHz}\). A credible interval is an interval assigned a specified posterior probability under the adopted statistical model. The measured dephasing time under the intended controls is \(T_2=100\,\mu\mathrm{s}\), with an interval of \(50\)–\(200\,\mu\mathrm{s}\).

Here \(J_{\mathrm{eff}}\) is an energy in joules (J), \(h\) is Planck’s constant in J·s, and \(T_2\) is in seconds.

Before the measurements are obtained, the project defines four possible decisions:

- Continue: the conservative credible bound satisfies the threshold.

- Resolve: the credible intervals cross the threshold, so the measurement or larger simulation that controls the decision must be obtained.

- Redesign: the current implementation fails, but a specified modification could change the controlling equation.

- Stop/pivot: even the optimistic credible bound fails. The stated target must no longer be claimed; a different target, such as active digital simulation, constitutes a new project.

The numerical values below are invented to demonstrate the calculations. In an actual project, they must be replaced by the existing parameter ledger and model calculations. The table illustrates a decision procedure and does not evaluate a real crystal.

Gate |
Hypothetical estimate, including
uncertainty |
Preregistered threshold |
Decision |
Required action |
|

Coherent interaction \(R_J=J_{\mathrm{eff}}/(\hbar\Gamma)\) |
\(1.26\times10^4\) \([3.1\times10^3,5.0\times10^4]\) |
\(R_J\ge2.0\times10^4\) |
Resolve |
Measure \(T_2\) under the complete
pulse schedule; do not scale the array yet |
|

Thermal activation \(x_T=E_{\mathrm{act}}/(k_{\mathrm
B}T)\) |
\(0.0048\) \([0.0010,0.015]\) at \(10\,\mathrm{mK}\) |
\(x_T\ge\ln(N_s/10^{-3})=13.8\) |
Stop/pivot |
Abandon passive equilibrium memory for this scale unless the gap or
temperature changes by orders of magnitude |
|

Coupling-disorder quantile \(q_J/J\) |
\(0.08\)
\([0.04,0.15]\) |
model phase boundary \(\eta_c=0.05\) \([0.03,0.08]\) |
Resolve |
Simulate measured disorder tails and missing bonds; RMS alone is
insufficient |
|

Placement spread for direct dipolar bonds |
\(\sigma_r=1.0\,\mathrm{nm}\) \([0.5,2.0]\) at \(r=10\,\mathrm{nm}\) |
\(\sigma_r\le0.17\,\mathrm{nm}\) for 5%
coupling spread |
Redesign |
Add tunability or change coupling mechanism; direct fixed dipolar
layout fails this tolerance |
|

Unhandled leakage per control location \(p_u\) |
\(2\times10^{-4}\) \([5\times10^{-5},8\times10^{-4}]\) |
\(p_u\le10^{-6}\) for 1000 locations and
\(10^{-3}\) budget |
Redesign |
Demonstrate detection/reset before accepting more locations |
|

Preparation window |
\(t_{\mathrm{ad}}=100\,\mu\mathrm{s}\) \([30,500]\) |
\(t_{\mathrm{ad}}\le0.01T_2=0.5\)–\(2\,\mu\mathrm{s}\) |
Stop/pivot |
Change preparation path or use dissipative/active preparation;
present ramp has no window |
|

Site-only patch yield \(Y_s=y_s^{N_s}\) |
\(0.0067\) \([4.3\times10^{-5},0.368]\) for \(y_s=0.995\,[0.990,0.999]\) |
\(Y_s\ge0.10\), before bond losses |
Resolve |
Measure correlated yield and test repairable layouts; monolithic
scale-up is not justified |
|

Logical scaling, \(p_L(d+2)/p_L(d)\) |
\(0.80\)
\([0.60,1.10]\) |
upper credible bound \(<1\) at fixed physical conditions |
Resolve |
Add distances and blind decoder analysis; do not extrapolate an
improving lifetime yet |
|

Two rows illustrate how these decisions are obtained. Define \(\Gamma=1/T_2\), in s\(^{-1}\), as the dephasing rate, and define the reduced Planck constant as \(\hbar=h/(2\pi)\). Then

\[
R_J=\frac{J_{\mathrm{eff}}}{\hbar\Gamma}
=2\pi\nu_{\mathrm{eff}}T_2
=2\pi(20\times10^6\,\mathrm{s}^{-1})(100\times10^{-6}\,\mathrm{s})
\approx1.26\times10^4.
\]

The units cancel, so \(R_J\) is dimensionless. If the protocol consumes \(\alpha=20\) inverse-interaction times and is assigned a decoherence budget \(\epsilon_J=10^{-3}\), the exposure estimate \(\Gamma t\approx\alpha/R_J\) requires \(R_J\ge\alpha/\epsilon_J=2.0\times10^4\).

The central estimate fails this threshold, but the credible interval crosses it. The predetermined action is therefore to obtain a more decisive measurement rather than to continue or stop on the basis of the central value alone.

For the thermal row, suppose that a small-patch calculation gives an activation energy \(E_{\mathrm{act}}/h=c_{\mathrm{act}}\nu_{\mathrm{eff}}\), with \(c_{\mathrm{act}}=0.05\,[0.02,0.08]\). The central activation frequency is \(1\,\mathrm{MHz}\).

At \(T=10\,\mathrm{mK}\), \(k_{\mathrm B}T/h\approx208\,\mathrm{MHz}\), so \(x_T\approx1/208=0.0048\). Even the combination of optimistic endpoints gives only \(3.2/208\approx0.015\).

The optimistic estimate is nearly three orders of magnitude below 13.8. More precise parameter fitting cannot make the stated passive-memory target viable.

This table evaluates an analog memory intended to remain stable without active intervention. A digital simulator may operate with \(E_{\mathrm{act}}<k_{\mathrm B}T\) because its effective Hamiltonian is implemented through calibrated gates and active error correction rather than through thermal equilibrium.

Passing a digital-circuit benchmark does not satisfy the analog thermal criterion. Conversely, failure as a passive memory does not establish that the hardware is useless as a platform for physical qubits, sensors, or emulation.

The same hardware can therefore support two distinct claims with different rejection criteria.

## Coherent interaction and decoherence criterion

Define \(J_{\mathrm{eff}}\) as the coefficient, in J, of the effective Hamiltonian term that produces the required low-energy dynamics. It is not the bare intra-cluster splitting or the largest microscopic coupling. Define \(\Gamma\) as the measured decay rate, in s\(^{-1}\), at the operating point and under the control schedule relevant to that term. The dimensionless coherent interaction ratio is

\[
R_J=\frac{J_{\mathrm{eff}}}{\hbar\Gamma}.
\]

If a protocol requires a time

\[
t_{\mathrm{req}}=\alpha\frac{\hbar}{J_{\mathrm{eff}}},
\]

where \(\alpha\) is a dimensionless path or circuit cost obtained from simulation, then the first-order Markovian exposure is \(\epsilon_{\mathrm{dec}}\approx\Gamma t_{\mathrm{req}}=\alpha/R_J\). A Markovian model assumes that the relevant noise has negligible memory on the timescale of the dynamics. Allocating at most \(\epsilon_J\) to this decoherence channel gives the falsifiable criterion

\[
\boxed{R_J\ge\frac{\alpha}{\epsilon_J}}.
\]

A bare criterion \(J_{\mathrm{eff}}>\hbar\Gamma\) is weak because it permits only order-one dynamics before decay. An isolated-defect measurement of \(T_2\) also cannot be substituted automatically into this criterion. Clustering, continuous drives, optical cycling, and correlated noise can change \(\Gamma\).

The kill rule is to stop the specified protocol if the credible upper bound on \(R_J\) remains below the credible lower bound on \(\alpha/\epsilon_J\) after the effective coupling and driven coherence have been measured in the same device. If a different protocol reduces \(\alpha\), that modification is a redesign and requires a new criterion.

Using an isolated-spin echo value compares \(J_{\mathrm{eff}}\) with a decay rate measured under different physical conditions. The resulting inequality does not constitute a valid test of the proposed device.

## Thermal-seed probability criterion

Define \(E_{\mathrm{act}}\), in J, as the lowest energy barrier for a locally accessible process that creates a harmful excitation. It need not equal the clean spectral gap \(\Delta_{\mathrm{topo}}\), which is the energy difference between the relevant low-energy sector and the next excited state in an ideal disorder-free model. Boundaries, weak bonds, disorder, and multistep processes can reduce \(E_{\mathrm{act}}\). For \(N_c\) approximately independent opportunities to create an excitation, a dilute-equilibrium estimate gives

\[
P_{\mathrm{seed}}\lesssim N_c
g\exp\!\left(-\frac{E_{\mathrm{act}}}{k_{\mathrm B}T}\right),
\]

where \(g\) is a dimensionless factor that counts relevant species or channels, and \(P_{\mathrm{seed}}\) is the probability of at least one harmful seed. Requiring \(P_{\mathrm{seed}}\le\epsilon_T\) yields

\[
\boxed{\frac{E_{\mathrm{act}}}{k_{\mathrm B}T}\ge
\ln\!\left(\frac{N_c g}{\epsilon_T}\right)}.
\]

The exponent is dimensionless because its units are J divided by \((\mathrm{J/K})\mathrm K\). Finite-temperature topological memories require a kinetic analysis in addition to this equilibrium-occupancy estimate. Under the assumptions of the no-go theorem, a constant energy barrier in a two-dimensional local stabilizer Hamiltonian prevents passive self-correction [R168]; [R169]. [Theory]

For a passive equilibrium memory, the kill rule is to stop if the optimistic disorder-renormalized estimate of \(E_{\mathrm{act}}\), the lowest credible temperature, and the smallest useful \(N_c\) still fail the logarithmic bound.

If active excitation removal is proposed, this criterion must be replaced by a measured creation rate, a diffusion model, a syndrome-measurement cadence, and a logical-error target. The resulting system should not continue to be described as passive.

The condition \(\Delta>k_{\mathrm B}T\) is a different and weaker test. The required ratio increases as \(\ln(N_c g/\epsilon_T)\), and excitation diffusion can remain dominant even when the equilibrium occupancy is small.

## Coupling-disorder threshold

Write the realized Hamiltonian as

\[
H=H_{\mathrm{target}}+\delta H,
\qquad
\delta H=\sum_b \delta J_b O_b,
\]

where \(H_{\mathrm{target}}\) is the intended Hamiltonian, \(\delta H\) is the perturbation, \(b\) labels bonds or local terms, \(\delta J_b\) is a coupling error in J, and \(O_b\) is a dimensionless operator. Topological phases can be stable against sufficiently weak local perturbations, but the relevant theorem assumes a gapped target Hamiltonian and bounded local perturbations. It does not convert a root-mean-square (RMS) fabrication error, defined as the square root of the mean squared error, into a universal tolerance [R142]. [Theory]

The appropriate threshold \(\eta_c\) must be obtained from the disordered phase diagram of the candidate model or from a conservative bound on the local gap. At minimum, a simulation should sweep over the measured disorder distribution, including missing terms and spatial correlations, and determine where the gap, a topological diagnostic, or logical scaling fails. The fabrication metric should be a high quantile,

\[
q_J=Q_{1-\alpha/N_b}(|\delta J_b|),
\]

rather than only the standard deviation. Here \(Q_p\) is the \(p\)-quantile, meaning the value below which a fraction \(p\) of the distribution lies; \(N_b\) is the number of required bonds; and \(\alpha\) is the permitted probability that any bond exceeds the quoted value. The factor \(1/N_b\) causes the required control of the distribution tail to become stricter as the system size increases.

The kill rule is to stop monolithic scale-up if even the credible lower tail of \(q_J/J_{\mathrm{eff}}\) exceeds the credible upper model tolerance \(\eta_c\), or if missing or sign-reversed terms place the realized Hamiltonian in a different phase. A static offset that can be calibrated is not automatically harmless. The calibration must be shown to preserve the many-body gap and not introduce additional control noise.

An average coupling error cannot determine whether a large patch contains a single critically weak bond. The relevant quantity is the high quantile; the RMS characterizes a different property of the distribution.

## Position-to-coupling error propagation

Positioning errors are significant through a model-dependent transfer function that maps spatial uncertainty to coupling uncertainty. Let \(r\) be the nominal separation and \(\sigma_r\) a small radial uncertainty, both in metres. For a dipolar interaction \(J(r)=C r^{-3}\), differentiation gives

\[
\left|\frac{\sigma_J}{J}\right|\approx
\left|\frac{d\ln J}{dr}\right|\sigma_r
=3\frac{\sigma_r}{r}.
\]

Thus, an allowed fractional coupling spread \(\eta_J\) requires

\[
\boxed{\sigma_r\le\frac{\eta_J r}{3}}.
\]

At \(r=10\,\mathrm{nm}\) and \(\eta_J=0.05\), the required position uncertainty is \(0.17\,\mathrm{nm}\). The fractional error is dimensionless because it is a ratio of lengths. Angular uncertainty must also be included because the dipolar coupling contains an orientation-dependent factor.

For an exchange-like coupling \(J(r)=J_0e^{-r/\lambda}\), where \(\lambda\) is a decay length in metres, the corresponding result is \(\sigma_J/J\approx\sigma_r/\lambda\). The required position tolerance can then be much smaller than a nanometre. Reviews of defect platforms show that defect creation, charge-state control, coherence, and placement have separate yields. Consequently, a nominal beam diameter does not specify the complete position distribution [R074]. [Experiment]

The kill rule is to stop the fixed-coupling layout if the best demonstrated final-position distribution, propagated through the complete angular and radial coupling law, exceeds \(\eta_c\). Tunable couplers, calibration based on spectroscopy, or a less position-sensitive geometry are redesigns; their added noise and wiring costs must also be included.

A beam diameter is not equivalent to \(\sigma_r\). Straggle, diffusion, conversion, charge selection, and registration all contribute to the realized coupling distribution.

## Unhandled leakage criterion

Let \(p_\ell\) be the leakage probability per relevant control or syndrome location. Leakage is population outside the local Hilbert-space subspace used by the computational or effective model. Let \(p_u\le p_\ell\) be the probability that leakage remains undetected and unremoved for sufficient time to propagate. For \(N_{\mathrm{loc}}\) locations in a task, the dilute approximation gives

\[
P_{\mathrm{leak}}\approx N_{\mathrm{loc}}p_u.
\]

Allocating \(\epsilon_\ell\) to unhandled leakage requires

\[
\boxed{p_u\le\frac{\epsilon_\ell}{N_{\mathrm{loc}}}}.
\]

A reset every \(m\) cycles changes \(p_u\), but it can also interrupt the analog Hamiltonian. Surface-code studies show that long-lived leakage produces time-correlated and propagating faults, and that dedicated leakage-reduction circuitry can restore threshold behavior in particular active circuits [R220]. [Theory] [Numerics] This result identifies a method to test; it does not justify assuming the same threshold for clusters.

The kill rule is to stop scaling if the optimistic estimate of the unhandled leakage probability exceeds the task allocation and no compatible detection or reset operation has been demonstrated. Charge-state switching, departure from the cluster doublet, and loss of a constituent must be counted separately before their contributions are combined.

Modeling leakage as a Pauli error ignores the fact that the system has left the modeled local Hilbert space.

## Compatibility of preparation and decoherence times

Let the preparation path be \(H(s)\), where the dimensionless schedule coordinate is \(s\in[0,1]\). Define \(A=\max_s\|\partial_sH\|\), in J, as the maximum norm of the Hamiltonian derivative along the path. Define \(\Delta_{\min}\), in J, as the minimum many-body gap encountered on the actual path. A schematic leading adiabatic estimate is

\[
\epsilon_{\mathrm{ad}}\sim
\left(\frac{\hbar A}{t_p\Delta_{\min}^2}\right)^2,
\]

where \(t_p\) is the preparation time in seconds and \(\epsilon_{\mathrm{ad}}\) is the diabatic error. The combination \(\hbar A/\Delta_{\min}^2\) has units \((\mathrm{J\,s})\mathrm J/\mathrm J^2=\mathrm s\). Rigorous adiabatic bounds also depend on endpoint smoothness, higher derivatives, matrix elements, and system-size scaling [R247]. [Theory] Solving for a specified diabatic-error allocation \(\epsilon_{\mathrm{ad}}^*\) gives the lower bound

\[
t_p\ge t_{\min}=
\frac{\hbar A}{\Delta_{\min}^2\sqrt{\epsilon_{\mathrm{ad}}^*}}.
\]

In the small-error Markovian approximation, decoherence gives an upper bound \(t_p\le t_{\max}\approx\epsilon_{\mathrm{dec}}^*/\Gamma\), where \(\epsilon_{\mathrm{dec}}^*\) is the allocated decoherence error. A viable ramp therefore requires

\[
\boxed{t_{\min}<t_{\max}}.
\]

The kill rule is to stop the adiabatic preparation route if the credible bounds leave no overlap, including the system-size dependence of \(\Delta_{\min}\). A dissipative or measurement-assisted route is a new protocol and must be assigned a mixing or convergence time, a residual excitation density, and separate decoherence and readout budgets.

An arbitrarily slow ramp is not a solution because decreasing diabatic error increases exposure to open-system error. When \(t_{\min}>t_{\max}\), no preparation time satisfies both constraints.

## Full-patch fabrication yield

Let \(y_s\) be the probability that a required site has the correct position, species, charge state, local spectrum, and addressability. Let \(y_b\) be the probability that a required bond lies within tolerance. If these events are independent, the yield of an unrepairable patch is

\[
Y_{\mathrm{patch}}=y_s^{N_s}y_b^{N_b}.
\]

This quantity is dimensionless. At \(y_s=0.995\) and \(N_s=1000\), the favorable site-only result is \(0.995^{1000}\approx0.0067\).

Bond failures can only reduce this yield. The independence assumption is not guaranteed because implantation damage, annealing, strain, and optical collection can produce correlated failures.

Known-loss thresholds for topological codes can be high in specifically designed active codes. For example, the idealized surface-code analysis by Stace and collaborators relates tolerable heralded loss, meaning loss whose location is known, to lattice percolation [R248]. [Theory] [Numerics] That threshold cannot be transferred directly to a string-net Hamiltonian whose interaction graph and Hamiltonian terms disappear when a site is lost. A reroutable design passes only if the defective graph is shown to remain in the target phase and the readout reliably identifies losses.

The kill rule begins by setting an economic or experimental minimum yield \(Y_{\min}=1/N_{\mathrm{attempt,max}}\).

Monolithic fabrication must stop when the credible upper bound on \(Y_{\mathrm{patch}}\) is below \(Y_{\min}\). A repairable architecture should continue only if measured defect maps, an explicit repair algorithm, and phase simulations all pass their criteria.

Advertised yields cannot be multiplied without denominators and conditioning information. Such multiplication otherwise treats different conditional events as though they were identical and independent.

## Finite-size and logical-scaling criteria

Small patches can reproduce signatures resembling a gap or topological degeneracy without establishing their thermodynamic persistence. The extrapolation model must therefore be specified. For linear size \(L\), one gapped finite-size ansatz is

\[
\Delta(L)=\Delta_\infty+a e^{-L/\xi},
\]

where \(\Delta(L)\), \(\Delta_\infty\), and \(a\) are in J, while \(L\) and the correlation length \(\xi\) have the same length units. A phase claim requires a credibly positive \(\Delta_\infty>0\) and comparison with competing finite-size fits. A logical-memory claim under fixed physical noise may instead use

\[
p_L(d)=A_0e^{-\alpha d},
\]

where \(p_L(d)\) is the logical-error probability, and the code distance \(d\), prefactor \(A_0\), and exponent \(\alpha\) are dimensionless. Improvement with distance requires \(\alpha>0\), or equivalently \(p_L(d+\delta d)/p_L(d)<1\).

The kill rule is to stop claiming scalable protection if the credible upper bound on the improvement ratio is at least one across preregistered larger sizes under the same noise distribution, or if the extrapolation excludes a nonzero thermodynamic gap.

Postselection, improved control on larger samples, a different decoder, or a lower temperature must not be represented as distance scaling. These modifications may support useful experiments, but they define a different scaling curve.

Failure of this criterion does not imply complete failure of the hardware. It invalidates the stated scaling claim under the stated noise model.

## Required experimental and computational records

A kill criterion is reliable only if its uncertainty model is explicit. Each input should retain both a probability distribution and the conditions under which it was obtained:

- \(J_{\mathrm{eff}}\): inferred from the low-energy spectrum, including corrections and fit covariance;

- \(\Gamma\): measured under the complete operating schedule rather than copied from an isolated-spin echo measurement;

- \(E_{\mathrm{act}}\) and \(\Delta_{\min}\): minimized over boundaries, disorder samples, leakage sectors, and the preparation path;

- placement and coupling disorder: represented by joint spatial distributions and confidence in their tails, rather than only RMS values;

- leakage: characterized by the state-resolved rate, dwell-time distribution, propagation, and reset efficacy;

- yield: reported with denominators for creation, correct species, charge state, coherence, addressability, and bonds;

- scaling: reported through raw logical-event counts, a decoder fixed before unblinding, and uncertainty in both fit parameters and model choice.

[Numerics] Exact diagonalization can establish these quantities only for the Hamiltonian, system sizes, boundary conditions, and disorder ensemble that were actually simulated. [Experiment] Spectroscopy can establish a gap in a finite device, but it cannot by itself establish thermodynamic topological order. [Proposal] Combining numerical and experimental evidence requires posterior predictive checks, meaning that measured parameter distributions are supplied to the model and its predictions are tested against held-out spectra, dynamics, and logical observables.

Decisions should use one-sided intervals. If a quantity must be large to pass, its lower bound should be compared with the threshold.

If a quantity must be small to pass, its upper bound should be compared with the threshold. A hard stop is justified when even the optimistic bound fails after the measurement has sufficient statistical power to resolve the decision.

An imprecise experiment generally produces a “resolve” decision rather than either “continue” or “stop.”

## Common analytical errors

- Applying a model-specific threshold universally is incorrect. The roughly 11% perfect-syndrome toric-code threshold assumes perfect syndrome measurements, a stochastic Pauli error model, in which errors are randomly sampled Pauli operators, and specific decoder assumptions, where the decoder is the algorithm used to infer and correct errors from syndrome data [R141]. This value is not a threshold for disorder, leakage, or fabrication defects.

- Comparisons must use consistent units. The effective interaction frequency \(J_{\mathrm{eff}}/h\) is measured in hertz, whereas the decoherence rate \(\Gamma=1/T_2\) is measured in s\(^{-1}\), with \(T_2\) denoting the coherence time. The corresponding dimensionless energy ratio is
  \[
  \frac{J_{\mathrm{eff}}}{\hbar\Gamma}
  =2\pi\left(\frac{J_{\mathrm{eff}}}{h}\right)T_2.
  \]
  Omitting the factor \(2\pi\) can change the outcome of a criterion that lies close to its acceptance threshold.

- The condition \(\Delta/k_{\mathrm B}T>1\) is not a sufficient binary test. Here, \(\Delta\) is the relevant energy gap, \(k_{\mathrm B}\) is the Boltzmann constant, and \(T\) is temperature. The required ratio grows as \(\ln(N_cg/\epsilon_T)\), and diffusion can remain the dominant failure process.

- Average disorder is not sufficient to characterize a large patch. Disorder denotes spatial variation in physical parameters. Failure is governed by rare weak bonds, missing sites, and spatially correlated regions rather than only by the mean disorder.

- Nominal implantation precision is not equivalent to the final placement error. The realized coupling distribution also depends on implantation straggle, diffusion, conversion, charge-state selection, and registration.

- Leakage must not be modeled as an ordinary Pauli error. A leakage error transfers a state outside the modeled local Hilbert space, which is the state space assigned to the local qubit, and the leaked state can persist or spread.

- Preparation cannot be optimized using only one time bound. Adiabaticity, the requirement that the state follow the intended instantaneous eigenstate during a sufficiently slow change, imposes a minimum preparation time. Decoherence imposes a maximum preparation time.

- Advertised yields cannot be multiplied without specifying their denominators and conditioning events. Creation yield, correct-charge yield, optical usability, cluster completion, and bond tolerance are distinct conditional events.

- A scaling claim requires fixed comparison conditions. Logical improvement with code distance must be demonstrated at fixed physical noise and fixed analysis rules.

- Failure of one criterion does not establish failure of every possible application. Failure of a passive-memory criterion may instead support consideration of an active simulator, sensor, network node, or smaller proof of principle. Such a change in objective requires a new claim and new acceptance criteria.

## Quantitative consistency checks

- For the hypothetical parameter values, define the dimensionless interaction-to-decoherence ratio as
  \[
  R_J=2\pi\nu_{\mathrm{eff}}T_2,
  \]
  where \(\nu_{\mathrm{eff}}=J_{\mathrm{eff}}/h\) is the effective interaction frequency. Its value is
  \[
  2\pi(20\times10^6\,\mathrm{s}^{-1})(100\times10^{-6}\,\mathrm{s})
  \approx1.26\times10^4.
  \]
  This value permits many interaction cycles, but the condition \(R_J>1\) is usually insufficient. A protocol requiring \(\alpha\) interaction times and having an interaction-error budget \(\epsilon_J\) must satisfy
  \[
  R_J\ge\alpha/\epsilon_J.
  \]
  For these parameters, \(\alpha/\epsilon_J=2.0\times10^4\), which exceeds \(R_J\).

- Treating \(\Delta>k_{\mathrm B}T\) as a binary acceptance test neglects system size and the allowed thermal-error budget. The required ratio grows as
  \[
  \ln(N_cg/\epsilon_T),
  \]
  where \(\epsilon_T\) is the thermal-error budget. For \(N_s=1000\) and \(\epsilon_T=10^{-3}\), this logarithm is 13.8. Diffusion can still dominate even after the thermally excited occupancy appears small.

- A 5% dipolar-coupling tolerance at \(r=10\) nm requires \(\sigma_r\le0.17\) nm. For dipolar coupling,
  \[
  J\propto r^{-3},
  \]
  where \(J\) is the coupling strength and \(r\) is the separation. For small placement fluctuations, the relative coupling variation is
  \[
  \frac{\sigma_J}{J}\approx\frac{3\sigma_r}{r},
  \]
  where \(\sigma_J\) and \(\sigma_r\) are the standard deviations of coupling and separation, respectively. Therefore, for a fractional coupling tolerance \(\eta_J\),
  \[
  \sigma_r\le\eta_J r/3
  =0.05\times10/3
  \approx0.17\ \mathrm{nm}.
  \]

- If \(t_{\min}>t_{\max}\), no valid preparation-time interval exists, even if arbitrarily slow ramps are technically available. The adiabatic lower bound \(t_{\min}\) then exceeds the decoherence upper bound \(t_{\max}\). Increasing the ramp time reduces diabatic error, meaning error caused by failure to remain in the intended instantaneous eigenstate, but increases open-system error caused by coupling to the environment.

- A 99.5% site yield can be inadequate for a large, unrepairable patch. If site successes are combined over a thousand-site patch, the site-only yield is
  \[
  0.995^{1000}\approx0.0067,
  \]
  before bond failures are included.

- A result constitutes a definitive rejection of the stated route when a preregistered threshold is missed even by the optimistic bound that remains credible after a measurement or calculation capable of resolving the acceptance criterion. Otherwise, the result may instead indicate that more data are needed.

The eight inequalities are go/no-go decision criteria rather than target values. A stage advances only if the conservative bounds satisfy the corresponding criteria.

When an uncertainty interval crosses a decision threshold, the next step is the least expensive calculation capable of resolving the criterion. If even the optimistic bound fails, the stated route terminates or requires an explicit redesign.

## Sources

- [R168] S. Bravyi and B. Terhal, “A no-go theorem for a
two-dimensional self-correcting quantum memory based on stabilizer
codes,” New Journal of Physics 11, 043029
(2009). DOI: [10.1088/1367-2630/11/4/043029](https://doi.org/10.1088/1367-2630/11/4/043029).
[arXiv:0810.1983](https://arxiv.org/abs/0810.1983).

- [R169] B. J. Brown, D. Loss, J. K. Pachos, C. N. Self, and J. R.
Wootton, “Quantum memories at finite temperature,” Reviews of Modern
Physics 88, 045005 (2016). DOI: [10.1103/RevModPhys.88.045005](https://doi.org/10.1103/RevModPhys.88.045005).
[arXiv:1411.6643](https://arxiv.org/abs/1411.6643).

- [R142] S. Bravyi, M. B. Hastings, and S. Michalakis, “Topological
quantum order: stability under local perturbations,” Journal of
Mathematical Physics 51, 093512 (2010). DOI: [10.1063/1.3490195](https://doi.org/10.1063/1.3490195). [arXiv:1001.0344](https://arxiv.org/abs/1001.0344).

- [R074] M. W. Doherty, N. B. Manson, P. Delaney, F. Jelezko, J.
Wrachtrup, and L. C. L. Hollenberg, “The nitrogen-vacancy colour centre
in diamond,” Physics Reports 528, 1–45 (2013).
DOI: [10.1016/j.physrep.2013.02.001](https://doi.org/10.1016/j.physrep.2013.02.001).
[arXiv:1302.3288](https://arxiv.org/abs/1302.3288).

- [R220] A. G. Fowler, “Coping with qubit leakage in topological
codes,” Physical Review A 88, 042308 (2013).
DOI: [10.1103/PhysRevA.88.042308](https://doi.org/10.1103/PhysRevA.88.042308).
[arXiv:1308.6642](https://arxiv.org/abs/1308.6642).

- [R247] S. Jansen, M.-B. Ruskai, and R. Seiler, “Bounds for the
adiabatic approximation with applications to quantum computation,”
Journal of Mathematical Physics 48, 102111
(2007). DOI: [10.1063/1.2798382](https://doi.org/10.1063/1.2798382). [arXiv:quant-ph/0603175](https://arxiv.org/abs/quant-ph/0603175).

- [R248] T. M. Stace, S. D. Barrett, and A. C. Doherty, “Thresholds
for topological codes in the presence of loss,” Physical Review
Letters 102, 200501 (2009). DOI: [10.1103/PhysRevLett.102.200501](https://doi.org/10.1103/PhysRevLett.102.200501).
[arXiv:0904.3556](https://arxiv.org/abs/0904.3556).

- [R141] E. Dennis, A. Kitaev, A. Landahl, and J. Preskill,
“Topological quantum memory,” Journal of Mathematical Physics
43, 4452–4505 (2002). DOI: [10.1063/1.1499754](https://doi.org/10.1063/1.1499754). [arXiv:quant-ph/0110143](https://arxiv.org/abs/quant-ph/0110143).

---
