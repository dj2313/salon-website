"use client"

import { motion } from "framer-motion"

export function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Primary gradient mesh - simplified for performance */}
      <motion.div
        className="absolute -inset-[10%] opacity-50"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, rgba(202, 138, 4, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 20%, rgba(139, 92, 246, 0.08) 0%, transparent 50%)
          `,
          willChange: "transform",
        }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
      />

      {/* Organic floating shapes - optimized blurs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          opacity: [0.05, 0.08, 0.05],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background: "rgba(202, 138, 4, 0.1)",
          filter: "blur(40px)",
          willChange: "transform, opacity",
        }}
      />

      <motion.div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background: "rgba(236, 72, 153, 0.08)",
          filter: "blur(35px)",
          willChange: "transform",
        }}
      />
    </div>
  )
}