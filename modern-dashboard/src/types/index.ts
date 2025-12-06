// User types
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  avatar?: string;
  createdAt: Date;
  lastLogin?: Date;
}

// Project types
export interface Project {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  image: string;
  technologies: string[];
  status: 'completed' | 'in-progress' | 'planned';
  clientName?: string;
  startDate: Date;
  endDate?: Date;
  projectUrl?: string;
  githubUrl?: string;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Service types
export interface Service {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  icon: string;
  price?: number;
  duration?: string;
  features: string[];
  featuresAr: string[];
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Expertise types
export interface Expertise {
  id: string;
  name: string;
  nameAr: string;
  category: string;
  categoryAr: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  yearsOfExperience: number;
  icon?: string;
  description?: string;
  descriptionAr?: string;
  projects: string[]; // Project IDs
  createdAt: Date;
  updatedAt: Date;
}

// Company Info types
export interface CompanyInfo {
  id: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  mission: string;
  missionAr: string;
  vision: string;
  visionAr: string;
  values: string[];
  valuesAr: string[];
  team: TeamMember[];
  contact: ContactInfo;
  socialMedia: SocialMedia;
  foundedYear: number;
  employeeCount: number;
  logo: string;
  updatedAt: Date;
}

export interface TeamMember {
  id: string;
  name: string;
  nameAr: string;
  position: string;
  positionAr: string;
  bio: string;
  bioAr: string;
  image: string;
  socialLinks: SocialMedia;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  addressAr: string;
  workingHours: string;
  workingHoursAr: string;
}

export interface SocialMedia {
  facebook?: string;
  twitter?: string;
  linkedin?: string;
  instagram?: string;
  github?: string;
  youtube?: string;
}

// Message types
export interface Message {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  status: 'unread' | 'read' | 'replied' | 'archived';
  priority: 'low' | 'medium' | 'high';
  source: 'contact-form' | 'email' | 'phone' | 'social';
  createdAt: Date;
  readAt?: Date;
  repliedAt?: Date;
}

// Dashboard Stats types
export interface DashboardStats {
  totalProjects: number;
  activeProjects: number;
  completedProjects: number;
  totalServices: number;
  totalMessages: number;
  unreadMessages: number;
  totalExpertise: number;
  monthlyVisitors: number;
  conversionRate: number;
  revenue: number;
}

// Chart data types
export interface ChartData {
  name: string;
  value: number;
  color?: string;
}

export interface TimeSeriesData {
  date: string;
  value: number;
  label?: string;
}

// Form types
export interface ProjectFormData {
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  image: File | string;
  technologies: string[];
  status: Project['status'];
  clientName?: string;
  startDate: string;
  endDate?: string;
  projectUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface ServiceFormData {
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  icon: string;
  price?: number;
  duration?: string;
  features: string[];
  featuresAr: string[];
  active: boolean;
}

export interface ExpertiseFormData {
  name: string;
  nameAr: string;
  category: string;
  categoryAr: string;
  level: Expertise['level'];
  yearsOfExperience: number;
  icon?: string;
  description?: string;
  descriptionAr?: string;
  projects: string[];
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// Filter and Sort types
export interface FilterOptions {
  status?: string;
  category?: string;
  dateRange?: {
    start: Date;
    end: Date;
  };
  search?: string;
}

export interface SortOptions {
  field: string;
  direction: 'asc' | 'desc';
}

// Language types
export type Language = 'en' | 'ar';

export interface LanguageContent {
  en: string;
  ar: string;
}

// Navigation types
export interface NavItem {
  id: string;
  label: string;
  labelAr: string;
  path: string;
  icon: string;
  children?: NavItem[];
}

// Theme types
export type Theme = 'light' | 'dark' | 'system';

// Notification types
export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

// Modal types
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

// Table types
export interface TableColumn<T> {
  key: keyof T;
  label: string;
  sortable?: boolean;
  render?: (value: any, row: T) => React.ReactNode;
  width?: string;
}

export interface TableProps<T> {
  data: T[];
  columns: TableColumn<T>[];
  loading?: boolean;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    onPageChange: (page: number) => void;
  };
  sorting?: {
    field: keyof T;
    direction: 'asc' | 'desc';
    onSort: (field: keyof T) => void;
  };
  selection?: {
    selectedIds: string[];
    onSelect: (ids: string[]) => void;
  };
}