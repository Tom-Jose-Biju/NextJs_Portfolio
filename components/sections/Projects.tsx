'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: 'Craftsy-Market',
    description: 'An innovative full-stack marketplace aimed at bridging the gap between skilled artisans and customers seeking unique, handcrafted products.',
    image: '/ss1.png',
    technologies: [
      'Django',
      'Python',
      'SQLite',
      'HTML/CSS/SCSS',
      'JavaScript',
      'AJAX',
      'Vision Transformer'
    ],
    liveUrl: 'https://craftsy-market.onrender.com',
    githubUrl: 'https://github.com/Tom-Jose-Biju/Craftsy-Market',
    color: '#9C27B0'
  }
]

export function ProjectsSection() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Featured Projects
        </motion.h1>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="cosmic-card p-8 relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Glowing background */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{ 
                  background: `linear-gradient(45deg, ${project.color}, transparent)`,
                  filter: 'blur(20px)'
                }}
              />

              <div className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="rounded-lg shadow-xl w-full"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    />
                  </div>
                  
                  <div>
                    <h2 className="text-3xl font-bold mb-4" style={{ color: project.color }}>
                      {project.title}
                    </h2>
                    <p className="text-[var(--cosmic-secondary)] mb-6">
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-3">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <motion.span
                            key={tech}
                            className="px-3 py-1 rounded-full text-sm cosmic-card"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 + (i * 0.1) }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cosmic-button flex items-center space-x-2"
                      >
                        <FaExternalLinkAlt />
                        <span>Live Demo</span>
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cosmic-card px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-white/10 transition-all duration-300"
                      >
                        <FaGithub />
                        <span>View Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
} 