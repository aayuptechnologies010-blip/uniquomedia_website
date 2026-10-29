import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
  Compass,
  Search,
  Sparkles,
  Palette,
  Rocket,
  Sliders,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import PremiumButton from './PremiumButton';

const steps = [
  {
    num: '01',
    name: 'Discovery Audit',
    icon: Compass,
    desc: 'Understanding your business model, customer psychology, core unit economics, and growth bottlenecks.',
    badge: 'Day 1-3',
    accent: '#008F8C',
  },
  {
    num: '02',
    name: 'Competitor Intel',
    icon: Search,
    desc: 'Deep competitor tearing-down, audience segmentation, high-intent keyword mapping, and creative auditing.',
    badge: 'Day 4-7',
    accent: '#FFD67A',
  },
  {
    num: '03',
    name: 'Full-Funnel Strategy',
    icon: Sparkles,
    desc: 'Engineering multi-channel campaign roadmaps, budget allocation models, and creator matching algorithms.',
    badge: 'Week 2',
    accent: '#E5A43A',
  },
  {
    num: '04',
    name: 'Content & Scripting',
    icon: Palette,
    desc: 'Writing frame-by-frame 3-second hook scripts, producing dynamic video edits, and designing high-CTR ad sets.',
    badge: 'Week 2-3',
    accent: '#00E5A3',
  },
  {
    num: '05',
    name: 'Omnichannel Launch',
    icon: Rocket,
    desc: 'Synchronized multi-channel deployment across Google, Meta Ads, and vetted creator networks with pixel tracking.',
    badge: 'Week 3',
    accent: '#008F8C',
  },
  {
    num: '06',
    name: 'Algorithmic Optimization',
    icon: Sliders,
    desc: 'Rigorous A/B split-testing, bid adjustments, CPA compression, and creative fatigue refresh cycles.',
    badge: 'Continuous',
    accent: '#FFD67A',
  },
  {
    num: '07',
    name: 'Aggressive Scale',
    icon: TrendingUp,
    desc: 'Scaling profitable spend into adjacent lookalike audiences, new geographies, and evergreen funnels.',
    badge: 'Long-Term',
    accent: '#E5A43A',
  },
];

export const ProcessSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 75%', 'end 70%'],
  });

  const scaleProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="process" ref={containerRef} className="relative py-28 bg-[#061315] overflow-hidden border-t border-[#008F8C]/20">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[400px] bg-[#008F8C]/12 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#008F8C]/20 to-[#FFD67A]/20 border border-[#FFD67A]/40 text-[#FFD67A] text-xs font-bold tracking-[0.2em] uppercase mb-4 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FFD67A]" />
            OUR METHODOLOGY
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-[#F6F0E5] leading-tight"
          >
            The 7-Phase Growth Engine{' '}
            <span className="text-gradient-teal-gold block sm:inline">
              Engineered for Velocity.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-5 text-sm sm:text-lg text-[#AAB8B8] max-w-2xl leading-relaxed font-normal"
          >
            A battle-tested scientific execution framework taking your brand from initial audit to continuous multi-crore scale.
          </motion.p>
        </div>

        {/* Process Steps Timeline - Responsive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                whileHover={{ y: -8 }}
                className={`group relative rounded-3xl p-7 bg-gradient-to-b from-[#0F282A] to-[#071719] border border-white/15 hover:border-[#FFD67A]/60 transition-all duration-300 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_45px_rgba(0,143,140,0.25)] overflow-hidden ${
                  idx === 6 ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Glow beam */}
                <div
                  className="absolute -top-12 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full blur-[40px] opacity-20 group-hover:opacity-70 transition-opacity pointer-events-none"
                  style={{ backgroundColor: step.accent }}
                />

                {/* Top accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2.5px] opacity-60 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${step.accent}, transparent)`,
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center border shadow-md group-hover:scale-110 transition-transform duration-300"
                      style={{
                        backgroundColor: `${step.accent}20`,
                        borderColor: `${step.accent}55`,
                        color: step.accent,
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#FFD67A]">
                        {step.badge}
                      </span>
                      <span className="text-xl font-black font-heading text-white/20 group-hover:text-[#FFD67A]/50 transition-colors">
                        {step.num}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-heading font-black text-xl text-[#F6F0E5] group-hover:text-[#FFD67A] transition-colors mb-2">
                    {step.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#AAB8B8] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-[#008F8C] group-hover:text-[#FFD67A] transition-colors relative z-10">
                  <CheckCircle2 className="w-4 h-4 text-[#00E5A3]" />
                  <span>Phase Output Delivered</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Banner inside process */}
        <div className="mt-16 text-center">
          <PremiumButton href="/contact" variant="primary" icon="arrow" className="text-sm px-8 py-4">
            Initialize 7-Phase Campaign Roadmap
          </PremiumButton>
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;
