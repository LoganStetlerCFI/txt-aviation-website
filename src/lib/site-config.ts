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
      "General A&P maintenance for all types of general aviation aircraft, including annual and 100-hour inspections, troubleshooting, repairs, and component replacement. We take the time to identify the actual cause of a problem rather than simply addressing the symptoms, working closely with owners to explain discrepancies and prioritize repairs.",
  },
  {
    slug: "avionics-install",
    name: "Avionics Install",
    description:
      "Avionics installations, upgrades, troubleshooting, wiring, and system integration, including glass-panel systems, GPS navigators, autopilots, and engine monitoring equipment. As a Dynon dealer with Garmin experience, we help owners move from older analog equipment to modern integrated avionics while keeping the installation clean, reliable, and properly documented.",
  },
  {
    slug: "ads-b-install",
    name: "ADS-B Install",
    description:
      "ADS-B Out equipment installation and troubleshooting to keep your aircraft compliant with current airspace requirements. We also perform FAA-certified transponder and pitot-static system certifications, ensuring your communication, altitude reporting, and static systems are functioning properly.",
  },
  {
    slug: "powder-coating",
    name: "Powder Coating",
    description:
      "Durable powder coat finishing for aircraft components, built to hold up under real-world flight conditions. A tougher, longer-lasting alternative to traditional paint for parts that see repeated wear.",
  },
  {
    slug: "sheet-metal-structure-repair",
    name: "Sheet Metal & Structure Repair",
    description:
      "Sheet metal fabrication and structural repair to bring damaged airframes back to airworthy condition, including skin repairs, rib and bulkhead work, bracket fabrication, and corrosion repair. Aircraft structural repairs require precision and an understanding of aircraft construction — we restore components to spec, not just to \"good enough.\"",
  },
  {
    slug: "engine-magneto-overhaul",
    name: "Engine & Magneto Overhaul/Repair",
    description:
      "Engine and magneto inspection, troubleshooting, and repair performed to manufacturer specifications, including compression checks, ignition system work, and fuel and oil system troubleshooting. We properly diagnose the problem first, so you understand exactly what needs to be done and why.",
  },
];

export const team = [
  {
    name: "Mario Alejo Jr.",
    title: "Owner / Lead Technician",
    bio: [
      "Mario is the owner of TXT Aviation and has experience in aircraft maintenance and aviation systems spanning aircraft powerplants, avionics installation and troubleshooting, electrical systems, sheet metal and structural repairs, inspections, and aircraft modifications.",
      "Mario has a particular interest in complex aircraft projects and avionics modernization. He is focused on continuing to expand TXT Aviation's capabilities and developing the company into a trusted maintenance provider for more complex aircraft, including twin-engine and turbine-powered aircraft.",
    ],
    photo: null,
  },
];

export const contactSubjects = [
  "Maintenance",
  "Avionics",
  "Powder Coating",
  "Sheet Metal",
  "Other",
];
