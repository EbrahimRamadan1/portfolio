# Release Policy

## Release Checklist
1. Run `npm run typecheck` — must pass with zero errors
2. Run `npm run build` — must produce optimized production build
3. Run `npm run lint` — must pass with zero warnings
4. Verify all API routes respond correctly
5. Verify middleware guards protected routes
6. Verify static pages prerender correctly
7. Check bundle size for unexpected bloat

## Version Pinning Notes
This template pins exact versions for the following packages due to recent breaking changes or supply-chain incidents:

| Package | Pinned Version | Reason |
|---------|---------------|--------|
| `zod` | 4.4.3 | Major API change from v3 (`error` vs `message` param) |
| `motion` | 12.42.0 | Renamed from `framer-motion`; old package no longer actively maintained |
| `@tanstack/react-query` | 5.101.1 | Supply-chain compromise hit 42 TanStack packages in May 2026 — this version confirmed clean |
| `axios` | 1.18.1 | Two malicious versions published in March 2026 via poisoned transitive dependency |

Never bump major versions of `next`, `react`, `@mui/material`, or `zod` without a dedicated review pass.

## Dependency Update Rules
- For minor/patch updates: use `npm update <package>` and run full build/test suite
- For major updates: create a separate branch, document breaking changes, get approval
- Update this version table and `docs/ai/release-policy.md` when versions change
