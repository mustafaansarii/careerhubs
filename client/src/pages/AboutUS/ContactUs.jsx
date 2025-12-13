import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { FaHome, FaMapMarkerAlt, FaPhone, FaEnvelope, FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    mail: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await axios.post(
        "/api/careerhub/api/contact/",
        formData
      );
      setSubmitStatus({ success: true, message: "Message sent successfully!" });
      setFormData({ name: '', mail: '', message: '' });
    } catch (error) {
      setSubmitStatus({ success: false, message: "Failed to send message. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <NavBar />
      <div className="flex-grow mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <nav className="mb-6 md:mb-8">
            <ol className="list-none p-0 inline-flex">
              <li className="flex items-center">
                <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors flex items-center">
                  <FaHome className="inline-block mr-1 w-4 h-4" />
                  <span className="text-sm">Home</span>
                </Link>
                <span className="mx-2 text-gray-400">/</span>
              </li>
              <li className="text-gray-400">
                Contact Us
              </li>
            </ol>
          </nav>

          <div className="rounded-2xl p-6 sm:p-8 lg:p-12 bg-white dark:bg-gray-800 shadow-lg">
            <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Contact CareerHub</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Get in Touch</h2>
                <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Name</label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-2.5 sm:p-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Email</label>
                    <input
                      type="email"
                      id="mail"
                      value={formData.mail}
                      onChange={handleChange}
                      className="w-full p-2.5 sm:p-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Message</label>
                    <textarea
                      id="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full p-2.5 sm:p-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      required
                    />
                  </div>
                  {submitStatus && (
                    <div className={`text-sm ${submitStatus.success ? 'text-green-600' : 'text-red-600'}`}>
                      {submitStatus.message}
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 sm:py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>

              <div className="space-y-6 sm:space-y-8">
                <div className="p-4 sm:p-6 rounded-xl border border-gray-200 dark:border-gray-700 ">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800 dark:text-gray-200">Contact Information</h3>
                  <div className="space-y-3 sm:space-y-4 text-gray-600 dark:text-gray-300">
                    <div className="flex items-center">
                      <FaEnvelope className="w-5 h-5 mr-3 text-blue-500" />
                      <p> <a href="mailto:codeshare.solution@gmail.com">codeshare.solution@gmail.com</a></p>
                    </div>
                    <div className="flex items-center">
                      <FaPhone className="w-5 h-5 mr-3 text-blue-500" />
                      <p> <a href="tel:+917367817657">+91 73678 17657</a></p>
                    </div>

                  </div>
                </div>
                <div className="hidden sm:block p-4 sm:p-6 rounded-xl border border-gray-200 dark:border-gray-700 ">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800 dark:text-gray-200">Follow Us</h3>
                  <div className="flex space-x-4 sm:space-x-6">
                    <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-200">
                      <FaTwitter className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-200">
                      <FaLinkedin className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-200">
                      <FaFacebook className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}