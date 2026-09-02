import Image from "next/image";
import Link from "next/link";
import { basePath } from "@/lib/base-path";
import { navLinks, siteConfig } from "@/lib/site-config";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-navy-800/10 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="shrink-0">
          <Image
            src={`${basePath}/images/TXT_Aviation_logo_transparent.png`}
            alt="TXT Aviation"
            width={1966}
            height={582}
            priority
            className="h-8 w-auto sm:h-10"
          />
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
