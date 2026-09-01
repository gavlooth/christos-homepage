# Chapter 11 — Encoding a qubit in three spins subject to noise

Consider three spin degrees of freedom that fluctuate independently. Environmental perturbations, including magnetic-field variations and temperature changes, can flip an individual spin and thereby destroy information stored directly in that spin.

Strong interactions among the three spins alter this situation. If the interaction energy penalizes most collective configurations, the low-energy spectrum can contain only two accessible states. The remaining motions then require excitation to higher energy.

This construction does not reduce the intrinsic noise of any individual spin. Instead, it defines an energy for three spins and restricts the description to a two-dimensional low-energy subspace. This chapter identifies that subspace, determines how physical operators act within it, and evaluates the resulting benefits and limitations.

## Spectrum and low-energy states of three spins

Consider three physical spin-\(1/2\) objects, labeled \(1,2,3\). Each has two eigenstates along the applied-field direction, conventionally denoted by up and down arrows. The three-spin Hilbert space therefore contains eight product states.

The objective is not to use these eight states as eight independent logical states. Instead, interactions are chosen so that only two states are relevant at low energy.

The interacting three-spin system will be called a cluster. Several such clusters can later be coupled weakly, with each cluster treated as an effective two-level system.

Let \(\mathbf S_i=(S_i^x,S_i^y,S_i^z)\) denote the dimensionless spin operator at site \(i\), with \(S_i^z\) eigenvalues \(\pm 1/2\). The Hamiltonian, meaning the operator that determines the energy within one cluster, consists of antiferromagnetic Heisenberg exchange and a uniform longitudinal field:

\[
H_C=J\sum_{i<j}\mathbf S_i\cdot\mathbf S_j-bS_{\mathrm{tot}}^z,\qquad
S_{\mathrm{tot}}^z=\sum_{i=1}^3S_i^z.
\]

Here, Heisenberg exchange is the rotationally invariant pair interaction \(\mathbf S_i\cdot\mathbf S_j\), and antiferromagnetic exchange means \(J>0\), favoring lower total spin. The Zeeman coefficient also satisfies \(b>0\). Both \(J\) and \(b\) have units of energy, so every term in \(H_C\) has energy units. When experimental parameters are reported as frequencies, the corresponding quantities are \(J/h\) and \(b/h\) in hertz, where \(h\) is Planck’s constant.

The Hilbert space of three spin-\(1/2\) objects decomposes into one total-spin \(S_{\mathrm{tot}}=3/2\) quartet and two copies of a total-spin \(S_{\mathrm{tot}}=1/2\) doublet. First restrict the system to total magnetization \(m=S_{\mathrm{tot}}^z=+1/2\). Two states in this sector can be written in the product basis as

\[
\begin{aligned}
|\tilde 0\rangle
&=\frac{|\uparrow\downarrow\uparrow\rangle-|\downarrow\uparrow\uparrow\rangle}{\sqrt2},\\
|\tilde 1\rangle
&=\frac{|\uparrow\downarrow\uparrow\rangle+|\downarrow\uparrow\uparrow\rangle-2|\uparrow\uparrow\downarrow\rangle}{\sqrt6}.
\end{aligned}
\]

In \(|\tilde 0\rangle\), the first two spins form a singlet, which is their total-spin-zero state. In \(|\tilde 1\rangle\), the first two spins occupy the triplet channel, meaning their total spin is one, and combine with spin 3 to produce total spin \(1/2\). Direct evaluation of the inner products gives unit norm for each state and \(\langle\tilde0|\tilde1\rangle=0\).

The exchange energy can be evaluated using the total-spin identity

\[
\sum_{i<j}\mathbf S_i\cdot\mathbf S_j
=\frac12\left(S_{\mathrm{tot}}^2-\sum_i S_i^2\right),
\]

together with \(S_i^2=3/4\). Both states consequently have the same energy,

\[
E_L=-\frac{3J}{4}-\frac b2.
\]

Thus, the two states span a two-dimensional eigenspace of \(H_C\). Degeneracy alone does not define a useful qubit; the states must also be controllable and measurable.

If \(J<0\), the exchange is ferromagnetic, the quartet lies lower in energy, and this pair is not the ground-state sector. The assumption \(J>0\) is therefore essential.

## Definition of the encoded qubit

Two low-energy eigenstates do not by themselves constitute a computational system. They must be controllable and readable, excluded states must remain unoccupied, and physical operations on the three spins must induce the intended operations within the selected pair.

An encoded qubit is a chosen two-dimensional subspace of a larger Hilbert space into which quantum information is deliberately mapped. The term “encoded” specifies where the information is stored; it does not imply protection. A repetition-code state, this exchange-controlled pair, and an arbitrary pair of molecular energy levels are all encoded qubits when information is intentionally assigned to the selected subspace.

The retained basis states are denoted by \(|\tilde0\rangle\) and \(|\tilde1\rangle\). Every other state in the eight-dimensional Hilbert space represents departure from the encoding.

Encoding alone does not provide protection. Protection must be established separately for a specified noise model.

## Leakage gap and energetic isolation

Transitions from the selected pair to excluded states require additional energy. This energy cost suppresses occupation of the excluded states only when the perturbations that induce such transitions are small relative to that cost.

Define the projectors

\[
P=|\tilde0\rangle\langle\tilde0|+|\tilde1\rangle\langle\tilde1|,\qquad
Q=I-P,
\]

where \(I\) is the identity operator on the full eight-dimensional three-spin Hilbert space. The projector \(P\) selects the encoded subspace, while the complementary projector \(Q\) selects all states outside it.

For an exactly degenerate pair, the minimum excitation energy into the excluded subspace is

\[
\Delta_{\mathrm{leak}}=\min_{|a\rangle\in Q}(E_a-E_L),
\]

provided that every excluded eigenstate lies above \(E_L\). This quantity is the leakage gap. It measures energetic separation from states outside the encoded subspace, not suppression of noise acting within that subspace.

If the intended pair has a small internal splitting, the leakage gap must instead be measured from the higher state of the pair to the nearest excluded level. Otherwise, an internal qubit splitting could be incorrectly included in the leakage gap.

The other \(S_{\mathrm{tot}}=1/2\) states have \(m=-1/2\) and lie an energy \(b\) above the chosen pair. The lowest state in the \(S_{\mathrm{tot}}=3/2\) quartet has \(m=+3/2\) and lies an energy \(3J/2-b\) above it. Therefore,

\[
\boxed{\Delta_{\mathrm{leak}}=\min\left(b,\frac{3J}{2}-b\right)},\qquad
0<b<\frac{3J}{2}.
\]

At \(b=0\), the opposite-magnetization partners are degenerate with the chosen pair, so the fixed-\(m\) subspace is not energetically isolated. Increasing \(b\) raises these partners relative to the encoded pair until the polarized quartet is lowered sufficiently to become the nearest excluded sector. At \(b=3J/4\), the two possible excitation energies are equal, and both are \(3J/4\).

If a perturbation has a characteristic matrix element \(v\), also expressed in energy units, then \(v/\Delta_{\mathrm{leak}}\) is dimensionless. A valid low-energy description requires this ratio to be small. Similarly, a resonant control field with angular Rabi rate \(\Omega\) requires \(\hbar\Omega/\Delta_{\mathrm{leak}}\ll 1\), unless a selection rule makes the relevant leakage matrix element vanish exactly.

A spectral gap suppresses transitions only relative to perturbations capable of producing them. It does not prevent noise from acting within the encoded pair. Even a perfectly isolated two-level subspace can undergo dephasing.

## Projection of physical operators into the encoded subspace

A physical operation on the three spins induces an effective operation on the encoded pair. This action is determined by a two-by-two matrix obtained by projection.

Define the encoded Pauli operators

\[
\begin{aligned}
\bar
Z&=|\tilde0\rangle\langle\tilde0|-|\tilde1\rangle\langle\tilde1|,\\
\bar
X&=|\tilde0\rangle\langle\tilde1|+|\tilde1\rangle\langle\tilde0|,\\
\bar
Y&=-i|\tilde0\rangle\langle\tilde1|+i|\tilde1\rangle\langle\tilde0|.
\end{aligned}
\]

For any physical operator \(O\), its first-order action within the encoded subspace is

\[
O_{\mathrm{eff}}=POP=c_0P+c_x\bar X+c_y\bar Y+c_z\bar Z.
\]

The four coefficients are determined by the four matrix elements of \(O\) in the ordered basis \(\{|\tilde0\rangle,|\tilde1\rangle\}\). Operationally, the projection \(POP\) restricts the physical operator to the encoded subspace and produces the corresponding two-by-two matrix.

For the three-spin system, direct projection gives

\[
\begin{aligned}
P(\mathbf S_1\cdot\mathbf S_2)P
&= -\frac14P-\frac12\bar Z,\\
P(\mathbf S_2\cdot\mathbf S_3)P
&= -\frac14P+\frac14\bar Z-\frac{\sqrt3}{4}\bar X,\\
P(\mathbf S_1\cdot\mathbf S_3)P
&= -\frac14P+\frac14\bar Z+\frac{\sqrt3}{4}\bar X.
\end{aligned}
\]

Now assume that the three pairwise exchange coefficients \(J_{12},J_{23},J_{13}\) can be tuned independently. Within the encoded pair,

\[
PH_CP=E_{\mathrm{off}}P+h_x\bar X+h_z\bar Z,
\]

where

\[
E_{\mathrm{off}}=-\frac{J_{12}+J_{23}+J_{13}}4-\frac b2,\quad
h_x=\frac{\sqrt3}{4}(J_{13}-J_{23}),\quad
h_z=\frac{J_{13}+J_{23}-2J_{12}}4.
\]

All three coefficients have energy units. The term \(E_{\mathrm{off}}P\) shifts both logical states equally and therefore does not generate a relative logical phase. The coefficients \(h_x\) and \(h_z\) generate encoded rotations about two nonparallel axes of the Bloch sphere, which is the geometric representation of a two-level quantum state.

Pulse sequences can generate rotations about the third axis by combining noncommuting rotations. This is the central exchange-only control principle proposed for three-spin qubits [R114] and later demonstrated in semiconductor quantum dots [R115].

[Theory/Experiment] Isotropic exchange commutes with both \(S_{\mathrm{tot}}^2\) and \(S_{\mathrm{tot}}^z\). Ideal exchange pulses therefore do not couple this encoded pair to the quartet. Leakage reappears in realistic systems through anisotropy, field gradients, timing errors, and coupling to higher orbital or defect levels.

For several nearby clusters, write the full Hamiltonian as

\[
H=\sum_C H_C+\lambda\sum_{\langle C,D\rangle}V_{CD}.
\]

Here, \(C\) and \(D\) label clusters, \(H_C\) is the strong intracluster Hamiltonian of cluster \(C\), \(V_{CD}\) couples neighboring clusters, and the dimensionless bookkeeping parameter \(\lambda\) specifies that the intercluster coupling is weak. If every \(H_C\) has a well-isolated pair, the large microscopic Hilbert space may admit an effective description containing one two-level system per cluster.

This reduction is conditional. The selected states must be controllable and readable, excluded states must remain weakly populated, projected interactions must have the required operator form, and fabrication must reproducibly generate the assumed spectrum.

For the projection of multiple clusters, let \(P_C\) project cluster \(C\) onto its selected pair and define \(P_{\mathrm{all}}=\prod_C P_C\).

To first order in the weak intercluster coupling,

\[
H_{\mathrm{eff}}=P_{\mathrm{all}}HP_{\mathrm{all}}
=\sum_C P_CH_CP_C+\lambda\sum_{\langle C,D\rangle}(P_CP_D)V_{CD}(P_CP_D).
\]

Each projected pair interaction can be expanded in products \(\bar\sigma_C^\mu\bar\sigma_D^\nu\), where \(\mu,\nu\in\{0,x,y,z\}\) and \(\bar\sigma^0=P\).

Virtual transitions into \(Q\), meaning intermediate occupation of states outside the encoded subspace, generate corrections with characteristic scale \(\lambda^2\|V\|^2/\Delta_{\mathrm{leak}}\). Chapter 22 will derive this result.

If individual clusters are not energetically isolated, the product projector does not define a valid low-energy description. A nonzero \(QVP\) produces leakage and virtual corrections. The relevant small parameter is a coupling matrix element divided by \(\Delta_{\mathrm{leak}}\).

## Decoherence-free behavior under collective longitudinal noise

Encoding alone does not imply protection. Protection must be demonstrated for a specific interaction between the system and its environment.

Suppose the three-spin cluster couples to a bath through

\[
H_{SB}=S_{\mathrm{tot}}^z\otimes B_z,
\]

where \(B_z\) is an unspecified bath operator and \(\otimes\) denotes the tensor product between system and bath operators. Within the fixed-\(m=+1/2\) encoded pair,

\[
PS_{\mathrm{tot}}^zP=\frac12P.
\]

The bath coupling is therefore identical for \(|\tilde0\rangle\) and \(|\tilde1\rangle\). It cannot distinguish the two encoded states and adds the same phase to both.

A subspace on which every relevant noise operator acts as a scalar is a decoherence-free subspace for that noise model [R112]. [Theory] The qualification by noise model is essential: the term does not imply immunity to all sources of decoherence. The relevant noise operators must be identified, and each must be shown to act as a scalar on the code.

The pair is not a decoherence-free subspace for independent noise of the form \(\sum_i S_i^z\otimes B_i\). Distinct bath operators \(B_i\) can distinguish the different spatial spin patterns. An assumption that the environment is approximately common-mode does not replace this operator calculation.

## Noiseless subsystem under fully collective noise

For fully collective noise, the system–bath interaction can contain all three total-spin components:

\[
H_{SB}=\sum_{\alpha=x,y,z}S_{\mathrm{tot}}^\alpha\otimes B_\alpha.
\]

A collective transverse rotation changes \(m\), so the fixed-\(m\) pair is not a decoherence-free subspace for this interaction. Nevertheless, the entire total-spin-\(1/2\) sector factorizes as

\[
\mathcal H_{1/2}\cong \mathbb C^2_{\mathrm{logical}}\otimes\mathbb
C^2_{\mathrm{gauge}}.
\]

This factorization separates a logical two-dimensional space from a gauge two-dimensional space. Collective spin operators act on the gauge factor and leave the logical factor unchanged. Information stored in the first factor is therefore a noiseless subsystem [R113]. [Theory] The second factor is called a gauge spin; its state can change without erasing the logical information.

This construction protects against a broader set of collective noise operators than the fixed-magnetization decoherence-free subspace protects against longitudinal noise. It remains conditional on the coupling being genuinely collective.

Three spins with equal exchange have a four-dimensional \(S=1/2\) sector. A two-state projector within that sector therefore requires fixed magnetization, another mechanism that splits the states, or the noiseless-subsystem interpretation. Ignoring the additional two states incorrectly removes the gauge degeneracy from the description.

## Exchange-only control

An exchange-only qubit uses controllable pairwise exchange interactions instead of separately addressed single-spin rotations [R114]; [R115]. This describes the available control operations and does not, by itself, imply reduced noise.

Because exchange interactions commute with collective rotations, they naturally act on the logical factor of the three-spin noiseless subsystem without depending on the gauge orientation.

Magnetic dipolar coupling is anisotropic. The existence of a spin–spin interaction does not imply that isotropic exchange is available. Every physical interaction must be projected using its actual operator form and compared with the interaction required by the encoding.

## Symmetry-based selection rules

Leakage can also be forbidden by a symmetry rather than merely suppressed by an energy gap.

If a symmetry generator \(G\) commutes with \(H_C\), the eigenstates can be labeled by symmetry sectors. A perturbation that also commutes with \(G\) has zero matrix elements between inequivalent sectors. This is symmetry protection: the relevant transition matrix element vanishes because of a selection rule.

In the model considered here, isotropic exchange preserves total spin, while the longitudinal field preserves total magnetization. These symmetries can forbid some leakage transitions.

They do not automatically protect the logical splitting. Both encoded states have \(S_{\mathrm{tot}}=1/2\) and \(m=+1/2\), and unequal exchanges that respect these symmetries generate \(\bar X\) and \(\bar Z\) terms at first order. A protection claim must therefore identify the symmetry, the symmetry representation carried by the code, and the transformation properties of the actual perturbation.

If the perturbation does not commute with \(G\), the corresponding matrix element need not vanish. Anisotropy, field gradients, and orbital admixture commonly break the relevant symmetry assumptions.

## Local distinguishability and absence of topological order

The two encoded states occupy three nearby spins and can be distinguished by a local pair observable. In particular, \(\mathbf S_1\cdot\mathbf S_2\) has different projected values in \(|\tilde 0\rangle\) and \(|\tilde 1\rangle\).

Consequently, unequal local exchange splits the states at first order. In addition, a closed path among the three sites does not acquire a logical phase determined by the geometric shape of that path.

The logical operators therefore have support on three nearby spins, and the degeneracy is not determined by the topology of a macroscopic surface.

This construction is an encoding, not topological order.

Topological order, when present, is a property of an entire many-body phase. Small local perturbations cannot read the encoded information or split the relevant degeneracy at first order, and the excitations carrying the information can be transported over a large lattice. Such excitations are later referred to as anyons.

The present cluster does not have these properties. Its three physical spins are ordinary qubits, the pair selected by \(P\) is one encoded qubit, and controlled evolution that reproduces a target model constitutes digital or analog emulation.

None of these features constitutes an emergent phase.

## Relation to color-center experiments and proposals

The exact Heisenberg triangle is an instructional model. Color-center hardware instead includes spin-1 NV electron states, spin-\(1/2\) or higher-spin nuclear memories, anisotropic dipolar and hyperfine tensors, optical reset, strain, and imperfect spatial placement. Selecting two levels of a spin-1 center can define an effective physical qubit, but this selection does not convert magnetic dipolar coupling into isotropic exchange.

A literature search through August 2026 is most informative when explicit inclusion criteria are imposed. A direct realization of the model derived here would require: (i) at least three deliberately used spins associated with color centers; (ii) a static, strong intracluster Hamiltonian; (iii) a spectroscopically isolated logical doublet; and (iv) control through projected pair interactions. The related literature falls into four categories.

-

Encoded center–nuclear registers have been demonstrated. [Experiment] Reiserer et al. encoded a diamond-network memory in two nearby \({}^{13}\mathrm C\) spins whose antiparallel states suppress common-mode phase shifts during repeated NV optical operations [R116].

Cramer et al. encoded a qubit across three \({}^{13}\mathrm C\) spins and repeatedly extracted and corrected error syndromes using an NV ancilla [R117]. These systems are genuine encoded clusters associated with color centers. Their protection, however, arises respectively from a decoherence-free subspace and active error correction, rather than from the ground-state doublet of a three-center exchange Hamiltonian.

-

Spin-pair encodings have produced high-performance experimental memories. [Experiment] Bartling et al. used pairs of \({}^{13}\mathrm C\) nuclei near NV nodes as antiparallel spin-pair qubits, reported intrinsic dephasing times exceeding one minute, and entangled two such encoded qubits [R118].

The statement “exceeding one minute” applies to those measured nuclear-spin pairs and experimental protocols, not to arbitrary color-center clusters. These results provide strong evidence for noise-selective encoding, but not for passive many-body topological protection.

-

Large local registers and coupled color centers have been demonstrated, but they do not meet all four criteria. [Experiment] A ten-qubit diamond register combined one NV electron, its nitrogen nucleus, and eight \({}^{13}\mathrm C\) nuclei under gate-based control [R119].

Separately, two NV electron spins have been entangled through their direct dipolar interaction [R106]. The first system is a programmable register, while the second is an interacting pair.

Neither paper reports a low-energy encoded qubit formed from three color centers.

-

Architectures using multiple NV centers in decoherence-free subspaces have also been proposed. [Proposal] Yun et al. proposed geometric gates in a decoherence-free subspace using NV centers coupled through cavity-QED resources [R120].

This is a genuine proposal for a color-center decoherence-free subspace. However, its logical space and gate operations are engineered using drives and a mediator. It does not demonstrate that a fabricated, strongly coupled NV triangle naturally realizes the spectrum and projected exchange interactions derived above.

The resulting literature assessment is limited but specific. Existing work includes genuine encoded qubits constructed from spins near color centers, genuine coupled color centers, and genuine proposals for multi-center decoherence-free-subspace gates. Among the sources identified here, no experiment or proposal simultaneously establishes the sequence “three deliberately positioned color-center electronic spins \(\rightarrow\) static exchange-dominated isolated doublet \(\rightarrow\) projected exchange-only qubit.” This conclusion is a search result, not a proof that no such paper exists. It identifies the missing element that a defect-cluster proposal must establish independently rather than infer from semiconductor quantum-dot results.

## Common conceptual and modeling errors

-

Identifying any two low-energy levels as a protected qubit is incorrect. The leakage gap controls transitions out of the code, whereas noise that projects to \(\bar Z\) still causes dephasing within it.

-

Ignoring the additional two states in the \(S=1/2\) sector is incorrect. Three equal-exchange spins have a four-dimensional \(S=1/2\) sector. A two-state projector requires fixed magnetization, another splitting mechanism, or the noiseless-subsystem interpretation.

-

Projecting onto \(P\) and permanently neglecting \(Q\) omits both leakage and virtual processes. A nonzero \(QVP\) produces leakage and virtual corrections of scale \(\lambda^2\|V\|^2/\Delta_{\mathrm{leak}}\).

-

Assuming that exchange is available whenever spins interact is incorrect. Magnetic dipolar coupling is anisotropic. Hyperfine coupling connects unlike spins. Optical and strain-mediated interactions introduce driven dynamics and loss. Each interaction must be projected from its actual physical operator.

-

Treating a decoherence-free subspace as a source of generic noise suppression is incorrect. Such a subspace cancels specified correlated noise. Independent fields, coupling mismatch, relaxation, optical back-action, and control errors may remain.

-

Active error correction must not be confused with a static energy gap. Repeated syndrome extraction can increase a logical lifetime, but this protection ends if the correction cycle stops.

A leakage gap is a static property of the energy spectrum. Active correction and spectral protection can coexist, but they are distinct mechanisms.

-

The cluster must not be identified as an anyon or described as topological encoding. Local pair correlations distinguish the two states.

Local exchange splits them at first order. The system is a finite encoded object, not a deconfined excitation of a many-body phase.

## Verification exercises

-

The orthonormality of \(|\tilde0\rangle\) and \(|\tilde1\rangle\) follows directly from their product-basis coefficients.

Expanding in the product basis,

\[
\langle\tilde0|\tilde1\rangle=\frac{1}{\sqrt{12}}(1-1+0)=0.
\]

For each state, the squared magnitudes of the coefficients sum to one. Equivalently, the singlet channel of the first two spins is orthogonal to their triplet channel.

-

The leakage gap satisfies \(\Delta_{\mathrm{leak}}=\min\bigl(b,3J/2-b\bigr)\) for \(0<b<3J/2\).

The \(m=-1/2\) partners require energy \(b\), while the lowest quartet member requires energy \(3J/2-b\). The leakage gap is the smaller of these two excitation energies.

-

At \(b=0\), the fixed-\(m\) encoding ceases to be energetically isolated.

The opposite-magnetization partners then have the same energy as the chosen pair. The leakage-gap formula assumes \(0<b<3J/2\).

-

The projected total magnetization is \(PS_{\mathrm{tot}}^zP=\frac12 P\).

Both \(|\tilde0\rangle\) and \(|\tilde1\rangle\) have \(m=+1/2\), so \(S_{\mathrm{tot}}^z\) acts as the scalar \(1/2\) throughout the range of \(P\). This is why collective longitudinal noise cannot distinguish the encoded states.

-

For noise of the form \(\sum_i S_i^z\otimes B_i\), rather than \(S_{\mathrm{tot}}^z\otimes B_z\), the decoherence-free-subspace condition generally fails.

Different bath operators \(B_i\) can distinguish the spatial spin patterns. The encoded pair is therefore not a decoherence-free subspace for this noise. An unsupported assumption of common-mode environmental coupling is not a substitute for the projection calculation.

-

The encoded qubit is not topological.

Local pair operators distinguish \(|\tilde0\rangle\) from \(|\tilde1\rangle\), and unequal local exchange splits them at first order. The logical operators are supported on three nearby spins. The construction is therefore a finite encoding rather than a topologically ordered phase.

## Sources

- [R112] P. Zanardi and M. Rasetti, “Noiseless quantum codes,”
Physical Review Letters 79, 3306–3309 (1997).
DOI: [10.1103/PhysRevLett.79.3306](https://doi.org/10.1103/PhysRevLett.79.3306).

- [R113] E. Knill, R. Laflamme, and L. Viola, “Theory of quantum error
correction for general noise,” Physical Review Letters
84, 2525–2528 (2000). DOI: [10.1103/PhysRevLett.84.2525](https://doi.org/10.1103/PhysRevLett.84.2525).
arXiv:quant-ph/9908066.

- [R114] D. P. DiVincenzo, D. Bacon, J. Kempe, G. Burkard, and K. B.
Whaley, “Universal quantum computation with the exchange interaction,”
Nature 408, 339–342 (2000). DOI: [10.1038/35042541](https://doi.org/10.1038/35042541).
arXiv:quant-ph/0005116.

- [R115] E. A. Laird, J. M. Taylor, D. P. DiVincenzo, C. M. Marcus, M.
P. Hanson, and A. C. Gossard, “Coherent spin manipulation in an
exchange-only qubit,” Physical Review B 82,
075403 (2010). DOI: [10.1103/PhysRevB.82.075403](https://doi.org/10.1103/PhysRevB.82.075403).
arXiv:1005.0273.

- [R116] A. Reiserer, N. Kalb, M. S. Blok, K. J. M. van Bemmelen, D.
J. Twitchen, M. Markham, T. H. Taminiau, and R. Hanson, “Robust
quantum-network memory using decoherence-protected subspaces of nuclear
spins,” Physical Review X 6, 021040 (2016).
DOI: [10.1103/PhysRevX.6.021040](https://doi.org/10.1103/PhysRevX.6.021040).
arXiv:1603.01602.

- [R117] J. Cramer, N. Kalb, M. A. Rol, B. Hensen, M. S. Blok, M.
Markham, D. J. Twitchen, R. Hanson, and T. H. Taminiau, “Repeated
quantum error correction on a continuously encoded qubit by real-time
feedback,” Nature Communications 7, 11526
(2016). DOI: [10.1038/ncomms11526](https://doi.org/10.1038/ncomms11526).
arXiv:1508.01388.

- [R118] H. P. Bartling, M. H. Abobeih, B. Pingault, M. J. Degen, S.
J. H. Loenen, C. E. Bradley, J. Randall, M. Markham, D. J. Twitchen, and
T. H. Taminiau, “Entanglement of spin-pair qubits with intrinsic
dephasing times exceeding a minute,” Physical Review X
12, 011048 (2022). DOI: [10.1103/PhysRevX.12.011048](https://doi.org/10.1103/PhysRevX.12.011048).
arXiv:2103.07961.

- [R119] C. E. Bradley, J. Randall, M. H. Abobeih, R. C. Berrevoets,
M. J. Degen, M. A. Bakker, M. Markham, D. J. Twitchen, and T. H.
Taminiau, “A ten-qubit solid-state spin register with quantum memory up
to one minute,” Physical Review X 9, 031045
(2019). DOI: [10.1103/PhysRevX.9.031045](https://doi.org/10.1103/PhysRevX.9.031045).
arXiv:1905.02094.

- [R106] F. Dolde et al., “High-fidelity spin entanglement
using optimal control,” Nature Communications
5, 3371 (2014). DOI: [10.1038/ncomms4371](https://doi.org/10.1038/ncomms4371).
arXiv:1309.4430.

- [R120] M.-R. Yun, F.-Q. Guo, L.-L. Yan, E. Liang, Y. Zhang, S.-L.
Su, C. X. Shan, and Y. Jia, “Parallel-path implementation of
nonadiabatic geometric quantum gates in a decoherence-free subspace with
nitrogen-vacancy centers,” Physical Review A
105, 012611 (2022). DOI: [10.1103/PhysRevA.105.012611](https://doi.org/10.1103/PhysRevA.105.012611).

---
