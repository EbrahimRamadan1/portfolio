# Claude-Specific Instructions

## Execution Style
This project works best with phased, sequential execution. Do not attempt one-shot generation of large features. For every task:

1. **Read context first** — always start with `docs/ai/context.md`
2. **Classify the task** — use the table in AGENTS.md to route to the correct skill
3. **Read the skill file** — each skill in `skills/` contains the exact workflow
4. **Implement in small steps** — make one change at a time, run `npm run build` after each step
5. **Verify before proceeding** — never move to the next step without passing the build

## Tool-Use Expectations
- Use `Read` and `Grep` before editing to understand existing patterns
- Use `Write` or `Edit` for changes, never output code as text for the user to copy
- Use `Bash` to run builds, typecheck, and lint after every change
- When `Bash` produces errors, read the full error output and fix the root cause before retrying

## Key Gotchas in This Codebase
- **Motion, not framer-motion**: Import from `"motion/react"`, never `"framer-motion"`
- **Zod 4 syntax**: Use `error` param for messages, not `message` (e.g. `z.string({ error: "Required" })`)
- **MUI v9**: `createTheme` from `@mui/material/styles` only, never `@mui/system`
- **Next.js 16**: Turbopack default, `tsc --noEmit` for typechecking
- **Zustand slices**: Business logic does NOT go in stores — stores hold state + setters only
- **Service layer**: Never call axios directly from a component — always go through `src/services/`

## Verification Commands
Run these after every change:
1. `npm run typecheck` (alias for `tsc --noEmit`)
2. `npm run build`
3. `npm run lint`

## Project Structure
```
src/
  app/          — Next.js App Router pages, layouts, API routes
  components/   — React components (ui/ for primitives, shared/ for app-specific)
  features/     — Feature modules (auth/, users/, settings/)
  hooks/        — TanStack Query hooks and generic hooks
  services/     — API service layer (axios wrappers)
  store/        — Zustand slices
  lib/          — Utilities, auth helpers, constants, axios config
  schemas/      — Zod schemas
  theme/        — MUI theme config
  types/        — Shared TypeScript types
  utils/        — Pure utility functions
```
