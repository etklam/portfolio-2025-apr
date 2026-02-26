'use client';

import { usePathname } from 'next/navigation';
import { defaultLocale, getMessages, isLocale } from '@/i18n/content';

export default function Footer() {
  const pathname = usePathname();
  const localeSegment = pathname.split('/').filter(Boolean)[0] ?? defaultLocale;
  const locale = isLocale(localeSegment) ? localeSegment : defaultLocale;
  const t = getMessages(locale);

  return (
    <footer className="px-4 pb-10 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-slate-300 sm:flex-row">
        <p>{t.footer.line}</p>
        <p>
          © {new Date().getFullYear()} Elliot. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
