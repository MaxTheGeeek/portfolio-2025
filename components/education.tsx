"use client";

import React from "react";
import { EDUCATION, LEARNING } from "@/lib/data";
import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap, Award, BookOpen, CheckCircle } from "lucide-react";

export function Education() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="scene py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative" id="education">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-4">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Continuous Growth</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
          Education & Credentials
        </h2>
        <p className="text-base text-slate-300 leading-relaxed">
          Foundational university degree, software engineering diplomas, and specialized cloud certifications.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Column 1: Academic & Bootcamps */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl border border-white/10 bg-[#0a0d14]/80 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between shadow-xl"
        >
          <div>
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Degrees & Diplomas</h3>
                  <div className="text-xs font-mono text-slate-400">Academic & Technical Training</div>
                </div>
              </div>
              <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                Foundations
              </span>
            </div>

            <div className="space-y-6">
              {EDUCATION.map((e, i) => (
                <div key={i} className="group relative pl-4 border-l-2 border-white/10 hover:border-cyan-400 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                    <span className="text-xs font-mono text-cyan-400 font-semibold">{e.school}</span>
                    <span className="text-[11px] font-mono text-slate-400">{e.date}</span>
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-white mb-1.5">{e.degree}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{e.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Column 2: Applied Research & Active Certifications */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="rounded-2xl border border-white/10 bg-[#0a0d14]/80 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between shadow-xl"
        >
          <div>
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Cloud & Engineering R&D</h3>
                  <div className="text-xs font-mono text-slate-400">Certifications & Deep Work</div>
                </div>
              </div>
              <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
                Active
              </span>
            </div>

            <div className="space-y-4">
              {LEARNING.map((l, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] hover:border-cyan-500/30 transition-all">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-sm font-semibold text-white">{l.name}</span>
                    <span className="text-xs font-mono text-cyan-300 px-2 py-0.5 rounded bg-cyan-500/10">
                      {l.progress}%
                    </span>
                  </div>
                  <div className="text-xs text-slate-400 mb-3">{l.meta}</div>
                  <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-cyan-500 to-emerald-400 rounded-full transition-all duration-700" 
                      style={{ width: `${l.progress}%` }}
                    />
                  </div>
                </div>
              ))}

              <div className="p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/20 flex items-start gap-3 mt-4">
                <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-300 leading-relaxed">
                  <strong className="text-white">Active Research Focus:</strong> Developing multi-agent coordination protocols, zero-hallucination context pipelines with Context7, and spec-driven development patterns with Claude Code.
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
