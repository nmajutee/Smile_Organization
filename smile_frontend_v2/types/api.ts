// API Types for Backend Integration

// User Types
export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  phone?: string;
  address?: string;
  bio?: string;
  profile_image?: string;
  is_staff: boolean;
  is_active: boolean;
  date_joined: string;
}

export interface AuthTokens {
  access: string;
  refresh: string;
}

export interface LoginResponse extends AuthTokens {
  user: User;
}

// Project Types
export type ProjectStatus = 'upcoming' | 'ongoing' | 'completed' | 'cancelled';

export interface Project {
  id: number;
  title: string;
  description: string;
  location: string;
  start_date: string;
  end_date: string;
  status: ProjectStatus;
  volunteer_needed: number;
  donation_goal: number;
  donation_raised: number;
  image?: string;
  created_by: number;
  created_at: string;
  updated_at: string;
}

export interface VolunteerApplication {
  id: number;
  project: number;
  volunteer: number;
  message: string;
  status: 'pending' | 'approved' | 'rejected';
  applied_at: string;
  reviewed_at?: string;
}

// Donation Types
export type DonationStatus = 'pending' | 'successful' | 'failed' | 'cancelled';
export type PaymentMethod = 'flutterwave' | 'paypal' | 'mobile_money' | 'orange_money' | 'crypto';

export interface Donation {
  id: number;
  donor?: number;
  donor_email: string;
  donor_name: string;
  project?: number;
  amount: number;
  currency: string;
  payment_method: PaymentMethod;
  transaction_id?: string;
  payment_reference?: string;
  status: DonationStatus;
  message?: string;
  is_anonymous: boolean;
  created_at: string;
  paid_at?: string;
}

export interface DonationCreateInput {
  donor_email: string;
  donor_name: string;
  project?: number;
  amount: number;
  currency?: string;
  payment_method: PaymentMethod;
  message?: string;
  is_anonymous?: boolean;
}

// Blog Types
export interface Category {
  id: number;
  name: string;
  slug: string;
  created_at: string;
}

export interface Tag {
  id: number;
  name: string;
  slug: string;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  author?: User;
  categories: Category[];
  tags: Tag[];
  status: 'draft' | 'published';
  published_at?: string;
  created_at: string;
  updated_at: string;
  featured_image?: string;
}

// Event Types
export interface Event {
  id: number;
  title: string;
  project?: number;
  start: string;
  end: string;
  location: string;
  description: string;
  created_by?: number;
  created_at: string;
}

// Contact Form Types
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// API Response Types
export interface PaginatedResponse<T> {
  count: number;
  next?: string;
  previous?: string;
  results: T[];
}

export interface ApiError {
  detail?: string;
  message?: string;
  errors?: Record<string, string[]>;
}
