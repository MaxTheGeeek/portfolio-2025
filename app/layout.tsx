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
  title: "Majid Behzadi - Creative Developer",
  description: "Portfolio of Majid Behzadi, building interactive web experiences with motion, 3D, and considered interaction design.",
  keywords: "Majid Behzadi, Creative Developer, Three.js, React.js, Node.js",
  authors: [{ name: "Majid Behzadi" }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${jetBrainsMono.variable} ${inter.variable} font-sans antialiased`}>
        <FaviconAnimator />
        {children}
      </body>
    </html>
  )
}
