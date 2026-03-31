"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export function Footer() {
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
            <div className="flex items-center gap-4">
              {['Instagram', 'Facebook', 'Twitter'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-all duration-300"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-current rounded-sm opacity-20" />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-display text-xl font-semibold tracking-wide">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="#about" className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-accent scale-0 group-hover:scale-100 transition-transform" />About Our Studio</Link></li>
              <li><Link href="#services" className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-accent scale-0 group-hover:scale-100 transition-transform" />Premium Services</Link></li>
              <li><Link href="#gallery" className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-accent scale-0 group-hover:scale-100 transition-transform" />Our Transformations</Link></li>
              <li><Link href="#contact" className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-accent scale-0 group-hover:scale-100 transition-transform" />Book Appointment</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-display text-xl font-semibold tracking-wide">Contact Us</h4>
            <ul className="space-y-5 text-muted-foreground">
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0 mt-0.5">
                  <span className="text-[10px]">📍</span>
                </div>
                <span>123 Elegant Avenue,<br />Luxury District, NY 10001</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <span className="text-[10px]">📞</span>
                </div>
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <span className="text-[10px]">✉️</span>
                </div>
                <span>hello@luxesalon.com</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-display text-xl font-semibold tracking-wide">Newsletter</h4>
            <p className="text-muted-foreground font-light">Join our exclusive list for beauty tips and private offers.</p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-muted/50 border border-border rounded-full py-4 pl-6 pr-12 text-sm focus:outline-none focus:border-accent/50 transition-colors"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-foreground text-background px-4 rounded-full hover:opacity-90 transition-opacity">
                <span className="text-xs font-bold uppercase tracking-widest">Join</span>
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground text-sm font-light tracking-wide">
            &copy; {new Date().getFullYear()} LUXE Salon. All rights reserved. Crafted with excellence.
          </p>
          <div className="flex items-center gap-8 text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
            <Link href="#" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}