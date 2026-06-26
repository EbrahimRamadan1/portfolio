# AI Coding Agent Instructions

## Project Overview
Production-grade Next.js 16 template with Material UI 9, Zustand 5, TanStack Query 5, React Hook Form + Zod 4, Motion (not framer-motion), and Axios. Server-first architecture with httpOnly cookie auth and minimal client components.

## Task Classification

| Classification | Route to | Description |
|---------------|----------|-------------|
| `frontend-change` | `skills/frontend-change.md` | Component changes, page additions, UI updates |
| `backend-change` | `skills/backend-change.md` | Route handler changes, middleware, services |
| `bug-fix` | `skills/bug-fix.md` | Bug reproduction, root cause analysis, fix strategy |
| `release-check` | `skills/release-check.md` | Version bump, build check, security audit |
| `seo-update` | `skills/seo-update.md` | Metadata API, OG images, sitemap, robots |
| `auth-change` | `skills/auth-change.md` | Auth flow, middleware, token lifecycle, httpOnly cookies |
| `performance-optimization` | `skills/performance-optimization.md` | Bundle analysis, lazy loading, SSR minimization |
| `ui-refactor` | `skills/ui-refactor.md` | MUI theme changes, component abstraction, layout |

## Documentation Routing Logic

1. ALWAYS read `docs/ai/context.md` first for project context
2. Read `docs/ai/architecture.md` for architecture decisions
3. Read `docs/ai/coding-standards.md` for code style rules
4. Read relevant skill instructions before making changes
5. Read `docs/ai/testing-policy.md` before writing tests
6. Read `docs/ai/security-policy.md` for security-sensitive changes
7. Read `docs/ai/release-policy.md` before creating releases
8. Read `docs/ai/code-review.md` before submitting PRs

## Architecture-Change Detection

Flag as architecture change if ANY of these apply:
- New file in `src/app/` (new route)
- Changes to `src/components/layout/`
- Changes to `src/store/` (state management pattern change)
- Changes to `src/services/` (API layer change)
- New external dependency added
- Changes to `next.config.ts`
- Changes to data fetching patterns
- Changes to provider hierarchy

If architecture change detected: STOP. Document the change. Require human approval before proceeding.

## Security-Change Detection

Flag as security change if ANY of these apply:
- Changes to `src/services/api-client.ts` (interceptors, token handling)
- Changes to `src/lib/auth.ts` or `middleware.ts` (authentication/authorization)
- Changes to `src/app/api/` route handlers
- Changes to middleware
- Changes to CSP headers or security headers
- New cookie or localStorage usage
- Changes to input validation schemas
- Changes to user data handling

If security change detected: STOP. Document potential security implications. Require human approval before proceeding.

## Approval Checkpoints

1. **Before reading any files**: Confirm task classification with human
2. **After reading skill instructions**: Confirm understanding of approach
3. **Before writing code**: For medium+ complexity changes
4. **After first implementation**: For architecture or security changes
5. **If error encountered**: Report error and proposed fix

## Execution Rules

1. Read relevant skill instructions before taking action
2. Read all files you plan to modify before editing
3. Run `npm run typecheck` after any TypeScript changes
4. Run `npm run lint` after any code changes
5. Run `npm run build` before considering work complete
6. Never commit without explicit user request
7. Never add placeholder or TODO comments

## Dependency Update Rules
- Use latest stable versions (non-beta, non-canary)
- Prefer caret (^) semver ranges
- Ensure all packages are mutually compatible
- No experimental or alpha releases
- Never bump a major version of next/react/mui without a dedicated review pass
- Pin exact versions for zod, motion, tanstack-query, and axios (these have had breaking changes or supply-chain incidents)
