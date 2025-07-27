"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  const [text, setText] = useState("");

  useEffect(() => {
    const fullText = "Software Developer";
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
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      {/* Background image with low opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 mt-20"
        style={{
          backgroundImage: "url('/marsi.jpg?height=1080&width=1920')",
        }}
      ></div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gray-900/60"></div>

      <div className="text-center z-10 px-4 relative">
        <div className="mb-8">
          <div className="w-52 h-52 mx-auto mb-6 rounded-md bg-gradient-to-r from-blue-500 to-purple-600 p-1">
            <div className="w-full h-full  bg-gray-900 flex items-center justify-center">
              <Image
                src="/me.jpg"
                alt="Profile Picture"
                width={208}
                height={208}
              />
            </div>
          </div>
        </div>

        <h1
          className="text-5xl md:text-7xl font-bold mb-4 relative text-amber-500 drop-shadow-[0_0_10px_rgba(255,193,7,0.2)]"
          style={{
            textShadow:
              "0 0 10px rgba(255,193,7,0.4), 0 0 20px rgba(255,193,7,0.2), 0 0 30px rgba(255,193,7,0.1)",
          }}
        >
          Max Behzadi
          <span
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              zIndex: -1,
              filter: "blur(12px)",
              opacity: 0.2,
              background:
                "radial-gradient(circle, rgba(255,193,7,0.2) 0%, rgba(255,193,7,0.1) 50%, transparent 100%)",
            }}
          ></span>
        </h1>

        <div className="text-xl md:text-2xl text-gray-300 mb-8 h-8">
          <span>{text}</span>
          <span className="border-r-2 border-blue-400 animate-pulse ml-1">
            |
          </span>
        </div>

        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in">
          Skilled full-stack developer with expertise in JavaScript, Vue.js,
          React.js, and Node.js. Passionate about creating dynamic web
          applications, blockchain solutions, and implementing effective SEO
          strategies.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button
            variant="outline"
            size="lg"
            className="bg-transparent border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
            onClick={() => window.open("mailto:maxbehzadi82@gmail.com")}
          >
            <Mail className="mr-2 h-4 w-4" />
            Get In Touch
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-700"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/max-behzadi-1857b7193",
                "_blank"
              )
            }
          >
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </Button>
        </div>

        <div className="flex justify-center space-x-6 text-gray-400">
          <a
            href="mailto:maxbehzadi82@gmail.com"
            className="hover:text-blue-400 transition-colors"
          >
            <Mail className="h-6 w-6" />
          </a>
          <a
            href="tel:+4367697018 20"
            className="hover:text-blue-400 transition-colors"
          >
            <Phone className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/max-behzadi-1857b7193"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-white transition-colors animate-bounce z-10"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
}
