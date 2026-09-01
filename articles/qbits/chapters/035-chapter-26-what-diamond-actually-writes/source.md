# Chapter 26 — Microscopic operators supported by diamond

Consider three negatively charged nitrogen-vacancy centers, NV\(^-\), separated by a few nanometres in diamond. Each defect consists of a missing carbon atom adjacent to a substitutional nitrogen atom and contains an additional electron. Its electronic state can be detected through optical fluorescence.

The NV\(^-\) ground state has a zero-field splitting of \(2.87\ \mathrm{GHz}\). Microwave control can select the \(m_s=0\) and \(m_s=-1\) electron-spin states as a two-level system. The remaining \(m_s=+1\) state is a leakage state, meaning that it lies outside the selected qubit subspace rather than representing a third qubit value.

The electron spins interact through their magnetic dipole moments. The magnetic dipole–dipole interaction decreases with separation \(r\) as \(1/r^3\). At a separation of five nanometres, its characteristic frequency is hundreds of kilohertz rather than gigahertz. Each defect also has a crystallographically determined axis, a nitrogen nuclear spin, strain and phonon couplings, and externally applied microwave interactions.

A host-supported microscopic Hamiltonian is defined here as an operator in which every term either represents an interaction supplied by diamond or is included explicitly so that its coefficient can be set to zero under a stated approximation.

The microscopic state space will be reduced in two stages. First, each spin-1 electron is truncated to a driven two-level qubit. Second, each triangular cluster of three qubits is projected onto two selected cluster states. This sequence converts the proposed physical ingredients into an operator with a tractable low-energy description.

## Geometry and spectrum of a three-vacancy cluster

Consider three NV\(^-\) centers with the same crystallographic axis, denoted by the local \(z\) direction. Ideally, they occupy the vertices of an equilateral triangle in the plane perpendicular to \(z\).

A diamond (111) plane has the required symmetry. However, fabrication of many identical nanometre-scale triangles remains a proposal rather than a demonstrated device.

Each ground-state NV electron has spin \(S=1\). Let \(|0\rangle\) denote the state with \(m_s=0\), and let \(|1\rangle\) denote the state with \(m_s=-1\). Define the Pauli operators \(\tau^\alpha\), where \(\alpha=x,y,z\), within this two-state subspace by

\[
\tau^z|0\rangle=|0\rangle,\qquad \tau^z|1\rangle=-|1\rangle.
\]

The omitted \(m_s=+1\) state is a leakage state, not a third qubit value.

Apply a static magnetic field \(B_0\) along \(z\) and a microwave field near resonance with the \(|0\rangle\leftrightarrow|1\rangle\) transition. The dynamics are described in a frame rotating at the microwave frequency. A rotating frame is a time-dependent representation in which the rapid phase evolution associated with the drive frequency has been removed.

Terms that continue to oscillate rapidly in this frame may be neglected when their oscillation frequencies are much larger than all relevant coupling strengths. This approximation is the rotating-wave approximation. The secular part of the dipole interaction is the component that remains slowly varying after the terms oscillating at gigahertz frequencies have been removed.

For two identical, resonant NV qubits, the secular pair energy is

\[
\frac{H_{ij}^{\rm sec}}{h}
=
\frac{c_{ij}}{4}(1-3\cos^2\theta_{ij})
\left(\tau_i^z\tau_j^z-\tau_i^x\tau_j^x-\tau_i^y\tau_j^y\right)
+\text{one-body shifts}.
\]

Here \(h\) is Planck’s constant, \(c_{ij}>0\) is a frequency defined below, and \(\theta_{ij}\) is the angle between the displacement joining the pair and the \(z\) axis. For the planar triangle, \(\theta_{ij}=\pi/2\). If all three sides have equal length, then \(c_{ij}=c\), and the cluster Hamiltonian becomes

\[
\frac{H_C}{h}=\frac{c}{4}\sum_{i<j\in C}
\left(\tau_i^z\tau_j^z-\tau_i^x\tau_j^x-\tau_i^y\tau_j^y\right).
\tag{26.1}
\]

This three-qubit Hamiltonian can be solved exactly. In the one-excitation basis \(\{|100\rangle,|010\rangle,|001\rangle\}\), every diagonal matrix element is \(-c/4\), and every off-diagonal hopping matrix element is \(-c/2\). Therefore, the symmetric state

\[
|W_1\rangle=\frac{|100\rangle+|010\rangle+|001\rangle}{\sqrt3}
\]

has quasienergy \(-5hc/4\). The two states whose relative phases are \(1,e^{\pm2\pi i/3},e^{\mp2\pi i/3}\) have quasienergy \(+hc/4\). A quasienergy is an eigenvalue of a periodically driven, or Floquet, Hamiltonian. These rotating-frame quasienergies are defined only while the drive and its phase reference are present, and only modulo the drive frequency. They are not laboratory-frame energies. If the drive is turned off, these values no longer determine the measured energy splittings.

Flipping every qubit gives the symmetric two-excitation state

\[
|W_2\rangle=\frac{|011\rangle+|101\rangle+|110\rangle}{\sqrt3},
\]

which also has quasienergy \(-5hc/4\). The fully polarized states have quasienergy \(+3hc/4\). Thus, in the ideal resonant rotating frame, \(|W_1\rangle\) and \(|W_2\rangle\) form a doublet separated from the nearest cluster states by

\[
\Delta_C/h=\frac{3c}{2}.
\tag{26.2}
\]

The ideal triangular cluster therefore has a gap of \(3c/2\) in frequency units between the symmetric \(W\)-state doublet and the chiral states, where the chiral states are the eigenstates with phases \(1,e^{\pm2\pi i/3},e^{\mp2\pi i/3}\).

Define the cluster Pauli operators \(X_C,Y_C,Z_C\) by choosing \(Z_C|W_1\rangle=|W_1\rangle\) and \(Z_C|W_2\rangle=-|W_2\rangle\). Let \(P_C\) be the projector onto this doublet. Direct evaluation gives, for any site \(i\) in the symmetric triangle,

\[
P_C\tau_i^zP_C=\frac13 Z_C,\qquad
P_C\tau_i^xP_C=\frac23 X_C,\qquad
P_C\tau_i^yP_C=\frac23 Y_C.
\tag{26.3}
\]

Equation (26.3) provides the mapping from microscopic qubit operators to encoded cluster operators. It also identifies an important limitation: a physical pair interaction projects to an encoded pair interaction at first order. Projection changes the coefficients and operator components, but it does not by itself generate a plaquette operator, meaning a multibody operator associated with the boundary of a lattice plaquette.

If the equal-side and equal-axis assumptions are relaxed, the doublet in (26.2) splits. In that case, the mapping in (26.3) must be replaced by a different projected matrix representation.

## Complete host-supported microscopic Hamiltonian

The Hamiltonian will be expressed as \(H/h\), so every coefficient has units of hertz. The electron spin operators \(S_i^\alpha\) are dimensionless and have eigenvalues \(m_s=0,\pm1\).

Each NV center has a local orthonormal coordinate frame \((x_i,y_i,z_i)\), with \(z_i\) aligned with the nitrogen–vacancy axis. The selected array uses only one of diamond’s four possible NV orientations. Mixing different orientations would produce distinct level splittings and interaction tensors.

A host-supported microscopic Hamiltonian is

\[
\begin{aligned}
\frac{H}{h}={}&
\sum_i\Big[D_i\big((S_i^{z_i})^2-\tfrac23\big)
+E_{x,i}\big((S_i^{x_i})^2-(S_i^{y_i})^2\big)
+E_{y,i}\{S_i^{x_i},S_i^{y_i}\}\Big] \\
&+\sum_i\gamma_e\mathbf B_i\cdot\mathbf S_i
+\sum_i\left(\mathbf S_i\cdot\mathbf A_i\cdot\mathbf I_i
+P_i(I_i^{z_i})^2-\gamma_{n,i}\mathbf B_i\cdot\mathbf I_i\right)\\
&+\sum_{i<j}c_{ij}\left[\mathbf S_i\cdot\mathbf S_j
-3(\mathbf S_i\cdot\hat{\mathbf r}_{ij})(\mathbf S_j\cdot\hat{\mathbf
r}_{ij})\right]\\
&+\sum_{i<j}J^{\rm ex}_{ij}\,\mathbf S_i\cdot\mathbf S_j
+\frac{H_{\rm strain}(t)+H_{\rm ph}+H_{\rm drive}(t)}{h}.
\tag{26.4}
\end{aligned}
\]

The anticommutator is defined by \(\{A,B\}=AB+BA\). Every term in (26.4) either represents an interaction supplied by the diamond host or is retained explicitly so that setting it to zero constitutes a stated physical approximation.

The first line contains the zero-field splitting and static-strain terms. The coefficient \(D_i\) is the axial zero-field splitting. For the NV\(^-\) ground state near room temperature, \(D\approx2.87\ \mathrm{GHz}\) [R074]. Subtracting \(2/3\) removes only an irrelevant trace and therefore changes all energies by the same constant. The frequencies \(E_{x,i}\) and \(E_{y,i}\) describe transverse symmetry breaking caused by static strain and electric fields.

The NV ground-state spin Hamiltonian and its electric response are experimentally established [Experiment] [R074]; [R191].

Controllable or fluctuating strain can be separated from the static terms by writing

\[
\frac{H_{\rm strain}(t)}{h}=\sum_i\left[
\delta D_i(t)(S_i^{z_i})^2+
\epsilon_{x,i}(t)((S_i^{x_i})^2-(S_i^{y_i})^2)+
\epsilon_{y,i}(t)\{S_i^{x_i},S_i^{y_i}\}\right].
\tag{26.5}
\]

The coefficients in (26.5) include the corresponding spin–strain susceptibilities and therefore have units of hertz. Mechanical control of NV spin transitions has been demonstrated [Experiment] [R192]; [R193]. Equation (26.5) does not assume that strain mediates an interaction between spatially separated defects.

The Zeeman term describes coupling to a magnetic field. The electron gyromagnetic ratio in frequency units is \(\gamma_e=g_e\mu_B/h\approx28\ \mathrm{GHz/T}\), where \(g_e\) is the electron \(g\)-factor and \(\mu_B\) is the Bohr magneton. The field \(\mathbf B_i\) is measured in tesla, and \(\mathbf S_i\) is dimensionless. Consequently, \(\gamma_eB\) has units \(\mathrm{s^{-1}}\), as required.

The hyperfine term describes coupling between the electron and nuclear spins. The operator \(\mathbf I_i\) is the dimensionless \(^{14}\mathrm N\) or \(^{15}\mathrm N\) nuclear spin, and \(\mathbf A_i\) is its hyperfine tensor in hertz. The coefficient \(P_i\) is the \(^{14}\mathrm N\) nuclear quadrupole coefficient, and \(\gamma_{n,i}\) is the nuclear gyromagnetic ratio. Nearby \(^{13}\mathrm C\) nuclei contribute terms of the same form.

The hyperfine interaction cannot be neglected without justification because its megahertz-scale structure can exceed the dipolar coupling in the numerical example below [R074]. The proposal therefore requires isotopic \(^{12}\mathrm C\) enrichment and preparation of every nitrogen nuclear spin in a specified state. Without these conditions, the NV centers are not identical.

The magnetic dipole–dipole term describes the direct interaction between electron magnetic moments. The vector \(\mathbf r_{ij}\) points from defect \(i\) to defect \(j\), \(r_{ij}=|\mathbf r_{ij}|\), and \(\hat{\mathbf r}_{ij}=\mathbf r_{ij}/r_{ij}\). Its coefficient is

\[
c_{ij}=\frac{\mu_0(g_e\mu_B)^2}{4\pi h\,r_{ij}^3}.
\tag{26.6}
\]

The dimensional analysis is \((\mathrm{T\,m/A})(\mathrm{J/T})^2/(\mathrm{J\,s\,m^3})=\mathrm{s^{-1}}\). Numerically,

\[
c_{ij}\approx52\ \mathrm{MHz}(1\ \mathrm{nm}/r_{ij})^3.
\]

Coherent coupling and entanglement between separate NV electron spins have been demonstrated [Experiment] [R080]. This experiment supports inclusion of the dipolar term but does not establish the fabrication yield required for the proposed array.

The coefficient \(J^{\rm ex}_{ij}\) is an isotropic overlap-mediated exchange frequency. Exchange is mediated by overlap of the electronic wave functions. Diamond does not provide a verified, lithographically tunable, long-range NV–NV exchange bus.

Because electronic wave-function overlap decreases rapidly with separation, the 5–10 nm model array considered below assumes \(J^{\rm ex}_{ij}\approx0\). The symbol is retained in (26.4) to identify the discarded interaction explicitly, not to introduce a convenient Heisenberg coupling. In particular, the antiferromagnetic open-chain Hamiltonian sometimes used for an abstract three-spin encoded qubit does not follow from this NV geometry.

Phonons are quantized normal modes of lattice vibration. Let \(b_q\) annihilate a phonon in normal mode \(q\), whose frequency is \(\nu_q\). A compact host-supported form for the phonon Hamiltonian and spin–phonon coupling is

\[
\frac{H_{\rm ph}}h=\sum_q\nu_q b_q^\dagger b_q+
\sum_{i,q}(b_q+b_q^\dagger)
\left[g_{iq}^{\parallel}(S_i^{z_i})^2+g_{iq}^{x}Q_i^x+g_{iq}^{y}Q_i^y\right],
\tag{26.7}
\]

where \(Q_i^x=(S_i^{x_i})^2-(S_i^{y_i})^2\), \(Q_i^y=\{S_i^{x_i},S_i^{y_i}\}\), and every coefficient \(g\) is a frequency. Phonons can coherently drive a selected mechanical mode [R192]; [R193], whereas an uncontrolled phonon bath produces relaxation and dephasing. Relaxation changes state populations, while dephasing destroys phase coherence without necessarily changing populations.

Measured NV longitudinal relaxation depends strongly on temperature [Experiment] [R194]. The uncontrolled bath therefore cannot be replaced by a noiseless interaction in the model.

A microwave magnetic field \(\mathbf B_{1,i}(t)\) produces the drive term

\[
\frac{H_{\rm drive}(t)}h=\sum_i\gamma_e\mathbf B_{1,i}(t)\cdot\mathbf
S_i.
\tag{26.8}
\]

Optical fields can initialize and read out the NV center through excited electronic states [R074], but those states are not included in (26.4). Adiabatic elimination, which removes rapidly evolving excited states perturbatively, would generate light shifts, Raman couplings, scattering, and optical decay together. A consistent elimination cannot retain only the useful coherent interaction while omitting the associated decay.

Every symbol in (26.4) is therefore either measured, estimated, or deliberately assigned a zero value. Omitting the list of terms set to zero changes the assumed host Hamiltonian.

## Projection from spin 1 to a driven qubit

Define the single-NV projector

\[
P_i=|0\rangle\langle0|+|1\rangle\langle1|.
\]

Within this two-state subspace, the projected spin-1 operators are

\[
P_iS_i^zP_i=\frac{\tau_i^z-\mathbb1}{2},\qquad
P_iS_i^xP_i=\frac{\tau_i^x}{\sqrt2},\qquad
P_iS_i^yP_i=\frac{\tau_i^y}{\sqrt2}.
\tag{26.9}
\]

For a magnetic field aligned with the NV axis, the two transition frequencies from \(m_s=0\) are approximately \(\omega_-=D-\gamma_eB_0\) and \(\omega_+=D+\gamma_eB_0\). A drive near \(\omega_-\) permits rotating-wave and leakage expansions if \(\omega_-\), \(\omega_+\), and their separation are all much larger than the coupling strengths and Rabi frequencies. A Rabi frequency is the coherent transition rate produced by the applied drive. Projecting the interaction associated with (26.6) and discarding terms that oscillate near gigahertz frequencies gives the secular pair Hamiltonian used for the triangle.

This derivation is [Theory]. The result is a Floquet quasienergy Hamiltonian sustained by an external phase reference.

Turning off the resonant drive restores the large laboratory-frame energy difference between \(|W_1\rangle\) and \(|W_2\rangle\). The encoded doublet is therefore not a passive ground-space doublet. The first projection is a driven two-level truncation rather than a spontaneous encoding. The three microscopic NV spins remain physical spins, and the two states retained at each NV remain physical qubit levels. Equation (26.9) does not generate an anyon, which is a quasiparticle excitation characterized by nontrivial exchange or braiding statistics.

If the residual oscillation frequencies are not much larger than the couplings, the rotating-wave approximation fails. Terms oscillating at gigahertz frequencies can then contribute to the dynamics, and (26.1) no longer represents the pair energy.

## Projection from a triangle to a cluster doublet

Let \(P=\prod_C P_C\) project every triangle onto the doublet defined by (26.2). Let \(V\) contain intercluster dipolar bonds, detuning disorder, and weak drives. Schrieffer–Wolff perturbation theory, the perturbative separation of retained and eliminated energy sectors introduced in Chapter 22, gives

\[
\frac{H_{\rm eff}}h=P\frac{H_C+V}{h}P
-P\frac{V}{h}Q\left(Q\frac{H_C-E_0}{h}Q\right)^{-1}Q\frac{V}{h}P
+O\!\left(\frac{v^3}{(\Delta_C/h)^2}\right),
\tag{26.10}
\]

where \(Q=\mathbb1-P\), \(E_0\) is the ideal doublet energy, and \(v\) bounds the frequencies appearing in \(V\). The states eliminated by the projector continue to affect the effective Hamiltonian through virtual excursions out of and back into the retained subspace. These processes produce the second-order term in (26.10).

For a physical bond between site \(i\) of cluster \(C\) and site \(j\) of cluster \(D\), equation (26.3) gives

\[
P\,\tau_{i}^{\alpha}T_{ij}^{\alpha\beta}\tau_j^\beta P
=M_\alpha M_\beta\,
\Sigma_C^\alpha T_{ij}^{\alpha\beta}\Sigma_D^\beta,
\quad (M_x,M_y,M_z)=\left(\frac23,\frac23,\frac13\right),
\tag{26.11}
\]

where repeated indices \(\alpha,\beta\) are summed, \(T_{ij}\) is the physical dipolar tensor in hertz, and \(\boldsymbol\Sigma_C=(X_C,Y_C,Z_C)\). A uniform resonant transverse drive projects according to \(P_C\Gamma\sum_i\tau_i^xP_C=2\Gamma X_C\).

A detuning term \(\sum_i\delta_i\tau_i^z/2\) produces \((\sum_i\delta_i)Z_C/6\) at first order. Unequal detunings also mix the doublet with the chiral states and generate corrections of order \(\sigma_\delta^2/(\Delta_C/h)\).

The resulting model is

\[
\frac{H_{\rm eff}}h=
\sum_C(2\Gamma_C X_C+\bar\delta_C Z_C)
+\sum_{\langle C,D\rangle}\sum_{\alpha,\beta}
\widetilde J_{CD}^{\alpha\beta}\Sigma_C^\alpha\Sigma_D^\beta
+\delta H^{(2)}/h,
\tag{26.12}
\]

rather than a string-net Hamiltonian. A string-net Hamiltonian is a constrained many-body model whose edge labels and local recoupling rules can realize topological order. In (26.12), \(\widetilde J=M T M\), and \(\delta H^{(2)}/h\) contains shifts and additional two-cluster terms. When two bonds share a virtual cluster excitation, it can also contain small multicluster terms with scale at most approximately \(u^2/(\Delta_C/h)\).

The coefficients of these terms are determined by the geometry and the perturbative energy denominators. They are not automatically the Fibonacci \(F\)-symbols, which are the recoupling coefficients associated with Fibonacci anyon fusion.

Thus, at first order, an intercluster bond remains a bilinear bond between cluster Pauli operators, with projection factors \((2/3,2/3,1/3)\). The cluster doublet is an encoded pseudospin, meaning an effective two-level degree of freedom formed from multiple microscopic spins.

A periodically driven array of these pseudospins is an analog emulator. Neither the pseudospin encoding nor the analog-emulator description, separately or together, demonstrates emergent anyons or equilibrium topological order.

For a concrete parameter estimate, take \(B_0=20\ \mathrm{mT}\). Using \(D=2.87\ \mathrm{GHz}\) and \(\gamma_e=28\ \mathrm{GHz/T}\) gives \(\omega_-\approx2.31\ \mathrm{GHz}\) and \(\omega_+\approx3.43\ \mathrm{GHz}\).

For an illustrative triangle side length \(r=5\ \mathrm{nm}\), equation (26.6) gives \(c\approx52/5^3\ \mathrm{MHz}=0.416\ \mathrm{MHz}\), and therefore \(\Delta_C/h\approx0.624\ \mathrm{MHz}\). At a representative intercluster separation of \(10\ \mathrm{nm}\), the unprojected dipolar scale is \(u\lesssim52\ \mathrm{kHz}\) before including angular and projection factors.

A weak drive with \(\Gamma\sim20\ \mathrm{kHz}\) would satisfy \(u,\Gamma\ll\Delta_C/h\ll\omega_\pm\).

This dimensional hierarchy is plausible as a theoretical estimate. The complete operating regime is more restrictive:

\[
\omega_\pm\gg c\gg u,\Gamma,\sigma_\delta,\Gamma_{\rm decoh},
\qquad k_BT/h\ll\Delta_{\rm desired}/h,
\tag{26.13}
\]

while the nuclear-spin states must be fixed and the rotating-frame phases must be synchronized. Here \(\Gamma_{\rm decoh}\) denotes the relevant decoherence rate, \(k_B\) is Boltzmann’s constant, \(T\) is temperature, and \(\Delta_{\rm desired}\) is the desired many-body energy gap. The final inequality refers to a many-body gap that has not been shown to exist for (26.12).

Nanoscale aperture masks with sub-10 nm features have confined implanted NV clusters, including clusters containing up to three centers [Experiment] [R195]. Ion straggle and conversion statistics prevent this result from establishing deterministic placement of a specified 5 nm equilateral triangle, and it does not establish fabrication of a honeycomb-edge array.

These numerical values define a falsifiable design point [Proposal], not a claim that such a device has been demonstrated.

The leading controlled corrections are

\[
\left\|\delta H^{(2)}/h\right\|
=O\!\left(\frac{u^2+\Gamma^2+\sigma_\delta^2}{\Delta_C/h}
+\frac{c^2+\Omega^2}{\min(\omega_-,\omega_+)}
+\frac{c^2+\Omega^2+E_\perp^2}{\Delta_{\rm leak}/h}\right),
\tag{26.14}
\]

where \(\Omega\) is a physical microwave Rabi frequency, \(E_\perp^2=E_x^2+E_y^2\), and \(\Delta_{\rm leak}\) is the relevant separation from the \(m_s=+1\) state. The first fraction represents cluster leakage, the second represents the nonsecular or Bloch–Siegert correction, and the third represents spin-1 leakage. A Bloch–Siegert correction is the frequency shift caused by counter-rotating drive terms omitted by the rotating-wave approximation.

Equation (26.14) specifies scaling rather than an equality. A device-specific calculation must diagonalize the actual interaction tensors determined by its geometry.

If \(u\) is not small compared with \(\Delta_C/h\), the Schrieffer–Wolff truncation fails because transitions out of the retained doublet are no longer perturbative. The doublet then ceases to define the slow effective subspace.

## Missing operators required for topological order

The proposed sequence is NV electron spins, coupled three-NV clusters, cluster pseudospins, a honeycomb-edge model, and finally topological order. The final implication has not been established.

A low-energy projector translates the microscopic interactions already present in the Hamiltonian. It does not create additional interactions solely from the choice of architecture.

The doubled-Fibonacci Levin–Wen target contains a local branching constraint \(Q_v\) at every trivalent vertex and a plaquette operator \(B_p\) that inserts a loop and recouples edge labels using the Fibonacci \(F\)-symbols [R018]. For the honeycomb-edge architecture, equation (26.12) does not contain:

- a three-edge vertex projector implementing the correct allowed Fibonacci fusion channels;

- the conditional, many-edge, off-diagonal plaquette action with the correct relative amplitudes and phases;

- a mechanism that cancels the larger one-body and two-body terms without also closing the intended gap;

- evidence that the residual terms in (26.14) lie within the stability region of the doubled-Fibonacci phase;

- a passive laboratory-frame ground manifold, because the present doublet is resonantly dressed.

Higher-order perturbative gadgets could be proposed to address the first three items. Such constructions require mediator degrees of freedom and produce amplitudes suppressed by products of \(u/\Delta_C\). These mediators are absent from the selected microscopic Hamiltonian. Therefore, [Theory] the derived model is an anisotropic, driven pseudospin model. [Speculation] It might serve as one component of a separately engineered gadget construction, but it does not presently constitute a derivation of Fibonacci order.

The derivation answers three distinct questions. The interactions supplied by diamond are known. The interactions that remain within the selected subspace are calculable. The surviving interactions do not have the structure required by the target topological model. This negative conclusion is a valid result of the microscopic derivation.

## Experimentally established components and unresolved requirements

[Experiment] Single-NV zero-field, Zeeman, hyperfine, electric/strain, microwave, optical, and phonon-relaxation physics are well characterized [R074]; [R191]; [R192]; [R193]; [R194]. [Experiment] Dipolar coupling has been used to entangle two individually addressed NV electron spins [R080]. These results justify the corresponding terms in (26.4).

The unestablished elements are also specific. References [R074]; [R191]; [R192]; [R193]; [R080]; [R194]; [R018]; [R195] do not report a mesoscopic array of identical 5 nm three-NV triangles with fixed orientation, initialized nuclear states, uniform detunings, and individually phased drives.

These references do not report measurement of the cluster gap in (26.2), a many-body topological gap, topological degeneracy, a string operator, or an anyonic excitation in this material architecture. The established microscopic ingredients and the proposed architecture therefore remain separated by unresolved fabrication and control requirements.

A measured pair coupling is a physical bond. A projected cluster doublet is an encoded residual degree of freedom. Neither is equivalent to a vertex projector, a plaquette recoupling operator, or a topological gap.

## Common modeling errors

- **Treating a rotating-frame phase as a passive phase.** Quasienergy degeneracy depends on an applied drive and a clock or phase reference. It does not provide thermal ground-state protection. If the drive is turned off, the doublet in (26.2) is lost because the laboratory-frame splitting between \(|W_1\rangle\) and \(|W_2\rangle\) returns.

- **Replacing dipolar coupling with exchange without microscopic support.** Isotropic antiferromagnetic exchange permits a convenient encoded-spin algebra, but it is not a supported coupling between NV centers separated by 5–10 nm in this architecture. The term \(J^{\rm ex}_{ij}\) should remain visible in (26.4) and then be set to zero explicitly. Restoring it without justification changes the assumed host Hamiltonian.

- **Neglecting the nitrogen nuclear spin.** An unresolved hyperfine manifold is not a negligible correction relative to a sub-megahertz cluster gap.

- **Treating phonons only as a coherent interaction bus.** The same spin–phonon coupling also permits relaxation and dephasing. Any coherent-mode proposal must include loss and thermal occupation.

- **Equating first-order projection with a perturbative gadget.** Equations (26.3) and (26.11) preserve operator locality. Multibody terms require virtual processes and are accompanied by energy denominators and competing corrections.

- **Inferring a phase from terminology.** The labels “honeycomb,” “cluster,” and “plaquette” do not establish a physical phase. The relevant evidence is the spectrum, gap, ground-state degeneracy, and quasiparticle properties.

- **Interpreting illustrative separations as fabrication tolerances.** The values five and ten nanometres are assumed separations, not demonstrated placement distributions or fabrication yields.

## Consistency checks

- **Exchange term.** Exchange, meaning a spin–spin interaction that transfers excitations between NV centers, is included in the microscopic Hamiltonian and then set to zero to make the microscopic resource audit explicit. Long-range tunable nitrogen-vacancy (NV)–NV exchange is not a supported resource at the chosen spacing. Retaining it implicitly would therefore change the assumed host system.

- **Cluster leakage gap.** The cluster leakage gap \(\Delta_C\) is the energy separation between the encoded cluster subspace and states outside that subspace. For the ideal triangle,
  \[
  \Delta_C/h=3c/2.
  \]
  In the one-excitation basis, the symmetric \(W\)-state has energy \(-5c/4\), whereas the chiral states, which have opposite phase winding around the triangle, have energy \(+c/4\). Their separation is therefore \(3c/2\). The two-excitation partner \(|W_2\rangle\) gives the same result.

- **Replacement by isotropic antiferromagnetic exchange.** Isotropic antiferromagnetic exchange is a rotationally invariant spin coupling that energetically favors antiparallel spin alignment. Replacing the dipolar interaction by this coupling changes the model: the secular pair energy, obtained after retaining the resonant or energy-conserving interaction terms, no longer has the XXZ form of (26.1). Here, XXZ denotes an anisotropic spin interaction with equal transverse couplings and a generally different longitudinal coupling. Consequently, the abstract three-spin Heisenberg encoding of Chapter 24 does not follow from this NV geometry.

- **First-order form of an intercluster dipolar bond.** A bilinear interaction is one that contains one operator from each of two coupled clusters. Equation (26.3) maps each physical Pauli operator to a cluster Pauli operator multiplied by one of the projection factors \((2/3,2/3,1/3)\). Therefore, (26.11) remains a two-cluster bilinear coupling,
  \[
  \widetilde J=MTM,
  \]
  where \(T\) is the physical dipolar coupling tensor and \(M\) contains the projection factors.

- **Absent target interactions.** The construction does not produce the Fibonacci branching projector or the conditional \(F\)-symbol plaquette recoupling operator. It also does not demonstrate a passive topological gap.

- **Removal of the resonant drive.** Quasienergy is the energy-like eigenvalue associated with a periodically driven system. If the resonant drive is turned off, the quasienergy degeneracy of \(|W_1\rangle\) and \(|W_2\rangle\) disappears. The laboratory-frame energy splitting returns, and the encoded doublet no longer forms a passive ground-space pair.

A same-orientation NV array, in which the NV symmetry axes have a common orientation, is described by (26.4). Spin-1 projection, meaning restriction of the physical NV spin-1 Hilbert space to the selected effective subspace, gives (26.9) and a secular dipolar tensor.

An ideal resonantly driven three-NV triangle has the doublet (26.2), consisting of two encoded states. Local operators project into this doublet according to (26.3).

Intercluster bonds produce (26.11), with corrections that scale as (26.14). These results do not constitute a static encoded doublet, isotropic exchange, a vertex projector, a plaquette recoupling operator, or a topological gap.

## Sources

- [R074] M. W. Doherty, N. B. Manson, P. Delaney, et al.,
“The nitrogen-vacancy colour centre in diamond,” Physics
Reports 528, 1–45 (2013). DOI: [10.1016/j.physrep.2013.02.001](https://doi.org/10.1016/j.physrep.2013.02.001).

- [R191] F. Dolde, H. Fedder, M. W. Doherty, et al.,
“Electric-field sensing using single diamond spins,” Nature
Physics 7, 459–463 (2011). DOI: [10.1038/nphys1969](https://doi.org/10.1038/nphys1969).

- [R192] A. Barfuss, J. Teissier, E. Neu, A. Nunnenkamp, and P.
Maletinsky, “Strong mechanical driving of a single electron spin,”
Nature Physics 11, 820–824 (2015). DOI: [10.1038/nphys3411](https://doi.org/10.1038/nphys3411).

- [R193] E. R. MacQuarrie, T. A. Gosavi, A. M. Moehle, N. R.
Jungwirth, S. A. Bhave, and G. D. Fuchs, “Coherent control of a
nitrogen-vacancy center spin ensemble with a diamond mechanical
resonator,” Optica 2, 233–238 (2015). DOI: [10.1364/OPTICA.2.000233](https://doi.org/10.1364/OPTICA.2.000233).

- [R080] F. Dolde, I. Jakobi, B. Naydenov, et al.,
“Room-temperature entanglement between single defect spins in diamond,”
Nature Physics 9, 139–143 (2013). DOI: [10.1038/nphys2545](https://doi.org/10.1038/nphys2545).

- [R194] A. Jarmola, V. Acosta, K. Jensen, S. Chemerisov, and D.
Budker, “Temperature- and magnetic-field-dependent longitudinal spin
relaxation in nitrogen-vacancy ensembles in diamond,” Physical
Review Letters 108, 197601 (2012). DOI: [10.1103/PhysRevLett.108.197601](https://doi.org/10.1103/PhysRevLett.108.197601).

- [R018] M. A. Levin and X.-G. Wen, “String-net condensation: A
physical mechanism for topological phases,” Physical Review B
71, 045110 (2005). DOI: [10.1103/PhysRevB.71.045110](https://doi.org/10.1103/PhysRevB.71.045110).

- [R195] T.-Y. Hwang, J. Lee, S.-W. Jeon, et al., “Sub-10 nm
precision engineering of solid-state defects via nanoscale aperture
array mask,” Nano Letters 22, 1672–1679
(2022). DOI: [10.1021/acs.nanolett.1c04699](https://doi.org/10.1021/acs.nanolett.1c04699).

---
