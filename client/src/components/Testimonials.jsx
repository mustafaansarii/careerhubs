'use client'
import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'

export default function Testimonials() {
  const testimonials = [
    {
      text: "The AI-powered resume builder helped me land multiple interviews!",
      author: "Rahul Mehta, Frontend Developer",
      rating: 5
    },
    {
      text: "The career roadmap gave me clear direction for my professional growth.",
      author: "Sneha Gupta, Data Analyst",
      rating: 5
    },
    {
      text: "The practice problems were instrumental in preparing for technical interviews.",
      author: "Vikram Singh, Full Stack Developer",
      rating: 5
    }
  ]

  return (
    <section className="py-12 md:py-12 lg:py-12 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
            <h2  className="text-3xl sm:text-4xl font-bold bg-gradient-to-r dark:from-blue-600 dark:to-white bg-clip-text text-transparent from-blue-600 to-gray-900 text-center px-4"
        >What Our Users Say
            </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: index % 3 === 1 ? 50 : -50 }} // First and last columns move up, middle moves down
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ 
                type: 'spring', 
                delay: index * 0.1, 
                stiffness: 300,
                damping: 20
              }}
              viewport={{ once: true }}
              className="group relative p-4 sm:p-6 lg:p-8 rounded-lg shadow-md hover:shadow-lg transition-all bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity rounded-lg" />
              <div className="relative z-10 flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold">
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <p className="font-semibold bg-gradient-to-r dark:from-blue-600 dark:to-white bg-clip-text text-transparent from-blue-600 to-gray-900">
                      {testimonial.author}
                    </p>
                    <div className="flex mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic text-base sm:text-lg leading-relaxed">&quot;{testimonial.text}&quot;</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}