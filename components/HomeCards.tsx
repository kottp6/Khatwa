import React from 'react';
import type { HomeCard, Page } from '../types';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for merging tailwind classes (can be moved to a shared utils file later)
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface HomeCardsProps {
  content: {
    id: string;
    title: string;
    cards: HomeCard[];
  };
  onCardClick: (page: Page) => void;
  language?: string;
}

const HomeCards: React.FC<HomeCardsProps> = ({ content, onCardClick, language = 'en' }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id={content.id} className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-[10%] right-[10%] w-[400px] h-[400px] rounded-full bg-blue-100/60 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="inline-block relative text-3xl md:text-5xl font-bold text-slate-800 tracking-tight">
            {content.title}
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-[#D9B44A] rounded-full" />
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {content.cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.page}
                variants={cardVariants}
                className="group relative bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] transition-shadow duration-300 border border-slate-100 overflow-hidden"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D9B44A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="bg-slate-50 p-5 rounded-full mb-6 group-hover:bg-[#0A2342] transition-colors duration-300 shadow-sm group-hover:shadow-md">
                  <Icon className="w-8 h-8 text-[#0A2342] group-hover:text-[#D9B44A] transition-colors duration-300" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-4 group-hover:text-[#0A2342] transition-colors">
                  {card.title}
                </h3>

                <p className={cn(
                  "text-slate-600 flex-grow mb-8 leading-relaxed",
                  language === 'ar' ? "text-lg leading-loose font-medium" : "text-base"
                )}>
                  {card.description}
                </p>

                <button
                  onClick={() => onCardClick(card.page)}
                  className="mt-auto relative inline-flex items-center justify-center font-bold text-[#0A2342] group/btn overflow-hidden"
                >
                  <span className="relative z-10 flex items-center group-hover/btn:text-[#D9B44A] transition-colors duration-300">
                    {card.cta}
                    <ArrowRight className="w-5 h-5 ms-2 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HomeCards;
