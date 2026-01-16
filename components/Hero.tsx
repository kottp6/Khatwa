import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Slide } from '../types';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for merging tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface HeroProps {
  content: {
    slides: Slide[];
    cta: string;
  };
  language?: string;
}

const Hero: React.FC<HeroProps> = ({ content, language = 'en' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { slides, cta } = content;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isPaused) return;
    const slideInterval = setInterval(nextSlide, 8000);
    return () => clearInterval(slideInterval);
  }, [slides.length, isPaused]);

  // Animation variants for staggered text
  const sentenceVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        staggerChildren: 0.04,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.2, 0.65, 0.3, 0.9] }, // Custom cubic-bezier for "pop"
    },
  };

  const brandLetterVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.5, rotate: -20 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "backOut",
        type: "spring",
        stiffness: 200
      }
    }
  }


  const renderTitle = (title: string) => {
    // Split by the brand name to preserve it as a unit, then split other parts into characters
    const parts = title.split(/(Khatwa|خطوة)/g);

    return (
      <motion.span variants={sentenceVariants} initial="hidden" animate="visible">
        {parts.map((part, index) => {
          if (part === 'Khatwa') {
            return (
              <span key={index} className="inline-block whitespace-nowrap">
                <motion.span variants={brandLetterVariants} className="inline-block text-[#D9B44A]">K</motion.span>
                {'hatwa'.split('').map((char, charIdx) => (
                  <motion.span key={charIdx} variants={letterVariants} className="inline-block">{char}</motion.span>
                ))}
              </span>
            );
          }
          if (part === 'خطوة') {
            return (
              <span key={index} className="inline-block whitespace-nowrap">
                <motion.span variants={brandLetterVariants} className="inline-block text-[#D9B44A]">خ</motion.span>
                {'طوة'.split('').map((char, charIdx) => (
                  <motion.span key={charIdx} variants={letterVariants} className="inline-block">{char}</motion.span>
                ))}
              </span>
            );
          }
          // For Arabic, split by words to preserve connected letters
          if (language === 'ar') {
            return part.split(/(\s+)/).map((segment, segmentIdx) => (
              <motion.span
                key={`${index}-${segmentIdx}`}
                variants={letterVariants}
                className="inline-block whitespace-pre"
              >
                {segment}
              </motion.span>
            ));
          }

          // For other languages (English), split into characters
          return part.split('').map((char, charIdx) => (
            <motion.span key={`${index}-${charIdx}`} variants={letterVariants} className="inline-block min-w-[0.2em] whitespace-pre">
              {char}
            </motion.span>
          ));
        })}
      </motion.span>
    );
  };

  return (
    <section
      id="home"
      className="relative h-screen min-h-[700px] w-full overflow-hidden bg-slate-900"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >

      {/* Background Image Carousel with Ken Burns Effect */}
      <AnimatePresence initial={false} mode="popLayout">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${slides[currentIndex].image}')` }}
          />
          {/* Premium Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-transparent opacity-60" />
        </motion.div>
      </AnimatePresence>

      {/* Content Container */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 container mx-auto">
        <div className="max-w-5xl w-full text-center">

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              {/* Title */}
              <h1
  className={cn(
    "font-bold text-white mb-6 drop-shadow-2xl tracking-tight",
    language === 'ar'
      ? "text-5xl md:text-6xl leading-normal font-medium py-2"
      : language === 'es'
        ? "text-xl sm:text-2xl md:text-3xl lg:text-7xl"
        : "text-2xl md:text-3xl lg:text-7xl"
  )}
>
  {renderTitle(slides[currentIndex].title)}
</h1>

              {/* Subtitle / Description */}
              <p className={cn(
                "text-slate-200 max-w-3xl mx-auto mb-10 drop-shadow-lg",
                language === 'ar'
                  ? "text-xl md:text-2xl leading-loose font-medium opacity-90"
                  : "text-lg md:text-2xl font-light tracking-wide opacity-80"
              )}>
                {slides[currentIndex].subtitle}
              </p>

              {/* CTA Button */}
              <motion.a
                href="#services-overview"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#D9B44A] text-[#0A2342] text-lg font-bold rounded-full overflow-hidden shadow-[0_0_20px_rgba(217,180,74,0.4)] transition-shadow hover:shadow-[0_0_30px_rgba(217,180,74,0.6)]"
              >
                <span className="relative z-10">{cta}</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </motion.a>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-12 pointer-events-none z-30">
        <button
          onClick={prevSlide}
          className="pointer-events-auto w-12 h-12 rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-sm flex items-center justify-center hover:bg-[#D9B44A] hover:text-[#0A2342] hover:border-[#D9B44A] transition-all duration-300 group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
        </button>

        <button
          onClick={nextSlide}
          className="pointer-events-auto w-12 h-12 rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-sm flex items-center justify-center hover:bg-[#D9B44A] hover:text-[#0A2342] hover:border-[#D9B44A] transition-all duration-300 group"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="group relative py-2"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div className={cn(
              "w-12 h-1.5 rounded-full transition-all duration-500",
              index === currentIndex ? "bg-[#D9B44A]" : "bg-white/30 group-hover:bg-white/50"
            )} />
          </button>
        ))}
      </div>
    </section>
  );
};

export default Hero;