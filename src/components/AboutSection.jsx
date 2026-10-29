import React from 'react';
import { motion } from 'framer-motion';
import { Users, Video, PenTool, TrendingUp } from 'lucide-react';
import PremiumButton from './PremiumButton';

const highlights = [
  {
    icon: Users,
    title: 'Influencer Marketing',
    desc: 'Pre-vetted creator matchmaking across 450+ verified creators for genuine reach and trust.',
  },
  {
    icon: Video,
    title: 'High-Impact Video Editing',
    desc: 'Cinematic pacing, viral sound design, and dynamic motion graphics tailored for Reels & Shorts.',
  },
  {
    icon: PenTool,
    title: 'Viral Scripting',
    desc: 'High-retention hooks and psychological conversion copy engineered to stop the scroll.',
  },
  {
    icon: TrendingUp,
    title: 'Performance Advertising',
    desc: 'Precision Meta & Google paid media campaigns structured for high-intent customer acquisition and ROAS.',
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-[#008F8C]/15 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
          
          {/* Left Column: Rich Agency Creative Imagery with Real Logo & Dynamic Motion */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Floating Gold Logo Badge */}
            <motion.div
              animate={{ y: [-10, 10, -10], rotate: [0, 4, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -left-6 w-18 h-18 rounded-2xl bg-gradient-to-br from-[#FFD67A] to-[#E5A43A] p-0.5 shadow-[0_10px_30px_rgba(229,164,58,0.45)] z-20 flex items-center justify-center"
            >
              <div className="w-full h-full bg-[#061315] rounded-2xl p-2 flex items-center justify-center">
                <img src="/uniquomedia-logo.png" alt="Uniquo Media Brand" className="w-full h-full object-contain" />
              </div>
            </motion.div>

            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden border border-[#008F8C]/40 bg-[#0A1D1E] shadow-[0_20px_50px_rgba(0,0,0,0.7)] group">
              
              {/* High-Resolution Modern Marketing Agency Workroom Image */}
              <div className="relative h-[440px] sm:h-[500px] w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80"
                  alt="Uniquo Media Growth Strategy Room"
                  className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700 ease-out filter brightness-75 contrast-110"
                />

                {/* Dark Luxury Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#061315] via-[#061315]/50 to-transparent" />

                {/* Floating Glassmorphic Manifesto Card */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#061315]/90 backdrop-blur-md border border-[#008F8C]/40 shadow-xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs uppercase font-semibold tracking-wider text-[#FFD67A]">
                      Agency Manifesto
                    </span>
                    <span className="text-[10px] font-mono text-[#008F8C] px-2 py-0.5 rounded bg-[#008F8C]/15 font-bold">
                      EST. 2024
                    </span>
                  </div>
                  <p className="text-sm text-[#F6F0E5] font-medium leading-relaxed">
                    "We don't sell vanity impressions. We engineer predictable customer acquisition pipelines that fuel long-term enterprise valuation."
                  </p>
                  <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#008F8C] to-[#E5A43A] p-0.5">
                        <div className="w-full h-full rounded-full bg-[#061315] flex items-center justify-center text-[9px] text-white font-bold">
                          UM
                        </div>
                      </div>
                      <span className="text-xs text-[#AAB8B8]">Growth Strategic Council</span>
                    </div>
                    <span className="text-xs font-bold text-[#FFD67A]">95% Retention</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom-right decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full border border-[#008F8C]/30 pointer-events-none -z-10" />
          </motion.div>

          {/* Right Column: Text & Strategy Highlights */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#008F8C]/15 border border-[#008F8C]/40 text-[#FFD67A] text-xs font-semibold tracking-[0.2em] uppercase mb-4"
            >
              WHO WE ARE
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#F6F0E5] leading-tight"
            >
              Not Just Another Marketing Agency.{' '}
              <span className="text-gradient-teal-gold block sm:inline">
                We're Your Growth Partner.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-base sm:text-lg text-[#AAB8B8] leading-relaxed"
            >
              Uniquo Media is a result-focused marketing agency helping businesses build stronger digital identities, reach the right audience and convert attention into sustainable growth.
            </motion.p>

            {/* Highlights Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.25 + idx * 0.1 }}
                    className="p-4 rounded-2xl bg-[#0A1D1E]/80 border border-white/5 hover:border-[#008F8C]/40 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-[#008F8C]/20 flex items-center justify-center text-[#FFD67A]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="font-heading font-bold text-sm text-[#F6F0E5]">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs text-[#AAB8B8] leading-normal">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10"
            >
              <PremiumButton href="/about" variant="primary" icon="arrow">
                More About Uniquo
              </PremiumButton>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
