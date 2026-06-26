import { NextResponse } from 'next/server';
import { z } from 'zod';
import { apiError, handleApiError } from '@/lib/api-helpers';

const contactSchema = z.object({
  name: z.string({ error: 'Name is required' }).min(2, { error: 'Name must be at least 2 characters' }),
  email: z.string({ error: 'Email is required' }).email({ error: 'Please enter a valid email address' }),
  message: z.string({ error: 'Message is required' }).min(10, { error: 'Message must be at least 10 characters' }),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return apiError('Validation failed', 400, 'VALIDATION_ERROR');
    }

    return NextResponse.json({
      data: { received: true },
      message: 'Message received successfully',
      status: 200,
    });
  } catch (error) {
    return handleApiError(error);
  }
}
