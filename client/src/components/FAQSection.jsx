'use client'
import { motion } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);


  const faqs = [
    { 
      question: "What makes this platform different from other career resources?",
      answer: "We offer a unique blend of AI-powered tools, curated learning paths, and a supportive community, all completely free. Our focus is on practical skills and career advancement."
    },
    {
      question: "How do I find the perfect resume template for my industry?",
      answer: "Our resume builder allows you to filter templates by industry and experience level. Plus, our AI analysis tool ensures your resume is ATS-friendly and optimized for your target roles."
    },
    {
      question: "Are the coding challenges suitable for all skill levels?",
      answer: "Yes! We have coding problems ranging from beginner-friendly to advanced, with solutions and explanations to help you learn and grow."
    },
    {
      question: "Can the DSA sheet really help me improve my coding skills?",
      answer: "Absolutely! Our DSA sheet provides a structured learning path with hand-picked problems, designed to build your problem-solving abilities step-by-step."
    },
    {
      question: "I'm feeling lost in my career. How can the roadmaps help me?",
      answer: "Our career roadmaps offer clear guidance and recommended resources for various tech roles, helping you navigate your career path with confidence."
    },
    {
      question: "Which resources are best for someone just starting to learn to code?",
      answer: "Check out our 'Beginner's Guide' section for curated tutorials, learning paths, and introductory coding challenges – all designed for newcomers."
    },
    {
      question: "What's the best way to prepare for tough technical interviews?",
      answer: "Practice, practice, practice! Use our interview prep guides, mock interview simulator, and coding challenges to hone your skills and build confidence."
    },
    {
      question: "I don't have a CS background. Can I still succeed in tech?",
      answer: "Definitely! We offer resources and roadmaps specifically tailored for non-CS students, helping you bridge the gap and launch a successful tech career."
    },
    {
      question: "How can I stay motivated and avoid burnout while learning?",
      answer: "Join our community, set realistic goals, celebrate small wins, and remember why you started. We're here to support you every step of the way!"
    }
  ]

  return (
    <section className="py-8 md:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold text-center mb-8 bg-gradient-to-r dark:from-blue-600 dark:to-white bg-clip-text text-transparent from-blue-600 to-gray-900"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.01 }}
              transition={{ type: 'spring', delay: index * 0.1, stiffness: 300 }}
              viewport={{ once: true }}
              className="group relative p-4 sm:p-5 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all"
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-medium bg-gradient-to-r dark:from-blue-600 dark:to-white bg-clip-text text-transparent from-blue-600 to-gray-900">{faq.question}</h3>
                  {activeIndex === index && (
                    <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
                  )}
                </div>
                <ChevronDownIcon className={`h-5 w-5 text-gray-400 dark:text-gray-300 ml-3 flex-shrink-0 transition-transform ${
                  activeIndex === index ? 'rotate-180' : ''
                }`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}