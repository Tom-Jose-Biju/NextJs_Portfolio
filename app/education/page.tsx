'use client'

import { motion } from 'framer-motion'

const education = [
  {
    title: 'Masters in Computer Applications',
    institution: 'Amal Jyothi College of Engineering',
    year: '2025',
    details: [
      'Integrated MCA Program',
      'Relevant Courses: Data Structures, Algorithms, Web Development, Database Management',
      'Thesis Title: Automated Product Categorization in E-commerce',
      'Skills Acquired: Python, Django, React, Database Management, Web Development',
      'Internship: Django Intern at Riss Technologies, Kochi',
      'Extracurricular: Core committee lead for the NASA Space Apps challenge 2024'
    ],
    color: '#4CAF50'
  },
  {
    title: 'Higher Secondary',
    institution: "St. John The Baptist's Nedumkunnam",
    year: '2020',
    details: [
      'Stream: Computer Science',
      'Passout Marks: 75%',
      'Achievements: Participated in Arts and cultural competitions',
      'Extracurricular: Member of the school debate team'
    ],
    color: '#2196F3'
  },
  {
    title: 'High School',
    institution: "St. John The Baptist's Nedumkunnam",
    year: '2018',
    details: [
      'Achievements: School Leader',
      'Passout Marks: 90%',
      'Extracurricular: Active member of the student council',
      'Interests: Engaged in sports and cultural activities'
    ],
    color: '#F44336'
  }
]

export const EducationSection = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Education Journey
        </motion.h1>

        <div className="space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={edu.title}
              className="cosmic-card p-8 relative overflow-hidden"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Glowing background */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{ 
                  background: `linear-gradient(45deg, ${edu.color}, transparent)`,
                  filter: 'blur(20px)'
                }}
              />

              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-4" style={{ color: edu.color }}>
                  {edu.title}
                </h2>
                <h3 className="text-xl text-[var(--cosmic-text)] mb-2">{edu.institution}</h3>
                <p className="text-lg text-[var(--cosmic-secondary)] mb-6">{edu.year}</p>
                
                <ul className="space-y-3">
                  {edu.details.map((detail, i) => (
                    <motion.li
                      key={i}
                      className="text-[var(--cosmic-secondary)] flex items-center space-x-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + (i * 0.1) }}
                    >
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: edu.color }} />
                      <span>{detail}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
} 