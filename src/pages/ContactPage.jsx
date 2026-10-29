import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ContactSection from '../components/ContactSection';
import WhyChooseUs from '../components/WhyChooseUs';

export const ContactPage = () => {
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
              src="/banners/contact-banner.jpg"
              alt="Let's Create Something That Grows Together - Contact Uniquo Media"
              className="w-full h-full object-contain object-center pointer-events-none"
              loading="eager"
            />
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
