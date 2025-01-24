'use client'

import { motion, useScroll } from 'framer-motion'
import { Navigation } from '@/components/layout/Navigation'

export const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const { scrollYProgress } = useScroll()

  return (
    <>
      <motion.div
        className="scroll-progress"
        style={{ scaleX: scrollYProgress }}
      />
      <Navigation />
      <main className="relative">
        {children}
      </main>
    </>
  )
} 