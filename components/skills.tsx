"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Cpu, Layout, Server, Monitor, Database, Terminal, CheckCircle2 } from "lucide-react";

interface SkillCluster {
  title: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  skills: string[];
}

const SKILL_CLUSTERS: SkillCluster[] = [
  {
    title: "AI & Agentic Engineering",
    category: "AI / LLM",
    icon: Cpu,
    description: "Spec-driven development, custom tool integration, and enterprise LLM orchestration.",
    skills: [
      "Claude Code",
      "Model Context Protocol (MCP)",
      "Context7 Sync",
      "RAG Architecture",
      "Autonomous Agents",
      "OpenRouter",
      "Prompt Optimization",
      "Vector Search"
    ]
  },
  {
    title: "Modern Frontend Engineering",
    category: "Web & Mobile",
    icon: Layout,
    description: "Building responsive, accessible, and high-performance user interfaces.",
    skills: [
      "TypeScript",
      "Next.js",
      "React",
      "Tailwind CSS",
      "Vue.js",
      "Angular",
      "Framer Motion",
      "React Query",
      "WebSockets"
    ]
  },
  {
    title: "Backend & Distributed Systems",
    category: "Architecture",
    icon: Server,
    description: "Scalable microservices, clean API design, and asynchronous message queues.",
    skills: [
      "C# / .NET Core",
      "NestJS",
      "Node.js",
      "ASP.NET Core",
      "RabbitMQ",
      "RESTful APIs",
      "Multi-tenant RBAC",
      "Microservices"
    ]
  },
  {
    title: "Desktop & High-Performance UI",
    category: "Systems",
    icon: Monitor,
    description: "Specialized in native desktop apps and dataset virtualization exceeding 50,000 rows.",
    skills: [
      "WPF (.NET)",
      "MVVM Architecture",
      "UI Virtualization",
      "Electron",
      ".NET MAUI",
      "Background Threads",
      "Crystal Reports"
    ]
  },
  {
    title: "Cloud, Databases & DevOps",
    category: "Infrastructure",
    icon: Database,
    description: "Secure data persistence, containerized environments, and cloud deployment pipelines.",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "SQL Server",
      "Supabase",
      "Docker",
      "Microsoft Azure (AZ-900)",
      "GitHub Actions",
      "CI/CD Pipelines"
    ]
  }
];

export function Skills() {
  const shouldReduceMotion = useReducedMotion();
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  return (
    <section className="scene py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative" id="skills">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-4">
          <Terminal className="w-3.5 h-3.5" />
          <span>Core Competencies</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
          Technical Arsenal
        </h2>
        <p className="text-base text-slate-300 leading-relaxed">
          Comprehensive dual-stack engineering with deep production experience across TypeScript, C#/.NET, and applied AI systems.
        </p>
      </div>

      {/* Grid of Clusters */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILL_CLUSTERS.map((cluster, index) => {
          const Icon = cluster.icon;
          return (
            <motion.div
              key={cluster.title}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0a0d14]/80 backdrop-blur-xl p-6 sm:p-7 shadow-lg hover:border-cyan-500/30 transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-400">
                    {cluster.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {cluster.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {cluster.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {cluster.skills.map(skill => {
                    const isSelected = selectedTag === skill;
                    return (
                      <button
                        key={skill}
                        type="button"
                        onClick={() => setSelectedTag(isSelected ? null : skill)}
                        className={`text-xs font-mono px-2.5 py-1 rounded-lg border transition-all ${
                          isSelected
                            ? "bg-cyan-400 text-slate-950 border-cyan-300 font-semibold"
                            : "bg-white/[0.03] hover:bg-white/10 text-slate-300 border-white/10"
                        }`}
                      >
                        {skill}
                      </button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
