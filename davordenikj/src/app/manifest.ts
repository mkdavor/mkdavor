import type { MetadataRoute } from "next";
import { SITE_DESCRIPTION, SITE_NAME } from "../lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "Davor Denikj",
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#f5f6f8",
    theme_color: "#0071e3",
    lang: "en",
    icons: [
      {
        src: "/favicon.png",
        sizes: "any",
        type: "image/png",
      },
      {
        src: "/favicon.webp",
        sizes: "any",
        type: "image/webp",
      },
    ],
  };
}
