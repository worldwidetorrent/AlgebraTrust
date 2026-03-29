# AGENTS.md

## Purpose

This file defines the operating rules for AI agents and coding assistants
working in this repository.

Its job is to prevent scope drift, architectural drift, and premature
complexity.

When working in this repo:

- preserve the current milestone focus
- respect the frozen product direction
- prefer small, verifiable steps
- do not widen scope without explicit instruction
- do not replace locked decisions with speculative alternatives

This repository is allowed to grow over time, but changes must be deliberate
and staged.

---

## Project Summary

**AlgebraTrust** is a visual, trust-checked college algebra workspace.

### Product vision

AlgebraTrust is intended to become a **semester-long companion for college
algebra**, aligned to the structure of a real course textbook.

### Current implementation focus

The current implementation focus is intentionally narrow:

- the **quadratic lane**
- a structured two-panel workspace
- deterministic math as the source of truth
- visible trust checks
- a no-paper workflow

### First deep support lane

The first fully implemented instructional lane is:

- quadratic equations
- quadratic functions
- factoring support where needed
- graph-based understanding of parabolas

This lane comes first because it provides:

- strong student value
- strong visual teaching moments
- deterministic validation opportunities
- reusable backend foundations
- strong demo quality

---

## Core Product Principles

These principles are locked unless explicitly revised.

### 1. Visual-first learning

Graphs are a primary teaching surface, not a side feature.

### 2. Trust-checked output

The system should not merely answer. It should show which checks passed.

### 3. Structured guidance

The experience should feel like a guided workspace, not an open-ended chatbot
transcript.

### 4. No-paper workflow

Students should be able to type, explore, and validate math digitally in one
place.

### 5. Build depth before breadth

A small number of topics should work well before the curriculum expands.

---

## Vision vs Current Build Scope

This distinction is critical.

### Vision scope

Semester-long college algebra support.

### Architecture scope

The system should be designed so more instructional lanes can be added later.

### Current implementation scope

Only the first instructional lane should be deeply implemented now.

Do not confuse semester-long vision with semester-wide implementation.

---

## Current Milestone Lock

## Current milestone

**Milestone 0 — Bootstrap and integration only**

The goal of Milestone 0 is to prove that the full pipe works before real
feature depth begins.

### Milestone 0 success criteria

- frontend boots
- backend boots
- `/health` works
- `/demo/quadratic` works
- frontend successfully fetches dummy API data
- the two-panel shell renders the dummy response
- trust checks and key math facts render
- backend tests pass
- CORS works for local development

### Milestone 0 is NOT for:

- real symbolic solving
- real graphing
- LLM integration
- auth
- database
- curriculum expansion
- UI experimentation beyond the basic shell

If a change does not help Milestone 0 integration, it is probably out of scope.

---

## Scope Guardrails

## In scope right now

- quadratic equations
- quadratic functions
- factoring support related to quadratics
- solving flow for common quadratic cases
- visible trust checks
- two-panel workspace UI
- dummy bootstrap payload
- typed frontend/backend interface
- backend route tests

## Out of scope right now

These are intentionally deferred:

- full-semester deep coverage
- handwriting recognition
- auth/login
- database-backed history
- analytics dashboards
- open-ended chatbot behavior
- multi-agent UI theatrics
- BYOK/provider management
- 3D visualizations
- broad topic support beyond the first instructional lane
- graph library selection before the graph spike
- real solve logic during bootstrap
- LLM SDK during bootstrap

## Expansion rule

New ideas may be added only if they do one of the following:

- strengthen the current quadratic lane
- improve the shared workspace foundation
- clearly prepare the next curriculum lane
- improve trust, clarity, or usability without widening scope too early

Delay ideas that:

- introduce major complexity without helping the first lane
- expand curriculum breadth before the first lane is strong
- turn the product into a generic chatbot
- add infrastructure before it is justified

---

## Locked Product Shape

The current product shape is locked for the first build.

### Current instructional lane

- quadratic equations
- quadratic functions
- factoring support where needed

### Core user interactions

- **Solve with me** — hero flow
- **Visualize this** — supporting interaction
- **Check my work** — supporting interaction

### UI structure

- **two-panel layout**
- left panel = structured guided flow
- right panel = graph area, trust indicators, and key math facts

### UX rule

The left panel is **not** a generic chat transcript.

It should feel like:

- question
- explanation
- next step
- action

not like an unrestricted conversation log.

---

## Locked Architecture Decisions

These are frozen unless explicitly changed.

### Frontend

- Next.js
- TypeScript

### Backend

- FastAPI
- Python

### Math truth model

The deterministic math layer is the source of mathematical truth.

### Language model role

The language layer may help with:

- interpreting student questions
- explanation style
- tutoring flow
- personalization

The language layer is **not** the source of mathematical truth.

### Bootstrap strategy

Use a hardcoded demo payload first.
Do not start with real logic.

### Graphing strategy

Graph library choice is deferred until the graph spike milestone.

### Versioning strategy

Do not hard-pin speculative future dependency versions in freeze docs.
Scaffold with current versions at setup time.

---

## Repository Map

The repo is a monorepo with intentionally clear boundaries.

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

### Responsibility map

#### `apps/web`

Owns:

- workspace shell
- page structure
- frontend fetch helpers
- frontend types
- UI rendering
- visual state
- interaction flow

Does not own:

- mathematical truth
- symbolic solving
- backend validation logic

#### `services/api`

Owns:

- API routes
- backend schemas
- trust check assembly
- deterministic math logic
- later language-layer orchestration

Does not own:

- major UI logic
- visual presentation concerns

#### `packages/shared`

Owns:

- curriculum snippets
- prompt fragments
- example payloads
- cross-cutting shared content

Does not own:

- backend-specific runtime code
- frontend-specific rendering code

#### `docs/architecture`

Owns:

- decisions
- design notes
- frozen references
- scope documents
- contracts

---

## File Placement Rules

Keep files in the correct area. Do not scatter logic.

### Frontend files belong in:

- `apps/web/app/`
- `apps/web/components/`
- `apps/web/lib/`
- `apps/web/types/`

### Backend files belong in:

- `services/api/app/routes/`
- `services/api/app/schemas/`
- `services/api/app/services/`
- `services/api/app/trust/`
- later: `services/api/app/math_core/`

### Shared non-runtime content belongs in:

- `packages/shared/curriculum/`
- `packages/shared/prompts/`
- `packages/shared/examples/`

### Architecture and scope notes belong in:

- `docs/architecture/`
- `docs/scope/`
- `docs/contracts/`
- `docs/curriculum/`

Do not place architecture decisions in code comments when they belong in docs.

---

## Milestone 0 Required Files

These are the first important files for bootstrap.

### Backend

- `services/api/app/main.py`
- `services/api/app/routes/demo.py`
- `services/api/tests/test_health.py`
- `services/api/tests/test_demo_quadratic.py`

### Frontend

- `apps/web/lib/api.ts`
- `apps/web/app/page.tsx`

### Optional early structure files

- `apps/web/components/shell/WorkspaceShell.tsx`
- `apps/web/components/shell/LeftPanel.tsx`
- `apps/web/components/shell/RightPanel.tsx`
- `apps/web/components/trust/TrustChecks.tsx`

---

## Bootstrap API Contract

Until explicitly changed, the bootstrap contract is frozen.

### Live bootstrap API contract

Current live bootstrap route:

- `GET /demo/quadratic`

Current live bootstrap payload:

- keep aligned with the checked-in backend implementation and tests

Do not upgrade the bootstrap contract implicitly.
Any move to a richer contract must be done deliberately across:

- backend route
- schemas
- frontend fetch helper
- frontend render
- backend tests
- `docs/contracts/bootstrap_api.md`

### `GET /health`

Returns:

```json
{ "status": "ok" }
```

### `GET /demo/quadratic`

Returns the current live bootstrap payload shaped like:

```json
{
  "prompt": "Solve x^2 - 5x + 6 = 0.",
  "equation": "x^2 - 5x + 6 = 0",
  "factored_form": "(x - 2)(x - 3) = 0",
  "roots": [2, 3],
  "trust_checks": [
    {
      "id": "factorization",
      "label": "Factorization matches the polynomial",
      "status": "pass",
      "detail": "Expanding (x - 2)(x - 3) reproduces x^2 - 5x + 6."
    },
    {
      "id": "substitution",
      "label": "Roots satisfy the original equation",
      "status": "pass",
      "detail": "Substituting x = 2 and x = 3 makes the left side equal 0."
    },
    {
      "id": "solver",
      "label": "Symbolic solve engine",
      "status": "pending",
      "detail": "Real solve logic is intentionally out of scope for Milestone 0."
    }
  ]
}
```

### Planned richer bootstrap contract

The richer quadratic payload is a planned upgrade, not current live truth.
Document planned upgrades in `docs/contracts/bootstrap_api.md` and only promote
them when backend, frontend, tests, and docs are updated together.

### Trust check vocabulary for the current live bootstrap payload

Use these names:

- `factorization`
- `substitution`
- `solver`

Do not invent new trust labels during bootstrap unless explicitly asked.

---

## Math Input Guardrails

These input conventions should remain stable as the repo grows.

### Acceptable early forms

- `x^2 - 5x + 6 = 0`
- `(x-2)(x-3)`
- `y = x^2 - 4x + 3`
- `2x`
- `x^2`

### Early parsing rule

Prefer a small set of well-supported input forms over a broad but fragile
parser.

Do not promise broad natural math parsing until the parser is intentionally
expanded.

---

## Coding Rules

## General rules

- prefer simple, readable code over clever abstractions
- prefer small patches over large speculative rewrites
- do not introduce infrastructure early
- keep naming explicit
- do not widen scope through "minor" helpers that introduce major future
  obligations
- keep API shapes typed and stable
- keep code aligned with the current milestone

## Frontend rules

- TypeScript only
- keep the shell simple and structured
- no generic chatbot UI patterns
- no major state library unless clearly justified
- no graph library during bootstrap
- prefer typed API helpers
- render loading, error, and success states clearly

## Backend rules

- Python 3.11+
- FastAPI route schemas should be explicit
- prefer pure functions for math logic where possible
- separate routes from services
- trust assembly should not be mixed randomly into route code
- avoid premature generic "engine" abstractions during bootstrap

## Shared content rules

- curriculum content should stay declarative
- prompts should live in shared prompt files, not inline everywhere
- examples should be clearly named and topic-scoped

---

## Testing Rules

Testing is required for bootstrap backend routes.

### Required in Milestone 0

- `/health` test
- `/demo/quadratic` test

### Testing expectations

- test the response status
- test the response shape
- test key fields in the payload
- keep tests small and direct

### Not required yet

- frontend E2E testing
- visual regression tests
- deep symbolic correctness tests
- LLM evals

---

## Dependency Rules

### During bootstrap

Do not add:

- database packages
- auth libraries
- LLM SDKs
- graphing libraries
- heavy UI frameworks
- speculative infra tooling

### Allowed bootstrap dependencies

Only what is needed for:

- Next.js frontend
- FastAPI backend
- basic testing
- config handling
- typed communication

---

## UX Guardrails

These are important and easy to break.

### The app should feel:

- calm
- structured
- clear
- visual
- supportive
- not overwhelming

### The app should not feel:

- like a generic chatbot
- like a developer dashboard
- like a dense equation editor
- like a feature playground

### Bootstrap UI standard

The first UI only needs to prove:

- the shell works
- the two panels work
- the API round trip works
- trust checks render
- math facts render

Do not overdesign bootstrap.

---

## Curriculum Guardrails

### Semester-long vision

Yes.

### Current deep support

Only the quadratic lane.

### Current lane includes

- quadratic equations
- quadratic functions
- factoring support where needed

### Current lane does not include

- full Chapter 1
- full Chapter 2
- full Chapter 3
- systems
- exponentials/logs
- matrices
- conics broadly
- sequences/probability

Later units are allowed later.
They are not implementation obligations now.

---

## Change Control Rules

Before making a change, ask:

### 1. Does this help the current milestone?

If no, delay it.

### 2. Does this strengthen the first lane?

If no, delay it.

### 3. Does this add infrastructure before it is justified?

If yes, delay it.

### 4. Does this make the app more like a generic chatbot?

If yes, reject it unless explicitly requested.

### 5. Does this create downstream maintenance burden now?

If yes, prefer the simpler option.

---

## When Agents Should Ask for Clarification

Ask before proceeding only when:

- a requested change directly conflicts with a locked decision
- a requested change widens scope significantly
- a requested change forces a new architecture choice
- a requested change changes the meaning of the current milestone

Do not ask for clarification on small implementation details that can be
resolved reasonably.

---

## Definition of Done for Bootstrap

Bootstrap is complete when:

- the repo boots locally
- frontend and backend both run
- `/health` works
- `/demo/quadratic` works
- frontend fetches the dummy payload
- the two-panel shell renders facts and trust checks
- backend tests pass
- no forbidden bootstrap infrastructure has been added

---

## Default Decision Bias

When there is tension between:

- expanding the idea
- finishing the first lane cleanly

choose:

**finish the first lane cleanly**

When there is tension between:

- a more general architecture
- a simpler architecture that cleanly supports the current milestone

choose:

**the simpler architecture**

---

## Summary

This repo has a broad educational vision and a narrow implementation focus.

That is intentional.

Agents working here should preserve that balance:

- keep the semester-long vision intact
- keep the current implementation narrow
- keep the codebase clean
- resist speculative expansion
- ship the first instructional lane before widening the product
