# Security Policy

## Authentication
- Access token stored in httpOnly cookie (`access_token`), never accessible to JavaScript
- Refresh token in separate httpOnly cookie (`refresh_token`) with 7-day expiry
- Token refresh handled server-side via `POST /api/auth/refresh`
- On refresh failure: cookies cleared, client redirected to `/login`
- Mock auth in `src/lib/auth.ts` — replace with real provider for production

## Middleware Protection
- `middleware.ts` guards all `/dashboard/*` routes
- Missing access token → redirect to `/login` with return URL
- Expired session with valid refresh token → redirect to login (axios interceptor handles client-side refresh)
- Admin routes (`/dashboard/admin/*`) require `role: "admin"` in token payload

## HTTP Security Headers
- `X-Frame-Options: SAMEORIGIN` — prevents clickjacking
- `X-Content-Type-Options: nosniff` — prevents MIME sniffing
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` — restricts camera, microphone, geolocation
- CSP set in middleware (`default-src 'self'`, with necessary exceptions)

## Input Validation
- All API route handlers validate input with Zod schemas at the boundary
- Reject invalid payloads with 400 status and structured error response
- Form validation uses the same Zod schemas on client (react-hook-form) and server (route handlers)

## API Route Protection
- API routes use centralized error handling via `handleApiError`
- No stack traces leaked in error responses
- Consistent JSON error shape: `{ message, status, code?, validationErrors? }`
