"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { services } from "@/lib/constants"
import { Scissors, Palette, Sparkles, Wand2, Wind, Heart, ArrowRight, Leaf, Star, Lock, Coffee } from "lucide-react"

const iconMap: Record<string, any> = {
  "✂️": Scissors,
  "🎨": Palette,
  "💆‍♀️": Sparkles,
  "💄": Wand2,
  "💨": Wind,
  "💍": Heart,
}

export function Services() {
  const { scrollYProgress } = useScroll();
  const xTranslate = useTransform(scrollYProgress, [0.1, 0.5], [200, -400]);

  return (
    <section id="services" className="py-32 md:py-48 bg-background dark:bg-black relative overflow-hidden transition-colors duration-1000">
      {/* Immersive background text */}
      <motion.div
        style={{ x: xTranslate, opacity: 0.03 }}
        className="absolute top-1/4 left-0 text-[12rem] md:text-[20rem] font-bold text-foreground dark:text-white whitespace-nowrap pointer-events-none select-none tracking-[0.1em] font-display"
      >
        CURATED EXCELLENCE ARTISTRY
      </motion.div>

      {/* Modern background accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] mix-blend-multiply dark:mix-blend-screen pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-beauty-pink/5 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-overlay pointer-events-none" />

      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="section-header !mb-32 text-left md:text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-accent/5 border border-accent/20 backdrop-blur-sm self-start md:self-center"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-accent font-medium text-[10px] uppercase tracking-[0.4em]">The Luxe Experience</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="section-title !text-left md:!text-center lg:text-7xl xl:text-8xl text-foreground dark:text-white"
            >
              Our Masterful
              <br />
              <span className="text-gradient-aurora italic font-bold">Artistry & Care</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1 }}
              className="section-description !text-left md:!text-center !text-muted-foreground/80 max-w-2xl pt-8 leading-relaxed"
            >
              Discover a sanctuary where innovation meets relaxation. Our bespoke services are designed to enhance your natural beauty while providing a moment of profound tranquility.
            </motion.p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as string] || Scissors;
            return (
              <ScrollReveal key={service.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="group relative h-full flex flex-col p-10 rounded-[3rem] bg-white/[0.02] dark:bg-zinc-900/40 border border-white/10 dark:border-white/[0.05] hover:border-accent/40 hover:bg-white/[0.05] dark:hover:bg-zinc-800/60 transition-all duration-700 backdrop-blur-3xl overflow-hidden shadow-elegant"
                >
                  {/* Subtle Gradient Glow Background */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                  {/* Category & Icon */}
                  <div className="flex justify-between items-start mb-12 relative z-10">
                    <div className="p-4 rounded-2xl bg-accent/5 border border-accent/10 group-hover:bg-accent/10 group-hover:border-accent/30 transition-all duration-500 group-hover:animate-float">
                      <Icon aria-hidden="true" className="w-7 h-7 text-accent group-hover:scale-110 transition-transform duration-500" strokeWidth={1.2} />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-foreground dark:text-white/70 font-semibold group-hover:text-accent group-hover:tracking-[0.35em] transition-all duration-500">
                      {service.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="space-y-4 relative z-10">
                    <h3 className="font-display text-4xl font-semibold text-foreground dark:text-white leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground font-light leading-relaxed text-lg line-clamp-3 group-hover:text-foreground/70 transition-colors duration-500">
                      {service.description}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="mt-auto pt-12 flex items-end justify-between relative z-10">
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase tracking-widest text-muted-foreground/70 font-bold">Investment</span>
                      <p className="font-display text-3xl font-bold tracking-tight text-accent">
                        {service.price}
                      </p>
                    </div>

                    <button
                      className="group/btn flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-foreground dark:text-white hover:text-accent transition-colors"
                    >
                      <span className="relative">
                        Explore
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent group-hover/btn:w-full transition-all duration-500" />
                      </span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  {/* Decorative corner accent */}
                  <div className="absolute top-4 right-4 w-12 h-12 border-t border-r border-accent/0 group-hover:border-accent/20 rounded-tr-2xl transition-all duration-700" />
                </motion.div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Improved Feature Highlights Grid */}
        <ScrollReveal delay={0.3}>
          <div className="mt-32 md:mt-48 relative p-12 md:p-16 rounded-[4rem] overflow-hidden border border-white/10 dark:border-white/[0.08] shadow-2xl dark:bg-white/[0.03]">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-white/[0.02] dark:bg-white/[0.02] backdrop-blur-3xl" />

            <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
              {[
                { label: "Eco-Friendly Products", icon: Leaf, value: "Sustainable Philosophy" },
                { label: "Master Stylists", icon: Star, value: "Decade of Experience" },
                { label: "Private Appointments", icon: Lock, value: "Absolute Discretion" },
                { label: "Signature Drinks", icon: Coffee, value: "Relaxation Rituals" },
              ].map((feature, i) => (
                <div key={i} className="flex flex-col items-center md:items-start text-center md:text-left space-y-5 group cursor-default">
                  <div className="p-4 rounded-full bg-accent/5 border border-accent/10 group-hover:bg-accent/10 group-hover:scale-110 transition-all duration-500">
                    <feature.icon className="w-8 h-8 text-accent/80" strokeWidth={1} />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent">
                      {feature.label}
                    </h4>
                    <p className="text-muted-foreground text-xs font-light">
                      {feature.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}