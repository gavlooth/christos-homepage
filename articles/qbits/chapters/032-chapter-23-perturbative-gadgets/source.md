# Chapter 23 — Perturbative gadgets

Consider four spins arranged around a square. The desired topological Hamiltonian assigns an energy according to the product of four spin operators. However, a crystal may naturally provide only pairwise interactions between neighboring spins rather than a direct four-spin coupling.

A perturbative gadget is an auxiliary construction that uses available few-body interactions to generate a desired many-body interaction within a low-energy subspace. In this example, a fifth spin is introduced as an ancilla, or mediator, with a large energy cost for excitation. Each target spin couples weakly to the mediator through a two-body interaction. A virtual process in which all four target couplings act and the mediator returns to its initial state produces an effective four-body term in the low-energy subspace.

This construction requires additional hardware, and the generated four-body energy is much smaller than the two-body coupling energies from which it arises. Moreover, the leading unwanted contributions are ordinary pair interactions. They appear at lower perturbative order, are larger than the desired four-body term, and must be cancelled using additional interactions.

## Single-mediator construction for four target spins

The geometry consists of four target spins and a central mediator:

```
target 1
|
target 4 -- ancilla -- target 2
|
target 3

strong cost to excite ancilla: Δ
weak two-body links: g_i
```

The mediator has a large excitation energy \(\Delta\). A single weak interaction can transfer it from the low-energy subspace to the excited subspace. Any process contributing to an effective operator within the low-energy subspace must eventually return the mediator to its initial state. If all four target spins participate before this return, the resulting amplitude can depend on the product of four target-spin operators.

The mediator therefore transfers the effect of the target interactions without remaining excited in the final state. The intermediate excitations are virtual: they contribute to a transition amplitude but do not constitute a stable mediator population detectable by an energy measurement. Each interaction contributes a weak coupling to the numerator of the perturbative amplitude, while each intermediate excitation contributes an energy denominator. A process involving four weak interactions therefore has the characteristic scale

\[
K\sim \frac{g^4}{\Delta^3},
\]

where \(g\), \(\Delta\), and the effective coupling \(K\) all have units of energy. Dimensional consistency follows from \(E^4/E^3=E\), as required for a Hamiltonian coefficient.

Thus, a four-body interaction generated from four two-body interactions has scale \(g^4/\Delta^3\), rather than scale \(g\). This scaling estimate omits combinatorial coefficients and lower-order terms, both of which must be included in a complete analysis.

## Lower-order pair interactions

Let the four targets be spin-\(1/2\) particles numbered \(i=1,2,3,4\). For each target, the Pauli operator \(Z_i\) has eigenvalues \(z_i=\pm1\). Let the mediator have ground state \(|0\rangle_a\), excited state \(|1\rangle_a\), and excitation energy \(\Delta>0\). Define

\[
H_0=\Delta |1\rangle_a\langle1|,
\qquad
V=X_a S,
\qquad
S=\sum_{i=1}^{4}g_i Z_i .
\]

Here \(H_0\) is the unperturbed mediator Hamiltonian, \(V\) is the perturbation, \(X_a\) is the Pauli operator that flips the mediator, and \(g_i\) is the energy coefficient of the two-body coupling \(X_aZ_i\). An interaction is two-local if it acts nontrivially on at most two subsystems; every term in \(V\) is therefore two-local. The projector onto the low-energy mediator state is

\[
P=|0\rangle_a\langle0|\otimes I_{1\ldots4}.
\]

All target operators \(Z_i\) commute, so the problem can be evaluated separately in each simultaneous target-spin eigenstate. For fixed target eigenvalues, \(S\) is a scalar, and the mediator Hamiltonian has the matrix representation

\[
\begin{pmatrix}
0&S\\
S&\Delta
\end{pmatrix}.
\]

Its lower eigenvalue can then be interpreted as an operator on the target spins:

\[
E_-(S)=\frac{\Delta-\sqrt{\Delta^2+4S^2}}{2}
=-\frac{S^2}{\Delta}+\frac{S^4}{\Delta^3}
-\frac{2S^6}{\Delta^5}+O\!\left(\frac{S^8}{\Delta^7}\right).
\]

This expansion assumes that \(S/\Delta\) is sufficiently small for perturbation theory to apply. The first nonconstant contribution occurs at second order rather than fourth order. Expanding it gives

\[
-\frac{S^2}{\Delta}
=-\frac{\sum_i g_i^2}{\Delta}I
-\sum_{i<j}\frac{2g_i g_j}{\Delta}Z_iZ_j.
\]

The term proportional to the identity \(I\) shifts all energies by the same amount and does not change energy differences. The remaining six terms are pairwise target interactions. They are unwanted and are parametrically larger than the desired four-body interaction. At fourth order,

\[
\frac{S^4}{\Delta^3}
\supset
\frac{24g_1g_2g_3g_4}{\Delta^3}Z_1Z_2Z_3Z_4.
\]

The factor \(24=4!\) counts the possible orders in which the four distinct mediator–target links can act. Changing the sign of one \(g_i\) changes the sign of the resulting four-body coefficient. Direct two-body counterterms, meaning deliberately added interactions with coefficients chosen to cancel unwanted effective terms, can cancel the pair interactions through fourth order. For completeness, the fourth-order coefficient multiplying a particular \(Z_iZ_j\) is

\[
\frac{4g_ig_j(g_i^2+g_j^2)
+12g_ig_j\!\sum_{k\ne i,j}g_k^2}{\Delta^3}.
\]

A calibrated counterterm must negate this fourth-order coefficient together with the corresponding second-order coefficient. After this cancellation, the effective low-energy Hamiltonian is

\[
H_{\mathrm{eff}}=K Z_1Z_2Z_3Z_4
+O(g^6/\Delta^5),
\qquad
K=\frac{24g_1g_2g_3g_4}{\Delta^3}.
\]

This construction is a perturbative gadget: it converts two-body couplings into an effective many-body interaction at the cost of auxiliary hardware and a reduced energy scale.

The four-body interaction is therefore present, but it is not the leading generated interaction. The leading nonconstant terms are pair interactions, which are larger by two powers of \(g/\Delta\). They must be cancelled before the four-body term becomes the dominant nonconstant operator in the low-energy subspace.

The construction uses one mediator, four mediator–target links, and six nominal target–target counterterm links. It derives the required interaction structure but does not establish that a specific crystal can supply all ten links.

The mediator and four target degrees of freedom may be physical spins or spins encoded into clusters. In either case, \(Z_1Z_2Z_3Z_4\) is an effective interaction. Neither the use of encoded spins nor the generation of this operator alone produces an emergent anyon, meaning a quasiparticle with topological exchange and fusion properties. Toric-code quasiparticles arise only in an extended, gapped lattice Hamiltonian within the appropriate topological phase.

A digital four-qubit gate could reproduce the time evolution associated with the same operator. Such a gate would constitute a time-dependent simulation rather than a passive static Hamiltonian.

## Magnitude and accuracy of the four-body interaction

For equal coupling magnitudes \(|g_i|=g\), define the dimensionless perturbative expansion parameter \(\eta=g/\Delta\). Then

\[
\frac{|K|}{\Delta}=24\eta^4.
\]

The sixth-order contribution to the same four-body operator is \(-960g^6/\Delta^5\), so its magnitude relative to the leading coefficient \(K\) is \(40\eta^2\).

At \(\eta=0.05\), the leading four-body scale is only \(1.5\times10^{-4}\Delta\), the sixth-order correction is 10% of it, and the leading unwanted pair scale \(2g^2/\Delta=5\times10^{-3}\Delta\) is about 33 times larger.

Consequently, keeping the residual pair interaction below \(0.1K\) requires approximately 0.3% cancellation in this illustrative cell. At \(\eta=0.025\), the sixth-order fraction decreases to 2.5%, but \(K/\Delta\) decreases to \(9.375\times10^{-6}\).

Reducing \(\eta\) therefore improves the perturbative expansion while rapidly suppressing the desired effective coupling \(K\).  
[Theory] These numbers follow directly from the expansion above; they are not measured device performance.

As an illustrative conversion of units, suppose—not claim—that \(\Delta/h=1\ \mathrm{GHz}\), where \(h\) is Planck’s constant. At \(\eta=0.05\), \(K/h=150\ \mathrm{kHz}\), and the dynamical time is

\[
\hbar/K=1/[2\pi(K/h)]\approx1.1\ \mu\mathrm{s}.
\]

This calculation demonstrates that a microscopic energy scale in the gigahertz range does not necessarily produce a comparably large topological gap.

For a toric-code plaquette interaction, the four target operators are \(Z_i\) operators on the four edges of the plaquette. For a star interaction, each target \(Z_i\) is replaced by \(X_i\).

On a periodic square lattice with \(E\) target edges, the number of vertices \(V\) and plaquettes \(P\) satisfies \(V+P=E\). This direct construction therefore uses one mediator for each stabilizer: \(E\) mediators for \(E\) target spins, four mediator-link incidences per stabilizer, and six counterterm incidences per stabilizer. Each target participates in four gadgets.

This resource count excludes routing devices and any additional encoding required to represent one target spin using a defect cluster.

## Extension from one gadget to a lattice

Write a general gadget Hamiltonian as

\[
H=H_0+V,
\]

where \(H_0\) has a low-energy subspace with projector \(P\), the complementary projector is \(Q=I-P\), and the smallest excitation energy connecting the \(P\) and \(Q\) subspaces is \(\Delta\). A perturbative sequence contributing at order \(n\) has the schematic form

\[
PVQ\frac{1}{E_0-QH_0Q}QVQ\cdots QVP,
\]

with \(n\) copies of \(V\) and \(n-1\) resolvents. A resolvent is the inverse energy-denominator operator that accounts for propagation through an intermediate excited state. If every weak matrix element has scale \(g\), the resulting contribution has scale \(g^n/\Delta^{n-1}\).

Jordan and Farhi provide systematic gadget constructions at arbitrary perturbative order. Bravyi, DiVincenzo, Loss, and Terhal show that bounded-strength local target Hamiltonians can be simulated with an extensive error \(O(\epsilon N)\) without requiring simulator couplings to increase with the number \(N\) of target spins [R174]; [R175]. [Theory] These results concern Hamiltonian simulation.

They do not eliminate physical requirements for connectivity or coherence.

Three distinct energy gaps must be distinguished:

- **Penalty gap \(\Delta\):** the energy required to leave a gadget’s encoded subspace.

- **Effective stabilizer coefficient \(K\):** the coefficient of the generated low-energy stabilizer term, typically suppressed as \(g^n/\Delta^{n-1}\).

- **Topological many-body gap \(\Delta_{\rm top}\):** the lowest allowed excitation energy of the extended effective model.

For the ideal toric-code Hamiltonian

\[
H_{\rm TC}=-K_A\sum_v A_v-K_B\sum_p B_p,
\]

\(A_v\) and \(B_p\) are the star and plaquette stabilizers, respectively. An individual violated stabilizer costs \(2K_A\) or \(2K_B\). On a closed surface, local operations create violations in pairs, so the smallest such pair costs \(4\min(K_A,K_B)\). The useful low-energy gap of the simulator is therefore of order \(K\), not of order \(\Delta\). A basic hardware criterion is

\[
\max\!\left(k_BT,\;\hbar/T_2,\;|\delta J|,\;|\delta K|\right)
\ll \Delta_{\rm top}\sim K\ll g\ll\Delta.
\]

Here \(k_BT\) is the thermal energy, \(T_2\) is the relevant coherence time, \(\delta J\) is a residual unwanted two-body energy, and \(\delta K\) denotes disorder in the stabilizer coefficients. Every quantity in this inequality has units of energy.

The useful protection scale is therefore determined by the suppressed effective coefficient \(K\), rather than by the mediator penalty \(\Delta\).

This inequality is a design criterion rather than a universal phase boundary. The analysis of one gadget cell does not prove the behavior of an extensive lattice.

When neighboring gadgets share target spins, mixed virtual processes can involve several mediators. The number of such paths grows with the coordination number, and operator-norm bounds based on the complete perturbation \(V\) can grow with system size.

Parallel-gadget constructions, locality-based Schrieffer–Wolff analyses, or exact subsystem symmetries are required to control local errors [R175]; [R177]. A Schrieffer–Wolff analysis is a perturbative block-diagonalization that derives the effective low-energy Hamiltonian by eliminating couplings to high-energy states. Finally, proving that an approximate effective Hamiltonian has the intended ground space is weaker than proving a stable thermodynamic gap and the intended excited anyons.

## Established perturbative and nonperturbative constructions

| Target | Microscopic construction | First target order / resource cost | What is established | Important limit |
|---|---|---|---|---|
| Toric-code phase from the honeycomb model | Nearest-neighbor \(XX\), \(YY\), or \(ZZ\) bonds; strong \(J_z\) dimers encode effective spins | Fourth order; two physical spins per effective dimer | In the anisotropic limit, \(K=J_x^2J_y^2/(16|J_z|^3)\) multiplies an effective four-dimer plaquette operator [R017]; [R176]. [Theory] | Natural and exactly solvable, but its non-Abelian phase is Ising type, not Fibonacci. |
| Toric code by code gadgets | Each target edge qubit is encoded into four physical qubits; inter-gadget couplings are two-body | Fourth order on a square lattice; four physical qubits per target qubit | Encoded star and plaquette terms arise; odd orders vanish and second order is a constant because the gadget detects single-qubit errors [R177]. [Theory] | The low-energy model is approximate, frustrated, and has a suppressed gap. |
| Finite-group quantum doubles \(D(G)\) | Two-body code gadgets using \(|G|\)-level qudits | Four physical qudits per target edge in the square-lattice construction [R177] | Includes non-Abelian anyonic models when \(G\) is non-Abelian. [Theory] | A non-Abelian quantum double is not automatically Fibonacci; local dimension and operator control grow with group structure. |
| Simplified quantum doubles | A hopping/clock gadget generates an ordered operator product | Order follows the clock path; König reduces quantum-double interactions to simpler local terms [R178]. [Theory] | Ordered noncommuting products demand more structure than the commuting parity toy above. | |
| String-net PEPS | Strong two-body terms define an encoded PEPS subspace; weak bonds generate a parent Hamiltonian | Finite order set by the local interaction region; additional virtual degrees of freedom per PEPS tensor | A two-body parent construction is proved for a broad PEPS class, with an explicit double-semion string-net example [R018]; [R179]. [Theory] | Double semion is Abelian. The paper is not an experimental doubled-Fibonacci defect design. |
| Exact two-body alternative | Enlarged “composite particles” and two-body interactions | Extra local Hilbert space rather than a small perturbation parameter | Ocko and Yoshida construct nonperturbative two-body models for toric-code and quantum-double topological codes [R180]. [Theory] | Avoids perturbative gap suppression but retains substantial local-state and coupling complexity. |

The honeycomb model provides a direct comparison with the single-mediator calculation. In the strong-\(J_z\) limit, each \(z\)-bond has a two-dimensional low-energy doublet.

A closed sequence containing two \(J_x\) bond operations and two \(J_y\) bond operations returns every dimer to this low-energy subspace. Lower perturbative orders only shift energies, while fourth order generates the plaquette term with coefficient \(J_x^2J_y^2/(16|J_z|^3)\) [R017]; [R176].

This result follows the same structure of coupling factors in the numerator and excitation energies in the denominator as the mediator model. In the honeycomb lattice, symmetry and exact solvability constrain the unwanted terms.

The distinction between non-Abelian anyons and Fibonacci anyons is essential. König’s constructions and those of Brell et al. produce quantum doubles of finite groups, including some theories with non-Abelian excitations [R177]; [R178].

Levin–Wen models form the broader class of categorical string-net models [R018]. The PEPS gadget framework treats the double-semion model explicitly and argues for a broad class of suitable PEPS [R179]. A PEPS, or projected entangled-pair state, is a tensor-network representation of a many-body state. These results do not constitute a worked, defect-mapped two-body Hamiltonian for doubled Fibonacci order.

[Proposal] Extending this machinery to a specific doubled-Fibonacci tensor and then mapping it to a fabricable defect interaction graph remains an architectural problem. It is not an established consequence of the general existence of string-net constructions.

## Physical requirements for a defect implementation

A defect-based device is specified initially by electronic and nuclear energy levels, selection rules, dipolar interaction tensors, exchange pathways, strain responses, optical excited states, and disorder, rather than by abstract Pauli operators. Mapping a perturbative gadget onto such a device requires answers to six concrete questions.

The first requirement is a physical origin for \(\Delta\). Possible sources include a crystal-field splitting, a driven dressed-state gap, or an intra-cluster penalty. Regardless of its origin, the control fields and strain that establish \(\Delta\) must preserve a well-isolated low-energy doublet. Additional leakage levels replace the simple two-level energy denominator with several denominators, potentially having opposite signs.

The second requirement is implementation of every necessary operator. The parity gadget requires \(Z_iX_a\), while a complete toric-code Hamiltonian also requires the basis-rotated analogue used for star operators.

A fixed magnetic dipole interaction generally produces a geometry-dependent tensor rather than independently switchable, pure Pauli products. Echo sequences or dressing fields can average selected terms, but the resulting Hamiltonian is then Floquet-engineered rather than simply static. Floquet engineering uses periodic driving to produce an effective Hamiltonian.

The third requirement is selective connectivity between one mediator and four targets. Dipolar interactions decay with distance but do not terminate beyond a strict range.

Exchange interactions are shorter-ranged but are highly sensitive to atomic placement. The six counterterms in the toy construction include interactions between diagonal target pairs, which may be more difficult to implement than the four radial mediator–target links.

Published code-gadget constructions establish locality on abstract lattices rather than solving defect implantation and routing [R177]; [R179].

The fourth requirement is calibration of interaction signs and magnitudes. At \(\eta=0.05\), the toy construction requires sub-percent cancellation merely to reduce residual pair terms to one tenth of \(K\).

Spatial disorder modifies both the couplings \(g_i\) and the energy denominators. A small fractional error relative to \(g\) can consequently produce a large error relative to \(K\).

The fifth requirement is initialization and cooling into the low-energy subspace \(P\). The penalty suppresses real mediator excitation only when the thermal energy, drive-induced transition rates, and linewidths are small compared with \(\Delta\). Topological defects are controlled by the much smaller scale \(\Delta_{\rm top}\), so the condition \(k_BT\ll\Delta\) is insufficient.

The sixth requirement is coherence over the effective dynamical timescale. The relevant time is \(\hbar/K\), not \(\hbar/g\).

Mediator dephasing can also enter the effective low-energy dynamics because the virtual admixture of excited mediator states is nonzero. A complete calculation must therefore project both the Hamiltonian and the noise operators into the effective subspace.

[Experiment] None of the gadget papers reviewed in this chapter reports a crystal-defect array that realizes its complete two-body simulator Hamiltonian and diagnoses the resulting topological phase [R175]; [R177]; [R178]; [R179]; [R180]. Their results are theoretical constructions. Defect hardware may eventually supply the required components, but combining connectivity, anisotropy, scale hierarchy, cooling, and calibration remains a proposal-level mapping problem.

## Common conceptual and implementation errors

- **Identifying the penalty gap with the protection scale.** The mediator excitation may cost \(\Delta\), while anyonic excitations cost only order \(K\). Thermal and coherent protection must therefore be evaluated relative to \(K\).

- **Neglecting lower perturbative orders.** In the single-mediator example, the desired term first appears at fourth order, but larger pair interactions appear at second order. The first order containing the desired operator need not be the first nonzero perturbative order.

- **Treating counterterms as purely formal corrections.** A counterterm is an additional physical interaction with its own noise, range, and calibration error.

- **Extrapolating directly from one cell to an extended lattice.** Virtual paths involving shared spins can generate cross-gadget operators. Extensivity and the existence of a thermodynamic gap require separate analysis.

- **Identifying an encoded target spin with a topological degree of freedom.** The four-qudit code gadget of Brell et al. is a local error-detecting encoding. Topological order belongs to the extended low-energy phase [R177].

- **Identifying every non-Abelian model with Fibonacci order.** Non-Abelian quantum doubles and the non-Abelian Ising phase of the honeycomb model have fusion and braiding data different from those of Fibonacci anyons.

- **Inferring the excitation structure from an effective ground-state Hamiltonian alone.** Correct ground-space order does not automatically guarantee the intended quasiparticle dispersion, localization, or braiding in the presence of higher-order corrections.

- **Taking \(g/\Delta\) arbitrarily small.** Decreasing this ratio improves the perturbative expansion but suppresses \(K\), slows the effective dynamics, and imposes more stringent temperature and coherence requirements.

## Verification exercises

- Derive the usual scaling \(g^n/\Delta^{n-1}\) for an order-\(n\) virtual process. Such a process contains \(n\) weak matrix elements and \(n-1\) intermediate energy denominators.

- Account for the resources in the single-mediator example: one ancilla, four mediator–target links, six nominal pair counterterms, and fourth-order gap suppression for one four-spin interaction.

- Explain why \(\Delta\) cannot be identified with the toric-code gap. The scale \(\Delta\) penalizes departure from the gadget subspace, whereas stabilizer violations occur within the low-energy effective theory and cost order \(K\ll\Delta\). Thermal and coherent protection must therefore be evaluated relative to \(K\).

- Verify that reducing \(g/\Delta\) improves the relative sixth-order error while suppressing \(K\) more rapidly. For equal \(|g_i|\), the relative sixth-order contribution is \(40\eta^2\), while \(|K|/\Delta=24\eta^4\). Halving \(\eta\) reduces the relative error by a factor of four and multiplies \(K\) by \(1/16\).

- Assess whether existing non-Abelian quantum-double gadgets establish doubled-Fibonacci defect hardware. They do not. They establish Hamiltonian reductions for a different family of theories; the category, local Hilbert space, physical couplings, and phase diagnostics still require an explicit mapping.

- State the additional results required after deriving one plaquette interaction: controlled parallel composition, local errors small compared with \(K\), a stable thermodynamic gap, and the intended extended ground-state and excitation structure.

A two-body perturbative gadget can generate a four-body interaction, but its coefficient is generally a high-order function of \(g/\Delta\).

Mediators, counterterms, and virtual paths shared between cells are physical resource requirements. The useful topological gap is of order \(K\), not the penalty energy \(\Delta\).

Perturbative reductions for the toric code and finite-group quantum doubles are theoretically established. A defect-specific doubled-Fibonacci construction is not.

## Sources

- [R174] S. P. Jordan and E. Farhi, “Perturbative gadgets at arbitrary
orders,” Physical Review A 77, 062329 (2008).
DOI: [10.1103/PhysRevA.77.062329](https://doi.org/10.1103/PhysRevA.77.062329);
[arXiv:0802.1874](https://arxiv.org/abs/0802.1874).

- [R175] S. Bravyi, D. P. DiVincenzo, D. Loss, and B. M. Terhal,
“Quantum simulation of many-body Hamiltonians using perturbation theory
with bounded-strength interactions,” Physical Review Letters
101, 070503 (2008). DOI: [10.1103/PhysRevLett.101.070503](https://doi.org/10.1103/PhysRevLett.101.070503);
[arXiv:0803.2686](https://arxiv.org/abs/0803.2686).

- [R017] A. Kitaev, “Anyons in an exactly solved model and beyond,”
Annals of Physics 321, 2–111 (2006). DOI: [10.1016/j.aop.2005.10.005](https://doi.org/10.1016/j.aop.2005.10.005);
[arXiv:cond-mat/0506438](https://arxiv.org/abs/cond-mat/0506438).

- [R176] J. Vidal, K. P. Schmidt, and S. Dusuel, “Perturbative
approach to an exactly solved problem: Kitaev honeycomb model,”
Physical Review B 78, 245121 (2008). DOI: [10.1103/PhysRevB.78.245121](https://doi.org/10.1103/PhysRevB.78.245121);
[arXiv:0809.1553](https://arxiv.org/abs/0809.1553).

- [R177] C. G. Brell, S. T. Flammia, S. D. Bartlett, and A. C.
Doherty, “Toric codes and quantum doubles from two-body Hamiltonians,”
New Journal of Physics 13, 053039 (2011). DOI:
[10.1088/1367-2630/13/5/053039](https://doi.org/10.1088/1367-2630/13/5/053039);
[arXiv:1011.1942](https://arxiv.org/abs/1011.1942).

- [R178] R. König, “Simplifying quantum double Hamiltonians using
perturbative gadgets,” Quantum Information and Computation
10, 292–324 (2010). DOI: [10.26421/QIC10.3-4-9](https://doi.org/10.26421/QIC10.3-4-9); [arXiv:0901.1333](https://arxiv.org/abs/0901.1333).

- [R018] M. A. Levin and X.-G. Wen, “String-net condensation: A
physical mechanism for topological phases,” Physical Review B
71, 045110 (2005). DOI: [10.1103/PhysRevB.71.045110](https://doi.org/10.1103/PhysRevB.71.045110);
[arXiv:cond-mat/0404617](https://arxiv.org/abs/cond-mat/0404617).

- [R179] C. G. Brell, S. D. Bartlett, and A. C. Doherty, “Perturbative
2-body parent Hamiltonians for projected entangled pair states,” New
Journal of Physics 16, 123056 (2014). DOI: [10.1088/1367-2630/16/12/123056](https://doi.org/10.1088/1367-2630/16/12/123056);
[arXiv:1407.4829](https://arxiv.org/abs/1407.4829).

- [R180] S. A. Ocko and B. Yoshida, “Nonperturbative gadget for
topological quantum codes,” Physical Review Letters
107, 250502 (2011). DOI: [10.1103/PhysRevLett.107.250502](https://doi.org/10.1103/PhysRevLett.107.250502);
[arXiv:1107.2697](https://arxiv.org/abs/1107.2697).

---
