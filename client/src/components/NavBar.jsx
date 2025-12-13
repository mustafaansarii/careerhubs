'use client'

import { useState, useEffect } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import { Link, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../auth/authSlice'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Jobs', href: 'https://jobs.careerhubs.info/' },
  { name: 'Resume Builder', href: '/resume-builder' },
  { name: 'DSA Sheet', href: '/dsa-sheet' },
  { name: 'Resources', href: '/resources' },
  { name: 'Roadmaps', href: '/roadmap' },
  { name: 'Tutorials', href: '/tutorials' },
  { name: 'Peer Mocks', href: '/interview-preparation' },
]

const Resume=[
  {name: 'Resume Builder (LaTeX)', href: '/resume-builder'},
  { name: 'Resume Builder (Form)', href: '/resume-form' },
  {name: 'Resume Analysis & ATS', href: '/resume-ats'},
]

const Interview=[
  {name: 'AI Mock Interview', href: '/interview-preparation'},
  {name: 'MeetMock', href: 'https://meet.careerhubs.info/'},
]

const authLinks = user => user ? [
  { name: 'Profile & Progress', href: '/profile' },
  { name: 'My Resumes', href: '/saved-templates' },
  { name: 'Logout', href: '/login' }
] : [
  { name: 'Login', href: '/login' }
];

const tutorialCategories = {
  coreCS: [
    
    { name: 'Data Structures & Algorithms', href: '/tutorials/data-structures' },
    { name: 'Computer Networks', href: '/tutorials/computer-networks' },
    { name: 'Databases', href: '/tutorials/databases' },
    { name: 'Operating Systems', href: '/tutorials/operating-systems' },
  ],
  webFrameworks: [
    { name: 'Django', href: '/tutorials/django' },
    { name: 'Express', href: '/tutorials/express' },
    { name: 'Spring Boot', href: '/tutorials/spring-boot' },
    { name: 'Next.js', href: '/tutorials/nextjs' },
    { name: 'React', href: '/tutorials/react' },
  ],
  programmingLanguages: [
    { name: 'TypeScript', href: '/tutorials/typescript' },
    { name: 'C++', href: '/tutorials/c++' },
    { name: 'JavaScript', href: '/tutorials/javascript' },
    { name: 'Python', href: '/tutorials/python' },
    { name: 'Java', href: '/tutorials/java' },
  ]
}

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation();
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const handleLogout = async () => {
    try {
      await dispatch(logoutUser()).unwrap();
      setIsMenuOpen(false);
      window.location.href = '/login';
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const handleClickOutside = (event) => {
    if (event.target.closest('.user-menu') === null) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      <div className="dark:text-white">
        <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-sm shadow-sm">
          <nav aria-label="Global" className="flex items-center justify-between p-5 lg:px-8 max-w-7xl mx-auto sm:p-3">
            <div className="flex lg:flex-1">
              <Link to="/" className="-m-1 p-1 flex items-center space-x-2">
                <div className="w-7 h-7 bg-gradient-to-r from-blue-600 to-indigo-900 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <div className="text-lg font-bold bg-gradient-to-r dark:from-blue-600 dark:to-white bg-clip-text text-transparent from-blue-600 to-gray-900">
                  CareerHub
                </div>
              </Link>
            </div>
            <div className="flex items-center lg:hidden space-x-4">
              <Link 
                to="#" 
                onClick={() => window.dispatchEvent(new CustomEvent('openDonateModal'))}
                className="text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 px-3 py-1 rounded-md transition-colors duration-200 border border-blue-600 hover:border-blue-700"
              >
                Donate
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-700 dark:text-white"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="h-7 w-7" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-6">
              {navLinks.map((item) => (
                <div key={item.name} className="relative group">
                  {item.name === 'Resume Builder' || item.name === 'Peer Mocks' || item.name === 'Tutorials & Courses' ? (
                    <>
                      <div className="text-sm/6 font-semibold text-gray-900 dark:text-white hover:text-blue-600 transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-600 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
                        {item.name}
                      </div>
                      {item.name === 'Resume Builder' && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100 dark:border-gray-700">
                          <div className="p-2">
                            {Resume.map((resumeItem) => (
                              <Link
                                key={resumeItem.name}
                                to={resumeItem.href}
                                className="flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/30 px-2 py-1.5 rounded-md transition-all duration-200"
                              >
                                <span>{resumeItem.name}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                      {item.name === 'Peer Mocks' && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100 dark:border-gray-700">
                          <div className="p-2">
                            {Interview.map((interviewItem) => (
                              <Link
                                key={interviewItem.name}
                                to={interviewItem.href}
                                className="flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/30 px-2 py-1.5 rounded-md transition-all duration-200"
                              >
                                <span>{interviewItem.name}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                      {item.name === 'Tutorials & Courses' && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[600px] bg-white dark:bg-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100 dark:border-gray-700">
                          <div className="p-4">
                            <div className="grid grid-cols-3 gap-4">
                              {/* Core CS Subjects */}
                              <div>
                                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 px-2 py-1 bg-gray-50 dark:bg-gray-700/20 rounded-md">
                                  Core CS Subjects
                                </h3>
                                <div className="space-y-1">
                                  {tutorialCategories.coreCS.map((tutorial) => (
                                    <Link
                                      key={tutorial.name}
                                      to={tutorial.href}
                                      className="flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/30 px-2 py-1.5 rounded-md transition-all duration-200"
                                    >
                                      <span>{tutorial.name}</span>
                                    </Link>
                                  ))}
                                </div>
                              </div>

                              {/* Programming Languages */}
                              <div>
                                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 px-2 py-1 bg-gray-50 dark:bg-gray-700/20 rounded-md">
                                  Programming Languages
                                </h3>
                                <div className="space-y-1">
                                  {tutorialCategories.programmingLanguages.map((tutorial) => (
                                    <Link
                                      key={tutorial.name}
                                      to={tutorial.href}
                                      className="flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/30 px-2 py-1.5 rounded-md transition-all duration-200"
                                    >
                                      <span>{tutorial.name}</span>
                                    </Link>
                                  ))}
                                </div>
                              </div>

                              {/* Web Frameworks */}
                              <div>
                                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 px-2 py-1 bg-gray-50 dark:bg-gray-700/20 rounded-md">
                                  Web Frameworks
                                </h3>
                                <div className="space-y-1">
                                  {tutorialCategories.webFrameworks.map((tutorial) => (
                                    <Link
                                      key={tutorial.name}
                                      to={tutorial.href}
                                      className="flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/30 px-2 py-1.5 rounded-md transition-all duration-200"
                                    >
                                      <span>{tutorial.name}</span>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="px-4 py-3 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/10 rounded-b-lg">
                            <Link 
                              to="/tutorials" 
                              onClick={() => setIsMenuOpen(false)}
                              className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center space-x-2"
                            >
                              <span>View All Tutorials</span>
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-sm/6 font-semibold text-gray-900 dark:text-white hover:text-blue-600 transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-600 hover:after:w-full after:transition-all after:duration-300"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <Link 
                to="#" 
                onClick={() => window.dispatchEvent(new CustomEvent('openDonateModal'))}
                className="text-sm/6 font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 px-3 py-1.5 rounded-md transition-colors duration-200 mr-3"
              >
                Donate
              </Link>
              {user ? (
                <div className="relative user-menu">
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-sm/6 font-semibold text-gray-900 dark:text-white hover:text-blue-600 cursor-pointer transition-colors duration-200 flex items-center pt-1"
                  >
                    <UserCircleIcon className="h-7 w-7" />
                  </button>
                  {isMenuOpen && (
                    <div className="absolute right-0 mt-3 w-36 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5">
                      <div className="space-y-1">
                        {authLinks(user).slice(0, -1).map((link) => (
                          <Link
                            key={link.name}
                            to={link.href}
                            className="block px-3 py-1.5 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {link.name}
                          </Link>
                        ))}
                        <button
                          onClick={handleLogout}
                          className="block px-3 py-1.5 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left hover:text-red-700 dark:text-red-500 dark:hover:text-red-400"
                        >
                          {authLinks(user)[authLinks(user).length - 1].name}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link to="/login" className="text-sm/6 font-semibold text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-400 px-3 py-1.5 rounded-md transition-colors duration-200">
                  Log in <span aria-hidden="true">&rarr;</span>
                </Link>
              )}
            </div>
          </nav>
          <div className="border-t border-gray-200 dark:border-gray-700" />
          <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
            <div className="fixed inset-0 z-50 bg-black/50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 dark:bg-gray-900 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <Link to="/" className="-m-1.5 p-1.5 flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">C</span>
                  </div>
                  <div className="text-xl font-bold bg-gradient-to-r dark:from-blue-600 dark:to-white bg-clip-text text-transparent from-blue-600 to-gray-900">
                    CareerHub
                  </div>
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-white"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-1 py-6">
                    {navLinks.map((item) => (
                      item.name === 'Resume Builder' ? (
                        <div key="resume-builder-group">
                          <Link
                            key="resume-templates"
                            to="/resume-form"
                            className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold text-black dark:text-white hover:text-blue-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Resume Builder (Form)
                          </Link>
                          <Link
                            key="resume-latex"
                            to="/resume-builder"
                            className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold text-black dark:text-white hover:text-blue-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Resume Builder (LaTeX)
                          </Link>
                          
                          <Link
                            key="resume-ats"
                            to="/resume-ats"
                            className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold text-black dark:text-white hover:text-blue-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Resume Analysis & ATS
                          </Link>
                          
                        </div>
                      ) : item.name === 'Peer Mocks' ? (
                        <div key="peer-mocks-group">
                          {Interview.map((interviewItem) => (
                            <Link
                              key={interviewItem.name}
                              to={interviewItem.href}
                              className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold text-black dark:text-white hover:text-blue-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {interviewItem.name}
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold text-black dark:text-white hover:text-blue-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )
                    ))}
                  </div>
                  <div className="py-6">
                    {user ? (
                      <div className="space-y-1">
                        {authLinks(user).slice(0, -1).map((link) => (
                          <Link
                            key={link.name}
                            to={link.href}
                            className="-mx-3 block rounded-lg px-3 py-2.5 text-lg font-semibold text-black dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {link.name}
                          </Link>
                        ))}
                        <button
                          onClick={handleLogout}
                          className="-mx-3 block rounded-lg px-3 py-2.5 text-lg font-semibold text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-400 hover:bg-gray-50 dark:hover:bg-gray-800 w-full text-left"
                        >
                          {authLinks(user)[authLinks(user).length - 1].name}
                        </button>
                      </div>
                    ) : (
                      <Link
                        to="/login"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-lg font-semibold text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                      >
                        Log in
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </header>
      </div>
    </>
  )
}