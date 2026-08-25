---
title: Hyper-connections and residual mixing
date: 2026-08-25
summary: Lecture notes on several leftover copies of a hidden state, why unconstrained remixing explodes, and the constraints the recent papers actually prove.
---

A deep network that keeps one leftover copy of its hidden state is already a residual net. Several leftover copies, mixed by a learned router, is the family of ideas behind Hyper-Connections, mHC, mHC-lite, KromHC, and go-mHC.

I wrote that family out as lecture notes, from a three-word spreadsheet to the Cayley construction:

[Hyper-Connections to go-mHC (PDF)](/notes/assets/hyper-connections-to-go-mhc.pdf)

The notes are for someone who can multiply a small matrix and read a little Julia. They do not assume residual networks, stochastic matrices, or manifolds. A paper-reported accuracy bump stays a paper-reported accuracy bump.

The useful question, once the mixer exists, is not “does it look legal.” It is which constraint you actually imposed, what that constraint proves, and what it does not.
