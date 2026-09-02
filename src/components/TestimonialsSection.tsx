"use client";

import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

// Real Google reviews. All 5-star. No aircraft/location context available yet.
const testimonials = [
  {
    quote:
      "Great service. Really nice guys and very communicative. Found a problem with my prop boots that another place charges me to TRY and fix but had no idea what they were doing. Thankfully MT sent me to them. Inexpensive thorough and quick. Simply the best. Then MT WHO WAS ALSO FAB PUT THE COWLING BACK ON AND AWAY I WENT.",
    name: "Bernie Krupp",
    context: undefined,
  },
  {
    quote:
      "Best maintenance team and most friendly staff. The Txt A&Ps are professional and ensure the planes are fixed and safe to fly in a quick amount of time! They break down the issues for you and are happy to answer any questions.",
    name: "Kelly Albin",
    context: undefined,
  },
  {
    quote:
      "The people that work here are an incredible team. I have been getting maintenance and flying their plane for some time. I can honestly say that here you will only find professional who love aviation. I would recommend these people to anyone and I will be doing business with them for many years to come. Keep up the great work.",
    name: "Mike M",
    context: undefined,
  },
  {
    quote: "Great place, no complaints",
    name: "Braden",
    context: undefined,
  },
  {
    quote:
      "I had a great experience working with TXT Aviation. All of the guys put their heart and soul into the maintenance. Before I leave they always ask if there is anything else they can do for me. Honest, hardworking and a pleasure to work with. Shoutout to Nouran at the front desk who is always friendly and ready to assist!",
    name: "Maisie Herrera",
    context: undefined,
  },
  {
    quote:
      "Had a great experience with TXT! Was leaving for a trip in a couple days and had a loose VOR antenna on my 182. Everyone at TXT was very helpful. Mario, the mechanic was able to source the part and get me back in business for the trip. Also had them lubricate my prop cable and when they had the seat out the went ahead and vacuumed the interior. Mario was very communicative through the whole process. I'll definitely be using them again and would recommend them to anyone.",
    name: "John",
    context: undefined,
  },
  {
    quote:
      "Ted is our hero! We were grounded with a flat tire at KDED on a Sunday evening at 7pm. The FBO was closed and no one was around. Thankfully, Ted was still at his hanger, ready to leave when he came to our rescue and stayed late to help us. He towed us back and repaired our flat tire. He went above and beyond to help us. He was very knowledgeable and kind. He saved us from staying overnight in Deland. We were able to fly home that night. We are so thankful for his help.",
    name: "Philip Casey",
    context: undefined,
  },
  {
    quote:
      "Great service and communication. Trusted professionals, which is hard to find. The team at TXT know what they are doing and care about their customers. I recommend them for your avionics, magnetos, engine overhaul, etc. they have been great to me.",
    name: "VYDA Motors",
    context: undefined,
  },
  {
    quote:
      "The guys at TXT are top-notch! Service beyond awesome! Did a pre-buy for me that was very detailed and thorough. And, 3 guys worked late on a Friday night; they all came back and worked all day Saturday on a holiday weekend trouble-shooting and solving an alternator problem to get me on my way.",
    name: "Laurie Ingalls",
    context: undefined,
  },
  {
    quote:
      "Very helpful staff! Super thorough & provide excellent servicing. They definitely worked overtime and didn't quit until my job was done. Will be coming back in the near future, I was surely left satisfied by a professional here at TXT.",
    name: "Day",
    context: undefined,
  },
];

const CARD_GAP = 24;

// Rendered three times in sequence so there's always a full set of cards to
// scroll into on either side; once the scroll settles, the position is
// silently re-centered back into the middle copy (see the effect below) —
// the standard loop technique for an infinite scroll carousel.
const loopedTestimonials = [0, 1, 2].flatMap((copy) =>
  testimonials.map((testimonial, index) => ({
    ...testimonial,
    key: `${copy}-${index}`,
  })),
);

export default function TestimonialsSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    // Start centered in the middle copy so there's a full set of buffer
    // cards to scroll into in either direction from the first paint.
    el.scrollLeft = el.scrollWidth / 3;

    let settleTimeout: ReturnType<typeof setTimeout>;
    const recenterIfNeeded = () => {
      const setWidth = el.scrollWidth / 3;
      if (el.scrollLeft <= 1) {
        el.scrollLeft += setWidth;
      } else if (el.scrollLeft >= setWidth * 2 - 1) {
        el.scrollLeft -= setWidth;
      }
    };

    // Only recenter once scrolling has fully settled (debounced), so an
    // in-progress smooth scroll — from the arrow buttons or momentum swipe
    // — never gets interrupted by an instant jump. Since the content is
    // duplicated, the jump itself is visually undetectable either way.
    const onScroll = () => {
      clearTimeout(settleTimeout);
      settleTimeout = setTimeout(recenterIfNeeded, 150);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", recenterIfNeeded);
    return () => {
      clearTimeout(settleTimeout);
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", recenterIfNeeded);
    };
  }, []);

  const scrollByCard = (direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-testimonial-card]");
    const amount = (card?.offsetWidth ?? el.clientWidth * 0.85) + CARD_GAP;
    el.scrollBy({ left: amount * direction, behavior: "smooth" });
  };

  return (
    <section className="border-t border-navy-800/10 bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
          Client Feedback
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
          Trusted by Aircraft Owners.
        </h2>
      </div>

      <div className="relative mx-auto mt-10 max-w-6xl">
        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory items-start gap-6 overflow-x-auto px-6 pb-4 [-ms-overflow-style:none] [scroll-padding-inline:24px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {loopedTestimonials.map((testimonial) => (
            <div
              key={testimonial.key}
              data-testimonial-card
              className="w-[85vw] max-w-sm shrink-0 snap-start rounded-lg border border-navy-800/10 bg-slate-50 p-6 sm:w-[420px] sm:max-w-none"
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, star) => (
                  <Star key={star} className="h-4 w-4 fill-red-600 text-red-600" />
                ))}
              </div>
              <p className="mt-4 italic text-navy-800/80">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <p className="mt-4 font-semibold text-navy-900">{testimonial.name}</p>
              {testimonial.context && (
                <p className="mt-1 text-sm text-navy-800/50">{testimonial.context}</p>
              )}
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />

        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          aria-label="Scroll testimonials left"
          className="absolute left-2 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-navy-800/15 bg-white text-navy-800 shadow-sm transition-opacity hover:bg-slate-50 sm:flex"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          aria-label="Scroll testimonials right"
          className="absolute right-2 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-navy-800/15 bg-white text-navy-800 shadow-sm transition-opacity hover:bg-slate-50 sm:flex"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}
