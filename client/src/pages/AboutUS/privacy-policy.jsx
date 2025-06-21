import { useEffect } from 'react';
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { FaHome, FaShieldAlt, FaDatabase, FaUserLock, FaChartLine } from "react-icons/fa";
import { Link } from "react-router-dom";

const sections = [
  {
    icon: FaShieldAlt,
    iconBg: 'bg-blue-50 dark:bg-blue-900/50',
    iconColor: 'text-blue-500 dark:text-blue-300',
    title: 'Introduction',
    content: 'At CareerHub, we prioritize your privacy. This comprehensive policy outlines our practices for collecting, using, and protecting your personal information in compliance with global data protection regulations.'
  },
  {
    icon: FaDatabase,
    iconBg: 'bg-purple-50 dark:bg-purple-900/50',
    iconColor: 'text-purple-500 dark:text-purple-300',
    title: 'Information Collection',
    content: 'We collect information through various interactions, including account registration, service usage, and website navigation. This includes personal identifiers (name, email), and usage patterns. We want to assure you that we only collect data to provide you with better features and a more personalized experience.'
  },
  {
    icon: FaChartLine,
    iconBg: 'bg-green-50 dark:bg-green-900/50',
    iconColor: 'text-green-500 dark:text-green-300',
    title: 'Data Usage',
    content: 'Your information enables us to enhance service quality, develop personalized features, and provide relevant career insights. We may use your data for analytics, service improvement, and targeted communications with your consent.'
  },
  {
    icon: FaShieldAlt,
    iconBg: 'bg-blue-50 dark:bg-blue-900/50',
    iconColor: 'text-blue-500 dark:text-blue-300',
    title: 'Data Protection',
    content: 'We employ industry-standard security measures including SSL encryption, regular security audits, and access controls. We are committed to keeping your data secure and protected.'
  },
  {
    icon: FaUserLock,
    iconBg: 'bg-purple-50 dark:bg-purple-900/50',
    iconColor: 'text-purple-500 dark:text-purple-300',
    title: 'Your Rights',
    content: <>You maintain full control over your personal data. This includes rights to access, rectify, erase, restrict processing, and object to data usage. Contact our Data Protection Officer at <a href="mailto:codeshare.solution@gmail.com" className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">codeshare.solution@gmail.com</a> for assistance.</>
  }
];


const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Privacy Policy | CareerHub";
  }, []);


  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <NavBar />
      
      <main className="flex-grow mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <nav className="mb-8">
            <ol className="list-none p-0 inline-flex">
              <li className="flex items-center">
                <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 flex items-center">
                  <FaHome className="inline-block mr-1 w-4 h-4" />
                  <span className="text-sm">Home</span>
                </Link>
                <span className="mx-2 text-gray-400 dark:text-gray-500">/</span>
              </li>
              <li className="text-gray-400 dark:text-gray-500">
                Privacy Policy
              </li>
            </ol>
          </nav>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 lg:p-12 transition-colors duration-300">
            <div className="border-b border-gray-200 dark:border-gray-700 pb-8 mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Privacy Policy
              </h1>
            </div>
            
            <div className="space-y-10">
              {sections.map((section, index) => (
                <section key={`section-${section.title}`} className="p-6 rounded-xl border border-gray-100 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:border-gray-200 dark:hover:border-gray-600">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 ${section.iconBg} rounded-lg transition-colors duration-300`}>
                      <section.icon className={`${section.iconColor} w-6 h-6`} />
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                        {section.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}


export default PrivacyPolicy;