"use client";

import { PROFILE } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

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
      <div className="hero-inner relative">
        {/* Profile photo & Name on top */}
        <div className="hero-photo-wrapper">
          <h1 className="hero-name-center">
            <span className="first-name">{PROFILE.name}</span>{" "}
            <span className="last-name">{PROFILE.surname}</span>
          </h1>
          <div className="hero-photo-ring">
            <div className="hero-photo-inner">
              <Image 
                src="/me.jpg" 
                alt="Max Behzadi" 
                fill
                sizes="(max-width: 768px) 130px, 170px"
                className="object-cover opacity-85 hover:opacity-100 transition-opacity duration-300"
                priority
              />
            </div>
          </div>
        </div>

        <div className="hero-left">
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
