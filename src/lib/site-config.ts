export const siteConfig = {
  name: "TXT Aviation",
  tagline:
    "TXT Aviation provides expert maintenance services for all types of general aviation aircraft, based at DeLand Municipal Airport.",
  phone: "386-873-7111",
  phoneHref: "tel:+13868737111",
  email: "",
  address: {
    line1: "1200 Flight Line Blvd, Ste 4",
    line2: "DeLand, FL 32724",
    airport: "DeLand Municipal Airport (KDED)",
  },
  hours: [
    { days: "Mon–Fri", time: "8:00 AM – 6:00 PM" },
    { days: "Sat–Sun", time: "Closed" },
  ],
  social: {
    facebook: "https://www.facebook.com/TXTAviationLLC",
    instagram: "https://www.instagram.com/txtaviation/",
  },
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    slug: "airplane-maintenance",
    name: "Airplane Maintenance",
    description:
      "General A&P maintenance for all types of general aviation aircraft, from routine inspections to major repairs.",
  },
  {
    slug: "avionics-install",
    name: "Avionics Install",
    description:
      "Avionics upgrades and installations, from panel modernization to full glass-cockpit conversions.",
  },
  {
    slug: "ads-b-install",
    name: "ADS-B Install",
    description:
      "ADS-B Out equipment installation to keep your aircraft compliant with current airspace requirements.",
  },
  {
    slug: "powder-coating",
    name: "Powder Coating",
    description:
      "Durable powder coat finishing for aircraft components, built to hold up under real-world flight conditions.",
  },
  {
    slug: "sheet-metal-structure-repair",
    name: "Sheet Metal & Structure Repair",
    description:
      "Sheet metal fabrication and structural repair to bring damaged airframes back to airworthy condition.",
  },
  {
    slug: "engine-magneto-overhaul",
    name: "Engine & Magneto Overhaul/Repair",
    description:
      "Engine and magneto overhaul and repair performed to manufacturer specifications for dependable performance.",
  },
  {
    slug: "maintenance-programs",
    name: "Maintenance Programs",
    description:
      "Recurring, budget-based maintenance plans that keep your aircraft airworthy without surprise costs.",
  },
];

export const team = [
  {
    name: "Theodore Latchaw",
    title: "Director of Maintenance",
    bio: "A&P/IA mechanic with over 20 years of experience and a strong advocate for aviation.",
  },
  {
    name: "Bishoy Ibrahim",
    title: "Chief Financial Officer",
    bio: "Experienced accountant and skilled commercial pilot with CFI and CFII certificates.",
  },
  {
    name: "Mario Alejo",
    title: "Avionics Manager",
    bio: "",
  },
  {
    name: "Caleb Cummings",
    title: "Engine and Magneto Manager",
    bio: "",
  },
];

export const contactSubjects = [
  "Maintenance",
  "Avionics",
  "Powder Coating",
  "Sheet Metal",
  "Other",
];
