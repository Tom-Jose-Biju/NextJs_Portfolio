'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaChevronDown, FaGithub, FaLinkedin } from 'react-icons/fa'

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    // Initial dimensions
    updateDimensions()

    // Update dimensions on resize
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about')
    aboutSection?.scrollIntoView({ behavior: 'smooth' })
  }

  // Create fireflies effect
  useEffect(() => {
    const container = containerRef.current
    if (!container || !dimensions.width) return

    const createFirefly = () => {
      const firefly = document.createElement('div')
      firefly.className = 'firefly'
      
      const startX = Math.random() * dimensions.width
      const startY = Math.random() * dimensions.height
      
      firefly.style.left = `${startX}px`
      firefly.style.top = `${startY}px`
      
      // Random movement
      firefly.style.setProperty('--move-x', `${Math.random() * 100 - 50}px`)
      firefly.style.setProperty('--move-y', `${Math.random() * 100 - 50}px`)
      firefly.style.animationDuration = `${Math.random() * 10 + 5}s`
      firefly.style.animationDelay = `${Math.random() * 5}s`
      
      container.appendChild(firefly)
      
      setTimeout(() => {
        firefly.remove()
      }, 15000)
    }

    const interval = setInterval(createFirefly, 500)
    return () => clearInterval(interval)
  }, [dimensions])

  return (
    <motion.div 
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ opacity }}
    >
      {/* Mystical Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--mystic-darker)] via-[var(--mystic-dark)] to-[var(--mystic-darker)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--mystic-glow)_0%,_transparent_50%)] opacity-60" />
        
        {/* Rotating Glow Effect */}
        <div className="absolute inset-0 rotating-glow">
          <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--mystic-accent)_0%,_transparent_70%)] opacity-[0.03]" />
        </div>

        <div className="fog" />
        
        {/* Animated Stars */}
        {[...Array(5)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute w-1 h-1 bg-white floating-star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}

        {/* Animated background patterns */}
        <div className="noise-texture shimmer-effect" />
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--mystic-accent)] to-transparent opacity-[0.015]"
              style={{
                transform: `translateY(${i * 33.33}%)`,
                animation: `floatingGradient ${15 + i * 5}s infinite linear`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating Elements with Enhanced Animation */}
      {dimensions.width > 0 && [...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[2px] h-[2px] bg-[var(--mystic-accent)]"
          style={{
            filter: 'blur(1px)',
            boxShadow: '0 0 3px var(--mystic-accent)',
          }}
          initial={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
            scale: Math.random() * 0.3 + 0.2,
            opacity: Math.random() * 0.3 + 0.1
          }}
          animate={{
            x: [null, Math.random() * dimensions.width],
            y: [null, Math.random() * dimensions.height],
            opacity: [0.1, 0.4, 0.1],
            scale: [null, Math.random() * 0.4 + 0.3]
          }}
          transition={{
            duration: Math.random() * 25 + 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}

      {/* Content with Enhanced Animations */}
      <motion.div 
        className="relative z-10 text-center px-4"
        style={{ y }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.p
            className="text-[var(--mystic-accent)] mb-4 tracking-wider shimmer-effect"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            WELCOME TO MY DIGITAL SANCTUM
          </motion.p>

          <motion.h1 
            className="text-6xl sm:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Crafting Digital
            <br />
            <motion.span 
              className="bg-gradient-to-r from-[var(--mystic-accent)] via-[var(--mystic-secondary)] to-[var(--mystic-tertiary)] text-transparent bg-clip-text inline-block"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              Enchantments
            </motion.span>
          </motion.h1>

          <motion.p 
            className="text-xl sm:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I&apos;m <span className="text-[var(--mystic-accent)]">Tom Jose Biju</span>, a Full Stack Developer 
            weaving modern web solutions through code and creativity. Specializing in 
            crafting immersive digital experiences that bridge imagination with technology.
          </motion.p>

          <motion.div
            className="flex items-center justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a 
              href="/resume_TomJoseBiju.pdf" 
              className="mystic-button"
              download
            >
              Unveil My Journey
            </a>
            <a 
              href="https://github.com/Tom-Jose-Biju" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-gray-400 hover:text-[var(--mystic-accent)] transition-colors"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a 
              href="https://www.linkedin.com/in/tom-jose-biju" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-gray-400 hover:text-[var(--mystic-accent)] transition-colors"
            >
              <FaLinkedin className="text-2xl" />
            </a>
          </motion.div>

          <motion.div
            className="text-sm text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p>Currently crafting digital experiences at</p>
            <p className="text-[var(--mystic-accent)]">Amal Jyothi College of Engineering</p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        className="absolute bottom-8 text-[var(--mystic-accent)] hover:text-[var(--mystic-secondary)] transition-colors"
        onClick={scrollToNext}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        whileHover={{ y: 5 }}
      >
        <FaChevronDown className="text-3xl animate-bounce" />
      </motion.button>
    </motion.div>
  )
} 