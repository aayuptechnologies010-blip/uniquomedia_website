import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] bg-transparent z-50 pointer-events-none">
      <motion.div
        className="h-full bg-gradient-to-r from-[#008F8C] via-[#FFD67A] to-[#E5A43A] origin-left shadow-[0_0_12px_rgba(229,164,58,0.7)]"
        style={{ scaleX }}
      />
    </div>
  );
};

export default ScrollProgress;
