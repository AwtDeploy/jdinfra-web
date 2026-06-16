import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.jpg";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/investment", label: "Investment Advantage" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="JD Infra Developers" className="h-10 w-10 rounded-md object-cover md:h-11 md:w-11" />
          <div className="leading-tight">
            <div className="font-display text-base font-bold text-primary md:text-lg">JD Infra Developers</div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground md:text-xs">Anantapur</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-primary"
              activeProps={{ className: "rounded-md px-3 py-2 text-sm font-semibold text-primary bg-accent" }}
              activeOptions={{ exact: true }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <a
          href="tel:+919642166456"
          className="hidden items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-bold text-primary shadow-md transition hover:scale-105 lg:inline-flex"
        >
          <Phone className="h-4 w-4" /> Book a Call
        </a>
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6 text-primary" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="flex flex-col px-4 py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-accent"
                activeProps={{ className: "rounded-md px-3 py-3 text-base font-semibold text-primary bg-accent" }}
                activeOptions={{ exact: true }}
              >
                {n.label}
              </Link>
            ))}
            <a href="tel:+919642166456" className="mt-2 flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-center text-sm font-bold text-primary">
              <Phone className="h-4 w-4" /> Book a Call
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
