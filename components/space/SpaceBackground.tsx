'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export const SpaceBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Create stars
    const container = containerRef.current
    const starCount = 200
    const stars: HTMLDivElement[] = []

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div')
      star.className = 'star'
      star.style.width = `${Math.random() * 2}px`
      star.style.height = star.style.width
      star.style.left = `${Math.random() * 100}%`
      star.style.top = `${Math.random() * 100}%`
      star.style.animationDelay = `${Math.random() * 1}s`
      stars.push(star)
      container.appendChild(star)
    }

    return () => {
      stars.forEach(star => star.remove())
    }
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden">
      <div ref={containerRef} className="absolute inset-0 z-0" />
      
      {/* Nebula effects */}
      <motion.div
        className="absolute inset-0 opacity-30 mix-blend-screen"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full nebula-gradient blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full nebula-gradient blur-3xl" />
      </motion.div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-space-dark/50 to-space-black" />
    </div>
  )
} 