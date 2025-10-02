import React, { useState } from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'ecommerce', name: 'E-commerce' }
  ]

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "ecommerce",
      description: "A full-featured e-commerce platform with payment integration and inventory management.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "mobile",
      description: "Secure mobile banking application with biometric authentication and real-time transactions.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
      technologies: ["React Native", "Firebase", "Node.js"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Corporate Website",
      category: "web",
      description: "Modern corporate website with CMS integration and SEO optimization.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      technologies: ["Next.js", "Tailwind CSS", "Contentful"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Food Delivery App",
      category: "mobile",
      description: "Food delivery application with real-time tracking and payment processing.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=300&fit=crop",
      technologies: ["Flutter", "Firebase", "Google Maps API"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "SaaS Dashboard",
      category: "web",
      description: "Analytics dashboard for SaaS platform with real-time data visualization.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      technologies: ["React", "D3.js", "Express", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Online Store",
      category: "ecommerce",
      description: "Multi-vendor online marketplace with seller dashboard and commission system.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop",
      technologies: ["Vue.js", "Laravel", "MySQL", "AWS"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ]

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our recent projects and see how we've helped businesses achieve their digital goals.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-colors duration-200 ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-4">
                    <a
                      href={project.liveUrl}
                      className="bg-white text-gray-900 p-3 rounded-full hover:bg-primary-600 hover:text-white transition-colors duration-200"
                    >
                      <FaExternalLinkAlt />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="bg-white text-gray-900 p-3 rounded-full hover:bg-primary-600 hover:text-white transition-colors duration-200"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    className="flex-1 bg-primary-600 hover:bg-primary-700 text-white text-center py-2 px-4 rounded-lg transition-colors duration-200 font-medium"
                  >
                    View Live
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-center py-2 px-4 rounded-lg transition-colors duration-200 font-medium"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="btn-secondary">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  )
}

export default Portfolio