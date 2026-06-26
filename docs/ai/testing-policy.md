# Testing Policy

## Framework Recommendation
Use **Vitest** for this stack. It has first-class Next.js support, native TypeScript/ESM handling, and the fastest watch mode for development. Pair with `@testing-library/react` for component tests.

## Test Types

### Unit Tests
- Pure functions in `src/lib/`, `src/utils/`, `src/schemas/`
- Test Zod schema validation (valid/invalid inputs)
- Test auth helpers (`decodeSessionToken`, `createSessionToken`)
- Test API error handling (`handleApiError`, `apiError`)

### Integration Tests
- Hook tests for `src/hooks/` using `@tanstack/react-query` test utilities and a mock service layer
- Store tests for Zustand slices — call `set` and assert state changes
- Form wrapper tests — render with a test schema, fill fields, submit

### Route Handler Tests
- Test route handlers using `next/request` mock helpers
- Test Zod validation rejects invalid payloads
- Test auth middleware rejects unauthenticated requests
- Test refresh-token flow

## Running Tests
```bash
npm run test        # vitest run
npm run test:watch  # vitest (watch mode)
```

## Coverage Targets
- `src/lib/` — 90%+ (critical infrastructure)
- `src/schemas/` — 100% (validation boundaries)
- `src/services/` — 85%+ (API integration layer)
- `src/hooks/` — 80%+ (data fetching patterns)
