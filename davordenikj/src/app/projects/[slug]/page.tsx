import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { IoArrowBack, IoArrowForward, IoGlobeOutline } from "react-icons/io5";
import { JsonLd } from "../../../components/JsonLd";
import { profile, projects } from "../../../data/content";
import { SITE_NAME, SITE_URL } from "../../../lib/site";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) return {};

  const title = `${project.name} - ${project.tagline}`;
  const description = project.description;
  const canonical = `/projects/${project.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: { en: canonical, de: `/de${canonical}`, "x-default": canonical },
    },
    openGraph: {
      type: "website",
      url: canonical,
      title: `${title} | ${SITE_NAME}`,
      description,
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: ["/opengraph-image"],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  const canonicalUrl = `${SITE_URL}/projects/${project.slug}`;
  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.name,
    url: canonicalUrl,
    sameAs: project.website,
    description: project.description,
    applicationCategory: project.applicationCategory,
    operatingSystem: project.operatingSystem,
    featureList: project.features,
    author: {
      "@type": "Person",
      name: profile.name,
      url: SITE_URL,
    },
  };

  return (
    <main id="main-content" className="page detail-page">
      <JsonLd data={softwareJsonLd} />
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/"><IoArrowBack aria-hidden="true" /> Home</Link>
        <span aria-hidden="true">/</span>
        <Link href="/#projects">Projects</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{project.name}</span>
      </nav>

      <section className="detail-grid project-detail-grid">
        <article className="tile detail-hero">
          <div className="project-detail-title">
            <Image
              className={project.logoRounded ? "project-logo-rounded" : undefined}
              src={project.logo}
              alt={project.logoAlt}
              width={112}
              height={112}
              sizes="112px"
              priority
            />
            <div>
              <p className="eyebrow">{project.status}</p>
              <h1>{project.name}</h1>
              <p className="detail-lead">{project.tagline}</p>
            </div>
          </div>
          <p>{project.purpose}</p>
          <div className="button-row">
            <a className="button button-primary" href={project.website} target="_blank" rel="noreferrer">
              <IoGlobeOutline aria-hidden="true" /> Visit {project.websiteLabel}
            </a>
            <Link className="button" href="/contact">Discuss a project</Link>
          </div>
        </article>

        <article className="tile detail-facts">
          <p className="section-kicker">At a glance</p>
          <h2>Project facts</h2>
          <dl>
            <div><dt>My role</dt><dd>{project.role}</dd></div>
            <div><dt>Status</dt><dd>{project.status}</dd></div>
            <div><dt>Product</dt><dd>{project.productType}</dd></div>
          </dl>
        </article>

        <article className="tile detail-purpose">
          <p className="section-kicker">Purpose</p>
          <h2>What it does</h2>
          <p>{project.description}</p>
          <ul className="compact-list">
            {project.differentiators.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </article>

        <article className="tile detail-features">
          <p className="section-kicker">Product</p>
          <h2>Key features</h2>
          <ul className="compact-list">
            {project.features.map((feature) => <li key={feature}>{feature}</li>)}
          </ul>
        </article>

        <article className="tile detail-architecture">
          <p className="section-kicker">Engineering</p>
          <h2>Architecture and ownership</h2>
          <ul className="compact-list">
            {project.architecture.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </article>

        <article className="tile detail-stack">
          <p className="section-kicker">Technology</p>
          <h2>Stack</h2>
          <div className="tag-list tag-list-large">
            {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
          </div>
        </article>
      </section>

      <nav className="next-project" aria-label="Project navigation">
        {(() => {
          const currentIndex = projects.findIndex((item) => item.id === project.id);
          const nextProject = projects[(currentIndex + 1) % projects.length];
          return (
            <Link className="text-link" href={`/projects/${nextProject.slug}`}>
              Next project: {nextProject.name} <IoArrowForward aria-hidden="true" />
            </Link>
          );
        })()}
      </nav>
    </main>
  );
}
