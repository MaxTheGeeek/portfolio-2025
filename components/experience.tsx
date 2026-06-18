"use client";

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

export function Experience() {
  return (
    <section className="scene" data-screen-label="03 Experience" id="experience">
      <SceneHead num="// 02" title="Experience" sub="Where I've shipped" />
      <div className="timeline">
        <div className="timeline-track"></div>
        {EXPERIENCE.map((e, i) => (
          <div className="tl-item" key={i}>
            <div className="tl-date">
              <strong>{e.to}</strong>
              {e.from} — {e.to}
            </div>
            <div className="tl-marker"><span className="dot"></span></div>
            <div className="glass tl-card">
              <div className="tl-card-head">
                <div>
                  <div className="tl-role">{e.role}</div>
                  <div className="tl-company flex flex-wrap items-center gap-2">
                    <span>{e.company} · {e.location}</span>
                    {e.company.includes("Stereum Services") && (
                      <span className="tag bg-white/5 border border-white/10 text-gray-300 font-mono text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded inline-flex items-center">
                        Subsidiary of RockLogic
                      </span>
                    )}
                  </div>
                </div>
                {i === 0 && <span className="tag cyan">Present</span>}
              </div>
              {e.bullets ? (
                <ul className="tl-desc list-disc list-outside pl-4 space-y-1.5">
                  {e.bullets.map((b, bi) => (
                    <li key={bi}>{b}</li>
                  ))}
                </ul>
              ) : (
                <p className="tl-desc">{e.blurb}</p>
              )}
              <div className="tl-tags">
                {e.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
