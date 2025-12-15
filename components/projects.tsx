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
      title: "Stereum Labs",
      description:
        "Experimental projects and research initiatives pushing the boundaries of Ethereum infrastructure.",
      image: "/labs.png",
      url: "https://stereumlabs.com",
      type: "Research Initiative",
      technologies: ["Research", "Innovation", "Blockchain"],
      category: "Research",
    },
    {
      title: "Stereum Plus",
      description:
        "Advanced tools and analytics for professional stakers and node operators. Built with modern web technologies focusing on user experience.",
      image: "/plus.png",
      url: "https://stereumplus.com",
      type: "Professional Platform",
      technologies: ["Next.js", "Nest.js", "PostgreSQL", "Redis", "Auth0"],
      category: "Analytics Platform",
    },
    {
      title: "Fungl.com",
      description:
        "A sophisticated DeFi platform providing financial tools and analytics. Built with a high-performance stack to ensure real-time data accuracy.",
      image: "/fungl.png",
      url: "https://fungl.com",
      type: "DeFi Platform",
      technologies: ["Next.js", "Nest.js", "PostgreSQL", "TailwindCSS"],
      category: "FinTech",
    },
    {
      title: "Stereum.com",
      description:
        "The official website for Stereum, providing resources, guides, and updates for the community.",
      image: "/stereum.png",
      url: "https://stereum.com",
      type: "Web Platform",
      technologies: ["Next.js", "TypeScript", "Mantine 6", "Contentful"],
      category: "Web Platform",
    },
    {
      title: "Rocklogic.at",
      description:
        "Corporate website for Rocklogic GmbH showcasing company services and expertise in software development.",
      image: "/rl.png",
      url: "https://www.rocklogic.at",
      type: "Corporate Website",
      technologies: ["React.js", "Next.js", "TypeScript", "Contentful"],
      category: "Corporate Website",
    },
    {
      title: "Persian Score",
      description:
        "Comprehensive sports scoring and statistics platform for Persian sports enthusiasts. Features real-time updates.",
      image: "/score.png",
      url: "https://www.persianscore.com",
      type: "Web Application",
      technologies: ["Next.js", "Supabase", "Tailwind CSS", "PostgreSQL"],
      category: "Sports Platform",
    },
    {
      title: "Stereum Launcher",
      description:
        "A desktop application for managing Ethereum nodes with ease. Features one-click installation and monitoring.",
      url: "https://stereum.net",
      type: "Desktop Application",
      images: ["/launcher-node.png", "/laucher-staking.png"],
      technologies: [
        "Electron",
        "Vue.js",
        "Node.js",
        "TailwindCSS",
      ],
      category: "Desktop Application",
    },
    {
      title: "IRMall",
      description:
        "A Persian language online shop providing a wide range of products.",
      icon: ShoppingCart,
      url: "https://irmall.ir",
      type: "E-Commerce",
      technologies: ["HTML", "JavaScript", "React.js"],
      category: "E-Commerce",
    },
    {
      title: "TastyDay",
      description:
        "Diet food ordering platform serving the Netherlands. Facilitates healthy meal planning.",
      icon: Utensils,
      url: "https://tastyday.nl",
      type: "Food Tech",
      technologies: ["HTML", "JavaScript", "React.js"],
      category: "Delivery Platform",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation animation="fadeIn">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Featured <span className="text-amber-500">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A showcase of innovative applications and platforms built with modern technologies.
            </p>
          </div>
        </ScrollAnimation>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          staggerDelay={0.1}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative h-[300px] rounded-xl overflow-hidden bg-gray-800 shadow-xl border border-gray-700/50 hover:border-amber-500/50 transition-all duration-500 cursor-pointer text-left stagger-child opacity-0"
              onClick={() => project.url && window.open(project.url, "_blank")}
            >
              {/* Background Image / Pattern */}
              <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110">
                {project.images ? (
                  <div className="relative w-full h-full bg-gray-900">
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      className="object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                    />
                    {/* Secondary image layered */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image
                        src={project.images[1]}
                        alt={project.title}
                        width={150}
                        height={150}
                        className="object-contain drop-shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                      />
                    </div>
                  </div>
                ) : project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-40 transition-opacity"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    {project.icon ? (
                      <project.icon className="h-20 w-20 text-gray-700 group-hover:text-amber-500/20 transition-colors" />
                    ) : (
                      <Monitor className="h-20 w-20 text-gray-700 group-hover:text-amber-500/20 transition-colors" />
                    )}
                  </div>
                )}
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 z-10 p-6 flex flex-col justify-end">
                {/* Base Content (Always Visible) */}
                <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="flex justify-between items-end mb-2">
                    <Badge variant="secondary" className="bg-amber-500/10 text-amber-500 border-amber-500/20 mb-2">
                      {project.category}
                    </Badge>
                    {project.url && <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-white mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 line-clamp-1 group-hover:opacity-0 transition-opacity duration-300">
                    {project.type}
                  </p>
                </div>

                {/* Hover Reveal Content */}
                <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500 ease-in-out">
                  <div className="pt-2 border-t border-gray-700/50 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, i) => (
                        <span key={i} className="text-xs font-medium text-blue-300 bg-blue-900/30 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
