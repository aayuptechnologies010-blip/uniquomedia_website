import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, TrendingUp, BarChart, Users, Award } from 'lucide-react';

const projects = [
  {
    id: 1,
    industry: 'Real Estate',
    category: 'Lead Generation Campaign',
    client: 'Skyline Luxury Residences',
    result: '+340% Qualified Site Visits',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    metrics: [
      { label: 'CPA Reduction', value: '-42%' },
      { label: 'High-Intent Leads', value: '1,840+' },
      { label: 'ROAS', value: '6.8x' },
    ],
    accentColor: '#008F8C',
    summary: 'Restructured full Meta & Google search campaign with geo-targeted video tours and dynamic WhatsApp instant verification funnel.',
  },
  {
    id: 2,
    industry: 'E-Commerce',
    category: 'Performance Marketing',
    client: 'Aura Lifestyle & Apparel',
    result: '4.2x Revenue Growth in 90 Days',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80',
    metrics: [
      { label: 'Monthly GMV', value: '$840K+' },
      { label: 'Customer LTV', value: '+35%' },
      { label: 'Average ROAS', value: '5.2x' },
    ],
    accentColor: '#E5A43A',
    summary: 'Built high-converting creative testing sandboxes combined with TikTok/Meta catalog retargeting and frictionless 1-click cart recovery.',
  },
  {
    id: 3,
    industry: 'Education',
    category: 'SEO + Social Media',
    client: 'Apex Global Business School',
    result: '120,000+ Monthly Organic Traffic',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80',
    metrics: [
      { label: 'Top 3 Keywords', value: '450+' },
      { label: 'Student Inquiries', value: '3,200+' },
      { label: 'Organic Share', value: '78%' },
    ],
    accentColor: '#008F8C',
    summary: 'Targeted long-tail career intent queries alongside high-engagement alumnus thought leadership reels on LinkedIn & Instagram.',
  },
  {
    id: 4,
    industry: 'Healthcare',
    category: 'Brand Awareness & Patient Growth',
    client: 'NovaCare Wellness Centers',
    result: '98% Appointment Booking Capacity',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80',
    metrics: [
      { label: 'Patient Inquiries', value: '+210%' },
      { label: 'Cost Per Booking', value: '-38%' },
      { label: 'Google Review Score', value: '4.9★' },
    ],
    accentColor: '#FFD67A',
    summary: 'Engineered hyper-local Google Maps SEO, trust-centered patient documentary video spots, and automated SMS appointment workflows.',
  },
];

export const PortfolioSection = () => {
  const [selectedCase, setSelectedCase] = useState(null);

  return (
    <section id="portfolio" className="relative py-28 bg-[#061315] overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 rounded-full bg-[#008F8C]/15 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-24 w-96 h-96 rounded-full bg-[#E5A43A]/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#008F8C]/15 border border-[#008F8C]/40 text-[#FFD67A] text-xs font-semibold tracking-[0.2em] uppercase mb-4"
            >
              PROVEN TRACK RECORD
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#F6F0E5] leading-tight"
            >
              Strategy Is Good.{' '}
              <span className="text-gradient-teal-gold block sm:inline">
                Results Are Better.
              </span>
            </motion.h2>
          </div>

          <p className="text-sm text-[#AAB8B8] max-w-sm font-normal">
            Explore verified growth metrics generated across real estate, e-commerce, healthcare, and higher education.
          </p>
        </div>

        {/* 4 Large Featured Case Study Cards with Real Photos & Hover Transitions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setSelectedCase(project)}
              className="group relative rounded-3xl overflow-hidden bg-[#0A1D1E] border border-white/10 hover:border-[#E5A43A] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,143,140,0.25)] cursor-pointer flex flex-col justify-between"
            >
              {/* Visual Presentation Canvas with Real Photographic Imagery */}
              <div className="relative h-64 sm:h-76 w-full overflow-hidden p-8 flex flex-col justify-between">
                
                {/* Background Image: scales 1 -> 1.08 on hover */}
                <img
                  src={project.image}
                  alt={project.client}
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700 ease-out filter brightness-70 contrast-105"
                  loading="lazy"
                />

                {/* Dark Teal / Black Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1D1E] via-[#0A1D1E]/60 to-[#061315]/40 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Top Header Tags */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-3.5 py-1 rounded-full bg-[#061315]/90 backdrop-blur-md border border-[#008F8C]/50 text-xs font-semibold text-[#FFD67A] uppercase tracking-wider">
                      {project.industry}
                    </span>
                    <span className="text-xs text-[#F6F0E5]/90 hidden sm:inline bg-black/40 backdrop-blur-sm px-2.5 py-0.5 rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* Circular Action Arrow that rotates 0 -> 45deg on hover */}
                  <div className="w-10 h-10 rounded-full bg-[#061315]/90 border border-white/20 group-hover:border-[#E5A43A] group-hover:bg-[#E5A43A] flex items-center justify-center text-[#F6F0E5] group-hover:text-[#061315] transition-all duration-300 shadow-md">
                    <ArrowUpRight className="w-5 h-5 transform group-hover:rotate-45 transition-transform duration-300" />
                  </div>
                </div>

                {/* Big Result Badge inside Visual */}
                <div className="relative z-10 transform transition-transform duration-500 group-hover:-translate-y-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#AAB8B8] block mb-1">
                    Primary Key Metric
                  </span>
                  <div className="text-2xl sm:text-3xl font-extrabold font-heading text-[#F6F0E5] group-hover:text-[#FFD67A] transition-colors drop-shadow-md">
                    {project.result}
                  </div>
                </div>
              </div>

              {/* Bottom Details Section */}
              <div className="p-7 flex flex-col justify-between flex-1 bg-[#0A1D1E]">
                <div>
                  <h3 className="text-xl font-heading font-bold text-[#F6F0E5] group-hover:text-white transition-colors mb-2">
                    {project.client}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#AAB8B8] line-clamp-2 leading-relaxed font-normal">
                    {project.summary}
                  </p>
                </div>

                {/* Metrics 3-Col Bar */}
                <div className="mt-6 pt-5 border-t border-white/10 grid grid-cols-3 gap-2">
                  {project.metrics.map((m, mIdx) => (
                    <div key={mIdx}>
                      <span className="text-[10px] uppercase font-semibold text-[#AAB8B8] block truncate">
                        {m.label}
                      </span>
                      <span className="text-sm sm:text-base font-bold font-heading text-[#FFD67A]">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA sliding in from bottom */}
                <div className="mt-5 pt-3 flex items-center justify-between text-xs font-semibold text-[#008F8C] group-hover:text-[#FFD67A] transition-colors">
                  <span>View Case Study Breakdown</span>
                  <span className="transform translate-x-0 group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Case Study Modal Breakdown */}
      <AnimatePresence>
        {selectedCase && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[#0A1D1E] border border-[#008F8C]/60 rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.9)] max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedCase(null)}
                className="absolute top-5 right-5 text-gray-400 hover:text-white text-2xl font-light cursor-pointer"
              >
                ✕
              </button>

              <div className="relative h-48 sm:h-56 w-full rounded-2xl overflow-hidden mb-6">
                <img src={selectedCase.image} alt={selectedCase.client} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1D1E] via-transparent to-black/30" />
                <div className="absolute bottom-4 left-4">
                  <div className="inline-block px-3 py-1 rounded-full bg-[#008F8C]/90 border border-[#008F8C] text-[#F6F0E5] text-xs font-semibold tracking-wider uppercase">
                    {selectedCase.industry} • {selectedCase.category}
                  </div>
                </div>
              </div>

              <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#F6F0E5] mb-2">
                {selectedCase.client}
              </h3>

              <div className="text-lg font-bold text-[#FFD67A] mb-4">
                Achieved: {selectedCase.result}
              </div>

              <p className="text-sm text-[#AAB8B8] leading-relaxed mb-6 font-normal">
                {selectedCase.summary}
              </p>

              {/* Verified Metrics in Modal */}
              <div className="grid grid-cols-3 gap-4 p-4 rounded-2xl bg-[#061315] border border-white/10 mb-6">
                {selectedCase.metrics.map((m, i) => (
                  <div key={i} className="text-center">
                    <span className="text-[11px] text-[#AAB8B8] block">{m.label}</span>
                    <span className="text-lg font-bold text-[#FFD67A]">{m.value}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setSelectedCase(null)}
                  className="px-5 py-2.5 rounded-full border border-white/20 text-xs font-semibold text-white hover:bg-white/5 cursor-pointer"
                >
                  Close
                </button>
                <a
                  href="/contact"
                  onClick={() => setSelectedCase(null)}
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#008F8C] to-[#006B69] hover:from-[#E5A43A] hover:to-[#FFD67A] text-white hover:text-black font-semibold text-xs transition-colors flex items-center gap-2 cursor-pointer"
                >
                  Request Similar Strategy →
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;
