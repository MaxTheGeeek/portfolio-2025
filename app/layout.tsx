import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Majid Behzadi - Software Developer Portfolio",
  description:
    "Professional portfolio of Majid Behzadi, a skilled full-stack software developer specializing in JavaScript, Vue.js, React.js, and Node.js. Based in Vienna, Austria.",
  keywords:
    "Majid Behzadi, Software Developer, Full-stack Developer, JavaScript, Vue.js, React.js, Node.js, Vienna, Austria",
  authors: [{ name: "Majid Behzadi" }],
  openGraph: {
    title: "Majid Behzadi - Software Developer Portfolio",
    description:
      "Professional portfolio showcasing expertise in full-stack development with modern JavaScript frameworks",
    type: "website",
    locale: "en_US",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
