export type ViewType = 'home' | 'showcase' | 'profile';

export type CategoryKey = 'all' | 'saas' | 'dashboard' | 'fintech' | 'ecommerce' | 'app-design' | 'healthcare';

export type ThemeMode = 'light' | 'dark';

export interface BriefData {
  title: string;
  client: string;
  year: string;
  roi: string;
  catLabel: string;
  challenge: string;
  solution: string;
  tech: string;
  figmaUrl?: string;
  liveUrl?: string;
}

export interface CategoryMetaItem {
  title: string;
  kicker: string;
  count: string;
  desc: string;
}

export type CategoryMetadata = CategoryMetaItem;

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  client: string;
  year: string;
  category: CategoryKey | string;
  roi: string;
  roiPills?: string[];
  pills?: string[];
  catLabel?: string;
  challenge?: string;
  solution?: string;
  tech?: string | string[];
  techStack?: string[];
  image?: string;
  caseStudyUrl?: string;
  prototypeUrl?: string;
  figmaUrl?: string;
  liveUrl?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name?: string;
  author?: string;
  role?: string;
  title?: string;
  company?: string;
  avatar?: string;
  image?: string;
}

export interface Certification {
  id: string;
  title: string;
  institute?: string;
  issuer?: string;
  year: string;
  badge?: string;
}

export interface Award {
  id: string;
  title: string;
  org?: string;
  organization?: string;
  year: string;
  description: string;
}

export interface ExperienceItem {
  id?: string;
  company: string;
  role?: string;
  roleTitle?: string;
  location?: string;
  period: string;
  tenureBadge?: string;
  description?: string;
  isCurrent?: boolean;
  progressionNote?: string;
  highlights?: string[];
  tags?: string[];
  subroles?: { role?: string; title?: string; period: string; details?: string; highlights?: string[] }[];
}

export interface SkillCategory {
  id?: string;
  number?: string;
  num?: string;
  title: string;
  description?: string;
  skills: string[];
}

export interface FaqItem {
  id?: string;
  question: string;
  answer: string;
}
