"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "../data/content";

export function SiteFooter() {
  const pathname = usePathname();
  const isGerman = pathname === "/de" || pathname.startsWith("/de/");

  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} {profile.name}</p>
      <nav aria-label={isGerman ? "Fußzeilennavigation" : "Footer navigation"}>
        <Link href={isGerman ? "/de/cv" : "/cv"}>HTML CV</Link>
        <a href="/Davor-Denikj-CV-English.pdf" download>
          {isGerman ? "Englisches PDF" : "Download PDF"}
        </a>
        <Link href={isGerman ? "/de/contact" : "/contact"}>{isGerman ? "Kontakt" : "Contact"}</Link>
      </nav>
    </footer>
  );
}
