"use client";

import { PROFILE } from "@/lib/data";
import { Download, ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";

const Hub = dynamic<{ onNav: (id: string) => void }>(() => import("@/components/three/Hub").then((m) => m.Hub), { ssr: false });

export function Hero() {
  const navTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section className="hero relative" data-screen-label="01 Hero" id="hero">
      <img src="/marsi.jpg" alt="background" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen pointer-events-none" style={{ filter: "grayscale(100%) blur(4px)" }} />
      <div className="hero-inner relative z-10 flex">
        <div className="hero-left relative z-20">
          <div className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-4 z-20 relative">
            {new Date().getFullYear()}
          </div>
          <h1 className="hero-name">
            {PROFILE.name}<br />
            <span className="accent">{PROFILE.surname}</span>
          </h1>
          <p className="hero-tagline">{PROFILE.tagline}</p>

          <div className="hero-cta">
            <button className="btn primary" onClick={() => navTo("projects")}>
              View Projects <span className="arrow"><ArrowRight size={16} /></span>
            </button>
            <button className="btn" onClick={() => navTo("contact")}>
              Get in touch
            </button>
          </div>

          <div className="hero-meta relative z-20">
            <div className="hero-meta-item">
              Role <span>{PROFILE.title}</span>
            </div>
            <div className="hero-meta-item">
              Based <span>{PROFILE.location}</span>
            </div>
            <div className="hero-meta-item">
              Status <span style={{ color: "var(--cyan)" }}>● {PROFILE.status}</span>
            </div>
          </div>
        </div>

        <div className="hero-right relative h-[600px] w-full max-w-[600px] mx-auto hidden md:block">
          <Hub onNav={navTo} />
        </div>
      </div>
    </section>
  );
}
