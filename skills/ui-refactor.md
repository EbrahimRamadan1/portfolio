# UI Refactor

## Scope
MUI theme changes, component abstraction, layout restructuring.

## Workflow
1. Read `docs/ai/coding-standards.md` and `docs/ai/architecture.md`
2. For MUI theme changes: edit `src/theme/index.ts` — only use `@mui/material/styles` for `createTheme`
3. For component abstraction: extract shared patterns to `src/components/shared/`
4. For layout changes: edit `src/app/layout.tsx` (root layout structure)
5. Run `npm run typecheck` and `npm run build`

## Key Files
- `src/theme/index.ts` — MUI v9 `createTheme` with color schemes, typography
- `src/app/theme-registry.tsx` — wraps tree with AppRouterCacheProvider + ThemeProvider + CssBaseline
- `src/components/shared/` — reusable components (FormWrapper, FormField, PageTransition)
- `src/lib/animations.ts` — motion animation variants (fadeIn, slideUp, slideInLeft, scaleIn)
