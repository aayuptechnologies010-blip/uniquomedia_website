import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, ShieldCheck, Zap, Award, Users, CheckCircle2, ArrowRight } from 'lucide-react';
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
  },
  {
    name: 'Rohan Verma',
    role: 'Head of Performance & Paid Media',
    bio: 'Former enterprise media buyer directing $10M+ in cumulative ad budgets across Google, Meta, and programmatic DSPs.',
  },
  {
    name: 'Devika Sharma',
    role: 'Creative Director & Brand Architecture',
    bio: 'Specializes in high-luxury visual identity, psychological video hooks, and high-retention landing page design systems.',
  },
];

export const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="pt-[68px] sm:pt-[76px]"
    >
      {/* Full-width clean Hero Banner in exact 1024x460 aspect ratio */}
      <section className="relative w-full overflow-hidden bg-[#061315]">
        <div className="w-full relative group select-none">
          <div className="relative w-full aspect-[16/9] sm:aspect-[1870/841] overflow-hidden flex items-center justify-center bg-[#061315]">
            <img
              src="/banners/about-banner.jpg"
              alt="Creative Minds. Strategic Thinking. Measurable Growth - About Uniquo Media"
              className="w-full h-full object-contain object-center pointer-events-none"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <StatsBar />

      {/* Core Mission & Story */}
      <section id="approach" className="py-24 relative bg-[#061315]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl bg-gradient-to-br from-[#0F282A] via-[#0A1D1E] to-[#061315] border border-[#008F8C]/40 p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.7)] overflow-hidden glow-teal">
                <div className="w-16 h-16 rounded-2xl bg-[#061315] border border-[#E5A43A]/50 p-2 mb-6 flex items-center justify-center">
                  <img src="/uniquomedia-logo.png" alt="Uniquo Media" className="w-full h-full object-contain" />
                </div>
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#F6F0E5] mb-3">
                  The Uniquo Media Formula
                </h3>
                <p className="text-sm sm:text-base text-[#AAB8B8] leading-relaxed mb-6 font-normal">
                  Founded with the conviction that digital attention is the most valuable commodity in modern commerce, Uniquo Media fuses behavioral consumer psychology with quantitative performance advertising and creator ecosystem mastery.
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
              <span className="text-xs uppercase font-bold text-[#FFD67A] tracking-wider mb-2">
                WHAT SETS US APART
              </span>
              <h2 className="font-heading font-black text-3xl sm:text-4xl text-[#F6F0E5] leading-tight">
                Not Just Contractors.{' '}
                <span className="text-gradient-teal-gold block sm:inline">
                  Your Dedicated Growth Architects.
                </span>
              </h2>

              <p className="mt-4 text-base text-[#AAB8B8] leading-relaxed">
                We embed directly alongside founders and CMOs. Every dollar deployed is tracked against incremental enterprise lift, blended ROAS, and customer lifetime value.
              </p>

              <div className="mt-8 space-y-4 w-full">
                {values.map((v, idx) => {
                  const Icon = v.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-[#0A1D1E] border border-white/10 flex items-start gap-4 hover:border-[#FFD67A]/50 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#008F8C]/20 border border-[#008F8C]/40 flex items-center justify-center text-[#FFD67A] shrink-0 mt-0.5">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-base text-[#F6F0E5]">
                          {v.title}
                        </h4>
                        <p className="text-xs text-[#AAB8B8] mt-1 leading-relaxed">
                          {v.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Leadership / Team Section */}
      <section id="team" className="py-24 bg-[#0A1D1E] border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#FFD67A] uppercase tracking-widest">
              LEADERSHIP &amp; EXPERTISE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-heading text-[#F6F0E5] mt-2">
              Meet the Growth Architects
            </h2>
            <p className="text-sm text-[#AAB8B8] mt-3">
              Seasoned operators who have scaled multi-crore campaigns across real estate, tech, OTT, and D2C apparel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((member, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-gradient-to-b from-[#0F282A] to-[#071719] border border-white/15 hover:border-[#FFD67A]/50 transition-all duration-300 flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-[#008F8C]/20 border border-[#008F8C]/40 flex items-center justify-center text-[#FFD67A] font-heading font-black text-2xl mb-6 shadow-inner">
                    {member.name.slice(0, 2).toUpperCase()}
                  </div>
                  <h3 className="font-heading font-black text-2xl text-[#F6F0E5] mb-1">
                    {member.name}
                  </h3>
                  <span className="text-xs font-bold text-[#00E5A3] block mb-4">
                    {member.role}
                  </span>
                  <p className="text-xs sm:text-sm text-[#AAB8B8] leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-[#FFD67A] font-semibold">
                  <span>Verified Operator</span>
                  <CheckCircle2 className="w-4 h-4 text-[#00E5A3]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Integration */}
      <WhyChooseUs />

      {/* CTA */}
      <CTASection />
    </motion.div>
  );
};

export default AboutPage;
