import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"

export function Education() {
  const education = [
    {
      degree: "Diploma of Software Engineering",
      field: "Software Development",
      institution: "WIFI Wien",
      location: "Vienna, Austria",
      period: "2020 - 2021",
      description:
        "Comprehensive program covering modern software development practices, web technologies, and project management.",
      highlights: ["Full-stack Development", "Modern JavaScript Frameworks", "Database Design", "Project Management"],
    },
    {
      degree: "Bachelor of Science",
      field: "Computer Science",
      institution: "Azad University of Tehran",
      location: "Tehran North, Iran",
      period: "2005",
      description:
        "Foundational computer science education covering algorithms, data structures, and software engineering principles.",
      highlights: ["Computer Science Fundamentals", "Programming Languages", "Software Engineering", "Mathematics"],
    },
  ]

  const certifications = [
    "JavaScript ES6+ Certification",
    "React.js Professional Development",
    "Vue.js Advanced Concepts",
    "Node.js Backend Development",
    "Flutter Mobile Development",
    "AWS Cloud Practitioner",
  ]

  return (
    <section id="education" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl text-white mb-2">{edu.degree}</CardTitle>
                    <p className="text-blue-400 font-semibold mb-2">{edu.field}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-400 text-sm">
                      <div className="flex items-center gap-1">
                        <GraduationCap className="h-4 w-4" />
                        <span>{edu.institution}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">{edu.description}</p>
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Areas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((highlight, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gray-800/30 border-gray-700">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600">
                <Award className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-2xl text-white">Professional Certifications</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors"
                >
                  <Award className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{cert}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
