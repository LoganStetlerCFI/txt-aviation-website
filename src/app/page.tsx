import Image from "next/image";
import Link from "next/link";
import TeamMember from "@/components/TeamMember";
import TestimonialsSection from "@/components/TestimonialsSection";
import { basePath } from "@/lib/base-path";
import { siteConfig, team } from "@/lib/site-config";

const heroStats = [
  { headline: "FAA Certified", caption: "Repair Station" },
  { headline: "A&P/IA", caption: "Certified Technicians" },
  { headline: "Dynon Dealer", caption: "Certified Installer" },
  { headline: "DeLand, FL", caption: "KDED Airport" },
];

export default function Home() {
  return (
    <>
      <section className="bg-navy-900 py-24 text-white sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="lg:flex lg:items-center lg:gap-10">
            <Image
              src={`${basePath}/images/TXT_Aviation_wordmark_white.png`}
              alt="TXT Aviation"
              width={1324}
              height={493}
              priority
              className="h-20 w-auto sm:h-24 lg:h-32"
            />
            <div className="mt-8 lg:mt-0">
              <p className="text-sm font-semibold uppercase tracking-widest text-red-500">
                DeLand Municipal Airport (KDED)
              </p>
              <h1 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                Complex Problems.
                <br />
                Practical Solutions.
              </h1>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
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

          <div className="mt-10 border-t border-white/10" />

          <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {heroStats.map((stat) => (
              <div
                key={stat.headline}
                className="rounded-lg border border-white/15 bg-white/5 px-5 py-4"
              >
                <p className="text-lg font-bold text-red-500">{stat.headline}</p>
                <p className="mt-1 text-sm text-white/60">{stat.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl font-bold text-navy-900">
              Trusted Professional Aircraft Maintenance Serving Central
              Florida
            </h2>
            <p className="mt-4 text-navy-800/80">
              TXT Aviation is an aircraft maintenance facility providing
              dependable, professional maintenance and technical solutions
              for aircraft owners, operators, and flight schools.
            </p>
            <ul className="mt-4 space-y-2 text-navy-800/80">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                <span>
                  FAA Certified Repair Station, authorized for transponder and
                  pitot-static certifications
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                <span>
                  Full-service capability — from routine inspections to
                  complex avionics installations, engine work, structural
                  repairs, and major aircraft upgrades
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                <span>
                  Honest, root-cause solutions — not just part replacement. We
                  diagnose problems, communicate clearly, and keep your
                  aircraft safe and reliable.
                </span>
              </li>
            </ul>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src={`${basePath}/images/shop-engine-work.jpg`}
              alt="TXT Aviation technicians performing engine and propeller maintenance on an aircraft in the hangar"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-navy-800/10 bg-slate-50 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-bold text-navy-900">Meet the Team</h2>
          <div className="mt-10 divide-y divide-navy-800/10">
            {team.map((member) => (
              <div key={member.name} className="py-12 first:pt-0 last:pb-0">
                <TeamMember
                  name={member.name}
                  title={member.title}
                  bio={member.bio}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />

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
