"use client";

import { PROFILE } from "@/lib/data";

function SceneHead({ num, title, sub }: { num: string; title: string; sub: string }) {
  return (
    <div className="scene-head">
      <span className="scene-num">{num}</span>
      <h2 className="scene-title">{title}</h2>
      <span className="scene-sub">{sub}</span>
    </div>
  );
}

export function About() {
  return (
    <section className="scene" data-screen-label="02 About" id="about">
      <SceneHead num="" title="About" sub="Self-portrait, in code" />
      <div className="about-grid">
        <div className="glass about-copy">
          <p>
            I'm a <strong>software developer</strong> with a strong focus on <strong>Cloud Engineering</strong> (AWS, Azure) and scalable architectures. I am obsessed with the seam where solid engineering meets clean interaction.
          </p>
          <p>
            Most of my work lives at the intersection of <strong>backend systems, full-stack development, and modern cloud deployment</strong>. I care about performance and robust system design as much as craft; the most interesting moment of any project is finding the version that is both resilient <em>and</em> fast.
          </p>
          <p>
            Currently {PROFILE.location.toLowerCase()}, currently building robust cloud solutions.
          </p>
        </div>
        <div className="about-stats">
          <div className="glass stat">
            <div className="stat-num">6<span className="unit">yrs+</span></div>
            <div className="stat-label">Building for the web</div>
          </div>
          <div className="glass stat">
            <div className="stat-num">{PROFILE.projectsShipped}<span className="unit">+</span></div>
            <div className="stat-label">Projects shipped to production</div>
          </div>
          <div className="glass stat">
            <div className="stat-num">{PROFILE.coffeeYear}<span className="unit">cups</span></div>
            <div className="stat-label">Coffee per year (estimated)</div>
          </div>
        </div>
      </div>
    </section>
  );
}
