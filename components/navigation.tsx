"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" }
];

export function TopNav() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const ids = NAV_ITEMS.map((n) => n.id);
    const handler = () => {
      let cur = "hero";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= window.innerHeight * 0.4) cur = id;
      }
      setActive(cur);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <nav className="topnav">
      <span className="topnav-brand"><span className="dot"></span> MB / Portfolio</span>
      <span className="topnav-divider"></span>
      {NAV_ITEMS.map((n) => (
        <button
          key={n.id}
          className={active === n.id ? "active" : ""}
          onClick={() => navTo(n.id)}
        >
          {n.label}
        </button>
      ))}
    </nav>
  );
}
