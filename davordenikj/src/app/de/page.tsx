import type { Metadata } from "next";
import { HomeContent } from "../page";
import { SITE_NAME } from "../../lib/site";

const title = "Davor Denikj – Lead Software Engineer | .NET, Swift & Cloud";
const description =
  "Lead Software Engineer in Nürnberg mit über 12 Jahren Erfahrung in .NET, Swift, Mobile-, Backend- und Cloud-Systemen sowie praxisnaher technischer Führung.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical: "/de",
    languages: { en: "/", de: "/de", "x-default": "/" },
  },
  openGraph: {
    url: "/de",
    title,
    description,
    siteName: SITE_NAME,
    locale: "de_DE",
    alternateLocale: ["en_US"],
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"],
  },
};

export default function GermanHomePage() {
  return <HomeContent locale="de" />;
}
