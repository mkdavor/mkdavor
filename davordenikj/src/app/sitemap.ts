import type { MetadataRoute } from "next";
import { SITE_URL } from "../lib/site";
import { projects } from "../data/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      alternates: { languages: { en: SITE_URL, de: `${SITE_URL}/de` } },
    },
    {
      url: `${SITE_URL}/cv`,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: { languages: { en: `${SITE_URL}/cv`, de: `${SITE_URL}/de/cv` } },
    },
    {
      url: `${SITE_URL}/contact`,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: { languages: { en: `${SITE_URL}/contact`, de: `${SITE_URL}/de/contact` } },
    },
    {
      url: `${SITE_URL}/de`,
      changeFrequency: "weekly",
      priority: 1,
      alternates: { languages: { en: SITE_URL, de: `${SITE_URL}/de` } },
    },
    {
      url: `${SITE_URL}/de/cv`,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: { languages: { en: `${SITE_URL}/cv`, de: `${SITE_URL}/de/cv` } },
    },
    {
      url: `${SITE_URL}/de/contact`,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: { languages: { en: `${SITE_URL}/contact`, de: `${SITE_URL}/de/contact` } },
    },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.flatMap((project) => {
    const englishUrl = `${SITE_URL}/projects/${project.slug}`;
    const germanUrl = `${SITE_URL}/de/projects/${project.slug}`;
    const alternates = { languages: { en: englishUrl, de: germanUrl } };

    return [
      { url: englishUrl, changeFrequency: "monthly" as const, priority: 0.8, alternates },
      { url: germanUrl, changeFrequency: "monthly" as const, priority: 0.8, alternates },
    ];
  });

  return [...staticRoutes, ...projectRoutes];
}
