import { useState } from "react";



import { motion } from "framer-motion"

export function Particles() {
  const particleColors = [
    "rgba(202, 138, 4, 0.6)",
    "rgba(236, 72, 153, 0.6)",
    "rgba(139, 92, 246, 0.6)",
    "rgba(255, 20, 147, 0.5)",
    "rgba(0, 255, 255, 0.5)",
  ]

  const [particles] = useState(() => {
    return Array.from({ length: 30 }, (_, i) => {
      const size = Math.random() * 4 + 2;
      const color = particleColors[Math.floor(Math.random() * particleColors.length)];
      const delay = Math.random() * 5;
      const duration = Math.random() * 8 + 12;
      const left = `${Math.random() * 100}%`;
      const top = `${Math.random() * 100}%`;
      return { i, size, color, delay, duration, left, top };
    });
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map(({ i, size, color, delay, duration, left, top }) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: size,
            height: size,
            background: color,
            left,
            top,
            filter: "blur(1px)",
          }}
          initial={{ opacity: 0, y: 0, rotate: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            y: -(typeof window !== "undefined" ? window.innerHeight + 100 : 0),
            rotate: 360,
          }}
          transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}