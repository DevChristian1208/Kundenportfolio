"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Header from "@/Components/Header";

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
        className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#3a1a1a]"
      >
        <div className="absolute w-[500px] h-[500px] top-[20%] left-[5%] bg-[#ea4343] opacity-30 blur-[120px] rounded-full animate-fadePulse z-0"></div>
        <div className="absolute w-[400px] h-[400px] bottom-[10%] right-[5%] bg-[#38bdf8] opacity-25 blur-[100px] rounded-full animate-fadePulse delay-[4s] z-0"></div>
        <div className="max-w-7xl w-full mx-auto px-6 md:px-10 flex flex-col lg:flex-row items-center justify-between py-20 gap-14 relative z-10">
          <div
            ref={imageContainerRef}
            className="order-1 lg:order-none relative w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] h-[400px] sm:h-[500px] lg:h-[700px] transition-transform duration-300 ease-out will-change-transform"
          >
            <div className="relative w-full h-full top-[25px]">
              <Image
                src="/file.png"
                alt="Christian"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="order-2 lg:order-none flex-1 text-center lg:text-left space-y-6 animate-fade-in">
            <h1 className="text-white text-2xl sm:text-3xl font-light">
              Hallo, ich bin
            </h1>
            <h2 className="text-[#ea4343] text-[60px] sm:text-[80px] font-extrabold leading-none">
              Christian
            </h2>
            <h3 className="text-white text-2xl sm:text-4xl font-semibold">
              Frontend Developer
            </h3>

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

        <div className="absolute bottom-6 right-10 text-white text-sm md:text-base z-10">
          <a href="mailto:christian.pressig@web.de" className="hover:underline">
            christian.pressig@web.de
          </a>
        </div>
      </section>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-fadePulse {
          animation: fadePulse 10s ease-in-out infinite;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadePulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.25;
          }
          50% {
            transform: scale(1.08);
            opacity: 0.4;
          }
        }
      `}</style>
    </>
  );
};

export default HeroSection;
