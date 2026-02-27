import type { MetadataRoute } from 'next';
import { getSiteUrl } from '@/lib/site-url';

const baseUrl = getSiteUrl();
const locales = ['zh-HK', 'en'];
const routes = ['', '/about', '/skills', '/career'];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: now,
      changeFrequency: route === '' ? 'weekly' : 'monthly',
      priority: route === '' ? 1 : 0.7,
    })),
  );
}
