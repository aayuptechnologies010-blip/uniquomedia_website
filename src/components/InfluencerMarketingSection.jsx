import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users,
  Sparkles,
  TrendingUp,
  Video,
  PenTool,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  BarChart3,
  Sliders,
  Play,
  Layers,
  Award,
  ArrowUpRight,
  Flame,
} from 'lucide-react';
import PremiumButton from './PremiumButton';

const creatorTiers = [
  {
    tier: 'Nano Creators',
    range: '10K – 50K Followers',
    engagement: '8.4% Avg Engagement',
    strengths: 'Hyper-focused community trust, authentic word-of-mouth & highest conversion rates.',
    bestFor: 'D2C niche trials, localized campaigns, high-volume UGC testbeds.',
    icon: Users,
    accent: '#008F8C',
    gradient: 'from-[#008F8C]/20 to-transparent',
  },
  {
    tier: 'Micro Creators',
    range: '50K – 250K Followers',
    engagement: '5.8% Avg Engagement',
    strengths: 'Established niche authority, cult-like follower affinity & persuasive product reviews.',
    bestFor: 'Fashion lookbooks (Snitch, Bewakoof), beauty, sustainable lifestyle (Beco).',
    icon: Sparkles,
    accent: '#FFD67A',
    gradient: 'from-[#FFD67A]/20 to-transparent',
  },
  {
    tier: 'Macro Creators',
    range: '250K – 1M Followers',
    engagement: '3.9% Avg Engagement',
    strengths: 'Multi-city cultural velocity, high-production reels, massive organic reach spikes.',
    bestFor: 'Product launches, seasonal festive campaigns (Bajaj), high-growth brand scaling.',
    icon: Zap,
    accent: '#E5A43A',
    gradient: 'from-[#E5A43A]/20 to-transparent',
  },
  {
    tier: 'Mega & Celebrities',
    range: '1M+ Followers',
    engagement: '2.5% Avg Engagement',
    strengths: 'Household name status, nationwide trendsetting, instant brand prestige and credibility.',
    bestFor: 'OTT marquee show hype (JioHotstar), flagship smartphone launches (Xiaomi).',
    icon: Award,
    accent: '#00E5A3',
    gradient: 'from-[#00E5A3]/20 to-transparent',
  },
];

const campaignWorkflow = [
  {
    step: '01',
    title: 'Data-Driven Creator Vetting',
    desc: 'Audience credibility checks, bot-free verification, and demographic mapping ensuring your budget targets real buyers.',
    icon: ShieldCheck,
    highlight: 'Zero Fake Followers',
  },
  {
    step: '02',
    title: 'High-Hook Viral Scripting',
    desc: 'Our writers engineer high-retention hooks and storyboards so creators deliver organic product mentions that convert.',
    icon: PenTool,
    highlight: '68% Hook Rate',
  },
  {
    step: '03',
    title: 'Cinematic Post-Production',
    desc: 'Snappy pacing, color grading, dynamic sound design, and subtitle typography tuned specifically for Reels & YouTube Shorts.',
    icon: Video,
    highlight: 'Viral Pacing',
  },
  {
    step: '04',
    title: 'Paid Media Whitelisting & Spark Ads',
    desc: 'We amplify top organic creator videos into Meta & YouTube ad sets delivering 3x–5x higher ROAS than standard studio ads.',
    icon: TrendingUp,
    highlight: '4.8x Avg ROAS',
  },
  {
    step: '05',
    title: 'Live Tracking & Attributed Revenue',
    desc: 'Real-time dashboard tracking impressions, click-throughs, coupon redemptions, and exact blended customer acquisition costs.',
    icon: BarChart3,
    highlight: '100% Attribution',
  },
];

const niches = [
  { name: 'Fashion & Apparel', count: '180+ Creators', brands: 'Snitch, Bewakoof, Rare Rabbit', icon: '👗', growth: '+34%' },
  { name: 'Consumer Tech & Mobile', count: '90+ Creators', brands: 'Xiaomi, Gadgets & Audio', icon: '📱', growth: '+28%' },
  { name: 'Entertainment & OTT', count: '120+ Creators', brands: 'JioHotstar, Pop Culture', icon: '🎬', growth: '+52%' },
  { name: 'Eco-Friendly & D2C', count: '110+ Creators', brands: 'Beco, Natural Living', icon: '🌿', growth: '+41%' },
  { name: 'Automotive & Mobility', count: '65+ Creators', brands: 'Bajaj, Biking & Lifestyle', icon: '🏍️', growth: '+30%' },
  { name: 'Fitness & Wellness', count: '85+ Creators', brands: 'Activewear & Nutrition', icon: '⚡', growth: '+38%' },
];

export const InfluencerMarketingSection = () => {
  const [activeTab, setActiveTab] = useState('brands'); // 'brands' or 'creators'
  const [calculatorTier, setCalculatorTier] = useState('Micro');
  const [creatorCount, setCreatorCount] = useState(15);

  const getCalculatedMetrics = () => {
    let reachPerCreator = 85000;
    let viewsPerCreator = 38000;
    let baseEngagement = '5.8%';
    let avgRoas = '5.2x';

    if (calculatorTier === 'Nano') {
      reachPerCreator = 30000;
      viewsPerCreator = 18000;
      baseEngagement = '8.4%';
      avgRoas = '4.6x';
    } else if (calculatorTier === 'Micro') {
      reachPerCreator = 95000;
      viewsPerCreator = 48000;
      baseEngagement = '5.8%';
      avgRoas = '5.4x';
    } else if (calculatorTier === 'Macro') {
      reachPerCreator = 420000;
      viewsPerCreator = 190000;
      baseEngagement = '4.1%';
      avgRoas = '4.9x';
    } else if (calculatorTier === 'Mega') {
      reachPerCreator = 1250000;
      viewsPerCreator = 580000;
      baseEngagement = '2.8%';
      avgRoas = '4.2x';
    }

    const totalReach = ((reachPerCreator * creatorCount) / 1000000).toFixed(1) + 'M+';
    const totalViews = ((viewsPerCreator * creatorCount) / 1000).toFixed(0) + 'K+';

    return { totalReach, totalViews, baseEngagement, avgRoas };
  };

  const calculated = getCalculatedMetrics();

  return (
    <section id="influencer-marketing" className="relative py-24 sm:py-32 bg-[#061315] overflow-hidden border-t border-[#008F8C]/25">
      {/* Dynamic Background Light Orbs */}
      <div className="absolute top-1/4 -right-40 w-[550px] h-[550px] bg-[#008F8C]/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-40 w-[550px] h-[550px] bg-[#E5A43A]/12 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-2/3 right-1/3 w-[350px] h-[350px] bg-[#00E5A3]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Glowing Pill */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#008F8C]/20 via-[#FFD67A]/20 to-[#E5A43A]/20 border border-[#FFD67A]/40 text-[#FFD67A] text-xs font-bold tracking-[0.2em] uppercase mb-5 shadow-[0_0_25px_rgba(255,214,122,0.15)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FFD67A]" />
            CREATOR &amp; INFLUENCER MARKETING POWERHOUSE
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-[#F6F0E5] leading-tight"
          >
            Turning Creator Influence Into{' '}
            <span className="text-gradient-teal-gold block sm:inline">
              Predictable Brand Revenue.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 text-sm sm:text-lg text-[#AAB8B8] max-w-2xl leading-relaxed font-normal"
          >
            House of Creators-inspired model: We bridge ambitious brands with India’s top creators across YouTube, Instagram &amp; LinkedIn — eliminating fake followers, opaque pricing, and clunky management.
          </motion.p>

          {/* Interactive Dual Switcher Pill */}
          <div className="mt-8 p-1.5 rounded-full bg-[#0A1D1E] border border-white/15 flex items-center gap-2 shadow-xl">
            <button
              onClick={() => setActiveTab('brands')}
              className={`px-6 sm:px-8 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                activeTab === 'brands'
                  ? 'bg-gradient-to-r from-[#008F8C] to-[#006B69] text-white shadow-[0_0_20px_rgba(0,143,140,0.5)]'
                  : 'text-[#AAB8B8] hover:text-[#F6F0E5]'
              }`}
            >
              <Zap className="w-4 h-4 text-[#FFD67A]" />
              For Brands &amp; Marketers
            </button>
            <button
              onClick={() => setActiveTab('creators')}
              className={`px-6 sm:px-8 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                activeTab === 'creators'
                  ? 'bg-gradient-to-r from-[#FFD67A] to-[#E5A43A] text-[#061315] shadow-[0_0_20px_rgba(229,164,58,0.5)]'
                  : 'text-[#AAB8B8] hover:text-[#F6F0E5]'
              }`}
            >
              <Flame className="w-4 h-4 text-orange-500" />
              For Creators &amp; Talent
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        <AnimatePresence mode="wait">
          {activeTab === 'brands' ? (
            <motion.div
              key="brands-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-20"
            >
              {/* 4-Tier Creator Architecture Cards */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
                  <div>
                    <span className="text-xs font-bold text-[#FFD67A] uppercase tracking-widest flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#008F8C] animate-pulse" />
                      Tiered Talent Network
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black font-heading text-[#F6F0E5] mt-1">
                      From Hyper-Niche Micro to National Celebrities
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#AAB8B8] max-w-sm">
                    Pre-vetted creator roster segmented by audience demographics, fraud scores, and content vertical.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {creatorTiers.map((t, idx) => {
                    const Icon = t.icon;
                    return (
                      <motion.div
                        key={idx}
                        whileHover={{ y: -7 }}
                        transition={{ duration: 0.3 }}
                        className="group relative rounded-2xl p-6 sm:p-7 bg-gradient-to-b from-[#0F282A] to-[#071719] border border-white/15 hover:border-[#FFD67A]/60 transition-all duration-300 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(0,143,140,0.25)] overflow-hidden"
                      >
                        {/* Glow Beam on Card Top */}
                        <div
                          className="absolute -top-12 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full blur-[40px] opacity-20 group-hover:opacity-70 transition-opacity pointer-events-none"
                          style={{ backgroundColor: t.accent }}
                        />

                        {/* Top Accent Line */}
                        <div
                          className="absolute top-0 left-0 right-0 h-[2.5px] opacity-60 group-hover:opacity-100 transition-opacity"
                          style={{
                            background: `linear-gradient(90deg, transparent, ${t.accent}, transparent)`,
                          }}
                        />

                        <div className="relative z-10">
                          <div className="flex items-center justify-between mb-5">
                            <div
                              className="w-12 h-12 rounded-xl flex items-center justify-center border shadow-md transition-all duration-300 group-hover:scale-110"
                              style={{
                                backgroundColor: `${t.accent}20`,
                                borderColor: `${t.accent}55`,
                                color: t.accent,
                              }}
                            >
                              <Icon className="w-6 h-6" />
                            </div>

                            <span
                              className="text-[11px] font-bold px-2.5 py-1 rounded-full border shadow-sm"
                              style={{
                                backgroundColor: `${t.accent}15`,
                                borderColor: `${t.accent}40`,
                                color: t.accent,
                              }}
                            >
                              {t.engagement}
                            </span>
                          </div>

                          <h4 className="text-xl font-black font-heading text-[#F6F0E5] group-hover:text-[#FFD67A] transition-colors mb-1">
                            {t.tier}
                          </h4>
                          <span className="text-xs font-bold text-[#008F8C] block mb-3 font-heading">
                            {t.range}
                          </span>

                          <p className="text-xs text-[#AAB8B8] leading-relaxed mb-5">
                            {t.strengths}
                          </p>
                        </div>

                        <div className="pt-4 border-t border-white/10 relative z-10">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#FFD67A] block mb-1">
                            Best Used For:
                          </span>
                          <p className="text-xs text-[#F6F0E5]/80 font-medium">
                            {t.bestFor}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* 5-Step Campaign Pipeline with Glowing Connectors */}
              <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#0A1D1E] to-[#061315] border border-[#008F8C]/40 shadow-[0_20px_50px_rgba(0,0,0,0.7)] relative overflow-hidden">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#008F8C]/10 blur-[130px] pointer-events-none" />

                <div className="text-center max-w-2xl mx-auto mb-12 relative z-10">
                  <span className="text-xs font-bold text-[#FFD67A] uppercase tracking-widest px-3 py-1 rounded-full bg-[#008F8C]/20 border border-[#008F8C]/40 inline-block mb-3">
                    End-to-End Campaign Execution
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-black font-heading text-[#F6F0E5]">
                    The 5-Step Influencer Campaign Engine
                  </h3>
                  <p className="text-xs sm:text-sm text-[#AAB8B8] mt-2">
                    How Uniquo Media coordinates hundreds of creators into a seamless, high-ROI launch for brands like Bajaj, JioHotstar, Xiaomi &amp; Beco.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-5 relative z-10">
                  {campaignWorkflow.map((step, idx) => {
                    const Icon = step.icon;
                    return (
                      <motion.div
                        key={idx}
                        whileHover={{ y: -5 }}
                        className="group relative p-6 rounded-2xl bg-[#061315] border border-white/10 hover:border-[#008F8C] transition-all flex flex-col justify-between shadow-lg"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-2xl font-black font-heading text-[#008F8C]/70 group-hover:text-[#008F8C] transition-colors">
                            {step.step}
                          </span>
                          <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FFD67A] group-hover:bg-[#008F8C]/30 transition-colors">
                            <Icon className="w-4 h-4" />
                          </div>
                        </div>

                        <div>
                          <h4 className="text-sm font-bold font-heading text-[#F6F0E5] mb-2 leading-snug group-hover:text-[#FFD67A] transition-colors">
                            {step.title}
                          </h4>
                          <p className="text-[11px] text-[#AAB8B8] leading-relaxed mb-4">
                            {step.desc}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-white/5 flex items-center gap-1.5 text-[10px] font-bold text-[#00E5A3]">
                          <CheckCircle2 className="w-3 h-3 text-[#00E5A3]" />
                          <span>{step.highlight}</span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Interactive Influencer Campaign ROI Estimator */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0F282A] via-[#0A1D1E] to-[#061315] border border-[#FFD67A]/40 shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(229,164,58,0.15)] relative overflow-hidden">
                
                {/* Left Controls */}
                <div className="lg:col-span-6 space-y-6">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5A43A]/15 border border-[#E5A43A]/30 text-[#FFD67A] text-[11px] font-bold uppercase tracking-wider mb-2">
                      <Sliders className="w-3.5 h-3.5" />
                      LIVE CAMPAIGN CALCULATOR
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black font-heading text-[#F6F0E5]">
                      Simulate Your Campaign Reach &amp; ROI
                    </h3>
                    <p className="text-xs sm:text-sm text-[#AAB8B8] mt-1">
                      Select your target creator tier and roster size to project estimated video reach, engagement, and conversion lift.
                    </p>
                  </div>

                  {/* Tier Buttons */}
                  <div>
                    <label className="text-xs font-semibold text-[#AAB8B8] block mb-2">
                      Select Creator Tier:
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {['Nano', 'Micro', 'Macro', 'Mega'].map((tName) => (
                        <button
                          key={tName}
                          onClick={() => setCalculatorTier(tName)}
                          className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                            calculatorTier === tName
                              ? 'bg-gradient-to-r from-[#FFD67A] to-[#E5A43A] text-[#061315] shadow-lg font-black scale-105'
                              : 'bg-white/5 text-[#F6F0E5] hover:bg-white/10 border border-white/10'
                          }`}
                        >
                          {tName}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Creator Count Slider */}
                  <div>
                    <div className="flex justify-between items-center text-xs mb-2">
                      <span className="font-semibold text-[#AAB8B8]">Number of Creators in Campaign:</span>
                      <span className="font-bold text-[#FFD67A] text-base font-heading px-2.5 py-0.5 rounded-full bg-[#E5A43A]/20 border border-[#E5A43A]/40">{creatorCount} Creators</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="60"
                      step="5"
                      value={creatorCount}
                      onChange={(e) => setCreatorCount(parseInt(e.target.value, 10))}
                      className="w-full h-2.5 bg-[#061315] rounded-lg appearance-none cursor-pointer accent-[#FFD67A]"
                    />
                    <div className="flex justify-between text-[11px] text-[#AAB8B8] mt-1.5 font-semibold">
                      <span>5 Creators</span>
                      <span>30 Creators</span>
                      <span>60 Creators</span>
                    </div>
                  </div>

                  <PremiumButton href="/contact" variant="primary" icon="arrow" className="w-full justify-center text-sm py-3.5">
                    Book Custom Influencer Discovery Session
                  </PremiumButton>
                </div>

                {/* Right Result Display */}
                <div className="lg:col-span-6 bg-[#061315]/95 border border-white/15 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
                  <div className="text-xs font-bold text-[#008F8C] uppercase tracking-wider mb-5 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <TrendingUp className="w-4 h-4 text-[#FFD67A]" />
                      Projected Campaign Yield
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#008F8C]/20 border border-[#008F8C]/40 text-[#FFD67A] text-[10px] font-bold">
                      Verified Benchmark
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 sm:gap-5 mb-6">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#FFD67A]/40 transition-colors">
                      <span className="text-[11px] text-[#AAB8B8] block mb-1">Estimated Reach</span>
                      <span className="text-2xl sm:text-3xl font-black font-heading text-[#FFD67A]">
                        {calculated.totalReach}
                      </span>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#FFD67A]/40 transition-colors">
                      <span className="text-[11px] text-[#AAB8B8] block mb-1">Video Views</span>
                      <span className="text-2xl sm:text-3xl font-black font-heading text-[#F6F0E5]">
                        {calculated.totalViews}
                      </span>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#FFD67A]/40 transition-colors">
                      <span className="text-[11px] text-[#AAB8B8] block mb-1">Avg Engagement</span>
                      <span className="text-2xl sm:text-3xl font-black font-heading text-[#00E5A3]">
                        {calculated.baseEngagement}
                      </span>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#FFD67A]/40 transition-colors">
                      <span className="text-[11px] text-[#AAB8B8] block mb-1">Projected ROAS</span>
                      <span className="text-2xl sm:text-3xl font-black font-heading text-[#E5A43A]">
                        {calculated.avgRoas}
                      </span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#0A1D1E] border border-white/10 flex items-center gap-3 text-xs text-[#AAB8B8]">
                    <CheckCircle2 className="w-4 h-4 text-[#00E5A3] flex-shrink-0" />
                    <span>Includes high-hook scriptwriting, creator coordination, raw video delivery, and post-production editing.</span>
                  </div>
                </div>

              </div>

              {/* Creator Niche Verticals */}
              <div>
                <div className="text-center mb-10">
                  <span className="text-xs font-bold text-[#FFD67A] uppercase tracking-widest flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#E5A43A] animate-ping" />
                    Creator Verticals
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black font-heading text-[#F6F0E5] mt-1">
                    Specialized Roster Across Key Indian Industries
                  </h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
                  {niches.map((n, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -6, scale: 1.03 }}
                      className="p-5 rounded-2xl bg-gradient-to-b from-[#0F282A] to-[#071719] border border-white/10 hover:border-[#FFD67A]/60 transition-all text-center flex flex-col items-center justify-between group shadow-lg cursor-pointer"
                    >
                      <span className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300 drop-shadow-md">{n.icon}</span>
                      <h4 className="text-xs font-bold text-[#F6F0E5] mb-1 font-heading group-hover:text-[#FFD67A] transition-colors">{n.name}</h4>
                      <span className="text-[11px] text-[#008F8C] font-extrabold block">{n.count}</span>
                      <span className="text-[10px] text-[#AAB8B8] mt-2 block border-t border-white/10 pt-2 w-full font-medium">
                        {n.brands}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

            </motion.div>
          ) : (
            /* Creator Portal View (House of Creators Inspired) */
            <motion.div
              key="creators-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-[#0F282A] via-[#0A1D1E] to-[#061315] border border-[#FFD67A]/50 shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(229,164,58,0.2)]"
            >
              <div className="max-w-3xl mx-auto text-center space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E5A43A]/15 border border-[#E5A43A]/40 text-[#FFD67A] text-xs font-bold uppercase tracking-wider">
                  <Flame className="w-4 h-4 text-orange-400" />
                  CREATOR PARTNERSHIP PROGRAM
                </div>

                <h3 className="text-3xl sm:text-5xl font-black font-heading text-[#F6F0E5] leading-tight">
                  Get Booked by Top Consumer Brands.{' '}
                  <span className="text-gradient-teal-gold">Guaranteed Fast Payouts.</span>
                </h3>

                <p className="text-sm sm:text-base text-[#AAB8B8] leading-relaxed font-normal">
                  We connect you with verified tier-1 campaigns (Bajaj, JioHotstar, Xiaomi, Beco, Snitch) that value your creative voice, provide done-for-you script concepts, and guarantee transparent compensation within 48 hours of campaign sign-off.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 text-left">
                  <div className="p-6 rounded-2xl bg-[#061315] border border-white/10 hover:border-[#008F8C] transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-[#008F8C]/20 text-[#008F8C] flex items-center justify-center font-black mb-4 font-heading text-lg">
                      01
                    </div>
                    <h4 className="font-bold text-base text-[#F6F0E5] mb-1.5 font-heading">High-Paying Collabs</h4>
                    <p className="text-xs text-[#AAB8B8] leading-relaxed">Direct brand sponsorships from high-growth D2C, fashion, tech, and mobility leaders.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-[#061315] border border-white/10 hover:border-[#E5A43A] transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-[#E5A43A]/20 text-[#E5A43A] flex items-center justify-center font-black mb-4 font-heading text-lg">
                      02
                    </div>
                    <h4 className="font-bold text-base text-[#F6F0E5] mb-1.5 font-heading">Script &amp; Production Support</h4>
                    <p className="text-xs text-[#AAB8B8] leading-relaxed">Our creative team provides viral hooks and handles video post-edits so you shine.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-[#061315] border border-white/10 hover:border-[#FFD67A] transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-[#FFD67A]/20 text-[#FFD67A] flex items-center justify-center font-black mb-4 font-heading text-lg">
                      03
                    </div>
                    <h4 className="font-bold text-base text-[#F6F0E5] mb-1.5 font-heading">Zero Brokerage Hassles</h4>
                    <p className="text-xs text-[#AAB8B8] leading-relaxed">Transparent contracts, clear deliverables, and guaranteed timely payouts on every project.</p>
                  </div>
                </div>

                <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-5">
                  <PremiumButton href="/contact" variant="primary" icon="arrow" className="text-sm px-8 py-3.5">
                    Apply to Join Creator Roster
                  </PremiumButton>
                  <a
                    href="#portfolio"
                    className="text-xs font-semibold text-[#FFD67A] underline underline-offset-4 hover:text-white transition-colors"
                  >
                    View Recent Brand Collaborations →
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default InfluencerMarketingSection;
