"use client";

import Preloader from "@/components/Preloader";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Resume from "@/components/sections/Resume";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Preloader />

      {/* Main Wrapper */}
      <div id="wrapper">
        <Hero />
        <About />
        <Resume />
        <Services />
        <Portfolio />
        <Blog />
        <Contact />

        {/* Close button */}
        <div className="close-btn">
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  );
}
