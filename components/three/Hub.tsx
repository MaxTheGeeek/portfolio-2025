"use client";

import React from "react";
import { NAV_NODES } from "@/lib/data";

// Custom premium SVG icons for navigation nodes
const BriefcaseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-9 h-9">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
  </svg>
);

const FolderCodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-9 h-9">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
    <path d="m10 11-2 2 2 2m4-4 2 2-2 2"/>
  </svg>
);

const CpuIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-9 h-9">
    <rect x="4" y="4" width="16" height="16" rx="2"/>
    <path d="M9 9h6v6H9zM9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3"/>
  </svg>
);

const GraduationCapIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-9 h-9">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
  </svg>
);

const RocketIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-9 h-9">
    <path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 3.5s2.25-1 3.5-2.5M12 5l-8 8M9 9l8 8M19 5l-7 7"/>
    <path d="M9 15l-3-3 6-6 9 9-3 3-9-9z"/>
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-9 h-9">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

export function Hub({ onNav }: { onNav: (id: string) => void }) {
  return (
    <div className="hub">
      <div className="hub-inner-stable">
        {/* Dash Orbit Ring */}
        <div className="hub-orbit-ring"></div>

        {/* Central Spinning Core */}
        <div className="hub-core">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="hub-core-face"></div>
          ))}
        </div>

        {/* Nodes arranged in a perfect circle around the core */}
        {NAV_NODES.map((node, i) => {
          // Evenly spaced at 60deg intervals around the ring (6 items)
          const R = 220; 
          const angle = i * 60 - 90; // offset to start at the top (12 o'clock)
          const rad = (angle * Math.PI) / 180;
          const x = Math.cos(rad) * R;
          const y = Math.sin(rad) * R * 0.76; // compress slightly to give oval 3D look

          // Node color classes
          const colorCls = 
            node.id === "experience" ? "cyan" :
            node.id === "projects" ? "pink" :
            node.id === "skills" ? "violet" :
            node.id === "education" ? "amber" :
            node.id === "learning" ? "green" : "cyan";

          const Icon = () => {
            if (node.id === "experience") return <BriefcaseIcon />;
            if (node.id === "projects") return <FolderCodeIcon />;
            if (node.id === "skills") return <CpuIcon />;
            if (node.id === "education") return <GraduationCapIcon />;
            if (node.id === "learning") return <RocketIcon />;
            if (node.id === "contact") return <MailIcon />;
            return null;
          };

          return (
            <div
              key={node.id}
              className="hub-node"
              style={{ 
                transform: `translate3d(${x}px, ${y}px, 0px)`,
                animationDelay: `${i * 0.45}s`
              }}
              onClick={() => onNav(node.id)}
            >
              <div className={`hub-shape circle ${colorCls}`}>
                <Icon />
              </div>
              <div className="hub-label">{node.label}</div>
            </div>
          );
        })}
      </div>
      <div className="hub-counter">[ click any item to teleport ]</div>
    </div>
  );
}
