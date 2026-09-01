# Chapter 19 — Chirality and reversed chirality

An oriented quasiparticle braid has a definite spatial orientation. Applying an orientation-preserving transformation preserves the braid sequence and orientation, whereas spatial reflection reverses the orientation and maps clockwise exchanges to counterclockwise exchanges.

A braid and its spatially reflected counterpart therefore represent the two possible orientations of the same exchange sequence. Combining them produces two oppositely oriented sectors rather than a single sector without orientation-dependent structure.

Chapter 15 introduced one fusion rule, and Chapter 18 used that rule to construct a lattice Hamiltonian. Neither result, by itself, specifies whether the associated topological phase is chiral, reverse-chiral, or doubled.

## Orientation dependence of braiding

A braid is the spacetime trajectory produced by exchanging quasiparticles. For two non-Abelian quasiparticles—excitations whose exchanges act noncommutatively on a degenerate fusion space—a braid has a definite orientation. Performing the braid in one orientation transforms the fusion state by a unitary matrix \(U\), where “unitary” means that the transformation preserves inner products and probabilities.

Spatial reflection converts clockwise exchanges into counterclockwise exchanges. After consistent basis choices, the reflected braid is represented by the complex-conjugate matrix \(U^*\).

A topological medium is chiral if it realizes only one of these orientations of the braiding data. Reversing spatial orientation then changes the braiding data. Chirality is therefore a physical property of the phase rather than merely a naming convention.

The chiral Fibonacci theory, denoted by \(\mathcal F\), is the theory with one such orientation. Its nontrivial topological charge is \(\tau\), where a topological charge labels a superselection sector of quasiparticle excitations.

The term Fibonacci will not be used by itself to identify either a phase or a quasiparticle, because it names a family of related theories rather than a unique member of that family.

Omitting the orientation-dependent braiding data does not define a complete theory. The fusion rule

\[
\tau\times\tau=1+\tau
\]

is shared by the chiral theory and its spatially reflected counterpart, but their braid matrices differ.

## Reverse-braided Fibonacci theory

Spatial reflection produces a second theory, called the mirror chiral Fibonacci theory and denoted by \(\overline{\mathcal F}\). Its corresponding nontrivial charge is \(\bar\tau\).

The bar denotes reverse braiding; it does not denote an antiparticle. Both \(\tau\) and \(\bar\tau\) are self-dual, meaning that each is isomorphic to its dual charge and can fuse with itself to produce the vacuum.

Consequently, \(\mathcal F\) and \(\overline{\mathcal F}\) are distinct phases with opposite braiding orientations. A Hamiltonian that realizes one phase does not necessarily realize the other.

Interpreting the bar as “antiparticle” would incorrectly imply that a distinct charge is required to fuse with \(\tau\) into the vacuum channel. Because \(\tau\) is self-dual, \(\tau\times\tau\) contains the vacuum channel.

## Paired charge labels and doubling

The two theories can be represented as independent categorical factors. An excitation in the combined theory then carries the pair of labels

\[
(\text{charge in }\mathcal F,\ \text{charge in }\overline{\mathcal F}).
\]

These paired labels provide a useful representation of doubling. They are not the formal definition of the doubled theory, and they do not require a physical device to contain two literal layers.

Formally, the construction combines each object of a fusion theory with every consistent half-braiding, meaning every coherent prescription for braiding that object with all other objects. For a modular input theory—a braided fusion theory with nondegenerate braiding—this construction factors into the original theory and its reverse-braided mirror [R160].

The resulting doubled-Fibonacci theory is denoted by \(\mathrm{DFib}\):

\[
\mathrm{DFib}=\mathcal F\boxtimes\overline{\mathcal F}.
\]

Here \(\boxtimes\) denotes the product of the two independent topological theories. The word “doubled” refers to combining a theory with its reverse, not to making an ordinary duplicate or producing a trivial theory. The two oppositely oriented sectors remain distinct.

[Theory] A Levin–Wen model whose input is the Fibonacci fusion category has bulk anyons described by the Drinfeld center of that category. Because the chiral Fibonacci category is modular, its center is equivalent to a product of the chiral theory and its reverse-braided mirror [R018]; [R160]. The standard commuting-projector construction therefore realizes \(\mathrm{DFib}\), not \(\mathcal F\) alone.

This distinction changes the list of bulk charges, the ground-state degeneracy on a torus, the edge structure, the thermal Hall response, and the operations that must be controlled for computation. A defect lattice designed for a different member of the Fibonacci family may therefore realize different physical topological data despite otherwise successful engineering.

## Simple bulk charges

The chiral theory \(\mathcal F\) contains the charges \(1\) and \(\tau\). Its mirror \(\overline{\mathcal F}\) contains \(\bar 1\) and \(\bar\tau\). The doubled theory \(\mathrm{DFib}\) therefore contains four simple bulk charges, where “simple” means that the charge is an irreducible superselection sector.

| Doubled-Fibonacci charge | Pair label | Quantum dimension | Topological spin |
|---|---|---|---|
| vacuum \(\mathbf 1\) | \((1,\bar1)\) | \(1\) | \(1\) |
| left-handed charge \(x\) | \((\tau,\bar1)\) | \(\varphi\) | \(e^{4\pi i/5}\) |
| right-handed charge \(y\) | \((1,\bar\tau)\) | \(\varphi\) | \(e^{-4\pi i/5}\) |
| diagonal charge \(b\) | \((\tau,\bar\tau)\) | \(\varphi^2\) | \(1\) |

Here

\[
\varphi=(1+\sqrt5)/2
\]

is the golden ratio. Quantum dimension measures the asymptotic growth of the fusion-state space associated with multiple charges. Topological spin is the phase obtained by a \(2\pi\) rotation of a topological charge. The displayed convention sets \(\theta_\tau=e^{4\pi i/5}\); reversing every braid complex-conjugates this value. The quantum dimension of a paired charge is the product of the component quantum dimensions [R160]; [R015].

Thus, doubled Fibonacci is not the two-object theory \(\{1,\tau\}\) under a different name. It contains the two simple charges \(x\) and \(y\), each of which generates one chiral Fibonacci fusion subtheory, together with the diagonal charge \(b\).

The symbol \(b\) is only a label. It does not imply that this non-Abelian charge is an ordinary pointlike boson. Although \(b\) has trivial topological spin, its quantum dimension is \(\varphi^2>1\). It is therefore distinct from the vacuum.

## Componentwise fusion

Fusion of paired charges is performed independently in the two factors:

\[
(a,\bar c)\times(a',\bar c')
=(a\times a',\ \bar c\times\bar c').
\]

This equation defines the componentwise fusion rule in the product theory. For example,

\[
x\times y
=(\tau,\bar1)\times(1,\bar\tau)
=(\tau,\bar\tau)=b.
\]

This fusion process has only one outcome. Fusing the resulting charge \(b\) with itself gives

\[
\begin{aligned}
b\times b
&=(\tau\times\tau,\ \bar\tau\times\bar\tau)\\
&=(1+\tau,\ \bar1+\bar\tau)\\
&=\mathbf1+x+y+b.
\end{aligned}
\]

The complete nontrivial fusion rules are therefore

\[
\begin{aligned}
x\times x&=\mathbf1+x, & y\times y&=\mathbf1+y,\\
x\times y&=b, & x\times b&=y+b,\\
y\times b&=x+b, & b\times b&=\mathbf1+x+y+b.
\end{aligned}
\]

The charge \(x\) consequently has the same self-fusion rule as \(\tau\) in Chapter 15, while \(y\) has the corresponding rule in the mirror sector. The diagonal charge \(b\) is an additional object and is not another copy of \(\tau\).

Retaining only the first components and omitting the barred components would reproduce the chiral fusion table but would incorrectly eliminate the distinction between \(y\) and \(b\) as bulk charges.

## Total quantum dimension

For any anyon theory, the total quantum dimension \(\mathcal D\) is defined by

\[
\mathcal D^2=\sum_a d_a^2,
\]

where the sum is over all simple charges and \(d_a\) is the quantum dimension of charge \(a\). This quantity measures the combined size of the theory’s simple superselection sectors. For doubled Fibonacci,

\[
\begin{aligned}
\mathcal D_{\mathrm{DFib}}^2
&=1+\varphi^2+\varphi^2+\varphi^4\\
&=(1+\varphi^2)^2,\\
\mathcal D_{\mathrm{DFib}}&=1+\varphi^2=\varphi+2.
\end{aligned}
\]

The final equality follows from \(\varphi^2=\varphi+1\). Thus, in categorical dimension, \(\mathcal D_{\mathrm{DFib}}\) is the square of the corresponding quantity for one chiral sector, as expected for a doubled theory [R160].

On a torus, the ideal doubled-Fibonacci theory has four ground-state sectors, one for each simple bulk charge. The chiral Fibonacci theory has two. A reported ground-space count of two is therefore inconsistent with doubled-Fibonacci topological order.

## Braiding in individual and diagonal sectors

When only \(x\) charges are braided, the mirror component remains in the vacuum sector. Their fusion spaces, \(F\)-moves, and braid matrices are exactly those of \(\mathcal F\). An \(F\)-move is a basis transformation between different fusion orderings. When only \(y\) charges are braided, the corresponding matrices are the complex conjugates of those in \(\mathcal F\).

For diagonal charges, both components participate. If a braid word is represented by \(U\) in \(\mathcal F\), then on the factorized doubled fusion space it is represented schematically by

\[
U\otimes U^*.
\]

The symbol \(\otimes\) denotes the tensor product of the actions on the two factors. In general, \(U\otimes U^*\) is not the identity. Opposite chiralities cancel the net chirality of the combined theory, but they do not cancel every braid-induced transformation.

If the two factors are constrained to undergo identical trajectories as an inseparable pair, the computational operation is \(U\otimes U^*\), not \(U\). The usual universality argument based on a single chiral sector therefore does not directly apply.

The fusion rule of \(b\) is also insufficient to justify reusing that chiral-sector argument. A computational specification must identify which charges can be transported and measured.

## Chiral central charge and thermal Hall response

A topological phase is chiral when its low-energy topological data have a nonzero net orientation dependence. Reversing spatial orientation replaces its braiding with reverse braiding.

The residual chirality is quantified by the chiral central charge \(c_-\), defined modulo the appropriate invertible phase. At an interface with the vacuum, it determines the universal low-temperature thermal Hall coefficient [R015]:

\[
\frac{\kappa_{xy}}{T}=c_-\frac{\pi^2 k_B^2}{3h},
\]

where \(\kappa_{xy}\) is thermal Hall conductance in watts per kelvin, \(T\) is temperature in kelvin, \(k_B\) is Boltzmann’s constant, and \(h\) is Planck’s constant. Dimensional consistency follows because \(k_B^2/h\) has units \(\mathrm{W\,K^{-2}}\), which are also the units of \(\kappa_{xy}/T\).

The chiral Fibonacci theory has nonzero \(c_-\). The mirror chiral Fibonacci theory has the opposite value.

In doubled Fibonacci, the two contributions sum to zero [R160]; [R015]. Correspondingly, the topological spins of \(x\) and \(y\) are complex conjugates, and the diagonal charge has topological spin one.

A vanishing \(c_-\) does not imply trivial topological order. It also does not prove that a microscopic Hamiltonian is invariant under time reversal. It establishes that the doubled topological data have no net chiral anomaly.

## Half-braiding and the Drinfeld center

A Levin–Wen edge may carry only the input labels \(1\) and \(\tau\), even though the bulk theory contains four charges. This difference is not a counting inconsistency. A bulk object contains both an input object and a coherent specification of its braiding with every other input object.

This additional specification is called a half-braiding. For an object \(X\), a half-braiding is a consistent family of isomorphisms relating \(X\otimes Y\) to \(Y\otimes X\) for every object \(Y\), subject to the required naturality and coherence conditions. These conditions extend the local fusion and recoupling data into genuine two-dimensional bulk braiding data.

For an input fusion category \(\mathcal C\), combining each object with every consistent half-braiding produces the Drinfeld center \(Z(\mathcal C)\).

[Theory] Levin–Wen edge labels are input labels, while deconfined bulk quasiparticles are simple objects of \(Z(\mathcal C)\) [R018]; [R161]. For \(\mathcal C=\mathcal F\), modularity gives

\[
Z(\mathcal F)\simeq\mathcal F\boxtimes\overline{\mathcal F}
=\mathrm{DFib}.
\]

Microscopic edge labels therefore do not provide a complete list of emergent bulk quasiparticles. Omitting the half-braiding retains only the allowed fusion and recoupling data, not the full classification of bulk charges.

## Doubled order from commuting projectors

The ideal string-net Hamiltonian is

\[
H=-\sum_v Q_v-\sum_p B_p,
\]

where \(Q_v\) and \(B_p\) are local vertex and plaquette projectors, respectively. All of these local projectors commute. The ground state is constructed from local recouplings without selecting a net direction of propagation.

The Drinfeld center includes every consistent braiding prescription together with the reverse-braided information required for a nonchiral bulk. This property explains why the standard Levin–Wen commuting-projector construction naturally produces doubled topological orders [R018]; [R161].

This conclusion applies to that construction and does not prohibit chiral phases in lattice systems. Chiral topological order can be realized by noncommuting local Hamiltonians. A lattice Hamiltonian is not necessarily doubled, but a standard Levin–Wen commuting-projector Hamiltonian is.

## Boundary chirality and gapped edges

At a boundary between a standalone chiral Fibonacci phase and the trivial vacuum, the nonzero net chirality obstructs a completely gapped edge [R156]; [R015]. Low-energy edge modes must reproduce the bulk anomaly. Disorder may alter the detailed edge dynamics, but it cannot remove the net chiral energy flow without changing the bulk phase.

The doubled-Fibonacci theory has different boundary behavior. Couplings between its oppositely chiral edge sectors can open a gap. [Theory] It admits gapped boundaries described by suitable boundary data; in one categorical description the condensable diagonal combination is built from \(\mathbf1\oplus b\) [R156].

The existence of an allowed gapped boundary does not imply that every physical termination is gapped. Particular boundary couplings or symmetries may leave a termination gapless. A geometric specification of a boundary is therefore not a complete boundary condition.

A gapped doubled-Fibonacci boundary can also change which charges remain distinguishable or become confined at that boundary. Any proposal based on holes, punctures, or boundary quasiparticles must specify the boundary type.

## Computational access to chiral charge sectors

Consider four charges of type \(x=(\tau,\bar1)\), constrained to have total charge \(\mathbf1\). Their fusion space has two possible fusion paths. If \(a\) denotes the intermediate charge of the first pair, define

\[
|0_L\rangle:\ a=\mathbf1,
\qquad
|1_L\rangle:\ a=x.
\]

These two states span a two-dimensional fusion space that encodes a logical qubit. Braiding the \(x\) charges acts through the same dense braid-group representation as braiding charges in the chiral Fibonacci theory. A dense representation is one whose braid operations can approximate arbitrary target operations in the relevant unitary group.

[Theory] Those representations can approximate arbitrary logical unitaries, up to overall phase and with standard encoding and compilation qualifications [R136]; [R015]. The \(y\) sector provides the complex-conjugate construction.

An ideal doubled-Fibonacci phase can therefore support universal topological quantum computation if the architecture can create, transport, braid, fuse, and measure one selected chiral simple-object sector—either \(x\) or \(y\)—while suppressing leakage and unwanted mixing between sectors. The mirror sector does not cancel gates performed solely in the selected sector.

This conclusion has three limitations.

- The fusion rule alone does not establish universality. Universality depends on the \(F\)- and \(R\)-data, where \(R\)-data specify the action of elementary exchanges, and on access to the correct charge sector.

- If the hardware provides access only to the diagonal charge \(b\), or constrains mirror charges to undergo identical trajectories as inseparable pairs, universality does not follow from the standard chiral-sector argument.

- Universal braid representations do not provide initialization, topological-charge measurement, a low thermal anyon density, or an adequate many-body gap. These are additional physical requirements rather than consequences of the categorical data.

[Theory] Turaev–Viro codes make the computational statement constructive: under suitable access to encoded surfaces and topological operations, doubled theories derived from universal modular data can implement quantum computation [R158]. This result supports the ideal-model conclusion, but it does not demonstrate that a proposed defect Hamiltonian realizes the required operations.

Four descriptive levels must be distinguished. A physical spin or transmon is a microscopic qubit.

A fusion space formed by several \(x\) charges can encode a logical qubit. A digital circuit that stores the amplitudes of this fusion space emulates the doubled-Fibonacci model.

An emergent \(x\) charge requires a many-body phase whose low-energy bulk superselection sectors are those of \(\mathrm{DFib}\). Only in this final case is braiding implemented by adiabatic quasiparticle transport within an intrinsic topological medium.

## Digital simulation with 27 qubits

The mathematical distinction between chiral and doubled Fibonacci theories is established, but their material realization remains unresolved.

[Experiment] In 2024, Xu and collaborators used 27 superconducting transmon qubits to digitally prepare a three-plaquette state of the Levin–Wen model built from Fibonacci fusion-category data, then implemented open-string, recoupling, and braid circuits [R138]. They reported average vertex- and plaquette-projector expectation values of \(0.94\) and \(0.58\) for their optimized prepared state, under the device and measurement conditions given in that paper. The target string-net is a doubled-type topological model even though the paper uses a shorter anyon label.

The same experiment explicitly states that its braids involved no Hamiltonian dynamics of quasiparticle excitations and therefore did not inherit protection from a many-body energy gap [R138]. The transmons instead executed gates that emulated the intended fusion-space transformations.

This experimental result does not constitute evidence for an intrinsic chiral Fibonacci material phase or for an equilibrium doubled-Fibonacci phase stabilized in defect matter.

[Proposal] A static defect-spin architecture based on a Levin–Wen target should therefore specify \(\mathrm{DFib}\) in its requirements. It must derive a low-energy Hamiltonian with the correct Drinfeld center, many-body gap, ribbon operators, and controllable sector-resolved excitations. No result cited in this chapter establishes that diamond, sapphire, silicon carbide, or another defect host currently satisfies these conditions.

A chiral Fibonacci target would require a different engineering program. Such a program would need a mechanism that breaks time-reversal symmetry and produces nonzero net chirality. Deleting the designation “doubled” from a commuting-projector string-net proposal does not convert its topological order into a chiral phase.

## Common conceptual errors

Using \(\tau\) as the label for every nontrivial object obscures essential distinctions. In the doubled-Fibonacci bulk, \(x\), \(y\), and \(b\) are inequivalent. Assigning the same label \(\tau\) to all three discards topological-spin and fusion information.

Input string labels must not be confused with emergent anyons. The two Levin–Wen edge labels \(1,\tau\) define local Hilbert-space states.

By contrast, the four charges \(\mathbf1,x,y,b\) classify emergent bulk excitations. These objects belong to different descriptive levels.

The term “doubled” does not imply triviality. The net thermal Hall response cancels, but non-Abelian fusion spaces remain. The doubled-Fibonacci theory has four bulk sectors, total quantum dimension \(\varphi+2\), and nontrivial braiding.

Opposite chirality does not cancel every computational gate. It cancels the net chiral central charge. A braid restricted to the \(x\) sector is not accompanied by a braid in the \(y\) sector, so its computational action remains that of the chiral Fibonacci theory.

The existence of a gappable edge does not imply that a given edge is already gapped. A consistent gapped boundary does not determine the boundary Hamiltonian or the size of its gap.

A prepared wavefunction must not be identified with an equilibrium phase. A circuit can prepare a small state with ideal-model correlations and can implement an ideal braid matrix.

An analog topological phase additionally requires a local Hamiltonian, a robust many-body gap, a scalable bulk, and adiabatic quasiparticle motion. Digital simulation tests the model but does not convert the processor’s microscopic excitations into doubled-Fibonacci anyons.

## Conceptual checks

- **Topological order produced by the standard Levin–Wen model with Fibonacci fusion-category input.**

  The model produces doubled-Fibonacci order,

  \[
  Z(\mathcal F)\simeq\mathcal F\boxtimes\overline{\mathcal F},
  \]

  rather than a single chiral Fibonacci order.

- **Derivation of \(x\times y=b\) and \(b\times b=\mathbf1+x+y+b\).**

  The pair labels fuse independently:

  \[
  (\tau,\bar1)\times(1,\bar\tau)=(\tau,\bar\tau)=b,
  \]

  and

  \[
  (\tau\times\tau,\bar\tau\times\bar\tau)
  =(1+\tau,\bar1+\bar\tau)
  =\mathbf1+x+y+b.
  \]

- **Derivation of \(\mathcal D_{\mathrm{DFib}}=\varphi+2\).**

  \[
  \mathcal D^2
  =1+\varphi^2+\varphi^2+\varphi^4
  =(1+\varphi^2)^2,
  \]

  so \(\mathcal D=1+\varphi^2\). Using \(\varphi^2=\varphi+1\) gives

  \[
  1+\varphi^2=\varphi+2.
  \]

- **Limitation when hardware provides access only to the diagonal charge \(b\).**

  The standard chiral-sector universality argument does not apply. The fusion rule of \(b\) differs from that of \(\tau\), and braiding inseparable pairs acts as \(U\otimes U^*\), not as \(U\).

- **Limitation of a digital braid as evidence for an intrinsic doubled-Fibonacci phase.**

  A digital braid demonstrates controlled emulation of the model’s state and operations. It does not establish a protecting many-body Hamiltonian or emergent quasiparticles.

- **Reason doubled Fibonacci is nonchiral but nontrivial.**

  The two sectors have opposite chiral central charges, so their net chiral central charge vanishes. Their non-Abelian fusion and braiding data remain nontrivial.

A Levin–Wen model with the Fibonacci fusion category as input realizes \(\mathrm{DFib}\). Its four bulk charges are \(\mathbf1,x,y,b\).

The charges \(x\) and \(y\) have opposite chiral Fibonacci braid data. The doubled edge can be gapped even though a single chiral edge cannot.

Ideal universal computation is available through control of one chiral charge sector, not merely through observation of the fusion rule. Chapter 20 will apply these distinctions to assess what programmable hardware has actually prepared, fused, braided, and protected.

## Sources

- [R018] M. A. Levin and X.-G. Wen, “String-net condensation: A
physical mechanism for topological phases,” Physical Review B
71, 045110 (2005). DOI: [10.1103/PhysRevB.71.045110](https://doi.org/10.1103/PhysRevB.71.045110);
arXiv: [cond-mat/0404617](https://arxiv.org/abs/cond-mat/0404617).

- [R160] M. Müger, “From subfactors to categories and topology II: The
quantum double of tensor categories and subfactors,” Journal of Pure
and Applied Algebra 180, 159–219 (2003). DOI: [10.1016/S0022-4049(02)00248-7](https://doi.org/10.1016/S0022-4049(02)00248-7);
arXiv: [math/0111205](https://arxiv.org/abs/math/0111205).

- [R161] C.-H. Lin, M. Levin, and F. J. Burnell, “Generalized
string-net models: A thorough exposition,” Physical Review B
103, 195155 (2021). DOI: [10.1103/PhysRevB.103.195155](https://doi.org/10.1103/PhysRevB.103.195155);
arXiv: [2012.14424](https://arxiv.org/abs/2012.14424).

- [R156] A. Kitaev and L. Kong, “Models for gapped boundaries and
domain walls,” Communications in Mathematical Physics
313, 351–373 (2012). DOI: [10.1007/s00220-012-1500-5](https://doi.org/10.1007/s00220-012-1500-5);
arXiv: [1104.5047](https://arxiv.org/abs/1104.5047).

- [R136] M. H. Freedman, M. J. Larsen, and Z. Wang, “A modular functor
which is universal for quantum computation,” Communications in
Mathematical Physics 227, 605–622 (2002). DOI: [10.1007/s002200200645](https://doi.org/10.1007/s002200200645);
arXiv: [quant-ph/0001108](https://arxiv.org/abs/quant-ph/0001108).

- [R015] C. Nayak, S. H. Simon, A. Stern, M. Freedman, and S. Das
Sarma, “Non-Abelian anyons and topological quantum computation,”
Reviews of Modern Physics 80, 1083–1159
(2008). DOI: [10.1103/RevModPhys.80.1083](https://doi.org/10.1103/RevModPhys.80.1083);
arXiv: [0707.1889](https://arxiv.org/abs/0707.1889).

- [R158] R. König, G. Kuperberg, and B. W. Reichardt, “Quantum
computation with Turaev–Viro codes,” Annals of Physics
325, 2707–2749 (2010). DOI: [10.1016/j.aop.2010.08.001](https://doi.org/10.1016/j.aop.2010.08.001);
arXiv: [1002.2816](https://arxiv.org/abs/quant-ph/1002.2816).

- [R138] S. Xu et al., “Non-Abelian braiding of Fibonacci
anyons with a superconducting processor,” Nature Physics
20, 1469–1475 (2024). DOI: [10.1038/s41567-024-02529-6](https://doi.org/10.1038/s41567-024-02529-6);
stable article: [nature.com/articles/s41567-024-02529-6](https://www.nature.com/articles/s41567-024-02529-6).

---
