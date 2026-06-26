# Performance Optimization

## Workflow
1. Identify performance issues via Lighthouse, Core Web Vitals, or bundle analysis
2. Check for:
   - Unnecessary `"use client"` directives — convert back to Server Components
   - Large client bundles — use `dynamic()` with `ssr: false` for heavy optional components
   - Missing `loading.tsx` or `Suspense` boundaries for slow routes
   - Inefficient re-renders — move state down, memoize where appropriate
   - Large images — ensure `next/image` is used with proper sizes/priority attributes
3. Reference `src/app/providers.tsx` for the devtools dynamic import pattern
4. Run `npm run build` and compare bundle sizes

## Key Patterns
- Devtools loaded via `dynamic(() => import('@tanstack/react-query-devtools'), { ssr: false })`
- Page transitions use `motion/react` with lightweight `fadeIn` variants
- MUI optimized via `AppRouterCacheProvider` (handles SSR CSS extraction)
