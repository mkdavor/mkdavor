import type { Metadata } from "next";
import Link from "next/link";
import {
  IoDocumentTextOutline,
  IoLocationOutline,
  IoLogoGithub,
  IoLogoLinkedin,
} from "react-icons/io5";
import { ContactForm } from "../../../components/ContactForm";
import { profileDe } from "../../../data/content.de";

const description =
  "Kontaktieren Sie Davor Denikj zu passenden Vor-Ort-Positionen in Pendeldistanz zu Nürnberg sowie zu Hybrid- und Remote-Positionen als Lead Software Engineer oder Tech Lead.";

export const metadata: Metadata = {
  title: "Kontakt",
  description,
  alternates: {
    canonical: "/de/contact",
    languages: { en: "/contact", de: "/de/contact", "x-default": "/contact" },
  },
  openGraph: {
    url: "/de/contact",
    title: "Kontakt – Davor Denikj",
    description,
    locale: "de_DE",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontakt – Davor Denikj",
    description,
    images: ["/opengraph-image"],
  },
};

export default function GermanContactPage() {
  return (
    <main id="main-content" className="page detail-page contact-page">
      <section className="detail-grid contact-grid">
        <article className="tile contact-hero">
          <p className="eyebrow">Kontakt</p>
          <h1>Lassen Sie uns etwas Nachhaltiges entwickeln.</h1>
          <p className="detail-lead">
            Ich bin offen für passende Positionen vor Ort in zumutbarer Pendeldistanz zu Nürnberg
            sowie für Hybrid- und Remote-Positionen, bei denen praxisnahe Entwicklung, technische
            Führung und zuverlässige Produktumsetzung gefragt sind.
          </p>
        </article>

        <article className="tile contact-fit">
          <p className="section-kicker">Passende Themen</p>
          <h2>Wobei ich unterstützen kann</h2>
          <ul className="compact-list">
            <li>Positionen als Lead Software Engineer und Tech Lead</li>
            <li>Senior- und Principal-Level-Entwicklung mit .NET / C#</li>
            <li>Swift, iOS und plattformübergreifende mobile Systeme</li>
            <li>Backend- und Cloud-Architektur für sichere, skalierbare Systeme</li>
            <li>API- und SDK-Architektur für sichere, wartbare Produkte</li>
            <li>Team-Mentoring, Code-Reviews und Entwicklungsstandards</li>
            <li>Produktivbetrieb mit CI/CD, Kubernetes, IAM und Observability</li>
          </ul>
        </article>

        <article className="tile contact-location">
          <IoLocationOutline className="tile-icon" aria-hidden="true" />
          <p className="section-kicker">Standort</p>
          <h2>{profileDe.location}</h2>
          <div className="location-status">
            <i aria-hidden="true" />
            <span>Offen für Positionen vor Ort in Pendeldistanz sowie für Hybrid- und Remote-Positionen</span>
          </div>
          <div className="location-focus">
            <p>Rollenschwerpunkt</p>
            <strong>Lead Software Engineer / Tech Lead</strong>
            <span>.NET · Mobile · Backend · Cloud</span>
          </div>
          <div className="location-profile-links">
            <p>Profile &amp; Lebenslauf</p>
            <a href="https://linkedin.com/in/davordenikj" target="_blank" rel="noreferrer">
              <IoLogoLinkedin aria-hidden="true" /><span>LinkedIn<small>Berufliches Profil</small></span>
            </a>
            <a href="https://github.com/mkdavor" target="_blank" rel="noreferrer">
              <IoLogoGithub aria-hidden="true" /><span>GitHub<small>Code und Produktarbeit</small></span>
            </a>
            <Link href="/de/cv">
              <IoDocumentTextOutline aria-hidden="true" /><span>HTML-Lebenslauf<small>Erfahrung und Hintergrund</small></span>
            </Link>
          </div>
        </article>

        <ContactForm locale="de" />
      </section>
    </main>
  );
}
