import React from 'react';
import { motion } from 'framer-motion';
import { Send, PhoneCall, MessageSquare } from 'lucide-react';
import ContactSection from '../components/ContactSection';
import WhyChooseUs from '../components/WhyChooseUs';
import InteractiveHeroVisual from '../components/InteractiveHeroVisual';
import PremiumButton from '../components/PremiumButton';

export const ContactPage = () => {
  const contactPills = [
    {
      icon: Send,
      label: 'Rapid Response',
      value: '< 24 Hours',
      position: '-top-3 right-0 sm:-right-4',
      color: 'gold',
    },
    {
      icon: MessageSquare,
      label: 'Direct Channel',
      value: 'WhatsApp + Slack',
      position: '-bottom-4 left-0 sm:-left-6',
      color: 'teal',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="pt-28"
    >
      {/* Header Banner with 3D Communication & Golden Plane Visual */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute top-1/2 right-1/3 -translate-y-1/2 w-96 h-96 bg-[#008F8C]/15 blur-[150px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#008F8C]/15 border border-[#008F8C]/40 text-[#FFD67A] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                3D COMMUNICATION & CONNECTION
              </div>

              <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-[#F6F0E5] leading-tight">
                Let's Create{' '}
                <span className="text-gradient-teal-gold block">
                  Something That Grows.
                </span>
              </h1>

              <p className="mt-6 text-lg text-[#AAB8B8] max-w-xl leading-relaxed">
                Speak directly with our senior agency strategists. We analyze your customer acquisition funnel and outline immediate opportunities to compound your ROI.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <PremiumButton href="#contact" variant="gold">
                  Book Strategy Audit
                </PremiumButton>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full bg-[#0A1D1E] border border-white/10 hover:border-[#FFD67A] text-white hover:text-[#FFD67A] font-heading text-sm font-semibold transition-colors"
                >
                  Quick WhatsApp Chat
                </a>
              </div>
            </div>

            {/* Right 3D Visual */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <InteractiveHeroVisual
                imageSrc="/contact-hero.jpg"
                alt="Uniquo Media 3D Communication & Golden Plane Connection"
                badgeText="3D Connection Node"
                badgeMetric="Direct Line"
                floatingPills={contactPills}
              />
            </div>

          </div>
        </div>
      </section>

      {/* Main Interactive Contact Section */}
      <ContactSection />

      {/* Why Clients Choose Uniquo Media */}
      <WhyChooseUs />
    </motion.div>
  );
};

export default ContactPage;
