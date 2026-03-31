import { useState } from "react";



import { motion } from "framer-motion"

export function OrganicShapes() {
  const [orbs] = useState(() => {
    return Array.from({ length: 5 }, (_, i) => {
      const size = Math.random() * 100 + 50;
      const left = `${Math.random() * 100}%`;
      const top = `${Math.random() * 100}%`;
      const background = i % 2 === 0
        ? "linear-gradient(135deg, rgba(202, 138, 4, 0.1), rgba(236, 72, 153, 0.1))"
        : "linear-gradient(225deg, rgba(139, 92, 246, 0.1), rgba(255, 20, 147, 0.1))";
      const duration = Math.random() * 10 + 15;
      return { i, size, left, top, background, duration };
    });
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Organic blob shapes */}
      <motion.div
        className="absolute top-10 right-10 opacity-20"
        animate={{
          pathLength: [0, 1, 0],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg width="300" height="300" viewBox="0 0 300 300">
          <motion.path
            d="M150,50 C200,30 250,80 240,140 C230,200 180,230 140,220 C100,210 80,180 90,140 C100,100 120,70 150,50 Z"
            fill="url(#gradient1)"
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(202, 138, 4, 0.8)" />
              <stop offset="100%" stopColor="rgba(236, 72, 153, 0.8)" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-10 opacity-15"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg width="250" height="250" viewBox="0 0 250 250">
          <motion.circle
            cx="125"
            cy="125"
            r="100"
            fill="url(#gradient2)"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <defs>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(139, 92, 246, 0.7)" />
              <stop offset="100%" stopColor="rgba(236, 72, 153, 0.7)" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Floating orbs */}
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
            filter: "blur(30px)",
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, 30, 0],
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1],
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
