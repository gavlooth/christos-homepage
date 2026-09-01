# Appendix H — Tensor networks

Consider three boxes arranged in a row. Each box has one upward wire, and each pair of neighboring boxes is connected by a horizontal wire.

```
s1 s2 s3 physical indices
| | |
[A]---a1----[A]---a2----[A]
| |
boundary boundary

joined line a1: sum over a1
open line s1: coefficient still depends on s1
```

This diagram defines the tensor-network notation used here. Each box represents a table of numbers, called a tensor. An open wire represents an index whose value remains explicit. A wire connecting two boxes represents a shared index that is summed over and therefore eliminated. The connectivity of the diagram specifies the required summations; it is part of the mathematical definition rather than a visual supplement.

## Full coefficient arrays and tensor decomposition

A wavefunction for \(N\) local degrees of freedom is represented by the coefficient array

\[
\psi_{s_1s_2\cdots s_N},
\]

where each physical index \(s_i\) labels a local basis state at site \(i\). If every index takes \(d\) values, the array contains \(d^N\) complex entries. Even for a chain of modest length, direct storage can therefore become impractical.

A tensor-network representation replaces this single large array with smaller multidimensional arrays whose shared indices are summed. These smaller arrays are tensors. In this terminology, a scalar has no indices, a vector \(v_i\) has one index, a matrix \(M_{ij}\) has two indices, and a rank-\(r\) tensor \(T_{i_1\ldots i_r}\) has \(r\) indices.

Here, tensor rank means the number of indices, not the rank of a matrix. The intended meaning must be determined from context.

This decomposition is analogous to factorization in the limited sense that a large object is represented using smaller factors. The tensor factors, however, have multiple index positions and may remain difficult to determine. Compression is effective when the correlations in the state can be transmitted through internal indices of moderate dimension. A tensor network is both a notation and an ansatz family, meaning a restricted class of candidate states used for representation or optimization. It does not guarantee an inexpensive or accurate computation.

## Contraction of shared indices

If tensors \(A_{ij}\) and \(B_{jk}\) share the index \(j\), connecting their \(j\) wires specifies the sum

\[
C_{ik}=\sum_jA_{ij}B_{jk}.
\]

This summation is called a contraction. The contracted index \(j\) no longer appears in the result.

The indices \(i\) and \(k\) remain free, meaning that the resulting tensor still depends on them. Every term in a tensor equation must have the same free indices.

Within a single monomial, an index should normally appear no more than twice. One occurrence denotes a free index, while two occurrences denote a summed index. Sums will be written explicitly whenever this convention could be ambiguous.

For exact arithmetic, the order in which contractions are performed changes the computational cost but not the final scalar or tensor. For approximate contraction, both contraction order and truncation affect the numerical error. Once exact contraction is abandoned, the diagram continues to define the network structure, but it no longer determines a unique numerical result without a specified approximation procedure.

## Physical and virtual indices

For a quantum state, open indices that label basis states are physical indices. They correspond to the local degrees of freedom represented by the state.

The additional internal indices introduced to factor the coefficient array are virtual indices, also called auxiliary indices. They have no associated local measurement and should not be interpreted as directly measurable physical variables.

## Bond dimension

If a virtual index takes \(\chi\) possible values, then \(\chi\) is its bond dimension. The bond dimension specifies the amount of virtual information that can pass between the two tensors connected by that index. It is a representation parameter, not by itself an estimate of numerical error.

## Matrix product states

Consider an open chain containing \(N\) sites. At site \(i\), associate each physical value \(s_i\) with a matrix \(A_i^{s_i}\) of size \(\chi_{i-1}\times\chi_i\). Multiplying these matrices for a fixed sequence \(s_1\cdots s_N\) produces the corresponding wavefunction amplitude.

This representation is a matrix product state, or MPS:

\[
|\psi\rangle=
\sum_{s_1,\ldots,s_N}
\left(A_1^{s_1}A_2^{s_2}\cdots A_N^{s_N}\right)
|s_1s_2\cdots s_N\rangle.
\]

For open boundary conditions, \(\chi_0=\chi_N=1\), so the matrix product is a scalar. In fully indexed notation,

\[
\psi_{s_1\cdots s_N}
=
\sum_{a_1,\ldots,a_{N-1}}
(A_1)^{s_1}_{1a_1}
(A_2)^{s_2}_{a_1a_2}\cdots
(A_N)^{s_N}_{a_{N-1}1}.
\]

The physical index \(s_i\) has dimension \(d_i\), while the virtual indices adjacent to site \(i\) have dimensions \(\chi_{i-1}\) and \(\chi_i\). These dimensions may depend on the site, which is both valid and often computationally useful.

## Gauge freedom and canonical forms

On any MPS bond, an invertible matrix \(G\) and its inverse can be inserted according to

\[
A_i^{s_i}A_{i+1}^{s_{i+1}}
=
(A_i^{s_i}G)(G^{-1}A_{i+1}^{s_{i+1}}).
\]

Because \(GG^{-1}\) is the identity, this transformation leaves every wavefunction amplitude and therefore the physical state unchanged. Individual tensor entries are consequently not unique physical observables.

This nonuniqueness is called gauge freedom. It can be used to place an MPS in a canonical form, which is a gauge choice with specified orthogonality properties. Equivalently, an invertible matrix can be transferred across a virtual bond while its inverse is absorbed into the neighboring tensor.

If the inserted matrix is not invertible, the transformation cannot necessarily be reversed, and the represented state may change.

## Schmidt rank, entropy, and bond dimension

For a bipartition across a selected bond, the state has a Schmidt decomposition

\[
|\psi\rangle=\sum_{\alpha=1}^{r}
\lambda_\alpha
|\alpha_L\rangle|\alpha_R\rangle,
\]

where the Schmidt coefficients \(\lambda_\alpha\ge0\) satisfy \(\sum_\alpha\lambda_\alpha^2=1\), and the left and right Schmidt states are orthonormal. The Schmidt rank \(r\), defined as the number of nonzero Schmidt coefficients, cannot exceed the MPS bond dimension \(\chi\) at that cut.

The bipartite von Neumann entropy, which quantifies entanglement between the two subsystems for a pure state, is

\[
S=-\sum_{\alpha}\lambda_\alpha^2
\ln\lambda_\alpha^2
\le\ln\chi.
\]

The bond dimension therefore limits the entanglement that the MPS can represent across a cut. It is not a direct certificate of accuracy. A target state may require a large \(\chi\) at one cut, while an inadequately optimized MPS may fail to use its available bond dimension effectively.

## Exact MPS representation of the GHZ state

For \(N\) qubits, the Greenberger–Horne–Zeilinger state is

\[
|\mathrm{GHZ}_N\rangle
=\frac{|00\cdots0\rangle+|11\cdots1\rangle}{\sqrt2}.
\]

An exact MPS representation uses bond dimension \(\chi=2\) and the same two matrices at every site:

\[
A^0=\begin{pmatrix}1&0\\0&0\end{pmatrix},
\qquad
A^1=\begin{pmatrix}0&0\\0&1\end{pmatrix}.
\]

Choose the left boundary row and right boundary column as

\[
\ell=\frac{1}{\sqrt2}(1,1),
\qquad
r=\begin{pmatrix}1\\1\end{pmatrix}.
\]

The amplitude of a bit string \(s_1\cdots s_N\) is then

\[
\psi_{s_1\cdots s_N}
=\ell A^{s_1}A^{s_2}\cdots A^{s_N}r.
\]

If every \(s_i=0\), the matrix product reduces to \(A^0\), and the amplitude is \(1/\sqrt2\). If every \(s_i=1\), the product reduces to \(A^1\), and the amplitude is also \(1/\sqrt2\). If the string contains both 0 and 1, the product contains at least one factor

\[
A^0A^1=A^1A^0=0,
\]

so the corresponding amplitude vanishes. The MPS therefore represents the GHZ state exactly.

Its norm can be evaluated from its two nonzero amplitudes without expanding all \(2^N\) basis amplitudes:

\[
\langle\mathrm{GHZ}_N|\mathrm{GHZ}_N\rangle
=\frac12+\frac12=1.
\]

For distinct sites \(i\) and \(j\),

\[
\langle Z_i\rangle=0,
\qquad
\langle Z_iZ_j\rangle=1.
\]

Because the connected correlation subtracts the product of one-site expectation values, the connected correlation is therefore one. Across any cut, the two Schmidt coefficients are \(1/\sqrt2\), so \(S=\ln2\), consistent with \(\chi=2\).

This example demonstrates that a state can have long-range correlations while requiring only a small bond dimension. Conversely, some problems whose interactions or correlations appear short-ranged can have difficult entanglement structures. The amount of correlation and the required bond dimension are not equivalent quantities.

## Matrix product operators and transfer matrices

A local operator has an input physical index and an output physical index at each site. Assigning an additional tensor layer to these index pairs gives

\[
O=\sum_{\mathbf s,\mathbf s'}
W_1^{s_1s'_1}W_2^{s_2s'_2}\cdots W_N^{s_Ns'_N}
|s_1\cdots s_N\rangle
\langle s'_1\cdots s'_N|,
\]

where each \(W_i^{s_is'_i}\) is a matrix on virtual indices. The bold symbol \(\mathbf s\) abbreviates the complete sequence \((s_1,\ldots,s_N)\).

This representation is a matrix product operator, or MPO. It extends the MPS construction by assigning two physical indices, one input and one output, to each site.

Expectation values such as \(\langle\psi|O|\psi\rangle\) are evaluated by combining the bra MPS, the MPO, and the ket MPS and then contracting all physical and virtual indices. A one-dimensional slice through the resulting double-layer network maps the virtual data at one cut to the virtual data at the next.

This map is called a transfer matrix. Under suitable assumptions, its leading eigenvalues determine normalization properties and correlation lengths.

MPOs provide compact representations of sums of local Hamiltonian terms. This compression reduces the storage required for the operator, but it does not make the subsequent optimization exact or computationally inexpensive.

## Projected entangled pair states on general graphs

An MPS is adapted to a one-dimensional chain. Extending the same tensor-network construction to a higher-dimensional graph produces a projected entangled pair state, or PEPS [R032]. On a square lattice, a local PEPS tensor can be written as

\[
A^s_{lurd},
\]

where \(s\) is the physical index and \(l,u,r,d\) are the left, up, right, and down virtual indices. Virtual indices on neighboring tensors are contracted. On a general defect graph, each tensor instead carries one virtual index for every incident edge; square-lattice direction labels are not required.

One PEPS construction begins by placing entangled pairs on the graph edges and applying, at each vertex, a local map from the virtual spaces meeting there to the physical space. The name “projected entangled pair state” refers to this construction. Boundary tensors either have fewer neighboring tensors or include trivial one-dimensional virtual legs.

PEPS are naturally compatible with two-dimensional locality. However, exact contraction of a generic two-dimensional PEPS is computationally hard, so approximate contraction is normally required [R033]. [Theory] Consequently, Chapter 40 must report both the PEPS bond dimension \(D\) and contraction controls such as the environment dimension \(\chi_{\rm env}\), which determines the size of the approximate surrounding network retained during contraction. Increasing only one of these parameters can conceal error associated with the other.

A PEPS is a representation of a quantum state. It may represent an exact fixed-point topological state, a variational approximation to a microscopic ground state, or a completely nontopological state. Executing a PEPS algorithm on conventional hardware is a classical numerical calculation; it does not physically create anyons.

## Virtual symmetries and topological order

Topologically ordered PEPS can have symmetries acting on their virtual indices. A virtual symmetry string may be moved through local tensors without changing the physical state, while noncontractible virtual strings can label distinct ground states. For important PEPS classes, this framework accounts for ground-state degeneracy, local indistinguishability, topological entropy, and anyonic sectors [R034].

The presence of loops in a tensor-network diagram does not by itself establish topological order.

A valid identification requires the relevant virtual symmetry or algebra to be determined, the parent Hamiltonian to be constructed or the phase to be established by another method, and robustness to be tested. A parent Hamiltonian is a Hamiltonian for which the tensor-network state is a ground state. Injective PEPS, for which the relevant virtual-to-physical map is one-to-one after any required blocking, typically describe a unique ground state of an appropriate parent Hamiltonian. Topological PEPS require generalized structures such as group symmetries or matrix-product-operator symmetries [R034].

## Canonicalization, truncation, and variational optimization

For an MPS, sweeps based on QR decompositions or singular-value decompositions can move the orthogonality center and produce left- or right-canonical tensors. A QR decomposition factors a matrix into an orthogonal or unitary matrix and an upper-triangular matrix. A singular-value decomposition separates a matrix into left and right orthonormal factors and a diagonal set of nonnegative singular values. The orthogonality center is the site or bond relative to which the tensors on either side satisfy the corresponding canonical conditions.

At a bond, truncating the Schmidt decomposition to retain the largest \(\chi\) coefficients discards the weight

\[
w_{\rm disc}=\sum_{\alpha>\chi}\lambda_\alpha^2.
\]

This discarded weight characterizes that specific truncation. A small value provides useful local evidence of accuracy, but it does not constitute a global theorem that every observable is accurate.

The density-matrix renormalization group (DMRG) variationally optimizes an MPS, usually one or two sites at a time [R035]. It is especially effective for one-dimensional and quasi-one-dimensional systems whose entanglement remains manageable across the selected site ordering. Mapping a wide two-dimensional lattice to a one-dimensional, snake-like ordering can cause the required bond dimension to increase rapidly with the lattice width.

PEPS algorithms optimize local tensors while approximating the tensors’ environment, meaning the remainder of the network surrounding the tensor or region being updated. Infinite PEPS operates directly with a repeating unit cell, whereas finite PEPS retains explicit boundaries.

The numerical method must be selected according to the physical problem. A translation-invariant infinite ansatz is not suitable for implantation disorder unless the disorder is represented through a larger unit cell, statistical sampling, or another appropriate representation.

## Validation procedure for defect-cluster calculations

A defect-cluster calculation should be organized into the following stages:

- Declare every physical index. Specify whether \(s_i\) labels a microscopic spin, a projected cluster pseudospin, or an edge label, and state its dimension \(d_i\). A projected cluster pseudospin is an effective reduced degree of freedom assigned to a selected low-energy cluster subspace.

- Declare the graph. Every virtual bond must correspond to an intended tensor contraction, although it need not correspond to a physical interaction.

- Choose an ansatz appropriate to the geometry and system size. Use exact diagonalization for the smallest complete clusters, MPS/DMRG for chains and cylinders, and PEPS when two-dimensional connectivity and accessible contraction controls justify that choice.

- State all numerical controls. Report the MPS or PEPS bond dimension, environment dimension, unit-cell size, truncation rule, optimizer tolerance, boundary condition, and initialization strategy.

- Test convergence separately for each observable. The energy can converge before a small gap, correlation length, Wilson loop, or entanglement diagnostic. A Wilson loop is a nonlocal operator associated with a closed contour. Each claimed observable should be plotted against the numerical controls relevant to it.

- Use competing initial states. Near first-order transitions or barriers between topological sectors, a single initialization can remain metastable, meaning that it is trapped in a locally stable state rather than reaching the best available variational state. Energies and diagnostics should therefore be compared across multiple sectors.

- Validate the effective-model handoff. A small microscopic calculation should be compared with the projected Hamiltonian before tensor-network methods are applied only to the effective model.

For the observables considered in Chapter 40:

- obtain the gap from excited-state methods or sector-resolved energies, rather than inferring it from convergence of the ground-state energy alone;

- calculate entanglement entropy from Schmidt values for an MPS, with the geometry and logarithm base stated;

- estimate topological entanglement entropy using a subtraction or scaling protocol whose finite-size errors have been tested;

- represent Wilson loops as MPOs or tensor insertions, and analyze perimeter or area behavior only over system sizes that are numerically resolved;

- extract modular data only after constructing and controlling a basis of ground-state sectors. Modular data characterize transformations among such sectors.

No single diagnostic proves topological order in a small noisy region. A stronger case requires agreement among the spectrum, degeneracy pattern, loop observables, entanglement structure, and response to perturbations.

## Common interpretation and implementation errors

- Unlabeled indices prevent identification of physical and virtual indices and prevent input legs from being distinguished from output legs.

- Tensor rank and matrix rank are different concepts. The intended definition must be stated.

- Gauge-dependent tensor entries must not be treated as observables. Insertions of \(GG^{-1}\) change the tensors without changing the represented state.

- Bond dimension must not be reported without convergence tests. \(D=8\) is an input parameter, not an error bar.

- Contraction error must be controlled. A PEPS calculation with large \(D\) and a small environment can be less reliable than a smaller calculation that is well converged.

- DMRG should not be applied without regard to geometry. A two-dimensional cylinder may be tractable at one width and misleading at the next.

- A low variational energy does not establish topology. Competing phases can have similar energies while differing in nonlocal structure.

- Projection error must be included in the assessment. An accurate solution of an inaccurate effective Hamiltonian remains inaccurate.

- A loop-like tensor-network diagram does not establish topological order. The relevant evidence comes from virtual symmetries and physical diagnostics, not from the visual form of the network.

The diagrammatic notation, algebraic identities, and validation criteria above provide the information required to translate tensor-network diagrams into explicit index contractions.

## Verification checks

- A joined tensor-network line denotes summation over the shared index.

- Inserting \(G\) and \(G^{-1}\) on an MPS bond leaves the state unchanged because

  \[
  A_i^{s_i}A_{i+1}^{s_{i+1}}=(A_i^{s_i}G)(G^{-1}A_{i+1}^{s_{i+1}})
  \]

  for any invertible \(G\). Every amplitude is therefore unchanged.

- For an MPS cut with bond dimension \(\chi\), at most \(\chi\) Schmidt coefficients can be nonzero. The entropy \(-\sum p_\alpha\ln p_\alpha\) of a distribution supported on at most \(\chi\) outcomes is at most \(\ln\chi\). Hence \(S\le\ln\chi\).

- The GHZ MPS is nonzero only for all-zero and all-one strings. Every mixed string contains one of the zero products \(A^0A^1\) or \(A^1A^0\).

- A PEPS diagram does not prove topological order. Topological structure requires appropriate virtual symmetries and physical diagnostics.

- Reporting \(D\) without an environment dimension leaves the contraction error uncontrolled. A large PEPS bond dimension with a small environment can conceal contraction error. \(D\) is an input, not an error bar.

## Sources

- [R032] Frank Verstraete and J. Ignacio Cirac, “Renormalization
algorithms for quantum-many body systems in two and higher dimensions,”
arXiv: [cond-mat/0407066](https://arxiv.org/abs/cond-mat/0407066)
(2004).

- [R033] Norbert Schuch, Michael M. Wolf, Frank Verstraete, and J. I.
Cirac, “Computational complexity of projected entangled pair states,”
Physical Review Letters 98, 140506 (2007).
DOI: [10.1103/PhysRevLett.98.140506](https://doi.org/10.1103/PhysRevLett.98.140506);
arXiv: [quant-ph/0611050](https://arxiv.org/abs/quant-ph/0611050).

- [R034] Norbert Schuch, J. I. Cirac, and David Pérez-García, “PEPS as
ground states: Degeneracy and topology,” Annals of Physics
325, 2153–2192 (2010). DOI: [10.1016/j.aop.2010.05.008](https://doi.org/10.1016/j.aop.2010.05.008);
arXiv: [1001.3807](https://arxiv.org/abs/1001.3807).

- [R035] Ulrich Schollwöck, “The density-matrix renormalization group
in the age of matrix product states,” Annals of Physics
326, 96–192 (2011). DOI: [10.1016/j.aop.2010.09.012](https://doi.org/10.1016/j.aop.2010.09.012);
arXiv: [1008.3477](https://arxiv.org/abs/1008.3477).

- [R036] Román Orús, “A practical introduction to tensor networks:
Matrix product states and projected entangled pair states,” Annals
of Physics 349, 117–158 (2014). DOI: [10.1016/j.aop.2014.06.013](https://doi.org/10.1016/j.aop.2014.06.013);
arXiv: [1306.2164](https://arxiv.org/abs/1306.2164).

---
