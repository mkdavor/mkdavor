export type Skill = {
  name: string;
  icon: string;
  alt: string;
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
  intro?: string;
  detailsHeading?: string;
  logo?: string;
};

export type SocialLink = {
  label: string;
  href: string;
  iconUrl?: string;
  usesDocumentIcon?: boolean;
};

export type Project = {
  id: string;
  name: string;
  description: string;
  website: string;
  websiteLabel: string;
  logo: string;
  logoAlt: string;
};

export type EducationItem = {
  id: string;
  title: string;
  institution: string;
  website: string;
  websiteLabel: string;
};
