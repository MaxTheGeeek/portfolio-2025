"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Monitor, Globe } from "lucide-react"
import { ScrollAnimation, StaggerContainer } from "@/components/scroll-animations"

export function Projects() {
  const projects = [
    {
      title: "Stereum Plus",
      description:
        "Advanced blockchain node management platform with enhanced features for professional users. Built with modern web technologies focusing on user experience and performance.",
      url: "https://www.stereumplus.com",
      type: "Web Application",
      icon: Globe,
      technologies: ["React.js", "Next.js", "TypeScript", "Node.js", "Blockchain"],
      category: "Professional Platform",
    },
    {
      title: "Stereum",
      description:
        "Core blockchain node management application providing seamless setup and monitoring of Ethereum validators. Features intuitive interface and robust backend infrastructure.",
      url: "https://www.stereum.com",
      type: "Web Application",
      icon: Globe,
      technologies: ["Vue.js", "Node.js", "Electron.js", "Blockchain", "Web3"],
      category: "Blockchain Platform",
    },
    {
      title: "Rocklogic",
      description:
        "Corporate website for Rocklogic GmbH showcasing company services, portfolio, and expertise in software development and blockchain solutions.",
      url: "https://www.rocklogic.at",
      type: "Corporate Website",
      icon: Globe,
      technologies: ["React.js", "Next.js", "TypeScript", "SEO", "Responsive Design"],
      category: "Corporate Website",
    },
    {
      title: "Persian Score",
      description:
        "Comprehensive sports scoring and statistics platform for Persian sports enthusiasts. Features real-time updates, match tracking, and detailed analytics.",
      url: "https://www.persianscore.com",
      type: "Web Application",
      icon: Globe,
      technologies: ["PHP", "Laravel", "JavaScript", "MySQL", "Real-time Updates"],
      category: "Sports Platform",
    },
    {
      title: "Stereum Launcher",
      description:
        "Desktop application for managing blockchain nodes with intuitive GUI. Provides seamless installation, configuration, and monitoring of Ethereum validators through a native desktop experience.",
      url: null,
      type: "Desktop Application",
      icon: Monitor,
      technologies: ["Electron.js", "Vue.js", "Node.js", "Native APIs", "Cross-platform"],
      category: "Desktop Application",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimation animation="fadeIn">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              A showcase of websites and applications I've developed, ranging from blockchain platforms to corporate
              websites and desktop applications.
            </p>
          </div>
        </ScrollAnimation>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.15}>
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 group h-full flex flex-col stagger-child opacity-0"
            >
              <CardHeader className="flex-shrink-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 group-hover:scale-110 transition-transform">
                    <project.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg text-white">{project.title}</CardTitle>
                    <p className="text-sm text-gray-400">{project.type}</p>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 w-fit">
                  {project.category}
                </Badge>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <p className="text-gray-300 mb-6 leading-relaxed flex-grow">{project.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 transition-colors text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mt-auto">
                  {project.url ? (
                    <Button
                      variant="outline"
                      className="w-full bg-transparent border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                      onClick={() => window.open(project.url, "_blank")}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Visit Website
                    </Button>
                  ) : (
                    <div className="w-full p-3 bg-gray-700/30 rounded-lg text-center">
                      <Monitor className="h-5 w-5 mx-auto mb-2 text-gray-400" />
                      <span className="text-gray-400 text-sm">Desktop Application</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </StaggerContainer>

        <ScrollAnimation animation="slideInUp" delay={0.5}>
          <div className="mt-16 text-center">
            <div className="bg-gray-800/30 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Want to See More?</h3>
              <p className="text-gray-300 mb-6">
                These are just a few highlights of my work. I have experience with various other projects including
                e-commerce platforms, content management systems, and custom web applications.
              </p>
              <div className="flex justify-center space-x-4">
                <Button
                  variant="outline"
                  className="bg-transparent border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                  onClick={() => window.open("https://www.maxbehzadi.info", "_blank")}
                >
                  <Globe className="mr-2 h-4 w-4" />
                  Visit Portfolio
                </Button>
                <Button
                  variant="outline"
                  className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-700"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Discuss Your Project
                </Button>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
