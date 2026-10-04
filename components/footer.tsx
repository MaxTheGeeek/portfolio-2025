"use client";

import React from "react";
import { scrollToSection } from "@/lib/scroll";
import { ArrowUp, MapPin, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#0c0e12] py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5 text-xs text-[#9ca3af]">
        {/* Left: Identity & Vienna Coordinates */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-[#f3f4f6]">Max Behzadi</span>
            <span className="text-[#6b7280]">·</span>
            <span>Full-Stack Engineer | Applied AI Engineer</span>
          </div>
          <span className="hidden sm:inline text-[#6b7280]">|</span>
          <div className="flex items-center gap-1.5 text-[#6b7280] font-mono text-[11px]">
            <MapPin className="w-3.5 h-3.5 text-[#d99b53]" />
            <span>Vienna, Austria · Europe/Vienna (UTC+1)</span>
          </div>
        </div>

        {/* Right: Quick Links & Back to Top */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("hero", 80);
            }}
            className="hover:text-[#fcb96e] transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>

          <a
            href="mailto:maxbehzadi82@gmail.com"
            className="text-[#fcb96e] hover:underline transition-colors"
          >
            maxbehzadi82@gmail.com
          </a>
        </div>
      </div>

      {/* Bottom Legal & Privacy Disclaimer */}
      <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-[#6b7280]">
        <div>
          © 2026 Max Behzadi. All rights reserved. Built with precision in Vienna.
        </div>
        <div className="flex items-center gap-1.5 text-[#9ca3af]">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Zero third-party tracking cookies · Privacy-first architecture</span>
        </div>
      </div>
    </footer>
  );
}
