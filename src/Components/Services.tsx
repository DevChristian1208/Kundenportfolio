"use client";

import Link from "next/link";

type Tier = {
  name: string;
  id: string;
  price: string;
  description: string;
  features: string[];
  highlight?: boolean;
  badge?: string;
  cta?: { label: string; href: string };
};

const TIERS: Tier[] = [
  {
    name: "Starter Paket",
    id: "tier-starter",
    price: "ab 650€",
    description:
      "Ideal für den schnellen Einstieg: eine performante, mobilfreundliche Landing Page.",
    features: [
      "1 Seite (Landing Page) – neu erstellt in Next.js",
      "Optimiert für mobile Geräte & Ladegeschwindigkeit",
      "Kontaktformular & rechtliche Seiten (Impressum, DSGVO)",
      "Domain-Einrichtung inklusive Unterstützung",
      "Optional: Hosting über mich mit Vercel",
      "Optional: Pflege & Wartung buchbar (z. B. Textänderungen, Backups)",
    ],
  },
  {
    name: "Business Paket",
    id: "tier-business",
    price: "ab 800€",
    description:
      "Ideal für kleine Unternehmen, die Leistungen, Team & Kontakt strukturiert präsentieren wollen.",
    features: [
      "Individuelles Design mit Animationen & Effekten",
      "3–5 Seiten (z. B. Start, Leistungen, Über uns, Kontakt)",
      "Neu entwickelt mit Next.js (modern, sicher, schnell)",
      "Domain-Einrichtung inklusive Hilfe",
      "Individuelle Features und Funktionen",
      "Optional: Hosting über mich mit Vercel",
      "Optional: Pflege & Wartung buchbar (z. B. Textänderungen, Backups)",
    ],
    badge: "Empfohlen",
    highlight: true,
  },
  {
    name: "Premium Paket",
    id: "tier-premium",
    price: "ab 900€",
    description:
      "Maßgeschneiderte Weblösung mit besonderen Funktionen, individuellem Design & technischer Betreuung.",
    features: [
      "Individuelles Design mit Animationen & Effekten",
      "Beliebig viele Seiten",
      "Blog, Galerie, FAQ oder individuelle Features",
      "Beste Performance, Sicherheit & SEO durch Next.js",
      "Domain-Einrichtung inklusive Support",
      "Optional: Hosting über mich mit Vercel",
      "4 Monate Pflege & Updates inklusive (danach optional weiterführbar)",
    ],
  },
];

function cx(...c: Array<string | false | null | undefined>) {
  return c.filter(Boolean).join(" ");
}

export default function Services() {
  return (
    <section
      id="service"
      className="relative isolate text-slate-800 bg-[linear-gradient(to_bottom,_#ffffff_0%,_#f7f9ff_65%,_#46466a_92%)]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[80%] -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,.07),transparent_45%),radial-gradient(circle_at_80%_60%,rgba(236,72,153,.06),transparent_45%)]" />
        <div
          className="absolute inset-0 opacity-50 [mask-image:linear-gradient(to_bottom,white,transparent_85%)]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(2,6,23,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(2,6,23,.055) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-24 -z-10 bg-gradient-to-b from-transparent to-[#3f3f5f]" />

      <div className="container mx-auto px-4 py-24">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-rose-500 font-semibold uppercase tracking-wider text-xs">
            Was ich anbiete
          </span>
          <h2 className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight">
            Meine Pakete
          </h2>
          <p className="mt-3 text-slate-700">
            Ob kleiner Betrieb oder wachsendes Unternehmen – ich biete passende
            Weblösungen, die modern aussehen, schnell laufen und Kunden
            gewinnen. Bestehende Webseiten werden bei Bedarf technisch modern &
            sicher neu aufgesetzt – mit dem modernen Framework{" "}
            <strong>Next.js</strong>. Hosting & laufende Pflege kannst du bei
            Bedarf direkt über mich buchen.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TIERS.map((t) => {
            const hot = t.highlight;
            return (
              <div
                key={t.id}
                className={cx(
                  "group relative rounded-3xl border bg-white/90 p-8 backdrop-blur shadow-[0_12px_30px_-10px_rgba(2,6,23,0.15)] transition hover:shadow-[0_22px_60px_-10px_rgba(2,6,23,0.20)]",
                  hot ? "border-rose-200/90" : "border-slate-200/90"
                )}
              >
                <span
                  className={cx(
                    "pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-700",
                    hot
                      ? "group-hover:opacity-100 [background:conic-gradient(from_180deg,rgba(244,63,94,.35),rgba(59,130,246,.35),rgba(99,102,241,.35),rgba(244,63,94,.35))]"
                      : "group-hover:opacity-100 [background:conic-gradient(from_180deg,rgba(59,130,246,.25),rgba(16,185,129,.25),rgba(99,102,241,.25),rgba(59,130,246,.25))]"
                  )}
                  style={{
                    WebkitMask:
                      "linear-gradient(#000,#000) content-box, linear-gradient(#000,#000)",
                    WebkitMaskComposite: "xor",
                    padding: 1,
                  }}
                />

                {t.badge && (
                  <div className="absolute -top-3 left-6 rounded-full bg-rose-500 px-3 py-1 text-xs font-semibold text-white shadow-md">
                    {t.badge}
                  </div>
                )}

                <h3 className="text-xl font-bold">{t.name}</h3>
                <p className="mt-2 text-sm text-slate-700">{t.description}</p>

                <p className="mt-5 text-3xl font-extrabold">{t.price}</p>

                <ul className="mt-6 space-y-3 text-sm">
                  {t.features.map((f, i) => (
                    <li key={`${t.id}-${i}`} className="flex gap-2">
                      <span className="mt-1.5 inline-block size-2 rounded-full bg-gradient-to-r from-rose-500 to-indigo-600" />
                      <span className="text-slate-800">{f}</span>
                    </li>
                  ))}
                </ul>

                {t.cta && (
                  <Link
                    href={t.cta.href}
                    className={cx(
                      "relative mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2",
                      hot
                        ? "bg-gradient-to-r from-rose-500 to-indigo-600 text-white shadow-lg hover:-translate-y-[1px] hover:shadow-[0_12px_30px_-6px_rgba(79,70,229,0.45)] focus-visible:ring-rose-400"
                        : "border border-slate-300 bg-white text-slate-800 hover:-translate-y-[1px] hover:shadow-md focus-visible:ring-indigo-500"
                    )}
                  >
                    {t.cta.label}
                    <span className="pointer-events-none absolute inset-y-0 -left-[60%] w-[55%] -skew-x-12 bg-gradient-to-r from-white/0 via-white/40 to-white/0 opacity-0 transition duration-700 group-hover:left-[110%] group-hover:opacity-100" />
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-sm text-center text-slate-700 text-white">
          <p className="mb-2">
            <strong>Optionales Hosting über mich:</strong> Das Hosting erfolgt
            über eine professionelle Plattform (<strong>Vercel</strong>), die
            moderne Webtechnologien unterstützt. Die Hostinggebühr von{" "}
            <strong>10 €/Monat</strong> deckt Einrichtung, SSL-Zertifikate,
            Wartung und Überwachung ab. Die Wunschdomain kann vom Kunden selbst
            registriert werden – ich helfe gern bei der technischen Anbindung
            und Einrichtung.
          </p>
          <p>
            Alternativ ist auch Selbsthosting möglich (z. B. bei IONOS oder
            All-Inkl). Ich unterstütze dich gern bei der technischen Umsetzung.
          </p>
        </div>
      </div>
    </section>
  );
}
