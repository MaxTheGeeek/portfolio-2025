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
              Software engineering has always been, for me, less about the tools and more about the problems worth solving. I've spent 8+ years building across the stack from .NET backends and cloud pipelines to TypeScript frontends and AI-powered features always chasing systems that are both technically sound and genuinely enjoyable to use.
            </p>
            <p className="mb-4">
              I'm drawn to complexity that can be untangled: a slow API, a brittle deployment, a product that almost works. That's where the real engineering lives.
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
