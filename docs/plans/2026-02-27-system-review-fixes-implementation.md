# System Review Fixes Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Fix all review findings across navigation behavior, locale language metadata, lint automation, and sitemap/robots URL safety.

**Architecture:** Keep the existing App Router structure and apply small, localized changes. Add one shared URL utility and one middleware-driven locale cookie so root layout can emit correct `html lang`. Maintain low-risk behavior with regression tests focused on identified issues.

**Tech Stack:** Next.js 15 App Router, TypeScript, Node test runner, ESLint (flat config)

---

### Task 1: Add failing regression tests for review findings

**Files:**
- Modify: `tests/site-merge.test.mjs`

**Step 1: Write the failing test**
```js
test('navigation avoids hash-link false active matching', () => {
  const navSource = read('src/components/Navigation.tsx');
  assert.equal(navSource.includes("const targetPath = link.href.split('#')[0] || '/';"), false);
});

test('root layout resolves html lang dynamically from locale cookie', () => {
  const layoutSource = read('src/app/layout.tsx');
  assert.equal(layoutSource.includes("const cookieStore = await cookies();"), true);
  assert.equal(layoutSource.includes('<html lang={htmlLang}>'), true);
});

test('eslint flat config exists for non-interactive lint', () => {
  const eslintConfig = read('eslint.config.mjs');
  assert.equal(eslintConfig.includes('eslint-config-next/core-web-vitals'), true);
});

test('sitemap and robots use shared site URL utility', () => {
  const sitemapSource = read('src/app/sitemap.ts');
  const robotsSource = read('src/app/robots.ts');

  assert.equal(sitemapSource.includes("'http://localhost:3000'"), false);
  assert.equal(robotsSource.includes("'http://localhost:3000'"), false);
  assert.equal(sitemapSource.includes("from '@/lib/site-url'"), true);
  assert.equal(robotsSource.includes("from '@/lib/site-url'"), true);
});
```

**Step 2: Run test to verify it fails**
Run: `npm test`
Expected: FAIL on new regression checks.

### Task 2: Fix navigation active-state bug

**Files:**
- Modify: `src/components/Navigation.tsx`
- Test: `tests/site-merge.test.mjs`

**Step 1: Write minimal implementation**
```tsx
const isHashLink = link.href.includes('#');
const isActive =
  link.href === '/'
    ? currentPath === '/'
    : isHashLink
      ? false
      : currentPath === link.href || pathname === localizedHref;
```

**Step 2: Run test to verify it passes**
Run: `npm test`
Expected: navigation regression passes.

### Task 3: Fix html lang locale handling

**Files:**
- Modify: `src/middleware.ts`
- Modify: `src/app/layout.tsx`
- Test: `tests/site-merge.test.mjs`

**Step 1: Write minimal implementation**
```ts
// middleware localized routes
const response = NextResponse.next();
response.cookies.set('locale', firstSegment, { path: '/', sameSite: 'lax' });
return response;
```

```tsx
// root layout
const cookieStore = await cookies();
const localeCookie = cookieStore.get('locale')?.value ?? defaultLocale;
const htmlLang = isLocale(localeCookie) ? localeCookie : defaultLocale;
<html lang={htmlLang}>
```

**Step 2: Run test to verify it passes**
Run: `npm test`
Expected: html lang regression passes.

### Task 4: Make lint non-interactive

**Files:**
- Create: `eslint.config.mjs`
- Modify: `package.json`

**Step 1: Write minimal implementation**
```js
import nextVitals from 'eslint-config-next/core-web-vitals';

export default [...nextVitals];
```

Add dev dependencies: `eslint`, `eslint-config-next`.

**Step 2: Run lint to verify it passes**
Run: `npm run lint`
Expected: exit 0 without interactive prompt.

### Task 5: Centralize safe site URL resolution

**Files:**
- Create: `src/lib/site-url.ts`
- Modify: `src/app/sitemap.ts`
- Modify: `src/app/robots.ts`
- Test: `tests/site-merge.test.mjs`

**Step 1: Write minimal implementation**
```ts
export function getSiteUrl() {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) return fromEnv.replace(/\/+$/, '');
  return process.env.NODE_ENV === 'production'
    ? 'https://elliot.pages.dev'
    : 'http://localhost:3000';
}
```

Use `getSiteUrl()` in sitemap/robots.

**Step 2: Run tests/build**
Run: `npm test && npm run build`
Expected: all pass.

### Task 6: Final verification

**Files:**
- Verify only

**Step 1: Run full verification suite**
Run: `npm run lint && npm test && npm run build`
Expected: all commands pass, no prompt blockers.

**Step 2: Commit**
```bash
git add tests/site-merge.test.mjs src/components/Navigation.tsx src/middleware.ts src/app/layout.tsx src/app/sitemap.ts src/app/robots.ts src/lib/site-url.ts eslint.config.mjs package.json package-lock.json docs/plans/2026-02-27-system-review-fixes-design.md docs/plans/2026-02-27-system-review-fixes-implementation.md
git commit -m "fix: resolve system review findings"
```
