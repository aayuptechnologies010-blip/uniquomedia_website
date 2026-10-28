import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Clock, Tag } from 'lucide-react';
import PremiumButton from '../components/PremiumButton';
import CTASection from '../components/CTASection';

const articles = [
  {
    id: 1,
    title: 'The Death of Vanity Metrics: Why High-Growth Brands Track Qualified Pipeline Only',
    excerpt: 'How leading enterprise marketing executives shifted their focus from superficial impressions to unit economics, conversion velocity, and true customer acquisition cost.',
    category: 'Performance Marketing',
    readTime: '6 min read',
    date: 'Oct 24, 2026',
    author: 'Aayup K.',
    tag: 'Executive Strategy',
    accent: '#008F8C',
  },
  {
    id: 2,
    title: 'Meta & Google Ads in 2026: Navigating Algorithmic Saturation and Ad Fatigue',
    excerpt: 'A technical teardown of how creative sprint frameworks, dynamic testing sandboxes, and first-party data capture keep ROAS soaring above 5x in competitive industries.',
    category: 'Paid Media',
    readTime: '8 min read',
    date: 'Oct 18, 2026',
    author: 'Rohan Verma',
    tag: 'Paid Acquisition',
    accent: '#E5A43A',
  },
  {
    id: 3,
    title: 'Semantic SEO Mastery: Outranking High-Authority Competitors in Modern Search',
    excerpt: 'Traditional keyword stuffing is obsolete. Discover the multi-layered topical graph strategies that generated 120,000+ high-intent monthly visitors for our clients.',
    category: 'SEO & Inbound',
    readTime: '5 min read',
    date: 'Oct 10, 2026',
    author: 'Uniquo Research Team',
    tag: 'Organic Growth',
    accent: '#FFD67A',
  },
  {
    id: 4,
    title: 'Visual Identity That Converts: Why Dark Luxury Aesthetics Command Higher Pricing',
    excerpt: 'An investigation into consumer behavioral psychology, perceived product valuation, and how elevated visual design directly impacts landing page transaction volume.',
    category: 'Branding & UX',
    readTime: '7 min read',
    date: 'Sep 29, 2026',
    author: 'Devika Sharma',
    tag: 'Brand Architecture',
    accent: '#008F8C',
  },
  {
    id: 5,
    title: 'Omnichannel Retargeting: Building Invisible Nets That Recapture 35% of Lost Leads',
    excerpt: 'Step-by-step implementation guide to coordinating programmatic display, Meta sequential ads, and instant SMS follow-ups for high-ticket buyers.',
    category: 'Conversion Optimization',
    readTime: '9 min read',
    date: 'Sep 15, 2026',
    author: 'Rohan Verma',
    tag: 'Retention',
    accent: '#E5A43A',
  },
  {
    id: 6,
    title: 'Real Estate Marketing Playbook: Generating $14M in Ultra-Luxury Residential Bookings',
    excerpt: 'Deep-dive tactical breakdown into NRI investor targeting, architectural 3D walkthrough funnels, and verified WhatsApp lead qualification scripts.',
    category: 'Case Breakdown',
    readTime: '11 min read',
    date: 'Sep 02, 2026',
    author: 'Aayup K.',
    tag: 'High-Ticket Funnel',
    accent: '#FFD67A',
  },
];

export const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Performance Marketing', 'Paid Media', 'SEO & Inbound', 'Branding & UX', 'Case Breakdown'];

  const filteredArticles = activeCategory === 'All' 
    ? articles 
    : articles.filter(a => a.category === activeCategory);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="pt-28 pb-16"
    >
      {/* Header */}
      <section className="relative py-16 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-[#008F8C]/15 blur-[150px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#008F8C]/15 border border-[#008F8C]/40 text-[#FFD67A] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            GROWTH INTELLIGENCE & RESEARCH
          </div>

          <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-[#F6F0E5] leading-tight max-w-4xl mx-auto">
            Insights For Founders Who Want{' '}
            <span className="text-gradient-teal-gold">
              To Outpace The Market.
            </span>
          </h1>

          <p className="mt-6 text-lg text-[#AAB8B8] max-w-2xl mx-auto">
            Actionable marketing frameworks, algorithmic teardowns, and growth strategies written directly by our senior partners.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-[#008F8C] to-[#006B69] text-white border border-[#008F8C] shadow-[0_0_15px_rgba(0,143,140,0.4)]'
                    : 'bg-[#0A1D1E] text-[#AAB8B8] border border-white/10 hover:border-[#E5A43A] hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((art) => (
              <article
                key={art.id}
                className="group relative rounded-3xl p-8 bg-[#0A1D1E] border border-white/10 hover:border-[#E5A43A] transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,143,140,0.2)] flex flex-col justify-between overflow-hidden"
              >
                {/* Signature Teal Rise Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#008F8C] via-[#006B69] to-[#0A1D1E] translate-y-full group-hover:translate-y-0 transition-transform duration-450 ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-none z-0" />

                <div className="relative z-10">
                  {/* Category & Read Time */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#FFD67A] px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                      {art.category}
                    </span>
                    <span className="text-xs text-[#AAB8B8] group-hover:text-white flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {art.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-xl text-[#F6F0E5] group-hover:text-white transition-colors mb-3 leading-snug">
                    {art.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs text-[#AAB8B8] group-hover:text-[#F6F0E5]/90 transition-colors leading-relaxed font-normal mb-6">
                    {art.excerpt}
                  </p>
                </div>

                {/* Footer Author & Link */}
                <div className="relative z-10 pt-4 border-t border-white/10 group-hover:border-white/20 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-[#AAB8B8] group-hover:text-white">
                    <div className="w-6 h-6 rounded-full bg-[#008F8C]/20 flex items-center justify-center text-[10px] font-bold text-[#FFD67A]">
                      {art.author[0]}
                    </div>
                    <span>{art.author}</span>
                  </div>

                  <span className="text-xs font-semibold text-[#008F8C] group-hover:text-[#FFD67A] flex items-center gap-1 transition-colors">
                    Read Article <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </motion.div>
  );
};

export default BlogPage;
