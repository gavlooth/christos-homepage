# Chapter 22 — Effective interactions induced by high-energy states

A cluster generally contains more states than are retained in a low-energy model. A coupling between two clusters need not act only within the selected low-energy states. It can mix those states with higher-energy levels and then return to the retained subspace. This sequence generates an additional operator acting within the low-energy subspace.

Assume that the retained states have energy zero, the eliminated states lie at least an energy \(\Delta\) above them, and the mixing has characteristic energy scale \(g\), with \(|g|/\Delta\ll1\). Any induced operator that begins and ends in the retained subspace must then contain at least two applications of the mixing. The leading contribution therefore has scale \(g^2/\Delta\).

This induced operator is the effective Hamiltonian considered in this chapter. Projecting out the high-energy states without accounting for virtual transitions through them omits this contribution. Conversely, retaining every microscopic state can make the description unnecessarily large.

## Second-order transitions through a high-energy subspace

Consider two subspaces. The low-energy subspace contains the states retained in the effective model. The high-energy subspace contains states whose energies exceed those of the retained states by at least \(\Delta\). A weak coupling with characteristic strength \(g\) connects the two subspaces.

Both \(g\) and \(\Delta\) have units of energy, and the perturbative assumption is \(|g|/\Delta\ll1\).

A single application of the coupling cannot begin and end in the low-energy subspace because it transfers the state into the high-energy subspace. Two applications can produce a low-energy-to-low-energy transition:

\[
\text{cheap }a
\xrightarrow{g}
\text{expensive }m
\xrightarrow{g}
\text{cheap }b.
\]

The resulting amplitude has the characteristic scale

\[
\frac{g\,g}{E_{\rm low}-E_m}\approx -\frac{g^2}{\Delta}.
\]

This expression contains three relevant features. First, two matrix elements of the coupling produce the factor \(g^2\). Second, a large excitation gap suppresses the process as \(1/\Delta\). Third, when the intermediate state lies above the retained states, the energy denominator is negative.

The high-energy state contributes only as an intermediate amplitude rather than as the final state of an energy measurement. Such an intermediate contribution is called virtual.

Consequently, the leading induced operator within the low-energy subspace has energy scale \(g^2/\Delta\), rather than \(g\).

The virtual description applies only when \(|g|/\Delta\) is small. If the coupling is sufficiently strong to produce substantial real occupation of the high-energy state, elimination of that state is not perturbatively justified.

The sign of a specific spin-coupling coefficient also depends on the phases of the relevant matrix elements and on the operator convention used for the effective Hamiltonian. It is therefore insufficient to state that every second-order coupling is negative. When the retained states couple only to higher-energy states, the second-order energy-correction operator is negative-semidefinite, meaning that all of its expectation values are nonpositive.

An exchange coefficient obtained after subtracting a constant energy can nevertheless be positive. The two-site example below provides such a case.

The same scaling relation can be represented as follows:

```
low-energy subspace
|
| coupling v
v
high-energy subspace, energy separation Delta
|
| return to the low-energy subspace
v
effective coupling ~ v^2 / Delta
```

## Three-state model with one high-energy state

Consider three orthonormal states: two low-energy states \(|L\rangle\) and \(|R\rangle\), and one high-energy state \(|e\rangle\). Let the unperturbed Hamiltonian be

\[
H_0=\Delta |e\rangle\langle e|,
\]

where \(\Delta>0\) has units of energy. The low-energy states have energy zero. Introduce a coupling of strength \(g\), also with units of energy, between each low-energy state and the high-energy state:

\[
V=g\bigl(|e\rangle\langle L|+|e\rangle\langle R|+\text{h.c.}\bigr).
\]

Here “h.c.” denotes the Hermitian conjugate, which includes the reverse transitions from \(|e\rangle\) to \(|L\rangle\) and \(|R\rangle\). The perturbative assumption is \(|g|/\Delta\ll1\).

The operator that selects the retained pair is

\[
P=|L\rangle\langle L|+|R\rangle\langle R|.
\]

The operator that selects the eliminated state is

\[
Q=|e\rangle\langle e|.
\]

Together they span the full Hilbert space, so \(P+Q=I\). Each operator is idempotent, and the two subspaces are orthogonal:

\[
P^2=P,\qquad Q^2=Q,\qquad PQ=QP=0.
\]

An operator satisfying \(P^2=P\) is a projector. In this context, \(P\) retains a specified subspace rather than representing a measurement outcome. The complementary projector \(Q\) selects the high-energy states omitted from the working low-energy model.

Because \(PVP=0\), the perturbation has no direct first-order matrix element between retained states. The second-order effective Hamiltonian is

\[
H_{\rm eff}^{(2)}
=-PVQ\frac{1}{\Delta}QVP
=-\frac{g^2}{\Delta}
\begin{pmatrix}
1&1\\
1&1
\end{pmatrix}_{\{|L\rangle,|R\rangle\}}.
\]

Although the microscopic coupling does not directly connect \(|L\rangle\) and \(|R\rangle\), it generates the matrix element

\[
\langle L|H_{\rm eff}|R\rangle=-\frac{g^2}{\Delta}.
\]

Thus, a virtual path through a single high-energy state produces an off-diagonal low-energy coupling that is absent from the original operator \(V\).

The antisymmetric combination \((|L\rangle-|R\rangle)/\sqrt2\) is a dark state, meaning that its matrix element with \(|e\rangle\) vanishes. It therefore remains at zero energy. The symmetric, or bright, combination couples to \(|e\rangle\) and receives the energy shift \(-2g^2/\Delta\).

This three-state model is exactly solvable. Its lower bright-state energy is

\[
E_- = \frac{\Delta-\sqrt{\Delta^2+8g^2}}{2}
=-\frac{2g^2}{\Delta}+\frac{4g^4}{\Delta^3}
+O\!\left(\frac{g^6}{\Delta^5}\right).
\]

This expansion explicitly demonstrates perturbative control. The leading retained energy shift is of order \(g^2/\Delta\).

In this model, symmetry eliminates the cubic term, so the first omitted energy correction is fourth order. Without that symmetry, truncation at second order generally leaves third-order corrections.

## Decomposition into retained and eliminated subspaces

Write the full Hamiltonian as

\[
H=H_0+\lambda V.
\]

The operator \(H_0\) is the exactly solvable unperturbed Hamiltonian. The perturbation \(V\) has units of energy. The parameter \(\lambda\) is dimensionless and records perturbative order; it is set to \(1\) after identifying the physically small ratio.

The projector \(P\) selects the retained subspace, while \(Q=I-P\) selects all eliminated states. Choose \(P\) to be spanned by eigenstates of \(H_0\), so that \(PH_0Q=0\). The Hamiltonian then has the block form

\[
H=
\begin{pmatrix}
PHP & PHQ\\
QHP & QHQ
\end{pmatrix}.
\]

The diagonal blocks act within the individual subspaces. The off-diagonal blocks connect retained and eliminated states. A first-order projection replaces \(H\) by \(PHP\) and therefore removes the off-diagonal blocks. A higher-order elimination instead retains the effects of transitions from \(P\) into \(Q\) and back.

Let \(E_a\) denote an unperturbed energy in \(P\), and let \(E_m\) denote an unperturbed energy in \(Q\). Define the minimum spectral separation by

\[
\Delta=\min_{a\in P,\,m\in Q}|E_m-E_a|.
\]

When \(P\) is a genuine low-energy subspace, the relevant differences \(E_m-E_a\) are positive. The perturbation is controlled not by the statement that \(V\) is small in isolation, but by the dimensionless ratio

\[
\epsilon=\frac{|\lambda|v}{\Delta}\ll1,
\]

where \(v\) is the characteristic off-diagonal coupling scale, such as a suitable operator norm of \(PVQ+QVP\). Both \(v\) and \(\Delta\) have units of energy, so \(\epsilon\) is dimensionless.

The validity of the expansion therefore depends on a ratio of energy scales, not merely on the formal decomposition \(H=H_0+V\).

If a level in \(Q\) approaches a level in \(P\), then \(\Delta\) decreases and \(\epsilon\) increases. The retained subspace must then be enlarged to include the nearly resonant state. A divergent perturbative denominator indicates the breakdown of the chosen low-energy model rather than an arbitrarily large usable coupling.

## Exact energy-dependent effective Hamiltonian

Write an exact eigenstate as \(|\psi\rangle=|p\rangle+|q\rangle\), where \(|p\rangle=P|\psi\rangle\) and \(|q\rangle=Q|\psi\rangle\). Projecting the eigenvalue equation \(H|\psi\rangle=E|\psi\rangle\) into the two subspaces gives

\[
PHP|p\rangle+PHQ|q\rangle=E|p\rangle,
\]

\[
QHP|p\rangle+QHQ|q\rangle=E|q\rangle.
\]

If the operator \(E-QHQ\) is invertible, the second equation determines the eliminated component:

\[
|q\rangle=(E-QHQ)^{-1}QHP|p\rangle.
\]

Substitution into the first equation gives the exact energy-dependent effective Hamiltonian acting in the retained subspace:

\[
H_{\rm eff}(E)=PHP+PHQ(E-QHQ)^{-1}QHP.
\]

This is the projection procedure associated with Feshbach [R171]. The inverse operator provides the energy denominator. Replacing \(E\) and \(QHQ\) by their unperturbed values generates the perturbation series.

For a degenerate retained manifold with unperturbed energy \(E_0\), the effective Hamiltonian through second order is

\[
\boxed{
H_{\rm eff}
=E_0P+\lambda PVP
+\lambda^2PVQ\frac{1}{E_0-QH_0Q}QVP
+O\!\left(\frac{|\lambda|^3v^3}{\Delta^2}\right)
}
\]

for a bounded finite system whose relevant perturbation scales are represented by \(v\). If every eliminated state lies above \(E_0\), the second-order term can equivalently be written as

\[
H_{\rm eff}^{(2)}
=-PVQ\frac{1}{QH_0Q-E_0}QVP.
\]

These expressions are equivalent. The second form makes the sign explicit because \(QH_0Q-E_0\) is positive.

Thus, through second order, the effective low-energy Hamiltonian consists of the projected first-order block \(PHP\), a sum over virtual paths through \(Q\), and a remainder of order \(v^3/\Delta^2\).

For basis states \(|a\rangle,|b\rangle\in P\) and \(|m\rangle\in Q\),

\[
\langle a|H_{\rm eff}^{(2)}|b\rangle
=
\sum_{m\in Q}
\frac{\langle a|V|m\rangle\langle m|V|b\rangle}
{E_0-E_m}.
\]

Every allowed virtual path contributes to this sum. Different paths can interfere constructively or destructively. A small denominator increases the magnitude of an individual contribution while simultaneously reducing the validity of the perturbative expansion.

## Block diagonalization by a unitary transformation

The same elimination can be formulated as a perturbative change of basis. Choose an anti-Hermitian generator \(S\), defined by \(S^\dagger=-S\), and take it to be off-diagonal with respect to the \(P\) and \(Q\) subspaces. Define the transformed Hamiltonian

\[
\widetilde H=e^SHe^{-S}.
\]

Because \(S\) is anti-Hermitian, \(e^S\) is unitary. Therefore, \(H\) and \(\widetilde H\) have the same exact spectrum. Expand the generator as \(S=\lambda S_1+\lambda^2S_2+\cdots\), and use the nested-commutator expansion

\[
e^SHe^{-S}=H+[S,H]+\frac12[S,[S,H]]+\cdots.
\]

Decompose \(V=V_{\rm d}+V_{\rm od}\), where \(V_{\rm d}\) is block diagonal and acts within \(P\) or \(Q\), while \(V_{\rm od}\) connects the two subspaces. Cancellation of the first-order off-diagonal block requires

\[
[S_1,H_0]=-V_{\rm od}.
\]

It follows that

\[
\langle a|S_1|m\rangle
=\frac{\langle a|V|m\rangle}{E_a-E_m}.
\]

Projecting the transformed Hamiltonian into \(P\) gives

\[
H_{\rm eff}=PH_0P+\lambda PV P
+\frac{\lambda^2}{2}P[S_1,V_{\rm od}]P+O(\lambda^3).
\]

If the retained states are not exactly degenerate, the second-order matrix element contains the Hermitian average of the two energy denominators:

\[
\frac12\sum_m V_{am}V_{mb}
\left(\frac{1}{E_a-E_m}+\frac{1}{E_b-E_m}\right).
\]

Thus, the second-order effective interaction can be obtained through a change of basis that removes the coupling between retained and eliminated subspaces order by order.

Different valid choices of basis within the retained subspace can produce effective Hamiltonians with different-looking coefficients while leaving all low-energy predictions unitarily equivalent [R025]. Any comparison of coefficients must therefore specify the basis convention.

This procedure is the Schrieffer–Wolff transformation. Schrieffer and Wolff introduced this block-diagonalization method for a different low-energy problem, and it is now widely used for clusters and many-body systems containing a low-energy block coupled to high-energy states [R024]; [R025]. It is a formulation of degenerate perturbation theory as a change of basis.

## Two-site Hubbard model and antiferromagnetic exchange

The Hubbard model describes fermions that hop between sites and experience an on-site energy cost for double occupancy [R172]. Consider two sites, labeled \(1\) and \(2\), occupied by exactly two electrons. Let \(c_{i\sigma}^\dagger\) create an electron with spin \(\sigma\in\{\uparrow,\downarrow\}\) on site \(i\), and define the number operator \(n_{i\sigma}=c_{i\sigma}^\dagger c_{i\sigma}\). The Hamiltonian components are

\[
H_0=U\sum_{i=1}^{2}n_{i\uparrow}n_{i\downarrow},
\]

\[
V=-t\sum_{\sigma}
\left(c_{1\sigma}^\dagger c_{2\sigma}
+c_{2\sigma}^\dagger c_{1\sigma}\right).
\]

Here \(U>0\) is the energy cost of double occupancy, and \(t\) is the hopping matrix element. Both quantities have units of energy. Set \(\lambda=1\) and assume \(|t|/U\ll1\).

The retained sector \(P\) contains states with one electron on each site:

\[
|\uparrow,\uparrow\rangle,
\quad |\uparrow,\downarrow\rangle,
\quad |\downarrow,\uparrow\rangle,
\quad |\downarrow,\downarrow\rangle.
\]

All four states have unperturbed energy \(E_0=0\). The eliminated sector \(Q\) contains the two doublon-hole states, where a doublon is a doubly occupied site and the other site is empty:

\[
|D_1\rangle=|\uparrow\downarrow,0\rangle,
\qquad
|D_2\rangle=|0,\uparrow\downarrow\rangle,
\]

both with energy \(U\). For this two-site problem, the gap is \(\Delta=U\), and \(PVP=0\) because a single hop always produces one doublon and one hole.

Introduce states of definite total spin:

\[
|S\rangle=\frac{|\uparrow,\downarrow\rangle-|\downarrow,\uparrow\rangle}{\sqrt2},
\]

\[
|T_0\rangle=\frac{|\uparrow,\downarrow\rangle+|\downarrow,\uparrow\rangle}{\sqrt2},
\quad
|T_+\rangle=|\uparrow,\uparrow\rangle,
\quad
|T_-\rangle=|\downarrow,\downarrow\rangle.
\]

Two electrons occupying the same orbital must form a spin singlet. The polarized triplets are therefore Pauli blocked, and the two hopping amplitudes from \(|T_0\rangle\) cancel. With a consistent convention for fermionic phases,

\[
V|S\rangle=-\sqrt2t\left(|D_1\rangle+|D_2\rangle\right),
\qquad V|T_\mu\rangle=0.
\]

The total squared matrix element connecting the singlet to \(Q\) is \(4t^2\). The energy denominator is \(0-U=-U\), giving

\[
\delta E_S^{(2)}=-\frac{4t^2}{U},
\qquad
\delta E_T^{(2)}=0.
\]

The singlet is lowered in energy relative to the triplets. This splitting is antiferromagnetic exchange: a positive exchange coefficient \(J\) favors antiparallel spins. Within the singly occupied sector, the effective operator is

\[
\boxed{
H_{\rm eff}^{(2)}
=J\left(\mathbf S_1\cdot\mathbf S_2-\frac14 n_1n_2\right),
\qquad J=\frac{4t^2}{U}>0,
}
\]

where \(\mathbf S_i\) is the spin-\(1/2\) operator at site \(i\), and \(n_i=n_{i\uparrow}+n_{i\downarrow}\). At half filling within \(P\), \(n_1n_2=1\). Because \(\mathbf S_1\cdot\mathbf S_2=-3/4\) in the singlet and \(+1/4\) in a triplet, this expression gives energies \(-J\) and \(0\), respectively.

Two virtual hops through a doubly occupied intermediate state therefore generate an antiferromagnetic Heisenberg coupling with coefficient \(4t^2/U\).

The constant term \(-J/4\) is often omitted, leading to the alternative convention \(J\mathbf S_1\cdot\mathbf S_2\). This convention shifts every retained energy by \(+J/4\) but leaves the singlet-triplet splitting equal to \(J\). Comparing the two conventions without accounting for this constant produces an apparent discrepancy equal to that constant.

The dimensions are consistent because \([t]=[U]=\text{energy}\):

\[
[J]=\frac{[t]^2}{[U]}=\text{energy}.
\]

As a deliberately hypothetical example, take \(t=1\ \text{meV}\) and \(U=10\ \text{meV}\). Then \(t/U=0.1\), and

\[
J^{(2)}=4\frac{(1\ \text{meV})^2}{10\ \text{meV}}
=0.4\ \text{meV}.
\]

These values are pedagogical and do not describe a particular defect.

The two-site problem also permits direct evaluation of the truncation error. The exact singlet-triplet splitting is

\[
J_{\rm exact}=\frac{\sqrt{U^2+16t^2}-U}{2}
=\frac{4t^2}{U}-\frac{16t^4}{U^3}
+O\!\left(\frac{t^6}{U^5}\right).
\]

At the illustrative ratio \(t/U=0.1\), \(J_{\rm exact}\approx0.385\ \text{meV}\), approximately \(3.9\%\) below the second-order result. Odd perturbative orders vanish in this specific two-site, half-filled model.

This cancellation follows from the symmetry and path structure of the model and is not a general property of the Schrieffer–Wolff transformation. For systems with more than two sites or away from half filling, odd-order contributions need not vanish.

Systematic expansions in \(t/U\) for the Hubbard model produce further-neighbor and multi-spin interactions at higher order [R026]. The superexchange mechanism and the origin of its antiferromagnetic sign also have a broader history beyond this minimal model [R173].

## Quantitative conditions for perturbative control

For a finite cluster with characteristic off-diagonal matrix element \(v\), the required hierarchy is

\[
\underbrace{|\lambda|v}_{\text{mixing}}
\ll
\underbrace{\Delta}_{\text{leakage cost}}.
\]

Under this condition, the amplitude in the eliminated sector of a dressed low-energy eigenstate is generally of order \(\epsilon=|\lambda|v/\Delta\). Here a dressed state is an exact or perturbatively corrected state containing admixtures from both \(P\) and \(Q\). A generated second-order energy has scale

\[
\epsilon^2\Delta=\frac{|\lambda|^2v^2}{\Delta},
\]

and a generic third-order remainder has scale

\[
\epsilon^3\Delta=\frac{|\lambda|^3v^3}{\Delta^2}.
\]

These relations are scaling estimates rather than universal error bounds with unit coefficients. Multiple bonds, near-degeneracies, and numerous virtual paths can introduce combinatorial factors.

For an array of clusters with coordination number \(z\), defined as the number of locally coupled neighboring clusters, a conservative local condition is often \(zv/\Delta\ll1\). This estimate should be supplemented by an explicit bound or convergence study for the actual local Hamiltonian. A global operator norm generally grows with system size and can therefore impose an unnecessarily restrictive criterion.

Local Schrieffer–Wolff methods and linked-cluster formulations treat extensive systems more systematically [R025].

A useful perturbative derivation should therefore report at least four quantities: the retained space \(P\), the smallest relevant gap \(\Delta\), the dimensionless expansion parameter, and the leading omitted operators together with their characteristic scale.

Reporting only a desired generated term does not establish perturbative control.

## Experimental identification and validation

The Schrieffer–Wolff transformation is [Theory]. Experimental systems are characterized by energy levels, transition matrix elements, applied drives, disorder, dissipation, and finite temperature. Establishing that a measured defect cluster realizes an effective Hamiltonian derived by this method requires connecting those observables to \(H_0\), \(V\), \(P\), and \(Q\).

For a defect cluster, \(P\) could be an isolated spin doublet. The gap \(\Delta\) could represent a many-spin excitation gap, an orbital splitting, or a charge-transfer energy.

These denominators correspond to physically distinct processes and can have different sensitivities to noise. The coupling \(V\) could arise from magnetic dipole coupling, direct exchange, strain coupling, or a driven interaction.

A magnetic dipole interaction that acts directly within the doublet contributes at first order through \(PVP\) and should not be identified as superexchange. A charge-transfer or mediator-assisted process that leaves \(P\) and subsequently returns can contribute at second or higher order.

For superexchange mediated by a ligand or an additional defect orbital, the single denominator \(U\) is replaced by several intermediate-state energies and hopping amplitudes. The corresponding contributions can compete.

Orbital occupancy and Hund coupling can even reverse the sign of the effective interaction. The result \(4t^2/U\) from the two-site model is therefore a derivation template rather than a universal materials formula [R173].

A credible validation procedure is spectroscopic. It requires measuring or calculating the retained manifold and the leakage levels, estimating the matrix elements that connect them, diagonalizing at least the smallest relevant microscopic cluster, and comparing its low-energy spectrum and projected observables with the truncated effective model. [Numerics] Exact diagonalization is particularly useful because it tests both coefficients and truncation errors without presupposing that the perturbation series is accurate. Agreement at a single tuned point provides weaker evidence than agreement over a range of \(v/\Delta\).

[Proposal] Later cluster constructions may use this expansion to determine whether available two-body defect couplings generate specified encoded interactions. The transformation alone does not imply that the desired term is large, that unwanted terms cancel, or that the resulting low-energy phase is topological.

Eliminating high-energy states does not produce a different physical device. The crystal continues to contain all microscopic defect and mediator states. The operator \(H_{\rm eff}\) describes an encoded low-energy sector of the same physical system.

A generated spin interaction does not by itself establish emergent anyons or topological order. These are many-body properties requiring the appropriate phase, excitation gap, and nonlocal observables. A digitally programmed gate sequence with an effective second-order structure belongs to a separate category: it may emulate the same operator without possessing the static microscopic hierarchy derived here.

## Common errors in effective-Hamiltonian derivations

- **Using the wrong denominator sign.** For a retained energy \(E_0\) and a higher intermediate energy \(E_m\), the denominator is \(E_0-E_m<0\). Equivalently, the term can be written using an explicit minus sign and the positive energy cost \(E_m-E_0\). These two sign conventions must not be applied simultaneously.

- **Eliminating high-energy states before including return processes.** Replacing \(H\) by \(PHP\) omits \(PVQ(E_0-QH_0Q)^{-1}QVP\). First-order projection and second-order elimination compute different approximations.

- **Applying the expansion without spectral separation.** If a \(Q\) level approaches \(P\), the corresponding denominator becomes small and the mixing becomes large. The retained space must then be enlarged. The divergence indicates failure of the selected low-energy description rather than an available source of arbitrarily strong coupling.

- **Comparing basis-dependent coefficients term by term.** Effective Hamiltonians related by a unitary rotation within \(P\) can distribute coefficients differently while predicting the same spectrum. Comparisons should use invariant predictions or consistently transformed operators [R025].

- **Neglecting dressed observables.** Physical low-energy states contain a \(Q\)-sector admixture of order \(v/\Delta\). When this correction is relevant, an observable \(O\) must be transformed as \(Pe^SOe^{-S}P\), rather than approximated only by \(POP\).

- **Ignoring lower-order unwanted terms.** A desired interaction generated at fourth order may be much smaller than an allowed first- or second-order contribution. Such lower-order terms must be forbidden by symmetry, canceled, or tuned. A change of notation cannot remove them.

- **Assuming that the existence of a small coefficient implies its accuracy.** If virtual paths nearly cancel, the desired coefficient can be smaller than the nominal perturbative remainder. Control of the full Hamiltonian does not ensure a small relative error for a specially suppressed term.

- **Inferring coherence from a closed-system Hamiltonian.** Block diagonalization does not eliminate phonons, fluctuating fields, thermal activation, or control noise. Coupling to an environment can produce real leakage, and effective noise operators must also be projected.

- **Identifying generated interactions with a topological phase.** A microscopic two-body model can generate multi-body operators, but the required operator content, coefficient hierarchy, system size, temperature, and perturbative stability must still be established.

## Verification exercises

- **Definitions of \(P\) and \(Q\).** A projector is an operator that selects a specified subspace. \(P\) projects onto the low-energy states retained in the effective model. \(Q=I-P\), where \(I\) is the identity operator, projects onto the complementary high-energy states excluded from that model.

- **Scale of a second-order virtual process.** A virtual process is a perturbative transition through an intermediate state that is not retained as an initial or final state. Let \(v\) denote the characteristic coupling between the retained and excluded subspaces, and let \(\Delta\) denote the excitation energy of the intermediate state. A process that leaves the \(P\) subspace and returns to it requires two applications of the coupling. The intermediate resolvent, which is the inverse energy-difference operator, contributes one inverse excitation energy. The resulting second-order scale is therefore \(v^2/\Delta\), because the contribution has the form \(v\cdot(1/\Delta)\cdot v\).

- **Breakdown near an intermediate-state resonance.** Let \(E_0\) be the energy of a retained low-energy state and \(E_m\) the energy of an intermediate excluded state. If \(E_m\) approaches \(E_0\), the perturbative denominator \(E_0-E_m\) becomes small. Consequently, the dimensionless expansion parameter \(\epsilon=v/\Delta\) is no longer small, and the retained low-energy subspace must be enlarged to include the nearly degenerate state. The effective-model formula does not imply an arbitrarily large coupling in this regime; instead, its assumptions have failed.

- **Sign of Hubbard exchange.** In the Hubbard model, \(t\) is the hopping amplitude and \(U\) is the on-site interaction energy. At second order, only the spin singlet receives the energy correction \(-4t^2/U\), while the triplet states remain at zero. Expressing this singlet–triplet splitting as \(J(\mathbf S_1\cdot\mathbf S_2-1/4)\), where \(\mathbf S_1\) and \(\mathbf S_2\) are the two spin operators, gives \(J=4t^2/U>0\). A positive \(J\) corresponds to antiferromagnetic exchange, meaning that the interaction energetically favors the singlet over the triplets. Thus, the negative singlet energy correction is consistent with antiferromagnetic exchange.

- **Required information for a second-order effective Hamiltonian.** A second-order effective Hamiltonian must be accompanied by the definition of \(P\), the leakage gap \(\Delta\), a dimensionless small parameter such as \(v/\Delta\), and the scale and operator form of the leading omitted corrections. The leakage gap is the energy separation between the retained subspace and the excluded states into which the system can couple.

- **Limitations of a generated plaquette term.** A Schrieffer–Wolff transformation is a perturbative unitary transformation used to decouple retained low-energy states from excluded high-energy states. A plaquette term generated by this transformation is an operator supported on the degrees of freedom around a plaquette, but it is only one term in the effective Hamiltonian. Its presence does not by itself establish topological order. The many-body phase, its energy gap and excitations, its robustness, and its finite-size behavior require separate evidence.

## Sources

- [R024] J. R. Schrieffer and P. A. Wolff, “Relation between the Anderson and Kondo Hamiltonians,” Physical Review 149, 491–492 (1966). DOI: [10.1103/PhysRev.149.491](https://doi.org/10.1103/PhysRev.149.491).

- [R025] S. Bravyi, D. P. DiVincenzo, and D. Loss, “Schrieffer–Wolff transformation for quantum many-body systems,” Annals of Physics 326, 2793–2826 (2011). DOI: [10.1016/j.aop.2011.06.004](https://doi.org/10.1016/j.aop.2011.06.004); arXiv: [1105.0675](https://arxiv.org/abs/1105.0675).

- [R171] H. Feshbach, “Unified theory of nuclear reactions,” Annals of Physics 5, 357–390 (1958). DOI: [10.1016/0003-4916(58)90007-1](https://doi.org/10.1016/0003-4916(58)90007-1).

- [R172] J. Hubbard, “Electron correlations in narrow energy bands,” Proceedings of the Royal Society A 276, 238–257 (1963). DOI: [10.1098/rspa.1963.0204](https://doi.org/10.1098/rspa.1963.0204).

- [R026] A. H. MacDonald, S. M. Girvin, and D. Yoshioka, “\(t/U\) expansion for the Hubbard model,” Physical Review B 37, 9753–9756 (1988). DOI: [10.1103/PhysRevB.37.9753](https://doi.org/10.1103/PhysRevB.37.9753).

- [R173] P. W. Anderson, “New Approach to the Theory of Superexchange Interactions,” Physical Review 115, 2–13 (1959). DOI: [10.1103/PhysRev.115.2](https://doi.org/10.1103/PhysRev.115.2).

---
