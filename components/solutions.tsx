"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { 
  Bot, 
  Mic, 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  ShieldCheck, 
  Activity,
  Layers,
  Sparkles,
  ExternalLink,
  MessageSquare,
  Terminal,
  Server
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
        <span className="text-xs font-mono uppercase tracking-[0.06em] text-[#d99b53] mb-3">
          Enterprise AI Capabilities
        </span>
        <h2 className="font-serif text-2xl sm:text-[32px] sm:leading-[40px] font-normal text-[#f3f4f6] tracking-tight mb-4 lg:whitespace-nowrap">
          What I build for <span className="italic text-[#fcb96e]">organizations & clients</span>
        </h2>
        <p className="text-base sm:text-lg text-[#9ca3af] leading-relaxed">
          Eliminating toy demonstrations in favor of verifiable, low-latency AI pipelines and production enterprise software designed for continuous operations.
        </p>
      </div>

      {/* Featured Client Deliverables: Both Chatbot Images Prominently Displayed */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        {/* Deliverable 1: FindDev Chatbot */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-white/10 bg-[#111317] overflow-hidden shadow-2xl flex flex-col hover:border-[#d99b53]/40 transition-all duration-300 group"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-5 py-3.5 bg-[#16191f] border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#d99b53]" />
              <span className="text-xs font-mono font-medium text-[#f3f4f6]">FindDev · Production Delivery</span>
            </div>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live Deployment
            </span>
          </div>

          {/* Screenshot Display */}
          <div className="relative aspect-[16/10] w-full bg-[#0c0e12] overflow-hidden">
            <Image
              src="/client-projects/chatbot.jpeg"
              alt="FindDev Intelligent Customer Service Chatbot"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111317] via-transparent to-transparent opacity-50" />
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#0c0e12]/90 border border-white/15 text-[#f3f4f6] backdrop-blur-md">
                Grounded RAG & Support Engine
              </span>
              <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#0c0e12]/90 border border-white/15 text-[#fcb96e] backdrop-blur-md">
                FindDev Platform
              </span>
            </div>
          </div>

          {/* Details & Telemetry */}
          <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Bot className="w-4 h-4 text-[#d99b53]" />
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#d99b53]">
                  Enterprise Support · Grounded RAG
                </span>
              </div>
              <h3 className="text-xl font-semibold text-[#f3f4f6] tracking-tight mb-2">
                Intelligent Customer Service & Support Chatbot
              </h3>
              <p className="text-xs text-[#9ca3af] leading-relaxed">
                Built an always-on 24/7 grounded RAG knowledge engine. Implemented schema AST verification to eliminate AI hallucinations and ensure flawless triage and escalation to human staff.
              </p>
            </div>

            {/* Telemetry Chips */}
            <div className="grid grid-cols-3 gap-2.5 pt-4 border-t border-white/10">
              <div className="p-2.5 rounded-xl bg-[#16191f] border border-white/5">
                <div className="text-[10px] font-mono text-[#6b7280] uppercase tracking-wider">Accuracy</div>
                <div className="text-xs font-mono font-semibold text-[#fcb96e] mt-0.5">99.8% Grounded</div>
              </div>
              <div className="p-2.5 rounded-xl bg-[#16191f] border border-white/5">
                <div className="text-[10px] font-mono text-[#6b7280] uppercase tracking-wider">Latency</div>
                <div className="text-xs font-mono font-semibold text-[#fcb96e] mt-0.5">&lt; 420ms</div>
              </div>
              <div className="p-2.5 rounded-xl bg-[#16191f] border border-white/5">
                <div className="text-[10px] font-mono text-[#6b7280] uppercase tracking-wider">Guardrails</div>
                <div className="text-xs font-mono font-semibold text-[#fcb96e] mt-0.5">Zero Hallucination</div>
              </div>
            </div>

            {/* Action Button */}
            <button
              type="button"
              onClick={(e) => handleSelectService("AI Customer Support Chatbot (FindDev)", e)}
              className="w-full mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#16191f] hover:bg-[#d99b53] text-[#f3f4f6] hover:text-[#111317] border border-white/10 hover:border-[#d99b53] font-medium text-xs transition-all duration-200 cursor-pointer shadow-sm"
            >
              <span>Discuss Customer Service Chatbot</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>

        {/* Deliverable 2: Reloco GmbH Intake & Dispatch */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-white/10 bg-[#111317] overflow-hidden shadow-2xl flex flex-col hover:border-[#d99b53]/40 transition-all duration-300 group"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-5 py-3.5 bg-[#16191f] border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#d99b53]" />
              <span className="text-xs font-mono font-medium text-[#f3f4f6]">Reloco GmbH · Production Delivery</span>
            </div>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live Deployment
            </span>
          </div>

          {/* Screenshot Display */}
          <div className="relative aspect-[16/10] w-full bg-[#0c0e12] overflow-hidden">
            <Image
              src="/client-projects/chatbot-2.jpeg"
              alt="Reloco GmbH Autonomous Voice Assistant and Client Intake"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111317] via-transparent to-transparent opacity-50" />
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#0c0e12]/90 border border-white/15 text-[#f3f4f6] backdrop-blur-md">
                Full-Duplex Voice & Triage
              </span>
              <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#0c0e12]/90 border border-white/15 text-[#fcb96e] backdrop-blur-md">
                Reloco Ecosystem
              </span>
            </div>
          </div>

          {/* Details & Telemetry */}
          <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Mic className="w-4 h-4 text-[#d99b53]" />
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#d99b53]">
                  Production Delivery · Voice AI & Dispatch
                </span>
              </div>
              <h3 className="text-xl font-semibold text-[#f3f4f6] tracking-tight mb-2">
                Autonomous AI Voice Assistant & Intake Dispatch
              </h3>
              <p className="text-xs text-[#9ca3af] leading-relaxed">
                Engineered a low-latency conversational audio pipeline for automated inbound appointment dispatching, customer intake, and direct CRM synchronization with sub-second response times.
              </p>
            </div>

            {/* Telemetry Chips */}
            <div className="grid grid-cols-3 gap-2.5 pt-4 border-t border-white/10">
              <div className="p-2.5 rounded-xl bg-[#16191f] border border-white/5">
                <div className="text-[10px] font-mono text-[#6b7280] uppercase tracking-wider">Response</div>
                <div className="text-xs font-mono font-semibold text-[#fcb96e] mt-0.5">&lt; 380ms Sub-Sec</div>
              </div>
              <div className="p-2.5 rounded-xl bg-[#16191f] border border-white/5">
                <div className="text-[10px] font-mono text-[#6b7280] uppercase tracking-wider">Uptime</div>
                <div className="text-xs font-mono font-semibold text-[#fcb96e] mt-0.5">99.9% Production</div>
              </div>
              <div className="p-2.5 rounded-xl bg-[#16191f] border border-white/5">
                <div className="text-[10px] font-mono text-[#6b7280] uppercase tracking-wider">Protocol</div>
                <div className="text-xs font-mono font-semibold text-[#fcb96e] mt-0.5">MCP / WebSockets</div>
              </div>
            </div>

            {/* Action Button */}
            <button
              type="button"
              onClick={(e) => handleSelectService("AI Voice Assistant (Reloco GmbH)", e)}
              className="w-full mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#16191f] hover:bg-[#d99b53] text-[#f3f4f6] hover:text-[#111317] border border-white/10 hover:border-[#d99b53] font-medium text-xs transition-all duration-200 cursor-pointer shadow-sm"
            >
              <span>Discuss Voice Assistant & Dispatch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Deliverable 3: Enterprise Full-Stack & Desktop Systems */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl border border-white/10 bg-[#111317] p-7 sm:p-8 shadow-xl mb-12 hover:border-[#d99b53]/40 transition-all duration-300"
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#d99b53]" />
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#d99b53]">
                Architecture & Delivery · .NET & Next.js
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-[#f3f4f6] tracking-tight">
              High-Concurrency Full-Stack, Web & Native Desktop Systems
            </h3>
            <p className="text-xs sm:text-sm text-[#9ca3af] leading-relaxed">
              From sub-120ms desktop WPF valuation engines to distributed Next.js, Node.js and NestJS cloud architectures. Clean software that stays fast, deterministic, and stable under intense enterprise workloads.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#9ca3af]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#d99b53]" />
                50k+ Rows Virtualized
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#9ca3af]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#d99b53]" />
                Sub-120ms Calculation
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#9ca3af]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#d99b53]" />
                RabbitMQ & Decoupled Workers
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#9ca3af]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#d99b53]" />
                Zero Memory Leaks
              </span>
            </div>
          </div>

          <div className="shrink-0 flex flex-col gap-3">
            <button
              type="button"
              onClick={(e) => handleSelectService("Enterprise Full-Stack / Desktop Architecture", e)}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#16191f] hover:bg-[#d99b53] text-[#f3f4f6] hover:text-[#111317] border border-white/10 hover:border-[#d99b53] font-medium text-xs transition-all duration-200 cursor-pointer shadow-sm"
            >
              <span>Discuss Enterprise Architecture</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Direct Architectural Transition Banner */}
      <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-[#111317] via-[#16191f] to-[#111317] p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-mono text-[#fcb96e]">
            <ShieldCheck className="w-4 h-4 text-[#d99b53]" />
            <span>Verifiable Architecture · Deterministic Testing · Direct Engineering</span>
          </div>
          <h3 className="font-serif text-xl sm:text-2xl text-[#f3f4f6] font-normal">
            Ready to deploy enterprise AI or modern software in your organization?
          </h3>
          <p className="text-xs text-[#9ca3af] leading-relaxed">
            Direct collaboration with Max from discovery and architectural specification through production deployment and staff handover.
          </p>
        </div>

        <a
          href="#contact"
          onClick={(e) => handleSelectService("Enterprise Architectural Consultation", e)}
          className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#d99b53] hover:bg-[#fcb96e] text-[#111317] font-semibold text-sm transition-all duration-200 shadow-md shadow-[#d99b53]/20 active:scale-[0.98] cursor-pointer"
        >
          <span>Initiate an architectural discussion</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
