
import React from 'react';
import type { OtherServiceItem } from '../types';

interface OtherServicesProps {
    content: {
        id: string;
        title: string;
        intro: string;
        services: OtherServiceItem[];
    }
}


const OtherServices: React.FC<OtherServicesProps> = ({ content }) => {
  return (
    <section id={content.id} className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">{content.title}</h2>
            <p className="text-slate-500 mt-2 text-lg max-w-3xl mx-auto">{content.intro}</p>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
            {content.services.map((service, i) => (
                <div key={i} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-xl font-bold text-[#0A2342] mb-2">{service.title}</h3>
                    <p className="text-slate-600">{service.description}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default OtherServices;
