"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export function Principles() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="scene py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative" id="principles">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-[0.06em] text-[#d99b53] mb-3">
          Technical Principles
        </span>
        <h2 className="font-serif text-2xl sm:text-[32px] sm:leading-[40px] font-normal text-[#f3f4f6] tracking-tight mb-5 lg:whitespace-nowrap">
          Engineering over <span className="italic text-[#fcb96e]">stochastic guesswork.</span>
        </h2>
        <blockquote className="border-l-2 border-[#d99b53] pl-4 text-base sm:text-lg text-[#9ca3af] italic max-w-2xl mx-auto text-left sm:text-center leading-relaxed">
          &ldquo;In production, reliability is not an afterthought; it is the fundamental contract between code and user.&rdquo;
        </blockquote>
      </div>

      {/* Two-Column Comparative Architectural Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Pillar 01: Deterministic AI & Context-Grounded Architecture */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="rounded-none border border-[#232730] bg-[#111317] p-8 sm:p-10 flex flex-col justify-between shadow-xl hover:border-[#d99b53]/40 transition-all duration-200"
        >
          <div>
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#232730]">
              <span className="text-xs font-mono uppercase tracking-[0.06em] text-[#d99b53]">
                [ DETERMINISTIC AI ]
              </span>
              <span className="text-[11px] font-mono text-[#768e9d] uppercase tracking-wider">
                STRUCTURED RAG &amp; MCP INTEGRATION
              </span>
            </div>

            <h3 className="font-serif text-2xl font-normal text-[#f3f4f6] mb-3">
              Deterministic AI &amp; Context-Grounded Architecture
            </h3>
            <p className="text-xs text-[#d99b53] font-mono uppercase tracking-wider mb-4">
              MODEL CONTEXT PROTOCOL (MCP) · SCHEMA VALIDATION · SEMANTIC RETRIEVAL
            </p>
            <p className="text-sm text-[#9ca3af] leading-relaxed mb-6">
              AI agents and LLM assistants are only as dependable as the boundary contracts enclosing them. I design resilient workflows using Model Context Protocol (MCP) servers, domain-specific retrieval-augmented generation (RAG), and strict output parsing to keep language models predictable, secure, and grounded in actual business logic.
            </p>

            <ul className="space-y-3.5 pt-5 border-t border-[#232730] text-xs text-[#9ca3af]">
              <li className="flex items-start gap-3">
                <span className="text-[#fcb96e] font-mono font-bold mt-0.5">01</span>
                <span><strong className="text-[#f3f4f6]">Context Engineering:</strong> Precise context pruning and hybrid vector search via PostgreSQL (pgvector) ensure relevant, grounded retrieval without context pollution.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#fcb96e] font-mono font-bold mt-0.5">02</span>
                <span><strong className="text-[#f3f4f6]">Strict Schema Validation:</strong> Model outputs are enforced through validated typed schemas before triggering downstream services or database mutations.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#fcb96e] font-mono font-bold mt-0.5">03</span>
                <span><strong className="text-[#f3f4f6]">Human-in-the-Loop Safeguards:</strong> High-impact business actions and state mutations require explicit verification and structured audit logging.</span>
              </li>
            </ul>
          </div>

          <div className="pt-6 mt-6 border-t border-[#232730] flex flex-wrap gap-2 text-[10px] font-mono text-[#768e9d]">
            <span>[ MCP PROTOCOL ]</span>
            <span>·</span>
            <span>[ EMBEDDING PIPELINES ]</span>
            <span>·</span>
            <span>[ BOUNDED EXECUTION ]</span>
          </div>
        </motion.div>

        {/* Pillar 02: High-Throughput Backends & Event-Driven Systems */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="rounded-none border border-[#232730] bg-[#111317] p-8 sm:p-10 flex flex-col justify-between shadow-xl hover:border-[#d99b53]/40 transition-all duration-200"
        >
          <div>
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#232730]">
              <span className="text-xs font-mono uppercase tracking-[0.06em] text-[#d99b53]">
                [ CONCURRENCY &amp; RELIABILITY ]
              </span>
              <span className="text-[11px] font-mono text-[#768e9d] uppercase tracking-wider">
                BACKEND PERFORMANCE
              </span>
            </div>

            <h3 className="font-serif text-2xl font-normal text-[#f3f4f6] mb-3">
              High-Throughput Backends &amp; Event-Driven Systems
            </h3>
            <p className="text-xs text-[#d99b53] font-mono uppercase tracking-wider mb-4">
              .NET CORE · ASYNCHRONOUS PIPELINES · MESSAGE BROKERS
            </p>
            <p className="text-sm text-[#9ca3af] leading-relaxed mb-6">
              Building distributed systems and data-intensive services requires strict architectural boundaries and predictable resource utilization. I build decoupled, high-performance backends with asynchronous message brokers, efficient memory handling, and clean database query design to ensure systems remain stable under real-world traffic.
            </p>

            <ul className="space-y-3.5 pt-5 border-t border-[#232730] text-xs text-[#9ca3af]">
              <li className="flex items-start gap-3">
                <span className="text-[#fcb96e] font-mono font-bold mt-0.5">01</span>
                <span><strong className="text-[#f3f4f6]">Memory &amp; Resource Discipline:</strong> Leveraging modern .NET idioms (memory pooling, efficient stream processing, and unbuffered I/O) to keep GC pressure and latency minimal.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#fcb96e] font-mono font-bold mt-0.5">02</span>
                <span><strong className="text-[#f3f4f6]">Decoupled Event Pipelines:</strong> Offloading heavy compute and third-party integrations to asynchronous background workers using RabbitMQ.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#fcb96e] font-mono font-bold mt-0.5">03</span>
                <span><strong className="text-[#f3f4f6]">Resilient API Gateways:</strong> Implementing circuit breakers, structured rate limiting, and graceful degradation across web APIs and microservices.</span>
              </li>
            </ul>
          </div>

          <div className="pt-6 mt-6 border-t border-[#232730] flex flex-wrap gap-2 text-[10px] font-mono text-[#768e9d]">
            <span>[ EVENT-DRIVEN ]</span>
            <span>·</span>
            <span>[ RABBITMQ / QUEUES ]</span>
            <span>·</span>
            <span>[ PERFORMANCE DISCIPLINE ]</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
