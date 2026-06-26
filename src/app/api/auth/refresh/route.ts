import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { decodeSessionToken, findUserById, createSessionToken, COOKIE_OPTIONS } from '@/lib/auth';
import { COOKIE_KEYS } from '@/lib/constants';
import { apiError, handleApiError } from '@/lib/api-helpers';

export async function POST() {
  try {
    const cookieStore = await cookies();
    const refreshToken = cookieStore.get(COOKIE_KEYS.refresh);

    if (!refreshToken) {
      return apiError('No refresh token', 401, 'NO_REFRESH_TOKEN');
    }

    const payload = decodeSessionToken(refreshToken.value);
    if (!payload) {
      return apiError('Invalid refresh token', 401, 'INVALID_REFRESH_TOKEN');
    }

    const user = findUserById(payload.userId);
    if (!user) {
      return apiError('User not found', 401, 'USER_NOT_FOUND');
    }

    const newToken = createSessionToken(user);
    cookieStore.set(COOKIE_KEYS.access, newToken, COOKIE_OPTIONS);
    cookieStore.set(COOKIE_KEYS.refresh, newToken, { ...COOKIE_OPTIONS, maxAge: 60 * 60 * 24 * 7 });

    return NextResponse.json({
      data: { user: { id: user.id, email: user.email, name: user.name, role: user.role } },
      message: 'Token refreshed',
      status: 200,
    });
  } catch (error) {
    return handleApiError(error);
  }
}
