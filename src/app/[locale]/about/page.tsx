import { redirect } from 'next/navigation';
import { isLocale, withLocale } from '@/i18n/content';

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    redirect('/zh-HK');
  }

  redirect(withLocale(locale, '/#about'));
}
