'use client'
import { motion } from 'framer-motion'

export default function MaintenanceBanner() {
  return (
    <div className="w-full overflow-hidden bg-yellow-500 dark:bg-yellow-600 py-2 mt-17 md:mt-15">
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: '-100%' }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }}
        className="whitespace-nowrap text-sm font-medium text-white"
      >
        ⚠️ Our site is currently undergoing maintenance. We apologize for any inconvenience. Please bear with us while we improve your experience. Thank you! ⚠️
      </motion.div>
    </div>
  )
} 