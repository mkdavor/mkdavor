import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  IoArrowForward,
  IoDocumentTextOutline,
  IoLocationOutline,
  IoLogoGithub,
  IoLogoLinkedin,
} from "react-icons/io5";
import {
  SiApple,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiKubernetes,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import { JsonLd } from "../components/JsonLd";
import { ProjectCard } from "../components/ProjectCard";
import { ExperienceList } from "../components/ExperienceList";
import {
  careerHighlights,
  educationItems,
  leadershipHighlights,
  profile,
  projects,
} from "../data/content";
import {
  careerHighlightsDe,
  educationItemsDe,
  leadershipHighlightsDe,
  profileDe,
  projectsDe,
} from "../data/content.de";
import { experiencesDe } from "../data/experiences.de";
import { languages } from "../data/languages";
import { languagesDe } from "../data/languages.de";
import { skillGroups, skills } from "../data/skills";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from "../lib/site";

export const metadata: Metadata = {
  title: { absolute: SITE_TITLE },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
    languages: { en: "/", de: "/de", "x-default": "/" },
  },
  openGraph: {
    url: "/",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/opengraph-image"],
  },
};

const profileJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profile`,
      url: SITE_URL,
      name: SITE_TITLE,
      description: SITE_DESCRIPTION,
      mainEntity: { "@id": `${SITE_URL}/#person` },
      isPartOf: { "@id": `${SITE_URL}/#website` },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: profile.name,
      url: SITE_URL,
      image: `${SITE_URL}${profile.avatar}`,
      jobTitle: profile.role,
      description: profile.summary,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nuremberg",
        addressCountry: "DE",
      },
      worksFor: {
        "@type": "Organization",
        name: "Landesmedienzentrum Baden-Württemberg",
        url: "https://lmz-bw.de",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Ss. Cyril and Methodius University of Skopje",
        url: "https://www.ukim.edu.mk/en_index.php",
      },
      knowsAbout: skillGroups.flatMap((group) => group.items),
      sameAs: ["https://linkedin.com/in/davordenikj", "https://github.com/mkdavor"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      publisher: { "@id": `${SITE_URL}/#person` },
    },
  ],
};

const additionalTechnologyIcons = [
  { name: "iOS", Icon: SiApple, color: "#000000" },
  { name: "Kubernetes", Icon: SiKubernetes, color: "#326CE5" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "HTML", Icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", Icon: SiCss3, color: "#1572B6" },
];

const technologyIconOrder = [
  ".NET",
  "Swift",
  "Docker",
  "Kubernetes",
  "Azure DevOps",
  "Bluetooth LE",
  "PostgreSQL",
  "Keycloak",
  "iOS",
  "React",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
];

const homeCopy = {
  en: {
    profileLabel: "Professional profile",
    heroSubtitle: "12+ years · .NET · Swift · Backend · Cloud",
    factsLabel: "Location and availability",
    experienceButton: "View experience",
    projectsButton: "View projects",
    contact: "Contact",
    profileLinks: "Profile links",
    careerKicker: "Career highlights",
    impactTitle: "Selected impact",
    experienceTitle: "Experience",
    fullCv: "Full CV",
    leadershipKicker: "Hands-on leadership",
    leadershipTitle: "Leading through delivery",
    expertiseKicker: "Technical breadth",
    expertiseTitle: "Core expertise",
    technologyIndex: "Technology index",
    technologyIcons: "Technology icons",
    projectsKicker: "Independent products",
    projectsTitle: "Selected projects",
    educationKicker: "Education",
    educationTitle: "Academic background",
    visitInstitution: "Visit institution",
    languagesKicker: "Communication",
    languagesTitle: "Languages",
    availabilityKicker: "Availability",
    contactTitle: "Let’s work together",
    contactBody: "Based in Nuremberg and open to suitable on-site roles within reasonable commuting distance, as well as hybrid and remote opportunities spanning technical leadership, .NET, mobile, backend, and cloud systems.",
    contactButton: "Contact me",
    githubKicker: "Code and products",
    githubBody: "Follow current product work and public repositories on GitHub.",
    githubLink: "View @mkdavor",
  },
  de: {
    profileLabel: "Berufliches Profil",
    heroSubtitle: "12+ Jahre · .NET · Swift · Backend · Cloud",
    factsLabel: "Standort und Verfügbarkeit",
    experienceButton: "Berufserfahrung",
    projectsButton: "Projekte ansehen",
    contact: "Kontakt",
    profileLinks: "Profile und Lebenslauf",
    careerKicker: "Karriere-Highlights",
    impactTitle: "Ausgewählte Erfolge",
    experienceTitle: "Berufserfahrung",
    fullCv: "Vollständiger Lebenslauf",
    leadershipKicker: "Praxisnahe Führung",
    leadershipTitle: "Führung durch gemeinsame Umsetzung",
    expertiseKicker: "Technische Bandbreite",
    expertiseTitle: "Kernkompetenzen",
    technologyIndex: "Technologieübersicht",
    technologyIcons: "Technologiesymbole",
    projectsKicker: "Eigene Produkte",
    projectsTitle: "Ausgewählte Projekte",
    educationKicker: "Ausbildung",
    educationTitle: "Akademischer Hintergrund",
    visitInstitution: "Website der Hochschule",
    languagesKicker: "Kommunikation",
    languagesTitle: "Sprachen",
    availabilityKicker: "Verfügbarkeit",
    contactTitle: "Lassen Sie uns zusammenarbeiten",
    contactBody: "Ich lebe in Nürnberg und bin offen für passende Positionen vor Ort in zumutbarer Pendeldistanz sowie für Hybrid- und Remote-Positionen in den Bereichen technische Führung, .NET, Mobile, Backend und Cloud.",
    contactButton: "Kontakt aufnehmen",
    githubKicker: "Code und Produkte",
    githubBody: "Aktuelle Produktarbeit und öffentliche Repositories finden Sie auf GitHub.",
    githubLink: "@mkdavor ansehen",
  },
};

const skillGroupNamesDe: Record<string, string> = {
  Backend: "Backend",
  Mobile: "Mobile",
  "Cloud & DevOps": "Cloud & DevOps",
  Frontend: "Frontend",
  "Data & identity": "Daten & Identität",
  "Architecture & practices": "Architektur & Methoden",
};

type HomeContentProps = { locale?: "en" | "de" };

export function HomeContent({ locale = "en" }: HomeContentProps) {
  const isGerman = locale === "de";
  const copy = homeCopy[locale];
  const currentProfile = isGerman ? profileDe : profile;
  const currentCareerHighlights = isGerman ? careerHighlightsDe : careerHighlights;
  const currentLeadershipHighlights = isGerman ? leadershipHighlightsDe : leadershipHighlights;
  const currentProjects = isGerman ? projectsDe : projects;
  const currentEducationItems = isGerman ? educationItemsDe : educationItems;
  const currentLanguages = isGerman ? languagesDe : languages;
  const prefix = isGerman ? "/de" : "";

  return (
    <main id="main-content" className="page">
      <JsonLd data={profileJsonLd} />
      <section className="bento-grid" aria-label={copy.profileLabel}>
        <article className="tile tile-hero">
          <div className="hero-layout">
            <Image
              className="profile-avatar"
              src={currentProfile.avatar}
              alt={currentProfile.avatarAlt}
              width={112}
              height={112}
              sizes="112px"
              priority
            />
            <div>
              <p className="eyebrow">{currentProfile.role}</p>
              <h1>{currentProfile.name}</h1>
              <p className="hero-subtitle">{copy.heroSubtitle}</p>
              <p className="hero-summary">{currentProfile.shortSummary}</p>
              <div className="hero-facts" aria-label={copy.factsLabel}>
                <span><IoLocationOutline aria-hidden="true" /> {currentProfile.location}</span>
                <span className="availability"><i aria-hidden="true" /> {currentProfile.availability}</span>
              </div>
              <div className="button-row">
                <a className="button button-primary" href="#experience">
                  {copy.experienceButton}
                </a>
                <a className="button" href="#projects">
                  {copy.projectsButton}
                </a>
                <Link className="button" href={`${prefix}/contact`}>
                  {copy.contact}
                </Link>
              </div>
              <div className="profile-links" aria-label={copy.profileLinks}>
                <Link href={`${prefix}/cv`}><IoDocumentTextOutline aria-hidden="true" /> HTML CV</Link>
                <a href="https://linkedin.com/in/davordenikj" target="_blank" rel="noreferrer">
                  <IoLogoLinkedin aria-hidden="true" /> LinkedIn
                </a>
                <a href="https://github.com/mkdavor" target="_blank" rel="noreferrer">
                  <IoLogoGithub aria-hidden="true" /> GitHub
                </a>
              </div>
            </div>
          </div>
        </article>

        <article className="tile tile-impact">
          <p className="section-kicker">{copy.careerKicker}</p>
          <h2>{copy.impactTitle}</h2>
          <ul className="impact-list">
            {currentCareerHighlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
          </ul>
        </article>

        <section id="experience" className="tile tile-experience" aria-labelledby="experience-title">
          <div className="section-heading">
            <div>
              <h2 id="experience-title">{copy.experienceTitle}</h2>
            </div>
            <Link className="text-link" href={`${prefix}/cv#experience`}>
              {copy.fullCv} <IoArrowForward aria-hidden="true" />
            </Link>
          </div>
          <ExperienceList items={isGerman ? experiencesDe : undefined} locale={locale} />
        </section>

        <article className="tile tile-leadership">
          <p className="section-kicker">{copy.leadershipKicker}</p>
          <h2>{copy.leadershipTitle}</h2>
          <ul className="compact-list">
            {currentLeadershipHighlights.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </article>

        <article className="tile tile-expertise">
          <p className="section-kicker">{copy.expertiseKicker}</p>
          <h2>{copy.expertiseTitle}</h2>
          <div className="expertise-groups">
            {skillGroups.map((group) => (
              <section key={group.name} aria-labelledby={`skill-${group.name.replaceAll(" ", "-").toLowerCase()}`}>
                <h3 id={`skill-${group.name.replaceAll(" ", "-").toLowerCase()}`}>{isGerman ? skillGroupNamesDe[group.name] : group.name}</h3>
                <p>{group.items.join(" · ")}</p>
              </section>
            ))}
          </div>
          <div className="technology-index">
            <p className="technology-index-label">{copy.technologyIndex}</p>
            <div className="technology-icon-grid" aria-label={copy.technologyIcons}>
              {skills.map((skill) => (
                <span
                  className="technology-icon"
                  title={skill.name}
                  style={{ order: technologyIconOrder.indexOf(skill.name) }}
                  key={skill.name}
                >
                  <Image src={skill.icon} alt={skill.alt} width={24} height={24} />
                </span>
              ))}
              {additionalTechnologyIcons.map(({ name, Icon, color }) => (
                <span
                  className="technology-icon"
                  title={name}
                  aria-label={name}
                  role="img"
                  style={{ color, order: technologyIconOrder.indexOf(name) }}
                  key={name}
                >
                  <Icon aria-hidden="true" />
                </span>
              ))}
            </div>
          </div>
        </article>

        <section id="projects" className="project-section" aria-labelledby="projects-title">
          <div className="section-heading section-heading-wide">
            <div>
              <p className="section-kicker">{copy.projectsKicker}</p>
              <h2 id="projects-title">{copy.projectsTitle}</h2>
            </div>
          </div>
          <div className="project-grid">
            {currentProjects.map((project) => <ProjectCard key={project.id} project={project} locale={locale} />)}
          </div>
        </section>

        <article className="tile tile-education">
          <p className="section-kicker">{copy.educationKicker}</p>
          <h2>{copy.educationTitle}</h2>
          {currentEducationItems.map((item) => (
            <div key={item.id} className="education-item">
              <h3>{item.title}</h3>
              <p>{item.institution}</p>
              <a className="text-link" href={item.website} target="_blank" rel="noreferrer">
                {copy.visitInstitution} <IoArrowForward aria-hidden="true" />
              </a>
            </div>
          ))}
        </article>

        <article className="tile tile-languages">
          <p className="section-kicker">{copy.languagesKicker}</p>
          <h2>{copy.languagesTitle}</h2>
          <ul className="language-list">
            {currentLanguages.map((language) => (
              <li key={language.name}>
                <span className="language-name">
                  <Image
                    className="language-flag"
                    src={language.flagUrl}
                    alt={language.flagAlt}
                    width={20}
                    height={13}
                  />
                  {language.name}
                </span>
                <strong className="language-level">{language.level}</strong>
              </li>
            ))}
          </ul>
        </article>

        <article className="tile tile-contact">
          <p className="section-kicker">{copy.availabilityKicker}</p>
          <h2>{copy.contactTitle}</h2>
          <p>{copy.contactBody}</p>
          <div className="contact-actions">
            <Link className="button button-primary" href={`${prefix}/contact`}>
              {copy.contactButton} <IoArrowForward aria-hidden="true" />
            </Link>
          </div>
        </article>

        <article className="tile tile-github">
          <IoLogoGithub className="tile-icon" aria-hidden="true" />
          <div>
            <p className="section-kicker">{copy.githubKicker}</p>
            <h2>GitHub</h2>
            <p>{copy.githubBody}</p>
          </div>
          <a className="text-link" href="https://github.com/mkdavor" target="_blank" rel="noreferrer">
            {copy.githubLink} <IoArrowForward aria-hidden="true" />
          </a>
        </article>
      </section>
    </main>
  );
}

export default function HomePage() {
  return <HomeContent />;
}
