import { SparklesIcon, PencilSquareIcon, CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

export const UserDetails = ({
  profileData,
  editMode,
  newName,
  updating,
  setEditMode,
  setNewName,
  handleUpdateName
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-800 p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-2xl shadow-sm"
    >
      <div className="flex items-center justify-between mb-4 sm:mb-6 group">
        <div className="flex items-center gap-3 sm:gap-4 flex-1">
          <SparklesIcon className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 dark:text-blue-400 flex-shrink-0" />
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white truncate">
            Profile Overview
          </h2>
        </div>
        <button
          onClick={() => setEditMode(true)}
          className="flex items-center justify-center p-1.5 sm:p-2 text-gray-500 dark:text-white hover:text-blue-600 hover:scale-105 active:scale-95 transform transition-transform"
        >
          <PencilSquareIcon className="h-4 w-4 sm:h-5 sm:w-5" />
          <span className="ml-1.5 text-sm font-medium hidden sm:inline-block">Edit</span>
        </button>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
        {/* Name Section */}
        <div className="space-y-2 sm:space-y-4">
          <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
            Personal Information
          </h3>
          {editMode ? (
            <div className="flex flex-col gap-2 sm:gap-4">
              <div className="relative">
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 border-0 rounded-lg sm:rounded-xl bg-white dark:bg-gray-700/50 shadow-sm sm:shadow-md focus:ring-2 focus:ring-blue-500 focus:dark:ring-blue-600 text-sm sm:text-base text-gray-900 dark:text-white placeholder-gray-400"
                  placeholder="Enter your full name"
                />
                <div className="absolute right-1 top-1 sm:right-2 sm:top-2 flex gap-1 sm:gap-2">
                  <button
                    onClick={handleUpdateName}
                    className="p-1 sm:p-2 bg-green-500/90 hover:bg-green-600 rounded-md sm:rounded-lg transition-all duration-200 shadow-sm sm:shadow-md"
                    disabled={updating}
                  >
                    {updating ? (
                      <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-2 border-white border-t-transparent"></div>
                    ) : (
                      <CheckIcon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    )}
                  </button>
                  <button
                    onClick={() => setEditMode(false)}
                    className="p-1 sm:p-2 bg-red-500/90 hover:bg-red-600 rounded-md sm:rounded-lg transition-all duration-200 shadow-sm sm:shadow-md"
                  >
                    <XMarkIcon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2 sm:gap-4 group">
              <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-900 dark:text-white">
                {profileData?.full_name || 'No name provided'}
              </p>
              
            </div>
          )}
        </div>

        {/* Email Section */}
        <div className="space-y-2 sm:space-y-4">
          <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
            Contact Information
          </h3>
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 font-mono">
              {profileData.email}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
