import React, { useState } from 'react';
import type { FAQCategory } from '../types';
import { ChevronDown } from 'lucide-react';

interface FAQProps {
  content: {
    pageTitle: string;
    intro: string;
    categories: FAQCategory[];
  };
}

const AccordionItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-5 px-6"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-slate-800">{question}</span>
        <ChevronDown
          size={20}
          className={`text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-5 px-6 text-slate-600 leading-relaxed whitespace-pre-line">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC<FAQProps> = ({ content }) => {
  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">{content.pageTitle}</h2>
          <p className="text-slate-500 mt-2 text-lg max-w-3xl mx-auto">{content.intro}</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {content.categories.map((category) => {
            // FIX: Assign icon to a capitalized variable to use as a JSX component.
            const Icon = category.icon;
            return (
              <div key={category.title}>
                <div className="flex items-center mb-6">
                  <Icon className="w-8 h-8 text-[#D9B44A]" />
                  <h3 className="text-2xl font-bold text-[#0A2342] mx-4">{category.title}</h3>
                  <div className="flex-grow h-px bg-slate-200"></div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  {category.items.map((item, index) => (
                    <AccordionItem key={index} question={item.question} answer={item.answer} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
