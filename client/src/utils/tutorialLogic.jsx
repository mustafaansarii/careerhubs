import { useState } from 'react';
import NProgress from 'nprogress';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const useTutorialLogic = () => {
    const [result, setResult] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [copiedIndex, setCopiedIndex] = useState(null);
    const [selectedTopic, setSelectedTopic] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [progress, setProgress] = useState(0);
    const [cachedResponses, setCachedResponses] = useState({});
    const [completedTopics, setCompletedTopics] = useState({});

    const fetchAPI = async (prompt) => {
        setIsLoading(true);
        setProgress(0);
        NProgress.start();

        try {
            const response = await fetch('/api/careerhub/api/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                },
                body: JSON.stringify({
                    prompt: prompt,
                    format: 'markdown',
                    mobile_optimized: true
                })
            });

            const interval = setInterval(() => {
                setProgress(prev => Math.min(prev + 10, 90));
            }, 500);

            const data = await response.json();
            clearInterval(interval);
            setProgress(100);

            return data.response || 'No content received from the server.';
        } catch (error) {
            throw error;
        } finally {
            NProgress.done();
            setIsLoading(false);
            setTimeout(() => setProgress(0), 300);
        }
    };

    const handleTopicClick = async (topicPrompt, topicId, subjectKey) => {
        if (!topicId) {
            console.error('Topic ID is undefined');
            return;
        }

        const standardizedKey = subjectKey.toLowerCase();
        localStorage.setItem(`lastSelectedTopicId_${standardizedKey}`, topicId);

        if (cachedResponses[topicId]) {
            setResult(cachedResponses[topicId]);
            setSelectedTopic(topics.flatMap(cat => cat.items).find(t => t.id === topicId));
            return;
        }

        try {
            const response = await fetchAPI(topicPrompt);
            setCachedResponses(prev => {
                const newResponses = {
                    ...prev,
                    [topicId]: response
                };
                localStorage.setItem(`${standardizedKey}Responses`, JSON.stringify(newResponses));
                return newResponses;
            });
            setResult(response);
        } catch (error) {
            console.error('Fetch error:', error);
            setResult(`Error: ${error.message}. Please try again later.`);
        }
    };

    const cleanMarkdown = (markdown) => {
        return markdown
            .replace(/(^\d+[.)]\s+)/gm, '')
            .replace(/(\n\d+[.)]\s+)/g, '\n')
            .replace(/(\d+\.)\s+/g, '')
            .replace(/\n{3,}/g, '\n\n');
    };

    const handleCopyCode = (code, language, button) => {
        const originalText = button.textContent;
        const originalClass = button.className;

        const showCopySuccess = () => {
            button.textContent = '✅ Copied!';
            button.classList.add('bg-green-500', 'dark:bg-green-600');
            setTimeout(() => {
                button.textContent = originalText;
                button.className = originalClass;
            }, 2000);
        };

        navigator.clipboard.writeText(code)
            .then(() => showCopySuccess())
            .catch(err => {
                console.error('Failed to copy:', err);
                const textarea = document.createElement('textarea');
                textarea.value = code;
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
                showCopySuccess();
            });
    };

    const formatCodeResponse = (response) => (
        <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
                code({ inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || "");
                    const language = match?.[1] || '';
                    const isMobile = window.innerWidth <= 640;

                    if (!inline && language) {
                        return (
                            <div className="relative max-w-full overflow-x-auto">
                                <div className="absolute top-0.5 right-0.5 md:top-2 md:right-2 flex items-center gap-1 md:gap-2">
                                    <div className="text-[8px] md:text-xs text-gray-400 dark:text-gray-300">
                                        {language}
                                    </div>
                                    <button
                                        onClick={(e) => handleCopyCode(
                                            String(children).replace(/\n$/, ""),
                                            language,
                                            e.currentTarget
                                        )}
                                        className="text-[8px] md:text-xs bg-gray-200 dark:bg-gray-700 px-1 py-0.5 md:px-2 md:py-1 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors dark:text-white"
                                    >
                                        Copy
                                    </button>
                                </div>
                                <SyntaxHighlighter
                                    style={vscDarkPlus}
                                    language={language.toLowerCase()}
                                    showLineNumbers={!isMobile}
                                    wrapLines={false}
                                    lineProps={{
                                        style: {
                                            whiteSpace: 'pre',
                                            fontSize: isMobile ? '0.7rem' : '0.8rem'
                                        }
                                    }}
                                    customStyle={{
                                        borderRadius: '0.5rem',
                                        padding: isMobile ? '0.75rem 0.5rem' : '1rem',
                                        margin: '0.5rem 0',
                                        fontSize: isMobile ? '0.7rem' : '0.8rem',
                                        backgroundColor: '#1e1e1e',
                                        overflowX: 'auto',
                                        minWidth: '100%',
                                        width: 'fit-content',
                                        maxWidth: '100%'
                                    }}
                                    {...props}
                                >
                                    {String(children).replace(/\n$/, "")}
                                </SyntaxHighlighter>
                            </div>
                        );
                    }
                    return (
                        <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-xs md:text-sm dark:text-white" {...props}>
                            {children}
                        </code>
                    );
                },
                h1({ node, children, ...props }) {
                    return <h1 className="text-2xl md:text-3xl font-bold my-2 md:my-4 border-b pb-1 md:pb-2 dark:text-white" {...props}>{children}</h1>;
                },
                h2({ node, children, ...props }) {
                    return <h2 className="text-xl md:text-2xl font-semibold my-2 md:my-3 dark:text-white" {...props}>{children}</h2>;
                },
                table({ node, children, ...props }) {
                    return (
                        <div className="overflow-x-auto">
                            <table className="min-w-full my-4 border-collapse dark:text-white" {...props}>
                                {children}
                            </table>
                        </div>
                    );
                },
            }}
        >
            {response}
        </ReactMarkdown>
    );

    return {
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
        formatCodeResponse,
        handleTopicClick,
        setResult
    };
};

export default useTutorialLogic;