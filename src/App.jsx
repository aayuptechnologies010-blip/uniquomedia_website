import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import PageLoader from './components/PageLoader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import PortfolioPage from './pages/PortfolioPage';
import ProcessPage from './pages/ProcessPage';
import ContactPage from './pages/ContactPage';

// Scroll to top helper on navigation & trigger attractive ring-spinning logo loader
function NavigationHandler({ setIsLoading }) {
  const location = useLocation();

  useEffect(() => {
    // Show attractive double-ring spinning logo loader on route change
    setIsLoading(true);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 650);

    return () => clearTimeout(timer);
  }, [location.pathname, setIsLoading]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:serviceSlug" element={<ServiceDetailPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/process" element={<ProcessPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* Fallback route */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-[#061315] text-[#AAB8B8] selection:bg-[#008F8C] selection:text-[#F6F0E5] flex flex-col justify-between overflow-x-hidden">
        {/* 1. Subtle Desktop Cursor Follower */}
        <CustomCursor />

        {/* 2. Top Scroll Progress Indicator */}
        <ScrollProgress />

        {/* 3. Luxury Double-Ring Spinning Logo Loader */}
        <PageLoader isVisible={isLoading} />

        {/* 4. Page change trigger & scroll-to-top handler */}
        <NavigationHandler setIsLoading={setIsLoading} />

        {/* 5. Sticky Transparent/Blurred Navbar */}
        <Navbar />

        {/* 6. Dynamic Page Routing */}
        <main className="flex-1 w-full">
          <AnimatedRoutes />
        </main>

        {/* 7. Comprehensive Brand Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
