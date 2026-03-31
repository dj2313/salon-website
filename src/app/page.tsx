"use client"

import dynamic from "next/dynamic"
import { Navbar } from "@/components/sections/navbar"
import { Hero } from "@/components/sections/hero"

// Lazy load sections with loading states for "no lag" experience
const LoadingSection = () => <div className="h-[200px] w-full flex items-center justify-center bg-background/50 animate-pulse rounded-3xl m-8" />

const About = dynamic(() => import("@/components/sections/about").then(mod => mod.About), { 
  ssr: true,
  loading: () => <LoadingSection />
})
const Services = dynamic(() => import("@/components/sections/services").then(mod => mod.Services), { 
  ssr: true,
  loading: () => <LoadingSection />
})
const Gallery = dynamic(() => import("@/components/sections/gallery").then(mod => mod.Gallery), { 
  ssr: true,
  loading: () => <LoadingSection />
})
const Testimonials = dynamic(() => import("@/components/sections/testimonials").then(mod => mod.Testimonials), { 
  ssr: true,
  loading: () => <LoadingSection />
})
const Contact = dynamic(() => import("@/components/sections/contact").then(mod => mod.Contact), { 
  ssr: true,
  loading: () => <LoadingSection />
})
const Footer = dynamic(() => import("@/components/sections/footer").then(mod => mod.Footer), { 
  ssr: true,
  loading: () => <LoadingSection />
})

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
