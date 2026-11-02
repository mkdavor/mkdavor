import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SITE_KEYWORDS_DE } from "../../lib/site";

export const metadata: Metadata = {
  keywords: SITE_KEYWORDS_DE,
};

export default function GermanLayout({ children }: { children: ReactNode }) {
  return children;
}
