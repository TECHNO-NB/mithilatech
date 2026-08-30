"use client"

import Hero from "@/components/Hero";
import BrandLogos from "@/components/BrandLogos";
import Services from "@/components/Services";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        <BrandLogos />
        <Services />
        <About />
        <Portfolio />
        <Testimonials />
        <CtaBanner />
      </main>
    </>
  );
}
