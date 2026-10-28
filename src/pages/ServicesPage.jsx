import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Globe, Search, Share2, Compass, ArrowUpRight } from 'lucide-react';
import ServicesSection from '../components/ServicesSection';
import IndustriesSection from '../components/IndustriesSection';
import ProcessSection from '../components/ProcessSection';
import CTASection from '../components/CTASection';
import InteractiveHeroVisual from '../components/InteractiveHeroVisual';
import PremiumButton from '../components/PremiumButton';

export const ServicesPage = () => {
  const servicePills = [
    {
      icon: Search,
      label: 'SEO Dominance',
      value: '#1 Rankings',
      position: '-top-3 right-0 sm:-right-4',
      color: 'gold',
    },
    {
      icon: Globe,
      label: 'Omnichannel',
      value: 'Meta + Google',
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
      {/* Header Banner with 3D Service Ecosystem Visual */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-[#008F8C]/15 blur-[150px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#008F8C]/15 border border-[#008F8C]/40 text-[#FFD67A] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                DIGITAL MARKETING SERVICE ORBIT
              </div>

              <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-[#F6F0E5] leading-tight">
                Everything Your Brand Needs{' '}
                <span className="text-gradient-teal-gold block">
                  To Win Online.
                </span>
              </h1>

              <p className="mt-6 text-lg text-[#AAB8B8] max-w-xl leading-relaxed">
                From precision search intent to high-converting creative video ads, our six core growth systems orbit around one unified business objective: predictable customer revenue.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <PremiumButton href="/contact" variant="primary">
                  Request Custom Roadmap
                </PremiumButton>
                <PremiumButton href="#process" variant="secondary" icon="upRight">
                  View Our Process
                </PremiumButton>
              </div>
            </div>

            {/* Right 3D Visual */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <InteractiveHeroVisual
                imageSrc="/services-hero.jpg"
                alt="Uniquo Media 3D Digital Marketing Service Orbit"
                badgeText="3D Service Orbit"
                badgeMetric="6 Core Systems"
                floatingPills={servicePills}
              />
            </div>

          </div>
        </div>
      </section>

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
