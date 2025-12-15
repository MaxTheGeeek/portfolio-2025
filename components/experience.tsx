"use client";

import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";
import {
  ScrollAnimation,
  StaggerContainer,
} from "@/components/scroll-animations";

export function Experience() {
  const experiences = [
    {
      title: "Fullstack Developer",
      company: "Rocklogic GmbH",
      location: "Vienna, Austria",
      period: "Sep 2025 – Present",
      description: [
        "Maintain and improve products including stereumplus.com and fungl.com",
        "Focus on performance optimization and UX",
        "Lead development for blockchain solutions",
      ],
      technologies: ["React.js", "Next.js", "Node.js", "PostgreSQL"],
      contact: "office@rocklogic.at",
    },
    {
      title: "Frontend Developer",
      company: "Stereum Services FlexCo",
      location: "Vienna, Austria",
      period: "Sep 2024 – Sep 2025",
      description: [
        "Built Stereum Launcher 2.0 with Electron/Vue",
        "Developed stereum.com with Next.js",
        "Integrated Contentful CMS",
      ],
      technologies: ["Electron.js", "Vue 3", "TailwindCSS", "Next.js"],
      contact: "Stereum Services FlexCo",
    },
    {
      title: "Software Developer",
      company: "Rocklogic GmbH",
      location: "Vienna, Austria",
      period: "Jan 2022 – Sep 2024",
      description: [
        "Built stereumplus.com fullstack",
        "Developed custom back office tools",
        "Rebuilt stereum.com & fungl.com",
      ],
      technologies: ["Nest.js", "Prisma", "Redis", "Mantine"],
      contact: "office@rocklogic.at",
    },
    {
      title: "Frontend Developer",
      company: "IRMALL",
      location: "Remote",
      period: "Jun 2021 – Jan 2022",
      description: [
        "Built product cards/details with React",
        "Developed responsive e-commerce components",
      ],
      technologies: ["React.js", "Material-UI", "JavaScript"],
      contact: "Remote",
    },
    {
      title: "Junior Developer",
      company: "TastyDay",
      location: "Rotterdam",
      period: "Jan 2018 – Mar 2019",
      description: [
        "Built mobile-first pages",
        "Focused on responsive layouts",
      ],
      technologies: ["HTML", "CSS", "JavaScript"],
      contact: "office@tastyday.nl",
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation animation="fadeIn">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Work <span className="text-blue-500">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              My professional journey across different companies and technologies.
            </p>
          </div>
        </ScrollAnimation>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative h-[280px] bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/10 stagger-child opacity-0"
            >
              {/* Card Content - Normal State */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                <div>
                  <div className="flex items-center gap-2 mb-4 text-blue-400">
                    <Building className="h-5 w-5" />
                    <span className="font-semibold tracking-wide text-sm uppercase">{exp.company}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {exp.title}
                  </h3>
                  <div className="flex flex-col gap-1 text-gray-500 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-3 w-3" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-3 w-3" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <div className="w-full flex justify-end">
                  <span className="px-3 py-1 text-xs font-medium text-gray-500 bg-gray-800 rounded-full border border-gray-700 group-hover:opacity-0 transition-opacity">
                    View Details
                  </span>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gray-900/95 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-20 flex flex-col justify-center border-t-2 border-blue-500">
                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-gray-300 text-sm flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      <span className="line-clamp-2">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.slice(0, 4).map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="bg-blue-500/10 text-blue-400 border-blue-500/20 text-xs hover:bg-blue-500/20"
                      >
                        {tech}
                      </Badge>
                    ))}
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
