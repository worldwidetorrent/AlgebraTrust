# Architecture Decisions

## Milestone 0

- Keep the frontend and backend separate, with the frontend reading a single demo payload.
- Keep all solver logic hardcoded until the shell, API contract, and trust surfaces are stable.
- Avoid introducing auth, persistence, or model integrations before the basic loop is proven.
