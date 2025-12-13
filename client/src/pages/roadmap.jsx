import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Suspense } from 'react';
import { StarIcon as SolidStar } from '@heroicons/react/24/solid';
import { StarIcon as OutlineStar } from '@heroicons/react/24/outline';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { HomeIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { SparklesIcon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/24/outline';
import ReactMarkdown from 'react-markdown';
import { DocumentTextIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Roadmap = () => {
  const [roadmaps, setRoadmaps] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedRoadmap, setGeneratedRoadmap] = useState(null);
  const [selectedField, setSelectedField] = useState('');
  const [showCustomField, setShowCustomField] = useState(false);
  const [customField, setCustomField] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [showAddOption, setShowAddOption] = useState(false);
  const [predefinedFields] = useState([
    'Artificial Intelligence',
    'Web Development',
    'Data Science',
    'Cybersecurity',
    'Mobile Development',
    'Cloud Computing',
    'DevOps',
    'UI/UX Design',
    'Machine Learning',
    'Blockchain',
    'Data Analysis',
    'Game Development',
    'Internet of Things (IoT)',
    'Virtual Reality (VR)',
    'Augmented Reality (AR)',
    'Database Administration',
    'Network Engineering',
    'Project Management',
    'Business Analysis',
    'Digital Marketing'
  ]);
  const [showAllRoadmaps, setShowAllRoadmaps] = useState(true);
  const [isMobilePdfOpen, setIsMobilePdfOpen] = useState(false);
  const navigate = useNavigate();

  const prompt = `Create a highly detailed and structured roadmap for {selectedField} that not only exceeds 500 words but also covers all essential aspects, starting from foundational concepts to advanced expertise. Divide it into clear phases, including beginner, intermediate, and expert levels, with logical progression. Each phase should outline key topics to learn, practical hands-on projects, industry best practices, and real-world applications. Provide a realistic time duration for each step to help learners pace their journey effectively. Additionally, include recommendations for free, high-quality learning resources such as MOOCs, YouTube tutorials, official documentation, GitHub repositories, and open-source projects. Ensure the roadmap is actionable, comprehensive, and designed for self-learners who aim to master this field in a structured and efficient manner. roadmap should be very short and concise and should not exceed 500 words`;

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const token = localStorage.getItem('access_token')
        const response = await axios.get('/api/careerhub/roadmaps/', {
          headers: { Authorization: `Bearer ${token}` }
        })
        setRoadmaps(response.data)
        if (response.data.length > 0) {
          setSelectedPdf(response.data[0].roadmaplink);
        }
      } catch (error) {
        console.error('Error fetching templates:', error)
        if (error.response && error.response.status === 401) {
          localStorage.removeItem('access_token');
          toast.error('Session expired, please login again.');
          window.location.href = '/login';
        } else {
          setError('Failed to load roadmaps')
        }
      } finally {
        setLoading(false)
      }
    }
    fetchTemplates()
  }, [navigate])

  const toggleFavorite = async (id) => {
    try {
      const token = localStorage.getItem('access_token')
      setRoadmaps(prev => prev.map(t =>
        t.id === id ? { ...t, is_favorite: null, isBuffering: true } : t
      ))
      await axios.post(`/api/careerhub/roadmaps/${id}/toggle_favorite/`, null, {
        headers: { Authorization: `Bearer ${token}` }
      })
      setRoadmaps(prev => prev.map(t =>
        t.id === id ? { ...t, is_favorite: !t.is_favorite, isBuffering: false } : t
      ))
    } catch (error) {
      console.error('Error toggling favorite:', error)
      if (error.response && error.response.status === 401) {
        localStorage.removeItem('access_token');
        toast.error('Session expired, please login again.');
        window.location.href = '/login';
      } else {
        setRoadmaps(prev => prev.map(t =>
          t.id === id ? { ...t, is_favorite: t.is_favorite, isBuffering: false } : t
        ))
      }
    }
  }

  const filteredRoadmaps = useMemo(() =>
    roadmaps.filter(roadmap =>
      roadmap.fieldname.toLowerCase().includes(searchQuery.toLowerCase())
    ),
    [roadmaps, searchQuery]);

  const generateRoadmap = async (field) => {
    try {
      if (!field.trim()) {
        setError('Please enter a field');
        return;
      }

      setIsGenerating(true);
      const token = localStorage.getItem('access_token');

      console.log('Generating roadmap for field:', field);
      console.log('Prompt:', prompt.replace('{selectedField}', field));

      const response = await axios.post(
        '/api/careerhub/api/generate/',
        { prompt: prompt.replace('{selectedField}', field) },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.status === 200) {
        setGeneratedRoadmap({
          title: `AI Generated Roadmap for ${field}`,
          overview: response.data.response,
          steps: [],
          resources: []
        });
      } else {
        throw new Error('Failed to generate roadmap');
      }
    } catch (error) {
      console.error('Error generating roadmap:', error);
      if (error.response && error.response.status === 401) {
        localStorage.removeItem('access_token');
        toast.error('Session expired, please login again.');
        window.location.href = '/login';
      } else {
        setError(error.response?.data?.message || 'Failed to generate roadmap');
      }
    } finally {
      setIsGenerating(false);
    }
  };

  const extractFileId = (url) => {
    if (!url) return null;
    const match = url.match(/\/file\/d\/([^\/]+)/);
    return match ? match[1] : null;
  };

  const isGoogleDriveUrl = (url) => {
    return url && url.includes('drive.google.com');
  };

  const getPdfPreviewUrl = (url) => {
    if (!url) return null;
    const fileId = extractFileId(url);
    return fileId ? `https://drive.google.com/file/d/${fileId}/preview` : null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-800 mt-15">
      <NavBar />
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 sm:px-6 py-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="h-[300px] sm:h-[350px] bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden relative"
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 dark:via-slate-700/30 to-transparent animate-shimmer" />

              <div className="p-6 h-full flex flex-col space-y-4">
                {/* Title */}
                <div className="h-6 bg-gray-200 dark:bg-slate-700 rounded-full w-3/4" />

                {/* Description */}
                <div className="space-y-2 flex-1">
                  <div className="h-3 bg-gray-200 dark:bg-slate-700 rounded-full w-full" />
                  <div className="h-3 bg-gray-200 dark:bg-slate-700 rounded-full w-5/6" />
                  <div className="h-3 bg-gray-200 dark:bg-slate-700 rounded-full w-2/3" />
                </div>

                {/* Tags */}
                <div className="flex gap-2">
                  <div className="h-5 bg-gray-200 dark:bg-slate-700 rounded-full w-16" />
                  <div className="h-5 bg-gray-200 dark:bg-slate-700 rounded-full w-20" />
                </div>

                {/* Progress Bar */}
                <div className="h-2 bg-gray-200 dark:bg-slate-700 rounded-full w-full" />

                {/* Button */}
                <div className="h-10 bg-gray-200 dark:bg-slate-700 rounded-lg" />
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <Suspense fallback={
          <div className="flex flex-col justify-center items-center min-h-[calc(100vh-8rem)] gap-4">
            <motion.div
              animate={{
                rotate: [0, 180, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center"
            >
              <SparklesIcon className="w-10 h-10 text-white" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-gray-600 dark:text-gray-300"
            >
              Loading Roadmaps...
            </motion.p>
          </div>
        }>
          <main className="w-full px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl py-8">
            {/* Enhanced Breadcrumb */}
            <nav className="flex mb-8 px-2 sm:px-0">
              <ol className="inline-flex items-center space-x-1 md:space-x-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                <li className="inline-flex items-center">
                  <a href="/" className="inline-flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <HomeIcon className="w-4 h-4 mr-2" />
                    Home
                  </a>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <ChevronDownIcon className="w-4 h-4 mx-2 text-gray-400 transform rotate-90" />
                    <span className="ml-1 md:ml-2">Roadmaps</span>
                  </div>
                </li>
              </ol>
            </nav>

            {/* Enhanced Hero Section */}
            <div className="text-center mb-12 sm:mb-20 space-y-8 px-2">
              <div className="relative inline-block">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r dark:from-blue-600 dark:to-white bg-clip-text text-transparent from-blue-600 to-gray-900 relative z-10"
                >
                  Career Roadmaps
                </motion.h1>
                <p className="text-gray-600 dark:text-gray-400">
                  Explore career paths and get inspired by the stories of those who have already walked the path.
                </p>
                <div className="absolute inset-0 bg-gradient-to-r dark:from-blue-600/20 dark:to-white/20 blur-3xl -z-0"></div>
              </div>

              {/* Enhanced Input Container */}
              <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <div className="relative group">
                    <SparklesIcon className="w-6 h-6 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-300 z-10" />
                    <input
                      type="text"
                      placeholder="AI Generated Roadmap for..."
                      list="fields"
                      className="w-full pl-12 pr-4 py-4 text-lg rounded-2xl border-2 border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all dark:text-white shadow-sm hover:shadow-md focus:shadow-lg"
                      value={selectedField}
                      onChange={(e) => {
                        const value = e.target.value;
                        setSelectedField(value);
                        setError('');
                      }}
                      onFocus={() => setShowAddOption(true)}
                      onBlur={() => setTimeout(() => setShowAddOption(false), 200)}
                      onKeyPress={(e) => e.key === 'Enter' && generateRoadmap(selectedField)}
                    />
                    {showAddOption && (
                      <div className="absolute z-20 mt-2 w-full bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-slate-700 transform origin-top transition-all duration-200 scale-95 opacity-0 group-focus-within:scale-100 group-focus-within:opacity-100">
                        <div className="max-h-64 overflow-y-auto">
                          {predefinedFields
                            .filter(field =>
                              field.toLowerCase().includes(selectedField.toLowerCase())
                            )
                            .map((field) => (
                              <div
                                key={field}
                                className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-slate-700/50 cursor-pointer transition-colors group/item"
                                onClick={() => {
                                  setSelectedField(field);
                                  setShowAddOption(false);
                                  generateRoadmap(field);
                                }}
                              >
                                <div className="flex items-center space-x-3">
                                  <SparklesIcon className="w-4 h-4 text-gray-400 dark:text-gray-300 group-hover/item:text-blue-500 transition-colors" />
                                  <span className="text-gray-800 dark:text-gray-200 group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400 transition-colors">
                                    {field}
                                  </span>
                                </div>
                              </div>
                            ))}
                          {!predefinedFields.includes(selectedField) && selectedField.trim() && (
                            <div
                              className="px-4 py-3 bg-blue-50/50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 cursor-pointer transition-colors group/custom"
                              onClick={() => {
                                generateRoadmap(selectedField);
                                setShowAddOption(false);
                              }}
                            >
                              <div className="flex items-center space-x-3">
                                <SparklesIcon className="w-4 h-4 text-blue-500 dark:text-blue-400 group-hover/custom:text-blue-600 transition-colors" />
                                <span className="text-blue-600 dark:text-blue-400 font-medium group-hover/custom:text-blue-700 dark:group-hover/custom:text-blue-300 transition-colors">
                                  Generate "{selectedField}" Roadmap
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                  {error && (
                    <div className="absolute -bottom-6 left-0 text-red-500 text-sm mt-1 animate-shake">
                      {error}
                    </div>
                  )}
                </div>

                {!generatedRoadmap && (
                  <div className="relative">
                    <MagnifyingGlassIcon className="w-6 h-6 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-white" />
                    <input
                      type="text"
                      placeholder="Search roadmaps..."
                      className="w-full pl-12 pr-4 py-4 text-lg rounded-2xl border-2 border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all dark:text-white shadow-sm hover:shadow-md focus:shadow-lg"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                )}
              </div>
            </div>

            {isGenerating ? (
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 sm:p-8">
                <div className="animate-pulse space-y-6">
                  {/* Title */}
                  <div className="h-8 bg-gray-200 dark:bg-slate-700 rounded w-3/4 sm:w-1/2 mb-6"></div>

                  {/* Content Blocks */}
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded w-11/12"></div>
                    <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded w-3/4"></div>
                  </div>

                  {/* Section Header */}
                  <div className="h-6 bg-gray-200 dark:bg-slate-700 rounded w-1/3 mt-8"></div>

                  {/* List Items */}
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded w-2/3"></div>
                  </div>

                  {/* Another Section Header */}
                  <div className="h-6 bg-gray-200 dark:bg-slate-700 rounded w-1/3 mt-8"></div>

                  {/* Table-like Structure */}
                  <div className="grid grid-cols-3 gap-4 mt-4">
                    <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded"></div>
                    <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded"></div>
                    <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded"></div>
                  </div>
                </div>
              </div>
            ) : generatedRoadmap ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-slate-700"
              >
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
                    {generatedRoadmap.title}
                  </h2>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        const printContent = document.querySelector('.printable-content').innerHTML;
                        const printStyles = `
                          <style>
                            body { font-family: Arial, sans-serif; margin: 0; padding: 20px; }
                            .print-content { max-width: 800px; margin: 0 auto; }
                            h1 { color: #000; margin-bottom: 20px; }
                            table { width: 100%; border-collapse: collapse; margin: 20px 0; }
                            th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
                            th { background-color: #f5f5f5; }
                            a { color: #2563eb; text-decoration: underline; }
                            code { background: #f3f4f6; padding: 2px 4px; border-radius: 4px; }
                            blockquote { border-left: 4px solid #ddd; padding-left: 1rem; margin: 1rem 0; }
                            @media print {
                              body { padding: 0; }
                              .print-content { max-width: 100%; }
                            }
                          </style>
                        `;
                        const printWindow = document.createElement('iframe');
                        printWindow.style.position = 'absolute';
                        printWindow.style.width = '0';
                        printWindow.style.height = '0';
                        printWindow.style.border = '0';
                        document.body.appendChild(printWindow);

                        const doc = printWindow.contentWindow.document;
                        doc.open();
                        doc.write(`
                          <html>
                            <head>
                              <title>${generatedRoadmap.title}</title>
                              ${printStyles}
                            </head>
                            <body>
                              <div class="print-content">
                                <h1>${generatedRoadmap.title}</h1>
                                ${printContent}
                              </div>
                            </body>
                          </html>
                        `);
                        doc.close();

                        printWindow.contentWindow.focus();
                        printWindow.contentWindow.print();

                        // Clean up after printing
                        setTimeout(() => {
                          document.body.removeChild(printWindow);
                        }, 1000);
                      }}
                      className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-full transition-colors"
                      title="Print Roadmap"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-500 dark:text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => setGeneratedRoadmap(null)}
                      className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-full transition-colors"
                      title="Close Roadmap"
                    >
                      <XMarkIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                    </button>
                  </div>
                </div>
                <div className="printable-content prose dark:prose-invert max-w-none text-gray-800 dark:text-white">
                  <ReactMarkdown
                    components={{
                      h1: ({ node, ...props }) => (
                        <h1 className="text-3xl font-bold mb-6 border-b pb-2" {...props} />
                      ),
                      h2: ({ node, ...props }) => (
                        <h2 className="text-2xl font-semibold mt-8 mb-4" {...props} />
                      ),
                      h3: ({ node, ...props }) => (
                        <h3 className="text-xl font-medium mt-6 mb-3" {...props} />
                      ),
                      p: ({ node, ...props }) => (
                        <p className="mb-4 leading-relaxed" {...props} />
                      ),
                      ul: ({ node, ...props }) => (
                        <ul className="list-disc pl-8 mb-6" {...props} />
                      ),
                      ol: ({ node, ...props }) => (
                        <ol className="list-decimal pl-8 mb-6" {...props} />
                      ),
                      li: ({ node, ...props }) => (
                        <li className="mb-2" {...props} />
                      ),
                      table: ({ node, ...props }) => (
                        <div className="overflow-auto mb-6">
                          <table className="min-w-full" {...props} />
                        </div>
                      ),
                      th: ({ node, ...props }) => (
                        <th className="px-4 py-2 border bg-gray-100 dark:bg-slate-700 font-semibold" {...props} />
                      ),
                      td: ({ node, ...props }) => (
                        <td className="px-4 py-2 border" {...props} />
                      ),
                      a: ({ node, ...props }) => (
                        <a className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline" {...props} />
                      ),
                      code: ({ node, ...props }) => (
                        <code className="bg-gray-100 dark:bg-slate-700 px-2 py-1 rounded font-mono text-sm" {...props} />
                      ),
                      pre: ({ node, ...props }) => (
                        <pre className="bg-gray-100 dark:bg-slate-700 p-4 rounded mb-6 overflow-auto" {...props} />
                      ),
                      blockquote: ({ node, ...props }) => (
                        <blockquote className="border-l-4 border-gray-300 dark:border-slate-600 pl-4 italic text-gray-600 dark:text-gray-300 mb-6" {...props} />
                      ),
                      img: ({ node, ...props }) => (
                        <img className="my-6 rounded-lg max-w-full" {...props} />
                      ),
                      hr: ({ node, ...props }) => (
                        <hr className="my-8 border-gray-200 dark:border-slate-700" {...props} />
                      )
                    }}
                  >
                    {generatedRoadmap.overview}
                  </ReactMarkdown>
                </div>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
                {/* Enhanced Roadmaps List - Now visible on mobile */}
                <div className="space-y-4 pr-4 border-r border-gray-100 dark:border-slate-700">
                  <div
                    className={`p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-lg transition-all border ${showAllRoadmaps
                      ? 'border-blue-500 dark:border-blue-400'
                      : 'border-gray-100 dark:border-slate-700'
                      } cursor-pointer`}
                    onClick={() => setShowAllRoadmaps(true)}
                  >
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      All Roadmaps
                    </h3>
                  </div>

                  {filteredRoadmaps.length === 0 ? (
                    <div className="text-center py-12">
                      <div className="text-gray-600 dark:text-gray-300 text-xl mb-4">
                        No roadmaps found
                      </div>
                    </div>
                  ) : (
                    filteredRoadmaps.map((roadmap) => (
                      <motion.div
                        key={roadmap.id}
                        whileHover={{ scale: 1.02 }}
                        className="group relative"
                      >
                        <div className={`p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-lg transition-all border ${selectedPdf === roadmap.roadmaplink
                          ? 'border-blue-500 dark:border-blue-400'
                          : 'border-gray-100 dark:border-slate-700'
                          }`}>
                          <div className="flex justify-between items-center">
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                              <a
                                onClick={(e) => {
                                  e.preventDefault();
                                  setSelectedPdf(roadmap.roadmaplink);
                                  setShowAllRoadmaps(false);
                                  if (window.innerWidth < 768) {
                                    setIsMobilePdfOpen(true);
                                  }
                                }}
                                href="#"
                                className={`hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${selectedPdf === roadmap.roadmaplink ? 'text-blue-600 dark:text-blue-400' : ''}`}
                              >
                                {roadmap.fieldname}
                              </a>
                            </h3>
                            <button
                              onClick={() => toggleFavorite(roadmap.id)}
                              className="p-1 hover:text-yellow-400 transition-colors"
                            >
                              {roadmap.isBuffering ? (
                                <div className="w-5 h-5 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin" />
                              ) : roadmap.is_favorite ? (
                                <SolidStar className="w-5 h-5 text-yellow-400" />
                              ) : (
                                <OutlineStar className="w-5 h-5 text-gray-400 dark:text-gray-300" />
                              )}
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))
                  )}
                </div>

                {/* Mobile PDF Modal */}
                {isMobilePdfOpen && (
                  <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
                    <div className="fixed inset-0 flex items-center justify-center p-4">
                      <div className="w-full h-full bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden relative">
                        <button
                          onClick={() => setIsMobilePdfOpen(false)}
                          className="absolute top-4 left-4 p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-full transition-colors z-10"
                          title="Close PDF"
                        >
                          <XMarkIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                        </button>
                        {selectedPdf && (
                          <iframe
                            src={getPdfPreviewUrl(selectedPdf)}
                            className="w-full h-full rounded-2xl"
                            frameBorder="0"
                            allowFullScreen
                          />
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Content Area */}
                <div className="sticky top-24 h-[calc(100vh-8rem)] hidden md:block">
                  {showAllRoadmaps ? (
                    <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredRoadmaps.map((roadmap) => (
                        <motion.div
                          key={roadmap.id}
                          whileHover={{ scale: 1.02 }}
                          className="group relative"
                        >
                          <div className={`p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-lg transition-all border ${selectedPdf === roadmap.roadmaplink
                            ? 'border-blue-500 dark:border-blue-400'
                            : 'border-gray-100 dark:border-slate-700'
                            }`}>
                            <div className="flex justify-between items-center mb-4">
                              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                <a
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setSelectedPdf(roadmap.roadmaplink);
                                    setShowAllRoadmaps(false);
                                    if (window.innerWidth < 768) {
                                      setIsMobilePdfOpen(true);
                                    }
                                  }}
                                  href="#"
                                  className={`hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${selectedPdf === roadmap.roadmaplink ? 'text-blue-600 dark:text-blue-400' : ''}`}
                                >
                                  {roadmap.fieldname}
                                </a>
                              </h3>
                              <button
                                onClick={() => toggleFavorite(roadmap.id)}
                                className="p-1 hover:text-yellow-400 transition-colors"
                              >
                                {roadmap.isBuffering ? (
                                  <div className="w-5 h-5 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin" />
                                ) : roadmap.is_favorite ? (
                                  <SolidStar className="w-5 h-5 text-yellow-400" />
                                ) : (
                                  <OutlineStar className="w-5 h-5 text-gray-400 dark:text-gray-300" />
                                )}
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div className="w-full rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-slate-700 bg-white dark:bg-slate-800 relative">
                      <button
                        onClick={() => setShowAllRoadmaps(true)}
                        className="absolute top-4 left-4 p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-full transition-colors z-10"
                        title="Close PDF"
                      >
                        <XMarkIcon className="w-6 h-6 text-gray-500 dark:text-gray-900" />
                      </button>
                      {selectedPdf ? (
                        <iframe
                          src={getPdfPreviewUrl(selectedPdf)}
                          className="w-full h-[calc(100vh-12rem)] rounded-2xl"
                          frameBorder="0"
                          allowFullScreen
                          onError={(e) => {
                            console.error('Error loading PDF:', e);
                            setError('Failed to load PDF preview');
                          }}
                          onLoad={() => setError(null)}
                        />
                      ) : (
                        <div className="flex flex-col items-center justify-center h-[calc(100vh-12rem)] text-gray-500 dark:text-gray-400 p-8">
                          <DocumentTextIcon className="w-16 h-16 mb-4 opacity-75" />
                          <p className="text-center text-lg font-medium">Select a roadmap to preview</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}
          </main>
        </Suspense>
      )}
      <Footer />
    </div>
  );
};

export default Roadmap;
