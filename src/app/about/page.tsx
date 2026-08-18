import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import TeamCard from "@/components/TeamCard";
import { team } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Us" subtitle="Our mission, and the team behind the work." />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold text-navy-900">Our Mission</h2>
        <p className="mt-3 max-w-2xl text-navy-800/80">
          High-quality workmanship, fast turnaround, and a safety-first approach
          on every aircraft that comes through our shop.
        </p>
      </section>

      <section className="border-t border-navy-800/10 bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-bold text-navy-900">Our Team</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <TeamCard
                key={member.name}
                name={member.name}
                title={member.title}
                bio={member.bio}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
