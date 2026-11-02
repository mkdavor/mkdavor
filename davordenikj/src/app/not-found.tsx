import type { Metadata } from "next";
import { headers } from "next/headers";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

const notFoundCopy = {
  en: {
    title: "Page not found",
    eyebrow: "Error 404",
    lead: "The page you are looking for does not exist or has moved.",
    homeButton: "Back to home",
    contactButton: "Contact",
  },
  de: {
    title: "Seite nicht gefunden",
    eyebrow: "Fehler 404",
    lead: "Die gesuchte Seite existiert nicht oder wurde verschoben.",
    homeButton: "Zur Startseite",
    contactButton: "Kontakt",
  },
};

async function getLocale() {
  const pathname = (await headers()).get("x-site-pathname") || "/";
  return pathname === "/de" || pathname.startsWith("/de/") ? "de" : "en";
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: notFoundCopy[await getLocale()].title,
    robots: { index: false, follow: true },
  };
}

export default async function NotFound() {
  const locale = await getLocale();
  const copy = notFoundCopy[locale];
  const prefix = locale === "de" ? "/de" : "";

  return (
    <main id="main-content" className="page detail-page">
      <section className="detail-grid">
        <article className="tile detail-hero">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1>{copy.title}</h1>
          <p className="detail-lead">{copy.lead}</p>
          <div className="button-row">
            <Link className="button button-primary" href={prefix || "/"}>
              <IoArrowBack aria-hidden="true" /> {copy.homeButton}
            </Link>
            <Link className="button" href={`${prefix}/contact`}>
              {copy.contactButton}
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
