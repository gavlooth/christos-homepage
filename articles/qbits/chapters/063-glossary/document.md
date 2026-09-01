# Glossary

This glossary is intended as a reference aid rather than as prerequisite material. Entries for terms not yet introduced in the main text may be deferred. In each citation, “First” identifies the chapter in which this book first explains the term, not the date on which the term was historically introduced.

The following four concepts must be distinguished:

Ordinary defect qubit. A single crystal defect that provides two controllable and measurable levels. It is neither a defect ensemble nor a quasiparticle, and it does not constitute a protected phase. (Chapter 3, then 7.)

Encoded defect cluster. A collection of several defects whose joint state functions as one encoded bit with reduced sensitivity to specified noise. It remains a local device element. (Chapter 11.)

Digital anyon simulation. A classical computer or gate-based quantum processor that reproduces the mathematical behavior of an anyon model. Such a simulation does not establish that the hardware realizes an anyonic material phase. (Chapter 20.)

Emergent topological phase. A many-body phase in which the material’s intrinsic energy landscape supports emergent quasiparticles with topological properties. Preparing a state that resembles a state of such a phase is not sufficient to establish the phase itself. (Chapters 16 and 21.)

## A

Abelian anyon. An anyon for which exchange multiplies the state by a phase.

Within the relevant sector, successive exchange operations therefore commute. The \(e\) and \(m\) excitations of the toric code are standard examples.

(First: Chapter 13, “Anyons and braids.”)

Active quantum error correction. A protection method based on repeatedly extracting information about errors and applying a recovery operation. It differs from passive energetic suppression produced by a Hamiltonian, although one device may employ both methods. (First: Chapter 16, “Toric code.”)

Adjoint (\(A^\dagger\)). The conjugate transpose of a matrix or linear operator. An operator for which \(A=A^\dagger\) is called Hermitian. (First: Chapter 1, “Quantum mechanics foundations.”)

Amplitude. A complex number assigned to a possible quantum-mechanical outcome or to a component of a quantum state. Outcome probabilities are determined by squared magnitudes, and interference between amplitudes can affect those probabilities. (First: Chapter 1, “Quantum mechanics foundations.”)

Analog Hamiltonian engineering. The design of physical couplings such that a device evolves under a target Hamiltonian, either statically or within a controlled driven regime.

In contrast to digital simulation, analog engineering implements the target interaction directly in the device rather than representing it solely through a compiled sequence of gates. This approach does not ensure that approximations, heating, or unwanted Hamiltonian terms are negligible.

(First: Chapter 21, “Analog Hamiltonian engineering.”)

Anyon. A type of quasiparticle possible in two spatial dimensions whose exchange operations obey braid statistics more general than the bosonic and fermionic alternatives. The term specifies exchange and fusion structure; it does not apply generally to every unusual particle or every state prepared on a quantum processor. (First: Chapter 13, “Anyons and braids.”)

## B

Band. A range of allowed electron energies that results when discrete atomic levels broaden in a periodic crystal. The resulting band structure depends on the crystal lattice, chemical composition, and electron interactions. (First: Chapter 5, “Crystals, bands, and localized states.”)

Band gap. An energy interval containing no extended bulk electronic states within an idealized band description. A wide band gap can assist in isolating defect levels, but it does not by itself ensure long coherence or optical addressability. (First: Chapter 5, “Crystals, bands, and localized states.”)

Bloch sphere. A geometric representation in which the pure states of a single two-level system correspond to points on a sphere and mixed states correspond to points inside the sphere. This representation describes qubit states and is distinct from a Bloch state in a crystal. (First: Chapter 3, “Qubits as controllable systems.”)

Bloch state. A spatially extended single-particle state consistent with lattice periodicity, expressed as the product of a plane-wave factor and a periodic function. Despite the common name, a crystal Bloch state has no direct connection to the qubit Bloch sphere. (First: Chapter 5, “Crystals, bands, and localized states.”)

Born rule. The rule that converts a quantum amplitude into the probability of a measurement outcome. For a normalized state \(|\psi\rangle\) and a projector \(P\), the probability of the corresponding outcome is \(\langle\psi|P|\psi\rangle\). (First: Chapter 1, “Quantum mechanics foundations.”)

Braid. The history produced by exchanging particle positions in two dimensions while preventing their worldlines from crossing. Braids that cannot be continuously deformed into one another may produce different transformations of an anyonic state space. (First: Chapter 13, “Anyons and braids.”)

Braid group. The mathematical group generated by exchanges \(\sigma_i\) of neighboring particles, subject to the braid relations. A non-Abelian anyon model associates matrices with these generators and thereby defines a representation of the braid group. (First: Chapter 13, “Anyons and braids.”)

## C

Charge state. The net electron-occupation state of a defect relative to a selected neutral reference. Examples include the labels NV\(^-\) and NV\(^0\). Different charge states may have entirely different spin and optical properties. (First: Chapter 7, “Diamond color centers.”)

Chirality. A handedness associated with propagation or topological response. In general, a chiral topological phase is not equivalent to the nonchiral doubled theory obtained by combining that phase with its time-reversed counterpart. (First: Chapter 19, “Doubled versus chiral Fibonacci.”)

Coherence. The preservation of phase relationships that permit quantum interference. Coherence is characterized by experiment-dependent times and is distinct from population lifetime, fidelity, and topological protection. (First: Chapter 2, “Composite quantum systems”; measured in Chapter 4.)

Color center. A localized electronic defect complex in a wide-bandgap crystal that produces characteristic optical absorption or emission. Some color centers also support useful spin degrees of freedom, but optical activity alone does not establish that a color center is a qubit or that it can form a scalable array. (First: Chapter 7, “Diamond color centers.”)

Commuting-projector Hamiltonian. A Hamiltonian expressed as a sum of mutually commuting local terms that have the form or function of projectors. Such models can be exactly solvable and can make topological structure explicit. Their microscopic implementation, however, may require interactions that are not naturally available in a physical platform. (First: Chapter 16, “Toric code.”)

Correlation length (\(\xi\)). The characteristic length scale over which local connected correlations decay appreciably in a gapped phase. For asymptotic topological arguments to apply reliably, finite devices must be large relative to the relevant correlation lengths. (First: Chapter 21, “Analog Hamiltonian engineering.”)

Crystal field. The electrostatic and covalent environment created by neighboring atoms. This environment splits otherwise degenerate electronic orbitals according to the local symmetry. (First: Chapter 6, “The defect zoo and its interactions.”)

Crystal lattice. The periodic arrangement used to represent an ideal crystal. It defines sites, directions, and symmetries, whereas a real sample additionally contains boundaries, vibrations, disorder, and defects. (First: Chapter 5, “Crystals, bands, and localized states.”)

Crosstalk. An unintended response of non-target qubits or couplings during control or readout. In a dense array, crosstalk can produce correlated errors even when each control operation is accurate when tested in isolation. (First: Chapter 35, “Addressing dense arrays.”)

## D

Decoherence. The loss of observable phase coherence when a system becomes correlated with uncontrolled degrees of freedom or undergoes random evolution. Decoherence can convert a pure state into a mixed reduced state without requiring direct energy relaxation. (First: Chapter 2, “Composite quantum systems.”)

Decoherence-free subspace (DFS). A subspace on which a specified dominant noise interaction acts identically on all states, leaving relative quantum information unaffected by that interaction. This protection depends on the assumed noise model and does not constitute topological order. (First: Chapter 11, “Defect clusters as encoded qubits.”)

Density operator (density matrix, \(\rho\)). A positive operator with unit trace that represents either a pure state or a statistical or marginal mixed state. It is the appropriate state description when classical uncertainty or entanglement with an unobserved environment is relevant. (First: Chapter 2, “Composite quantum systems.”)

Defect. A deviation from the periodic structure or composition of a crystal.

Point defects include vacancies, substitutions, interstitials, and defect complexes. Extended defects include dislocations and stacking faults. The presence of a structural defect does not by itself imply an optically active spin or a qubit.

(First: Chapter 5, “Crystals, bands, and localized states”; taxonomy in Chapter 6.)

Defect cluster. A deliberately chosen set of nearby interacting defects treated as a single subsystem. The term “cluster” specifies a grouping of microscopic constituents. Replacing that cluster with an encoded pseudospin is justified only when an isolated low-energy subspace has been demonstrated. (First: Chapter 11, “Defect clusters as encoded qubits.”)

Digital quantum simulation. The representation of a target evolution using gates acting on programmable qubits, generally after discretization and compilation. Agreement between simulated and target observables may validate the simulation, but it does not convert the hardware into the simulated material phase. (First: Chapter 20, “Digital simulation.”)

Dipolar interaction. The coupling between magnetic dipole moments. Its strength scales as \(1/r^3\) and depends on the orientation of the dipoles relative to their displacement vector. Its long range can be useful, but its anisotropy and unintended couplings complicate lattice design. (First: Chapter 10, “Defect–defect coupling.”)

Dislocation. An extended line defect defined by a mismatch in lattice registry. A dislocation can generate strain and electronic states over distances substantially greater than those associated with a point defect. (First: Chapter 6, “The defect zoo and its interactions.”)

Disorder. Spatial variation in on-site energies, couplings, fields, positions, or other parameters relative to an intended model. Disorder can close a gap, localize excitations, broaden transitions, or, in some cases, stabilize a regime. Its consequences therefore require calculation rather than qualitative assumption. (First: Chapter 21, “Analog Hamiltonian engineering”; budgeted in Chapter 29.)

Doubled Fibonacci order. A nonchiral topological order that combines Fibonacci topological data with their time-reversed counterpart, as occurs naturally in the corresponding Levin–Wen string-net construction. Doubled Fibonacci order is related to, but is not identical with, a chiral Fibonacci phase. (First: Chapter 18, “Levin–Wen string nets”; distinction developed in Chapter 19.)

## E

Effective Hamiltonian. A Hamiltonian describing selected low-energy degrees of freedom after higher-energy states have been projected out or treated perturbatively. Its domain of validity depends on separation between energy scales and on the magnitude of the omitted corrections. (First: Chapter 11, “Defect clusters as encoded qubits”; derived systematically in Chapter 22.)

Eigenstate and eigenvalue. An eigenstate \(|a\rangle\) of an operator \(A\) and its corresponding eigenvalue \(a\) satisfy \(A|a\rangle=a|a\rangle\). If \(A\) is an observable, \(a\) is a possible measurement outcome; if \(A\) is a Hamiltonian, \(a\) is an energy. (First: Chapter 1, “Quantum mechanics foundations.”)

Emergence. The occurrence of collective low-energy degrees of freedom or effective laws that cannot be identified with any single microscopic constituent. In this book, an emergent anyon must belong to an excitation sector of a many-body phase rather than being a hardware qubit assigned a different label. (First: Chapter 13, “Anyons and braids”; Hamiltonian example in Chapter 17.)

Encoded qubit. A two-dimensional information-bearing subspace embedded in a larger Hilbert space, often distributed across several physical constituents. Encoding can suppress a specified noise or leakage process, but encoding alone does not imply error correction or topological protection. (First: Chapter 3, “Qubits as controllable systems”; cluster construction in Chapter 11.)

Entanglement. A property of a composite quantum state that prevents it from being represented as a product state or, when mixed-state distinctions are relevant, as an appropriate classical mixture. The observation of correlation alone is insufficient to establish entanglement. (First: Chapter 2, “Composite quantum systems.”)

Exchange interaction. A short-range spin coupling arising from quantum indistinguishability and overlap between electronic wavefunctions. In contrast to magnetic dipolar coupling, its magnitude often varies exponentially with atomic arrangement and is therefore highly sensitive to placement and chemistry. (First: Chapter 10, “Defect–defect coupling.”)

## F

\(F\)-move (recoupling move). A unitary basis transformation between different orders of fusing the same anyons, including \((a\times b)\times c\) and \(a\times(b\times c)\). An \(F\)-move changes the fusion basis and does not physically exchange the anyons. (First: Chapter 14, “Fusion categories without the fog.”)

Fidelity. A quantitative measure of overlap or success that compares an actual state, gate, or readout operation with a target. State fidelity, process fidelity, average-gate fidelity, and readout fidelity are distinct quantities whose definitions and operating conditions must be specified. (First: Chapter 4, “Stability, coherence, and fidelity.”)

Fibonacci anyon. The nontrivial topological charge \(\tau\) in Fibonacci theory, with fusion rule \(\tau\times\tau=1+\tau\).

Its fusion spaces increase in dimension according to Fibonacci counting. Under standard encodings and assumptions, braiding supports a computationally universal gate set. A circuit signature resembling Fibonacci behavior does not by itself demonstrate a genuine Fibonacci quasiparticle.

(First: Chapter 15, “Fibonacci theory.”)

Finite-size splitting. A small energy difference between states that become exactly degenerate only in an infinite or ideal topological system. It is often produced by virtual quasiparticle tunnelling across a finite sample. A small splitting is a scale-dependent form of protection and does not imply exact degeneracy in a finite device. (First: Chapter 21, “Analog Hamiltonian engineering.”)

Fusion category. Mathematical data specifying particle types, allowed fusion channels, transformations of associativity, and their consistency relations. The complete mathematical structures used in topological quantum computation additionally require braiding and nondegeneracy data. (First: Chapter 14, “Fusion categories without the fog.”)

Fusion channel. A possible total topological charge obtained when specified anyons combine. The existence of multiple fusion channels produces a fusion space in which quantum information can be encoded. (First: Chapter 14, “Fusion categories without the fog.”)

Fusion rule. An expression \(a\times b=\sum_c N_{ab}^{c}c\) that lists the total charges \(c\) obtainable by combining charges \(a\) and \(b\), with multiplicities \(N_{ab}^{c}\). A fusion rule specifies the allowed outcomes but does not define the complete braid theory. (First: Chapter 14, “Fusion categories without the fog.”)

Fusion space. The vector space consisting of consistent fusion histories for a collection of anyons with fixed total charge.

For non-Abelian anyons, braid operations act as matrices on this space. A fusion space encoded digitally remains the state space of a simulator unless it originates from intrinsic quasiparticles.

(First: Chapter 13, “Anyons and braids”; formalized in Chapter 14.)

## G–H

Gap. An energy separation between specified sectors. This book distinguishes among a crystal band gap, a defect-level splitting, a cluster leakage gap, and a many-body topological gap. These energy scales have different physical meanings and cannot be substituted for one another. (First: Chapter 5, “Crystals, bands, and localized states”; cluster use in Chapter 11 and topological use in Chapter 16.)

Genuine Fibonacci anyon. An intrinsic emergent quasiparticle whose fusion and braiding data realize the specified Fibonacci theory, rather than a hardware qubit programmed to reproduce those data. Any such claim must also specify whether the host phase is chiral Fibonacci, doubled Fibonacci, or another explicitly defined theory. The description “Fibonacci-like” is not sufficient. (First: Chapter 15, “Fibonacci theory”; phase distinction in Chapter 19.)

Ground-state degeneracy. The presence of more than one state at the lowest energy. In a topologically ordered system, this degeneracy and its dependence on spatial topology are nonlocal properties. An accidental local doublet is not equivalent to topological ground-state degeneracy. (First: Chapter 16, “Toric code.”)

Hamiltonian (\(H\)). The operator that specifies the energies of a closed system and generates its unitary time evolution. A proposed Hamiltonian for physical hardware must include both the intended terms and the corrections present in the actual platform. (First: Chapter 1, “Quantum mechanics foundations”; physical defect form in Chapter 26.)

Hermitian operator. An operator equal to its adjoint. Its eigenvalues are real, so Hermitian operators can represent observables such as energy. (First: Chapter 1, “Quantum mechanics foundations.”)

Hilbert space (\(\mathcal H\)). A complex inner-product vector space whose vectors represent quantum states. Its dimension counts independent state amplitudes and does not necessarily count particles or physical sites. (First: Chapter 1, “Quantum mechanics foundations.”)

Homotopy. A classification based on continuous deformation without cutting, crossing a forbidden region, or violating specified boundary conditions. Homotopy provides the mathematical language for winding and braiding, but it does not by itself constitute quantum topological order. (First: Chapter 12, “Topology for non-mathematicians.”)

Hyperfine interaction. The coupling between electronic and nuclear magnetic moments. Hyperfine interactions can provide useful nuclear memories or spectrally resolved control, but they can also cause dephasing and increase spectral complexity. (First: Chapter 6, “The defect zoo and its interactions.”)

## I–L

Initialization. The preparation of a qubit or many-body system in a known state or sector. High-fidelity initialization of a single qubit does not imply successful preparation of a topologically ordered ground state. (First: Chapter 3, “Qubits as controllable systems.”)

Interaction graph. A graph in which vertices represent degrees of freedom and edges represent available couplings, often annotated by coupling type, strength, and direction. Spatial proximity alone does not ensure that the available interaction graph matches the graph required by a target Hamiltonian. (First: Chapter 10, “Defect–defect coupling.”)

Interstitial. An atom located between the regular lattice sites. An interstitial is a point defect that may be mobile or may combine with other defects to form a complex. (First: Chapter 6, “The defect zoo and its interactions.”)

Ket (\(|\psi\rangle\)). The notation for a vector in Hilbert space. The corresponding bra \(\langle\psi|\) is its adjoint, and \(\langle\phi|\psi\rangle\) denotes an inner product. (First: Chapter 1, “Quantum mechanics foundations.”)

Leakage. Evolution out of the subspace selected to represent a qubit or another encoded degree of freedom. An energy separation between a cluster’s computational states and unwanted states suppresses leakage, but it does not eliminate leakage under strong, noisy, or resonant control. (First: Chapter 4, “Stability, coherence, and fidelity”; cluster leakage in Chapter 11.)

Locality. The condition that Hamiltonian terms or operations act only on nearby degrees of freedom or on a small number of degrees of freedom. Statements about topological stability generally concern sufficiently weak local perturbations rather than arbitrary global errors. (First: Chapter 12, “Topology for non-mathematicians”; many-body use in Chapter 16.)

Localized state. A state whose spatial weight is concentrated near a defect or finite region instead of extending throughout the crystal. Localization can isolate a degree of freedom, although it may also weaken controllable coupling to neighboring degrees of freedom. (First: Chapter 5, “Crystals, bands, and localized states.”)

Logical qubit. A two-dimensional information-bearing degree of freedom encoded within a larger physical system. It may be a qubit in a conventional error-correcting code, a cluster pseudospin, or a nonlocal topological encoding. The term “logical” alone does not identify the protection mechanism. (First: Chapter 3, “Qubits as controllable systems.”)

Low-energy doublet. Two eigenstates of a cluster that are selected to define an effective qubit and are separated from other states by a leakage gap.

A useful doublet must also support controllable projected operators, state preparation, and readout. The existence of a doublet does not imply the existence of an anyon.

(First: Chapter 11, “Defect clusters as encoded qubits.”)

## M–N

Majorana mode. An emergent degree of freedom represented by an operator equal to its own adjoint. In topological systems, spatially separated Majorana zero modes can encode information nonlocally. Braiding of Majorana or Ising anyons is not computationally universal by itself and does not realize Fibonacci order. (First: Chapter 17, “Kitaev honeycomb model.”)

Many-body gap. The energy separation between a many-body ground-state sector and the relevant excitations, defined for a specified system size and limiting procedure. This gap determines thermal and perturbative energy scales but does not by itself prove topological order. (First: Chapter 16, “Toric code”; feasibility conditions in Chapter 21.)

Measurement (readout). An operation that produces a classical outcome with probabilities determined by the quantum state.

A complete description must account for readout fidelity, measurement back-action, locality, and the operator being measured. A local spin signal does not automatically constitute a measurement of topological charge.

(First: Chapter 1, “Quantum mechanics foundations”; qubit implementation in Chapter 3.)

Mixed state. A quantum state represented by a density operator with more than one nonzero eigenvalue. A mixed state can result from classical uncertainty or from tracing out part of an entangled state. (First: Chapter 2, “Composite quantum systems.”)

Non-Abelian anyon. An anyon whose exchanges act as generally noncommuting matrices on a multidimensional fusion space. The term “non-Abelian” does not specifically imply Fibonacci anyons; Ising anyons define a different non-Abelian theory. (First: Chapter 13, “Anyons and braids.”)

Noise. Uncontrolled fluctuations or couplings that modify states, gates, measurements, or Hamiltonian parameters. An adequate noise model includes the noise spectrum, spatial correlations, temporal correlations, and the associated coupling operator rather than only a single coherence time. (First: Chapter 4, “Stability, coherence, and fidelity”; defect-array model in Chapter 30.)

NV center. A nitrogen-vacancy complex in diamond, commonly considered in its neutral and negatively charged forms. Its useful spin, optical, and coherence properties depend on charge state, isotopic environment, strain, temperature, and device geometry. (First: Chapter 7, “Diamond color centers.”)

## O–P

Operator. A linear map defined on a space of quantum states. Depending on the space on which it acts and its role in the theory, an operator may represent an observable, a transformation, a projector, or a term in a Hamiltonian. (First: Chapter 1, “Quantum mechanics foundations.”)

Partial trace. A mathematical operation applied to the density operator of a composite quantum system to eliminate an unobserved subsystem. The result is the reduced state of the subsystem that remains. In particular, taking a partial trace explains how a subsystem can have a mixed state even when the complete entangled system is in a pure state. (First: Chapter 2, “Composite quantum systems.”)

Passive protection. Error suppression produced by the system’s energy spectrum, locality properties, or Hamiltonian, without repeated syndrome measurements and recovery operations. A syndrome is measurement information used to identify errors without directly measuring the encoded quantum information. Passive protection depends on temperature, system size, relevant noise channels, and the timescale of operation, and it does not suppress every type of error. (First: Chapter 16, “Toric code”; limitations in Chapters 21 and 31.)

Pauli operators. The matrices \(X\), \(Y\), and \(Z\), which describe observables and generate rotations for a two-level quantum system. A Pauli operator acting on a physical spin and a Pauli operator acting on an encoded pseudospin belong to different Hilbert spaces, even when the same symbols are used for both. A Hilbert space is the complex vector space containing the allowed quantum states of a system. (First: Chapter 3, “Qubits as controllable systems.”)

Perturbative gadget. A construction in which auxiliary states and weak couplings are introduced so that virtual processes produce a desired effective interaction, often involving more bodies than the microscopic interactions. The intended effective term is generally smaller than the microscopic energy scales and is accompanied by higher-order errors. (First: Chapter 23, “Perturbative gadgets.”)

Phonon. A quantized collective vibrational excitation of a crystal lattice. Phonons can cause relaxation or dephasing of defect spins, broaden optical transitions, and, in some settings, mediate useful interactions. (First: Chapter 5, “Crystals, bands, and localized states.”)

Physical qubit. A directly controlled two-level subsystem in a hardware platform. Multiple physical qubits may be used to encode one logical qubit, which is a qubit represented within a larger physical state space. The term “physical qubit” does not specify either a fixed physical-to-logical qubit ratio or a particular protection mechanism. (First: Chapter 3, “Qubits as controllable systems.”)

Projector (\(P\)). An operator satisfying \(P^2=P\) that selects a subspace of the full state space. In cluster engineering, \(P\) selects the low-energy sector used for encoding. Projecting another operator with \(P\) determines that operator’s action within the low-energy approximation. (First: Chapter 1, “Quantum mechanics foundations”; cluster use in Chapter 11.)

Pseudospin. An effective two-level degree of freedom represented using the mathematics of a spin-1/2 system. Its basis states may be collective combinations of several microscopic spin or orbital states, so a pseudospin is a modelling construct and need not correspond to the literal spin of an electron. (First: Chapter 11, “Defect clusters as encoded qubits.”)

## Q–R

Quantum dimension (\(d_a\)). A quantity that measures the asymptotic growth of the fusion space as many anyons of type \(a\) are added. The fusion space is the state space associated with the possible collective fusion outcomes of the anyons.

A quantum dimension need not be an integer. For the Fibonacci anyon \(\tau\), it equals the golden ratio. It is not the ordinary dimension of the local state space of a single qubit.

(First: Chapter 14, “Fusion categories without the fog.”)

Quasiparticle. A collective excitation that can be treated as a particle within an effective many-body description. An emergent anyon is a quasiparticle whose exchange and fusion properties are topological. A bare defect spin does not qualify as an anyon solely because it is spatially localized. (First: Chapter 13, “Anyons and braids.”)

Qubit. A controllable quantum degree of freedom with a selected two-dimensional state space. A usable qubit requires a complete operational lifecycle consisting of initialization, coherent operations, and readout; the existence of two spectral levels alone is insufficient. (First: Chapter 3, “Qubits as controllable systems.”)

\(R\)-move. The unitary transformation associated with exchanging two anyons in a specified fusion channel, where a fusion channel denotes a possible total topological charge resulting from their fusion. Together with the fusion data and \(F\)-moves, which change the basis associated with different fusion orderings, consistent \(R\)-moves determine the action of braids. (First: Chapter 14, “Fusion categories without the fog.”)

Relaxation time (\(T_1\)). The characteristic timescale over which a state population returns toward equilibrium, commonly following an excitation. A long \(T_1\) does not imply a long phase-coherence time \(T_2\). (First: Chapter 4, “Stability, coherence, and fidelity.”)

## S

Schrieffer–Wolff transformation. A perturbative unitary transformation that block-diagonalizes a Hamiltonian and thereby produces a low-energy Hamiltonian after virtual transitions between a selected low-energy sector and high-energy sectors have been eliminated. The approximation is controlled only when the couplings are small relative to the relevant energy denominators, which are the energy differences that suppress the virtual transitions. (First: Chapter 22, “Schrieffer–Wolff transformation.”)

Simulated or emulated anyon. A state, defect, code excitation, or gate action deliberately mapped to an anyon model using hardware that may have no intrinsic anyonic phase. Such a simulation can reproduce the model’s operations correctly while providing active protection, based on intervention and correction, rather than passive protection. (First: Chapter 13, “Anyons and braids”; experimental treatment in Chapter 20.)

Spin. An intrinsic form of quantum angular momentum. In a solid, an effective spin label may also incorporate orbital character and crystal-field effects. The label must therefore be associated with explicitly specified energy levels and a Hamiltonian. (First: Chapter 1, “Quantum mechanics foundations”; defect setting in Chapter 6.)

Spin–orbit coupling. An interaction between spin and orbital motion whose form and strength are strongly influenced by crystal symmetry. Spin–orbit coupling can produce optical selection rules and large energy splittings, but it can also enable phonon-mediated relaxation pathways. (First: Chapter 6, “The defect zoo and its interactions.”)

Stabilizer. An operator for which a specified eigenvalue defines part of a code or model subspace. A mutually commuting set of stabilizers jointly constrains the allowed states. Active measurement of stabilizers is operationally distinct from implementing the same operators as energy terms in a Hamiltonian. (First: Chapter 16, “Toric code.”)

Stacking fault. An extended planar crystal defect in which the normal ordering of lattice layers is interrupted. A stacking fault can modify the local electronic structure and produce strain across a broad region. (First: Chapter 6, “The defect zoo and its interactions.”)

Strain. A spatial deformation of a crystal. Coupling to strain can shift or mix defect energy levels. Depending on its origin and use, strain can act as noise, spatial inhomogeneity, a tuning control, or a channel that mediates interactions. (First: Chapter 6, “The defect zoo and its interactions.”)

String operator. An operator formed as a product of local operators along a path. In a topologically ordered model, an open string operator can create excitations at the endpoints of the path, whereas a closed string along a noncontractible path can implement a logical operation. A noncontractible path cannot be continuously reduced to a point within the relevant geometry. (First: Chapter 16, “Toric code.”)

String-net. A fluctuating network of labelled strings governed by local branching and recoupling rules. In a Levin–Wen Hamiltonian, condensation of string nets realizes doubled topological orders. The presence of a drawn network by itself does not establish that such a phase exists. (First: Chapter 18, “Levin–Wen string nets.”)

Substitutional defect. A crystal defect in which a lattice site is occupied by an atomic species different from the ideal host atom. The electronic behavior of the defect depends on its chemistry, local symmetry, and charge-compensation mechanism. (First: Chapter 6, “The defect zoo and its interactions.”)

Superexchange. An effective interaction between localized spins that is mediated by virtual processes through intermediate orbitals or lattice sites. Its sign and magnitude are determined by microscopic hopping amplitudes and energy costs rather than by distance alone. (First: Chapter 10, “Defect–defect coupling”; perturbative derivation in Chapter 22.)

Superposition. A linear combination of quantum states. A superposition produces physical predictions that differ from classical statistical ignorance because its complex probability amplitudes can interfere. It therefore does not merely represent uncertainty about which classical state is present. (First: Chapter 1, “Quantum mechanics foundations.”)

Symmetry-protected subspace. A subspace in which selected transitions are forbidden or suppressed because the corresponding matrix elements are constrained by a symmetry. Breaking that symmetry can eliminate the protection. This mechanism is distinct from intrinsic topological order. (First: Chapter 11, “Defect clusters as encoded qubits.”)

## T

\(T_2\) and \(T_2^*\). \(T_2\) is the characteristic timescale for homogeneous phase coherence under a specified refocusing convention. \(T_2^*\) commonly characterizes free-induction decay, including the effects of quasi-static inhomogeneity. Any reported value of either quantity must be accompanied by the pulse sequence and fitting model used to obtain it. (First: Chapter 4, “Stability, coherence, and fidelity.”)

Tensor product (\(\otimes\)). The mathematical operation used to combine quantum state spaces. For two qubits, the joint state space is \(\mathcal H_1\otimes\mathcal H_2\), rather than a choice between the two individual spaces. The tensor-product structure permits entangled states, which cannot be expressed as products of individual subsystem states. (First: Chapter 2, “Composite quantum systems.”)

Topological charge. A label identifying an anyon sector and specifying the excitation’s behavior under fusion and braiding. Topological charge is conserved according to the applicable fusion rules and need not correspond to electric charge. (First: Chapter 14, “Fusion categories without the fog.”)

Topological error protection. Operational suppression of specified logical errors through nonlocal encoding, an energy gap, braid structure, active error correction, or a combination of these mechanisms. Topological error protection never implies zero error. Any claim of such protection must state its assumptions concerning temperature, system size, noise, leakage, state preparation, and readout. (First: Chapter 16, “Toric code”; limits in Chapter 31.)

Topological invariant. A quantity that remains unchanged under a specified class of continuous deformations.

A winding number is a classical example of a topological invariant. The existence of a classical topological invariant does not imply the presence of quantum topological order.

(First: Chapter 12, “Topology for non-mathematicians.”)

Topological order. An intrinsic form of many-body order characterized by nonlocal structure. In standard two-dimensional gapped examples, its features include long-range entanglement, ground-state sectors that depend on spatial topology, and anyonic excitations. Topological order is not equivalent to ordinary symmetry breaking, a locally encoded cluster, or a digitally prepared wavefunction considered by itself. (First: Chapter 12, “Topology for non-mathematicians”; concrete model in Chapter 16.)

Topological phase. A phase of matter whose low-energy states and excitations have a specified topological organization. In this book, the unqualified term normally refers to intrinsic topological order. Symmetry-protected topological phases are identified explicitly when relevant. (First: Chapter 16, “Toric code.”)

Topological quantum computation. The storage and processing of quantum information in nonlocal topological degrees of freedom, often through the creation, fusion, measurement, and braiding of anyons. The available gate set and the resulting protection depend on both the anyon theory and its physical implementation. (First: Chapter 13, “Anyons and braids”; Fibonacci case in Chapter 15.)

Topology. The mathematical study of properties that remain invariant under continuous deformations performed according to specified rules. In this manuscript, topology supplies concepts and mathematical tools for describing global sectors. The use of the term alone does not establish either error protection or the existence of a quantum phase. (First: Chapter 12, “Topology for non-mathematicians.”)

Toric code. An exactly solvable spin model whose Hamiltonian contains mutually commuting star and plaquette terms. It has topological ground-state degeneracy and Abelian \(e\) and \(m\) anyons, meaning that its fusion spaces do not exhibit the non-Abelian structure of Fibonacci anyons. The toric code is a benchmark model of topological order, not a Fibonacci model. (First: Chapter 16, “Toric code.”)

## U–Z

Unit cell. A repeating building block of a crystal lattice. It contains the basis atoms required to reconstruct the ideal periodic crystal structure and is distinct from a defect cluster selected for quantum encoding. (First: Chapter 5, “Crystals, bands, and localized states.”)

Unitary evolution. Reversible quantum time evolution of the form
\(|\psi(t)\rangle=U(t)|\psi(0)\rangle\),
where the unitary operator \(U(t)\) preserves inner products and total probability for a closed system. An open subsystem, which exchanges information or energy with its environment, generally requires a quantum channel rather than a unitary operator acting only on that subsystem. (First: Chapter 1, “Quantum mechanics foundations.”)

Vacancy. A crystal defect consisting of a missing atom at a lattice site that would normally be occupied. A vacancy may be mobile, carry charge, lack an optical transition, or form part of a useful defect complex. The structural classification alone does not determine its suitability or properties as a qubit. (First: Chapter 6, “The defect zoo and its interactions.”)

Virtual excitation. An intermediate high-energy state that appears in perturbation theory but is not populated as a long-lived real excitation. Paths through virtual excitations can generate superexchange interactions or perturbative-gadget terms, with their strengths reduced by energy denominators. (First: Chapter 22, “Schrieffer–Wolff transformation.”)

Wilson loop. A closed, nonlocal operator used to diagnose or manipulate gauge sectors and topological sectors. A locally measured stabilizer and a noncontractible Wilson loop are different observables. (First: Chapter 16, “Toric code”; measurement in Chapter 36.)

Winding number. An integer that counts how many times a directed loop encircles a puncture under the relevant conditions. The winding number is invariant under the allowed deformations, but it does not by itself constitute a quantum-protected qubit. (First: Chapter 12, “Topology for non-mathematicians.”)

Zero-field splitting. An energy splitting between spin sublevels that exists without an externally applied magnetic field. It is commonly produced by internal spin–spin interactions and anisotropy related to the crystal field. Its numerical value is a spectral parameter and must not be interpreted as a coherence time. (First: Chapter 7, “Diamond color centers.”)

---
