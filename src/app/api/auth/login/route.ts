import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { z } from 'zod';
import { findUserByEmail, validatePassword, createSessionToken, COOKIE_OPTIONS } from '@/lib/auth';
import { COOKIE_KEYS } from '@/lib/constants';
import { apiError, handleApiError } from '@/lib/api-helpers';

const loginSchema = z.object({
  email: z.string({ error: 'Email is required' }).email({ error: 'Invalid email format' }),
  password: z.string({ error: 'Password is required' }).min(6, { error: 'Password must be at least 6 characters' }),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = loginSchema.safeParse(body);

    if (!parsed.success) {
      return apiError('Validation failed', 400, 'VALIDATION_ERROR');
    }

    const { email, password } = parsed.data;
    const user = findUserByEmail(email);

    if (!user || !validatePassword(email, password)) {
      return apiError('Invalid email or password', 401, 'INVALID_CREDENTIALS');
    }

    const token = createSessionToken(user);
    const cookieStore = await cookies();
    cookieStore.set(COOKIE_KEYS.access, token, COOKIE_OPTIONS);
    cookieStore.set(COOKIE_KEYS.refresh, token, { ...COOKIE_OPTIONS, maxAge: 60 * 60 * 24 * 7 });

    return NextResponse.json({
      data: { user: { id: user.id, email: user.email, name: user.name, role: user.role } },
      message: 'Login successful',
      status: 200,
    });
  } catch (error) {
    return handleApiError(error);
  }
}
