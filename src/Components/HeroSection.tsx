"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Header from "@/Components/Header";
import TrueFocus from "./TrueFocus";

const HeroSection = () => {
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = imageContainerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const xPercent = (e.clientX / vw - 0.5) * 2;
      const yPercent = (e.clientY / vh - 0.5) * 2;

      const offsetX = xPercent * 15;
      const offsetY = yPercent * 15;
      const rotateX = yPercent * -5;
      const rotateY = xPercent * 5;

      container.style.transform = `
        translate(${offsetX}px, ${offsetY}px)
        scale(1.02)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
      `;
    };

    const reset = () => {
      if (imageContainerRef.current) {
        imageContainerRef.current.style.transform =
          "translate(0, 0) scale(1) rotateX(0deg) rotateY(0deg)";
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", reset);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <>
      <Header />

      <section
        id="home"
        className="
          relative isolate overflow-hidden overflow-x-clip
          bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#3a1a1a]
          min-h-screen
          flex items-center
        "
      >
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-x-clip">
          <div className="absolute w-[500px] h-[500px] top-[20%] left-[5%] bg-[#ea4343] opacity-30 blur-[120px] rounded-full" />
          <div className="absolute w-[400px] h-[400px] bottom-[10%] right-[5%] bg-[#38bdf8] opacity-25 blur-[100px] rounded-full" />
        </div>

        <div
          className="
            relative z-10 w-full
            mx-auto max-w-7xl px-6 md:px-10
            grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14
            items-center
          "
        >
          <div
            ref={imageContainerRef}
            className="
              order-1 lg:order-1
              lg:col-span-6
              relative w-full
              h-[420px] sm:h-[520px] lg:h-[720px]
              transition-transform duration-300 ease-out will-change-transform
              flex justify-center lg:justify-start
            "
          >
            <div className="relative w-full h-full">
              <Image
                src="/file.png"
                alt="Christian"
                fill
                priority
                className="object-contain object-bottom select-none pointer-events-none"
              />
            </div>
          </div>

          <div
            className="
              order-2 lg:order-2
              lg:col-span-6
              flex flex-col
              text-center lg:text-left
              space-y-6
              justify-center
            "
          >
            <h1 className="text-white text-2xl sm:text-3xl font-light">
              Hallo, ich bin
            </h1>

            <h2 className="text-[#ea4343] text-[60px] sm:text-[80px] font-extrabold leading-[0.95]">
              Christian
            </h2>

            <div className="text-white text-2xl sm:text-4xl font-semibold flex justify-center lg:justify-start">
              <TrueFocus
                sentence="Frontend Developer"
                manualMode={false}
                blurAmount={4}
                borderColor="red"
                animationDuration={2}
                pauseBetweenAnimations={2}
              />
            </div>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-5 pt-6">
              <a
                href="#contact"
                className="bg-[#ea4343] hover:bg-transparent text-white hover:text-[#ea4343] border-2 border-[#ea4343] px-8 py-3 rounded-lg font-semibold transition-all flex items-center gap-2"
              >
                Say Hello
                <Image src="/message.svg" alt="" width={16} height={16} />
              </a>
              <a
                href="#about"
                className="text-white hover:text-[#ea4343] font-semibold transition-colors"
              >
                About Me
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 right-6 md:right-10 text-white text-sm md:text-base z-10">
          <a href="mailto:christian.pressig@web.de" className="hover:underline">
            christian.pressig@web.de
          </a>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
