import Navbar from '../../components/NavBar'
import Footer from '../../components/Footer'
import { FaPlayCircle, FaClock, FaUserFriends, FaComments } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { howItWorks, testimonials } from './intervew_service'
import { SparklesIcon, StarIcon } from '@heroicons/react/24/outline'
import { HomeIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { Helmet } from 'react-helmet';

const InterviewPage = () => {
    return (
        <div className="min-h-screen mt-15 md:mt-10">
            <Helmet>
                <title>Ace Your Interview - CareerHub</title>
                <meta name="description" content="Prepare for your next job interview with our AI-powered practice tool. Get personalized feedback and boost your confidence." />
            </Helmet>
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
                {/* Enhanced Breadcrumb */}
                <nav className="flex mb-8 px-2 sm:px-0">
                    <ol className="inline-flex items-center space-x-1 md:space-x-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                        <li className="inline-flex items-center">
                            <a href="https://interview.careerhubs.info/" className="inline-flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                <HomeIcon className="w-4 h-4 mr-2" />
                                Home
                            </a>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <ChevronDownIcon className="w-4 h-4 mx-2 text-gray-400 transform rotate-90" />
                                <span className="ml-1 md:ml-2">Interview Preparation</span>
                            </div>
                        </li>
                    </ol>
                </nav>
                {/* Hero Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
                >
                    <div className="flex-1 text-left space-y-6 mt-10">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Master Your Next Interview
                        </h1>
                        <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
                            Elevate your interview skills with AI-driven practice sessions. Get real-time feedback and insights to boost your confidence and performance.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <a href="https://interview.careerhubs.info/" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:scale-105 transition-transform shadow-lg hover:shadow-xl text-center">
                                Start Practicing
                            </a>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-xs md:text-sm">
                            Exciting new mock interview features coming soon to CareerHub - stay tuned for updates!
                        </p>
                    </div>
                    <div className="flex-1 hidden md:block max-w-[500px] mx-auto">
                        <img src="https://i.ibb.co/PzfXmZsF/interview.png" alt="Interview Illustration" className="w-full h-auto rounded-lg" />
                    </div>
                </motion.div>
                {/* How It Works Section */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="py-8 md:py-12"
                >
                    <div className="max-w-7xl mx-auto px-4">
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 dark:text-white"
                        >
                            Our Process
                        </motion.h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                            {howItWorks.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    className="p-4 md:p-6 lg:p-8 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-400 transition-all bg-white dark:bg-gray-900 shadow-sm hover:shadow-md"
                                >
                                    <div className="text-2xl md:text-3xl lg:text-4xl text-blue-600 dark:text-blue-400 mb-3 md:mb-4 lg:mb-6">
                                        {step.icon === 'clock' && <FaClock />}
                                        {step.icon === 'user-friends' && <FaUserFriends />}
                                        {step.icon === 'comments' && <FaComments />}
                                    </div>
                                    <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2 md:mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-xs md:text-sm lg:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                                        {step.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
                
                {/* Testimonials Section */}
                <section className="py-12 md:py-16 lg:py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-center mb-8 sm:mb-12"
                        >
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">
                                Success Stories
                            </h2>
                        </motion.div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                            {testimonials.map((testimonial, index) => (
                                <motion.div
                                    key={testimonial.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="p-4 sm:p-6 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow"
                                >
                                    <div className="flex items-center mb-4">
                                        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                                            {testimonial.name[0]}
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-lg font-medium text-gray-800 dark:text-gray-100">
                                                {testimonial.name}
                                            </p>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                        &ldquo;{testimonial.quote}&rdquo;
                                    </p>
                                    <div className="mt-4 flex space-x-1">
                                        {[...Array(5)].map((_, i) => (
                                            <StarIcon key={i} className="h-4 w-4 text-yellow-400" />
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
                
            </div>
            <Footer />
        </div>
    );
}

export default InterviewPage;