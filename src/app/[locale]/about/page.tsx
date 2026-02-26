import { notFound } from 'next/navigation';
import { getMessages, isLocale } from '@/i18n/content';

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const t = getMessages(locale);

  return (
    <div className="px-4 pb-20 pt-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="section-title">{t.about.title}</h1>
        <div className="mt-8 space-y-5">
          <p className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-200">{t.about.summary}</p>
          <div className="grid gap-5 md:grid-cols-2">
            {t.about.cards.map((card) => (
              <article key={card.title} className="surface-card p-6">
                <h2 className="text-xl font-semibold text-white">{card.title}</h2>
                <p className="mt-3 text-slate-300">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
