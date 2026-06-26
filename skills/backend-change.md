# Backend Change

## Scope
Route handler changes, middleware updates, service layer changes within `src/app/api/`, `src/services/`, `middleware.ts`, and `src/lib/`.

## Workflow
1. Read `docs/ai/security-policy.md` and `docs/ai/architecture.md`
2. For new API routes: create under `src/app/api/` using Route Handlers (not Pages API)
3. Always validate input with Zod schema at the route boundary
4. Use `apiSuccess()` / `apiError()` / `handleApiError()` from `src/lib/api-helpers.ts` for responses
5. Add mock implementation in `src/lib/auth.ts` if new auth-related logic is needed
6. Run `npm run typecheck` and `npm run build`

## Key Files
- `src/app/api/` — all route handlers (examples: `auth/login`, `users/[id]`, `contact`)
- `src/services/` — typed axios wrappers (examples: `userService`, `authService`)
- `src/lib/api-helpers.ts` — `apiSuccess`, `apiError`, `handleApiError`, `ValidationError`
- `src/lib/auth.ts` — mock auth with `findUserByEmail`, `createSessionToken`, `decodeSessionToken`
- `middleware.ts` — route protection, security headers
