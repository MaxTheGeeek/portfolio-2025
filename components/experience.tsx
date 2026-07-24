"use client";

import React, { useState, useMemo } from "react";
import { EXPERIENCE } from "@/lib/data";

function SceneHead({ num, title, sub }: { num: string; title: string; sub: string }) {
  return (
    <div className="scene-head">
      <span className="scene-num">{num}</span>
      <h2 className="scene-title">{title}</h2>
      <span className="scene-sub">{sub}</span>
    </div>
  );
}

function CardDots({ seedId }: { seedId: string }) {
  const dots = useMemo(() => {
    let hash = 0;
    for (let i = 0; i < seedId.length; i++) {
      hash = seedId.charCodeAt(i) + ((hash << 5) - hash);
    }
    let seed = Math.abs(hash) || 42;
    const rand = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };

    const count = 14;
    const arr = [];
    for (let i = 0; i < count; i++) {
      const x = rand() * 100;
      const y = rand() * 100;
      const size = rand() > 0.85 ? 2 : 1;
      const op = 0.08 + rand() * 0.18;
      arr.push({
        left: `${x.toFixed(2)}%`,
        top: `${y.toFixed(2)}%`,
        width: `${size}px`,
        height: `${size}px`,
        opacity: op,
      });
    }
    return arr;
  }, [seedId]);

  return (
    <>
      {dots.map((dot, idx) => (
        <div
          key={idx}
          style={{
            position: "absolute",
            left: dot.left,
            top: dot.top,
            width: dot.width,
            height: dot.height,
            borderRadius: "50%",
            backgroundColor: "#e2e8f0",
            opacity: dot.opacity,
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
      ))}
    </>
  );
}

export function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="scene" data-screen-label="03 Experience" id="experience">
      <SceneHead num="// 02" title="Experience" sub="Where I've shipped" />
      <div className="timeline">
        <div className="timeline-track"></div>
        {EXPERIENCE.map((e, i) => {
          const isOpen = hoveredIndex === i;
          return (
            <div className={`tl-item ${isOpen ? "is-open" : ""}`} key={i}>
              <div className="tl-date">
                <strong>{e.to.toUpperCase()}</strong>
                <div className="range">{e.from.toUpperCase()} — {e.to.toUpperCase()}</div>
              </div>
              <div className="tl-marker">
                <div className="tl-dot"></div>
              </div>
              <div
                className="tl-card"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <CardDots seedId={e.company + "-" + e.role} />
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div className="tl-card-head">
                    <div>
                      <h3 className="tl-role">{e.role}</h3>
                      <div className="tl-company flex flex-wrap items-center gap-2">
                        <span>{e.company} · {e.location}</span>
                        {e.company.includes("Stereum Services") && (
                          <span className="tag bg-white/5 border border-white/10 text-gray-300 font-mono text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded inline-flex items-center">
                            Subsidiary of RockLogic
                          </span>
                        )}
                      </div>
                    </div>
                    {e.to.toLowerCase() === "present" && (
                      <div className="tl-present-badge">PRESENT</div>
                    )}
                  </div>

                  <div className="tl-bullets-wrap">
                    <div className="tl-bullets-inner">
                      <ul className="tl-bullets-list">
                        {e.bullets.map((b, bi) => (
                          <li key={bi} className="tl-bullet-item">
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="tl-badges-row">
                    {e.tags.map(t => (
                      <div key={t} className="tl-badge">{t}</div>
                    ))}
                  </div>

                  <div className="tl-hint">hover to expand details</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
