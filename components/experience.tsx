import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";
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
        "Maintain and improve all products built under Rocklogic Holdings, including stereumplus.com, stereum.com, stereumlab.com, rocklogic.at, and fungl.com",
        "Focus on full-stack development with emphasis on performance optimization and user experience",
        "Implement technical SEO strategies and performance improvements across all company products",
        "Lead development initiatives for Ethereum-related web platforms and blockchain solutions",
      ],
      technologies: [
        "JavaScript",
        "TypeScript",
        "React.js",
        "Next.js",
        "Vue.js",
        "Node.js",
        "PostgreSQL",
        "Technical SEO",
      ],
      contact: "office@rocklogic.at",
    },
    {
      title: "Frontend Developer",
      company: "Stereum Services FlexCo",
      location: "Vienna, Austria",
      period: "Sep 2024 – Sep 2025",
      description: [
        "Built the Stereum Launcher 2.0 desktop app with Electron.js, Vue 3, and TailwindCSS, creating the full UI and wiring backend YAML configs with Node.js",
        "Developed stereum.com (desktop app website) and rocklogic.at (company site) from scratch using Next.js 13, TypeScript, Mantine 6",
        "Integrated Contentful CMS for news/blog functionality and content management",
        "Focused on creating responsive, user-friendly interfaces for blockchain node management applications",
      ],
      technologies: [
        "Electron.js",
        "Vue 3",
        "TailwindCSS",
        "Next.js 13",
        "TypeScript",
        "Mantine 6",
        "Contentful",
        "Node.js",
      ],
      contact: "Stereum Services FlexCo",
    },
    {
      title: "Software Developer",
      company: "Rocklogic GmbH",
      location: "Vienna, Austria",
      period: "Jan 2022 – Sep 2024",
      description: [
        "Built stereumplus.com from scratch: frontend (Next.js 15, TypeScript, Mantine 7) and backend (Nest.js, Node.js, PostgreSQL, Prisma, Redis, Auth0), including API design, server functions, and caching",
        "Developed the stereumplus back office for admins using Nest.js backend and React/Refine with Ant Design UI",
        "Redesigned and rebuilt stereum.com with Next.js 15, Mantine 8, GitHub API integration (releases & contributors), and wagmi wallet connection for donations",
        "Created fungl.com, a DeFi platform website, using Next.js 15, shadcn/ui, TailwindCSS",
        "Led technical SEO & performance optimization across products (Google Analytics, Ads, Search Console)",
      ],
      technologies: [
        "Next.js 15",
        "TypeScript",
        "Mantine 7/8",
        "Nest.js",
        "Node.js",
        "PostgreSQL",
        "Prisma",
        "Redis",
        "Auth0",
        "React",
        "shadcn/ui",
        "GitHub API",
        "wagmi",
      ],
      contact: "office@rocklogic.at",
    },
    {
      title: "Frontend Developer",
      company: "IRMALL",
      location: "Remote",
      period: "Jun 2021 – Jan 2022",
      description: [
        "Worked 100% remote as a contract frontend developer for a Persian e-commerce platform",
        "Built product cards and detail pages using React.js and Material-UI",
        "Developed responsive components for e-commerce functionality",
        "Collaborated with remote team to deliver user-focused solutions",
      ],
      technologies: ["React.js", "Material-UI", "JavaScript", "Remote Work"],
      contact: "Remote Contract Position",
    },
    {
      title: "Junior Frontend Developer",
      company: "TastyDay",
      location: "Rotterdam, Netherlands",
      period: "Jan 2018 – March 2019",
      description: [
        "Built mobile-first pages for a diet food platform using HTML, CSS, and vanilla JavaScript",
        "Learned core frontend skills while developing responsive layouts and adding basic interactivity",
        "Focused on creating mobile-optimized user interfaces for food and nutrition platform",
        "Gained foundational experience in web development and responsive design principles",
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Responsive Design",
        "Mobile-First Development",
      ],
      contact: "+31 618 880017 | office@tastyday.nl",
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimation animation="fadeIn">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              6+ years of software development experience, mainly focused on
              frontend development and API integration. Skilled in
              JavaScript/TypeScript and Web, currently building Ethereum-related
              web platforms.
            </p>
          </div>
        </ScrollAnimation>

        <StaggerContainer className="space-y-8" staggerDelay={0.2}>
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 stagger-child opacity-0"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-white mb-2">
                      {exp.title}
                    </CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-400">
                      <div className="flex items-center gap-1">
                        <Building className="h-4 w-4" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-gray-300 flex items-start">
                      <span className="text-blue-400 mr-2 mt-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="bg-blue-500/20 text-blue-400 hover:bg-blue-500/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="text-sm text-gray-500">
                  <strong>Contact:</strong> {exp.contact}
                </div>
              </CardContent>
            </Card>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
