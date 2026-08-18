import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/site-config";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-navy-800/10 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold tracking-tight text-navy-900">
          {siteConfig.name}
        </Link>
        <nav className="flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-navy-800 transition-colors hover:text-red-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <a
          href={siteConfig.phoneHref}
          className="hidden rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-700 sm:inline-block"
        >
          Call {siteConfig.phone}
        </a>
      </div>
    </header>
  );
}
