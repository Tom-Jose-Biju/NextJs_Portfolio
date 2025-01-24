'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, AnimatePresence } from 'framer-motion'
import { FaGem, FaScroll, FaHatWizard, FaBookDead, FaHandSparkles } from 'react-icons/fa'
import Link from 'next/link'

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const { scrollY } = useScroll()

  const navItems = [
    { id: 'home', label: 'Realm', icon: <FaGem className="text-lg" /> },
    { id: 'about', label: 'Story', icon: <FaScroll className="text-lg" /> },
    { id: 'education', label: 'Wisdom', icon: <FaHatWizard className="text-lg" /> },
    { id: 'projects', label: 'Artifacts', icon: <FaBookDead className="text-lg" /> },
    { id: 'contact', label: 'Summon', icon: <FaHandSparkles className="text-lg" /> }
  ]

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

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + window.innerHeight / 3

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop
          const sectionBottom = sectionTop + section.offsetHeight

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(navItems[index].id)
          }
        }
      })

      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-4 py-3"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className={`max-w-4xl mx-auto rounded-full backdrop-blur-lg ${
          isScrolled ? 'bg-[var(--mystic-dark)]/80' : 'bg-transparent'
        } transition-all duration-500 border border-[var(--mystic-accent)]/10`}
        animate={{
          boxShadow: isScrolled
            ? '0 0 20px var(--mystic-glow), inset 0 0 20px var(--mystic-glow)'
            : '0 0 0 transparent'
        }}
      >
        <div className="flex justify-center items-center p-2">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-4 py-2 mx-1 rounded-full text-sm font-medium transition-all duration-300 ${
                activeSection === item.id
                  ? 'text-[var(--mystic-accent)]'
                  : 'text-gray-400 hover:text-[var(--mystic-accent)]'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <span className="text-lg">{item.icon}</span>
                <span className="hidden sm:inline">{item.label}</span>
              </span>
              
              {activeSection === item.id && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-[var(--mystic-glow)] border border-[var(--mystic-accent)]/20"
                  layoutId="activeSection"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30
                  }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {dimensions.width > 0 && [...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-[var(--mystic-accent)]"
            style={{
              filter: 'blur(1px)',
              boxShadow: '0 0 4px var(--mystic-accent)'
            }}
            initial={{
              x: Math.random() * dimensions.width,
              y: -5,
              opacity: 0
            }}
            animate={{
              y: dimensions.height + 5,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
    </motion.nav>
  )
} 