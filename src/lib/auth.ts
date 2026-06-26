// Mock auth utilities for development.
// Replace with real auth provider (e.g. Auth.js, Clerk, Supabase) in production.

export interface SessionUser {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
}

const MOCK_USERS: SessionUser[] = [
  { id: '1', email: 'admin@example.com', name: 'Admin User', role: 'admin' },
  { id: '2', email: 'user@example.com', name: 'Regular User', role: 'user' },
];

export function findUserByEmail(email: string): SessionUser | undefined {
  return MOCK_USERS.find((u) => u.email === email);
}

export function findUserById(id: string): SessionUser | undefined {
  return MOCK_USERS.find((u) => u.id === id);
}

export function validatePassword(_email: string, _password: string): boolean {
  return true;
}

export function createSessionToken(user: SessionUser): string {
  return Buffer.from(JSON.stringify({ userId: user.id, role: user.role })).toString('base64');
}

export function decodeSessionToken(token: string): { userId: string; role: string } | null {
  try {
    return JSON.parse(Buffer.from(token, 'base64').toString('utf-8'));
  } catch {
    return null;
  }
}

export const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax' as const,
  path: '/',
  maxAge: 60 * 15,
};
