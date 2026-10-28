import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const testimonials = [
  {
    id: 1,
    name: 'Vikramaditya Singhania',
    role: 'Managing Director',
    company: 'Skyline Luxury Properties',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80',
    review:
      'Uniquo Media completely revolutionized our digital pipeline. Their targeted campaign for our high-end residential towers delivered over 1,800 ultra-qualified inquiries, scaling our quarterly bookings past $14M in record time. Truly world-class strategists.',
  },
  {
    id: 2,
    name: 'Ananya Deshmukh',
    role: 'Head of Growth & Brand',
    company: 'Aura Lifestyle D2C',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80',
    review:
      'Before Uniquo, our paid ads had plateaued at 2.1x ROAS. In just 90 days of onboarding their creative sprint team, our blended return skyrocketed to 5.2x while cutting customer acquisition costs in half. Their weekly insights are indispensably precise.',
  },
  {
    id: 3,
    name: 'Dr. Rajiv Menon',
    role: 'Chief Medical Officer',
    company: 'NovaCare Wellness Clinics',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80',
    review:
      'Patient acquisition in healthcare requires empathy and trust. Uniquo Media designed a thoughtful local SEO and video documentary campaign that filled our consult calendars to 98% capacity within 60 days. Highly ethical and transparent.',
  },
  {
    id: 4,
    name: 'Priya Sundaram',
    role: 'Dean of Admissions',
    company: 'Apex Global Business School',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80',
    review:
      'Our applicant quality improved by 340% following Uniquo Media’s omnichannel strategy. They do not just drive clicks—they deeply study prospective student decision triggers and craft messaging that converts with surgical precision.',
  },
];

export const Testimonials = () => {
  return (
    <section className="relative py-28 bg-[#061315] overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#008F8C]/10 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#008F8C]/15 border border-[#008F8C]/40 text-[#FFD67A] text-xs font-semibold tracking-[0.2em] uppercase mb-4"
          >
            CLIENT VALIDATION
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#F6F0E5] leading-tight"
          >
            Don't Take Our Word For It.{' '}
            <span className="text-gradient-teal-gold block">
              Hear From Our Clients.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-4 text-base sm:text-lg text-[#AAB8B8]"
          >
            Discover how visionary founders and enterprise marketing leaders scale their digital footprints with Uniquo Media.
          </motion.p>
        </div>

        {/* Swiper Carousel */}
        <div className="relative px-2 sm:px-10">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={28}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
            loop={true}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            className="pb-16"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id} className="h-auto">
                <div className="h-full rounded-3xl p-8 bg-[#0A1D1E] border border-white/10 hover:border-[#008F8C]/60 hover:shadow-[0_0_35px_rgba(0,143,140,0.25)] transition-all duration-400 flex flex-col justify-between group">
                  <div>
                    {/* Top Row: 5 Stars & Quote Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-1 text-[#FFD67A]">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-[#FFD67A]" />
                        ))}
                      </div>
                      <Quote className="w-6 h-6 text-[#008F8C]/40 group-hover:text-[#FFD67A] transition-colors" />
                    </div>

                    {/* Review Paragraph */}
                    <p className="text-sm sm:text-base text-[#F6F0E5]/90 leading-relaxed font-normal mb-8 italic">
                      "{item.review}"
                    </p>
                  </div>

                  {/* Client Author Info with Real Executive Portraits */}
                  <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-13 h-13 rounded-full object-cover border-2 border-[#008F8C] shadow-md flex-shrink-0"
                    />
                    <div>
                      <div className="font-heading font-bold text-base text-[#F6F0E5] group-hover:text-[#FFD67A] transition-colors">
                        {item.name}
                      </div>
                      <div className="text-xs text-[#AAB8B8]">
                        {item.role} • <span className="text-[#008F8C] font-semibold">{item.company}</span>
                      </div>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <div className="hidden sm:flex items-center justify-center gap-4 mt-4">
            <button
              className="swiper-button-prev-custom w-11 h-11 rounded-full bg-[#0A1D1E] border border-white/10 hover:border-[#E5A43A] text-white hover:text-[#FFD67A] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              className="swiper-button-next-custom w-11 h-11 rounded-full bg-[#0A1D1E] border border-white/10 hover:border-[#E5A43A] text-white hover:text-[#FFD67A] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
