"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, Terminal, Bot, Sparkles, Code2, Check, ArrowDown, Cpu } from "lucide-react";
import { scrollToSection } from "@/lib/scroll";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState<"spec" | "voice" | "concurrency">("spec");
  const [isExpanded, setIsExpanded] = useState(false);

  const isTouchDevice = () => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(pointer: coarse)").matches || !window.matchMedia("(hover: hover)").matches;
  };

  const handlePortraitMouseEnter = () => {
    if (!isTouchDevice()) {
      setIsExpanded(true);
    }
  };

  const handlePortraitMouseLeave = () => {
    if (!isTouchDevice()) {
      setIsExpanded(false);
    }
  };

  // Keyboard accessibility: Close portrait modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isExpanded) {
        setIsExpanded(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isExpanded]);

  return (
    <section 
      className="hero min-h-[100dvh] pt-24 md:pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-center relative" 
      id="hero"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Core Value Proposition */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col items-start"
        >
          {/* Live Availability Unbordered Eyebrow */}
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#d99b53] mb-5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for Custom AI &amp; High-Performance Systems</span>
          </div>

          {/* Editorial Headline in Serif (Newsreader) - Reduced by 2 font sizes */}
          <h1 className="font-serif text-3xl sm:text-[44px] sm:leading-[52px] text-[#f3f4f6] font-normal tracking-tight mb-5">
            Engineering resilient systems and <span className="italic text-[#fcb96e]">applied AI architectures.</span>
          </h1>

          {/* Narrative Lead Paragraph */}
          <p className="text-base sm:text-lg text-[#9ca3af] leading-relaxed max-w-xl mb-8">
            Vienna-based senior engineer with over eight years designing autonomous AI agent pipelines, enterprise voice intelligence, and high-concurrency desktop &amp; cloud systems that run smoothly in production.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-9 w-full sm:w-auto">
            <a
              href="#solutions"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("solutions", 80);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-[#ECEFF4] hover:bg-[#D99B53] text-[#0F1115] font-mono font-medium text-xs tracking-wider uppercase transition-colors duration-150 cursor-pointer"
            >
              <span>Explore AI Solutions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projects", 80);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-transparent hover:border-[#D99B53] hover:text-[#D99B53] border border-[#232730] text-[#ECEFF4] font-mono font-medium text-xs tracking-wider uppercase transition-colors duration-150 cursor-pointer"
            >
              <span>View Selected Work</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact", 80);
              }}
              className="text-xs font-mono uppercase tracking-wider text-[#9CA3AF] hover:text-[#D99B53] px-2 py-2 transition-colors inline-flex items-center gap-1.5 cursor-pointer ml-1"
            >
              <span>Get in touch</span>
              <span>→</span>
            </a>
          </div>

          {/* Core Stack Metadata Line */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs font-mono text-[#6b7280] pt-4 border-t border-[#232730] w-full">
            <span className="text-[#9ca3af] font-medium">Core Stack:</span>
            <span className="text-[#d1d5db]">Claude Code &amp; MCP</span>
            <span>•</span>
            <span className="text-[#d1d5db]">TypeScript &amp; Next.js</span>
            <span>•</span>
            <span className="text-[#d1d5db]">C# &amp; .NET</span>
            <span>•</span>
            <span className="text-[#d1d5db]">Python &amp; Vector Databases</span>
          </div>
        </motion.div>

        {/* Right Column: Portrait Card & Technical Capabilities Badge */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex flex-col gap-6"
        >
          {/* Portrait & Profile Summary Bar - Footprint Increased */}
          <div className="flex items-center gap-4 sm:gap-5 p-6 sm:p-8 rounded-lg bg-[#16191f] border border-[#232730] shadow-xl">
            <div 
              className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-md overflow-hidden border border-[#232730] shrink-0 shadow-md cursor-pointer group transition-all duration-200 hover:border-[#d99b53]"
              onMouseEnter={handlePortraitMouseEnter}
              onMouseLeave={handlePortraitMouseLeave}
              onClick={() => {
                if (!isTouchDevice()) {
                  setIsExpanded(prev => !prev);
                }
              }}
              title="Hover to inspect portrait"
            >
              <Image
                src="/me.jpg"
                alt="Max Behzadi"
                fill
                priority
                sizes="112px"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-semibold text-[#f3f4f6] truncate">Max Behzadi</h3>
                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Active
                </span>
              </div>
              <div className="text-xs font-mono text-[#fcb96e] truncate mt-0.5">
                Full-Stack Engineer | Applied AI Engineer
              </div>
              <div className="text-[11px] text-[#6b7280] truncate mt-1">
                Vienna, Austria · 8+ Years Production Delivery
              </div>
            </div>
          </div>

          {/* Mini Capabilities Badge Card */}
          <div className="rounded-lg border border-[#232730] bg-[#16191f] overflow-hidden shadow-xl">
            {/* Terminal Window Header - Vertical spacing enhanced */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between px-4 py-3.5 bg-black/40 border-b border-[#232730] gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-white/20" />
                <span className="w-2 h-2 rounded-full bg-white/20" />
                <span className="w-2 h-2 rounded-full bg-white/20" />
                <span className="text-[11px] font-mono text-[#768e9d] ml-2">capabilities.ts</span>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setActiveTab("spec")}
                  className={`px-2.5 py-1 text-[10px] font-mono rounded-md transition-colors cursor-pointer ${
                    activeTab === "spec" ? "bg-[#d99b53]/20 text-[#fcb96e] font-semibold" : "text-[#9ca3af] hover:text-white"
                  }`}
                >
                  Agentic MCP
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("voice")}
                  className={`px-2 py-0.5 text-[10px] font-mono rounded-md transition-colors cursor-pointer ${
                    activeTab === "voice" ? "bg-[#d99b53]/20 text-[#fcb96e] font-semibold" : "text-[#9ca3af] hover:text-white"
                  }`}
                >
                  Voice Streaming
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("concurrency")}
                  className={`px-2 py-0.5 text-[10px] font-mono rounded-md transition-colors cursor-pointer ${
                    activeTab === "concurrency" ? "bg-[#d99b53]/20 text-[#fcb96e] font-semibold" : "text-[#9ca3af] hover:text-white"
                  }`}
                >
                  .NET Runtime
                </button>
              </div>
            </div>

            {/* Terminal Content - Spacing expanded between capabilities.ts and Agentic MCP */}
            <div className="pt-5 pb-5 px-5 font-mono text-xs text-[#9ca3af] leading-relaxed min-h-[145px]">
              {activeTab === "spec" && (
                <div className="space-y-1.5">
                  <div className="text-[#fcb96e] font-semibold flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>Spec-Driven Agentic Pipelines</span>
                  </div>
                  <p className="text-[11px] text-[#9ca3af]">
                    Custom Model Context Protocol (MCP) servers, schema AST filters, and verified deterministic tool calling across private APIs.
                  </p>
                  <div className="pt-2 text-[10px] text-[#6b7280] flex items-center gap-3">
                    <span>Protocol: Model Context Protocol</span>
                    <span>•</span>
                    <span>Verification: Deterministic</span>
                  </div>
                </div>
              )}

              {activeTab === "voice" && (
                <div className="space-y-1.5">
                  <div className="text-[#38bdf8] font-semibold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Full-Duplex Voice Systems</span>
                  </div>
                  <p className="text-[11px] text-[#9ca3af]">
                    Sub-400ms conversational audio pipelines with streaming Whisper ASR, real-time LLM reasoning, neural TTS, and automated CRM intake.
                  </p>
                  <div className="pt-2 text-[10px] text-[#6b7280] flex items-center gap-3">
                    <span>Latency: &lt; 400ms</span>
                    <span>•</span>
                    <span>Reliability: 99.9%</span>
                  </div>
                </div>
              )}

              {activeTab === "concurrency" && (
                <div className="space-y-1.5">
                  <div className="text-[#d99b53] font-semibold flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5" />
                    <span>High-Concurrency Systems</span>
                  </div>
                  <p className="text-[11px] text-[#9ca3af]">
                    Native WPF and .NET MAUI desktop applications optimized with Span&lt;T&gt;, memory pooling, and virtualized datasets exceeding 50,000 rows.
                  </p>
                  <div className="pt-2 text-[10px] text-[#6b7280] flex items-center gap-3">
                    <span>Frame Rate: 60 FPS</span>
                    <span>•</span>
                    <span>Allocations: Minimal</span>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Status Link */}
            <div className="px-4 py-2.5 bg-black/40 border-t border-white/10 flex items-center justify-between text-xs font-mono">
              <span className="text-[#9ca3af]">Status: Active & Advisory</span>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact", 80);
                }}
                className="text-[#fcb96e] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>Hire Max</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="flex justify-center mt-8">
        <a
          href="#solutions"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("solutions", 80);
          }}
          className="text-[#6b7280] hover:text-[#fcb96e] transition-colors flex flex-col items-center gap-1 text-[11px] font-mono cursor-pointer"
          aria-label="Scroll to AI Solutions"
        >
          <span>Scroll to explore</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>

      {/* Hover-to-Expand Portrait Modal View (TASK-411) */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsExpanded(false)}
            onMouseLeave={() => {
              if (!isTouchDevice()) {
                setIsExpanded(false);
              }
            }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-black/60 cursor-pointer pointer-events-auto"
            aria-modal="true"
            role="dialog"
          >
            <motion.div
              initial={shouldReduceMotion ? false : { scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={shouldReduceMotion ? undefined : { scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px] rounded-lg overflow-hidden border border-[#d99b53] shadow-2xl bg-[#0c0e12]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src="/me.jpg"
                alt="Max Behzadi — Portrait"
                fill
                sizes="(max-width: 640px) 288px, (max-width: 768px) 384px, 400px"
                priority
                className="object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-[#0c0e12] via-[#0c0e12]/80 to-transparent flex items-center justify-between text-xs font-mono border-t border-white/10">
                <div className="flex flex-col">
                  <span className="font-semibold text-[#f3f4f6]">Max Behzadi</span>
                  <span className="text-[11px] text-[#768e9d]">Full-Stack Engineer | Applied AI Engineer</span>
                </div>
                <span className="text-[11px] text-[#fcb96e] font-mono">Vienna, Austria</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
