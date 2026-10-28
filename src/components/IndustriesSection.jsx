import React from 'react';
import { motion } from 'framer-motion';
import {
  Building2,
  GraduationCap,
  HeartPulse,
  ShoppingBag,
  Hotel,
  Rocket,
  Store,
  Briefcase,
  ArrowUpRight,
} from 'lucide-react';

const industries = [
  {
    icon: Building2,
    title: 'Real Estate',
    desc: 'High-ticket buyers, luxury site visits, and NRI investor acquisition funnels.',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    desc: 'Student enrollment pipelines, university branding, and career seminar bookings.',
  },
  {
    icon: HeartPulse,
    title: 'Healthcare',
    desc: 'Patient appointment acquisition, hospital trust authority, and local SEO.',
  },
  {
    icon: ShoppingBag,
    title: 'E-Commerce',
    desc: 'Scale D2C brand revenue, catalog ads, retention flows, and ROAS enhancement.',
  },
  {
    icon: Hotel,
    title: 'Hospitality',
    desc: 'Direct guest booking generation, lifestyle content, and event promotions.',
  },
  {
    icon: Rocket,
    title: 'Startups',
    desc: 'Go-to-market speed, product launch virality, and investor-ready customer traction.',
  },
  {
    icon: Store,
    title: 'Local Businesses',
    desc: 'Google Maps dominance, high-conversion localized ads, and review systems.',
  },
  {
    icon: Briefcase,
    title: 'Professional Services',
    desc: 'B2B executive lead pipelines, legal/financial inbound, and LinkedIn mastery.',
  },
];

export const IndustriesSection = () => {
  return (
    <section className="relative py-28 bg-[#0A1D1E] overflow-hidden">
      {/* Background Accent Blob */}
      <div className="absolute top-1/2 left-10 w-96 h-96 rounded-full bg-[#008F8C]/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#008F8C]/15 border border-[#008F8C]/40 text-[#FFD67A] text-xs font-semibold tracking-[0.2em] uppercase mb-4"
          >
            SECTORS WE TRANSFORM
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#F6F0E5] leading-tight"
          >
            Tailored Growth Across{' '}
            <span className="text-gradient-teal-gold">
              Diverse Industries.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-4 text-base sm:text-lg text-[#AAB8B8]"
          >
            Specialized marketing frameworks calibrated for the distinct compliance, customer journey, and sales cycle of your industry.
          </motion.p>
        </div>

        {/* 8 Industry Cards with bottom-to-top gold/teal fill animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="interactive-card group relative rounded-3xl p-6 bg-[#061315] border border-white/10 hover:border-[#E5A43A] overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(229,164,58,0.2)] flex flex-col justify-between"
              >
                {/* Signature Bottom-to-Top Fill (translates translateY(100%) -> translateY(0%)) */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#008F8C] via-[#006B69] to-[#0A1D1E] translate-y-full group-hover:translate-y-0 transition-transform duration-450 ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-none z-0" />

                {/* Card Content in Front */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-5">
                    {/* Icon container: moves upward slightly on hover */}
                    <div className="w-12 h-12 rounded-2xl bg-[#008F8C]/15 border border-[#008F8C]/30 text-[#FFD67A] flex items-center justify-center transform group-hover:-translate-y-1 group-hover:bg-[#E5A43A] group-hover:text-[#061315] group-hover:border-[#FFD67A] transition-all duration-300 shadow-sm">
                      <Icon className="w-6 h-6 transition-colors duration-300" />
                    </div>

                    {/* Arrow appearing from bottom right */}
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-white">
                      <ArrowUpRight className="w-4 h-4 text-[#FFD67A]" />
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-[#F6F0E5] group-hover:text-white transition-colors mb-2">
                    {ind.title}
                  </h3>
                  <p className="text-xs text-[#AAB8B8] group-hover:text-[#F6F0E5]/90 transition-colors leading-relaxed font-normal">
                    {ind.desc}
                  </p>
                </div>

                <div className="relative z-10 mt-5 pt-3 border-t border-white/5 group-hover:border-white/15 flex items-center gap-1.5 text-[11px] font-semibold text-[#008F8C] group-hover:text-[#FFD67A] transition-colors">
                  <span>Explore Playbook</span>
                  <span>→</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default IndustriesSection;
