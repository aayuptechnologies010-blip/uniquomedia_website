import React from 'react';
import { motion } from 'framer-motion';
import PortfolioSection from '../components/PortfolioSection';
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
      className="pt-28"
    >
      {/* Header Banner */}
      <section className="relative py-16 text-center overflow-hidden">
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#E5A43A]/15 blur-[150px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#008F8C]/15 border border-[#008F8C]/40 text-[#FFD67A] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            VERIFIED CASE EVIDENCE
          </div>

          <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-[#F6F0E5] leading-tight max-w-4xl mx-auto">
            Real Brands. Real Numbers.{' '}
            <span className="text-gradient-teal-gold block sm:inline">
              Measurable Domination.
            </span>
          </h1>

          <p className="mt-6 text-lg text-[#AAB8B8] max-w-2xl mx-auto">
            Review detailed breakdowns of how our custom growth architectures engineered exponential pipeline and reduced CPA.
          </p>
        </div>
      </section>

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
