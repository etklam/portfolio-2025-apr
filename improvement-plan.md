# Improvement Plan

This document outlines short-, mid-, and long-term enhancements, priorities, and acceptance criteria for the portfolio site so they can be executed in stages.

## Goals and Principles
- Consistency: Align the design system (colors, typography, motion) and tech versions.
- Stability: Remove dead code and unnecessary client components to reduce bundle size.
- Maintainability: Data-driven content and reusable components.
- Observability: Establish minimal CI (Build/Lint) and quality gates.

## Current Issues (Risks/Quick Wins)
- README does not match actual dependency versions (Next 15 / React 19).
- Tailwind v4 mixed with legacy configuration; `globals.css` uses undefined CSS variables (`--accent-*`).
- Multiple unnecessary `use client`; home/about pages include unused user/auth logic.
- External links in `Navigation` use `Link`; should be `<a>`.
- `status` page color scheme not aligned with the site theme.
- Certain SVG paths may be invalid (e.g., Twitter icon in `ProfileCard`).

## Roadmap
### Short Term (1–2 days)
1) Version and configuration alignment
   - Update README to Next 15 / React 19.
   - Remove multi-language support: ensure single-locale English only (clean up i18n config if present).
2) Tailwind v4 alignment and design system
   - Define `--accent-primary/secondary/tertiary` in `:root`; avoid dual setups.
   - Review `tailwind.config.js` for necessity; simplify around v4 defaults.
3) Client/dead code cleanup
   - Remove unnecessary `'use client'` (e.g., `career/page.tsx`).
   - Remove unused localStorage/sign-in/out logic in home/about pages.
   - Use `<a>` for external links in `Navigation`.
4) Visual consistency
   - Switch `status/page.tsx` to a dark theme and align colors/typography.
5) SEO basics
   - Complete `metadata`; add `app/sitemap.ts` and `app/robots.txt`.
6) Minor fixes
   - Fix Twitter SVG path in `ProfileCard`.

### Mid Term (1–2 weeks)
1) Content data modeling and componentization
   - Extract lists/paragraphs of `career`, `skills`, and `about` into `src/data/*.ts|json`.
   - Factor common UI (cards/timeline/badges/social row) into `src/components/ui/*`.
2) Quality and process
   - Add ESLint/Prettier and `npm run lint:fix`.
   - Add `.github/workflows/ci.yml` (Install → Lint → Build).
3) UX and accessibility
   - Respect `prefers-reduced-motion`; focus visibility/ARIA/contrast checks.

### Long Term (≥1 month)
1) Content expansion
   - Add `Projects`/portfolio section with images, tech tags, and outcome metrics.
   - Blog (MDX or Headless CMS), automatic RSS, and site search.
2) SEO/sharing and monitoring
   - Dynamic OG image; Schema.org; Lighthouse budget; Sentry.
3) Features
   - Contact form (`app/api/contact/route.ts`) + email service (Postmark/Resend).
4) Performance
   - Optimize fonts and code-splitting; icon sprite; lazy-load secondary sections.

## Actionable Task List (Priority)
### P0 (This week)
- [ ] Align README versions (Next 15 / React 19).
- [ ] Remove i18n/multi-language setup and keep English only.
- [ ] Add and unify `--accent-*` variables in `globals.css`.
- [ ] Clean up `'use client'` and unused user/auth code.
- [ ] Use `<a>` for external links in `Navigation`.
- [ ] Dark-theme the `status` page and align visuals.
- [ ] Complete `metadata`; add `sitemap` and `robots`.
- [ ] Fix the Twitter SVG path in `ProfileCard`.

### P1 (This month)
- [ ] Data-model content (`src/data/*`) and replace inline page copy.
- [ ] Establish CI (Lint+Build); add ESLint/Prettier.
- [ ] Accessibility baseline fixes (focus, ARIA, contrast).

### P2 (Next quarter)
- [ ] Playwright e2e smoke tests (home/navigation/status).
- [ ] Projects/Blog foundations (with RSS and search).
- [ ] Dynamic OG image, Schema.org, Sentry, Lighthouse budget.
- [ ] `contact` API and email service.
- [ ] Performance tuning (fonts, icons, code-splitting, motion reduction).

## Acceptance Criteria (Examples)
- Build: `npm run build` succeeds; CI passes; primary pages LCP < 2.5s (local simulation).
- SEO: `sitemap.xml` and `robots.txt` exist; basic OG tags complete.
- Accessibility: Tab navigable, visible focus; key buttons have proper ARIA labels.

## Milestones (Suggested)
- M1 (This week): Complete all P0 items and merge to main.
- M2 (Within two weeks): Complete data modeling and CI; release 1.1.0.
- M3 (Next month): Complete at least 2 P2 items (any of Projects/OG/Sentry/Playwright).

## Notes
- The repo also contains `portfolio-enhancement-plan.md` (untracked). If you want to keep it, merge content or prioritize this plan to avoid duplication and divergence.
