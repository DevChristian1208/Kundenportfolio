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
    featured: false,
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

function classNames(...classes: any) {
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
        <h2 className="text-5xl font-bold mb-4">My Services</h2>
        <p className="text-gray-200 max-w-3xl mx-auto mb-16 text-lg">
          Ich erstelle professionelle Websites für kleine Unternehmen wie
          Arztpraxen, Restaurants, Friseure oder Handwerksbetriebe. Modern,
          mobiloptimiert, DSGVO-konform – mit klarem Fokus auf Kundennutzen.
        </p>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.featured ? "bg-[#ea4343]/90" : "bg-[#00ffd9]/10",
                "rounded-3xl p-8 flex flex-col transition-transform duration-300 hover:scale-[1.03] cursor-pointer",
                "hover:bg-[#ea4343] hover:text-white hover:ring-0 hover:shadow-2xl"
              )}
            >
              <h3 id={tier.id} className="text-white text-xl font-bold">
                {tier.name}
              </h3>
              <p className="mt-2 text-white/80 text-sm">{tier.description}</p>
              <p className="mt-4 flex items-baseline justify-center gap-x-2 font-semibold text-3xl">
                <span>{tier.price}</span>
                <span className="text-base text-white/60">ab</span>
              </p>

              <ul
                role="list"
                className="mt-6 space-y-3 text-white/90 text-sm flex-1"
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
