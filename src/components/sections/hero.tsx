"use client"

import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import Link from "next/link"
import { useParallax } from "@/hooks/use-parallax"

const Particles = dynamic(() => import("@/components/animations/particles").then(mod => mod.Particles), { ssr: false })
const AuroraBackground = dynamic(() => import("@/components/animations/aurora-bg").then(mod => mod.AuroraBackground), { ssr: false })
const OrganicShapes = dynamic(() => import("@/components/animations/organic-shapes").then(mod => mod.OrganicShapes), { ssr: false })

export function Hero() {
  const parallaxOffset = useParallax(-0.3)

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Multiple background layers for depth */}
      <motion.div
        style={{ y: parallaxOffset, willChange: "transform" }}
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
          {/* Elegant tag / Glass Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-elegant mb-2"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-accent font-medium text-xs md:text-sm uppercase tracking-[0.4em]">Premium Beauty Studio</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-display text-7xl md:text-8xl lg:text-[10vw] xl:text-[12vw] font-bold leading-none mb-4 tracking-tighter"
          >
            <span className="inline-block bg-gradient-to-tr from-foreground via-accent to-beauty-pink bg-clip-text text-transparent drop-shadow-sm">LUXE</span>
          </motion.h1>

          {/* Subtitle with better typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8"
          >
            <p className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground/90 font-display">
              Where Beauty Meets <span className="text-gradient-gold italic pr-2">Excellence</span>
            </p>
          </motion.div>

          {/* Description with better spacing */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto text-muted-foreground/90 leading-relaxed font-light mb-12"
          >
            Experience premium hair and beauty services in an atmosphere of
            sophistication and luxury. Where artistry meets innovation.
          </motion.p>

          {/* CTA with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-4"
          >
            <Link
              href="#contact"
              className="btn-gold-luxe px-12 py-4 rounded-full font-medium text-lg min-w-[240px]"
            >
              Book Your Experience
            </Link>
            <Link
              href="#services"
              className="group flex items-center gap-3 text-foreground/80 hover:text-accent font-medium text-sm md:text-base uppercase tracking-[0.2em] transition-colors duration-300"
            >
              Explore Services
              <motion.span
                className="inline-block"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                →
              </motion.span>
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