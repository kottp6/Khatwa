import React, { useState } from 'react';
import type { FounderLink } from '../types';
import { CheckCircle, X, Sparkles, MessageCircle, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import profile from '../assets/profile.webp';

interface AboutProps {
  content: {
    title: string;
    intro: string;
    founderTitle: string;
    founderName: string;
    founderCredentials: string;
    founderBio: string;
    founderLinks: FounderLink[];
    partnersTitle: string;
    partnersIntro: string;
    partnersList: string[];
    activitiesTitle: string;
    activitiesText: string;
  };
}

const About: React.FC<AboutProps> = ({ content }) => {
  const [isImageOpen, setIsImageOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <>
      <section id="about" className="relative py-32 overflow-hidden bg-white">
        {/* Immersive Background Decorations */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-[10%] -left-[5%] w-[40%] h-[40%] rounded-full bg-amber-100/30 blur-[120px]"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              x: [0, -50, 0],
              y: [0, -30, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[10%] -right-[5%] w-[45%] h-[45%] rounded-full bg-blue-100/30 blur-[150px]"
          />
          <div className="absolute inset-0 opacity-[0.02] mix-blend-multiply" style={{ backgroundImage: 'radial-gradient(#0A2342 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }} />
        </div>

        <div className="container relative mx-auto px-6 z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="max-w-7xl mx-auto"
          >
            {/* Header Section */}
            <motion.div variants={itemVariants} className="text-center mb-24">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A2342]/5 text-[#0A2342] mb-6 text-sm font-bold tracking-widest uppercase">
                <Sparkles size={16} className="text-[#D9B44A]" />
                <span>Our Story</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-[#0A2342] mb-8 tracking-tight leading-tight">
                {content.title}
              </h2>
              <p className="text-xl md:text-2xl text-slate-500 font-light max-w-4xl mx-auto leading-relaxed">
                {content.intro}
              </p>
            </motion.div>

            {/* Founder + Bio Grid */}
            <div className="grid lg:grid-cols-12 gap-12 mb-24">
              {/* Founder Card with 3D Effect */}
              <motion.div
                variants={itemVariants}
                className="lg:col-span-5 perspective-1000"
              >
                <motion.div
                  whileHover={{ rotateY: 5, rotateX: -2, y: -10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="bg-white rounded-[2.5rem] p-10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-slate-100 relative group"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#D9B44A]/10 rounded-full blur-2xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />

                  <div
                    className="relative w-48 h-48 mx-auto mb-8 cursor-pointer group/image"
                    onClick={() => setIsImageOpen(true)}
                  >
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="w-full h-full relative"
                    >
                      <img
                        src={profile}
                        alt={content.founderName}
                        className="w-full h-full rounded-full object-contain bg-white border-4 border-[#D9B44A] shadow-lg relative z-10"
                      />
                      <div className="absolute inset-0 rounded-full ring-8 ring-[#D9B44A]/10 animate-pulse" />
                    </motion.div>

                    <div className="absolute inset-0 bg-[#0A2342]/40 rounded-full opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20 backdrop-blur-[2px]">
                      <span className="text-white text-sm font-bold tracking-widest uppercase">View Photo</span>
                    </div>
                  </div>

                  <div className="text-center relative z-10">
                    <h4 className="text-3xl font-black text-[#0A2342] mb-2">{content.founderName}</h4>
                    <p className="text-[#D9B44A] font-bold text-lg uppercase tracking-wider mb-8">{content.founderCredentials}</p>

                    <div className="flex flex-wrap justify-center gap-4">
                      {content.founderLinks.map(({ icon: Icon, text, url }) => (
                        <a
                          key={url}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-50 text-slate-600 hover:bg-[#0A2342] hover:text-white transition-all duration-300 border border-slate-100 shadow-sm"
                        >
                          <Icon size={16} />
                          <span className="text-xs font-bold uppercase tracking-widest">{text}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Founder Bio Panel */}
              <motion.div variants={itemVariants} className="lg:col-span-7 flex flex-col">
                <div className="bg-slate-50/50 backdrop-blur-xl rounded-[2.5rem] p-10 md:p-14 border border-slate-100 flex-grow shadow-sm">
                  <h3 className="text-3xl md:text-4xl font-black text-[#0A2342] mb-10 flex items-center gap-4">
                    <div className="w-12 h-1.5 bg-[#D9B44A] rounded-full" />
                    {content.founderTitle}
                  </h3>
                  <p className="text-slate-600 text-xl leading-relaxed font-light">
                    {content.founderBio}
                  </p>

                  <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="flex flex-col gap-1">
                      <span className="text-3xl font-black text-[#0A2342]">15+</span>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Years Exp.</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-3xl font-black text-[#0A2342]">500+</span>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Students</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-3xl font-black text-[#0A2342]">100%</span>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Dedication</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-3xl font-black text-[#0A2342]">24/7</span>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Support</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Pillars Section */}
            <div className="grid md:grid-cols-2 gap-12">
              {/* Partners Panel */}
              <motion.div variants={itemVariants}>
                <div className="bg-white rounded-[2.5rem] p-10 md:p-12 border border-slate-100 shadow-xl h-full group">
                  <h3 className="text-3xl font-black text-[#0A2342] mb-8">{content.partnersTitle}</h3>
                  <p className="text-slate-500 mb-10 text-lg leading-relaxed">
                    {content.partnersIntro}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {content.partnersList.map((partner, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ x: 10 }}
                        className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50/50 border border-slate-50 transition-colors hover:border-[#D9B44A]/30"
                      >
                        <div className="w-8 h-8 rounded-full bg-[#D9B44A]/10 flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-[#D9B44A]" />
                        </div>
                        <span className="font-bold text-slate-700 text-sm leading-tight">{partner}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* High-Impact Activities Panel */}
              <motion.div variants={itemVariants}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-[#0A2342] to-[#163a66] text-white rounded-[2.5rem] p-10 md:p-12 shadow-2xl h-full relative overflow-hidden"
                >
                  <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute top-10 right-10 opacity-10">
                    <Sparkles size={80} />
                  </div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8">
                      <Heart className="text-[#D9B44A]" size={32} />
                    </div>
                    <h3 className="text-3xl font-black mb-8">
                      {content.activitiesTitle}
                    </h3>
                    <p className="text-xl leading-relaxed text-white/90 font-light italic">
                      " {content.activitiesText} "
                    </p>

                    <div className="mt-12 flex items-center gap-4">
                      <div className="flex -space-x-4">
                        {[1, 2, 3].map(i => (
                          <div key={i} className="w-12 h-12 rounded-full border-4 border-[#0A2342] bg-slate-400 overflow-hidden">
                            <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="avatar" className="w-full h-full object-cover" />
                          </div>
                        ))}
                      </div>
                      <span className="text-sm font-bold text-[#D9B44A]">+ Many More Students</span>
                    </div>
                  </div>
                </motion.div>
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
            className="fixed inset-0 z-[1000] bg-black/95 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setIsImageOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full"
            >
              <button
                onClick={() => setIsImageOpen(false)}
                className="absolute -top-16 right-0 text-white hover:text-[#D9B44A] transition-colors p-2"
              >
                <X size={40} />
              </button>
              <img
                src={profile}
                alt={content.founderName}
                className="w-full h-auto rounded-3xl shadow-2xl border-2 border-white/10"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default About;
