---
title: Fibonacci quasicrystals
date: 2026-08-03
summary: "A mathematical route into Fibonacci tilings: irrational rotations, a dense orbit on a torus, and a clearly hypothetical diamond-based quantum architecture."
---

A Fibonacci quasicrystal is a one-dimensional pattern with long-range order but no
translation period. Its finite patches recur, but no nonzero shift reproduces the
entire infinite pattern. It is not random: one global rule determines every tile.

The familiar construction is almost absurdly small:

```text
L → LS
S → L
```

Here `L` and `S` denote long and short tiles. Apply both replacements to every
letter at once, starting with `L`:

```text
L
LS
LSL
LSLLS
LSLLSLSL
…
```

Each word is a finite prefix of the one-sided infinite Fibonacci word, which extends
to the right. In an arbitrary common length unit, give `S` length 1 and `L` length
the golden ratio, `φ = (1 + √5) / 2 ≈ 1.618`. The symbol counts explain why this
length ratio is natural; the count ratio does not depend on the chosen tile lengths.

Let `ℓₖ` and `sₖ` count the `L` and `S` symbols after `k` substitutions. Generation
0 is the single letter `L`. Each old `L` produces one `L` and one `S`, while each old
`S` produces one `L`, so:

```text
(ℓ₀, s₀) = (1, 0)
ℓₖ₊₁ = ℓₖ + sₖ
sₖ₊₁ = ℓₖ
```

Define Fibonacci numbers by `F₀ = 0`, `F₁ = 1`, and
`Fₙ₊₂ = Fₙ₊₁ + Fₙ`. The recurrences give `ℓₖ = Fₖ₊₁` and `sₖ = Fₖ`, so for `k ≥ 1`

```text
ℓₖ / sₖ = Fₖ₊₁ / Fₖ  →  φ
```

The arrow means the ratios approach `φ` as `k` grows; a finite generation need not
equal the limit. One way to check the limit is the exact solution
`Fₖ = (φ^k − (−1/φ)^k) / √5`. A power with base `z` satisfies the recurrence when
`z² = z + 1`, as both bases here do. Their difference divided by `√5` gives the
stated initial values. Since `|−1/φ| < 1 < φ`, the second power becomes negligible, giving
the ratio limit. Dividing each count by `ℓₖ + sₖ` then gives limiting tile fractions
`φ/(φ + 1) = 1/φ` long and `1/(φ + 1) = 1/φ²` short. These are count frequencies,
not fractions of the physical line's length.
With the chosen lengths, the same `φ` also makes the substitution an inflation:
`φ² = φ + 1`, so scaling an `S` by `φ` gives length `φ` (one `L`), while scaling
an `L` gives length `φ²` (one `L` plus one `S`).

## The small rule and the large order

The deterministic substitution produces order at every scale. Patches recur, and
the tile frequencies approach fixed limits. In the ideal infinite Fibonacci chain,
equally weighted boundary points have [sharp diffraction peaks](https://arxiv.org/html/2312.12825):
the mathematical scattering intensity consists of point peaks, called Bragg peaks,
with no continuous diffuse component. This does not mean the peak positions form an
isolated, evenly spaced lattice. The statement concerns the ideal chain, not a
measurement on a particular sample.

A conventional crystal repeats by a translation. Here the tile choices come from
a prescribed substitution, rather than independent random choices. The Fibonacci
chain has no translation period and no finite unit cell that can be copied indefinitely.

## An irrational step around a circle

A useful way to describe non-repetition is to rotate around a unit circle. Write the
phase after integer step `n` as

```text
e^(2πinα),    n ∈ ℤ
```

Here `n` is an integer step index, `α` is the number of turns per step, `i` is the
imaginary unit (`i² = −1`), and `ℤ` is the integers. The complex exponential places
each phase on the circle. Equivalently, record the fractional parts
`0, α, 2α, 3α, … (mod 1)`, where “mod 1” means that phases differing by an integer
number of turns are identified.

Two integer steps `n` and `m` land at the same phase exactly when
`(n − m)α` is an integer. If `α = p/q` in lowest terms, the orbit repeats after
`q` steps and visits finitely many phases. If `α` is irrational, no positive integer
step returns it to its starting phase; moreover, the standard irrational-rotation
result says the orbit is dense, meaning it comes arbitrarily close to every point
on the circle.

For the discrete rotation, choose `α = φ`. The identity `φ² = φ + 1` implies
`φ − 1 = 1/φ`, so its fractional part is `1/φ ≈ 0.618`. Thus `φ` and `1/φ`
describe the same integer-step rotation modulo 1. The particular tile coding below
uses another increment, `β = 1/φ² ≈ 0.382`. Since `1/φ + 1/φ² = 1`, `β = 1 − α`
for `α = 1/φ`: the coding advances in the reverse direction around the circle.
It is related to, but is not the same numerical slope as, the preceding rotation.

## The rule that turns the rotation into tiles

Fix the mark at phase 0 on a circle of circumference 1, and set
`β = 1/φ²`. To match the indexing below, begin recording at phase `β`, not phase 0.
For tile `n`, advance from phase `nβ` to `(n + 1)β`, reducing phases modulo 1.
Write `S` if that interval crosses the marked point (equivalently, crosses an
integer before reduction); otherwise write `L`.

The same rule is expressed without a picture by the floor function. `⌊x⌋` is the
greatest integer no larger than `x`; `aₙ` is the binary code for tile `n`:

```text
aₙ = ⌊(n + 1)β⌋ − ⌊nβ⌋,    n = 1, 2, 3, …

aₙ = 0  →  L
aₙ = 1  →  S
```

Because `0 < β < 1`, each difference is either 0 or 1. For example, using
`β ≈ 0.382`, the first two intervals are:

| `n` | `nβ` | `(n + 1)β` | floor difference | tile |
|---:|---:|---:|---:|:---:|
| 1 | 0.382 | 0.764 | 0 | L |
| 2 | 0.764 | 1.146 | 1 | S |

The first interval does not cross an integer; the second does. Continuing gives
`L S L L S L S L L S …`, the displayed Fibonacci prefix. The
[standard rotation description of the Fibonacci word](https://arxiv.org/pdf/2206.00995)
identifies this entire one-sided word with the substitution limit, not just its first
few letters. The index starts at 1, so the first recorded crossing test is from `β`
to `2β`. Recording every step starting at 0 would add an initial `L` and shift this
displayed convention.

The word from this specific crossing rule is not periodic. To see why, let `N` be a
positive prefix length and let `N_S(N)` count its short tiles. Summing the floor
differences cancels the intermediate terms:

```text
N_S(N) = a₁ + … + a_N
       = ⌊(N + 1)β⌋ − ⌊β⌋
       = ⌊(N + 1)β⌋
N_S(N) / N  →  β
```

The last equality uses `0 < β < 1`, so `⌊β⌋ = 0`; the limit follows because a
floor differs from its argument by less than 1. A periodic word with `p` tiles per
period and `r` short tiles in that period would have short-tile frequency `r/p`, a
rational number. An eventually periodic word has the same rational limit, since a
finite initial prefix does not change the limiting frequency. Here `β = 1/φ²` is
irrational, so this word is neither periodic nor eventually periodic. This argument
is specific to the crossing code. An irrational orbit alone does not guarantee that every possible
symbolic observation is nonperiodic: a rule that labels every phase `L` would produce
a constant word.

Assigning lengths to the letters turns the word into a tiling; placing a point at
each boundary gives a point-set model. One may then attach weights to those already
defined positions—for example density, scattering strength, or occupancy—to model an observable.
The weights describe a field on the arrangement; they do not define the arrangement.
A quasiperiodic function can supply weights sampled at those positions. This does
not identify the point set itself with a continuous quasiperiodic function.
With equal boundary weights, the ideal point set has the diffraction property
described above; arbitrary added weights need not preserve it. These are mathematical
models, not reports about a particular physical sample.

## Why the torus is the better picture

For a continuous, dimensionless real parameter `x`, a single phase `e^(2πiαx)`
with nonzero `α` travels around the circle and repeats after `1/|α|`. This is
different from the integer-indexed orbit above: discrete rational increments visit
only finitely many phases.

To keep two phases with no common period, follow the continuous path

```text
x ↦ (e^(2πix), e^(2πiαx)).
```

Both coordinates are phases, and here `α` is any fixed irrational number. The pair
lies on a two-dimensional torus, the product of two circles. A return after a nonzero
parameter interval `T` would require both `T` and `αT` to be integers. No such `T`
exists for irrational `α`. To see density, fix the first phase at `t`, with
`0 ≤ t < 1`, and take `x = m + t` for integer `m`. The second phase then follows
the dense irrational rotation `αm + αt` modulo 1. Thus the continuous path comes
arbitrarily close to every phase pair. For rational `α`, it instead closes after a
finite interval. Unlike discrete samples, continuous frequencies cannot generally
be replaced by their fractional parts without changing the path.

A continuous function on this torus is periodic in each angle. Restricting such a
function to the path produces a one-dimensional signal built from the two periodic
phases. This is a common way to make a quasiperiodic function, though the result
need not be nonperiodic: an observable can ignore one phase. For example, with
`u = x mod 1` and `v = αx mod 1`,

```text
G(u, v) = cos(2πu)             →  g(x) = cos(2πx)
H(u, v) = cos(2πu) + cos(2πv) →  h(x) = cos(2πx) + cos(2παx)
```

Here `G` and `H` are torus functions, while `g` and `h` are their restrictions to
the path. `g` is periodic with period 1. For `h`, note that `h(0) = 2`. A period
`T` would require `h(T) = 2`; since each cosine is at most 1, both would have to
equal 1. This forces `T` and `αT` to be integers, impossible for nonzero `T` when
`α` is irrational. Thus `h` is nonperiodic. The orbit's density alone does not
decide whether a particular observable repeats; that also depends on what the
function measures.

The higher-dimensional picture explains one source of quasiperiodic order: a
periodic object in two phase coordinates can yield a nonrepeating one-dimensional
observable along an irrational path. To construct a quasicrystal point set by
projection, one selects lattice points inside an appropriate strip and projects
them onto the line; merely intersecting a line with a lattice is not that construction.
The Fibonacci tile rule above gives a direct one-dimensional construction.

## From Fibonacci counting to quantum information

The name *Fibonacci* also appears in a model of non-Abelian anyons. Anyons are
quasiparticles—collective excitations that behave like particles in a two-dimensional
system—whose exchanges can act on a multi-state quantum space. “Non-Abelian” means
that these exchange operations need not commute. In the Fibonacci model, the charge
types are `1` (vacuum or trivial charge) and `τ` (nontrivial charge). These labels
classify fusion behavior, not ordinary electric charge. Fusion combines anyons and
asks for their resulting total charge. The relevant rules are

```text
1 × τ = τ
τ × τ = 1 + τ
```

Here `×` means fusion of charge types, and `+` lists allowed alternative outcomes;
it is not ordinary addition and does not specify probabilities. A fusion tree records
which groups of anyons are combined first; a fusion path labels its intermediate
charges consistently with the rules. We count paths in one chosen tree for anyons
in the plane, with no extra degrees of freedom from handles or additional boundaries.
The count depends on the number of `τ` anyons and their fixed total charge.

For clarity, let `dₙ(1)` and `dₙ(τ)` count fusion paths for `n` identical `τ`
anyons ending in total charge `1` or `τ`. Start with one anyon:
`d₁(1) = 0`, `d₁(τ) = 1`. Adding one more `τ` and applying the rules gives

```text
dₙ₊₁(1) = dₙ(τ)
dₙ₊₁(τ) = dₙ(1) + dₙ(τ)
```

Only a previous total `τ` can fuse with the added `τ` to give total `1`. Either
previous total can give total `τ`. With `F₀ = 0`, `F₁ = 1`, and
`Fₙ₊₂ = Fₙ₊₁ + Fₙ`, these counts are `dₙ(1) = Fₙ₋₁` and `dₙ(τ) = Fₙ`.
For instance:

| Number of `τ` anyons | Total `1` paths | Total `τ` paths | Combined paths |
|---:|---:|---:|---:|
| 1 | 0 | 1 | 1 |
| 2 | 1 | 1 | 2 |
| 3 | 1 | 2 | 3 |
| 4 | 2 | 3 | 5 |
| 5 | 3 | 5 | 8 |

The combined sequence `1, 2, 3, 5, 8, …` sums different total-charge sectors; it is
not the dimension of one fixed-charge space. In the fixed-`τ` sector, the sequence
is `1, 1, 2, 3, 5, …`. These are basis-path counts, not a claim that every path is
measured and recorded during computation.

With three `τ` anyons and total charge fixed to `τ`, the first pair can fuse to `1`
or to `τ`; either intermediate choice can then combine with the last `τ` to give
total `τ`. These two fusion paths span a two-dimensional state space. Encoding
quantum information in that selected two-dimensional subspace gives a logical qubit.
Braiding means exchanging the anyons along paths without fusing them. It transforms
the fusion-path states; because the transformations need not commute, changing the
exchange order can change the operation. A two-dimensional space and braid operations
alone do not establish protection or fault tolerance, which also requires handling
faults in the physical operations without losing the encoded information.

In the [cited tiling proposal](https://www.mdpi.com/2073-8994/14/9/1780), a history
records the long/short tile type around a chosen position across successive
inflation or deflation levels. Those entries describe different scales, not
neighboring tiles in one chain. The allowed transitions are `L → L or S` and
`S → L`: a short entry must be followed by a long one. At the level of these paths,
identify `L` with cumulative charge `τ` and `S` with cumulative charge `1`.
The transitions then match adding one `τ` anyon. For example, an `n`-entry history
starting and ending with `L` matches a fusion path starting with one `τ` and ending
with total `τ`, giving `Fₙ` paths under these endpoint conditions.

This explains the constrained-history comparison without identifying fusion
dimensions with all patches of the Fibonacci word. The proposal concerns a
specified encoding between spaces; matching counts alone does not supply physical
braid operations or make a tiling a fault-tolerant quantum computer.

## A hypothetical diamond architecture

One possible hardware story uses diamond colour centres—crystal defects whose spins
can encode qubits—in a two-dimensional network. This explicitly **hypothetical**
architecture would realize a [Fibonacci string-net code](https://arxiv.org/html/2012.04610v1),
also called a Fibonacci Turaev–Viro code. Each edge of a graph with three edges at
every vertex would carry an encoded two-state degree of freedom labelled `1` or `τ`.
A string-net state can superpose such labelled networks. The labels are basis-state
labels in a spin encoding, not a claim that physical Fibonacci anyons already exist
in diamond.

The ideal vertex rule allows the unordered triples `(1,1,1)`, `(1,τ,τ)`, and
`(τ,τ,τ)`; permutations are also allowed. `(1,1,τ)` is forbidden because two trivial
charges fuse to `1`, not `τ`. A vertex measurement tests the allowed subspace; its
passing outcome projects onto that subspace, while a failing outcome detects a
constraint violation.

These local label tests alone do not make the full code. For each face, a quantum
projector forms a weighted combination of adding a closed `1` or `τ` loop and
absorbing it into the surrounding edges using the model's fusion data. This operation
can mix edge configurations coherently; it is not a classical comparison of labels.
A code state must be left unchanged by each face projector as well as pass every
vertex check. In the ideal mathematical model, these projectors commute; their
shared passing subspace is the code space.

The proposed logical information would be stored in global degrees of freedom that
survive all those local checks. Which logical degrees of freedom exist depends on the
network and its boundaries; “global patterns” alone does not determine a qubit count.
A diamond implementation would additionally need state preparation, multi-spin
checks, logical operations, and reliable syndrome readout: measurement outcomes
identifying constraint violations. Those requirements are hypothetical assumptions,
not capabilities established by the existence of addressable spins.

The [cited 2022 diamond experiment](https://www.nature.com/articles/s41586-022-04819-6)
demonstrated a five-data-qubit stabilizer code. Such a code uses commuting multi-qubit
checks to detect errors without reading the encoded logical state. The experiment
used seven spins: five nearby carbon-13 nuclear-spin data qubits, a nitrogen-vacancy
(NV) electron-spin measurement ancilla (an auxiliary qubit), and a nitrogen
nuclear-spin flag that detects dangerous error propagation from the ancilla. It was
not a Fibonacci Turaev–Viro code or the proposed two-dimensional colour-centre network.
The experiment also reported that its logical fidelities—the measures of agreement
with intended logical states—did not yet outperform the constituent physical qubits.
These results demonstrate related diamond control and error-correction ingredients,
not Fibonacci anyon operations or the architecture described here.

The irrational-rotation and tiling arguments are mathematical constructions. The
proposed diamond device remains hypothetical; the cited experiment supports narrower
claims about a logical-qubit demonstration, not a completed diamond Fibonacci code.

## Further reading

- Marcelo Amaral, David Chester, Fang Fang, and Klee Irwin, [“Exploiting Anyonic Behavior of Quasicrystals for Topological Quantum Computing”](https://www.mdpi.com/2073-8994/14/9/1780) (2022). This is the proposal behind the mathematical tiling/anyon-space correspondence; it is not an experimental report of a diamond Fibonacci code.
- [“Fault-tolerant operation of a logical qubit in a diamond quantum processor”](https://www.nature.com/articles/s41586-022-04819-6) (2022). This reports the diamond logical-qubit and stabilizer-code experiment, which is distinct from the hypothetical Fibonacci Turaev–Viro architecture.
