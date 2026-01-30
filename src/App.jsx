import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Blog from './components/Blog';
import BlogDetail from './pages/BlogDetail';
import IntroLanding from './components/IntroLanding';

import ServiceDetails from "./pages/ServiceDetails";

// Import all pages
import {
  Home,
  // About Pages
  CompanyOverview,
  CoreValues,
  Culture,
  Leaders,
  // Services Pages
  ArtificialIntelligence,
  DigitalExperience,
  DataAnalytics,
  EnterpriseApplication,
  DigitalIntegration,
  CloudOperations,
  ProcessAutomation,
  QualityEngineering,
  // Solutions Pages
  Dynamics365,
  Sharepoint,
  BIAnalytics,
  MuleSoft,
  ServiceNow,
  DevOps,
  // Careers
  WhatWeOffer,
  CurrentOpenings,
  Contact
} from './pages/Pages';

// Wrapper for Blog page
const BlogPage = () => (
  <div className="min-h-screen bg-slate-50">
    <Blog />
  </div>
);

// ScrollToTop Component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
}

// Main App Content Component
function AppContent() {
  const location = useLocation();
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const introShown = sessionStorage.getItem('introShown');
    if (location.pathname === "/" && !introShown) {
      setShowIntro(true);
    }
  }, [location.pathname]);

  const handleIntroComplete = () => {
    setShowIntro(false);
    sessionStorage.setItem('introShown', 'true');
  };

  return (
    <>
      <ScrollToTop />

      {location.pathname === "/" && showIntro ? (
        /* Show Intro Landing Page only on home page */
        <IntroLanding onComplete={handleIntroComplete} />
      ) : (
        /* Show Main Website */
        <div className="min-h-screen bg-white flex flex-col">
          <Navbar />

          <main className="flex-grow">
            <Routes>
              {/* Home */}
              <Route path="/" element={<Home />} />

              {/* About Us Routes */}
              <Route path="/about/company-overview" element={<CompanyOverview />} />
              <Route path="/about/core-values" element={<CoreValues />} />
              <Route path="/about/culture" element={<Culture />} />
              <Route path="/about/leaders" element={<Leaders />} />

              {/* Services Routes (DYNAMIC – uses ServiceDetails.jsx) */}
              <Route path="/services/:serviceName" element={<ServiceDetails />} />

              {/* Solutions Routes */}
              <Route path="/solutions/dynamics-365" element={<Dynamics365 />} />
              <Route path="/solutions/sharepoint" element={<Sharepoint />} />
              <Route path="/solutions/bi-analytics" element={<BIAnalytics />} />
              <Route path="/solutions/mulesoft" element={<MuleSoft />} />
              <Route path="/solutions/servicenow" element={<ServiceNow />} />
              <Route path="/solutions/devops" element={<DevOps />} />

              {/* Careers Routes */}
              <Route path="/careers/what-we-offer" element={<WhatWeOffer />} />
              <Route path="/careers/current-openings" element={<CurrentOpenings />} />

              {/* Contact */}
              <Route path="/contact" element={<Contact />} />

              {/* Insights Routes */}
              <Route path="/insights/blog" element={<BlogPage />} />
              <Route path="/insights/blog/:id" element={<BlogDetail />} />
            </Routes>
          </main>

          <Footer />
        </div>
      )}
    </>
  );
}

// Main App Component with Router
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;