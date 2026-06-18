"use client";

import { EDUCATION, LEARNING } from "@/lib/data";

function SceneHead({ num, title, sub }: { num: string; title: string; sub: string }) {
  return (
    <div className="scene-head">
      <span className="scene-num">{num}</span>
      <h2 className="scene-title">{title}</h2>
      <span className="scene-sub">{sub}</span>
    </div>
  );
}

const GraduationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="inline w-5 h-5 mr-2 text-cyan-400">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
  </svg>
);

const TerminalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="inline w-5 h-5 mr-2 text-violet-400">
    <polyline points="4 17 10 11 4 5"/>
    <line x1="12" y1="19" x2="20" y2="19"/>
  </svg>
);

const BulletIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);

export function Education() {
  return (
    <section className="scene" data-screen-label="06 Education & Learning" id="education">
      <SceneHead num="// 05" title="Education & Learning" sub="Then & now" />
      <div className="dual-grid">
        <div className="glass dual-col">
          <div className="dual-head">
            <h3><GraduationIcon /> Foundations</h3>
            <span className="tag">Academic</span>
          </div>
          {EDUCATION.map((e, i) => (
            <div className="edu-item" key={i}>
              <div className="edu-row">
                <span className="edu-school">{e.school}</span>
                <span className="edu-date">{e.date}</span>
              </div>
              <div className="edu-degree">{e.degree}</div>
              <div className="edu-desc">{e.desc}</div>
            </div>
          ))}
        </div>

        <div className="glass dual-col">
          <div className="dual-head">
            <h3><TerminalIcon /> R&D / Tech</h3>
            <span className="tag violet">Ongoing</span>
          </div>
          {LEARNING.map((l, i) => (
            <div className="learn-item" key={i}>
              <div className="learn-icon">
                <BulletIcon />
              </div>
              <div className="learn-body">
                <div className="learn-name">{l.name}</div>
                <div className="learn-meta">{l.meta}</div>
                <div className="learn-prog">
                  <div className="learn-prog-fill" style={{ width: `${l.progress}%` }}></div>
                </div>
              </div>
              <span className="tag">{l.progress}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
