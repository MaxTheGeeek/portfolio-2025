"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Handle Nav Background
      setScrolled(window.scrollY > 20);

      // Handle Active Section
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-gray-900/80 backdrop-blur-md border-b border-gray-800 shadow-md py-2"
          : "bg-transparent py-4"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div
            className="text-xl font-bold text-white cursor-pointer flex items-center gap-2"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="bg-gradient-to-r from-blue-500 to-amber-500 bg-clip-text text-transparent">MB</span>
            <span className={`${scrolled ? 'opacity-100' : 'opacity-0 md:opacity-100'} transition-opacity duration-300`}>Max Behzadi</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 ${activeSection === item.id
                    ? "text-white bg-white/10 backdrop-blur-sm"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
              >
                {item.label}
              </button>
            ))}
            <Button
              variant="default"
              size="sm"
              className="ml-4 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-full px-6"
              onClick={() => scrollToSection("contact")}
            >
              Hire Me
            </Button>
          </div>

          {/* Mobile Navigation Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-white hover:bg-white/10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-b border-gray-800 animate-in slide-in-from-top-2">
            <div className="flex flex-col p-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left py-3 px-4 rounded-lg text-sm font-medium transition-colors ${activeSection === item.id
                      ? "bg-blue-500/10 text-blue-400"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                    }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2">
                <Button
                  className="w-full bg-amber-500 hover:bg-amber-600 text-black"
                  onClick={() => scrollToSection("contact")}
                >
                  Hire Me
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
