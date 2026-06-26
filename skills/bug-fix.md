# Bug Fix

## Workflow
1. Reproduce the bug — get the exact error message or incorrect behavior
2. Search the codebase for the relevant code
3. Identify root cause — check type errors, logic errors, API mismatches
4. Make minimal fix — do not refactor unrelated code
5. Run `npm run typecheck`, `npm run build`, and `npm run lint`
6. If the fix touches auth/security logic, read `docs/ai/security-policy.md` first

## Common Bug Sources in This Stack
- Zod 4 vs Zod 3 API differences (`error` param vs `message`)
- `motion` package imported as `framer-motion` (wrong package name)
- MUI v9 API differences from v5/v6
- Next.js 16 Turbopack-specific issues (different from webpack)
- EPERM errors on D: drive during build (use C: temp directory for build verification)
