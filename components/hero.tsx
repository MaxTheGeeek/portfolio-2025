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
    <section className="hero" data-screen-label="01 Hero" id="hero">
      <div className="hero-inner">
        <div className="hero-left">
          <div className="hero-eyebrow">Portfolio · v3.0 · 2026</div>
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
            <button className="btn" onClick={() => window.open("/Majid_Behzadi_Resume.pdf", "_blank")}>
              <Download size={16} style={{ marginRight: 8 }} /> Resume
            </button>
          </div>

          <div className="hero-meta">
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
