import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, BarChart3, Target, Sparkles, Zap, ArrowUpRight, Play } from 'lucide-react';
import PremiumButton from './PremiumButton';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-[94vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background Animated Gradient Blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#008F8C]/20 blur-[130px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 -right-24 w-80 h-80 rounded-full bg-[#E5A43A]/15 blur-[140px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '3s' }} />
      <div className="absolute bottom-10 left-1/3 w-72 h-72 rounded-full bg-[#006B69]/20 blur-[100px] pointer-events-none" />

      {/* Subtle Background Animated Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#F6F0E5 1px, transparent 1px), linear-gradient(90deg, #F6F0E5 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Small Label with Live Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#008F8C]/15 border border-[#008F8C]/40 text-[#FFD67A] text-xs font-semibold tracking-[0.2em] uppercase mb-6 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#E5A43A] animate-ping" />
              <span>GROW • ENGAGE • CONVERT</span>
            </motion.div>

            {/* Heading with Revealed Lines & Gradient Text */}
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15 },
                },
              }}
              className="font-heading font-black text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-[1.08] tracking-tight text-[#F6F0E5]"
            >
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
                }}
                className="block"
              >
                We Turn Digital
              </motion.span>
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
                }}
                className="block"
              >
                Attention Into
              </motion.span>
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
                }}
                className="block bg-gradient-to-r from-[#008F8C] via-[#FFD67A] to-[#E5A43A] bg-clip-text text-transparent pb-1"
              >
                Business Growth.
              </motion.span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-lg sm:text-xl text-[#AAB8B8] max-w-xl font-normal leading-relaxed"
            >
              Uniquo Media helps brands grow through powerful digital strategies, creative campaigns and performance-driven marketing solutions.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mt-9 flex flex-wrap items-center gap-4 sm:gap-5"
            >
              <PremiumButton href="/contact" variant="primary" icon="arrow" className="text-base px-7 py-4">
                Grow Your Business
              </PremiumButton>
              <PremiumButton href="/portfolio" variant="secondary" icon="upRight" className="text-base px-6 py-4">
                View Our Work
              </PremiumButton>
            </motion.div>

            {/* Live Client Proof Stack with Online Avatars */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-6"
            >
              <div className="flex items-center -space-x-3">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80"
                  alt="Client avatar"
                  className="w-10 h-10 rounded-full border-2 border-[#0A1D1E] object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
                  alt="Client avatar"
                  className="w-10 h-10 rounded-full border-2 border-[#0A1D1E] object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&h=120&q=80"
                  alt="Client avatar"
                  className="w-10 h-10 rounded-full border-2 border-[#0A1D1E] object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80"
                  alt="Client avatar"
                  className="w-10 h-10 rounded-full border-2 border-[#0A1D1E] object-cover"
                />
                <div className="w-10 h-10 rounded-full border-2 border-[#0A1D1E] bg-[#E5A43A] text-[#061315] font-bold text-xs flex items-center justify-center font-heading">
                  100+
                </div>
              </div>

              <div className="flex flex-col text-xs">
                <div className="flex items-center gap-1 text-[#FFD67A]">
                  {'★★★★★'}
                  <span className="text-white font-bold ml-1">4.9/5 Rating</span>
                </div>
                <span className="text-[#AAB8B8]">Over $40M+ in Client Revenue Generated</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Premium Interactive Growth Visual with Live Motion Backdrops */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Outer Subtle Golden Orbit */}
            <div className="relative w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] flex items-center justify-center">
              
              {/* Outer Orbit Ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-[#E5A43A]/25 animate-[spin_40s_linear_infinite]" />
              
              {/* Middle Teal Glow Orbit */}
              <div className="absolute inset-6 rounded-full border border-[#008F8C]/35 shadow-[0_0_40px_rgba(0,143,140,0.2)] animate-[spin_28s_linear_infinite_reverse]" />

              {/* Central Premium Card with Visual High-Tech Imagery */}
              <div className="relative z-10 w-[280px] sm:w-[350px] rounded-3xl bg-[#0A1D1E]/90 backdrop-blur-xl border border-[#008F8C]/40 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.7)] glow-teal overflow-hidden">
                
                {/* Embedded Cinematic Background Image with Teal Wash */}
                <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-luminosity">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                    alt="Analytics Grid"
                    className="w-full h-full object-cover filter contrast-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1D1E] via-[#0A1D1E]/80 to-transparent" />
                </div>

                {/* Header with Live Status & Growth Badge */}
                <div className="relative z-10 flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#008F8C] animate-pulse" />
                    <span className="text-xs font-semibold text-[#F6F0E5] tracking-wide">Live Performance Matrix</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#FFD67A]/20 text-[#FFD67A] font-bold border border-[#E5A43A]/30">
                    +348% ROI
                  </span>
                </div>

                {/* SVG Growth Graph with Golden Upward Arrow */}
                <div className="relative z-10 mt-5 h-36 w-full flex items-end">
                  <svg viewBox="0 0 280 120" className="w-full h-full overflow-visible">
                    <defs>
                      <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#008F8C" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#008F8C" stopOpacity="0.0" />
                      </linearGradient>
                      <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#008F8C" />
                        <stop offset="60%" stopColor="#FFD67A" />
                        <stop offset="100%" stopColor="#E5A43A" />
                      </linearGradient>
                    </defs>

                    {/* Chart Area Fill */}
                    <path
                      d="M 10 110 Q 70 95, 120 70 T 210 40 L 270 15 L 270 110 Z"
                      fill="url(#chartGradient)"
                    />

                    {/* Main Growth Curve Line */}
                    <motion.path
                      d="M 10 110 Q 70 95, 120 70 T 210 40 L 270 15"
                      fill="none"
                      stroke="url(#lineGrad)"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.8, delay: 0.6, ease: 'easeInOut' }}
                    />

                    {/* Target Arrow Node */}
                    <circle cx="270" cy="15" r="5" fill="#E5A43A" className="animate-ping" />
                    <circle cx="270" cy="15" r="4.5" fill="#FFD67A" />
                  </svg>
                </div>

                {/* Bottom Key Metric Indicators */}
                <div className="relative z-10 mt-4 pt-3 border-t border-white/10 grid grid-cols-2 gap-3 text-left">
                  <div>
                    <span className="text-[11px] text-[#AAB8B8] block">Conversions</span>
                    <span className="text-base font-bold text-[#F6F0E5] font-heading">24,850+</span>
                  </div>
                  <div>
                    <span className="text-[11px] text-[#AAB8B8] block">Target Reach</span>
                    <span className="text-base font-bold text-[#FFD67A] font-heading">10.2M+</span>
                  </div>
                </div>
              </div>

              {/* Floating Pill 1: Top Right - High Conversion */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 right-0 sm:-right-4 px-3.5 py-2 rounded-2xl bg-[#061315]/95 border border-[#E5A43A]/60 shadow-[0_10px_25px_rgba(229,164,58,0.25)] flex items-center gap-2.5 z-20 backdrop-blur-md"
              >
                <div className="w-8 h-8 rounded-lg bg-[#E5A43A]/20 flex items-center justify-center text-[#FFD67A]">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-[#AAB8B8]">Conversion Rate</div>
                  <div className="text-xs font-bold text-[#F6F0E5]">+4.8x Lift</div>
                </div>
              </motion.div>

              {/* Floating Pill 2: Bottom Left - Strategy Optimization */}
              <motion.div
                animate={{ y: [7, -7, 7] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 left-0 sm:-left-6 px-3.5 py-2 rounded-2xl bg-[#0A1D1E]/95 border border-[#008F8C]/60 shadow-[0_10px_25px_rgba(0,143,140,0.25)] flex items-center gap-2.5 z-20 backdrop-blur-md"
              >
                <div className="w-8 h-8 rounded-lg bg-[#008F8C]/20 flex items-center justify-center text-[#008F8C]">
                  <Target className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-[#AAB8B8]">Optimized Channels</div>
                  <div className="text-xs font-bold text-[#F6F0E5]">Meta & Search</div>
                </div>
              </motion.div>

              {/* Floating Pill 3: Top Left - Creative Sparkle */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute top-10 -left-6 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#0A1D1E]/90 border border-white/10 z-20 backdrop-blur-md shadow-lg"
              >
                <Sparkles className="w-4 h-4 text-[#FFD67A]" />
                <span className="text-xs font-medium text-[#F6F0E5]">Strategic Creative</span>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
