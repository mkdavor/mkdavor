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
import { languages } from "../data/languages";
import { skillGroups, skills } from "../data/skills";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from "../lib/site";

export const metadata: Metadata = {
  title: { absolute: SITE_TITLE },
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
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

export default function HomePage() {
  return (
    <main id="main-content" className="page">
      <JsonLd data={profileJsonLd} />
      <section className="bento-grid" aria-label="Professional profile">
        <article className="tile tile-hero">
          <div className="hero-layout">
            <Image
              className="profile-avatar"
              src={profile.avatar}
              alt={profile.avatarAlt}
              width={112}
              height={112}
              sizes="112px"
              priority
            />
            <div>
              <p className="eyebrow">{profile.role}</p>
              <h1>{profile.name}</h1>
              <p className="hero-subtitle">12+ years · .NET · Swift · Backend · Cloud</p>
              <p className="hero-summary">{profile.shortSummary}</p>
              <div className="hero-facts" aria-label="Location and availability">
                <span><IoLocationOutline aria-hidden="true" /> {profile.location}</span>
                <span className="availability"><i aria-hidden="true" /> {profile.availability}</span>
              </div>
              <div className="button-row">
                <a className="button button-primary" href="#experience">
                  View experience
                </a>
                <a className="button" href="#projects">
                  View projects
                </a>
                <Link className="button" href="/contact">
                  Contact
                </Link>
              </div>
              <div className="profile-links" aria-label="Profile links">
                <Link href="/cv"><IoDocumentTextOutline aria-hidden="true" /> HTML CV</Link>
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
          <p className="section-kicker">Career highlights</p>
          <h2>Selected impact</h2>
          <ul className="impact-list">
            {careerHighlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
          </ul>
        </article>

        <section id="experience" className="tile tile-experience" aria-labelledby="experience-title">
          <div className="section-heading">
            <div>
              <h2 id="experience-title">Experience</h2>
            </div>
            <Link className="text-link" href="/cv#experience">
              Full CV <IoArrowForward aria-hidden="true" />
            </Link>
          </div>
          <ExperienceList />
        </section>

        <article className="tile tile-leadership">
          <p className="section-kicker">Hands-on leadership</p>
          <h2>Leading through delivery</h2>
          <ul className="compact-list">
            {leadershipHighlights.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </article>

        <article className="tile tile-expertise">
          <p className="section-kicker">Technical breadth</p>
          <h2>Core expertise</h2>
          <div className="expertise-groups">
            {skillGroups.map((group) => (
              <section key={group.name} aria-labelledby={`skill-${group.name.replaceAll(" ", "-").toLowerCase()}`}>
                <h3 id={`skill-${group.name.replaceAll(" ", "-").toLowerCase()}`}>{group.name}</h3>
                <p>{group.items.join(" · ")}</p>
              </section>
            ))}
          </div>
          <div className="technology-index">
            <p className="technology-index-label">Technology index</p>
            <div className="technology-icon-grid" aria-label="Technology icons">
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
              <p className="section-kicker">Independent products</p>
              <h2 id="projects-title">Selected projects</h2>
            </div>
          </div>
          <div className="project-grid">
            {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
          </div>
        </section>

        <article className="tile tile-education">
          <p className="section-kicker">Education</p>
          <h2>Academic background</h2>
          {educationItems.map((item) => (
            <div key={item.id} className="education-item">
              <h3>{item.title}</h3>
              <p>{item.institution}</p>
              <a className="text-link" href={item.website} target="_blank" rel="noreferrer">
                Visit institution <IoArrowForward aria-hidden="true" />
              </a>
            </div>
          ))}
        </article>

        <article className="tile tile-languages">
          <p className="section-kicker">Communication</p>
          <h2>Languages</h2>
          <ul className="language-list">
            {languages.map((language) => (
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
          <p className="section-kicker">Availability</p>
          <h2>Let&apos;s work together</h2>
          <p>Based in Nuremberg and open to suitable remote and hybrid roles spanning technical leadership, .NET, mobile, backend, and cloud systems.</p>
          <div className="contact-actions">
            <Link className="button button-primary" href="/contact">
              Contact me <IoArrowForward aria-hidden="true" />
            </Link>
          </div>
        </article>

        <article className="tile tile-github">
          <IoLogoGithub className="tile-icon" aria-hidden="true" />
          <div>
            <p className="section-kicker">Code and products</p>
            <h2>GitHub</h2>
            <p>Follow current product work and public repositories on GitHub.</p>
          </div>
          <a className="text-link" href="https://github.com/mkdavor" target="_blank" rel="noreferrer">
            View @mkdavor <IoArrowForward aria-hidden="true" />
          </a>
        </article>
      </section>
    </main>
  );
}
