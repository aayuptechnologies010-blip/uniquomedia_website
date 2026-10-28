import React from 'react';
import { motion } from 'framer-motion';
import ProcessSection from '../components/ProcessSection';
import WhyChooseUs from '../components/WhyChooseUs';
import CTASection from '../components/CTASection';

export const ProcessPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="pt-28"
    >
      <section className="relative py-16 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#008F8C]/15 blur-[150px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#008F8C]/15 border border-[#008F8C]/40 text-[#FFD67A] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            PRECISION METHODOLOGY
          </div>

          <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-[#F6F0E5] leading-tight max-w-4xl mx-auto">
            How We Engineer Predictable{' '}
            <span className="text-gradient-teal-gold">
              Revenue Growth.
            </span>
          </h1>

          <p className="mt-6 text-lg text-[#AAB8B8] max-w-2xl mx-auto">
            A transparent 7-step process designed to eliminate subjective opinion and ground every marketing dollar in verifiable data.
          </p>
        </div>
      </section>

      {/* 7-Step Methodological Timeline */}
      <ProcessSection />

      {/* High-Contrast Advantage */}
      <WhyChooseUs />

      {/* CTA */}
      <CTASection />
    </motion.div>
  );
};

export default ProcessPage;
