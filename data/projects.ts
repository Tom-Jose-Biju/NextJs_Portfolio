interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Craftsy Market',
    description: 'A mystical marketplace where artisans weave their craft into digital reality, creating a bridge between traditional craftsmanship and modern commerce.',
    image: '/images/projects/craftsy.jpg',
    technologies: ['Django', 'Python', 'SQLite', 'HTML/CSS', 'JavaScript', 'Vision Transformer'],
    demo: 'https://craftsy-market.onrender.com',
    github: 'https://github.com/Tom-Jose-Biju/Craftsy-Market'
  },
  {
    id: 2,
    title: 'Digital Sanctum',
    description: 'A cosmic portfolio that blends modern technology with ethereal design, featuring mystical animations and enchanting user experiences.',
    image: '/images/projects/portfolio.jpg',
    technologies: ['Next.js', 'React', 'TailwindCSS', 'Framer Motion'],
    demo: 'https://tom-jose-biju.vercel.app',
    github: 'https://github.com/Tom-Jose-Biju/portfolio'
  }
];