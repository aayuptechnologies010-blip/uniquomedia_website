import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, TrendingUp, BarChart, Users, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import PremiumButton from './PremiumButton';

const projects = [
  {
    id: 1,
    industry: 'Automotive & Consumer',
    category: 'Influencer Marketing & Video Scripting',
    client: 'Bajaj',
    logo: '/logos/bajaj.svg',
    result: '+18.4M Reach & 4.8x Campaign ROI',
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1000&q=80',
    metrics: [
      { label: 'Total Reach', value: '18.4M+' },
      { label: 'Creator Collabs', value: '45+' },
      { label: 'Campaign ROI', value: '4.8x' },
    ],
    accentColor: '#0055A5',
    summary: 'Engineered nationwide creator storytelling campaign, viral scripted Reels, and festive video production that drove record product test drives and digital footfalls.',
  },
  {
    id: 2,
    industry: 'OTT & Entertainment',
    category: 'Viral Content Creation & Video Edition',
    client: 'JioHotstar',
    logo: '/logos/jiohotstar.svg',
    result: '45M+ Organic Reach & #1 Trending',
    image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=1000&q=80',
    metrics: [
      { label: 'Organic Impressions', value: '45M+' },
      { label: 'Avg Watch Time', value: '92%' },
      { label: 'Subscriber Uplift', value: '+34%' },
    ],
    accentColor: '#00E5A3',
    summary: 'Scripted and edited high-velocity pop-culture video content and multi-platform influencer hype engines for marquee OTT show launches.',
  },
  {
    id: 3,
    industry: 'Consumer Tech & Mobile',
    category: 'Tech Influencer & Scripted Unboxing',
    client: 'Xiaomi',
    logo: '/logos/xiaomi.svg',
    result: '12.8M Views & 3.4x Pre-Orders',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1000&q=80',
    metrics: [
      { label: 'Flagship Pre-Orders', value: '3.4x' },
      { label: 'Total Views', value: '12.8M' },
      { label: 'Engagement Rate', value: '16.5%' },
    ],
    accentColor: '#FF6900',
    summary: 'End-to-end creative scripting, top tier tech influencer onboarding, and dynamic fast-paced video edits for flagship smartphone launch.',
  },
  {
    id: 4,
    industry: 'Eco-Friendly D2C',
    category: 'Performance & Influencer Marketing',
    client: 'Beco',
    logo: '/logos/beco.svg',
    result: '+280% Sales Growth & 5.6x ROAS',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1000&q=80',
    metrics: [
      { label: 'Blended ROAS', value: '5.6x' },
      { label: 'Sales Growth', value: '+280%' },
      { label: 'Influencer Reach', value: '8.5M+' },
    ],
    accentColor: '#138A56',
    summary: 'Built relatable UGC creator videos and scripted sustainability hook ads paired with dynamic video editing that drove direct conversions and recurring orders.',
  },
  {
    id: 5,
    industry: 'Clothing & Men\'s Fashion',
    category: 'Lookbook Scripting & High-Energy Video Edits',
    client: 'Snitch',
    logo: '/logos/snitch.svg',
    result: '22M+ Views & 6.2x Blended ROAS',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1000&q=80',
    metrics: [
      { label: 'Video Views', value: '22M+' },
      { label: 'Blended ROAS', value: '6.2x' },
      { label: 'Catalog Lift', value: '+45%' },
    ],
    accentColor: '#E5A43A',
    summary: 'High-tempo apparel lookbooks, rapid transitions, trendy music synchronization, and streetwear influencer seeding across India.',
  },
  {
    id: 6,
    industry: 'Youth Streetwear',
    category: 'Relatable Scripted Skits & Creator Drops',
    client: 'Bewakoof',
    logo: '/logos/bewakoof.svg',
    result: '15M+ Engagement & +42% Conversions',
    image: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&w=1000&q=80',
    metrics: [
      { label: 'Total Engagement', value: '15M+' },
      { label: 'Conversion Lift', value: '+42%' },
      { label: 'Viral Reels', value: '38+' },
    ],
    accentColor: '#FDD835',
    summary: 'Engineered relatable college skits, meme marketing campaigns, and creator UGC challenges resulting in widespread viral brand resonance.',
  },
];

export const PortfolioSection = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const filters = ['All', 'Influencer Marketing', 'Video Production', 'Performance Ads'];

  return (
    <section id="portfolio" className="relative py-28 bg-[#061315] overflow-hidden border-t border-[#008F8C]/20">
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#008F8C]/12 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-[#E5A43A]/10 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#008F8C]/20 to-[#FFD67A]/20 border border-[#FFD67A]/40 text-[#FFD67A] text-xs font-bold tracking-[0.2em] uppercase mb-4 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FFD67A]" />
            PROVEN TRACK RECORD
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-[#F6F0E5] leading-tight"
          >
            Work That Transformed Brand Trajectories.{' '}
            <span className="text-gradient-teal-gold block sm:inline">
              Real Data. Real ROAS.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-5 text-sm sm:text-lg text-[#AAB8B8] max-w-2xl leading-relaxed font-normal"
          >
            Explore case studies from industry titans and high-growth consumer labels who scaled with Uniquo Media's creator and performance engines.
          </motion.p>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl bg-gradient-to-b from-[#0F282A] to-[#071719] border border-white/15 hover:border-[#FFD67A]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_50px_rgba(0,143,140,0.25)]"
            >
              {/* Image Preview with Dark Gradient Overlay */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                <img
                  src={item.image}
                  alt={item.client}
                  className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700 ease-out brightness-90 contrast-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071719] via-[#071719]/40 to-transparent" />

                {/* Brand Logo Floating Badge */}
                <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-xl bg-[#061315]/90 border border-white/15 backdrop-blur-md shadow-lg flex items-center gap-2">
                  <img src={item.logo} alt={item.client} className="h-5 w-auto object-contain max-w-[80px]" />
                </div>

                {/* Top Right Result Tag */}
                <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-[#008F8C]/80 backdrop-blur-md text-white text-[11px] font-bold shadow-md">
                  {item.result.split('&')[0]}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 relative z-10">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-bold text-[#FFD67A] uppercase tracking-wider">
                      {item.industry}
                    </span>
                    <div className="w-7 h-7 rounded-full bg-white/5 group-hover:bg-[#FFD67A]/20 flex items-center justify-center text-[#AAB8B8] group-hover:text-[#FFD67A] transition-all">
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>

                  <h3 className="font-heading font-black text-2xl text-[#F6F0E5] group-hover:text-[#FFD67A] transition-colors mb-2">
                    {item.client}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#AAB8B8] leading-relaxed line-clamp-3 mb-6">
                    {item.summary}
                  </p>
                </div>

                {/* 3 Metric Pills */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/10">
                  {item.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="p-2.5 rounded-xl bg-black/40 border border-white/5 text-center">
                      <span className="text-xs sm:text-sm font-black font-heading text-[#FFD67A] block">
                        {m.value}
                      </span>
                      <span className="text-[9px] text-[#AAB8B8] block mt-0.5 font-medium leading-tight">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Campaigns Button */}
        <div className="mt-16 text-center">
          <PremiumButton href="/portfolio" variant="primary" icon="arrow" className="text-sm px-8 py-4">
            View All Verified Brand Case Studies
          </PremiumButton>
        </div>

      </div>
    </section>
  );
};

export default PortfolioSection;
