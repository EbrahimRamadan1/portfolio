# SEO Update

## Workflow
1. Read `docs/ai/architecture.md` for route structure
2. For page metadata: add/update `metadata` export in the page file (use `generateMetadata` for dynamic routes)
3. Include OG and Twitter card fields for public pages
4. Update `src/app/robots.ts` if route access rules change
5. Update `src/app/sitemap.ts` if new routes are added

## Key Files
- `src/app/layout.tsx` — root metadata (template title, description, canonical URL)
- `src/app/(routes)/dashboard/page.tsx` — example of page with OG/Twitter metadata
- `src/app/robots.ts` — robots.txt generation
- `src/app/sitemap.ts` — sitemap.xml generation
