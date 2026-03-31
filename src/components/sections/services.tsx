"use client"

import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { services } from "@/lib/constants"

export function Services() {
  return (
    <section id="services" className="py-32 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-beauty-pink/5 rounded-full blur-3xl" />

      <div className="section-container">
        <ScrollReveal>
          <div className="section-header">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-tag"
            >
              Our Services
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="section-title"
            >
              Tailored Experiences for
              <br />
              <span className="text-gradient-aurora">Every Beauty Need</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="section-description"
            >
              From precision cuts to stunning color transformations, our comprehensive range of services is designed to enhance your natural beauty with artistry and care.
            </motion.p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -15, scale: 1.02 }}
                className="card-modern group cursor-pointer relative overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-accent/10 to-beauty-pink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />

                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative z-10"
                >
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent to-beauty-pink flex items-center justify-center mb-8 shadow-gold group-hover:shadow-lg transition-all duration-500">
                    <span className="text-3xl">✨</span>
                  </div>
                </motion.div>

                <div className="relative z-10">
                  <h3 className="font-display text-2xl md:text-3xl font-semibold mb-4 group-hover:text-gradient-gold transition-all duration-500">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <p className="font-semibold text-xl text-accent">{service.price}</p>
                    <motion.div
                      className="w-10 h-10 rounded-full bg-muted flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-accent group-hover:to-beauty-pink transition-all duration-500 dark:bg-zinc-800"
                      whileHover={{ x: 5 }}
                    >
                      <svg
                        className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.div>
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
              className="inline-block btn-gradient-gold text-white px-12 py-5 rounded-full font-medium text-lg shadow-elegant"
            >
              Book Your Service
            </motion.a>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}