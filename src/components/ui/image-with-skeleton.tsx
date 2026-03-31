"use client"

import { useState } from "react"
import NextImage, { ImageProps } from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface ImageWithSkeletonProps extends ImageProps {
  containerClassName?: string
}

export function ImageWithSkeleton({
  src,
  alt,
  containerClassName,
  className,
  ...props
}: ImageWithSkeletonProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className={cn("relative overflow-hidden bg-muted/20", containerClassName)}>
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-10 flex items-center justify-center"
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent shimmer-anim" />
          </motion.div>
        )}
      </AnimatePresence>

      <NextImage
        src={src}
        alt={alt}
        className={cn(
          "transition-opacity duration-700",
          isLoaded ? "opacity-100" : "opacity-0",
          className
        )}
        onLoad={() => setIsLoaded(true)}
        {...props}
      />

      <style jsx global>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .shimmer-anim {
          animation: shimmer 1.5s infinite;
        }
      `}</style>
    </div>
  )
}
