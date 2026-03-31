"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { testimonials } from "@/lib/constants"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-32 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden transition-colors duration-500">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-beauty-pink/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="section-container">
        <ScrollReveal>
          <div className="section-header">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-tag"
            >
              Testimonials
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="section-title"
            >
              Voices of Our
              <br />
              <span className="text-gradient-aurora">Cherished Clients</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="section-description"
            >
              Don&apos;t just take our word for it. Here&apos;s what our valued clients have to say about their transformative LUXE experience.
            </motion.p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="max-w-5xl mx-auto">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="relative"
            >
              <div className="glass-card p-12 md:p-16 lg:p-20 relative overflow-hidden">
                {/* Decorative quote icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="absolute top-8 left-8 opacity-10"
                >
                  <Quote className="w-32 h-32 text-accent" />
                </motion.div>

                <div className="relative z-10">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{ duration: 0.5 }}
                      className="text-center"
                    >
                      <motion.div
                        className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-accent to-beauty-pink mb-8 shadow-gold"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Quote className="w-10 h-10 text-white" />
                      </motion.div>

                      <motion.blockquote
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-2xl md:text-3xl lg:text-4xl font-light text-foreground mb-10 leading-relaxed relative"
                      >
                        <span className="text-6xl text-accent/20 absolute -top-4 -left-4 font-serif">&quot;</span>
                        {testimonials[currentIndex].text}
                        <span className="text-6xl text-accent/20 absolute -bottom-8 -right-4 font-serif">&quot;</span>
                      </motion.blockquote>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-2"
                      >
                        <p className="font-display text-2xl md:text-3xl font-semibold text-gradient-gold">
                          {testimonials[currentIndex].author}
                        </p>
                        <p className="text-muted-foreground tracking-wide">
                          {testimonials[currentIndex].role}
                        </p>
                      </motion.div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* Enhanced navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-center gap-6 mt-12"
            >
              <motion.button
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevTestimonial}
                className="w-14 h-14 rounded-full bg-card shadow-elegant hover:shadow-lg flex items-center justify-center group transition-all duration-300 border border-border"
              >
                <ChevronLeft className="w-6 h-6 text-accent group-hover:text-beauty-pink transition-colors" />
              </motion.button>

              <div className="flex gap-3">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`relative h-2 rounded-full transition-all duration-500 ${
                      index === currentIndex
                        ? "w-12 bg-gradient-to-r from-accent to-beauty-pink"
                        : "w-2 bg-muted hover:bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextTestimonial}
                className="w-14 h-14 rounded-full bg-card shadow-elegant hover:shadow-lg flex items-center justify-center group transition-all duration-300 border border-border"
              >
                <ChevronRight className="w-6 h-6 text-accent group-hover:text-beauty-pink transition-colors" />
              </motion.button>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}