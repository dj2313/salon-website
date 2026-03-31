"use client"

import { useState } from "react"
import Image from "next/image"
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
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: result.message || "Thank you for your request! We'll contact you soon.",
        })
        setFormData({ name: "", email: "", phone: "", service: "", message: "" })
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Failed to submit form. Please try again.",
        })
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus({
        type: "error",
        message: "Failed to submit form. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
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
                  <a href="https://www.google.com/maps/search/?api=1&query=123+Elegant+Avenue,+Downtown+District,+NY+10001" target="_blank" rel="noopener noreferrer">
                    <div>
                      <h4 className="font-medium text-foreground dark:text-white mb-2">Location</h4>
                      <p className="text-muted-foreground">123 Elegant Avenue</p>
                      <p className="text-muted-foreground">Downtown District, NY 10001</p>
                    </div>
                  </a>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-beauty-pink flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground dark:text-white mb-2">Phone</h4>
                    <a href="tel:+15551234567" className="text-muted-foreground hover:text-accent transition-colors">(555) 123-4567</a>
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
                    <h4 className="font-medium text-foreground dark:text-white mb-2">Email</h4>
                    <a href="mailto:hello@luxesalon.com" className="text-muted-foreground hover:text-accent transition-colors">hello@luxesalon.com</a>
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
                    <h4 className="font-medium text-foreground dark:text-white mb-2">Hours</h4>
                    <p className="text-muted-foreground">Mon - Fri: 9am - 7pm</p>
                    <p className="text-muted-foreground">Saturday: 9am - 6pm</p>
                    <p className="text-muted-foreground">Sunday: 10am - 5pm</p>
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
                <h4 className="font-medium text-foreground dark:text-white mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <motion.a
                    href="https://instagram.com/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent/20 flex items-center justify-center transition-colors"
                  >
                    <Image src="/images/Instagram_black.svg" alt="Instagram" width={24} height={24} className="text-zinc-400 hover:text-white" />
                  </motion.a>

                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent/20 flex items-center justify-center transition-colors"
                  >
                    <span className="text-xs text-zinc-400 hover:text-white">F</span>
                  </motion.a>

                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent/20 flex items-center justify-center transition-colors"
                  >
                    <span className="text-xs text-zinc-400 hover:text-white">P</span>
                  </motion.a>
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
              {/* Status Messages */}
              {submitStatus.type && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-2xl ${submitStatus.type === "success"
                      ? "bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400"
                      : "bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400"
                    }`}
                >
                  {submitStatus.message}
                </motion.div>
              )}
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
                  <label htmlFor="phone" className="block text-sm font-medium text-muted-foreground">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-muted/50 border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all dark:bg-white/5 dark:border-white/10 dark:text-white"
                    placeholder="(555) 123-4567"
                  />
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label htmlFor="service" className="block text-sm font-medium text-muted-foreground">
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
                disabled={isSubmitting}
                className="group w-full bg-gradient-to-r from-accent to-beauty-pink text-white py-5 rounded-2xl font-medium text-lg flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(202,138,4,0.5)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    Request Appointment
                  </>
                )}
              </motion.button>
            </motion.form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}