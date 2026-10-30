export type CategoryKey =
  | 'all'
  | 'saas'
  | 'dashboard'
  | 'fintech'
  | 'ecommerce'
  | 'app-design'
  | 'healthcare';

export type ViewType = 'home' | 'showcase' | 'profile';

export type ThemeMode = 'dark' | 'light';

export interface Project {
  id: string;
  category: CategoryKey;
  title: string;
  subtitle: string;
  client: string;
  year: string;
  catLabel: string;
  challenge: string;
  solution: string;
  tech: string;
  roi: string;
  roiPills: string[];
  image: string;
  caseStudyUrl?: string;
  prototypeUrl?: string;
  liveUrl?: string;
  figmaUrl?: string;
}

export interface CategoryMetadata {
  title: string;
  kicker: string;
  count: string;
  desc: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

export interface ExperienceRole {
  title: string;
  period: string;
  highlights: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  location: string;
  period: string;
  tenureBadge: string;
  isCurrent?: boolean;
  progressionNote?: string;
  roleTitle?: string;
  highlights?: string[];
  subroles?: ExperienceRole[];
  tags: string[];
}

export interface SkillCategory {
  id: string;
  number: string;
  title: string;
  description: string;
  skills: string[];
}

export interface Certification {
  id: string;
  title: string;
  institute: string;
  year: string;
}

export interface Award {
  id: string;
  title: string;
  org: string;
  year: string;
  description: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
