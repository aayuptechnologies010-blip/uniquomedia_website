import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PortfolioSection from '../components/PortfolioSection';
import BrandShowcase from '../components/BrandShowcase';
import AchievementSection from '../components/AchievementSection';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';

export const PortfolioPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="pt-[68px] sm:pt-[76px]"
    >
      {/* Full-width clean Hero Banner in exact 1024x460 aspect ratio */}
      <section className="relative w-full overflow-hidden bg-[#061315]">
        <div className="w-full relative group select-none">
          <div className="relative w-full aspect-[16/9] sm:aspect-[1870/841] overflow-hidden flex items-center justify-center bg-[#061315]">
            <img
              src="/banners/portfolio-banner.jpg"
              alt="Our Work. Your Next Inspiration - Uniquo Media Portfolio"
              className="w-full h-full object-contain object-center pointer-events-none"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Recent Successful Client Campaigns Marquee */}
      <BrandShowcase />

      {/* Portfolio Grid & Case Studies */}
      <PortfolioSection />

      {/* Achievement Counter Section */}
      <AchievementSection />

      {/* Client Validation Testimonials */}
      <Testimonials />

      {/* CTA */}
      <CTASection />
    </motion.div>
  );
};

export default PortfolioPage;
