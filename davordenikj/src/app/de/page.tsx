import type { Metadata } from "next";
import { HomeContent } from "../page";
import { SITE_DESCRIPTION_DE, SITE_NAME, SITE_TITLE_DE } from "../../lib/site";

const title = SITE_TITLE_DE;
const description = SITE_DESCRIPTION_DE;

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
    images: ["/de/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/de/opengraph-image"],
  },
};

export default function GermanHomePage() {
  return <HomeContent locale="de" />;
}
