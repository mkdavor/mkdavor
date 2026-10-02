const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const SITE_URL = (rawSiteUrl || "https://davordenikj.com").replace(
  /\/+$/,
  "",
);

export const SITE_NAME = "Davor Denikj";
export const SITE_TITLE = "Davor Denikj - Staff Software Engineer | .NET, Swift & Cloud";
export const SITE_DESCRIPTION =
  "Staff Software Engineer at Xempus, based in Nuremberg. Building AI solutions for insurance through forward-deployed engineering, backed by 12+ years in software.";

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
  "Kubernetes",
  "Docker",
  "Azure DevOps",
  "Portfolio",
];
