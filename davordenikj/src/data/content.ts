import { assetUrl } from "./assetUrl";
import type { EducationItem, Project, SocialLink } from "./types";

export const profile = {
  avatar: assetUrl("me.png"),
  avatarAlt: "Davor Denikj",
  role: "Lead Software Engineer",
  name: "Davor Denikj",
  subtitle: ".NET, Swift, Mobile, Backend and Cloud Systems",
  summary:
    "I'm a Lead Software Engineer specializing in .NET, Swift, and cloud-native systems. For more than 12 years I've been designing and building backend platforms and mobile applications while leading engineering teams and defining software architecture. I believe great software is built by strong teams, where collaboration, knowledge sharing, and continuous learning are just as important as technical excellence. I enjoy turning complex technical challenges into simple, scalable solutions that are built to last.",
};

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/davordenikj",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
    openInNewTab: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/mkdavor",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    openInNewTab: true,
  },
  {
    label: "CV",
    href: assetUrl("Davor-Denikj-CV-English.pdf"),
    usesDocumentIcon: true,
    downloadFileName: "Davor-Denikj-CV-English.pdf",
    openInNewTab: false,
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
      "Digital business card SaaS platform focused on scalable cloud architecture and modern web technologies.",
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
];

export const githubActivity = {
  chartUrl: "https://ghchart.rshah.org/0071e3/mkdavor",
  chartAlt: "GitHub contribution chart for mkdavor",
  fallbackUrl: "https://github.com/mkdavor",
  fallbackLabel: "View GitHub activity on github.com/mkdavor",
};
