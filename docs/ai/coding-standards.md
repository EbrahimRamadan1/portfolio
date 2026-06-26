# Coding Standards

## Typing Policy
- No `any` anywhere. Use `unknown` and type narrowing when type is not known at compile time.
- Strict null checks enabled. Handle `null`/`undefined` explicitly.
- All function signatures must have explicit return types.
- Form values inferred from Zod schemas via `z.infer<typeof schema>` — never hand-duplicated.

## Component Policy
- Default to Server Components. Only add `"use client"` when:
  - Using React hooks (useState, useEffect, useRef, etc.)
  - Using browser APIs (localStorage, window, etc.)
  - Using context providers (ThemeProvider, QueryClientProvider)
  - Error boundaries (always client components)
- Keep client components as leaf nodes in the component tree when possible.

## Hooks Policy
- TanStack Query hooks go in `src/hooks/` and use the query key factory from `src/lib/queryKeys.ts`.
- Custom hooks for reusable logic (debounce, media query) go in `src/hooks/`.
- Mutations should always include optimistic updates with rollback on error.

## Service-Layer Rule
Components and hooks must NOT import axios directly. All API calls go through `src/services/` which wraps axios with typed request/response functions.

## Store Policy
Zustand stores hold state and simple setters only. Business logic (API calls, validation, transformations) belongs in hooks or services, not stores.

## Animation Policy
Use the `motion` package (not `framer-motion`). Import from `"motion/react"`. Reusable animation variants go in `src/lib/animations.ts`.
