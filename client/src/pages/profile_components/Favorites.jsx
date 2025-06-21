import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDownIcon, LinkIcon, StarIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import {CheckIcon, XMarkIcon} from '@heroicons/react/24/outline';

const Favorites = React.memo(({ 
  favoritesData, 
  activeSections, 
  setActiveSections,
  loadingFavoriteId,
  loadingDoneId,
  loadingFavoriteResumeId,
  loadingFavoriteRoadmapId,
  toggleFavorite,
  toggleDone,
  toggleFavoriteResume,
  toggleFavoriteRoadmap,
  formatDate
}) => {
  // Memoize handlers
  const handleToggleFavorite = useCallback((id) => {
    toggleFavorite(id);
  }, [toggleFavorite]);

  const handleToggleDone = useCallback((id) => {
    toggleDone(id);
  }, [toggleDone]);

  const handleToggleFavoriteResume = useCallback((id) => {
    toggleFavoriteResume(id);
  }, [toggleFavoriteResume]);

  const handleToggleFavoriteRoadmap = useCallback((id) => {
    toggleFavoriteRoadmap(id);
  }, [toggleFavoriteRoadmap]);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Your Favorites</h2>
      
      {/* Favorite Questions Dropdown */}
      {favoritesData?.favorite_questions?.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="group relative p-4 sm:p-5 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all mb-4"
          onClick={() => {
            if (activeSections.includes('questions')) {
              setActiveSections(activeSections.filter(section => section !== 'questions'));
            } else {
              setActiveSections([...activeSections, 'questions']);
            }
          }}
        >
          <div className="flex items-start justify-between">
            <div className="w-full">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-base sm:text-lg font-medium text-gray-900 dark:text-gray-100">
                  Favorite Questions ({favoritesData.favorite_questions.length})
                </h3>
                <ChevronDownIcon className={`h-5 w-5 text-gray-400 dark:text-gray-300 ml-3 flex-shrink-0 transition-transform ${
                  activeSections.includes('questions') ? 'rotate-180' : ''
                }`} />
              </div>
              {activeSections.includes('questions') && (
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" className="px-2 py-2">Title</th>
                        <th scope="col" className="px-2 py-2">Topic</th>
                        <th scope="col" className="px-2 py-2">Difficulty</th>
                        <th scope="col" className="px-2 py-2">Link</th>
                        <th scope="col" className="px-2 py-2">Favorite</th>
                        <th scope="col" className="px-2 py-2">Done</th>
                      </tr>
                    </thead>
                    <tbody>
                      {favoritesData.favorite_questions.map(question => (
                        <tr key={question.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <td className="px-2 py-2 font-medium text-gray-900 dark:text-white">
                            {question.title}
                          </td>
                          <td className="px-2 py-2">{question.topic}</td>
                          <td className="px-2 py-2">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              question.difficulty === 'Easy' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                              question.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                              'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                            }`}>
                              {question.difficulty}
                            </span>
                          </td>
                          <td className="px-2 py-2">
                            <a 
                              href={question.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                            >
                              <LinkIcon className="h-4 w-4" />
                            </a>
                          </td>
                          <td className="px-2 py-2">
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                handleToggleFavorite(question.id);
                              }}
                              disabled={loadingFavoriteId === question.id}
                              className={`p-1 ${
                                question.is_favorite 
                                  ? 'text-yellow-400 hover:text-yellow-500' 
                                  : 'text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400'
                              }`}
                            >
                              {loadingFavoriteId === question.id ? (
                                <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent"></div>
                              ) : (
                                <StarIcon className="h-4 w-4" />
                              )}
                            </button>
                          </td>
                          <td className="px-2 py-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleToggleDone(question.id);
                              }}
                              disabled={loadingDoneId === question.id}
                              className={`p-1 rounded transition-colors ${
                                question.is_done 
                                  ? 'text-green-500 hover:text-green-600 dark:text-green-400 dark:hover:text-green-300'
                                  : 'text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400'
                              }`}
                            >
                              {loadingDoneId === question.id ? (
                                <div className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full"></div>
                              ) : question.is_done ? (
                                <CheckIcon className="h-4 w-4" />
                              ) : (
                                <XMarkIcon className="h-4 w-4" />
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
          </div>
        </motion.div>
      )}

      {/* Favorite Resumes Dropdown */}
      {favoritesData?.favorite_resumes?.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="group relative p-4 sm:p-5 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all mb-4"
          onClick={() => {
            if (activeSections.includes('resumes')) {
              setActiveSections(activeSections.filter(section => section !== 'resumes'));
            } else {
              setActiveSections([...activeSections, 'resumes']);
            }
          }}
        >
          <div className="flex items-start justify-between">
            <div className="w-full">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-base sm:text-lg font-medium text-gray-900 dark:text-gray-100">
                  Favorite Resumes ({favoritesData.favorite_resumes.length})
                </h3>
                <ChevronDownIcon className={`h-5 w-5 text-gray-400 dark:text-gray-300 ml-3 flex-shrink-0 transition-transform ${
                  activeSections.includes('resumes') ? 'rotate-180' : ''
                }`} />
              </div>
              {activeSections.includes('resumes') && (
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" className="px-2 py-2">Title</th>
                        <th scope="col" className="px-2 py-2">Author</th>
                        <th scope="col" className="px-2 py-2">Overleaf</th>
                        <th scope="col" className="px-2 py-2">Favorite</th>
                      </tr>
                    </thead>
                    <tbody>
                      {favoritesData.favorite_resumes.map(resume => (
                        <tr key={resume.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <td className="px-2 py-2 font-medium text-gray-900 dark:text-white">
                            {resume.title}
                          </td>
                          <td className="px-2 py-2">{resume.authorname}</td>
                          <td className="px-2 py-2">
                            <a 
                              href={resume.overleaflink} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                            >
                              <LinkIcon className="h-4 w-4" />
                            </a>
                          </td>
                          <td className="px-2 py-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleToggleFavoriteResume(resume.id);
                              }}
                              disabled={loadingFavoriteResumeId === resume.id}
                              className={`p-1 ${
                                resume.is_favorite 
                                  ? 'text-yellow-400 hover:text-yellow-500' 
                                  : 'text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400'
                              }`}
                            >
                              {loadingFavoriteResumeId === resume.id ? (
                                <div className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full"></div>
                              ) : (
                                <StarIcon className="h-4 w-4" />
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
          </div>
        </motion.div>
      )}

      {/* Favorite Roadmaps Dropdown */}
      {favoritesData?.favorite_roadmaps?.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="group relative p-4 sm:p-5 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all mb-4"
          onClick={() => {
            if (activeSections.includes('roadmaps')) {
              setActiveSections(activeSections.filter(section => section !== 'roadmaps'));
            } else {
              setActiveSections([...activeSections, 'roadmaps']);
            }
          }}
        >
          <div className="flex items-start justify-between">
            <div className="w-full">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-base sm:text-lg font-medium text-gray-900 dark:text-gray-100">
                  Favorite Roadmaps ({favoritesData.favorite_roadmaps.length})
                </h3>
                <ChevronDownIcon className={`h-5 w-5 text-gray-400 dark:text-gray-300 ml-3 flex-shrink-0 transition-transform ${
                  activeSections.includes('roadmaps') ? 'rotate-180' : ''
                }`} />
              </div>
              {activeSections.includes('roadmaps') && (
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" className="px-2 py-2">Field</th>
                        <th scope="col" className="px-2 py-2">PDF Link</th>
                        <th scope="col" className="px-2 py-2">Favorite</th>
                      </tr>
                    </thead>
                    <tbody>
                      {favoritesData.favorite_roadmaps.map(roadmap => (
                        <tr key={roadmap.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <td className="px-2 py-2 font-medium text-gray-900 dark:text-white">
                            {roadmap.fieldname}
                          </td>
                          <td className="px-2 py-2">
                            <a 
                              href={roadmap.roadmaplink} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                            >
                              <LinkIcon className="h-4 w-4" />
                            </a>
                          </td>
                          <td className="px-2 py-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleToggleFavoriteRoadmap(roadmap.id);
                              }}
                              disabled={loadingFavoriteRoadmapId === roadmap.id}
                              className={`p-1 ${
                                roadmap.is_favorite 
                                  ? 'text-yellow-400 hover:text-yellow-500' 
                                  : 'text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400'
                              }`}
                            >
                              {loadingFavoriteRoadmapId === roadmap.id ? (
                                <div className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full"></div>
                              ) : (
                                <StarIcon className="h-4 w-4" />
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
          </div>
        </motion.div>
      )}

      {/* Empty state */}
      {(!favoritesData || 
        (favoritesData.favorite_questions?.length === 0 &&
         favoritesData.favorite_resumes?.length === 0 &&
         favoritesData.favorite_roadmaps?.length === 0)) && (
        <div className="text-center py-8">
          <p className="text-gray-600 dark:text-gray-300">You haven't added any favorites yet.</p>
          <Link 
            to="/career-resources" 
            className="mt-4 inline-block px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Explore Resources
          </Link>
        </div>
      )}
    </div>
  );
});

export default Favorites;
