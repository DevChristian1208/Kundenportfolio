"use client";

const tiers = [
  {
    name: "Starter Paket",
    id: "tier-starter",
    href: "#",
    price: "ab 550€",
    description:
      "Perfekt für den schnellen Start: eine moderne Landing Page, die Vertrauen schafft und mobil funktioniert.",
    features: [
      "1 Seite (Landing Page)",
      "Mobilfreundlich & schnell",
      "Kontaktformular integriert",
      "Einbindung von Impressum & Datenschutzerklärung",
      "Einrichtung Ihrer Wunsch-Domain",
      "Optional: Hosting & Pflege über mich",
    ],
  },
  {
    name: "Business Paket",
    id: "tier-business",
    href: "#",
    price: "ab 750€",
    description:
      "Für Geschäfte, Praxen und Dienstleister, die ihr Angebot umfassend präsentieren möchten – mit Startseite, Leistungen, Kontakt und mehr.",
    features: [
      "Mehrere Seiten (Start, Leistungen, Über uns, Kontakt)",
      "Mobilfreundlich & schnell",
      "Kontaktformular integriert",
      "Einbindung von Impressum & Datenschutzerklärung",
      "Einrichtung Ihrer Wunsch-Domain",
      "Optional: Hosting & Pflege über mich",
    ],
  },
  {
    name: "Premium Paket",
    id: "tier-premium",
    href: "#",
    price: "ab 900 €",
    description:
      "Individuelles Webprojekt mit Extras: einzigartiges Design, erweiterte Funktionen und laufende Betreuung.",
    features: [
      "Einzigartiges Design mit Animationen",
      "Mehrere Seiten (Start, Leistungen, Über uns, Kontakt)",
      "Blog, Galerie oder individuelle Extras",
      "Optimiert für bessere Google-Sichtbarkeit",
      "4 Monate Wartung & Updates inklusive",
      "Einbindung von Impressum & Datenschutzerklärung",
      "Einrichtung Ihrer Wunsch-Domain",
      "Sehr schnelle Ladezeiten",
      "Optional: Hosting & Pflege dauerhaft über mich",
    ],
  },
];

function classNames(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

const Services = () => {
  return (
    <section
      id="service"
      className="relative isolate bg-gradient-to-b from-[#2b2b3d] via-[#2f2f43] to-[#3f3f5f] py-24 px-6 sm:px-12 lg:px-20 text-white"
    >
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <span className="text-[#ea4343] font-semibold uppercase text-sm block mb-2">
          Was ich anbiete
        </span>
        <h2 className="text-5xl font-bold mb-4">Meine Pakete</h2>
        <p className="text-gray-200 max-w-3xl mx-auto mb-16 text-lg">
          Ob kleiner Betrieb oder wachsendes Unternehmen – ich biete passende
          Weblösungen, die modern aussehen, schnell laufen und Kunden gewinnen.
          Hosting & laufende Pflege können bei Bedarf direkt über mich gebucht
          werden. Domains registriert der Kunde selbst, ich helfe bei der
          Einrichtung.
        </p>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                "bg-white/5 rounded-3xl p-8 flex flex-col text-center transition-transform duration-300 hover:scale-[1.03] cursor-pointer",
                "hover:bg-[#ea4343] hover:text-white hover:ring-0 hover:shadow-2xl"
              )}
            >
              <h3 id={tier.id} className="text-white text-xl font-bold">
                {tier.name}
              </h3>
              <p className="mt-2 text-white/80 text-sm">{tier.description}</p>
              <p className="mt-4 flex items-baseline justify-center gap-x-2 font-semibold text-3xl">
                <span>{tier.price}</span>
              </p>

              <ul
                role="list"
                className="mt-6 space-y-3 text-white/90 text-sm flex-1"
              >
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-x-2 items-start justify-center"
                  >
                    <span className="text-[#00ffd9]">✔</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
