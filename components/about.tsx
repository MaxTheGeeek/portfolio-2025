"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Film, BookOpen, Flower, FlameIcon as Grill, Code } from "lucide-react";
import { ScrollAnimation, StaggerContainer } from "@/components/scroll-animations";

export function About() {
  const hobbies = [
    {
      icon: Heart,
      title: "My Malinois",
      description: "Spending quality time with my loyal best friend.",
    },
    {
      icon: Film,
      title: "Movies",
      description: "Exploring cinema from classics to sci-fi.",
    },
    {
      icon: BookOpen,
      title: "Learning",
      description: "Constantly expanding my tech horizons.",
    },
    {
      icon: Flower,
      title: "Gardening",
      description: "Creating peaceful green spaces.",
    },
    {
      icon: Grill,
      title: "Grilling",
      description: "Weekend BBQ master.",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 bg-gray-900 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-amber-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollAnimation animation="fadeIn">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
              About <span className="text-amber-500">Me</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-amber-500 to-blue-600 mx-auto rounded-full mb-8"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Passionate about technology, driven by innovation, and grounded by the simple joys of life.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-16 items-start mb-24">
          <ScrollAnimation animation="slideInLeft">
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-2">
                <div className="p-3 bg-blue-500/10 rounded-lg">
                  <Code className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-3xl font-bold text-white">The Professional</h3>
              </div>

              <div className="prose prose-lg prose-invert text-gray-300 leading-relaxed">
                <p>
                  I'm a seasoned <strong>Full Stack Developer</strong> with a deep focus on the JavaScript ecosystem.
                  My journey has been defined by a relentless pursuit of cleaner code, faster applications, and
                  more intuitive user experiences.
                </p>
                <p>
                  Currently creating solutions at <strong>RockLogic GmbH</strong>, I bridge the gap between
                  complex blockchain infrastructure and accessible user interfaces. I believe in the power of
                  <strong>modern web technologies</strong> to solve real-world problems.
                </p>
                <p>
                  Fluent in <strong>English, German, and Persian</strong>, I thrive in diverse, multicultural environments
                  where communication is as key as code quality.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                {["Vienna, Austria", "Full Stack", "Blockchain", "Problem Solver"].map((tag, i) => (
                  <span key={i} className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-sm text-gray-300 shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slideInRight">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-amber-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500" />
              <div className="relative bg-gray-800 rounded-2xl p-8 border border-gray-700 shadow-2xl">
                <div className="text-center space-y-6">
                  <div className="inline-block p-1 rounded-full bg-gradient-to-r from-blue-500 to-amber-500 mb-2">
                    <div className="w-32 h-32 rounded-full bg-gray-900 flex items-center justify-center overflow-hidden relative">
                      <Image
                        src="/me.jpg"
                        alt="Max Behzadi"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2">Max Behzadi</h4>
                    <p className="text-blue-400 font-medium">Full Stack Developer</p>
                  </div>
                  <div className="border-t border-gray-700 pt-6">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <p className="text-3xl font-bold text-white">6+</p>
                        <p className="text-sm text-gray-500 uppercase tracking-widest mt-1">Years Exp</p>
                      </div>
                      <div>
                        <p className="text-3xl font-bold text-white">10+</p>
                        <p className="text-sm text-gray-500 uppercase tracking-widest mt-1">Projects</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        <ScrollAnimation animation="slideInUp">
          <div className="bg-gray-800/30 rounded-3xl p-8 md:p-12 border border-gray-800">
            <h3 className="text-2xl font-bold mb-10 text-white text-center">Beyond the Code</h3>
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {hobbies.map((hobby, index) => (
                <div
                  key={index}
                  className="group bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-amber-500/30 transition-all duration-300 hover:-translate-y-1 stagger-child opacity-0 text-center"
                >
                  <hobby.icon className="h-8 w-8 mx-auto mb-4 text-gray-500 group-hover:text-amber-500 transition-colors" />
                  <h4 className="font-semibold text-white mb-2 text-sm md:text-base">{hobby.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
                    {hobby.description}
                  </p>
                </div>
              ))}
            </StaggerContainer>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
