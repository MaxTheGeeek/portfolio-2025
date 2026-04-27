import { Background } from "@/components/three/Background"
import { TopNav } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Education } from "@/components/education"
import { Contact } from "@/components/contact"

export default function Portfolio() {
  return (
    <>
      <Background />
      <div className="grid-floor"></div>

      <div className="app relative z-10 text-white min-h-screen">
        <TopNav />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />

        <footer>
          <span>© 2026 Max Behzadi · Crafted for Three.js</span>
          <span>v3.0</span>
        </footer>
      </div>
    </>
  )
}
