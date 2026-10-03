"use client";

import React, { useState } from "react";
import { EXPERIENCE } from "@/lib/data";
import { motion, useReducedMotion } from "framer-motion";
import { Briefcase, ChevronDown, ChevronUp, MapPin, Calendar, Sparkles } from "lucide-react";

export function Experience() {
  const shouldReduceMotion = useReducedMotion();
  // By default, open the first 2 items (most recent & relevant)
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1]);

  const toggleIndex = (index: number) => {
    setOpenIndices(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="scene py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative" id="experience">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-4">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Professional Background</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
          Engineering Experience
        </h2>
        <p className="text-base text-slate-300 leading-relaxed">
          Over 8 years delivering scalable SaaS, IaaS infrastructure, and applied AI systems.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="max-w-4xl mx-auto space-y-6 relative">
        {EXPERIENCE.map((item, index) => {
          const isOpen = openIndices.includes(index);
          const isPresent = item.to.toLowerCase() === "present";

          return (
            <motion.div
              key={`${item.company}-${item.role}-${index}`}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-2xl border border-white/10 bg-[#0a0d14]/80 backdrop-blur-xl overflow-hidden shadow-lg hover:border-cyan-500/30 transition-all duration-200"
            >
              {/* Header / Toggle Button */}
              <button
                type="button"
                onClick={() => toggleIndex(index)}
                className="w-full text-left p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 focus:outline-none focus:bg-white/[0.02] cursor-pointer"
                aria-expanded={isOpen}
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                    <span className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {item.role}
                    </span>
                    <span className="text-slate-500">at</span>
                    <span className="text-base sm:text-lg font-semibold text-cyan-300">
                      {item.company}
                    </span>
                    {isPresent && (
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-semibold">
                        Present
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
                    <span className="inline-flex items-center gap-1.5 text-slate-300">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{item.from} - {item.to}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>{item.location}</span>
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-xs font-mono text-slate-400 hidden sm:inline">
                    {isOpen ? "Collapse" : "Expand"}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </div>
              </button>

              {/* Blurb */}
              <div className="px-6 sm:px-7 pb-4">
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.blurb}
                </p>
              </div>

              {/* Expanded Details */}
              {isOpen && (
                <div className="px-6 sm:px-7 pb-6 pt-2 border-t border-white/[0.06] space-y-4 animate-in fade-in duration-200">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider pt-2">
                    Key Responsibilities & Deliverables:
                  </div>

                  <ul className="space-y-2.5">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technology Badges */}
                  <div className="pt-3 flex flex-wrap gap-1.5">
                    {item.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
