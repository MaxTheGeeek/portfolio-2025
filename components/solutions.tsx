"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { 
  Bot, 
  ArrowRight, 
  ShieldCheck 
} from "lucide-react";
import { scrollToSection } from "@/lib/scroll";

export function Solutions() {
  const shouldReduceMotion = useReducedMotion();

  const handleSelectService = (serviceTitle: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();

    // Notify contact form to pre-select category
    const event = new CustomEvent("prefill-contact-service", {
      detail: { service: serviceTitle }
    });
    window.dispatchEvent(event);

    scrollToSection("contact", 80);
  };

  return (
    <section className="scene py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative" id="solutions">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-widest text-[#d99b53] mb-3">
          Enterprise AI Capabilities
        </span>
        <h2 className="font-serif text-2xl sm:text-[32px] sm:leading-[40px] font-normal text-[#f3f4f6] tracking-tight mb-4 lg:whitespace-nowrap">
          What I build for <span className="italic text-[#fcb96e]">organizations &amp; clients</span>
        </h2>
        <p className="text-base sm:text-lg text-[#9ca3af] leading-relaxed">
          Direct engineering collaboration from architectural design and local model integration through to production deployment and operational handover.
        </p>
      </div>

      {/* Featured Client Deliverables: Both Chatbot Images Prominently Displayed */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Deliverable 1: Reloco Chatbot (Strictly without GmbH) */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="rounded-lg border border-[#232730] bg-[#111317] overflow-hidden shadow-2xl flex flex-col hover:border-[#d99b53]/40 transition-all duration-300 group"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-5 py-3.5 bg-[#16191f] border-b border-[#232730]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#d99b53]" />
              <span className="text-xs font-mono font-medium text-[#f3f4f6]">Reloco · Client Project</span>
            </div>
            <span className="px-2.5 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[11px] font-mono flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              In Progress
            </span>
          </div>

          {/* Screenshot Display */}
          <div className="p-4 sm:p-5 pb-0">
            <div className="relative aspect-[16/10] w-full bg-[#0c0e12] overflow-hidden rounded-md border border-[#232730]">
              <Image
                src="/client-projects/chatbot.jpeg"
                alt="Reloco Intelligent Relocation Support & Inquiry Bot"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111317] via-transparent to-transparent opacity-50" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#0c0e12]/90 border border-white/15 text-[#f3f4f6] backdrop-blur-md">
                  Self-Hosted Local LLM
                </span>
                <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#0c0e12]/90 border border-white/15 text-[#fcb96e] backdrop-blur-md">
                  Reloco Platform
                </span>
              </div>
            </div>
          </div>

          {/* Details & Telemetry */}
          <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Bot className="w-4 h-4 text-[#d99b53]" />
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#d99b53]">
                  ENTERPRISE SUPPORT • LOCAL RAG
                </span>
              </div>
              <h3 className="text-xl font-semibold text-[#f3f4f6] tracking-tight mb-2">
                Intelligent Relocation Support &amp; Inquiry Bot
              </h3>
              <p className="text-xs text-[#9ca3af] leading-relaxed">
                Built an automated 24/7 customer support chatbot for relocation workflows. Powered by a self-hosted local LLM and semantic search via PostgreSQL (pgvector), the system retrieves grounded policy and procedural data to resolve inquiries instantly and escalate edge cases seamlessly to human agents.
              </p>
            </div>

            {/* 3 Structured Stats (TASK-405) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-4 border-t border-[#232730]">
              <div className="p-3 rounded-md bg-[#16191f] border border-[#232730]">
                <div className="text-[10px] font-mono text-[#768e9d] uppercase tracking-wider">Architecture</div>
                <div className="text-xs font-mono font-semibold text-[#fcb96e] mt-1">On-Prem / Local</div>
              </div>
              <div className="p-3 rounded-md bg-[#16191f] border border-[#232730]">
                <div className="text-[10px] font-mono text-[#768e9d] uppercase tracking-wider">Retrieval Engine</div>
                <div className="text-xs font-mono font-semibold text-[#fcb96e] mt-1">PostgreSQL + pgvector</div>
              </div>
              <div className="p-3 rounded-md bg-[#16191f] border border-[#232730]">
                <div className="text-[10px] font-mono text-[#768e9d] uppercase tracking-wider">Factual Accuracy</div>
                <div className="text-xs font-mono font-semibold text-[#fcb96e] mt-1">Context-Grounded</div>
              </div>
            </div>

            {/* Action Button */}
            <button
              type="button"
              onClick={(e) => handleSelectService("Intelligent Relocation Support Bot (Reloco)", e)}
              className="w-full mt-2 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-transparent hover:border-[#D99B53] hover:text-[#D99B53] border border-[#232730] text-[#ECEFF4] font-mono text-xs uppercase tracking-wider font-medium transition-colors duration-150 cursor-pointer shadow-sm"
            >
              <span>Discuss Relocation Support Bot</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>

        {/* Deliverable 2: Real Estate Assistant (FindDev) */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-lg border border-[#232730] bg-[#111317] overflow-hidden shadow-2xl flex flex-col hover:border-[#d99b53]/40 transition-all duration-300 group"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-5 py-3.5 bg-[#16191f] border-b border-[#232730]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#d99b53]" />
              <span className="text-xs font-mono font-medium text-[#f3f4f6]">Real Estate Assistant · Client Project</span>
            </div>
            <span className="px-2.5 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[11px] font-mono flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              In Progress
            </span>
          </div>

          {/* Screenshot Display */}
          <div className="p-4 sm:p-5 pb-0">
            <div className="relative aspect-[16/10] w-full bg-[#0c0e12] overflow-hidden rounded-md border border-[#232730]">
              <Image
                src="/client-projects/chatbot-2.jpeg"
                alt="Automated Real Estate Support & Client Intake Assistant"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111317] via-transparent to-transparent opacity-50" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#0c0e12]/90 border border-white/15 text-[#f3f4f6] backdrop-blur-md">
                  Private Inference &amp; Intake
                </span>
                <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#0c0e12]/90 border border-white/15 text-[#fcb96e] backdrop-blur-md">
                  Real Estate CRM
                </span>
              </div>
            </div>
          </div>

          {/* Details & Telemetry */}
          <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Bot className="w-4 h-4 text-[#d99b53]" />
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#d99b53]">
                  REAL ESTATE CRM • SEMANTIC INTAKE
                </span>
              </div>
              <h3 className="text-xl font-semibold text-[#f3f4f6] tracking-tight mb-2">
                Automated Real Estate Support &amp; Client Intake Assistant
              </h3>
              <p className="text-xs text-[#9ca3af] leading-relaxed">
                Engineered an on-site customer service assistant to qualify leads and answer client queries around listings and real estate services. Leveraged a high-efficiency local inference model with embedded vector search in PostgreSQL, ensuring private data handling, fast response times, and structured client inquiry handoff.
              </p>
            </div>

            {/* 3 Structured Stats (TASK-405) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-4 border-t border-[#232730]">
              <div className="p-3 rounded-md bg-[#16191f] border border-[#232730]">
                <div className="text-[10px] font-mono text-[#768e9d] uppercase tracking-wider">Local LLM</div>
                <div className="text-xs font-mono font-semibold text-[#fcb96e] mt-1">Private Inference</div>
              </div>
              <div className="p-3 rounded-md bg-[#16191f] border border-[#232730]">
                <div className="text-[10px] font-mono text-[#768e9d] uppercase tracking-wider">Fast Retrieval</div>
                <div className="text-xs font-mono font-semibold text-[#fcb96e] mt-1">Vector Search</div>
              </div>
              <div className="p-3 rounded-md bg-[#16191f] border border-[#232730]">
                <div className="text-[10px] font-mono text-[#768e9d] uppercase tracking-wider">Lead Intake</div>
                <div className="text-xs font-mono font-semibold text-[#fcb96e] mt-1">Automated Triage</div>
              </div>
            </div>

            {/* Action Button */}
            <button
              type="button"
              onClick={(e) => handleSelectService("Automated Real Estate Support & Intake Assistant", e)}
              className="w-full mt-2 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-transparent hover:border-[#D99B53] hover:text-[#D99B53] border border-[#232730] text-[#ECEFF4] font-mono text-xs uppercase tracking-wider font-medium transition-colors duration-150 cursor-pointer shadow-sm"
            >
              <span>Discuss Real Estate Assistant</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Architecture & Systems Cards (Row of 3 Cards Below Chatbots) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {/* Card 1: .NET & Modern Web */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="rounded-lg border border-[#232730] bg-[#16191f] p-6 sm:p-8 flex flex-col justify-between hover:border-[#d99b53]/40 transition-all duration-300 shadow-xl group"
        >
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#d99b53] mb-2.5 block">
              ARCHITECTURE &amp; SYSTEMS · .NET &amp; MODERN WEB
            </span>
            <h3 className="text-lg font-serif font-normal text-[#f3f4f6] tracking-tight mb-3 group-hover:text-[#fcb96e] transition-colors">
              Robust Full-Stack Web &amp; Distributed Backend Architecture
            </h3>
            <p className="text-xs text-[#9ca3af] leading-relaxed mb-6">
              Designing resilient backend services and responsive frontends using .NET Core, Next.js, and message queues. Focused on clean boundaries, deterministic data flow, and maintainable software built for real production workloads.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#232730] mb-6">
              {["Clean Architecture & DDD", "PostgreSQL & Data Integrity", "RabbitMQ Async Queues", "Tested & Production-Ready"].map(tag => (
                <span key={tag} className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-[#111317] border border-[#232730] text-[#9ca3af]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <button
            type="button"
            onClick={(e) => handleSelectService("Robust Full-Stack Web & Distributed Backend Architecture", e)}
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#d99b53] hover:text-[#fcb96e] transition-colors cursor-pointer group-hover:translate-x-0.5 duration-200"
          >
            <span>Discuss Architecture &amp; Systems</span>
            <span>→</span>
          </button>
        </motion.div>

        {/* Card 2: .NET, TypeScript & Desktop */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="rounded-lg border border-[#232730] bg-[#16191f] p-6 sm:p-8 flex flex-col justify-between hover:border-[#d99b53]/40 transition-all duration-300 shadow-xl group"
        >
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#d99b53] mb-2.5 block">
              ENGINEERING &amp; PERFORMANCE · .NET, TYPESCRIPT &amp; DESKTOP
            </span>
            <h3 className="text-lg font-serif font-normal text-[#f3f4f6] tracking-tight mb-3 group-hover:text-[#fcb96e] transition-colors">
              Performant Cross-Platform &amp; Event-Driven Applications
            </h3>
            <p className="text-xs text-[#9ca3af] leading-relaxed mb-6">
              Engineering low-latency desktop platforms and distributed cloud APIs across .NET and TypeScript. Built with decoupled worker pipelines, optimized memory profiles, and comprehensive integration testing.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#232730] mb-6">
              {["Cross-Platform Delivery", "Event-Driven Messaging", "Optimized Resource Usage", "Deterministic Testing"].map(tag => (
                <span key={tag} className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-[#111317] border border-[#232730] text-[#9ca3af]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <button
            type="button"
            onClick={(e) => handleSelectService("Performant Cross-Platform & Event-Driven Applications", e)}
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#d99b53] hover:text-[#fcb96e] transition-colors cursor-pointer group-hover:translate-x-0.5 duration-200"
          >
            <span>Explore Technical Work</span>
            <span>→</span>
          </button>
        </motion.div>

        {/* Card 3: .NET, Postgres & Node */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="rounded-lg border border-[#232730] bg-[#16191f] p-6 sm:p-8 flex flex-col justify-between hover:border-[#d99b53]/40 transition-all duration-300 shadow-xl group"
        >
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#d99b53] mb-2.5 block">
              FULL-STACK DELIVERY · .NET, POSTGRES &amp; NODE
            </span>
            <h3 className="text-lg font-serif font-normal text-[#f3f4f6] tracking-tight mb-3 group-hover:text-[#fcb96e] transition-colors">
              Scalable Web Platforms &amp; Intelligent Service Integration
            </h3>
            <p className="text-xs text-[#9ca3af] leading-relaxed mb-6">
              Bridging modern Next.js frontends with high-throughput .NET and Node.js backend services. Architected with vector search backends, robust API gateways, and asynchronous background worker queues.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#232730] mb-6">
              {["Vector & Relational DBs", "Decoupled Async Workers", "Strict Type Safety", "End-to-End Traceability"].map(tag => (
                <span key={tag} className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-[#111317] border border-[#232730] text-[#9ca3af]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <button
            type="button"
            onClick={(e) => handleSelectService("Scalable Web Platforms & Intelligent Service Integration", e)}
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#d99b53] hover:text-[#fcb96e] transition-colors cursor-pointer group-hover:translate-x-0.5 duration-200"
          >
            <span>Discuss Technical Architecture</span>
            <span>→</span>
          </button>
        </motion.div>
      </div>

      {/* Direct Architectural Transition Banner */}
      <div className="rounded-lg border border-[#232730] bg-[#16191f] p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-mono text-[#fcb96e]">
            <ShieldCheck className="w-4 h-4 text-[#d99b53]" />
            <span>Verifiable Architecture · Deterministic Testing · Direct Engineering</span>
          </div>
          <h3 className="font-serif text-xl sm:text-2xl text-[#f3f4f6] font-normal">
            Ready to deploy enterprise AI or modern software in your organization?
          </h3>
          <p className="text-xs sm:text-sm text-[#9ca3af] leading-relaxed">
            Direct engineering collaboration from architectural design and local model integration through to production deployment and operational handover.
          </p>
        </div>

        <a
          href="#contact"
          onClick={(e) => handleSelectService("Enterprise Architectural Consultation", e)}
          className="shrink-0 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-[#ECEFF4] hover:bg-[#D99B53] text-[#0F1115] font-mono font-medium text-xs tracking-wider uppercase transition-colors duration-150 cursor-pointer"
        >
          <span>Initiate an architectural discussion</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
