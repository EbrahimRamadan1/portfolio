# Project Context

## Purpose
Production-grade Next.js 16 template with Material UI 9, TypeScript strict mode, and modern tooling. Designed as a starting point for full-stack applications with authentication, API routing, and server-first architecture.

## Architecture Goals
- **Server-first**: Minimize client components. Use Server Components by default, add `"use client"` only when interactivity or browser APIs are needed.
- **Typed end to end**: Zod schemas define validation at the boundary (API routes, forms). Types are inferred from schemas, never hand-duplicated.
- **Layered data flow**: Components call hooks, hooks call services, services call axios. No component imports axios directly.
- **Auth via httpOnly cookies**: Access token in an httpOnly cookie, refresh flow via dedicated API route. No client-side secret storage.

## Stack Versions
- Next.js 16.2.9, React 19.2.7, TypeScript 5.9.x
- MUI 9.1.2 (@mui/material-nextjs for SSR integration)
- Zustand 5.0.14, TanStack Query 5.101.1
- React Hook Form 7.80.0 + Zod 4.4.3
- Motion 12.42.0 (NOT framer-motion), import from "motion/react"
- Axios 1.18.1
- ESLint 9 (flat config), Prettier 3.3.x

## Operational Notes for AI Agents
- Build fails on D: drive due to file-locking — use C: temp directory for build verification
- `npm run build` = `next build`, `npm run typecheck` = `tsc --noEmit`
- Pin exact versions for zod, motion, tanstack-query, and axios (supply-chain risk)
