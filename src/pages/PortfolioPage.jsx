import React from 'react';
import { motion } from 'framer-motion';
import { Award, Layers, TrendingUp } from 'lucide-react';
import PortfolioSection from '../components/PortfolioSection';
import AchievementSection from '../components/AchievementSection';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';
import InteractiveHeroVisual from '../components/InteractiveHeroVisual';
import PremiumButton from '../components/PremiumButton';

export const PortfolioPage = () => {
  const portfolioPills = [
    {
      icon: Award,
      label: 'Verified Outcomes',
      value: '100% Audited',
      position: '-top-3 right-0 sm:-right-4',
      color: 'gold',
    },
    {
      icon: TrendingUp,
      label: 'Average ROAS',
      value: '5.2x Blended',
      position: '-bottom-4 left-0 sm:-left-6',
      color: 'teal',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="pt-28"
    >
      {/* Header Banner with 3D Portfolio Gallery Hero Visual */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#E5A43A]/15 blur-[150px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#008F8C]/15 border border-[#008F8C]/40 text-[#FFD67A] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                FLOATING 3D PORTFOLIO SHOWCASE
              </div>

              <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-[#F6F0E5] leading-tight">
                Our Work.{' '}
                <span className="text-gradient-teal-gold block sm:inline">
                  Your Next Inspiration.
                </span>
              </h1>

              <p className="mt-6 text-lg text-[#AAB8B8] max-w-xl leading-relaxed">
                Review verified, data-backed breakdowns of how our custom growth architectures engineered exponential pipeline and reduced CPA across competitive market landscapes.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <PremiumButton href="/contact" variant="primary">
                  Scale Your Brand Like This
                </PremiumButton>
              </div>
            </div>

            {/* Right 3D Visual */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <InteractiveHeroVisual
                imageSrc="/portfolio-hero.jpg"
                alt="Uniquo Media 3D Floating Portfolio Showcase"
                badgeText="3D Portfolio Gallery"
                badgeMetric="Multi-Screen"
                floatingPills={portfolioPills}
              />
            </div>

          </div>
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
