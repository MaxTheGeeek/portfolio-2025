"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { 
  Briefcase, 
  GraduationCap, 
  MapPin, 
  Calendar, 
  Award, 
  CheckCircle2, 
  Heart,
  Sparkles,
  Compass
} from "lucide-react";

interface TimelineItem {
  period: string;
  role: string;
  company: string;
  location: string;
  isCurrent?: boolean;
  description: string;
  highlights: string[];
}

const TIMELINE: TimelineItem[] = [
  {
    period: "2026 — Present",
    role: "Full-Stack Engineer | Applied AI Engineer",
    company: "Independent Practice",
    location: "Vienna, Austria",
    isCurrent: true,
    description: "Designing and shipping custom enterprise AI systems: low-latency voice assistants, grounded customer service chatbots with AST schema verification, and private Model Context Protocol (MCP) integrations for organizations.",
    highlights: [
      "Custom Model Context Protocol (MCP) server development and AST schema guardrails",
      "Full-duplex conversational voice intelligence pipelines (<400ms end-to-end latency)",
      "High-concurrency full-stack architectures on Next.js, TypeScript, and .NET Core"
    ]
  },
  {
    period: "2024 — 2026",
    role: "Full-Stack & Telemetry Systems Engineer",
    company: "RockLogic GmbH",
    location: "Vienna, Austria",
    description: "Spearheaded core engineering and telemetry infrastructure across Stereum (50,000+ active Ethereum node setups globally) and rocklogic.at. Developed zero-downtime client switching algorithms, dynamic resource throttling, and automated Grafana API telemetry pipelines.",
    highlights: [
      "Engineered decoupled message bus architectures with RabbitMQ and background workers",
      "Automated multi-node cluster monitoring dashboards with sub-100ms TTFB edge caching",
      "Stabilized high-load client applications across desktop and Linux server environments"
    ]
  },
  {
    period: "Prior Years",
    role: "Desktop Systems & Financial Tooling Developer",
    company: "Enterprise Financial Systems",
    location: "Vienna, Austria",
    description: "Architected mission-critical desktop portfolio valuation suites and financial instruments. Solved rendering bottlenecks on massive data streams by implementing WPF UI virtualization and zero-allocation memory algorithms.",
    highlights: [
      "Engineered VirtualizingStackPanel algorithms rendering 50,000+ rows at 60 FPS",
      "Reduced portfolio calculation latency from 850ms to sub-120ms with Span<T> and thread pooling",
      "Integrated secure accounting compliance modules and Crystal Reports generation"
    ]
  }
];

const ACCREDITATIONS = [
  {
    category: "Academic Degree",
    title: "B.Sc. in Accounting & Financial Analysis",
    institution: "University Education",
    date: "Graduated",
    desc: "Rigorous analytical training in algorithmic reconciliation, quantitative auditing, balance sheet architectures, and institutional governance."
  },
  {
    category: "Engineering Diploma",
    title: "Software Engineering Diploma",
    institution: "WIFI Wien · Vienna",
    date: "2020",
    desc: "Accredited software engineering curriculum focusing on object-oriented programming, C#/.NET architecture, concurrent systems, and relational database design."
  },
  {
    category: "Engineering Diploma",
    title: "Web & Desktop Applications Diploma (OOP, PHP, Laravel)",
    institution: "WIFI Wien · Vienna",
    date: "2021",
    desc: "Advanced software engineering program covering object-oriented architecture, backend web and desktop systems, PHP, Laravel, and API engineering."
  },
  {
    category: "Cloud Accreditations",
    title: "Microsoft Certified: Azure Developer & Fundamentals",
    institution: "Microsoft (AZ-204 & AZ-900)",
    date: "Certified",
    desc: "Demonstrated expertise in enterprise cloud deployment, managed container orchestration, identity governance, and secure distributed infrastructure."
  },
  {
    category: "Master's Program",
    title: "Student at FH Burgenland - Master of Artificial Intelligence in AI Business Solutions",
    institution: "FH Burgenland · Austria",
    date: "Active",
    desc: "Advanced graduate engineering studies focused on applied AI architectures, enterprise LLM reasoning pipelines, autonomous agent systems, and AI business solutions."
  }
];

export function Trajectory() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="scene py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative" id="trajectory">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-[0.06em] text-[#d99b53] mb-3">
          Career Journey
        </span>
        <h2 className="font-serif text-2xl sm:text-[32px] sm:leading-[40px] font-normal text-[#f3f4f6] tracking-tight mb-4">
          Trajectory & <span className="italic text-[#fcb96e]">Foundation</span>
        </h2>
        <p className="text-base sm:text-lg text-[#9ca3af] leading-relaxed">
          Over eight years building scalable desktop software, distributed node infrastructure, and applied AI systems in Vienna.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start mb-16">
        {/* Left Column: Chronological Trajectory Timeline (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          <h3 className="text-xs font-mono uppercase tracking-wider text-[#fcb96e] mb-4 flex items-center gap-2">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Systems Engineering Track Record</span>
          </h3>

          <div className="space-y-6">
            {TIMELINE.map((item, idx) => (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`rounded-2xl border p-6 sm:p-7 relative transition-all duration-200 ${
                  item.isCurrent
                    ? "bg-[#16191f] border-[#d99b53]/40 shadow-xl"
                    : "bg-[#111317] border-white/10 shadow-lg hover:border-white/20"
                }`}
              >
                {/* Header Row */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-[#d99b53] font-semibold">
                      {item.period}
                    </span>
                    {item.isCurrent && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Active Focus
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-mono text-[#6b7280] flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#d99b53]" />
                    <span>{item.location}</span>
                  </span>
                </div>

                {/* Role & Company */}
                <h4 className="text-lg font-semibold text-[#f3f4f6] tracking-tight mb-1">
                  {item.role}
                </h4>
                <div className="text-xs font-mono text-[#9ca3af] mb-3">
                  {item.company}
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#9ca3af] leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Highlights List */}
                <ul className="space-y-1.5 pt-3 border-t border-white/5">
                  {item.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="text-xs text-[#d1d5db] flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#d99b53] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Academic & Accreditations (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          <h3 className="text-xs font-mono uppercase tracking-wider text-[#fcb96e] mb-4 flex items-center gap-2">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic & Technical Credentials</span>
          </h3>

          <div className="rounded-2xl border border-white/10 bg-[#111317] p-6 sm:p-7 shadow-xl space-y-6">
            {ACCREDITATIONS.map((acc, i) => (
              <div 
                key={i} 
                className={`pb-5 ${i !== ACCREDITATIONS.length - 1 ? "border-b border-white/10" : ""}`}
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-[11px] font-mono text-[#d99b53] uppercase tracking-wider">
                    {acc.category}
                  </span>
                  <span className="text-[10px] font-mono text-[#6b7280]">
                    {acc.date}
                  </span>
                </div>
                <h5 className="text-sm font-semibold text-[#f3f4f6] mb-1">
                  {acc.title}
                </h5>
                <div className="text-xs font-mono text-[#9ca3af] mb-2">
                  {acc.institution}
                </div>
                <p className="text-xs text-[#9ca3af] leading-relaxed">
                  {acc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marsi Studio Spotlight Feature */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl border border-white/10 bg-[#111317] overflow-hidden shadow-2xl"
        id="marsi"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          {/* Authentic Marsi Photograph */}
          <div className="lg:col-span-5 relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-full min-h-[300px] w-full bg-[#0c0e12] overflow-hidden group">
            <Image
              src="/marsi-grass.jpg"
              alt="Marsi in Vienna park"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111317] via-transparent to-transparent opacity-60 lg:hidden" />
            <div className="absolute top-3 left-3">
              <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-[#0c0e12]/80 border border-white/15 text-[#fcb96e] backdrop-blur-md">
                Vienna Studio Life
              </span>
            </div>
          </div>

          {/* Marsi Narrative & Attributions */}
          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono bg-[#d99b53]/15 border border-[#d99b53]/30 text-[#fcb96e]">
                  <Heart className="w-3.5 h-3.5 text-[#d99b53] fill-[#d99b53]" />
                  <span>Chief Morale Officer · Marsi</span>
                </span>
                <span className="text-xs font-mono text-[#6b7280]">Vienna, Austria</span>
              </div>

              <h4 className="font-serif text-2xl sm:text-3xl text-[#f3f4f6] font-normal tracking-tight mb-4">
                &ldquo;Playing with him makes me fresh...&rdquo;
              </h4>

              <p className="text-xs sm:text-sm text-[#9ca3af] leading-relaxed mb-4">
                Faithful companion and zero-tolerance watchdog for unhandled exceptions. Beyond the command line and architectural blueprints, Marsi ensures all systems in the Vienna studio maintain steady equilibrium, accompanied by mandatory afternoon walks across the city&apos;s parks.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#6b7280]">
              <span>Role: Active On-Site Studio Companion</span>
              <span className="text-[#fcb96e]">Status: Well-exercised & Calm</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
