import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import { services, siteConfig } from "@/lib/site-config";

export default function Home() {
  return (
    <>
      <section className="bg-navy-900 py-20 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
            {siteConfig.tagline}
          </h1>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/services"
              className="rounded-md bg-red-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700"
            >
              View Our Services
            </Link>
            <a
              href={siteConfig.phoneHref}
              className="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Call {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold text-navy-900">What We Do</h2>
        <p className="mt-2 max-w-2xl text-navy-800/70">
          Full-service aircraft maintenance backed by certified technicians and
          A&amp;P/IA mechanics.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              name={service.name}
              description={service.description}
            />
          ))}
        </div>
      </section>

      <section className="border-t border-navy-800/10 bg-slate-50 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 sm:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-red-600">
              Hours
            </h3>
            <ul className="mt-2 space-y-1 text-navy-900">
              {siteConfig.hours.map((h) => (
                <li key={h.days}>
                  {h.days}: {h.time}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-red-600">
              Location
            </h3>
            <p className="mt-2 text-navy-900">
              {siteConfig.address.line1}
              <br />
              {siteConfig.address.line2}
              <br />
              {siteConfig.address.airport}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-red-600">
              Get In Touch
            </h3>
            <p className="mt-2">
              <a href={siteConfig.phoneHref} className="text-navy-900 hover:text-red-600">
                {siteConfig.phone}
              </a>
            </p>
            <Link
              href="/contact"
              className="mt-3 inline-block rounded-md bg-navy-900 px-4 py-2 text-sm font-semibold text-white hover:bg-navy-800"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
