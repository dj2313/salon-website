"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/ui/theme-toggle"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#gallery", label: "Gallery" },
    { href: "#testimonials", label: "Reviews" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[1200px] z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "py-3 px-6 glass-card shadow-xl border-accent/20"
          : "py-4 px-8 bg-transparent border-transparent"
      } rounded-full border`}
    >
      <div className="flex items-center justify-between">
        <Link href="#home" className="flex items-center gap-2 group cursor-pointer">
          <motion.div 
            className="w-8 h-8 rounded-full bg-gradient-to-tr from-accent to-beauty-pink flex items-center justify-center text-white font-display font-bold text-lg"
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.6 }}
          >
            L
          </motion.div>
          <span className="font-display text-2xl font-bold tracking-tighter text-foreground group-hover:text-accent transition-colors">
            LUXE
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-2">
          <ul className="flex items-center bg-accent/5 px-2 py-1 rounded-full border border-accent/10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 rounded-full hover:bg-accent/10 group overflow-hidden"
                >
                  <span className="relative z-10">{link.label}</span>
                  <motion.span 
                    className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity"
                    layoutId="nav-hover"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <ThemeToggle />
          </div>
          
          <Link 
            href="#contact" 
            className="hidden md:flex h-10 items-center justify-center bg-foreground text-background px-6 rounded-full font-semibold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity cursor-pointer shadow-lg shadow-foreground/10"
          >
            Book Now
          </Link>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <div className="sm:hidden">
              <ThemeToggle />
            </div>
            <button
              className="p-2 text-foreground hover:bg-accent/10 rounded-full transition-colors cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-full left-0 right-0 mt-4 p-6 glass-card rounded-3xl border border-accent/20 shadow-2xl lg:hidden"
          >
            <ul className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/10 rounded-xl transition-all duration-300 cursor-pointer"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-accent/10">
              <Link 
                href="#contact" 
                className="flex h-12 items-center justify-center bg-foreground text-background px-4 rounded-xl font-bold uppercase tracking-widest text-sm cursor-pointer shadow-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}