export type Skill = {
  name: string;
  icon: string;
  alt: string;
};

export type SkillGroup = {
  name: string;
  items: string[];
};

export type Language = {
  name: string;
  level: string;
  flagUrl: string;
  flagAlt: string;
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  summary: string;
  website: string;
  websiteLabel: string;
  details: string[];
  technologies: string[];
  intro?: string;
  detailsHeading?: string;
  logo?: string;
};

export type SocialLink = {
  label: string;
  href: string;
  iconUrl?: string;
  usesDocumentIcon?: boolean;
  downloadFileName?: string;
  openInNewTab?: boolean;
};

export type Project = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  role: string;
  status: string;
  purpose: string;
  differentiators: string[];
  features: string[];
  architecture: string[];
  technologies: string[];
  productType: string;
  applicationCategory: string;
  operatingSystem: string;
  website: string;
  websiteLabel: string;
  logo: string;
  logoAlt: string;
  logoRounded?: boolean;
};

export type EducationItem = {
  id: string;
  title: string;
  institution: string;
  website: string;
  websiteLabel: string;
};
