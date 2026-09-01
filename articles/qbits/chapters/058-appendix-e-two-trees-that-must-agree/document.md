# Appendix E — Consistency of alternative fusion trees

Consider three particles arranged in a line, with topological charges \(a\), \(b\), and \(c\). A topological charge labels the superselection sector of an excitation. Their combined, or fused, total charge is fixed to be \(d\).

There are two possible parenthesizations of the fusion process. The first combines \(a\) and \(b\), then combines the result with \(c\). The second combines \(b\) and \(c\), then combines the result with \(a\). These descriptions differ only in their parenthesization; the particles do not move.

The two parenthesizations define two bases of the same fusion space. Subsequent braid calculations may use either fusion tree, but physical results cannot depend on the selected parenthesization.

## Left-associated and right-associated fusion bases

The following convention places the incoming charges at the top of each diagram and the total charge at the bottom.

```
Read top to bottom

((a b)_e c)_d (a (b c)_f)_d

a b c a b c
\ / | | \ /
e | | f
\ / \ /
d d
```

The internal labels \(e\) and \(f\) denote the allowed intermediate charges. If a fusion vertex admits more than one linearly independent way to combine the same three charge labels, the vertex also carries a basis label. The vertex bases are assumed to be orthonormal, and all diagrams are oriented downward.

A fusion tree is, by definition, a parenthesization together with a choice of intermediate charges for a many-particle state with fixed external labels. The tree specifies a basis; it does not assert that one physical collision occurred before another.

## Associativity as a change of basis

Changing the pairing does not move the particles. It changes only the basis used to represent the fusion state:

```
a b c a b c
\ / | | \ /
e | --> | f
\ / \ /
d d
```

Let \(\mu\) label the vertex \(a,b\to e\), and let \(\nu\) label the vertex \(e,c\to d\) in the left-associated tree. Let \(\alpha\) label the vertex \(b,c\to f\), and let \(\beta\) label the vertex \(a,f\to d\) in the right-associated tree. The transformation between these bases is

\[
\big|((ab)_e c)_d;\mu,\nu\big\rangle
=
\sum_{f,\alpha,\beta}
[F^{abc}_d]_{(e,\mu,\nu)(f,\alpha,\beta)}
\big|(a(bc)_f)_d;\alpha,\beta\big\rangle.
\]

Each vertex label ranges over a fusion multiplicity:
\(\mu=1,\ldots,N_{ab}^{e}\),
\(\nu=1,\ldots,N_{ec}^{d}\),
\(\alpha=1,\ldots,N_{bc}^{f}\), and
\(\beta=1,\ldots,N_{af}^{d}\).
The fusion multiplicity \(N_{ab}^{e}\) is a nonnegative integer that counts the independent ways in which charges \(a\) and \(b\) can fuse to total charge \(e\).

The matrix elements in this basis transformation are the \(F\)-symbols. They relate two representations of the same three-body state and do not describe an additional physical event.

In a unitary anyon theory, meaning an anyon theory whose fusion spaces carry inner products and whose allowed transformations preserve those inner products, \(F^{abc}_d\) is a unitary matrix on the fixed-\(d\) fusion space. Without the unitarity assumption, the two fusion trees still describe the same abstract vector space. However, probabilities computed in one basis need not agree with those computed in the other by applying a naive conjugate transpose.

## Oriented exchange of two charges

A physical exchange changes the positions of two charges. For fixed total charge \(c\), a selected counterclockwise exchange is the linear map

\[
R^{ab}_c:V_{ab}^{c}\longrightarrow V_{ba}^{c}.
\]

Here \(V_{ab}^{c}\) is the fusion space whose elements represent the distinct ways in which \(a\) and \(b\) can fuse to total charge \(c\).

The matrix elements of this map are the \(R\)-symbols. Unlike an \(F\)-move, an \(R\)-move represents an oriented exchange rather than a change of parenthesization.

In a multiplicity-free theory, in which each fusion multiplicity is either zero or one, \(R^{ab}_c\) is a phase for every allowed channel \(c\). When fusion multiplicities are present, it is a unitary matrix between the corresponding vertex spaces.

Under the stated oriented-domain conventions, a clockwise exchange is \((R^{ba}_c)^{-1}\). Replacing every \(R\)-symbol by its complex conjugate is not generally valid unless the charge labels and orientation conventions have also been checked.

If orientation information is omitted, clockwise and counterclockwise braid words can appear identical in notation even when they represent different operators. The hexagon equations introduced below require this orientation information.

## Three Ising \(\sigma\) anyons

The Ising charges \(1\), \(\psi\), and \(\sigma\) satisfy the fusion rules

\[
\sigma\times\sigma=1+\psi,
\qquad \psi\times\sigma=\sigma,
\qquad \psi\times\psi=1.
\]

Consider three \(\sigma\) anyons with total charge \(\sigma\). The intermediate charge in the left-associated fusion tree is \(e\in\{1,\psi\}\). In a standard gauge, meaning a standard choice of phases for the vertex basis states,

\[
F\equiv F^{\sigma\sigma\sigma}_{\sigma}
=\frac1{\sqrt2}
\begin{pmatrix}1&1\\1&-1\end{pmatrix},
\]

\[
R^{\sigma\sigma}_{1}=e^{-i\pi/8},
\qquad
R^{\sigma\sigma}_{\psi}=e^{3i\pi/8}.
\]

The rows and columns of \(F\) are ordered as \((1,\psi)\). Direct matrix multiplication gives \(F^\dagger F=I\) and \(F^{-1}=F\). Consequently, a state with left intermediate channel \(e=1\) is represented in the right-associated basis as

\[
|1\rangle_L=\frac{|1\rangle_R+|\psi\rangle_R}{\sqrt2}.
\]

A measurement of the right fusion channel therefore yields either result with probability \(1/2\). The fusion rule specifies the two allowed outcomes, while the \(F\)-matrix specifies their amplitudes.

Define

\[
B_1=\begin{pmatrix}R^{\sigma\sigma}_1&0\\0&R^{\sigma\sigma}_\psi\end{pmatrix}
=e^{-i\pi/8}\begin{pmatrix}1&0\\0&i\end{pmatrix}
\]

as the operator that exchanges the first pair in the left-associated basis. To exchange the second pair, the channel of that pair is made explicit by an \(F\)-move:

\[
B_2=FB_1F^{-1}
=\frac{e^{-i\pi/8}}2
\begin{pmatrix}1+i&1-i\\1-i&1+i\end{pmatrix}.
\]

Let \(D_0=\operatorname{diag}(1,i)\), and temporarily omit the common phase. Direct multiplication then gives

\[
D_0(FD_0F)D_0=(FD_0F)D_0(FD_0F)
=\frac{1+i}{2}
\begin{pmatrix}1&1\\1&-1\end{pmatrix}.
\]

Restoring the common phase \(e^{-3i\pi/8}\) on both sides establishes

\[
B_1B_2B_1=B_2B_1B_2.
\]

Thus, the local \(F\)- and \(R\)-symbols define a representation of the three-strand braid relation. They also satisfy \(B_1B_2\ne B_2B_1\), so the representation is non-Abelian. Consistency with the braid relation does not imply commutativity [R015]; [R017].

## The basis-independent associator

Before bases are selected for the fusion vertices, reassociation is represented by the natural isomorphism

\[
\alpha_{a,b,c}:(a\otimes b)\otimes c
\to a\otimes(b\otimes c).
\]

The tensor product \(\otimes\) represents fusion at the categorical level. The map \(\alpha\) is called the associator. An \(F\)-symbol is a matrix element of \(\alpha\) after bases have been selected for the relevant fusion spaces.

For fixed \(a,b,c,d\), unitarity of these matrix elements is expressed by

\[
\sum_{f,\alpha,\beta}
[F^{abc}_d]_{(e,\mu,\nu)(f,\alpha,\beta)}
[F^{abc}_d]^*_{(e',\mu',\nu')(f,\alpha,\beta)}
=
\delta_{ee'}\delta_{\mu\mu'}\delta_{\nu\nu'},
\]

where \(*\) denotes complex conjugation and \(\delta\) is the Kronecker delta, which equals one when its indices are equal and zero otherwise. This identity assumes that the displayed vertex bases are orthonormal. Without orthonormality, the abstract associator \(\alpha\) remains an isomorphism, but the displayed conjugate-transpose identity does not apply.

## Four-charge reassociation and the pentagon equation

Four objects can be reassociated from \((((a\otimes b)\otimes c)\otimes d)\) to \(a\otimes(b\otimes(c\otimes d))\) by two routes:

```
((a b) (c d))
/ \
(((a b) c) d) (a (b (c d)))
\ /
((a (b c)) d) -> (a ((b c) d))
```

The upper route applies two associators, whereas the lower route applies three. Equality of the corresponding composite maps is the pentagon equation:

\[
\boxed{
\alpha_{a,b,c\otimes d}\circ\alpha_{a\otimes b,c,d}
=
(\operatorname{id}_a\otimes\alpha_{b,c,d})
\circ\alpha_{a,b\otimes c,d}
\circ(\alpha_{a,b,c}\otimes\operatorname{id}_d)
}.
\]

Both sides have the same source and target, and the rightmost map acts first. Expanding this operator identity in fusion-tree bases produces polynomial equations in the entries of the \(F\)-matrices. These equations include sums over every allowed intermediate charge and multiplicity label [R022]; [R019].

As a limiting example, consider a pointed model in a gauge where every allowed fusion space is one-dimensional and every associator is \(F=1\). In this case, the pentagon reduces to \(1\cdot1=1\cdot1\cdot1\).

Nontrivial pointed categories can instead have phase-valued associators classified by a group \(3\)-cocycle. In that case, the pentagon equation is exactly the cocycle condition. In the Ising and Fibonacci theories, nontrivial matrix-valued \(F\)-symbols satisfy the same equation.

The pentagon equation is a required coherence condition. Without it, a four-anyon amplitude could depend on the selected sequence of intermediate basis transformations.

## Braiding an object past a composite

Let

\[
\beta_{a,b}:a\otimes b\to b\otimes a
\]

denote the categorical braiding, whose matrix elements in selected bases are the \(R\)-symbols. Exchanging \(a\) past the composite \(b\otimes c\) must agree with exchanging \(a\) past \(b\) and then past \(c\). Because the parenthesization changes during these processes, the exchange maps must be composed with associators.

With the rightmost map acting first, the positive-crossing identity is

\[
\boxed{
\alpha_{b,c,a}\circ\beta_{a,b\otimes c}\circ\alpha_{a,b,c}
=
(\operatorname{id}_b\otimes\beta_{a,c})
\circ\alpha_{b,a,c}
\circ(\beta_{a,b}\otimes\operatorname{id}_c)
}.
\]

Both sides map \((a\otimes b)\otimes c\) to \(b\otimes(c\otimes a)\). The companion identity describes moving a composite past \(c\):

\[
\boxed{
\alpha^{-1}_{c,a,b}\circ\beta_{a\otimes b,c}\circ\alpha^{-1}_{a,b,c}
=
(\beta_{a,c}\otimes\operatorname{id}_b)
\circ\alpha^{-1}_{a,c,b}
\circ(\operatorname{id}_a\otimes\beta_{b,c})
}.
\]

Both sides map \(a\otimes(b\otimes c)\) to \((c\otimes a)\otimes b\). These identities are the hexagon equations. Each equates two compositions of associators and exchanges that form the six sides of a commutative hexagon and must define the same linear map.

Together with the pentagon equation, the hexagon equations ensure that \(F\)-moves and crossings assign an unambiguous value to any equivalent labeled ribbon diagram [R022]; [R023]. If either hexagon is omitted, exchange is no longer guaranteed to be compatible with fusion on one side of the tensor product. The two equations therefore express distinct compatibility conditions.

For reference, one component of the first hexagon in a multiplicity-free theory is

\[
R^{ab}_{e}[F^{bac}_{d}]_{eg}R^{ac}_{g}
=
\sum_f [F^{abc}_{d}]_{ef}R^{a f}_{d}[F^{bca}_{d}]_{fg}.
\]

This expression follows the conventions established at the beginning of the appendix. The sum includes only allowed intermediate charges \(f\). Sources that use upward-oriented trees, clockwise \(R\)-symbols, or the inverse definition of \(F\) give equations that appear different but are equivalent after conventions are translated.

## Derivation of the braid relations

For three anyons, define \(B_1\) by applying \(R\) to the first pair in the selected left-associated basis. Define \(B_2\) by applying an \(F\)-move, then an \(R\)-move to the second pair, and finally the inverse \(F\)-move. The hexagon equations make exchange compatible with fusion, while the pentagon equation makes all reassociation routes equivalent. It follows that

\[
B_iB_{i+1}B_i=B_{i+1}B_iB_{i+1},
\qquad
B_iB_j=B_jB_i\quad(|i-j|\ge2).
\]

The Ising calculation above verifies the first identity in the smallest matrix example. Satisfaction of these relations is necessary for a braid representation. It does not imply that the image of the representation is dense or that the representation is computationally universal.

## Double braiding and monodromy

A single exchange depends on the ordered pair \(a,b\). A full monodromy is a double braid that returns the objects to their original order. In a multiplicity-free fusion channel \(c\), it is

\[
M^{ab}_{c}=R^{ab}_{c}R^{ba}_{c}.
\]

A single exchange retains information about the initial ordering, whereas the double braid describes the complete interferometric process that restores the original ordering.

In a ribbon theory, which includes a compatible notion of braiding and twisting, the balancing relation connects the double braid to the topological twists:

\[
M^{ab}_{c}=\frac{\theta_c}{\theta_a\theta_b},
\]

where \(\theta_x\) is the phase associated with a \(2\pi\) twist of the simple charge \(x\). This combination is invariant under the vertex rephasings described below. It is therefore more directly related to an interferometric observable than either individual \(R\) phase considered separately [R015]; [R023].

For the Ising channel \(a=b=\sigma\), the standard twists are \(\theta_1=1\), \(\theta_\psi=-1\), and \(\theta_\sigma=e^{i\pi/8}\). The vacuum channel gives

\[
M^{\sigma\sigma}_{1}
=(e^{-i\pi/8})^2=e^{-i\pi/4}
=\frac{\theta_1}{\theta_\sigma^2},
\]

while the \(\psi\) channel gives

\[
M^{\sigma\sigma}_{\psi}
=(e^{3i\pi/8})^2=e^{3i\pi/4}
=\frac{\theta_\psi}{\theta_\sigma^2}.
\]

The relative sign therefore distinguishes the two fusion channels. Because a common framing convention can change how individual twist phases are reported, any table of these phases must specify its convention.

## Gauge transformations of fusion vertices

A different orthonormal basis may be selected at each fusion vertex. In a multiplicity-free theory, this basis change is specified by a phase:

\[
|a,b;c\rangle' = u^{ab}_{c}|a,b;c\rangle,
\qquad |u^{ab}_{c}|=1.
\]

Under this change, the symbols transform as

\[
[F^{abc}_d]'_{ef}
=
\frac{u^{ab}_{e}u^{ec}_{d}}
{u^{bc}_{f}u^{af}_{d}}
[F^{abc}_d]_{ef},
\]

\[
[R^{ab}_{c}]'
=
\frac{u^{ab}_{c}}{u^{ba}_{c}}R^{ab}_{c}.
\]

When fusion multiplicities are present, each \(u\) becomes a unitary matrix, and the formulas include the corresponding matrix contractions. These transformations are gauge changes: they represent the same physics in different vertex bases.

Gauge transformations preserve the pentagon and hexagon equations. They also conjugate complete braid operators when the external computational basis is changed.

An isolated matrix element such as \([F]_{ef}\) is therefore not generally observable. Gauge-invariant information includes consistently defined fusion probabilities, eigenvalues or traces of closed braid operations, topological spins, and modular data. Comparisons across sources still require specified framing and overall-phase conventions [R015]; [R019].

The mirror theory reverses the crossings. In a unitary convention, its braiding data are related to inverse or complex-conjugate data, but the orientation labels and framing phases must still be tracked. Consequently, chiral Fibonacci theory, its mirror theory, and a doubled theory containing both cannot be identified by simply removing a minus sign.

## Limits of consistency tables

[Theory] A table of \(N\), \(F\), and \(R\) that satisfies unitarity, the pentagon equation, and the hexagon equations defines internally consistent topological data. It does not prove that a local Hamiltonian realizes those data, and it does not establish the existence of a many-body gap [R017]; [R019].

[Numerics] The extraction of approximate matrices from a finite system should report the basis conventions, finite-size scaling, leakage outside the proposed fusion space, and residual path dependence. Agreement for a single braid word does not test the complete coherence structure.

[Experiment] A processor that compiles the Ising matrices above demonstrates the programmed representation to its measured accuracy. Evidence for intrinsic anyons additionally requires showing that localized excitations, fusion sectors, and braid responses emerge from the device’s many-body physics. Assigning anyonic names to the basis vectors of an encoded subspace does not by itself establish intrinsic anyonic behavior.

## Common sources of error

- Multiplying braid words using one temporal ordering convention while drawing them using the opposite convention.

- Applying \(F\) where \(F^{-1}\) is required to return to the original fusion tree.

- Summing over forbidden intermediate labels instead of enforcing the fusion coefficients.

- Omitting vertex multiplicity indices when \(N_{ab}^{c}>1\).

- Comparing untransformed symbols from different gauges as though their disagreement were physical.

- Treating residual violations of the pentagon and hexagon equations as harmless numerical noise without comparing them with the claimed precision.

- Inferring computational universality solely from noncommuting braid matrices.

## Verification exercises

-

Verify that \(F^{\sigma\sigma\sigma}_{\sigma}\) is its own inverse.

Direct multiplication of the displayed matrix by itself gives \(I\). Together with \(F^\dagger F=I\), this result implies \(F^{-1}=F\).

-

State the action represented by an \(R\)-symbol.

An \(R\)-symbol represents an oriented exchange of two charges in a specified total fusion channel.

-

Verify that both sides of the pentagon equation have the same source and target.

Each composite begins at \((((a\otimes b)\otimes c)\otimes d)\) and ends at \(a\otimes(b\otimes(c\otimes d))\). The two routes are different factorizations of the same map.

-

Explain why two hexagon equations are required.

Braiding must be compatible with tensor products on both sides. One equation describes moving one object past a composite, and the other describes moving a composite past one object.

-

Verify that \(M^{\sigma\sigma}_{1}=\theta_1/\theta_\sigma^2\) using the listed phases.

\(R^{\sigma\sigma}_{1}=e^{-i\pi/8}\) squares to \(e^{-i\pi/4}\), while \(\theta_1/\theta_\sigma^2=1/e^{i\pi/4}=e^{-i\pi/4}\).

-

State the consequence of omitting the pentagon equation.

A four-anyon amplitude can then depend on the selected sequence of intermediate basis changes. The symbols no longer define a single linear map.

## Sources

- [R015] C. Nayak, S. H. Simon, A. Stern, M. Freedman, and S. Das
Sarma, “Non-Abelian Anyons and Topological Quantum Computation,”
Reviews of Modern Physics 80, 1083–1159
(2008). DOI: [10.1103/RevModPhys.80.1083](https://doi.org/10.1103/RevModPhys.80.1083);
[arXiv:0707.1889](https://arxiv.org/abs/0707.1889).

- [R017] A. Kitaev, “Anyons in an Exactly Solved Model and Beyond,”
Annals of Physics 321, 2–111 (2006). DOI: [10.1016/j.aop.2005.10.005](https://doi.org/10.1016/j.aop.2005.10.005);
[arXiv:cond-mat/0506438](https://arxiv.org/abs/cond-mat/0506438).

- [R022] G. Moore and N. Seiberg, “Classical and Quantum Conformal
Field Theory,” Communications in Mathematical Physics
123, 177–254 (1989). DOI: [10.1007/BF01238857](https://doi.org/10.1007/BF01238857).

- [R019] B. Bakalov and A. Kirillov Jr., Lectures on Tensor
Categories and Modular Functors, University Lecture Series 21,
American Mathematical Society (2001). DOI: [10.1090/ulect/021](https://doi.org/10.1090/ulect/021).

- [R023] P. Bonderson, K. Shtengel, and J. K. Slingerland,
“Interferometry of Non-Abelian Anyons,” Annals of Physics
323, 2709–2755 (2008). DOI: [10.1016/j.aop.2008.01.012](https://doi.org/10.1016/j.aop.2008.01.012);
[arXiv:0707.4206](https://arxiv.org/abs/0707.4206).


---
