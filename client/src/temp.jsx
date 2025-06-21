import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import config from './config';
import { useState, useEffect } from 'react';

const useCalculatorContent = () => {
    const [content, setContent] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const prompt = `
            write very long tutorial on variuse data structure and algorithm in various languages
        `;

        setIsLoading(true);
        setError(null);

        fetch(`${config.Backend_Api}/api/careerhub/api/generate/`, {
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
        })
        .then(response => response.json())
        .then(data => {
            setContent(data.response);
            setIsLoading(false);
        })
        .catch(err => {
            setError(err.message);
            setIsLoading(false);
        });
    }, []);

    return { content, isLoading, error };
};

const CalculatorContent = () => {
    const { content, isLoading, error } = useCalculatorContent();

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

        // Try Clipboard API first
        navigator.clipboard.writeText(code)
            .then(() => {
                showCopySuccess();
            })
            .catch(err => {
                console.error('Failed to copy with Clipboard API:', err);
                // Fallback to old method
                const textarea = document.createElement('textarea');
                textarea.value = code;
                textarea.style.position = 'fixed';
                document.body.appendChild(textarea);
                textarea.select();
                try {
                    const successful = document.execCommand('copy');
                    if (successful) {
                        showCopySuccess();
                    } else {
                        console.error('Fallback copy failed');
                    }
                } catch (err) {
                    console.error('Fallback copy error:', err);
                } finally {
                    document.body.removeChild(textarea);
                }
            });
    };

    return (
        <div className="p-3 md:p-4 rounded-lg shadow-md bg-white dark:bg-gray-800 dark:text-white mx-0 md:mx-2 my-2 md:my-4">
            {isLoading && <p>Loading calculator content...</p>}
            {error && <p className="text-red-500 dark:text-red-400 text-sm md:text-base">{error}</p>}

            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                    code({ inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || "");
                        const language = match?.[1] || '';
                        const isMobile = window.innerWidth <= 640;

                        if (!inline && language) {
                            return (
                                <div className="relative overflow-x-auto">
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
                                        lineProps={{ style: { 
                                            whiteSpace: 'pre',
                                            fontSize: isMobile ? '0.7rem' : '0.8rem'
                                        }}}
                                        customStyle={{
                                            borderRadius: '0.5rem',
                                            padding: isMobile ? '0.75rem 0.5rem' : '1rem',
                                            margin: '0.5rem 0',
                                            fontSize: isMobile ? '0.7rem' : '0.8rem',
                                            backgroundColor: '#1e1e1e',
                                            overflowX: 'auto',
                                            minWidth: isMobile ? '100%' : 'auto',
                                            width: 'fit-content',
                                            maxWidth: '100vw'
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
                        return (
                            <h1 className="text-2xl md:text-3xl font-bold my-2 md:my-4 border-b pb-1 md:pb-2 dark:text-white" {...props}>
                                {children}
                            </h1>
                        );
                    },
                    h2({ node, children, ...props }) {
                        return (
                            <h2 className="text-xl md:text-2xl font-semibold my-2 md:my-3 dark:text-white" {...props}>
                                {children}
                            </h2>
                        );
                    },
                    h3({ node, children, ...props }) {
                        return (
                            <h3 className="text-lg md:text-xl font-medium my-1 md:my-2 dark:text-white" {...props}>
                                {children}
                            </h3>
                        );
                    },
                    p({ node, children, ...props }) {
                        return (
                            <p className="my-2 md:my-3 leading-normal md:leading-relaxed dark:text-white" {...props}>
                                {children}
                            </p>
                        );
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
                    th({ node, children, ...props }) {
                        return (
                            <th className="px-4 py-2 border bg-gray-700 font-bold dark:text-white" {...props}>
                                {children}
                            </th>
                        );
                    },
                    td({ node, children, ...props }) {
                        return (
                            <td className="px-4 py-2 border dark:text-white" {...props}>
                                {children}
                            </td>
                        );
                    },
                    ul({ node, children, ...props }) {
                        return (
                            <ul className="list-disc pl-4 md:pl-8 my-2 md:my-4 dark:text-white" {...props}>
                                {children}
                            </ul>
                        );
                    },
                    ol({ node, children, ...props }) {
                        return (
                            <ol className="list-decimal pl-4 md:pl-8 my-2 md:my-4 dark:text-white" {...props}>
                                {children}
                            </ol>
                        );
                    },
                    li({ node, children, ...props }) {
                        return (
                            <li className="my-2 dark:text-white" {...props}>
                                {children}
                            </li>
                        );
                    },
                    strong({ node, children, ...props }) {
                        return (
                            <strong className="font-bold text-blue-400 dark:text-blue-300" {...props}>
                                {children}
                            </strong>
                        );
                    },
                    blockquote({ node, children, ...props }) {
                        return (
                            <blockquote className="border-l-4 border-gray-500 pl-4 my-4 italic text-gray-400 dark:text-gray-300" {...props}>
                                {children}
                            </blockquote>
                        );
                    },
                    a({ node, children, ...props }) {
                        return (
                            <a className="text-blue-400 hover:text-blue-300 underline dark:text-blue-300" {...props}>
                                {children}
                            </a>
                        );
                    }
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
};

export default CalculatorContent;
