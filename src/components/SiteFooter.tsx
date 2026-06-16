import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpg";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4 md:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="JD Infra Developers" className="h-11 w-11 rounded-md object-cover" />
            <span className="font-display text-lg font-bold">JD Infra Developers</span>
          </div>
          <p className="mt-4 text-sm opacity-80">
            Premium villa developments in Anantapur. Where budget meets elegance.
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg text-gold">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="hover:text-gold">Home</Link></li>
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
            <li><Link to="/projects" className="hover:text-gold">Projects</Link></li>
            <li><Link to="/investment" className="hover:text-gold">Investment Advantage</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg text-gold">Office Address</h4>
          <div className="mt-4 flex items-start gap-2 text-sm opacity-90">
            <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
            <span>
              H.NO. 6-2-897, Meeseva Road<br />
              Near Venkateswara Swamy Temple<br />
              Ramnagar, Ananthapuramu
            </span>
          </div>
        </div>
        <div>
          <h4 className="font-display text-lg text-gold">Reach Us</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-gold" /><span>9882342456<br />9642166456</span></li>
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-gold" /><span>jdinfradeveloper@gmail.com</span></li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" /><span>Survey No 120, Kurugunta Village, Kalyandurgam Main Road, Anantapur</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-5 px-4 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 text-xs opacity-70 md:flex-row">
          <span>© {new Date().getFullYear()} JD Infra Developers. All rights reserved.</span>
          <span>Developed by Angadi World Technologies (AWT)</span>
        </div>
      </div>
    </footer>
  );
}
