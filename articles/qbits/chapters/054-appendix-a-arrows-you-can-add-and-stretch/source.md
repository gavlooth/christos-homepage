# Appendix A — Complex vector spaces and linear operators

Consider two arrows drawn on paper. Their sum is defined geometrically by placing the tail of the second arrow at the tip of the first and drawing the arrow corresponding to the resulting path. Scalar multiplication changes an arrow by stretching it by \(2\), shrinking it by \(1/2\), or reversing its direction by multiplying it by \(-1\).

These operations are already part of elementary geometry. They can be extended by allowing the scalar multiplier to be a complex number. After identifying the plane with the complex numbers, multiplication by \(i\) rotates an arrow through one quarter turn. Multiplication by \(3+4i\) stretches it by \(5\), the modulus of \(3+4i\), and also rotates it. Vector addition remains the same tip-to-tail operation.

This construction does not introduce a physical assumption. It only enlarges the set of allowed scalars.

## Vector addition and complex scalar multiplication

A vector space is a set of objects equipped with vector addition and multiplication by complex scalars. These operations include a zero vector, an additive opposite for every vector, and the identity rule that multiplication by \(1\) leaves every vector unchanged. They also satisfy the required associative, commutative, and distributive laws. This text takes these properties as the definition of a complex vector space.

The vectors may be geometric arrows, columns containing two complex numbers, or the internal states of a silver atom. The vector-space structure consists entirely of the two operations and their algebraic properties.

Let \(\mathbb C\) denote the complex numbers, and let \(V=\mathbb C^2\) denote the vector space of columns of height two. Addition and scalar multiplication act entrywise.

For vectors \(u,v,w\in V\) and scalars \(a,b\in\mathbb C\), vector addition is associative and commutative, and scalar multiplication and vector addition distribute over one another. At this stage, the vector-space axioms do not define lengths or angles.

## Abstract vectors and coordinate representations

The ket \(|\psi\rangle\) denotes an abstract vector. A ket is Dirac notation for a vector in a complex vector space. Its coordinate column depends on the selected basis, which is a reusable set of reference directions.

In the standard basis

\[
|0\rangle=\begin{pmatrix}1\\0\end{pmatrix},
\qquad
|1\rangle=\begin{pmatrix}0\\1\end{pmatrix},
\]

a normalized state has the form

\[
|\psi\rangle=\alpha|0\rangle+\beta|1\rangle,
\qquad |\alpha|^2+|\beta|^2=1.
\]

Here \(\alpha,\beta\in\mathbb C\), and \(|\alpha|\) denotes the complex modulus of \(\alpha\). Normalization means that the state has unit length with respect to the inner product introduced below. Define a second basis by

\[
|+\rangle=\frac{|0\rangle+|1\rangle}{\sqrt2},
\qquad
|-\rangle=\frac{|0\rangle-|1\rangle}{\sqrt2}.
\]

Direct substitution, without any additional physical assumption, gives

\[
|\psi\rangle=\frac{\alpha+\beta}{\sqrt2}|+\rangle
+\frac{\alpha-\beta}{\sqrt2}|-\rangle.
\]

The abstract state is unchanged; only its coordinates differ. If \(U\) is the matrix whose columns contain the new orthonormal basis vectors expressed in the old orthonormal basis, then the coordinate columns satisfy

\[
[\psi]_{\rm new}=U^\dagger[\psi]_{\rm old}.
\]

The symbol \(\dagger\) denotes the conjugate transpose in orthonormal coordinates, as defined below. For this basis transformation, \(U\) preserves lengths, so normalization is unchanged.

A finite list \(v_1,\ldots,v_k\) is linearly independent if the equation

\[
a_1v_1+\cdots+a_kv_k=0
\]

implies \(a_1=\cdots=a_k=0\). The span of the list is the set of all weighted sums formed from its vectors.

A basis is a linearly independent list whose span equals all of \(V\). Every basis of a finite-dimensional vector space contains the same number of vectors. This number is the dimension, denoted \(\dim V\).

A subspace \(W\subseteq V\) is a subset that contains \(0\) and is closed under vector addition and complex scalar multiplication. The logical doublet of a defect cluster is a two-dimensional subspace of a much larger space. The designation as a subspace does not imply that the energy operator or noise processes preserve that subspace.

The direct-sum relation \(V=W\oplus W'\) means that every \(v\in V\) has exactly one decomposition \(v=w+w'\), where \(w\in W\) and \(w'\in W'\). Projection methods use such a decomposition to separate a desired low-energy subspace from the remaining degrees of freedom.

Linear independence is a property of an entire list of vectors, not of an individual vector. If a spanning list is not linearly independent, the same vector can have multiple coordinate columns relative to that list.

## Inner products, norms, and orthogonality

Vector addition and scalar multiplication alone do not define length or angle. An inner product is a map that assigns a complex number \(\langle u|v\rangle\) to each ordered pair of vectors. This text uses the physics convention: the inner product is conjugate-linear in its first argument and linear in its second argument. Thus,

\[
\langle au+bw|v\rangle=a^*\langle u|v\rangle+b^*\langle w|v\rangle,
\]

and

\[
\langle u|av+bw\rangle=a\langle u|v\rangle+b\langle u|w\rangle.
\]

The inner product also satisfies conjugate symmetry,
\(\langle u|v\rangle=\langle v|u\rangle^*\), and positive definiteness:
\(\langle v|v\rangle\ge0\), with equality only for \(v=0\). The star denotes complex conjugation.

The inner product defines length, angle, orthogonality, and, in later applications, probability.

The length or norm of a vector is

\[
\|v\|=\sqrt{\langle v|v\rangle}.
\]

Two vectors are orthogonal if their inner product vanishes. A list \(\{|e_j\rangle\}\) is orthonormal if

\[
\langle e_j|e_k\rangle=\delta_{jk},
\]

where the Kronecker delta \(\delta_{jk}\) equals one for \(j=k\) and zero otherwise.

A ket \(|v\rangle\) is a vector. Its associated bra \(\langle v|\) is the linear functional that maps \(|w\rangle\) to \(\langle v|w\rangle\). A linear functional is a linear map from the vector space to its scalar field. In an orthonormal coordinate basis, the bra corresponding to a ket column is obtained by transposing the column and complex-conjugating each entry.

For any orthonormal basis \(\{|e_j\rangle\}_{j=1}^d\),

\[
I=\sum_{j=1}^{d}|e_j\rangle\langle e_j|,
\qquad
|v\rangle=\sum_{j=1}^{d}|e_j\rangle\langle e_j|v\rangle.
\]

The first equation is the resolution of the identity: the sum of the one-dimensional basis projectors equals the identity operator \(I\). The second equation shows that the coordinates of a vector in an orthonormal basis are the inner products \(\langle e_j|v\rangle\).

Consequently, after an orthonormal basis has been selected, the abstract vector uniquely determines its coordinate column, and the coordinate column uniquely determines the abstract vector.

The Cauchy–Schwarz inequality is

\[
|\langle u|v\rangle|\le \|u\|\,\|v\|.
\]

It implies that the overlap of two normalized states has modulus at most one. One proof evaluates the nonnegative squared length of \(|u\rangle-z|v\rangle\) and selects the complex number \(z\) that minimizes it. This inequality provides the algebraic reason that Born probabilities lie between zero and one.

In finite dimensions, a complex vector space with a positive-definite inner product is automatically complete in the induced norm. Completeness means that every Cauchy sequence converges to a vector in the space. Such a space is therefore also called a Hilbert space. Matrix calculations require the inner product directly; in finite dimensions, completeness introduces no additional computational condition.

If positive definiteness is omitted, the pairing may still be a Hermitian form. It then does not define a length that vanishes only at the zero vector, and the final step in the Cauchy–Schwarz argument fails.

## Linear maps and matrix representations

A map \(A:V\to W\) is linear if

\[
A(au+bv)=aA(u)+bA(v).
\]

After bases have been chosen for \(V\) and \(W\), the linear map \(A\) is represented by a matrix. In orthonormal bases, its entry in row \(j\) and column \(k\) is

\[
A_{jk}=\langle e_j|A|e_k\rangle.
\]

Matrix multiplication represents composition of linear maps:

\[
(AB)|v\rangle=A(B|v\rangle),
\]

so the rightmost operator acts first.

The kernel \(\ker A\) is the set of vectors mapped to zero. The image \(\operatorname{im}A\) is the set of outputs \(A|v\rangle\). For a linear map with finite-dimensional domain \(V\), the rank–nullity theorem states

\[
\dim V=\dim(\ker A)+\dim(\operatorname{im}A).
\]

Thus, the input directions mapped to zero contribute to the kernel, while the remaining independent directions span the image.

## Adjoints and operator classes

For a linear map \(A\), its adjoint \(A^\dagger\) is the unique linear map defined by

\[
\langle u|A v\rangle=\langle A^\dagger u|v\rangle
\]

for all vectors \(u,v\) for which the expressions are defined. In orthonormal bases, the matrix representing \(A^\dagger\) is the conjugate transpose of the matrix representing \(A\). Comparisons between \(A\) and \(A^\dagger\) determine important properties related to lengths, measurement averages, and time evolution.

Several operator classes occur repeatedly.

- \(A\) is Hermitian if \(A=A^\dagger\). Observables and energy operators are represented by Hermitian operators.

- \(U\) is unitary if \(U^\dagger U=UU^\dagger=I\). Unitary operators preserve inner products.

- \(P\) is an orthogonal projector if \(P=P^\dagger=P^2\). Its image is the retained subspace.

- \(A\) is positive semidefinite, written \(A\ge0\), if \(\langle v|A|v\rangle\ge0\) for every \(|v\rangle\).

- \(A\) is normal if \(AA^\dagger=A^\dagger A\). Hermitian and unitary operators are normal.

The trace of an operator is the basis-independent number

\[
\operatorname{Tr}A=\sum_j\langle e_j|A|e_j\rangle.
\]

For finite-dimensional products that are defined, the trace satisfies cyclicity:

\[
\operatorname{Tr}(AB)=\operatorname{Tr}(BA).
\]

Cyclicity permits cyclic permutations but not arbitrary reorderings. In general,

\[
\operatorname{Tr}(ABC)=\operatorname{Tr}(BCA),
\]

but not

\[
\operatorname{Tr}(ACB).
\]

Without an inner product, the adjoint is not defined. A numerical matrix can still be transposed, but that transpose depends on the basis used to represent the linear map.

## Eigenvectors and spectral decompositions

A nonzero vector \(|v\rangle\) is an eigenvector of \(A\) with eigenvalue \(\lambda\in\mathbb C\) if

\[
A|v\rangle=\lambda|v\rangle.
\]

The action of \(A\) on an eigenvector is therefore multiplication by a scalar, with no component generated in another direction. An eigenvalue is degenerate if its eigenspace, the set of eigenvectors with that eigenvalue together with the zero vector, has dimension greater than one.

Suppose \(A=A^\dagger\), \(A|v\rangle=\lambda|v\rangle\), and \(\|v\|=1\). Then

\[
\lambda=\langle v|A|v\rangle=\langle A v|v\rangle=\lambda^*,
\]

so \(\lambda\) is real. Therefore, every eigenvalue of a Hermitian operator is real.

The finite-dimensional spectral theorem states that a normal operator has an orthonormal eigenbasis [R001]; [R002]. In particular, a Hermitian operator has the spectral decomposition

\[
A=\sum_r \lambda_r P_r,
\]

where \(\lambda_r\) are its distinct real eigenvalues and \(P_r\) are mutually orthogonal projectors satisfying \(P_rP_s=\delta_{rs}P_r\) and \(\sum_rP_r=I\). If an eigenvalue is degenerate, its projector \(P_r\) projects onto the corresponding multidimensional eigenspace.

A function of \(A\) is defined spectrally by

\[
f(A)=\sum_r f(\lambda_r)P_r.
\]

For a Hamiltonian \(H\), which is an energy operator measured in joules (J), unitary evolution through a time \(t\), measured in seconds (s), is

\[
U(t)=e^{-iHt/\hbar}=\sum_r e^{-i\lambda_rt/\hbar}P_r.
\]

The exponent is dimensionless because \((\mathrm J)(\mathrm s)/(\mathrm{J\,s})=1\). Here \(\hbar\) is the reduced Planck constant.

The operator \(U(t)\) is unitary. In the spectral basis, each real eigenvalue of \(H\) is mapped to a complex phase of modulus one, and therefore \(U(t)^\dagger U(t)=I\).

Over \(\mathbb C\), the characteristic polynomial of a finite matrix has a root, so a normal operator has at least one eigenvector. This eigenvector can be normalized.

Normality ensures that the orthogonal complement of the eigenvector is invariant under both \(A\) and \(A^\dagger\). The operator \(A\) can then be restricted to this lower-dimensional subspace, and the argument can be repeated.

Induction yields an orthonormal eigenbasis. This outline uses no additional physical assumptions, although a complete proof must establish the invariant-complement step carefully [R001]; [R002].

If normality is omitted, a finite matrix need not have an orthonormal eigenbasis. It may also be defective, meaning that it has too few linearly independent eigenvectors to span the space. In that case, the stated spectral formula for \(f(A)\) is unavailable.

## General two-level Hamiltonian

Define the Pauli matrices

\[
\sigma_x=\begin{pmatrix}0&1\\1&0\end{pmatrix},\quad
\sigma_y=\begin{pmatrix}0&-i\\i&0\end{pmatrix},\quad
\sigma_z=\begin{pmatrix}1&0\\0&-1\end{pmatrix}.
\]

Every \(2\times2\) Hermitian Hamiltonian can be written as

\[
H=cI+h_x\sigma_x+h_y\sigma_y+h_z\sigma_z
=cI+\mathbf h\cdot\boldsymbol\sigma,
\]

where \(c,h_x,h_y,h_z\in\mathbb R\) have units of J, \(\mathbf h=(h_x,h_y,h_z)\), and \(\boldsymbol\sigma=(\sigma_x,\sigma_y,\sigma_z)\). Define the magnitude

\[
h=\sqrt{h_x^2+h_y^2+h_z^2}.
\]

For \(h\ne0\), define the unit vector \(\mathbf n=\mathbf h/h\).

The Pauli matrices satisfy the multiplication rule

\[
\sigma_j\sigma_k=\delta_{jk}I+i\sum_\ell\varepsilon_{jk\ell}\sigma_\ell,
\]

where \(\varepsilon_{jk\ell}\) is the antisymmetric Levi-Civita symbol. Because the product \(n_jn_k\) is symmetric under interchange of \(j\) and \(k\), its contraction with the antisymmetric term vanishes. Therefore,

\[
(\mathbf n\cdot\boldsymbol\sigma)^2=I.
\]

An operator whose square equals \(I\) has eigenvalues \(\pm1\). The corresponding projectors are

\[
P_\pm=\frac12(I\pm\mathbf n\cdot\boldsymbol\sigma),
\]

because \(P_\pm^2=P_\pm\), \(P_+P_-=0\), and \(P_++P_-=I\). The spectral decomposition of \(H\) is consequently

\[
H=(c+h)P_+ +(c-h)P_-.
\]

The two energies are \(E_\pm=c\pm h\), and their separation is \(2h\). Applying the exponential function spectrally gives

\[
\begin{aligned}
e^{-iHt/\hbar}
&=e^{-i(c+h)t/\hbar}P_+ +e^{-i(c-h)t/\hbar}P_-\\
&=e^{-ict/\hbar}\left[
\cos\!\left(\frac{ht}{\hbar}\right)I
-i\sin\!\left(\frac{ht}{\hbar}\right)\mathbf n\cdot\boldsymbol\sigma
\right].
\end{aligned}
\]

This result describes Zeeman precession, driven qubits in a rotating frame, and effective cluster pseudospins. At \(h=0\), the direction \(\mathbf n\) is undefined, but it is not required: \(H=cI\), and the evolution contributes only a common phase.

A two-dimensional subspace can mathematically represent a qubit. However, dimensionality alone does not establish that the system is a controllable physical qubit, an error-corrected logical qubit, or a topological ground space. Those classifications require additional dynamical and operational conditions that linear algebra does not provide.

## Distinct transformations and conventions

Some authors represent vectors as columns without ket notation, adopt the mathematics convention in which the inner product is linear in its first argument, or set \(\hbar=1\). The convention must be identified before moving a complex scalar through an inner product. The following operations must also be distinguished:

- A basis change alters the coordinates used to represent a fixed abstract vector.

- A unitary physical evolution changes the state relative to fixed measurement operators.

- A similarity transformation \(A'=U^\dagger AU\) represents the same abstract operator in a new orthonormal basis.

- A projected operator \(PAP\) generally discards information and is not a basis change.

For infinite-dimensional Hilbert spaces, the spectral theorem is formulated in terms of projection-valued measures, which assign projectors to measurable subsets of the spectrum. Unbounded operators also require explicit domains because the expression \(AB\) may not be defined on every vector. The finite-dimensional matrix formulation is sufficient for the defect clusters and finite lattice models considered in this book, whereas continuum treatments may require the more general methods of functional analysis [R003]; [R005].

## Common errors

- Omitting complex conjugation is incorrect. Bras are conjugate-transposed kets; otherwise, norms need not be real or positive.

- Treating every matrix as though it were Hermitian is incorrect. A non-normal matrix may lack an orthonormal eigenbasis and may even be defective.

- Degeneracy does not determine a unique basis. The eigenspace is fixed, but any orthonormal basis within it is allowed.

- Replacing \(A\) by \(PAP\) omits coupling through the complementary subspace. Perturbation theory restores some of those virtual effects.

- Trace cyclicity is not commutativity. Operators remain order-sensitive outside the cyclic trace identity.

- Units must be retained in exponentials. The expression \(e^{-iHt}\) implicitly assumes \(\hbar=1\); the dimensionless combination \(tH/\hbar\) must be restored before numerical work.

## Exercises and answers

- Identify which object is basis independent. The ket is abstract and basis independent; its coordinate column depends on the basis.

- Demonstrate that every eigenvalue of a Hermitian operator is real. If \(A=A^\dagger\) and \(A|v\rangle=\lambda|v\rangle\) with \(\|v\|=1\), then \(\lambda=\langle v|A|v\rangle=\langle Av|v\rangle=\lambda^*\).

- Identify the additional structure that turns a complex vector space into a Hilbert space in finite dimensions. The required structure is a positive-definite inner product. Finite-dimensional spaces are automatically complete in the induced norm.

- Demonstrate that \(e^{-iHt/\hbar}\) is unitary when \(H=H^\dagger\). In the spectral basis, every eigenvalue of \(H\) is real, so every eigenvalue of the exponential is a phase of modulus one.

- State the consequence of omitting normality. A finite matrix need not have an orthonormal eigenbasis, and the spectral formula for \(f(A)\) need not apply.

- Identify the information lost when \(A\) is replaced by \(PAP\). The omitted information consists of matrix elements connecting the retained subspace to its complement and all action wholly within that complement.

Later chapters use the following results without rederivation: orthonormal bases resolve the identity; Hermitian operators possess real spectral decompositions; projectors isolate possibly degenerate subspaces; operator functions act eigenvalue by eigenvalue; unitary changes of orthonormal basis preserve inner products; and a projected two-dimensional operator is a linear combination of \(I,\sigma_x,\sigma_y,\sigma_z\). Appendix B introduces composite systems, incomplete information, and irreversible channels.

## Sources

- [R001] S. Axler, Linear Algebra Done Right, 3rd ed.,
Springer, 2015. DOI: [10.1007/978-3-319-11080-6](https://doi.org/10.1007/978-3-319-11080-6).

- [R002] R. A. Horn and C. R. Johnson, Matrix Analysis, 2nd
ed., Cambridge University Press, 2013. DOI: [10.1017/CBO9781139020411](https://doi.org/10.1017/CBO9781139020411).

- [R003] B. C. Hall, Quantum Theory for Mathematicians,
Springer, 2013. DOI: [10.1007/978-1-4614-7116-5](https://doi.org/10.1007/978-1-4614-7116-5).

- [R004] M. A. Nielsen and I. L. Chuang, Quantum Computation and
Quantum Information, 10th anniversary ed., Cambridge University
Press, 2010. DOI: [10.1017/CBO9780511976667](https://doi.org/10.1017/CBO9780511976667).

- [R005] A. Peres, Quantum Theory: Concepts and Methods,
Kluwer Academic, 1995. DOI: [10.1007/0-306-47120-5](https://doi.org/10.1007/0-306-47120-5).

---
