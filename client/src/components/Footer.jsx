'use client'

import { Link } from 'react-router-dom';

export default function Footer() {
  const links = {
    resources: [
      { name: 'Resume Templates', url: '/resume-builder' },
      { name: 'Resume ATS Checker', url: '/resume-ats' },
      { name: 'Interview Prep', url: '/interview-preparation' },
      { name: 'DSA Sheet', url: '/dsa-sheet' },
    ],
    tutorials: [
      { name: 'All Tutorials', url: '/tutorials' },
      { name: 'Data Structures', url: '/tutorials/data-structures' },
      { name: 'Python', url: '/tutorials/python' },
      { name: 'React', url: '/tutorials/react' },
    ],
    legal: [
      { name: 'About Us', url: '/about-us' },
      { name: 'Privacy Policy', url: '/privacy-policy' },
      { name: 'Contact Us', url: '/contact-us' },
      { name: 'Terms of Service', url: '/terms' },
    ]
  };

  return (
    <footer className="dark:bg-gray-900 dark:text-white bg-gray-100 text-gray-900 py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="space-y-2">
          <div className="flex lg:flex-1">
              <Link to="/" className="-m-1 p-1 flex items-center space-x-2">
                <div className="w-7 h-7 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <div className="text-lg font-bold bg-gradient-to-r dark:from-blue-600 dark:to-white bg-clip-text text-transparent from-blue-600 to-gray-900">
                  CareerHub
                </div>
              </Link>
            </div>
            <p className="text-gray-400 text-sm max-w-xs">
              Empowering students with career-building resources
            </p>
          </div>
          
          <div className="space-y-2">
            <h4 className="text-base font-semibold text-gray-800 dark:text-gray-200">Resources</h4>
            <ul className="space-y-2">
              {links.resources.map(link => (
                <li key={link.url}>
                  <Link to={link.url} className="text-sm text-gray-500 hover:text-blue-500 transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="text-base font-semibold text-gray-800 dark:text-gray-200">Tutorials</h4>
            <ul className="space-y-2">
              {links.tutorials.map(link => (
                <li key={link.url}>
                  <Link to={link.url} className="text-sm text-gray-500 hover:text-blue-500 transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="text-base font-semibold text-gray-800 dark:text-gray-200">Legal & Info</h4>
            <ul className="space-y-2">
              {links.legal.map(link => (
                <li key={link.url}>
                  <Link to={link.url} className="text-sm text-gray-500 hover:text-blue-500 transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="space-y-1">
            <p className="text-xs text-gray-400">© 2025 CareerHub. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}