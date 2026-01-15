import React from 'react';
import type { TourismContent } from '../types';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

interface TourismProps {
  content: TourismContent;
  onNavigateToContact?: () => void;
}

const ItineraryCard: React.FC<{ itinerary: TourismContent['itineraries'][0] }> = ({ itinerary }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-500 flex flex-col h-full"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={itinerary.image}
          alt={itinerary.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <h3 className="absolute bottom-4 left-6 right-6 text-white font-bold text-lg leading-tight">
          {itinerary.title}
        </h3>
      </div>

      <div className="p-8 flex-grow relative">
        {/* Timeline Line */}
        <div className="absolute left-[39px] top-10 bottom-10 w-0.5 bg-slate-100 group-hover:bg-amber-100 transition-colors duration-500"></div>

        <div className="space-y-8 relative">
          {itinerary.points.map((point, i) => {
            // Logic to split "Location – Description" or "Location: Description"
            const parts = point.split(/[–—:]/);
            const destination = parts[0].trim();
            const description = parts.length > 1 ? parts.slice(1).join('–').trim() : '';

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 relative z-10"
              >
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-amber-400 mt-2 shadow-[0_0_0_4px_rgba(251,191,36,0.1)] group-hover:shadow-[0_0_0_6px_rgba(251,191,36,0.2)] transition-all"></div>
                <div>
                  <h4 className="text-[#0A2342] font-bold text-sm mb-1">{destination}</h4>
                  {description && (
                    <p className="text-slate-500 text-xs leading-relaxed font-medium">
                      {description}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

const ComparisonCard: React.FC<{
  program: TourismContent['comparisonPrograms'][0],
  onNavigateToContact?: () => void
}> = ({ program, onNavigateToContact }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 flex flex-col h-full relative overflow-hidden group"
  >
    {program.name.includes("VIP") && (
      <div className="absolute top-4 right-[-35px] bg-amber-400 text-[#0A2342] text-[10px] font-bold py-1 px-10 rotate-45 shadow-sm uppercase tracking-wider">
        Elite Choice
      </div>
    )}

    <div className="mb-6">
      <span className="text-amber-600 font-bold text-xs uppercase tracking-widest">{program.focus}</span>
      <h3 className="text-2xl font-bold text-[#0A2342] mt-1">{program.name}</h3>
    </div>

    <p className="text-slate-600 mb-8 leading-relaxed">{program.description}</p>

    <div className="flex-grow">
      <h4 className="font-bold text-slate-800 text-sm mb-4 flex items-center">
        <span className="bg-slate-100 w-6 h-[2px] me-2"></span>
        Key Unique Features
      </h4>
      <ul className="space-y-3 mb-10">
        {program.uniqueFeatures.map((feature, i) => (
          <li key={i} className="flex items-start group/item">
            <Check className="w-5 h-5 text-green-500 me-3 mt-0.5 flex-shrink-0" />
            <span className="text-slate-600 text-sm transition-colors group-hover/item:text-slate-900">{feature}</span>
          </li>
        ))}
      </ul>
    </div>

    <div className="mt-auto">
      <div className="mb-6 text-center">
        <span className="text-slate-400 text-xs font-semibold uppercase">{program.priceHint}</span>
      </div>
      <button
        onClick={onNavigateToContact}
        className="w-full flex items-center justify-center gap-2 bg-[#0A2342] text-white font-bold py-4 px-6 rounded-2xl hover:bg-slate-800 transition-all duration-300 group-hover:shadow-lg transform group-hover:-translate-y-1"
      >
        Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  </motion.div>
);

const Tourism: React.FC<TourismProps> = ({ content, onNavigateToContact }) => {
  return (
    <div id={content.id} className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={content.heroImage}
            alt={content.pageTitle}
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="bg-amber-100 text-amber-800 text-xs font-bold py-2 px-4 rounded-full uppercase tracking-widest mb-6 inline-block">
              Discovery & Leisure
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-[#0A2342] mb-8 leading-[1.1]">
              {content.pageTitle}
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium">
              {content.intro}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Itineraries Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2342] text-center mb-4">
              {content.itinerariesTitle}
            </h2>
            <div className="w-20 h-1.5 bg-amber-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {content.itineraries.map((itinerary, i) => (
              <ItineraryCard
                key={i}
                itinerary={itinerary}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0A2342] mb-6">
              {content.comparisonTitle}
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              Choose the program that best aligns with your goals, from exploration to investment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {content.comparisonPrograms.map((program, i) => (
              <ComparisonCard
                key={i}
                program={program}
                onNavigateToContact={onNavigateToContact}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.95 }}
            viewport={{ once: true }}
            className="bg-[#0A2342] rounded-[40px] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl"
          >
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                {content.ctaBlock.title}
              </h2>
              <p className="text-xl text-slate-300 mb-12 leading-relaxed">
                {content.ctaBlock.text}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onNavigateToContact}
                className="bg-amber-400 text-[#0A2342] font-black py-5 px-12 rounded-2xl hover:bg-amber-300 transition-colors duration-300 text-lg shadow-xl"
              >
                {content.ctaBlock.button}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Tourism;