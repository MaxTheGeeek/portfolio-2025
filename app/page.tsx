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
        
        <div className="flex justify-center w-full py-16 relative z-30 opacity-90 hover:opacity-100 transition-opacity">
          <img 
            src="/marsi.jpg" 
            alt="My dog Marsi" 
            className="w-[400px] h-auto rounded-2xl shadow-2xl border border-white/10 object-cover" 
          />
        </div>

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
