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
      <SceneHead num="// 01" title="About" sub="Self-portrait, in code" />
      <div className="about-grid">
        <div className="glass about-copy">
          <p>
            I'm a <strong>creative developer</strong> obsessed with the seam between design and engineering — the place where motion, 3D and considered interaction make a product feel alive instead of just functional.
          </p>
          <p>
            Most of my work lives at the intersection of <strong>React, WebGL and shaders</strong>. I care about performance and accessibility as much as craft; the most interesting moment of any project is finding the version that's beautiful <em>and</em> fast.
          </p>
          <p>
            Outside of the editor I'm usually messing about with <strong>Blender, Houdini</strong>, or learning whatever's adjacent enough to be useful. Currently {PROFILE.location.toLowerCase()}, currently building.
          </p>
        </div>
        <div className="about-stats">
          <div className="glass stat">
            <div className="stat-num">{PROFILE.yearsExp}<span className="unit">yrs</span></div>
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
