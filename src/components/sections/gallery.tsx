"use client"

import { motion } from "framer-motion"
import { ImageWithSkeleton } from "@/components/ui/image-with-skeleton"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { galleryImages } from "@/lib/constants"

export function Gallery() {
  return (
    <section id="gallery" className="py-32 bg-background dark:bg-black relative overflow-hidden transition-colors duration-500">
      {/* Background decorative elements with reduced complexity for performance */}
      <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-accent/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-beauty-pink/5 blur-[120px] pointer-events-none" />

      <div className="section-container">
        <ScrollReveal>
          <div className="section-header">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
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
              transition={{ delay: 0.1, duration: 0.8 }}
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
              transition={{ delay: 0.2, duration: 0.8 }}
              className="section-description text-muted-foreground"
            >
              Explore our gallery of stunning transformations. Each creation is a masterpiece designed to highlight your natural radiance.
            </motion.p>
          </div>
        </ScrollReveal>

        {/* Asymmetrical masonry-style gallery - Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <ScrollReveal key={image.id} delay={index * 0.05}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`group relative overflow-hidden rounded-3xl cursor-pointer ${index % 3 === 0
                    ? "h-[350px] md:h-[500px]"
                    : index % 3 === 1
                      ? "h-[350px] md:h-[400px]"
                      : "h-[350px] md:h-[450px]"
                  }`}
              >
                <ImageWithSkeleton
                  src={image.src}
                  alt={image.alt}
                  fill
                  containerClassName="h-full w-full"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={80} // Optimized quality for performance
                  loading="lazy"
                />

                {/* Elegant overlay - more performant transition */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-1"
                  >
                    <h3 className="font-display text-2xl font-semibold text-white">
                      {image.title}
                    </h3>
                    <p className="text-accent text-xs tracking-[0.2em] uppercase font-medium">
                      {image.subtitle}
                    </p>
                  </motion.div>
                </div>

                {/* Corner detail */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-white/10 backdrop-blur-md">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
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