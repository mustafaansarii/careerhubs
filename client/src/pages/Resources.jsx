import { useState } from 'react';
import { motion } from 'framer-motion';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { techStacks } from './Resources_links';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function Resources() {
  const [selectedStack, setSelectedStack] = useState(techStacks[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Get resources based on search and selected stack
  const getFilteredResources = (stack) => {
    return stack.resources.map(resource => {
      if (!resource.details) return null;
      
      const filteredDetails = Object.entries(resource.details).reduce((acc, [category, links]) => {
        const filteredLinks = links.filter(link => 
          (link.name?.toLowerCase().includes(searchQuery.toLowerCase())) ||
          (link.url?.toLowerCase().includes(searchQuery.toLowerCase())) ||
          (link.source?.toLowerCase().includes(searchQuery.toLowerCase()))
        );
        if (filteredLinks.length > 0) {
          acc[category] = filteredLinks;
        }
        return acc;
      }, {});

      return {
        ...resource,
        details: Object.keys(filteredDetails).length > 0 ? filteredDetails : null
      };
    }).filter(resource => 
      resource !== null && 
      (resource.details !== null || 
      (resource.title && resource.title.toLowerCase().includes(searchQuery.toLowerCase())))
    );
  };

  // Use global search when there's a query, otherwise use selected stack
  const displayedResources = searchQuery 
    ? techStacks.flatMap(stack => {
        return getFilteredResources(stack).map(resource => ({
          ...resource,
          stackName: stack.name
        }));
      }).filter(Boolean)
    : getFilteredResources(selectedStack);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <Helmet>
        <title>Resources | CareerHub</title>
        <meta name="description" content="Explore a vast collection of resources to help you advance your career." />
      </Helmet>
      <NavBar />
      <div className="max-w-7xl mx-auto px-4 py-10 mt-10">
        <div>
          {/* Breadcrumb Navigation */}
        <nav className="mb-3 flex items-center justify-between">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors flex items-center">
                <FaHome className="inline-block mr-1 w-4 h-4" />
                <span className="text-sm">Home</span>
              </Link>
              <span className="mx-2 text-gray-400">/</span>
            </li>
            <li className="text-gray-400">
              Resources
            </li>
          </ol>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search all resources..."
              className="px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </nav>
        
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar for Tech Stack List */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-4">
              <div className="lg:hidden">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full flex justify-between items-center p-3 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-7 00 dark:text-gray-200"
                >
                  <span>{selectedStack.name}</span>
                  <ChevronDownIcon className={`h-5 w-5 text-gray-500 dark:text-gray-300 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {isDropdownOpen && (
                  <ul className="mt-2 space-y-1 bg-white dark:bg-gray-800 rounded-md shadow-md">
                    {techStacks.map((stack) => (
                      <li
                        key={stack.name}
                        className={`p-2 rounded-md cursor-pointer transition-colors ${selectedStack.name === stack.name
                          ? 'bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200'
                          : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200'
                          }`}
                        onClick={() => {
                          setSelectedStack(stack);
                          setIsDropdownOpen(false);
                        }}
                      >
                        {stack.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Desktop View */}
              <div className="hidden lg:block">
                <h2 className="text-lg font-semibold mb-3 dark:text-white">Categories</h2>
                <ul className="space-y-2">
                  {techStacks.map((stack) => (
                    <li
                      key={stack.name}
                      className={`p-3 rounded-md cursor-pointer transition-colors ${selectedStack.name === stack.name
                        ? 'bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200'
                        }`}
                      onClick={() => setSelectedStack(stack)}
                    >
                      {stack.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">{selectedStack.name} Resources</h2>
              <div className="space-y-6">
                {displayedResources.map((resource, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold dark:text-white">{resource.title || 'Resources'}</h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                        {resource.stackName}
                      </span>
                    </div>
                    {resource.details && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {Object.entries(resource.details).map(([category, links]) => (
                          <div key={category} className="p-3 rounded-lg">
                            <h4 className="font-bold mb-2 dark:text-gray-200 capitalize">{category}</h4>
                            <ul className="space-y-3">
                              {links.map((link, i) => (
                                <li key={i} className="break-all">
                                  <div className="flex flex-col">
                                    <a
                                      href={link.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors flex items-center"
                                    >
                                      <span className="text-sm">
                                        {link.url.length > 30
                                          ? `${link.url.substring(0, Math.floor(link.url.length * 0.3))}...${link.url.substring(Math.floor(link.url.length * 0.7))}`
                                          : link.url}
                                      </span>
                                    </a>
                                   
                                    {link.source && (
                                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{link.name}: {link.source}</p>
                                    )}
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}