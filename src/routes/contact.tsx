import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { submitEnquiry } from "@/lib/api/enquiry.functions";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact JD Infra Developers | Book Vishnu Kuteer Visit" },
      {
        name: "description",
        content:
          "Get in touch with JD Infra Developers. Visit our office in Ramnagar Anantapur or book a site visit to Vishnu Kuteer.",
      },
      { property: "og:title", content: "Contact JD Infra Developers" },
      { property: "og:description", content: "Book your Vishnu Kuteer site visit today." },
    ],
  }),
  component: Contact,
});

const BUDGET_OPTIONS = [
  "Below 30 Lakhs",
  "30 to 50 Lakhs",
  "50 to 75 Lakhs",
  "Above 75 Lakhs",
] as const;

function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [budget, setBudget] = useState<string>(BUDGET_OPTIONS[0]);
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const result = await submitEnquiry({
        data: { name, phone, budget, message },
      });
      if (!result.ok) {
        setError(result.message);
        return;
      }
      setSent(true);
    } catch {
      setError("Could not submit your enquiry. Please call us at 9642166456.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="mx-auto max-w-5xl px-4 text-center md:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Contact Us</p>
          <h1 className="mt-4 font-display text-5xl font-bold md:text-6xl">
            Speak to Our Property Advisor
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg opacity-90">
            We are happy to walk you through villa options, pricing and the AHUDA approved layout.
            Reach us anytime.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:px-8">
        <div className="space-y-4">
          <div className="rounded-xl border border-border bg-card p-4">
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 flex-shrink-0 text-gold" />
              <div>
                <h3 className="font-display text-base font-bold text-primary">Call Us</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  <a href="tel:+919882342456" className="hover:text-primary">
                    9882342456
                  </a>
                  <br />
                  <a href="tel:+919642166456" className="hover:text-primary">
                    9642166456
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-card p-4">
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 flex-shrink-0 text-gold" />
              <div>
                <h3 className="font-display text-base font-bold text-primary">Email</h3>
                <a
                  href="mailto:jdinfradeveloper@gmail.com"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  jdinfradeveloper@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-card p-4">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 flex-shrink-0 text-gold" />
              <div>
                <h3 className="font-display text-base font-bold text-primary">Office Address</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  H.NO. 6-2-897, Meeseva Road
                  <br />
                  Near Venkateswara Swamy Temple
                  <br />
                  Ramnagar, Ananthapuramu
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-card p-4">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 flex-shrink-0 text-gold" />
              <div>
                <h3 className="font-display text-base font-bold text-primary">Site Address</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Survey No 120, Kurugunta Village
                  <br />
                  Kalyandurgam Main Road, Anantapur
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-card p-4">
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 flex-shrink-0 text-gold" />
              <div>
                <h3 className="font-display text-base font-bold text-primary">Business Hours</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Monday to Saturday 9:00 AM to 7:00 PM
                  <br />
                  Sunday 10:00 AM to 5:00 PM
                </p>
              </div>
            </div>
          </div>
          <a
            href="https://wa.me/919642166456"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-full bg-green-600 px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-green-700"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp Instant Chat
          </a>
        </div>

        <div className="rounded-3xl border border-gold/30 bg-accent/30 p-8">
          <h2 className="font-display text-3xl font-bold text-primary">Send Us an Enquiry</h2>
          <p className="mt-2 text-muted-foreground">We will reach out within one working day.</p>

          {sent ? (
            <div className="mt-8 rounded-xl border border-gold bg-card p-8 text-center">
              <h3 className="font-display text-2xl font-bold text-primary">Thank You</h3>
              <p className="mt-2 text-muted-foreground">
                Your enquiry has been recorded. Our advisor will call you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {error && (
                <p
                  className="rounded-lg border border-destructive/50 bg-destructive/10 px-4 py-3 text-sm text-destructive"
                  role="alert"
                >
                  {error}
                </p>
              )}
              <div>
                <label htmlFor="enquiry-name" className="text-sm font-medium text-foreground">
                  Name
                </label>
                <input
                  id="enquiry-name"
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={loading}
                  className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-3 outline-none focus:border-gold disabled:opacity-60"
                />
              </div>
              <div>
                <label htmlFor="enquiry-phone" className="text-sm font-medium text-foreground">
                  Phone
                </label>
                <input
                  id="enquiry-phone"
                  required
                  type="tel"
                  pattern="[0-9]{10}"
                  title="Enter a 10-digit mobile number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                  disabled={loading}
                  className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-3 outline-none focus:border-gold disabled:opacity-60"
                />
              </div>
              <div>
                <label htmlFor="enquiry-budget" className="text-sm font-medium text-foreground">
                  Budget
                </label>
                <select
                  id="enquiry-budget"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  disabled={loading}
                  className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-3 outline-none focus:border-gold disabled:opacity-60"
                >
                  {BUDGET_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="enquiry-message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="enquiry-message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  disabled={loading}
                  className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-3 outline-none focus:border-gold disabled:opacity-60"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Submitting…" : "Submit Enquiry"}
              </button>
            </form>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-16 md:px-8">
        <SectionHeading title="Find Us on the Map" />
        <div className="mt-8 overflow-hidden rounded-xl border border-border shadow-sm">
          <iframe
            title="JD Infra Developers Location"
            src="https://www.google.com/maps?q=Kurugunta+Village+Kalyandurgam+Anantapur&output=embed"
            width="100%"
            height="320"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
