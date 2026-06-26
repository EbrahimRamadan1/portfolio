# Frontend Change

## Scope
Component changes, page additions, UI updates within `src/components/`, `src/app/` (pages), and `src/features/`.

## Workflow
1. Read `docs/ai/context.md` and `docs/ai/coding-standards.md`
2. Identify where the new component/page belongs (ui/, shared/, or features/)
3. Check existing patterns — e.g. form components use `FormWrapper` from `src/components/shared/FormWrapper`
4. Implement — Server Component by default, add `"use client"` only when needed
5. Run `npm run typecheck` and `npm run build`

## Key Files
- `src/app/layout.tsx` — root layout with font, theme, providers
- `src/app/providers.tsx` — QueryClientProvider with devtools dynamic import
- `src/components/shared/FormWrapper.tsx` — typed form wrapper with Zod + react-hook-form
- `src/components/shared/PageTransition.tsx` — motion animation wrapper
- `src/lib/animations.ts` — reusable animation variants
