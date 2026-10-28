import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Phone, Mail, MapPin, Clock } from 'lucide-react';
import PremiumButton from './PremiumButton';

const serviceOptions = [
  'Digital Marketing Strategy',
  'SEO Optimization',
  'Social Media Marketing',
  'Google Ads / PPC',
  'Meta Ads Performance',
  'Content Marketing & Video',
  'Branding & Design System',
  'High-Converting Web Development',
];

const budgetRanges = [
  'Under $2,500 / mo',
  '$2,500 - $5,000 / mo',
  '$5,000 - $10,000 / mo',
  '$10,000+ / mo',
];

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    service: 'Digital Marketing Strategy',
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
    <section id="contact" className="relative py-28 bg-[#061315] overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-[#008F8C]/15 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 rounded-full bg-[#E5A43A]/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
          
          {/* Left Column: Context & Contact Details */}
          <div className="lg:col-span-5 flex flex-col text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#008F8C]/15 border border-[#008F8C]/40 text-[#FFD67A] text-xs font-semibold tracking-[0.2em] uppercase mb-4"
            >
              START A CONVERSATION
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#F6F0E5] leading-tight"
            >
              Let's Talk About{' '}
              <span className="text-gradient-teal-gold block">
                Your Next Big Move.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 text-base sm:text-lg text-[#AAB8B8] leading-relaxed"
            >
              Whether you are preparing a major product launch or seeking to scale an existing acquisition machine, our senior partners are ready to review your data.
            </motion.p>

            {/* Direct Channel Cards */}
            <div className="mt-10 flex flex-col gap-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#0A1D1E] border border-white/5 hover:border-[#008F8C]/40 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-[#008F8C]/15 text-[#008F8C] flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#AAB8B8] block">Email Us Directly</span>
                  <a href="mailto:growth@uniquomedia.com" className="text-sm font-semibold text-[#F6F0E5] hover:text-[#FFD67A] transition-colors">
                    growth@uniquomedia.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#0A1D1E] border border-white/5 hover:border-[#008F8C]/40 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-[#008F8C]/15 text-[#FFD67A] flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#AAB8B8] block">Direct Growth Line</span>
                  <a href="tel:+919876543210" className="text-sm font-semibold text-[#F6F0E5] hover:text-[#FFD67A] transition-colors">
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#0A1D1E] border border-white/5">
                <div className="w-11 h-11 rounded-xl bg-[#008F8C]/15 text-[#008F8C] flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#AAB8B8] block">Response Guarantee</span>
                  <span className="text-sm font-semibold text-[#F6F0E5]">Within 24 Hours • Mon to Sat</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Animated Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 rounded-3xl p-8 sm:p-10 bg-[#0A1D1E] border border-[#008F8C]/30 shadow-[0_20px_50px_rgba(0,0,0,0.6)] glow-teal"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-14 text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#008F8C]/20 border border-[#008F8C] flex items-center justify-center text-[#FFD67A] mb-5">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-heading font-black text-2xl text-[#F6F0E5] mb-2">
                  Proposal Request Received!
                </h3>
                <p className="text-sm text-[#AAB8B8] max-w-md mb-8">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Our senior growth strategist is already reviewing your details and will send a preliminary action breakdown shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full border border-[#008F8C]/40 text-xs font-semibold text-[#FFD67A] hover:bg-[#008F8C]/15 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-left">
                {/* Row 1: Name & Business Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Field with animated gold line */}
                  <div className="relative">
                    <label className="text-xs font-semibold text-[#AAB8B8] block mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      onFocus={() => setActiveField('name')}
                      onBlur={() => setActiveField(null)}
                      className="w-full px-4 py-3 rounded-xl bg-[#061315] border border-white/10 text-sm text-[#F6F0E5] placeholder-[#AAB8B8]/40 outline-none focus:border-[#008F8C] transition-colors"
                    />
                    <div
                      className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#008F8C] to-[#E5A43A] transition-all duration-300 ${
                        activeField === 'name' ? 'w-full' : 'w-0'
                      }`}
                    />
                  </div>

                  {/* Business Name Field */}
                  <div className="relative">
                    <label className="text-xs font-semibold text-[#AAB8B8] block mb-2">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Living"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      onFocus={() => setActiveField('biz')}
                      onBlur={() => setActiveField(null)}
                      className="w-full px-4 py-3 rounded-xl bg-[#061315] border border-white/10 text-sm text-[#F6F0E5] placeholder-[#AAB8B8]/40 outline-none focus:border-[#008F8C] transition-colors"
                    />
                    <div
                      className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#008F8C] to-[#E5A43A] transition-all duration-300 ${
                        activeField === 'biz' ? 'w-full' : 'w-0'
                      }`}
                    />
                  </div>
                </div>

                {/* Row 2: Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="relative">
                    <label className="text-xs font-semibold text-[#AAB8B8] block mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="rahul@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      onFocus={() => setActiveField('email')}
                      onBlur={() => setActiveField(null)}
                      className="w-full px-4 py-3 rounded-xl bg-[#061315] border border-white/10 text-sm text-[#F6F0E5] placeholder-[#AAB8B8]/40 outline-none focus:border-[#008F8C] transition-colors"
                    />
                    <div
                      className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#008F8C] to-[#E5A43A] transition-all duration-300 ${
                        activeField === 'email' ? 'w-full' : 'w-0'
                      }`}
                    />
                  </div>

                  <div className="relative">
                    <label className="text-xs font-semibold text-[#AAB8B8] block mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      onFocus={() => setActiveField('phone')}
                      onBlur={() => setActiveField(null)}
                      className="w-full px-4 py-3 rounded-xl bg-[#061315] border border-white/10 text-sm text-[#F6F0E5] placeholder-[#AAB8B8]/40 outline-none focus:border-[#008F8C] transition-colors"
                    />
                    <div
                      className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#008F8C] to-[#E5A43A] transition-all duration-300 ${
                        activeField === 'phone' ? 'w-full' : 'w-0'
                      }`}
                    />
                  </div>
                </div>

                {/* Row 3: Interested In Dropdown & Budget Dropdown */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-semibold text-[#AAB8B8] block mb-2">
                      I'm Interested In
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#061315] border border-white/10 text-sm text-[#F6F0E5] outline-none focus:border-[#008F8C] transition-colors cursor-pointer"
                    >
                      {serviceOptions.map((opt, i) => (
                        <option key={i} value={opt} className="bg-[#0A1D1E] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#AAB8B8] block mb-2">
                      Approximate Monthly Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#061315] border border-white/10 text-sm text-[#F6F0E5] outline-none focus:border-[#008F8C] transition-colors cursor-pointer"
                    >
                      {budgetRanges.map((b, i) => (
                        <option key={i} value={b} className="bg-[#0A1D1E] text-white">
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 4: Tell Us About Your Business */}
                <div className="relative">
                  <label className="text-xs font-semibold text-[#AAB8B8] block mb-2">
                    Tell Us About Your Business & Current Goals
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Share your primary bottlenecks, targets for this quarter, or any specific channels you wish to scale..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onFocus={() => setActiveField('message')}
                    onBlur={() => setActiveField(null)}
                    className="w-full px-4 py-3 rounded-xl bg-[#061315] border border-white/10 text-sm text-[#F6F0E5] placeholder-[#AAB8B8]/40 outline-none focus:border-[#008F8C] transition-colors resize-none"
                  />
                  <div
                    className={`absolute bottom-1 left-0 h-[2px] bg-gradient-to-r from-[#008F8C] to-[#E5A43A] transition-all duration-300 ${
                      activeField === 'message' ? 'w-full' : 'w-0'
                    }`}
                  />
                </div>

                {/* Submit Button with bottom-to-top animated fill */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-heading text-sm font-bold tracking-wide overflow-hidden bg-[#008F8C] border border-[#008F8C] text-white hover:text-black shadow-[0_0_25px_rgba(0,143,140,0.3)] transition-all duration-300 cursor-pointer"
                  >
                    <span className="absolute inset-x-0 bottom-0 h-0 w-full transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:h-full bg-gradient-to-t from-[#E5A43A] to-[#FFD67A] z-0 pointer-events-none" />
                    <span className="relative z-10 flex items-center gap-2">
                      <span>Let's Grow Together</span>
                      <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </button>
                </div>

              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
