import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight, TrendingUp, CheckCircle2 } from 'lucide-react';

const brands = [
  {
    name: 'Bajaj',
    logo: '/logos/bajaj.svg',
    category: 'Automotive & Consumer',
    type: 'Recent Successful Campaign',
    metric: '+18.4M Reach',
    highlight: 'Festive Video & Creator Storytelling Campaign',
    accent: '#0055A5',
    glowColor: 'rgba(0, 85, 165, 0.35)',
    badge: '4.8x Campaign ROI',
  },
  {
    name: 'JioHotstar',
    logo: '/logos/jiohotstar.svg',
    category: 'OTT & Entertainment',
    type: 'Recent Successful Campaign',
    metric: '45M+ Impressions',
    highlight: 'Viral Content & Creator Hype Engine',
    accent: '#00E5A3',
    glowColor: 'rgba(0, 229, 163, 0.35)',
    badge: '#1 Trending Launch',
  },
  {
    name: 'Xiaomi',
    logo: '/logos/xiaomi.svg',
    category: 'Tech & Smartphones',
    type: 'Recent Successful Campaign',
    metric: '12.8M Views',
    highlight: 'Scripted Unboxing & Creator Reels',
    accent: '#FF6900',
    glowColor: 'rgba(255, 105, 0, 0.35)',
    badge: '3.4x Pre-Orders',
  },
  {
    name: 'Beco',
    logo: '/logos/beco.svg',
    category: 'Eco-Friendly D2C',
    type: 'Recent Successful Campaign',
    metric: '+280% Sales',
    highlight: 'UGC Creator & High-ROAS Performance Ads',
    accent: '#138A56',
    glowColor: 'rgba(19, 138, 86, 0.35)',
    badge: '5.6x ROAS',
  },
  {
    name: 'Snitch',
    logo: '/logos/snitch.svg',
    category: 'Men\'s Fast Fashion',
    type: 'Clothing Brand Campaign',
    metric: '22M+ Views',
    highlight: 'Lookbook Scripting & High-Energy Video Edits',
    accent: '#E5A43A',
    glowColor: 'rgba(229, 164, 58, 0.35)',
    badge: '6.2x Blended ROAS',
  },
  {
    name: 'Bewakoof',
    logo: '/logos/bewakoof.svg',
    category: 'Youth Streetwear',
    type: 'Clothing Brand Campaign',
    metric: '15M+ Engagement',
    highlight: 'Relatable Scripted Skits & Creator Drops',
    accent: '#FDD835',
    glowColor: 'rgba(253, 216, 53, 0.35)',
    badge: '+42% Conversions',
  },
  {
    name: 'Rare Rabbit',
    logo: '/logos/rarerabbit.svg',
    category: 'Luxury Menswear',
    type: 'Clothing Brand Campaign',
    metric: '8.2M Impressions',
    highlight: 'Cinematic Video Edition & Premium Storytelling',
    accent: '#D4AF37',
    glowColor: 'rgba(212, 175, 55, 0.35)',
    badge: '3.1x Cart Growth',
  },
  {
    name: 'FabIndia',
    logo: '/logos/fabindia.svg',
    category: 'Ethnic Lifestyle & Fashion',
    type: 'Clothing Brand Campaign',
    metric: '14.5M Reach',
    highlight: 'Influencer Collabs & Heritage Narrative Videos',
    accent: '#871834',
    glowColor: 'rgba(135, 24, 52, 0.35)',
    badge: '94% Retention',
  },
];

export const BrandShowcase = () => {
  return (
    <section className="relative pt-6 sm:pt-10 pb-16 sm:pb-20 bg-[#061315] border-y border-[#008F8C]/20 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[480px] h-[480px] bg-[#008F8C]/12 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 translate-y-1/2 w-[480px] h-[480px] bg-[#E5A43A]/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-14 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#008F8C]/15 border border-[#008F8C]/40 text-[#FFD67A] text-xs font-semibold tracking-[0.2em] uppercase mb-4 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FFD67A]" />
              VERIFIED BRAND PARTNERSHIPS
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-heading font-black text-2xl sm:text-4xl lg:text-5xl text-[#F6F0E5] leading-tight"
            >
              Recent Campaigns With{' '}
              <span className="text-gradient-teal-gold">
                Top Brands &amp; Creators
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs sm:text-sm text-[#AAB8B8] max-w-md font-normal leading-relaxed"
          >
            Proven high-scale campaigns delivered for household industry giants &amp; apparel leaders — powered by viral scripting, influencer marketing, high-tempo video editing &amp; paid ads.
          </motion.p>
        </div>

        {/* Brand Cards Grid - High Contrast, Visible Brand Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {brands.map((b, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl bg-gradient-to-b from-[#0F282A] to-[#071719] border border-white/15 hover:border-[#FFD67A]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_45px_rgba(0,143,140,0.25)]"
            >
              {/* Top ambient brand color light beam */}
              <div
                className="absolute -top-16 left-1/2 -translate-x-1/2 w-36 h-36 rounded-full blur-[45px] opacity-25 group-hover:opacity-75 transition-opacity duration-300 pointer-events-none"
                style={{ backgroundColor: b.accent }}
              />

              {/* Dynamic Accent top line */}
              <div
                className="absolute top-0 left-0 right-0 h-[2.5px] opacity-70 group-hover:opacity-100 transition-opacity"
                style={{
                  background: `linear-gradient(90deg, transparent, ${b.accent}, #FFD67A, transparent)`,
                }}
              />

              <div className="p-5 sm:p-6 relative z-10">
                {/* Header: Category Badge + Arrow */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-white/10 border border-white/10 text-[#FFD67A] group-hover:border-[#FFD67A]/40 transition-colors">
                    {b.type}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white/5 group-hover:bg-[#FFD67A]/20 flex items-center justify-center text-[#AAB8B8] group-hover:text-[#FFD67A] transition-all">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                {/* PROMINENT BRAND LOGO SHOWCASE STAGE */}
                <div className="relative h-24 w-full rounded-xl bg-gradient-to-b from-white/[0.08] to-black/40 border border-white/15 group-hover:border-[#FFD67A]/50 p-3.5 flex items-center justify-center transition-all duration-300 group-hover:bg-black/60 shadow-inner mb-5 overflow-hidden">
                  {/* Subtle brand glow behind logo on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    style={{ backgroundColor: b.accent }}
                  />

                  <img
                    src={b.logo}
                    alt={`${b.name} Logo`}
                    className="h-full w-auto max-w-[90%] object-contain filter brightness-110 drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Brand Name & Industry */}
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-heading font-black text-2xl text-[#F6F0E5] group-hover:text-[#FFD67A] transition-colors tracking-tight">
                    {b.name}
                  </h3>
                  <span className="text-xs font-semibold text-[#008F8C] group-hover:text-[#FFD67A] transition-colors">
                    {b.category}
                  </span>
                </div>

                {/* Highlight Description */}
                <p className="text-xs sm:text-[13px] text-[#AAB8B8] mt-2.5 line-clamp-2 leading-relaxed">
                  {b.highlight}
                </p>
              </div>

              {/* Bottom Result & Metric Bar */}
              <div className="p-4 sm:px-6 sm:py-4 bg-black/40 border-t border-white/10 flex items-center justify-between relative z-10">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#AAB8B8] block">Campaign Result</span>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <TrendingUp className="w-3.5 h-3.5 text-[#00E5A3]" />
                    <span className="text-base font-extrabold text-[#FFD67A] font-heading">{b.metric}</span>
                  </div>
                </div>

                <span
                  className="text-[11px] font-bold px-2.5 py-1 rounded-md text-white border shadow-sm"
                  style={{
                    backgroundColor: `${b.accent}33`,
                    borderColor: `${b.accent}88`,
                  }}
                >
                  {b.badge}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Infinite Loop Marquee with Original Logos - Fast Speed & Pause on Hover */}
        <div className="mt-14 py-4 px-4 sm:px-6 rounded-2xl bg-[#0A1D1E]/80 border border-white/15 backdrop-blur-md overflow-hidden marquee-container shadow-lg">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <span className="text-xs font-bold tracking-widest uppercase text-[#FFD67A] whitespace-nowrap flex items-center gap-2 shrink-0">
              <span className="w-2 h-2 rounded-full bg-[#008F8C] animate-ping" />
              Campaigns Executed For:
            </span>

            {/* Continuous Marquee Track */}
            <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
              <div className="marquee-track flex items-center gap-10 sm:gap-14 cursor-pointer">
                {[...brands, ...brands].map((b, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 shrink-0 opacity-80 hover:opacity-100 transition-opacity duration-200"
                    title={b.name}
                  >
                    <img
                      src={b.logo}
                      alt={b.name}
                      className="h-7 sm:h-8 w-auto object-contain max-w-[110px] filter drop-shadow-sm brightness-110"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BrandShowcase;
