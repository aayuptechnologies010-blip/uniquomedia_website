import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import UniquoLogo from './UniquoLogo';
import PremiumButton from './PremiumButton';

const servicesList = [
  { name: 'Digital Marketing', desc: 'Full-funnel organic & paid growth acceleration', path: '/services#digital-marketing' },
  { name: 'SEO', desc: 'Organic visibility, technical optimization & high-intent traffic', path: '/services#seo' },
  { name: 'Social Media Marketing', desc: 'Engaging content & community building at scale', path: '/services#social-media' },
  { name: 'Google Ads / PPC', desc: 'High-ROI search, performance max & display campaigns', path: '/services#google-ads' },
  { name: 'Meta Ads', desc: 'Hyper-targeted Instagram & Facebook conversion campaigns', path: '/services#meta-ads' },
  { name: 'Content Marketing', desc: 'Storytelling, video production & inbound authority', path: '/services#content' },
  { name: 'Branding', desc: 'Identity design, positioning & brand guidelines', path: '/services#branding' },
  { name: 'Website Design & Development', desc: 'Fast, high-converting interactive digital experiences', path: '/services#web-development' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Our Process', path: '/process' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'py-3 bg-[#061315]/90 backdrop-blur-md border-b border-[#008F8C]/20 shadow-[0_10px_30px_rgba(0,0,0,0.6)]'
            : 'py-5 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo with Real Asset */}
          <Link to="/" className="outline-none">
            <UniquoLogo />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <NavLink
                      to={link.path}
                      className={({ isActive: isLinkActive }) =>
                        `group flex items-center gap-1.5 text-sm font-medium transition-colors py-1 cursor-pointer ${
                          isLinkActive ? 'text-[#FFD67A]' : 'text-[#F6F0E5] hover:text-[#FFD67A]'
                        }`
                      }
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 text-[#008F8C] transition-transform duration-300 ${
                          isServicesOpen ? 'rotate-180 text-[#FFD67A]' : ''
                        }`}
                      />
                      {/* Animated Teal -> Gold Underline */}
                      <span
                        className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#008F8C] to-[#E5A43A] transition-all duration-300 ease-out ${
                          isActive ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                      />
                    </NavLink>

                    {/* Services Animated Dropdown */}
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.97 }}
                          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute top-full -left-20 w-[420px] pt-3 pointer-events-auto"
                        >
                          <div className="p-4 rounded-2xl bg-[#0A1D1E]/95 backdrop-blur-xl border border-[#008F8C]/40 shadow-[0_20px_50px_rgba(0,0,0,0.85)] glow-teal">
                            <div className="flex items-center justify-between mb-3 px-3">
                              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#FFD67A]">
                                Our Core Solutions
                              </span>
                              <Link
                                to="/services"
                                onClick={() => setIsServicesOpen(false)}
                                className="text-[11px] text-[#008F8C] hover:text-[#FFD67A] transition-colors"
                              >
                                View All →
                              </Link>
                            </div>
                            <div className="grid grid-cols-1 gap-1">
                              {servicesList.map((service, idx) => (
                                <Link
                                  key={idx}
                                  to={service.path}
                                  onClick={() => setIsServicesOpen(false)}
                                  className="group flex flex-col p-2.5 rounded-xl hover:bg-[#008F8C]/15 transition-all duration-200 border border-transparent hover:border-[#008F8C]/30"
                                >
                                  <div className="flex items-center justify-between">
                                    <span className="text-sm font-semibold text-[#F6F0E5] group-hover:text-[#FFD67A] transition-colors">
                                      {service.name}
                                    </span>
                                    <ArrowRight className="w-3.5 h-3.5 text-[#008F8C] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                  </div>
                                  <span className="text-xs text-[#AAB8B8] mt-0.5 font-normal line-clamp-1">
                                    {service.desc}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive: isLinkActive }) =>
                    `group relative text-sm font-medium transition-colors py-1 ${
                      isLinkActive ? 'text-[#FFD67A]' : 'text-[#F6F0E5] hover:text-[#FFD67A]'
                    }`
                  }
                >
                  <span>{link.name}</span>
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#008F8C] to-[#E5A43A] transition-all duration-300 ease-out ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </NavLink>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <PremiumButton onClick={() => navigate('/contact')} variant="primary" icon="arrow">
              Get Free Consultation
            </PremiumButton>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              className="p-2.5 rounded-xl bg-[#0A1D1E] border border-[#008F8C]/30 text-[#F6F0E5] hover:text-[#FFD67A] hover:border-[#E5A43A] transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-[#061315]/80 backdrop-blur-sm z-50 lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 220 }}
              className="fixed top-0 right-0 bottom-0 w-[84%] max-w-sm bg-[#0A1D1E] border-l border-[#008F8C]/30 p-6 z-50 flex flex-col justify-between overflow-y-auto lg:hidden"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-white/10">
                  <UniquoLogo onClick={() => setMobileMenuOpen(false)} />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Close menu"
                    className="p-2 rounded-lg text-[#AAB8B8] hover:text-white hover:bg-white/5"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="mt-8 flex flex-col gap-3">
                  {navLinks.map((link, idx) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * idx }}
                    >
                      <NavLink
                        to={link.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={({ isActive: isLinkActive }) =>
                          `text-lg font-heading font-semibold py-2.5 px-3 rounded-xl flex items-center justify-between transition-colors ${
                            isLinkActive
                              ? 'bg-[#008F8C]/20 text-[#FFD67A] border border-[#008F8C]/40'
                              : 'text-[#F6F0E5] hover:text-[#FFD67A] hover:bg-white/5'
                          }`
                        }
                      >
                        <span>{link.name}</span>
                        <ArrowRight className="w-4 h-4 text-[#008F8C]" />
                      </NavLink>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <PremiumButton
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigate('/contact');
                  }}
                  variant="gold"
                  className="w-full justify-center"
                >
                  Get Free Consultation
                </PremiumButton>
                <div className="text-center text-xs text-[#AAB8B8] mt-4 font-mono">
                  info@uniquomedia.com • +91 98765 43210
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
