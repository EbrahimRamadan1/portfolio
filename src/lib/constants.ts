export const APP_NAME = 'Ebrahim Ramadan — Frontend Engineer';

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
  contact: '/api/contact',
} as const;

export const SECTION_IDS = {
  hero: 'hero',
  about: 'about',
  skills: 'skills',
  experience: 'experience',
  projects: 'projects',
  philosophy: 'philosophy',
  contact: 'contact',
} as const;
