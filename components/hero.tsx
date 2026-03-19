"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Linkedin, Github, Phone, ExternalLink, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  const [text, setText] = useState("");
  const fullText = "Software Developer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Full Screen Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/marsi.jpg"
          alt="Background"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
        {/* Professional Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 pt-20">

        {/* Profile Image Section - Modern Design */}
        <div className="relative group shrink-0">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-amber-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full p-1 bg-gray-900 overflow-hidden ring-4 ring-gray-800/50 shadow-2xl">
            <Image
              src="/profile.jpg"
              alt="Max Behzadi"
              fill
              className="object-cover rounded-full transition-transform duration-500 group-hover:scale-110"
              priority
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left max-w-2xl">
          <div className="mb-2 inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm">
            <span className="text-blue-400 text-sm font-medium tracking-wide uppercase">Available for work</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight drop-shadow-lg">
            Max <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Behzadi</span>
          </h1>

          <div className="text-2xl md:text-3xl text-gray-200 mb-6 font-light h-10 flex items-center justify-center md:justify-start">
            <span className="mr-2">{text}</span>
            <span className="w-[3px] h-8 bg-blue-500 animate-pulse" />
          </div>

          <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0 drop-shadow-md">
            Skilled full-stack developer specializing in JavaScript, React.js, and Node.js.
            Building scalable blockchain solutions and dynamic web applications with a focus on
            performance and user experience.
          </p>

          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white border-0 shadow-lg shadow-blue-500/20 transition-all hover:scale-105"
                onClick={() => window.open("https://github.com/MaxTheGeeek", "_blank")}
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub Profile
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/20 backdrop-blur-sm transition-all hover:scale-105"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/max-behzadi-1857b7193",
                    "_blank"
                  )
                }
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn Profile
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Button
                variant="outline"
                size="lg"
                className="bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/20 backdrop-blur-sm transition-all hover:scale-105"
                onClick={() => window.open("/Majid_Behzadi_Resume.pdf", "_blank")}
              >
                <Download className="mr-2 h-5 w-5" />
                Resume (EN)
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/20 backdrop-blur-sm transition-all hover:scale-105"
                onClick={() => window.open("/Majid_Behzadi_Lebenslauf_DE.pdf", "_blank")}
              >
                <Download className="mr-2 h-5 w-5" />
                Lebenslauf (DE)
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-white transition-all duration-300 animate-bounce cursor-pointer z-10"
        aria-label="Scroll to content"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest opacity-70">Scroll</span>
          <ChevronDown className="h-6 w-6" />
        </div>
      </button>
    </section>
  );
}
