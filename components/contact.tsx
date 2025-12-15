"use client";

import { Mail, Linkedin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-32 px-4 bg-gray-950 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[100px]" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
          Let's Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-amber-500">Together</span>
        </h2>

        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          I'm currently available for freelance projects and open to full-time opportunities.
          If you have an idea that needs a skilled hand, I'd love to hear about it.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button
            size="lg"
            className="h-14 px-8 text-lg rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/25 transition-all hover:scale-105"
            onClick={() => window.open("mailto:maxbehzadi82@gmail.com")}
          >
            <Mail className="mr-3 h-5 w-5" />
            maxbehzadi82@gmail.com
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="h-14 px-8 text-lg rounded-full border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
            onClick={() => window.open("https://www.linkedin.com/in/max-behzadi-1857b7193", "_blank")}
          >
            <Linkedin className="mr-3 h-5 w-5" />
            LinkedIn
          </Button>
        </div>

        <div className="mt-24 pt-12 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Max Behzadi. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-gray-400 cursor-pointer transition-colors">Vienna, Austria</span>
            <span className="hover:text-gray-400 cursor-pointer transition-colors">Remote Capable</span>
          </div>
        </div>
      </div>
    </section>
  );
}
