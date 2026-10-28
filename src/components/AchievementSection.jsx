import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const achievementData = [
  { value: 100, suffix: '+', label: 'Happy Clients', sub: 'Across 12+ industry sectors' },
  { value: 250, suffix: '+', label: 'Campaigns Executed', sub: 'Multi-platform omni-funnel' },
  { value: 10, suffix: 'M+', label: 'Digital Reach', sub: 'High-intent buyer impressions' },
  { value: 95, suffix: '%', label: 'Client Satisfaction', sub: 'Annual retention rate' },
];

const CounterItem = ({ target, suffix, label, sub, delay }) => {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = target;
    const totalFrames = 60;
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const eased = Math.round(end * (1 - Math.pow(1 - progress, 3)));
      setVal(eased);

      if (frame >= totalFrames) {
        setVal(end);
        clearInterval(timer);
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center text-center p-6 sm:p-8 rounded-3xl bg-[#0A1D1E]/80 border border-[#008F8C]/25 hover:border-[#E5A43A]/60 transition-colors shadow-lg"
    >
      <div className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading text-[#F6F0E5] tracking-tight">
        {val}
        <span className="text-[#FFD67A]">{suffix}</span>
      </div>
      <div className="text-lg font-bold text-[#F6F0E5] mt-3 font-heading">
        {label}
      </div>
      <div className="text-xs text-[#AAB8B8] mt-1">
        {sub}
      </div>
    </motion.div>
  );
};

export const AchievementSection = () => {
  return (
    <section className="relative py-28 bg-[#061315] overflow-hidden">
      {/* Moving Gold Gradient Line Behind Numbers */}
      <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E5A43A]/40 to-transparent pointer-events-none transform -translate-y-1/2 animate-pulse" />

      {/* Radial Teal & Gold Blobs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-[#008F8C]/15 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-[#E5A43A]/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#008F8C]/15 border border-[#008F8C]/40 text-[#FFD67A] text-xs font-semibold tracking-[0.2em] uppercase mb-4"
          >
            IMPACT METRICS
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#F6F0E5] leading-tight"
          >
            Growth You Can{' '}
            <span className="text-gradient-teal-gold">
              Measure.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-4 text-base sm:text-lg text-[#AAB8B8]"
          >
            Every campaign we launch is held accountable to rigorous performance standards and transparent client outcomes.
          </motion.p>
        </div>

        {/* 4 Animated Counter Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievementData.map((item, idx) => (
            <CounterItem
              key={idx}
              target={item.value}
              suffix={item.suffix}
              label={item.label}
              sub={item.sub}
              delay={idx * 0.1}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default AchievementSection;
