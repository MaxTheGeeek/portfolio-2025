"use client";

import React, { useState, useEffect } from "react";
import { Starfield } from "@/components/starfield";
import Image from "next/image";
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
        
        {/* Profile Picture Divider */}
        <div className="flex justify-center -my-14 relative z-30 pointer-events-none">
          <div className="relative w-32 h-32 rounded-full overflow-hidden border border-white/10 bg-[#080a14]/60 backdrop-blur-md shadow-2xl p-1 pointer-events-auto transition-transform duration-300 hover:scale-105">
            <div className="w-full h-full rounded-full overflow-hidden relative">
              <Image 
                src="/me.jpg" 
                alt="Max Behzadi" 
                fill
                sizes="128px"
                className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        </div>

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
