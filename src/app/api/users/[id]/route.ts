import { NextResponse } from 'next/server';
import { z } from 'zod';
import { findUserById } from '@/lib/auth';
import { apiError, handleApiError } from '@/lib/api-helpers';

const paramsSchema = z.object({
  id: z.string({ error: 'User ID is required' }),
});

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const parsed = paramsSchema.safeParse({ id });
    if (!parsed.success) {
      return apiError('Invalid user ID', 400, 'INVALID_ID');
    }

    const user = findUserById(id);
    if (!user) {
      return apiError('User not found', 404, 'USER_NOT_FOUND');
    }

    return NextResponse.json({
      data: { user },
      message: 'User found',
      status: 200,
    });
  } catch (error) {
    return handleApiError(error);
  }
}
