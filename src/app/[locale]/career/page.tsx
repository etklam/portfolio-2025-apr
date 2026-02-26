import { notFound } from 'next/navigation';
import { getMessages, isLocale } from '@/i18n/content';

export default async function CareerPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const t = getMessages(locale);

  return (
    <div className="px-4 pb-20 pt-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="section-title">{t.career.title}</h1>
        <div className="mt-8 space-y-5">
          {t.career.entries.map((entry) => (
            <article key={`${entry.company}-${entry.role}`} className="surface-card p-6">
              <p className="text-sm text-cyan-200">{entry.period}</p>
              <h2 className="mt-1 text-xl font-semibold text-white">{entry.role}</h2>
              <p className="text-slate-300">{entry.company}</p>
              <ul className="mt-4 space-y-2 text-slate-200">
                {entry.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-200" aria-hidden />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
