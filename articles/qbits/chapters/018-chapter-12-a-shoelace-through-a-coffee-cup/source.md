# Chapter 12 — Winding, homotopy, and topological protection

Consider the punctured plane

\[
X=\mathbb R^2\setminus\{\mathbf p\},
\]

where the point \(\mathbf p\) has been removed. A closed loop in \(X\) is a continuous map from a circle into the punctured plane.

Such a loop may be displaced or continuously deformed into a circle, a polygonal curve, an irregular curve, or a curve that traverses the puncture multiple times. However, its winding number cannot change unless the curve intersects the puncture, ceases to be closed, or becomes discontinuous.

The geometric shape of the loop can therefore change while its homotopy class remains unchanged under the permitted transformations. This chapter defines the integer that labels these classes, explains why no bounded segment of the loop determines that integer, and examines how an analogous nonlocal quantum label can encode a bit.

## Continuous deformations and permitted operations

Let a closed loop be contained in a plane from which one point has been removed. The loop may have any shape, including a circle, a triangle, or an irregular curve.

The loop may be displaced and continuously deformed subject to three conditions:

- it must remain in the punctured plane;

- it must remain a closed loop;

- it may not intersect the missing point or be cut and rejoined.

A loop that does not wind around the missing point can be continuously contracted to a sufficiently small loop around an ordinary point in the plane. A loop that winds once around the missing point cannot be contracted in this way because every such contraction would require an intermediate curve to intersect the missing point.

A loop that winds twice around the missing point belongs to another distinct case. Although its geometric shape remains variable, its winding number does not change under the permitted operations.

A **deformation** is a continuous one-parameter family of such allowed curves. This definition specifies the permitted operations independently of the particular geometric shapes of the curves.

If discontinuous cutting and rejoining were permitted, every loop could be converted into an open curve and removed from the puncture, so the puncture would no longer distinguish different loop classes. Similarly, if the curve were allowed to pass through the missing point, winding number would no longer be invariant.

Consequently, any statement that a property survives continuous deformation is relative to both a specified space and a specified set of permitted transformations.

The missing point has no additional intrinsic role in this model. It is one point of the plane that the curve is forbidden to occupy. This excluded point constitutes the puncture.

The complete model is represented schematically as follows:

```text
w = 0                          w = 1

closed contractible loop       closed noncontractible loop
not enclosing •                enclosing •

• = missing point
```

The loop with \(w=0\) can contract without intersecting the missing point. The loop with \(w=1\) cannot.

## Definition and calculation of winding number

Place the missing point at the Cartesian coordinates

\[
\mathbf p=(a,b),
\]

where Cartesian coordinates specify position along two perpendicular axes, and \(a\) and \(b\) have units of length. Represent the loop by the parameterized curve

\[
\mathbf r(t)=(x(t),y(t)), \qquad 0\leq t\leq 1.
\]

The parameter \(t\) identifies position along the loop and has no physical units. The loop is closed if

\[
\mathbf r(0)=\mathbf r(1).
\]

The loop avoids the puncture if

\[
\mathbf r(t)\neq\mathbf p
\]

for every \(t\).

Let \(\theta(t)\) be the continuously unwrapped angle, measured in radians, of the vector from the puncture to the point \(\mathbf r(t)\). An **unwrapped angle** is a continuous real-valued choice of angle that can increase from \(0\) to \(2\pi\) during one counterclockwise revolution rather than being identified periodically with zero.

The net number of revolutions is

\[
w=\frac{\theta(1)-\theta(0)}{2\pi}.
\]

Angles, including angles expressed in radians, are dimensionless. Therefore, \(w\) is also dimensionless. Because the loop ends where it begins, its final direction from the puncture must equal its initial direction. The continuously unwrapped angle can consequently differ between the endpoints only by an integer number of complete revolutions:

\[
\theta(1)-\theta(0)=2\pi w, \qquad w\in\mathbb Z,
\]

where \(\mathbb Z\) denotes the integers. By convention, counterclockwise winding is positive and clockwise winding is negative.

The integer \(w\) is the **winding number** of the loop about the puncture. It counts net revolutions and is not a measure of length or curvature.

As an example, consider a circle of radius \(R>0\), where \(R\) has units of length:

\[
x(t)=a+R\cos(2\pi t), \qquad y(t)=b+R\sin(2\pi t).
\]

Its direction angle is

\[
\theta(t)=2\pi t.
\]

Therefore,

\[
w=\frac{2\pi-0}{2\pi}=1.
\]

Reversing the direction by replacing \(t\) with \(-t\), interpreted modulo one, gives \(w=-1\). Traversing the same circle twice gives \(\theta(t)=4\pi t\) and hence \(w=2\). If a small circle lies entirely on one side of the puncture, its direction angle first changes in one direction and then returns by the opposite amount. Its net angular change is zero, so \(w=0\).

For a **differentiable loop**, meaning a parameterized loop whose coordinate derivatives exist, the winding number can be calculated directly from the coordinates:

\[
w=\frac{1}{2\pi}\int_0^1
\frac{[x(t)-a]\,\dot y(t)-[y(t)-b]\,\dot x(t)}
{[x(t)-a]^2+[y(t)-b]^2}\,dt.
\]

A dot denotes differentiation with respect to the dimensionless parameter \(t\). The numerator and denominator both have units of length squared. The integrand and \(w\) are therefore dimensionless, as required.

For the circle above,

\[
\dot x(t)=-2\pi R\sin(2\pi t),\qquad
\dot y(t)=2\pi R\cos(2\pi t).
\]

After substitution, the fraction in the integrand equals \(2\pi\): the numerator is \(2\pi R^2\), and the denominator is \(R^2\). Thus,

\[
w=\frac{1}{2\pi}\int_0^1 2\pi\,dt=1.
\]

The circle can be continuously deformed into an ellipse. During this deformation, its circumference and curvature change. Its winding number remains one, provided that the ellipse never intersects the puncture. The winding number therefore retains a coarse global property while discarding detailed geometric information.

During a continuous deformation that remains disjoint from the puncture, the winding number would have to vary continuously. However, \(w\) is restricted to integer values. A continuous integer-valued function cannot change from \(1\) to \(0\), because such a change would require intermediate noninteger values. The only alternative is for the winding-number formula to become undefined, which occurs when the loop reaches the puncture.

An integer invariant of this type therefore cannot drift continuously.

Both the closed-loop condition and the requirement that the loop avoid the puncture are essential. If the curve is not closed, \(w\) need not be an integer because an open arc can change its direction through any real angle. If the loop is allowed to reach the puncture, the formula becomes undefined at the instant of crossing.

## Local and global geometric information

Consider measurements restricted to one bounded segment of a loop with nonzero winding. Such measurements can determine the segment’s curvature, which quantifies how rapidly its tangent direction changes, and its length. They cannot determine whether the remainder of the curve closes with nonzero winding around the puncture.

A property is **local** if it can be determined from a bounded neighborhood. The curvature of the loop at a point is local. A localized nondifferentiable bend is also local because it can be smoothed by modifying only a short segment.

A **global** property depends on the complete object or on how that object is situated in the full space. Winding is global: inspection of a bounded segment cannot establish the winding number of the completed loop.

The distinction can be summarized as follows:

| Question | Kind of information | Changed by |
|---|---|---|
| What is the loop’s length? | geometric, global | ordinary stretching |
| What is its curvature here? | geometric, local | smoothing nearby |
| Does it pass through this point? | geometric / incidence | moving one segment |
| What is its winding about the hole? | global, survives stretching | crossing the hole, cutting, or changing closure |

Most geometric features of the loop can change under deformation. Selected discrete information survives a specified class of continuous changes. **Topology** is the study of distinctions that remain invariant under such allowed transformations. The relevant issue is the set of permitted operations, not the visual appearance of a lattice or device.

A honeycomb, a ring, or a device containing a drilled hole may possess geometrically nontrivial features. However, coordinates and connectivity alone do not determine which quantities remain invariant.

## Nonlocal encoding and protection mechanisms

A classical bit can be defined by assigning different logical values to two homotopy classes, such as \(w=0\) and \(w=1\).

A local deformation modifies only a bounded segment. Under the stated rules, such a modification cannot change the winding number.

Changing the bit requires an intersection between the curve and the puncture, loss of continuity or closure, or modification of the space that removes the puncture. In an extended error model, the corresponding operations involve changes over a nonlocal region, and they become harder as the relevant distance increases.

A knot is formally an embedding of \(S^1\) into three-dimensional space. Its knot type is invariant under ambient isotopy, so a deformation confined to a bounded section cannot change the knot into the unknot. A closed curve in the punctured plane provides a two-dimensional case in which homotopy classes are labeled by winding number. In both cases, the invariant is a property of the complete embedding or map rather than of any bounded segment.

This local-versus-global distinction corresponds to one condition required for a protected quantum bit, but the mathematical structures of a classical curve and a quantum state are different.

A classical loop in the punctured plane is not an entangled quantum state, and its winding number is not intrinsically a computer bit. The subsequent analysis therefore replaces the classical winding-number model with quantum labels.

For this correspondence to represent a protection mechanism, every disturbance supported in a sufficiently small region must be unable to change the global label.

To alter a global quantum label, local errors must form an extended chain, an excitation must propagate along a noncontractible path, or the perturbation must destroy the phase in which the label is meaningful. The required process becomes harder as the relevant distance increases.

However, increased difficulty does not imply impossibility. Local errors can accumulate over time, and boundaries can shorten a path that produces an error. Thermal excitations can move. A finite device can have residual energy splitting between its labels. Correlated noise need not be local, and initialization and measurement can fail.

A stable global count changes the relevant error mechanism but does not eliminate all error mechanisms.

```text
classical loop                         quantum many-body system
--------------                         ------------------------
local deformation                      local operator or local noise
winding number                         nonlocal quantum label
puncture intersection or loss          extended error or gap-closing event
of continuity or closure
winding-number measurement             loop measurement or charge label
```

The remainder of the chapter assigns precise terminology to these correspondences. Terminology alone does not provide protection. When protection exists, it follows from the inability of a local probe to read or change the global label.

## Homotopy between closed loops

Let \(\mathbf r_0(t)\) be an initial loop and \(\mathbf r_1(t)\) a final loop. A continuous deformation connects these loops through a family of intermediate closed loops without discontinuity or intersection with the puncture.

Such a continuous deformation is called a **homotopy**. It is written as

\[
\mathbf H(t,s), \qquad 0\leq t\leq 1,\quad 0\leq s\leq 1.
\]

The parameter \(t\) identifies a point along each loop, while \(s\) labels the intermediate stage of the deformation. The endpoint conditions are

\[
\mathbf H(t,0)=\mathbf r_0(t),\qquad
\mathbf H(t,1)=\mathbf r_1(t).
\]

Each intermediate curve remains closed if

\[
\mathbf H(0,s)=\mathbf H(1,s).
\]

Each intermediate curve avoids the missing point if

\[
\mathbf H(t,s)\neq \mathbf p
\]

for every \(t\) and \(s\). This condition states mathematically that the point \(\mathbf p\) is excluded from the space. The missing point \(\mathbf p\) is often called a **puncture**, and a plane with this point removed is called the **punctured plane**.

Two loops connected by such a homotopy are homotopic in the punctured plane. Their winding numbers are equal.

To change \(w\), an intermediate loop must cross the puncture, cease to be closed, or become discontinuous. Relative to the stated rules, these are singular events.

The homotopy classes of loops in the punctured plane are therefore labeled by winding number.

When a base point is handled appropriately, the winding number completely classifies closed loops in the punctured plane up to homotopy. In more complicated spaces, a single integer may not capture every distinction. Finding one invariant is therefore not equivalent to classifying the entire space.

## Global sectors and nonlocal loop operators

All loops with \(w=1\) belong to one homotopy class, all loops with \(w=0\) belong to another, and the same construction applies to every integer value of \(w\). Permitted local deformations cannot move a loop between these classes.

A **sector** is a collection of configurations or quantum states that share a global label which permitted local operations cannot change. A sector classifies states by the label rather than by geometric shape.

For a quantum system, let \(\mathcal H\) denote its **Hilbert space**, the vector space of possible quantum states. A global label \(q\) can divide this space schematically as

\[
\mathcal H=\bigoplus_q \mathcal H_q,
\]

where \(\mathcal H_q\) is the subspace of states in sector \(q\), and \(\oplus\) denotes a direct sum of distinct subspaces.

In lattice models, a **loop operator** \(W(C)\) is a quantum operator supported along a closed path \(C\). Its measured value can label a sector.

A short, **contractible** loop, meaning one that can be continuously shrunk to a point, can often be assembled from local constraints. By contrast, a loop that winds around a hole or around a periodic direction of a torus cannot be shrunk to a point. Its value can therefore encode genuinely global information.

Kitaev’s toric-code model makes this correspondence exact: noncontractible loop operators distinguish degenerate ground states [R030].

This correspondence is the quantum counterpart of winding-number classification in the punctured plane. It does not prove that every loop operator produces the desired quantum phase.

A global quantum sector can also result from an ordinary symmetry or conservation law, such as total particle-number parity. Such a label may be useful, but sector structure alone does not imply a topologically ordered phase. It is also necessary to determine what enforces the sectors, whether local measurements distinguish them, and whether they remain robust after generic local perturbations are introduced.

If local operations can change the label, the division into sectors is only a formal classification. If the division is not robust under generic local perturbations, a symmetry-protected separation can disappear when a symmetry-breaking term is added.

## Quantum topological order in many-body systems

Consider a many-particle system whose lowest-energy states occur in several versions that are indistinguishable by measurements restricted to a bounded spatial region. No local observable identifies which version is present.

Distinguishing these states requires an operator with nonlocal support across the sample. Weak local noise should not mix them unless it closes the energy gap associated with the low-energy manifold or produces an extended error process.

This many-body property is called **quantum topological order**. The term refers to order in the quantum phase rather than to the visual presence of a hole.

In the standard setting relevant here, quantum topological order involves **long-range entanglement**, meaning entanglement with global organization that cannot be reduced to a local order parameter. Foundational work connected this order to topology-dependent ground-state degeneracy and robustness against local disorder [R122]. Exactly solvable models demonstrate how nonlocal loop operators and unusual pointlike excitations can realize it [R030]. Reviews [R015]; [R124] describe the broader formalism and its qualifications.

No single introductory criterion gives a complete definition for every modern setting. For a two-dimensional gapped phase intended to store quantum information, however, a practical set of diagnostics includes:

- a local many-body Hamiltonian;

- an energy gap above a low-energy ground-state manifold;

- ground states that are locally indistinguishable in a large system;

- nonlocal operators that distinguish or transform global sectors;

- excitations with a conserved type and, in appropriate phases, unusual exchange and fusion behavior;

- stability of the phase under sufficiently weak local perturbations that do not close the gap.

The unusual pointlike excitations for which exchange can do more than introduce a plus or minus sign are called **anyons**. They are not electrons following more complicated trajectories; they are emergent excitations of the phase with exchange and fusion properties determined by the many-body state.

[Theory] In an ideal gapped topologically ordered system, matrix elements of an operator \(O_R\) supported within a bounded region \(R\) approximately satisfy

\[
\langle \psi_a|O_R|\psi_b\rangle
= c_O\,\delta_{ab}+\text{finite-size corrections}.
\]

Here, \(|\psi_a\rangle\) and \(|\psi_b\rangle\) are different ground states, \(c_O\) depends on the operator but not on the sector, and \(\delta_{ab}\) is the Kronecker delta: it equals one when \(a=b\) and zero otherwise. In many gapped models, the corrections are exponentially small in \(L/\xi\), where \(L\) is a system length and \(\xi\) is the **correlation length**, the characteristic distance over which local correlations decay [R123]; [R015]. Both \(L\) and \(\xi\) have units of length, so \(L/\xi\) is dimensionless, as required for the argument of an exponential.

A genuinely local probe therefore cannot determine which global ground state is present and cannot readily transform one ground state into another. A logical bit of information can consequently be stored nonlocally.

Four distinct criteria should be applied to any claim of topological protection:

- the geometry, including the actual lengths, angles, coordinates, and shape;

- the classical invariant that remains unchanged under the permitted continuous deformations;

- the global quantum sectors, meaning the quantum labels that no sufficiently small local operation can change;

- the presence of quantum topological order rather than only nontrivial geometry, a global conserved quantity, or a programmed simulation.

A loop with winding \(w=1\) has a classical invariant. A quantum state labeled by a nonlocal loop measurement belongs to a global quantum sector.

A many-body phase with robust local indistinguishability and long-range entanglement may possess quantum topological order. A logical qubit encoded in those sectors is a **topological encoding**.

A circuit implemented on ordinary physical qubits that prepares the model state is a **digital emulation**, unless the equilibrium Hamiltonian of the hardware itself produces the phase.

These concepts are related but are not synonymous.

## Limitations of the classical-loop analogy

Classical winding and quantum topological order both distinguish local transformations from changes of a global label. However, a classical loop is a single geometric configuration with a definite parameterized curve.

A topologically ordered quantum ground state is a coherent superposition of many microscopic configurations and is entangled across the system. Its order is a joint property of the wavefunction and Hamiltonian, not of a visually suggestive lattice diagram.

A physical hole can be useful in a topological code because logical operators may have support on noncontractible paths around it. However, introducing a hole into an ordinary magnet does not create topological order.

Similarly, arranging defect centers around an empty site establishes a geometry. Only the interactions among those centers and the resulting many-body state could produce the required quantum order.

## Experimental evidence and finite-system limitations

A laboratory system is a finite sample or processor with imperfectly local interactions, boundaries, disorder, controls, detectors, and a nonzero temperature. It is not an infinite plane and does not possess directly observable exact mathematical phase labels.

Experimental evidence must therefore be established in stages.

[Experiment] Superconducting-qubit processors have prepared a toric-code ground state using a circuit, measured topological entanglement entropy, and simulated anyon interferometry [R125]. These results demonstrate controlled preparation and probing of a topological model state. Because the state is prepared by a circuit on a programmable processor, the result does not by itself establish that the processor material realizes an equilibrium topologically ordered phase.

[Experiment] Programmable Rydberg-atom arrays have implemented frustrated dynamics and measured nonlocal string observables consistent with a toric-code-type spin-liquid regime [R126]. This constitutes analog quantum-simulation evidence for the engineered model. Whether a particular implementation provides long-lived passive protection remains a separate experimental question.

[Theory] For an ideal local Hamiltonian, stability results show that topological ground-state structure persists over an appropriate range of weak local perturbations without a phase transition [R123]. The theorem does not imply that every finite device is immune to temperature, loss, drive errors, long-range couplings, or perturbations large enough to close the gap.

For defect-engineered matter, the sequence of required evidence should therefore be explicit:

- fabricate and characterize the defects;

- establish the intended microscopic couplings;

- derive or measure the effective many-body Hamiltonian;

- show a gapped regime and nonlocal sector structure;

- demonstrate local indistinguishability or equivalent diagnostics;

- create, move, and identify the predicted excitations;

- test robustness as size, disorder, temperature, and evolution time are varied.

A regular defect pattern completes the first step and part of the second. Describing the pattern as topological does not establish steps three through seven.

## Common conceptual errors

- **Equating a visually suggestive graph with a topological invariant.** A honeycomb, kagome lattice, ring, or punctured device may have nontrivial geometry. The same graph can support either a trivial product state or a topologically ordered state under different Hamiltonians.

- **Equating one robust number with quantum topological order.** Winding is robust under the rules of the classical model. However, it provides no information about entanglement, excitation statistics, an energy gap, or quantum coherence. A classical invariant is not quantum topological order.

- **Equating a conserved global quantity with topological protection.** A symmetry can divide a Hilbert space into sectors. If the protection disappears when a generic local symmetry-breaking perturbation is added, the mechanism is symmetry protection rather than intrinsic topological order. Symmetry protection may still be useful for engineering, but it is a different mechanism.

- **Equating an encoding with an emergent phase.** Several physical spins can encode one logical qubit, and a surface-code patch can use nonlocal logical operators. Neither fact alone establishes that the hardware Hamiltonian has an emergent topologically ordered ground state. Active error correction, digital state preparation, and passive Hamiltonian protection must be reported separately.

- **Equating a simulation with the simulated material.** A programmable device may reproduce the amplitudes, string observables, or braiding protocol of a topological model. These are genuine experimental achievements [R125]; [R126], and they establish properties of the prepared state or simulated dynamics under the stated controls. They do not automatically convert the underlying superconducting circuits or atoms into intrinsic anyonic matter.

- **Equating topology with error-free operation.** Topology suppresses particular local transitions between sectors. It does not suppress leakage outside the modeled Hilbert space, readout errors, thermal population, correlated disturbances, fabrication failures, or control faults unless the architecture addresses them separately. A noncontractible logical error can still be assembled from many ordinary local errors.

- **Conflating different meanings of “defect.”** An atomic vacancy in diamond is a microscopic crystal defect. A vortex can be a classical topological defect of an order parameter. An anyon is an emergent quantum excitation. A puncture or boundary in an error-correcting code is also often called a defect. These objects can interact within an architecture, but they are not interchangeable instances of a single concept.

## Verification exercises

- **Effect of a smooth deformation on a loop.** When a circle is smoothly deformed into an ellipse without crossing the hole, its geometric length and curvature generally change. Its winding number \(w\), defined as the integer that counts the loop’s net oriented turns around the hole, does not change.

- **Invariance of the winding number.** A continuous deformation that avoids the hole is a continuously varying family of loops, each of which misses the hole. During such a deformation, \(w\) would have to vary continuously. However, \(w\) takes only integer values, and a continuous integer-valued function is constant. Therefore, the winding number of every loop in the deformation equals that of the initial loop.

- **Consequence of crossing the hole.** If the loop is allowed to pass through the hole, the winding formula is undefined at the crossing. After the crossing, \(w\) may change discontinuously. The hole therefore no longer separates the loops into distinct deformation families.

- **Limits of a global quantum sector as evidence for topological order.** A global quantum sector is a subspace labeled by a quantum number that cannot be assigned by examining only a local region. Its existence alone does not establish topological order, because the sector could instead result from an ordinary symmetry or an imposed code constraint. Establishing topological order also requires evidence for the relevant many-body phase, local indistinguishability of ground states, nonlocal operators, a suitable energy gap, and stability.

- **Failure of local indistinguishability.** Let \(O_R\) be a bounded operator, meaning an operator with finite norm, supported in a local region \(R\). If its matrix elements distinguish two ground states at leading order, then local indistinguishability has already failed. A local probe can read or mix the proposed global labels, so the logical bit is not stored nonlocally.

- **Distinction between digital emulation and emergence.** Digital emulation uses controlled quantum gates to prepare a model state or implement its evolution. Emergence instead requires the physical many-body Hamiltonian of the hardware to produce the low-energy phase and its excitations.

These results establish the roles of continuous deformation, winding number, and the distinction between local and global information. They also explain how a loop’s winding sector can encode a bit nonlocally. The next case replaces a single loop around one hole with the worldlines of several indistinguishable particles in two spatial dimensions. A worldline is the trajectory of a particle through spacetime. The particles’ winding and exchange trajectories form braids, which are topological classes of intertwined worldlines. In some systems, these braids implement noncommuting operations—operations whose result depends on their order—on a degenerate quantum space.

## Sources

- [R121] N. D. Mermin, “The topological theory of defects in ordered
media,” Reviews of Modern Physics 51, 591–648
(1979). DOI: [10.1103/RevModPhys.51.591](https://doi.org/10.1103/RevModPhys.51.591).

- [R122] X.-G. Wen and Q. Niu, “Ground-state degeneracy of the
fractional quantum Hall states in the presence of a random potential and
on high-genus Riemann surfaces,” Physical Review B
41, 9377–9396 (1990). DOI: [10.1103/RevModPhys.41.9377](https://doi.org/10.1103/PhysRevB.41.9377).

- [R030] A. Yu. Kitaev, “Fault-tolerant quantum computation by
anyons,” Annals of Physics 303, 2–30 (2003).
DOI: [10.1016/S0003-4916(02)00018-0](https://doi.org/10.1016/S0003-4916(02)00018-0);
arXiv: [quant-ph/9707021](https://arxiv.org/abs/quant-ph/9707021).

- [R123] M. B. Hastings and X.-G. Wen, “Quasi-adiabatic continuation
of quantum states: The stability of topological ground-state degeneracy
and emergent gauge invariance,” Physical Review B
72, 045141 (2005). DOI: [10.1103/PhysRevB.72.045141](https://doi.org/10.1103/PhysRevB.72.045141);
arXiv: [cond-mat/0503554](https://arxiv.org/abs/cond-mat/0503554).

- [R015] C. Nayak, S. H. Simon, A. Stern, M. Freedman, and S. Das
Sarma, “Non-Abelian anyons and topological quantum computation,”
Reviews of Modern Physics 80, 1083–1159
(2008). DOI: [10.1103/RevModPhys.80.1083](https://doi.org/10.1103/RevModPhys.80.1083);
arXiv: [0707.1889](https://arxiv.org/abs/0707.1889).

- [R124] X.-G. Wen, “Colloquium: Zoo of quantum-topological phases of
matter,” Reviews of Modern Physics 89, 041004
(2017). DOI: [10.1103/RevModPhys.89.041004](https://doi.org/10.1103/RevModPhys.89.041004);
arXiv: [1610.03911](https://arxiv.org/abs/1610.03911).

- [R125] K. J. Satzinger et al., “Realizing topologically
ordered states on a quantum processor,” Science
374, 1237–1241 (2021). DOI: [10.1126/science.abi8378](https://doi.org/10.1126/science.abi8378);
arXiv: [2104.01180](https://arxiv.org/abs/2104.01180).

- [R126] G. Semeghini et al., “Probing topological spin
liquids on a programmable quantum simulator,” Science
374, 1242–1247 (2021). DOI: [10.1126/science.abi8794](https://doi.org/10.1126/science.abi8794);
arXiv: [2104.04119](https://arxiv.org/abs/2104.04119).

---
