"use client";

import { CONTACT } from "@/lib/data";
import { Mail, Globe, Github, Linkedin } from "lucide-react";

function SceneHead({ num, title, sub }: { num: string; title: string; sub: string }) {
  return (
    <div className="scene-head">
      <span className="scene-num">{num}</span>
      <h2 className="scene-title">{title}</h2>
      <span className="scene-sub">{sub}</span>
    </div>
  );
}

const iconsMap: Record<string, any> = {
  mail: Mail,
  globe: Globe,
  github: Github,
  linkedin: Linkedin
};

export function Contact() {
  return (
    <section className="scene" data-screen-label="08 Contact" id="contact">
      <SceneHead num="" title="Contact" sub="Let's build something" />
      <div className="contact">
        <h3 className="contact-big">Have a project?<br/><span className="grad">Say hi.</span></h3>
        <p className="contact-sub">Open to freelance, full-time roles, or just a chat about Three.js and shaders.</p>

        <div className="contact-grid">
          {CONTACT.map(c => {
            const IconComponent = iconsMap[c.icon];
            return (
              <a key={c.label} href={c.href} className="glass contact-card" target="_blank" rel="noopener noreferrer">
                <div className="contact-icon">{IconComponent && <IconComponent />}</div>
                <div className="contact-label">{c.label}</div>
                <div className="contact-val">{c.val}</div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
