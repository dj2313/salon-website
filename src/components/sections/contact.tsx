"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your request! We'll contact you soon.")
    setFormData({ name: "", email: "", phone: "", service: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="py-32 bg-background dark:bg-black relative overflow-hidden transition-colors duration-500">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-beauty-pink/10 blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="section-header">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-tag text-accent"
            >
              Get In Touch
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="section-title text-foreground dark:text-white"
            >
              Begin Your
              <br />
              <span className="text-gradient-gold">Transformation Journey</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="section-description text-muted-foreground"
            >
              Ready to experience the LUXE difference? Contact us today to schedule your appointment and let us create something beautiful together.
            </motion.p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Contact Information */}
          <ScrollReveal direction="left" className="lg:col-span-5">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-card p-8 md:p-10 h-full"
            >
              <h3 className="font-display text-3xl md:text-4xl font-semibold text-foreground dark:text-white mb-8">
                Visit Our Studio
              </h3>

              <div className="space-y-8">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-beauty-pink flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground dark:text-white mb-2">Location</h4>
                    <p className="text-muted-foreground">123 Elegant Avenue</p>
                    <p className="text-muted-foreground">Downtown District, NY 10001</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-beauty-pink flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-2">Phone</h4>
                    <p className="text-zinc-400">(555) 123-4567</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-beauty-pink flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-2">Email</h4>
                    <p className="text-zinc-400">info@luxesalon.com</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-beauty-pink flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-2">Hours</h4>
                    <p className="text-zinc-400">Mon - Fri: 9am - 7pm</p>
                    <p className="text-zinc-400">Saturday: 9am - 6pm</p>
                    <p className="text-zinc-400">Sunday: 10am - 5pm</p>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-12 pt-8 border-t border-white/10"
              >
                <h4 className="font-medium text-white mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  {["Instagram", "Facebook", "Pinterest"].map((social, index) => (
                    <motion.a
                      key={social}
                      href="#"
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent/20 flex items-center justify-center transition-colors"
                    >
                      <span className="text-xs text-zinc-400 hover:text-white">{social[0]}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal direction="right" className="lg:col-span-7">
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-muted/50 border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all dark:bg-white/5 dark:border-white/10 dark:text-white"
                    placeholder="Your name"
                  />
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-muted/50 border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all dark:bg-white/5 dark:border-white/10 dark:text-white"
                    placeholder="your@email.com"
                  />
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label htmlFor="phone" className="block text-sm font-medium text-zinc-300">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="(555) 123-4567"
                  />
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label htmlFor="service" className="block text-sm font-medium text-zinc-300">
                    Service
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-muted/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all appearance-none cursor-pointer dark:bg-white/5 dark:border-white/10 dark:text-white"
                  >
                    <option value="" className="bg-background text-muted-foreground">
                      Select a service
                    </option>
                    <option value="cuts" className="bg-background text-foreground">
                      Precision Cuts & Styling
                    </option>
                    <option value="color" className="bg-background text-foreground">
                      Color Services
                    </option>
                    <option value="treatments" className="bg-background text-foreground">
                      Hair Treatments
                    </option>
                    <option value="makeup" className="bg-background text-foreground">
                      Makeup Artistry
                    </option>
                    <option value="blowout" className="bg-background text-foreground">
                      Blowouts & Finishing
                    </option>
                    <option value="bridal" className="bg-background text-foreground">
                      Bridal & Event Styling
                    </option>
                  </select>
                </motion.div>
              </div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="space-y-2"
              >
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-6 py-4 rounded-2xl bg-muted/50 border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none dark:bg-white/5 dark:border-white/10 dark:text-white"
                  placeholder="Any special requests or questions?"
                />
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="group w-full bg-gradient-to-r from-accent to-beauty-pink text-white py-5 rounded-2xl font-medium text-lg flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(202,138,4,0.5)] transition-all"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Request Appointment
              </motion.button>
            </motion.form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}