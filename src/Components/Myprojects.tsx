"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

type Skill = { name: string; img: string; desc: string };
type Project = {
  title: string;
  img: string;
  stack: string;
  desc: string;
  github: string;
  demo: string;
};

const SKILLS: Skill[] = [
  {
    name: "HTML",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    desc: "HTML ist die Grundlage jeder Webseite. Es sorgt dafür, dass Inhalte wie Texte, Bilder und Videos sinnvoll aufgebaut und im Browser korrekt dargestellt werden.",
  },
  {
    name: "CSS",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    desc: "Mit CSS gestalte ich das Aussehen von Webseiten – also Farben, Schriftarten, Abstände und Animationen. Es macht die Seite ansprechend und benutzerfreundlich.",
  },
  {
    name: "JavaScript",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    desc: "JavaScript sorgt für Interaktivität – zum Beispiel klickbare Menüs, dynamische Inhalte oder Formulare mit Echtzeit-Feedback. Damit wird Ihre Seite lebendig.",
  },
  {
    name: "Next.js",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    desc: "Next.js ist ein modernes Web-Framework, das schnelle Ladezeiten, Suchmaschinenoptimierung (SEO) und perfekte Struktur für professionelle Webprojekte bietet.",
  },
  {
    name: "Angular",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg",
    desc: "Angular ist ein leistungsstarkes Framework, mit dem ich komplexe Webanwendungen strukturiert, skalierbar und effizient umsetzen kann – ideal für größere Projekte.",
  },
  {
    name: "TypeScript",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    desc: "TypeScript macht den Code zuverlässiger und besser wartbar. Damit entstehen langfristig stabile und sichere Anwendungen für Ihre Anforderungen.",
  },
  {
    name: "Firebase",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg",
    desc: "Mit Firebase kann ich Webanwendungen z. B. mit Login-Systemen, Datenbanken und Hosting ausstatten – ohne eigenen Server oder komplizierte Einrichtung.",
  },
];

const PROJECTS: Project[] = [
  {
    title: "DABubble",
    img: "/DaBubble.png",
    stack: "Next.JS | Tailwind | Firebase",
    desc: "Mit DaBubble können sich Nutzer anmelden, Channels erstellen und Direktnachrichten verschicken. Die Anwendung ermöglicht eine einfache Teamkommunikation in Echtzeit und orientiert sich am Prinzip von Slack.",
    github: "https://github.com/deinlink",
    demo: "https://elpolloloco.christianseidel-developer.de",
  },
  {
    title: "El Pollo Loco",
    img: "/startscreen_1.png",
    stack: "JavaScript | HTML | CSS | OOP",
    desc: "Ein Jump’n’Run-Spiel mit klassischer Objektorientierung. Spielfigur Pepe kämpft gegen die verrückte Henne.",
    github: "https://github.com/deinlink",
    demo: "https://elpolloloco.christianseidel-developer.de",
  },
];

export default function MyProjects() {
  const [active, setActive] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    const originalTouch = document.body.style.touchAction;
    if (active !== null) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = originalOverflow || "";
      document.body.style.touchAction = originalTouch || "";
    }
    return () => {
      document.body.style.overflow = originalOverflow || "";
      document.body.style.touchAction = originalTouch || "";
    };
  }, [active]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section
      id="portfolio"
      className="relative isolate text-slate-800 bg-gradient-to-b from-white via-[#f1f5ff] to-[#3f3f5f]"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(closest-side,white,transparent)]">
        <div className="absolute -top-24 -left-16 h-[40rem] w-[40rem] rounded-full bg-[conic-gradient(from_180deg,rgba(99,102,241,.25),rgba(236,72,153,.2),rgba(56,189,248,.2),rgba(99,102,241,.25))] blur-3xl animate-[aurora_14s_ease-in-out_infinite]" />
        <div className="absolute -bottom-28 -right-24 h-[36rem] w-[36rem] rounded-full bg-[conic-gradient(from_90deg,rgba(56,189,248,.18),rgba(99,102,241,.18),rgba(16,185,129,.18),rgba(56,189,248,.18))] blur-3xl animate-[aurora_16s_ease-in-out_infinite_reverse]" />
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Meine Projekte
          </h2>
          <p className="mt-3 text-slate-700">
            Die folgenden Projekte sind während meiner Weiterbildung entstanden.
            Sie geben Einblick in meine Fähigkeiten und verdeutlichen, wie meine
            Leidenschaft für Webentwicklung meinen Weg als Entwickler geprägt
            hat.
          </p>
        </div>
        <div className="mt-14 grid gap-10">
          {PROJECTS.map((p, i) => (
            <article
              key={p.title}
              className="group relative grid items-stretch gap-8 md:grid-cols-2 rounded-3xl border border-slate-200/90 bg-white/85 p-6 md:p-8 shadow-[0_10px_30px_-8px_rgba(2,6,23,0.15)] backdrop-blur-lg transition will-change-transform hover:shadow-[0_22px_60px_-10px_rgba(2,6,23,0.22)] md:hover:scale-[1.008]"
              style={{ perspective: "1200px" }}
            >
              <div className="pointer-events-none absolute inset-0 rounded-3xl p-[1px] [mask:linear-gradient(#000,#000)_content-box,linear-gradient(#000,#000)] [mask-composite:exclude] before:absolute before:inset-0 before:-z-10 before:rounded-3xl before:bg-[conic-gradient(from_180deg_at_50%_50%,#ef4444_0%,#3b82f6_25%,#22c55e_50%,#a855f7_75%,#ef4444_100%)] before:opacity-[0.18] group-hover:before:opacity-30 before:transition-opacity" />

              <div className="relative order-2 md:order-1 [transform-style:preserve-3d] group-hover:[transform:rotateX(1.5deg)_rotateY(-2.5deg)] transition-transform duration-500">
                <div className="relative overflow-hidden rounded-2xl ring-1 ring-slate-200/70 bg-white">
                  <div className="flex items-center gap-1 px-4 pt-3 pb-2">
                    <span className="size-2 rounded-full bg-red-400/90" />
                    <span className="size-2 rounded-full bg-yellow-400/90" />
                    <span className="size-2 rounded-full bg-green-400/90" />
                    <span className="ml-3 text-xs text-slate-400">
                      Vorschau
                    </span>
                  </div>
                  <div className="border-t border-slate-200">
                    <Image
                      src={p.img}
                      alt={p.title}
                      width={1280}
                      height={720}
                      className="h-[280px] w-full md:h-[250px]"
                      priority={i === 0}
                    />
                  </div>

                  <span className="pointer-events-none absolute inset-y-0 -left-[55%] w-[55%] -skew-x-12 bg-gradient-to-r from-white/0 via-white/50 to-white/0 opacity-0 transition duration-700 group-hover:left-[115%] group-hover:opacity-100" />
                </div>
              </div>

              <div className="order-1 md:order-2 flex flex-col">
                <header>
                  <h3 className="text-2xl md:text-3xl font-bold">{p.title}</h3>
                  <p className="mt-1 text-sm font-medium text-indigo-600">
                    {p.stack}
                  </p>
                </header>
                <p className="mt-4 text-slate-700">{p.desc}</p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={p.github}
                    target="_blank"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-300/90 bg-white px-4 py-2 text-sm text-slate-800 shadow-sm transition hover:-translate-y-[1px] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                  >
                    GitHub
                  </Link>

                  <Link
                    href={p.demo}
                    target="_blank"
                    className="relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-rose-500 to-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-[1px] hover:shadow-[0_12px_30px_-6px_rgba(79,70,229,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
                  >
                    Live&nbsp;Demo
                    <span className="pointer-events-none absolute inset-y-0 -left-[60%] w-[55%] -skew-x-12 bg-gradient-to-r from-white/0 via-white/40 to-white/0 opacity-0 transition duration-700 hover:left-[110%] hover:opacity-100" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-24 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Meine Fähigkeiten
          </h2>
          <p className="mt-3 text-slate-700">
            Technologien, mit denen ich Ihre individuellen Anforderungen
            professionell umsetze.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-5">
          {SKILLS.map((s, idx) => (
            <button
              key={s.name}
              onClick={() => setActive(idx)}
              className="group relative rounded-2xl border border-slate-200 bg-white/85 p-4 text-center shadow-sm backdrop-blur transition hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              aria-haspopup="dialog"
              aria-controls="skill-dialog"
            >
              <div className="mx-auto grid place-items-center size-16 rounded-xl bg-slate-50 ring-1 ring-slate-200">
                <img
                  src={s.img}
                  alt={s.name}
                  className="h-10 w-10 object-contain"
                />
              </div>
              <p className="mt-2 text-sm font-medium">{s.name}</p>
              <span className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition group-hover:opacity-100 [background:radial-gradient(600px_120px_at_50%_0%,rgba(99,102,241,.15),transparent)]" />
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          ref={dialogRef}
          id="skill-dialog"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 grid place-items-center bg-black/35 px-4 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === dialogRef.current) setActive(null);
          }}
        >
          <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl">
            <div className="flex items-start gap-4">
              <img
                src={SKILLS[active].img}
                alt={SKILLS[active].name}
                className="h-12 w-12"
              />
              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  {SKILLS[active].name}
                </h3>
                <p className="mt-2 text-sm text-slate-700">
                  {SKILLS[active].desc}
                </p>
              </div>
              <button
                onClick={() => setActive(null)}
                aria-label="Dialog schließen"
                className="ml-auto rounded-lg px-2 py-1 text-slate-500 hover:bg-slate-100 hover:text-slate-800"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Keyframes */}
      <style jsx global>{`
        @keyframes aurora {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(2deg);
          }
          100% {
            transform: translateY(0) rotate(0deg);
          }
        }
      `}</style>
    </section>
  );
}
