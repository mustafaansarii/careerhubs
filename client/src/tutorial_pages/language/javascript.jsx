import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar'
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRightIcon, DocumentDuplicateIcon, CheckIcon } from '@heroicons/react/24/outline';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { Tooltip } from 'react-tooltip';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import python from 'react-syntax-highlighter/dist/esm/languages/hljs/python';
import cpp from 'react-syntax-highlighter/dist/esm/languages/hljs/cpp';
import csharp from 'react-syntax-highlighter/dist/esm/languages/hljs/csharp';
import useTutorialLogic from '../../utils/tutorialLogic';
import { JavascriptTopics } from '../ALLtutorils'
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeRaw from 'rehype-raw';
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const topics = JavascriptTopics;

// Register languages correctly
SyntaxHighlighter.registerLanguage('javascript', js);
SyntaxHighlighter.registerLanguage('python', python);
SyntaxHighlighter.registerLanguage('cpp', cpp);
SyntaxHighlighter.registerLanguage('csharp', csharp);

const JavascriptTutorials = () => {
    const { 
        result,
        isLoading,
        copiedIndex,
        selectedTopic,
        isMobileMenuOpen,
        progress,
        cachedResponses,
        completedTopics,
        setSelectedTopic,
        setIsMobileMenuOpen,
        setCompletedTopics,
        setCachedResponses,
        formatCodeResponse: formatCodeResponseFromLogic,
        handleTopicClick,
        setResult,
        setCopiedIndex
    } = useTutorialLogic();

    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const subjectKey = 'javascript';
        const savedTopicId = localStorage.getItem(`lastSelectedTopicId_${subjectKey}`);
        const savedResponses = localStorage.getItem(`${subjectKey}Responses`);
        const savedCompleted = localStorage.getItem(`completed${subjectKey}Topics`);
        
        if (savedCompleted) {
            setCompletedTopics(JSON.parse(savedCompleted));
        }
        
        if (savedResponses) {
            const parsedResponses = JSON.parse(savedResponses);
            setCachedResponses(parsedResponses);
            
            if (savedTopicId && parsedResponses[savedTopicId]) {
                const topic = topics.flatMap(cat => cat.items).find(t => t.id === Number(savedTopicId));
                if (topic) {
                    setSelectedTopic(topic);
                    setResult(parsedResponses[savedTopicId]);
                    return;
                }
            }
        }

        if (savedTopicId) {
            const topic = topics.flatMap(cat => cat.items).find(t => t.id === Number(savedTopicId));
            if (topic) {
                setSelectedTopic(topic);
                handleTopicClick(topic.prompt, topic.id, subjectKey);
                return;
            }
        }

        if (topics.length > 0 && topics[0].items.length > 0) {
            const firstTopic = topics[0].items[0];
            handleTopicClick(firstTopic.prompt, firstTopic.id, subjectKey);
        }
    }, []);

    useEffect(() => {
        const htmlElement = document.documentElement;
        const checkDarkMode = () => setIsDarkMode(htmlElement.classList.contains('dark'));
        
        // Initial check
        checkDarkMode();
        
        // Observe changes
        const observer = new MutationObserver(checkDarkMode);
        observer.observe(htmlElement, { attributes: true, attributeFilter: ['class'] });
        
        return () => observer.disconnect();
    }, []);

    NProgress.configure({ showSpinner: false }); 

    const renderCategoryButtons = (isMobile = false) => {
        return topics.map((category) => (
        <div key={category.category} className="relative  dark:bg-gray-800 dark:text-white ">
            <button
            onClick={() => {
                if (isMobile) setIsMobileMenuOpen(false);
            }}
            className={`${
                isMobile 
                ? 'px-5 py-4 text-sm w-full flex items-center justify-between transition-all duration-200 active:scale-[0.98] group'
                : 'w-full text-left px-4 py-3 rounded-lg'
            } font-medium ${
                isMobile
                ? 'text-gray-700 hover:text-gray-900'
                : 'text-gray-700 hover:bg-gray-100/50'
            }`}
            >
            <span className="flex-1 text-left font-semibold text-gray-800 dark:text-white">
                {category.category}
            </span>
            <ChevronRightIcon className="w-4 h-4 ml-3 opacity-90 transform transition-transform group-hover:translate-x-1 text-gray-800 dark:text-gray-200" />
            </button>
            {isMobile && (
            <div className="pl-4">
                {category.items.map((topic) => (
                <button
                    key={topic.id}
                    onClick={() => {
                    setSelectedTopic(topic);
                        handleTopicClick(topic.prompt, topic.id, 'javascript');
                    setIsMobileMenuOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 transition-colors border-b ${
                    completedTopics[topic.id] ? 'border-green-500' : 'border-gray-200 dark:border-gray-600'
                    } ${
                    selectedTopic?.id === topic.id
                        ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200'
                        : 'hover:bg-gray-100/50 dark:hover:bg-gray-700/50 text-gray-700 dark:text-gray-200'
                    }`}
                >
                    {topic.title}
                </button>
                ))}
            </div>
            )}
            {isMobile && <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200/50" />}
        </div>
        ));
    };

    const toggleCompletion = (topicId) => {
        if (!topicId) return;
        setCompletedTopics(prev => {
            const newState = {
                ...prev,
                [topicId]: !prev[topicId]
            };
            localStorage.setItem('completedjavascriptTopics', JSON.stringify(newState));
            return newState;
        });
    };

    return (
        <>
        <NavBar/>
        <Tooltip id="copy-tooltip" className="!rounded-md !text-xs !py-1 !px-2" />
        
        <div className="flex flex-col min-h-screen mt-15 md:mt-15 dark:text-white">
            {/* Mobile Menu Button */}
            <motion.div 
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="md:hidden sticky top-16 z-20 border-b border-gray-200 backdrop-blur-sm"
            >
            <div className="px-4 py-3 flex items-center justify-between">
                <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="flex items-center gap-2.5 text-gray-700 group"
                >
                <div className="relative">
                    <span className="text-sm font-medium transition-all duration-200 group-hover:text-indigo-600 dark:text-white">
                    Javascript Topics
                    </span>
                    <div className="absolute bottom-0 left-0 w-0 h-px bg-indigo-600 transition-all duration-300 group-hover:w-full" />
                </div>
                <ChevronRightIcon 
                    className={`w-5 h-5 transition-transform ${
                    isMobileMenuOpen 
                        ? 'rotate-90 text-indigo-600' 
                        : 'text-gray-500'
                    }`} 
                />
                </button>
            </div>
            </motion.div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={`fixed inset-0 z-30 ${isDarkMode ? 'bg-white/20' : 'bg-black/40'} backdrop-blur-sm`}
                onClick={() => setIsMobileMenuOpen(false)}
            >
                <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="absolute left-0 top-0 h-full w-[90%] max-w-[320px] shadow-xl mt-16 border-r-2 border-indigo-500/30 overflow-hidden touch-manipulation"
                onClick={(e) => e.stopPropagation()}
                >
                <div className="p-4 pt-5 border-b bg-gray-50 dark:bg-gray-800 sticky top-0 z-10 backdrop-blur-sm">
                    <div className="flex justify-between items-center w-full">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">Javascript Topics</h2>
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="p-1.5 rounded-lg hover:bg-gray-100/50 transition-colors w-full max-w-[40px]"
                    >
                        <svg className="w-6 h-6 text-gray-700 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    </div>
                </div>
                <div className="h-[calc(100vh-4.5rem)] overflow-y-auto scroll-smooth pb-4 bg-gray-50 dark:bg-gray-800">
                    <nav className="p-4 space-y-2">
                    {renderCategoryButtons(true)}
                    </nav>
                </div>
                <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white pointer-events-none" />
                </motion.div>
            </motion.div>
            )}

            <div className="flex flex-col md:flex-row">
            {/* Desktop Sidebar */}
            <motion.div 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="hidden md:block w-full md:w-64 lg:w-72 p-4 border-b md:border-r border-gray-200 fixed h-[calc(100vh-5rem)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent backdrop-blur-sm"
            >
                <h2 className="text-xl font-bold mb-4 dark:text-white">Javascript Tutorials</h2>
                <nav className="space-y-2">
                {topics.map((category) => (
                    <div key={category.category} className="mb-4">
                    <h3 className="font-semibold mb-2 px-2 dark:text-white">
                        {category.category}
                    </h3>
                    <ul className="space-y-1 dark:text-white">
                        {category.items.map((topic) => (
                        <li key={topic.id}>
                            <button
                            onClick={() => {
                                setSelectedTopic(topic);
                                handleTopicClick(topic.prompt, topic.id, 'javascript');
                            }}
                            className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-300 group ${
                                selectedTopic?.id === topic.id
                                ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200'
                                : 'hover:bg-gray-100/50 dark:hover:bg-gray-700/50 text-gray-700 dark:text-gray-200'
                            }`}
                            >
                                <div className="flex items-center justify-between">
                                    <span className="relative">
                                        {topic.title}
                                        <div className={`absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-300 ${
                                            completedTopics[topic.id] 
                                            ? 'w-full bg-green-500' 
                                            : 'group-hover:w-full bg-gray-300'
                                        }`} />
                                    </span>
                                    <div className={`w-4 h-4 flex items-center justify-center rounded-full border-2 transition-colors ${
                                        completedTopics[topic.id] 
                                        ? 'bg-green-500 border-green-600' 
                                        : 'bg-transparent border-gray-300'
                                    }`}>
                                        <svg 
                                            className={`w-3 h-3 text-white transition-opacity ${
                                                completedTopics[topic.id] ? 'opacity-100' : 'opacity-0'
                                            }`} 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                </div>
                            </button>
                        </li>
                        ))}
                    </ul>
                    </div>
                ))}
                </nav>
            </motion.div>

            {/* Main Content */}
            <div className="flex-1 p-4 sm:p-6 md:p-8 md:ml-64 lg:ml-72">
                <div className="max-w-6xl mx-auto w-full px-4 sm:px-6">
                <div className="mb-8">
                    <nav className="flex" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 text-sm">
                        <li className="inline-flex items-center">
                        <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
                        </li>
                        <li className="inline-flex items-center">
                        <ChevronRightIcon className="w-4 h-4 mx-2 text-gray-400" />
                        <Link to="/tutorials" className="text-gray-500 hover:text-gray-700">Tutorials</Link>
                        </li>
                        <li className="inline-flex items-center">
                        <ChevronRightIcon className="w-4 h-4 mx-2 text-gray-400" />
                        <span className="text-indigo-600">Javascript</span>
                        </li>
                    </ol>
                    </nav>
                    <div className="flex items-center gap-3">
                    <h1 className="text-xl sm:text-3xl font-bold mt-4 dark:text-white text-blue-500">{selectedTopic?.title}</h1>
                    <div className="flex items-center gap-2">
                        <motion.button
                            onClick={() => {
                                // Clear cached response for this topic
                                const subjectKey = 'javascript';
                                const topicId = selectedTopic?.id;
                                
                                if (topicId) {
                                    // Remove from localStorage
                                    const responses = JSON.parse(localStorage.getItem(`${subjectKey}Responses`) || '{}');
                                    delete responses[topicId];
                                    localStorage.setItem(`${subjectKey}Responses`, JSON.stringify(responses));
                                    
                                    // Update state
                                    setCachedResponses(prev => {
                                        const newState = { ...prev };
                                        delete newState[topicId];
                                        return newState;
                                    });
                                    
                                    // Trigger reload and refresh
                                    setResult(null);
                                    handleTopicClick(selectedTopic.prompt, topicId, subjectKey);
                                    window.location.reload();
                                }
                            }}
                            className="relative mt-4 p-1 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-700/50 transition-colors"
                            data-tooltip-id="refresh-tooltip"
                            data-tooltip-content="Refresh content"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <svg 
                                className="w-5 h-5 text-gray-600 dark:text-gray-300" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                        </motion.button>
                        <motion.button
                            onClick={() => toggleCompletion(selectedTopic?.id)}
                            className={`relative mt-4 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                                completedTopics[selectedTopic?.id] 
                                ? 'bg-green-500 border-green-600' 
                                : 'bg-white border-gray-300 hover:border-gray-400'
                            }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            data-tooltip-id="completion-tooltip"
                            data-tooltip-content={completedTopics[selectedTopic?.id] ? "Mark as incomplete" : "Mark as complete"}
                        >
                            <motion.div
                                initial={false}
                                animate={{ scale: completedTopics[selectedTopic?.id] ? 1 : 0 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <svg 
                                    className="w-4 h-4 text-white" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                            </motion.div>
                        </motion.button>
                    </div>
                    </div>
                </div>

                {isLoading ? (
                    <div className="space-y-4 md:space-y-6 flex flex-col items-center w-full">
                        <div className="w-full max-w-3xl animate-pulse space-y-6">
                           
                            
                            {/* Code Block Skeletons with Shimmer Effect */}
                            {[...Array(window.innerWidth < 768 ? 2 : 2)].map((_, i) => (
                                <div key={i} className="relative overflow-hidden h-32 bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                                    {/* Shimmer Overlay */}
                                    <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/30 dark:via-gray-800/30 to-transparent" />
                                    
                                    {/* Code Lines */}
                                    <div className="space-y-3">
                                        <div className={`h-4 bg-gray-200 dark:bg-gray-800 rounded-full w-${Math.floor(Math.random() * 4) + 3}/12`} />
                                        <div className={`h-4 bg-gray-200 dark:bg-gray-800 rounded-full w-${Math.floor(Math.random() * 8) + 4}/12`} />
                                        <div className={`h-4 bg-gray-200 dark:bg-gray-800 rounded-full w-${Math.floor(Math.random() * 6) + 3}/12`} />
                                    </div>
                                </div>
                            ))}
                            
                            {/* Text Content Skeletons */}
                            <div className="space-y-2">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className="h-3 bg-gray-200 dark:bg-gray-800 rounded-full w-full" />
                                ))}
                                <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded-full w-2/3" />
                            </div>
                        </div>
                        <p className="text-center text-gray-600 dark:text-gray-400 animate-pulse">
                            Generating tutorial content...
                        </p>
                    </div>
                ) : result ? (
                    <article className="prose prose-indigo max-w-none w-full px-0 md:px-0 dark:prose-invert
                        md:max-w-[calc(100%-2rem)] lg:max-w-[calc(100%-4rem)]
                        [&_h1]:my-6 [&_h2]:my-5 [&_h3]:my-4 [&_h4]:my-4
                        [&_p]:mb-4 [&_ul]:my-2 [&_ol]:my-2 [&_li>p]:mb-0
                        [&_pre]:my-4 [&_blockquote]:my-4 [&_hr]:my-8
                        [&_a]:text-indigo-600 [&_a]:underline [&_a:hover]:text-indigo-800
                        dark:[&_a]:text-indigo-400 dark:[&_a:hover]:text-indigo-300
                        dark:prose-pre:bg-gray-900/80 dark:prose-code:bg-gray-800/50">
                    {result.startsWith('Error:') ? (
                        <div className="bg-red-50 p-4 rounded-lg border border-red-200 dark:bg-red-900/20 dark:border-red-800/50">
                        <div className="flex items-center text-red-700">
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                            <span className="font-mono text-sm">{result}</span>
                        </div>
                        </div>
                    ) : (
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeSlug, rehypeRaw]}
                            components={{
                                code({node, inline, className, children, ...props}) {
                                    const match = /language-(\w+)/.exec(className || '');
                                    return !inline && match ? (
                                        <div className="relative my-4 rounded-lg overflow-hidden border dark:border-gray-600 bg-white dark:bg-gray-900">
                                            <div className="absolute right-2 top-2 z-10">
                                                <button
                                                    onClick={() => {
                                                        navigator.clipboard.writeText(String(children));
                                                        // Only show desktop toast
                                                        if (window.innerWidth > 768) {
                                                            const toast = document.createElement('div');
                                                            toast.className = 'fixed bottom-4 right-4 px-4 py-2 bg-green-500 text-white rounded-lg shadow-lg text-sm animate-fade-in-up';
                                                            toast.textContent = 'copied!';
                                                            document.body.appendChild(toast);
                                                            
                                                            setTimeout(() => {
                                                                toast.remove();
                                                            }, 2000);
                                                        }
                                                    }}
                                                    className="p-1.5 rounded hover:bg-gray-100/50 dark:hover:bg-gray-700/50 transition-colors"
                                                    data-tooltip-id="copy-tooltip"
                                                    data-tooltip-content="Copy code"
                                                >
                                                    <DocumentDuplicateIcon className="w-4 h-4 text-gray-500 dark:text-gray-400 bg-gray-100/50 dark:bg-gray-800/50 rounded-md p-0.5" />
                                                </button>
                                            </div>
                                            <SyntaxHighlighter
                                                style={document.documentElement.classList.contains('dark') ? vscDarkPlus : atomOneLight}
                                                language={match[1]}
                                                PreTag="div"
                                                className="text-sm p-4 bg-gray-50 dark:bg-gray-900"
                                                customStyle={{
                                                    background: 'transparent',
                                                    borderRadius: '0.5rem',
                                                    color: 'inherit'
                                                }}
                                            >
                                                {String(children).replace(/\n$/, '')}
                                            </SyntaxHighlighter>
                                        </div>
                                    ) : (
                                        <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm dark:text-indigo-300 border dark:border-gray-600">
                                            {children}
                                        </code>
                                    );
                                },
                                table({children}) {
                                    return (
                                        <div className="overflow-x-auto my-6 rounded-lg border dark:border-gray-600 shadow-sm">
                                            <table className="w-full border-collapse text-sm bg-white dark:bg-gray-900">
                                                {children}
                                            </table>
                                        </div>
                                    )
                                },
                                thead({children}) {
                                    return <thead className="bg-gray-50 dark:bg-gray-800">{children}</thead>
                                },
                                tbody({children}) {
                                    return <tbody className="divide-y divide-gray-200 dark:divide-gray-700">{children}</tbody>
                                },
                                tr({children}) {
                                    return <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">{children}</tr>
                                },
                                th({children}) {
                                    return <th className="px-4 py-3 font-semibold text-left border-b dark:border-gray-600 align-middle">{children}</th>
                                },
                                td({children}) {
                                    return <td className="px-4 py-2 border-b dark:border-gray-600 align-top">{children}</td>
                                },
                                ul({ children, depth, ordered, ...props }) {
                                    return <ul className={`pl-6 ${depth > 0 ? 'pl-4' : ''} space-y-2 my-3`}>{children}</ul>
                                },
                                ol({ children, depth, ordered, ...props }) {
                                    return <ol className={`pl-6 ${depth > 0 ? 'pl-4' : ''} space-y-2 my-3 list-decimal`}>{children}</ol>
                                },
                                li({ children, ...props }) {
                                    return (
                                        <li className="relative pl-4">
                                            <span className="absolute left-0 top-2.5 w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                                            <div className="pl-2">{children}</div>
                                        </li>
                                    )
                                },
                                h1({ children, ...props }) {
                                    return <h1 id={props.id} className="group text-3xl font-bold mt-8 mb-6 relative">
                                        {children}
                                        <a href={`#${props.id}`} className="absolute -left-6 top-1 opacity-0 group-hover:opacity-100">
                                            <span className="text-2xl">#</span>
                                        </a>
                                    </h1>
                                },
                                h2({ children, ...props }) {
                                    return <h2 id={props.id} className="group text-2xl font-semibold mt-6 mb-4 relative">
                                        {children}
                                        <a href={`#${props.id}`} className="absolute -left-6 top-1 opacity-0 group-hover:opacity-100">
                                            <span className="text-xl">#</span>
                                        </a>
                                    </h2>
                                },
                                img({ src, alt, ...props }) {
                                    return (
                                        <div className="my-4 rounded-lg overflow-hidden border dark:border-gray-600">
                                            <img 
                                                src={src} 
                                                alt={alt} 
                                                className="mx-auto max-w-full h-auto object-contain"
                                                loading="lazy"
                                            />
                                            {alt && <div className="p-2 text-sm text-center text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800">{alt}</div>}
                                        </div>
                                    )
                                },
                                blockquote({ children, ...props }) {
                                    return (
                                        <blockquote className="border-l-4 border-indigo-500 pl-4 my-4 py-2 bg-gray-50 dark:bg-gray-800 italic text-gray-700 dark:text-gray-300">
                                            {children}
                                        </blockquote>
                                    )
                                },
                                hr({ ...props }) {
                                    return <hr className="my-8 border-t-2 border-gray-200 dark:border-gray-700" />
                                },
                                p({ children, ...props }) {
                                    return <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">{children}</p>
                                },
                                a({ href, children, ...props }) {
                                    return (
                                        <a 
                                            href={href} 
                                            className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 underline underline-offset-4 transition-colors"
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                        >
                                            {children}
                                        </a>
                                    )
                                }
                            }}
                        >
                            {result}
                        </ReactMarkdown>
                    )}
                    </article>
                ) : null}

                {/* Pagination */}
                <div className="mt-12 flex justify-between items-center border-t border-gray-200 pt-6">
                    {selectedTopic && selectedTopic.id > 1 && (
                    <button
                        onClick={() => {
                        const prevTopic = topics
                            .flatMap(cat => cat.items)
                            .find(t => t.id === selectedTopic.id - 1);
                        if (prevTopic) {
                            setSelectedTopic(prevTopic);
                            handleTopicClick(prevTopic.prompt, prevTopic.id, 'mongodb');
                        }
                        }}
                        className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
                    >
                        <ChevronRightIcon className="w-4 h-4 mr-1 transform rotate-180" />
                        <span className="hidden md:inline">Previous: </span>
                        <span className="max-w-[100px] md:max-w-none truncate">
                        {topics.flatMap(cat => cat.items).find(t => t.id === selectedTopic.id - 1)?.title}
                        </span>
                    </button>
                    )}
                    {selectedTopic && selectedTopic.id < topics.flatMap(cat => cat.items).length && (
                    <button
                        onClick={() => {
                        const nextTopic = topics
                            .flatMap(cat => cat.items)
                            .find(t => t.id === selectedTopic.id + 1);
                        if (nextTopic) {
                            setSelectedTopic(nextTopic);
                            handleTopicClick(nextTopic.prompt, nextTopic.id, 'mongodb');
                        }
                        }}
                        className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 ml-auto"
                    >
                        <span className="max-w-[100px] md:max-w-none truncate">
                        {topics.flatMap(cat => cat.items).find(t => t.id === selectedTopic.id + 1)?.title}
                        </span>
                        <span className="hidden md:inline">: Next</span>
                        <ChevronRightIcon className="w-4 h-4 ml-1" />
                    </button>
                    )}
                </div>
                </div>
            </div>
            </div>

            {/* Add progress bar */}
            {isLoading && (
            <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700 z-50">
                <div 
                className="h-full bg-indigo-600 dark:bg-indigo-400 transition-all duration-300 ease-out" 
                style={{ width: `${progress}%` }}
                />
            </div>
            )}
        </div>
        <Tooltip id="completion-tooltip" className="!rounded-md !text-xs !py-1 !px-2" />
        <Tooltip id="refresh-tooltip" className="!rounded-md !text-xs !py-1 !px-2" />
        </>
    );
};
export default JavascriptTutorials;