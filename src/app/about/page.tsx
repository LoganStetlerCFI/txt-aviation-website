import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { basePath } from "@/lib/base-path";

export const metadata: Metadata = {
  title: "About",
};

// Placeholder company-history timeline — real years, milestones, and
// descriptions to be dropped in later.
const timeline = [
  {
    year: "20XX",
    title: "Milestone Title",
    description: "Placeholder description text goes here.",
  },
  {
    year: "20XX",
    title: "Milestone Title",
    description: "Placeholder description text goes here.",
  },
  {
    year: "20XX",
    title: "Milestone Title",
    description: "Placeholder description text goes here.",
  },
  {
    year: "20XX",
    title: "Milestone Title",
    description: "Placeholder description text goes here.",
  },
  {
    year: "20XX",
    title: "Milestone Title",
    description: "Placeholder description text goes here.",
  },
  {
    year: "20XX",
    title: "Milestone Title",
    description: "Placeholder description text goes here.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Our mission and the story behind TXT Aviation."
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold text-navy-900">Our Mission</h2>

        <div className="relative mt-10 max-w-xl">
          <div className="absolute top-2 bottom-2 left-[7px] w-0.5 bg-navy-800/20" />
          <div className="space-y-10">
            {timeline.map((entry, index) => (
              <div key={index} className="relative pl-10">
                <span className="absolute left-[8px] top-1 -translate-x-1/2 bg-white p-0.5">
                  <Image
                    src={`${basePath}/images/TXT_Aviation_icon_flat_red.png`}
                    alt=""
                    width={638}
                    height={543}
                    className="h-5 w-auto"
                  />
                </span>
                <p className="text-xs font-semibold uppercase tracking-widest text-red-600">
                  {entry.year}
                </p>
                <h3 className="mt-1 font-semibold text-navy-900">{entry.title}</h3>
                <p className="mt-1 text-sm text-navy-800/70">{entry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
