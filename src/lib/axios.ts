import axios from 'axios';
import type { AxiosError, InternalAxiosRequestConfig } from 'axios';
import type { ApiErrorResponse } from '@/types';

export interface AppError {
  message: string;
  status: number;
  code?: string;
}

function getAuthToken(): string | null {
  return null;
}

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || '/api',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = getAuthToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError<ApiErrorResponse>) => {
    const appError: AppError = {
      message: 'An unexpected error occurred',
      status: 500,
    };

    if (error.response) {
      appError.message = error.response.data?.message || error.message;
      appError.status = error.response.status;
      appError.code = error.response.data?.code;
    } else if (error.request) {
      appError.message = 'Network error. Please check your connection.';
      appError.status = 0;
    } else {
      appError.message = error.message;
    }

    return Promise.reject(appError);
  },
);

export default apiClient;
