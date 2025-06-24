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
      <div className="w-full h-auto" id="home">
        <div className="w-full min-h-screen relative bg-[#3c3c3c] overflow-hidden">
          <div className="max-w-[1400px] mx-auto w-full px-6 md:px-10 py-12 md:py-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 relative">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <span className="font-josefin text-[22px] md:text-[25px] font-bold text-white tracking-tight mb-4 inline-block">
                Hallo ich bin
              </span>
              <h3 className="text-[50px] md:text-[85px] lg:text-[100px] font-bold text-[#ea4343] tracking-tight leading-tight">
                Christian
              </h3>
              <div className="text-[24px] md:text-[40px] font-bold text-white tracking-tight font-josefin">
                <span>
                  <span className="text-white">Creative </span>
                  <b>Frontend Developer</b>
                </span>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start mt-9 mb-10 gap-5">
                <a
                  className="text-white font-josefin bg-[#ea4343] font-bold px-10 py-4 rounded-md border-2 border-[#ea4343] transition-all hover:bg-transparent hover:text-black"
                  href="#contact"
                >
                  Say Hello{" "}
                  <Image
                    src="/message.svg"
                    alt=""
                    width={16}
                    height={16}
                    className="inline ml-2"
                  />
                </a>
                <a
                  className="text-white font-josefin font-bold transition-all hover:text-[#ea4343]"
                  href="#about"
                >
                  About Me
                </a>
              </div>
            </div>

            <div
              ref={imageContainerRef}
              className="relative w-full lg:w-[40%] h-[400px] sm:h-[500px] lg:h-[700px] transition-transform duration-300 ease-out will-change-transform"
            >
              <div className="relative w-full h-full top-[25px]">
                <Image src="/file.png" alt="" fill className="object-contain" />
              </div>
              <div className="hidden sm:block">
                <div className="absolute top-[15%] right-[25%] w-[100px] h-[100px] bg-[#ea4343] z-[-1]"></div>
                <div className="absolute top-[50%] right-[65%] w-[250px] h-[250px] bg-[#ea4343] z-[-1] blur-xl opacity-60"></div>
                <div className="absolute top-[20%] right-[30%] w-[250px] h-[300px] border-[4px] border-white z-[-1]"></div>
                <h3 className="absolute top-1/2 -translate-y-1/2 right-[-145px] z-[-2] mt-[-70px]">
                  <span className="text-[200px] lg:text-[260px] text-transparent font-montserrat font-bold stroke-[3px] stroke-white/30">
                    Aali
                  </span>
                </h3>
              </div>
            </div>
          </div>

          <div className="absolute bottom-6 left-4 md:left-[50px]">
            <a className="text-white text-[16px] md:text-[21px]" href="#">
              christian.pressig@web.de
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
