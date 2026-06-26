# Auth Change

## Workflow
1. Read `docs/ai/security-policy.md` and `docs/ai/architecture.md`
2. Identify which layer needs changes:
   - **Middleware** (`middleware.ts`): route protection, role guards, security headers
   - **Auth lib** (`src/lib/auth.ts`): mock auth helpers, token creation/decoding
   - **API routes** (`src/app/api/auth/`): login, register, refresh endpoints
   - **Service layer** (`src/services/authService.ts`): client-side auth API calls
   - **Axios interceptor** (`src/lib/axios.ts`): token attach, refresh on 401
3. Keep all auth logic server-side — no client-side secret storage
4. All tokens must be httpOnly cookies
5. Run `npm run typecheck` and `npm run build`

## Key Files
- `middleware.ts` — guards `/dashboard/*`, checks `access_token` cookie, role-based redirect
- `src/lib/auth.ts` — `findUserByEmail`, `findUserById`, `createSessionToken`, `decodeSessionToken`
- `src/app/api/auth/login/route.ts` — POST handler with Zod validation, cookie setting
- `src/app/api/auth/refresh/route.ts` — POST handler for token refresh via httpOnly cookie
- `src/lib/axios.ts` — response interceptor with 401 → refresh flow
- `src/lib/constants.ts` — `COOKIE_KEYS.access`, `COOKIE_KEYS.refresh`
