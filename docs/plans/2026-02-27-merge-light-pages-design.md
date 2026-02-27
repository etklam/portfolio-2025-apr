# Portfolio Page Merge Design (Home + Career)

## Goal
Reduce fragmented low-content pages by consolidating About and Skills into the localized home page while keeping Career as the only standalone detail page. Status should be removed from navigation and no longer rendered as a content page.

## Scope
- Keep routes: `/{locale}` and `/{locale}/career`
- Merge content into home: About + Skills
- Remove Status from main navigation and sitemap
- Preserve old links by redirecting:
  - `/{locale}/about` -> `/{locale}/#about`
  - `/{locale}/skills` -> `/{locale}/#skills`
  - `/{locale}/status` -> `/{locale}`
  - `/status` -> `/zh-HK`

## UI and Navigation
- Home page keeps hero section as first fold.
- Add `about` and `skills` sections under hero with existing styling tokens.
- Navigation links:
  - Home (`/`)
  - About (`/#about`)
  - Skills (`/#skills`)
  - Career (`/career`)
- Status link removed.

## Data and i18n
- Reuse existing i18n message keys for About and Skills directly in home page.
- Existing status text can remain in locale data temporarily, but not consumed by UI.

## SEO
- Remove `/status` from `sitemap.ts`.
- Keep `/about` and `/skills` in sitemap because they redirect and remain shareable entry links.

## Testing Strategy
- Add minimal Node `node:test` checks to verify:
  - Navigation no longer includes `/status`
  - Localized home contains `about` and `skills` section anchors
  - Sitemap no longer includes `/status`

## Risks
- Anchor highlighting in nav may behave differently from path-based pages; active-state logic should be path-aware for hash links.
- Redirecting old URLs introduces one extra hop for users with old bookmarks (acceptable tradeoff).
