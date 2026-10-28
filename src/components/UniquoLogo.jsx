import React from 'react';
import { Link } from 'react-router-dom';

export const UniquoLogo = ({ 
  className = "h-11", 
  showText = true, 
  variant = "full", // "full" | "icon"
  onClick 
}) => {
  return (
    <div 
      onClick={onClick}
      className={`flex items-center gap-3 select-none group cursor-pointer ${className}`}
    >
      {/* 
        The actual brand logo image from public/uniquomedia-logo.png
        with rounded luxury styling, gold/teal border glow on hover
      */}
      <div className="relative flex-shrink-0 flex items-center justify-center h-11 w-11 sm:h-12 sm:w-12 rounded-xl bg-[#061315] border border-[#008F8C]/40 group-hover:border-[#E5A43A]/80 shadow-[0_0_15px_rgba(0,143,140,0.25)] group-hover:shadow-[0_0_25px_rgba(229,164,58,0.4)] transition-all duration-400 overflow-hidden p-1">
        <img
          src="/uniquomedia-logo.png"
          alt="Uniquo Media Logo"
          className="w-full h-full object-contain transform group-hover:scale-108 transition-transform duration-400"
          loading="eager"
        />
        {/* Subtle gold ring highlight */}
        <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-[#FFD67A]/30 pointer-events-none" />
      </div>

      {showText && (
        <div className="flex flex-col leading-tight">
          <div className="flex items-center gap-1 font-heading text-xl sm:text-2xl font-black tracking-tight text-[#F6F0E5]">
            <span className="text-[#F6F0E5] tracking-tight">Uniquo</span>
            <span className="bg-gradient-to-r from-[#008F8C] via-[#FFD67A] to-[#E5A43A] bg-clip-text text-transparent">
              Media
            </span>
          </div>
          <span className="text-[9px] uppercase tracking-[0.24em] text-[#008F8C] font-semibold -mt-0.5 group-hover:text-[#FFD67A] transition-colors">
            Marketing Agency
          </span>
        </div>
      )}
    </div>
  );
};

export default UniquoLogo;
