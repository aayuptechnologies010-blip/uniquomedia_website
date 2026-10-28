import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';
import PremiumButton from './PremiumButton';

export const CTASection = () => {
  return (
    <section className="relative py-28 bg-gradient-to-b from-[#0A1D1E] via-[#061315] to-[#061315] overflow-hidden border-t border-[#008F8C]/20">
      {/* Background Decorative Blobs */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[550px] h-[350px] bg-[#008F8C]/15 blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-80 h-80 bg-[#E5A43A]/15 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl p-8 sm:p-14 lg:p-16 bg-gradient-to-br from-[#0A1D1E] via-[#061315] to-[#006B69]/30 border border-[#008F8C]/40 shadow-[0_25px_60px_rgba(0,0,0,0.8)] glow-teal relative overflow-hidden">
          
          {/* 
            Large Decorative Gold Arrow Inspired by Logo
            Animate on scroll:
            translateX(-50px) translateY(30px) rotate(-10deg) -> 0, 0, 0
          */}
          <motion.div
            initial={{ opacity: 0, x: -50, y: 30, rotate: -10 }}
            whileInView={{ opacity: 0.18, x: 0, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -right-10 -bottom-10 w-80 h-80 sm:w-96 sm:h-96 pointer-events-none"
          >
            <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-[#E5A43A]">
              <path
                d="M20 80L80 20M80 20H40M80 20V60"
                stroke="currentColor"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>

          <div className="relative z-10 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E5A43A]/15 border border-[#E5A43A]/40 text-[#FFD67A] text-xs font-semibold tracking-[0.2em] uppercase mb-6"
            >
              TAKE THE QUANTUM LEAP
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#F6F0E5] leading-[1.12]"
            >
              Your Competitors Are Growing Online.{' '}
              <span className="text-gradient-gold block">
                It's Your Turn.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-[#AAB8B8] leading-relaxed"
            >
              Let's build a marketing strategy that brings your brand the attention and results it deserves. Book your zero-cost discovery session with our senior strategy leads today.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <PremiumButton href="#contact" variant="gold" icon="arrow" className="text-base px-8 py-4">
                Get Free Consultation
              </PremiumButton>

              <a
                href="https://wa.me/919876543210?text=Hi%20Uniquo%20Media,%20I%20would%20like%20to%20discuss%20a%20marketing%20growth%20strategy"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-6 py-4 rounded-full bg-[#0A1D1E] border border-[#008F8C]/50 hover:border-[#FFD67A] text-[#F6F0E5] hover:text-[#FFD67A] transition-all duration-300 font-heading text-sm font-semibold tracking-wide hover:-translate-y-0.5 shadow-md"
              >
                <MessageCircle className="w-4 h-4 text-[#008F8C] group-hover:text-[#FFD67A] transition-colors" />
                <span>WhatsApp Us</span>
              </a>
            </motion.div>

            {/* 3 Value Pillars */}
            <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-[#AAB8B8]">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#008F8C]" />
                Zero obligations
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E5A43A]" />
                Full competitor audit included
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFD67A]" />
                Actionable 30-day growth roadmap
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTASection;
