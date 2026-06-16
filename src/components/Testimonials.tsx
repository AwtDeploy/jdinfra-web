import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const items = [
  {
    initials: "RS",
    name: "Rajesh Sharma",
    role: "Homeowner, Vishnu Kuteer",
    text: "JD Infra delivered our dream home exactly as promised. On time, within budget and with exceptional finish quality. The team was professional throughout.",
  },
  {
    initials: "PM",
    name: "Priya Mehta",
    role: "Investor, Anantapur",
    text: "The location and approvals gave us confidence. The build quality at Vishnu Kuteer exceeded expectations. Highly recommend JD Infra Developers.",
  },
  {
    initials: "AK",
    name: "Arjun Kumar",
    role: "Investor",
    text: "Invested in JD Infra's residential plan two years ago. The returns have been outstanding. Transparent process, genuine team and zero hidden charges.",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % items.length);
  const prev = () => setI((p) => (p - 1 + items.length) % items.length);
  const t = items[i];
  return (
    <section className="bg-primary py-16 text-primary-foreground md:py-20">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <SectionHeadingDark eyebrow="Client Stories" title="What Our Clients Say" />
        <div className="mt-10 rounded-2xl border border-gold/30 bg-primary-foreground/5 p-6 backdrop-blur md:p-10">
          <div className="flex items-center gap-1 text-gold">
            {Array.from({ length: 5 }).map((_, k) => (
              <Star key={k} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <Quote className="mt-4 h-7 w-7 text-gold" />
          <p className="mt-3 font-display text-lg italic leading-relaxed text-primary-foreground/90 md:text-xl">
            {t.text}
          </p>
          <div className="mt-6 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold font-display font-bold text-primary">
              {t.initials}
            </div>
            <div>
              <div className="font-display text-base font-bold">{t.name}</div>
              <div className="text-xs opacity-80">{t.role}</div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            aria-label="Previous"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold transition hover:bg-gold hover:text-primary"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2">
            {items.map((_, k) => (
              <button
                key={k}
                onClick={() => setI(k)}
                aria-label={`Go to slide ${k + 1}`}
                className={`h-1.5 rounded-full transition-all ${k === i ? "w-8 bg-gold" : "w-2 bg-gold/40"}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Next"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold transition hover:bg-gold hover:text-primary"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

function SectionHeadingDark({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">{title}</h2>
      <div className="mx-auto mt-3 h-[2px] w-16 bg-gold" />
    </div>
  );
}
