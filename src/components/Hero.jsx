import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Target, Sparkles } from 'lucide-react';
import PremiumButton from './PremiumButton';
import InteractiveHeroVisual from './InteractiveHeroVisual';

export const Hero = () => {
  const homePills = [
    {
      icon: TrendingUp,
      label: 'Conversion Rate',
      value: '+4.8x Lift',
      position: '-top-2 right-0 sm:-right-4',
      color: 'gold',
    },
    {
      icon: Target,
      label: 'Optimized Channels',
      value: 'Meta & Search',
      position: '-bottom-3 left-0 sm:-left-6',
      color: 'teal',
    },
    {
      icon: Sparkles,
      label: 'Creative Strategy',
      value: 'Data-Backed',
      position: 'top-10 -left-4 hidden md:flex',
      color: 'gold',
    },
  ];

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden">
      {/* Background Animated Gradient Blobs */}
      <div className="absolute top-1/4 -left-32 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#008F8C]/15 blur-[90px] sm:blur-[130px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 -right-24 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-[#E5A43A]/10 blur-[90px] sm:blur-[140px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '3s' }} />

      {/* Subtle Background Animated Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#F6F0E5 1px, transparent 1px), linear-gradient(90deg, #F6F0E5 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Small Label with Live Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#008F8C]/15 border border-[#008F8C]/40 text-[#FFD67A] text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase mb-4 sm:mb-6 shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5A43A] animate-ping" />
              <span>GROW • ENGAGE • CONVERT</span>
            </motion.div>

            {/* Heading with Responsive Typography */}
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.12 },
                },
              }}
              className="font-heading font-black text-3xl sm:text-5xl md:text-6xl xl:text-7xl leading-[1.12] sm:leading-[1.08] tracking-tight text-[#F6F0E5]"
            >
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
                }}
                className="block"
              >
                We Turn Digital
              </motion.span>
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
                }}
                className="block"
              >
                Attention Into
              </motion.span>
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
                }}
                className="block bg-gradient-to-r from-[#008F8C] via-[#FFD67A] to-[#E5A43A] bg-clip-text text-transparent pb-1"
              >
                Business Growth.
              </motion.span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 sm:mt-6 text-sm sm:text-lg lg:text-xl text-[#AAB8B8] max-w-xl font-normal leading-relaxed"
            >
              Uniquo Media helps brands grow through powerful digital strategies, creative campaigns and performance-driven marketing solutions.
            </motion.p>

            {/* Action Buttons - Stack on mobile, row on tablet/desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 sm:mt-9 flex flex-col xs:flex-row items-stretch xs:items-center gap-3 sm:gap-5 w-full xs:w-auto"
            >
              <PremiumButton href="/contact" variant="primary" icon="arrow" className="text-sm sm:text-base px-6 sm:px-7 py-3.5 sm:py-4 justify-center">
                Grow Your Business
              </PremiumButton>
              <PremiumButton href="/portfolio" variant="secondary" icon="upRight" className="text-sm sm:text-base px-5 sm:px-6 py-3.5 sm:py-4 justify-center">
                View Our Work
              </PremiumButton>
            </motion.div>

            {/* Live Client Proof Stack with Online Avatars */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-white/10 flex flex-wrap items-center gap-4 sm:gap-6 w-full"
            >
              <div className="flex items-center -space-x-2.5 sm:-space-x-3">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80"
                  alt="Client avatar"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#0A1D1E] object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
                  alt="Client avatar"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#0A1D1E] object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&h=120&q=80"
                  alt="Client avatar"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#0A1D1E] object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80"
                  alt="Client avatar"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#0A1D1E] object-cover"
                />
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#0A1D1E] bg-[#E5A43A] text-[#061315] font-bold text-[10px] sm:text-xs flex items-center justify-center font-heading">
                  100+
                </div>
              </div>

              <div className="flex flex-col text-[11px] sm:text-xs text-left">
                <div className="flex items-center gap-1 text-[#FFD67A]">
                  {'★★★★★'}
                  <span className="text-white font-bold ml-1">4.9/5 Rating</span>
                </div>
                <span className="text-[#AAB8B8]">Over $40M+ in Client Revenue Generated</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: 3D Growth Marketing Laptop Hero Visual */}
          <div className="lg:col-span-5 relative flex items-center justify-center w-full mt-4 lg:mt-0">
            <InteractiveHeroVisual
              imageSrc="/hero-growth.jpg"
              alt="Uniquo Media 3D Growth Marketing Hero Visual"
              badgeText="3D Growth Ecosystem"
              badgeMetric="+348% ROI"
              floatingPills={homePills}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
