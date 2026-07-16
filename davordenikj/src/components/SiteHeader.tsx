"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const englishNavigation = [
  { label: "Home", href: "/" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "CV", href: "/cv" },
  { label: "Contact", href: "/contact" },
];

const germanNavigation = [
  { label: "Start", href: "/de" },
  { label: "Berufserfahrung", href: "/de/#experience" },
  { label: "Projekte", href: "/de/#projects" },
  { label: "Lebenslauf", href: "/de/cv" },
  { label: "Kontakt", href: "/de/contact" },
];

function withoutGermanPrefix(pathname: string) {
  const englishPath = pathname.replace(/^\/de(?=\/|$)/, "");
  return englishPath || "/";
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isGerman = pathname === "/de" || pathname.startsWith("/de/");
  const navigation = isGerman ? germanNavigation : englishNavigation;
  const englishPath = withoutGermanPrefix(pathname);
  const germanPath = englishPath === "/" ? "/de" : `/de${englishPath}`;

  useEffect(() => {
    function closeMenuOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("keydown", closeMenuOnEscape);
    return () => document.removeEventListener("keydown", closeMenuOnEscape);
  }, []);

  function changeLanguage(event: React.MouseEvent<HTMLAnchorElement>, href: string) {
    event.preventDefault();
    window.location.assign(`${href}${window.location.search}${window.location.hash}`);
  }

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link
          className="wordmark"
          href={isGerman ? "/de" : "/"}
          aria-label={isGerman ? "Davor Denikj, Startseite" : "Davor Denikj, home"}
        >
          Davor Denikj<span aria-hidden="true">.</span>
        </Link>
        <button
          className="mobile-menu-toggle"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="site-navigation"
          aria-label={
            isMenuOpen
              ? isGerman
                ? "Menü schließen"
                : "Close menu"
              : isGerman
                ? "Menü öffnen"
                : "Open menu"
          }
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
        <div
          className={`header-actions${isMenuOpen ? " is-open" : ""}`}
          id="site-navigation"
        >
          <nav aria-label={isGerman ? "Hauptnavigation" : "Primary navigation"}>
            <ul>
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} onClick={() => setIsMenuOpen(false)}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav className="language-switch" aria-label={isGerman ? "Sprache auswählen" : "Choose language"}>
            <a
              href={englishPath}
              hrefLang="en"
              lang="en"
              aria-label={isGerman ? "Zur englischen Version wechseln" : "English version"}
              title="English"
              aria-current={!isGerman ? "page" : undefined}
              onClick={(event) => changeLanguage(event, englishPath)}
            >
              <Image
                className="language-switch-flag"
                src="/gb.png"
                alt=""
                width={40}
                height={20}
                unoptimized
              />
            </a>
            <a
              href={germanPath}
              hrefLang="de"
              lang="de"
              aria-label={isGerman ? "Deutsche Version" : "Switch to the German version"}
              title="Deutsch"
              aria-current={isGerman ? "page" : undefined}
              onClick={(event) => changeLanguage(event, germanPath)}
            >
              <Image
                className="language-switch-flag"
                src="/de.png"
                alt=""
                width={40}
                height={24}
                unoptimized
              />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
