---
title: Fibonacci quasicrystals
date: 2026-08-03
summary: A mathematical route into Fibonacci tilings: irrational rotations, a dense orbit on a torus, and a clearly hypothetical diamond-based quantum architecture.
---

A Fibonacci quasicrystal is a one-dimensional pattern with long-range order but no
repeating unit cell. It is not random: every local choice follows a precise global
rule. It is not periodic either: no finite block, slid along the line, reproduces
the whole pattern.

The familiar construction is almost absurdly small:

```text
L → LS
S → L
```

Start with `L` and apply the substitution everywhere at once:

```text
L
LS
LSL
LSLLS
LSLLSLSL
…
```

Read `L` and `S` as long and short tiles. In the geometric version, give the short
tile length 1 and the long tile length the golden ratio, `φ = (1 + √5) / 2 ≈ 1.618`.
As the sequence grows, the ratio of long tiles to short tiles settles on that same
number.

## The small rule and the large order

There is no dice roll hiding in the substitution. Order shows up at every scale:
recognisable patches recur, the long/short frequencies settle, and the pattern has
sharp diffraction peaks. Yet it has no translation period.

That middle ground is the point. A conventional crystal repeats. A random sequence
has no exact organizing rule. The Fibonacci chain keeps coherence as it grows while
denying us the one free gift of a periodic crystal: a unit cell you can stamp
forever.

## An irrational step around a circle

There is a simple picture behind that refusal to repeat. Walk the integer orbit

```text
e^(2πinα),    n ∈ ℤ
```

on the unit circle.

If `α` is rational, you hit only finitely many points and then loop. If `α` is
irrational, the orbit is **dense**: it comes arbitrarily close to every point on the
circle, but it never lands exactly on a previous point. Equivalently, the sequence

```text
0, α, 2α, 3α, …  (mod 1)
```

eventually closes for rational `α`, and never closes for irrational `α`.

For Fibonacci, take

```text
α = φ = (1 + √5) / 2 ≈ 1.618.
```

Only the fractional part matters in a rotation modulo 1, so the same walk is

```text
α = φ − 1 = 1 / φ ≈ 0.618.
```

Both are irrational. They differ by the integer 1, so after “mod 1” they describe
the same rotation.

## The rule that turns the rotation into tiles

Here is the missing concrete step. Set `β = 1 / φ² ≈ 0.382` and start at `0` on a
circle of circumference 1. Repeatedly advance by `β`, reducing modulo 1. Mark one
point on the circle. On a step that crosses the mark, write `S`; otherwise write
`L`.

Without a picture, the same rule is

```text
aₙ = floor((n + 1)β) − floor(nβ),    n = 1, 2, 3, …

aₙ = 0  →  L
aₙ = 1  →  S
```

The subtraction asks a yes/no question: did the `n`th irrational step pass an
integer? Equivalently, did the walk cross the mark? The output begins

```text
L S L L S L S L L S …
```

which is the Fibonacci word above. An irrational step never returns to its starting
phase, so the rule cannot settle into a repeating tile block. But it is not random:
every tile is decided by the same rigid rotation.

Treat the symbols as intervals of two lengths, or put a point at every tile boundary,
and you already have a one-dimensional quasicrystal model. A quasiperiodic function
can represent density, scattering strength, or occupancy on those points; the
quasicrystal is the arrangement the rule specifies, not merely the graph of the
function.

## Why the torus is the better picture

For a continuous real variable `x`, the single phase

```text
e^(2πiαx)
```

just covers the circle for any non-zero `α`. To see quasiperiodicity, keep two
circular phases at once:

```text
x ↦ (e^(2πix), e^(2πiαx)).
```

That path lives on a two-dimensional torus — think of a doughnut surface, two
independent angles. If `α` is rational, the path eventually closes into a loop. If
`α` is irrational, it is dense on the torus and never closes.

Now take any function that is periodic on that torus and restrict it to the path.
What you observe in one dimension is a **quasiperiodic function**: built from
periodic ingredients, yet with no period in the signal itself.

That is the clean bridge to quasicrystals. The order is real — it comes from a
periodic object in a higher-dimensional space — but the one-dimensional slice does
not repeat, because its irrational orbit cannot return to its starting phase.

## From Fibonacci counting to quantum information

The word *Fibonacci* also shows up in the theory of non-Abelian anyons. In the
Fibonacci model, the nontrivial charge `τ` obeys the fusion rule

```text
τ × τ = 1 + τ.
```

The plus sign is not ordinary addition. It lists the two allowed fusion outcomes.
As you add more anyons, the number of compatible fusion histories grows as Fibonacci
numbers: `1, 2, 3, 5, 8, …`. A constrained long/short tiling history has the same
kind of counting structure, which is why people compare the two spaces.

With three `τ` anyons whose total charge is `τ`, the first pair may fuse through one
of two intermediate channels. Those two paths form a two-dimensional space and can
serve as a logical qubit. Braiding non-Abelian anyons acts on such fusion-path
states; the order of the braids matters.

This is a mathematical correspondence and a research proposal. It is not evidence
that a Fibonacci tiling by itself is a fault-tolerant quantum computer.

## A hypothetical diamond architecture

One possible hardware story uses diamond colour centres as addressable spin qubits
in a two-dimensional network. In a **hypothetical** Fibonacci string-net architecture,
selected spins would label the edges of a trivalent graph by `1` or `τ`. Local
measurements would test fusion constraints at vertices and loop constraints around
faces; logical information would live in global patterns across the network.

Diamond platforms have demonstrated useful ingredients, including logical encoding
and stabilizer measurements. A full Fibonacci Turaev–Viro code in diamond has not.
It remains a proposed architecture that would combine diamond spin control with
non-Abelian topological-code operations — not a present device.

Keep the separation sharp. The irrational-orbit story and the Fibonacci tiling are
clean mathematics. The diamond device is an interesting, explicitly hypothetical
route for turning related quantum ideas into hardware.

## Further reading

- Marcelo Amaral, David Chester, Fang Fang, and Klee Irwin, [“Exploiting Anyonic Behavior of Quasicrystals for Topological Quantum Computing”](https://www.mdpi.com/2073-8994/14/9/1780) (2022).
- [“Fault-tolerant operation of a logical qubit in a diamond quantum processor”](https://www.nature.com/articles/s41586-022-04819-6) (2022).
