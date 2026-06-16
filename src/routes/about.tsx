import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { Testimonials } from "@/components/Testimonials";
import { CheckCircle2, Quote, Star, TrendingUp, Shield, Users } from "lucide-react";
import villa from "@/assets/villa.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About JD Infra Developers | Premium Real Estate Anantapur" },
      { name: "description", content: "JD Infra Developers is a forward thinking real estate company in Anantapur building premium villa communities." },
      { property: "og:title", content: "About JD Infra Developers" },
      { property: "og:description", content: "Premium real estate developers in Anantapur." },
    ],
  }),
  component: About,
});

const whyReasons = [
  {
    n: "01",
    icon: Star,
    t: "Premium Lifestyle at Budget Pricing",
    d: "Enjoy luxury villa living with modern elevation, Vastu compliant planning and premium finishes without the premium price tag. The best value per square foot in Anantapur.",
  },
  {
    n: "02",
    icon: TrendingUp,
    t: "Rapidly Developing Location",
    d: "Kalyandurg Road is one of Anantapur fastest growing corridors. With infrastructure investments and urban expansion accelerating, land values are on a strong upward trajectory.",
  },
  {
    n: "03",
    icon: Users,
    t: "Ideal for Families and Investors",
    d: "Whether you are looking for your forever home or a high yield investment, Vishnu Kuteer delivers spacious layouts for families and strong appreciation for investors.",
  },
  {
    n: "04",
    icon: Shield,
    t: "Secure Gated Community Living",
    d: "Solar fencing, 24x7 CCTV surveillance, grand entrance arch and CC internal roads make this a fully secured self contained community where peace of mind comes built in.",
  },
];

function About() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-primary py-20 text-primary-foreground md:py-24">
        <div className="absolute inset-0 -z-10 opacity-30 bg-cover bg-center" style={{ backgroundImage: `url(${villa})` }} />
        <div className="mx-auto max-w-5xl px-4 text-center md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold md:text-sm">About Us</p>
          <h1 className="mt-3 font-display text-3xl font-bold sm:text-4xl md:text-5xl">Building Trust. Crafting Homes.</h1>
          <p className="mx-auto mt-5 max-w-3xl text-base opacity-90">
            JD Infra Developers is a forward thinking real estate and infrastructure company based in Anantapur dedicated to delivering high quality residential developments.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 md:px-8 md:py-20">
        <SectionHeading eyebrow="Company Overview" title="Who We Are" />
        <p className="mt-7 text-center text-base leading-relaxed text-muted-foreground md:text-lg">
          With a focus on strategic locations and modern design, we create properties that offer both lifestyle value and long term investment growth. Every Vishnu Kuteer villa reflects our commitment to quality, transparency and customer satisfaction.
        </p>
      </section>

      {/* VISION + MISSION */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-2 md:px-8">
          <div className="rounded-2xl border border-border bg-card p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">Vision</p>
            <h3 className="mt-2 font-display text-xl font-bold text-primary md:text-2xl">Our Vision</h3>
            <div className="mt-3 h-[2px] w-12 bg-gold" />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              To establish JD Infra Developers as a leading premium real estate brand in Anantapur creating properties that combine modern design, strategic location and exceptional value.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">Mission</p>
            <h3 className="mt-2 font-display text-xl font-bold text-primary md:text-2xl">Our Mission</h3>
            <div className="mt-3 h-[2px] w-12 bg-gold" />
            <ul className="mt-4 space-y-2">
              {[
                "Deliver quality driven developments",
                "Maintain transparency in every transaction",
                "Provide value based investment opportunities",
                "Ensure complete customer satisfaction",
              ].map((m) => (
                <li key={m} className="flex items-start gap-2 text-sm text-muted-foreground md:text-base">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* MANAGEMENT MESSAGE with image */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            <img src={villa} alt="Vishnu Kuteer Villa" className="h-full w-full object-cover" />
            <div className="absolute bottom-4 left-4 rounded-lg bg-primary px-4 py-2 text-primary-foreground shadow-lg">
              <div className="text-[10px] uppercase tracking-widest text-gold">Vishnu Kuteer</div>
              <div className="font-display text-sm font-bold">Kalyandurg Road, Anantapur</div>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Management Message</p>
            <div className="mt-4 rounded-2xl border border-gold/30 bg-accent/40 p-6 md:p-8">
              <Quote className="h-7 w-7 text-gold" />
              <blockquote className="mt-3 font-display text-lg italic leading-relaxed text-primary md:text-xl">
                At JD Infra Developers we believe that every home we build is a commitment to quality, trust and future growth. Vishnu Kuteer reflects our vision of delivering premium living at accessible pricing.
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold font-display font-bold text-primary">
                  JD
                </div>
                <div>
                  <div className="font-display text-sm font-bold text-primary">JD Infra Developers</div>
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Management</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY VISHNU KUTEER */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Why Vishnu Kuteer"
            sub="Four compelling reasons this project stands apart from the rest."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {whyReasons.map(({ n, icon: Icon, t, d }) => (
              <div key={n} className="relative rounded-2xl border border-border bg-card p-6 transition hover:border-gold hover:shadow-lg md:p-7">
                <div className="flex items-start gap-4">
                  <div className="font-display text-3xl font-bold text-gold/30 md:text-4xl">{n}</div>
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-accent">
                    <Icon className="h-5 w-5 text-gold" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-display text-base font-bold text-primary md:text-lg">{t}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT OUR CLIENTS SAY */}
      <Testimonials />

      {/* WHY JD INFRA quick badges */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <SectionHeading title="Why JD Infra Developers" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Strategically Located Projects",
              "Premium Yet Affordable Developments",
              "Transparent Documentation",
              "Customer Centric Approach",
              "End to End Support",
              "AHUDA Approved Project",
            ].map((w) => (
              <div key={w} className="rounded-lg border border-border bg-card p-5">
                <CheckCircle2 className="h-5 w-5 text-gold" />
                <h4 className="mt-2 font-display text-base font-bold text-primary">{w}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
