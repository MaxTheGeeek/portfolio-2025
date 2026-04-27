"use client";

import { EDUCATION, LEARNING } from "@/lib/data";
import { Sparkles, BookOpen } from "lucide-react";

function SceneHead({ num, title, sub }: { num: string; title: string; sub: string }) {
  return (
    <div className="scene-head">
      <span className="scene-num">{num}</span>
      <h2 className="scene-title">{title}</h2>
      <span className="scene-sub">{sub}</span>
    </div>
  );
}

export function Education() {
  return (
    <section className="scene" data-screen-label="06 Education" id="education">
      <SceneHead num="// 05" title="Education & Learning" sub="Then & now" />
      <div className="dual-grid">
        <div className="glass dual-col">
          <div className="dual-head">
            <h3>Education</h3>
            <span className="tag">Foundations</span>
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

        <div className="glass dual-col" id="learning" data-screen-label="07 Learning">
          <div className="dual-head">
            <h3>Currently Learning</h3>
            <span className="tag violet">In progress</span>
          </div>
          {LEARNING.map((l, i) => (
            <div className="learn-item" key={i}>
              <div className="learn-icon">
                {i % 2 === 0 ? <Sparkles size={20} /> : <BookOpen size={20} />}
              </div>
              <div className="learn-body">
                <div className="learn-name">{l.name}</div>
                <div className="learn-meta">{l.meta}</div>
                <div className="learn-prog">
                  <div className="learn-prog-fill" style={{ width: `${l.progress}%` }}></div>
                </div>
              </div>
              <span className="tag" style={{ minWidth: 44, justifyContent: "center" }}>{l.progress}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
