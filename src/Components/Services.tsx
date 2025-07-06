"use client";

const tiers = [
  {
    name: "Starter Paket",
    id: "tier-starter",
    href: "#",
    price: "€399",
    description:
      "Eine einfache, moderne Landing Page, die auf allen Geräten gut aussieht.",
    features: [
      "1 Landing Page",
      "Mobilfreundlich",
      "Kontaktformular",
      "DSGVO & Impressum",
    ],
    featured: false,
  },
  {
    name: "Business Paket",
    id: "tier-business",
    href: "#",
    price: "599€",
    description:
      "Mehrseitige Website mit einfacher Suchmaschinenhilfe und Kontaktformular.",
    features: [
      "Mehrere Seiten (Start, Leistungen, Über uns, Kontakt)",
      "Suchmaschinenfreundliche Grundstruktur",
      "Kontaktformular",
      "DSGVO & Impressum",
    ],
    featured: true,
  },
  {
    name: "Premium Paket",
    id: "tier-premium",
    href: "#",
    price: "799€",
    description:
      "Individuelles Design mit Animationen, Blog, Galerie und 3 Monate Wartung.",
    features: [
      "Einzigartiges Design mit Animationen",
      "Blog, Galerie oder Extras",
      "Bessere Auffindbarkeit bei Google",
      "3 Monate Wartung und Updates",
      "Schnelle Ladezeiten",
    ],
    featured: false,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Services = () => {
  return (
    <section
      id="service"
      className="relative isolate bg-[#3c3c3c] py-24 px-6 sm:px-12 lg:px-20 text-white"
    >
      <div className="max-w-7xl mx-auto text-center">
        <span className="text-[#ea4343] font-semibold uppercase text-sm block mb-2">
          Was ich anbiete
        </span>
        <h2 className="text-5xl font-bold mb-4">My Services</h2>
        <p className="text-gray-300 max-w-3xl mx-auto mb-16 text-lg">
          Ich erstelle professionelle Websites für kleine Unternehmen wie
          Arztpraxen, Restaurants, Friseure oder Handwerksbetriebe. Modern,
          mobiloptimiert, DSGVO-konform – mit klarem Fokus auf Kundennutzen.
        </p>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.featured ? "bg-[#222222]" : "bg-[#2f2f2f]",
                "rounded-3xl p-8 flex flex-col transition-transform duration-300 hover:scale-[1.03] cursor-pointer",
                "hover:ring-2 hover:ring-[#ea4343] hover:shadow-2xl"
              )}
            >
              <h3
                id={tier.id}
                className={classNames("text-[#ea4343] text-xl font-bold")}
              >
                {tier.name}
              </h3>
              <p className="mt-2 text-gray-400 text-sm">{tier.description}</p>
              <p className="mt-4 flex items-baseline justify-center gap-x-2 font-semibold text-3xl">
                <span>{tier.price}</span>
                <span className="text-base text-gray-400">ab</span>
              </p>

              <ul
                role="list"
                className="mt-6 space-y-3 text-gray-300 text-sm flex-1"
              >
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-x-3 items-start justify-center"
                  >
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
