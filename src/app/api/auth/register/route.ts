import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { z } from 'zod';
import { createSessionToken, COOKIE_OPTIONS } from '@/lib/auth';
import { COOKIE_KEYS } from '@/lib/constants';
import { apiError, handleApiError } from '@/lib/api-helpers';

const registerSchema = z.object({
  name: z.string({ error: 'Name is required' }).min(2, { error: 'Name must be at least 2 characters' }),
  email: z.string({ error: 'Email is required' }).email({ error: 'Invalid email format' }),
  password: z.string({ error: 'Password is required' }).min(8, { error: 'Password must be at least 8 characters' }),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = registerSchema.safeParse(body);

    if (!parsed.success) {
      return apiError('Validation failed', 400, 'VALIDATION_ERROR');
    }

    const { name, email } = parsed.data;

    const newUser = { id: String(Date.now()), email, name, role: 'user' as const };
    const token = createSessionToken(newUser);
    const cookieStore = await cookies();
    cookieStore.set(COOKIE_KEYS.access, token, COOKIE_OPTIONS);
    cookieStore.set(COOKIE_KEYS.refresh, token, { ...COOKIE_OPTIONS, maxAge: 60 * 60 * 24 * 7 });

    return NextResponse.json({
      data: { user: newUser },
      message: 'Registration successful',
      status: 201,
    }, { status: 201 });
  } catch (error) {
    return handleApiError(error);
  }
}
