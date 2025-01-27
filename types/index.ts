export interface Project {
    id: number
    title: string
    description: string
    imageUrl: string
    technologies: string[]
    link: string
    github: string
  }
  
  export interface Skill {
    name: string
    level: string
    technologies: string[]
  }