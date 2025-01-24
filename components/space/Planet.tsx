'use client'

import { motion } from 'framer-motion'

interface PlanetProps {
  className?: string
  size: number
  color: string
  orbitRadius: number
  orbitDuration: number
}

export const Planet = ({ className = '', size, color, orbitRadius, orbitDuration }: PlanetProps) => {
  return (
    <div 
      className={`absolute ${className}`}
      style={{
        width: orbitRadius * 2,
        height: orbitRadius * 2,
        marginLeft: -orbitRadius,
        marginTop: -orbitRadius,
      }}
    >
      <div className="orbit w-full h-full">
        <motion.div
          className="planet pulse-glow absolute"
          style={{
            width: size,
            height: size,
            backgroundColor: color,
            left: '50%',
            top: 0,
            marginLeft: -(size / 2),
          }}
          animate={{
            rotate: 360
          }}
          transition={{
            duration: orbitDuration,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    </div>
  )
} 