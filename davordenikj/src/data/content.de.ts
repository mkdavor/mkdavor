import { assetUrl } from "./assetUrl";
import type { EducationItem, Project } from "./types";

export const profileDe = {
  avatar: assetUrl("me.png"),
  avatarAlt: "Davor Denikj",
  role: "Lead Software Engineer",
  name: "Davor Denikj",
  subtitle: ".NET, Swift, Mobile-, Backend- und Cloud-Systeme",
  location: "Nürnberg, Deutschland",
  availability: "Offen für passende Vor-Ort-, Hybrid- und Remote-Positionen",
  shortSummary:
    "Ich konzipiere und realisiere produktive Softwarelösungen für Backend, Mobile, Cloud und DevOps – und führe die Teams, die sie entwickeln.",
  summary:
    "Lead Software Engineer mit über 12 Jahren Erfahrung in Konzeption, Architektur und Umsetzung von Backend- und mobilen Anwendungen mit .NET und Swift. Nachweisliche Erfahrung in der Führung von Entwicklungsteams und im Aufbau skalierbarer Produktivsysteme von der Idee bis zum Release – mit klarem Fokus auf Clean Architecture, langfristige Wartbarkeit und geschäftsorientierte technische Entscheidungen.",
};

export const careerHighlightsDe = [
  "Über 12 Jahre Erfahrung in der Softwareentwicklung",
  "Entwicklungsteams mit bis zu fünf Personen geführt",
  "Komplexe Softwarevorhaben von der Architektur bis zum Produktivbetrieb geleitet",
  "Produkte in den Bereichen Backend, Mobile, Cloud und DevOps umgesetzt",
  "Software für Bildung, Gesundheit, Versicherungen und Medien entwickelt",
];

export const leadershipHighlightsDe = [
  "Technische Ausrichtung und Architektur für mobile und Backend-Systeme",
  "Mentoring, Code-Reviews, Entwicklungsstandards und Best Practices",
  "Technische Interviews und Bewertung von Senior-Kandidaten",
  "Teamübergreifende Koordination von der Produktstrategie bis zu Release und Betrieb",
  "Praktische Umsetzung kritischer Funktionen und Lösung komplexer technischer Herausforderungen",
];

export const projectsDe: Project[] = [
  {
    id: "mklive-radio",
    slug: "mk-live-radio",
    name: "MK Live Radio",
    tagline: "Mazedonisches Radio – weltweit verfügbar",
    description:
      "Eigenständig entwickelte und betreute iOS- und Android-App, die weltweit mehr als 70 mazedonische Radiosender streamt.",
    role: "Alleiniger Entwickler und Betreiber",
    status: "Live und aktiv betreut",
    purpose:
      "Eine mobile App, mit der Hörerinnen und Hörer weltweit mehr als 70 mazedonische Radiosender an einem Ort streamen können.",
    differentiators: [
      "Ein eigenständig entwickeltes Produkt für natives iOS und Android",
      "Gezielte Auswahl von über 70 mazedonischen Radiosendern für ein weltweites Publikum",
      "Direktes Teilen von Sendern über Universal Links",
      "Hilft im Ausland lebenden Mazedoniern, mit Radiosendern aus der Heimat verbunden zu bleiben",
    ],
    features: [
      "Live-Radio-Streaming",
      "Native Anwendungen für iOS und Android",
      "Unterstützung für Apple CarPlay",
      "Modernes iOS-Design mit Liquid Glass",
      "Teilbare Universal Links",
      "Integration von Firebase Analytics und AdMob",
    ],
    architecture: [
      "Native Swift-Anwendung für iOS",
      "Native Kotlin-Anwendung für Android",
      "Eigenständige Produktverantwortung, Veröffentlichung und laufende Betreuung",
    ],
    technologies: ["Swift", "iOS", "Kotlin", "Android", "Firebase Analytics", "AdMob"],
    website: "https://mkliveradio.app",
    websiteLabel: "mkliveradio.app",
    logo: assetUrl("mklive-radio-logo.png"),
    logoAlt: "Logo von MK Live Radio",
  },
  {
    id: "tomato-cards",
    slug: "tomato-cards",
    name: "Tomato Cards",
    tagline: "Ihre professionelle Identität in einem Link.",
    description:
      "Eine Plattform für digitale Identitäten, mit der Einzelpersonen und Teams sich einheitlich präsentieren und ihre Kontaktdaten überall teilen können.",
    role: "Unabhängiger Produktentwickler",
    status: "In Entwicklung",
    purpose:
      "Eine B2C- und B2B-SaaS-Plattform zum Erstellen und Teilen digitaler Visitenkarten mit individuellem oder unternehmensspezifischem Branding.",
    differentiators: [
      "Anpassbare digitale Karten für jede Person und jede Marke",
      "Professionelle E-Mail-Signaturen passend zur jeweiligen Identität",
      "Eigene teilbare URLs, mobile Wallet-Pässe und unkompliziertes Teilen",
      "Integrierte Analysen für Kartenaufrufe und Interaktionen",
    ],
    features: [
      "Digitale Visitenkarten für Einzelpersonen und Organisationen",
      "Individuelle URLs und eigenes Branding",
      "Professionelle E-Mail-Signaturen",
      "Statistiken zu Kartenaufrufen und Interaktionen",
      "Abonnementmodell",
      "Integration in mobile Wallets",
    ],
    architecture: [
      "End-to-End-Verantwortung als alleiniger Entwickler – von Produktidee und Architektur bis zu Umsetzung, Infrastruktur und Auslieferung",
      ".NET-10-Backend und API-Plattform",
      "Containerisierte, selbst betriebene Kubernetes-Infrastruktur bei Hetzner",
      "Identity- und Access-Management mit ZITADEL",
      "Cloudflare-R2-Objektspeicher und Hosting bei Hetzner",
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
    logoAlt: "Logo von Tomato Cards",
  },
];

export const educationItemsDe: EducationItem[] = [
  {
    id: "finki",
    title: "Bachelor of Science, Informatik und Ingenieurwesen",
    institution:
      "Fakultät für Informatik und Ingenieurwesen, Universität Hl. Kyrill und Method in Skopje",
    website: "https://www.finki.ukim.mk/en",
    websiteLabel: "finki.ukim.mk",
  },
];
