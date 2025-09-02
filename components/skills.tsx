"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Server, Palette, Brain, Zap } from "lucide-react";
import {
  ScrollAnimation,
  StaggerContainer,
} from "@/components/scroll-animations";
import { useEffect, useRef, useState } from "react";

export function Skills() {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: Code,
      skills: [
        "JavaScript",
        "TypeScript",
        "React.js",
        "Next.js",
        "Vue.js",
        "Flutter",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Libraries & UI",
      icon: Palette,
      skills: [
        "shadcn/ui",
        "Mantine",
        "TailwindCSS",
        "React Query",
        "Material-UI",
        "Ant Design",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Backend & APIs",
      icon: Server,
      skills: [
        "Node.js",
        "Express.js",
        "Nest.js",
        "GraphQL",
        "REST API",
        "PostgreSQL",
        "Prisma",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Database & Tools",
      icon: Database,
      skills: [
        "SQL",
        "PostgreSQL",
        "Prisma",
        "Redis",
        "Auth0",
        "Git",
        "Docker",
      ],
      color: "from-orange-500 to-red-500",
    },
    {
      title: "AI & Modern Tools",
      icon: Brain,
      skills: [
        "GPT",
        "Claude",
        "LangChain",
        "GitHub Copilot",
        "V0",
        "Prompt Engineering",
      ],
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "Performance & SEO",
      icon: Zap,
      skills: [
        "Technical SEO",
        "Performance Optimization",
        "Google Analytics",
        "Google Ads",
        "Digital Marketing",
        "Site Performance",
      ],
      color: "from-teal-500 to-blue-500",
    },
  ];

  const languages = [
    { name: "English", level: "C1", percentage: 95 },
    { name: "German", level: "B2", percentage: 80 },
    { name: "Persian", level: "Native", percentage: 100 },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimation animation="fadeIn">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Comprehensive technical expertise spanning frontend, backend, AI
              tools, and performance optimization
            </p>
          </div>
        </ScrollAnimation>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          staggerDelay={0.1}
        >
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 group stagger-child opacity-0"
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-lg bg-gradient-to-r ${category.color} group-hover:scale-110 transition-transform`}
                  >
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg text-white">
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </StaggerContainer>

        <ScrollAnimation animation="slideInUp" delay={0.3}>
          <div className="bg-gray-800/30 rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-8 text-white text-center">
              Languages
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {languages.map((lang, index) => (
                <LanguageBar key={index} language={lang} delay={index * 0.2} />
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}

function LanguageBar({
  language,
  delay,
}: {
  language: { name: string; level: string; percentage: number };
  delay: number;
}) {
  const [width, setWidth] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setWidth(language.percentage);
            }, delay * 1000);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, [language.percentage, delay]);

  return (
    <div ref={barRef} className="text-center">
      <h4 className="text-lg font-semibold text-white mb-2">{language.name}</h4>
      <p className="text-gray-400 mb-4">{language.level}</p>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full transition-all duration-2000 ease-out"
          style={{ width: `${width}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-500 mt-2">{language.percentage}%</p>
    </div>
  );
}
