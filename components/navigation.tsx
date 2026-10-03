"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { scrollToSection } from "@/lib/scroll";

interface NavLink {
  id: string;
  label: string;
}

const NAV_LINKS: NavLink[] = [
  { id: "hero", label: "Home" },
  { id: "solutions", label: "AI Solutions" },
  { id: "projects", label: "Selected Work" },
  { id: "principles", label: "Philosophy" },
  { id: "trajectory", label: "Trajectory" },
  { id: "marsi", label: "Studio & Marsi" },
  { id: "contact", label: "Contact" },
];

export function TopNav() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = NAV_LINKS.map(n => n.id);
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 200 && rect.bottom >= 200) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard accessibility: Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveSection(id);
    scrollToSection(id, 80);
  };

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 sm:px-6 py-3 transition-all duration-300 pointer-events-none">
        <div 
          className={`w-full max-w-7xl h-14 sm:h-16 rounded-full px-4 sm:px-6 flex items-center justify-between transition-all duration-300 pointer-events-auto ${
            isScrolled
              ? "bg-[#0c0e12]/95 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/40"
              : "bg-[#111317]/85 backdrop-blur-md border border-white/10"
          }`}
        >
          {/* Brand Typographic Mark & Geographic Attribution */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "hero")}
            className="flex items-center gap-3 group focus:outline-none cursor-pointer"
            aria-label="Back to top"
          >
            <div className="flex flex-col">
              <span className="font-semibold text-lg sm:text-[20px] tracking-tight text-[#f3f4f6] group-hover:text-[#fcb96e] transition-colors leading-tight">
                Max Behzadi
              </span>
              <span className="text-[11px] font-mono text-[#768e9d] hidden sm:inline leading-none mt-0.5">
                Vienna, Austria
              </span>
            </div>
          </a>

          {/* Desktop Nav Links (Visible md and up) */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5" aria-label="Main Navigation">
            {NAV_LINKS.map(link => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-white/10 text-[#fcb96e] font-semibold shadow-inner"
                      : "text-[#9ca3af] hover:text-[#f3f4f6] hover:bg-white/5"
                  }`}
                >
                  {link.id === "solutions" ? (
                    <span className="inline-flex items-center gap-1.5 text-[#fcb96e] font-semibold">
                      <Sparkles className="w-3 h-3 text-[#d99b53]" />
                      <span>{link.label}</span>
                    </span>
                  ) : (
                    link.label
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right CTAs (Visible sm and up) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#d99b53] hover:bg-[#fcb96e] text-[#111317] text-xs font-semibold transition-all shadow-md shadow-[#d99b53]/20 active:scale-95 cursor-pointer"
            >
              <span>Discuss Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button (< md) */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="px-3 py-1.5 rounded-full bg-[#d99b53] text-[#111317] text-xs font-semibold cursor-pointer"
            >
              Contact
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(prev => !prev)}
              className="p-2 rounded-full bg-white/5 border border-white/10 text-[#9ca3af] hover:text-white cursor-pointer active:scale-95 focus:outline-none focus:ring-1 focus:ring-[#d99b53]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu (< md) */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-4 right-4 rounded-2xl bg-[#0c0e12]/95 backdrop-blur-2xl border border-white/15 p-5 shadow-2xl flex flex-col gap-2 pointer-events-auto z-50">
            {NAV_LINKS.map(link => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                  activeSection === link.id
                    ? "bg-[#d99b53]/15 text-[#fcb96e] font-semibold"
                    : "text-[#9ca3af] hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.id === "solutions" ? (
                  <span className="inline-flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#d99b53]" />
                    <span>{link.label}</span>
                  </span>
                ) : (
                  link.label
                )}
              </a>
            ))}

            <div className="pt-3 mt-2 border-t border-white/10 flex flex-col gap-2">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "contact")}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#d99b53] text-[#111317] text-sm font-semibold cursor-pointer"
              >
                <span>Discuss Project</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Backdrop overlay for mobile menu */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 md:hidden pointer-events-auto"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
