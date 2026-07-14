import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { IoArrowBack, IoArrowForward, IoGlobeOutline } from "react-icons/io5";
import { JsonLd } from "../../../../components/JsonLd";
import { profileDe, projectsDe } from "../../../../data/content.de";
import { SITE_NAME, SITE_URL } from "../../../../lib/site";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projectsDe.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsDe.find((item) => item.slug === slug);
  if (!project) return {};

  const title = `${project.name} – ${project.tagline}`;
  const canonical = `/de/projects/${project.slug}`;
  const englishPath = `/projects/${project.slug}`;

  return {
    title,
    description: project.description,
    alternates: {
      canonical,
      languages: { en: englishPath, de: canonical, "x-default": englishPath },
    },
    openGraph: {
      type: "website",
      url: canonical,
      title: `${title} | ${SITE_NAME}`,
      description: project.description,
      locale: "de_DE",
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description: project.description,
      images: ["/opengraph-image"],
    },
  };
}

export default async function GermanProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectsDe.find((item) => item.slug === slug);
  if (!project) notFound();

  const canonicalUrl = `${SITE_URL}/de/projects/${project.slug}`;
  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.name,
    url: canonicalUrl,
    sameAs: project.website,
    description: project.description,
    inLanguage: "de",
    applicationCategory: project.id === "mklive-radio" ? "MultimediaApplication" : "BusinessApplication",
    operatingSystem: project.id === "mklive-radio" ? "iOS, Android" : "Web",
    featureList: project.features,
    author: { "@type": "Person", name: profileDe.name, url: SITE_URL },
  };

  return (
    <main id="main-content" className="page detail-page">
      <JsonLd data={softwareJsonLd} />
      <nav className="breadcrumbs" aria-label="Brotkrümelnavigation">
        <Link href="/de"><IoArrowBack aria-hidden="true" /> Start</Link>
        <span aria-hidden="true">/</span>
        <Link href="/de/#projects">Projekte</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{project.name}</span>
      </nav>

      <section className="detail-grid project-detail-grid">
        <article className="tile detail-hero">
          <div className="project-detail-title">
            <Image src={project.logo} alt={project.logoAlt} width={112} height={112} sizes="112px" priority />
            <div>
              <p className="eyebrow">{project.status}</p>
              <h1>{project.name}</h1>
              <p className="detail-lead">{project.tagline}</p>
            </div>
          </div>
          <p>{project.purpose}</p>
          <div className="button-row">
            <a className="button button-primary" href={project.website} target="_blank" rel="noreferrer">
              <IoGlobeOutline aria-hidden="true" /> {project.websiteLabel} besuchen
            </a>
            <Link className="button" href="/de/contact">Projekt besprechen</Link>
          </div>
        </article>

        <article className="tile detail-facts">
          <p className="section-kicker">Auf einen Blick</p>
          <h2>Projektdaten</h2>
          <dl>
            <div><dt>Meine Rolle</dt><dd>{project.role}</dd></div>
            <div><dt>Status</dt><dd>{project.status}</dd></div>
            <div><dt>Produkt</dt><dd>{project.id === "mklive-radio" ? "Native mobile App" : "B2C- und B2B-SaaS"}</dd></div>
          </dl>
        </article>

        <article className="tile detail-purpose">
          <p className="section-kicker">Zweck</p>
          <h2>Was das Produkt leistet</h2>
          <p>{project.description}</p>
          <ul className="compact-list">{project.differentiators.map((item) => <li key={item}>{item}</li>)}</ul>
        </article>

        <article className="tile detail-features">
          <p className="section-kicker">Produkt</p>
          <h2>Wichtige Funktionen</h2>
          <ul className="compact-list">{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
        </article>

        <article className="tile detail-architecture">
          <p className="section-kicker">Engineering</p>
          <h2>Architektur und Verantwortung</h2>
          <ul className="compact-list">{project.architecture.map((item) => <li key={item}>{item}</li>)}</ul>
        </article>

        <article className="tile detail-stack">
          <p className="section-kicker">Technologie</p>
          <h2>Technologie-Stack</h2>
          <div className="tag-list tag-list-large">
            {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
          </div>
        </article>
      </section>

      <nav className="next-project" aria-label="Projektnavigation">
        {projectsDe.filter((item) => item.id !== project.id).map((item) => (
          <Link key={item.id} className="text-link" href={`/de/projects/${item.slug}`}>
            Nächstes Projekt: {item.name} <IoArrowForward aria-hidden="true" />
          </Link>
        ))}
      </nav>
    </main>
  );
}
