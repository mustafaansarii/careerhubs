'use client'
import { motion } from 'framer-motion'
import { ChevronDownIcon, StarIcon, LinkIcon, HomeIcon, CheckIcon } from '@heroicons/react/24/outline'
import { useState, useEffect, useCallback } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import config from '../config'
import useSWR from 'swr'
import { Link, useNavigate } from 'react-router-dom'
import { FaHome } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';


export default function DSAPage() {
  const [activeTopics, setActiveTopics] = useState([]);
  const accessToken = localStorage.getItem('access_token');
  const [loadingFavorite, setLoadingFavorite] = useState(null);
  const [loadingComplete, setLoadingComplete] = useState(null);
  const navigate = useNavigate();

  const fetcher = useCallback((url) => fetch(url, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  }).then(res => {
    if (res.status === 401) {
      localStorage.removeItem('access_token');
      toast.error('Session expired, please login again.');
      window.location.href = '/login';
      throw new Error('Unauthorized');
    }
    return res.json();
  }).catch(error => {
    console.error("Error fetching data:", error);
    throw error;
  }), [accessToken, navigate]);

  const { data: questions, mutate } = useSWR(`${config.Backend_Api}/api/careerhub/questions/`, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    refreshWhenOffline: false,
    refreshWhenHidden: false,
    refreshInterval: 0,
    dedupingInterval: 60000,
    focusThrottleInterval: 60000,
    shouldRetryOnError: false,
    keepPreviousData: true
  });

  // Group questions by topic
  const topics = questions?.reduce((acc, question) => {
    if (!acc[question.topic]) {
      acc[question.topic] = [];
    }
    acc[question.topic].push(question);
    return acc;
  }, {});

  // Define the desired topic order
  const topicOrder = [
    'Arrays',
    'Strings',
    'Linked Lists',
    'Trees',
    'Graphs',
    'Recursion/Backtracking',
    'Dynamic Programming',
    'Stacks/Queues',
    'Heaps',
    'Hash Tables',
    'Sorting/Searching',
    'Bit Manipulation',
    'Greedy Algorithms',
    'Mathematics / Number Theory',
    'Trie',
    'Advanced Data Structure'
  ];

  // Define the difficulty order
  const difficultyOrder = {
    'Beginner': 0,
    'Easy': 1,
    'Medium': 2,
    'Hard': 3
  };

  // Sort topics and questions
  const sortedTopics = Object.entries(topics || {})
    .sort(([a], [b]) => topicOrder.indexOf(a) - topicOrder.indexOf(b))
    .map(([topic, questions]) => [
      topic,
      questions.sort((a, b) => difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty])
    ]);

  const toggleFavorite = useCallback(async (id) => {
    setLoadingFavorite(id);
    try {
      const response = await fetch(`${config.Backend_Api}/api/careerhub/questions/${id}/toggle_favorite/`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (response.status === 401) {
        localStorage.removeItem('access_token');
        toast.error('Session expired, please login again.');
        window.location.href = '/login';
        return;
      }

      if (!response.ok) {
        throw new Error('Failed to toggle favorite');
      }
      
      const data = await response.json();
      console.log('Favorite toggled successfully:', data);
      
      // Optimistic UI update
      mutate(questions.map(question => 
        question.id === id ? { ...question, is_favorite: !question.is_favorite } : question
      ), false);
      
    } catch (error) {
      console.error('Error toggling favorite:', error);
    } finally {
      setLoadingFavorite(null);
    }
  }, [accessToken, mutate, questions, navigate]);

  const toggleCompleted = useCallback(async (id) => {
    setLoadingComplete(id);
    try {
      const response = await fetch(`${config.Backend_Api}/api/careerhub/questions/${id}/toggle_done/`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 401) {
        localStorage.removeItem('access_token');
        toast.error('Session expired, please login again.');
        window.location.href = '/login';
        return;
      }
      
      if (!response.ok) {
        throw new Error('Failed to toggle completed status');
      }
      
      const data = await response.json();
      console.log('Completion status toggled successfully:', data);
      
      // Optimistic UI update
      mutate(questions.map(question => 
        question.id === id ? { ...question, is_done: !question.is_done } : question
      ), false);
      
    } catch (error) {
      console.error('Error toggling completed status:', error);
    } finally {
      setLoadingComplete(null);
    }
  }, [accessToken, mutate, questions, navigate]);

  // Calculate progress
  const totalQuestions = questions?.length || 0;
  const completedCount = questions?.filter(q => q.is_done).length || 0;
  const progress = (completedCount / totalQuestions) * 100;

  if (!questions) return (
    <>
      <Helmet>
        <title>DSA | CareerHub</title>
        <meta name="description" content="Ace your coding interviews with this curated list of top Data Structures & Algorithms problems." />
      </Helmet>

      <NavBar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-12">
        {/* Breadcrumb Skeleton */}
        <div className="flex mb-6">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24 animate-pulse"></div>
        </div>

        {/* Progress Skeleton */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-16 animate-pulse"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20 animate-pulse"></div>
          </div>
          <div className="w-full h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
        </div>

        {/* Description Skeleton */}
        <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg mb-8 animate-pulse">
          <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-1/2 mb-2"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-5/6"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
          </div>
        </div>

        {/* Topics Skeleton */}
        <div className="space-y-4">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="p-4 sm:p-5 rounded-lg border border-gray-200 dark:border-gray-700 animate-pulse">
              <div className="flex justify-between items-center mb-2">
                <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-12"></div>
              </div>
              <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full mb-2"></div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );

  return (
    <>
      <Helmet>
        <title>DSA | CareerHub</title>
        <meta name="description" content="Ace your coding interviews with this curated list of top Data Structures & Algorithms problems." />
      </Helmet>

      <NavBar />
      <section className="py-8 md:py-12 mt-12">
        {/* Breadcrumb Navigation */}
        <nav className="mb-6 px-4 sm:px-6 max-w-4xl mx-auto">
          <ol className="inline-flex items-center space-x-1 md:space-x-2">
            <li className="inline-flex items-center">
              <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                <FaHome className="w-4 h-4 mr-2" />
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                </svg>
                <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">DSA</span>
              </div>
            </li>
          </ol>
        </nav>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          

          {/* Global Progress */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Progress</span>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{completedCount}/{totalQuestions} ({Math.round(progress)}%)</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
            </div>
          </div>

          {/* Description */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 100 }}
            viewport={{ once: true }}
            className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-8"
          >
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Top Coding Interview Problems</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Ace your coding interviews with this curated list of top Data Structures & Algorithms problems. Covering essential concepts and frequently asked by leading tech companies like Google, Amazon, and Microsoft.
            </p>
          </motion.div>

          <div className="space-y-4">
            {sortedTopics.map(([topic, questions], index) => {
              const topicCompleted = questions.filter(q => q.is_done).length;
              const topicProgress = (topicCompleted / questions.length) * 100;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ type: 'spring', delay: index * 0.1, stiffness: 300 }}
                  viewport={{ once: true }}
                  className="group relative p-4 sm:p-5 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all cursor-pointer"
                  onClick={() => {
                    setActiveTopics(prev => 
                      prev.includes(index) 
                        ? prev.filter(i => i !== index) 
                        : [...prev, index]
                    );
                  }}
                >
                  <div className="flex items-start justify-between">
                    <div className="w-full">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-base sm:text-lg font-medium text-gray-900 dark:text-gray-100">
                          {topic}
                        </h3>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {topicCompleted}/{questions.length}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700 mb-2">
                        <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: `${topicProgress}%` }}></div>
                      </div>
                      {activeTopics.includes(index) && (
                        <div className="mt-4 overflow-x-auto">
                          <table 
                            className="w-full text-xs sm:text-sm text-left text-gray-500 dark:text-gray-400 cursor-default"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 cursor-default">
                              <tr>
                                <th scope="col" className="px-2 py-2">#</th>
                                <th scope="col" className="px-2 py-2">Title</th>
                                <th scope="col" className="px-2 py-2">Difficulty</th>
                                <th scope="col" className="px-2 py-2">Link</th>
                                <th scope="col" className="px-2 py-2">Status</th>
                                <th scope="col" className="px-2 py-2">Favorite</th>
                              </tr>
                            </thead>
                            <tbody>
                              {questions.map((question, index) => (
                                <tr key={question.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                  <td className="px-2 py-2">{index + 1}</td>
                                  <td className="px-2 py-2 font-medium text-gray-900 dark:text-white">
                                    {question.title}
                                  </td>
                                  <td className="px-2 py-2">
                                    <span className={`px-2 py-1 text-xs rounded-full ${
                                      question.difficulty === 'Beginner' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300' :
                                      question.difficulty === 'Easy' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' :
                                      question.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300' :
                                      'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                                    }`}>
                                      {question.difficulty}
                                    </span>
                                  </td>
                                  <td className="px-2 py-2">
                                    <a 
                                      href={question.link} 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      onClick={(e) => e.stopPropagation()}
                                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                                    >
                                      <img 
                                        src={question.link?.includes("leetcode") ? "https://codolio.com/icons/leetcode_dark.png" : "https://media.geeksforgeeks.org/gfg-gg-logo.svg"} 
                                        alt={question.link?.includes("leetcode") ? "LeetCode" : "GeeksforGeeks"} 
                                        className="h-6 w-6" 
                                      />
                                    </a>
                                  </td>
                                  <td className="px-2 py-2">
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        toggleCompleted(question.id);
                                      }}
                                      disabled={loadingComplete === question.id}
                                      className={`p-1 rounded transition-colors cursor-pointer ${
                                        question.is_done 
                                          ? 'text-green-500 hover:text-green-600 dark:text-green-400 dark:hover:text-green-300'
                                          : 'text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400'
                                      }`}
                                    >
                                      {loadingComplete === question.id ? (
                                        <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                                      ) : (
                                        question.is_done ? (
                                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                          </svg>
                                        ) : (
                                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                          </svg>
                                        )
                                      )}
                                    </button>
                                  </td>
                                  <td className="px-2 py-2">
                                    <button 
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        toggleFavorite(question.id);
                                      }}
                                      disabled={loadingFavorite === question.id}
                                      className="text-yellow-400 hover:text-yellow-500 cursor-pointer"
                                    >
                                      {loadingFavorite === question.id ? (
                                        <div className="w-4 h-4 border-2 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
                                      ) : (
                                        <StarIcon className={`h-4 w-4 ${question.is_favorite ? 'fill-current' : ''}`} />
                                      )}
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </div>
                    <ChevronDownIcon className={`h-5 w-5 text-gray-400 dark:text-gray-300 ml-3 flex-shrink-0 transition-transform chevron-icon ${
                      activeTopics.includes(index) ? 'rotate-180' : ''
                    }`} />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}