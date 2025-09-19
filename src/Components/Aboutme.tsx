"use client";

import Image from "next/image";
type AboutmeProps = {
  myname: string;
};

const Aboutme = ({ myname }: AboutmeProps) => {
  return (
    <section id="about" className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-12">
          <div className="order-2 lg:order-1 lg:col-span-5 flex justify-center lg:justify-start">
            <figure className="relative w-full max-w-[320px] sm:max-w-[360px]">
              <span
                aria-hidden="true"
                className="hidden sm:block absolute -top-6 -left-6 sm:-top-8 sm:-left-8 h-36 w-36 sm:h-48 sm:w-48 rounded-xl bg-rose-500"
              />
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 aspect-[4/5]">
                <Image
                  src="/IMG_3721.jpg"
                  alt="Portrait von Christian"
                  fill
                  sizes="(max-width: 640px) 320px, (max-width: 1024px) 360px, 420px"
                  className="object-cover"
                  priority
                />
              </div>

              <figcaption className="absolute -bottom-3 sm:-bottom-4 left-3 sm:left-4 z-30 rounded-xl bg-white/95 backdrop-blur px-3 py-2 sm:px-4 sm:py-2.5 shadow-md ring-1 ring-gray-200">
                <p className="text-xs sm:text-sm font-medium text-gray-900">
                  {myname} – Webentwickler
                </p>
                <p className="text-[11px] sm:text-xs text-gray-500">
                  Selbitz bei Hof
                </p>
              </figcaption>
            </figure>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-7">
            <span className="text-sm font-semibold tracking-wide text-rose-500">
              Über mich
            </span>

            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-[2.5rem] font-bold leading-tight text-gray-900">
              Ich bin <span className="text-rose-500">{myname}</span>
            </h2>

            <p className="mt-2 text-lg sm:text-xl font-semibold text-gray-900">
              Websites für lokale Unternehmen – klar, schnell, wirksam.
            </p>

            <p className="mt-4 sm:mt-5 text-[15.5px] leading-7 text-gray-700 max-w-prose">
              Ich entwickle moderne Websites mit JavaScript&nbsp;/ Next.js –
              ideal für Geschäfte, Praxen und Handwerksbetriebe. Ohne unnötigen
              Schnickschnack, dafür mit Fokus auf das Wesentliche: sichtbar
              werden, Vertrauen schaffen und neue Kund:innen gewinnen.
            </p>

            <ul className="mt-6 space-y-3 text-[15.5px] text-gray-900">
              <li className="flex gap-3">
                <span className="text-rose-500">✔</span>
                <span>
                  <strong>Mobil & schnell</strong> – deine Website funktioniert
                  auf allen Geräten und lädt blitzschnell.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-rose-500">✔</span>
                <span>
                  <strong>Pflege durch mich</strong> – Änderungen und Updates
                  übernehme ich zuverlässig, damit du dich voll auf dein
                  Geschäft konzentrieren kannst.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-rose-500">✔</span>
                <span>
                  <strong>Für Kunden gemacht</strong> – klare Struktur und
                  verständliche Inhalte, die Besucher einfach zum Kontakt oder
                  Termin führen.
                </span>
              </li>
            </ul>

            <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#contact"
                className="inline-flex justify-center items-center rounded-xl bg-rose-500 px-5 py-3 text-white text-sm font-semibold shadow-sm hover:bg-rose-600 transition-colors w-full sm:w-auto"
              >
                Kostenloses Erstgespräch
              </a>
              <a
                href="#portfolio"
                className="inline-flex justify-center items-center rounded-xl px-5 py-3 text-sm font-semibold text-gray-700 ring-1 ring-gray-200 hover:bg-gray-50 transition-colors w-full sm:w-auto"
              >
                Arbeiten ansehen
              </a>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-gray-500 max-w-prose">
              Starter, Business oder Premium – passende Pakete ab 650&nbsp;€.
              Domain-Kosten trägt der Kunde, ich unterstütze bei der
              Einrichtung. Rechtliche Texte wie Impressum & Datenschutzerklärung
              werden vom Kunden bereitgestellt, ich binde sie technisch ein.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
