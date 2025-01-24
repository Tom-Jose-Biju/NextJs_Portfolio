'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaGraduationCap, FaAward, FaStar, FaBookOpen, FaFeatherAlt } from 'react-icons/fa'
import { GiSpellBook, GiScrollUnfurled, GiMagicSwirl } from 'react-icons/gi'

export function EducationSection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  const education = [
    {
      title: "Masters in Computer Applications",
      institution: "Amal Jyothi College of Engineering",
      year: "2025",
      icon: <FaGraduationCap className="text-3xl" />,
      bookIcon: <GiSpellBook className="text-5xl" />,
      details: [
        "Integrated MCA Program",
        "Relevant Courses: Data Structures, Algorithms, Web Development, Database Management",
        "Thesis: Automated Product Categorization in E-commerce",
        "Skills: Python, Django, React, Database Management, Web Development",
        "Internship: Django Intern at Riss Technologies, Kochi",
        "Core committee lead for NASA Space Apps challenge 2024"
      ],
      color: "from-violet-500 to-purple-600"
    },
    {
      title: "Higher Secondary",
      institution: "St. John The Baptist's Nedumkunnam",
      year: "2020",
      icon: <FaAward className="text-3xl" />,
      bookIcon: <GiScrollUnfurled className="text-5xl" />,
      details: [
        "Stream: Computer Science",
        "Passout Marks: 75%",
        "Participated in Arts and cultural competitions",
        "Member of the school debate team"
      ],
      color: "from-emerald-500 to-teal-600"
    },
    {
      title: "High School",
      institution: "St. John The Baptist's Nedumkunnam",
      year: "2018",
      icon: <FaStar className="text-3xl" />,
      bookIcon: <GiScrollUnfurled className="text-5xl" />,
      details: [
        "School Leader",
        "Passout Marks: 90%",
        "Active member of the student council",
        "Engaged in sports and cultural activities"
      ],
      color: "from-rose-500 to-pink-600"
    }
  ]

  return (
    <motion.div
      ref={containerRef}
      className="min-h-screen py-20 px-4 relative overflow-hidden bg-[#0a0a0f]"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Enhanced Mystical Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(0,0,0,0))]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.4),transparent,rgba(0,0,0,0.4))]" />
      
      <div className="max-w-6xl mx-auto">
        {/* Header with enhanced glow */}
        <div className="text-center space-y-4 relative mb-20">
          <motion.div
            className="inline-block"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <FaBookOpen className="text-5xl mx-auto text-[var(--mystic-accent)] mb-4 drop-shadow-[0_0_10px_var(--mystic-accent)]" />
          </motion.div>
          <motion.h2 
            className="text-4xl font-bold glow-text drop-shadow-[0_0_15px_rgba(var(--mystic-accent-rgb),0.3)]"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.8 }}
          >
            Tomes of Knowledge
          </motion.h2>
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Each chapter of my academic journey, bound in mystical tomes of wisdom and experience.
          </motion.p>
        </div>

        {/* Enhanced Timeline */}
        <div className="relative">
          {/* Vertical Timeline Line with Glow */}
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full"
            style={{
              background: `linear-gradient(to bottom, 
                var(--mystic-accent), 
                rgba(var(--mystic-accent-rgb), 0.7), 
                transparent)`,
              boxShadow: '0 0 10px var(--mystic-accent), 0 0 20px var(--mystic-accent)'
            }}
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : { height: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          {/* Education Items */}
          <div className="relative space-y-24">
            {education.map((edu, index) => (
              <motion.div
                key={edu.title}
                className={`flex items-center justify-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
              >
                {/* Enhanced Timeline Node with Glow */}
                <motion.div 
                  className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-[#0a0a0f] flex items-center justify-center z-10"
                  style={{
                    boxShadow: `0 0 15px var(--mystic-accent),
                               inset 0 0 10px var(--mystic-accent)`,
                    border: '2px solid var(--mystic-accent)'
                  }}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.3 }}
                >
                  <div className="text-[var(--mystic-accent)] drop-shadow-[0_0_5px_var(--mystic-accent)]">
                    {edu.icon}
                  </div>
                </motion.div>

                {/* Enhanced Content Card */}
                <motion.div 
                  className={`w-full md:w-[calc(50%-3rem)] mystic-card p-8 relative ${
                    index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                  } bg-[#12121a] border border-[var(--mystic-accent)] backdrop-blur-sm`}
                  style={{
                    boxShadow: '0 0 20px rgba(var(--mystic-accent-rgb), 0.1)',
                    background: 'linear-gradient(145deg, rgba(18,18,26,0.9), rgba(10,10,15,0.9))'
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: '0 0 30px rgba(var(--mystic-accent-rgb), 0.2)'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Enhanced Year Badge */}
                  <div 
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#0a0a0f] px-6 py-2 rounded-full text-sm font-semibold border-2 border-[var(--mystic-accent)]"
                    style={{
                      boxShadow: '0 0 10px var(--mystic-accent)',
                      textShadow: '0 0 5px var(--mystic-accent)'
                    }}
                  >
                    {edu.year}
                  </div>

                  <div className="flex items-start gap-6 mt-2">
                    <div className="text-[var(--mystic-accent)] drop-shadow-[0_0_5px_var(--mystic-accent)]">
                      {edu.bookIcon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-[var(--mystic-accent)] mb-2 drop-shadow-[0_0_5px_var(--mystic-accent)]">
                        {edu.title}
                      </h3>
                      <p className="text-lg text-gray-300 mb-4 font-magical">
                        {edu.institution}
                      </p>
                      <ul className="space-y-3">
                        {edu.details.map((detail, i) => (
                          <motion.li
                            key={i}
                            className="text-gray-400 flex items-start gap-3 hover:text-gray-300 transition-colors duration-300"
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ duration: 0.5, delay: 0.8 + (i * 0.1) }}
                          >
                            <FaFeatherAlt className="text-[var(--mystic-accent)] mt-1.5 flex-shrink-0 transform -rotate-45" />
                            <span>{detail}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Enhanced Decorative Corners with Glow */}
                  <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none">
                    <div className="absolute top-0 right-0 w-8 h-0.5 bg-gradient-to-l from-[var(--mystic-accent)]" 
                         style={{ boxShadow: '0 0 10px var(--mystic-accent)' }} />
                    <div className="absolute top-0 right-0 h-8 w-0.5 bg-gradient-to-b from-[var(--mystic-accent)]"
                         style={{ boxShadow: '0 0 10px var(--mystic-accent)' }} />
                  </div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 pointer-events-none">
                    <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-[var(--mystic-accent)]"
                         style={{ boxShadow: '0 0 10px var(--mystic-accent)' }} />
                    <div className="absolute bottom-0 left-0 h-8 w-0.5 bg-gradient-to-t from-[var(--mystic-accent)]"
                         style={{ boxShadow: '0 0 10px var(--mystic-accent)' }} />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
} 