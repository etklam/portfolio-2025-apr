'use client';

import { useRef } from 'react';
import { useParams } from 'next/navigation';
import { defaultLocale, getMessages, isLocale } from '@/i18n/content';

export default function StatusPage() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const params = useParams<{ locale: string }>();
  const localeParam = params?.locale ?? defaultLocale;
  const locale = isLocale(localeParam) ? localeParam : defaultLocale;
  const t = getMessages(locale);

  return (
    <div className="px-4 pb-20 pt-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="section-title">{t.status.title}</h1>
        <p className="mt-2 text-slate-300">{t.status.subtitle}</p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-white/15 bg-slate-950/60 p-4 sm:p-6">
          <iframe
            ref={iframeRef}
            src="https://wl.hetrixtools.com/r/85ad0b88d63b009d40c2a43ebaf2590d/"
            title={t.status.title}
            className="h-[680px] w-full rounded-lg border-0"
            loading="lazy"
            sandbox="allow-scripts allow-same-origin allow-popups"
          />
          <p className="mt-4 text-center text-xs text-slate-400">{t.status.provider}</p>
        </div>
      </div>
    </div>
  );
}
