"use client";

import React, { useState, useEffect } from "react";
import { Starfield } from "@/components/starfield";
import { TopNav } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Education } from "@/components/education";
import { Contact } from "@/components/contact";
import { ScrollArrow } from "@/components/scroll-arrow";
import { TweaksPanel } from "@/components/tweaks-panel";

export default function Portfolio() {
  const [intensity, setIntensity] = useState(70);

  // Sync intensity value to css variable --intensity at the page root level
  useEffect(() => {
    document.documentElement.style.setProperty("--intensity", String(intensity / 50));
  }, [intensity]);

  return (
    <>
      <Starfield />
      <div className="grid-floor"></div>

      <div className="app relative z-10 text-white min-h-screen">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
        <ScrollArrow />
      </div>

      <TweaksPanel intensity={intensity} setIntensity={setIntensity} />
    </>
  );
}
