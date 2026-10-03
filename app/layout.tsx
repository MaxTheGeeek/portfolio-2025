import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, JetBrains_Mono, Inter } from "next/font/google"
import { FaviconAnimator } from "@/components/three/FaviconAnimator"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--display",
})
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--mono",
})
const inter = Inter({
  subsets: ["latin"],
  variable: "--body",
})

export const metadata: Metadata = {
  title: "Max Behzadi · Full-Stack Engineer | Applied AI Engineer",
  description: "Full-Stack Engineer | Applied AI Engineer based in Vienna, Austria. Specializing in autonomous agent pipelines, enterprise conversational voice intelligence, and high-concurrency desktop & cloud architectures.",
  keywords: "Max Behzadi, Full-Stack Engineer, Applied AI Engineer, Systems Architect, Vienna, Austria, Model Context Protocol, MCP, .NET, Next.js, AI Voice, Claude Code",
  authors: [{ name: "Max Behzadi" }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark scroll-smooth ${spaceGrotesk.variable} ${jetBrainsMono.variable} ${inter.variable}`}>
      <body className="antialiased bg-[#0c0e12] text-[#f3f4f6] selection:bg-[#d99b53]/30 selection:text-white">
        <FaviconAnimator />
        {children}
      </body>
    </html>
  )
}
