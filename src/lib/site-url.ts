const DEFAULT_PRODUCTION_SITE_URL = 'https://elliot.pages.dev';

export function getSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (configured) {
    return configured.replace(/\/+$/, '');
  }

  return process.env.NODE_ENV === 'production' ? DEFAULT_PRODUCTION_SITE_URL : 'http://localhost:3000';
}
