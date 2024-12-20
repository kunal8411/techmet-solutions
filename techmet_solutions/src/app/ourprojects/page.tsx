'use client'

import { useState } from 'react'
import Image from 'next/image'

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const filters = ['All', 'Branding Strategy', 'Digital Experiences', 'Ecommerce']

  const projects = [
    {
      id: 1,
      image: '/plant-minimal.jpg',
      category: 'Branding Strategy',
    },
    {
      id: 2,
      image: '/bottle-minimal.jpg',
      category: 'Digital Experiences',
    },
    {
      id: 3,
      image: '/laptop-mockup.jpg',
      category: 'Digital Experiences',
    },
    {
      id: 4,
      image: '/phone-minimal.jpg',
      category: 'Ecommerce',
    },
  ]

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <div className="min-h-screen bg-[#1A1F2D] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Latest Projects</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            It is a long established fact that a reader will be distracted by the readable content of
            a page when looking at its layout. The point of using.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-6 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full transition-all ${
                activeFilter === filter
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="relative rounded-2xl overflow-hidden bg-white aspect-[4/3]"
            >
              <Image
                src={project.image}
                alt="Project"
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage
