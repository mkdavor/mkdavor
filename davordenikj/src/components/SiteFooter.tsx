import Link from "next/link";
import { profile } from "../data/content";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} {profile.name}</p>
      <nav aria-label="Footer navigation">
        <Link href="/cv">HTML CV</Link>
        <a href="/Davor-Denikj-CV-English.pdf" download>
          Download PDF
        </a>
        <Link href="/contact">Contact</Link>
      </nav>
    </footer>
  );
}
