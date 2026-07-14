const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const SITE_URL = (rawSiteUrl || "https://davordenikj.com").replace(
  /\/+$/,
  "",
);

export const SITE_NAME = "Davor Denikj";
export const SITE_TITLE = "Davor Denikj - Lead Software Engineer | .NET, Swift & Cloud";
export const SITE_DESCRIPTION =
  "Lead Software Engineer in Nuremberg with 12+ years of experience in .NET, Swift, mobile, backend, cloud systems, and hands-on technical leadership.";

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
