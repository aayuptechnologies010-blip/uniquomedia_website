import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const InteractiveHeroVisual = ({
  imageSrc,
  alt = "Uniquo Media Creator & Influencer Marketing Visual",
  badgeText = "Creator Partnerships Hub",
  badgeMetric = "4.8x ROAS",
  orbitGold = true,
  floatingPills = [],
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Smooth scroll parallax: enabled on larger screens
  const { scrollY } = useScroll();
  const scrollYOffset = useTransform(scrollY, [0, 600], [0, 40]);
  const scrollScale = useTransform(scrollY, [0, 600], [1, 0.95]);

  const handleMouseMove = (e) => {
    // Only enable mouse tilt on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <motion.div
      style={{ y: scrollYOffset, scale: scrollScale }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex items-center justify-center cursor-pointer select-none w-full max-w-full overflow-visible py-4 sm:py-6"
    >
      {/* Outer Orbit Container - fully responsive scaling from 280px up to 480px */}
      <div className="relative w-[280px] h-[280px] xs:w-[320px] xs:h-[320px] sm:w-[420px] sm:h-[420px] lg:w-[470px] lg:h-[470px] flex items-center justify-center">
        
        {/* Background glow */}
        <motion.div
          animate={{
            x: -mousePos.x * 0.6,
            y: -mousePos.y * 0.6,
          }}
          transition={{ type: 'spring', damping: 25, stiffness: 120 }}
          className="absolute inset-4 rounded-full bg-gradient-to-tr from-[#008F8C]/20 via-transparent to-[#E5A43A]/20 blur-[60px] sm:blur-[90px] pointer-events-none"
        />

        {/* Outer Orbit Ring (Slow rotating) */}
        {orbitGold && (
          <div className="absolute inset-0 rounded-full border border-dashed border-[#E5A43A]/25 animate-[spin_40s_linear_infinite] pointer-events-none" />
        )}

        {/* Counter-rotating Teal Glow Ring */}
        <div className="absolute inset-4 sm:inset-6 rounded-full border border-[#008F8C]/30 shadow-[0_0_30px_rgba(0,143,140,0.2)] animate-[spin_28s_linear_infinite_reverse] pointer-events-none" />

        {/* Central 3D Visual Card with Mouse Parallax & Hover Glow */}
        <motion.div
          animate={{
            x: mousePos.x,
            y: mousePos.y,
            scale: isHovered ? 1.025 : 1,
          }}
          transition={{ type: 'spring', damping: 20, stiffness: 180, mass: 0.6 }}
          className="relative z-10 w-[240px] xs:w-[270px] sm:w-[350px] lg:w-[390px] aspect-square rounded-2xl sm:rounded-3xl bg-[#0A1D1E]/95 backdrop-blur-xl border border-[#008F8C]/50 hover:border-[#E5A43A]/80 shadow-[0_20px_50px_rgba(0,0,0,0.8)] glow-teal overflow-hidden transition-all duration-400 group"
        >
          {/* Main 3D Generated Visual Asset */}
          <div className="relative w-full h-full overflow-hidden">
            <img
              src={imageSrc}
              alt={alt}
              className="w-full h-full object-cover transform group-hover:scale-106 transition-transform duration-700 ease-out filter contrast-110 brightness-95"
            />
            {/* Subtle Vignette Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#061315] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
          </div>

          {/* Top Live Status Indicator Bar - Optimized for mobile font sizes */}
          <div className="absolute top-2.5 sm:top-4 left-2.5 sm:left-4 right-2.5 sm:right-4 z-20 flex items-center justify-between p-2 sm:p-2.5 rounded-xl sm:rounded-2xl bg-[#061315]/90 backdrop-blur-md border border-white/10 shadow-lg">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="w-2 h-2 rounded-full bg-[#008F8C] animate-pulse" />
              <span className="text-[10px] sm:text-xs font-semibold text-[#F6F0E5] tracking-wide font-heading truncate max-w-[130px] sm:max-w-none">
                {badgeText}
              </span>
            </div>
            <span className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#FFD67A]/20 text-[#FFD67A] font-bold border border-[#E5A43A]/40 shadow-sm flex-shrink-0">
              {badgeMetric}
            </span>
          </div>

          {/* Bottom Live Growth Line Effect */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFD67A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>

        {/* Floating Custom Marketing Pills - Responsive layout */}
        {floatingPills.map((pill, idx) => {
          const Icon = pill.icon;
          const isTop = pill.position.includes('top');

          return (
            <motion.div
              key={idx}
              animate={{
                y: isTop ? [-6, 6, -6] : [6, -6, 6],
              }}
              transition={{
                y: { duration: 4.5 + idx * 0.7, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.4 },
              }}
              className={`absolute ${pill.position} px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl bg-[#061315]/95 border ${
                pill.color === 'gold' ? 'border-[#E5A43A]/70 text-[#FFD67A]' : 'border-[#008F8C]/70 text-[#008F8C]'
              } shadow-[0_10px_25px_rgba(0,0,0,0.7)] flex items-center gap-2 z-20 backdrop-blur-md scale-90 sm:scale-100`}
            >
              <div
                className={`w-6 h-6 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl flex items-center justify-center ${
                  pill.color === 'gold' ? 'bg-[#E5A43A]/20 text-[#FFD67A]' : 'bg-[#008F8C]/20 text-[#008F8C]'
                }`}
              >
                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div className="text-left">
                <div className="text-[9px] sm:text-[10px] text-[#AAB8B8] leading-tight">{pill.label}</div>
                <div className="text-[11px] sm:text-xs font-bold text-[#F6F0E5] font-heading">{pill.value}</div>
              </div>
            </motion.div>
          );
        })}

      </div>
    </motion.div>
  );
};

export default InteractiveHeroVisual;
