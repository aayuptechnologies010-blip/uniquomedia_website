import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const statsData = [
  { value: 100, suffix: '+', label: 'Brands Empowered', desc: 'Across diverse global industries' },
  { value: 250, suffix: '+', label: 'Campaigns Launched', desc: 'Data-engineered performance' },
  { value: 95, suffix: '%', label: 'Client Satisfaction', desc: 'Long-term partnership retention' },
  { value: 5, suffix: '+', label: 'Marketing Solutions', desc: 'Integrated 360° digital ecosystem' },
];

const AnimatedCounter = ({ target, duration = 2, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseInt(target, 10);
    const totalFrames = Math.round(duration * 60);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Ease out cubic
      const current = Math.round(end * (1 - Math.pow(1 - progress, 3)));
      setCount(current);

      if (frame >= totalFrames) {
        setCount(end);
        clearInterval(counter);
      }
    }, 1000 / 60);

    return () => clearInterval(counter);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#F6F0E5]">
      {count}
      <span className="text-[#FFD67A]">{suffix}</span>
    </span>
  );
};

export const StatsBar = () => {
  return (
    <section className="relative py-12 bg-[#0A1D1E]/60 border-y border-[#008F8C]/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          {statsData.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col items-center text-center ${idx > 0 && idx % 2 === 0 ? 'pt-6 lg:pt-0' : ''} ${idx % 2 !== 0 && idx > 1 ? 'pt-6 lg:pt-0' : ''} lg:px-4`}
            >
              <div className="flex items-baseline justify-center">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-[#F6F0E5] mt-2 font-heading">
                {stat.label}
              </h3>
              <p className="text-xs text-[#AAB8B8] mt-1 max-w-[180px]">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
