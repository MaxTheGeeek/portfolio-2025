"use client";

import React from "react";
import { TopNav } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { Solutions } from "@/components/solutions";
import { Projects } from "@/components/projects";
import { Principles } from "@/components/principles";
import { Trajectory } from "@/components/trajectory";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Portfolio() {
  return (
    <div className="bg-[#0c0e12] text-[#f3f4f6] min-h-screen selection:bg-[#d99b53]/30 selection:text-white">
      <TopNav />
      <main className="relative z-10 w-full">
        <Hero />
        <Solutions />
        <Projects />
        <Principles />
        <Trajectory />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
