import { motion } from "framer-motion";
import { Link } from 'react-router-dom'

export default function Hero() {
  const userAvatars = [
    "https://storage.googleapis.com/a1aa/image/5782adf3-6f9c-4303-bf13-df0c70d0e211.jpg",
    "https://storage.googleapis.com/a1aa/image/c89e72ac-9786-4a33-142a-4a7b47bc590d.jpg",
    "https://storage.googleapis.com/a1aa/image/bdf11032-d91a-4588-0dc0-b50e03319b17.jpg",
    "https://storage.googleapis.com/a1aa/image/ebcee12c-446c-4ff5-6488-c732cde78fa3.jpg",
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 font-sans ">
      <section className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center s">
        <div className="space-y-6 sm:space-y-8 ">
          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 leading-tight tracking-tight">
            <span className="bg-gradient-to-r dark:from-blue-600 dark:to-white bg-clip-text text-transparent from-blue-600 to-gray-900">
              Accelerate Your Career Growth with Comprehensive Resources
            </span>
          </h1>
          <p className="text-lg sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 font-light">
            Explore our extensive collection of learning materials including coding challenges, interview preparation guides, and professional development resources. Enhance your skills with our curated content and join a thriving community of learners.
          </p>
          <div className="flex items-center space-x-4 sm:space-x-4">
            <div className="relative">
              <div className="flex -space-x-2">
                {userAvatars.map((avatar, index) => (
                  <img
                    key={index}
                    alt={`User ${index + 1} avatar`}
                    className="w-12 h-12 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full border-2 border-white dark:border-gray-800"
                    src={avatar}
                  />
                ))}
              </div>
              <div className="absolute -right-4 sm:-right-4 md:-right-6 lg:-right-8 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 text-xs sm:text-xs md:text-sm font-medium rounded-full px-3 py-1.5 sm:px-3 sm:py-1.5 shadow-md border border-gray-200 dark:border-gray-700">
                <span className="text-blue-600 dark:text-blue-400 font-semibold">2.5K+</span> Active Users
              </div>
            </div>
          </div>
          <div className="flex space-x-4 sm:space-x-4">
            <Link to="/tutorials">
              <a className="bg-gradient-to-r dark:from-blue-600 dark:to-white bg-clip-text text-transparent from-blue-600 to-gray-900 border border-blue-600 px-4 py-2 sm:px-4 sm:py-2 rounded-full text-base sm:text-base font-medium hover:bg-blue-50 transition-all duration-300">
                Get Started
              </a>
            </Link>
            <Link to="/resume-builder">
              <a className="bg-gradient-to-r dark:from-blue-600 dark:to-white bg-clip-text text-transparent from-blue-600 to-gray-900 border border-blue-600 px-4 py-2 sm:px-4 sm:py-2 rounded-full text-base sm:text-base font-medium hover:bg-blue-50 transition-all duration-300">
                Build Your Resume
              </a>
            </Link>
          </div>
        </div>
        <div className="hidden lg:block relative w-full max-w-[400px] lg:w-[450px] h-[500px] lg:h-[550px] ml-0 lg:ml-30 mt-0 lg:mt-25">
          {/* Back Layer */}
          <motion.div
            initial={{ opacity: 0, x: -40, y: 40 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute bottom-12 left-8 w-full h-full"
          >
            <img 
              src="https://i.ibb.co/v4dWrK1j/Vishnu-Singh.jpg"
              alt="Resume Image"
              className="w-full h-full object-cover shadow-2xl border border-gray-300/50 transform rotate-[2deg]"
            />
          </motion.div>

          {/* Middle Layer */}
          <motion.div
            initial={{ opacity: 0, x: -20, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="absolute bottom-8 left-4 w-full h-full"
          >
            <img 
              src="http://raw.githubusercontent.com/jakegut/resume/refs/heads/master/resume.png"
              alt="Resume Image"
              className="w-full h-full object-cover shadow-2xl border border-gray-300/50 transform rotate-[1deg]"
            />
          </motion.div>

          {/* Top Layer */}
          <motion.div
            initial={{ opacity: 0, x: -40, y: 40 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute bottom-0 left-0 w-full h-full"
          >
            <img 
              src="https://i.ibb.co/7HgSdbL/William-Lucas.jpg"
              alt="Resume Image"
              className="w-full h-full object-cover shadow-2xl border border-gray-300/50"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}