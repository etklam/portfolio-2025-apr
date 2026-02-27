import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { Noto_Sans_TC, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { defaultLocale, isLocale } from '@/i18n/content';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
});

const notoSansTC = Noto_Sans_TC({
  variable: '--font-noto-sans-tc',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: "Elliot Chan | Full-Stack Engineer",
  description: 'Bilingual portfolio with a modern technology-focused design.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get('locale')?.value ?? defaultLocale;
  const htmlLang = isLocale(localeCookie) ? localeCookie : defaultLocale;

  return (
    <html lang={htmlLang}>
      <body className={`${spaceGrotesk.variable} ${notoSansTC.variable} antialiased`}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
