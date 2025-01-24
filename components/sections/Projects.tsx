'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { projects } from '@/data/projects'
import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section className="min-h-screen py-20 relative overflow-hidden">
      {/* Mystical Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--mystic-darker)] via-[var(--mystic-dark)] to-[var(--mystic-darker)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--mystic-glow)_0%,_transparent_70%)] opacity-20" />
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 relative inline-block">
            <span className="bg-gradient-to-r from-[var(--mystic-accent)] to-[var(--mystic-secondary)] text-transparent bg-clip-text">
              Mystical Works
            </span>
            <div className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--mystic-accent)]/50 to-transparent" />
          </h2>
          <p className="text-[var(--mystic-secondary)] text-lg max-w-2xl mx-auto">
            Explore the digital artifacts crafted with code and creativity
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Project Card */}
              <div className="relative bg-[var(--mystic-darker)]/80 backdrop-blur-lg rounded-xl overflow-hidden
                            border border-[var(--mystic-accent)]/10 shadow-lg shadow-[var(--mystic-accent)]/5">
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--mystic-darker)]" />
                </div>

                {/* Project Info */}
                <div className="p-6 relative">
                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-3">
                    <span className="bg-gradient-to-r from-[var(--mystic-accent)] to-[var(--mystic-secondary)] text-transparent bg-clip-text">
                      {project.title}
                    </span>
                  </h3>

                  {/* Description */}
                  <p className="text-[var(--mystic-secondary)] mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-sm px-3 py-1 rounded-full 
                                 bg-[var(--mystic-accent)]/5 text-[var(--mystic-accent)]
                                 border border-[var(--mystic-accent)]/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-12 h-12 
                                 rounded-full bg-[var(--mystic-accent)]/10 
                                 hover:bg-[var(--mystic-accent)]/20 
                                 border border-[var(--mystic-accent)]/20
                                 hover:border-[var(--mystic-accent)]
                                 text-[var(--mystic-accent)]"
                      >
                        <FaGithub size={24} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-12 h-12 
                                 rounded-full bg-[var(--mystic-accent)]/10 
                                 hover:bg-[var(--mystic-accent)]/20 
                                 border border-[var(--mystic-accent)]/20
                                 hover:border-[var(--mystic-accent)]
                                 text-[var(--mystic-accent)]"
                      >
                        <FaExternalLinkAlt size={24} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 