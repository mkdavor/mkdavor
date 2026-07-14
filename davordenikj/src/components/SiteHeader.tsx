import Link from "next/link";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "CV", href: "/cv" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link className="wordmark" href="/" aria-label="Davor Denikj, home">
          Davor Denikj<span aria-hidden="true">.</span>
        </Link>
        <nav aria-label="Primary navigation">
          <ul>
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
