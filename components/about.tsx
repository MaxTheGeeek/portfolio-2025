"use client";

import { PROFILE } from "@/lib/data";
import Image from "next/image";

function SceneHead({ num, title, sub }: { num: string; title: string; sub: string }) {
  return (
    <div className="scene-head">
      <span className="scene-num">{num}</span>
      <h2 className="scene-title">{title}</h2>
      <span className="scene-sub">{sub}</span>
    </div>
  );
}

export function About() {
  return (
    <section className="scene" data-screen-label="02 About" id="about">
      <SceneHead num="// 01" title="About" sub="Self-portrait, in code" />
      <div className="about-grid">
        <div className="glass about-copy flex flex-col justify-between h-full">
          <div>
            <p className="mb-4">
              Software engineering has always been, for me, less about the tools and more about the problems worth solving. I've spent 8+ years building production-grade solutions across B2B SaaS, IaaS infrastructure, and FinTech systems—specializing in a high-velocity, dual-stack approach combining C#/.NET and TypeScript/NestJS.
            </p>
            <p className="mb-4">
              Today, my focus is at the intersection of robust backend architectures and AI-driven development. I leverage tools like Claude Code, Context7 context mapping, and custom repository rules to design agentic workflows, accelerate testing, and build complex applications from specification to launch.
            </p>
            <p>
              Currently in Vienna, looking for problems worth solving.
            </p>
          </div>

          <div className="mt-6 flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm">
            <div className="relative w-20 h-20 overflow-hidden rounded-lg border border-white/10">
              <Image 
                src="/marsi.jpg" 
                alt="My dog Marsi" 
                fill
                sizes="80px"
                className="object-cover" 
              />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Marsi</div>
              <div className="text-xs text-gray-400">Chief Morale Officer & faithful companion</div>
            </div>
          </div>
        </div>
        <div className="about-stats">
          <div className="glass stat">
            <div className="stat-num">{PROFILE.yearsExp}<span className="unit">yrs</span></div>
            <div className="stat-label">Building for the web</div>
          </div>
          <div className="glass stat">
            <div className="stat-num">{PROFILE.projectsShipped}<span className="unit">+</span></div>
            <div className="stat-label">Projects shipped to production</div>
          </div>
          <div className="glass stat">
            <div className="stat-num">{PROFILE.coffeeYear}<span className="unit">cups</span></div>
            <div className="stat-label">Coffee per year (estimated)</div>
          </div>
        </div>
      </div>
    </section>
  );
}
