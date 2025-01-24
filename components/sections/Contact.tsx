'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'
import { GiSpellBook } from 'react-icons/gi'

export const ContactSection = () => {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <motion.div 
      ref={containerRef}
      className="min-h-screen py-20 px-4 relative overflow-hidden bg-[#0a0a0f]"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Subtle Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.05),rgba(0,0,0,0))]" />
      
      <div className="max-w-6xl mx-auto relative">
        {/* Minimal Header */}
        <div className="text-center space-y-4 relative mb-20">
          <motion.div
            className="inline-block"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <GiSpellBook className="text-4xl mx-auto text-[var(--mystic-accent)] mb-4 opacity-80" />
          </motion.div>
          <motion.h2 
            className="text-3xl font-light tracking-wide text-[var(--mystic-accent)]"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            Contact Portal
          </motion.h2>
          <motion.div 
            className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-[var(--mystic-accent)] to-transparent opacity-50"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.p
            className="text-gray-400 max-w-lg mx-auto text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Feel free to reach out for collaborations or inquiries
          </motion.p>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info Card */}
          <motion.div
            className="bg-[#0d0d12] border border-[#1a1a24] rounded-lg p-8 relative overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-xl font-light tracking-wide text-[var(--mystic-accent)] mb-6">
              Get in Touch
            </h3>

            {/* Contact Details */}
            <div className="space-y-6">
              <motion.a
                href="mailto:tomjosebiju27@gmail.com"
                className="flex items-start gap-4 text-gray-400 hover:text-[var(--mystic-accent)] transition-colors group"
                whileHover={{ x: 4 }}
              >
                <div className="p-2 rounded-lg bg-[#12121a] border border-[#1a1a24] group-hover:border-[var(--mystic-accent)] transition-colors">
                  <FaEnvelope className="text-lg" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-sm">tomjosebiju27@gmail.com</p>
                </div>
              </motion.a>

              <motion.a
                href="tel:+918304076224"
                className="flex items-start gap-4 text-gray-400 hover:text-[var(--mystic-accent)] transition-colors group"
                whileHover={{ x: 4 }}
              >
                <div className="p-2 rounded-lg bg-[#12121a] border border-[#1a1a24] group-hover:border-[var(--mystic-accent)] transition-colors">
                  <FaPhone className="text-lg" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="text-sm">+91 8304076224</p>
                </div>
              </motion.a>

              <motion.div
                className="flex items-start gap-4 text-gray-400 group"
                whileHover={{ x: 4 }}
              >
                <div className="p-2 rounded-lg bg-[#12121a] border border-[#1a1a24] group-hover:border-[var(--mystic-accent)] transition-colors">
                  <FaMapMarkerAlt className="text-lg" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-sm">Karukachal, Kerala, India</p>
                </div>
              </motion.div>

              <motion.a
                href="https://forms.gle/RQuq9jqz9Zffax5X8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[var(--mystic-accent)] hover:text-[var(--mystic-accent)] opacity-80 hover:opacity-100 transition-opacity mt-6 group"
                whileHover={{ x: 4 }}
              >
                <FaPaperPlane className="text-sm transform group-hover:translate-x-1 transition-transform" />
                <span className="text-sm">Contact Form</span>
              </motion.a>
            </div>

            {/* Decorative Corner */}
            <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none">
              <div className="absolute top-0 right-0 w-8 h-px bg-[var(--mystic-accent)] opacity-20" />
              <div className="absolute top-0 right-0 h-8 w-px bg-[var(--mystic-accent)] opacity-20" />
            </div>
          </motion.div>

          {/* Map Card */}
          <motion.div
            className="bg-[#0d0d12] border border-[#1a1a24] rounded-lg overflow-hidden relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.990126843152!2d76.66740647587535!3d9.509586581279393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06304ca96e79f5%3A0x55d9c59f521dc076!2sKarukachal%20Manimala%20Rd%2C%20Nedumkunnam%2C%20Kerala%20686542!5e0!3m2!1sen!2sin!4v1735916666904!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(90%) contrast(90%)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="min-h-[300px]"
            />
            {/* Map Overlay */}
            <div className="absolute inset-0 pointer-events-none border border-[var(--mystic-accent)] opacity-20" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
} 