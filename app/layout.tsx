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
  title: "Max Behzadi — Senior Full-Stack Developer",
  description: "Senior Full-Stack Developer based in Vienna. TypeScript, React, NestJS, Next.js, C# and ASP.NET Core.",
  keywords: "Max Behzadi, Senior Full-Stack Developer, TypeScript, React, NestJS, Next.js, C#, ASP.NET Core",
  authors: [{ name: "Max Behzadi" }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark scroll-smooth ${spaceGrotesk.variable} ${jetBrainsMono.variable} ${inter.variable}`}>
      <body className="antialiased">
        <FaviconAnimator />
        {children}
      </body>
    </html>
  )
}
