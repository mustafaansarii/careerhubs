import config from '../../config';
import axios from 'axios';
import { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import { FaArrowRight, FaHome, FaTrash, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { DocumentTextIcon, DocumentIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const TemplateList = () => {
  const [templates, setTemplates] = useState([]);
  const [savedTemplates, setSavedTemplates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const templatesPerPage = 10;
  const api = config.Backend_Api;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('access_token');
        
        const templatesResponse = await axios.get(`${api}/api/resume/templates/`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        
        const savedResponse = await axios.get(`${api}/api/resume/resumes/`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        
        setTemplates(templatesResponse.data);
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
        <div key={index} className="bg-white dark:bg-gray-8 00 rounded-lg shadow-md overflow-hidden animate-pulse">
          <div className="w-full h-[200px] sm:h-[250px] bg-gray-300 dark:bg-gray-700"></div>
          <div className="p-3 sm:p-4">
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
          </div>
        </div>
      ))}
    </div>
  );

  const handleEditResume = async (templateId) => {
    try {
      const token = localStorage.getItem('access_token');

      // Save the template if it's not already saved
      const isSaved = savedTemplates.some(t => t.template.template_id === templateId);

      if (!isSaved) {
        try {
          await axios.post(`${api}/api/resume/resumes/`, {
            template_id: templateId
          }, {
            headers: { Authorization: `Bearer ${token}` }
          });
          toast.success('Template saved successfully!');
        } catch (saveError) {
          console.error('Error saving template:', saveError);
          if (saveError.response && saveError.response.status === 401) {
            localStorage.removeItem('access_token');
            toast.error('Session expired, please login again.');
            window.location.href = '/login';
          } else {
            toast.error('Failed to save template.');
          }
          return; // Exit if saving fails
        }

        // Refresh saved templates after creation
        const savedResponse = await axios.get(`${api}/api/resume/resumes/`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setSavedTemplates(savedResponse.data);
      }

      // Get updated custom code
      const savedTemplate = savedTemplates.find(t => t.template.template_id === templateId);
      const customCode = savedTemplate?.custom_code;

      navigate(`/resume-editor/${templateId}`, {
        state: { customCode }
      });
    } catch (error) {
      console.error('Error selecting template:', error);
      if (error.response && error.response.status === 401) {
        localStorage.removeItem('access_token');
        toast.error('Session expired, please login again.');
        window.location.href = '/login';
      } else {
        toast.error('Failed to select template');
      }
    }
  };

  const indexOfLastTemplate = currentPage * templatesPerPage;
  const indexOfFirstTemplate = indexOfLastTemplate - templatesPerPage;
  const currentTemplates = templates.slice(indexOfFirstTemplate, indexOfLastTemplate);
  const totalPages = Math.ceil(templates.length / templatesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const Pagination = () => {
    // Helper function to determine which page numbers to show
    const getPageNumbers = () => {
      const delta = 1; // Number of pages to show on each side of current page
      const range = [];
      const rangeWithDots = [];
      let l;

      for (let i = 1; i <= totalPages; i++) {
        if (
          i === 1 || 
          i === totalPages ||
          i === currentPage ||
          (currentPage - i >= -delta && currentPage - i <= delta)
        ) {
          range.push(i);
        }
      }

      for (let i of range) {
        if (l) {
          if (i - l === 2) {
            rangeWithDots.push(l + 1);
          } else if (i - l !== 1) {
            rangeWithDots.push('...');
          }
        }
        rangeWithDots.push(i);
        l = i;
      }

      return rangeWithDots;
    };

    return (
      <div className="flex flex-col items-center space-y-3 mt-6 mb-4">
        <div className="flex items-center gap-1">
          {/* Previous button */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`
              flex items-center justify-center
              p-1.5
              text-xs rounded-md
              transition-colors duration-150
              ${currentPage === 1
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-white text-gray-700 hover:bg-blue-500 hover:text-white'
              }
              border border-gray-200
            `}
            aria-label="Previous page"
          >
            <FaChevronLeft className="w-3 h-3" />
          </button>

          {/* Page numbers */}
          <div className="flex items-center gap-1">
            {getPageNumbers().map((pageNumber, index) => (
              <button
                key={index}
                onClick={() => typeof pageNumber === 'number' && handlePageChange(pageNumber)}
                disabled={pageNumber === '...'}
                className={`
                  min-w-[1.75rem] h-8
                  flex items-center justify-center
                  px-1.5
                  text-xs rounded-md
                  transition-colors duration-150
                  ${pageNumber === currentPage
                    ? 'bg-blue-500 text-white'
                    : pageNumber === '...'
                      ? 'text-gray-500 cursor-default'
                      : 'bg-white text-gray-700 hover:bg-blue-500 hover:text-white'
                  }
                  border border-gray-200
                `}
              >
                {pageNumber}
              </button>
            ))}
          </div>

          {/* Next button */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`
              flex items-center justify-center
              p-1.5
              text-xs rounded-md
              transition-colors duration-150
              ${currentPage === totalPages
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-white text-gray-700 hover:bg-blue-500 hover:text-white'
              }
              border border-gray-200
            `}
            aria-label="Next page"
          >
            <FaChevronRight className="w-3 h-3" />
          </button>
        </div>

        {/* Page info */}
        <div className="text-xs text-gray-500 dark:text-gray-400">
          Page <span className="font-medium">{currentPage}</span> of{' '}
          <span className="font-medium">{totalPages}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Resume Templates - CareerEase</title>
        <meta name="description" content="Choose from our professional resume templates to create a standout resume. ATS-optimized and designed for various industries." />
      </Helmet>
      <NavBar />
      <div className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-[1400px] mt-10">
        <div className="relative mb-8">
          <div className="absolute top-0 left-0">
            <Link to="/" className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors">
              <FaHome className="mr-2" />
              <span className="text-sm">Home</span>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-sm text-blue-500">Resume Templates</span>
            </Link>
          </div>
        </div>

        <div className="text-center mb-6 sm:mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-gray-900 dark:from-blue-600 dark:to-white bg-clip-text text-transparent leading-tight">
              Professional Resume Templates
            </h1>
            <p className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Choose from our collection of ATS-optimized, professionally designed templates tailored for various industries
            </p>
          </div>
        
        {loading ? (
          <SkeletonLoader />
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
              {currentTemplates.map((template) => {
                const isSaved = savedTemplates.some(t => t.template.template_id === template.template_id);
                
                return (
                  <div key={template.template_id} className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group relative z-10 ${
                    isSaved ? 'md:hover:border-2 border-green-500' : 'md:hover:border-2 border-blue-500'
                  } border-2 md:border-0`}>
                    <div className="relative z-10">
                     
                      <div className="relative z-10" onClick={() => handleEditResume(template.template_id)}>
                        <img 
                          src={template.template_img_url} 
                          alt={template.name}
                          className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                          loading="lazy"
                          width="400"
                          height="500"
                        />
                      </div>
                    </div>                  
                    <div className="p-2 sm:p-2 ">
                      <h2 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">{template.name}</h2>
                      <div className="flex justify-center gap-2">
                        <a
                          onClick={() => handleEditResume(template.template_id)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center cursor-pointer px-2 py-1.5 text-xs text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 whitespace-nowrap"
                        >
                          <DocumentIcon className="w-3.5 h-3.5 mr-1.5 flex-shrink-0" />
                          <span className="truncate">Edit</span>
                        </a>
                        <a
                          href={template.downloadtemplatelink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex cursor-pointer items-center px-2 py-1.5 text-xs text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 whitespace-nowrap"
                        >
                          <ArrowDownTrayIcon className="w-3.5 h-3.5 mr-1.5 flex-shrink-0" />
                          <span className="truncate">Download</span>
                        </a>
                        {isSaved && (
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDeleteResume(template.template_id);
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
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <Pagination />
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default TemplateList;