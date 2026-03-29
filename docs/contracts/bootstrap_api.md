# Bootstrap API Contract

This document separates the current live bootstrap API contract from planned
contract upgrades.

The repository should expose one canonical bootstrap contract at a time.
Do not silently switch between the current and planned contract shapes.

If the bootstrap contract changes, update all of the following together:

- backend route
- backend schemas
- frontend fetch helper
- frontend render path
- backend tests
- `AGENTS.md`
- this document

## Current Live Contract

### `GET /health`

Response:

```json
{ "status": "ok" }
```

### `GET /demo/quadratic`

Response:

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

Notes:

- the live method is `GET`
- the live payload shape is defined by the checked-in backend code and tests
- frontend normalization from snake_case to camelCase is an implementation
  detail, not part of the backend contract

## Planned Richer Contract

This is a possible future bootstrap contract upgrade. It is not live today.

### `POST /demo/quadratic`

Planned response shape:

```json
{
  "input": "x^2 - 5x + 6 = 0",
  "normalized": "x^2 - 5x + 6 = 0",
  "roots": [2, 3],
  "vertex": {
    "x": 2.5,
    "y": -0.25
  },
  "axis_of_symmetry": "x = 2.5",
  "opening_direction": "up",
  "trust_checks": [
    {
      "code": "intent_recognized",
      "label": "Intent recognized",
      "passed": true
    },
    {
      "code": "symbolic_solve_passed",
      "label": "Symbolic solve passed",
      "passed": true
    },
    {
      "code": "graph_matches_equation",
      "label": "Graph matches equation",
      "passed": true
    }
  ],
  "steps": [
    "Recognize the quadratic is factorable.",
    "Rewrite as (x - 2)(x - 3) = 0.",
    "Set each factor equal to zero.",
    "Solve x = 2 or x = 3."
  ]
}
```

## Rule

Only one canonical bootstrap contract should be considered active at a time.

Until an intentional contract migration happens, the current live contract is
the source of truth.
