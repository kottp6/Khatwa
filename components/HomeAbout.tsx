import React, { useState } from 'react';
import type { FounderLink } from '../types';
import { ArrowRight, X } from 'lucide-react';
import profile from '../assets/profile.jpg';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for merging tailwind classes
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

const HomeAbout: React.FC<HomeAboutProps> = ({ content, onNavigate, language = 'en' }) => {
  const [isImageOpen, setIsImageOpen] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
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
    <>
      <section className="relative py-24 overflow-hidden bg-slate-50">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-100/50 blur-3xl opacity-60" />
          <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] rounded-full bg-amber-100/50 blur-3xl opacity-60" />
        </div>

        <div className="container relative mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="max-w-6xl mx-auto"
          >
            {/* Header Section */}
            <motion.div variants={itemVariants} className="text-center mb-16 md:mb-20">
              <h2 className="inline-block relative z-10 text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
                {content.title}
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-[#D9B44A]/20 -z-10 rounded-sm transform -rotate-1"></span>
              </h2>
              <p className={cn(
                "max-w-3xl mx-auto text-slate-600 leading-relaxed font-light",
                language === 'ar' ? "text-xl md:text-2xl leading-loose font-medium" : "text-lg md:text-xl"
              )}>
                {content.intro}
              </p>
            </motion.div>

            {/* Main Content Grid */}
            <div className="grid md:grid-cols-12 gap-12 lg:gap-20 items-center mb-16">

              {/* Profile Card */}
              <motion.div
                variants={itemVariants}
                className="md:col-span-5 lg:col-span-4"
              >
                <div className="relative group perspective-1000">
                  <motion.div
                    whileHover={{ scale: 1.02, rotateY: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 z-10"
                  >
                    {/* Card Header Background */}
                    <div className="h-24 bg-gradient-to-r from-[#0A2342] to-[#163a66]" />

                    <div className="px-8 pb-8 text-center -mt-12">
                      <div
                        className="relative w-40 h-40 mx-auto mb-6 cursor-pointer group-hover:shadow-lg transition-shadow duration-300 rounded-full"
                        onClick={() => setIsImageOpen(true)}
                      >
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#D9B44A] to-amber-200 p-1">
                          <img
                            src={profile}
                            alt={content.founderName}
                            className="w-full h-full rounded-full object-contain bg-white border-4 border-[#D9B44A]"
                          />
                        </div>
                        <div className="absolute inset-0 rounded-full bg-black/0 group-hover:bg-black/10 flex items-center justify-center transition-colors duration-300">
                          <span className="opacity-0 group-hover:opacity-100 text-white font-medium text-sm bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">View</span>
                        </div>
                      </div>

                      <h4 className="text-2xl font-bold text-slate-900 mb-1">{content.founderName}</h4>
                      <p className="text-[#D9B44A] font-semibold text-sm uppercase tracking-wider mb-6">{content.founderCredentials}</p>

                      <div className="flex flex-wrap justify-center gap-3">
                        {content.founderLinks.map(({ icon: Icon, url, text }) => (
                          <a
                            key={url}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-slate-600 bg-slate-50 hover:bg-[#0A2342] hover:text-white rounded-full transition-all duration-300 shadow-sm hover:shadow"
                          >
                            <Icon className="w-4 h-4 mr-2" />
                            {text}
                          </a>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                  {/* Decorative card shadow element */}
                  <div className="absolute inset-0 bg-[#D9B44A] rounded-2xl transform translate-x-3 translate-y-3 -z-10 opacity-30" />
                </div>
              </motion.div>

              {/* Bio / Text Area */}
              <motion.div
                variants={itemVariants}
                className="md:col-span-7 lg:col-span-8"
              >
                <div className="prose prose-lg prose-slate max-w-none">
                  <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                    <span className="w-8 h-1 bg-[#D9B44A] mr-4 rounded-full"></span>
                    {content.ourVisionary}
                  </h3>
                  <p className={cn(
                    "text-slate-600 leading-relaxed mb-8",
                    language === 'ar' ? "text-xl leading-loose" : "text-lg"
                  )}>
                    {content.founderBio || "Driven by a passion for innovation and community, we strive to make every step count. Join us on this journey of transformation and growth."}
                    {/* Fallback text if bio is empty in props */}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-6 mt-8">
                    {content.values.map((item, idx) => (
                      <div key={idx} className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#0A2342] mr-4">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <span className="font-semibold text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-12 flex justify-start">
                  <button
                    onClick={onNavigate}
                    className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-[#0A2342] font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0A2342] hover:bg-[#153457]"
                    role="button"
                  >
                    {content.readMore}
                    <div className="absolute -inset-2 rounded-xl bg-[#D9B44A] opacity-20 group-hover:opacity-40 blur-lg transition-opacity duration-200" />
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Full Screen Image Modal */}
      <AnimatePresence>
        {isImageOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setIsImageOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
            >
              <button
                onClick={() => setIsImageOpen(false)}
                className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors p-2"
                aria-label="Close image"
              >
                <X size={32} />
              </button>

              <img
                src={profile}
                alt={content.founderName}
                className="max-h-[85vh] w-auto object-contain rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HomeAbout;
