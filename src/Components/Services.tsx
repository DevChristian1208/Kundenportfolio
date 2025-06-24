"use client";

import Image from "next/image";

const Services = () => {
  return (
    <section id="service" className="bg-[#3c3c3c] text-white py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-left mb-16">
          <span className="text-[#ea4343] font-semibold uppercase text-sm block mb-2">
            Was ich anbiete
          </span>
          <h2 className="text-5xl font-bold mb-4">My Services</h2>
          <p className="text-gray-300 max-w-3xl">
            Ich erstelle professionelle Websites für kleine Unternehmen wie
            Arztpraxen, Restaurants, Friseure oder Handwerksbetriebe. Modern,
            mobiloptimiert, DSGVO-konform – mit klarem Fokus auf Kundennutzen.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-[#2f2f2f] rounded-xl p-8 group hover:scale-[1.03] transition-all duration-300 cursor-pointer relative overflow-hidden">
            <div className="flex items-start gap-4 mb-4">
              <Image src="/web.svg" alt="icon" width={48} height={48} />
              <div>
                <h3 className="text-xl font-bold mb-1">Starter Paket</h3>
                <span className="text-[#ea4343] text-sm font-medium">
                  ab <span className="font-bold text-[22px]">€399</span>
                </span>
              </div>
            </div>
            <ul className="text-sm text-gray-300 space-y-2 list-disc list-inside">
              <li>1 Landing Page (z. B. Praxis oder Café)</li>
              <li>Responsive Design (mobilfreundlich)</li>
              <li>Kontaktformular</li>
              <li>DSGVO-Hinweise (z. B. Cookie & Datenschutz)</li>
            </ul>
          </div>

          <div className="bg-[#2f2f2f] rounded-xl p-8 group hover:scale-[1.03] transition-all duration-300 cursor-pointer relative overflow-hidden">
            <div className="flex items-start gap-4 mb-4">
              <Image src="/web.svg" alt="icon" width={48} height={48} />
              <div>
                <h3 className="text-xl font-bold mb-1">Business Paket</h3>
                <span className="text-[#ea4343] text-sm font-medium">
                  ab <span className="font-bold text-[22px]">€699</span>
                </span>
              </div>
            </div>
            <ul className="text-sm text-gray-300 space-y-2 list-disc list-inside">
              <li>
                Mehrseitige Website (Start, Leistungen, Über uns, Kontakt)
              </li>
              <li>SEO-Basics & Google-Optimierung</li>
              <li>CMS-Anbindung (z. B. Inhalte selbst pflegen)</li>
              <li>Kontakt- & Terminanfrage-Formular</li>
              <li>DSGVO & Impressum</li>
            </ul>
          </div>

          <div className="bg-[#2f2f2f] rounded-xl p-8 group hover:scale-[1.03] transition-all duration-300 cursor-pointer relative overflow-hidden">
            <div className="flex items-start gap-4 mb-4">
              <Image src="/web.svg" alt="icon" width={48} height={48} />
              <div>
                <h3 className="text-xl font-bold mb-1">Premium Paket</h3>
                <span className="text-[#ea4343] text-sm font-medium">
                  ab <span className="font-bold text-[22px]">€999</span>
                </span>
              </div>
            </div>
            <ul className="text-sm text-gray-300 space-y-2 list-disc list-inside">
              <li>Individuelles Design + Animation</li>
              <li>Blog, Galerie oder spezielle Features</li>
              <li>SEO, Google Business Setup</li>
              <li>Wartung & Updates für 3 Monate</li>
              <li>Performance & Ladezeit optimiert</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
