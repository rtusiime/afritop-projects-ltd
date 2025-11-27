import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
  details: string[];
}

export interface ExecutiveProfile {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface StatProps {
  value: string;
  label: string;
}

export interface ProjectCategory {
  id: string;
  name: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  status: 'completed' | 'ongoing';
  image: string;
  gallery?: string[];
  location: string;
  client?: string;
  duration?: string;
  year?: string;
  description: string;
  scope: string[];
  highlights?: string[];
}