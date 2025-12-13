import { useState, useEffect, useCallback, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { FaSync, FaSpinner } from "react-icons/fa";
import { defaultFormData, generateLatexCode } from "../../templates/resume/BasicTemplate";
import { saveFormDataToLocalStorage, loadFormDataFromLocalStorage, clearFormDataFromLocalStorage } from '../../utils/localStorageUtils';

export default function Resume_Form() {
  const { templateId } = useParams();
  const [pdfBlobUrl, setPdfBlobUrl] = useState("");
  const [isCompiling, setIsCompiling] = useState(false);
  const [error, setError] = useState(null);
  const [compilationTimeout, setCompilationTimeout] = useState(null);
  const [editorWidth, setEditorWidth] = useState(50); // Initial width: 50%
  const editorRef = useRef(null);
  const [isResizing, setIsResizing] = useState(false);
  const [pdfLoaded, setPdfLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [activeSection, setActiveSection] = useState('profile');
  const [formData, setFormData] = useState(() => {
    const savedData = loadFormDataFromLocalStorage();
    return savedData || defaultFormData;
  });
  const [expandedSections, setExpandedSections] = useState({
    education: 0,
    experience: 0,
    skills: 0,
    projects: 0,
    achievements: 0
  });

  useEffect(() => {
    saveFormDataToLocalStorage(formData);
  }, [formData]);

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

      // Keep only the compile API call
      const res = await fetch('/api/resume/compile/', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`
        },
        body: JSON.stringify({ code: generateLatexCode(formData) })
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
  }, [formData, compilationTimeout]);

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
    [isResizing]
  );

  useEffect(() => {
    const handleResizeWindow = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResizeWindow);

    window.addEventListener('mousemove', handleResize);

    return () => {
      window.removeEventListener('resize', handleResizeWindow);
      window.removeEventListener('mousemove', handleResize);
    };
  }, [handleResize]);

  const handlePdfLoad = () => {
    setPdfLoaded(true);
  };

  const renderNavigation = () => (
    <div className="w-full md:w-48 flex flex-col space-y-2 p-2 border-r dark:border-gray-700">
      <button
        onClick={() => setActiveSection('profile')}
        className={`p-2 text-left dark:text-white ${activeSection === 'profile' ? 'bg-blue-100 dark:bg-blue-800' : 'hover:bg-blue-50 dark:hover:bg-blue-900'}`}
      >
        Profile
      </button>
      <button
        onClick={() => setActiveSection('education')}
        className={`p-2 text-left dark:text-white ${activeSection === 'education' ? 'bg-blue-100 dark:bg-blue-800' : 'hover:bg-blue-50 dark:hover:bg-blue-900'}`}
      >
        Education
      </button>
      <button
        onClick={() => setActiveSection('experience')}
        className={`p-2 text-left dark:text-white ${activeSection === 'experience' ? 'bg-blue-100 dark:bg-blue-800' : 'hover:bg-blue-50 dark:hover:bg-blue-900'}`}
      >
        Experience
      </button>
      <button
        onClick={() => setActiveSection('skills')}
        className={`p-2 text-left dark:text-white ${activeSection === 'skills' ? 'bg-blue-100 dark:bg-blue-800' : 'hover:bg-blue-50 dark:hover:bg-blue-900'}`}
      >
        Skills
      </button>
      <button
        onClick={() => setActiveSection('projects')}
        className={`p-2 text-left dark:text-white ${activeSection === 'projects' ? 'bg-blue-100 dark:bg-blue-800' : 'hover:bg-blue-50 dark:hover:bg-blue-900'}`}
      >
        Projects
      </button>
      <button
        onClick={() => setActiveSection('achievements')}
        className={`p-2 text-left dark:text-white ${activeSection === 'achievements' ? 'bg-blue-100 dark:bg-blue-800' : 'hover:bg-blue-50 dark:hover:bg-blue-900'}`}
      >
        Achievements
      </button>
    </div>
  );

  const renderProfileSection = () => {
    const isFormValid = formData.profile.name &&
      formData.profile.address &&
      formData.profile.email &&
      formData.profile.phone &&
      formData.profile.linkedin &&
      formData.profile.github;

    return (
      <div className="space-y-4">
        <h2 className="text-xl font-bold dark:text-white">Personal Information</h2>
        <InputField
          label="Full Name"
          value={formData.profile.name}
          onChange={(e) => handleArrayInputChange('profile', null, 'name', e.target.value)}
          placeholder="Enter your full name"
          required
        />
        <InputField
          label="Address"
          value={formData.profile.address}
          onChange={(e) => handleArrayInputChange('profile', null, 'address', e.target.value)}
          placeholder="Enter your address"
          required
        />
        <InputField
          label="Email"
          value={formData.profile.email}
          onChange={(e) => handleArrayInputChange('profile', null, 'email', e.target.value)}
          placeholder="Enter your email"
          required
        />
        <InputField
          label="Phone Number"
          value={formData.profile.phone}
          onChange={(e) => handleArrayInputChange('profile', null, 'phone', e.target.value)}
          placeholder="Enter your phone number"
          required
        />
        <InputField
          label="LinkedIn Username"
          value={formData.profile.linkedin}
          onChange={(e) => handleArrayInputChange('profile', null, 'linkedin', e.target.value)}
          placeholder="Enter your LinkedIn username"
          required
        />
        <InputField
          label="GitHub Username"
          value={formData.profile.github}
          onChange={(e) => handleArrayInputChange('profile', null, 'github', e.target.value)}
          placeholder="Enter your GitHub username"
          required
        />
        {!isFormValid && (
          <p className="text-red-500 text-sm">All fields in the Personal Information section are required.</p>
        )}
      </div>
    );
  };

  const renderExperienceSection = () => (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold dark:text-white">Experience</h2>
        <button onClick={() => addSectionItem('experience')} className="bg-blue-500 text-white px-3 py-1 rounded">
          Add Experience
        </button>
      </div>
      {formData.experience.map((exp, index) => (
        <div key={index} className="space-y-2 p-4 border rounded dark:border-gray-700 dark:bg-gray-800">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold dark:text-white">Experience #{index + 1}</h3>
            <div className="flex items-center gap-2">
              <button
                onClick={() => toggleSection('experience', index)}
                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              >
                {expandedSections.experience === index ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
              <button onClick={() => handleArrayInputChange('experience', index, null, null)} className="text-red-500">
                Remove
              </button>
            </div>
          </div>
          {expandedSections.experience === index && (
            <>
              <InputField label="Company" value={exp.company} onChange={(e) => handleArrayInputChange('experience', index, 'company', e.target.value)} placeholder="e.g. Google" />
              <InputField label="Title" value={exp.title} onChange={(e) => handleArrayInputChange('experience', index, 'title', e.target.value)} placeholder="e.g. Software Engineer" />
              <InputField label="Location" value={exp.location} onChange={(e) => handleArrayInputChange('experience', index, 'location', e.target.value)} placeholder="e.g. Mountain View, CA" />
              <div className="grid grid-cols-2 gap-4">
                <InputField label="Start Date" value={exp.startDate} onChange={(e) => handleArrayInputChange('experience', index, 'startDate', e.target.value)} placeholder="e.g. 2020-01-01" />
                <InputField label="End Date" value={exp.endDate} onChange={(e) => handleArrayInputChange('experience', index, 'endDate', e.target.value)} placeholder="e.g. 2022-12-31 or Present" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium dark:text-white">Responsibilities</label>
                {exp.responsibilities.map((responsibility, respIndex) => (
                  <div key={respIndex} className="flex gap-2 items-center">
                    <input
                      value={responsibility}
                      onChange={(e) => handleResponsibilityChange(index, respIndex, e.target.value)}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                      placeholder={`Responsibility ${respIndex + 1}`}
                    />
                    <button
                      onClick={() => handleRemoveResponsibility(index, respIndex)}
                      className="text-red-500 px-2 py-1 hover:bg-red-50 rounded dark:hover:bg-red-800"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  onClick={() => handleAddResponsibility(index)}
                  className="bg-blue-500 text-white px-3 py-1 rounded mt-2"
                >
                  Add Responsibility
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );

  const renderEducationSection = () => (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold dark:text-white">Education</h2>
        <button onClick={() => addSectionItem('education')} className="bg-blue-500 text-white px-3 py-1 rounded">
          Add Education
        </button>
      </div>
      {formData.education.map((edu, index) => (
        <div key={index} className="space-y-2 p-4 border rounded dark:border-gray-700 dark:bg-gray-800">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold dark:text-white">Education #{index + 1}</h3>
            <div className="flex items-center gap-2">
              <button
                onClick={() => toggleSection('education', index)}
                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              >
                {expandedSections.education === index ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
              <button
                onClick={() => handleArrayInputChange('education', index, null, null)}
                className="text-red-500"
              >
                Remove
              </button>
            </div>
          </div>
          {expandedSections.education === index && (
            <>
              <InputField label="Institution" value={edu.institution} onChange={(e) => handleArrayInputChange('education', index, 'institution', e.target.value)} placeholder="e.g. Stanford University" />
              <InputField label="Location" value={edu.location} onChange={(e) => handleArrayInputChange('education', index, 'location', e.target.value)} placeholder="e.g. Stanford, CA" />
              <InputField label="Degree" value={edu.degree} onChange={(e) => handleArrayInputChange('education', index, 'degree', e.target.value)} placeholder="e.g. Bachelor of Science" />
              <InputField label="Field of Study" value={edu.fieldOfStudy} onChange={(e) => handleArrayInputChange('education', index, 'fieldOfStudy', e.target.value)} placeholder="e.g. Computer Science" />
              <div className="grid grid-cols-2 gap-4">
                <InputField
                  label="GPA Type"
                  value={edu.gpaType}
                  onChange={(e) => handleArrayInputChange('education', index, 'gpaType', e.target.value)}
                  isSelect
                  options={[
                    { value: 'GPA', label: 'GPA' },
                    { value: 'Percentage', label: 'Percentage' },
                    { value: 'Grade', label: 'Grade' }
                  ]}
                />
                <InputField
                  label={edu.gpaType || "GPA Value"}
                  value={edu.gpa}
                  onChange={(e) => handleArrayInputChange('education', index, 'gpa', e.target.value)}
                  placeholder={`Enter ${edu.gpaType || 'GPA'}`}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <InputField label="Start Date" value={edu.startDate} onChange={(e) => handleArrayInputChange('education', index, 'startDate', e.target.value)} placeholder="e.g. 2016-09-01" />
                <InputField label="End Date" value={edu.endDate} onChange={(e) => handleArrayInputChange('education', index, 'endDate', e.target.value)} placeholder="e.g. 2020-06-01" />
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );

  const renderSkillsSection = () => (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold dark:text-white">Technical Skills</h2>
        <button onClick={() => addSectionItem('skills')} className="bg-blue-500 text-white px-3 py-1 rounded">
          Add Skill Category
        </button>
      </div>
      {formData.skills.map((skill, index) => (
        <div key={index} className="space-y-2 p-4 border rounded dark:border-gray-700 dark:bg-gray-800">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold dark:text-white">Skill Category #{index + 1}</h3>
            <div className="flex items-center gap-2">
              <button
                onClick={() => toggleSection('skills', index)}
                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              >
                {expandedSections.skills === index ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
              <button onClick={() => handleArrayInputChange('skills', index, null, null)} className="text-red-500">
                Remove
              </button>
            </div>
          </div>
          {expandedSections.skills === index && (
            <>
              <InputField
                label="Category Name"
                value={skill.category}
                onChange={(e) => handleArrayInputChange('skills', index, 'category', e.target.value)}
                placeholder="e.g. Languages, Coursework"
              />
              <InputField
                label="Skills (comma separated)"
                value={skill.details}
                onChange={(e) => handleArrayInputChange('skills', index, 'details', e.target.value)}
                placeholder="e.g. Java, Python, JavaScript"
              />
            </>
          )}
        </div>
      ))}
    </div>
  );

  const renderProjectsSection = () => (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold dark:text-white">Projects</h2>
        <button onClick={() => addSectionItem('projects')} className="bg-blue-500 text-white px-3 py-1 rounded">
          Add Project
        </button>
      </div>
      {formData.projects.map((proj, index) => (
        <div key={index} className="space-y-2 p-4 border rounded dark:border-gray-700 dark:bg-gray-800">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold dark:text-white">Project #{index + 1}</h3>
            <div className="flex items-center gap-2">
              <button
                onClick={() => toggleSection('projects', index)}
                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              >
                {expandedSections.projects === index ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
              <button onClick={() => handleArrayInputChange('projects', index, null, null)} className="text-red-500">
                Remove
              </button>
            </div>
          </div>
          {expandedSections.projects === index && (
            <>
              <InputField label="Name" value={proj.name} onChange={(e) => handleArrayInputChange('projects', index, 'name', e.target.value)} placeholder="e.g. Personal Website" />
              <InputField label="URL" value={proj.url} onChange={(e) => handleArrayInputChange('projects', index, 'url', e.target.value)} placeholder="e.g. https://example.com" />
              <InputField label="URL Label" value={proj.urlLabel} onChange={(e) => handleArrayInputChange('projects', index, 'urlLabel', e.target.value)} placeholder="e.g. example.com" />
              <InputField label="Tech Stack" value={proj.techStack} onChange={(e) => handleArrayInputChange('projects', index, 'techStack', e.target.value)} placeholder="e.g. React, Node.js, Tailwind CSS" />
              <div className="space-y-2">
                <label className="text-sm font-medium dark:text-white">Project Details</label>
                {proj.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex gap-2 items-center">
                    <input
                      value={detail}
                      onChange={(e) => handleProjectDetailChange(index, detailIndex, e.target.value)}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                      placeholder={`Detail ${detailIndex + 1}`}
                    />
                    <button
                      onClick={() => handleRemoveProjectDetail(index, detailIndex)}
                      className="text-red-500 px-2 py-1 hover:bg-red-50 rounded dark:hover:bg-red-800"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleAddProjectDetail(index);
                  }}
                  className="bg-blue-500 text-white px-3 py-1 rounded mt-2"
                >
                  Add Detail
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );

  const renderAchievementsSection = () => (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold dark:text-white">Achievements</h2>
        <button onClick={() => addSectionItem('achievements')} className="bg-blue-500 text-white px-3 py-1 rounded">
          Add Achievement
        </button>
      </div>
      {formData.achievements.map((ach, index) => (
        <div key={index} className="space-y-2 p-4 border rounded dark:border-gray-700 dark:bg-gray-800">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold dark:text-white">Achievement #{index + 1}</h3>
            <div className="flex items-center gap-2">
              <button
                onClick={() => toggleSection('achievements', index)}
                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              >
                {expandedSections.achievements === index ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
              <button onClick={() => handleArrayInputChange('achievements', index, null, null)} className="text-red-500">
                Remove
              </button>
            </div>
          </div>
          {expandedSections.achievements === index && (
            <div className="space-y-2">
              <label className="text-sm font-medium dark:text-white">Achievement Points</label>
              {ach.details.map((detail, detailIndex) => (
                <div key={detailIndex} className="flex gap-2 items-center">
                  <input
                    value={detail}
                    onChange={(e) => handleAchievementDetailChange(index, detailIndex, e.target.value)}
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                    placeholder={`Achievement point ${detailIndex + 1}`}
                  />
                  <button
                    onClick={() => handleRemoveAchievementDetail(index, detailIndex)}
                    className="text-red-500 px-2 py-1 hover:bg-red-50 rounded dark:hover:bg-red-800"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                onClick={() => handleAddAchievementDetail(index)}
                className="bg-blue-500 text-white px-3 py-1 rounded mt-2"
              >
                Add Point
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );

  const addSectionItem = (section) => {
    setFormData(prev => ({
      ...prev,
      [section]: [...prev[section], { ...defaultFormData[section][0] }]
    }));
  };

  const handleArrayInputChange = (section, index, field, value) => {
    if (index === null) {
      // Handle non-array sections (like profile)
      setFormData(prev => ({
        ...prev,
        [section]: {
          ...prev[section],
          [field]: value
        }
      }));
    } else {
      setFormData(prev => {
        if (field === null) {
          // Handle item removal
          return {
            ...prev,
            [section]: prev[section].filter((_, i) => i !== index)
          };
        }

        // Handle field update
        const newSection = [...prev[section]];
        if (Array.isArray(newSection[index][field])) {
          newSection[index][field] = value.split('\n');
        } else {
          newSection[index][field] = value;
        }
        return {
          ...prev,
          [section]: newSection
        };
      });
    }
  };

  const handleAddResponsibility = (expIndex) => {
    setFormData(prev => {
      const newExperience = [...prev.experience];
      newExperience[expIndex].responsibilities = [...newExperience[expIndex].responsibilities, ''];
      return { ...prev, experience: newExperience };
    });
  };

  const handleRemoveResponsibility = (expIndex, respIndex) => {
    setFormData(prev => {
      const newExperience = [...prev.experience];
      newExperience[expIndex].responsibilities = newExperience[expIndex].responsibilities.filter(
        (_, i) => i !== respIndex
      );
      return { ...prev, experience: newExperience };
    });
  };

  const handleResponsibilityChange = (expIndex, respIndex, value) => {
    setFormData(prev => {
      const newExperience = [...prev.experience];
      newExperience[expIndex].responsibilities[respIndex] = value;
      return { ...prev, experience: newExperience };
    });
  };

  const handleAddProjectDetail = useCallback((projectIndex) => {
    console.log('Adding project detail'); // Debugging
    setFormData(prev => {
      const newProjects = [...prev.projects];
      newProjects[projectIndex].details.push('');
      return { ...prev, projects: newProjects };
    });
  }, []);

  const handleRemoveProjectDetail = (projectIndex, detailIndex) => {
    setFormData(prev => {
      const newProjects = [...prev.projects];
      newProjects[projectIndex].details = newProjects[projectIndex].details.filter(
        (_, i) => i !== detailIndex
      );
      return { ...prev, projects: newProjects };
    });
  };

  const handleProjectDetailChange = (projectIndex, detailIndex, value) => {
    setFormData(prev => {
      const newProjects = [...prev.projects];
      newProjects[projectIndex].details[detailIndex] = value;
      return { ...prev, projects: newProjects };
    });
  };

  const handleAddAchievementDetail = (achievementIndex) => {
    setFormData(prev => {
      const newAchievements = [...prev.achievements];
      newAchievements[achievementIndex].details.push('');
      return { ...prev, achievements: newAchievements };
    });
  };

  const handleRemoveAchievementDetail = (achievementIndex, detailIndex) => {
    setFormData(prev => {
      const newAchievements = [...prev.achievements];
      newAchievements[achievementIndex].details = newAchievements[achievementIndex].details.filter(
        (_, i) => i !== detailIndex
      );
      return { ...prev, achievements: newAchievements };
    });
  };

  const handleAchievementDetailChange = (achievementIndex, detailIndex, value) => {
    setFormData(prev => {
      const newAchievements = [...prev.achievements];
      newAchievements[achievementIndex].details[detailIndex] = value;
      return { ...prev, achievements: newAchievements };
    });
  };

  const handleClearForm = () => {
    setFormData(defaultFormData);
    clearFormDataFromLocalStorage();
  };

  const toggleSection = (section, index) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: prev[section] === index ? -1 : index
    }));
  };

  return (
    <div className="flex h-screen w-full flex-col bg-white dark:bg-gray-900">
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

        {/* Add Clear Button */}
        <button
          onClick={handleClearForm}
          className="bg-red-500 text-white px-3 py-1.5 rounded-md"
        >
          Clear Form
        </button>
      </div>
      <div className="w-full border-b border-gray-300 dark:border-gray-600"></div>

      {/* Main Content */}
      <div className={`flex flex-1 flex-col ${isMobile ? '' : 'md:flex-row'}`}>
        {!isMobile && renderNavigation()}

        {/* Left: Form */}
        <div className="w-full md:flex-1 overflow-y-auto p-4">
          {activeSection === 'profile' && renderProfileSection()}
          {activeSection === 'education' && renderEducationSection()}
          {activeSection === 'experience' && renderExperienceSection()}
          {activeSection === 'skills' && renderSkillsSection()}
          {activeSection === 'projects' && renderProjectsSection()}
          {activeSection === 'achievements' && renderAchievementsSection()}
        </div>

        {/* Right: PDF Preview */}
        <div className="flex h-[400px] md:h-full flex-col" style={{ width: isMobile ? '100%' : `${100 - editorWidth}%` }}>
          <div className="flex-1 bg-gray-100 dark:bg-gray-800 relative">
            {error && (
              <div className="absolute inset-0 bg-red-100 p-4 text-red-600 text-sm dark:bg-red-900 dark:text-red-200">
                Error: {error}
                <div className="mt-2">Please fix the errors in your LaTeX code and try again.</div>
              </div>
            )}
            {pdfBlobUrl ? (
              <>
                {isMobile ? (
                  <div className="h-full flex flex-col items-center justify-center gap-4 p-4">
                    <p className="text-gray-600 dark:text-gray-300 text-center">
                      For better viewing experience, please download the PDF
                    </p>
                    <a
                      href={pdfBlobUrl}
                      download="resume.pdf"
                      className="inline-flex items-center justify-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                      Download PDF
                    </a>
                  </div>
                ) : (
                  <iframe
                    src={pdfBlobUrl}
                    className="h-full w-full"
                    title="PDF Preview"
                    onLoad={handlePdfLoad}
                  />
                )}
              </>
            ) : (
              <div className="flex h-full items-center justify-center text-gray-400 dark:text-gray-500">
                PDF will appear here
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const InputField = ({ label, value, onChange, isTextarea = false, isSelect = false, options = [] }) => (
  <div className="space-y-1">
    <label className="text-sm font-medium dark:text-white">{label}</label>
    {isTextarea ? (
      <textarea
        value={Array.isArray(value) ? value.join('\n') : value}
        onChange={onChange}
        className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
        rows={4}
      />
    ) : isSelect ? (
      <select
        value={value}
        onChange={onChange}
        className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
      >
        {options.map(option => (
          <option key={option.value} value={option.value} className="dark:bg-gray-800 dark:text-white">
            {option.label}
          </option>
        ))}
      </select>
    ) : (
      <input
        value={Array.isArray(value) ? value.join('\n') : value}
        onChange={onChange}
        className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
      />
    )}
  </div>
);
