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
    id: "deutschland-heute",
    slug: "deutschland-heute",
    name: "Deutschland Heute",
    tagline: "Alles, was heute zählt – in einer ruhigen App",
    description:
      "Eine native iPhone-App, die Feiertage, Schulferien, Brückentage, Sonnenzeiten, aktuelle Kraftstoffpreise, ein tägliches Zitat und historische Ereignisse des Tages vereint.",
    role: "Alleiniger Entwickler und Produktverantwortlicher",
    status: "Live im App Store",
    purpose:
      "Ein fokussierter Alltagsbegleiter für Deutschland, der verstreute Kalender-, Ferien-, Tageslicht- und Kraftstoffpreis-Informationen in einer ortsbezogenen Übersicht zusammenführt.",
    differentiators: [
      "Regionale Informationen für alle 16 Bundesländer",
      "Brückentage-Planer für mehr freie Zeit mit wenigen Urlaubstagen",
      "Kraftstoffpreisvergleich in der Nähe mit direkter Route in Apple Karten",
      "Eine offline verfügbare Tagessammlung mit einem ausgewählten Zitat und fünf historischen Ereignissen für jedes Kalenderdatum",
      "Kein Konto erforderlich; zentrale Kalender- und Sonnenzeitberechnungen funktionieren offline",
    ],
    features: [
      "Tagesüberblick mit Datum, Kalenderwoche und Jahresfortschritt",
      "Feiertage, Schulferien und passende Brückentag-Chancen",
      "Lokaler Sonnenaufgang, Sonnenuntergang und Tageslichtdauer",
      "Preise für Super E5, Super E10 und Diesel in der Umgebung",
      "„Zitat des Tages“ mit Autor und integrierter Teilen-Funktion",
      "„Heute in der Geschichte“ mit fünf Ereignissen nach Jahr und Land",
      "Konfigurierbare Home-Screen-Widgets, darunter eigene Zitat- und Geschichts-Widgets",
      "Einmaliges Pro-Upgrade ohne Abonnement",
    ],
    architecture: [
      "Native SwiftUI-Anwendung für das iPhone mit modularer, funktionsorientierter Struktur",
      "WidgetKit- und App-Intents-Erweiterung mit gemeinsamem App-Group-Zustand",
      "Lokale Kalender- und Sonnenzeitberechnungen mit optionaler Standortunterstützung über Core Location",
      "Gebündelte Offline-Inhalte für 366 Kalenderdaten mit 1.830 Zitaten und 1.830 historischen Ereignissen",
      "Aktuelle Kraftstoffdaten von Tankerkönig und StoreKit 2 für den einmaligen Pro-Kauf",
      "Firebase Analytics und AdMob-Einwilligungsverwaltung",
    ],
    technologies: [
      "Swift",
      "SwiftUI",
      "iOS",
      "WidgetKit",
      "StoreKit 2",
      "Core Location",
      "Firebase Analytics",
      "AdMob",
    ],
    productType: "Native iPhone-App",
    applicationCategory: "LifestyleApplication",
    operatingSystem: "iOS",
    website: "https://www.deutschlandheuteapp.de",
    websiteLabel: "deutschlandheuteapp.de",
    logo: assetUrl("deutschland-heute-app-icon.png"),
    logoAlt: "App-Symbol von Deutschland Heute",
    logoRounded: true,
  },
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
    productType: "Native Mobile-App",
    applicationCategory: "MultimediaApplication",
    operatingSystem: "iOS, Android",
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
    productType: "B2C- und B2B-SaaS",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
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
