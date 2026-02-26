import { notFound } from 'next/navigation';
import { getMessages, isLocale } from '@/i18n/content';

const categoryOrder = ['backend', 'frontend', 'devops'] as const;

export default async function SkillsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const t = getMessages(locale);

  return (
    <div className="px-4 pb-20 pt-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="section-title">{t.skills.title}</h1>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {categoryOrder.map((key) => {
            const category = t.skills.categories[key];
            return (
              <section key={key} className="surface-card p-6">
                <h2 className="text-lg font-semibold text-cyan-100">{category.title}</h2>
                <ul className="mt-4 space-y-2">
                  {category.items.map((skill) => (
                    <li key={skill} className="chip">
                      {skill}
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
