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
} from 'lucide-react';

const steps = [
  {
    num: '01',
    name: 'Discover',
    icon: Compass,
    desc: 'Understanding your business model, customer psychology, core unit economics, and growth bottlenecks.',
  },
  {
    num: '02',
    name: 'Research',
    icon: Search,
    desc: 'Deep competitor tearing-down, audience segmentation, high-intent keyword mapping, and creative auditing.',
  },
  {
    num: '03',
    name: 'Strategize',
    icon: Sparkles,
    desc: 'Engineering full-funnel architectures, budget allocation models, and multi-channel campaign roadmaps.',
  },
  {
    num: '04',
    name: 'Create',
    icon: Palette,
    desc: 'Producing high-impact ad creatives, video hooks, copy variations, and conversion-engineered landing pages.',
  },
  {
    num: '05',
    name: 'Launch',
    icon: Rocket,
    desc: 'Synchronized multi-channel deployment across Google, Meta, SEO, and paid channels with pixel tracking.',
  },
  {
    num: '06',
    name: 'Optimize',
    icon: Sliders,
    desc: 'Rigorous A/B split-testing, bid adjustments, CPA compression, and creative refresh cycles.',
  },
  {
    num: '07',
    name: 'Scale',
    icon: TrendingUp,
    desc: 'Scaling profitable spend profitably into adjacent audiences, new geographies, and evergreen funnels.',
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
    <section id="process" ref={containerRef} className="relative py-28 bg-[#0A1D1E] overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#008F8C]/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#008F8C]/15 border border-[#008F8C]/40 text-[#FFD67A] text-xs font-semibold tracking-[0.2em] uppercase mb-4"
          >
            OUR METHODOLOGY
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#F6F0E5] leading-tight"
          >
            From Strategy to{' '}
            <span className="text-gradient-teal-gold">
              Scalable Growth
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-4 text-base sm:text-lg text-[#AAB8B8]"
          >
            A 7-stage battle-tested framework engineered to eliminate guesswork and turn attention into predictable customer revenue.
          </motion.p>
        </div>

        {/* 
          DESKTOP HORIZONTAL TIMELINE
        */}
        <div className="hidden xl:block relative mb-12">
          {/* Background Connecting Track */}
          <div className="absolute top-14 left-8 right-8 h-1 bg-white/10 rounded-full z-0">
            {/* Animated Progressing Gold Line that draws on scroll */}
            <motion.div
              style={{ scaleX: scaleProgress }}
              className="h-full bg-gradient-to-r from-[#008F8C] via-[#FFD67A] to-[#E5A43A] origin-left rounded-full shadow-[0_0_12px_rgba(229,164,58,0.7)]"
            />
          </div>

          <div className="grid grid-cols-7 gap-4 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group flex flex-col items-center text-center"
                >
                  {/* Step Node Circle: scale 0 -> 1 with teal -> gold glow */}
                  <motion.div
                    whileHover={{ scale: 1.12 }}
                    className="w-14 h-14 rounded-2xl bg-[#061315] border-2 border-[#008F8C]/60 group-hover:border-[#E5A43A] flex items-center justify-center text-[#FFD67A] group-hover:bg-[#E5A43A] group-hover:text-[#061315] shadow-lg transition-all duration-300 relative cursor-pointer"
                  >
                    <Icon className="w-6 h-6" />
                    {/* Step Number Badge */}
                    <span className="absolute -top-2.5 -right-2.5 text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-[#008F8C] text-white group-hover:bg-[#061315] group-hover:text-[#FFD67A] border border-white/10">
                      {step.num}
                    </span>
                  </motion.div>

                  {/* Step Title & Description */}
                  <h3 className="font-heading font-bold text-base text-[#F6F0E5] mt-5 group-hover:text-[#FFD67A] transition-colors">
                    {step.name}
                  </h3>
                  <p className="text-xs text-[#AAB8B8] mt-2 leading-relaxed px-1 font-normal">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 
          MOBILE & TABLET VERTICAL TIMELINE
        */}
        <div className="xl:hidden relative max-w-lg mx-auto">
          {/* Vertical Connecting Track */}
          <div className="absolute top-6 bottom-6 left-7 w-1 bg-white/10 rounded-full z-0">
            <motion.div
              style={{ scaleY: scaleProgress }}
              className="w-full bg-gradient-to-b from-[#008F8C] via-[#FFD67A] to-[#E5A43A] origin-top rounded-full shadow-[0_0_12px_rgba(229,164,58,0.7)]"
            />
          </div>

          <div className="flex flex-col gap-8 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="flex items-start gap-5 group"
                >
                  {/* Node */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#061315] border-2 border-[#008F8C]/60 group-hover:border-[#E5A43A] flex items-center justify-center text-[#FFD67A] shadow-md relative z-10">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 p-5 rounded-2xl bg-[#061315]/80 border border-white/5 group-hover:border-[#008F8C]/40 transition-colors">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] font-mono text-[#E5A43A] font-bold">
                        STEP {step.num}
                      </span>
                    </div>
                    <h3 className="font-heading font-bold text-lg text-[#F6F0E5] group-hover:text-[#FFD67A] transition-colors">
                      {step.name}
                    </h3>
                    <p className="text-xs text-[#AAB8B8] mt-1.5 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;
