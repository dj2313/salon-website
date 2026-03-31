"use client"

import dynamic from "next/dynamic"
import { Navbar } from "@/components/sections/navbar"
import { Hero } from "@/components/sections/hero"

// Lazy load sections for better performance and "no lag"
const About = dynamic(() => import("@/components/sections/about").then(mod => mod.About), { ssr: true })
const Services = dynamic(() => import("@/components/sections/services").then(mod => mod.Services), { ssr: true })
const Gallery = dynamic(() => import("@/components/sections/gallery").then(mod => mod.Gallery), { ssr: true })
const Testimonials = dynamic(() => import("@/components/sections/testimonials").then(mod => mod.Testimonials), { ssr: true })
const Contact = dynamic(() => import("@/components/sections/contact").then(mod => mod.Contact), { ssr: true })
const Footer = dynamic(() => import("@/components/sections/footer").then(mod => mod.Footer), { ssr: true })

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
