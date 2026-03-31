"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Instagram, Facebook, ArrowRight } from "lucide-react"

export function Footer() {
  const [email, setEmail] = useState("")
  const [newsletterStatus, setNewsletterStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })
  const [isSubscribing, setIsSubscribing] = useState(false)

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubscribing(true)
    setNewsletterStatus({ type: null, message: "" })

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const result = await response.json()

      if (response.ok) {
        setNewsletterStatus({
          type: "success",
          message: result.message || "Thank you for subscribing!",
        })
        setEmail("")
      } else {
        setNewsletterStatus({
          type: "error",
          message: result.error || "Failed to subscribe. Please try again.",
        })
      }
    } catch (error) {
      console.error("Newsletter error:", error)
      setNewsletterStatus({
        type: "error",
        message: "Failed to subscribe. Please try again later.",
      })
    } finally {
      setIsSubscribing(false)
    }
  }

  return (
    <footer className="relative bg-background pt-24 pb-12 overflow-hidden border-t border-border">
      {/* Decorative background gradients for visibility */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-beauty-pink/5 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
          <div className="space-y-8">
            <Link href="#home" className="inline-block group">
              <h3 className="font-display text-4xl font-bold tracking-tighter text-gradient-aurora group-hover:opacity-80 transition-opacity">LUXE</h3>
            </Link>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xs font-light">
              Crafting beauty through artistry and innovation. Our mission is to provide an unparalleled luxury experience for every client.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="font-display text-xl font-semibold tracking-wide text-foreground">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="#about" className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-accent scale-0 group-hover:scale-100 transition-transform" />About Our Studio</Link></li>
              <li><Link href="#services" className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-accent scale-0 group-hover:scale-100 transition-transform" />Premium Services</Link></li>
              <li><Link href="#gallery" className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-accent scale-0 group-hover:scale-100 transition-transform" />Our Transformations</Link></li>
              <li><Link href="#contact" className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-accent scale-0 group-hover:scale-100 transition-transform" />Book Appointment</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-display text-xl font-semibold tracking-wide text-foreground">Contact Us</h4>
            <ul className="space-y-5 text-muted-foreground">
              <li className="flex items-start gap-4 group">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0 mt-0.5 group-hover:bg-accent/20 transition-colors">
                  <MapPin className="w-4 h-4" />
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=123+Elegant+Avenue,+Luxury+District,+NY+10001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  123 Elegant Avenue,<br />Luxury District, NY 10001
                </a>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <a
                  href="tel:+15551234567"
                  className="hover:text-accent transition-colors"
                >
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <a
                  href="mailto:hello@luxesalon.com"
                  className="hover:text-accent transition-colors"
                >
                  hello@luxesalon.com
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-display text-xl font-semibold tracking-wide text-foreground">Newsletter</h4>
            <p className="text-muted-foreground font-light">Join our exclusive list for beauty tips and private offers.</p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div className="relative group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  disabled={isSubscribing}
                  className="w-full bg-muted/50 border border-border rounded-full py-4 pl-6 pr-12 text-sm text-foreground focus:outline-none focus:border-accent/50 transition-colors disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={isSubscribing}
                  className="absolute right-2 top-2 bottom-2 bg-foreground text-background px-4 rounded-full hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="text-xs font-bold uppercase tracking-widest">
                    {isSubscribing ? "..." : "Join"}
                  </span>
                </button>
              </div>
              {newsletterStatus.type && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-xs ${newsletterStatus.type === "success"
                    ? "text-green-600 dark:text-green-400"
                    : "text-red-600 dark:text-red-400"
                    }`}
                >
                  {newsletterStatus.message}
                </motion.p>
              )}
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground text-sm font-light tracking-wide">
            &copy; {new Date().getFullYear()} LUXE Salon. All rights reserved. Crafted with excellence.
          </p>
          <div className="flex items-center gap-8 text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
            <Link href="#" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-accent transition-colors">Terms of Service</Link>
            <div className="flex items-center gap-3">
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}