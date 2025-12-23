import HeroSection from "@/Components/HeroSection";
import Aboutme from "@/Components/Aboutme";
import MyProjects from "@/Components/Myprojects";
import Services from "@/Components/Services";
import Contact from "@/Components/Contacme";
import Footer from "@/Components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Seidel | Webentwicklung",
  description:
    "Moderne, schnelle Websites für kleine Unternehmen. Webentwicklung mit Next.js – aus Hof, deutschlandweit.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <Aboutme myname="Christian" />
      <MyProjects />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}
