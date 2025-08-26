"use client";
import React, { useState } from "react";

type Skill = {
  name: string;
  img: string;
  desc: string;
};

const MyProjects = () => {
  const skills: Skill[] = [
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

  const projects = [
    {
      title: "Join",
      img: "/join.png",
      stack: "JavaScript | HTML | CSS | Firebase",
      desc: "Ein webbasiertes Aufgaben-Tool im Kanban-Stil – mit Login, Drag & Drop und Realtime-Datenbank.",
      github: "https://github.com/deinlink",
      demo: "https://join.christianseidel-developer.de",
    },
    {
      title: "El Pollo Loco",
      img: "/startscreen_1.png",
      stack: "JavaScript | HTML | CSS | OOP",
      desc: "Ein Jump’n’Run-Spiel mit klassischer Objektorientierung. Spielfigur Pepe kämpft gegen die verrückte Henne.",
      github: "https://github.com/deinlink",
      demo: "https://elpolloloco.christianseidel-developer.de",
    },
    {
      title: "DABubble",
      img: "/DaBubble.png",
      stack: "Next.JS | Tailwind | Firebase",
      desc: "Mit DaBubble können sich Nutzer anmelden, Channels erstellen und Direktnachrichten verschicken. Die Anwendung ermöglicht eine einfache Teamkommunikation in Echtzeit und orientiert sich am Prinzip von Slack.",
      github: "https://github.com/deinlink",
      demo: "https://elpolloloco.christianseidel-developer.de",
    },
  ];

  const [activeSkillIndex, setActiveSkillIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveSkillIndex((prev) => (prev === index ? null : index));
  };

  const closeDialog = () => setActiveSkillIndex(null);

  return (
    <section
      id="portfolio"
      className="relative pt-20 pb-20 bg-[#1e1e2f] text-white overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-pink-500 opacity-30 blur-3xl rounded-full animate-pulse-slow z-0" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#00ffd9] opacity-20 blur-[120px] rounded-full animate-pulse-slow z-0" />

      <div className="container relative z-10 mx-auto px-4">
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
          {projects.map((project, i) => (
            <div
              key={i}
              className="flex flex-col lg:flex-row gap-8 bg-[#2a2a3d]/80 rounded-xl p-6 shadow-lg hover:shadow-xl transition backdrop-blur-md"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full lg:w-1/2 rounded-md object-cover"
              />
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-gradient">
                    {project.title}
                  </h3>
                  <p className="text-[#00ffd9] mb-2">{project.stack}</p>
                  <p className="text-sm text-gray-300 mb-4">{project.desc}</p>
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-pink-500 px-4 py-2 rounded hover:bg-pink-500 transition text-sm"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative bg-[#00ffd9] text-black px-4 py-2 rounded transition text-sm font-medium
                    hover:shadow-[0_0_5px_1px_#00ffd9] hover:scale-102 duration-300"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

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
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-[rgba(30,30,47,0.7)] backdrop-blur-md">
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
        )}
      </div>
    </section>
  );
};

export default MyProjects;
