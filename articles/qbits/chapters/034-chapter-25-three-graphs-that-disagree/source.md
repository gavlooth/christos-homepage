# Chapter 25 — Target, placement, and interaction graphs

Consider a honeycomb graph with a label assigned to every edge. In a string-net model, which is a lattice model whose degrees of freedom label graph edges subject to local fusion rules, a vertex term checks the three labels incident on each vertex. A plaquette term recouples the six labels surrounding a hexagonal face. This construction defines the first graph.

If each label is instead represented by a physical object placed at the midpoint of its edge, and two such midpoints are joined whenever their original edges share a vertex, the resulting graph is not honeycomb. It is a lattice containing triangles and hexagons.

A third graph is obtained by connecting every pair of midpoints that is coupled by the laboratory Hamiltonian. This graph includes the long-range \(1/r^3\) tail and any auxiliary component located at a vertex.

A geometric tiling alone does not specify a Hamiltonian. The interactions implemented in the crystal must reproduce the incidences required by the string-net model. Otherwise, operators derived from the Levin–Wen construction act on a graph different from the physical interaction graph.

## The target graph of the operators

A string-net Hamiltonian requires two forms of adjacency: which edge labels meet at each vertex and which edge labels surround each plaquette. The graph specifying these required adjacencies is the target graph.

Denote the target graph by \(G=(V,E)\), where \(V\) is the set of vertices and \(E\) is the set of edges.

In the primary construction, every vertex of \(G\) is trivalent, meaning that exactly three edges are incident on it. These three edges carry the labels tested by the corresponding vertex term.

The string-net operators are therefore defined on \(G\), not on the geometric appearance of a fabricated chip.

The host crystal does not automatically realize \(G\). Instead, it contains defects at positions permitted by fabrication, with couplings that depend on distance, orientation, crystal axis, and residual fabrication damage. Two additional graphs therefore intervene between \(G\) and the physical couplings, and these graphs need not coincide.

The design sequence is

\[
\begin{aligned}
\text{topological data}
&\longrightarrow \text{target graph}
\longrightarrow \text{cluster positions}\\
&\longrightarrow \text{physical couplings}
\longrightarrow \text{effective operators}.
\end{aligned}
\]

Each map in this sequence is required for the composition to be well defined. Omitting an intermediate map implicitly assumes physical connections that have not been derived.

## Edge-midpoint clusters and the placement graph

Chapter 24 combined several physical defects into a single low-energy cluster and assigned that cluster the role of a string-net edge label. Accordingly, place one encoded cluster \(C_e\) at the midpoint of every target edge \(e\). An encoded cluster is a group of microscopic degrees of freedom whose selected low-energy subspace represents one effective local degree of freedom. The cluster stores the edge label—for example, \(1\) or \(\tau\) in the Fibonacci input theory—rather than directly storing the state of one microscopic defect spin.

The placement graph is formed from these midpoints by connecting two clusters whenever their corresponding target edges share a vertex.

The three relevant graphs can be distinguished sequentially. The first panel below shows the logical honeycomb, with labels assigned to its edges. The second panel places one encoded cluster at each edge midpoint. Joining clusters whose honeycomb edges share a vertex produces a kagome lattice, which consists of triangles and hexagons. The third panel includes the helpers and additional couplings that may be present in the laboratory Hamiltonian.

![The target, placement, and interaction graphs are different objects. Honeycomb edge labels become kagome-positioned encoded clusters; mediators and unwanted long-range couplings then enlarge the physical interaction graph.](/notes/assets/defects-to-topological-qubits/target-placement-interaction.svg)

The target, placement, and interaction graphs are distinct objects. Honeycomb edge labels become encoded clusters positioned on a kagome lattice. Mediators and unwanted long-range couplings then enlarge the physical interaction graph beyond the placement graph.

The six central cluster sites do not constitute the complete local structure. Each \(C_i\) also belongs to a triangle formed by three edge centers near each endpoint of its original honeycomb edge. Repeating this construction places the clusters on a kagome lattice.

Two clusters are adjacent in the placement graph if and only if their target edges share an endpoint. This construction is the line graph \(L(G)\) of \(G\). A line graph is defined by replacing each edge of \(G\) with a vertex of \(L(G)\), with two vertices in \(L(G)\) adjacent when the corresponding edges in \(G\) share an endpoint.

An edge in a degree-three graph has two endpoints and meets two other edges at each endpoint. Consequently, every edge cluster has

\[
z_{L(G)}=2(3-1)=4
\]

nearest constraint-neighbors, where \(z_{L(G)}\) is the degree of a vertex in the line graph. Thus, a honeycomb target and a kagome device can describe the same architecture without contradiction: the former is the target graph, whereas the latter is the placement graph.

If the shared-vertex criterion is discarded and every nearby pair of clusters is joined, the resulting graph is no longer \(L(G)\). It is instead part of the interaction graph defined by the Hamiltonian.

## The physical interaction graph

If nearby cluster pairs coupled only along placement-graph edges, the placement graph would also be the pair-interaction graph of the Hamiltonian. In practice, dipolar tails, residual exchange, cavities, drives, and perturbative gadgets can generate couplings beyond the drawn placement edges. The interaction graph is the graph whose edges represent the couplings that are actually present.

The ideal Levin–Wen string-net energy contains a vertex term \(Q_v\) and a plaquette term \(B_p\),

\[
H_{\mathrm{SN}}=-\sum_{v\in V} J_v Q_v-\sum_{p}J_p B_p,
\]

where \(J_v\) and \(J_p\) are energies. This equation defines the target string-net Hamiltonian \(H_{\mathrm{SN}}\) as a weighted sum of local vertex and plaquette operators.

The operator \(Q_v\) checks whether the three labels incident on vertex \(v\) satisfy the allowed fusion rule. Fusion is the rule specifying which topological charge labels can consistently combine at a vertex.

The operator \(B_p\) inserts and recouples a loop around plaquette \(p\). Recoupling is a change of fusion basis among equivalent ways of combining labels. On a honeycomb plaquette, \(B_p\) acts on six boundary edge labels and also depends on nearby labels through the recoupling.

The exact commuting-projector construction is [Theory], not an interaction already known to occur among color centers [R018]. A commuting-projector Hamiltonian is a sum of mutually commuting local projection operators.

Drawing \(G\) therefore does not implement \(H_{\mathrm{SN}}\). The physical Hamiltonian acts only through the couplings represented in the interaction graph.

The defects within \(C_e\) are physical spins. The selected doublet of \(C_e\), meaning a two-dimensional low-energy subspace, is an encoded local degree of freedom.

The labels assigned to \(G\) are string-net variables. Excitations are emergent anyons only if the many-body Hamiltonian enters the corresponding topological phase. An anyon is a quasiparticle excitation in two spatial dimensions whose exchange or braiding statistics can differ from those of bosons and fermions.

Programming a circuit or measuring a limited set of fusion-like outcomes does not, by itself, establish intrinsic anyons.

## Geometric spacing and the \(0.19\) coupling ratio

Let each logical honeycomb edge have length \(a\), measured in metres. The distance between the midpoints of two incident edges is

\[
d_1=\frac{\sqrt{3}}{2}a.
\]

The numerical coefficient is dimensionless, so \([d_1]=[a]=\mathrm{m}\). In a regular embedding, all four nearest placement-graph bonds incident on a cluster have this length. This equality is the principal geometric advantage of the primary construction.

To estimate the magnitude of the long-range tail, assume that pair-coupling magnitudes scale as \(J(r)=C/r^3\), where \(C\) has units of energy times cubic metres. The next kagome distance is \(d_2=\sqrt{3}\,d_1\). Therefore,

\[
\frac{J(d_2)}{J(d_1)}=\left(\frac{d_1}{d_2}\right)^3
=\frac{1}{3\sqrt{3}}\approx0.19.
\]

Thus, the coupling on the next kagome shell is already approximately one fifth of the nearest-neighbor scale. Chapter 26 must retain these non-target terms or provide a demonstrated refocusing mechanism.

This result is a geometric estimate derived under the \(r^{-3}\) assumption; it is not a universal defect-coupling law. Magnetic dipole interactions also contain angular factors.

Exchange interactions need not follow a power law. Driven interactions can also have a different spatial range.

The value \(0.19\) is nevertheless too large to neglect without justification. If the \(r^{-3}\) hypothesis is removed, the numerical value changes, but the additional interaction edges must still be included.

A vertex helper \(M_v\), meaning an auxiliary physical degree of freedom used to mediate an effective interaction, may be placed near each original honeycomb vertex and coupled to the three surrounding clusters \(C_e\). A plaquette helper \(M_p\) may be placed at each hexagon center and coupled radially to the six boundary clusters.

Because the radial connections intersect only at their common helper, such a planar layout requires no geometric crossing. However, a helper with six neighbors is not equivalent to an effective six-edge operator.

The effective six-edge operator still requires a controlled perturbative gadget or projection.

The geometry must satisfy five requirements:

- The logical vertex degree must remain compatible with the branching rule.

- Cluster separations must be usable and sufficiently uniform.

- Unwanted interaction edges must either be avoided or made correctable.

- The layout must provide physical space for vertex and plaquette helpers without wire crossings.

- The architecture must tolerate placement error, missing defects, annealing, surfaces, and crystal-axis constraints.

Failure of any one requirement prevents the remaining four from establishing the intended Hamiltonian.

## Trivalent branching constraints

Let \(z\) denote vertex degree, defined as the number of target edges incident on a target vertex. The standard Levin–Wen construction is naturally expressed on a trivalent graph, \(z=3\), where a local branching constraint tests three labels [R018].

A higher-degree vertex can be resolved into a tree of trivalent vertices by introducing additional short edges and choosing a fusion basis. This resolution adds degrees of freedom and operators.

It therefore does not provide a cost-free simplification.

If edge clusters are placed on the edges of a regular degree-\(z\) graph, the corresponding line graph has degree

\[
z_{\mathrm{edge\ clusters}}=2(z-1).
\]

A triangular target, for which \(z=6\), therefore produces degree 10 among edge clusters. A square or kagome target, for which \(z=4\), produces degree 6.

A trivalent target produces degree 4. Lower target degree therefore usually implies fewer intended pair channels, fewer spectral collisions, and fewer opportunities for one defective site to affect many others.

Removing the trivalent assumption changes more than the geometric drawing. It changes the local algebra that the vertex term is designed to test.

## Propagation of placement error into coupling disorder

For a distance-dependent interaction, fabrication error produces coupling disorder. Assume \(J(r)=C r^{-3}\), and let a bond length change by a small amount \(\delta r\). Differentiation gives

\[
\frac{\delta J}{J}\approx -3\frac{\delta r}{r}.
\]

The quantities \(\delta r\) and \(r\) must be expressed in the same length unit, making their ratio dimensionless. A 5% radial error therefore produces approximately a 15% coupling error before angular dependence and defect-to-defect variation are included. This is a geometric consequence of the assumed power law, not a prediction for a specific wafer.

Equal lengths in the geometric drawing also do not guarantee equal spin couplings. For magnetic dipoles, the coupling depends on the bond direction relative to the quantization axes.

Defects with crystallographically inequivalent orientations may therefore convert a single-length lattice into a Hamiltonian with several coupling strengths. Pulse engineering might average this anisotropy.

Until such averaging is derived for the selected defects, it remains [Proposal].

If the power-law assumption is removed, the factor of three changes. If the assumption is retained, a millimetre-scale drawing error cannot be treated as a negligible rounding error in \(J\).

## Quantifying target–interaction graph mismatch

Define a target adjacency matrix \(A_{ij}\), with \(A_{ij}=1\) when clusters \(i\) and \(j\) should couple at the leading pairwise level and \(A_{ij}=0\) otherwise. Let \(J_{ij}\) denote the realized pair coupling. A useful geometry aligns large values of \(|J_{ij}|\) with pairs satisfying \(A_{ij}=1\), while keeping

\[
\epsilon_{\mathrm{graph}}
=\frac{\max_{A_{ij}=0}|J_{ij}|}
{\min_{A_{ij}=1}|J_{ij}|}
\]

small. This dimensionless ratio compares the strongest undesired pair coupling with the weakest desired pair coupling. It does not prove topological stability, but it can identify graph mismatch before a full many-body calculation is attempted.

For long-range dipolar interactions, \(A_{ij}=0\) rarely implies \(J_{ij}=0\). Thus, \(\epsilon_{\mathrm{graph}}\) is a diagnostic and does not justify deleting the interaction tail. Counting only the drawn edges addresses a different problem from determining the graph seen by the Hamiltonian.

## Helper-mediated multi-body interactions

Every named tiling below is planar, meaning that nearest-neighbor target edges can be drawn without crossings. A separate issue is whether the operator-incidence graph remains planar after helper degrees of freedom are added. The operator-incidence graph records which helpers or physical components participate in each intended local operator.

One helper per vertex is geometrically straightforward. One helper per face is also geometrically natural, but its required coordination can equal the face size: six for honeycomb, three and twelve for decorated honeycomb, and four or eight for square–octagon.

A central helper can provide a shared site, cavity, or mode for several bonds. However, pairwise microscopic couplings do not automatically produce the required product operator.

[Theory] Perturbative constructions can generate multi-body terms only with energy denominators, unwanted corrections, and a reduced effective scale. Chapter 23 supplied that warning.

The constraints of perturbation theory remain applicable to every lattice geometry.

A six-leg star of pair couplings is therefore not equivalent to \(B_p\). Without a derivation of the required gadget, the physical system contains six ordinary bonds rather than a plaquette recoupling operator.

## Fabrication coordinates and realized defects

A specified coordinate does not guarantee an active defect at that location. The fabrication process includes pattern registration, aperture or beam size, ion straggle, vacancy diffusion during annealing, conversion yield, depth distribution, and damage-induced noise. Ion straggle is the statistical spread of implanted-ion trajectories around their nominal path.

[Experiment] Toyli and colleagues used electron-beam-defined apertures plus nitrogen implantation to fabricate patterned single-spin and spin-array sites in diamond; for 20 keV \(^{15}\mathrm N\), their modeling gave about 9 nm lateral straggle, under those implantation conditions [R189].

[Experiment] In a different 2017 experiment, focused Si implantation produced SiV centers with approximately 32 nm lateral standard deviation and \(48\pm21\) nm accuracy relative to nanocavities; the measured conversion yield reached about 2.5% at 100 keV before an added electron-irradiation step [R190]. These values are not interchangeable measures of placement precision.

They refer to different ions, implantation energies, devices, and reported metrics.

A viable geometry should therefore support repeated masks or direct-write coordinates, post-fabrication characterization, and spare sites or repair strategies. None of the cited experiments demonstrates a dense, uniformly coupled lattice of encoded clusters realizing a string-net Hamiltonian.

Conflating beam width with the endpoint distribution after annealing understates the disorder entering \(J_{ij}\).

## Candidate target and placement graphs

The table distinguishes each target graph from its edge-cluster graph. “Mediator burden” refers to the requirements for local vertex and face operators, rather than merely to nearest-neighbor lines in a drawing.

| Candidate target | Target degree | Edge-cluster degree | Spacing/graph issue | Crossing or mediator issue | Fabrication verdict |
|---|---:|---|---|---|---|
| Honeycomb | 3 | 4; positions are kagome | One intended midpoint spacing in regular embedding; dipolar tails remain | No planar crossings; 3-leg vertex and 6-edge face | Primary: simplest trivalent incidence and a single repeated coordinate motif |
| Triangular | 6 | 10 | Dense, strongly overconnected for edge encoding | No geometric crossings, but a six-label vertex must be decomposed | Reject as direct string-net graph; useful only for a different derived model |
| Kagome | 4 | 6 if its edges carry labels | Triangles and hexagons create two face scales; degree exceeds trivalent target | 4-label vertices require resolution; 3- and 6-face mediators | Keep as the placement graph of honeycomb edge clusters, not the primary logical graph |
| Decorated honeycomb / star \((3,12^2)\) | 3 | 4 | Intra-triangle and inter-triangle bonds naturally form at least two classes | 3-edge and 12-edge faces; large face operator or mediator tree | Interesting for Kitaev-type physics, but too many scales for the first defect prototype |
| Ruby | 4 | 6 | Crowded local triangles and colored bond classes | Higher local degree and mediator congestion | Strong theoretical precedent for two-body color-code physics, not a direct Fibonacci edge-label map |
| Square–octagon \((4.8.8)\) | 3 | 4 | Incident midpoint distances are unequal in regular embedding | 3-leg vertices; separate 4- and 8-edge face machinery | Fallback: orthogonal registration is attractive, but two bond/face scales must be calibrated |
| Square | 4 | 6 | One site spacing but wrong degree for direct trivalent branching | 4-label vertex resolution and 4-edge faces | Natural for toric-code stabilizers, not the cleanest doubled-Fibonacci map |
| Brick-wall honeycomb | 3 | 4 | Graph-equivalent to honeycomb but geometrically anisotropic | Same incidence as honeycomb | A mask-friendly deformation of the primary, not a distinct topological candidate |

The verdict column specifies a graph choice rather than reporting a demonstrated material implementation. Each later section provides the basis for one of these assessments.

## Honeycomb target graph

The honeycomb graph is selected because it has the required simple incidence structure. It is trivalent, bipartite, planar, and has a single face size. A bipartite graph is one whose vertices can be divided into two disjoint sets such that every edge connects vertices in different sets.

The Levin–Wen construction directly uses trivalent string-net branching [R018]. Kitaev’s exactly solved honeycomb model further demonstrates that a simple trivalent interaction graph can support emergent gauge structure and non-Abelian Ising-type excitations for suitable bond-dependent interactions, although that phase is not Fibonacci order [R017].

[Theory] This precedent establishes the importance of graph structure, but it does not validate the proposed defect Hamiltonian.

The primary target is therefore honeycomb because its local incidence matches the required algebra, not because of the visual form of the hexagons.

The principal disadvantage appears in the preceding geometric example. Encoding labels on edges converts the cluster positions into a degree-four kagome lattice.

Plaquette terms still span six clusters, and long-range interaction tails add unwanted edges. The anyons in Kitaev’s model belong to a different phase and cannot be identified with the excitations of the proposed Fibonacci construction.

## Triangular target graph

A triangular lattice places six nearest neighbors around each vertex. This coordination is useful in frustrated-magnet and quantum-dimer models; a gapped resonating-valence-bond phase was established theoretically in the triangular-lattice quantum dimer model [R187]. A resonating-valence-bond phase is a quantum phase described by superpositions of short-range singlet-pair coverings.

[Theory] That result does not imply that triangular geometry implements the Fibonacci string net required here.

As a direct target, the triangular lattice replaces each trivalent branching check with a six-way junction. Resolving this junction requires internal fusion-tree edges.

With edge clusters, the local pair graph has degree ten. Dense coordination can increase connectivity, but it also increases the number of unintended dipolar paths and the demands on local addressability.

The triangular lattice is therefore rejected for the first architecture. It remains a possible basis for a different derived model, but its dimer variables cannot be identified with \(\tau\) labels without a corresponding derivation.

## Kagome as a placement graph

The kagome graph has four edges incident on each vertex and contains triangular and hexagonal faces. It is widely studied in connection with geometric frustration, and theory has found fractionalized phases in specific kagome Hamiltonians [R188]. A fractionalized phase has excitations whose quantum numbers or statistics are not those of the microscopic constituents. The existence of such a phase in one model does not establish the required string-net phase for the available couplings.

Kagome nevertheless has a specific role in this architecture: it arises automatically as the physical midpoint lattice of honeycomb edge variables. In this representation, each kagome triangle corresponds to one logical honeycomb vertex, and each kagome hexagon corresponds to one logical honeycomb plaquette.

This exact incidence correspondence is more useful than choosing kagome as the target graph itself. If kagome is used as the target, trivalent branching is lost and two face scales are introduced.

## Decorated-honeycomb target graph

Replacing every honeycomb vertex with a triangle produces the decorated honeycomb, or star, lattice with face sequence \((3,12,12)\). The face sequence lists the polygons encountered around each vertex. This lattice remains trivalent.

[Theory] Yao and Kivelson solved a Kitaev-type model on this lattice and found a chiral spin liquid with non-Abelian anyons in part of its phase diagram [R184]. A chiral spin liquid is a topologically ordered phase that breaks time-reversal symmetry and supports chiral boundary behavior. These excitations arise from Kitaev/Majorana physics, not doubled Fibonacci string-net order.

For fabrication, the decoration introduces internal triangles that could coincide with strongly coupled mini-clusters. It also creates two geometric bond classes—within triangles and between triangles—and faces of size three and twelve.

This structure may be useful if the microscopic Hamiltonian naturally supplies two interaction scales. It is disadvantageous if interaction uniformity is already difficult to achieve.

A plaquette operation acting on a twelve-edge boundary also requires a helper tree or several perturbative stages.

The decorated honeycomb is therefore retained as a research variant rather than the primary layout. Without a justified two-scale microscopic interaction, the decoration adds cost without a corresponding physical advantage.

## Ruby target graph

The ruby lattice is four-valent, meaning that four edges meet at each vertex, and the best-known topological construction on it uses colored bond types. [Theory] Kargarian, Bombin, and Martin-Delgado gave a two-body spin Hamiltonian on the ruby lattice whose low-energy sector realizes topological color-code order [R185]. This provides genuine and relevant evidence that microscopic two-body interactions can encode more complex low-energy stabilizers.

It does not establish a ruby-lattice Fibonacci phase in defect clusters. The degree-four junctions, small triangles, and multiple bond classes of the ruby lattice increase control and placement requirements. Its primary relevance to this architecture is methodological: it motivates studying whether a two-body parent Hamiltonian can generate the required low-energy constraints.

The anyons in the color-code result are determined by the Hamiltonian that produces them and cannot be relabeled as \(\tau\) excitations.

## Square–octagon target graph

The Archimedean square–octagon tiling has face sequence \((4,8,8)\) and degree three, so it preserves trivalent branching. An Archimedean tiling is a vertex-transitive tiling by regular polygons. Kitaev-type models on the square–octagon lattice support a rich set of Abelian and non-Abelian phases in theory [R186], although these results do not establish Fibonacci order or feasibility in a defect system.

The straight, orthogonal square motif is compatible with lithographic registration. However, the regular embedding is not geometrically uniform at the edge midpoints. At each vertex, the angles between incident edges are \(90^\circ,135^\circ,135^\circ\). For equal target-edge length \(a\), the distances between adjacent edge midpoints are

\[
d_{90}=a\sin45^\circ=\frac{a}{\sqrt2},\qquad
d_{135}=a\sin67.5^\circ\approx0.924a.
\]

For a pure \(r^{-3}\) interaction, the intended couplings associated with these two distances would differ by

\[
\left(\frac{d_{135}}{d_{90}}\right)^3\approx2.23.
\]

The square and octagonal plaquettes also require four-edge and eight-edge operations. Calibration, geometric distortion, or driven equalization is therefore mandatory.

The square–octagon lattice remains a viable fallback because it has the required logical degree and planarity, not because its regular embedding provides uniform interactions. Relaxing the equal-edge assumption may reduce the factor of 2.23, but doing so requires a derivation of the geometric distortion that produces the reduction.

## Square and brick-wall lattice embeddings

A square lattice is a two-dimensional graph with degree-four vertices, meaning that four edges meet at each vertex. It supports many representations of the toric code, but its vertex degree does not directly match a trivalent Fibonacci fusion tree. A trivalent fusion tree represents successive fusion operations using vertices incident on three edges.

A brick-wall embedding is graph-isomorphic to a honeycomb lattice: its edges are deformed so that the rows and columns appear rectangular, while the vertex connectivity remains unchanged. Graph isomorphism means that two graphs have the same adjacency relations after relabeling their vertices. At the idealized level, topological lattice models are invariant under such graph-preserving deformations.

Physical coupling strengths are not generally invariant under these deformations. Brick-wall coordinates may simplify the fabrication pattern, but any resulting differences in bond length or orientation must be included in the Hamiltonian, which is the operator specifying the system’s energies and dynamics.

The brick-wall embedding is therefore treated as a fabrication variant of the primary honeycomb graph rather than as the fallback phase graph. Isomorphism of \(G\), the abstract target graph, does not imply isomorphism of the interaction graph, which specifies the couplings actually realized between physical degrees of freedom.

## Current fabrication capabilities and requirements

[Experiment] Patterned arrays and individual nanostructure targets have been implanted [R189]; [R190]. In particular experiments, these methods support coordinate lists with length scales of tens to hundreds of nanometres. They do not provide arbitrary interaction matrices, where an interaction matrix specifies the coupling between each pair of physical degrees of freedom.

The proposed string-net prototype requires substantially more:

- Several defects must form each reproducible cluster doublet, where a cluster doublet is a controlled pair of cluster states used as an encoded degree of freedom.

- Intra-cluster couplings, which connect defects within one cluster, must dominate inter-cluster couplings, which connect different clusters.

- Every intended edge must have the required coupling sign, tensor structure, and strength.

- Unwanted long-range couplings must either be included in the model or physically suppressed.

- Missing defects and defects with the wrong charge state must be detected and repaired.

- Vertex and plaquette terms must emerge with an energy gap larger than the energy scales associated with disorder and decoherence. A vertex term acts on degrees of freedom incident on a vertex, while a plaquette term acts around the boundary of a face. Decoherence is the loss of quantum phase information through coupling to uncontrolled degrees of freedom.

No cited experiment satisfies all of these requirements. The geometric design is therefore classified as [Proposal]: use a shallow, planar patterned layer in a host material for which the selected defect species can be created and read out, and begin by testing isolated triangles and hexagons.

Diamond has direct experimental evidence for patterned implantation [R189]; [R190]. Silicon carbide may provide advantages for wafer-scale fabrication, but this chapter does not assume that diamond and silicon carbide have equal placement yield, coherence, or coupling properties without evidence specific to the host material and defect species.

A graph-first experimental sequence should begin with one logical vertex, continue to two vertices that share an edge cluster, and then test one hexagonal plaquette with its neighboring legs. A logical vertex is a vertex of the encoded target graph rather than necessarily a single physical site. Each projected constraint, meaning the constraint after projection into the encoded low-energy subspace, should be measured before the coordinate cell is repeated to form a larger lattice.

## Sources of modeling and design error

The target and placement lattices must not be conflated. Describing the device as “kagome” without specifying that kagome sites encode honeycomb edges omits the map that defines the branching structure. Conversely, describing the device only as “honeycomb” can conceal the degree-four physical neighbor graph.

Drawn edges must not be treated as the complete set of physical couplings. Dipolar interactions extend beyond the nearest-neighbor edges shown in a geometric diagram.

The pair coupling \(J_{ij}\), its angular factors, and \(\epsilon_{\mathrm{graph}}\), the graph-error measure, must be evaluated. Here, \(A_{ij}\) is the adjacency-matrix element that specifies whether an intended graph edge connects sites \(i\) and \(j\). Assigning \(J_{ij}=0\) whenever \(A_{ij}=0\) incorrectly removes the long-range interaction tail that Chapter 26 must still include.

Equal separation must not be equated with equal interaction strength. Crystal orientation, strain, charge state, and quantization axis can also affect \(J_{ij}\). Geometry therefore determines only part of the pair interaction.

An auxiliary mediator must not be identified directly with a many-body term. A six-leg star composed of pairwise couplings is not the plaquette operator \(B_p\). The effective operator generated by the mediator and all associated correction terms must be derived.

An anyon type established for one Hamiltonian cannot be transferred to a different Hamiltonian without derivation. An anyon is a two-dimensional quasiparticle with exchange statistics more general than those of bosons or fermions. Decorated-honeycomb and square–octagon Kitaev models provide non-Abelian precedents [R184]; [R186], and ruby models provide color-code order [R185]. These precedents do not by themselves establish Fibonacci anyons in the proposed defect system.

The nominal beam size must not be interpreted as the final uncertainty in defect position. Implantation straggle, annealing, registration error, and stochastic defect conversion remain relevant after the beam specification is fixed [R189]; [R190].

Optimization must not consider only the nearest-neighbor spacing. Reducing \(a\), the lattice-spacing parameter, strengthens both desired and undesired interactions, reduces the available space for clusters and auxiliary mediators, and can cause damage volumes to overlap.

Increasing \(a\) improves addressability but weakens local interactions. Chapter 28 must therefore optimize the complete error and coupling budget.

Planarity of the geometric drawing does not eliminate connectivity constraints in Hilbert space, the state space of the quantum system. A planar drawing can still require nonplanar control connectivity or coupling through a high-degree cavity mode. The absence of geometric edge crossings is a useful design condition, but it does not establish that the required Hamiltonian can be implemented.

## Selected primary and fallback graphs

**Primary — honeycomb logical graph with kagome cluster positions.** The honeycomb graph has degree three and therefore matches trivalent branching without auxiliary fusion-tree vertices. In its regular embedding, all nearest edge-midpoint separations are equal. Its line graph, defined by assigning one vertex to each original edge and connecting two such vertices when the corresponding edges share an endpoint, has degree four. Vertex helpers and hexagonal plaquette helpers can be placed without planar crossings, and the pattern repeats using a single coordinate motif. Fabrication remains challenging because the required clusters, yields, long-range interaction tails, and six-edge effective terms have not been demonstrated.

**Fallback — square–octagon logical graph.** This graph preserves degree three and planarity while providing an orthogonal square motif that may be advantageous for registration, routing, or device boundaries.

The fallback graph does not provide uniform spacing. Its regular edge-midpoint layout contains two intended distances and two face sizes, so it requires calibration or engineered couplings. It should be selected only if fabrication tests establish that the advantages of orthogonal patterning and access outweigh the factor-of-about-2.23 geometric spread in a nominal \(r^{-3}\) bond scale.

Both graph choices are proposals rather than reports of an observed topological material. The selected target graph is the trivalent honeycomb graph.

One encoded cluster is placed at the midpoint of each honeycomb edge. The resulting physical nearest-constraint graph is the degree-four kagome lattice.

A vertex term acts on three clusters, while a hexagonal plaquette term acts on at least the six clusters along the plaquette boundary. The regular nearest midpoint spacing is \(\sqrt{3}\,a/2\).

Long-range pair terms remain part of the Hamiltonian. The square–octagon graph remains the fallback, with two intended midpoint distances and faces bounded by four and eight edges.

The next stage is not another choice of tiling. It is the explicit construction of the zero-field, Zeeman, dipolar, exchange, strain, phonon, and drive terms that can generate the selected graph and its required operators. A Zeeman term describes coupling to a magnetic field; dipolar and exchange terms describe two distinct mechanisms of interaction between localized degrees of freedom; strain and phonon terms describe coupling to static deformation and lattice vibrations; and drive terms describe externally applied time-dependent control.

## Consistency checks

- **Derive the degree-four kagome placement graph from honeycomb edge clusters.**

  Two cluster sites are adjacent when their corresponding honeycomb edges share a vertex. This construction is the line graph of the honeycomb lattice and produces the kagome lattice. Because the original honeycomb graph has degree \(3\), the line-graph degree is
  \[
  z_{L(G)}=2(3-1)=4.
  \]
  Here, \(z_{L(G)}\) denotes the coordination number, or vertex degree, of the line graph \(L(G)\).

- **Distinguish the three graphs used in the design.**

  The three distinct graphs are the string-net target graph, the physical placement graph, and the realized interaction graph, including unwanted and mediated couplings. The string-net target graph specifies the intended logical connectivity; the placement graph specifies the physical coordinates and local neighbor relations; and the realized interaction graph specifies all couplings present in the physical Hamiltonian.

- **Calculate the relative strength of a pure \(r^{-3}\) interaction tail on the next kagome shell.**

  The next-neighbor distance is \(d_2=\sqrt{3}\,d_1\), where \(d_1\) is the nearest-shell distance. For an interaction satisfying \(J(r)\propto r^{-3}\),
  \[
  J(d_2)/J(d_1)=(d_1/d_2)^3=1/(3\sqrt{3})\approx0.19.
  \]
  Thus, the next-shell interaction is about \(0.19\) of the nearest-shell interaction in this idealized distance-only model.

- **Identify the limitation of using planarity as evidence that mediators are straightforward to implement.**

  Geometric edge crossings are absent, but high-degree mediators and effective many-body operators still require a physical derivation. In particular, a six-leg star of pairwise interactions is not the plaquette operator \(B_p\).

- **State the primary and fallback graph decision.**

  The primary design uses a honeycomb target graph with kagome edge-cluster positions. The fallback uses a square–octagon target graph and is accepted only if its two spacing classes and two face classes can be compensated, including the factor-of-about-\(2.23\) spread in a nominal \(r^{-3}\) bond scale.

- **Distinguish beam width from placement accuracy.**

  Beam width, lateral straggle, the final defect distribution, and registration relative to a device are different quantities. None of the cited numerical values may be used without its associated definition and experimental conditions.

A geometric tiling alone does not define a Hamiltonian. The honeycomb lattice is selected as the target graph because it is trivalent and has one face size.

The clusters occupy kagome sites. The realized coupling pattern is a third, distinct graph, and the \(0.19\) dipolar tail is sufficiently large that the corresponding additional edges must be retained in the Hamiltonian.

## Sources

- [R018] M. A. Levin and X.-G. Wen, “String-net condensation: A
physical mechanism for topological phases,” Physical Review B
71, 045110 (2005). DOI: [10.1103/PhysRevB.71.045110](https://doi.org/10.1103/PhysRevB.71.045110);
[arXiv:cond-mat/0404617](https://arxiv.org/abs/cond-mat/0404617).

- [R017] A. Kitaev, “Anyons in an exactly solved model and beyond,”
Annals of Physics 321, 2–111 (2006). DOI: [10.1016/j.aop.2005.10.005](https://doi.org/10.1016/j.aop.2005.10.005);
[arXiv:cond-mat/0506438](https://arxiv.org/abs/cond-mat/0506438).

- [R184] H. Yao and S. A. Kivelson, “An exact chiral spin liquid with
non-Abelian anyons,” Physical Review Letters
99, 247203 (2007). DOI: [10.1103/PhysRevLett.99.247203](https://doi.org/10.1103/PhysRevLett.99.247203);
[arXiv:0708.0040](https://arxiv.org/abs/0708.0040).

- [R185] M. Kargarian, H. Bombin, and M. A. Martin-Delgado,
“Topological color codes and two-body quantum lattice Hamiltonians,”
New Journal of Physics 12, 025018 (2010). DOI:
[10.1088/1367-2630/12/2/025018](https://doi.org/10.1088/1367-2630/12/2/025018);
[arXiv:0906.4127](https://arxiv.org/abs/0906.4127).

- [R186] G. Kells, J. Kailasvuori, J. K. Slingerland, and J. Vala,
“Kaleidoscope of topological phases with multiple Majorana species,”
New Journal of Physics 13, 095014 (2011). DOI:
[10.1088/1367-2630/13/9/095014](https://doi.org/10.1088/1367-2630/13/9/095014);
[arXiv:1012.5276](https://arxiv.org/abs/1012.5276).

- [R187] R. Moessner and S. L. Sondhi, “Resonating valence bond phase
in the triangular lattice quantum dimer model,” Physical Review
Letters 86, 1881–1884 (2001). DOI: [10.1103/PhysRevLett.86.1881](https://doi.org/10.1103/PhysRevLett.86.1881);
[arXiv:cond-mat/0007378](https://arxiv.org/abs/cond-mat/0007378).

- [R188] L. Balents, M. P. A. Fisher, and S. M. Girvin,
“Fractionalization in an easy-axis kagome antiferromagnet,” Physical
Review B 65, 224412 (2002). DOI: [10.1103/PhysRevB.65.224412](https://doi.org/10.1103/PhysRevB.65.224412);
[arXiv:cond-mat/0110005](https://arxiv.org/abs/cond-mat/0110005).

- [R189] D. M. Toyli, C. D. Weis, G. D. Fuchs, T. Schenkel, and D. D.
Awschalom, “Chip-scale nanofabrication of single spins and spin arrays
in diamond,” Nano Letters 10, 3168–3172
(2010). DOI: [10.1021/nl102066q](https://doi.org/10.1021/nl102066q).

- [R190] T. Schröder et al., “Scalable focused ion beam
creation of nearly lifetime-limited single quantum emitters in diamond
nanostructures,” Nature Communications 8,
15376 (2017). DOI: [10.1038/ncomms15376](https://doi.org/10.1038/ncomms15376); [stable full text](https://pmc.ncbi.nlm.nih.gov/articles/PMC5458551/).

---
