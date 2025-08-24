"use client";

import Image from "next/image";

type AboutmeProps = {
  myname: string;
};

const Aboutme = ({ myname }: AboutmeProps) => {
  return (
    <section id="about" className="w-full bg-white">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center px-6 py-16 md:py-20">
        <div className="relative md:col-span-5 flex justify-center md:justify-start order-2 md:order-1">
          <span className="absolute -top-8 -left-8 w-48 h-48 bg-rose-500 rounded-xl z-0" />

          <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 max-w-[320px]">
            <Image
              src="/IMG_3721.jpg"
              alt="Portrait von Christian"
              width={360}
              height={420}
              className="object-cover w-full h-auto"
              priority
            />
          </div>

          <span className="absolute top-4 left-[400px] w-20 h-20 bg-rose-100 rounded-lg rotate-6 z-20 shadow-md" />

          <div className="absolute -bottom-5 left-6 rounded-xl bg-white/95 backdrop-blur px-4 py-2 shadow-md ring-1 ring-gray-200 z-30">
            <p className="text-sm font-medium text-gray-900">
              {myname} – Webentwickler
            </p>
            <p className="text-xs text-gray-500">Selbitz bei Hof</p>
          </div>
        </div>

        <div className="md:col-span-7 order-1 md:order-2">
          <span className="text-sm font-semibold tracking-wide text-rose-500">
            Über mich
          </span>

          <h2 className="mt-2 text-3xl sm:text-4xl font-bold leading-tight text-gray-900">
            Ich bin <span className="text-rose-500">{myname}</span>
          </h2>

          <p className="mt-2 text-xl font-semibold text-gray-900">
            Websites für lokale Unternehmen – klar, schnell, wirksam.
          </p>

          <p className="mt-5 text-[15.5px] leading-7 text-gray-700 max-w-prose">
            Ich entwickle moderne Websites mit JavaScript&nbsp;/ Next.js – ideal
            für Geschäfte, Praxen und Handwerksbetriebe. Ohne unnötigen
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
                übernehme ich zuverlässig, damit du dich voll auf dein Geschäft
                konzentrieren kannst.
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

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center rounded-xl bg-rose-500 px-5 py-3 text-white text-sm font-semibold shadow-sm hover:bg-rose-600"
            >
              Kostenloses Erstgespräch
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center rounded-xl px-5 py-3 text-sm font-semibold text-gray-700 ring-1 ring-gray-200 hover:bg-gray-50"
            >
              Arbeiten ansehen
            </a>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Starter, Business oder Premium – passende Pakete ab 399&nbsp;€.
            Updates und Pflege jederzeit über mein Wartungs-Abo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
