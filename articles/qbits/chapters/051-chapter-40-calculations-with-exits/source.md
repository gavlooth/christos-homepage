# Chapter 40 — Calculations with rejection criteria

The calculation proceeds through a sequence of increasingly expensive tests. It begins with two defects, where a defect is a localized departure from the host structure that provides the microscopic degrees of freedom. The corresponding four-by-four Hamiltonian is diagonalized to obtain its eigenvalues and eigenstates. If the two lowest-energy states do not form a useful encoded pair, the architecture is rejected at this stage.

The intended sequence is

\[
\text{two defects}
\rightarrow
\text{one cluster leftover}
\rightarrow
\text{three-to-six-cluster plaquette}
\rightarrow
\text{small patch}.
\]

Here, a cluster is a finite group of coupled defects; a leftover is the retained low-energy degree of freedom used as an encoded two-state system; a plaquette is a local arrangement of clusters associated with a candidate many-body interaction; and a patch is a finite portion of the proposed lattice model. The computational cost increases along this sequence.

At each stage, the inputs must be specified, the relevant observables must be computed, and numerical convergence must be tested by tightening approximations or solver tolerances. The result is then compared with acceptance criteria defined before the calculation. If those criteria are not satisfied, the architecture is rejected without proceeding to the more expensive stage. The purpose is to eliminate infeasible architectures before allocating large-scale computational resources.

A plausible defect pair does not guarantee an isolated cluster doublet, where a doublet is a pair of low-energy states separated from higher states. A plausible doublet does not guarantee the intended plaquette operator.

The presence of a recognizable plaquette term does not guarantee a topological phase. Similarly, a small finite patch with two closely spaced eigenvalues does not establish topological degeneracy.

Each later calculation must use quantitative outputs from the preceding stage, including calibrated matrices, projectors, uncertainty ranges, effective couplings, and estimated residual errors. Qualitative confidence is not a computational output.

## Two-defect screening calculation

The first calculation is a screening model rather than a claim about a specific material.

Represent each defect by a spin-\(1/2\), meaning a two-level quantum degree of freedom. Let \(X\), \(Y\), and \(Z\) denote the dimensionless Pauli matrices, let \(I\) denote the two-dimensional identity matrix, and let \(\otimes\) denote the tensor product between the two defect Hilbert spaces. In units where \(\hbar=1\), use the Hamiltonian

\[
H_2=
\frac{\omega_1}{2}Z\otimes I+
\frac{\omega_2}{2}I\otimes Z+
J_x X\otimes X+J_y Y\otimes Y+J_z Z\otimes Z.
\]

The coefficients \(\omega_1,\omega_2,J_x,J_y,J_z\) must all be expressed in the same angular-frequency unit, such as radians per second. Every eigenvalue of \(H_2\) then has the same unit. Multiplication by \(\hbar\) converts an angular frequency to an energy.

The following Julia program constructs the four-by-four Hamiltonian and computes all of its eigenvalues and eigenvectors. It retains the two lowest eigenvectors as the columns of a matrix \(P\), which maps the candidate two-state encoded basis into the full two-defect Hilbert space. It also computes the leakage gap, defined here as the energy separation between the retained pair and the next state; projects three physical control operators into the retained subspace; and evaluates the residual of the eigendecomposition. The program contains no assumed benchmark parameters. Its inputs must be obtained from cited sources under specified physical conditions.

```
using LinearAlgebra

I₂ = Matrix{ComplexF64}(I, 2, 2)
X = ComplexF64[0 1; 1 0]
Y = ComplexF64[0 -im; im 0]
Z = ComplexF64[1 0; 0 -1]

function pair_spectrum(ω₁, ω₂, Jx, Jy, Jz)
H = 0.5 * ω₁ * kron(Z, I₂) + 0.5 * ω₂ * kron(I₂, Z)
H += Jx * kron(X, X) + Jy * kron(Y, Y) + Jz * kron(Z, Z)

decomposition = eigen(Hermitian(H))
E = decomposition.values # ascending
U = decomposition.vectors
P = U[:, 1:2] # candidate leftover basis
Δ_leak = E[3] - E[2]

physical_ops = Dict(
"Z1" => kron(Z, I₂),
"Z2" => kron(I₂, Z),
"X1" => kron(X, I₂),
)
projected_ops = Dict(
name => P' * op * P for (name, op) in physical_ops
)

scale = max(norm(H), 1.0)
residual = norm(H * U - U * Diagonal(E)) / scale
return E, Δ_leak, projected_ops, residual
end
```

Constructing the complete matrix and computing every eigenpair is called exact diagonalization, abbreviated ED. For the specified finite matrix, no model-space truncation is introduced during diagonalization; numerical error is limited by finite-precision arithmetic and the eigensolver implementation.

This program tests the computational pipeline rather than modeling a specific color center, which is an optically active localized defect in a solid. Real defects may require a larger basis that includes higher spin states, orbital degrees of freedom, hyperfine coupling to nuclear spins, strain-dependent states, or distinct charge configurations. For a material-specific calculation, the illustrative Hamiltonian must be replaced by the cited microscopic Hamiltonian developed in Chapters 7–10 and 26.

The outputs support three immediate tests. First, the two lowest states must form a useful doublet. Second, the leakage gap

\[
\Delta_{\rm leak}=E_2-E_1
\]

must be large relative to the intercluster coupling, drive bandwidth, disorder scale, and decoherence rate, with all quantities expressed in the same units. Here, drive bandwidth is the frequency range occupied by the applied control, disorder denotes static sample-to-sample parameter variation, and decoherence is the loss of quantum coherence through coupling to uncontrolled degrees of freedom. Third, the projected physical operators must generate useful controls within the encoded pair rather than reducing to multiples of the identity.

A low-energy pair without a physically addressable transition is not useful as an encoded degree of freedom.

## Parameter specification before diagonalization

Before diagonalization, all parameters must be stored in a single machine-readable record. The record should contain:

- defect species, charge state, spin and retained orbitals;

- magnetic-field vector, strain tensor, electric field, and
temperature;

- pair positions and crystal orientations;

- every Hamiltonian coefficient, unit, sign convention, source, sample
conditions, and uncertainty interval;

- which interactions are measured, calculated, fitted, or
assumed;

- the architecture’s predeclared kill criteria from Chapter 39.

A single internal unit system must be used. If the Hamiltonian coefficients are angular frequencies, every linewidth and inverse coherence time must be converted to angular frequency before comparison.

If the coefficients are energies, temperature must be converted to an energy scale through \(k_B T\), where \(k_B\) is the Boltzmann constant. Megahertz and microelectronvolts cannot be compared quantitatively without unit conversion.

Stop rule 0: terminate the material-specific calculation if an interaction term essential to the target Hamiltonian has neither a cited physical mechanism nor a bounded parameter range. An unconstrained fitting parameter can reproduce many small spectra but has no predictive value.

The parameter record defines the Hamiltonian actually being studied. If the provenance of a coefficient is omitted, a later claim of agreement with experiment lacks a specified quantity against which to compare.

## Two-defect uncertainty and convergence tests

Dense ED, in which the full Hamiltonian is stored and diagonalized, should be used for the smallest basis. If the same small model later requires time-dependent pulses, collapse operators representing open-system processes, or correlation functions, QuTiP provides the corresponding numerical tools [R249]. For a closed system described by a Hermitian matrix, standard linear algebra in NumPy, SciPy, or Julia is sufficient.

The calculation must sample the full fabrication uncertainty rather than only a best-fit parameter point. For every sampled position, orientation, field, and coupling, store:

- the low-energy spectrum \(E_n\);

- level splittings and avoided crossings;

- eigenstate composition in the microscopic basis;

- derivatives \(\partial E_n/\partial
p\) with respect to uncertain parameter \(p\);

- matrix elements of physically available drives and readout
operators;

- leakage under a representative pulse or weak interpair
coupling;

- solver residuals and symmetry quantum numbers.

An avoided crossing is a near approach of energy levels that do not cross because they are coupled. A symmetry quantum number labels an eigenspace of an operator that commutes with the Hamiltonian.

For the convergence test, enlarge the local basis, for example by adding the nearest omitted orbital or hyperfine state, and compare both the retained eigenvalues and the projected operators.

Convergence cannot be assessed solely from energy shifts. A spectrum that changes little while its control matrix elements remain unstable is not converged.

Stop rule 1: reject the pair design if no connected region of the cited uncertainty range preserves the required state ordering, or if the required coupling occurs only at an isolated fine-tuned point narrower than the fabrication and control tolerances. The calculation must also stop if the leakage gap fails the model-specific inequality established in Chapter 39.

Restricting the calculation to a best-fit point establishes only that one Hamiltonian with the desired behavior exists, potentially in a set of measure zero. The physical architecture is instead characterized by a parameter distribution.

## Complete-cluster calculation

Consider a cluster containing \(m\) defects, each represented by a retained local Hilbert-space dimension \(d\). The dimension of the untruncated product Hilbert space is

\[
d^m.
\]

Every exact symmetry should be used to block-diagonalize the Hamiltonian, meaning that the matrix is separated into independent sectors. However, subsequent perturbations must be checked because they may break the symmetries used in this reduction.

Dense ED computes every eigenpair and is appropriate while the largest symmetry block fits comfortably in memory. When the full matrix becomes too large, sparse Lanczos or Davidson eigensolvers can compute a selected low-energy spectral window without obtaining the complete spectrum.

A custom sparse implementation is appropriate when the Hamiltonian contains repeated local terms and exact bit-level structure. In Julia, sparse matrices combined with KrylovKit provide a direct implementation. ITensors.jl becomes useful when the state and operators admit a natural matrix-product representation [R250].

Let the two lowest cluster eigenstates be \(|\tilde 0\rangle\) and \(|\tilde 1\rangle\). Construct the rectangular projector

\[
P=|\tilde 0\rangle\langle 0|+|\tilde 1\rangle\langle 1|,
\]

where \(P\) is understood as a map from the two-state leftover basis \(\{|0\rangle,|1\rangle\}\) into the microscopic cluster Hilbert space. For every microscopic operator \(O\), compute its representation in the encoded subspace:

\[
O_{\rm eff}=P^\dagger O P.
\]

The resulting two-by-two matrix can be expanded in the Pauli basis as

\[
O_{\rm eff}=c_0 I+c_xX+c_yY+c_zZ,
\]

with coefficients

\[
c_\mu=\tfrac12\operatorname{Tr}(\sigma_\mu O_{\rm
eff}),
\]

where \(\sigma_\mu\in\{I,X,Y,Z\}\). This decomposition determines how microscopic local fields, noise operators, readout operators, and intercluster couplings act within the encoded subspace.

The cluster splitting, leakage gap, projected control strengths, and projected noise operators must be evaluated across the uncertainty ensemble. Two complete clusters should then be coupled through the microscopic interaction, and their exact low-energy spectrum should be compared with the spectrum predicted by the encoded interaction.

[Theory] A Schrieffer–Wolff expansion, which perturbatively eliminates high-energy states to obtain a low-energy effective Hamiltonian, is controlled only when the coupling between retained and discarded sectors is small relative to the relevant energy denominators. Direct low-energy diagonalization supplies the required finite-system benchmark [R025].

Convergence tests must include increasing the number of retained cluster states, reducing sparse-eigensolver residuals, comparing calculations with and without each nominally small microscopic term, and verifying that arbitrary phase choices within the doublet do not affect basis-invariant conclusions.

Stop rule 2: reject the cluster architecture if the doublet disappears under realistic disorder; if required controls project nearly to the identity while noise projects strongly onto Pauli operators; or if the exact two-cluster spectra cannot be reproduced within the effective-model error budget declared in advance.

A leftover is adequately characterized only when it is spectrally isolated, supports usable projected controls, has tolerable projected noise, and yields agreement between exact coupled-cluster spectra and the effective model. An isolated-cell doublet alone does not satisfy these conditions.

## Three-to-six-cluster plaquette calculation

The plaquette calculation is the decisive test of the proposed interaction gadget and remains accessible to ED. If each cluster is truncated to one two-state leftover, six clusters span only \(2^6\) states. Two calculations must be performed:

- the effective calculation, using one leftover per
cluster;

- the leakage-aware calculation, retaining additional
cluster states and the microscopic intercluster couplings.

Let \(n\) denote the number of clusters around the candidate plaquette. Project the leakage-aware Hamiltonian into the encoded Hilbert space and expand it in the complete basis of Pauli strings:

\[
H_{\rm fit}=\sum_{\boldsymbol\alpha}c_{\boldsymbol\alpha}
\,\sigma_{\alpha_1}\otimes\cdots\otimes\sigma_{\alpha_n},
\]

where each \(\alpha_j\) is \(0,x,y,\) or \(z\), and \(\sigma_0=I\). A Pauli string is a tensor product containing one Pauli operator or identity on each encoded cluster. Because Pauli strings are orthogonal under the trace inner product, their coefficients are

\[
c_{\boldsymbol\alpha}=2^{-n}
\operatorname{Tr}\!\left(
\sigma_{\boldsymbol\alpha}^\dagger H_{\rm fit}
\right).
\]

This calculation must determine more than whether the target plaquette coefficient \(K\) is nonzero. It also identifies every generated one-body, two-body, and higher-body coefficient. The complete exact low-energy spectrum and its eigenvectors must be compared with those of the fitted operator, rather than comparing only \(K\).

The intercluster scale \(\lambda\) must be swept over a specified range. A useful interval must satisfy two simultaneous conditions: the target term must exceed the relevant noise and temperature thresholds, and the effective description must remain accurate. If perturbation theory predicts that the plaquette interaction first appears at a specified order in \(\lambda\), the scaling fit must be restricted to a region where the exact and effective spectra agree. The fitting interval must not be selected retrospectively to obtain the desired exponent [R025].

The reported quantities should include the spectrum, plaquette gap, target coefficient, norm of unwanted terms, leakage weight, and response to every physically allowed local perturbation. QuTiP remains appropriate for small driven or open-system plaquettes [R249].

For closed-system spectra, sparse ED is generally simpler. At this system size, tensor-network methods introduce approximation without providing a useful increase in accessible size.

Stop rule 3: reject the gadget if no parameter interval simultaneously satisfies the hierarchy, leakage, disorder, and decoherence criteria; if cancellation of unwanted terms requires unattainable precision; or if the target operator appears only after projection removes states that mix strongly in the exact calculation.

A nonzero \(K\) is therefore insufficient. Acceptance requires \(K\), all competing terms, and quantitative agreement with leakage-aware ED over the same parameter interval.

## Finite-patch calculation

The first finite-patch calculation should use the least ambitious topological target that can test the interaction architecture. This will typically be an Abelian stabilizer model or a gauge-theory proxy before attempting a doubled-Fibonacci model. An Abelian stabilizer model is defined by mutually commuting constraint operators with Abelian excitation statistics; a gauge-theory proxy is a simpler model used to test the intended local constraints and interactions. The purpose is to validate the emergence of the target behavior from the proposed couplings rather than to begin with the most complex candidate phase.

ED should be used while the symmetry-reduced Hilbert space and the required Krylov vectors fit in memory. Krylov vectors span the iterative subspace used by sparse eigensolvers. For \(N\) encoded spins, one complex state vector contains \(2^N\) entries.

If each entry is stored as a 16-byte complex number, the storage required for one state is

\[
16\times2^N
\]

bytes. An iterative solver requires several such vectors in addition to operator workspace. This memory estimate must be performed before selecting ED.

For long strips and cylinders, the state can be represented as a chain of tensors connected by bonds that encode correlations across each cut. Systematically increasing the bond dimension until the discarded weight and observables converge defines the density-matrix renormalization group, or DMRG, in its matrix-product-state form. The bond dimension is the size of the auxiliary index connecting neighboring tensors, and the discarded weight quantifies the truncated part of the Schmidt decomposition.

ITensor and TeNPy implement this method [R035]; [R250]; [R251]. DMRG is most effective when the entanglement across the chosen one-dimensional ordering remains manageable.

Mapping a two-dimensional lattice onto a cylinder becomes more difficult as the circumference increases. Results from one narrow cylinder do not constitute the two-dimensional thermodynamic limit [R035]; [R252].

For genuinely two-dimensional patches beyond ED, finite or infinite projected entangled-pair states—PEPS—can be used when the target state admits a tractable bond dimension and the tensor contractions can be converged [R252]; [R253]. PEPS are tensor-network states designed for higher-dimensional lattices. In Julia, TensorKit.jl with MPSKit.jl or PEPSKit.jl provides symmetry-aware tensor infrastructure; ITensors.jl is a mature option for matrix-product calculations [R250].

Package versions and contraction algorithms must be reported. Merely stating that tensor networks were used does not define a reproducible method.

Quantum Monte Carlo is appropriate only when the statistical weights are nonnegative or when a demonstrated treatment of the sign problem applies. The sign problem is the loss of a nonnegative sampling distribution caused by negative or complex weights. Frustrated, complex, or non-Abelian effective interactions commonly eliminate the usual Monte Carlo advantage. A large number of lattice sites alone is not sufficient reason to recommend Monte Carlo.

The name of a numerical method does not guarantee adequate representation of entanglement. A wide, highly entangled two-dimensional cluster may be more difficult for DMRG than a smaller calculation treated by ED.

## Ordered observables and diagnostics

Observables must be calculated in an order that prevents advanced diagnostics from obscuring a failure of the basic spectrum.

**Spectrum, gap, and degeneracy.** For every system size and boundary condition, compute several of the lowest-energy states.

Define \(\Delta\) as the separation between the candidate ground-state manifold and the first excited state, and define \(\delta\) as the splitting within that manifold. A ground-state manifold is the set of lowest-energy states expected to become degenerate in the relevant large-system limit. Both \(\Delta\) and \(\delta\) must be tracked as functions of linear system size.

A small value of \(\delta\) at one size may be accidental.

**Local indistinguishability and perturbation response.** Local indistinguishability means that candidate ground states cannot be distinguished by observables supported on sufficiently small regions. Compare local expectation values and reduced density matrices across the candidate ground states.

Each realistic local perturbation must be added separately and then in sampled combinations. Track \(\Delta\), \(\delta\), mixing between candidate sectors, leakage, and changes in observables.

The phase claim fails if a generic weak local perturbation distinguishes or mixes the proposed sectors at a scale incompatible with the architecture’s kill criteria.

**Entanglement entropy.** For a region \(A\), compute

\[
S(A)=-\operatorname{Tr}[\rho_A\log\rho_A],
\]

where \(\rho_A\) is the reduced density matrix obtained by tracing out the complement of \(A\). The Schmidt spectrum—the set of singular values or corresponding reduced-density-matrix eigenvalues associated with a bipartition—must be converged, rather than only the scalar entropy.

**Topological entanglement entropy.** Use the Kitaev–Preskill or Levin–Wen subtraction geometries to cancel boundary contributions [R254]; [R255].

The selected regions must be large relative to the correlation length, which is the characteristic decay length of connected correlations, and small relative to the complete system. On a small patch, the subtraction is a finite-size diagnostic rather than a measurement of a universal constant.

**Wilson loops.** A Wilson loop is a closed string operator defined by the model’s gauge or string algebra. Its explicit form must be derived from that algebra rather than assumed.

Measure contractible loops of several shapes and noncontractible loops when allowed by the boundary conditions. Determine whether their expectation values scale with the loop perimeter or enclosed area, and compare the results between sectors.

A single loop expectation value is insufficient.

**Fusion.** Fusion specifies the charge sectors that can result when excitations are combined. Create spatially separated candidate excitations using open-string operators, combine them along alternative paths, and project the resulting states onto charge sectors.

Record the allowed channels, state counts, and path dependence. On a small patch, this procedure tests the intended operator algebra but does not establish the existence of asymptotic quasiparticles.

**Modular \(S\) and \(T\).** These matrices encode transformations associated with exchanging noncontractible cycles and with topological twists. They should be attempted only after obtaining a resolved quasi-degenerate ground-state manifold on a torus or an equivalent geometry.

Construct minimally entangled states, implement or infer the relevant modular transformations, fix the arbitrary phases of the ground states, and estimate uncertainty by bootstrapping over numerical truncation errors. Ground-state entanglement can in principle reveal quasiparticle statistics [R256], but an inadequately resolved manifold makes the extracted \(S\) and \(T\) matrices dependent on arbitrary gauge and basis choices.

Extracting modular data from an accidental degeneracy is invalid. Any nearly degenerate finite matrix permits arbitrary basis rotations within the corresponding subspace. The resulting matrices then depend on an unjustified phase and basis convention.

## Numerical controls and convergence requirements

Every reported result must be tested against more than one numerical control parameter.

| Method | Must vary | Must report | Invalid use |
|---|---|---|---|
| Dense/sparse ED | basis truncation, eigensolver tolerance, symmetry sectors | residuals, number of eigenpairs, omitted levels | claiming a phase from one size |
| MPS-DMRG | bond dimension, sweeps, initial states, cylinder length/circumference | energy variance, discarded weight, sector, observable drift | treating an unconverged wide cylinder as exact |
| PEPS/iPEPS | bond dimension, environment dimension, optimizer starts, unit cell | energy/observable convergence and contraction error | reporting one bond dimension |
| Open-system QuTiP | local basis, time step/solver tolerance, collapse operators | trace preservation, positivity checks, parameter provenance | scaling to a many-body patch by dense matrices |
| Monte Carlo | size, temperature, sampling length, autocorrelation | sign, effective sample size, finite-size scaling | ignoring a sign problem |

For DMRG, multiple initial states and explicit sector constraints must be used. A variational optimizer may repeatedly converge to the easiest sector instead of resolving the complete ground-state manifold. For PEPS, both the state bond dimension and the contraction environment dimension must be varied.

Every approximate method must be compared with ED for at least one overlapping system size. Agreement in this overlap validates the transfer from ED to the larger-scale method.

A single PEPS calculation does not demonstrate convergence. The bond dimension, environment dimension, unit cell, and initial state must all be varied [R252]; [R253]. A low variational energy alone does not establish that the calculation has found the correct sector.

## Computational workflow

The following workflow is executable at the standard expected of a research repository. It specifies the required calculations and data products but does not assert any numerical outcome.

**Run A — two-defect audit.** Load the versioned parameter record and construct the complete two-defect Hamiltonian matrix. Perform dense diagonalization, meaning direct computation of the full eigensystem. Export the sorted eigenvalues, eigenvectors, operator matrix elements, eigenpair residuals, and derivatives with respect to the model parameters.

Repeat this calculation over the fabrication-uncertainty ensemble, defined as the sampled distribution of parameters consistent with fabrication variability. Test the transition from the simplified model to the full model by progressively including omitted local energy levels.

**Decision A.** The model passes only if a connected, robust parameter region survives Stop rule 1. After this decision, fix the retained microscopic basis. Do not subsequently retune that basis to improve the plaquette calculation.

**Run B — cluster projection.** Construct the complete intra-cluster Hamiltonian.

Compute enough low-energy states to include both the candidate doublet, which is the proposed two-dimensional encoded subspace, and the relevant leakage multiplets, which are groups of states outside that subspace. Export the projector \(P\) onto the candidate doublet and the projected operators \(P^\dagger O_iP\) for every drive, noise, readout, and coupling operator \(O_i\). Also export the corresponding results for all uncertainty samples.

Couple two clusters and export the spectral discrepancy between the exact model and its projected effective model.

**Decision B.** The model passes only if Stop rule 2 is avoided and the exact-versus-effective error remains within the projection-error budget declared before the calculation.

**Run C — plaquette decomposition.** Construct candidate systems containing three, four, five, and six clusters only when the corresponding geometry can be physically implemented.

Diagonalize both the encoded Hamiltonians and the leakage-aware Hamiltonians. Export every coefficient in the Pauli-string decomposition, the low-energy spectra, the leakage weights, and the results of perturbation sweeps.

Rank the designs using a vector whose components are target-interaction strength, unwanted-term norm, robustness, and fabrication cost. Do not combine these tradeoffs into a single manually tuned score.

**Decision C.** Select no more than one primary plaquette and one fallback plaquette. If no candidate passes Stop rule 3, terminate the topological-patch branch of the study and report the strongest result established at a lower level.

**Run D — exact-diagonalization patch.** Exact diagonalization (ED) computes eigenvalues and eigenvectors directly in the finite-system Hilbert space. Tile the selected plaquette into the smallest open patch, cylinder, and periodic cluster for which each geometry addresses a distinct physical question.

Export the low-energy manifold, the gap \(\Delta\), the sector splitting \(\delta\), local reduced states, Wilson loops, excitation and fusion tests, and responses to perturbations. A Wilson loop is a nonlocal loop operator used here as a diagnostic of topological sectors. Repeat these calculations for every system size and boundary condition accessible to ED.

**Decision D.** Continue only if the size and boundary trends are compatible with a stable gap, decreasing sector splitting, and local indistinguishability. A single favorable system size is classified as “unresolved,” not as a pass.

**Run E — size extension.** For cylindrical geometries, reproduce the largest ED result using density-matrix renormalization group (DMRG) calculations implemented in ITensor or TeNPy. DMRG is a matrix-product-state variational method. After reproducing the ED result, increase the cylinder length, circumference, and bond dimension [R035]; [R250]; [R251].

If genuinely two-dimensional scaling is essential, first reproduce an ED result using finite projected entangled-pair states (PEPS), a two-dimensional tensor-network ansatz, before enlarging the patch [R252]; [R253]. Compute entanglement diagnostics and Wilson-loop diagnostics before attempting more advanced quantities.

Attempt to extract modular matrices only after satisfying the prerequisites for identifying and controlling the ground-state manifold [R256].

**Decision E.** Classify the result as positive, negative, or numerically unresolved. Failure to converge is evidence neither for nor against the phase. It establishes only that the calculation did not determine the answer.

Preserve all inputs, package versions, random seeds, symmetry sectors, solver logs, and immutable outputs. Label results from direct microscopic ED, projected ED, and tensor-network approximations separately.

Changing a stop rule after examining the results constitutes goalpost relocation rather than calibration. Thresholds may be revised when new experimental evidence changes the input contract. They may not be revised solely because the preferred model failed to satisfy them.

## Experimentally constrained inputs

The simulation must begin with parameters conditioned on laboratory measurements rather than with symbols selected for computational convenience. Defect positions are distributed variables, orientations may take discrete values, charge states can change, couplings depend on sample conditions, and coherence data depend on temperature and pulse sequence.

[Experiment] supplies parameter distributions and bounds, including spectra, linewidths, placement statistics, coupling measurements, control matrix elements, and noise correlations.

[Theory] supplies the microscopic Hamiltonian, the projection procedure, the perturbative expansion, and diagnostics of the ideal phase.

[Numerics] supplies finite-system spectra, fitted effective operators, wavefunctions, response curves, and controlled extrapolations.

A numerical phase obtained from a Hamiltonian outside the experimentally allowed uncertainty range is a result about that Hamiltonian. It is not evidence that the defect platform realizes the phase.

Conversely, failure of a simplified Hamiltonian does not exclude every possible defect architecture. It excludes only the declared model within the declared parameter domain. The scope of this exclusion is part of the result.

Before performing any open-system simulation, first establish that the closed-system Hamiltonian has the required low-energy structure. Lindblad evolution, which describes Markovian open-system dynamics through a master equation, can accurately calculate decay in a model that has no topological sector. Such an evolution cannot generate topology that is absent from the Hamiltonian’s relevant state structure.

## Common methodological errors

- **Beginning with the largest patch.** This procedure prevents identification of whether a failure originates in the defect model, cluster truncation, perturbative gadget, boundary condition, or numerical solver. The staged overlap calculations are required to localize the failed modeling step.

- **Selecting DMRG solely because the system is large.** DMRG is a matrix-product variational method and is most effective for one-dimensional and quasi-one-dimensional geometries [R035]. A wide two-dimensional cluster with high entanglement may be less suitable for DMRG than a smaller ED calculation. The selected method must provide sufficient entanglement capacity for the geometry and state being studied.

- **Treating one PEPS calculation as evidence of convergence.** PEPS optimization and contraction are approximate procedures. Convergence tests must vary the bond dimension, environment dimension, unit cell, and initial state [R252]; [R253]. Obtaining a low energy alone does not certify that the calculation has reached the correct sector.

- **Measuring topological entropy before reaching the required length scales.** Topological-entanglement-entropy subtraction formulas assume scale separation among the lattice spacing, correlation length, subsystem size, and total system size [R254]; [R255]. A value obtained on a very small patch may be suggestive, but it is not asymptotic evidence.

- **Extracting modular data from accidental degeneracy.** Any nearly degenerate finite-dimensional matrix permits arbitrary basis rotations within its nearly degenerate subspace. Modular matrices are physically meaningful only after the candidate ground-state manifold, system topology, symmetry action, and phase conventions have been controlled [R256].

- **Conflating fitted interactions with emergent interactions.** If a target plaquette term is inserted manually, the simulation tests the consequences of that imposed term.

  If the target term is derived from two-body defect couplings and validated against leakage-aware ED, the simulation tests whether that interaction emerges from the microscopic model. These cases must be plotted and reported as distinct models.

- **Discarding unfavorable uncertainty samples.** A design that operates only at nominal coupling values but fails across measured placement or strain distributions does not satisfy its engineering objective. Sampling over uncertainty is part of the Hamiltonian analysis rather than an optional source of cosmetic error bars.

- **Changing stop rules after examining the results.** Thresholds may be revised when new experimental evidence changes the input contract.

  They may not be revised solely because the preferred model failed to meet them. Setting thresholds before a run is calibration; moving them after the run is goalpost relocation.

## Technical checks

- **Rationale for beginning with two defects rather than a topological patch.**

  The two-defect calculation provides an inexpensive test of the microscopic interaction, retained basis, and uncertainty range on which every later projection depends.

- **Derivation of the Pauli-string coefficients on \(n\) retained degrees of freedom.**

  For a fitted Hamiltonian \(H_{\rm fit}\), the coefficient of the Pauli string \(\sigma_{\boldsymbol\alpha}\) is
  \[
  c_{\boldsymbol\alpha}=2^{-n}\operatorname{Tr}(\sigma_{\boldsymbol\alpha}^\dagger
  H_{\rm fit}).
  \]
  A Pauli string is a tensor product of single-spin Pauli operators and identities. Pauli strings are orthogonal under the trace inner product, and \(\operatorname{Tr}(I)=2^n\). The factor \(2^{-n}\) is therefore fixed by inner-product normalization rather than chosen during fitting. The purpose of the expansion is to expose unwanted terms, not merely to report the target coefficient \(K\).

- **Consequence of beginning with the largest patch.**

  The origin of failure cannot be identified because the defect model, cluster truncation, perturbative gadget, boundary condition, and solver are tested simultaneously. The staged overlap calculations are designed to identify the specific failed step.

- **Memory requirement for one complex state vector on \(N\) encoded spins.**

  The Hilbert space contains \(2^N\) amplitudes. If each complex amplitude requires 16 bytes, one state vector occupies
  \[
  16\times 2^N
  \]
  bytes before accounting for additional vectors required by the eigensolver. This estimate must be performed before selecting ED.

- **Conditions under which DMRG is appropriate.**

  DMRG is appropriate for one-dimensional or quasi-one-dimensional geometries that admit efficient matrix-product-state representations. Convergence must be tested with respect to bond dimension, number of sweeps, symmetry sector, and cylinder dimensions.

- **Failure of modular \(S\) and \(T\) extraction under accidental degeneracy.**

  If modular \(S\) and \(T\) matrices are extracted from an accidental degeneracy, their values depend on arbitrary gauge and basis choices and therefore have no controlled physical interpretation. The calculation first requires a resolved quasi-degenerate ground-state manifold on a suitable geometry, controlled truncation, minimally entangled states, and fixed basis phases.

At the end of this workflow, the established data products include a versioned parameter record, a two-defect spectrum, a validated projector, and a plaquette candidate that may be accepted or rejected. Each decision stage permits three classifications: positive, negative, or numerically unresolved. The result is determined by the final decision stage that passed its declared criteria, not by the most ambitious calculation attempted.

## Sources

- [R249] J. R. Johansson, P. D. Nation, and F. Nori, “QuTiP: An
open-source Python framework for the dynamics of open quantum systems,”
Computer Physics Communications 183, 1760–1772
(2012). DOI: [10.1016/j.cpc.2012.02.021](https://doi.org/10.1016/j.cpc.2012.02.021).

- [R035] U. Schollwöck, “The density-matrix renormalization group in
the age of matrix product states,” Annals of Physics
326, 96–192 (2011). DOI: [10.1016/j.aop.2010.09.012](https://doi.org/10.1016/j.aop.2010.09.012);
arXiv: [1008.3477](https://arxiv.org/abs/1008.3477).

- [R250] M. Fishman, S. R. White, and E. M. Stoudenmire, “The ITensor
Software Library for Tensor Network Calculations,” SciPost Physics
Codebases 4 (2022). DOI: [10.21468/SciPostPhysCodeb.4](https://doi.org/10.21468/SciPostPhysCodeb.4);
arXiv: [2007.14822](https://arxiv.org/abs/2007.14822).

- [R251] J. Hauschild and F. Pollmann, “Efficient numerical
simulations with Tensor Networks: Tensor Network Python (TeNPy),”
SciPost Physics Lecture Notes 5 (2018). DOI:
[10.21468/SciPostPhysLectNotes.5](https://doi.org/10.21468/SciPostPhysLectNotes.5);
arXiv: [1805.00055](https://arxiv.org/abs/1805.00055).

- [R252] J. I. Cirac, D. Pérez-García, N. Schuch, and F. Verstraete,
“Matrix product states and projected entangled pair states: Concepts,
symmetries, theorems,” Reviews of Modern Physics
93, 045003 (2021). DOI: [10.1103/RevModPhys.93.045003](https://doi.org/10.1103/RevModPhys.93.045003);
arXiv: [2011.12127](https://arxiv.org/abs/2011.12127).

- [R253] J. Jordan, R. Orús, G. Vidal, F. Verstraete, and J. I. Cirac,
“Classical simulation of infinite-size quantum lattice systems in two
spatial dimensions,” Physical Review Letters
101, 250602 (2008). DOI: [10.1103/PhysRevLett.101.250602](https://doi.org/10.1103/PhysRevLett.101.250602);
arXiv: [cond-mat/0703788](https://arxiv.org/abs/cond-mat/0703788).

- [R025] S. Bravyi, D. P. DiVincenzo, and D. Loss, “Schrieffer–Wolff
transformation for quantum many-body systems,” Annals of
Physics 326, 2793–2826 (2011). DOI: [10.1016/j.aop.2011.06.004](https://doi.org/10.1016/j.aop.2011.06.004);
arXiv: [1105.0675](https://arxiv.org/abs/1105.0675).

- [R254] A. Kitaev and J. Preskill, “Topological entanglement
entropy,” Physical Review Letters 96, 110404
(2006). DOI: [10.1103/PhysRevLett.96.110404](https://doi.org/10.1103/PhysRevLett.96.110404);
arXiv: [hep-th/0510092](https://arxiv.org/abs/hep-th/0510092).

- [R255] M. Levin and X.-G. Wen, “Detecting topological order in a
ground state wave function,” Physical Review Letters
96, 110405 (2006). DOI: [10.1103/PhysRevLett.96.110405](https://doi.org/10.1103/PhysRevLett.96.110405);
arXiv: [cond-mat/0510613](https://arxiv.org/abs/cond-mat/0510613).

- [R256] Y. Zhang, T. Grover, A. Turner, M. Oshikawa, and A.
Vishwanath, “Quasiparticle statistics and braiding from ground-state
entanglement,” Physical Review B 85, 235151
(2012). DOI: [10.1103/PhysRevB.85.235151](https://doi.org/10.1103/PhysRevB.85.235151);
arXiv: [1111.2342](https://arxiv.org/abs/1111.2342).

---
