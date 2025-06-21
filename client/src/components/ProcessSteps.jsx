import { FaCheckCircle, FaFileAlt, FaChartLine, FaSearch, FaEdit, FaPalette, FaFileSignature, FaMagic, FaLinkedin, FaTasks, FaChrome, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ProcessSteps = () => {
  const features = [
    { icon: <FaCheckCircle />, title: "Resume Checker", description: "Analyze and optimize your resume for success" },
    { icon: <FaFileAlt />, title: "Resume Templates", description: "Choose from professional, ATS-friendly designs" },
    { icon: <FaChartLine />, title: "Resume Analysis", description: "Get actionable feedback to improve your resume" },
    { icon: <FaSearch />, title: "Resume Skill Gap Analyzer", description: "Spot missing skills to match job requirements" },
    { icon: <FaEdit />, title: "Resume Editor", description: "Edit and enhance your resume with smart tools" },
    { icon: <FaPalette />, title: "Customize Your Resume", description: "Personalize your resume layout and branding" },
    { icon: <FaFileSignature />, title: "Resume Summary Generator", description: "Create a strong resume summary in seconds" },
    { icon: <FaMagic />, title: "AI Bulletpoint Writer", description: "Generate tailored bullet points with AI help" },
    { icon: <FaLinkedin />, title: "LinkedIn Resume Builder", description: "Turn your LinkedIn profile into a resume fast" },
    { icon: <FaTasks />, title: "Integrated with Job Tracker", description: "Track job applications directly with your resume" },
    { icon: <FaChrome />, title: "Integrated with Chrome Extension", description: "Edit resumes directly within your browser" },
    { icon: <FaEnvelope />, title: "Cover Letter Writer", description: "Quickly craft tailored cover letters with ease" }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="process-steps py-12 px-4 justify-center items-center "
    >
      <div className="w-full max-w-7xl mx-auto ">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold bg-gradient-to-r dark:from-blue-600 dark:to-white bg-clip-text text-transparent from-blue-600 to-gray-900 text-center px-4"
        >
          Explore AI Resume Builder Features
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm text-gray-600 dark:text-gray-300 mt-4 text-center max-w-2xl mx-auto px-4"
        >
          Dive into a powerful suite of career development tools and features designed to advance careers at all levels.
        </motion.p>
        
        <div className="features-grid mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 sm:px-0" >
          {[0, 1, 2].map((colIndex) => (
            <div key={colIndex} className="flex flex-col gap-6 relative">
              {colIndex !== 0 && (
                <div className="hidden lg:block absolute left-[-1rem] top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700"></div>
              )}
              {features.slice(colIndex * 4, (colIndex + 1) * 4).map((feature, index) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="duration-300 transition-all md:py-4 py-2 md:px-8"
                  key={index}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-2xl py-2 px-2 font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-3 rounded-lg">
                      {feature.icon}
                    </div>
                    <h3 className="dark:text-gray-300 text-gray-800 text-xl font-semibold">{feature.title}</h3>
                  </div>
                  <p className="dark:text-gray-300 text-gray-600 mt-3 leading-relaxed text-base">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProcessSteps;
