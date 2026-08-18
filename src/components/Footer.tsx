import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 sm:grid-cols-3">
        <div>
          <h3 className="text-lg font-bold">{siteConfig.name}</h3>
          <p className="mt-2 text-sm text-white/70">{siteConfig.address.airport}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white/60">
            Contact
          </h4>
          <p className="mt-2 text-sm text-white/80">
            <a href={siteConfig.phoneHref} className="hover:text-red-400">
              {siteConfig.phone}
            </a>
          </p>
          <p className="mt-1 text-sm text-white/80">
            {siteConfig.address.line1}
            <br />
            {siteConfig.address.line2}
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white/60">
            Hours
          </h4>
          <ul className="mt-2 space-y-1 text-sm text-white/80">
            {siteConfig.hours.map((h) => (
              <li key={h.days}>
                {h.days}: {h.time}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex gap-4">
            <a
              href={siteConfig.social.facebook}
              className="text-sm text-white/70 hover:text-red-400"
            >
              Facebook
            </a>
            <a
              href={siteConfig.social.instagram}
              className="text-sm text-white/70 hover:text-red-400"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
