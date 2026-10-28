import React from 'react';
import { motion } from 'framer-motion';
import {
  Megaphone,
  Search,
  Share2,
  TrendingUp,
  FileText,
  Palette,
  Layout,
  Compass,
  ArrowUpRight,
} from 'lucide-react';

const services = [
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    desc: 'Comprehensive multi-channel campaigns structured for high-intent customer acquisition and lifetime value maximization.',
    features: ['Funnel Architecture', 'Omnichannel Strategy', 'Conversion Optimization'],
  },
  {
    icon: Search,
    title: 'SEO',
    desc: 'Dominating search engine results pages with rigorous technical audits, authority link building, and intent-rich semantic content.',
    features: ['Technical Audit', 'High-Intent Keywords', 'Link Authority Building'],
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    desc: 'Crafting viral cultural conversations, viral reels, and high-trust social ecosystems that build rabid community affinity.',
    features: ['Content Production', 'Community Growth', 'Influencer Synergies'],
  },
  {
    icon: TrendingUp,
    title: 'Performance Marketing',
    desc: 'High-yield paid acquisition on Google, Meta, and LinkedIn with continuous algorithmic split testing to minimize CAC.',
    features: ['Predictive ROAS', 'Dynamic Retargeting', 'Creative Fatigue Shield'],
  },
  {
    icon: FileText,
    title: 'Content Marketing',
    desc: 'Deep-dive editorial articles, video series, and thought-leadership whitepapers that convert skeptical readers into enterprise buyers.',
    features: ['Thought Leadership', 'Video Storytelling', 'Lead Magnets'],
  },
  {
    icon: Palette,
    title: 'Branding & Design',
    desc: 'Distinctive visual identities, positioning guidelines, and design systems that establish premium perceived brand valuation.',
    features: ['Brand Positioning', 'Visual Identity Systems', 'Style Guidelines'],
  },
  {
    icon: Layout,
    title: 'Website Design',
    desc: 'Bespoke, blazing fast websites engineered with modern interactions, persuasive micro-copy, and friction-free user funnels.',
    features: ['Next/React Frameworks', 'Mobile-First UX', 'Frictionless Checkout'],
  },
  {
    icon: Compass,
    title: 'Marketing Strategy',
    desc: 'Executive roadmaps, competitor vulnerability analysis, and market entry frameworks designed for scalable long-term compounding.',
    features: ['Market Gap Discovery', 'Competitor Teardown', 'Unit Economics Modeling'],
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="relative py-28 bg-[#061315] overflow-hidden">
      {/* Background Decorative Blur Blobs */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 rounded-full bg-[#008F8C]/15 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 rounded-full bg-[#E5A43A]/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#008F8C]/15 border border-[#008F8C]/40 text-[#FFD67A] text-xs font-semibold tracking-[0.2em] uppercase mb-4"
          >
            OUR EXPERTISE
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#F6F0E5] leading-tight"
          >
            Everything Your Brand Needs{' '}
            <span className="text-gradient-teal-gold block">
              To Win Online.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-4 text-base sm:text-lg text-[#AAB8B8]"
          >
            We merge behavioral psychology with data engineering to craft marketing systems that reliably generate high-value pipeline.
          </motion.p>
        </div>

        {/* 8 Signature Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="interactive-card group relative rounded-3xl p-7 bg-[#0A1D1E] border border-white/10 hover:border-[#E5A43A] overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,143,140,0.25)] flex flex-col justify-between"
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* 
                  MANDATORY SIGNATURE ANIMATION:
                  The teal colored background rises FROM BOTTOM TO TOP (translateY(100%) -> translateY(0%))
                */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#008F8C] via-[#006B69] to-[#0A1D1E] translate-y-full group-hover:translate-y-0 transition-transform duration-450 ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-none z-0"
                />

                {/* Subtle top gold accent line on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFD67A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                {/* Card Content - elevated above rising layer */}
                <div className="relative z-10">
                  {/* Icon Header */}
                  <div className="flex items-center justify-between mb-6">
                    {/* Icon container: dark teal -> gold on hover; scales & rotates */}
                    <div className="w-13 h-13 rounded-2xl bg-[#008F8C]/15 border border-[#008F8C]/30 text-[#FFD67A] flex items-center justify-center transition-all duration-400 group-hover:scale-112 group-hover:rotate-12 group-hover:bg-[#E5A43A] group-hover:border-[#FFD67A] group-hover:text-[#061315] shadow-md">
                      <Icon className="w-6 h-6 transition-colors duration-300" />
                    </div>

                    {/* Arrow button moving diagonally */}
                    <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-[#AAB8B8] group-hover:text-[#F6F0E5] group-hover:bg-[#FFD67A]/20 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1">
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-heading font-bold text-xl text-[#F6F0E5] group-hover:text-white transition-colors duration-300 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#AAB8B8] group-hover:text-[#F6F0E5]/90 transition-colors duration-300 leading-relaxed mb-6 font-normal">
                    {service.desc}
                  </p>
                </div>

                {/* Feature tags */}
                <div className="relative z-10 pt-4 border-t border-white/5 group-hover:border-white/15 transition-colors duration-300">
                  <div className="flex flex-wrap gap-1.5">
                    {service.features.map((feat, fIdx) => (
                      <span
                        key={fIdx}
                        className="text-[10px] px-2.5 py-1 rounded-md bg-white/5 group-hover:bg-white/15 text-[#AAB8B8] group-hover:text-[#F6F0E5] font-medium tracking-wide transition-colors duration-300"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Bottom Consultation Banner */}
        <div className="mt-16 text-center">
          <p className="text-sm text-[#AAB8B8]">
            Need a custom growth strategy formulated for your business?{' '}
            <a
              href="#contact"
              className="text-[#FFD67A] font-semibold underline underline-offset-4 hover:text-white transition-colors ml-1"
            >
              Book an Executive Discovery Call →
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
