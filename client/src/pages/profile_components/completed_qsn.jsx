import React, { useCallback, useMemo } from 'react';
import { ChevronDownIcon, LinkIcon, StarIcon, CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
const CompletedQuestions = React.memo(({
  completedQuestions,
  paginatedCompletedQuestions,
  activeSections,
  setActiveSections,
  loadingFavoriteId,
  loadingCompletedId,
  toggleFavorite,
  toggleCompleted,
  completedQuestionsPage,
  setCompletedQuestionsPage,
  formatDate
}) => {
  const itemsPerPage = 10;

  // Memoize handlers
  const handleToggleFavorite = useCallback((id) => {
    toggleFavorite(id);
  }, [toggleFavorite]);

  const handleToggleCompleted = useCallback((id) => {
    toggleCompleted(id);
  }, [toggleCompleted]);

  // Memoize paginated questions
  const paginatedQuestions = useMemo(() => {
    const questions = completedQuestions?.completed_questions || [];
    // Sort by completed_at in descending order (newest first)
    const sortedQuestions = questions.sort((a, b) => 
      new Date(b.completed_at) - new Date(a.completed_at)
    );
    return sortedQuestions.slice(0, completedQuestionsPage * itemsPerPage);
  }, [completedQuestions, completedQuestionsPage]);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Completed Questions</h2>
      
      {completedQuestions?.completed_questions?.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="group relative p-4 sm:p-5 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all mb-4"
        >
          <div 
            className="flex items-start justify-between cursor-pointer"
            onClick={() => {
              if (activeSections.includes('completed')) {
                setActiveSections(activeSections.filter(section => section !== 'completed'));
              } else {
                setActiveSections([...activeSections, 'completed']);
              }
            }}
          >
            <div className="w-full">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-base sm:text-lg font-medium text-gray-900 dark:text-gray-100">
                  Completed Questions ({completedQuestions.completed_questions.length})
                </h3>
                <ChevronDownIcon className={`h-5 w-5 text-gray-400 dark:text-gray-300 ml-3 flex-shrink-0 transition-transform ${
                  activeSections.includes('completed') ? 'rotate-180' : ''
                }`} />
              </div>
              {activeSections.includes('completed') && (
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
                        <th scope="col" className="px-2 py-2">Completed At</th>
                      </tr>
                    </thead>
                    <tbody>
                      {paginatedQuestions.map(question => (
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
                                handleToggleCompleted(question.id);
                              }}
                              disabled={loadingCompletedId === question.id}
                              className={`p-1 rounded transition-colors ${
                                question.is_done 
                                  ? 'text-green-500 hover:text-green-600 dark:text-green-400 dark:hover:text-green-300'
                                  : 'text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400'
                              }`}
                            >
                              {loadingCompletedId === question.id ? (
                                <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent"></div>
                              ) : question.is_done ? (
                                <CheckIcon className="h-4 w-4" />
                              ) : (
                                <XMarkIcon className="h-4 w-4" />
                              )}
                            </button>
                          </td>
                          <td className="px-2 py-2 text-sm text-gray-600 dark:text-gray-300">
                            {formatDate(question.completed_at)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {completedQuestions?.completed_questions?.length > paginatedQuestions.length && (
                    <div className="text-center mt-4">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setCompletedQuestionsPage(prev => prev + 1);
                        }}
                        className="px-4 py-2 cursor-pointer dark:text-white text-black rounded transition-colors"
                      >
                        More...
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}

      {(!completedQuestions || completedQuestions.completed_questions?.length === 0) && (
        <div className="text-center py-8">
          <p className="text-gray-600 dark:text-gray-300">You haven't completed any questions yet.</p>
        </div>
      )}
    </div>
  );
});

export default CompletedQuestions;
