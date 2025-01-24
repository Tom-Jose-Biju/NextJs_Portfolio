'use client'

import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const contactInfo = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'tomjosebiju27@gmail.com',
    href: 'mailto:tomjosebiju27@gmail.com',
    color: '#4CAF50'
  },
  {
    icon: FaPhone,
    label: 'Phone',
    value: '+91 8304076224',
    href: 'tel:+918304076224',
    color: '#2196F3'
  },
  {
    icon: FaMapMarkerAlt,
    label: 'Location',
    value: 'Karukachal, Kerala, India',
    href: 'https://maps.google.com/?q=Karukachal,Kerala,India',
    color: '#F44336'
  }
]

export function ContactSection() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
          <p className="text-xl text-[var(--cosmic-secondary)]">
            Feel free to reach out for collaborations or inquiries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.label}
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
                className="cosmic-card p-6 flex items-center space-x-4 hover:scale-105 transition-transform"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                whileHover={{ scale: 1.05 }}
              >
                <div 
                  className="p-4 rounded-full"
                  style={{ backgroundColor: `${info.color}20` }}
                >
                  <info.icon className="text-2xl" style={{ color: info.color }} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[var(--cosmic-text)]">{info.label}</h3>
                  <p className="text-[var(--cosmic-secondary)]">{info.value}</p>
                </div>
              </motion.a>
            ))}

            <motion.p
              className="text-[var(--cosmic-secondary)] mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              For more inquiries, please fill out my{' '}
              <a 
                href="https://forms.gle/RQuq9jqz9Zffax5X8" 
                className="text-[var(--cosmic-accent)] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Form
              </a>
              .
            </motion.p>
          </motion.div>

          {/* Map */}
          <motion.div
            className="cosmic-card overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.990126843152!2d76.66740647587535!3d9.509586581279393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06304ca96e79f5%3A0x55d9c59f521dc076!2sKarukachal%20Manimala%20Rd%2C%20Nedumkunnam%2C%20Kerala%20686542!5e0!3m2!1sen!2sin!4v1735916666904!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
} 