import React from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import { FaHome, FaRocket, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeRaw from 'rehype-raw';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { SparklesIcon, StarIcon } from '@heroicons/react/24/outline';
import { HomeIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import ResumeAnalysisCharts from '../components/ResumeAnalysisCharts';
import { toast } from 'react-hot-toast';

// Set the app element for accessibility
Modal.setAppElement('#root');

const resume_analyse_prompt = `Analyze this resume for ATS compatibility and return results in plain JSON format (without Markdown code blocks):

Resume: [RESUME]
Field: [FIELD]
Level: [LEVEL]

Required JSON structure:
{
  "ats_score": number (0-100),
  "keyword_analysis": {
    "missing_keywords": string[],
    "keyword_density": number
  },
  "skills_analysis": {
    "strengths": string[],
    "weaknesses": string[],
    "recommendations": string[]
  },
  "format_analysis": {
    "score": number (0-10),
    "issues": string[],
    "recommendations": string[]
  },
  "experience_analysis": {
    "impact_statements_score": number (0-10),
    "action_verbs_score": number (0-10),
    "recommendations": string[]
  },
  "overall_recommendations": string[]
}

IMPORTANT: Return ONLY valid JSON. Do not include any additional text or Markdown formatting.`;

const Resume_ATS = () => {
    const [selectedLevel, setSelectedLevel] = useState('');
    const [resumeFile, setResumeFile] = useState(null);
    const [selectedField, setSelectedField] = useState('');
    const [error, setError] = useState(null);
    const [predefinedFields] = useState([
        'Software Engineer',
        'Data Scientist',
        'Product Manager',
        'Sales Engineer',
        'Marketing Manager',
        'Chief Technology Officer'
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const [analysisResult, setAnalysisResult] = useState(null);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [fileUploaded, setFileUploaded] = useState(false);
    const [parsingStatus, setParsingStatus] = useState('');
    const [showGetStartedModal, setShowGetStartedModal] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [showOptions, setShowOptions] = useState(false);

    const handleLevelSelect = (level) => {
        setSelectedLevel(level);
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setResumeFile(file);
            setFileUploaded(true);
        }
    };

    const parseResume = async (file) => {
        setParsingStatus('Parsing PDF...');
        try {
            const token = localStorage.getItem('access_token');
            const formData = new FormData();
            formData.append('file', file);

            const response = await axios.post(
                '/api/careerhub/api/extract-text/',
                formData,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'multipart/form-data'
                    }
                }
            );

            if (response.data && response.data.text) {
                setParsingStatus('PDF parsed successfully');
                return response.data.text;
            }
            throw new Error('No text content found in the response');
        } catch (error) {
            setParsingStatus('Error parsing PDF');
            setError(error.response?.data?.message || error.message || 'Failed to parse PDF');
            throw error;
        }
    };

    const handleAnalysis = async () => {
        try {
            setIsLoading(true);
            setParsingStatus('Parsing resume...');
            setShowGetStartedModal(false);
            const token = localStorage.getItem('access_token');

            if (!resumeFile) {
                throw new Error('Please upload a resume file');
            }

            const parsedText = await parseResume(resumeFile);

            const dynamicPrompt = resume_analyse_prompt
                .replace(/\[RESUME\]/g, parsedText)
                .replace(/\[FIELD\]/g, selectedField)
                .replace(/\[LEVEL\]/g, selectedLevel);

            const response = await axios.post(
                '/api/careerhub/api/generate/',
                {
                    prompt: dynamicPrompt,
                    resume: parsedText,
                    field: selectedField,
                    experienceLevel: selectedLevel
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );

            if (response.data && response.data.response) {
                try {
                    // Clean the response by removing Markdown code block syntax
                    let cleanedResponse = response.data.response
                        .replace(/```json/g, '')
                        .replace(/```/g, '')
                        .trim();

                    const parsedData = JSON.parse(cleanedResponse);

                    // Validate the JSON structure
                    if (!parsedData.ats_score || !parsedData.keyword_analysis) {
                        throw new Error('Invalid analysis data received');
                    }

                    setAnalysisResult(parsedData);
                } catch (error) {
                    console.error('JSON parsing error:', error);
                    console.error('Response content:', response.data.response);
                    throw new Error('Failed to parse analysis results');
                }
            } else {
                throw new Error('No response data received');
            }
        } catch (error) {
            console.error('Analysis error:', error);
            setError(error.response?.data?.message || error.message || 'Analysis failed');
            toast.error(error.message || 'Analysis failed');
        } finally {
            setIsLoading(false);
            setShowConfirmation(false);
            setParsingStatus('');
        }
    };

    const confirmAnalysis = () => {
        if (!resumeFile || !selectedLevel || !selectedField) return;
        setShowConfirmation(true);
    };

    const SkeletonLoader = () => (
        <div className="space-y-4 animate-pulse">
            <div className="h-6 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        </div>
    );

    const resetForm = () => {
        setSelectedLevel('');
        setResumeFile(null);
        setSelectedField('');
        setFileUploaded(false);
        setParsingStatus('');
        setAnalysisResult(null);
        setError(null);
    };

    return (
        <div className="min-h-screen ">
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 md:mt-20 mb-20 ">
                {/* Enhanced Breadcrumb */}
                <nav className="flex mb-4 md:mb-8 px-2 sm:px-0 mt-5 md:mt-0">
                    <ol className="inline-flex items-center space-x-1 md:space-x-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                        <li className="inline-flex items-center">
                            <Link to="/" className="inline-flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                <HomeIcon className="w-4 h-4 mr-2" />
                                Home
                            </Link>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <ChevronDownIcon className="w-4 h-4 mx-2 text-gray-400 transform rotate-90" />
                                <span className="ml-1 md:ml-2">Resume Analysis</span>
                            </div>
                        </li>
                    </ol>
                </nav>

                {/* Main Content Section */}
                {analysisResult || isLoading ? (
                    <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
                        {/* Analysis Results Section */}
                        <div className="w-full">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100 dark:border-gray-700"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">
                                        Resume Analysis Results
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
                                                            <title>Resume Analysis Results</title>
                                                            ${printStyles}
                                                        </head>
                                                        <body>
                                                            <div class="print-content">
                                                                <h1>Resume Analysis Results</h1>
                                                                ${printContent}
                                                            </div>
                                                        </body>
                                                    </html>
                                                `);
                                                doc.close();

                                                printWindow.contentWindow.focus();
                                                printWindow.contentWindow.print();

                                                setTimeout(() => {
                                                    document.body.removeChild(printWindow);
                                                }, 1000);
                                            }}
                                            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                                            title="Print Analysis"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-500 dark:text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z" />
                                            </svg>
                                        </button>
                                        <button
                                            onClick={resetForm}
                                            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                                            title="Close Analysis"
                                        >
                                            <XMarkIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                                        </button>
                                    </div>
                                </div>
                                {analysisResult ? (
                                    <div className="printable-content">
                                        <div className="">


                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                                                    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">ATS Score</h3>
                                                    <div className="text-5xl font-bold text-blue-600 dark:text-blue-400">
                                                        {analysisResult.ats_score}
                                                        <span className="text-2xl text-gray-600 dark:text-gray-300">/100</span>
                                                    </div>
                                                </div>

                                                <div className="space-y-6">
                                                    <div>
                                                        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Missing Keywords</h3>
                                                        <div className="flex flex-wrap gap-2 text-gray-800 dark:text-white">
                                                            {analysisResult.keyword_analysis.missing_keywords.map((keyword, i) => (
                                                                <span key={i} className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">
                                                                    {keyword}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Skill Recommendations</h3>
                                                        <ul className="list-disc pl-6 space-y-2">
                                                            {analysisResult.skills_analysis.recommendations.map((rec, i) => (
                                                                <li key={i} className="text-gray-600 dark:text-gray-300">
                                                                    {rec}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <ResumeAnalysisCharts analysisData={analysisResult} />

                                            <div className="mt-8">
                                                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Overall Recommendations</h3>
                                                <div className="space-y-4">
                                                    <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                                        <ul className="list-disc pl-6 space-y-3">
                                                            {analysisResult.overall_recommendations.map((rec, i) => (
                                                                <li key={i} className="text-gray-600 dark:text-gray-300">
                                                                    {rec}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="animate-pulse">
                                        <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-6"></div>
                                        <div className="space-y-4">
                                            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                                            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
                                            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                                            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
                                            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                                            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
                                            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
                                            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/5"></div>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </div>
                    </div>
                ) : (
                    <>
                        {/* Hero Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="flex flex-col md:flex-row items-center gap-4 md:gap-12 px-4 sm:px-6"
                        >
                            <div className="flex-1 order-2 md:order-1 text-left space-y-3 md:space-y-6 mt-4 md:mt-10">
                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-gray-900 bg-clip-text text-transparent leading-tight dark:from-blue-600 dark:to-white">
                                    Optimize Your Resume for ATS
                                </h1>
                                <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
                                    Get AI-powered resume analysis to ensure your resume passes through Applicant Tracking Systems and lands you more interviews.
                                </p>
                                <div className="md:hidden w-full mt-4">
                                    <img
                                        src="./ats.png"
                                        alt="Resume Analysis"
                                        className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="flex flex-col sm:flex-row gap-3 mt-4">
                                    <button
                                        onClick={() => setShowGetStartedModal(true)}
                                        className="rounded-full border border-blue-600 dark:border-white px-6 py-2 bg-gradient-to-r dark:from-blue-600 dark:to-white bg-clip-text text-transparent from-blue-600 to-gray-900 hover:bg-blue-600 hover:text-blue-600 dark:hover:bg-white dark:hover:text-blue-600 transition-colors cursor-pointer"
                                    >
                                        Analyze Your Resume
                                    </button>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base mt-3">
                                    Trusted by professionals from top companies to optimize their resumes
                                </p>


                            </div>
                            <div className="flex-1 order-1 md:order-2 hidden md:block">
                                <img
                                    src="./ats.png"
                                    alt="Resume Analysis"
                                    className="w-full h-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
                                    loading="lazy"
                                />
                            </div>

                        </motion.div>
                        {/* Enhanced Testimonials Section */}
                        <div className="mt-20 px-4 sm:px-6 lg:px-8">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white text-center mb-8">
                                What Our Users Are Saying
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700"
                                >
                                    <div className="flex items-center space-x-3 mb-4">
                                        <img
                                            src="https://randomuser.me/api/portraits/women/44.jpg"
                                            alt="Sarah L."
                                            className="w-12 h-12 rounded-full"
                                        />
                                        <div>
                                            <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">Sarah L.</p>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Software Engineer @ Google</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300 italic mb-4">
                                        "The ATS analysis helped me identify key areas to improve in my resume. I landed 3 interviews within a week of using their suggestions!"
                                    </p>
                                    <div className="flex space-x-1 text-yellow-400">
                                        {[...Array(5)].map((_, i) => (
                                            <StarIcon key={i} className="w-5 h-5" />
                                        ))}
                                    </div>
                                </motion.div>

                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700"
                                >
                                    <div className="flex items-center space-x-3 mb-4">
                                        <img
                                            src="https://randomuser.me/api/portraits/men/32.jpg"
                                            alt="Michael T."
                                            className="w-12 h-12 rounded-full"
                                        />
                                        <div>
                                            <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">Michael T.</p>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Product Manager @ Meta</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300 italic mb-4">
                                        "I was struggling to get callbacks, but after optimizing my resume with their AI analysis, I got multiple offers!"
                                    </p>
                                    <div className="flex space-x-1 text-yellow-400">
                                        {[...Array(5)].map((_, i) => (
                                            <StarIcon key={i} className="w-5 h-5" />
                                        ))}
                                    </div>
                                </motion.div>

                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700"
                                >
                                    <div className="flex items-center space-x-3 mb-4">
                                        <img
                                            src="https://randomuser.me/api/portraits/women/68.jpg"
                                            alt="Emily R."
                                            className="w-12 h-12 rounded-full"
                                        />
                                        <div>
                                            <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">Emily R.</p>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Data Scientist @ Amazon</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300 italic mb-4">
                                        "The detailed analysis helped me tailor my resume perfectly for each job application. Highly recommend!"
                                    </p>
                                    <div className="flex space-x-1 text-yellow-400">
                                        {[...Array(5)].map((_, i) => (
                                            <StarIcon key={i} className="w-5 h-5" />
                                        ))}
                                    </div>
                                </motion.div>
                            </div>

                            {/* How it works Section */}
                            <div className="mt-16 space-y-8 mb-16">
                                <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white">How It Works</h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                                        <div className="text-center">
                                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                                </svg>
                                            </div>
                                            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Upload Your Resume</h3>
                                            <p className="text-gray-600 dark:text-gray-300">Simply upload your current resume in PDF or Word format.</p>
                                        </div>
                                    </div>
                                    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                                        <div className="text-center">
                                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                                </svg>
                                            </div>
                                            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">AI Analysis</h3>
                                            <p className="text-gray-600 dark:text-gray-300">Our AI scans your resume and provides detailed optimization suggestions.</p>
                                        </div>
                                    </div>
                                    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                                        <div className="text-center">
                                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Get Results</h3>
                                            <p className="text-gray-600 dark:text-gray-300">Receive an optimized, ATS-friendly resume tailored to your target job.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                {/* Modal */}
                <Modal
                    isOpen={showGetStartedModal}
                    onRequestClose={() => {
                        if (!isLoading) {
                            resetForm();
                            setShowGetStartedModal(false);
                        }
                    }}
                    className="fixed inset-0 flex items-center justify-center p-4"
                    overlayClassName="fixed inset-0 bg-black bg-opacity-50"
                >
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 md:p-6 max-w-md w-full mx-2 md:mx-0">
                        <h2 className="text-lg md:text-xl font-bold mb-4 dark:text-white">Get Started</h2>
                        <div className="space-y-3 md:space-y-4">
                            <div>
                                <label htmlFor="experience-level" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                                    Experience Level
                                </label>
                                <select
                                    id="experience-level"
                                    value={selectedLevel}
                                    onChange={(e) => setSelectedLevel(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-gray-100"
                                >
                                    <option value="">Select your level</option>
                                    <option value="Entry-level">Entry-level</option>
                                    <option value="Mid-level">Mid-level</option>
                                    <option value="Senior-level">Senior-level</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="field" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                                    Career Field
                                </label>
                                <div className="relative">
                                    <input
                                        id="field"
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => {
                                            setSearchQuery(e.target.value);
                                            setShowOptions(true);
                                            if (!e.target.value) setSelectedField('');
                                        }}
                                        onFocus={() => setShowOptions(true)}
                                        onBlur={() => setTimeout(() => setShowOptions(false), 200)}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' && searchQuery.trim()) {
                                                const exactMatch = predefinedFields.find(f => f.toLowerCase() === searchQuery.trim().toLowerCase());
                                                setSelectedField(exactMatch || searchQuery.trim());
                                                setSearchQuery(exactMatch || searchQuery.trim());
                                                setShowOptions(false);
                                            }
                                        }}
                                        placeholder="Search or type a new field..."
                                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-gray-100"
                                    />

                                    {showOptions && (
                                        <div className="absolute z-10 mt-1 w-full bg-white dark:bg-gray-800 shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                            {predefinedFields
                                                .filter(field =>
                                                    field.toLowerCase().includes(searchQuery.toLowerCase())
                                                )
                                                .map((field) => (
                                                    <div
                                                        key={field}
                                                        onClick={() => {
                                                            setSelectedField(field);
                                                            setSearchQuery(field);
                                                            setShowOptions(false);
                                                        }}
                                                        className="cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100"
                                                    >
                                                        <span className="block truncate">{field}</span>
                                                    </div>
                                                ))}

                                            {searchQuery.trim() && !predefinedFields.some(f => f.toLowerCase() === searchQuery.trim().toLowerCase()) && (
                                                <div
                                                    onClick={() => {
                                                        setSelectedField(searchQuery.trim());
                                                        setShowOptions(false);
                                                    }}
                                                    className="cursor-pointer select-none relative py-2 pl-3 pr-9 bg-gray-100 dark:bg-gray-700 hover:bg-blue-50 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100"
                                                >
                                                    <span className="block truncate">
                                                        Use "{searchQuery.trim()}"
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700">
                                    <input
                                        type="file"
                                        className="hidden"
                                        accept=".pdf"
                                        onChange={handleFileUpload}
                                    />
                                    <svg className="w-8 h-8 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                    </svg>
                                    <p className="text-gray-600 dark:text-gray-300 text-center">
                                        Upload your resume (PDF only)<br />
                                        Max 2MB file size
                                    </p>
                                </label>
                                {fileUploaded && (
                                    <p className="text-green-500 dark:text-green-400 text-sm mt-2">
                                        PDF uploaded: {resumeFile.name}
                                    </p>
                                )}
                            </div>
                        </div>

                        {isLoading && (
                            <div className="mt-4 flex items-center space-x-2">
                                <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                                <p className="text-gray-600 dark:text-gray-300">{parsingStatus}</p>
                            </div>
                        )}

                        <div className="flex justify-end space-x-4 mt-6">
                            <button
                                onClick={() => !isLoading && setShowGetStartedModal(false)}
                                disabled={isLoading}
                                className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Close
                            </button>
                            <button
                                onClick={handleAnalysis}
                                disabled={!resumeFile || !selectedLevel || !selectedField || isLoading}
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
                            >
                                {isLoading ? 'Analyzing...' : 'Analyze'}
                            </button>
                        </div>
                    </div>
                </Modal>
            </div>
            <Footer />
        </div>
    )
}

export default Resume_ATS;
