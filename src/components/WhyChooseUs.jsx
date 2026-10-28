import React from 'react';
import { motion } from 'framer-motion';
import { Target, Layers, Zap, Eye, RefreshCw, Headphones } from 'lucide-react';

const reasons = [
  {
    num: '01',
    title: 'Results Over Vanity',
    desc: 'We optimize strictly for qualified pipeline, revenue velocity, and net return on ad spend—not hollow follower counts or misleading clicks.',
    icon: Target,
  },
  {
    num: '02',
    title: 'Tailored Strategies',
    desc: 'No cookie-cutter templates. Every campaign architecture is custom engineered around your distinct competitive edge and unit economics.',
    icon: Layers,
  },
  {
    num: '03',
    title: 'Creative + Data',
    desc: 'We combine compelling human storytelling with rigorous quantitative data analysis. Beauty that converts mathematically.',
    icon: Zap,
  },
  {
    num: '04',
    title: 'Clear Reporting',
    desc: 'Real-time performance dashboards, clear KPI benchmarks, and zero industry jargon. You always know exactly where every dollar goes.',
    icon: Eye,
  },
  {
    num: '05',
    title: 'Continuous Optimization',
    desc: 'A/B testing ad creatives, copy variants, landing page layouts, and audiences on a weekly sprint cadence to prevent performance decay.',
    icon: RefreshCw,
  },
  {
    num: '06',
    title: 'Dedicated Support',
    desc: 'A dedicated growth strategist and senior creative team assigned directly to your account. Fast Slack communication and responsive execution.',
    icon: Headphones,
  },
];

export const WhyChooseUs = () => {
  return (
    <section id="why-us" className="relative py-28 bg-[#F6F0E5] text-[#061315] overflow-hidden">
      {/* Decorative Brand Accent Background Watermark */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#008F8C]/10 blur-[90px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#E5A43A]/10 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#008F8C]/15 border border-[#008F8C]/30 text-[#006B69] text-xs font-bold tracking-[0.2em] uppercase mb-4"
          >
            THE UNIQUO ADVANTAGE
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#061315] leading-tight"
          >
            Why Brands Choose{' '}
            <span className="text-[#008F8C]">Uniquo Media</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-4 text-base sm:text-lg text-[#061315]/75 font-normal"
          >
            Modern businesses partner with us because we replace guesswork with systematic, measurable revenue growth.
          </motion.p>
        </div>

        {/* Staggered Cards: Odd from left (x: -40 -> 0), Even from right (x: 40 -> 0) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, idx) => {
            const isOdd = idx % 2 === 0;
            const Icon = item.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: isOdd ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.65, delay: idx * 0.09, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-3xl p-8 bg-white border border-[#061315]/10 shadow-[0_10px_30px_rgba(6,19,21,0.06)] hover:shadow-[0_20px_40px_rgba(0,143,140,0.18)] transition-all duration-400 hover:-translate-y-2 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Top Row: Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    {/* Number: switches from outline style to gold-filled */}
                    <span className="font-heading font-black text-3xl sm:text-4xl text-transparent [-webkit-text-stroke:1.5px_#008F8C] group-hover:text-[#E5A43A] group-hover:[-webkit-text-stroke:0px] transition-all duration-300">
                      {item.num}
                    </span>

                    <div className="w-12 h-12 rounded-2xl bg-[#008F8C]/10 text-[#008F8C] group-hover:bg-[#E5A43A]/20 group-hover:text-[#E5A43A] flex items-center justify-center transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-heading font-bold text-xl text-[#061315] mb-3 group-hover:text-[#008F8C] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#061315]/70 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Gold Line expanding width 0 -> 100% on hover */}
                <div className="relative mt-6 pt-4">
                  <div className="w-full h-0.5 bg-black/5 rounded-full overflow-hidden">
                    <div className="h-full w-0 group-hover:w-full bg-gradient-to-r from-[#008F8C] to-[#E5A43A] transition-all duration-500 ease-out" />
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
