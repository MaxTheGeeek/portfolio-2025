import { Card, CardContent } from "@/components/ui/card"
import { Heart, Film, BookOpen, Flower, FlameIcon as Grill } from "lucide-react"
import { ScrollAnimation, StaggerContainer } from "@/components/scroll-animations"

export function About() {
  const hobbies = [
    {
      icon: Heart,
      title: "My Malinois",
      description: "Spending quality time with my best friend - my loyal Malinois dog",
    },
    {
      icon: Film,
      title: "Movies",
      description: "Enjoying cinema and exploring different genres in my free time",
    },
    {
      icon: BookOpen,
      title: "Learning",
      description: "Continuously expanding my knowledge in technology and beyond",
    },
    {
      icon: Flower,
      title: "Gardening",
      description: "Growing plants and creating beautiful outdoor spaces",
    },
    {
      icon: Grill,
      title: "Grilling",
      description: "Weekend BBQ sessions - my favorite way to unwind and cook",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimation animation="fadeIn">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <ScrollAnimation animation="slideInLeft">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Professional Journey</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm a skilled software developer with a robust background in full-stack development, emphasizing
                JavaScript and modern frameworks. Currently working at Stereum Service FlexCo, I specialize in crafting
                dynamic web, desktop, and mobile applications with responsive designs and user-centric interfaces.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                My expertise spans across Vue.js, React.js, Node.js, and mobile development with Flutter. I'm passionate
                about writing clean, efficient code and delivering solutions that meet project goals within deadlines.
                Fluent in English, German, and Persian, I excel in multinational team environments.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Vienna, Austria</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                  Available for Projects
                </span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Remote Friendly</span>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slideInRight">
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">MB</span>
                  </div>
                  <p className="text-gray-300">Passionate Developer</p>
                  <p className="text-gray-400 text-sm">Building the future, one line at a time</p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        <ScrollAnimation animation="slideInUp">
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-white text-center">Personal Interests</h3>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {hobbies.map((hobby, index) => (
                <Card
                  key={index}
                  className="bg-gray-800/50 border-gray-700 hover:bg-gray-700/50 transition-colors stagger-child opacity-0"
                >
                  <CardContent className="p-6 text-center">
                    <hobby.icon className="h-8 w-8 mx-auto mb-4 text-blue-400" />
                    <h4 className="font-semibold mb-2 text-white">{hobby.title}</h4>
                    <p className="text-sm text-gray-400">{hobby.description}</p>
                  </CardContent>
                </Card>
              ))}
            </StaggerContainer>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
