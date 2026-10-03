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
        {/* Pillar 01: Spec-Driven Agentic Engineering */}
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
                [ SPEC-DRIVEN ]
              </span>
              <span className="text-[11px] font-mono text-[#768e9d] uppercase tracking-wider">
                AST &amp; MCP Architecture
              </span>
            </div>

            <h3 className="font-serif text-2xl font-normal text-[#f3f4f6] mb-3">
              Spec-Driven Agentic Engineering
            </h3>
            <p className="text-xs text-[#d99b53] font-mono uppercase tracking-wider mb-4">
              Model Context Protocol · Schema AST Filters · Deterministic Verification
            </p>
            <p className="text-sm text-[#9ca3af] leading-relaxed mb-6">
              Modern AI agents are only as reliable as the deterministic contracts enclosing them. I engineer custom Model Context Protocol (MCP) servers, sandboxed execution boundaries, and schema AST filters that force language models into verified execution paths, completely eliminating hallucinations and silent execution drifts.
            </p>

            <ul className="space-y-3 pt-5 border-t border-[#232730] text-xs text-[#9ca3af]">
              <li className="flex items-start gap-3">
                <span className="text-[#fcb96e] font-mono font-bold mt-0.5">01</span>
                <span><strong className="text-[#f3f4f6]">Context Hygiene:</strong> Real-time token pruning and semantic graph anchoring prevents state corruption in multi-turn executions.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#fcb96e] font-mono font-bold mt-0.5">02</span>
                <span><strong className="text-[#f3f4f6]">AST Verification:</strong> Responses validated against strict JSON and TypeScript abstract syntax trees before entering downstream systems.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#fcb96e] font-mono font-bold mt-0.5">03</span>
                <span><strong className="text-[#f3f4f6]">Human-in-the-Loop Gateways:</strong> Critical state modifications require cryptographic approval checkpoints and immutable audit logs.</span>
              </li>
            </ul>
          </div>

          <div className="pt-6 mt-6 border-t border-[#232730] flex flex-wrap gap-2 text-[10px] font-mono text-[#768e9d]">
            <span>[ MCP PROTOCOL ]</span>
            <span>·</span>
            <span>[ CONTEXT HYGIENE ]</span>
            <span>·</span>
            <span>[ ZERO HALLUCINATION ]</span>
          </div>
        </motion.div>

        {/* Pillar 02: High Concurrency & Memory Discipline */}
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
                [ CONCURRENCY ]
              </span>
              <span className="text-[11px] font-mono text-[#768e9d] uppercase tracking-wider">
                Memory Discipline
              </span>
            </div>

            <h3 className="font-serif text-2xl font-normal text-[#f3f4f6] mb-3">
              High Concurrency &amp; Memory Discipline
            </h3>
            <p className="text-xs text-[#d99b53] font-mono uppercase tracking-wider mb-4">
              .NET Span&lt;T&gt; · Memory Pooling · Asynchronous Message Queues
            </p>
            <p className="text-sm text-[#9ca3af] leading-relaxed mb-6">
              Years of building native desktop platforms, distributed Ethereum node orchestration tools, and private banking valuation instruments taught me that speed is a consequence of discipline. I write zero-allocation loops using Span&lt;T&gt;, implement asynchronous message brokers with RabbitMQ, and virtualize rendering pipelines to keep user interfaces fluid at 60 FPS.
            </p>

            <ul className="space-y-3 pt-5 border-t border-[#232730] text-xs text-[#9ca3af]">
              <li className="flex items-start gap-3">
                <span className="text-[#fcb96e] font-mono font-bold mt-0.5">01</span>
                <span><strong className="text-[#f3f4f6]">Zero-Allocation Slices:</strong> Leveraging .NET Span&lt;T&gt; and MemoryPool to eliminate garbage collector pauses during high-frequency data streams.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#fcb96e] font-mono font-bold mt-0.5">02</span>
                <span><strong className="text-[#f3f4f6]">Decoupled Worker Threads:</strong> Heavy cryptographic and mathematical calculations isolated from UI threads via worker channels.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#fcb96e] font-mono font-bold mt-0.5">03</span>
                <span><strong className="text-[#f3f4f6]">UI Virtualization:</strong> Custom VirtualizingStackPanel rendering 50,000+ rows seamlessly with zero memory bloat.</span>
              </li>
            </ul>
          </div>

          <div className="pt-6 mt-6 border-t border-[#232730] flex flex-wrap gap-2 text-[10px] font-mono text-[#768e9d]">
            <span>[ ZERO ALLOCATION ]</span>
            <span>·</span>
            <span>[ RABBITMQ QUEUES ]</span>
            <span>·</span>
            <span>[ 60 FPS VIRTUALIZATION ]</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
