import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'
import GoogleCallback from './pages/GoogleCallback'
import Hero from './components/Hero'
import FeaturesGrid from './components/FeaturesGrid'
import ProcessSteps from './components/ProcessSteps'
import Testimonials from './components/Testimonials'
import ResourceShowcase from './components/ResourceShowcase'
import FAQSection from './components/FAQSection'
import Footer from './components/Footer'
import Profile from './pages/profile'
import DSAPage from './pages/dsa'
import Roadmap from './pages/roadmap'
import Resources from './pages/Resources'
import ProtectedRoute from './components/ProtectedRoute'

import Tutorials from './pages/Tutorials'
import DjangoTutorials from './tutorial_pages/Frameworks/backend/djangoTutorials'
import ExpressTutorials from './tutorial_pages/Frameworks/backend/expressTutorials'
import SpringBootTutorials from './tutorial_pages/Frameworks/backend/springbootTutorials'
import FlaskTutorials from './tutorial_pages/Frameworks/backend/flaskTutorials'
import NodeTutorials from './tutorial_pages/Frameworks/backend/NodeTutorials'
import NextJSTutorials from './tutorial_pages/Frameworks/frontend/nextjsTutorials'
import ReactTutorials from './tutorial_pages/Frameworks/frontend/reactTutorials'
import VueTutorials from './tutorial_pages/Frameworks/frontend/vueTutorials'
import AngularTutorials from './tutorial_pages/Frameworks/frontend/angularTutorials'
import HtmlTutorials from './tutorial_pages/Frameworks/frontend/HtmlTutorials'
import CssTutorials from './tutorial_pages/Frameworks/frontend/CssTutorials'

import DataAnalysisTutorials from './tutorial_pages/Data Sciens AI/DataAnalysis'
import BigDataTutorials from './tutorial_pages/Data Sciens AI/Big Data'
import MachineLearning from './tutorial_pages/Data Sciens AI/MachineLearning'


import TypescriptTutorials from './tutorial_pages/language/typescript'
import PythonTutorials from './tutorial_pages/language/python'
import CppTutorials from './tutorial_pages/language/cpp'
import JavaTutorials from './tutorial_pages/language/java'

import MySQlTutorials from './tutorial_pages/databases/MySQl'
import PostgreSQLTutorials from './tutorial_pages/databases/PostgreSQl'
import MongoDBTutorials from './tutorial_pages/databases/MongoDB'

import ComputerNetworksTutorials from './tutorial_pages/corecs/computernetworks'
import DatabaseManagementSystemTutorials from './tutorial_pages/corecs/databases'
import DataStructuresTutorials from './tutorial_pages/corecs/datastructures'
import OperatingSystemsTutorials from './tutorial_pages/corecs/operatingsystems'
import JavascriptTutorials from './tutorial_pages/language/javascript'
import ComputerArchitectureTutorials from './tutorial_pages/corecs/ComputerArchitecture'

import Resume_ATS from './pages/Resume_ATS'

import InterviewPage from './pages/interview_pages/interview_page'

import AboutUs from './pages/AboutUS/AboutUs'
import ContactUs from './pages/AboutUS/ContactUs'
import PrivacyPolicy from './pages/AboutUS/privacy-policy'

import FeedbackButton from './components/feedback/feedback'
import Payment from './pages/payment'

import TemplateList from './pages/RESUME/template_list'
import LatexEditor from './pages/RESUME/LatexEditor'
import SavedTemplates from './pages/RESUME/saved_template'
import Resume_Form from './pages/RESUME/Resume_Form'

import InterviewHome from './components/Interview_home'
import MaintenanceBanner from './components/MaintenanceBanner'
import Problems from './components/problems'
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex flex-col min-h-screen">
              <main className="flex-grow">
                <NavBar />
                <MaintenanceBanner />
                <Payment />
                <Hero />

                <InterviewHome />
                <FeaturesGrid />
                <ResourceShowcase />
                <ProcessSteps />
                <Problems />
                <Testimonials />
                <FAQSection />
              </main>
              <Footer />
            </div>
          }
        />
        <Route path="/saved-templates" element={<ProtectedRoute><SavedTemplates /></ProtectedRoute>} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/api/auth/google/callback" element={<GoogleCallback />} />
        <Route path="/resume-builder" element={<ProtectedRoute><TemplateList /></ProtectedRoute>} />
        <Route path="/resume-ats" element={<ProtectedRoute><Resume_ATS /></ProtectedRoute>} />
        <Route path="/resume-editor/:templateId" element={<ProtectedRoute><LatexEditor /></ProtectedRoute>} />
        <Route path="/resume-form" element={<ProtectedRoute><Resume_Form /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/dsa-sheet" element={<ProtectedRoute><DSAPage /></ProtectedRoute>} />
        <Route path="/roadmap" element={<ProtectedRoute><Roadmap /></ProtectedRoute>} />
        <Route path="/resources" element={<ProtectedRoute><Resources /></ProtectedRoute>} />
        <Route path="/interview-preparation" element={<ProtectedRoute><InterviewPage /></ProtectedRoute>} />

        {/* Core CS Tutorials */}
        <Route path="/tutorials" element={<ProtectedRoute><Tutorials /></ProtectedRoute>} />
        <Route path="/tutorials/computer-networks" element={<ProtectedRoute><ComputerNetworksTutorials /></ProtectedRoute>} />
        <Route path="/tutorials/databases" element={<ProtectedRoute><DatabaseManagementSystemTutorials /></ProtectedRoute>} />
        <Route path="/tutorials/data-structures" element={<ProtectedRoute><DataStructuresTutorials /></ProtectedRoute>} />
        <Route path="/tutorials/operating-systems" element={<ProtectedRoute><OperatingSystemsTutorials /></ProtectedRoute>} />
        <Route path="/tutorials/computer-architecture" element={<ProtectedRoute><ComputerArchitectureTutorials /></ProtectedRoute>} />

        {/* Frameworks Tutorials */}
        <Route path="/tutorials/django" element={<ProtectedRoute><DjangoTutorials /></ProtectedRoute>} />
        <Route path="/tutorials/express" element={<ProtectedRoute><ExpressTutorials /></ProtectedRoute>} />
        <Route path="/tutorials/spring-boot" element={<ProtectedRoute><SpringBootTutorials /></ProtectedRoute>} />
        <Route path="/tutorials/flask" element={<ProtectedRoute><FlaskTutorials /></ProtectedRoute>} />
        <Route path="/tutorials/nodejs" element={<ProtectedRoute><NodeTutorials /></ProtectedRoute>} />
        <Route path="/tutorials/nextjs" element={<ProtectedRoute><NextJSTutorials /></ProtectedRoute>} />
        <Route path="/tutorials/react" element={<ProtectedRoute><ReactTutorials /></ProtectedRoute>} />
        <Route path="/tutorials/vue" element={<ProtectedRoute><VueTutorials /></ProtectedRoute>} />
        <Route path="/tutorials/angular" element={<ProtectedRoute><AngularTutorials /></ProtectedRoute>} />
        <Route path="/tutorials/html" element={<ProtectedRoute><HtmlTutorials /></ProtectedRoute>} />
        <Route path="/tutorials/css" element={<ProtectedRoute><CssTutorials /></ProtectedRoute>} />

        {/* Languages Tutorials */}
        <Route path="/tutorials/typescript" element={<ProtectedRoute><TypescriptTutorials /></ProtectedRoute>} />
        <Route path="/tutorials/c++" element={<ProtectedRoute><CppTutorials /></ProtectedRoute>} />
        <Route path="/tutorials/javascript" element={<ProtectedRoute><JavascriptTutorials /></ProtectedRoute>} />
        <Route path="/tutorials/python" element={<ProtectedRoute><PythonTutorials /></ProtectedRoute>} />
        <Route path="/tutorials/java" element={<ProtectedRoute><JavaTutorials /></ProtectedRoute>} />

        {/* Data Science & AI Tutorials */}
        <Route path="/tutorials/data-analysis" element={<ProtectedRoute><DataAnalysisTutorials /></ProtectedRoute>} />
        <Route path="/tutorials/machine-learning" element={<ProtectedRoute><MachineLearning /></ProtectedRoute>} />
        <Route path="/tutorials/big-data" element={<ProtectedRoute><BigDataTutorials /></ProtectedRoute>} />

        {/* Databases Tutorials */}
        <Route path="/tutorials/mysql" element={<ProtectedRoute><MySQlTutorials /></ProtectedRoute>} />
        <Route path="/tutorials/postgresql" element={<ProtectedRoute><PostgreSQLTutorials /></ProtectedRoute>} />
        <Route path="/tutorials/mongodb" element={<ProtectedRoute><MongoDBTutorials /></ProtectedRoute>} />

        {/* Catch-all route for undefined paths */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <FeedbackButton />
    </Router>
  )
}

export default App