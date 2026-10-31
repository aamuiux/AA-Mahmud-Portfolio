import type {
  Award,
  CategoryKey,
  CategoryMetadata,
  Certification,
  ExperienceItem,
  FaqItem,
  Project,
  SkillCategory,
  Testimonial,
} from '../types';

import rawProjects from './projects.json';
import rawTestimonials from './testimonials.json';
import rawCertifications from './certifications.json';
import rawAwards from './awards.json';

export const projects: Project[] = rawProjects as Project[];
export const testimonials: Testimonial[] = rawTestimonials as Testimonial[];
export const certifications: Certification[] = rawCertifications as Certification[];
export const awards: Award[] = rawAwards as Award[];

export const categoryMetaMap: Record<CategoryKey, CategoryMetadata> = {
  all: {
    title: 'All Architecture Archetypes',
    kicker: 'Showcase Feed · Flagship Works',
    count: '25 Verified Projects',
    desc: 'Curated collection of 25 enterprise SaaS platforms, high-throughput cockpits, fintech banking suites, e-commerce stores, native mobile apps, and health care platforms engineered for ROI.',
  },
  saas: {
    title: 'SaaS Platforms',
    kicker: 'Archetype 01 · B2B Platforms',
    count: '7 Flagship Platforms',
    desc: 'Enterprise multi-tenant platforms, AI knowledge workspaces, intelligent document AI, hybrid workplace hubs, CPG trade portals, and automated process orchestration suites designed for operational velocity.',
  },
  dashboard: {
    title: 'Dashboard',
    kicker: 'Archetype 02 · Observability & Analytics',
    count: '3 Executive Cockpits',
    desc: 'BAT Peachtree enterprise finance distribution, eBuddy HRM supervisor task performance, and AI Mail autonomous inbox intelligence cockpits.',
  },
  fintech: {
    title: 'Fintech, Banking & MFS',
    kicker: 'Archetype 03 · Financial Infrastructure & Payments',
    count: '6 Verified Platforms',
    desc: 'National payment gateway & checkout engines, merchant KYC onboarding flows, state mobile banking apps, NRB real-time account opening & eKYC, cross-border digital wallets, and corporate cash management suites.',
  },
  ecommerce: {
    title: 'E-Commerce',
    kicker: 'Archetype 04 · High-Conversion Omnichannel Stores',
    count: '2 Flagship Stores',
    desc: 'Omnichannel retail flagships, consumer electronics marketplaces, fashion lifestyle hubs, and seamless checkout funnels engineered for high-volume GMV.',
  },
  'app-design': {
    title: 'Mobile App Design',
    kicker: 'Archetype 05 · Native iOS & Android Systems',
    count: '6 Mobile Products',
    desc: 'High-scale digital wallets, cultural social networks, eBuddy workforce apps, mobile banking portals, clean-energy tracking apps, and SSLCOMMERZ merchant mobile apps.',
  },
  healthcare: {
    title: 'Health Care',
    kicker: 'Archetype 06 · Clinical AI & Patient Portals',
    count: '2 Verified Platforms',
    desc: 'Precision AI immune telemetry, large-scale food fortification portals, remote patient monitoring systems, and clinical healthcare companions built to HIPAA and WCAG standards.',
  },
};

export const archetypeCategories: { key: CategoryKey; label: string; count: number }[] = [
  { key: 'saas', label: 'SaaS Platforms', count: 7 },
  { key: 'dashboard', label: 'Dashboards', count: 3 },
  { key: 'fintech', label: 'Fintech & Banking', count: 6 },
  { key: 'ecommerce', label: 'E-Commerce', count: 2 },
  { key: 'app-design', label: 'App Design', count: 6 },
  { key: 'healthcare', label: 'Health Care', count: 2 },
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-1',
    company: 'Astha IT',
    location: 'Dhaka, BD · Full Time',
    period: 'April 2025 – Present',
    tenureBadge: 'Lead / Team Lead',
    isCurrent: true,
    roleTitle: 'Lead UI UX Designer (Team Lead)',
    highlights: [
      'Played a key role in AI-driven and data-driven decision to convert complex AI & complex workflows: Whiz (ML demand forecasting and promotional planning for multi chain retail and manufacturing), Docomate.ai (LLM document intelligence), TalentX (agentic recruiting automation), and PromptVault (enterprise prompt management, in UAT with Citrin Cooperman).',
      'Designed Collablly SRM platforms, drop supply chain costs upto 20% and boost on-time deliveries 30%.',
      'Contributed to Payra Port by designing operational dashboards and workflow systems.',
    ],
    tags: [
      'AI-Driven UX',
      'Enterprise Platforms',
      'Payra Port Automation',
      'Workflow Systems',
      'Team Lead',
    ],
  },
  {
    id: 'exp-2',
    company: 'SSL Wireless',
    location: 'Dhaka, BD · Full Time',
    period: 'Jan 2017 – April 2025',
    tenureBadge: '8+ Years Tenure',
    progressionNote: '8+ Years Growth · Promoted 2× from UX Engineer to Management',
    subroles: [
      {
        title: 'UX Analyst Manager (Assistant Team Lead)',
        period: 'Jan 2022 – April 2025',
        highlights: [
          'Managed & mentored a team of 5 UI/UX designers, providing guidance on best practices, UX audit, usability testing, and design methodologies.',
          'Defined UX strategy for SSLCOMMERZ, Bangladesh\'s No.1 payment gateway, ensuring alignment with business goals and user needs. Reduced drop rate from 62.4% → 3.14%.',
          'Collaborated with cross-functional teams (PMs, Engineers, Business Leaders) to establish UX workflows and improve user engagement and business goals.',
        ],
      },
      {
        title: 'Senior UX Engineer',
        period: 'Jan 2021 – Dec 2021',
        highlights: [
          'Led UX efforts for fintech and SaaS products, focusing on research-driven UI decisions.',
          'Optimized usability and user flows for SSLCOMMERZ payment systems and revamped SSLCOMMERZ merchant onboarding systems.',
          'Designed “eBuddy” HRM application supporting over 350+ office employees.',
          'Led the creation of a scalable design system, increasing efficiency by 30% and ensuring UI consistency across products.',
        ],
      },
      {
        title: 'UX Engineer',
        period: 'Jan 2017 – Dec 2020',
        highlights: [
          'Designed ‘Fastpay’ (Kurdistan\'s No.1 MFS app), leading to 500K+ users and around 63% increase in onboarding completion rates (Kurdistan\'s, Jul 2019 – Sep 2019).',
          'Conducted UX Audits following Usability & WCAG accessibility guidelines.',
          'Revamped an iSMS portal, resulting in a 30% increase in user engagement.',
        ],
      },
    ],
    tags: [
      'SSLCOMMERZ',
      'Payment Gateway',
      'Fintech & SaaS',
      'UX Strategy',
      'eBuddy HRM',
      'Design Systems',
      'FastPay MFS',
      'Mentorship',
    ],
  },
  {
    id: 'exp-3',
    company: 'Next Generation Communication',
    location: 'Erbil, Iraq · (Business Visit – 5 Months)',
    period: 'May 2019 – Sep 2019',
    tenureBadge: 'Fintech Engagement',
    roleTitle: 'UX Engineer',
    highlights: [
      'Designed key UX flows for ‘FastPay’, Iraq\'s leading #1 mobile wallet.',
      'Worked closely on-site with regional stakeholders on fintech product experiences.',
      'Contributed to improving usability and user retention in high-frequency transaction journeys.',
    ],
    tags: ['FastPay Mobile Wallet', 'Fintech UX', 'High-Frequency Transactions', 'Erbil, Iraq'],
  },
  {
    id: 'exp-4',
    company: 'Oxford Immune Algorithmics',
    location: 'United Kingdom · Remote · Part Time',
    period: 'Jan 2021 – Mar 2022',
    tenureBadge: 'Part-Time · HealthTech',
    roleTitle: 'UI/UX Designer (Part-Time / Contract)',
    highlights: [
      'Redesigned healthcare app “Algocyte”, which directly contributed to securing their 2nd round of funding.',
      'Conducted rigorous UX Audits adhering to Usability, GDPR consent, and WCAG accessibility guidelines.',
    ],
    tags: [
      'Part-Time / Contract',
      'Algocyte Healthcare',
      'HealthTech AI',
      'UX Audit',
      'GDPR Consent',
      'WCAG Accessibility',
      'Remote UK',
    ],
  },
  {
    id: 'exp-5',
    company: 'MCC Ltd.',
    location: 'Dhaka, BD · Full Time',
    period: 'Jan 2015 – Dec 2016',
    tenureBadge: 'Software & UX',
    roleTitle: 'Software Designer and Developer',
    highlights: [
      'Designed ‘Ghurbo’, a trip-booking platform, significantly improving travel booking efficiency.',
      'Built SaaS-based HRM solutions actively used by 140+ office employees.',
    ],
    tags: ['Ghurbo Travel Platform', 'SaaS HRM', 'Software Design & Dev', 'Dhaka, BD'],
  },
  {
    id: 'exp-6',
    company: 'RMS IT.',
    location: 'Dhaka, BD · Full Time',
    period: 'Oct 2014 – Dec 2015',
    tenureBadge: 'Web & Theme Dev',
    roleTitle: 'Web Developer and Designer',
    highlights: [
      'Designed Themeforest wordpress themes and templates, increase sells and reduce support.',
      'Develop responsive and device friendly web design.',
    ],
    tags: ['Themeforest', 'WordPress Themes', 'Responsive Web Design', 'UI Design & Development', 'Dhaka, BD'],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'skill-cat-1',
    number: '01',
    title: 'AI & Cognitive Interface Design',
    description:
      'Architecting cognitive scaffolding for probabilistic models, taming hallucination, and engineering intuitive latency recovery.',
    skills: [
      'AI-Assisted Design',
      'Generative AI Tools',
      'AI-Powered UI/UX Workflows',
      'AI-Driven Research & Ideation',
      'Rapid Prototyping',
      'Design Automation',
      'AI Output Evaluation',
      'Human-Centered AI Design',
    ],
  },
  {
    id: 'skill-cat-2',
    number: '02',
    title: 'UI/UX Design Systems & Execution',
    description:
      'Zero-drift design-to-code execution across modern design systems, token architectures, and responsive micro-interactions.',
    skills: [
      'Figma Variables & Tokens Studio',
      'Design Tokens (W3C Spec)',
      'Interactive Design Systems',
      'Accessibility (WCAG AA)',
      'Component Architecture',
      'Micro-Interactions & Motion',
      'Dev Handoff Automation',
      'Tailwind Design Tokens',
      'State Machines & Logic Flows',
    ],
  },
  {
    id: 'skill-cat-3',
    number: '03',
    title: 'Strategy, ROI & Quantitative UX',
    description:
      'Connecting interface architecture directly to ARR growth, user retention curves, and developer velocity.',
    skills: [
      'Cognitive Friction Auditing',
      'Retention & ARR Optimization',
      'High-Density Telemetry',
      'Developer Handoff Automation',
      'Design Guild Governance',
      'WCAG 2.1 AA Accessibility',
      'Performance Auditing (Core Web Vitals)',
    ],
  },
];

export const faqsData: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What is your design approach for 0-to-1 products vs. scaling legacy enterprise platforms?',
    answer:
      'For zero-to-one ventures, I operate in rapid discovery and prototyping cycles: aligning directly with founders, building interactive wireframes within 5–7 days, and running user validation tests before a single line of backend code is committed. For scaling enterprise systems, I focus on design system governance, component tokens, eliminating developer ambiguity, and incremental modular migrations with measurable retention metrics.',
  },
  {
    id: 'faq-2',
    question: 'How do you measure and prove the business impact (ROI) of UI/UX design?',
    answer:
      'Every design decision connects directly to business metrics. In my career, this has translated into cutting merchant checkout drop-off from 62.4% down to 3.14% at SSLCOMMERZ, boosting onboarding completion by 63% on FastPay (500K+ users), and accelerating design-to-development engineering velocity by 30% through comprehensive design token systems.',
  },
  {
    id: 'faq-3',
    question: 'How do you partner and collaborate with Product Managers and Engineering squads?',
    answer:
      'I bridge the gap between Figma and production code. By maintaining exhaustive component state matrices (empty, loading, edge, error states), responsive constraints, and design tokens aligned with frontend frameworks (Tailwind, React), engineers spend zero time guessing paddings or behaviors, halving review iterations.',
  },
  {
    id: 'faq-4',
    question: 'What engagement models do you support (Full-Time, Fractional, or Advisory)?',
    answer:
      'I am available for Lead UI/UX Designer full-time positions, Fractional Design Leadership (10–20 hours/week) for venture-backed startups, and targeted 4–8 week Design Sprints focused on product discovery, redesigns, or design systems.',
  },
];

export const clientLogos = [
  'Astha IT',
  'SSLCOMMERZ',
  'British American Tobacco',
  'BASIC Bank',
  'Apex Footwear',
  'FastPay',
  'Othership',
  'Caboodle',
  'Payra Port',
  'Premier Bank',
];
