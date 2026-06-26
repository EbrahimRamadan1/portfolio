export const APP_NAME = 'NextTemplate';

export const COOKIE_KEYS = {
  access: 'access_token',
  refresh: 'refresh_token',
} as const;

export const APP_ROUTES = {
  home: '/',
  login: '/login',
  register: '/register',
  dashboard: '/dashboard',
} as const;

export const API_ROUTES = {
  login: '/api/auth/login',
  register: '/api/auth/register',
  refresh: '/api/auth/refresh',
  logout: '/api/auth/logout',
  me: '/api/auth/me',
} as const;
