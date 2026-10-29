import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const bannerSlides = [
  {
    id: 1,
    image: '/banners/slider-1.png',
    alt: 'Grow Your Brand With Creative Strategy - Uniquo Media',
    buttonTarget: '/contact',
    hasDedicatedButton: false,
  },
  {
    id: 2,
    image: '/banners/slider-2.png',
    alt: 'Turn Your Ideas Into Real Growth - Let\'s Grow Together',
    buttonTarget: '/contact',
    hasDedicatedButton: true,
    buttonPosition: {
      left: '5.2%',
      bottom: '12%',
      width: '18.5%',
      height: '11%',
    },
  },
  {
    id: 3,
    image: '/banners/slider-3.png',
    alt: 'Social Media Management That Gets Results - Boost Your Social Presence',
    buttonTarget: '/contact',
    hasDedicatedButton: true,
    buttonPosition: {
      left: '4.8%',
      bottom: '13%',
      width: '21.5%',
      height: '11%',
    },
  },
  {
    id: 4,
    image: '/banners/slider-4.png',
    alt: 'Result Driven Paid Advertising - Get More Leads Now',
    buttonTarget: '/contact',
    hasDedicatedButton: true,
    buttonPosition: {
      left: '4.8%',
      bottom: '10.5%',
      width: '18.5%',
      height: '11%',
    },
  },
];

export const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto sliding every 5 seconds - Does NOT pause on hover
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % bannerSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % bannerSlides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) nextSlide();
    else if (diff < -50) prevSlide();
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const activeSlide = bannerSlides[current];

  return (
    <section
      id="home"
      className="relative w-full pt-[68px] sm:pt-[76px] overflow-hidden bg-[#061315]"
    >
      {/* Full Width Edge-to-Edge Slider Container */}
      <div
        className="relative w-full select-none group bg-black"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Mobile: 16/9 for taller visibility without cropping; Desktop: aspect-[2048/768] */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[2048/768] overflow-hidden flex items-center justify-center">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={activeSlide.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, ease: 'easeInOut' }}
              className="absolute inset-0 w-full h-full flex items-center justify-center"
            >
              {/* Full Banner Image: 100% visible, never cut on edges */}
              <img
                src={activeSlide.image}
                alt={activeSlide.alt}
                className="w-full h-full object-contain object-center pointer-events-none"
                loading="eager"
              />
            </motion.div>
          </AnimatePresence>

          {/* Previous Arrow Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              prevSlide();
            }}
            aria-label="Previous slide"
            className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-11 sm:h-11 md:w-13 md:h-13 rounded-full bg-black/60 hover:bg-[#008F8C] backdrop-blur-md border border-white/20 text-white transition-all duration-300 flex items-center justify-center shadow-2xl opacity-80 sm:opacity-0 group-hover:opacity-100 focus:opacity-100 active:scale-90 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Next Arrow Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              nextSlide();
            }}
            aria-label="Next slide"
            className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-11 sm:h-11 md:w-13 md:h-13 rounded-full bg-black/60 hover:bg-[#008F8C] backdrop-blur-md border border-white/20 text-white transition-all duration-300 flex items-center justify-center shadow-2xl opacity-80 sm:opacity-0 group-hover:opacity-100 focus:opacity-100 active:scale-90 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Bottom Indicators & Manual Play/Pause */}
          <div className="absolute bottom-1.5 sm:bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5 sm:gap-2.5 px-2.5 sm:px-4 py-1 sm:py-2 rounded-full bg-black/65 backdrop-blur-md border border-white/20 shadow-2xl scale-90 sm:scale-100">
            {bannerSlides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrent(index);
                }}
                aria-label={`Go to slide ${index + 1}`}
                className="py-1 cursor-pointer transition-transform hover:scale-110"
              >
                <span
                  className={`block h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                    current === index
                      ? 'w-6 sm:w-9 bg-gradient-to-r from-[#008F8C] via-[#FFD67A] to-[#E5A43A]'
                      : 'w-1.5 sm:w-2 bg-white/40 hover:bg-white/80'
                  }`}
                />
              </button>
            ))}

            <div className="h-3 w-px bg-white/25 mx-1" />

            <button
              onClick={(e) => {
                e.preventDefault();
                setIsAutoPlaying(!isAutoPlaying);
              }}
              aria-label={isAutoPlaying ? 'Pause slider' : 'Play slider'}
              className="text-white/80 hover:text-[#FFD67A] transition-colors p-0.5 cursor-pointer"
            >
              {isAutoPlaying ? (
                <Pause className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              ) : (
                <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
