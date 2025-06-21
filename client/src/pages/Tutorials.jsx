import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { Helmet } from 'react-helmet';

const Tutorials = () => {
  // Get stored category from localStorage or default to 'Core Computer Science'
  const [activeCategory, setActiveCategory] = useState(
    localStorage.getItem('activeCategory') || 'Core Computer Science'
  );
  const [activeSubject, setActiveSubject] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Update localStorage whenever activeCategory changes
  useEffect(() => {
    localStorage.setItem('activeCategory', activeCategory);
  }, [activeCategory]);

  const categories = [
    {
      name: 'Core Computer Science',
      subjects: [

        { name: 'Data Structures & Algorithms', description: 'Master data structure principles and their programming implementations.', url: 'data-structures' },
        { name: 'Computer Networks', description: 'Study network protocols, topologies, and security in computer networks.', url: 'computer-networks' },
        { name: 'Databases Management System', description: 'Understand database design for both relational and non-relational systems.', url: 'databases' },
        { name: 'Operating Systems', description: 'Explore OS principles including process and memory management systems.', url: 'operating-systems' },
        {name: 'Computer Architecture', description: 'Explore computer architecture principles including pipelining.', url: 'computer-architecture'}
      ]
    },
    {
      name: 'Programming Languages',
      subjects: [
        { name: 'C++', description: 'Master C++ programming with OOP, polymorphism, and inheritance concepts.', url: 'c++' },
        { name: 'Java', description: 'Master Java programming with OOP, polymorphism, and inheritance concepts.', url: 'java' },
        { name: 'JavaScript', description: 'Learn JavaScript programming with OOP and polymorphism techniques.', url: 'javascript' },
        { name: 'Python', description: 'Master Python programming with OOP and polymorphism concepts.', url: 'python' },
        { name: 'TypeScript', description: 'Master TypeScript programming with OOP and polymorphism concepts.', url: 'typescript' },
      ]
    },
    {
      name: 'Web Development',
      Fundamental:[
        { name: 'HTML', description: 'Master HTML principles including structure and semantic elements.', url: 'html' },
        { name: 'CSS', description: 'Learn CSS techniques for layout, styling, and animation effects.', url: 'css' },
        { name: 'JavaScript', description: 'Understand JavaScript for web development and interactivity.', url: 'javascript' },
      ],
      Frameworks:[
        { name: 'React', description: 'Master React with state management and component architecture.', url: 'react' },
        { name: 'Angular', description: 'Learn Angular with dependency injection and routing techniques.', url: 'angular' },
        { name: 'Vue', description: 'Understand Vue with reactive programming and component architecture.', url: 'vue' },
        { name: 'Next.js', description: 'Learn Next.js with server-side rendering and API route concepts.', url: 'nextjs' },
      ],
      Backend:[
        { name: 'Spring Boot', description: 'Master Spring Boot with dependency injection techniques.', url: 'spring-boot' },
        { name: 'Flask', description: 'Learn Flask with routing and dependency injection concepts.', url: 'flask' },
        { name: 'Express', description: 'Understand Express with routing and dependency injection.', url: 'express' },
        { name: 'Django', description: 'Master Django with routing and dependency injection techniques.', url: 'django' },
        { name: 'Node.js', description: 'Learn Node.js with routing and dependency injection concepts.', url: 'nodejs' },
      ]
    },
    {
      name: 'Data Science & AI',
      subjects: [
        { name: 'Data Analysis', description: 'Master Data Analysis principles including structure and semantic elements.', url: 'data-analysis' },
        { name: 'Machine Learning', description: 'Master Machine Learning principles including structure and semantic elements.', url: 'machine-learning' },
        { name: 'Big Data', description: 'Understand technologies for processing and analyzing large datasets.', url: 'big-data' },
      ]
    },
    {
      name: 'Databases',
      subjects: [
        { name: 'PostgreSQL', description: 'Master PostgreSQL with dependency injection techniques.', url: 'postgresql' },
        { name: 'MySQL', description: 'Learn MySQL with dependency injection techniques.', url: 'mysql' },
        { name: 'MongoDB', description: 'Understand MongoDB with dependency injection techniques.', url: 'mongodb' },
      ]
    }
  ];

  const renderCategoryButtons = (isMobile = false) => {
    return categories.map((category) => (
      <div key={category.name} className="relative">
        <button
          onClick={() => {
            setActiveCategory(category.name);
            setActiveSubject(null);
            if (isMobile) setIsMobileMenuOpen(false);
          }}
          className={`${
            isMobile 
              ? 'px-5 py-4 text-sm w-full flex items-center justify-between transition-all duration-200 active:scale-[0.98] group'
              : 'w-full text-left px-3 py-2 rounded-lg'
          } font-medium ${
            activeCategory === category.name
              ? isMobile
                ? 'text-blue-600 dark:text-blue-300'
                : 'text-blue-600 font-semibold bg-blue-50/80 dark:bg-blue-900/30 dark:text-blue-200'
              : isMobile
                ? 'text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100'
                : 'text-gray-700 hover:bg-gray-100/50 dark:text-gray-200 dark:hover:bg-gray-800/50'
          }`}
        >
          <span className="flex-1 text-left">{category.name}</span>
          {activeCategory === category.name && isMobile ? (
            <ChevronRightIcon className="w-4 h-4 ml-3 opacity-90 transform transition-transform group-hover:translate-x-1" />
          ) : (
            <div className="w-4 h-4 ml-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <ChevronRightIcon className="w-full h-full" />
            </div>
          )}
        </button>
        {!isMobile && <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200/50 dark:bg-gray-700/30" />}
      </div>
    ));
  };

  const renderSubcategories = () => {
    const activeCategoryData = categories.find(cat => cat.name === activeCategory);
    
    if (activeCategoryData) {
      // Handle Web Development category differently
      if (activeCategory === 'Web Development') {
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Fundamentals</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {activeCategoryData.Fundamental.map((subject) => renderSubjectCard(subject))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Frameworks</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {activeCategoryData.Frameworks.map((subject) => renderSubjectCard(subject))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Backend</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {activeCategoryData.Backend.map((subject) => renderSubjectCard(subject))}
              </div>
            </div>
          </div>
        );
      }

      // Handle other categories
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {activeCategoryData.subjects.map((subject) => renderSubjectCard(subject))}
        </div>
      );
    }

    return null;
  };

  const renderSubjectCard = (subject) => (
    <Link to={`/tutorials/${subject.url}`} key={subject.name} className="block">
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="relative p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl transition-all duration-300 border-2 border-gray-200 hover:border-indigo-200 dark:border-gray-700 dark:hover:border-indigo-400 cursor-pointer group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm hover:shadow-md"
      >
        <div className="space-y-1.5 sm:space-y-2 md:space-y-3">
          <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 group-hover:text-indigo-600 dark:text-gray-100 dark:group-hover:text-indigo-300">
            {subject.name}
          </h3>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-1.5 sm:space-y-2 md:space-y-4"
          >
            <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              {subject.description}
            </p>
            <div className="inline-flex items-center gap-1 mt-1 text-indigo-600 hover:text-indigo-700 dark:text-indigo-300 dark:hover:text-indigo-200 font-medium text-xs sm:text-sm md:text-base">
              Start Learning
              <ChevronRightIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );

  return (
    <>
      <Helmet>
        <title>Tutorials - Tech Learning Platform</title>
        <meta name="description" content="Explore a wide range of tutorials on computer science, programming languages, web development, data science, and databases." />
      </Helmet>
      <NavBar/>
      <div className="flex flex-col mt-16 md:mt-20">
        {/* Enhanced Mobile Category Switcher */}
        <motion.div 
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="md:hidden sticky top-16 z-20 bg-white/95 dark:bg-gray-900/95 border-b border-gray-200 dark:border-gray-800 backdrop-blur-sm"
        >
          <div className="px-4 py-3 flex items-center justify-between">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex items-center gap-2.5 text-gray-700 dark:text-gray-300 group"
            >
              <div className="relative">
                <span className="text-sm font-medium transition-all duration-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                  Browse Categories
                </span>
                <div className="absolute bottom-0 left-0 w-0 h-px bg-blue-600 transition-all duration-300 group-hover:w-full" />
              </div>
              <ChevronRightIcon 
                className={`w-5 h-5 transition-transform ${
                  isMobileMenuOpen 
                    ? 'rotate-90 text-blue-600 dark:text-blue-400' 
                    : 'text-gray-500 dark:text-gray-400'
                }`} 
              />
            </button>
          </div>
        </motion.div>

        {/* Enhanced Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="absolute left-0 top-0 h-full w-[80%] max-w-sm bg-white dark:bg-gray-900 shadow-2xl mt-16 border-r-2 border-indigo-500/30 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 pt-5 border-b border-gray-200 dark:border-gray-800 bg-gradient-to-r from-indigo-50/70 to-blue-50/70 dark:from-indigo-900/20 dark:to-blue-900/20">
                <div className="flex justify-between items-center w-full">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">Learning Paths</h2>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-1.5 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors w-full max-w-[40px]"
                  >
                    <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="h-[calc(100vh-4.5rem)] overflow-y-auto scroll-smooth scrollbar-thin scrollbar-thumb-gray-400/30 dark:scrollbar-thumb-gray-600/50 scrollbar-track-transparent pb-4">
                <div className="p-4 space-y-3">
                  {renderCategoryButtons(true)}
                </div>
              </div>
              {/* Scrolled gradient indicators */}
              <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white dark:from-gray-900 pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white dark:from-gray-900 pointer-events-none" />
            </motion.div>
          </motion.div>
        )}

        {/* Desktop Layout */}
        <div className="flex flex-col md:flex-row">
          {/* Left Navigation (Desktop) */}
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="hidden md:block w-full md:w-64 lg:w-72 p-4 border-b md:border-r border-gray-200 dark:border-gray-800 h-[calc(100vh-5rem)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent"
          >
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Career Path Tutorials</h2>
            <div className="space-y-0.5">
              {renderCategoryButtons()}
            </div>
          </motion.div>

          {/* Content Area */}
          <div className="flex-1 p-4 sm:p-6 md:p-8">
            {activeCategory && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6 md:space-y-8"
              >
                {/* Breadcrumb Navigation */}
                <nav className="flex mb-4 sm:mb-6" aria-label="Breadcrumb">
                  <ol className="inline-flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm">
                    <li className="inline-flex items-center">
                      <Link 
                        to="/" 
                        className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="inline-flex items-center">
                      <ChevronRightIcon className="w-4 h-4 mx-1 sm:mx-2 text-gray-400" />
                      <Link 
                        to="/tutorials" 
                        className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                      >
                        Tutorials
                      </Link>
                    </li>
                    <li className="inline-flex items-center">
                      <ChevronRightIcon className="w-4 h-4 mx-1 sm:mx-2 text-gray-400" />
                      <span className="text-indigo-600 dark:text-indigo-300">
                        {activeCategory}
                      </span>
                    </li>
                  </ol>
                </nav>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
                  Master <span className="bg-gradient-to-r dark:from-blue-600 dark:to-white bg-clip-text text-transparent from-blue-600 to-gray-900">{activeCategory}</span>
                </h2>
                {renderSubcategories()}
              </motion.div>
            )}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Tutorials;
