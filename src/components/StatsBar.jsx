import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const statsData = [
  { value: 100, suffix: '+', label: 'Brands Empowered', desc: 'Across global industries' },
  { value: 250, suffix: '+', label: 'Campaigns Launched', desc: 'Data-engineered performance' },
  { value: 95, suffix: '%', label: 'Client Satisfaction', desc: 'Long-term partnership retention' },
  { value: 5, suffix: '+', label: 'Marketing Solutions', desc: 'Integrated 360° digital ecosystem' },
];

const AnimatedCounter = ({ target, duration = 2, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseInt(target, 10);
    const totalFrames = Math.round(duration * 60);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
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
    <span ref={ref} className="font-heading font-extrabold text-2xl xs:text-3xl sm:text-4xl lg:text-5xl text-[#F6F0E5]">
      {count}
      <span className="text-[#FFD67A]">{suffix}</span>
    </span>
  );
};

export const StatsBar = () => {
  return (
    <section className="relative py-8 sm:py-12 bg-[#0A1D1E]/70 border-y border-[#008F8C]/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-6 lg:gap-6 divide-y-0 lg:divide-x divide-white/10">
          {statsData.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center text-center p-3 sm:p-4 rounded-2xl bg-[#061315]/40 sm:bg-transparent border border-white/5 sm:border-none"
            >
              <div className="flex items-baseline justify-center">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <h3 className="text-xs xs:text-sm sm:text-base lg:text-lg font-semibold text-[#F6F0E5] mt-1.5 sm:mt-2 font-heading">
                {stat.label}
              </h3>
              <p className="text-[10px] xs:text-xs text-[#AAB8B8] mt-0.5 sm:mt-1 max-w-[160px] line-clamp-1 sm:line-clamp-none">
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
