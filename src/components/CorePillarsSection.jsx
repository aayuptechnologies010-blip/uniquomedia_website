import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Video,
  TrendingUp,
  Users,
  PenTool,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
  BarChart3,
  Layers,
  Play,
  ArrowUpRight,
  ShieldCheck,
} from 'lucide-react';
import PremiumButton from './PremiumButton';

const pillarsData = [
  {
    id: 'influencer',
    tabName: 'Influencer Marketing',
    badge: 'HOUSE OF CREATORS MODEL',
    icon: Users,
    tagline: 'Authentic Creator Matchmaking & Multi-Platform Partnerships',
    image: '/graphics-influencer.jpg',
    headline: 'Scale Beyond Ads With 450+ Verified Creators',
    description:
      'We combine organic creator trust with Google & Meta Ads boosting. From nano-curators to macro-influencers, we manage scouting, briefs, contracts, and deliver guaranteed reach with verifiable sales attribution.',
    metrics: [
      { label: 'Active Curated Creators', value: '450+', sub: 'Vetted Niche Specialists' },
      { label: 'Average ROAS on Boosted Posts', value: '4.8x', sub: 'Blended Paid + Organic' },
      { label: 'Total Creator Impressions', value: '35M+', sub: 'Across YT, IG & LinkedIn' },
      { label: 'Creator Brief Approval Rate', value: '98%', sub: 'Zero Script Saturation' },
    ],
    features: [
      'Google Ads & YouTube Creator Partnerships Linking',
      'Nano to Macro Multi-Tier Creator Seeding',
      'End-to-End Campaign Contracts & Fast Payouts',
      'Whitelisting & Paid Ads Spark Amplification',
    ],
    deliverables: ['Custom Creator Shortlist', 'Product Seeding Shipments', 'Weekly Attribution Reports'],
    accent: '#008F8C',
  },
  {
    id: 'editing',
    tabName: 'Video Editing',
    badge: 'RETENTION-FIRST PRODUCTION',
    icon: Video,
    tagline: 'High-Pacing, Kinetic Typography & Motion Graphics',
    image: '/graphics-editing.jpg',
    headline: 'Keep Viewers Hooked Past the 3-Second Drop-Off',
    description:
      'Turn raw footage into viral masterpieces. Our post-production workflow combines fast-cut pacing, kinetic text animations, 3D camera tracking, and psychoacoustic sound design engineered for 80%+ watch-through rates.',
    metrics: [
      { label: 'Average Video Retention', value: '78%', sub: 'Vs 28% Industry Average' },
      { label: 'Monthly Video Production', value: '180+', sub: 'Reels, Shorts & Ad Sets' },
      { label: 'Turnaround Time', value: '24-48h', sub: 'Fast Creative Iteration' },
      { label: 'Creative Fatigue Shield', value: 'Weekly', sub: 'Fresh Dynamic Cut Testing' },
    ],
    features: [
      '3-Second Retention-Engineered Pacing',
      'DaVinci Resolve Pro Color Grading & Audio Mastering',
      'Kinetic Motion Graphics & 3D Typography',
      'Aspect-Ratio Multi-Format Exports (9:16, 1:1, 16:9)',
    ],
    deliverables: ['Cutdowns for Meta & YouTube', 'Sound FX Stems & Waveforms', 'Dynamic Hook Variations'],
    accent: '#FFD67A',
  },
  {
    id: 'advertising',
    tabName: 'Performance Advertising',
    badge: 'ALGORITHMIC MEDIA BUYING',
    icon: TrendingUp,
    tagline: 'Meta Ads, Google Demand Gen & High-Yield Scaling',
    image: '/graphics-advertising.jpg',
    headline: 'Predictable Pipeline With Dynamic Creative Sprints',
    description:
      'Stop burning budget on unoptimized vanity clicks. We engineer multi-stage advertising funnels across Meta, YouTube, and Google Ads using rapid A/B creative testing matrixes and algorithmic budget scaling.',
    metrics: [
      { label: 'Blended Ad Account ROAS', value: '5.4x', sub: 'Direct Response Scaling' },
      { label: 'Client Ad Spend Managed', value: '₹3.5Cr+', sub: 'Zero Budget Leakage' },
      { label: 'CAC Reduction', value: '-34%', sub: 'Average Across 60 Days' },
      { label: 'Live Split-Test Variations', value: '12/wk', sub: 'Aggressive Creative Matrix' },
    ],
    features: [
      'Meta Advantage+ & Google Demand Gen Architecture',
      'High-Intent Search & Dynamic Remarketing Funnels',
      'CPA Optimization & Bid Cap Scalers',
      'First-Party Server-Side Tracking (CAPI / Enhanced)',
    ],
    deliverables: ['Custom ROAS Tracking Dashboard', 'Audience Segment Matrix', 'Weekly Media Buyer Briefs'],
    accent: '#E5A43A',
  },
  {
    id: 'scripting',
    tabName: 'Creative Scripting',
    badge: 'PSYCHOLOGY-BACKED HOOKS',
    icon: PenTool,
    tagline: 'Viral Storyboarding & Direct-Response Ad Copy',
    image: '/graphics-scripting.jpg',
    headline: 'Words and Storyboards That Convert Attention into Revenue',
    description:
      'A great video fails without a hypnotic hook. We write frame-by-frame visual storyboards, direct-response UGC scripts, and viral plot twists designed to stop thumbs in milliseconds and drive irresistible clicks.',
    metrics: [
      { label: 'Hook-Rate (First 3s)', value: '62%', sub: 'Vs 21% Benchmark' },
      { label: 'Scripts Delivered', value: '320+', sub: 'For D2C, Tech & Brands' },
      { label: 'Click-Through Rate (CTR)', value: '3.8%', sub: 'Top-of-Funnel Video Ads' },
      { label: 'Framework Library', value: '45+', sub: 'Tested Viral Formats' },
    ],
    features: [
      'Scroll-Stopping 3-Second Hook Formulas',
      'Direct-Response UGC & Creator Talking-Head Briefs',
      'Frame-by-Frame Visual Storyboards with Timing Cues',
      'Persuasive Emotional Trigger & CTA Stacking',
    ],
    deliverables: ['Beat-by-Beat Production Scripts', 'B-Roll & Action Shot Guidance', 'A/B Hook Variations'],
    accent: '#00E5A3',
  },
  {
    id: 'design',
    tabName: 'Graphic Design & UI',
    badge: 'HIGH-CONVERTING VISUAL IDENTITY',
    icon: Layers,
    tagline: '3D Brand Assets, Ad Creatives & UI/UX Systems',
    image: '/graphics-design.jpg',
    headline: 'Visual Aesthetics Engineered for Premium Authority',
    description:
      'Modern design systems that captivate high-ticket buyers. From thumb-stopping Meta carousel ad designs to 3D brand guidelines, packaging mockups, and landing page UI/UX that skyrockets brand prestige.',
    metrics: [
      { label: 'Creative Ad Sets / Month', value: '250+', sub: 'Static & Motion Graphics' },
      { label: 'Design Conversion Lift', value: '+42%', sub: 'A/B Tested Visual Assets' },
      { label: 'Brand Guidelines Shipped', value: '35+', sub: 'Complete Vector Systems' },
      { label: 'Typography & Layout Score', value: '99/100', sub: 'Figma & Blender Mastered' },
    ],
    features: [
      'High-CTR Meta & Display Ad Creatives (Carousels & Statics)',
      '3D Logo Modeling & Luxury Brand Guidelines',
      'Landing Page UI/UX & Conversion Design in Figma',
      'Vector Asset Suites & Dynamic Social Media Templates',
    ],
    deliverables: ['Editable Figma Design System', 'Exported 4K WebP & PNG Assets', 'Commercial Font Licenses'],
    accent: '#FFD67A',
  },
  {
    id: 'growth360',
    tabName: '360° Digital Growth',
    badge: 'OMNICHANNEL REVENUE ENGINE',
    icon: Sparkles,
    tagline: 'Search, Social & Conversion Ecosystem',
    image: '/graphics-growth-360.jpg',
    headline: 'Unified Ecosystem: Ads, Creators & Search Rankings',
    description:
      'We connect every customer touchpoint into a synchronized revenue flywheel. Creator content fuels high-converting ads, retargeting captures high-intent traffic, and search authority cements market dominance.',
    metrics: [
      { label: 'Blended Acquisition Cost', value: '-38%', sub: 'Cross-Channel Efficiency' },
      { label: 'First-Page Search Rankings', value: '85%+', sub: 'High-Intent Keywords' },
      { label: 'Customer Lifetime Value', value: '+52%', sub: 'Retention & Email Automation' },
      { label: 'Campaign Uptime', value: '24/7', sub: 'Automated Monitoring' },
    ],
    features: [
      'Multi-Touch Attribution Modeling & Server CAPI',
      'Semantic Search Authority & High-Intent SEO Graph',
      'Full-Funnel Lifecycle Marketing & Retargeting Loops',
      'Data-Backed Growth Playbooks & Bi-Weekly Sprints',
    ],
    deliverables: ['Full Attribution Map', 'Monthly Scale Plan', 'Bi-Weekly Executive Sprints'],
    accent: '#E5A43A',
  },
];

export const CorePillarsSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const current = pillarsData[activeTab];
  const Icon = current.icon;

  return (
    <section id="pillars" className="relative pt-6 sm:pt-10 pb-20 sm:pb-28 bg-[#061315] overflow-hidden border-t border-[#008F8C]/20">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#008F8C]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#E5A43A]/12 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#008F8C]/20 via-[#FFD67A]/20 to-[#E5A43A]/20 border border-[#FFD67A]/40 text-[#FFD67A] text-xs font-bold tracking-[0.2em] uppercase mb-4 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FFD67A]" />
            OUR 4 CORE GROWTH ENGINES
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-[#F6F0E5] leading-tight"
          >
            Where Creative Artistry Meets{' '}
            <span className="text-gradient-teal-gold block sm:inline">
              Hard Performance Data.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-5 text-sm sm:text-lg text-[#AAB8B8] max-w-2xl leading-relaxed font-normal"
          >
            Explore the exact frameworks, studio graphics, and verifiable benchmarks powering our Video Editing, Paid Advertising, Influencer Marketing, and Creative Scripting engines.
          </motion.p>
        </div>

        {/* Interactive Selector Tabs with Glowing Active Pill */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
          {pillarsData.map((item, idx) => {
            const TabIcon = item.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 border cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#FFD67A] via-[#E5A43A] to-[#008F8C] text-[#061315] border-transparent shadow-[0_0_30px_rgba(229,164,58,0.45)] scale-105'
                    : 'bg-[#0A1D1E]/90 text-[#AAB8B8] border-white/10 hover:border-[#FFD67A]/50 hover:text-[#F6F0E5]'
                }`}
              >
                <TabIcon className={`w-4 h-4 ${isActive ? 'text-[#061315]' : 'text-[#FFD67A]'}`} />
                <span>{item.tabName}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Pillar Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="bg-gradient-to-br from-[#0F282A] via-[#0A1D1E] to-[#061315] border border-white/15 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_40px_rgba(0,143,140,0.2)] relative overflow-hidden"
          >
            {/* Top Accent Gradient Border */}
            <div
              className="absolute top-0 left-0 right-0 h-[3px]"
              style={{
                background: `linear-gradient(90deg, transparent, ${current.accent}, #FFD67A, transparent)`,
              }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Visual graphic & Live Preview */}
              <div className="lg:col-span-6 flex flex-col gap-6">
                <div className="relative rounded-2xl overflow-hidden border border-white/15 group shadow-[0_20px_50px_rgba(0,0,0,0.8)] aspect-video sm:aspect-[16/10] bg-black">
                  <img
                    src={current.image}
                    alt={current.headline}
                    className="w-full h-full object-cover transform group-hover:scale-106 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061315]/95 via-[#061315]/30 to-transparent" />
                  
                  {/* Badge Overlay */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#061315]/90 border border-white/15 backdrop-blur-md shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-[#E5A43A] animate-pulse" />
                    <span className="text-[11px] font-mono text-[#FFD67A] font-bold tracking-wider uppercase">
                      {current.badge}
                    </span>
                  </div>

                  {/* Bottom Image Headline */}
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <div className="text-xs text-[#00E5A3] font-bold tracking-wide uppercase mb-1">
                      {current.tagline}
                    </div>
                    <div className="text-lg sm:text-xl font-heading font-black text-white line-clamp-1">
                      {current.headline}
                    </div>
                  </div>
                </div>

                {/* 4 Quantitative Data Benchmarks */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {current.metrics.map((metric, mIdx) => (
                    <div
                      key={mIdx}
                      className="p-3.5 rounded-xl bg-[#061315]/90 border border-white/10 flex flex-col items-start justify-center hover:border-[#FFD67A]/50 transition-colors shadow-inner"
                    >
                      <div className="text-xl sm:text-2xl font-black font-heading text-[#FFD67A]">
                        {metric.value}
                      </div>
                      <div className="text-[11px] font-bold text-[#F6F0E5] mt-0.5 leading-tight">
                        {metric.label}
                      </div>
                      <div className="text-[10px] text-[#AAB8B8] mt-1">{metric.sub}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Deep Details & Execution Strategy */}
              <div className="lg:col-span-6 flex flex-col items-start text-left">
                
                {/* Micro Category Pill */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#008F8C]/20 border border-[#008F8C]/40 text-[#FFD67A] text-xs font-bold uppercase tracking-wider mb-4">
                  <Icon className="w-3.5 h-3.5 text-[#FFD67A]" />
                  <span>{current.tabName} Architecture</span>
                </div>

                <h3 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-[#F6F0E5] leading-snug">
                  {current.headline}
                </h3>

                <p className="mt-4 text-sm sm:text-base text-[#AAB8B8] leading-relaxed font-normal">
                  {current.description}
                </p>

                {/* Technical Features Checklist */}
                <div className="mt-6 w-full space-y-3">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#FFD67A] mb-1 font-bold">
                    Core Capabilities &amp; Tech Stack
                  </div>
                  {current.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-[#008F8C]/20 flex items-center justify-center text-[#FFD67A] shrink-0 mt-0.5 border border-[#008F8C]/40">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs sm:text-sm text-[#F6F0E5]/90 font-medium">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Deliverables Stash */}
                <div className="mt-6 pt-5 border-t border-white/10 w-full flex flex-wrap items-center gap-2">
                  <span className="text-xs text-[#AAB8B8] font-bold mr-2">Deliverables:</span>
                  {current.deliverables.map((del, dIdx) => (
                    <span
                      key={dIdx}
                      className="text-xs px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-[#FFD67A] font-semibold"
                    >
                      {del}
                    </span>
                  ))}
                </div>

                {/* CTA Action */}
                <div className="mt-8 flex items-center gap-4 w-full">
                  <PremiumButton href="/contact" variant="primary" icon="arrow" className="w-full sm:w-auto text-sm px-7 py-3.5">
                    Deploy {current.tabName} Engine
                  </PremiumButton>
                </div>

              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default CorePillarsSection;
