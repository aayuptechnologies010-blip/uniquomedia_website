import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import UniquoLogo from './UniquoLogo';

const companyLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Our Process', path: '/process' },
  { name: 'Blog & Insights', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

const serviceLinks = [
  { name: 'Digital Marketing', path: '/services' },
  { name: 'SEO Optimization', path: '/services' },
  { name: 'Social Media Marketing', path: '/services' },
  { name: 'Google Ads / PPC', path: '/services' },
  { name: 'Meta Ads', path: '/services' },
  { name: 'Website Development', path: '/services' },
];

const resourceLinks = [
  { name: 'Verified Case Studies', path: '/portfolio' },
  { name: '7-Stage Growth Framework', path: '/process' },
  { name: 'Marketing ROI Calculator', path: '/contact' },
  { name: 'Privacy Policy', path: '#' },
  { name: 'Terms of Service', path: '#' },
];

const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
    <polygon points="10 15 15 12 10 9 10 15"/>
  </svg>
);

const socialLinks = [
  { icon: InstagramIcon, name: 'Instagram', href: 'https://instagram.com' },
  { icon: FacebookIcon, name: 'Facebook', href: 'https://facebook.com' },
  { icon: LinkedinIcon, name: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: YoutubeIcon, name: 'YouTube', href: 'https://youtube.com' },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#061315] border-t border-white/10 pt-20 pb-12 overflow-hidden">
      {/* Background Top Border Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#008F8C] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Col with actual Uniquo Media logo image */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <Link to="/" className="outline-none">
              <UniquoLogo />
            </Link>
            
            <p className="mt-5 text-sm text-[#AAB8B8] max-w-sm leading-relaxed font-normal">
              Turning ideas into impact through strategy, creativity and performance-driven marketing. We partner with ambitious leaders to engineer sustainable market advantages.
            </p>

            {/* Social Icons with signature gold fill & hover rotation */}
            <div className="mt-8 flex items-center gap-3">
              {socialLinks.map((s, idx) => {
                const IconComponent = s.icon;
                return (
                  <a
                    key={idx}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="w-10 h-10 rounded-full border border-white/15 bg-transparent hover:bg-[#E5A43A] hover:border-[#E5A43A] text-white hover:text-[#061315] flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-8 shadow-sm"
                  >
                    <IconComponent />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Company Col */}
          <div>
            <h4 className="font-heading font-bold text-sm text-[#F6F0E5] tracking-wider uppercase mb-5">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="text-sm text-[#AAB8B8] hover:text-[#FFD67A] transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Col */}
          <div>
            <h4 className="font-heading font-bold text-sm text-[#F6F0E5] tracking-wider uppercase mb-5">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="text-sm text-[#AAB8B8] hover:text-[#FFD67A] transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Col */}
          <div>
            <h4 className="font-heading font-bold text-sm text-[#F6F0E5] tracking-wider uppercase mb-5">
              Resources
            </h4>
            <ul className="flex flex-col gap-3">
              {resourceLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="text-sm text-[#AAB8B8] hover:text-[#FFD67A] transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#AAB8B8]">
          <p>© 2026 Uniquo Media. All Rights Reserved. Crafted for scalable enterprise growth.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A1D1E] border border-white/10 hover:border-[#E5A43A] text-white hover:text-[#FFD67A] transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
