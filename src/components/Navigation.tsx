'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { defaultLocale, getMessages, isLocale, Locale, locales, withLocale } from '@/i18n/content';

function getLocaleFromPath(pathname: string): Locale {
  const segment = pathname.split('/').filter(Boolean)[0] ?? defaultLocale;
  return isLocale(segment) ? segment : defaultLocale;
}

function getPathWithoutLocale(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length === 0) return '/';
  if (isLocale(segments[0])) {
    const rest = segments.slice(1);
    return rest.length ? `/${rest.join('/')}` : '/';
  }
  return pathname;
}

export default function Navigation() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const currentPath = getPathWithoutLocale(pathname);
  const t = getMessages(locale);

  const links = [
    { href: '/', label: t.nav.home },
    { href: '/#about', label: t.nav.about },
    { href: '/#skills', label: t.nav.skills },
    { href: '/career', label: t.nav.career },
  ];

  return (
    <header className="sticky top-4 z-40 px-4 sm:px-6 lg:px-8">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/15 bg-slate-950/80 px-4 py-3 backdrop-blur-xl">
        <Link href={withLocale(locale, '/')} className="cursor-pointer text-sm font-semibold tracking-[0.25em] text-cyan-200">
          ELLIOT
        </Link>

        <div className="mx-3 flex flex-1 items-center gap-1 overflow-x-auto md:mx-0 md:flex-none md:gap-2">
          {links.map((link) => {
            const localizedHref = withLocale(locale, link.href);
            const isHashLink = link.href.includes('#');
            const isActive = link.href === '/' ? currentPath === '/' : !isHashLink && currentPath === link.href;

            return (
              <Link
                key={link.href}
                href={localizedHref}
                className={`cursor-pointer whitespace-nowrap rounded-lg px-3 py-2 text-xs transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 md:text-sm ${
                  isActive ? 'bg-cyan-300/20 text-cyan-100' : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/etklam/portfolio-2025-apr"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer rounded-lg border border-white/20 px-3 py-2 text-xs text-slate-200 transition-colors duration-200 hover:border-cyan-200 hover:text-cyan-100"
          >
            {t.nav.github}
          </a>
          <a
            href="https://elliot.pages.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer rounded-lg border border-white/20 px-3 py-2 text-xs text-slate-200 transition-colors duration-200 hover:border-cyan-200 hover:text-cyan-100"
          >
            {t.nav.blog}
          </a>
          <div className="hidden items-center gap-1 rounded-lg border border-white/15 bg-white/5 p-1 sm:flex" aria-label={t.langLabel}>
            {locales.map((targetLocale) => (
              <Link
                key={targetLocale}
                href={withLocale(targetLocale, currentPath)}
                className={`cursor-pointer rounded-md px-2 py-1 text-xs transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 ${
                  targetLocale === locale ? 'bg-cyan-300 text-slate-950' : 'text-slate-300 hover:text-white'
                }`}
              >
                {targetLocale === 'zh-HK' ? '中' : 'EN'}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
