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
      <SceneHead num="" title="Experience" sub="Where I've shipped" />
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
              <div className="tl-card-head w-full">
                <div className="flex-1">
                  <div className="tl-role">{e.role}</div>
                  <div className="tl-company">{e.company} · {e.location}</div>
                </div>
                <span className="tag cyan ml-auto" style={{ height: "fit-content" }}>{i === 0 ? "Current" : "Past"}</span>
              </div>
              {e.bullets ? (
                <ul className="list-disc list-outside ml-4 mb-4 space-y-1.5 text-[13.5px] text-gray-300">
                  {e.bullets.map((b, bi) => (
                    <li key={bi} className="leading-relaxed">{b}</li>
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
