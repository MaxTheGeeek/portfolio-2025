"use client";

import { Badge } from "@/components/ui/badge";
import { Code, Database, Server, Palette, Brain, Zap } from "lucide-react";
import {
  ScrollAnimation,
  StaggerContainer,
} from "@/components/scroll-animations";

export function Skills() {
  // Helper to get brand color styles
  const getSkillStyle = (skill: string) => {
    const brandColors: Record<string, string> = {
      // Frontend
      "React.js": "bg-[#61DAFB]/10 text-gray-100 border-[#61DAFB]/20 hover:bg-[#61DAFB]/20",
      "Next.js": "bg-white/10 text-gray-100 border-white/20 hover:bg-white/20",
      "Vue.js": "bg-[#4FC08D]/10 text-gray-100 border-[#4FC08D]/20 hover:bg-[#4FC08D]/20",
      "Angular": "bg-[#DD0031]/10 text-gray-100 border-[#DD0031]/20 hover:bg-[#DD0031]/20",
      "Flutter": "bg-[#02569B]/10 text-gray-100 border-[#42A5F5]/20 hover:bg-[#02569B]/20",
      "TypeScript": "bg-[#3178C6]/10 text-gray-100 border-[#3178C6]/20 hover:bg-[#3178C6]/20",
      "TailwindCSS": "bg-[#38B2AC]/10 text-gray-100 border-[#38B2AC]/20 hover:bg-[#38B2AC]/20",

      // Backend
      "Node.js": "bg-[#339933]/10 text-gray-100 border-[#339933]/20 hover:bg-[#339933]/20",
      "Nest.js": "bg-[#E0234E]/10 text-gray-100 border-[#E0234E]/20 hover:bg-[#E0234E]/20",
      "Go": "bg-[#00ADD8]/10 text-gray-100 border-[#00ADD8]/20 hover:bg-[#00ADD8]/20",
      "Docker": "bg-[#2496ED]/10 text-gray-100 border-[#2496ED]/20 hover:bg-[#2496ED]/20",
      "CI/CD": "bg-orange-500/10 text-gray-100 border-orange-500/20 hover:bg-orange-500/20",
      "Express": "bg-gray-500/10 text-gray-100 border-gray-500/20 hover:bg-gray-500/20",
      "GraphQL": "bg-[#E10098]/10 text-gray-100 border-[#E10098]/20 hover:bg-[#E10098]/20",
      "REST API": "bg-green-500/10 text-gray-100 border-green-500/20 hover:bg-green-500/20",

      // Database
      "PostgreSQL": "bg-[#336791]/10 text-gray-100 border-[#336791]/20 hover:bg-[#336791]/20",
      "Prisma": "bg-teal-500/10 text-gray-100 border-teal-500/20 hover:bg-teal-500/20",
      "Redis": "bg-[#DC382D]/10 text-gray-100 border-[#DC382D]/20 hover:bg-[#DC382D]/20",
      "SQL": "bg-blue-600/10 text-gray-100 border-blue-600/20 hover:bg-blue-600/20",
      "Database Design": "bg-purple-500/10 text-gray-100 border-purple-500/20 hover:bg-purple-500/20",

      // Design
      "Figma": "bg-[#F24E1E]/10 text-gray-100 border-[#F24E1E]/20 hover:bg-[#F24E1E]/20",
      "Mantine": "bg-[#339AF0]/10 text-gray-100 border-[#339AF0]/20 hover:bg-[#339AF0]/20",
      "Material UI": "bg-[#007FFF]/10 text-gray-100 border-[#007FFF]/20 hover:bg-[#007FFF]/20",
      "shadcn/ui": "bg-white/5 text-gray-100 border-gray-700 hover:bg-white/10",
      "Responsive": "bg-indigo-500/10 text-gray-100 border-indigo-500/20 hover:bg-indigo-500/20",

      // AI
      "OpenAI API": "bg-[#10A37F]/10 text-gray-100 border-[#10A37F]/20 hover:bg-[#10A37F]/20",
      "Claude": "bg-[#D97757]/10 text-gray-100 border-[#D97757]/20 hover:bg-[#D97757]/20",
      "LangChain": "bg-yellow-500/10 text-gray-100 border-yellow-500/20 hover:bg-yellow-500/20",
      "n8n": "bg-[#FF6584]/10 text-gray-100 border-[#FF6584]/20 hover:bg-[#FF6584]/20",
      "Agentic AI": "bg-violet-500/10 text-gray-100 border-violet-500/20 hover:bg-violet-500/20",
      "Prompt Eng.": "bg-pink-500/10 text-gray-100 border-pink-500/20 hover:bg-pink-500/20",
      "Copilot": "bg-blue-600/10 text-gray-100 border-blue-600/20 hover:bg-blue-600/20",

      // Tools
      "Auth0": "bg-[#EB5424]/10 text-gray-100 border-[#EB5424]/20 hover:bg-[#EB5424]/20",
      "Git": "bg-[#F05032]/10 text-gray-100 border-[#F05032]/20 hover:bg-[#F05032]/20",
      "Electron": "bg-[#47848F]/10 text-gray-100 border-[#47848F]/20 hover:bg-[#47848F]/20",
      "SEO": "bg-green-600/10 text-gray-100 border-green-600/20 hover:bg-green-600/20",
      "Analytics": "bg-yellow-600/10 text-gray-100 border-yellow-600/20 hover:bg-yellow-600/20",
    };

    return brandColors[skill] || "bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700";
  };

  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      skills: ["React.js", "Next.js", "Vue.js", "Angular", "Flutter", "TypeScript", "TailwindCSS"],
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Node.js", "Go", "Nest.js", "Express", "Docker", "CI/CD", "GraphQL"],
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
    },
    {
      title: "Database",
      icon: Database,
      skills: ["PostgreSQL", "Database Design", "Prisma", "Redis", "SQL"],
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20",
    },
    {
      title: "Design & UI",
      icon: Palette,
      skills: ["Figma", "Mantine", "Material UI", "shadcn/ui", "Responsive"],
      color: "text-pink-400",
      bg: "bg-pink-500/10",
      border: "border-pink-500/20",
    },
    {
      title: "AI & Innovation",
      icon: Brain,
      skills: ["agentic AI", "n8n", "OpenAI API", "Claude", "LangChain", "Prompt Eng."],
      color: "text-amber-400",
      bg: "bg-amber-500/10",
      border: "border-amber-500/20",
    },
    {
      title: "Tools & Perf",
      icon: Zap,
      skills: ["Auth0", "Git", "Electron", "SEO", "Analytics"],
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20",
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation animation="fadeIn">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold mb-4 text-white">
                Technical <span className="text-blue-500">Arsenal</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                A curated stack of modern technologies that I use to build scalable,
                high-performance applications.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="h-1 w-32 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full w-2/3 bg-blue-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.05}
        >
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`group relative p-6 rounded-2xl bg-gray-800/40 border border-gray-700/50 hover:border-gray-600 transition-all duration-300 hover:-translate-y-1 stagger-child opacity-0 overflow-hidden`}
            >
              <div className={`absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity ${category.color}`}>
                <category.icon className="w-16 h-16 transform rotate-12 translate-x-4 -translate-y-4" />
              </div>

              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${category.bg} ${category.color} border ${category.border}`}>
                  <category.icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className={`transition-colors ${getSkillStyle(skill)}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
