export interface ApiErrorResponse {
  message: string;
  status: number;
  code?: string;
  validationErrors?: Record<string, string[]>;
}
