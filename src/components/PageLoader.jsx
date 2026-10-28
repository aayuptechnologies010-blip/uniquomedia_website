import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const PageLoader = ({ isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#061315]/95 backdrop-blur-xl pointer-events-auto"
        >
          {/* Central Logo Container with Spinning Double Rings */}
          <div className="relative flex items-center justify-center w-36 h-36 sm:w-44 sm:h-44">
            
            {/* Outer Golden Dashed Orbit Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-[#E5A43A]/60 shadow-[0_0_30px_rgba(229,164,58,0.35)]"
            />

            {/* Inner Teal Counter-Rotating Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 2.8, ease: 'linear' }}
              className="absolute inset-3 rounded-full border-2 border-t-[#008F8C] border-r-transparent border-b-[#006B69] border-l-transparent shadow-[0_0_25px_rgba(0,143,140,0.5)]"
            />

            {/* High-speed Gold Arc Tracer */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
              className="absolute inset-1 rounded-full border-t-2 border-[#FFD67A] border-transparent"
            />

            {/* Pulsing Core Glow Behind Logo */}
            <motion.div
              animate={{ scale: [0.85, 1.15, 0.85], opacity: [0.3, 0.65, 0.3] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
              className="absolute inset-5 rounded-full bg-gradient-to-tr from-[#008F8C]/40 to-[#E5A43A]/30 blur-xl"
            />

            {/* Real Logo Image in the center */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: [0.92, 1.05, 0.92] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
              className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#061315] border border-[#008F8C]/60 p-2 shadow-2xl flex items-center justify-center overflow-hidden"
            >
              <img
                src="/uniquomedia-logo.png"
                alt="Uniquo Media Loading"
                className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(229,164,58,0.4)]"
              />
            </motion.div>
          </div>

          {/* Luxury Text & Progress Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-8 flex flex-col items-center text-center"
          >
            <div className="flex items-center gap-1.5 font-heading text-xl font-black text-[#F6F0E5] tracking-tight">
              <span>Uniquo</span>
              <span className="bg-gradient-to-r from-[#FFD67A] to-[#E5A43A] bg-clip-text text-transparent">Media</span>
            </div>
            
            <p className="text-xs uppercase tracking-[0.25em] text-[#008F8C] font-semibold mt-1">
              Your Growth, Our Strategy
            </p>

            {/* Glowing animated line */}
            <div className="mt-4 w-32 h-[2px] bg-white/10 rounded-full overflow-hidden">
              <motion.div
                animate={{ x: [-128, 128] }}
                transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
                className="w-1/2 h-full bg-gradient-to-r from-[#008F8C] via-[#FFD67A] to-[#E5A43A]"
              />
            </div>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
