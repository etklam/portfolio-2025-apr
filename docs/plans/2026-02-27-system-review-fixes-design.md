# System Review Fixes Design

## Scope
Address the four review findings: incorrect nav active state for hash links, static `html lang`, non-automatable lint setup, and fragile sitemap/robots base URL fallback.

## Design
1. Navigation active state
- Keep route structure unchanged.
- Update nav matching logic so section hash links (`/#about`, `/#skills`) are not falsely treated as route `/` and highlighted simultaneously.
- Only route links are considered active via pathname matching.

2. Document language
- Keep single root layout.
- Persist locale in middleware cookie (`locale`) on localized routes and redirects.
- Resolve `html lang` in root layout from cookie with locale validation and default fallback.

3. Lint command reliability
- Add explicit flat ESLint config for Next.js.
- Add missing lint dependencies so `npm run lint` is non-interactive and CI-safe.

4. Site URL safety
- Add shared site URL resolver utility.
- Prefer `NEXT_PUBLIC_SITE_URL`, trim trailing slash.
- Use production-safe canonical fallback and localhost only for non-production.
- Reuse resolver in both `robots.ts` and `sitemap.ts`.

## Testing
- Extend `tests/site-merge.test.mjs` with regression checks for:
  - nav hash links not using hash-stripped active matching
  - root layout reading locale cookie for html lang
  - ESLint config presence
  - sitemap/robots using shared URL resolver and no localhost literal defaults
- Run red-green cycle via `npm test`, then full verification with `npm run lint`, `npm test`, and `npm run build`.
