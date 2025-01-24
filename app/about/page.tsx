'use client'

import { motion } from 'framer-motion'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaSass, FaNodeJs, FaMobileAlt, FaGitAlt, FaPaintBrush } from 'react-icons/fa'

const skills = [
  { icon: FaHtml5, name: 'HTML', color: '#e34f26' },
  { icon: FaCss3Alt, name: 'CSS', color: '#1572b6' },
  { icon: FaJs, name: 'JavaScript', color: '#f7df1e' },
  { icon: FaReact, name: 'React', color: '#61dafb' },
  { icon: FaPython, name: 'Django', color: '#306998' },
  { icon: FaSass, name: 'SCSS', color: '#cc6699' },
  { icon: FaNodeJs, name: 'Node.js', color: '#339933' },
  { icon: FaMobileAlt, name: 'Responsive Design', color: '#9b59b6' },
  { icon: FaGitAlt, name: 'Git', color: '#f05032' },
  { icon: FaPaintBrush, name: 'UI/UX Design', color: '#ffd700' }
]

const interests = [
  {
    title: 'Technology Exploration',
    description: 'I love exploring new technologies like AI, blockchain, and IoT. I enjoy experimenting with new frameworks and tools to enhance my skills.'
  },
  {
    title: 'Outdoor Activities',
    description: 'Hiking and nature photography are my go-to activities for relaxation. I find inspiration in the beauty of the outdoors.'
  },
  {
    title: 'Cooking',
    description: 'I enjoy experimenting with new recipes and cuisines, finding joy in creating delicious meals for family and friends.'
  },
  {
    title: 'Gym and Workout',
    description: 'Staying fit is important to me, and I enjoy regular workouts at the gym, focusing on strength training and cardio.'
  },
  {
    title: 'Pianist',
    description: 'I enjoy playing the piano and exploring various musical genres, finding joy in creating beautiful melodies.'
  }
]

export const AboutSection = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-xl text-[var(--cosmic-secondary)] max-w-3xl mx-auto">
            I am a highly motivated fresher with a strong foundation in web development. 
            My expertise lies in creating dynamic, user-friendly websites using modern technologies.
          </p>
        </motion.div>

        {/* Skills */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="cosmic-card p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
              >
                <skill.icon className="text-4xl mx-auto mb-3" style={{ color: skill.color }} />
                <h3 className="text-lg font-semibold">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Interests */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">Interests</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                className="cosmic-card p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-semibold mb-3">{interest.title}</h3>
                <p className="text-[var(--cosmic-secondary)]">{interest.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  )
}