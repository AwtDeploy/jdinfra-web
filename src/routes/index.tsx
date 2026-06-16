import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  CheckCircle2, MapPin, Home as HomeIcon, TrendingUp, Shield, Sparkles,
  FileText, Menu, Droplet, Leaf, Zap, Waves, Database, Smile, Sun, Camera, CloudRain,
  Compass, LayoutGrid, Maximize, Ruler, ChevronLeft, ChevronRight,
} from "lucide-react";
import villa from "@/assets/villa.jpg";
import streetView from "@/assets/street-view.jpg";
import archGate from "@/assets/arch-gate.jpg";
import simplex from "@/assets/simplex.jpg";
import grandEntranceArchIcon from "@/assets/grand-entrance-arch-icon.png";
import ccInternalRoadsIcon from "@/assets/internal cc roads.png";
import undergroundDrainageIcon from "@/assets/underground drainage.png";
import avenuePlantationIcon from "@/assets/avenue plantation.png";
import panchayatWaterSupplyIcon from "@/assets/panchayath water-supply.png";
import overheadWaterTankIcon from "@/assets/overhead water-tank.png";
import solarFencingLightsIcon from "@/assets/solar-fencing & lights .png";
import rainwaterHarvestingIcon from "@/assets/rain-water harvesting.png";
import cctvIcon from "@/assets/cctv-1-3.png";
import childrenPlayAreaIcon from "@/assets/children-play-area.png";
import gatedCommunityIcon from "@/assets/gated-community.png";
import { SectionHeading } from "@/components/SectionHeading";

const sliderImages = [
  { src: villa, alt: "Vishnu Kuteer Duplex Villa" },
  { src: simplex, alt: "Vishnu Kuteer Simplex Villa" },
  { src: archGate, alt: "Grand Entrance Arch" },
  { src: streetView, alt: "Vishnu Kuteer Street View" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vishnu Kuteer Villas in Kalyandurg Road | JD Infra Developers" },
      { name: "description", content: "Discover premium AHUDA approved villas on Kalyandurg Road Anantapur. Elegant modern living at a budget friendly price." },
      { property: "og:title", content: "Vishnu Kuteer Villas | JD Infra Developers" },
      { property: "og:description", content: "Premium AHUDA approved villas on Kalyandurg Road Anantapur." },
      { property: "og:image", content: villa },
    ],
  }),
  component: Home,
});

const highlights = [
  { icon: HomeIcon, t: "Premium Duplex and Simplex Villas", d: "Thoughtfully designed for modern families" },
  { icon: Compass, t: "East West and North Facing Options", d: "Choose your preferred orientation" },
  { icon: LayoutGrid, t: "2 BHK and 3 BHK Configurations", d: "Flexible floor plans to suit your needs" },
  { icon: Maximize, t: "Approx 2000 Sqft Duplex Villas", d: "Generous living space for every room" },
  { icon: Ruler, t: "Vastu Compliant Planning", d: "Harmonious energy in every corner" },
  { icon: Sparkles, t: "Contemporary Elevation Design", d: "Modern aesthetics with timeless appeal" },
];

const features = [
  { image: grandEntranceArchIcon, t: "Grand Entrance Arch" },
  { image: ccInternalRoadsIcon, t: "CC Internal Roads" },
  { image: undergroundDrainageIcon, t: "Underground Drainage" },
  { image: avenuePlantationIcon, t: "Avenue Plantation" },
  { image: panchayatWaterSupplyIcon, t: "Panchayat Water Supply" },
  { image: overheadWaterTankIcon, t: "Overhead Water Tank" },
  { image: solarFencingLightsIcon, t: "Solar Fencing and Lights" },
  { image: rainwaterHarvestingIcon, t: "Rainwater Harvesting" },
  { image: cctvIcon, t: "24x7 CCTV Surveillance" },
  { image: childrenPlayAreaIcon, t: "Children Play Area" },
  { image: gatedCommunityIcon, t: "Gated Community" },
];

const locations = [
  { t: "Kalyandurg Road", s: "Prime Residential Zone" },
  { t: "Near Kurugunta Village", s: "Serene Neighbourhood" },
  { t: "Close to Whitefield Area", s: "Emerging Growth Corridor" },
  { t: "Delhi Public School", s: "Nearby Educational Institutions" },
  { t: "Bangalore Hyderabad Highway", s: "Easy Access and Connectivity" },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 -z-10 animate-ken-burns bg-cover bg-center"
          style={{ backgroundImage: `url(${villa})` }}
        />
        <div className="absolute inset-0 -z-10 gradient-hero" />
        <div className="mx-auto flex min-h-[78vh] max-w-7xl flex-col justify-center px-4 py-20 text-primary-foreground md:px-8">
          <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.3em] text-gold md:text-sm">
            JD Infra Developers • Anantapur
          </p>
          <h1 className="mt-3 max-w-4xl animate-fade-up font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Vishnu Kuteer
            <span className="block text-gold">Premium Villas in Kalyandurg Road</span>
          </h1>
          <p className="mt-5 max-w-2xl animate-fade-up text-sm leading-relaxed text-white/85 md:text-base">
            Elegant living at a budget friendly price. Modern design.
            <br />
            Prime location. Future ready investment.
          </p>
          <div className="mt-8 flex animate-fade-up flex-wrap gap-3">
            <a href="tel:+919642166456" className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-primary shadow-lg transition hover:scale-105">
              Book a Call
            </a>
            <a href="https://wa.me/919642166456" target="_blank" rel="noreferrer" className="rounded-full border-2 border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-primary">
              WhatsApp Now
            </a>
            <Link to="/contact" className="rounded-full border-2 border-gold px-6 py-3 text-sm font-semibold text-gold transition hover:bg-gold hover:text-primary">
              Schedule Site Visit
            </Link>
          </div>
        </div>

        {/* AHUDA Badge */}
        <div className="absolute right-4 top-20 hidden animate-float-slow rounded-full border-2 border-gold bg-primary/80 px-4 py-2 text-center text-primary-foreground backdrop-blur md:block">
          <div className="text-[10px] uppercase tracking-widest text-gold">Exclusive</div>
          <div className="font-display text-sm font-bold">AHUDA Approved</div>
          <div className="text-[10px] opacity-80">Site and House</div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-border bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 md:grid-cols-4 md:px-8">
          {[
            { t: "Premium Villa", s: "Development" },
            { t: "Prime Location", s: "Kalyandurg Road" },
            { t: "Budget Friendly", s: "Pricing" },
            { t: "Modern Living", s: "Designed for You" },
          ].map((b) => (
            <div key={b.t} className="text-center">
              <div className="font-display text-base font-bold text-gold md:text-lg">{b.t}</div>
              <div className="text-xs opacity-80">{b.s}</div>
            </div>
          ))}
        </div>
      </section>

      {/* AHUDA HIGHLIGHT */}
      <section className="bg-accent">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-4 py-10 text-center md:flex-row md:px-8 md:text-left">
          <Shield className="h-12 w-12 flex-shrink-0 text-gold" />
          <div className="flex-1">
            <h3 className="font-display text-lg font-bold text-primary md:text-2xl">
              The one and only AHUDA approved project on Kalyandurgam Road
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Both the site and houses carry full AHUDA approvals. A rare assurance of legal clarity and long term value.
            </p>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">About the Project</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary md:text-4xl">Vishnu Kuteer</h2>
            <div className="mt-4 h-[2px] w-16 bg-gold" />
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              A thoughtfully crafted premium villa community by JD Infra Developers, located on the fast developing Kalyandurg Road in Anantapur.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Designed for families and investors alike, this project blends elegant architecture, smart layouts and modern infrastructure to deliver a refined lifestyle at an accessible price.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
              {[["2 and 3", "BHK"], ["2000", "Sqft"], ["100%", "Vastu"], ["3", "Facings"]].map(([n, l]) => (
                <div key={l} className="rounded-lg border border-border bg-card p-3 text-center">
                  <div className="font-display text-xl font-bold text-primary">{n}</div>
                  <div className="text-[11px] text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <ProjectSlider />
        </div>
      </section>

      {/* CRAFTED FOR PREMIUM LIVING — Highlights + Features two-column */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeading
            eyebrow="Crafted for Premium Living"
            title="Everything You Need, Nothing Else"
            sub="A complete villa community designed around modern family life and long term value."
          />

          <div className="mt-12 space-y-12">
            {/* Villa Highlights — 3×2 grid */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">What You Get</p>
              <h3 className="mt-2 font-display text-2xl font-bold text-primary md:text-3xl">Villa Highlights</h3>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {highlights.map(({ icon: Icon, t, d }) => (
                  <div key={t} className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-5 text-center transition hover:border-gold hover:shadow-sm">
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

            {/* Project Features — below highlights */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Infrastructure</p>
              <h3 className="mt-2 font-display text-2xl font-bold text-primary md:text-3xl">Project Features</h3>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                {features.map(({ icon: Icon, image, t }) => (
                  <div key={t} className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-4 text-center transition hover:border-gold hover:shadow-sm">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent">
                      {image ? (
                        <img src={image} alt="" className="h-7 w-7 object-contain" />
                      ) : (
                        <Icon className="h-5 w-5 text-gold" />
                      )}
                    </div>
                    <span className="text-xs font-medium text-foreground">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION ADVANTAGE */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <SectionHeading
          eyebrow="Where We Are"
          title="Location Advantage"
          sub="Strategically located in a high growth corridor of Anantapur."
        />
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {locations.map((l) => (
            <div key={l.t} className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.75rem)] rounded-2xl border border-border bg-card p-5 text-center transition hover:border-gold hover:shadow-md">
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-accent">
                <MapPin className="h-5 w-5 text-gold" />
              </div>
              <h4 className="mt-4 font-display text-base font-bold text-primary">{l.t}</h4>
              <p className="mt-1 text-xs font-medium text-gold">{l.s}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURE IMAGE */}
      <section className="mx-auto max-w-7xl px-4 pb-16 md:px-8 md:pb-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <img src={archGate} alt="Grand Entrance Arch" className="rounded-2xl shadow-xl" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Built to Last</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary md:text-4xl">A Community Crafted with Care</h2>
            <div className="mt-4 h-[2px] w-16 bg-gold" />
            <p className="mt-5 text-base text-muted-foreground">
              Every detail from the grand entrance arch to the smallest landscape choice has been considered. Vishnu Kuteer combines elegant elevation, smart planning and dependable infrastructure to offer a truly premium villa lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* STREET VIEW */}
      <section className="relative isolate overflow-hidden">
        <img src={streetView} alt="Vishnu Kuteer Street View" className="h-[45vh] w-full object-cover md:h-[55vh]" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-4 pb-10 text-primary-foreground md:px-8">
          <h3 className="font-display text-2xl font-bold md:text-4xl">A Community Built on Trust</h3>
          <p className="mt-2 max-w-2xl text-sm opacity-90 md:text-base">
            Gated layout. Solar street lights. CCTV surveillance. Peace of mind by design.
          </p>
        </div>
      </section>

      {/* WHY */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeading eyebrow="Why Choose Us" title="Why Vishnu Kuteer" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { i: HomeIcon, t: "Premium Lifestyle", d: "At a genuinely budget friendly price." },
              { i: TrendingUp, t: "Rapid Growth Corridor", d: "Kalyandurg Road is rapidly developing." },
              { i: Shield, t: "Secure Gated Community", d: "24x7 CCTV and solar fencing for safety." },
              { i: MapPin, t: "Ideal for Investors", d: "High appreciation in an emerging zone." },
            ].map(({ i: Icon, t, d }) => (
              <div key={t} className="rounded-2xl border border-border bg-card p-6 text-center transition hover:border-gold hover:shadow-lg">
                <Icon className="mx-auto h-9 w-9 text-gold" />
                <h3 className="mt-3 font-display text-lg font-bold text-primary">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-5xl px-4 py-16 text-center md:px-8 md:py-20">
        <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">
          Own Your Premium Villa in Kalyandurg Road Today
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
          Book a personal site visit and explore the only AHUDA approved villa community on Kalyandurgam Road.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="tel:+919642166456" className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90">Call Now</a>
          <a href="https://wa.me/919642166456" target="_blank" rel="noreferrer" className="rounded-full bg-gold px-7 py-3 text-sm font-semibold text-primary transition hover:scale-105">WhatsApp</a>
          <Link to="/contact" className="rounded-full border-2 border-primary px-7 py-3 text-sm font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground">Book Visit</Link>
        </div>
      </section>
    </>
  );
}

function ProjectSlider() {
  const [current, setCurrent] = useState(0);
  const total = sliderImages.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  return (
    <div className="relative overflow-hidden rounded-2xl shadow-2xl">
      {/* Images */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {sliderImages.map((img) => (
          <img
            key={img.alt}
            src={img.src}
            alt={img.alt}
            className="w-full flex-shrink-0 object-cover"
          />
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/70 text-white shadow-lg backdrop-blur transition hover:bg-primary"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/70 text-white shadow-lg backdrop-blur transition hover:bg-primary"
        aria-label="Next image"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {sliderImages.map((img, i) => (
          <button
            key={img.alt}
            onClick={() => setCurrent(i)}
            className={`h-2.5 w-2.5 rounded-full border border-white/60 transition ${
              i === current ? "bg-gold scale-110" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* AHUDA Badge */}
      <div className="absolute bottom-4 right-4 rounded-lg bg-primary px-3 py-2 text-primary-foreground shadow-xl">
        <div className="text-[10px] uppercase tracking-wider text-gold">AHUDA</div>
        <div className="font-display text-sm font-bold">Approved Project</div>
      </div>
    </div>
  );
}
