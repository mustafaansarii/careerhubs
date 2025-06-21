import config from '../../config';
import axios from 'axios';
import { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { FaHome, FaTrash } from 'react-icons/fa';
import { DocumentIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const SavedTemplates = () => {
  const [savedTemplates, setSavedTemplates] = useState([]);
  const [loading, setLoading] = useState(true);
  const api = config.Backend_Api;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('access_token');
        
        const savedResponse = await axios.get(`${api}/api/resume/resumes/`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        
        setSavedTemplates(savedResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        if (error.response && error.response.status === 401) {
          localStorage.removeItem('access_token');
          toast.error('Session expired, please login again.');
          window.location.href = '/login';
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [api, navigate]);

  const handleEditResume = async (templateId) => {
    try {
      const savedTemplate = savedTemplates.find(t => t.template.template_id === templateId);
      const customCode = savedTemplate?.custom_code;

      if (!savedTemplate) {
        toast.error('Template not found');
        return;
      }

      toast.success('Template selected successfully');
      navigate(`/resume-editor/${templateId}`, {
        state: { customCode }
      });
    } catch (error) {
      console.error('Error selecting template:', error);
      toast.error('Failed to select template');
    }
  };

  const handleDeleteResume = async (templateId) => {
    try {
      const token = localStorage.getItem('access_token');
      const savedTemplate = savedTemplates.find(t => t.template.template_id === templateId);
      
      if (!savedTemplate) {
        toast.error('Template not found');
        return;
      }

      await axios.delete(`${api}/api/resume/delete-resume/`, {
        headers: { Authorization: `Bearer ${token}` },
        data: { resume_id: savedTemplate.id }
      });

      toast.success('Template deleted successfully');
      setSavedTemplates(savedTemplates.filter(t => t.template.template_id !== templateId));
    } catch (error) {
      console.error('Error deleting template:', error);
      if (error.response && error.response.status === 401) {
        localStorage.removeItem('access_token');
        toast.error('Session expired, please login again.');
        window.location.href = '/login';
      } else {
        toast.error('Failed to delete template');
      }
    }
  };

  const SkeletonLoader = () => (
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
      {[...Array(10)].map((_, index) => (
        <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden animate-pulse">
          <div className="w-full h-[200px] sm:h-[250px] bg-gray-300 dark:bg-gray-700"></div>
          <div className="p-3 sm:p-4">
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Saved Resume Templates</title>
        <meta name="description" content="Manage and edit your saved resume templates on ResumeBuilder.io" />
      </Helmet>
      <NavBar />
      <div className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-[1400px] mt-10">
        <div className="relative mb-8">
          <div className="absolute top-0 left-0">
            <Link to="/" className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors">
              <FaHome className="mr-2" />
              <span className="text-sm">Home</span>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-sm bg-gradient-to-r dark:from-blue-600 dark:to-white bg-clip-text text-transparent from-blue-600 to-gray-900">Saved Resume Templates</span>
            </Link>
          </div>
          <br />
        </div>

        <div className="text-center mb-6 sm:mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r dark:from-blue-600 dark:to-white bg-clip-text text-transparent from-blue-600 to-gray-900 leading-tight">
              Saved Resume Templates
            </h1>
            <p className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Manage and edit your saved resume templates.
            </p>
          </div>
        
        {loading ? (
          <SkeletonLoader />
        ) : savedTemplates.length === 0 ? (
          <div className="text-center">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              You haven&apos;t saved any resume templates yet.
            </p>
            <Link
              to="/resume-builder"
              className="mt-4 inline-block px-4 py-2 bg-gradient-to-r dark:from-blue-600 dark:to-white bg-clip-text text-transparent from-blue-600 to-gray-900 border-2 border-blue-600 rounded-md hover:bg-blue-600 hover:text-blue-600 dark:hover:bg-white dark:hover:text-blue-600 transition-colors"
            >
              Build your resume here
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
            {savedTemplates.map((savedTemplate) => (
              <div key={savedTemplate.template.template_id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group relative z-10 md:hover:border-2 border-green-500 border-2 md:border-0">
                <div className="relative z-10">
                  <div className="relative z-10" onClick={() => handleEditResume(savedTemplate.template.template_id)}>
                    <img
                      src={savedTemplate.template.template_img_url}
                      alt={savedTemplate.template.name}
                      className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                      loading="lazy"
                      width="400"
                      height="500"
                    />
                  </div>
                </div>
                <div className="p-2 sm:p-2">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">{savedTemplate.template.name}</h2>
                  <div className="flex justify-center gap-2">
                    <a
                      onClick={() => handleEditResume(savedTemplate.template.template_id)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center cursor-pointer px-2 py-1.5 text-xs text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 whitespace-nowrap"
                    >
                      <DocumentIcon className="w-3.5 h-3.5 mr-1.5 flex-shrink-0" />
                      <span className="truncate">Edit</span>
                    </a>
                   
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteResume(savedTemplate.template.template_id);
                      }}
                      className="flex items-center px-2 py-1.5 text-xs text-red-700 bg-red-100 rounded-md hover:bg-red-200 dark:bg-red-700 dark:text-red-300 dark:hover:bg-red-600 transition-colors duration-200 whitespace-nowrap"
                    >
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, -5, 5, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <FaTrash className="w-3.5 h-3.5 mr-1.5 flex-shrink-0" />
                      </motion.div>
                      <span className="truncate">Delete</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default SavedTemplates;
