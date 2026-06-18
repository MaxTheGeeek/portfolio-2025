"use client";

import { CONTACT } from "@/lib/data";

function SceneHead({ num, title, sub }: { num: string; title: string; sub: string }) {
  return (
    <div className="scene-head">
      <span className="scene-num">{num}</span>
      <h2 className="scene-title">{title}</h2>
      <span className="scene-sub">{sub}</span>
    </div>
  );
}

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
    <rect x="3" y="5" width="18" height="14" rx="2"/>
    <path d="m3 7 9 6 9-6"/>
  </svg>
);

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
    <circle cx="12" cy="12" r="9"/>
    <path d="M3 12h18M12 3a13 13 0 0 1 0 18M12 3a13 13 0 0 0 0 18"/>
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03a9.5 9.5 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.86v2.76c0 .26.18.58.69.48A10 10 0 0 0 12 2Z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 18v-7.93H5.67V18h2.67Zm-1.33-9.07a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1ZM18.34 18v-4.34c0-2.5-1.34-3.66-3.13-3.66a2.7 2.7 0 0 0-2.46 1.36V10.07h-2.66c.04.75 0 7.93 0 7.93h2.66v-4.43c0-.24.02-.48.09-.65a1.46 1.46 0 0 1 1.36-.97c.96 0 1.34.73 1.34 1.8V18h2.8Z"/>
  </svg>
);

const iconsMap: Record<string, any> = {
  mail: MailIcon,
  globe: GlobeIcon,
  github: GithubIcon,
  linkedin: LinkedinIcon
};

export function Contact() {
  return (
    <section className="scene" data-screen-label="07 Contact" id="contact">
      <div className="flex-1 flex flex-col justify-center w-full">
        <SceneHead num="// 06" title="Contact" sub="Let's build something" />
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
      </div>

      <footer>
        <span>© 2026 Max Behzadi · Crafted for Three.js port</span>
      </footer>
    </section>
  );
}
