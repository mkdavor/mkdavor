import type { Metadata } from "next";
import Link from "next/link";
import {
  IoDocumentTextOutline,
  IoLocationOutline,
  IoLogoGithub,
  IoLogoLinkedin,
} from "react-icons/io5";
import { ContactForm } from "../../components/ContactForm";
import { profile } from "../../data/content";

const description =
  "Contact Davor Denikj about suitable on-site opportunities within commuting distance of Nuremberg, as well as hybrid or remote Lead Software Engineer and Tech Lead roles.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: {
    canonical: "/contact",
    languages: { en: "/contact", de: "/de/contact", "x-default": "/contact" },
  },
  openGraph: {
    url: "/contact",
    title: "Contact Davor Denikj",
    description,
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Davor Denikj",
    description,
    images: ["/opengraph-image"],
  },
};

export default function ContactPage() {
  return (
    <main id="main-content" className="page detail-page contact-page">
      <section className="detail-grid contact-grid">
        <article className="tile contact-hero">
          <p className="eyebrow">Contact</p>
          <h1>Let&apos;s build something that lasts.</h1>
          <p className="detail-lead">
            I&apos;m open to suitable on-site opportunities within reasonable commuting distance of
            Nuremberg, as well as hybrid and remote roles where hands-on engineering, technical
            direction, and reliable product delivery matter.
          </p>
        </article>

        <article className="tile contact-fit">
          <p className="section-kicker">Good fit</p>
          <h2>Areas I can help with</h2>
          <ul className="compact-list">
            <li>Lead Software Engineer and Tech Lead roles</li>
            <li>Senior and principal-level .NET / C# engineering</li>
            <li>Swift, iOS, and cross-platform mobile systems</li>
            <li>Backend and cloud architecture for secure, scalable systems</li>
            <li>API and SDK architecture for secure, maintainable products</li>
            <li>Team mentoring, code reviews, and engineering standards</li>
            <li>Production delivery with CI/CD, Kubernetes, IAM, and observability</li>
          </ul>
        </article>

        <article className="tile contact-location">
          <IoLocationOutline className="tile-icon" aria-hidden="true" />
          <p className="section-kicker">Location</p>
          <h2>{profile.location}</h2>
          <div className="location-status">
            <i aria-hidden="true" />
            <span>Open to on-site roles within commuting distance, plus hybrid and remote roles</span>
          </div>
          <div className="location-focus">
            <p>Role focus</p>
            <strong>Lead Software Engineer / Tech Lead</strong>
            <span>.NET · Mobile · Backend · Cloud</span>
          </div>
          <div className="location-profile-links">
            <p>Profiles &amp; CV</p>
            <a href="https://linkedin.com/in/davordenikj" target="_blank" rel="noreferrer">
              <IoLogoLinkedin aria-hidden="true" /><span>LinkedIn<small>Professional profile</small></span>
            </a>
            <a href="https://github.com/mkdavor" target="_blank" rel="noreferrer">
              <IoLogoGithub aria-hidden="true" /><span>GitHub<small>Code and product work</small></span>
            </a>
            <Link href="/cv">
              <IoDocumentTextOutline aria-hidden="true" /><span>HTML CV<small>Experience and background</small></span>
            </Link>
          </div>
        </article>

        <ContactForm />
      </section>
    </main>
  );
}
