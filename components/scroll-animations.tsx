"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface ScrollAnimationProps {
  children: ReactNode
  animation?: "fadeIn" | "slideInLeft" | "slideInRight" | "slideInUp" | "slideInDown" | "scaleIn" | "staggerChild"
  delay?: number
  duration?: number
  className?: string
}

export function ScrollAnimation({
  children,
  animation = "fadeIn",
  delay = 0,
  duration = 0.8,
  className = "",
}: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement
            element.style.animationDelay = `${delay}s`
            element.style.animationDuration = `${duration}s`
            element.classList.add(`animate-${animation}`)
            observer.unobserve(element)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [animation, delay, duration])

  return (
    <div ref={elementRef} className={`opacity-0 ${className}`}>
      {children}
    </div>
  )
}

interface StaggerContainerProps {
  children: ReactNode
  staggerDelay?: number
  className?: string
}

export function StaggerContainer({ children, staggerDelay = 0.1, className = "" }: StaggerContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const container = entry.target as HTMLElement
            const childElements = container.querySelectorAll(".stagger-child")

            childElements.forEach((child, index) => {
              const element = child as HTMLElement
              element.style.animationDelay = `${index * staggerDelay}s`
              element.classList.add("animate-fadeInUp")
            })

            observer.unobserve(container)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [staggerDelay])

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
}
