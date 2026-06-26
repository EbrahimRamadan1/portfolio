import { NextResponse } from 'next/server';
import { ZodError } from 'zod';

export class ValidationError extends Error {
  public validationErrors: Record<string, string[]>;

  constructor(validationErrors: Record<string, string[]>) {
    super('Validation failed');
    this.name = 'ValidationError';
    this.validationErrors = validationErrors;
  }
}

export function apiSuccess<T>(data: T, message = 'Success', status = 200) {
  return NextResponse.json({ data, message, status }, { status });
}

export function apiError(
  message: string,
  status: number,
  code?: string,
  validationErrors?: Record<string, string[]>,
) {
  return NextResponse.json({ message, status, code, validationErrors }, { status });
}

export function handleApiError(error: unknown) {
  if (error instanceof ValidationError) {
    return apiError('Validation failed', 400, 'VALIDATION_ERROR', error.validationErrors);
  }

  if (error instanceof ZodError) {
    return apiError('Validation failed', 400, 'VALIDATION_ERROR');
  }

  if (error instanceof SyntaxError) {
    return apiError('Invalid request body', 400, 'INVALID_JSON');
  }

  console.error('Unhandled API error:', error);
  return apiError('Internal server error', 500, 'INTERNAL_ERROR');
}
