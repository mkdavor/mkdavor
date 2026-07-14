import { assetUrl } from "./assetUrl";
import type { EducationItem, Project, SocialLink } from "./types";

export const profile = {
  avatar: assetUrl("me.png"),
  avatarAlt: "Davor Denikj",
  role: "Lead Software Engineer",
  name: "Davor Denikj",
  subtitle: ".NET, Swift, Mobile, Backend and Cloud Systems",
  location: "Nuremberg, Germany",
  availability: "Open to suitable remote and hybrid opportunities",
  shortSummary:
    "I design and deliver production software across backend, mobile, cloud, and DevOps - while leading the teams that build it.",
  summary:
    "Lead Software Engineer with 12+ years of experience designing, architecting, and delivering backend and mobile applications using .NET and Swift. Proven experience leading engineering teams and building scalable production systems from concept to release, with a strong focus on clean architecture, long-term maintainability, and business-driven technical decisions.",
};

export const careerHighlights = [
  "12+ years of software engineering experience",
  "Led engineering teams of up to five people",
  "Led complex software initiatives from architecture through production",
  "Delivered products across backend, mobile, cloud, and DevOps",
  "Built software for healthcare, education, insurance, and media",
];

export const leadershipHighlights = [
  "Technical direction and architecture across mobile and backend systems",
  "Mentoring, code reviews, coding standards, and engineering practices",
  "Senior-level technical interviews and candidate assessment",
  "Cross-team coordination from product direction through release and operation",
  "Hands-on delivery of critical features and resolution of complex technical challenges",
];

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
    slug: "mk-live-radio",
    name: "MK Live Radio",
    tagline: "Macedonian radio, available worldwide",
    description:
      "Independently developed and maintained iOS and Android app streaming 70+ Macedonian radio stations worldwide.",
    role: "Solo developer and maintainer",
    status: "Live and actively maintained",
    purpose:
      "A mobile app that gives listeners around the world one place to stream more than 70 Macedonian radio stations.",
    differentiators: [
      "One independently delivered product across native iOS and Android",
      "A focused catalogue of 70+ Macedonian radio stations for a worldwide audience",
      "Direct station sharing through universal links",
      "Helps Macedonian listeners abroad stay connected to stations from home",
    ],
    features: [
      "Live radio streaming",
      "Native iOS and Android applications",
      "Apple CarPlay support",
      "Modern iOS Liquid Glass design",
      "Shareable universal links",
      "Firebase Analytics and AdMob integration",
    ],
    architecture: [
      "Native Swift application for iOS",
      "Native Kotlin application for Android",
      "Independent product ownership, release, and ongoing maintenance",
    ],
    technologies: ["Swift", "iOS", "Kotlin", "Android", "Firebase Analytics", "AdMob"],
    website: "https://mkliveradio.app",
    websiteLabel: "mkliveradio.app",
    logo: assetUrl("mklive-radio-logo.png"),
    logoAlt: "MK Live Radio logo",
  },
  {
    id: "tomato-cards",
    slug: "tomato-cards",
    name: "Tomato Cards",
    tagline: "Your professional identity, in one link.",
    description:
      "A digital identity platform that helps individuals and teams present themselves consistently and share their details anywhere.",
    role: "Independent product builder",
    status: "In development",
    purpose:
      "A B2C and B2B SaaS platform for creating and sharing digital business cards with individual and company branding.",
    differentiators: [
      "Customizable digital cards with a design for every person and brand",
      "Professional email signatures that match each identity",
      "Custom shareable URLs, mobile wallet passes, and effortless sharing",
      "Built-in analytics for tracking card views and engagement",
    ],
    features: [
      "Digital business cards for individuals and organizations",
      "Custom shareable URLs and branding",
      "Professional email signatures",
      "Card views and engagement statistics",
      "Subscription model",
      "Mobile wallet integration",
    ],
    architecture: [
      "End-to-end ownership as sole developer, from product concept and architecture through implementation, infrastructure, and delivery",
      ".NET 10 backend and API platform",
      "Containerized, self-hosted Kubernetes infrastructure on Hetzner",
      "Identity and access management with ZITADEL",
      "Cloudflare R2 object storage and Hetzner hosting",
    ],
    technologies: [
      ".NET 10",
      "Kubernetes · Self-hosted",
      "IAM · ZITADEL",
      "Cloudflare R2",
      "Hetzner",
    ],
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
  chartUrl: "https://ghchart.rshah.org/ff6347/mkdavor",
  chartAlt: "GitHub contribution chart for mkdavor",
  fallbackUrl: "https://github.com/mkdavor",
  fallbackLabel: "View GitHub activity on github.com/mkdavor",
};
