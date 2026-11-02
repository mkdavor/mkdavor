const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const SITE_URL = (rawSiteUrl || "https://davordenikj.com").replace(
  /\/+$/,
  "",
);

export const SITE_NAME = "Davor Denikj";
export const SITE_TITLE = "Davor Denikj | Certified Software Architect (iSAQB CPSA-F)";
export const SITE_DESCRIPTION =
  "Davor Denikj is an iSAQB CPSA-F certified software architect and Staff Software Engineer at Xempus, with 13+ years in .NET, Swift, backend and cloud systems.";
export const SITE_TITLE_DE = "Davor Denikj | Zertifizierter Softwarearchitekt (iSAQB CPSA-F)";
export const SITE_DESCRIPTION_DE =
  "Davor Denikj ist zertifizierter Softwarearchitekt (iSAQB CPSA-F) und Staff Software Engineer bei Xempus mit über 13 Jahren Erfahrung in .NET, Swift und Cloud.";

export const SITE_KEYWORDS = [
  "Davor Denikj",
  "Staff Software Engineer",
  ".NET",
  "C#",
  "Swift",
  "SwiftUI",
  "Mobile Architecture",
  "Backend Architecture",
  "Software Architect",
  "Certified Software Architect",
  "iSAQB CPSA-F",
  "Certified Professional for Software Architecture",
  "Kubernetes",
  "Docker",
  "Azure DevOps",
  "Portfolio",
];

export const SITE_KEYWORDS_DE = [
  "Davor Denikj",
  "Staff Software Engineer",
  ".NET",
  "C#",
  "Swift",
  "SwiftUI",
  "Mobile-Architektur",
  "Backend-Architektur",
  "Softwarearchitekt",
  "Zertifizierter Softwarearchitekt",
  "iSAQB CPSA-F",
  "Kubernetes",
  "Docker",
  "Azure DevOps",
  "Portfolio",
];
