'use client'

import { motion } from 'framer-motion'
import { FaFileAlt, FaSearch, FaLaptopCode } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function InterviewHome() {
  const resources = [
    {
      icon: FaFileAlt,
      title: "LaTeX Resume Builder",
      description: "Craft polished resumes using LaTeX with access to 100+ professional templates and real-time preview.",
      link: "/resume-builder",
      stats: 'LaTeX templates'
    },
    {
      icon: FaSearch,
      title: "Resume ATS Checker",
      description: "Optimize your resume for Applicant Tracking Systems with our analysis tool.",
      link: "/resume-ats",
      stats: 'ATS optimization'
    },
    {
      icon: FaLaptopCode,
      title: "Interview Preparation",
      description: "Prepare for technical interviews with our comprehensive question bank and resources.",
      link: "/interview-preparation",
      stats: 'Interview questions'
    }
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r dark:from-blue-600 dark:to-white bg-clip-text text-transparent from-blue-600 to-gray-900">
            Ace Your Next Interview
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get interview-ready with our complete toolkit: practice questions, coding challenges, and expert tips
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
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity rounded-xl" />
              <div className="relative z-10">
                <div className="p-2 sm:p-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg w-fit mb-4 sm:mb-6">
                  <resource.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 bg-gradient-to-r dark:from-blue-600 dark:to-white bg-clip-text text-transparent from-blue-600 to-gray-900">{resource.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-4 sm:mb-6">{resource.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <span>{resource.stats}</span>
                  </div>
                  <Link 
                    to={resource.link}
                    target={resource.link.startsWith('http') ? '_blank' : undefined}
                    className="inline-flex items-center font-medium bg-gradient-to-r dark:from-blue-600 dark:to-white bg-clip-text text-transparent from-blue-600 to-gray-900 hover:from-blue-700 hover:to-gray-800 transition-all"
                  >
                    Explore
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
