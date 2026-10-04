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
  ExternalLink 
} from "lucide-react";

interface CaseStudy {
  id: string;
  number: string;
  name: string;
  role: string;
  timeframe: string;
  stack: string[];
  description: string;
  image: string;
  liveUrl?: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "maxerz",
    number: "01 // AI DESKTOP RUNTIME • 2026",
    name: "MaxerZ",
    role: "Lead Systems Architect",
    timeframe: "2026",
    stack: ["C#", ".NET 8", "Angular", "MAUI"],
    description: "AI-powered native desktop application engineered to streamline professional career governance and document compilation. Features decoupled worker threads, local-first execution, and adaptive model orchestration to maintain a responsive 60 FPS UI under intensive document generation workloads.",
    image: "/projects/maxerz-2.png",
    liveUrl: "https://github.com/MaxTheGeeek"
  },
  {
    id: "stereum-plus",
    number: "02 // IAAS PROVISIONING • 2024-2026",
    name: "StereumPlus",
    role: "Full-Stack Systems Engineer · RockLogic GmbH",
    timeframe: "2024 — 2026",
    stack: ["Next.js", "NestJS", "TypeScript", "RabbitMQ", "BullMQ", "PostgreSQL", "TypeORM"],
    description: "High-throughput cloud server provisioning and infrastructure platform. Orchestrates bare-metal and virtual machine deployments with asynchronous queue pipelines, real-time node telemetry, and granular role-based access controls.",
    image: "/projects/stereum-plus.png",
    liveUrl: "https://stereumplus.com"
  },
  {
    id: "stereum-launcher",
    number: "03 // ETH NODE ORCHESTRATION • 2022-2026",
    name: "Stereum Launcher Desktop App",
    role: "Frontend Lead & Systems Developer · RockLogic GmbH",
    timeframe: "2022 — 2026",
    stack: ["Vue.js", "Node.js", "WebSocket", "Ansible", "Electron.js"],
    description: "Cross-platform Ethereum node management platform trusted by 50,000+ active validators and stakers globally. Engineered zero-downtime client switching, dynamic system resource throttling, and distributed RPC heartbeat monitoring across multiple testnets and mainnet.",
    image: "/projects/launcher-2.png",
    liveUrl: "https://stereum.net"
  },
  {
    id: "private-bank-app",
    number: "04 // ENTERPRISE FINTECH • 2023-2024",
    name: "Private Bank Internal App",
    role: "Senior .NET Systems Developer",
    timeframe: "2023 — 2024",
    stack: ["WPF", "Angular", "C#", ".NET Framework", "Crystal Reports"],
    description: "Mission-critical financial valuation workstation built for enterprise asset managers. Solved extreme UI lag by implementing UI virtualization algorithms capable of rendering 50,000+ active portfolio rows at 60 FPS while reducing calculation latency from 850ms to sub-120ms.",
    image: "/projects/banking-table.png"
  },
  {
    id: "persian-score",
    number: "05 // SPORTS TELEMETRY • 2025",
    name: "Persian Score",
    role: "Full-Stack Developer",
    timeframe: "2025",
    stack: ["Next.js", "TypeScript", "Supabase", "Socket.io / WebSocket"],
    description: "High-concurrency sports telemetry and live score platform. Built with real-time WebSocket feeds and edge caching to stream second-by-second football match updates, statistics, and league standings under heavy traffic surges.",
    image: "/projects/persian-scores.png"
  },
  {
    id: "irmall",
    number: "06 // RETAIL ARCHITECTURE • 2024",
    name: "IRMALL",
    role: "Full-Stack Developer",
    timeframe: "2024",
    stack: ["React", "Contentful CRM", "Node.js", "PostgreSQL"],
    description: "E-commerce retail platform featuring decoupled catalog indexing, atomic shopping cart transactions, and dynamic payment gateway integration. Designed with clean RESTful APIs and optimized SQL schema relations.",
    image: "/projects/irmall.png"
  },
  {
    id: "tasty-day",
    number: "07 // FOOD-TECH PLATFORM • 2023",
    name: "Tasty Day",
    role: "Frontend Developer",
    timeframe: "2023",
    stack: ["HTML", "CSS", "JavaScript", "jQuery"],
    description: "Consumer diet food ordering and recipe platform. Engineered interactive nutritional calculators, responsive recipe galleries, and order dispatch pipelines with zero runtime dependencies.",
    image: "/projects/tastyday.png"
  },
  {
    id: "stereum-labs",
    number: "08 // AI NODE OBSERVABILITY • 2024-2025",
    name: "Stereum Labs",
    role: "Full-Stack Engineer · RockLogic GmbH",
    timeframe: "2024 — 2025",
    stack: ["Next.js", "NestJS", "TypeScript", "RabbitMQ", "BullMQ", "PostgreSQL", "TypeORM"],
    description: "AI-powered telemetry and node observability suite. Ingests distributed node logs through asynchronous message queues to detect synchronization bottlenecks and alert infrastructure operators before validator slashes occur.",
    image: "/projects/stereum-labs.png",
    liveUrl: "https://stereumlabs.com"
  },
  {
    id: "cvmaker",
    number: "09 // RESUME & ATS PLATFORM • 2025-2026",
    name: "CVMaker",
    role: "Full-Stack & Applied AI Engineer",
    timeframe: "2025 — 2026",
    stack: ["Next.js", "NestJS", "TypeScript", "OpenRouter API", "Groq API"],
    description: "Intelligent career documentation platform with ATS parsing and resume structuring. Utilizes high-speed inference via Groq and OpenRouter to generate formatted executive summaries, tailored CVs, and deterministic PDF artifacts.",
    image: "/projects/cover-1.png",
    liveUrl: "https://cover-letter.work"
  },
  {
    id: "aspira",
    number: "10 // INDUSTRIAL ACCOUNTING • PRIOR",
    name: "Aspira",
    role: "Software Developer (.NET)",
    timeframe: "Prior Years",
    stack: ["MVVM", "C#", "WPF", ".NET Framework", "NHibernate", "LINQ"],
    description: "Industrial accounting desktop system supporting double-entry bookkeeping, multi-currency ledgers, and comprehensive auditing. Engineered complex transactional queries using NHibernate, LINQ, and SQL Server stored procedures.",
    image: "/projects/aspira-persian.png"
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

  const handleLike = async (projectName: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (hasLikedMap[projectName]) return;

    setLikesMap(prev => ({
      ...prev,
      [projectName]: (prev[projectName] || 0) + 1
    }));
    setHasLikedMap(prev => ({
      ...prev,
      [projectName]: true
    }));

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
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-[#232730]">
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
          <div className="text-xs font-mono text-[#768e9d]">
            <span className="text-[#f3f4f6] font-semibold">{currentIndex + 1}</span> of {CASE_STUDIES.length}
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center gap-1 sm:gap-1.5 flex-wrap max-w-[160px] sm:max-w-none">
            {CASE_STUDIES.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentIndex(i)}
                className={`h-1.5 rounded-none transition-all cursor-pointer ${
                  currentIndex === i ? "w-5 bg-[#d99b53]" : "w-1.5 bg-white/20 hover:bg-white/40"
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
              className="w-9 h-9 rounded-none bg-[#16191f] hover:bg-[#232730] border border-[#232730] flex items-center justify-center text-[#f3f4f6] hover:text-[#fcb96e] transition-colors cursor-pointer active:scale-95"
              aria-label="Previous Case Study (ArrowLeft)"
              title="Previous Case Study (ArrowLeft)"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="w-9 h-9 rounded-none bg-[#16191f] hover:bg-[#232730] border border-[#232730] flex items-center justify-center text-[#f3f4f6] hover:text-[#fcb96e] transition-colors cursor-pointer active:scale-95"
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
          className="rounded-none border border-[#232730] bg-[#111317] overflow-hidden shadow-2xl touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left Column: Case Study Intelligence & Overview */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                {/* Dossier Top Identifier */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-[#232730] text-xs font-mono">
                  <span className="text-[#fcb96e] font-medium tracking-wider">
                    {currentStudy.number}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="text-[#768e9d]">{currentStudy.timeframe}</span>
                    <button
                      type="button"
                      onClick={(e) => handleLike(currentStudy.name, e)}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-none text-xs font-mono transition-all cursor-pointer ${
                        hasLikedMap[currentStudy.name]
                          ? "bg-rose-500/15 border border-rose-500/30 text-rose-400"
                          : "bg-[#16191f] border border-[#232730] text-[#9ca3af] hover:text-white"
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
                      className="px-2.5 py-1 rounded-none text-[11px] font-mono bg-[#16191f] border border-[#232730] text-[#d1d5db]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Row (Legacy metrics removed per TASK-406) */}
              <div className="pt-6 border-t border-[#232730] flex flex-wrap items-center justify-between gap-4">
                <a
                  href="#contact"
                  onClick={(e) => handleDeepDive(currentStudy.name, e)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-none bg-[#d99b53] hover:bg-[#fcb96e] text-[#111317] font-semibold text-xs transition-all shadow-md shadow-[#d99b53]/20 active:scale-95 cursor-pointer"
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

            {/* Right Column: Visual Preview / Case Study Asset (Uncropped Preserved Framing) */}
            <div className="lg:col-span-5 relative bg-[#08090b] border-t lg:border-t-0 lg:border-l border-[#232730] min-h-[340px] sm:min-h-[420px] lg:min-h-[500px] flex items-center justify-center p-4 sm:p-6 lg:p-8">
              <div className="relative w-full h-full min-h-[280px] sm:min-h-[360px] lg:min-h-[440px] rounded-none overflow-hidden border border-[#232730] bg-[#0c0e12] flex items-center justify-center group shadow-xl">
                <Image
                  src={currentStudy.image}
                  alt={currentStudy.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-contain p-2 sm:p-3 transition-transform duration-500 group-hover:scale-[1.01]"
                  priority
                />

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="px-2 py-0.5 rounded-none text-[10px] font-mono bg-black/85 text-[#9ca3af] border border-[#232730] backdrop-blur-sm">
                    Production Architecture
                  </span>
                  <span className="px-2 py-0.5 rounded-none text-[10px] font-mono bg-[#d99b53]/20 text-[#fcb96e] border border-[#d99b53]/40 backdrop-blur-sm">
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
