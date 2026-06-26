import apiClient from '@/lib/axios';

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
}

export interface GetUsersParams {
  page?: number;
  limit?: number;
}

export interface GetUsersResponse {
  users: User[];
  total: number;
  page: number;
  limit: number;
}

export async function getUsers(params?: GetUsersParams): Promise<GetUsersResponse> {
  const response = await apiClient.get<GetUsersResponse>('/users', { params });
  return response.data;
}

export async function getUserById(id: string): Promise<User> {
  const response = await apiClient.get<User>(`/users/${id}`);
  return response.data;
}

export async function updateUser(id: string, data: Partial<Pick<User, 'name' | 'email'>>): Promise<User> {
  const response = await apiClient.patch<User>(`/users/${id}`, data);
  return response.data;
}
