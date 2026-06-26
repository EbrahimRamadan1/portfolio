# Release Check

## Workflow
1. Read `docs/ai/release-policy.md`
2. Run `npm run typecheck` — must pass
3. Run `npm run build` — must produce clean output
4. Run `npm run lint` — must pass
5. Verify all routes render correctly
6. Check version pinning for zod, motion, tanstack-query, axios
7. Update `docs/ai/release-policy.md` if versions changed
