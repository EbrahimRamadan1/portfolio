# Code Review Checklist

## Architecture Review
- [ ] Does the change introduce a new route without `loading.tsx` or `error.tsx`?
- [ ] Does the change import `axios` directly from a component instead of going through `src/services/`?
- [ ] Does the change add a new dependency without review?
- [ ] Does the change modify the provider hierarchy without justification?
- [ ] Is there a `"use client"` that could be removed (component doesn't use hooks/browser APIs)?

## Hydration Review
- [ ] Does the component use `useEffect`/`useState` where a Server Component would suffice?
- [ ] Does the component use browser APIs without checking `typeof window !== 'undefined'`?
- [ ] Does the component wrap dynamic content in a client boundary unnecessarily?

## Security Review
- [ ] Does the change expose secrets or tokens to the client?
- [ ] Do new API routes validate input with Zod before processing?
- [ ] Do new API routes use `handleApiError` for consistent error responses?
- [ ] Does the change modify security headers or CSP?
- [ ] Does the change introduce new cookie or localStorage usage?
- [ ] Does the change touch auth logic (middleware, auth.ts, login/refresh routes)?

## SEO Review
- [ ] Do new pages export `metadata`?
- [ ] Do dynamic routes use `generateMetadata` with OG/Twitter card fields?
- [ ] Are `robots.ts` and `sitemap.ts` updated for new routes?
