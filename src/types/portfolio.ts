export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  location: string;
  achievements: string[];
  techStack: string[];
}

export interface Project {
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  architecture: string;
  stack: string[];
  impact: string;
  metrics: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Philosophy {
  title: string;
  description: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: 'email' | 'github' | 'linkedin';
}

export interface StatBadge {
  value: string;
  label: string;
}

export interface PortfolioContent {
  name: string;
  title: string;
  tagline: string;
  location: string;
  experienceYears: string;
  currentCompany: string;
  about: string[];
  stats: StatBadge[];
  skills: SkillGroup[];
  experience: Experience[];
  projects: Project[];
  philosophy: Philosophy[];
  social: SocialLink[];
  email: string;
  resumeUrl?: string;
}
