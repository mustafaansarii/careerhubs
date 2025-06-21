'use client'
import { motion } from 'framer-motion'
import { DocumentTextIcon, MapIcon, AcademicCapIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

export default function ResourceShowcase() {
  const resources = [
    {
      icon: DocumentTextIcon,
      title: "Professional Resume Builder",
      description: "Create professional resumes using our easy-to-use form-based builder with step-by-step guidance",
      link: "/resume-form"
    },
    {
      icon: MapIcon,
      title: "Career Roadmap",
      description: "Plan your career path with our comprehensive roadmap and skill development guide",
      link: "/roadmap"
    },
    {
      icon: AcademicCapIcon,
      title: "Comprehensive Tutorials",
      description: "Access a wide range of tutorials covering various technologies and computer science concepts",
      link: "/tutorials"
    },
  ]

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white dark:bg-gray-900 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r dark:from-blue-600 dark:to-white bg-clip-text text-transparent from-blue-600 to-gray-900">
            Career Accelerators
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Essential resources to power your professional development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', delay: index * 0.1, stiffness: 300 }}
              viewport={{ once: true }}
              className="group relative p-6 sm:p-8 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-200 dark:border-gray-700"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity rounded-xl" />
              <div className="relative z-10">
                <div className="p-2 sm:p-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg w-fit mb-4 sm:mb-6">
                  <resource.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 bg-gradient-to-r dark:from-blue-600 dark:to-white bg-clip-text text-transparent from-blue-600 to-gray-900">{resource.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-4 sm:mb-6">{resource.description}</p>
                <Link 
                  to={resource.link}
                  className="inline-flex items-center font-medium bg-gradient-to-r dark:from-blue-600 dark:to-white bg-clip-text text-transparent from-blue-600 to-gray-900 hover:from-blue-700 hover:to-gray-800 transition-all"
                >
                  Explore Resources
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}