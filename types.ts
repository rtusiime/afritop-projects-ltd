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