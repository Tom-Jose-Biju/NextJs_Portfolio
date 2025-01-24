export default function Footer() {
  const currentYear = new Date().getFullYear()
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/tom-jose-biju',
      icon: 'linkedin',
      color: 'text-blue-500 hover:text-blue-700'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Tom-Jose-Biju',
      icon: 'github',
      color: 'text-gray-600 hover:text-blue-500'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/__.t_.o._m._/profilecard/?igsh=dDA0Y2FhZzM0NjEw',
      icon: 'instagram',
      color: 'text-pink-500 hover:text-pink-700'
    }
  ]

  return (
    <footer className="bg-gray-800 text-gray-200 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Tom Jose Biju</h3>
            <p className="text-gray-400">Full Stack Developer</p>
          </div>
          
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className={`${link.color} transition duration-300`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
              >
                <i className={`fab fa-${link.icon} fa-2x transform hover:scale-110 transition-transform duration-300`}></i>
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Tom Jose Biju. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}