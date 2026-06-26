# Architecture

## Folder Responsibilities

| Directory | Purpose | Key Files |
|-----------|---------|-----------|
| `src/app/` | Next.js App Router: pages, layouts, loading/error boundaries, API route handlers | `layout.tsx`, `providers.tsx`, `theme-registry.tsx` |
| `src/app/api/` | Route handlers (POST/GET) with Zod validation | `auth/login`, `auth/refresh`, `users/[id]`, `contact` |
| `src/app/(routes)/` | Route-group pages (dashboard, login, register) | `dashboard/`, `dashboard/settings/` |
| `src/components/shared/` | Reusable app-specific components | `FormWrapper`, `FormField`, `ContactForm`, `PageTransition` |
| `src/components/ui/` | Generic UI primitives (not yet populated) | — |
| `src/hooks/` | TanStack Query hooks + generic hooks | `useUsers`, `useDebounce`, `useMediaQuery` |
| `src/services/` | Axios-based API service layer | `userService`, `authService` |
| `src/store/` | Zustand slices (state + setters only) | `ui-store` (sidebar, theme, mobile menu) |
| `src/lib/` | Utilities, constants, auth helpers, axios client | `axios.ts`, `auth.ts`, `api-helpers.ts`, `constants.ts`, `animations.ts` |
| `src/schemas/` | Zod v4 validation schemas | `contact.schema` |
| `src/theme/` | MUI theme configuration | `index.ts` (createTheme) |
| `src/types/` | Shared TypeScript type definitions | `common.ts`, `api.ts` |

## Data Flow
```
Component → Hook (TanStack Query) → Service (typed axios wrapper) → API Route Handler → Response
                                          ↓
                                    Axios interceptor
                                    (token attach, error normalize, refresh)
```

## Client/Server Boundary
- Server Components: `layout.tsx`, `page.tsx`, `loading.tsx`, `not-found.tsx`, `robots.ts`, `sitemap.ts`, all route pages
- Client Components: `error.tsx`, `providers.tsx`, `theme-registry.tsx`, `FormWrapper`, `FormField`, `ContactForm`, `PageTransition`
