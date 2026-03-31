"use client"

import { motion, useInView, Variants } from "framer-motion"
import { useRef } from "react"

interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  duration?: number
  className?: string
}

export function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  duration = 0.8,
  className = "",
}: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const directionVariants: Variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -40 : direction === "right" ? 40 : 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // Premium easing
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={directionVariants}
      className={className}
    >
      {children}
    </motion.div>
  )
}