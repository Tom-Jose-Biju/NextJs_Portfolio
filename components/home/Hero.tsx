import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="hero bg-gray-900 min-h-screen flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-7xl font-extrabold text-white drop-shadow-lg">
        Welcome to My Portfolio, I'm Tom Jose Biju
      </h1>
      <p className="mt-4 text-xl text-gray-300 drop-shadow-md">
        I am a passionate developer creating innovative solutions.
      </p>
      <p className="mt-2 text-md text-gray-400 drop-shadow-md">
        Explore my projects and skills, and feel free to reach out for collaborations or inquiries.
      </p>
      <a 
        href="/resume_TomJoseBiju.pdf" 
        className="mt-6 inline-block bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
        download
      >
        Download My Resume
      </a>
      <div className="flex space-x-6 mt-4">
        <a 
          href="https://www.linkedin.com/in/tom-jose-biju" 
          className="text-blue-500 hover:text-blue-700 transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin fa-3x transform hover:scale-110 transition-transform duration-300"></i>
        </a>
        <a 
          href="https://github.com/Tom-Jose-Biju" 
          className="text-gray-600 hover:text-blue-500 transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github fa-3x transform hover:scale-110 transition-transform duration-300"></i>
        </a>
        <a 
          href="https://www.instagram.com/__.t_.o._m._/profilecard/?igsh=dDA0Y2FhZzM0NjEw" 
          className="text-pink-500 hover:text-pink-700 transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram fa-3x transform hover:scale-110 transition-transform duration-300"></i>
        </a>
      </div>
    </section>
  )
}