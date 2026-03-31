"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Particles } from "@/components/animations/particles"
import { AuroraBackground } from "@/components/animations/aurora-bg"
import { OrganicShapes } from "@/components/animations/organic-shapes"
import { useParallax } from "@/hooks/use-parallax"

export function Hero() {
  const parallaxOffset = useParallax(-0.3)

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Multiple background layers for depth */}
      <motion.div
        style={{ y: parallaxOffset }}
        className="absolute inset-0 bg-gradient-to-br from-background via-muted/50 to-background dark:from-black dark:via-zinc-900 dark:to-zinc-950"
      />

      {/* Aurora gradient mesh background */}
      <AuroraBackground />

      {/* Organic floating shapes */}
      <OrganicShapes />

      {/* Enhanced particles animation */}
      <Particles />

      {/* Content with better spacing and typography */}
      <div className="relative z-10 section-container text-center text-foreground max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="space-y-8"
        >
          {/* Elegant tag */}
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-accent font-medium text-sm md:text-base uppercase tracking-[0.4em] mb-6"
          >
            Premium Beauty Studio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-display text-7xl md:text-8xl lg:text-[10vw] xl:text-[12vw] font-bold leading-none mb-8 tracking-tighter"
          >
            <span className="inline-block bg-gradient-to-tr from-foreground via-accent to-beauty-pink bg-clip-text text-transparent">LUXE</span>
          </motion.h1>

          {/* Subtitle with better typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-4"
          >
            <p className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-muted-foreground">
              Where Beauty Meets
            </p>
            <p className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-accent">
              Excellence
            </p>
          </motion.div>

          {/* Description with better spacing */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto text-muted-foreground/80 leading-relaxed font-light"
          >
            Experience premium hair and beauty services in an atmosphere of
            sophistication and luxury. Where artistry meets innovation.
          </motion.p>

          {/* CTA with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="pt-8"
          >
            <Link
              href="#contact"
              className="group relative inline-block overflow-hidden bg-gradient-to-r from-accent to-beauty-pink text-white px-16 py-5 rounded-full font-medium text-lg transition-all duration-500 hover:shadow-[0_0_30px_rgba(202,138,4,0.5)] hover:scale-105"
            >
              <span className="relative z-10">Book Your Experience</span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Elegant scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-3 text-muted-foreground"
        >
          <span className="text-sm font-light tracking-widest">SCROLL</span>
          <div className="w-6 h-10 border border-muted-foreground/30 rounded-full flex justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-accent rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}