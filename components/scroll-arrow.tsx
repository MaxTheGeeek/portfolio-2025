"use client";

import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const SECTIONS = ["hero", "about", "experience", "projects", "skills", "education", "contact"];

export function ScrollArrow() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-45% 0px -45% 0px", // Trigger when the section occupies the center of the viewport
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const currentIndex = SECTIONS.indexOf(activeSection);
  const isLast = currentIndex === SECTIONS.length - 1;
  const nextSectionId = isLast ? "hero" : SECTIONS[currentIndex + 1];

  const handleScroll = () => {
    const targetEl = document.getElementById(nextSectionId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleScroll}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-[#0b0d18]/80 border border-white/10 backdrop-blur-md text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-[0_0_20px_oklch(0.82_0.16_215_/_0.3)] transition-all duration-300 cursor-pointer active:scale-95"
      aria-label={isLast ? "Back to top" : "Next section"}
    >
      {isLast ? (
        <ChevronUp className="w-5 h-5 animate-pulse" />
      ) : (
        <ChevronDown className="w-5 h-5 animate-bounce-subtle" />
      )}
    </button>
  );
}
