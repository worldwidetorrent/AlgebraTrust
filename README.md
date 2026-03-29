# AlgebraTrust

AlgebraTrust is a visual, trust-checked college algebra workspace designed to
help students ask questions privately, understand concepts through interactive
visuals, and work through problems without needing paper.

## Vision

AlgebraTrust is intended to become a semester-long companion for college
algebra, aligned to the structure of a real course textbook.

The long-term goal is to support students across the course with:

- natural-language question input
- guided problem solving
- interactive visuals
- step validation
- trust checks on mathematical correctness
- a smooth no-paper workspace

## Current Build Focus

The product vision is semester-long.

The current implementation focus is intentionally narrow: the quadratic lane.

### First deep support lane

- quadratic equations
- quadratic functions
- factoring support where needed
- graph-based understanding of parabolas

This lane comes first because it offers the strongest combination of:

- clear student value
- strong visual learning moments
- deterministic validation
- reusable backend foundations
- strong demo quality

## Why This Project Exists

Students often do not ask questions in class because they feel embarrassed.

Many existing digital math tools also create extra friction:

- awkward math input
- too many disconnected tools
- weak visual explanations
- poor support for step-by-step reasoning
- reliance on paper even when paper is inconvenient

AlgebraTrust is designed to reduce that friction and create a smoother path
from confusion to understanding.

## Product Principles

### Visual-first learning

Graphs are not a side feature. They are a primary teaching surface.

### Trust-checked output

The system should not merely answer. It should show which checks passed.

### Structured guidance

The experience should feel like a guided workspace, not an open-ended chatbot
transcript.

### No-paper workflow

Students should be able to type, explore, and validate math digitally in one
place.

### Build depth before breadth

A small number of topics should work well before the curriculum expands.

## What Is In Scope Right Now

### Instructional scope

- quadratic equations
- quadratic functions
- factoring support related to quadratics
- solving flow for common quadratic cases
- interactive graphing for parabolas
- visible trust checks
- two-panel workspace UI

### Core interactions

- **Solve with me**
- **Visualize this**
- **Check my work**

### Graph features in the first version

- vertex
- roots
- axis of symmetry
- opening direction
- coefficient sliders

## What Is Out of Scope Right Now

These are intentionally deferred:

- full-semester deep coverage in v1
- handwriting recognition
- auth/login
- database-backed history
- analytics dashboards
- open-ended chatbot behavior
- multi-agent UI theatrics
- BYOK/provider management
- 3D visualizations
- broad topic support beyond the first instructional lane

## Scope Lock

The current implementation should stay focused on one strong lane first.

That means:

- do not widen the curriculum without a clear milestone decision
- do not add major infrastructure early unless it directly supports the first
  lane
- do not dilute the main flow with features that are not needed for the first
  working version

The first goal is not to cover the whole textbook.

The first goal is to build one clean, trustworthy, visually strong
instructional lane that proves the product works.

## Expansion Policy

New ideas are welcome, but they should be evaluated against a simple rule.

### Add an idea now only if it:

- strengthens the current quadratic lane
- improves the shared workspace foundation
- clearly prepares the next curriculum lane
- improves trust, clarity, or usability without widening scope too early

### Delay an idea if it:

- introduces major complexity without helping the first lane
- expands curriculum breadth before the first lane is strong
- turns the app into a generic chatbot
- adds infrastructure before it is justified

## Planned Growth Path

AlgebraTrust is designed to expand after the first lane is solid.

### Phase 1

Deep support for:

- quadratic equations
- quadratic functions
- factoring support
- graph interpretation

### Phase 2

Expand into:

- linear equations
- graph basics
- function foundations
- transformations

### Phase 3

Expand into:

- systems
- inequalities
- exponential and logarithmic topics
- additional course units as justified

## Architecture Overview

### Frontend

- Next.js
- TypeScript
- structured two-panel workspace

### Backend

- FastAPI
- Python
- deterministic math engine

### Math engine

Handles:

- solving
- validation
- graph feature extraction
- equation consistency checks

### Language layer

Used for:

- interpreting student questions
- explanation style
- tutoring flow
- interest-based framing

The language layer is **not** the source of mathematical truth.

## Repository Structure

```text
algebratrust/
  apps/
    web/
  services/
    api/
  packages/
    shared/
  docs/
    architecture/
```

## Milestone Strategy

### Milestone 0

Bootstrap the full pipe:

- frontend boots
- backend boots
- dummy API response renders
- CORS works
- baseline tests pass

### After bootstrap

- deterministic quadratic math core
- graph spike
- hero flow
- check-my-work flow
- language layer
- polish

## Repository Status

The repository is currently being built around the Milestone 0 bootstrap slice
and the first instructional lane.

Target bootstrap deliverables:

- Next.js frontend shell in `apps/web`
- FastAPI backend in `services/api`
- `/health` route
- hardcoded `/demo/quadratic` payload
- two-panel frontend render of the demo payload
- backend tests for health and demo contract

## Prerequisites

Recommended local environment:

- Node.js
- pnpm
- Python 3.11+
- `uv`
- WSL on Windows is recommended for the cleanest development flow

## Local Development

### Web

```bash
corepack enable
corepack pnpm install
corepack pnpm --dir apps/web dev
```

### API

```bash
cd services/api
uv venv .venv
source .venv/bin/activate
uv pip install -e ".[dev]"
uvicorn app.main:app --reload --port 8000
```

### Tests

```bash
cd services/api
source .venv/bin/activate
uv run pytest
```

## Development Rule

When there is tension between expanding the idea and finishing the first lane
cleanly, choose:

**finish the first lane cleanly**

## Current North Star

AlgebraTrust should become a semester-long college algebra workspace.

But the current north star is narrower and more actionable:

> build a visually strong, trust-checked quadratic learning workspace that
> proves the larger product direction

## Status

This repo is being built around the first instructional lane and the shared
workspace foundations needed to grow into a broader semester-long product.
