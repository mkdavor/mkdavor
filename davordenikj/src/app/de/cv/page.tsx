import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  IoDocumentTextOutline,
  IoLocationOutline,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMailOutline,
} from "react-icons/io5";
import { educationItemsDe, profileDe, projectsDe } from "../../../data/content.de";
import { experiencesDe } from "../../../data/experiences.de";
import { languagesDe } from "../../../data/languages.de";
import { skillGroups } from "../../../data/skills";

const description =
  "Barrierearmer HTML-Lebenslauf von Davor Denikj, Lead Software Engineer für .NET, Swift, Mobile-, Backend- und Cloud-Systeme sowie technische Führung.";

const skillGroupNames: Record<string, string> = {
  Backend: "Backend",
  Mobile: "Mobile",
  "Cloud & DevOps": "Cloud & DevOps",
  Frontend: "Frontend",
  "Data & identity": "Daten & Identität",
  "Architecture & practices": "Architektur & Methoden",
};

export const metadata: Metadata = {
  title: "Lebenslauf – Lead Software Engineer",
  description,
  alternates: {
    canonical: "/de/cv",
    languages: { en: "/cv", de: "/de/cv", "x-default": "/cv" },
  },
  openGraph: {
    url: "/de/cv",
    title: "Davor Denikj – Lebenslauf als Lead Software Engineer",
    description,
    locale: "de_DE",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Davor Denikj – Lebenslauf als Lead Software Engineer",
    description,
    images: ["/opengraph-image"],
  },
};

export default function GermanCvPage() {
  return (
    <main id="main-content" className="page cv-page">
      <header className="cv-header tile">
        <Image src={profileDe.avatar} alt={profileDe.avatarAlt} width={104} height={104} priority />
        <div className="cv-heading">
          <p className="eyebrow">Lebenslauf</p>
          <h1>{profileDe.name}</h1>
          <p className="detail-lead">Lead Software Engineer | .NET & Swift | Mobile-, Backend- & Cloud-Systeme</p>
        </div>
        <div className="cv-actions no-print">
          <a className="button button-primary" href="/Davor-Denikj-CV-English.pdf" download>
            <IoDocumentTextOutline aria-hidden="true" /> Englisches PDF herunterladen
          </a>
          <span>Mit der Druckfunktion Ihres Browsers erhalten Sie eine übersichtliche Druckversion auf Deutsch.</span>
        </div>
      </header>

      <div className="cv-layout">
        <aside className="cv-sidebar" aria-label="Profildetails">
          <section>
            <h2>Kontakt</h2>
            <ul className="icon-list">
              <li><IoMailOutline aria-hidden="true" /><Link href="/de/contact">Kontaktformular</Link></li>
              <li><IoLocationOutline aria-hidden="true" /><span>{profileDe.location}</span></li>
              <li><IoLogoLinkedin aria-hidden="true" /><a href="https://linkedin.com/in/davordenikj">LinkedIn</a></li>
              <li><IoLogoGithub aria-hidden="true" /><a href="https://github.com/mkdavor">GitHub</a></li>
            </ul>
          </section>

          <section>
            <h2>Kernkompetenzen</h2>
            {skillGroups.map((group) => (
              <div key={group.name} className="cv-skill-group">
                <h3>{skillGroupNames[group.name]}</h3>
                <p>{group.items.join(" · ")}</p>
              </div>
            ))}
          </section>

          <section>
            <h2>Ausbildung</h2>
            {educationItemsDe.map((item) => (
              <div key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.institution}</p>
              </div>
            ))}
          </section>

          <section>
            <h2>Sprachen</h2>
            <ul className="cv-language-list">
              {languagesDe.map((language) => (
                <li key={language.name}><span>{language.name}</span><strong>{language.level}</strong></li>
              ))}
            </ul>
          </section>
        </aside>

        <div className="cv-main">
          <section className="cv-section cv-summary">
            <h2>Profil</h2>
            <p>{profileDe.summary}</p>
          </section>

          <section id="experience" className="cv-section">
            <h2>Berufserfahrung</h2>
            {experiencesDe.map((experience) => (
              <article key={experience.id} className="cv-experience">
                <header>
                  <div>
                    <h3>{experience.company}</h3>
                    <p>{experience.role}</p>
                  </div>
                  <p><span>{experience.location}</span><span>{experience.period}</span></p>
                </header>
                <ul>
                  {experience.details.map((detail) => <li key={detail}>{detail}</li>)}
                </ul>
                <p className="cv-tech"><strong>Technologien:</strong> {experience.technologies.join(", ")}</p>
              </article>
            ))}
          </section>

          <section className="cv-section">
            <h2>Eigene Projekte</h2>
            {projectsDe.map((project) => (
              <article key={project.id} className="cv-project">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <p><strong>Rolle:</strong> {project.role} · <strong>Status:</strong> {project.status}</p>
                <Link href={`/de/projects/${project.slug}`}>Projektdetails</Link>
              </article>
            ))}
          </section>
        </div>
      </div>
    </main>
  );
}
