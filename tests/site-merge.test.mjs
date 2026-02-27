import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

function read(path) {
  return readFileSync(path, 'utf8');
}

test('navigation does not include status link anymore', () => {
  const navSource = read('src/components/Navigation.tsx');
  assert.equal(navSource.includes("{ href: '/status'"), false);
});

test('localized home page contains about and skills sections', () => {
  const homeSource = read('src/app/[locale]/page.tsx');
  assert.equal(homeSource.includes('id="about"'), true);
  assert.equal(homeSource.includes('id="skills"'), true);
});

test('sitemap does not include status route', () => {
  const sitemapSource = read('src/app/sitemap.ts');
  assert.equal(sitemapSource.includes("'/status'"), false);
});

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
  assert.equal(eslintConfig.includes("compat.extends('next/core-web-vitals')"), true);
});

test('sitemap and robots use shared site URL utility', () => {
  const sitemapSource = read('src/app/sitemap.ts');
  const robotsSource = read('src/app/robots.ts');

  assert.equal(sitemapSource.includes("from '@/lib/site-url'"), true);
  assert.equal(robotsSource.includes("from '@/lib/site-url'"), true);
  assert.equal(sitemapSource.includes("process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'"), false);
  assert.equal(robotsSource.includes("process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'"), false);
});
