"use client";

import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { ScrollAnimation } from "@/components/scroll-animations";

export function Education() {
  const education = [
    {
      degree: "Diploma in Software Engineering",
      institution: "WIFI Wien",
      location: "Vienna, AT",
      period: "2020 – 2021",
      field: "Software Development",
      description: "Intensive training in modern development practices and active project work.",
    },
    {
      degree: "B.Sc. in Accounting",
      institution: "Azad University",
      location: "Tehran, IR",
      period: "2001 – 2005",
      field: "Finance & Operations",
      description: "Foundation in analytical thinking and business logic.",
    },
  ];

  const certifications = [
    "JavaScript ES6+ Advanced",
    "React.js Professional",
    "Vue.js Architecture",
    "Node.js Backend",
    "TypeScript Master",
    "Next.js Fullstack",
  ];

  return (
    <section id="education" className="py-24 px-4 bg-gray-900 relative">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimation animation="fadeIn">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Education & <span className="text-amber-500">Certifications</span>
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
          </div>
        </ScrollAnimation>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Education Timeline */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-blue-500 w-6 h-6" />
              <h3 className="text-2xl font-bold text-white">Academic Path</h3>
            </div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-700 before:to-transparent">
              {education.map((edu, index) => (
                <ScrollAnimation key={index} animation="fadeIn" delay={index * 0.2}>
                  <div className="relative flex items-start gap-6 group">
                    <div className="absolute left-0 mt-1.5 w-2.5 h-2.5 rounded-full bg-gray-700 border-2 border-gray-900 group-hover:bg-blue-500 group-hover:scale-125 transition-all z-10 ml-[1.15rem]"></div>
                    <div className="ml-12 p-6 bg-gray-800/40 rounded-xl border border-gray-800 hover:border-blue-500/30 transition-colors w-full">
                      <div className="flex flex-wrap justify-between items-start mb-2 gap-2">
                        <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{edu.degree}</h4>
                        <span className="text-xs font-mono py-1 px-2 rounded bg-gray-900 text-gray-400 border border-gray-700">{edu.period}</span>
                      </div>
                      <p className="text-blue-400 text-sm mb-4 font-medium">{edu.institution}</p>
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                        <MapPin className="w-3 h-3" /> {edu.location}
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>

          {/* Certifications Grid */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Award className="text-amber-500 w-6 h-6" />
              <h3 className="text-2xl font-bold text-white">Certifications</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <ScrollAnimation key={index} animation="scaleIn" delay={0.2 + (index * 0.1)}>
                  <div className="flex items-center gap-3 p-4 bg-gray-800/40 border border-gray-800 rounded-lg hover:border-amber-500/30 hover:bg-gray-800/60 transition-all group">
                    <div className="w-2 h-2 rounded-full bg-gray-700 group-hover:bg-amber-500 transition-colors"></div>
                    <span className="text-gray-300 text-sm font-medium">{cert}</span>
                  </div>
                </ScrollAnimation>
              ))}
            </div>

            {/* Decorative */}
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-blue-900/20 to-amber-900/20 border border-white/5">
              <p className="text-gray-400 text-sm italic text-center">
                "Continuous learning is not just a necessity, but a passion that drives my career forward."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
