import React from 'react';
import type { Package } from '../types';
import { Check, Star, Users, Info, Award } from 'lucide-react';

interface DigitalNomadVisaProps {
    content: {
        id: string;
        pageTitle: string;
        intro: string;
        benefitsTitle: string;
        benefitsList: string[];
        requirementsTitle: string;
        requirementsList: string[];
        familyTitle?: string;
        familyText?: string;
        packages: Package[];
        servicesTitle?: string;
        servicesList?: string[];
        paymentTitle: string;
        paymentText: string;
        cta: string;
    };
    onNavigateToContact?: () => void;
}

const PackageCard: React.FC<{ pkg: Package, cta: string, onNavigateToContact?: () => void }> = ({ pkg, cta, onNavigateToContact }) => (
    <div className={`bg-white rounded-lg shadow-lg p-8 flex flex-col h-full ${pkg.isPopular ? 'border-2 border-[#D9B44A] transform lg:scale-105' : 'border'}`}>
        {pkg.isPopular && (
            <div className="bg-[#D9B44A] text-[#0A2342] font-bold text-sm py-1 px-4 rounded-full self-center mb-4 -mt-12">
                Most Popular
            </div>
        )}
        <h3 className="text-2xl font-bold text-center text-slate-800 mb-4">{pkg.title}</h3>
        <p className="text-center text-slate-500 mt-2 mb-6 min-h-[6rem]">{pkg.description}</p>
        <ul className="space-y-4 my-8 flex-grow">
            {pkg.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 me-3 flex-shrink-0 mt-1" />
                    <span className="text-slate-600">{feature}</span>
                </li>
            ))}
        </ul>
        <button onClick={onNavigateToContact} className="mt-auto w-full text-center bg-[#0A2342] text-white font-bold py-3 px-8 rounded-full hover:bg-slate-700 transition-colors duration-300">
            {cta}
        </button>
    </div>
);


const DigitalNomadVisa: React.FC<DigitalNomadVisaProps> = ({ content, onNavigateToContact }) => {
    return (
        <section id={content.id} className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800">{content.pageTitle}</h2>
                    <p className="text-slate-500 mt-2 text-lg max-w-4xl mx-auto">{content.intro}</p>
                </div>

                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 text-slate-700">
                    <div className="bg-slate-50 p-6 rounded-lg">
                        <h3 className="font-bold flex items-center mb-2"><Star className="w-5 h-5 me-2 text-[#D9B44A]"/>{content.benefitsTitle}</h3>
                        <ul className="list-disc list-inside text-sm space-y-1">
                            {content.benefitsList.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                    </div>
                     <div className="bg-slate-50 p-6 rounded-lg">
                        <h3 className="font-bold flex items-center mb-2"><Info className="w-5 h-5 me-2 text-[#D9B44A]"/>{content.requirementsTitle}</h3>
                         <ul className="list-disc list-inside text-sm space-y-1">
                            {content.requirementsList.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                    </div>
                    {content.familyTitle && content.familyText && (
                         <div className="bg-slate-50 p-6 rounded-lg">
                            <h3 className="font-bold flex items-center mb-2"><Users className="w-5 h-5 me-2 text-[#D9B44A]"/>{content.familyTitle}</h3>
                            <p className="text-sm">{content.familyText}</p>
                        </div>
                    )}
                </div>

                {content.packages && content.packages.length > 0 && (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 mb-16">
                        {content.packages.map((pkg, index) => (
                            <PackageCard key={index} pkg={pkg} cta={content.cta} onNavigateToContact={onNavigateToContact} />
                        ))}
                    </div>
                )}

                {content.servicesTitle && content.servicesList && content.servicesList.length > 0 && (
                    <div className="max-w-4xl mx-auto mb-16 bg-gray-50 rounded-lg shadow-lg p-8 border border-gray-200">
                        <h3 className="text-2xl font-bold text-center text-slate-800 mb-6">{content.servicesTitle}</h3>
                        <ul className="space-y-4">
                            {content.servicesList.map((service, i) => (
                                <li key={i} className="flex items-start">
                                    <Award className="w-6 h-6 text-[#D9B44A] me-4 flex-shrink-0 mt-1" />
                                    <span className="text-slate-600 leading-relaxed">{service}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}


                <div className="max-w-2xl mx-auto text-center bg-gray-100 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-[#0A2342] mb-2">{content.paymentTitle}</h3>
                    <p className="text-slate-600">{content.paymentText}</p>
                </div>
            </div>
        </section>
    );
};

export default DigitalNomadVisa;