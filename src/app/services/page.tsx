import type { Metadata } from "next";
import Image from "next/image";
import {
  Cog,
  Gauge,
  Hammer,
  RadioTower,
  SprayCan,
  Wrench,
} from "lucide-react";
import { basePath } from "@/lib/base-path";
import { services } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Services",
};

const serviceIcons: Record<string, typeof Wrench> = {
  "airplane-maintenance": Wrench,
  "avionics-install": Gauge,
  "ads-b-install": RadioTower,
  "powder-coating": SprayCan,
  "sheet-metal-structure-repair": Hammer,
  "engine-magneto-overhaul": Cog,
};

const serviceImages: Record<string, { src: string; alt: string }> = {
  "airplane-maintenance": {
    src: `${basePath}/images/txt-aviation-panel-1.jpg`,
    alt: "TXT Aviation technician performing maintenance inside an aircraft cockpit",
  },
  "avionics-install": {
    src: `${basePath}/images/txt-aviation-panel-2.jpg`,
    alt: "Modern Garmin glass avionics panel installed by TXT Aviation",
  },
  "engine-magneto-overhaul": {
    src: `${basePath}/images/txt-aviation-engine-shop-cover-cleaned.jpg`,
    alt: "TXT Aviation technicians working on an aircraft engine in the shop",
  },
};

export default function ServicesPage() {
  return (
    <section
      id="services"
      className="scroll-mt-24 border-t border-navy-800/10 bg-white py-16"
    >
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
          Our Services
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
          Complete Maintenance Capability.
        </h2>
        <p className="mt-4 max-w-2xl text-navy-800/70">
          From routine inspections to complex avionics and structural work,
          our certified technicians handle every stage of aircraft
          maintenance under one roof.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {services.map((service) => {
            const Icon = serviceIcons[service.slug];
            const image = serviceImages[service.slug];
            return (
              <div
                key={service.slug}
                className="overflow-hidden rounded-lg border-[6px] border-navy-700/20 bg-navy-900/8 shadow-sm transition-shadow hover:shadow-md"
              >
                {image ? (
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex aspect-[16/10] w-full items-center justify-center border-b border-dashed border-navy-800/20 bg-slate-50 text-sm text-navy-800/40">
                    Photo coming soon
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <Icon className="h-6 w-6 shrink-0 text-red-600" />
                    <h3 className="font-semibold text-navy-900">{service.name}</h3>
                  </div>
                  <p className="mt-3 text-sm text-navy-800/70">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
