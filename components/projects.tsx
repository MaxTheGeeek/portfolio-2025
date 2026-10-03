"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { scrollToSection } from "@/lib/scroll";
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  Heart, 
  ExternalLink, 
  Cpu, 
  Layers, 
  Activity, 
  ShieldCheck, 
  Terminal,
  CheckCircle2
} from "lucide-react";

interface CaseStudy {
  id: string;
  number: string;
  name: string;
  role: string;
  timeframe: string;
  stack: string[];
  description: string;
  metrics: { label: string; value: string }[];
  image: string;
  liveUrl?: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "maxerz-desktop",
    number: "01 // DESKTOP RUNTIME • 2024-2025",
    name: "MaxerZ Desktop Application",
    role: "Lead Architect & Systems Developer",
    timeframe: "2024 - 2025",
    stack: ["C#", ".NET MAUI", "Python Engine", "OpenRouter API", "SQLite"],
    description: "Engineered a native client desktop platform optimizing professional career governance workflows via local-first execution. Integrates custom tool calling with OpenRouter endpoints while decoupling payload state across asynchronous worker threads to maintain 60fps UI responsiveness during bulk document compilation.",
    metrics: [
      { label: "Threading", value: "Async Worker Pool" },
      { label: "Model Routing", value: "Adaptive Fallback" },
      { label: "Storage", value: "Encrypted SQLite" },
      { label: "Responsiveness", value: "60 FPS UI Thread" }
    ],
    image: "/projects/maxerz-1.png",
    liveUrl: "https://github.com/MaxTheGeeek"
  },
  {
    id: "stereum",
    number: "02 // DISTRIBUTED IAAS • 2024-2026",
    name: "Stereum Launcher & Plus",
    role: "Full-Stack Systems Engineer · RockLogic GmbH",
    timeframe: "2024 - 2026",
    stack: ["Vue.js", "Electron", "Shell Scripting", "RabbitMQ", "Docker"],
    description: "Decoupled Ethereum node automation platform used by 50,000+ active validators and stakers globally. Engineered zero-downtime client switching, dynamic system resource throttling, and distributed RPC heartbeat monitoring across multiple testnets and mainnet.",
    metrics: [
      { label: "Deployment Scale", value: "50,000+ Active Nodes" },
      { label: "Architecture", value: "Decoupled Message Bus" },
      { label: "Reliability", value: "Zero-Downtime Swap" },
      { label: "Telemetry", value: "Prometheus & Grafana" }
    ],
    image: "/projects/launcher-1.png",
    liveUrl: "https://stereum.net"
  },
  {
    id: "rocklogic",
    number: "03 // TELEMETRY & CLOUD • 2024-2025",
    name: "rocklogic.at Architecture",
    role: "Infrastructure & Telemetry Engineer · RockLogic GmbH",
    timeframe: "2024 - 2025",
    stack: ["Next.js", "TypeScript", "Grafana API", "Docker", "Nginx"],
    description: "B2B telemetry and infrastructure showcase delivering real-time Ethereum node cluster monitoring, automated Grafana dashboard provisioning, and high-performance server-side rendering with sub-100ms time to first byte.",
    metrics: [
      { label: "TTFB Performance", value: "< 90ms Edge Global" },
      { label: "Dashboard Engine", value: "Automated Grafana API" },
      { label: "Cluster Monitoring", value: "10+ Enterprise Clients" },
      { label: "Security", value: "Hardened TLS Reverse Proxy" }
    ],
    image: "/projects/rocklogic.png",
    liveUrl: "https://rocklogic.at"
  },
  {
    id: "private-banking-wpf",
    number: "04 // FINTECH SYSTEMS • 2023-2024",
    name: "Private Banking Portfolio Suite",
    role: "Senior .NET Systems Developer",
    timeframe: "2023 - 2024",
    stack: ["C#", "WPF", "MVVM Pattern", "VirtualizingStackPanel", "SQL Server"],
    description: "High-throughput financial valuation workstation built for enterprise asset managers. Solved extreme UI lag by implementing VirtualizingStackPanel algorithms capable of rendering 50,000+ active portfolio rows at 60 FPS while reducing calculation latency from 850ms to sub-120ms.",
    metrics: [
      { label: "UI Virtualization", value: "50,000+ Records @ 60 FPS" },
      { label: "Latency Reduction", value: "850ms → < 120ms" },
      { label: "Memory Hygiene", value: "Zero Thread Blocking" },
      { label: "Reporting Engine", value: "Crystal Reports Integrated" }
    ],
    image: "/projects/banking-table.png"
  },
  {
    id: "cover-letter-work",
    number: "05 // AGENTIC PIPELINES • 2025-2026",
    name: "cover-letter.work & AI Document Pipelines",
    role: "Full-Stack & Applied AI Engineer",
    timeframe: "2025 - 2026",
    stack: ["Next.js", "TypeScript", "OpenRouter", "Supabase", "Tailwind CSS"],
    description: "Production career intelligence engine converting unstructured candidate backgrounds into bespoke executive communications. Implemented schema AST verification to eliminate AI hallucinations and multi-turn prompt optimization with real-time streaming feedback.",
    metrics: [
      { label: "Context Engine", value: "Multi-Turn Structured Prompting" },
      { label: "Hallucination Defense", value: "AST Schema Verification" },
      { label: "Token Streaming", value: "< 2s First Token Latency" },
      { label: "Persistence", value: "Vector Search & Postgres" }
    ],
    image: "/projects/cover-1.png",
    liveUrl: "https://cover-letter.work"
  }
];

export function Projects() {
  const shouldReduceMotion = useReducedMotion();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likesMap, setLikesMap] = useState<Record<string, number>>({});
  const [hasLikedMap, setHasLikedMap] = useState<Record<string, boolean>>({});
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // Fetch initial likes
  useEffect(() => {
    async function fetchLikes() {
      try {
        const res = await fetch("/api/likes");
        if (res.ok) {
          const data = await res.json();
          const map: Record<string, number> = {};
          if (Array.isArray(data)) {
            data.forEach((item: any) => {
              if (item.id) map[item.id] = item.count || 0;
            });
          }
          setLikesMap(map);
        }
      } catch {
        // Fallback gracefully
      }
    }
    fetchLikes();
  }, []);

  // Keyboard navigation listener (ArrowLeft / ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA") return;
      if (e.key === "ArrowLeft") {
        setCurrentIndex(prev => (prev === 0 ? CASE_STUDIES.length - 1 : prev - 1));
      } else if (e.key === "ArrowRight") {
        setCurrentIndex(prev => (prev === CASE_STUDIES.length - 1 ? 0 : prev + 1));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleNext = () => {
    setCurrentIndex(prev => (prev === CASE_STUDIES.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? CASE_STUDIES.length - 1 : prev - 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    setTouchStartX(null);
  };

  const handleLike = async (projectName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (hasLikedMap[projectName]) return;

    // Optimistic update
    setLikesMap(prev => ({
      ...prev,
      [projectName]: (prev[projectName] || 0) + 1
    }));
    setHasLikedMap(prev => ({ ...prev, [projectName]: true }));

    try {
      await fetch("/api/likes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: projectName })
      });
    } catch {
      // Revert if error
    }
  };

  const handleDeepDive = (projectName: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const event = new CustomEvent("prefill-contact-service", {
      detail: { project: projectName }
    });
    window.dispatchEvent(event);
    scrollToSection("contact", 80);
  };

  const currentStudy = CASE_STUDIES[currentIndex];

  return (
    <section className="scene py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative" id="projects">
      {/* Dossier Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-white/10">
        <div>
          <span className="text-xs font-mono uppercase tracking-[0.06em] text-[#d99b53] mb-2 block">
            Engineering Dossier
          </span>
          <h2 className="font-serif text-2xl sm:text-[32px] sm:leading-[40px] font-normal text-[#f3f4f6] tracking-tight">
            Selected <span className="italic text-[#fcb96e]">Works</span>
          </h2>
        </div>

        {/* Carousel Pagination Controls */}
        <div className="flex items-center gap-4">
          <div className="text-xs font-mono text-[#6b7280]">
            <span className="text-[#f3f4f6] font-semibold">{currentIndex + 1}</span> of {CASE_STUDIES.length}
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center gap-1.5">
            {CASE_STUDIES.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentIndex(i)}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  currentIndex === i ? "w-6 bg-[#d99b53]" : "w-1.5 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to case study ${i + 1}`}
              />
            ))}
          </div>

          {/* Prev / Next Buttons */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-[#f3f4f6] hover:text-[#fcb96e] transition-colors cursor-pointer active:scale-95"
              aria-label="Previous Case Study (ArrowLeft)"
              title="Previous Case Study (ArrowLeft)"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-[#f3f4f6] hover:text-[#fcb96e] transition-colors cursor-pointer active:scale-95"
              aria-label="Next Case Study (ArrowRight)"
              title="Next Case Study (ArrowRight)"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Active Case Study Dossier Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStudy.id}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={shouldReduceMotion ? undefined : { opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl border border-white/10 bg-[#111317] overflow-hidden shadow-2xl touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left Column: Case Study Intelligence & Metrics */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                {/* Dossier Top Identifier */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-white/10 text-xs font-mono">
                  <span className="text-[#fcb96e] font-medium tracking-wider">
                    {currentStudy.number}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="text-[#6b7280]">{currentStudy.timeframe}</span>
                    <button
                      type="button"
                      onClick={(e) => handleLike(currentStudy.name, e)}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono transition-all cursor-pointer ${
                        hasLikedMap[currentStudy.name]
                          ? "bg-rose-500/15 border border-rose-500/30 text-rose-400"
                          : "bg-white/5 border border-white/10 text-[#9ca3af] hover:text-white"
                      }`}
                      title="Like this case study"
                    >
                      <Heart className={`w-3 h-3 ${hasLikedMap[currentStudy.name] ? "fill-rose-400" : ""}`} />
                      <span>{likesMap[currentStudy.name] || 0}</span>
                    </button>
                  </div>
                </div>

                {/* Project Title & Role */}
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#f3f4f6] tracking-tight mb-2">
                  {currentStudy.name}
                </h3>
                <div className="text-xs font-mono text-[#d99b53] mb-5">
                  {currentStudy.role}
                </div>

                {/* Narrative Description */}
                <p className="text-sm text-[#9ca3af] leading-relaxed mb-6">
                  {currentStudy.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {currentStudy.stack.map(tag => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#16191f] border border-white/10 text-[#d1d5db]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="pt-6 border-t border-white/10">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                  {currentStudy.metrics.map((m, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-[#16191f] border border-white/5">
                      <div className="text-[10px] font-mono text-[#6b7280] uppercase tracking-wider mb-0.5">
                        {m.label}
                      </div>
                      <div className="text-xs font-mono font-semibold text-[#f3f4f6]">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action Row */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <a
                    href="#contact"
                    onClick={(e) => handleDeepDive(currentStudy.name, e)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#d99b53] hover:bg-[#fcb96e] text-[#111317] font-semibold text-xs transition-all shadow-md shadow-[#d99b53]/20 active:scale-95 cursor-pointer"
                  >
                    <span>Request Technical Deep Dive</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>

                  {currentStudy.liveUrl && (
                    <a
                      href={currentStudy.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-[#9ca3af] hover:text-[#fcb96e] transition-colors"
                    >
                      <span>Public Repository / Live</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column: Visual Preview / Case Study Asset */}
            <div className="lg:col-span-5 relative bg-[#0c0e12] border-t lg:border-t-0 lg:border-l border-white/10 min-h-[300px] lg:min-h-[460px] flex items-center justify-center p-6 sm:p-8">
              <div className="relative w-full h-full min-h-[260px] rounded-xl overflow-hidden border border-white/10 shadow-lg group">
                <Image
                  src={currentStudy.image}
                  alt={currentStudy.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e12] via-transparent to-transparent opacity-40" />

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-black/80 text-[#9ca3af] border border-white/10">
                    Production Architecture
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#d99b53]/20 text-[#fcb96e] border border-[#d99b53]/30">
                    Verified
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
