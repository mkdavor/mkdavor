import { assetUrl } from "./assetUrl";
import type { EducationItem, Project, SocialLink } from "./types";

export const profile = {
  avatar: assetUrl("me.png"),
  avatarAlt: "Davor Denikj",
  role: "Lead Software Engineer",
  name: "Davor Denikj",
  subtitle: ".NET, Swift, Mobile & Backend Architecture",
  summary:
    "Lead Software Engineer with 12+ years of experience in backend and mobile development, specializing in .NET and Swift. Architect of scalable mobile and backend systems, with proven experience leading cross-functional teams and delivering production-grade applications from concept to release. Strong focus on clean architecture, long-term maintainability, and aligning technical execution with business objectives.",
};

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/davordenikj",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
  },
  {
    label: "GitHub",
    href: "https://github.com/mkdavor",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    label: "CV",
    href: "https://rxresu.me/mkdavor/davor-denikj",
    usesDocumentIcon: true,
  },
];

export const projects: Project[] = [
  {
    id: "mklive-radio",
    name: "MK Live Radio",
    description:
      "Independently developed and maintained iOS and Android app streaming 70+ Macedonian radio stations worldwide.",
    website: "https://mkliveradio.app",
    websiteLabel: "mkliveradio.app",
    logo: assetUrl("mklive-radio-logo.png"),
    logoAlt: "MK Live Radio logo",
  },
  {
    id: "tomato-cards",
    name: "Tomato Cards",
    description:
      "Digital business card SaaS platform focused on scalable backend architecture and modern web technologies.",
    website: "https://tomatocards.com",
    websiteLabel: "tomatocards.com",
    logo: assetUrl("tomatoCardsLogo.svg"),
    logoAlt: "Tomato Cards logo",
  },
];

export const educationItems: EducationItem[] = [
  {
    id: "finki",
    title: "BSc, Computer Science and Engineering",
    institution:
      "Faculty of Computer Science and Engineering, Ss. Cyril and Methodius University of Skopje",
    website: "https://www.finki.ukim.mk/en",
    websiteLabel: "finki.ukim.mk",
  },
  {
    id: "feit",
    title: "Electrical Engineering and Information Technologies",
    institution:
      "Faculty of Electrical Engineering and Information Technologies, UKIM Skopje",
    website: "https://feit.ukim.edu.mk/en/",
    websiteLabel: "feit.ukim.edu.mk",
  },
];

export const githubActivity = {
  chartUrl: "https://ghchart.rshah.org/0071e3/mkdavor",
  chartAlt: "GitHub contribution chart for mkdavor",
  fallbackUrl: "https://github.com/mkdavor",
  fallbackLabel: "View GitHub activity on github.com/mkdavor",
};
