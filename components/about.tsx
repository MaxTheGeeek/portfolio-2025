"use client";

import React from "react";
import { Code, CodeHeader, CodeBlock } from "@/components/animate-ui/components/animate/code";
import ReactIcon from "@/components/icons/react-icon";
import { DogCarousel } from "@/components/dog-carousel";

function SceneHead({ num, title, sub }: { num: string; title: string; sub: string }) {
  return (
    <div className="scene-head">
      <span className="scene-num">{num}</span>
      <h2 className="scene-title">{title}</h2>
      <span className="scene-sub">{sub}</span>
    </div>
  );
}

const ABOUT_CODE = `/**
 * Developer Profile & Philosophy
 */
const profile = {
  experience: '8+ years building production-grade SaaS, IaaS & FinTech systems',
  stack: ['C# / .NET', 'TypeScript / NestJS', 'Next.js', 'AI Workflows'],
  philosophy: 'Software engineering is less about tools and more about problems worth solving.',
  focus: 'Intersection of robust backend architectures and AI-driven development.',
  tools: ['Claude Code', 'Context Mapping', 'Agentic Workflows', 'Automated Testing'],
  location: 'Vienna, Austria — Looking for problems worth solving.'
};

export default profile;`;

export function About() {
  return (
    <section className="scene" data-screen-label="02 About" id="about">
      <SceneHead num="// 01" title="About" sub="Self-portrait, in code" />
      <div className="about-grid">
        <Code code={ABOUT_CODE} className="w-full min-h-[420px]">
          <CodeHeader icon={ReactIcon} copyButton>
            developer-profile.ts
          </CodeHeader>
          <CodeBlock
            cursor={true}
            lang="tsx"
            writing={true}
            duration={2.5}
            delay={0.2}
          />
        </Code>

        <DogCarousel />
      </div>
    </section>
  );
}

