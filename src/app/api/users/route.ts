import { NextResponse } from 'next/server';
import { z } from 'zod';
import { findUserById } from '@/lib/auth';
import { apiError, handleApiError } from '@/lib/api-helpers';

const querySchema = z.object({
  ids: z.string({ error: 'User IDs are required' }).optional(),
});

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const idsParam = searchParams.get('ids');
    const parsed = querySchema.safeParse({ ids: idsParam || undefined });

    if (!parsed.success) {
      return apiError('Invalid parameters', 400, 'INVALID_PARAMS');
    }

    const ids = parsed.data.ids?.split(',').filter(Boolean) || [];
    const users = ids.map((id) => findUserById(id)).filter(Boolean);

    return NextResponse.json({
      data: { users },
      message: users.length > 0 ? 'Users found' : 'No users found',
      status: 200,
    });
  } catch (error) {
    return handleApiError(error);
  }
}
