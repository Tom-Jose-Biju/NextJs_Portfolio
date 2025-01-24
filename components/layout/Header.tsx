'use client'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-gray-800 p-2 rounded-lg fixed top-0 left-1/2 transform -translate-x-1/2 z-10 shadow-lg transition-all duration-300">
      <nav className="flex space-x-4">
        <Link href="/" className="text-white hover:bg-gray-700 rounded p-2 transition duration-300">
          <i className="fas fa-home fa-sm"></i>
          <span className="ml-2">Home</span>
        </Link>
        <Link href="/about" className="text-white hover:bg-gray-700 rounded p-2 transition duration-300">
          <i className="fas fa-user fa-sm"></i>
          <span className="ml-2">About</span>
        </Link>
        <Link href="/education" className="text-white hover:bg-gray-700 rounded p-2 transition duration-300">
          <i className="fas fa-graduation-cap fa-sm"></i>
          <span className="ml-2">Education</span>
        </Link>
        <Link href="/projects" className="text-white hover:bg-gray-700 rounded p-2 transition duration-300">
          <i className="fas fa-project-diagram fa-sm"></i>
          <span className="ml-2">Projects</span>
        </Link>
        <Link href="/contact" className="text-white hover:bg-gray-700 rounded p-2 transition duration-300">
          <i className="fas fa-envelope fa-sm"></i>
          <span className="ml-2">Contact</span>
        </Link>
      </nav>
    </header>
  )
}