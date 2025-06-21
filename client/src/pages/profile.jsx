import React, { useState, useEffect, lazy, Suspense } from 'react';
import axios from 'axios';
import config from '../config'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import useSWR from 'swr';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { FaHome } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';
// Register Chart.js components
ChartJS.register(...registerables, ChartDataLabels);

// Add error boundary component
const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const errorHandler = (error) => {
      console.error('Error in component:', error);
      setHasError(true);
    };
    window.addEventListener('error', errorHandler);
    return () => window.removeEventListener('error', errorHandler);
  }, []);

  if (hasError) {
    return (
      <div className="p-4 bg-red-50 dark:bg-red-900 rounded-lg">
        <p className="text-red-600 dark:text-red-200">
          Something went wrong loading this component. Please try again later.
        </p>
      </div>
    );
  }

  return children;
};

// Update lazy components with proper error handling
const UserDetails = lazy(() => import('./profile_components/user_details')
  .then(module => ({ default: module.UserDetails }))
  .catch(error => {
    console.error('Error loading UserDetails:', error);
    return { default: () => <div>Error loading user details</div> };
  }));

const Distributions = lazy(() => import('./profile_components/distributions')
  .then(module => ({ default: module.Distributions }))
  .catch(error => {
    console.error('Error loading Distributions:', error);
    return { default: () => <div>Error loading distributions</div> };
  }));

const CompletedQuestions = lazy(() => import('./profile_components/completed_qsn')
  .then(module => ({ default: module.default }))
  .catch(error => {
    console.error('Error loading CompletedQuestions:', error);
    return { default: () => <div>Error loading completed questions</div> };
  }));

const Favorites = lazy(() => import('./profile_components/Favorites')
  .then(module => ({ default: module.default }))
  .catch(error => {
    console.error('Error loading Favorites:', error);
    return { default: () => <div>Error loading favorites</div> };
  }));

const HeatMap = lazy(() => import('./profile_components/HeatMap_qsn')
  .then(module => ({ default: module.default }))
  .catch(error => {
    console.error('Error loading HeatMap:', error);
    return { default: () => <div>Error loading heatmap</div> };
  }));

const fetchProfile = async (url) => {
  try {
    const token = localStorage.getItem('access_token');
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching profile:', error);
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('access_token');
      toast.error('Session expired. Please login again.');
      window.location.href = '/login';
      return;
    }
    throw error;
  }
};

const updateProfileName = async (newName) => {
  try {
    const token = localStorage.getItem('access_token');
    const response = await axios.put(
      `${config.Backend_Api}/api/auth/profile/`,
      { full_name: newName },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error updating profile:', error);
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('access_token');
      toast.error('Session expired. Please login again.');
      window.location.href = '/login';
      return;
    }
    throw error;
  }
};

const fetchFavorites = async (url) => {
  try {
    const token = localStorage.getItem('access_token');
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching favorites:', error);
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('access_token');
      toast.error('Session expired. Please login again.');
      window.location.href = '/login';
      return;
    }
    throw error;
  }
};

const fetchCompletedQuestions = async (url) => {
  try {
    const token = localStorage.getItem('access_token');
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching completed questions:', error);
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('access_token');
      toast.error('Session expired. Please login again.');
      window.location.href = '/login';
      return;
    }
    throw error;
  }
};

// Add loading fallback
const LoadingFallback = () => (
  <div className="flex justify-center items-center h-64">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
  </div>
);

const Profile = () => {
  const navigate = useNavigate();
  const { data: profileData, error, mutate } = useSWR(`${config.Backend_Api}/api/auth/profile/`, fetchProfile, {
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
  
  const { data: favoritesData, mutate: mutateFavorites } = useSWR(`${config.Backend_Api}/api/careerhub/api/favorites/`, fetchFavorites, {
    revalidateOnFocus: false,
    shouldRetryOnError: false
  });
  
  const { data: completedQuestions, mutate: mutateCompleted } = useSWR(
    `${config.Backend_Api}/api/careerhub/api/completed-questions/`, 
    fetchCompletedQuestions,
    {
      revalidateOnFocus: false,
      shouldRetryOnError: false
    }
  );
  
  const [editMode, setEditMode] = useState(false);
  const [newName, setNewName] = useState('');
  const [updating, setUpdating] = useState(false);
  const [activeSections, setActiveSections] = useState([]);
  const [loadingFavoriteId, setLoadingFavoriteId] = useState(null);
  const [loadingCompletedId, setLoadingCompletedId] = useState(null);
  const [loadingDoneId, setLoadingDoneId] = useState(null);
  const [loadingFavoriteResumeId, setLoadingFavoriteResumeId] = useState(null);
  const [loadingFavoriteRoadmapId, setLoadingFavoriteRoadmapId] = useState(null);
  const [completedQuestionsPage, setCompletedQuestionsPage] = useState(1);
  const itemsPerPage = 10;

  // Calculate paginated questions
  const paginatedCompletedQuestions = completedQuestions?.completed_questions?.slice(
    0, completedQuestionsPage * itemsPerPage
  ) || [];

  useEffect(() => {
    if (profileData) {
      setNewName(profileData.full_name);
    }
  }, [profileData]);

  const handleUpdateName = async () => {
    try {
      setUpdating(true);
      const updatedProfile = await updateProfileName(newName);
      mutate(updatedProfile, false);
      setEditMode(false);
    } catch (err) {
      console.error('Error updating name:', err);
    } finally {
      setUpdating(false);
    }
  };

  const toggleFavorite = async (id) => {
    setLoadingFavoriteId(id);
    try {
      const token = localStorage.getItem('access_token');
      const isAlreadyFavorite = favoritesData?.favorite_questions.some(q => q.id === id);
      if (isAlreadyFavorite) {
        // If already in favorites, remove it
        await axios.post(
          `${config.Backend_Api}/api/careerhub/questions/${id}/toggle_favorite/`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          }
        );
        // Optimistically remove from favorites
        mutateFavorites(data => ({
          ...data,
          favorite_questions: data.favorite_questions.filter(q => q.id !== id)
        }), false);
      } else {
        // If not in favorites, add it
        await axios.post(
          `${config.Backend_Api}/api/careerhub/questions/${id}/toggle_favorite/`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          }
        );
        // Optimistically add to favorites
        mutateFavorites(data => ({
          ...data,
          favorite_questions: [...data.favorite_questions, completedQuestions.completed_questions.find(q => q.id === id)]
        }), false);
      }
      // Update the completedQuestions to reflect the change
      mutateCompleted(data => ({
        ...data,
        completed_questions: data.completed_questions.map(q =>
          q.id === id ? { ...q, is_favorite: !q.is_favorite } : q
        )
      }), false);
    } catch (error) {
      console.error('Error toggling favorite:', error);
      if (error.response && error.response.status === 401) {
        localStorage.removeItem('access_token');
        toast.error('Session expired. Please login again.');
        window.location.href = '/login';
        return;
      }
    } finally {
      setLoadingFavoriteId(null);
    }
  };

  const toggleCompleted = async (id) => {
    try {
      setLoadingCompletedId(id);
      const token = localStorage.getItem('access_token');
      await axios.post(
        `${config.Backend_Api}/api/careerhub/questions/${id}/toggle_done/`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      
      // Optimistic update for completed questions
      mutateCompleted(data => ({
        ...data,
        completed_questions: data.completed_questions.filter(q => q.id !== id)
      }), false);
      
    } catch (error) {
      console.error('Error toggling completed:', error);
      if (error.response && error.response.status === 401) {
        localStorage.removeItem('access_token');
        toast.error('Session expired. Please login again.');
        window.location.href = '/login';
        return;
      }
    } finally {
      setLoadingCompletedId(null);
    }
  };

  const toggleDone = async (id) => {
    setLoadingDoneId(id);
    try {
      const token = localStorage.getItem('access_token');
      await axios.post(
        `${config.Backend_Api}/api/careerhub/questions/${id}/toggle_done/`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      // Optimistically update the is_done status in favorites
      mutateFavorites(data => ({
        ...data,
        favorite_questions: data.favorite_questions.map(q =>
          q.id === id ? { ...q, is_done: !q.is_done } : q
        )
      }), false);
    } catch (error) {
      console.error('Error toggling done:', error);
      if (error.response && error.response.status === 401) {
        localStorage.removeItem('access_token');
        toast.error('Session expired. Please login again.');
        window.location.href = '/login';
        return;
      }
    } finally {
      setLoadingDoneId(null);
    }
  };

  const toggleFavoriteResume = async (id) => {
    setLoadingFavoriteResumeId(id);
    try {
      const token = localStorage.getItem('access_token');
      await axios.post(
        `${config.Backend_Api}/api/careerhub/resumes/${id}/toggle_favorite/`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      // Optimistically update the is_favorite status in resumes
      mutateFavorites(data => ({
        ...data,
        favorite_resumes: data.favorite_resumes.map(r =>
          r.id === id ? { ...r, is_favorite: !r.is_favorite } : r
        )
      }), false);
    } catch (error) {
      console.error('Error toggling favorite for resume:', error);
      if (error.response && error.response.status === 401) {
        localStorage.removeItem('access_token');
        toast.error('Session expired. Please login again.');
        window.location.href = '/login';
        return;
      }
    } finally {
      setLoadingFavoriteResumeId(null);
    }
  };

  const toggleFavoriteRoadmap = async (id) => {
    setLoadingFavoriteRoadmapId(id);
    try {
      const token = localStorage.getItem('access_token');
      await axios.post(
        `${config.Backend_Api}/api/careerhub/roadmaps/${id}/toggle_favorite/`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      // Optimistically update the is_favorite status in roadmaps
      mutateFavorites(data => ({
        ...data,
        favorite_roadmaps: data.favorite_roadmaps.map(r =>
          r.id === id ? { ...r, is_favorite: !r.is_favorite } : r
        )
      }), false);
    } catch (error) {
      console.error('Error toggling favorite for roadmap:', error);
      if (error.response && error.response.status === 401) {
        localStorage.removeItem('access_token');
        toast.error('Session expired. Please login again.');
        window.location.href = '/login';
        return;
      }
    } finally {
      setLoadingFavoriteRoadmapId(null);
    }
  };

  // Progress data calculations
  const totalQuestions = completedQuestions?.completed_questions?.length || 0;
  const totalFavorites = favoritesData?.favorite_questions?.length || 0;
  const completedPercentage = totalQuestions > 0 ? Math.round((totalQuestions / 100) * 100) : 0;

  // Add new statistics calculations
  const totalAvailableQuestions = 485; // Total number of questions in the system
  const completionPercentage = Math.round((totalQuestions / totalAvailableQuestions) * 100);

  // Calculate difficulty distribution
  const difficultyCounts = completedQuestions?.completed_questions?.reduce((acc, q) => {
    acc[q.difficulty] = (acc[q.difficulty] || 0) + 1;
    return acc;
  }, {}) || {};

  // Ensure the order of difficulties is Easy, Medium, Hard
  const orderedDifficulties = ['Easy', 'Medium', 'Hard'];
  const orderedDifficultyCounts = {};

  orderedDifficulties.forEach(difficulty => {
    orderedDifficultyCounts[difficulty] = difficultyCounts[difficulty] || 0;
  });

  const progressChartData = {
    labels: Object.keys(orderedDifficultyCounts),
    datasets: [
      {
        label: 'Questions by Difficulty',
        data: Object.values(orderedDifficultyCounts),
        backgroundColor: [
          'rgba(75, 192, 192, 0.8)', // Easy - Green
          'rgba(255, 206, 86, 0.8)', // Medium - Yellow
          'rgba(255, 99, 132, 0.8)'  // Hard - Red
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 99, 132, 1)'
        ],
        borderWidth: 1
      }
    ]
  };

  // Calculate topic distribution
  const topicCounts = completedQuestions?.completed_questions?.reduce((acc, q) => {
    acc[q.topic] = (acc[q.topic] || 0) + 1;
    return acc;
  }, {}) || {};

  const topicDistributionData = {
    labels: Object.keys(topicCounts),
    datasets: [
      {
        label: 'Questions by Topic',
        data: Object.values(topicCounts),
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(153, 102, 255, 0.8)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
      }
    ]
  };

  // Add loading state for completed questions
  const isLoading = !profileData && !error && !completedQuestions;

  // Add cleanup for Chart.js instances
  useEffect(() => {
    return () => {
      // Cleanup all chart instances
      ChartJS.getChart('progressChart')?.destroy();
      ChartJS.getChart('topicChart')?.destroy();
    };
  }, []);

  // Fix the x-axis callback
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#6B7280',
          font: { size: 14 }
        }
      },
      datalabels: {
        display: true,
        color: '#ffffff',
        font: {
          size: 12,
          weight: 'bold'
        },
        formatter: (value) => {
          return value > 0 ? value : '';
        }
      }
    },
    scales: {
      y: {
        grid: { color: '#E5E7EB' },
        ticks: { color: '#6B7280', font: { size: 12 } }
      },
      x: {
        grid: { color: '#E5E7EB' },
        ticks: { 
          color: '#6B7280',
          font: { size: 12 },
          callback: (value) => {
            const label = typeof value === 'string' ? value : String(value);
            return label.length > 12 ? label.substring(0, 12) + '...' : label;
          }
        }
      }
    }
  };

  const pieChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          color: '#6B7280',
          font: { size: 12 }
        }
      },
      datalabels: {
        display: true,
        color: '#ffffff',
        font: {
          size: 12,
          weight: 'bold'
        },
        formatter: (value) => {
          return value > 0 ? value : '';
        }
      }
    },
    scales: {
      x: {
        display: false,
        grid: {
          display: false
        }
      },
      y: {
        display: false,
        grid: {
          display: false
        }
      }
    }
  };

  // Add this helper function to format the date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (error) return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-100 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Error:</strong>
        <span className="block sm:inline"> {error.message}</span>
      </div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Profile | CareerHub</title>
        <meta name="description" content="View your profile and track your progress on CareerHub." />
      </Helmet>
      <NavBar />
      {isLoading ? (
        <div className="min-h-screen py-6 sm:py-12 px-4 sm:px-6 lg:px-8 mt-12 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
          {/* Breadcrumb Navigation - Moved outside the loading container */}
          <nav className="mb-6 px-4 sm:px-6 max-w-7xl mx-auto">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 text-sm">
              <li className="inline-flex items-center">
                <Link to="/" className="inline-flex items-center font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                  <FaHome className="w-4 h-4 mr-2" />
                  Home
                </Link>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span className="ml-1 font-medium text-gray-500 md:ml-2 dark:text-gray-400">Profile</span>
                </div>
              </li>
            </ol>
          </nav>
          <div className="max-w-7xl mx-auto">
            <div className="space-y-8">
              {/* Profile Skeleton */}
              <div className="animate-pulse bg-gray-200 dark:bg-gray-700 p-6 rounded-2xl">
                <div className="h-8 w-48 bg-gray-300 dark:bg-gray-600 rounded mb-4"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="h-4 w-32 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
                    <div className="h-6 w-64 bg-gray-300 dark:bg-gray-600 rounded"></div>
                  </div>
                  <div>
                    <div className="h-4 w-32 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
                    <div className="h-6 w-64 bg-gray-300 dark:bg-gray-600 rounded"></div>
                  </div>
                </div>
              </div>

              {/* Stats Skeleton */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((_, i) => (
                  <div key={i} className="animate-pulse bg-gray-200 dark:bg-gray-700 p-4 rounded-lg">
                    <div className="h-4 w-24 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
                    <div className="h-8 w-16 bg-gray-300 dark:bg-gray-600 rounded"></div>
                  </div>
                ))}
              </div>

              {/* Charts Skeleton */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                <div className="animate-pulse bg-gray-200 dark:bg-gray-700 p-6 rounded-2xl h-80"></div>
                <div className="animate-pulse bg-gray-200 dark:bg-gray-700 p-6 rounded-2xl h-80"></div>
              </div>

              {/* Sections Skeleton */}
              <div className="space-y-6">
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="animate-pulse bg-gray-200 dark:bg-gray-700 p-6 rounded-2xl">
                    <div className="h-6 w-48 bg-gray-300 dark:bg-gray-600 rounded mb-4"></div>
                    <div className="space-y-3">
                      <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
                      <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
                      <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-screen py-6 sm:py-12 px-4 sm:px-6 lg:px-8 mt-12 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
          {/* Breadcrumb Navigation - Added to the main content */}
          <nav className="mb-6 px-4 sm:px-6 max-w-7xl mx-auto">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 text-sm">
              <li className="inline-flex items-center">
                <Link to="/" className="inline-flex items-center font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                  <FaHome className="w-4 h-4 mr-2" />
                  Home
                </Link>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span className="ml-1 font-medium text-gray-500 md:ml-2 dark:text-gray-400">Profile</span>
                </div>
              </li>
            </ol>
          </nav>
          <div className="max-w-7xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-sm sm:shadow-lg p-4 sm:p-6 md:p-8 border border-gray-100 dark:border-gray-700">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mb-4 sm:mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Your Career Journey at a Glance
              </motion.h1>
              
              {profileData && (
                <div className="space-y-4 sm:space-y-8">
                  <Suspense fallback={<LoadingFallback />}>
                    <ErrorBoundary>
                      <UserDetails
                        profileData={profileData}
                        editMode={editMode}
                        newName={newName}
                        updating={updating}
                        setEditMode={setEditMode}
                        setNewName={setNewName}
                        handleUpdateName={handleUpdateName}
                      />
                    </ErrorBoundary>
                    
                    <ErrorBoundary>
                      <Distributions 
                        progressChartData={progressChartData}
                        topicDistributionData={topicDistributionData}
                      />
                    </ErrorBoundary>

                    <ErrorBoundary>
                      <HeatMap
                        completedQuestions={completedQuestions}
                        activeSections={activeSections}
                        setActiveSections={setActiveSections}
                      />
                    </ErrorBoundary>

                    <ErrorBoundary>
                      <CompletedQuestions
                        completedQuestions={completedQuestions}
                        paginatedCompletedQuestions={paginatedCompletedQuestions}
                        activeSections={activeSections}
                        setActiveSections={setActiveSections}
                        loadingFavoriteId={loadingFavoriteId}
                        loadingCompletedId={loadingCompletedId}
                        toggleFavorite={toggleFavorite}
                        toggleCompleted={toggleCompleted}
                        completedQuestionsPage={completedQuestionsPage}
                        setCompletedQuestionsPage={setCompletedQuestionsPage}
                        formatDate={formatDate}
                      />
                    </ErrorBoundary>

                    <ErrorBoundary>
                      <Favorites
                        favoritesData={favoritesData}
                        activeSections={activeSections}
                        setActiveSections={setActiveSections}
                        loadingFavoriteId={loadingFavoriteId}
                        loadingDoneId={loadingDoneId}
                        loadingFavoriteResumeId={loadingFavoriteResumeId}
                        loadingFavoriteRoadmapId={loadingFavoriteRoadmapId}
                        toggleFavorite={toggleFavorite}
                        toggleDone={toggleDone}
                        toggleFavoriteResume={toggleFavoriteResume}
                        toggleFavoriteRoadmap={toggleFavoriteRoadmap}
                      />
                    </ErrorBoundary>
                  </Suspense>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default React.memo(Profile);