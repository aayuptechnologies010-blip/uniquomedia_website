import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
} from 'lucide-react';
import PremiumButton from './PremiumButton';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Influencer Marketing',
    budget: '$2,500 - $5,000 / mo',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [activeField, setActiveField] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative pt-6 sm:pt-10 pb-20 sm:pb-28 bg-[#061315] overflow-hidden border-t border-[#008F8C]/20">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 -left-32 w-80 sm:w-[500px] h-80 sm:h-[500px] rounded-full bg-[#008F8C]/15 blur-[120px] sm:blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-80 sm:w-[500px] h-80 sm:h-[500px] rounded-full bg-[#E5A43A]/12 blur-[120px] sm:blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Left Column: Context & Contact Details */}
          <div className="lg:col-span-5 flex flex-col text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#008F8C]/20 to-[#FFD67A]/20 border border-[#FFD67A]/40 text-[#FFD67A] text-xs font-bold tracking-[0.2em] uppercase mb-4 shadow-sm w-fit"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FFD67A]" />
              START A CONVERSATION
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading font-black text-3xl sm:text-5xl lg:text-5xl text-[#F6F0E5] leading-tight"
            >
              Let's Engineer{' '}
              <span className="text-gradient-teal-gold block sm:inline">
                Your Next Big Growth Sprint.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-5 text-sm sm:text-base text-[#AAB8B8] leading-relaxed font-normal"
            >
              Tell us about your brand targets. Within 24 hours, our growth council will audit your current positioning and deliver a custom creator &amp; paid media blueprint.
            </motion.p>

            {/* Direct Contact Cards */}
            <div className="mt-8 space-y-4">
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#0F282A] to-[#0A1D1E] border border-white/10 flex items-center gap-4 hover:border-[#FFD67A]/40 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#008F8C]/20 border border-[#008F8C]/40 flex items-center justify-center text-[#FFD67A] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#AAB8B8] uppercase tracking-wider block">Official Inquiries</span>
                  <a href="mailto:info@uniquomedia.com" className="text-sm sm:text-base font-bold text-[#F6F0E5] hover:text-[#FFD67A] transition-colors">
                    info@uniquomedia.com
                  </a>
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#0F282A] to-[#0A1D1E] border border-white/10 flex items-center gap-4 hover:border-[#FFD67A]/40 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#E5A43A]/20 border border-[#E5A43A]/40 flex items-center justify-center text-[#FFD67A] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#AAB8B8] uppercase tracking-wider block">Direct Line</span>
                  <a href="tel:+919999999999" className="text-sm sm:text-base font-bold text-[#F6F0E5] hover:text-[#FFD67A] transition-colors">
                    +91 99999 99999
                  </a>
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#0F282A] to-[#0A1D1E] border border-white/10 flex items-center gap-4 hover:border-[#FFD67A]/40 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#00E5A3]/20 border border-[#00E5A3]/40 flex items-center justify-center text-[#00E5A3] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#AAB8B8] uppercase tracking-wider block">Guaranteed SLA</span>
                  <span className="text-sm font-bold text-[#F6F0E5]">Response within 24 Hours (Mon-Sat)</span>
                </div>
              </div>
            </div>

            {/* Security Tag */}
            <div className="mt-8 flex items-center gap-2.5 text-xs text-[#008F8C] font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#00E5A3]" />
              <span>Strict NDA Protected • Zero Spam Guarantee</span>
            </div>
          </div>

          {/* Right Column: High-Conversion Interactive Form */}
          <div className="lg:col-span-7 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-[#0F282A] to-[#071719] border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.85)] relative overflow-hidden"
            >
              {/* Top Accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#FFD67A] to-transparent" />

              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#008F8C]/20 border border-[#008F8C] text-[#FFD67A] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#F6F0E5]">
                    Request Received!
                  </h3>
                  <p className="text-sm text-[#AAB8B8] max-w-md mx-auto">
                    Our lead growth strategist will review your brand details and reach out within 24 hours with your custom strategy blueprint.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-white/10 text-white text-xs font-bold hover:bg-white/20 transition-colors"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#AAB8B8] mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-[#061315] border border-white/10 text-white placeholder-gray-500 text-sm focus:border-[#FFD67A] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#AAB8B8] mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@yourbrand.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#061315] border border-white/10 text-white placeholder-gray-500 text-sm focus:border-[#FFD67A] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#AAB8B8] mb-2">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-[#061315] border border-white/10 text-white placeholder-gray-500 text-sm focus:border-[#FFD67A] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#AAB8B8] mb-2">
                        Brand / Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Inc / Label"
                        className="w-full px-4 py-3 rounded-xl bg-[#061315] border border-white/10 text-white placeholder-gray-500 text-sm focus:border-[#FFD67A] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#AAB8B8] mb-2">
                        Primary Service Target
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#061315] border border-white/10 text-white text-sm focus:border-[#FFD67A] focus:outline-none transition-colors cursor-pointer"
                      >
                        <option>Influencer Marketing</option>
                        <option>Performance Advertising</option>
                        <option>High-Impact Video Editing</option>
                        <option>Scripting &amp; Storyboarding</option>
                        <option>360° Digital Growth Engine</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#AAB8B8] mb-2">
                        Estimated Monthly Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#061315] border border-white/10 text-white text-sm focus:border-[#FFD67A] focus:outline-none transition-colors cursor-pointer"
                      >
                        <option>₹1 Lakh - ₹3 Lakhs / mo</option>
                        <option>₹3 Lakhs - ₹8 Lakhs / mo</option>
                        <option>₹8 Lakhs - ₹20 Lakhs / mo</option>
                        <option>₹20 Lakhs+ / Enterprise</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#AAB8B8] mb-2">
                      Brief Your Goals / Challenges
                    </label>
                    <textarea
                      rows="4"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us what you want to achieve with creator partnerships, video editing, or paid ads..."
                      className="w-full px-4 py-3 rounded-xl bg-[#061315] border border-white/10 text-white placeholder-gray-500 text-sm focus:border-[#FFD67A] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <PremiumButton type="submit" variant="primary" icon="arrow" className="w-full justify-center py-4 text-sm font-bold">
                    Submit Strategy Inquiry
                  </PremiumButton>
                </form>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
