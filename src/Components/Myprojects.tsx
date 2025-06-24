"use client";
import React, { useState, useEffect } from "react";

const MyProjects = () => {
  const skills = [
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
      desc: "Mit Firebase kann ich Webanwendungen z. B. mit Login-Systemen, Datenbanken und Hosting ausstatten – ohne eigenen Server oder komplizierte Einrichtung.",
    },
  ];

  const [activeSkillIndex, setActiveSkillIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth < 1000);
    };
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const handleToggle = (index: number) => {
    setActiveSkillIndex((prev) => (prev === index ? null : index));
  };

  const closeDialog = () => setActiveSkillIndex(null);

  return (
    <section className="pt-20 pb-20 bg-[#1e1e2f] text-white">
      <div className="container mx-auto px-4">
        {/* Projekte */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gradient mb-2">
            Meine Projekte
          </h2>
          <p className="text-[#00ffc6] text-lg">
            Eine Auswahl von Anwendungen, die ich mit modernen Technologien
            umgesetzt habe.
          </p>
        </div>

        <div className="flex flex-col gap-12 mb-20">
          {/* Projekt 1 */}
          <div className="flex flex-col lg:flex-row gap-8 bg-[#2a2a3d] rounded-xl p-6 shadow-lg hover:shadow-xl transition">
            <img
              src="/join.png"
              alt="Join Project"
              className="w-full lg:w-1/2 rounded-md object-cover"
            />
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2 text-gradient">Join</h3>
                <p className="text-[#00ffd9] mb-2">
                  JavaScript | HTML | CSS | Firebase
                </p>
                <p className="text-sm text-gray-300 mb-4">
                  Ein webbasiertes Aufgaben-Tool im Kanban-Stil – mit Login,
                  Drag & Drop und Realtime-Datenbank.
                </p>
              </div>
              <div className="flex gap-3">
                <a
                  href="https://github.com/deinlink"
                  target="_blank"
                  className="border border-pink-500 px-4 py-2 rounded hover:bg-pink-500 transition text-sm"
                >
                  GitHub
                </a>
                <a
                  href="https://join.christianseidel-developer.de"
                  target="_blank"
                  className="bg-[#00ffd9] text-black px-4 py-2 rounded hover:bg-opacity-80 transition text-sm"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          {/* Projekt 2 */}
          <div className="flex flex-col lg:flex-row gap-8 bg-[#2a2a3d] rounded-xl p-6 shadow-lg hover:shadow-xl transition">
            <img
              src="/startscreen_1.png"
              alt="El Pollo Loco"
              className="w-full lg:w-1/2 rounded-md object-cover"
            />
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2 text-gradient">
                  El Pollo Loco
                </h3>
                <p className="text-[#00ffd9] mb-2">
                  JavaScript | HTML | CSS | OOP
                </p>
                <p className="text-sm text-gray-300 mb-4">
                  Ein Jump’n’Run-Spiel mit klassischer Objektorientierung.
                  Spielfigur Pepe kämpft gegen die verrückte Henne.
                </p>
              </div>
              <div className="flex gap-3">
                <a
                  href="https://github.com/deinlink"
                  target="_blank"
                  className="border border-pink-500 px-4 py-2 rounded hover:bg-pink-500 transition text-sm"
                >
                  GitHub
                </a>
                <a
                  href="https://elpolloloco.christianseidel-developer.de"
                  target="_blank"
                  className="bg-[#00ffd9] text-black px-4 py-2 rounded hover:bg-opacity-80 transition text-sm"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gradient mb-2">
            Meine Fähigkeiten
          </h2>
          <p className="text-[#00ffc6] text-lg">
            Technologien, mit denen ich Ihre individuellen Anforderungen
            professionell umsetze.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 mb-12">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center cursor-pointer group transition-transform hover:scale-105"
              onClick={() => handleToggle(index)}
            >
              <div className="bg-[#2d2d40] p-4 rounded-xl shadow-md group-hover:shadow-lg transition">
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="w-14 h-14 object-contain"
                />
              </div>
              <span className="mt-2 text-sm">{skill.name}</span>
            </div>
          ))}
        </div>

        {activeSkillIndex !== null && (
          <>
            {isMobile ? (
              <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-[rgba(30,30,47,0.6)] backdrop-blur-md">
                <div className="bg-[#29293a] rounded-xl p-6 relative w-full max-w-md mx-auto border border-[#00ffc6] shadow-lg">
                  <button
                    onClick={closeDialog}
                    className="absolute top-3 right-4 text-xl text-[#00ffc6] hover:text-pink-500 transition cursor-pointer"
                  >
                    ✕
                  </button>
                  <div className="flex flex-col items-center gap-4">
                    <img
                      src={skills[activeSkillIndex].img}
                      alt={skills[activeSkillIndex].name}
                      className="w-16 h-16"
                    />
                    <h3 className="text-2xl font-semibold">
                      {skills[activeSkillIndex].name}
                    </h3>
                    <p className="text-sm text-gray-300 text-center">
                      {skills[activeSkillIndex].desc}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-[#29293a] border border-[#00ffc6] rounded-xl p-6 relative w-[80vw] mx-auto shadow-lg animate-fade-in">
                <button
                  onClick={closeDialog}
                  className="absolute top-3 right-4 text-xl text-[#00ffc6] hover:text-pink-500 transition cursor-pointer"
                >
                  ✕
                </button>
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <img
                    src={skills[activeSkillIndex].img}
                    alt={skills[activeSkillIndex].name}
                    className="w-16 h-16"
                  />
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">
                      {skills[activeSkillIndex].name}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {skills[activeSkillIndex].desc}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default MyProjects;
