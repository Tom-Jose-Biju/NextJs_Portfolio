'use client'

import { motion } from 'framer-motion'
import { HeroSection } from '@/components/sections/Hero'
import { AboutSection } from '@/components/sections/About'
import { EducationSection } from '@/components/sections/Education/index'
import { ProjectsSection } from '@/components/sections/Projects'
import { ContactSection } from '@/components/sections/Contact'

export default function Home() {
  return (
    <div className="w-full">
      <section id="home" className="section-container">
        <HeroSection />
      </section>

      <section id="about" className="section-container">
        <AboutSection />
      </section>

      <section id="education" className="section-container">
        <EducationSection />
      </section>

      <section id="projects" className="section-container">
        <ProjectsSection />
      </section>

      <section id="contact" className="section-container">
        <ContactSection />
      </section>
    </div>
  )
}