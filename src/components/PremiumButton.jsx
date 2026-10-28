import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export const PremiumButton = ({
  children,
  onClick,
  href,
  variant = 'primary', // 'primary' | 'secondary' | 'gold' | 'outline'
  icon = 'arrow',      // 'arrow' | 'upRight' | 'none'
  className = '',
  type = 'button',
}) => {
  const isUpRight = icon === 'upRight';
  const hasArrow = icon !== 'none';

  // Variant base style configuration
  let borderStyle = 'border border-[#008F8C]/60 hover:border-[#E5A43A]';
  let bgBase = 'bg-[#0A1D1E]';
  let textColor = 'text-[#F6F0E5]';
  let fillBg = 'bg-gradient-to-t from-[#008F8C] to-[#006B69]';
  let shadow = 'hover:shadow-[0_0_25px_rgba(229,164,58,0.35)]';

  if (variant === 'gold') {
    borderStyle = 'border border-[#E5A43A]/80';
    bgBase = 'bg-[#0A1D1E]';
    textColor = 'text-[#FFD67A] group-hover:text-[#061315]';
    fillBg = 'bg-gradient-to-t from-[#E5A43A] to-[#FFD67A]';
    shadow = 'hover:shadow-[0_0_30px_rgba(255,214,122,0.45)]';
  } else if (variant === 'secondary') {
    borderStyle = 'border border-white/10 hover:border-[#008F8C]/60';
    bgBase = 'bg-[#061315]/80';
    fillBg = 'bg-gradient-to-t from-[#006B69]/80 to-[#008F8C]/40';
  } else if (variant === 'outline') {
    borderStyle = 'border border-[#008F8C]/40 hover:border-[#FFD67A]';
    bgBase = 'bg-transparent';
    fillBg = 'bg-gradient-to-t from-[#008F8C]/30 to-[#0A1D1E]/40';
  }

  const content = (
    <div
      className={`group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full font-heading text-sm font-semibold tracking-wide overflow-hidden transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer select-none ${bgBase} ${borderStyle} ${shadow} ${textColor} ${className}`}
    >
      {/* Signature Bottom-to-Top Fill Layer */}
      <span
        className={`absolute inset-x-0 bottom-0 h-0 w-full transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:h-full ${fillBg} z-0 pointer-events-none`}
      />

      {/* Button Content in Front */}
      <span className="relative z-10 flex items-center gap-2 transition-colors duration-300">
        <span>{children}</span>
        {hasArrow && (
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5 group-hover:-translate-y-0.5">
            {isUpRight ? (
              <ArrowUpRight className="w-4 h-4 text-[#FFD67A] group-hover:text-inherit" />
            ) : (
              <ArrowRight className="w-4 h-4 text-[#FFD67A] group-hover:text-inherit" />
            )}
          </span>
        )}
      </span>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="inline-block outline-none">
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className="inline-block outline-none bg-transparent border-none p-0">
      {content}
    </button>
  );
};

export default PremiumButton;
