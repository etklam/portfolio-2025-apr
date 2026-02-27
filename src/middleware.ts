import { NextRequest, NextResponse } from 'next/server';
import { defaultLocale, isLocale } from '@/i18n/content';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  const firstSegment = pathname.split('/')[1];
  if (isLocale(firstSegment)) {
    const response = NextResponse.next();
    response.cookies.set('locale', firstSegment, { path: '/', sameSite: 'lax' });
    return response;
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === '/' ? '' : pathname}`;
  const response = NextResponse.redirect(url);
  response.cookies.set('locale', defaultLocale, { path: '/', sameSite: 'lax' });
  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
