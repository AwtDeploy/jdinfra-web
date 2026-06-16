import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { Bed, Bath, Car, Maximize, Check, MapPin, Home, Compass, LayoutGrid, Ruler, Sparkles } from "lucide-react";
import simplex from "@/assets/simplex.jpg";
import streetView from "@/assets/street-view.jpg";
import archGate from "@/assets/arch-gate.jpg";
import villa from "@/assets/villa.jpg";
import eastFacing from "@/assets/simplex.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Vishnu Kuteer Villas | Projects by JD Infra Developers" },
      { name: "description", content: "Explore Vishnu Kuteer premium duplex and simplex villas on Kalyandurg Road Anantapur." },
      { property: "og:title", content: "Vishnu Kuteer Villas | Projects" },
      { property: "og:description", content: "Premium duplex and simplex villas in Anantapur." },
    ],
  }),
  component: Projects,
});

const configs = [
  {
    title: "Duplex Villa",
    img: villa,
    site: "32 x 45 (3.3 Cents)",
    bhk: "3 BHK",
    bath: "3 Bath",
    car: "1 Car",
    rows: [
      ["Ground Floor", "965 Sq Ft"],
      ["First Floor", "965 Sq Ft"],
      ["Head Room", "90 Sq Ft"],
      ["Total Built Up", "2020 Sq Ft"],
    ],
    facing: "East and West Facing Available",
  },
  {
    title: "Simplex Villa",
    img: simplex,
    site: "32 x 45 (3.3 Cents)",
    bhk: "2 BHK",
    bath: "2 Bath",
    car: "1 Car",
    rows: [
      ["Ground Floor", "960 Sq Ft"],
      ["Head Room", "80 Sq Ft"],
      ["Total Built Up", "1040 Sq Ft"],
    ],
    facing: "East and West Facing Available",
  },
];

const specs = [
  { t: "RCC Framed Structure", d: "Earthquake resistant reinforced framework" },
  { t: "Quality Flooring and Finishes", d: "Premium tiles and polished interior surfaces" },
  { t: "Premium Doors and Windows", d: "Hardwood frames with sound insulation" },
  { t: "Modern Electrical and Plumbing Systems", d: "ISI certified fittings with concealed wiring" },
  { t: "Secure Gated Layout", d: "24 by 7 security with CCTV and boundary walls" },
  { t: "Contemporary Elevation", d: "Modern architectural design with premium finish" },
];

function Projects() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-primary py-20 text-primary-foreground md:py-24">
        <div className="absolute inset-0 -z-10 opacity-25 bg-cover bg-center" style={{ backgroundImage: `url(${streetView})` }} />
        <div className="mx-auto max-w-5xl px-4 text-center md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">Our Projects</p>
          <h1 className="mt-4 font-display text-4xl font-bold md:text-6xl">KSK Vishnu Kuteer</h1>
          <p className="mx-auto mt-6 max-w-3xl text-base opacity-90 md:text-lg">
            A premium AHUDA approved gated villa community on Kalyandurgam Main Road Anantapur. Modern duplex and simplex homes designed for life.
          </p>
        </div>
      </section>

      {/* Premium Duplex Villas Overview (white) */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">Vishnu Kuteer . Anantapur</p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-primary md:text-5xl">
              Premium <span className="text-gold">Duplex Villas</span>
            </h2>
            <div className="mt-3 h-[2px] w-16 bg-gold" />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              Vishnu Kuteer is a premium residential villa project designed for modern families seeking{" "}
              <span className="font-semibold text-foreground">comfort, elegance, and long term value</span>. Set on the fast developing Kalyandurg Road, it offers a rare combination of urban connectivity and serene living.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Configuration</p>
                <p className="mt-2 font-display text-lg font-bold text-primary">Duplex Plus Simplex</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Location</p>
                <p className="mt-2 font-display text-lg font-bold text-primary">Kalyandurg Road Anantapur</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Area</p>
                <p className="mt-2 font-display text-lg font-bold text-primary">Up to 2020 Sq Ft</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Status</p>
                <p className="mt-2 font-display text-lg font-bold text-green-700">Now Selling</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90">Book a Site Visit</Link>
              <Link to="/investment" className="rounded-full border border-primary px-7 py-3 text-sm font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground">View Investment Plans</Link>
            </div>
          </div>

          <div className="relative">
            <img src={eastFacing} alt="Vishnu Kuteer East Facing Premium Duplex Villa" className="w-full rounded-2xl object-cover shadow-2xl" />
            <div className="absolute right-4 top-4 rounded-lg bg-gold px-4 py-2 text-center text-primary shadow-lg md:right-6 md:top-6">
              <p className="font-display text-base font-bold leading-none md:text-lg">3 BHK</p>
              <p className="mt-1 text-[10px] font-semibold tracking-[0.2em] md:text-xs">DUPLEX VILLA</p>
            </div>
            <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-background/95 px-4 py-2 text-xs font-medium text-primary shadow-md md:text-sm">
              <MapPin className="h-4 w-4 text-gold" /> Kalyandurg Road Anantapur
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 md:px-8">
        <SectionHeading eyebrow="Configurations" title="Villa Plans Available" sub="Choose from two thoughtfully designed Vastu compliant villa formats." />
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {configs.map((c) => (
            <article key={c.title} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:shadow-xl">
              <img src={c.img} alt={c.title} className="h-64 w-full object-cover md:h-72" style={{ aspectRatio: "4 / 3" }} />
              <div className="p-6 md:p-7">
                <h3 className="font-display text-2xl font-bold text-primary">{c.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.facing}</p>
                <div className="mt-4 flex flex-wrap gap-4 border-y border-border py-3 text-sm">
                  <span className="flex items-center gap-1.5"><Maximize className="h-4 w-4 text-gold" /> {c.site}</span>
                  <span className="flex items-center gap-1.5"><Bed className="h-4 w-4 text-gold" /> {c.bhk}</span>
                  <span className="flex items-center gap-1.5"><Bath className="h-4 w-4 text-gold" /> {c.bath}</span>
                  <span className="flex items-center gap-1.5"><Car className="h-4 w-4 text-gold" /> {c.car}</span>
                </div>
                <dl className="mt-4 space-y-1.5">
                  {c.rows.map(([k, v]) => (
                    <div key={k} className="flex justify-between text-sm">
                      <dt className="text-muted-foreground">{k}</dt>
                      <dd className="font-semibold text-foreground">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Villa Highlights — 3×2 grid */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeading
            eyebrow="Villa Highlights"
            title="What You Get at Vishnu Kuteer"
            sub="Every detail designed for modern premium living."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
            {[
              { icon: Home, t: "Premium Duplex and Simplex Villas", d: "Thoughtfully designed for modern families" },
              { icon: Compass, t: "East West and North Facing Options", d: "Choose your preferred orientation" },
              { icon: LayoutGrid, t: "2 BHK and 3 BHK Configurations", d: "Flexible floor plans to suit your needs" },
              { icon: Maximize, t: "Approx 2000 Sqft Duplex Villas", d: "Generous living space for every room" },
              { icon: Ruler, t: "Vastu Compliant Planning", d: "Harmonious energy in every corner" },
              { icon: Sparkles, t: "Contemporary Elevation Design", d: "Modern aesthetics with timeless appeal" },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 text-center transition hover:border-gold hover:shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                  <Icon className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <div className="font-display text-sm font-bold text-primary">{t}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Specifications */}
      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <img src={archGate} alt="Vishnu Kuteer Villa" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl" />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">What You Get</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-primary md:text-5xl">
                Premium <span className="text-gold">Specifications</span>
              </h2>
              <div className="mt-3 h-[2px] w-16 bg-gold" />

              <div className="mt-6 space-y-3">
                {specs.map((s) => (
                  <div key={s.t} className="flex items-start gap-3 rounded-lg border border-border bg-card p-3 md:p-3.5">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent">
                      <Check className="h-4 w-4 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-display text-sm font-bold text-primary md:text-base">{s.t}</h4>
                      <p className="mt-0.5 text-xs text-muted-foreground md:text-sm">{s.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-20 text-center md:px-8">
        <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">Ready to Walk Through Your Future Home</h2>
        <Link to="/contact" className="mt-6 inline-block rounded-full bg-gold px-8 py-3.5 font-semibold text-primary transition hover:scale-105">
          Schedule a Site Visit
        </Link>
      </section>
    </>
  );
}
