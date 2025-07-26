'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'

interface Project {
  id: number
  title: string
  category: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
}

const WorksSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      description: 'Platform e-commerce modern dengan fitur lengkap menggunakan Next.js dan Stripe',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/hendradarmawan/ecommerce'
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'web',
      description: 'Aplikasi manajemen tugas dengan real-time collaboration',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/hendradarmawan/taskapp'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      category: 'web',
      description: 'Dashboard cuaca interaktif dengan visualisasi data yang menarik',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
      technologies: ['Vue.js', 'Chart.js', 'Weather API', 'CSS3'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/hendradarmawan/weather'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      category: 'design',
      description: 'Website portfolio dengan desain minimalis dan animasi yang halus',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/hendradarmawan/portfolio'
    },
    {
      id: 5,
      title: 'Learning Management System',
      category: 'web',
      description: 'Platform pembelajaran online untuk institusi pendidikan',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
      technologies: ['React', 'Express.js', 'PostgreSQL', 'JWT'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/hendradarmawan/lms'
    },
    {
      id: 6,
      title: 'Mobile App UI Design',
      category: 'design',
      description: 'Desain UI untuk aplikasi mobile dengan fokus pada user experience',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
      technologies: ['Figma', 'Adobe XD', 'Prototyping'],
      liveUrl: 'https://example.com'
    }
  ]

  const categories = [
    { id: 'all', label: 'すべて', labelId: 'Semua' },
    { id: 'web', label: 'ウェブ', labelId: 'Web' },
    { id: 'design', label: 'デザイン', labelId: 'Design' }
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section id="works" className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-sm text-gray-400 mb-4 tracking-wider">
            制作実績 / KARYA SAYA
          </div>
          <h2 className="text-4xl lg:text-6xl font-serif font-bold text-gradient mb-8">
            SELECTED WORKS
          </h2>
          
          {/* Category Filter */}
          <div className="flex justify-center space-x-8 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`transition-colors duration-300 ${
                  selectedCategory === category.id 
                    ? 'text-cream-100' 
                    : 'text-gray-400 hover:text-cream-100'
                }`}
              >
                <div className="text-xs mb-1">{category.label}</div>
                <div className="text-sm">{category.labelId}</div>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-dark-200 rounded-lg overflow-hidden hover-glow transition-all duration-300">
                {/* Project Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-cream-100 text-dark-100 rounded-full hover:bg-cream-200 transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-cream-100 text-dark-100 rounded-full hover:bg-cream-200 transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="text-xs text-gray-400 uppercase tracking-wider mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-semibold text-cream-100 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-dark-300 text-xs text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="px-8 py-3 border border-cream-100 text-cream-100 rounded-full hover:bg-cream-100 hover:text-dark-100 transition-all duration-300">
            MORE PROJECTS
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default WorksSection