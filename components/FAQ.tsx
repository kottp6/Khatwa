import React, { useState } from 'react';
import type { FAQCategory } from '../types';
import { ChevronDown, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQProps {
  content: {
    pageTitle: string;
    intro: string;
    categories: FAQCategory[];
  };
}

const AccordionItem: React.FC<{ question: string; answer: string; language?: string }> = ({ question, answer, language }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      className={`border-b border-slate-100 last:border-0 transition-colors duration-300 ${isOpen ? 'bg-slate-50/50' : 'hover:bg-slate-50/30'}`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-6 px-4 md:px-8 group"
        aria-expanded={isOpen}
      >
        <span className={`font-bold transition-colors duration-300 ${isOpen ? 'text-[#D9B44A]' : 'text-slate-800 group-hover:text-[#0A2342]'} ${language === 'ar' ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'}`}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`flex-shrink-0 ml-4 p-2 rounded-full transition-colors ${isOpen ? 'bg-[#D9B44A] text-[#0A2342]' : 'bg-slate-100 text-slate-500'}`}
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="pb-8 px-4 md:px-8">
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className={`text-slate-600 leading-relaxed whitespace-pre-line border-l-4 border-[#D9B44A] pl-6 py-2 ${language === 'ar' ? 'text-lg md:text-xl border-l-0 border-right-4' : 'text-base md:text-lg'}`}
                style={language === 'ar' ? { borderRightWidth: '4px', borderRightColor: '#D9B44A', borderRightStyle: 'solid', paddingLeft: '0', paddingRight: '24px' } : {}}
              >
                {answer}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ: React.FC<FAQProps> = ({ content }) => {
  // Simple check for Arabic language based on title characters
  const isArabic = /[\u0600-\u06FF]/.test(content.pageTitle);

  return (
    <section id="faq" className="relative py-28 overflow-hidden bg-white">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-50/50 blur-3xl" />
        <div className="absolute bottom-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-amber-50/50 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A2342]/5 text-[#0A2342] mb-6 text-sm font-bold tracking-widest uppercase">
            <Sparkles size={16} className="text-[#D9B44A]" />
            <span>Help Center</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-[#0A2342] mb-8 tracking-tight">
            {content.pageTitle}
          </h2>
          <p className="text-slate-500 text-xl max-w-3xl mx-auto font-light leading-relaxed">
            {content.intro}
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-16">
          {content.categories.map((category, catIdx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: catIdx * 0.1 }}
                className="relative"
              >
                <div className="flex items-center gap-6 mb-8 group">
                  <div className="w-16 h-16 rounded-3xl bg-[#0A2342] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-[#D9B44A]" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-[#0A2342]">{category.title}</h3>
                    <div className="w-20 h-1 bg-[#D9B44A] mt-2 rounded-full transform transition-all duration-300 group-hover:w-32" />
                  </div>
                </div>

                <motion.div
                  className="bg-white/70 backdrop-blur-xl rounded-[2.5rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden"
                >
                  {category.items.map((item, index) => (
                    <AccordionItem
                      key={index}
                      question={item.question}
                      answer={item.answer}
                      language={isArabic ? 'ar' : 'en'}
                    />
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
