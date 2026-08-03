---
title: Fibonacci quasicrystals: order without a loop
date: 2026-08-03
summary: A mathematical route into Fibonacci tilings: irrational rotations, a dense orbit on a torus, and a clearly hypothetical diamond-based quantum architecture.
---

A Fibonacci quasicrystal is a one-dimensional pattern with long-range order but no repeating unit cell. It is not random: every local choice belongs to a precise global rule. It is not periodic either: no finite block can be translated along the line to reproduce the whole pattern.

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

Read `L` and `S` as long and short tiles. In the geometric version, choose the short length to be 1 and the long length to be the golden ratio, `φ = (1 + √5) / 2 ≈ 1.618`. The ratio of long to short tiles approaches the same number as the sequence grows.

## The small rule and the large order

The substitution has no hidden dice roll. Its order appears at every scale: recognisable patches recur, the long/short frequencies settle to fixed values, and the pattern has sharp diffraction peaks. Yet it has no translation period. That is the useful middle ground between a conventional crystal, which repeats, and a random sequence, which has no exact organizing rule.

The Fibonacci chain is a particularly compact model of this distinction. Its local rule creates a pattern that remains coherent as it grows, while denying us the one thing a periodic crystal supplies for free: a unit cell.

## An irrational step around a circle

There is a simple mathematical picture behind that refusal to repeat. Consider the integer orbit

```text
e^(2πinα),    n ∈ ℤ.
```

If `α ∈ ℚ`, the orbit visits only finitely many points on the circle and repeats. If `α ∉ ℚ`, it is dense: it comes arbitrarily close to every point on the circle, but it never lands exactly on a previous point. Equivalently, the sequence

```text
0, α, 2α, 3α, …  (mod 1)
```

eventually closes for rational `α`, and never closes for irrational `α`.

For the Fibonacci choice, take

```text
α = φ = (1 + √5) / 2 ≈ 1.618.
```

Only the fractional part matters in a rotation modulo 1. Therefore the same circle rotation can also be written as

```text
α = φ − 1 = 1 / φ ≈ 0.618.
```

Both are irrational. The two expressions differ by the integer 1, so they describe the same rotation after taking the result modulo 1.

## Why the torus is the better picture

For a continuous real variable `x`, the expression

```text
e^(2πiαx)
```

covers the whole circle for every non-zero `α`. To see quasiperiodicity, keep two circular phases at once:

```text
x ↦ (e^(2πix), e^(2πiαx)).
```

This path lives on a two-dimensional torus. If `α` is rational, it eventually closes into a periodic loop. If `α` is irrational, it is dense in the torus and never closes. Restrict any periodic function on the torus to that non-closing path and the result is a **quasiperiodic function**: periodic ingredients, but no period in the one-dimensional signal we observe.

That is the clean conceptual bridge to quasicrystals. The order is real—it comes from a periodic object in a higher-dimensional space—but the one-dimensional slice does not repeat because its irrational orbit cannot return to its starting phase.

## From Fibonacci counting to quantum information

The word *Fibonacci* also appears in the theory of non-Abelian anyons. In the Fibonacci model, the nontrivial charge `τ` obeys the fusion rule

```text
τ × τ = 1 + τ.
```

The plus sign does not mean ordinary addition. It lists the two allowed fusion outcomes. As more anyons are added, the number of compatible fusion histories grows as Fibonacci numbers: `1, 2, 3, 5, 8, …`. A constrained long/short tiling history has the same kind of counting structure, which motivates a mathematical comparison between the two spaces.

With three `τ` anyons whose total charge is `τ`, the first pair may fuse through one of two intermediate channels. Those two paths form a two-dimensional space and can serve as a logical qubit. Braiding non-Abelian anyons acts on such fusion-path states; the order of braids matters.

This is a mathematical correspondence and a research proposal, not evidence that a Fibonacci tiling by itself supplies a fault-tolerant quantum computer.

## A hypothetical diamond architecture

One possible hardware story uses diamond colour centres as addressable spin qubits in a two-dimensional network. In a **hypothetical** Fibonacci string-net architecture, selected spins would label the edges of a trivalent graph by `1` or `τ`. Local measurements would test fusion constraints at vertices and loop constraints around faces; logical information would be distributed across global patterns in the network.

Diamond platforms have demonstrated important ingredients, including logical encoding and stabilizer measurements. A full Fibonacci Turaev–Viro code in diamond, however, has not been demonstrated. It remains a proposed architecture combining diamond spin control with non-Abelian topological-code operations—not a present implementation.

The separation is worth keeping sharp. The irrational-orbit explanation and the Fibonacci tiling are clean mathematics. The diamond device is an interesting, explicitly hypothetical route for turning related quantum ideas into hardware.

## Further reading

- Marcelo Amaral, David Chester, Fang Fang, and Klee Irwin, [“Exploiting Anyonic Behavior of Quasicrystals for Topological Quantum Computing”](https://www.mdpi.com/2073-8994/14/9/1780) (2022).
- [“Fault-tolerant operation of a logical qubit in a diamond quantum processor”](https://www.nature.com/articles/s41586-022-04819-6) (2022).
