import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight, Sparkles, TrendingUp, ShieldCheck, Zap } from 'lucide-react';
import PremiumButton from './PremiumButton';

export const CTASection = () => {
  return (
    <section className="relative py-28 bg-[#061315] overflow-hidden border-t border-[#008F8C]/20">
      {/* Background Decorative Blobs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-[#008F8C]/15 blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[500px] h-[400px] bg-[#E5A43A]/15 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl p-8 sm:p-14 lg:p-16 bg-gradient-to-br from-[#0F282A] via-[#0A1D1E] to-[#061315] border border-[#FFD67A]/40 shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_40px_rgba(229,164,58,0.2)] relative overflow-hidden">
          
          {/* Subtle Grid Watermark */}
          <div
            className="absolute inset-0 opacity-[0.035] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(#F6F0E5 1px, transparent 1px), linear-gradient(90deg, #F6F0E5 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}
          />

          {/* Large Decorative Animated Arrow */}
          <motion.div
            initial={{ opacity: 0, x: -50, y: 30, rotate: -10 }}
            whileInView={{ opacity: 0.15, x: 0, y: 0, rotate: 0 }}
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
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#008F8C]/20 to-[#FFD67A]/20 border border-[#FFD67A]/40 text-[#FFD67A] text-xs font-bold tracking-[0.2em] uppercase mb-6 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FFD67A]" />
              TAKE THE QUANTUM LEAP
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-[#F6F0E5] leading-[1.12]"
            >
              Your Competitors Are Scaling Online.{' '}
              <span className="text-gradient-teal-gold block sm:inline">
                It's Your Turn.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 text-sm sm:text-lg text-[#AAB8B8] leading-relaxed font-normal"
            >
              Stop burning capital on unmeasured marketing experiments. Partner with Uniquo Media to engineer predictable creator campaigns, viral video systems, and high-ROAS paid media funnels.
            </motion.p>

            {/* Quick Proof Badges */}
            <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-bold text-[#F6F0E5]">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
                <ShieldCheck className="w-4 h-4 text-[#00E5A3]" />
                <span>Verified 450+ Creator Network</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
                <TrendingUp className="w-4 h-4 text-[#FFD67A]" />
                <span>4.8x Average Client ROAS</span>
              </div>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <PremiumButton href="/contact" variant="primary" icon="arrow" className="text-sm px-8 py-4 justify-center">
                Launch Your Campaign Today
              </PremiumButton>
              <PremiumButton href="https://wa.me/919999999999" variant="secondary" icon="none" className="text-sm px-7 py-4 justify-center">
                <MessageCircle className="w-4 h-4 mr-2 text-[#00E5A3]" />
                Direct WhatsApp Channel
              </PremiumButton>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTASection;
