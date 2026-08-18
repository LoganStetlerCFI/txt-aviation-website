import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact Us" subtitle="Get in touch to schedule service or ask a question." />

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:grid-cols-2">
        <div>
          <h2 className="text-xl font-bold text-navy-900">Send Us a Message</h2>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold text-navy-900">Reach Us Directly</h2>
          <dl className="mt-6 space-y-4 text-navy-800/80">
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wide text-red-600">
                Phone
              </dt>
              <dd className="mt-1">
                <a href={siteConfig.phoneHref} className="hover:text-red-600">
                  {siteConfig.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wide text-red-600">
                Address
              </dt>
              <dd className="mt-1">
                {siteConfig.address.line1}
                <br />
                {siteConfig.address.line2}
                <br />
                {siteConfig.address.airport}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wide text-red-600">
                Hours
              </dt>
              <dd className="mt-1 space-y-1">
                {siteConfig.hours.map((h) => (
                  <p key={h.days}>
                    {h.days}: {h.time}
                  </p>
                ))}
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
}
