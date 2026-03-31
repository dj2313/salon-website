"use client"

import { motion } from "framer-motion"

export function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Primary gradient mesh */}
      <motion.div
        className="absolute -inset-[10%] opacity-70"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 120,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          background: `
            radial-gradient(circle at 20% 50%, rgba(202, 138, 4, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 40% 20%, rgba(139, 92, 246, 0.12) 0%, transparent 50%),
            radial-gradient(circle at 90% 10%, rgba(236, 72, 153, 0.1) 0%, transparent 40%)
          `,
        }}
      />

      {/* Secondary gradient layer */}
      <motion.div
        className="absolute inset-0 opacity-50"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: `
            radial-gradient(ellipse 800px 600px at 30% 30%, rgba(202, 138, 4, 0.1) 0%, transparent 60%),
            radial-gradient(ellipse 600px 800px at 70% 70%, rgba(236, 72, 153, 0.1) 0%, transparent 60%)
          `,
        }}
      />

      {/* Organic floating shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: "linear-gradient(135deg, rgba(202, 138, 4, 0.1), rgba(236, 72, 153, 0.1))",
          filter: "blur(60px)",
        }}
      />

      <motion.div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full"
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: "linear-gradient(45deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))",
          filter: "blur(50px)",
        }}
      />

      <motion.div
        className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full"
        animate={{
          rotate: [0, 180, 360],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          background: "linear-gradient(225deg, rgba(255, 20, 147, 0.08), rgba(202, 138, 4, 0.08))",
          filter: "blur(40px)",
        }}
      />
    </div>
  )
}