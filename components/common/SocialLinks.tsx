'use client'

import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

const socialLinks = [
  {
    href: 'www.linkedin.com/in/tom-jose-biju',
    icon: FaLinkedin,
    label: 'LinkedIn',
    color: '#0077b5'
  },
  {
    href: 'https://github.com/Tom-Jose-Biju',
    icon: FaGithub,
    label: 'GitHub',
    color: '#333'
  },
  {
    href: 'https://www.instagram.com/__.t_.o._m._/profilecard/?igsh=dDA0Y2FhZzM0NjEw',
    icon: FaInstagram,
    label: 'Instagram',
    color: '#e4405f'
  }
]

export const SocialLinks = () => {
  return (
    <motion.div 
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 glass-card px-6 py-3 rounded-full"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <div className="flex space-x-6">
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-opacity-80 transition-colors"
            style={{ color: link.color }}
            whileHover={{ scale: 1.2 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + index * 0.1 }}
          >
            <link.icon />
          </motion.a>
        ))}
      </div>
    </motion.div>
  )
} 