import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, ShieldCheck, Zap, Award, Compass, ArrowRight } from 'lucide-react';
import PremiumButton from '../components/PremiumButton';
import StatsBar from '../components/StatsBar';
import WhyChooseUs from '../components/WhyChooseUs';
import CTASection from '../components/CTASection';

const values = [
  {
    icon: Target,
    title: 'Precision Over Volume',
    desc: 'We never deploy scattershot marketing. Every strategy is mathematically engineered to target buyers with immediate intent.',
  },
  {
    icon: ShieldCheck,
    title: 'Absolute Transparency',
    desc: 'No black-box reporting or obscured media spends. You get real-time client access to analytics and ad accounts.',
  },
  {
    icon: Zap,
    title: 'Rapid Creative Iteration',
    desc: 'Ad creative decays fast. Our dedicated studio runs weekly testing sprints to safeguard ROAS against saturation.',
  },
  {
    icon: Award,
    title: 'Enterprise Accountability',
    desc: 'We consider ourselves an extension of your board of directors, prioritizing bottom-line EBITDA over vanity metrics.',
  },
];

const leadership = [
  {
    name: 'Aayup K.',
    role: 'Managing Partner & Chief Strategist',
    bio: 'Pioneered conversion-engineered funnels across real estate and e-commerce with over 8 years of growth engineering.',
    accent: '#008F8C',
  },
  {
    name: 'Rohan Verma',
    role: 'Head of Performance & Paid Media',
    bio: 'Former enterprise media buyer directing $10M+ in cumulative ad budgets across Google, Meta, and programmatic DSPs.',
    accent: '#E5A43A',
  },
  {
    name: 'Devika Sharma',
    role: 'Creative Director & Brand Architecture',
    bio: 'Specializes in high-luxury visual identity, psychological video hooks, and high-retention landing page design systems.',
    accent: '#FFD67A',
  },
];

export const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="pt-28 pb-16"
    >
      {/* Hero Header */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#008F8C]/15 blur-[140px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#008F8C]/15 border border-[#008F8C]/40 text-[#FFD67A] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            OUR STORY & PHILOSOPHY
          </div>

          <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-[#F6F0E5] leading-tight max-w-4xl mx-auto">
            We Built Uniquo Media To Stop The Waste Of{' '}
            <span className="text-gradient-teal-gold">
              Marketing Capital.
            </span>
          </h1>

          <p className="mt-6 text-lg text-[#AAB8B8] max-w-2xl mx-auto leading-relaxed">
            Most agencies operate on impressions and vanity metrics. We operate on customer acquisition cost, conversion rate optimization, and compound enterprise revenue.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <StatsBar />

      {/* Core Mission & Story */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl bg-[#0A1D1E] border border-[#008F8C]/40 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.7)] overflow-hidden glow-teal">
                <div className="w-16 h-16 rounded-2xl bg-[#061315] border border-[#E5A43A]/50 p-2 mb-6 flex items-center justify-center">
                  <img src="/uniquomedia-logo.png" alt="Uniquo Media" className="w-full h-full object-contain" />
                </div>
                <h3 className="font-heading font-black text-2xl text-[#F6F0E5] mb-3">
                  The Uniquo Media Formula
                </h3>
                <p className="text-sm text-[#AAB8B8] leading-relaxed mb-6 font-normal">
                  Founded with the conviction that digital attention is the most valuable commodity in modern commerce, Uniquo Media fuses behavioral consumer psychology with quantitative performance advertising.
                </p>
                <div className="p-4 rounded-xl bg-[#061315] border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-[#FFD67A] block font-mono">CORE MOTTO</span>
                    <span className="text-sm font-bold text-white">Your Growth, Our Strategy</span>
                  </div>
                  <span className="text-2xl text-[#008F8C]">↗</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col items-start text-left">
              <span className="text-xs uppercase font-semibold text-[#FFD67A] tracking-wider mb-2">
                WHAT SETS US APART
              </span>
              <h2 className="font-heading font-black text-3xl sm:text-4xl text-[#F6F0E5] leading-tight">
                Not Just Contractors. Your Dedicated Growth Architects.
              </h2>
              <p className="mt-4 text-base text-[#AAB8B8] leading-relaxed">
                Whether scaling a seed-stage challenger brand or accelerating an established enterprise portfolio, our teams operate with intense ownership, agile weekly sprints, and unwavering focus on return on investment.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {values.map((v, i) => {
                  const Icon = v.icon;
                  return (
                    <div key={i} className="p-4 rounded-2xl bg-[#0A1D1E]/90 border border-white/10">
                      <div className="w-8 h-8 rounded-lg bg-[#008F8C]/20 text-[#FFD67A] flex items-center justify-center mb-2">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="font-heading font-bold text-sm text-[#F6F0E5]">{v.title}</h4>
                      <p className="text-xs text-[#AAB8B8] mt-1">{v.desc}</p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8">
                <PremiumButton href="/contact" variant="primary">
                  Partner With Our Strategists
                </PremiumButton>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-[#0A1D1E]/40 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase font-semibold text-[#008F8C] tracking-wider mb-2 block">
              SENIOR ARCHITECTS
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-[#F6F0E5]">
              Meet The Minds Behind Your Growth
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-3xl bg-[#061315] border border-white/10 hover:border-[#E5A43A] transition-all duration-300 hover:-translate-y-2 shadow-lg"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#008F8C] to-[#E5A43A] p-0.5 mb-6">
                  <div className="w-full h-full rounded-2xl bg-[#0A1D1E] flex items-center justify-center font-heading font-black text-xl text-[#FFD67A]">
                    {leader.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <h3 className="font-heading font-bold text-xl text-[#F6F0E5] group-hover:text-[#FFD67A] transition-colors">
                  {leader.name}
                </h3>
                <div className="text-xs font-semibold text-[#008F8C] mb-3">
                  {leader.role}
                </div>
                <p className="text-xs text-[#AAB8B8] leading-relaxed">
                  {leader.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* CTA */}
      <CTASection />
    </motion.div>
  );
};

export default AboutPage;
