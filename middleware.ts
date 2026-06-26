import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { COOKIE_KEYS, APP_ROUTES } from '@/lib/constants';

const publicRoutes = new Set<string>([
  APP_ROUTES.home,
  APP_ROUTES.login,
  APP_ROUTES.register,
]);

const authApiRoutes = new Set<string>([
  '/api/auth/login',
  '/api/auth/register',
  '/api/auth/refresh',
]);

const adminRoutes = new Set<string>([
  '/dashboard/admin',
]);

function isPublicRoute(pathname: string): boolean {
  return publicRoutes.has(pathname) || authApiRoutes.has(pathname);
}

function isProtectedRoute(pathname: string): boolean {
  return pathname.startsWith(APP_ROUTES.dashboard);
}

function isAdminRoute(pathname: string): boolean {
  for (const route of adminRoutes) {
    if (pathname.startsWith(route)) return true;
  }
  return false;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (isPublicRoute(pathname)) {
    return NextResponse.next();
  }

  if (isProtectedRoute(pathname)) {
    const accessToken = request.cookies.get(COOKIE_KEYS.access);
    const refreshToken = request.cookies.get(COOKIE_KEYS.refresh);

    if (!accessToken) {
      if (refreshToken) {
        // Has refresh token but no access token — expired session.
        // Client-side will handle the refresh via the axios interceptor.
        // For SSR, redirect to login with redirect param.
        const loginUrl = new URL(APP_ROUTES.login, request.url);
        loginUrl.searchParams.set('redirect', pathname);
        return NextResponse.redirect(loginUrl);
      }

      const loginUrl = new URL(APP_ROUTES.login, request.url);
      return NextResponse.redirect(loginUrl);
    }

    if (isAdminRoute(pathname)) {
      const role = decodeRoleFromToken(accessToken.value);
      if (role !== 'admin') {
        const unauthorizedUrl = new URL('/unauthorized', request.url);
        return NextResponse.redirect(unauthorizedUrl);
      }
    }
  }

  const response = NextResponse.next();

  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  );

  return response;
}

function decodeRoleFromToken(token: string): string | null {
  try {
    const payload = JSON.parse(Buffer.from(token, 'base64').toString('utf-8'));
    return payload.role || null;
  } catch {
    return null;
  }
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
