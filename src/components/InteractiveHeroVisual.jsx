import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const InteractiveHeroVisual = ({
  imageSrc,
  alt = "Uniquo Media Hero Visual",
  badgeText = "Live Performance Matrix",
  badgeMetric = "+348% ROI",
  orbitGold = true,
  floatingPills = [],
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Smooth scroll parallax: as user scrolls down, hero image moves slightly down & scales gently
  const { scrollY } = useScroll();
  const scrollYOffset = useTransform(scrollY, [0, 600], [0, 45]);
  const scrollScale = useTransform(scrollY, [0, 600], [1, 0.94]);

  const handleMouseMove = (e) => {
    // Desktop only mouse parallax within 15px range
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 24;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 24;
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
      initial={{ opacity: 0, x: 60, scale: 0.88, rotate: 2 }}
      animate={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex items-center justify-center cursor-pointer select-none"
    >
      {/* Outer Orbit Container */}
      <div className="relative w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] lg:w-[490px] lg:h-[490px] flex items-center justify-center">
        
        {/* Background glow moving opposite to mouse */}
        <motion.div
          animate={{
            x: -mousePos.x * 0.8,
            y: -mousePos.y * 0.8,
          }}
          transition={{ type: 'spring', damping: 25, stiffness: 120 }}
          className="absolute inset-4 rounded-full bg-gradient-to-tr from-[#008F8C]/25 via-transparent to-[#E5A43A]/20 blur-[90px] pointer-events-none"
        />

        {/* Outer Orbit Ring (Slow rotating) */}
        {orbitGold && (
          <div className="absolute inset-0 rounded-full border border-dashed border-[#E5A43A]/30 animate-[spin_40s_linear_infinite] pointer-events-none" />
        )}

        {/* Counter-rotating Teal Glow Ring */}
        <div className="absolute inset-6 rounded-full border border-[#008F8C]/35 shadow-[0_0_40px_rgba(0,143,140,0.2)] animate-[spin_28s_linear_infinite_reverse] pointer-events-none" />

        {/* Central 3D Visual Card with Mouse Parallax & Hover Glow */}
        <motion.div
          animate={{
            x: mousePos.x,
            y: mousePos.y,
            scale: isHovered ? 1.03 : 1,
          }}
          transition={{ type: 'spring', damping: 20, stiffness: 180, mass: 0.6 }}
          className="relative z-10 w-[290px] sm:w-[380px] lg:w-[410px] aspect-square rounded-3xl bg-[#0A1D1E]/90 backdrop-blur-xl border border-[#008F8C]/50 hover:border-[#E5A43A]/80 shadow-[0_25px_60px_rgba(0,0,0,0.8)] glow-teal overflow-hidden transition-all duration-400 group"
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
            <div className="absolute inset-0 bg-radial from-transparent via-transparent to-[#061315]/70 pointer-events-none" />
          </div>

          {/* Top Live Status Indicator Bar */}
          <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between p-2.5 rounded-2xl bg-[#061315]/85 backdrop-blur-md border border-white/10 shadow-lg">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#008F8C] animate-pulse" />
              <span className="text-xs font-semibold text-[#F6F0E5] tracking-wide font-heading">
                {badgeText}
              </span>
            </div>
            <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#FFD67A]/20 text-[#FFD67A] font-bold border border-[#E5A43A]/40 shadow-sm">
              {badgeMetric}
            </span>
          </div>

          {/* Bottom Live Growth Line Effect */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFD67A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>

        {/* Floating Custom Marketing Pills with Parallax Speeds */}
        {floatingPills.map((pill, idx) => {
          const Icon = pill.icon;
          const isTop = pill.position.includes('top');
          const isRight = pill.position.includes('right');

          return (
            <motion.div
              key={idx}
              animate={{
                y: isTop ? [-7, 7, -7] : [7, -7, 7],
                x: mousePos.x * (idx % 2 === 0 ? 1.4 : -1.2),
              }}
              transition={{
                y: { duration: 4.5 + idx * 0.7, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.4 },
                x: { type: 'spring', damping: 20, stiffness: 150 },
              }}
              className={`absolute ${pill.position} px-3.5 py-2 rounded-2xl bg-[#061315]/95 border ${
                pill.color === 'gold' ? 'border-[#E5A43A]/70 text-[#FFD67A]' : 'border-[#008F8C]/70 text-[#008F8C]'
              } shadow-[0_12px_30px_rgba(0,0,0,0.6)] flex items-center gap-2.5 z-20 backdrop-blur-md`}
            >
              <div
                className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                  pill.color === 'gold' ? 'bg-[#E5A43A]/20 text-[#FFD67A]' : 'bg-[#008F8C]/20 text-[#008F8C]'
                }`}
              >
                <Icon className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-[10px] text-[#AAB8B8] leading-tight">{pill.label}</div>
                <div className="text-xs font-bold text-[#F6F0E5] font-heading">{pill.value}</div>
              </div>
            </motion.div>
          );
        })}

      </div>
    </motion.div>
  );
};

export default InteractiveHeroVisual;
