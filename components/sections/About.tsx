'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaSass, 
  FaNode, FaMobileAlt, FaGitAlt, FaPaintBrush,
  FaLaptopCode, FaHiking, FaUtensils, FaDumbbell, FaMusic
} from 'react-icons/fa'
import { TbBrandNextjs } from 'react-icons/tb'

export function AboutSectionHome() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      name: "Frontend Development",
      description: "Creating responsive and interactive user interfaces",
      skills: [
        { name: 'HTML', icon: <FaHtml5 className="text-2xl text-orange-500" /> },
        { name: 'CSS', icon: <FaCss3Alt className="text-2xl text-blue-500" /> },
        { name: 'JavaScript', icon: <FaJs className="text-2xl text-yellow-500" /> },
        { name: 'React', icon: <FaReact className="text-2xl text-blue-400" /> },
        { name: 'Next.js', icon: <TbBrandNextjs className="text-2xl text-white" /> }
      ]
    },
    {
      name: "Backend Development",
      description: "Building robust server-side applications",
      skills: [
        { name: 'Python', icon: <FaPython className="text-2xl text-blue-500" /> },
        { name: 'Django', icon: <FaPython className="text-2xl text-green-500" /> }
      ]
    },
    {
      name: "Tools & Technologies",
      description: "Essential tools for modern web development",
      skills: [
        { name: 'SCSS', icon: <FaSass className="text-2xl text-pink-500" /> },
        { name: 'Git', icon: <FaGitAlt className="text-2xl text-red-500" /> },
        { name: 'Responsive', icon: <FaMobileAlt className="text-2xl text-purple-500" /> },
        { name: 'UI/UX', icon: <FaPaintBrush className="text-2xl text-yellow-300" /> }
      ]
    }
  ]

  const interests = [
    {
      title: 'Technology',
      icon: <FaLaptopCode className="text-3xl" />,
      description: 'Exploring new technologies like AI, blockchain, and IoT.'
    },
    {
      title: 'Outdoor',
      icon: <FaHiking className="text-3xl" />,
      description: 'Hiking and nature photography for relaxation and inspiration.'
    },
    {
      title: 'Cooking',
      icon: <FaUtensils className="text-3xl" />,
      description: 'Experimenting with new recipes and cuisines.'
    },
    {
      title: 'Fitness',
      icon: <FaDumbbell className="text-3xl" />,
      description: 'Regular workouts focusing on strength and cardio.'
    },
    {
      title: 'Music',
      icon: <FaMusic className="text-3xl" />,
      description: 'Playing piano and exploring various musical genres.'
    }
  ]

  return (
    <motion.div 
      ref={containerRef}
      className="min-h-screen py-16 px-4"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <motion.div 
          className="text-center"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4 glow-text">About Me</h2>
          <p className="text-lg text-gray-400">Passionate Web Developer & Lifelong Learner</p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <motion.div
            className="relative"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mystic-card overflow-hidden">
              <img 
                src="/images/mmm.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="mt-6 mystic-card">
              <p className="text-gray-300 leading-relaxed">
                A highly motivated fresher with expertise in creating dynamic, user-friendly websites using modern technologies. Proficient in React, Django, and committed to continuous learning and growth.
              </p>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 }
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <h4 className="text-xl font-semibold text-[var(--mystic-accent)] mb-3">{category.name}</h4>
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="mystic-card group relative overflow-hidden"
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 }
                      }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover="hover"
                    >
                      <div className="relative z-10 flex items-center p-3 gap-3 bg-[var(--mystic-darker)]/80 backdrop-blur-sm">
                        <div className="transform group-hover:scale-110 transition-transform duration-300">
                          {skill.icon}
                        </div>
                        <div className="flex-1">
                          <span className="text-[var(--mystic-accent)]">{skill.name}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* GitHub Stats */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-6"
        >
          <h3 className="text-3xl font-bold text-center glow-text">GitHub Chronicles</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Recent Activity Stats */}
            <motion.div
              className="mystic-card group relative overflow-hidden"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--mystic-accent)]/10 to-transparent opacity-50" />
              <div className="p-4">
                <h4 className="text-lg font-semibold text-center text-[var(--mystic-accent)] mb-4">
                  <span className="inline-block border border-[var(--mystic-accent)]/20 rounded-full px-3 py-1 bg-[var(--mystic-darker)]/50">
                    Contribution Stats
                  </span>
                </h4>
                <img
                  src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api?username=Tom-Jose-Biju&show_icons=true&hide_border=true&bg_color=0d1117&title_color=58a6ff&text_color=c9d1d9&icon_color=58a6ff&ring_color=58a6ff&include_all_commits=true&hide=stars,issues"
                  alt="Recent GitHub Activity"
                  className="w-full h-auto transform transition-transform duration-500"
                />
              </div>
            </motion.div>

            {/* Language Distribution */}
            <motion.div
              className="mystic-card group relative overflow-hidden"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-bl from-[var(--mystic-accent)]/10 to-transparent opacity-50" />
              <div className="p-4">
                <h4 className="text-lg font-semibold text-center text-[var(--mystic-accent)] mb-4">
                  <span className="inline-block border border-[var(--mystic-accent)]/20 rounded-full px-3 py-1 bg-[var(--mystic-darker)]/50">
                    Technology Stack
                  </span>
                </h4>
                <img
                  src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api/top-langs/?username=Tom-Jose-Biju&layout=compact&hide_border=true&bg_color=0d1117&title_color=58a6ff&text_color=c9d1d9&icon_color=58a6ff&langs_count=6"
                  alt="Language Distribution"
                  className="w-full h-auto transform transition-transform duration-500"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Interests */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="space-y-6"
        >
          <h3 className="text-3xl font-bold text-center glow-text">Personal Pursuits</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                className="group"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mystic-card h-full relative overflow-hidden p-4">
                  <div className="flex flex-col items-center text-center gap-2">
                    <div className="text-[var(--mystic-accent)] transform group-hover:scale-110 transition-transform duration-300">
                      {interest.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-[var(--mystic-accent)]">
                      {interest.title}
                    </h4>
                    <p className="text-sm text-gray-400">{interest.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
} 