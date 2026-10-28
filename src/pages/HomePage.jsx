import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import StatsBar from '../components/StatsBar';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import WhyChooseUs from '../components/WhyChooseUs';
import ProcessSection from '../components/ProcessSection';
import PortfolioSection from '../components/PortfolioSection';
import AchievementSection from '../components/AchievementSection';
import IndustriesSection from '../components/IndustriesSection';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';
import ContactSection from '../components/ContactSection';

export const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <Hero />
      <StatsBar />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <ProcessSection />
      <PortfolioSection />
      <AchievementSection />
      <IndustriesSection />
      <Testimonials />
      <CTASection />
      <ContactSection />
    </motion.div>
  );
};

export default HomePage;
