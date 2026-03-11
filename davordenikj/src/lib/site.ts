const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const SITE_URL = (rawSiteUrl || "https://davordenikj.com").replace(
  /\/+$/,
  "",
);

export const SITE_NAME = "Davor Denikj Portfolio";
export const SITE_TITLE = "Davor Denikj | Lead Software Engineer";
export const SITE_DESCRIPTION =
  "Lead Software Engineer with 12+ years of experience in .NET, Swift, mobile architecture, backend systems, DevOps, and scalable product delivery.";

export const SITE_KEYWORDS = [
  "Davor Denikj",
  "Lead Software Engineer",
  ".NET",
  "C#",
  "Swift",
  "SwiftUI",
  "Mobile Architecture",
  "Backend Architecture",
  "Software Architect",
  "Kubernetes",
  "Docker",
  "Azure DevOps",
  "Portfolio",
];
