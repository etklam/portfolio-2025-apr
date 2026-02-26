import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getMessages, isLocale, withLocale } from '@/i18n/content';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const t = getMessages(locale);

  return (
    <div className="relative isolate overflow-hidden px-4 pb-20 pt-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <section className="rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur-xl sm:p-12">
          <p className="mb-4 inline-flex rounded-full border border-cyan-300/40 bg-cyan-300/10 px-4 py-1 text-sm text-cyan-100">
            {t.hero.badge}
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl">{t.hero.title}</h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-200 sm:text-lg">{t.hero.intro}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={withLocale(locale, '/career')}
              className="cursor-pointer rounded-xl bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors duration-200 hover:bg-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
            >
              {t.hero.primaryCta}
            </Link>
            <a
              href="mailto:mail@kwunlam.com"
              className="cursor-pointer rounded-xl border border-white/25 px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:border-cyan-200 hover:text-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
            >
              {t.hero.secondaryCta}
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {t.hero.stats.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
                <p className="text-2xl font-semibold text-cyan-200">{item.value}</p>
                <p className="mt-1 text-sm text-slate-300">{item.label}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
