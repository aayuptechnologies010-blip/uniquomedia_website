import React from 'react';
import { motion } from 'framer-motion';
import { Target, Layers, Zap, Eye, CheckCircle2, Headphones, Sparkles, ArrowRight, ShieldAlert } from 'lucide-react';
import PremiumButton from './PremiumButton';

const reasons = [
  {
    num: '01',
    title: 'Results Over Vanity',
    desc: 'We optimize strictly for qualified pipeline, revenue velocity, and net return on ad spend—not hollow follower counts or misleading clicks.',
    icon: Target,
    accent: '#008F8C',
    metric: '4.8x Avg ROAS',
  },
  {
    num: '02',
    title: 'Custom-Tailored Strategies',
    desc: 'No cookie-cutter templates. Every campaign architecture is custom engineered around your distinct competitive edge and unit economics.',
    icon: Layers,
    accent: '#FFD67A',
    metric: '100% Bespoke',
  },
  {
    num: '03',
    title: 'Creative + Algorithmic Data',
    desc: 'We combine compelling human storytelling with rigorous quantitative data analysis. Creative beauty that converts mathematically.',
    icon: Zap,
    accent: '#E5A43A',
    metric: 'Data-Engineered',
  },
  {
    num: '04',
    title: '100% Transparent Attribution',
    desc: 'Real-time performance dashboards, clear KPI benchmarks, and zero industry jargon. You always know exactly where every dollar goes.',
    icon: Eye,
    accent: '#00E5A3',
    metric: 'Live Dashboard',
  },
  {
    num: '05',
    title: 'Full End-to-End Execution',
    desc: 'From creator discovery and viral hook scripting to raw video production, dynamic post-edits, and paid ad amplification—zero friction.',
    icon: CheckCircle2,
    accent: '#FFD67A',
    metric: 'Zero Hand-Offs',
  },
  {
    num: '06',
    title: 'Direct Strategic Council',
    desc: 'A dedicated growth strategist and senior creative team assigned directly to your account with rapid Slack and WhatsApp responsiveness.',
    icon: Headphones,
    accent: '#008F8C',
    metric: '< 1hr Response',
  },
];

export const WhyChooseUs = () => {
  return (
    <section id="why-us" className="relative py-28 bg-[#061315] text-[#F6F0E5] overflow-hidden border-t border-[#008F8C]/20">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-[#008F8C]/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-[500px] h-[500px] bg-[#E5A43A]/12 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#008F8C]/20 to-[#FFD67A]/20 border border-[#FFD67A]/40 text-[#FFD67A] text-xs font-bold tracking-[0.2em] uppercase mb-4 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FFD67A]" />
            THE UNIQUO ADVANTAGE
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-[#F6F0E5] leading-tight"
          >
            Why Industry Leaders Choose{' '}
            <span className="text-gradient-teal-gold block sm:inline">
              Uniquo Media
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-5 text-sm sm:text-lg text-[#AAB8B8] max-w-2xl leading-relaxed font-normal"
          >
            We don't operate like legacy bureaucratic agencies. We function as your embedded creative &amp; performance firepower.
          </motion.p>
        </div>

        {/* 6 Luxury Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {reasons.map((r, idx) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -8 }}
                className="group relative rounded-3xl p-7 sm:p-8 bg-gradient-to-b from-[#0F282A] to-[#071719] border border-white/15 hover:border-[#FFD67A]/60 transition-all duration-300 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_45px_rgba(0,143,140,0.25)] overflow-hidden"
              >
                {/* Accent ambient beam */}
                <div
                  className="absolute -top-12 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full blur-[40px] opacity-20 group-hover:opacity-70 transition-opacity pointer-events-none"
                  style={{ backgroundColor: r.accent }}
                />

                {/* Top Accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2.5px] opacity-60 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${r.accent}, transparent)`,
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-13 h-13 rounded-2xl flex items-center justify-center border shadow-lg group-hover:scale-110 transition-transform duration-300"
                      style={{
                        backgroundColor: `${r.accent}20`,
                        borderColor: `${r.accent}55`,
                        color: r.accent,
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="text-right">
                      <span className="text-2xl font-black font-heading text-white/20 group-hover:text-[#FFD67A]/60 transition-colors">
                        {r.num}
                      </span>
                      <span
                        className="block text-[10px] font-bold px-2 py-0.5 rounded-full border mt-1"
                        style={{
                          backgroundColor: `${r.accent}15`,
                          borderColor: `${r.accent}40`,
                          color: r.accent,
                        }}
                      >
                        {r.metric}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-heading font-black text-xl sm:text-2xl text-[#F6F0E5] group-hover:text-[#FFD67A] transition-colors mb-3">
                    {r.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#AAB8B8] leading-relaxed">
                    {r.desc}
                  </p>
                </div>

                <div className="pt-5 mt-6 border-t border-white/10 flex items-center justify-between relative z-10">
                  <span className="text-xs font-semibold text-[#008F8C] group-hover:text-[#FFD67A] transition-colors">
                    Guaranteed SLA
                  </span>
                  <div className="w-6 h-6 rounded-full bg-white/5 group-hover:bg-[#FFD67A]/20 flex items-center justify-center text-[#AAB8B8] group-hover:text-[#FFD67A] transition-colors">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Fast Action Strip */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-[#0F282A] via-[#0A1D1E] to-[#0F282A] border border-[#FFD67A]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h4 className="font-heading font-black text-xl sm:text-2xl text-[#F6F0E5]">
              Ready to Upgrade Your Brand to the Uniquo Standard?
            </h4>
            <p className="text-xs sm:text-sm text-[#AAB8B8] mt-1">
              Join Bajaj, JioHotstar, Xiaomi, and high-growth consumer labels winning with our framework.
            </p>
          </div>
          <PremiumButton href="/contact" variant="primary" icon="arrow" className="whitespace-nowrap px-8 py-3.5">
            Book 30-Min Strategy Call
          </PremiumButton>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
