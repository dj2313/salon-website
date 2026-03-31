import { useState } from "react";
import { motion } from "framer-motion"

export function OrganicShapes() {
  const [orbs] = useState(() => {
    return Array.from({ length: 3 }, (_, i) => { // Reduced to 3 for performance
      const size = Math.random() * 80 + 40;
      const left = `${Math.random() * 100}%`;
      const top = `${Math.random() * 100}%`;
      const background = i % 2 === 0
        ? "rgba(202, 138, 4, 0.1)"
        : "rgba(236, 72, 153, 0.1)";
      const duration = Math.random() * 10 + 20;
      return { i, size, left, top, background, duration };
    });
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating orbs - optimized */}
      {orbs.map(({ i, size, left, top, background, duration }) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: size,
            height: size,
            left,
            top,
            background,
            filter: "blur(20px)",
            willChange: "transform, opacity",
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, 30, 0],
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2,
          }}
        />
      ))}
    </div>
  );
}
