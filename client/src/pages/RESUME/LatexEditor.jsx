import { useState, useEffect, useCallback, useRef } from "react";
import MonacoEditor from "@monaco-editor/react";
import config from "../../config";
import { Link, useParams } from "react-router-dom";
import { FaSync, FaSpinner, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { toast } from 'react-hot-toast';

export default function LatexEditor() {
  const { templateId } = useParams();
  const [latexCode, setLatexCode] = useState("");
  const [pdfBlobUrl, setPdfBlobUrl] = useState("");
  const [isCompiling, setIsCompiling] = useState(false);
  const [error, setError] = useState(null);
  const [compilationTimeout, setCompilationTimeout] = useState(null);
  const [resumeId, setResumeId] = useState(null);
  const [editorWidth, setEditorWidth] = useState(50); // Initial width: 50%
  const editorRef = useRef(null);
  const [isResizing, setIsResizing] = useState(false);
  const [pdfLoaded, setPdfLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const hasCompiledRef = useRef(false); // Track if compilation has been done

  const compileLatex = useCallback(async () => {
    setIsCompiling(true);
    setError(null);
    clearTimeout(compilationTimeout);
    setPdfLoaded(false);

    const timeout = setTimeout(() => {
      setIsCompiling(false);
      setError('Compilation is taking too long. Please check your LaTeX code and try again.');
    }, 10000);
    setCompilationTimeout(timeout);

    try {
      const accessToken = localStorage.getItem('access_token');
      
      // Update template
      await fetch(`${config.Backend_Api}/api/resume/update/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          template_id: templateId,
          id: resumeId,
          custom_code: latexCode
        })
      });

      // Compile template
      const res = await fetch(`${config.Backend_Api}/api/resume/compile/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`
        },
        body: JSON.stringify({ code: latexCode })
      });
      
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Compilation failed. Please check your LaTeX code.');
      }
      
      const blob = await res.blob();
      setPdfBlobUrl(URL.createObjectURL(blob));
      clearTimeout(timeout);
    } catch (err) {
      setError(err.message);
      clearTimeout(timeout);
    } finally {
      setIsCompiling(false);
    }
  }, [latexCode, compilationTimeout, templateId, resumeId]);

  useEffect(() => {
    const fetchTemplateData = async () => {
      try {
        const accessToken = localStorage.getItem('access_token');
        
        // First get all templates
        const templatesResponse = await fetch(`${config.Backend_Api}/api/resume/templates/`, {
          headers: { Authorization: `Bearer ${accessToken}` }
        });
        const templates = await templatesResponse.json();
        
        // Then get saved resumes
        const savedResponse = await fetch(`${config.Backend_Api}/api/resume/resumes/`, {
          headers: { Authorization: `Bearer ${accessToken}` }
        });
        const savedResumes = await savedResponse.json();
        
        // Find the selected template
        const selectedTemplate = templates.find(t => t.template_id === templateId);
        if (selectedTemplate) {
          // Check if it's already saved
          const savedResume = savedResumes.find(r => r.template.template_id === templateId);
          if (savedResume) {
            setLatexCode(savedResume.custom_code);
            setResumeId(savedResume.id);
          } else {
            // If not saved, create a new resume
            const createResponse = await fetch(`${config.Backend_Api}/api/resume/resumes/`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
              },
              body: JSON.stringify({
                template_id: templateId
              })
            });
            const newResume = await createResponse.json();
            setLatexCode(newResume.custom_code);
            setResumeId(newResume.id);
          }
        }
      } catch (error) {
        console.error('Error fetching template:', error);
        toast.error('Failed to load template');
      }
    };

    if (templateId) {
      fetchTemplateData();
    }
  }, [templateId]);

  // Trigger auto-compilation only after state is fully updated
  useEffect(() => {
    if (latexCode && resumeId && !hasCompiledRef.current) {
      compileLatex();
      hasCompiledRef.current = true; // Mark as compiled
    }
  }, [latexCode, resumeId, compileLatex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        compileLatex();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [compileLatex]);

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
    // Disable JavaScript validations
    monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
      noSemanticValidation: true,
      noSyntaxValidation: true,
    });

    // Set up dark/light mode theme switching
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const updateTheme = () => {
      monaco.editor.setTheme(darkModeMediaQuery.matches ? 'vs-dark' : 'vs');
    };
    darkModeMediaQuery.addEventListener('change', updateTheme);
    updateTheme();
  };

  const handleResizeStart = useCallback(() => {
    setIsResizing(true);
  }, []);

  const handleResize = useCallback(
    (e) => {
      if (!isResizing) return;
      e.preventDefault();

      const containerWidth = document.querySelector('.flex.flex-1.flex-col.md\\:flex-row').offsetWidth;
      let newWidth = (e.clientX / containerWidth) * 100;

      // Limit the width between 30% and 70%
      newWidth = Math.max(30, Math.min(70, newWidth));
      setEditorWidth(newWidth);
    },
    [isResizing, pdfLoaded]
  );

  const handleResizeStop = useCallback(() => {
    setIsResizing(false);
  }, []);

  useEffect(() => {
    const handleResizeWindow = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResizeWindow);

    window.addEventListener('mousemove', handleResize);
    window.addEventListener('mouseup', handleResizeStop);

    return () => {
      window.removeEventListener('resize', handleResizeWindow);
      window.removeEventListener('mousemove', handleResize);
      window.removeEventListener('mouseup', handleResizeStop);
    };
  }, [handleResize, handleResizeStop]);

  const handlePdfLoad = () => {
    setPdfLoaded(true);
  };

  return (
    <div className="flex h-screen w-full flex-col">
      {/* Top Navbar */}
      <div className="w-full max-w-[1300px] mx-auto py-1 px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
       
        {/* Nav Buttons */}
        <div className="w-full sm:w-auto">
          <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-4 flex-wrap">
            <Link
              to="/"
              className="text-sm text-gray-700 dark:text-white hover:text-blue-600 px-3 py-1.5 rounded-md transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              to="/resume-builder"
              className="text-sm text-gray-700 dark:text-white hover:text-blue-600 px-3 py-1.5 rounded-md transition-colors duration-200"
            >
              Resume Builder
            </Link>
            <Link
              to="/saved-templates"
              className="text-sm text-gray-700 dark:text-white hover:text-blue-600 px-3 py-1.5 rounded-md transition-colors duration-200"
            >
              My Resume
            </Link>
          </div>
        </div>

        {/* Recompile Button */}
        <div className="w-full sm:w-auto relative group">
          <button 
            onClick={compileLatex}
            disabled={isCompiling}
            className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-3 py-1.5 text-sm text-white hover:from-blue-700 hover:to-indigo-700 disabled:opacity-70 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            {isCompiling ? (
              <>
                <FaSpinner className="animate-spin h-4 w-4" />
                Compiling...
              </>
            ) : (
              <>
                <FaSync className="h-4 w-4" />
                Recompile
              </>
            )}
          </button>
          
        </div>

        {/* Right: My Resume Button */}
        <div className="w-full sm:w-auto">
          
        </div>
      </div>
      <div className="w-full border-b border-gray-300 dark:border-gray-600"></div>

      {/* Main Content */}
      <div className={`flex flex-1 flex-col ${isMobile ? '' : 'md:flex-row'}`}>
        {/* Left: Editor */}
        <div 
          className="flex h-[400px] md:h-full flex-col border-b md:border-r border-gray-700 overflow-hidden relative"
          style={{ width: isMobile ? '100%' : `${editorWidth}%` }}
        >
          <div className="flex-1 relative">
            <div className="absolute inset-0">
              <MonacoEditor
                height="100%"
                width="100%"
                defaultLanguage="javascript"
                value={latexCode}
                onChange={(value) => setLatexCode(value)}
                options={{ 
                  minimap: { enabled: false },
                  scrollBeyondLastLine: false,
                  wordWrap: 'on',
                  wrappingStrategy: 'advanced',
                  wrappingIndent: 'indent',
                  lineNumbers: 'on',
                  scrollbar: {
                    vertical: 'auto',
                    horizontal: 'auto'
                  },
                  automaticLayout: true,
                  highlightActiveIndentGuide: true,
                  renderLineHighlight: 'all',
                  roundedSelection: false
                }}
                onMount={handleEditorDidMount}
              />
            </div>
          </div>
          {!isMobile && (
            <div
              className="absolute top-0 right-0 h-full w-2 cursor-col-resize z-10 flex items-center justify-center"
              onMouseDown={handleResizeStart}
            >
              <div className="opacity-0 hover:opacity-100 transition-opacity duration-200">
                <FaChevronRight className="text-gray-500" />
                <FaChevronLeft className="text-gray-500" />
              </div>
            </div>
          )}
        </div>

        {/* Right: PDF Preview */}
        <div className="flex h-[400px] md:h-full flex-col" style={{ width: isMobile ? '100%' : `${100 - editorWidth}%` }}>
          <div className="flex-1 bg-gray-100 relative">
            {error && (
              <div className="absolute inset-0 bg-red-100 p-4 text-red-600 text-sm">
                Error: {error}
                <div className="mt-2">Please fix the errors in your LaTeX code and try again.</div>
              </div>
            )}
            {pdfBlobUrl ? (
              <iframe 
                src={pdfBlobUrl} 
                className="h-full w-full"
                title="PDF Preview"
                onLoad={handlePdfLoad}
              />
            ) : (
              <div className="flex h-full items-center justify-center text-gray-400">
                PDF will appear here
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}