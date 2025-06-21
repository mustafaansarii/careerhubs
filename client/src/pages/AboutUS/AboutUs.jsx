import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { FaRocket, FaLightbulb, FaUsers, FaHandsHelping, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb Navigation */}
          <nav className="mb-4">
            <ol className="list-none p-0 inline-flex">
              <li className="flex items-center">
                <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors flex items-center">
                  <FaHome className="inline-block mr-1 w-4 h-4" />
                  <span className="text-sm">Home</span>
                </Link>
                <span className="mx-2 text-gray-400">/</span>
              </li>
              <li className="text-gray-400">About Us</li>
            </ol>
          </nav>

          {/* Hero Section */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              About CareerHub
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Empowering careers through innovation, accessibility, and personalized guidance
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            {/* Mission Section */}
            <section className="rounded-lg p-6 sm:p-8 bg-white dark:bg-gray-800 shadow-sm">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                  <FaRocket className="mr-3 text-blue-500 w-6 h-6" />
                  Our Mission
                </h2>
                <p className="text-base text-gray-600 dark:text-gray-400">
                  To empower individuals in their career journeys by providing comprehensive resources, 
                  personalized guidance, and cutting-edge tools for professional development. We're 
                  committed to helping people achieve their full potential in the ever-evolving job market.
                </p>
              </div>
            </section>

            {/* Story Section */}
            <section className="rounded-lg p-6 sm:p-8 bg-white dark:bg-gray-800 shadow-sm">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                  <FaLightbulb className="mr-3 text-yellow-500 w-6 h-6" />
                  Our Story
                </h2>
                <p className="text-base text-gray-600 dark:text-gray-400">
                  CareerHub was founded in 2023 by a team of career experts and technologists who 
                  recognized the need for accessible, high-quality career guidance in the digital age. 
                  What started as a small project has grown into a comprehensive platform serving 
                  thousands of users worldwide.
                </p>
              </div>
            </section>

            {/* Values Section */}
            <section className="rounded-lg p-6 sm:p-8 bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center">
                  <FaUsers className="mr-3 text-green-500 w-6 h-6" />
                  Our Values
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="p-6 rounded-xl hover:shadow-lg transition-all border-2 border-blue-100 dark:border-blue-900/50 bg-gradient-to-b from-blue-50/50 to-white dark:from-blue-900/10 dark:to-gray-800">
                    <div className="text-blue-500 mb-3">
                      <FaHandsHelping className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">Accessibility</h3>
                    <p className="text-base text-gray-600 dark:text-gray-400">
                      Making career resources available to everyone, everywhere, regardless of 
                      background or financial situation.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl hover:shadow-lg transition-all border-2 border-purple-100 dark:border-purple-900/50 bg-gradient-to-b from-purple-50/50 to-white dark:from-purple-900/10 dark:to-gray-800">
                    <div className="text-purple-500 mb-3">
                      <FaLightbulb className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">Innovation</h3>
                    <p className="text-base text-gray-600 dark:text-gray-400">
                      Leveraging the latest technology to create cutting-edge career tools and 
                      personalized learning experiences.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl hover:shadow-lg transition-all border-2 border-green-100 dark:border-green-900/50 bg-gradient-to-b from-green-50/50 to-white dark:from-green-900/10 dark:to-gray-800">
                    <div className="text-green-500 mb-3">
                      <FaRocket className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">Empowerment</h3>
                    <p className="text-base text-gray-600 dark:text-gray-400">
                      Equipping users with the skills, knowledge, and confidence to succeed in 
                      their chosen career paths.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}