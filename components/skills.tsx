"use client";

import React, { useState } from "react";
import { SKILLS, SKILL_CATS, SKILL_LINES } from "@/lib/data";

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
      <SceneHead num="// 04" title="Skills" sub="The constellation" />
      <div className="constellation">
        <svg className="const-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          {SKILL_LINES.map(([a, b], i) => (
            <line
              key={i}
              className="const-line"
              x1={SKILLS[a].x} y1={SKILLS[a].y}
              x2={SKILLS[b].x} y2={SKILLS[b].y}
            />
          ))}
        </svg>
        {SKILLS.map((s, i) => {
          const cls = s.cat === "frontend" ? "cyan" : 
                      s.cat === "threed" ? "violet" : 
                      s.cat === "backend" ? "pink" : 
                      s.cat === "design" ? "amber" : "green";
          return (
            <div
              key={s.name}
              className={`skill-orb ${cls} animate-orb`}
              style={{
                left: `${s.x}%`,
                top: `${s.y}%`,
                animationDelay: `${i * 0.3}s`
              }}
              onMouseEnter={() => setHovered(s.name)}
              onMouseLeave={() => setHovered(null)}
            >
              <div
                className="skill-orb-bubble"
                style={{
                  width: s.size,
                  height: s.size,
                  fontSize: s.size > 80 ? 12 : 10,
                  ['--lvl' as any]: s.level
                }}
              >
                <span className="skill-orb-level"></span>
                <span style={{ position: "relative", textAlign: "center", padding: "0 6px" }}>
                  {s.name}
                  {hovered === s.name && (
                    <span style={{ display: "block", fontSize: 9, color: "var(--ink-mute)", marginTop: 2 }}>{s.level}%</span>
                  )}
                </span>
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
