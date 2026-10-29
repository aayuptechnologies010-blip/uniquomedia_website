import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  PenTool,
  Video,
  Camera,
  Share2,
  TrendingUp,
  Megaphone,
  Search,
  Users,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  BarChart3,
  Layers,
} from 'lucide-react';
import PremiumButton from '../components/PremiumButton';
import BrandShowcase from '../components/BrandShowcase';
import ProcessSection from '../components/ProcessSection';
import CTASection from '../components/CTASection';

export const serviceDetailsData = {
  'influencer-marketing': {
    title: 'Influencer Marketing',
    tagline: 'House of Creators-Inspired Creator Campaigns',
    heroBadge: 'CREATOR & INFLUENCER NETWORK',
    bannerImage: '/banners/influncer-banner.jpg',
    useCustomBanner: true,
    bannerAspect: 'aspect-[1365/614]',
    summary:
      'We bridge ambitious brands with India’s top creators across YouTube, Instagram, and LinkedIn — eliminating fake followers, opaque pricing, and clunky management.',
    metrics: [
      { label: 'Curated Creators', value: '450+' },
      { label: 'Avg ROAS on Spark Ads', value: '4.8x' },
      { label: 'Video Reach', value: '35M+' },
      { label: 'Approval Speed', value: '< 48h' },
    ],
    features: [
      'Comprehensive Demographic & Bot-Free Audits',
      'Nano to Celebrity Multi-Tier Matchmaking',
      'Full Scripting, Storyboarding & Content Vetting',
      'Paid Whitelisting & Spark Ad Amplification',
      'Live Tracking Dashboard with Verified ROI Attribution',
    ],
    deliverables: ['Custom Creator Shortlist', 'Product Seeding Coordination', 'Weekly Conversion Reports'],
  },
  'scripting': {
    title: 'High-Hook Scripting',
    tagline: 'Words & Storyboards Engineered to Stop the Scroll',
    heroBadge: 'PSYCHOLOGY-BACKED HOOK ENGINE',
    bannerImage: '/banners/services-scripting.png',
    useCustomBanner: true,
    bannerAspect: 'aspect-[1870/841]',
    summary:
      'A great video fails without a hypnotic hook. We write frame-by-frame visual storyboards, direct-response UGC scripts, and viral plot twists designed to stop thumbs in milliseconds and drive irresistible clicks.',
    metrics: [
      { label: 'First-3s Hook Rate', value: '62%' },
      { label: 'Scripts Delivered', value: '320+' },
      { label: 'Click-Through Rate', value: '3.8%' },
      { label: 'Tested Frameworks', value: '45+' },
    ],
    features: [
      'Scroll-Stopping 3-Second Hook Formulas',
      'Direct-Response UGC & Creator Talking-Head Briefs',
      'Frame-by-Frame Visual Storyboards with Timing Cues',
      'Persuasive Emotional Trigger & Call-to-Action Stacking',
      'A/B Split-Testing Hook Variations for Ad Accounts',
    ],
    deliverables: ['Beat-by-Beat Production Scripts', 'B-Roll & Action Shot Guidance', 'Creator Brief Cheat-Sheets'],
  },
  'video-editing': {
    title: 'High-Impact Video Editing',
    tagline: 'Fast Pacing, 3D Typography & Psychoacoustic Sound Design',
    heroBadge: 'RETENTION-FIRST POST PRODUCTION',
    bannerImage: '/banners/services-videoeditor.png',
    useCustomBanner: true,
    bannerAspect: 'aspect-[1870/841]',
    summary:
      'Turn raw footage into viral masterpieces. Our post-production workflow combines fast-cut pacing, kinetic text animations, 3D camera tracking, and psychoacoustic sound design engineered for 80%+ watch-through rates.',
    metrics: [
      { label: 'Average Video Retention', value: '78%' },
      { label: 'Monthly Video Production', value: '180+' },
      { label: 'Turnaround Time', value: '24-48h' },
      { label: 'Weekly Hook Refresh', value: 'Active' },
    ],
    features: [
      '3-Second Retention-Engineered Pacing',
      'DaVinci Resolve Pro Color Grading & Sound FX Stems',
      'Kinetic Motion Graphics & 3D Typography',
      'Aspect-Ratio Multi-Format Exports (9:16, 1:1, 16:9)',
      'Creative Fatigue Shield with Rapid Hook Iterations',
    ],
    deliverables: ['Cutdowns for Meta & YouTube', 'Sound FX Stems & Waveforms', 'High-Res Master Files'],
  },
  'content-creation': {
    title: 'Content Creation & UGC',
    tagline: 'Authentic Creator Shoots, 3D Assets & Lifestyle Visuals',
    heroBadge: 'HIGH-CONVERSION CONTENT STUDIO',
    bannerImage: '/banners/services-contentcreator.png',
    useCustomBanner: true,
    bannerAspect: 'aspect-[1870/841]',
    summary:
      'Produce thumb-stopping brand aesthetics that captivate modern consumers. From relatable user-generated content (UGC) to high-end studio product shoots that convert passive scrollers into passionate brand advocates.',
    metrics: [
      { label: 'Monthly Creative Sets', value: '250+' },
      { label: 'Engagement Lift', value: '+54%' },
      { label: 'UGC Creators Onboard', value: '200+' },
      { label: 'Production Turnaround', value: '3-5 Days' },
    ],
    features: [
      'Authentic User-Generated Content (UGC) Shoots',
      'Studio Lifestyle & Minimalist Aesthetic Productions',
      '3D Product Modeling & Interactive Packaging Renders',
      'Multi-Platform Aspect Ratio Formatting',
      'Dynamic Ad Creative Matrix (Carousels, Statics & Motion)',
    ],
    deliverables: ['Raw & Edited UGC Assets', 'High-Res Product B-Roll Library', 'Commercial Rights Release'],
  },
  'social-media': {
    title: 'Social Media Marketing',
    tagline: 'Trend Hijacking, Algorithmic Distribution & Community Scaling',
    heroBadge: 'ORGANIC ALGORITHM ENGINE',
    bannerImage: '/banners/services-socialmedia.png',
    useCustomBanner: true,
    bannerAspect: 'aspect-[1870/841]',
    summary:
      'Turn everyday social channels into your highest-converting growth engine. We combine viral trend-jacking, community engagement, and consistent storytelling to build unmatched brand authority.',
    metrics: [
      { label: 'Monthly Impressions', value: '25M+' },
      { label: 'Community Growth', value: '+140%' },
      { label: 'Viral Reel Rate', value: '42%' },
      { label: 'Brand Sentiment', value: '98% Pos' },
    ],
    features: [
      'Fast-Moving Trend Hijacking & Cultural Memetics',
      'Multi-Platform Content Calendar (IG, YT, LinkedIn)',
      'Active Community Management & DM Conversions',
      'Consistent Visual Grid Design & Brand Voice Guidelines',
      'Monthly Algorithmic Intelligence & Competitor Audits',
    ],
    deliverables: ['Monthly 30-Day Content Matrix', 'Copywriting & Graphic Assets', 'Weekly Performance Analytics'],
  },
  'performance-marketing': {
    title: 'Performance Marketing',
    tagline: 'Hyper-Targeted Meta Ads & Google ROI Scaling',
    heroBadge: 'ALGORITHMIC MEDIA BUYING',
    bannerImage: '/banners/services-performancemarketing.png',
    useCustomBanner: true,
    bannerAspect: 'aspect-[1870/841]',
    summary:
      'Stop burning budget on vanity clicks. We engineer multi-stage advertising funnels across Meta, YouTube, and Google Ads using rapid A/B creative testing matrixes and algorithmic budget scaling.',
    metrics: [
      { label: 'Blended Account ROAS', value: '5.4x' },
      { label: 'Ad Spend Managed', value: '₹3.5Cr+' },
      { label: 'CAC Reduction', value: '-34%' },
      { label: 'Weekly Split Tests', value: '12/wk' },
    ],
    features: [
      'Meta Advantage+ & Google Demand Gen Architecture',
      'High-Intent Search & Dynamic Remarketing Funnels',
      'CPA Optimization & Algorithmic Bid Scaling',
      'First-Party Server-Side Tracking (CAPI / Enhanced Conversions)',
      'Dynamic Retargeting Loops That Rescue Abandoned Carts',
    ],
    deliverables: ['Custom ROAS Tracking Dashboard', 'Audience Segment Matrix', 'Weekly Media Buyer Briefs'],
  },
  'digital-marketing': {
    title: 'Full-Funnel Digital Marketing',
    tagline: 'Omnichannel Acquisition, Lifecycle Funnels & High LTV',
    heroBadge: '360° REVENUE ENGINE',
    bannerImage: '/banners/services-digitalmarketing.png',
    useCustomBanner: true,
    bannerAspect: 'aspect-[1870/841]',
    summary:
      'A unified digital growth engine synchronizing creator storytelling, performance ads, retention email flows, and conversion rate optimization into a compounding enterprise flywheel.',
    metrics: [
      { label: 'Blended CAC Reduction', value: '-38%' },
      { label: 'LTV Increase', value: '+52%' },
      { label: 'Attribution Accuracy', value: '99%' },
      { label: 'System Uptime', value: '24/7' },
    ],
    features: [
      'Multi-Touch Omnichannel Attribution Modeling',
      'Full-Funnel Customer Journey & Conversion Rate Optimization (CRO)',
      'Retention Marketing, WhatsApp Flows & Email Automation',
      'Cross-Platform Synergies (Search, Social, Creators & Display)',
      'Bi-Weekly Strategic Growth Council Sprints',
    ],
    deliverables: ['Full Customer Journey Map', 'Monthly Growth Blueprint', 'Omnichannel Attribution Dashboard'],
  },
  'seo-growth': {
    title: 'SEO & Search Authority',
    tagline: 'First-Page Dominance on High-Commercial-Intent Queries',
    heroBadge: 'SEMANTIC SEARCH ARCHITECTURE',
    bannerImage: '/banners/services-seogrowth.png',
    useCustomBanner: true,
    bannerAspect: 'aspect-[1870/841]',
    summary:
      'Own the search results when high-ticket buyers are looking for solutions. We build semantic topic clusters, technical performance architectures, and high-authority link velocity that guarantee sustainable organic pipeline.',
    metrics: [
      { label: 'First Page Rankings', value: '85%+' },
      { label: 'Organic Traffic Lift', value: '+240%' },
      { label: 'High-Intent Pipeline', value: '4.6x' },
      { label: 'Core Web Vitals', value: '98/100' },
    ],
    features: [
      'High-Commercial-Intent Keyword Mapping',
      'Semantic Topic Clusters & Pillar Content Execution',
      'Technical SEO Audits, Core Web Vitals & Schema Graph',
      'Authority Backlink Engineering & PR Placements',
      'Conversion-Optimized Landing Page Interlinking',
    ],
    deliverables: ['Comprehensive SEO Audit Report', 'Topic Cluster Roadmap', 'Monthly Keyword Movement Tracking'],
  },
};

export const ServiceDetailPage = () => {
  const { serviceSlug } = useParams();
  const service = serviceDetailsData[serviceSlug];

  // If service does not exist, redirect to /services
  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="pt-[68px] sm:pt-[76px]"
    >
      {/* Top Banner Presentation */}
      <section className="relative w-full overflow-hidden bg-[#061315]">
        {service.useCustomBanner ? (
          /* Exact banner image presentation without HTML crop */
          <div className="w-full relative group select-none">
            <div className={`relative w-full aspect-[16/9] sm:${service.bannerAspect} overflow-hidden flex items-center justify-center bg-[#061315]`}>
              <img
                src={service.bannerImage}
                alt={service.title}
                className="w-full h-full object-contain object-center pointer-events-none"
                loading="eager"
              />
            </div>
          </div>
        ) : (
          /* Deep Luxury Hero Banner with Graphic Stage */
          <div className="relative py-16 sm:py-24 overflow-hidden border-b border-white/10">
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#008F8C]/15 blur-[150px] pointer-events-none" />
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#E5A43A]/12 blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
                {/* Left Info */}
                <div className="lg:col-span-7 flex flex-col items-start text-left">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#008F8C]/20 to-[#FFD67A]/20 border border-[#FFD67A]/40 text-[#FFD67A] text-xs font-bold tracking-[0.2em] uppercase mb-4 shadow-sm">
                    <Sparkles className="w-3.5 h-3.5 text-[#FFD67A]" />
                    {service.heroBadge}
                  </div>

                  <h1 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-[#F6F0E5] leading-tight">
                    {service.title}
                  </h1>

                  <p className="text-base sm:text-xl text-[#00E5A3] font-bold mt-2 font-heading">
                    {service.tagline}
                  </p>

                  <p className="mt-5 text-sm sm:text-base text-[#AAB8B8] max-w-xl leading-relaxed">
                    {service.summary}
                  </p>

                  {/* Action buttons */}
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <PremiumButton href="/contact" variant="primary" icon="arrow" className="text-sm px-7 py-3.5">
                      Launch {service.title} Sprint
                    </PremiumButton>
                    <PremiumButton href="/portfolio" variant="secondary" icon="upRight" className="text-sm px-6 py-3.5">
                      View Brand Results
                    </PremiumButton>
                  </div>
                </div>

                {/* Right Visual Graphic Stage */}
                <div className="lg:col-span-5 relative w-full">
                  <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-b from-[#0F282A] to-[#071719] shadow-[0_20px_50px_rgba(0,0,0,0.85)] group">
                    <div className="aspect-[16/10] w-full overflow-hidden relative">
                      <img
                        src={service.bannerImage}
                        alt={service.title}
                        className="w-full h-full object-cover transform group-hover:scale-106 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#071719] via-[#071719]/40 to-transparent" />
                    </div>

                    {/* Metrics Grid Overlay */}
                    <div className="p-5 grid grid-cols-2 gap-3 bg-black/50 border-t border-white/10">
                      {service.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="p-3 rounded-xl bg-white/5 border border-white/5 text-center">
                          <span className="text-xl font-black font-heading text-[#FFD67A] block">
                            {m.value}
                          </span>
                          <span className="text-[10px] text-[#AAB8B8] font-bold block mt-0.5">
                            {m.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}
      </section>

      {/* Core Capabilities & Technical Architecture */}
      <section className="pt-6 sm:pt-10 pb-16 sm:pb-20 bg-[#061315] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left capabilities */}
            <div className="lg:col-span-7">
              <span className="text-xs font-bold text-[#FFD67A] uppercase tracking-widest block mb-2">
                What We Deliver
              </span>
              <h2 className="text-2xl sm:text-4xl font-black font-heading text-[#F6F0E5] mb-6">
                Execution Capabilities &amp; Technical Framework
              </h2>

              <div className="space-y-4">
                {service.features.map((feat, fIdx) => (
                  <div
                    key={fIdx}
                    className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#0F282A] to-[#0A1D1E] border border-white/10 flex items-start gap-3.5 hover:border-[#FFD67A]/50 transition-colors"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#008F8C]/20 border border-[#008F8C]/40 flex items-center justify-center text-[#FFD67A] shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-sm sm:text-base text-[#F6F0E5] font-medium leading-relaxed">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right deliverables card */}
            <div className="lg:col-span-5">
              <div className="p-7 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0F282A] to-[#071719] border border-[#FFD67A]/30 shadow-2xl space-y-6">
                <div>
                  <span className="text-xs font-bold text-[#FFD67A] uppercase tracking-widest block mb-1">
                    Turnkey Package
                  </span>
                  <h3 className="text-2xl font-black font-heading text-[#F6F0E5]">
                    Package Deliverables
                  </h3>
                  <p className="text-xs text-[#AAB8B8] mt-1">
                    What your brand receives upon campaign deployment.
                  </p>
                </div>

                <div className="space-y-3">
                  {service.deliverables.map((del, dIdx) => (
                    <div
                      key={dIdx}
                      className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 text-sm text-[#F6F0E5] font-semibold"
                    >
                      <Zap className="w-4 h-4 text-[#FFD67A] shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-[#008F8C]/15 border border-[#008F8C]/30 text-xs text-[#AAB8B8]">
                  <ShieldCheck className="w-4 h-4 text-[#00E5A3] inline mr-2" />
                  Includes dedicated growth strategist &amp; guaranteed SLA response times.
                </div>

                <PremiumButton href="/contact" variant="primary" icon="arrow" className="w-full justify-center py-3.5 text-sm">
                  Get Started With {service.title}
                </PremiumButton>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Brand Partnerships Grid */}
      <BrandShowcase />

      {/* 7-Step Process */}
      <ProcessSection />

      {/* CTA Section */}
      <CTASection />
    </motion.div>
  );
};

export default ServiceDetailPage;

