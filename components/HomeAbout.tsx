import React from 'react';
import type { FounderLink } from '../types';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface HomeAboutProps {
  content: {
    title: string;
    intro: string;
    founderTitle: string;
    founderName: string;
    founderCredentials: string;
    founderBio: string;
    founderLinks: FounderLink[];
    ourVisionary: string;
    values: string[];
    readMore: string;
  };
  onNavigate: () => void;
  language?: string;
}

const HomeAbout: React.FC<HomeAboutProps> = ({
  content,
  onNavigate,
  language = 'en',
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative py-28 bg-slate-50 overflow-hidden">
      {/* Background accents */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-40 w-[400px] h-[400px] bg-amber-100/40 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 relative inline-block"
          >
            {content.title}
            <span className="absolute -bottom-2 left-0 w-full h-3 bg-[#D9B44A]/30 -z-10 rounded-md" />
          </motion.h2>

          {/* Intro */}
          <motion.p
            variants={itemVariants}
            className={cn(
              'mx-auto max-w-3xl text-slate-600 mb-16',
              language === 'ar'
                ? 'text-xl leading-loose font-medium'
                : 'text-lg md:text-xl leading-relaxed'
            )}
          >
            {content.intro}
          </motion.p>

          {/* Vision */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 flex justify-center items-center gap-4">
              <span className="w-10 h-1 bg-[#D9B44A] rounded-full" />
              {content.ourVisionary}
              <span className="w-10 h-1 bg-[#D9B44A] rounded-full" />
            </h3>

            <p
              className={cn(
                'text-slate-600 max-w-4xl mx-auto',
                language === 'ar'
                  ? 'text-xl leading-loose'
                  : 'text-lg leading-relaxed'
              )}
            >
              {content.founderBio}
            </p>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            variants={itemVariants}
            className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            {content.values.map((value, idx) => (
              <div
                key={idx}
                className="group bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-50 flex items-center justify-center text-[#0A2342] group-hover:scale-110 transition">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="font-semibold text-slate-700">{value}</p>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants}>
            <button
              onClick={onNavigate}
              className="group relative inline-flex items-center gap-3 px-10 py-4 text-base font-bold text-white bg-[#0A2342] rounded-xl hover:bg-[#153457] transition"
            >
              {content.readMore}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              <span className="absolute -inset-2 bg-[#D9B44A]/30 blur-lg opacity-0 group-hover:opacity-100 transition rounded-xl" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeAbout;
