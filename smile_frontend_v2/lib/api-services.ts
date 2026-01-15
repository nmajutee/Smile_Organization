import { apiClient } from './api-client';
import type {
  Project,
  Donation,
  DonationCreateInput,
  BlogPost,
  Event,
  Category,
  Tag,
  ContactFormData,
  PaginatedResponse,
  User,
  AuthTokens,
  LoginResponse,
  VolunteerApplication,
} from '@/types/api';

// ==================== Projects API ====================

export async function getProjects(): Promise<Project[]> {
  const response = await apiClient.get<PaginatedResponse<Project>>('/api/projects/api/');
  return response.data.results;
}

export async function getProject(id: number): Promise<Project> {
  const response = await apiClient.get<Project>(`/api/projects/api/${id}/`);
  return response.data;
}

export async function applyAsVolunteer(projectId: number, message: string): Promise<VolunteerApplication> {
  const response = await apiClient.post<VolunteerApplication>('/api/projects/apply/', {
    project: projectId,
    message,
  });
  return response.data;
}

// ==================== Donations API ====================

export async function getDonations(): Promise<Donation[]> {
  const response = await apiClient.get<Donation[]>('/api/donations/');
  return response.data;
}

export async function createDonation(data: DonationCreateInput): Promise<Donation> {
  const response = await apiClient.post<Donation>('/api/donations/create/', data);
  return response.data;
}

export async function getDonationStats(): Promise<{
  total_raised: number;
  total_donors: number;
  total_projects_funded: number;
}> {
  const response = await apiClient.get('/api/donations/stats/');
  return response.data;
}

// ==================== Blog API ====================

export async function getBlogPosts(): Promise<BlogPost[]> {
  const response = await apiClient.get<BlogPost[]>('/api/blog/api/');
  return response.data;
}

export async function getBlogPost(id: number): Promise<BlogPost> {
  const response = await apiClient.get<BlogPost>(`/api/blog/api/${id}/`);
  return response.data;
}

export async function getCategories(): Promise<Category[]> {
  const response = await apiClient.get<Category[]>('/api/blog/categories/');
  return response.data;
}

export async function getTags(): Promise<Tag[]> {
  const response = await apiClient.get<Tag[]>('/api/blog/tags/');
  return response.data;
}

// ==================== Events API ====================

export async function getEvents(): Promise<Event[]> {
  const response = await apiClient.get<Event[]>('/api/events/');
  return response.data;
}

export async function getEvent(id: number): Promise<Event> {
  const response = await apiClient.get<Event>(`/api/events/${id}/`);
  return response.data;
}

// ==================== Contact API ====================

export async function submitContactForm(data: ContactFormData): Promise<{ message: string }> {
  const response = await apiClient.post('/api/core/contact/', data);
  return response.data;
}

// ==================== Auth API ====================

export async function login(email: string, password: string): Promise<LoginResponse> {
  const response = await apiClient.post<LoginResponse>('/api/accounts/login/', {
    email,
    password,
  });

  // Store tokens
  if (typeof window !== 'undefined') {
    localStorage.setItem('accessToken', response.data.access);
    localStorage.setItem('refreshToken', response.data.refresh);
  }

  return response.data;
}

export async function register(data: {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  phone?: string;
}): Promise<User> {
  const response = await apiClient.post<User>('/api/accounts/register/', data);
  return response.data;
}

export async function getProfile(): Promise<User> {
  const response = await apiClient.get<User>('/api/accounts/profile/');
  return response.data;
}

export async function updateProfile(data: Partial<User>): Promise<User> {
  const response = await apiClient.patch<User>('/api/accounts/profile/update/', data);
  return response.data;
}

export async function changePassword(oldPassword: string, newPassword: string): Promise<{ message: string }> {
  const response = await apiClient.post('/api/accounts/change-password/', {
    old_password: oldPassword,
    new_password: newPassword,
  });
  return response.data;
}

export async function logout(): Promise<void> {
  await apiClient.post('/api/accounts/logout/');

  // Clear tokens
  if (typeof window !== 'undefined') {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  }
}

// ==================== Utility Functions ====================

export function isAuthenticated(): boolean {
  if (typeof window === 'undefined') return false;
  return !!localStorage.getItem('accessToken');
}

export function getAccessToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('accessToken');
}
