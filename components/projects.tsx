"use client";

import React, { useState, useEffect } from "react";
import { PROJECTS } from "@/lib/data";
import { ArrowRight, Github, X } from "lucide-react";

function SceneHead({ num, title, sub }: { num: string; title: string; sub: string }) {
  return (
    <div className="scene-head">
      <span className="scene-num">{num}</span>
      <h2 className="scene-title">{title}</h2>
      <span className="scene-sub">{sub}</span>
    </div>
  );
}

function ProjectShot({ accent, idx }: { accent: string; idx: number }) {
  const variants = idx % 3;
  return (
    <div className="project-shot">
      <div className="project-shot-stripes"></div>
      <div className="project-shot-label">Placeholder · screen #{String(idx + 1).padStart(2, '0')}</div>
      <div className="project-shot-mock" style={{ borderColor: `var(--${accent}-glow, var(--line))` }}>
        <div className="project-shot-bar">
          <i></i><i></i><i></i>
        </div>
        <div className="project-shot-body">
          {variants === 0 && (
            <>
              <div className="project-shot-row w70"></div>
              <div className="project-shot-row w50"></div>
              <div className="project-shot-grid">
                <div className="project-shot-tile"></div>
                <div className="project-shot-tile alt"></div>
                <div className="project-shot-tile"></div>
                <div className="project-shot-tile alt"></div>
                <div className="project-shot-tile"></div>
                <div className="project-shot-tile alt"></div>
              </div>
            </>
          )}
          {variants === 1 && (
            <>
              <div className="project-shot-row w90"></div>
              <div className="project-shot-row w70"></div>
              <div className="project-shot-row w50"></div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 8, marginTop: 8 }}>
                <div className="project-shot-tile" style={{ aspectRatio: "auto", height: 60 }}></div>
                <div className="project-shot-tile alt" style={{ aspectRatio: "auto", height: 60 }}></div>
              </div>
            </>
          )}
          {variants === 2 && (
            <>
              <div style={{ display: "flex", gap: 6 }}>
                <div className="project-shot-row w50" style={{ flex: 1 }}></div>
                <div className="project-shot-row w50" style={{ flex: 1, background: "rgba(34, 211, 238, 0.15)" }}></div>
              </div>
              <div className="project-shot-row w90"></div>
              <div className="project-shot-row w70"></div>
              <div className="project-shot-grid" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
                <div className="project-shot-tile alt"></div>
                <div className="project-shot-tile"></div>
                <div className="project-shot-tile alt"></div>
                <div className="project-shot-tile"></div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectModal({ project, onClose }: { project: any; onClose: () => void }) {
  if (!project) return null;
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const idx = PROJECTS.findIndex(p => p.name === project.name);
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="glass modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><X size={16} /></button>
        <ProjectShot accent={project.accent} idx={idx} />
        <div className="modal-body">
          <div className="modal-sub">{project.cat} · {project.role} · {project.timeline}</div>
          <h3 className="modal-title">{project.name}</h3>
          <p className="modal-desc">{project.desc}</p>

          <div className="modal-section">
            <h4>Stack</h4>
            <div className="project-tags">
              {project.stack.map((s: string) => <span key={s} className="tag cyan">{s}</span>)}
            </div>
          </div>
          <div className="modal-section">
            <h4>Highlights</h4>
            <div className="modal-features">
              {project.features.map((f: string, i: number) => <div key={i} className="modal-feature">{f}</div>)}
            </div>
          </div>
          <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
            <button className="btn primary">Visit project <ArrowRight size={16} style={{ marginLeft: 8 }} /></button>
            <button className="btn"><Github size={16} style={{ marginRight: 8 }} /> Source</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const [openProject, setOpenProject] = useState<any>(null);

  return (
    <section className="scene" data-screen-label="04 Projects" id="projects">
      <SceneHead num="// 03" title="Projects" sub={`${PROJECTS.length} selected`} />
      <div className="projects-grid">
        {PROJECTS.map((p, i) => (
          <article key={p.name} className="glass project" onClick={() => setOpenProject(p)}>
            <ProjectShot accent={p.accent} idx={i} />
            <div className="project-meta">
              <div className="project-row">
                <h3 className="project-name">{p.name}</h3>
                <span className="project-num">{String(i + 1).padStart(2, '0')} / {String(PROJECTS.length).padStart(2, '0')}</span>
              </div>
              <p style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--ink-mute)", marginBottom: 10 }}>
                {p.cat}
              </p>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tags">
                {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          </article>
        ))}
      </div>
      <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />
    </section>
  );
}
