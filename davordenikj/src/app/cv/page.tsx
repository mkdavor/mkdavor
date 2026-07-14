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
import { educationItems, profile, projects } from "../../data/content";
import { experiences } from "../../data/experiences";
import { languages } from "../../data/languages";
import { skillGroups } from "../../data/skills";

const description =
  "Accessible HTML CV for Davor Denikj, Lead Software Engineer specializing in .NET, Swift, mobile, backend, cloud systems, and technical leadership.";

export const metadata: Metadata = {
  title: "CV - Lead Software Engineer",
  description,
  alternates: { canonical: "/cv" },
  openGraph: {
    url: "/cv",
    title: "Davor Denikj - Lead Software Engineer CV",
    description,
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Davor Denikj - Lead Software Engineer CV",
    description,
    images: ["/opengraph-image"],
  },
};

export default function CvPage() {
  return (
    <main id="main-content" className="page cv-page">
      <header className="cv-header tile">
        <Image src={profile.avatar} alt={profile.avatarAlt} width={104} height={104} priority />
        <div className="cv-heading">
          <p className="eyebrow">Curriculum vitae</p>
          <h1>{profile.name}</h1>
          <p className="detail-lead">Lead Software Engineer | .NET & Swift | Mobile, Backend & Cloud Systems</p>
        </div>
        <div className="cv-actions no-print">
          <a className="button button-primary" href="/Davor-Denikj-CV-English.pdf" download>
            <IoDocumentTextOutline aria-hidden="true" /> Download PDF
          </a>
          <span>Use your browser&apos;s print command for a clean printed copy.</span>
        </div>
      </header>

      <div className="cv-layout">
        <aside className="cv-sidebar" aria-label="Profile details">
          <section>
            <h2>Contact</h2>
            <ul className="icon-list">
              <li><IoMailOutline aria-hidden="true" /><Link href="/contact">Contact form</Link></li>
              <li><IoLocationOutline aria-hidden="true" /><span>{profile.location}</span></li>
              <li><IoLogoLinkedin aria-hidden="true" /><a href="https://linkedin.com/in/davordenikj">LinkedIn</a></li>
              <li><IoLogoGithub aria-hidden="true" /><a href="https://github.com/mkdavor">GitHub</a></li>
            </ul>
          </section>

          <section>
            <h2>Core expertise</h2>
            {skillGroups.map((group) => (
              <div key={group.name} className="cv-skill-group">
                <h3>{group.name}</h3>
                <p>{group.items.join(" · ")}</p>
              </div>
            ))}
          </section>

          <section>
            <h2>Education</h2>
            {educationItems.map((item) => (
              <div key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.institution}</p>
              </div>
            ))}
          </section>

          <section>
            <h2>Languages</h2>
            <ul className="cv-language-list">
              {languages.map((language) => (
                <li key={language.name}><span>{language.name}</span><strong>{language.level}</strong></li>
              ))}
            </ul>
          </section>
        </aside>

        <div className="cv-main">
          <section className="cv-section cv-summary">
            <h2>Profile</h2>
            <p>{profile.summary}</p>
          </section>

          <section id="experience" className="cv-section">
            <h2>Experience</h2>
            {experiences.map((experience) => (
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
                <p className="cv-tech"><strong>Tech:</strong> {experience.technologies.join(", ")}</p>
              </article>
            ))}
          </section>

          <section className="cv-section">
            <h2>Independent projects</h2>
            {projects.map((project) => (
              <article key={project.id} className="cv-project">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <p><strong>Role:</strong> {project.role} · <strong>Status:</strong> {project.status}</p>
                <Link href={`/projects/${project.slug}`}>Project details</Link>
              </article>
            ))}
          </section>
        </div>
      </div>
    </main>
  );
}
