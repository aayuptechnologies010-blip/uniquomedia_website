import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import ServicesSection from '../components/ServicesSection';
import CorePillarsSection from '../components/CorePillarsSection';
import IndustriesSection from '../components/IndustriesSection';
import ProcessSection from '../components/ProcessSection';
import CTASection from '../components/CTASection';

export const ServicesPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="pt-[68px] sm:pt-[76px]"
    >
      {/* Full-width clean Hero Banner in 1365 x 614 aspect ratio */}
      <section id="influencer" className="relative w-full overflow-hidden bg-[#061315]">
        <div className="w-full relative group select-none">
          {/* Mobile: 16/9, Desktop: 1365/614 */}
          <div className="relative w-full aspect-[16/9] sm:aspect-[1365/614] overflow-hidden flex items-center justify-center bg-[#061315]">
            <img
              src="/banners/influncer-banner.jpg"
              alt="Uniquo Media Influencer Marketing"
              className="w-full h-full object-contain object-center pointer-events-none"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* 4 Core Pillars with Studio Graphics & Verifiable Benchmarks */}
      <CorePillarsSection />

      {/* Main 8 Signature Services */}
      <ServicesSection />

      {/* 8 Industry Verticals */}
      <IndustriesSection />

      {/* 7-Step Methodological Timeline */}
      <ProcessSection />

      {/* Conversion CTA */}
      <CTASection />
    </motion.div>
  );
};

export default ServicesPage;
