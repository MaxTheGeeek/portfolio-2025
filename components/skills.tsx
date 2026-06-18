"use client";

import React, { useState } from "react";
import { SKILLS, SKILL_CATS } from "@/lib/data";

function SceneHead({ num, title, sub }: { num: string; title: string; sub: string }) {
  return (
    <div className="scene-head">
      <span className="scene-num">{num}</span>
      <h2 className="scene-title">{title}</h2>
      <span className="scene-sub">{sub}</span>
    </div>
  );
}

export function Skills() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="scene" data-screen-label="05 Skills" id="skills">
      <SceneHead num="// 04" title="Skills" sub="Technical arsenal" />
      
      <div className="skills-bouncing-container">
        {SKILLS.map((s, i) => {
          const cls = s.cat === "frontend" ? "cyan" : 
                      s.cat === "desktop" ? "violet" : 
                      s.cat === "backend" ? "pink" : 
                      s.cat === "cloud" ? "amber" : "green";
                      
          return (
            <div
              key={s.name}
              className={`skill-bouncing-orb ${cls}`}
              style={{
                animationDelay: `${(i * 0.12).toFixed(2)}s`,
                "--lvl": s.level
              } as React.CSSProperties}
              onMouseEnter={() => setHovered(s.name)}
              onMouseLeave={() => setHovered(null)}
            >
              <span className="skill-orb-level"></span>
              <div className="skill-name-inner">
                {s.name}
                {hovered === s.name && (
                  <span className="skill-lvl-tooltip">{s.level}%</span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="skill-cats">
        {SKILL_CATS.map(c => (
          <div className="skill-cat" key={c.id} style={{ color: c.color }}>
            <span className="swatch"></span>
            <span style={{ color: "var(--ink-dim)" }}>{c.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
