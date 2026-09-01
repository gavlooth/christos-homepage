# Appendix F — Unitary elimination of high-energy subspaces

A preceding calculation reduced two low-energy states and one high-energy state to an effective \(2\times 2\) Hamiltonian. The resulting low-energy matrix element was \(-g^2/\Delta\).

The high-energy state did not appear as an energy eigenstate accessible within the reduced description. Instead, its excitation energy appeared in the denominator of the effective matrix element.

That calculation was a special case of a general procedure applicable to an entire low-energy family, including a family whose states have the same unperturbed energy. The unitary rotation underlying this procedure is derived below and then applied to the two-site Hubbard model, which can be evaluated analytically.

Simply deleting the high-energy basis vectors is not equivalent to this reduction because deletion omits all processes in which the system enters the high-energy subspace and subsequently returns.

The appropriate procedure is a unitary rotation, meaning a norm-preserving change of basis, on the full Hilbert space. The rotation isolates the low-energy block through a chosen perturbative order. The resulting low-energy block is then retained.

```
before rotation after rotation

P states Q states P block | 0
--------+-------
0 | Q block
```

If several low-energy states have the same unperturbed energy, the standard nondegenerate one-state perturbation formula fails because one of its energy denominators becomes zero. The complete degenerate family must instead be treated as a single block.

This procedure is degenerate perturbation theory: perturbation theory for an unperturbed eigenspace of dimension greater than one. The degeneracy requires a rotation of the entire subspace rather than the correction of a single state.

## Decomposition into retained and eliminated subspaces

Decompose the Hilbert space using two complementary operators \(P\) and \(Q\). These operators are orthogonal projectors, meaning that they select mutually orthogonal subspaces and satisfy

\[
P^2=P,\qquad Q^2=Q,\qquad PQ=0,\qquad P+Q=I.
\]

The identity operator is \(I\). The range of \(P\) is the retained subspace, while the range of \(Q\) is the eliminated subspace. Write the Hamiltonian as

\[
H=H_0+\lambda V,
\]

where \(H_0\) is an unperturbed Hamiltonian that can be diagonalized, \(V\) is a Hermitian perturbation with units of energy, and \(\lambda\) is a dimensionless parameter used to organize the perturbative expansion. After the expansion has been truncated and the relevant physical ratio has been identified as small, \(\lambda\) is set to one.

First assume that every retained state has the same unperturbed energy \(E_0\):

\[
PH_0P=E_0P,
\]

and assume that no eigenvalue of \(QH_0Q\) equals \(E_0\). The spectral gap between the retained energy and the eliminated states is

\[
\Delta_0=\min_{\mu\in Q}|E_\mu-E_0|>0,
\]

where \(E_\mu\) are the eigenvalues of \(H_0\) in \(Q\). Consequently, the inverse \((E_0-QH_0Q)^{-1}\) exists on the \(Q\) subspace. If this gap closes, the inverse is not defined as an operator on \(Q\), indicating that the chosen decomposition into \(P\) and \(Q\) must be changed.

Any operator can be decomposed into a block-diagonal part, which acts within \(P\) or within \(Q\), and an off-diagonal part, which couples the two subspaces. For the perturbation,

\[
V_{\rm d}=PVP+QVQ,
\qquad
V_{\rm od}=PVQ+QVP.
\]

The off-diagonal component \(V_{\rm od}\) mixes the retained and eliminated sectors. A first-order projection, \(PHP\), discards this coupling and therefore omits processes that leave \(P\) and return to it. The unitary construction below retains their effects.

## Perturbative block diagonalization

Choose an anti-Hermitian generator \(S\), defined by \(S^\dagger=-S\), whose matrix elements act only between the two subspaces:

\[
PSP=QSQ=0.
\]

Then \(U=e^S\) is unitary. Define the rotated Hamiltonian by

\[
\widetilde H=e^SHe^{-S}.
\]

The Baker–Campbell–Hausdorff expansion, which expresses a similarity transformation as a series of nested commutators, is

\[
\widetilde H=H+[S,H]+\frac{1}{2!}[S,[S,H]]+\cdots,
\]

where the commutator is defined by \([A,B]=AB-BA\). Expand the generator perturbatively as

\[
S=\lambda S_1+\lambda^2S_2+\cdots.
\]

At first order in \(\lambda\), the remaining off-diagonal component is

\[
\lambda\bigl(V_{\rm od}+[S_1,H_0]\bigr).
\]

It is eliminated by imposing

\[
[H_0,S_1]=V_{\rm od}.
\]

If \(|a\rangle\) belongs to \(P\) and \(|\mu\rangle\) belongs to \(Q\), this condition gives

\[
\langle a|S_1|\mu\rangle
=\frac{\langle a|V|\mu\rangle}{E_0-E_\mu}.
\]

The reverse matrix element is determined by the anti-Hermiticity of \(S_1\). Projecting the rotated Hamiltonian into \(P\) gives the effective Hamiltonian through second order:

\[
\boxed{
H_{\rm eff}=E_0P+\lambda PVP
+\lambda^2PVQ\frac{1}{E_0-QH_0Q}QVP
+O(\lambda^3).
}
\]

Here \(O(\lambda^3)\) denotes terms of third and higher order in \(\lambda\). The effective Hamiltonian is therefore not a separate physical system. It is the retained block of a unitarily rotated representation of the original Hamiltonian.

The boxed expression is Hermitian. Its second-order term describes a state leaving \(P\) through \(V\), propagating in \(Q\) with an energy denominator, and returning through \(V\). Dimensional consistency follows from

\[
[V]\,[E^{-1}]\,[V]=E\,E^{-1}E=E.
\]

If \(E_\mu>E_0\), then \(E_0-E_\mu<0\), so coupling to a higher-energy state generally lowers the energy of a low-energy state. This sign follows from the denominator and is not implied merely by describing the transition as “virtual.” A virtual transition is an intermediate process through a state outside the retained subspace. The systematic many-body formulation, including locality and error bounds, is developed by Bravyi, DiVincenzo, and Loss [R025].

This order-by-order unitary block diagonalization, which removes coupling between \(P\) and \(Q\) without changing the exact spectrum, is the Schrieffer–Wolff transformation. This standard terminology originates from its use in relating a different pair of low- and high-energy descriptions and is now applied generally when a low-energy block remains coupled to high-energy states [R024]; [R025].

When the retained states are not exactly degenerate, let \(|a\rangle\) and \(|b\rangle\) in \(P\) have possibly different unperturbed energies \(E_a\) and \(E_b\). A Hermitian second-order matrix is

\[
(H_{\rm eff}^{(2)})_{ab}
=\frac12\sum_{\mu\in Q}V_{a\mu}V_{\mu b}
\left(
\frac{1}{E_a-E_\mu}+
\frac{1}{E_b-E_\mu}
\right).
\]

Here \(V_{a\mu}=\langle a|V|\mu\rangle\). If \(E_a=E_b=E_0\), this result reduces to the boxed expression. Different conventions for the effective Hamiltonian can differ by a unitary transformation acting only within \(P\). Their spectra and consistently transformed observables agree through the retained perturbative order [R025].

## Two-site Hubbard superexchange

Consider two sites, labeled \(1\) and \(2\), with one spin-\(1/2\) fermion per site. A fermion is a particle whose creation and annihilation operators obey anticommutation relations. Let \(c_{i\sigma}^\dagger\) create a fermion of spin \(\sigma\in\{\uparrow,\downarrow\}\) at site \(i\), and define the corresponding occupation-number operator by \(n_{i\sigma}=c_{i\sigma}^\dagger c_{i\sigma}\). The two-site Hubbard Hamiltonian is divided into

\[
H_0=U\sum_{i=1}^2n_{i\uparrow}n_{i\downarrow},
\]

\[
V=-t\sum_{\sigma}
\left(c_{1\sigma}^\dagger c_{2\sigma}
+c_{2\sigma}^\dagger c_{1\sigma}\right).
\]

The on-site repulsion \(U>0\) is the energy cost of placing two fermions on the same site, and the hopping amplitude \(t\) controls motion between the sites. Both \(U\) and \(t\) have units of energy. The retained subspace \(P\) contains states with exactly one fermion on each site, so \(E_0=0\).

The eliminated subspace \(Q\) contains states with one doubly occupied site and one empty site. These states have energy \(U\). The perturbative assumption is

\[
|t|/U\ll1.
\]

The first-order contribution vanishes because one hop always takes a state out of the one-particle-per-site sector. Thus \(PVP=0\). At second order,

\[
H_{\rm eff}^{(2)}=-\frac{1}{U}PVQVP.
\]

Introduce the spin operator on site \(i\),

\[
\mathbf S_i=\frac12\sum_{\alpha,\beta}
c_{i\alpha}^\dagger\boldsymbol\sigma_{\alpha\beta}c_{i\beta},
\]

where \(\boldsymbol\sigma=(X,Y,Z)\) is the vector of Pauli matrices. Evaluating all two-hop processes gives [R026]

\[
H_{\rm eff}^{(2)}=
\frac{4t^2}{U}
\left(\mathbf S_1\cdot\mathbf S_2-\frac14n_1n_2\right),
\]

where \(n_i=n_{i\uparrow}+n_{i\downarrow}\). Within \(P\), each site is singly occupied, so \(n_1n_2=1\).

Define the exchange coefficient

\[
J_{\rm ex}=4t^2/U.
\]

For the spin singlet, \(\mathbf S_1\cdot\mathbf S_2=-3/4\), and the second-order energy shift is \(-J_{\rm ex}=-4t^2/U\).

For any triplet, \(\mathbf S_1\cdot\mathbf S_2=+1/4\), and the corresponding shift is zero. The singlet–triplet separation is therefore

\[
\Delta_{ST}=\frac{4t^2}{U}.
\]

This interaction is antiferromagnetic superexchange: an effective antiferromagnetic spin coupling generated by virtual hopping through doubly occupied states. The effective coupling is not a new microscopic hopping matrix element. It results from two hopping events and one energy denominator associated with the intermediate energy cost \(U\). Its magnitude can be written as \(4t(t/U)\), which is smaller than the bare hopping when \(|t|/U\ll1\).

The Pauli exclusion principle distinguishes the singlet and triplet processes. A triplet has a symmetric spin state and therefore requires an antisymmetric spatial state, which blocks the relevant double occupancy.

The singlet has the spatial symmetry needed to access a virtually doubly occupied state, and this process lowers its energy. The explicit algebra and the symmetry argument give the same result.

## Procedure for validating an effective Hamiltonian

For a finite-dimensional problem, the construction and validation procedure consists of the following steps.

- The projector \(P\) must be chosen according to the relevant physical energy scales. It should include every state whose energy differences are comparable to the perturbation. Excluding a near-resonant state produces a small denominator rather than a simpler effective theory.

- The operator \(PVP\) must be diagonalized. At first order, its eigenvectors give the correct linear combinations within an exactly degenerate manifold.

- The resolvent must be constructed. A resolvent is an inverse operator that contains the energy denominators of intermediate states. The expression \((E_0-QH_0Q)^{-1}\) is evaluated only on \(Q\), where it divides each eliminated-state contribution by the corresponding excitation-energy difference.

- The effective Hamiltonian \(H_{\rm eff}\) must be constructed consistently. All operators of the same perturbative order must be retained, including undesired fields and additive constants.

- Observables must also be transformed. For a microscopic observable \(O\), the effective operator is
  \[
  O_{\rm eff}=Pe^SOe^{-S}P.
  \]
  Using only \(POP\) can omit corrections generated by virtual transitions.

- The effective model must be compared with the full model. On the smallest tractable cluster, the comparison should include low-energy eigenvalues, eigenvectors or spectral subspaces, and observables as \(|\lambda|\) varies.

A useful perturbative expansion requires the matrix elements coupling \(P\) and \(Q\) to be small relative to the relevant energy denominators. In a finite system, a rough dimensionless control parameter is \(\|V_{\rm od}\|/\Delta_0\), where \(\|\cdot\|\) denotes the operator norm.

In an extended lattice, the norm of the complete perturbation grows with system size. Rigorous analyses therefore use locality and linked-cluster structure rather than only the extensive global norm [R025]. An extensive global norm does not by itself invalidate a local expansion. Conversely, the smallness of one typical bond does not by itself establish that the expansion is controlled.

Two logically distinct questions must be considered. The first is whether an exact unitary transformation exists that maps the perturbed low-energy spectral subspace back to the reference subspace \(P\).

For a finite-dimensional problem with an isolated spectral band that remains isolated under the perturbation, such a unitary exists. This result provides the geometric foundation of exact Schrieffer–Wolff theory [R025]; [R027]. The second question is whether a short Taylor series approximates that exact unitary accurately.

Accuracy of the truncated series requires a small parameter and a direct truncation check. The existence of an exact rotation does not imply that the second-order formula is accurate.

An effective Hamiltonian is defined only up to an additive scalar and a unitary change of basis within \(P\). Additive scalars do not affect dynamics or energy gaps.

Unitary basis rotations within \(P\) do change individual matrix entries. Consequently, term-by-term comparisons between two derivations are meaningful only after their conventions have been aligned. Invariant spectra should be compared first, followed by observables transformed using the same convention.

A many-body effective Hamiltonian produced by this procedure can contain a term with the form of a toric-code check operator. The appearance of such a term does not by itself prove that the effective Hamiltonian is topologically ordered. Establishing topological order requires analysis of the entire low-energy spectrum.

If virtual paths are deliberately arranged so that the first several perturbative orders cancel, the derived coefficient, the leading omitted term, and every remaining symmetry-breaking term must be recorded together. Before a larger calculation uses the expansion, the effective spectrum should be compared with the full spectrum on the smallest cluster that remains exactly diagonalizable.

If an order-\(m\) approximation is controlled, the residual error should decrease by the next power of the small parameter over a genuine small-parameter interval. An exponent cannot be reliably fitted from two data points.

The retained subspace should also be compared using projectors. Individual eigenvectors within a degenerate manifold can rotate without changing the physical subspace.

The original Schrieffer–Wolff transformation was introduced to relate the Anderson and Kondo descriptions [R024]. Modern rigorous treatments establish that the method does not justify retaining only selected terms judged to be desirable [R025].

## Common errors in Schrieffer–Wolff reductions

- Replacing the full Hamiltonian by \(PHP\) after deleting the \(Q\) states omits return processes through \(Q\). These processes shift energies and generate effective couplings.

- Excluding a near-resonant state from \(P\) invalidates the assumed separation of energy scales. After the perturbation is applied, such a state can enter the low-energy band, making the corresponding denominator small or zero.

- Treating a small typical bond as sufficient evidence for a controlled expansion on a large lattice is incorrect. It is also incorrect to reject a local expansion solely because the global operator norm is extensive.

- Inferring the accuracy of the second-order formula from the existence of an exact block-diagonalizing unitary confuses exact existence with perturbative convergence. Existence is not a truncation check.

- Comparing two effective Hamiltonians term by term before aligning their basis conventions within \(P\) can produce apparent disagreements that are only unitary changes of representation.

- Using the effective Hamiltonian together with untransformed microscopic observables omits virtual corrections to those observables.

- A desired fourth-order term can be dominated by an unnoticed undesired field generated at first or second order. All terms must therefore be tracked consistently by perturbative order.

- Describing the effective model as an encoded code, a topological phase, or an anyon is not justified by the unitary rotation alone. These are properties of the resulting many-body Hamiltonian and its states. The rotation constructs effective local degrees of freedom and interactions but does not establish those many-body properties.

Resonance also requires attention because a \(Q\) state may approach the retained energies. In addition, fabrication changes can modify both the transition matrix elements in the numerators and the leakage gaps in the denominators.

## Verification statements

- The \(Q\) states cannot be deleted immediately because virtual transitions through \(Q\) shift energies and generate interactions within \(P\).

- If \(E_\mu>E_0\), a coupled low-energy state generally shifts downward at second order. The resolvent entry is \(1/(E_0-E_\mu)<0\), and \(PVQ(\cdots)QVP\) therefore gives a negative-semidefinite correction on \(P\).

- When \(E_a=E_b=E_0\), the nondegenerate expression reduces to the boxed formula. The two denominators are equal, their average is \(1/(E_0-E_\mu)\), and the sum over \(\mu\) is the matrix element of \(PVQ(E_0-QH_0Q)^{-1}QVP\).

- Two-site Hubbard hopping produces the scale \(4t^2/U\) because two hops return the system to the retained sector, the combined amplitudes scale as \(t^2\), the virtual double occupancy costs energy \(U\), and the spin and path multiplicities supply the factor of four.

- Observables and states must be transformed along with the Hamiltonian.

- If a near-resonant state is excluded from \(P\), the assumed energy denominator becomes small or zero. After the perturbation is applied, the state can enter the low-energy band.

## Sources

- [R024] J. R. Schrieffer and P. A. Wolff, “Relation between the
Anderson and Kondo Hamiltonians,” Physical Review
149, 491–492 (1966). DOI: [10.1103/PhysRev.149.491](https://doi.org/10.1103/PhysRev.149.491).

- [R025] Sergey Bravyi, David P. DiVincenzo, and Daniel Loss,
“Schrieffer–Wolff transformation for quantum many-body systems,”
Annals of Physics 326, 2793–2826 (2011). DOI:
[10.1016/j.aop.2011.06.004](https://doi.org/10.1016/j.aop.2011.06.004);
arXiv: [1105.0675](https://arxiv.org/abs/1105.0675).

- [R026] A. H. MacDonald, S. M. Girvin, and D. Yoshioka, “\(t/U\) expansion for the Hubbard model,”
Physical Review B 37, 9753–9756 (1988). DOI:
[10.1103/PhysRevB.37.9753](https://doi.org/10.1103/PhysRevB.37.9753).

- [R027] T. Kato, Perturbation Theory for Linear Operators,
2nd ed., Springer (1976; corrected printing 1995). DOI: [10.1007/978-3-642-66282-9](https://doi.org/10.1007/978-3-642-66282-9).


---
