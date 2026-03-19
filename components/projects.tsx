"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ShoppingCart, Utensils, Monitor } from "lucide-react";
import {
  ScrollAnimation,
  StaggerContainer,
} from "@/components/scroll-animations";

export function Projects() {
  const projects = [
    {
      title: "Docshow.org",
      description:
        "A document sharing platform via link with view-only access, no downloads required.",
      period: "In Progress",
      image: "/processing.png",
      url: "https://docshow.org",
      type: "Document Sharing",
      technologies: ["C#", ".NET 10", "Angular 20", "AWS", "Entity Framework Core", "Ollama", "LLM API"],
      category: "Document Sharing",
    },
    {
      title: "Cover-Letter.work",
      description:
        "A platform to generate cover letters by filling out a form, and merge up to 3 PDFs.",
      period: "2026",
      url: "https://cover-letter.work",
      type: "Utility Platform",
      images: ["/cover-1.png", "/cover-2.png"],
      technologies: ["React", "Next.js", "TypeScript", "shadcn UI", "Supabase"],
      category: "Utility Platform",
    },
    {
      title: "Stereum Labs",
      description:
        "Experimental projects and research initiatives pushing the boundaries of Ethereum infrastructure.",
      period: "2025 - Present",
      image: "/labs.png",
      url: "https://stereumlabs.com",
      type: "Research Initiative",
      technologies: ["Nest.js", "PostgreSQL", "React.js", "Next.js", "Mantine"],
      category: "Research",
    },
    {
      title: "Stereum Plus",
      description:
        "Advanced tools and analytics for professional stakers and node operators.",
      period: "2024 - Present",
      image: "/plus.png",
      url: "https://stereumplus.com",
      type: "Professional Platform",
      technologies: ["Nest.js", "PostgreSQL", "React.js", "Next.js", "Mantine"],
      category: "Analytics Platform",
    },
    {
      title: "Fungl.com",
      description:
        "A sophisticated DeFi platform providing financial tools and analytics.",
      period: "2024",
      image: "/fungl.png",
      url: "https://fungl.com",
      type: "DeFi Platform",
      technologies: ["React", "Next.js", "Tailwind"],
      category: "FinTech",
    },
    {
      title: "Stereum.com",
      description:
        "The official website for Stereum, providing resources, guides, and updates.",
      period: "2023",
      image: "/stereum.png",
      url: "https://stereum.com",
      type: "Web Platform",
      technologies: ["React", "Next.js", "Mantine"],
      category: "Web Platform",
    },
    {
      title: "Stereum Launcher",
      description:
        "A desktop application for managing Ethereum nodes with ease.",
      period: "2022 - 2024",
      url: "https://stereum.net",
      type: "Desktop Application",
      images: ["/launcher-node.png", "/laucher-staking.png"],
      technologies: ["Vue.js", "TailwindCSS"],
      category: "Desktop Application",
    },
    {
      title: "Persian Score",
      description:
        "Comprehensive sports scoring and statistics platform for Persian sports enthusiasts.",
      period: "2024",
      image: "/score.png",
      url: "https://www.persianscore.com",
      type: "Web Application",
      technologies: ["React", "Next.js", "Supabase", "Edge Functions"],
      category: "Sports Platform",
    },
    {
      title: "IRMall",
      description:
        "A Persian language online shop providing a wide range of products.",
      period: "2021 - 2022",
      image: "/irmall.png",
      type: "E-Commerce",
      technologies: ["React.js", "HTML", "CSS"],
      category: "E-Commerce",
    },
    {
      title: "TastyDay",
      description:
        "Diet food ordering platform serving the Netherlands.",
      period: "2018 - 2019",
      image: "/tastyday.png",
      type: "Food Tech",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "Delivery Platform",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gray-950 border-t border-gray-900">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation animation="fadeIn">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Featured <span className="text-amber-500">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A showcase of innovative applications and platforms.
            </p>
          </div>
        </ScrollAnimation>

        <div className="flex flex-col gap-24">
          {projects.map((project, index) => (
            <ScrollAnimation key={index} animation="slideInUp">
              <div
                className={`relative w-full h-[600px] rounded-2xl overflow-hidden group ${project.url ? 'cursor-pointer' : 'cursor-default'
                  }`}
                onClick={() => project.url && window.open(project.url, "_blank")}
              >
                {/* Full Width Background Image */}
                <div className="absolute inset-0 z-0">
                  {project.images ? (
                    <div className="relative w-full h-full bg-gray-900">
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60"
                      />
                      {/* Secondary image for Launcher */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <Image
                          src={project.images[1]}
                          alt={project.title}
                          width={400}
                          height={1200}
                          className="object-contain drop-shadow-2xl translate-y-10 group-hover:translate-y-5 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={project.image || "/placeholder.jpg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60"
                    />
                  )}
                  {/* Global Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/40 to-transparent z-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-transparent to-transparent z-10" />
                </div>

                {/* Content Overlay - Top Left */}
                <div className="absolute top-0 left-0 z-20 p-8 md:p-12 max-w-2xl">
                  {/* Period Badge */}
                  <div className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-sm font-medium mb-6">
                    {project.period}
                  </div>

                  {/* Title & Link Icon */}
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                      {project.title}
                    </h3>
                    {project.url && (
                      <ExternalLink className="h-6 w-6 text-gray-400 group-hover:text-amber-500 transition-colors opacity-0 group-hover:opacity-100" />
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
                    {project.description}
                  </p>

                  <div>
                    <span className="text-sm font-medium text-gray-500 uppercase tracking-widest leading-loose">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Technologies - Bottom */}
                <div className="absolute bottom-0 left-0 w-full z-20 p-8 md:p-12">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="text-sm font-medium text-white bg-blue-600 px-4 py-2 rounded-lg shadow-lg">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
