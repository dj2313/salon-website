"use client"

import NextImage from "next/image"
import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { stats } from "@/lib/constants"

export function About() {
  return (
    <section id="about" className="py-32 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-beauty-pink/5 blur-3xl" />

      <div className="section-container">
        <ScrollReveal>
          <div className="section-header">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-tag"
            >
              About LUXE
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="section-title"
            >
              Crafting Beauty Through
              <br />
              <span className="text-gradient-aurora">Artistry & Innovation</span>
            </motion.h2>
          </div>
        </ScrollReveal>

        {/* Improved Alignment - Vertical Centering */}
        <div className="asym-grid items-center mb-24">
          <ScrollReveal direction="left" className="asym-left">
            <motion.div
              whileHover={{ scale: 1.02, y: -10 }}
              className="relative h-[600px] glass-card overflow-hidden group shadow-elegant"
            >
              <NextImage
                src="/images/luxury_salon_interior.png"
                alt="LUXE Salon Interior"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
              <div className="absolute bottom-10 left-10 text-white z-20">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <p className="text-sm font-medium tracking-[0.3em] mb-3 text-accent">ELEGANCE REDEFINED</p>
                  <h4 className="text-3xl font-display font-semibold mb-2 text-white">Our Sanctuary</h4>
                  <p className="text-sm text-white/70 max-w-xs">A space designed for your ultimate comfort and transformation.</p>
                </motion.div>
              </div>
              
              {/* Floating accent element */}
              <div className="absolute top-6 right-6 z-20">
                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md">
                  <div className="w-12 h-12 rounded-full border border-accent/30 animate-spin-slow" />
                </div>
              </div>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal direction="right" className="asym-right">
            <div className="space-y-8 pt-12">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-block"
              >
                <h3 className="font-display text-4xl md:text-5xl font-semibold mb-6">
                  Our Philosophy
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-accent to-beauty-pink rounded-full" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="space-y-6"
              >
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  At LUXE, we believe beauty is an art form. Every client who walks through our doors is a canvas, and our stylists are the artists. We use only the finest eco-friendly products and cutting-edge techniques to ensure your hair looks and feels its absolute best.
                </p>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Our commitment to excellence has earned us over 50 industry awards and the loyalty of thousands of clients who trust us with their most important looks.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-6 pt-4"
              >
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-display font-bold text-accent">50+</span>
                  <span className="text-sm text-muted-foreground">Awards</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-display font-bold text-accent">14+</span>
                  <span className="text-sm text-muted-foreground">Years</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-display font-bold text-accent">15</span>
                  <span className="text-sm text-muted-foreground">Stylists</span>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>

        {/* Enhanced Stats Section */}
        <ScrollReveal>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 md:p-16"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center group cursor-default"
                >
                  <motion.div
                    className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-gradient-gold mb-3 group-hover:animate-pulse-soft"
                  >
                    {stat.value}
                  </motion.div>
                  <p className="text-muted-foreground text-sm md:text-base font-light tracking-wide">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}