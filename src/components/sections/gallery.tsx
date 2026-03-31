"use client"

import NextImage from "next/image"
import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { galleryImages } from "@/lib/constants"

export function Gallery() {
  return (
    <section id="gallery" className="py-32 bg-background dark:bg-black relative overflow-hidden transition-colors duration-500">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-beauty-pink/10 blur-3xl" />

      <div className="section-container">
        <ScrollReveal>
          <div className="section-header">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-tag text-accent"
            >
              Portfolio
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="section-title text-foreground dark:text-white"
            >
              Transformations That
              <br />
              <span className="text-gradient-gold">Tell Stories</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="section-description text-muted-foreground"
            >
              Explore our gallery of stunning transformations and see why clients trust LUXE with their most important looks. Each creation is a masterpiece.
            </motion.p>
          </div>
        </ScrollReveal>

        {/* Asymmetrical masonry-style gallery - Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <ScrollReveal key={image.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`group relative overflow-hidden rounded-3xl ${
                  index % 3 === 0
                    ? "h-[350px] md:h-[500px]"
                    : index % 3 === 1
                    ? "h-[350px] md:h-[400px]"
                    : "h-[350px] md:h-[450px]"
                }`}
              >
                <div className="absolute inset-0 bg-muted animate-pulse group-hover:hidden" />
                <NextImage
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={90}
                />

                {/* Elegant overlay - now with better reveal */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                >
                  <div className="absolute bottom-8 left-8 right-8 overflow-hidden">
                    <motion.div
                      initial={{ y: 50, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="space-y-2"
                    >
                      <h3 className="font-display text-2xl md:text-3xl font-semibold text-white">
                        {image.title}
                      </h3>
                      <p className="text-zinc-300 text-sm tracking-widest uppercase">
                        {image.subtitle}
                      </p>
                      <div className="w-12 h-0.5 bg-accent mt-2 transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100" />
                    </motion.div>
                  </div>

                  {/* Decorative corner element */}
                  <div className="absolute top-8 right-8">
                    <motion.div
                      className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-sm"
                      whileHover={{ scale: 1.1, rotate: 90, backgroundColor: "rgba(255,255,255,0.15)" }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Call to action */}
        <ScrollReveal delay={0.6}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block glass text-foreground dark:text-white px-12 py-5 rounded-full font-medium text-lg hover:bg-accent/20 transition-all duration-500"
            >
              View More Work
            </motion.a>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}