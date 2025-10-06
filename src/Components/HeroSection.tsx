"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Header from "@/Components/Header";
import TrueFocus from "./TrueFocus";

const HeroSection = () => {
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  // No-Anim CSS einmalig injizieren und im nächsten Frame mounten
  useEffect(() => {
    const style = document.createElement("style");
    style.setAttribute("data-id", "no-anim-style");
    style.textContent = `
      .no-anim, .no-anim * { animation: none !important; transition: none !important; }
      @media (prefers-reduced-motion: reduce) {
        * { animation: none !important; transition: none !important; scroll-behavior: auto !important; }
      }
    `;
    document.head.appendChild(style);

    const raf = requestAnimationFrame(() => setMounted(true));
    return () => {
      cancelAnimationFrame(raf);
      // Style kann drinbleiben; falls du aufräumen willst:
      // document.head.removeChild(style);
    };
  }, []);

  // Parallax/Tilt nur auf Desktop mit feinem Pointer
  useEffect(() => {
    const container = imageContainerRef.current;
    if (!container) return;

    const isDesktopPointerFine =
      typeof window !== "undefined" &&
      typeof window.matchMedia === "function" &&
      window.matchMedia("(pointer: fine)").matches &&
      window.innerWidth >= 1024;

    if (!isDesktopPointerFine) {
      container.style.transform =
        "translate(0, 0) scale(1) rotateX(0deg) rotateY(0deg)";
      return;
    }

    let frameId: number | null = null;

    const updateTransform = (e: MouseEvent) => {
      if (frameId) cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        const vw = window.innerWidth || 1;
        const vh = window.innerHeight || 1;
        const xPercent = (e.clientX / vw - 0.5) * 2;
        const yPercent = (e.clientY / vh - 0.5) * 2;

        const offsetX = xPercent * 15;
        const offsetY = yPercent * 15;
        const rotateX = yPercent * -5;
        const rotateY = xPercent * 5;

        container.style.transform =
          "translate(" +
          offsetX +
          "px, " +
          offsetY +
          "px) " +
          "scale(1.02) " +
          "rotateX(" +
          rotateX +
          "deg) " +
          "rotateY(" +
          rotateY +
          "deg)";
      });
    };

    const reset = () => {
      if (!imageContainerRef.current) return;
      imageContainerRef.current.style.transform =
        "translate(0, 0) scale(1) rotateX(0deg) rotateY(0deg)";
    };

    const handleResize = () => reset();
    const handleVisibility = () => {
      if (document.visibilityState === "hidden") reset();
    };

    window.addEventListener("mousemove", updateTransform);
    window.addEventListener("mouseleave", reset);
    window.addEventListener("resize", handleResize);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", updateTransform);
      window.removeEventListener("mouseleave", reset);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibility);
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
          min-h-[100svh]
          flex items-center
          py-16 sm:py-20 lg:py-24
        "
      >
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-x-clip">
          <div className="absolute w-[420px] h-[420px] top-[18%] left-[4%] bg-[#ea4343] opacity-30 blur-[120px] rounded-full" />
          <div className="absolute w-[360px] h-[360px] bottom-[8%] right-[4%] bg-[#38bdf8] opacity-25 blur-[100px] rounded-full" />
        </div>

        <div
          className="
            relative z-10 w-full
            mx-auto max-w-7xl px-4 sm:px-6 lg:px-8
            grid grid-cols-1 lg:grid-cols-12
            gap-y-12 gap-x-8 lg:gap-x-14
            items-center
          "
        >
          <div
            ref={imageContainerRef}
            className="
              order-1
              lg:col-span-6
              relative w-full
              h-[320px] sm:h-[420px] md:h-[520px] lg:h-[620px] xl:h-[700px]
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
            className={[
              mounted ? "" : "no-anim",
              "order-2 lg:col-span-6 flex flex-col text-center lg:text-left justify-center space-y-4 sm:space-y-6",
            ]
              .join(" ")
              .trim()}
          >
            <h1 className="text-white text-lg sm:text-xl font-light">
              Hallo, ich bin
            </h1>

            <h2 className="text-[#ea4343] text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[0.95]">
              Christian
            </h2>

            <div className="text-white text-2xl sm:text-4xl md:text-5xl font-semibold flex justify-center lg:justify-start">
              <TrueFocus
                sentence="Frontend Developer"
                manualMode={true}
                blurAmount={4}
                borderColor="red"
                animationDuration={2}
                pauseBetweenAnimations={2}
              />
            </div>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 sm:gap-5 pt-4 sm:pt-6">
              <a
                href="#contact"
                className="bg-[#ea4343] hover:bg-transparent text-white hover:text-[#ea4343] border-2 border-[#ea4343] px-7 sm:px-8 py-3 rounded-lg font-semibold transition-all flex items-center gap-2"
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

            <div className="sm:hidden block text-xs text-slate-300 pt-2">
              <a
                href="mailto:christian.pressig@web.de"
                className="hover:underline"
              >
                christian.pressig@web.de
              </a>
            </div>
          </div>
        </div>

        <div className="hidden lg:block absolute bottom-6 right-6 xl:right-10 text-white text-sm md:text-base z-10">
          <a href="mailto:christian.pressig@web.de" className="hover:underline">
            christian.pressig@web.de
          </a>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
