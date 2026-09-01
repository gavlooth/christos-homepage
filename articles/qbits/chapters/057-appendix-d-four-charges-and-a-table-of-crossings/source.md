# Appendix D — Four charges and a table of crossings

The following sequence is a mnemonic rather than a definition. A category consists of objects, morphisms, associative composition, and identity morphisms. A monoidal category additionally has a product and a unit object. A fusion category is a finite, semisimple, rigid, \(\mathbb C\)-linear monoidal category with further conditions specified below. Braided and ribbon structures add consistent exchange and twist operations. A modular tensor category is a nondegenerate braided ribbon fusion category in the setting considered here.

\[
\begin{aligned}
\text{category}
&\subset \text{monoidal category}
\subset \text{fusion category}\\
&\subset \text{braided/ribbon structures}
\subset \text{modular tensor category}.
\end{aligned}
\]

The symbols \(\subset\) do not denote literal set inclusions. Each step adds graphical structures and corresponding axioms. The initial graphical elements are a labeled wire and an arrow.

## Objects represented by labeled wires

Chapter 14 introduced the interpretation of fusion trees. A labeled edge in a fusion tree represents an object, such as a single topological charge or a direct sum of charges. An isolated labeled wire is drawn as follows.

```
a
|
|
|
```

The wire labeled \(a\) represents an object. The term *object* is used because it does not presuppose that the entity is a particle or a state. In an anyon theory, an object is a topological charge type or a direct sum of charge types.

Finite-dimensional complex Hilbert spaces can also serve as objects of a category. In another category, the only object may be a single unlabeled point.

## Morphisms represented by arrows

A box placed on a wire represents a map that may change the wire label.

```
a
|
[f]
|
b
```

With the top-to-bottom convention used in Chapter 14, the box \(f\) represents a process that begins at \(a\) and ends at \(b\).

The notation \(f:a\to b\) denotes this process. A *morphism* is an allowed arrow between two objects.

The remainder of this appendix develops structures obtained by composing such arrows.

For anyons, a morphism represents an allowed fusion or splitting process: it specifies a way to pass from one charge, or direct sum of charges, to another. The vector space of all morphisms from \(a\) to \(b\) is denoted by \(\operatorname{Hom}(a,b)\).

A *simple charge* is a charge object that cannot be decomposed as a nontrivial direct sum. If \(a\) and \(b\) are distinct simple charges, the superselection rule forbids morphisms between them:

\[
\operatorname{Hom}(a,b)=0\quad(a\ne b),
\qquad
\operatorname{Hom}(a,a)\cong\mathbb C.
\]

The second relation states that an endomorphism, meaning a morphism from an object to itself, of a simple charge is multiplication by a complex scalar. This statement is the categorical form of Schur’s lemma.

## Composition and identity morphisms

Suppose that \(f:a\to b\) and \(g:b\to c\). Because the output label of \(f\) agrees with the input label of \(g\), the corresponding boxes can be stacked.

```
a a
| |
[f] |
| = [g∘f]
b |
| |
[g] c
|
c
```

The stacked process is the composite morphism \(g\circ f:a\to c\). Composition is associative. Each object also has an identity morphism, which represents a process that leaves the object unchanged:

\[
h\circ(g\circ f)=(h\circ g)\circ f,
\qquad
f\circ\operatorname{id}_a=f=
\operatorname{id}_b\circ f.
\]

The identity morphism on \(a\) is denoted by \(\operatorname{id}_a:a\to a\).

A category consists of four ingredients: objects, morphisms, associative composition, and identity morphisms. Wires and boxes are graphical representations of these data; the category is the abstract mathematical structure that organizes them.

The category \(\mathbf{Hilb}_{\rm fd}\) has finite-dimensional complex Hilbert spaces as objects and linear maps as morphisms. A group provides another example of a category: it can be represented as a category with one object whose invertible morphisms are the group elements. The categorical abstraction retains the composition law while omitting structure that is not required for the analysis.

If identity morphisms are omitted, some arrows may still be composed, but an unchanged wire no longer represents a valid process. If associativity is omitted, three stacked boxes do not determine a unique composite arrow.

## The four simple charges of the toric code

The toric code has four simple charges:

\[
\{1,e,m,\varepsilon\},
\]

where \(1\) is the vacuum charge and \(\varepsilon=e\otimes m\). The symbol \(\otimes\) denotes categorical fusion. Chapter 16 often uses \(\times\) for the same operation on charge labels. The fusion rules are

\[
e\otimes e=m\otimes m=\varepsilon\otimes\varepsilon=1,
\]

\[
e\otimes m=\varepsilon,
\qquad e\otimes\varepsilon=m,
\qquad m\otimes\varepsilon=e.
\]

Each pair of simple charges has a unique fusion outcome. Consequently, every simple charge has quantum dimension one. The *quantum dimension* \(d_a\) measures the asymptotic growth of fusion-state spaces involving the charge \(a\). The *total quantum dimension* \(\mathcal D\) is obtained by summing the squared quantum dimensions and taking the square root:

\[
\mathcal D=\sqrt{d_1^2+d_e^2+d_m^2+d_\varepsilon^2}=2.
\]

Fusion rules alone do not determine exchange statistics. The braiding data additionally specify that transporting \(e\) completely around \(m\) contributes a phase of \(-1\), whereas transporting \(e\) around \(e\) or \(m\) around \(m\) contributes \(+1\). In the ordered basis \((1,e,m,\varepsilon)\), the normalized modular matrix is

\[
S=\frac12
\begin{pmatrix}
1&1&1&1\\
1&1&-1&-1\\
1&-1&1&-1\\
1&-1&-1&1
\end{pmatrix}.
\]

The convention used here defines \(S_{ab}\) as \(1/\mathcal D\) times the quantum trace of a full double braid of \(a\) and \(b\). A *quantum trace* is the categorical trace compatible with the ribbon structure. The first row therefore contains \(d_a/\mathcal D=1/2\).

Direct multiplication gives \(S^\dagger S=I\), where \(S^\dagger\) is the Hermitian adjoint and \(I\) is the identity matrix. Thus \(S\) is invertible. No non-vacuum charge braids trivially with every charge: \(e\) detects \(m\), \(m\) detects \(e\), and \(\varepsilon\) detects both.

The topological twists, also called topological spins, are

\[
\theta_1=\theta_e=\theta_m=1,
\qquad \theta_\varepsilon=-1.
\]

A topological twist is the phase associated with a \(2\pi\) twist of a charge ribbon. Therefore, \(e\) and \(m\) have bosonic self-exchange, whereas their composite \(\varepsilon\) is fermionic. Some authors define a modular \(T\) matrix as \(T=\operatorname{diag}(\theta_a)\). Others multiply it by a framing-dependent common phase involving the chiral central charge. The convention used here omits that common phase:

\[
T=\operatorname{diag}(1,1,1,-1).
\]

This example is a modular tensor category even though all of its anyons are Abelian, meaning that all simple charges have quantum dimension one and all fusion outcomes are unique. Modularity does not imply computational universality. It means, approximately, that braiding distinguishes all charge types [R017]; [R018].

## Complex-linear and semisimple categories

A category is \(\mathbb C\)-linear when every \(\operatorname{Hom}(a,b)\) is a complex vector space and composition is linear in each argument. It is *semisimple* when every object is a finite direct sum of simple objects. If \(a\) and \(b\) are objects, their direct sum \(a\oplus b\) represents an alternative sector containing both \(a\) and \(b\) as summands.

A representative can be chosen from each simple-object class, and the set of representatives is denoted by \(\{a\}\). In an anyon theory, these representatives are the topological charge labels. Membership in the same class means that two objects are isomorphic rather than literally identical.

An isomorphism \(f:a\to b\) is a morphism with an inverse \(f^{-1}:b\to a\).

## Monoidal products and associators

Fusion requires a mathematical operation that combines two objects, represented graphically by placing two wires side by side.

```
a b
| |
| |
```

A *monoidal category* is a category equipped with a bifunctor \(\otimes\), which combines both objects and morphisms, a unit object \(1\), and natural isomorphisms

\[
\alpha_{a,b,c}:(a\otimes b)\otimes c
\longrightarrow a\otimes(b\otimes c),
\]

\[
\lambda_a:1\otimes a\to a,
\qquad
\rho_a:a\otimes1\to a.
\]

A *bifunctor* is a functor of two arguments. The map \(\alpha\) is the *associator*, which identifies the two parenthesizations of a triple product. After bases are chosen in the relevant fusion spaces, its components become \(F\)-matrices. The word *natural* means that these regrouping maps commute with all compatible morphisms; they cannot depend on unrecorded details of how an object was presented.

The associator and unit maps satisfy the pentagon and triangle coherence equations. These equations imply that all valid sequences for removing parentheses define the same map.

Parentheses are often suppressed in fusion rules. Nevertheless, the associator remains essential when changing bases in fusion spaces. Appendix E states the corresponding equations explicitly.

Without an associator, two parenthesizations of three wires are only two distinct expressions. They have not yet been identified as two bases of the same space.

## Fusion categories, duals, and dimensions

In this book, a *fusion category* is a \(\mathbb C\)-linear, finite, semisimple, rigid monoidal category with a simple unit object and finite-dimensional morphism spaces [R019]; [R020]. The defining conditions have the following meanings:

- finite: there are finitely many simple-object classes;

- semisimple: objects decompose into finite direct sums of simple objects;

- rigid: every object has a dual;

- simple unit: \(\operatorname{End}(1)\cong\mathbb C\).

Here, \(\operatorname{End}(1)=\operatorname{Hom}(1,1)\) is the endomorphism space of the unit object.

Rigidity assigns a dual object \(a^*\) to every object \(a\), together with evaluation and coevaluation morphisms

\[
\operatorname{ev}_a:a^*\otimes a\to1,
\qquad
\operatorname{coev}_a:1\to a\otimes a^*.
\]

These morphisms satisfy the *snake identities*. Algebraically, the identities state that creating a dual pair and then immediately annihilating the appropriate pair leaves the remaining line equal to \(\operatorname{id}_a\).

```
a a
| |
| a* |
\ / |
\/ = |
/\ |
/ \ |
| a |
| |
a a
```

Physically, the dual \(a^*\) is the antiparticle \(\bar a\).

The fusion coefficients are defined by

\[
N_{ab}^{c}=\dim\operatorname{Hom}(c,a\otimes b),
\]

where \(N_{ab}^{c}\) counts the multiplicity of \(c\) in the fusion of \(a\) and \(b\). This definition agrees with the decomposition

\[
a\otimes b\cong\bigoplus_c N_{ab}^{c}c.
\]

Some texts instead define the relevant space as \(\operatorname{Hom}(a\otimes b,c)\). Duality relates these conventions, but their indices cannot be transferred without accounting for the convention.

The *fusion matrix* associated with \(a\) is defined by \((N_a)^c{}_b=N_{ab}^{c}\). Its Perron–Frobenius eigenvalue, meaning its distinguished nonnegative eigenvalue, is the Frobenius–Perron dimension \(\operatorname{FPdim}(a)\). In a unitary fusion category, this dimension agrees with the positive categorical dimension, or quantum dimension, \(d_a\) used in Chapter 14:

\[
d_a d_b=\sum_cN_{ab}^{c}d_c,
\qquad d_1=1.
\]

This equation states that quantum dimensions are multiplicative under fusion and additive over direct-sum fusion outcomes.

Outside the unitary setting, categorical dimensions can depend on the pivotal structure, which is the additional structure used to identify objects consistently with their double duals. They need not coincide automatically with Frobenius–Perron dimensions. The physical anyon models in this book are assumed to be unitary unless stated otherwise.

Without rigidity, there is no canonical antiparticle. Without finiteness, the total quantum dimension need not be finite.

## Braiding, twists, and ribbon structure

A fusion table does not specify the effect of exchanging particles. A *braiding* is a natural isomorphism

\[
c_{a,b}:a\otimes b\longrightarrow b\otimes a
\]

that is compatible with the associator through two hexagon equations. In chosen fusion bases, \(c_{a,b}\) is encoded by \(R\)-symbols. A braided category need not be symmetric. In general,

\[
c_{b,a}\circ c_{a,b}\ne\operatorname{id}_{a\otimes b}.
\]

The composite \(c_{b,a}\circ c_{a,b}\) is the double exchange, or monodromy, that characterizes mutual anyonic statistics.

```
a b b a
\ / \ /
\ --> \
/ \ / \
b a a b
```

A *twist* is a natural automorphism \(\theta_a:a\to a\) representing a \(2\pi\) twist of a labeled ribbon. An automorphism is an invertible endomorphism. On a simple object, the twist is a phase and is also called the topological spin.

A *ribbon category* has compatible duality, braiding, and twist structures. Ribbons retain framing information, whereas unframed lines do not record self-twists consistently [R017]; [R019].

A *unitary braided fusion category* equips its morphism spaces with adjoints and positive inner products such that the structural maps can be chosen to be unitary. In this setting, \(F\)-moves are quantum-mechanical changes of basis and \(R\)-moves are quantum-mechanical exchanges.

Without the hexagon equations, a collection of \(R\)-matrices need not define a representation of the braid group. Braiding also does not require symmetry: anyonic exchange occurs when a swap exists but is not necessarily involutive.

## Nondegenerate braiding and modularity

A charge \(x\) is *transparent* if its double braid with every object is the identity:

\[
c_{a,x}\circ c_{x,a}=\operatorname{id}_{x\otimes a}
\quad\text{for all }a.
\]

The transparent objects form the *Müger center*. A braided fusion category is *nondegenerate* when its only transparent simple object is the vacuum.

With compatible ribbon and unitary structures, a nondegenerate braided fusion category is the modular tensor category used for \((2+1)\)-dimensional anyon models. Equivalently, in this setting, the \(S\) matrix is invertible [R019]; [R016].

The adjective *tensor* refers to the monoidal product rather than to a particular multidimensional array used in software. The adjective *modular* refers to mapping-class-group data and nondegenerate braiding rather than to modular computer construction.

The roles of \(S\) and \(T\) are as follows. The matrices \(S\) and \(T\) represent standard large diffeomorphisms of a torus on its topological ground-state space, up to convention-dependent phases. Here, a large diffeomorphism is a smooth deformation not continuously connected to the identity. The matrix \(S\) encodes mutual braiding, whereas \(T\) encodes topological spins. Together, they satisfy projective modular-group relations.

The matrices \(S\) and \(T\) provide strong identifying data, but they are not complete invariants in full generality: inequivalent modular categories can have identical modular data. The complete \(F\)- and \(R\)-data retain more information [R019]; [R016].

For the four-charge toric-code example, \(S\) is invertible, only the vacuum is transparent, and \(T=\operatorname{diag}(1,1,1,-1)\). These properties place the example at the modular-tensor-category level of the initial hierarchy even though every charge is Abelian.

## Functors and equivalence of categories

A *functor* \(F:\mathcal C\to\mathcal D\) maps objects to objects and morphisms to morphisms while preserving identity morphisms and composition:

\[
F(\operatorname{id}_a)=\operatorname{id}_{F(a)},
\qquad
F(g\circ f)=F(g)\circ F(f).
\]

A *monoidal functor* additionally includes coherent isomorphisms relating \(F(a)\otimes F(b)\) to \(F(a\otimes b)\) and relating the two unit objects. A *braided monoidal functor* must also preserve the braiding. These requirements prevent a map from preserving only the fusion table while discarding exchange data.

Two categories are equivalent when functors between them preserve the relevant structure up to natural isomorphism. Their object names need not be literally equal. For anyon theories, the appropriate comparison is normally unitary braided equivalence or ribbon equivalence, rather than equality of fusion coefficients alone.

Relabeling \(e\) and \(m\) in the toric code preserves the complete theory because the fusion rules, twists, and mutual braiding transform consistently. By contrast, a theory and its mirror can have the same fusion rules but reversed braiding.

A theory and its mirror are not generally equivalent as oriented braided theories.

This distinction has practical consequences. A numerical model may identify charge sectors using labels that differ from those in a reference convention.

The appropriate comparison therefore requires a structure-preserving relabeling, compatible basis transformations, and agreement of gauge-invariant closed operations. Agreement of names or of a single fusion table provides weaker evidence.

## Physical scope and limitations of the categorical description

[Theory] A modular tensor category describes the universal long-distance fusion and braiding data of an ideal gapped topological phase. It does not determine the microscopic Hamiltonian, energy gap, quasiparticle mass, coherence time, temperature tolerance, or fabrication route [R017]; [R018]. Those properties require additional physical analysis.

A physical qubit is a controlled two-level subsystem; it does not become an object of an emergent anyon category merely by designation. An encoded qubit is a selected subspace.

Such a qubit is topological only when the physical system provides the required nonlocal organization and protection. A digital emulator may reproduce morphisms and modular matrices accurately without realizing the corresponding equilibrium phase.

Extrinsic symmetry defects can satisfy generalized fusion rules, often of \(G\)-crossed type. They are not automatically intrinsic simple objects of the host modular category. Gauging the symmetry can change their status [R021].

Doubled phases obtained from Drinfeld centers contain both a sector and its opposite-chirality partner. “Doubled Fibonacci” is therefore not a synonym for chiral Fibonacci order.

## Review questions and answers

- The four minimum ingredients of a category are objects, morphisms, associative composition, and identity morphisms.

- The invertibility of the toric-code \(S\) matrix follows from direct multiplication, which gives \(S^\dagger S=I\). Equivalently, no non-vacuum charge is transparent: \(e\) detects \(m\), \(m\) detects \(e\), and \(\varepsilon\) detects both.

- The categorical map that becomes an \(F\)-matrix is the associator \(\alpha_{a,b,c}\), after bases are chosen in the fusion spaces.

- A fusion category can lack braiding. Fusion and associativity provide \(\otimes\) and \(\alpha\), but they do not by themselves provide an exchange map \(c_{a,b}\).

- Braiding is modular when it is nondegenerate: only the vacuum is transparent. In the unitary ribbon setting, this condition is equivalent to invertibility of the \(S\) matrix.

- Treating modular data as an energy gap confuses topological information with microscopic energy scales. The matrices \(S\) and \(T\) describe topological data but do not specify microscopic energy scales.

Later chapters may identify simple objects with charges, \(\operatorname{Hom}(c,a\otimes b)\) with fusion spaces, the associator with \(F\), the braiding with \(R\), dual objects with antiparticles, and nondegenerate ribbon braiding with modular structure. Appendix E fixes bases, describes gauge dependence, and states the pentagon and hexagon equations that ensure the coherence of this graphical calculus.

## Sources

- [R017] A. Kitaev, “Anyons in an Exactly Solved Model and Beyond,”
Annals of Physics 321, 2–111 (2006). DOI: [10.1016/j.aop.2005.10.005](https://doi.org/10.1016/j.aop.2005.10.005);
[arXiv:cond-mat/0506438](https://arxiv.org/abs/cond-mat/0506438).

- [R018] M. A. Levin and X.-G. Wen, “String-Net Condensation: A
Physical Mechanism for Topological Phases,” Physical Review B
71, 045110 (2005). DOI: [10.1103/PhysRevB.71.045110](https://doi.org/10.1103/PhysRevB.71.045110);
[arXiv:cond-mat/0404617](https://arxiv.org/abs/cond-mat/0404617).

- [R019] B. Bakalov and A. Kirillov Jr., Lectures on Tensor
Categories and Modular Functors, University Lecture Series 21,
American Mathematical Society (2001). DOI: [10.1090/ulect/021](https://doi.org/10.1090/ulect/021).

- [R020] P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor
Categories, Mathematical Surveys and Monographs 205, American
Mathematical Society (2015). DOI: [10.1090/surv/205](https://doi.org/10.1090/surv/205).

- [R016] E. C. Rowell and Z. Wang, “Mathematics of Topological Quantum
Computing,” Bulletin of the American Mathematical Society
55, 183–238 (2018). DOI: [10.1090/bull/1605](https://doi.org/10.1090/bull/1605); [arXiv:1705.06206](https://arxiv.org/abs/1705.06206).

- [R021] M. Barkeshli, P. Bonderson, M. Cheng, and Z. Wang, “Symmetry
Fractionalization, Defects, and Gauging of Topological Phases,”
Physical Review B 100, 115147 (2019). DOI: [10.1103/PhysRevB.100.115147](https://doi.org/10.1103/PhysRevB.100.115147);
[arXiv:1410.4540](https://arxiv.org/abs/1410.4540).

---
