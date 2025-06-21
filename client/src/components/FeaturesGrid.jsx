'use client'
import { motion } from 'framer-motion'
import { BookOpenIcon, CodeBracketIcon, ChatBubbleLeftRightIcon, BriefcaseIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

export default function FeaturesGrid() {
  const features = [
    {
      icon: BriefcaseIcon,
      title: "Find Your Dream Job",
      description: "Explore vast job listings to find opportunities that match your skills.",
      link: "https://jobs.careerhubs.info/"
    },
    {
      icon: CodeBracketIcon,
      title: "CodeShare",
      description: "Real-time code collaboration with built-in compiler, seamless developer teamwork.",
      link: "https://code.careerhubs.info/"
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: "AI Mock Interview",
      description: "Refine interview skills with AI simulations and get instant, actionable feedback.",
      link: "https://interview.careerhubs.info/"
    },
    {
      icon: BookOpenIcon,
      title: "Meet",
      description: "Schedule meetings and connect with professionals using our simple meeting tool.",
      link: "https://meet.careerhubs.info/"
    }
  ]

  return (
    <section className="py-12 sm:py-12 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r dark:from-blue-600 dark:to-white bg-clip-text text-transparent from-blue-600 to-gray-900">
            Everything You Need to Succeed
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive tools and resources to accelerate your career growth
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <Link to={feature.link} key={feature.title}>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', delay: index * 0.1, stiffness: 300 }}
                viewport={{ once: true }}
                className="group relative p-6 sm:p-8 rounded-xl transition-all border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity rounded-xl" />
                <div className="relative z-10">
                  <div className="p-2 sm:p-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg w-fit mb-4 sm:mb-6">
                    <feature.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 bg-gradient-to-r dark:from-blue-600 dark:to-white bg-clip-text text-transparent from-blue-600 to-gray-900">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-4 sm:mb-6">{feature.description}</p>
                  <div className="inline-flex items-center font-medium bg-gradient-to-r dark:from-blue-600 dark:to-white bg-clip-text text-transparent from-blue-600 to-gray-900 hover:from-blue-700 hover:to-gray-800 transition-all">
                    Explore More
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}