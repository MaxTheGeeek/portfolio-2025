import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building } from "lucide-react"
import { ScrollAnimation, StaggerContainer } from "@/components/scroll-animations"

export function Experience() {
  const experiences = [
    {
      title: "Software Developer & SEO Specialist",
      company: "Stereum Service FlexCo (Rocklogic GmbH)",
      location: "Vienna, Austria",
      period: "2022 - Present",
      description: [
        "Spearheading frontend and backend development of the DApp Stereum, utilizing Vue.js and Node.js within the Electron.js framework",
        "Engineered multiple company websites (stereumplus.com, stereum.com, rocklogic.at) leveraging React.js/Next.js & TypeScript, focusing on responsive design and user experience",
        "Developed the Stereum Launcher desktop application using Electron.js for seamless blockchain node management",
        "Developed a mobile monitoring app for the Stereum application, employing Flutter and Dart to deliver real-time application insights",
        "Implemented comprehensive SEO strategies and Google-based ad campaigns to improve organic search rankings and meet budget specifications",
        "Applied certified Digital Marketing techniques to enhance online presence and user acquisition",
        "Oversaw technical issues and troubleshooting requests to resolve user problems",
      ],
      technologies: [
        "Vue.js",
        "Node.js",
        "Electron.js",
        "React.js",
        "Next.js",
        "TypeScript",
        "Flutter",
        "Dart",
        "SEO",
        "Digital Marketing",
        "Google Ads",
      ],
      contact: "office@rocklogic.at",
    },
    {
      title: "Web Developer & Digital Marketing Specialist",
      company: "Freelance",
      location: "Vienna, Austria",
      period: "2020 - 2021",
      description: [
        "Designed, implemented, and monitored web pages, plugins, and functionality for continuous improvement",
        "Planned website development, converting mockups into usable web presence with HTML, JavaScript, AJAX, and JSON coding",
        "Implemented comprehensive SEO strategies and Google-based ad campaigns to meet budget specifications",
        "Applied certified Digital Marketing techniques to enhance client online presence and conversion rates",
        "Developed technical solutions required to accommodate specific user-facing assets",
        "Provided SEO consultation and digital marketing strategy for various clients",
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "AJAX",
        "JSON",
        "SEO",
        "Google Ads",
        "Digital Marketing",
        "Analytics",
      ],
      contact: "maxbehzadi82@gmail.com",
    },
    {
      title: "Web Developer",
      company: "IR Mall",
      location: "Remote",
      period: "2018 - 2019",
      description: [
        "Coded websites using HTML, CSS, JavaScript, and jQuery languages",
        "Used regulatory and compliance standards for user interface designs",
        "Cooperated with designers to create clean interfaces and simple, intuitive interactions and experiences",
        "Produced websites compatible with multiple browsers",
        "Implemented basic SEO practices to improve website visibility",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "jQuery", "UI/UX Design", "SEO"],
      contact: "Remote Position",
    },
    {
      title: "Web Developer",
      company: "Tasty Day",
      location: "Rotterdam, Netherlands",
      period: "2017 - 2018",
      description: [
        "Coded using HTML, CSS and JavaScript to develop features for both mobile and desktop platforms",
        "Produced websites compatible with multiple browsers",
        "Teamed on user-centric design strategy in translation of UX and business requirements into coded solutions",
        "Implemented responsive design principles for optimal user experience across devices",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design", "Cross-browser Compatibility"],
      contact: "+31 618 880017 | office@tastyday.nl",
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimation animation="fadeIn">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
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
                    <CardTitle className="text-xl text-white mb-2">{exp.title}</CardTitle>
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
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Technologies Used:</h4>
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
  )
}
