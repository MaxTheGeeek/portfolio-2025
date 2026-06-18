"use client";

import { PROFILE } from "@/lib/data";
import { ArrowRight } from "lucide-react";

import { Hub } from "@/components/three/Hub";

export function Hero() {
  const navTo = (id: string) => {
    const targetId = id === "learning" ? "education" : id;
    const el = document.getElementById(targetId);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section className="hero" data-screen-label="01 Hero" id="hero">
      <div className="hero-inner">
        <div className="hero-left">
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

        <div className="hero-right">
          <Hub onNav={navTo} />
        </div>
      </div>
    </section>
  );
}
