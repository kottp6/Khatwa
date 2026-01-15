import React from 'react';
import { CheckCircle, Info, Award, ArrowRight, Map } from 'lucide-react';

interface ProgramPageProps {
    content: {
        id: string;
        pageTitle: string;
        intro: string;
        heroImage: string;
        icon: React.ElementType;
        benefitsTitle: string;
        benefitsList: string[];
        requirementsTitle: string;
        requirementsList: string[];
        servicesTitle?: string;
        servicesList?: string[];
        paymentTitle: string;
        paymentText: string;
        cta: string;
    };
    onNavigateToContact?: () => void;
}

const ProgramPage: React.FC<ProgramPageProps> = ({ content, onNavigateToContact }) => {
    const {
        pageTitle,
        intro,
        heroImage,
        icon: ProgramIcon,
        benefitsTitle,
        benefitsList,
        requirementsTitle,
        requirementsList,
        servicesTitle,
        servicesList,
        paymentTitle,
        paymentText,
        cta
    } = content;

    return (
        <div>
            {/* Hero Section */}
            <section
                className="relative h-[60vh] min-h-[400px] w-full bg-cover bg-center text-white flex items-center justify-center text-center"
                style={{ backgroundImage: `url('${heroImage}')` }}
            >
                <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
                <div className="relative z-20 px-6">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight drop-shadow-lg">
                        {pageTitle}
                    </h1>
                    <p className="text-lg md:text-xl max-w-4xl mx-auto font-light drop-shadow-md">
                        {intro}
                    </p>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        
                        {/* Left Sticky Card */}
                        <aside className="lg:col-span-1 lg:sticky top-24 self-start">
                            <div className="bg-white rounded-lg shadow-xl p-8 border border-gray-100">
                                <div className="flex justify-center mb-6">
                                    <div className="bg-[#D9B44A] p-5 rounded-full inline-flex">
                                        <ProgramIcon className="w-10 h-10 text-[#0A2342]" />
                                    </div>
                                </div>
                                <h2 className="text-2xl font-bold text-slate-800 text-center mb-2">
                                    {pageTitle}
                                </h2>
                                <p className="text-slate-500 text-center mb-6">{intro}</p>
                                <button
                                    onClick={onNavigateToContact}
                                    className="block w-full text-center bg-[#0A2342] text-white font-bold py-3 px-8 rounded-full hover:bg-slate-700 transition-colors duration-300"
                                >
                                    {cta}
                                </button>
                            </div>
                        </aside>

                        {/* Right Content */}
                        <main className="lg:col-span-2 space-y-12">

                            {/* Benefits */}
                            <div className="bg-white p-8 rounded-lg shadow-lg">
                                <h3 className="text-2xl font-bold text-[#0A2342] mb-6 flex items-center">
                                    <Award className="w-7 h-7 me-3 text-[#D9B44A]" />
                                    {benefitsTitle}
                                </h3>
                                <ul className="space-y-4">
                                    {benefitsList.map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <CheckCircle className="w-5 h-5 text-green-500 me-3 mt-1" />
                                            <span className="text-slate-600">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Requirements */}
                            <div className="bg-white p-8 rounded-lg shadow-lg">
                                <h3 className="text-2xl font-bold text-[#0A2342] mb-6 flex items-center">
                                    <Info className="w-7 h-7 me-3 text-[#D9B44A]" />
                                    {requirementsTitle}
                                </h3>
                                <ul className="space-y-4">
                                    {requirementsList.map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <ArrowRight className="w-5 h-5 text-[#D9B44A] me-3 mt-1" />
                                            <span className="text-slate-600">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Services */}
                            {servicesTitle && servicesList && (
                                <div className="bg-white p-8 rounded-lg shadow-lg">
                                    <h3 className="text-2xl font-bold text-[#0A2342] mb-6 flex items-center">
                                        <Award className="w-7 h-7 me-3 text-[#D9B44A]" />
                                        {servicesTitle}
                                    </h3>
                                    <ul className="space-y-4">
                                        {servicesList.map((item, index) => (
                                            <li key={index} className="flex items-start">
                                                <CheckCircle className="w-5 h-5 text-green-500 me-3 mt-1" />
                                                <span className="text-slate-600">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </main>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-[#0A2342]">
                <div className="container mx-auto px-6 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">{paymentTitle}</h2>
                    <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto">
                        {paymentText}
                    </p>
                    <button
                        onClick={onNavigateToContact}
                        className="bg-[#D9B44A] text-[#0A2342] font-bold py-3 px-10 rounded-full hover:bg-yellow-400 transition-all duration-300 text-lg shadow-xl transform hover:scale-105"
                    >
                        {cta}
                    </button>
                </div>
            </section>
        </div>
    );
};

export default ProgramPage;
