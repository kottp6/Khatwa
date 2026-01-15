import React from 'react';
import type { EducationStep, FeaturePoint, Page, ServicePoint } from '../types';
import { AlertCircle, FileText, CheckCircle, ArrowRight, Target, Plane, Building2 } from 'lucide-react';
import { motion } from 'framer-motion'

interface Audience {
    icon: React.ElementType;
    title: string;
    description: string;
}

interface StudyInSpainProps {
    content: {
        id: string;
        pageTitle: string;
        intro: string;
        whyTitle: string;
        whyPoints: FeaturePoint[];
        targetAudience: {
            title: string;
            audiences: Audience[];
        };
        systemTitle: string;
        systemIntro: string;
        systemSteps: EducationStep[];
        systemImage?: string;
        supportTitle: string;
        supportIntro: string;
        supportServices: ServicePoint[];
        docsTitle: string;
        docsList: string[];
        programRefundTitle: string;
        programRefund: string;
        readMoreInfo: string;
    },
    setCurrentPage: (page: Page) => void;
}

export const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

export const cardVariants = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

const TimelineStep: React.FC<{ step: EducationStep, index: number, langDir: string }> = ({ step, index, langDir }) => {
    const isRtl = langDir === 'rtl';
    const isEven = index % 2 === 0;

    const LTR_ROW_REVERSE = 'md:flex-row-reverse';
    const LTR_ROW = 'md:flex-row';
    const LTR_TEXT_RIGHT = 'md:text-right';
    const LTR_TEXT_LEFT = 'md:text-left';

    let rowClass = isEven ? LTR_ROW_REVERSE : LTR_ROW;
    let textAlignClass = isEven ? LTR_TEXT_RIGHT : LTR_TEXT_LEFT;

    if (isRtl) {
        rowClass = isEven ? LTR_ROW : LTR_ROW_REVERSE;
        textAlignClass = isEven ? LTR_TEXT_LEFT : LTR_TEXT_RIGHT;
    }

    const finalItemClasses = `mb-8 flex justify-between items-center w-full ${rowClass}`;
    const finalContentClasses = `order-1 bg-white rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4 ${textAlignClass}`;




    return (
        <div className={finalItemClasses} >
            <div className="order-1 md:w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-[#0A2342] shadow-xl w-14 h-14 rounded-full">
                <h1 className="mx-auto font-bold text-lg text-white">{step.level}</h1>
            </div>
            <div className={finalContentClasses}>
                <h3 className="font-bold text-gray-800 text-xl">{step.title}</h3>
                <p className="text-sm font-medium text-[#D9B44A] mb-2">{step.duration}</p>
                <p className="text-sm text-gray-600 leading-snug tracking-wide">{step.description}</p>
            </div>
        </div>
    );
};


const StudyInSpain: React.FC<StudyInSpainProps> = ({ content, setCurrentPage }) => {
    const langDir = document.documentElement.dir;

    const supportPhases = [
        {
            title: content.phase1Title,
            icon: Target,
            services: [
                content.supportServices[0],
                content.supportServices[1],
                content.supportServices[2],
            ]
        },
        {
            title: content.phase2Title,
            icon: Plane,
            services: [
                content.supportServices[3],
                content.supportServices[4],
            ]
        },
        {
            title: content.phase3Title,
            icon: Building2,
            services: [
                content.supportServices[5],
                content.supportServices[6],
                content.supportServices[7],
            ]
        }
    ];

    const HeroIcon = content.whyPoints.length > 0 ? content.whyPoints[0].icon : null;

    return (
        <div id={content.id}>
            {/* --- Hero Section --- */}
            <section className="bg-white py-20 overflow-hidden">
                <div className="container mx-auto px-6 mt-8">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2 text-center md:text-left">
                            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4 leading-tight">{content.pageTitle}</h1>
                            <p className="text-slate-600 text-lg leading-relaxed">{content.intro}</p>
                        </div>
                        <div className="md:w-1/2 relative h-64 md:h-80 w-full">
                            <div className="absolute -top-8 -right-8 w-48 h-48 bg-[#D9B44A] rounded-full opacity-20 animate-pulse"></div>
                            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-[#0A2342] rounded-lg transform -rotate-12"></div>
                            <div className="absolute inset-0 flex items-center justify-center z-10">
                                {/* FIX: Assign icon to a capitalized variable to use as a JSX component. */}
                                {HeroIcon && <HeroIcon className="w-32 h-32 text-white/80" />}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Education Pathway (Premium Stepper) --- */}
            <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative">
                <div className="container mx-auto px-6">

                    {/* Header */}
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A2342]">
                            {content.systemTitle}
                        </h2>
                        <p className="text-slate-500 mt-4 text-lg max-w-3xl mx-auto">
                            {content.systemIntro}
                        </p>
                    </div>

                    {/* ONE MAIN CARD */}
                    <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-[0_40px_100px_rgba(0,0,0,0.08)] border border-gray-100 p-10 md:p-14 overflow-hidden">
                        {content.systemImage ? (
                            <div className="relative group" style={{ perspective: "1500px" }}>
                                <motion.div
                                    initial={{ opacity: 0, y: 50, rotateX: 10, scale: 0.9 }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                        rotateX: 0,
                                        scale: 1,
                                    }}
                                    viewport={{ once: true }}
                                    animate={{
                                        y: [0, -15, 0],
                                    }}
                                    transition={{
                                        duration: 0.8,
                                        ease: "easeOut",
                                        y: {
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }
                                    }}
                                    className="relative z-10"
                                >
                                    <img
                                        src={content.systemImage}
                                        alt={content.systemTitle}
                                        className="w-full h-auto rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                                    />

                                    {/* Glass Shine Effect */}
                                    <motion.div
                                        className="absolute inset-0 z-20 pointer-events-none overflow-hidden rounded-2xl"
                                        initial={{ x: "-150%" }}
                                        animate={{ x: "150%" }}
                                        transition={{
                                            duration: 2.5,
                                            ease: "easeInOut",
                                            repeat: Infinity,
                                            repeatDelay: 3
                                        }}
                                    >
                                        <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg] transform scale-150" />
                                    </motion.div>

                                    {/* Subtle Radial Glow */}
                                    <div className="absolute -inset-4 bg-gradient-to-tr from-[#D9B44A]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl z-0" />
                                </motion.div>
                            </div>
                        ) : (
                            <div className="space-y-12">
                                {content.systemSteps.map((step, index) => (
                                    <div
                                        key={index}
                                        className={`flex gap-6 items-start ${langDir === 'rtl' ? 'flex-row-reverse text-right' : ''
                                            }`}
                                    >
                                        {/* Step Number */}
                                        <div className="flex-shrink-0">
                                            <div className="w-14 h-14 rounded-full bg-[#0A2342] text-[#D9B44A] flex items-center justify-center font-extrabold text-lg shadow-md">
                                                {index + 1}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-[#0A2342] mb-2">
                                                {step.title}
                                            </h3>

                                            <p className="text-slate-600 leading-relaxed text-[15px]">
                                                {step.description}
                                            </p>

                                            {/* Optional tags / notes */}
                                            {step.note && (
                                                <div className="mt-4 inline-block bg-[#0A2342]/5 text-[#0A2342] text-xs font-semibold px-4 py-2 rounded-full">
                                                    {step.note}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>


            <section className="py-24 bg-gray-50 relative overflow-hidden">
                {/* Decorative background */}
                <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
                    <div className="absolute top-20 left-20 w-72 h-72 bg-blue-100 rounded-full blur-3xl animate-blob"></div>
                    <div className="absolute top-20 right-20 w-72 h-72 bg-amber-100 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    {/* Section Title */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-[#0A2342] mb-4">
                            {content.whyTitle}
                        </h2>
                        <div className="w-24 h-1.5 bg-[#D9B44A] mx-auto rounded-full"></div>
                    </div>

                    {/* 🔥 ONE AMAZING CARD */}
                    <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-xl rounded-3xl shadow-[0_30px_80px_rgba(0,0,0,0.08)] border border-white p-10 md:p-14">

                        <div className="space-y-10">
                            {content.whyPoints.map((point, i) => {
                                const Icon = point.icon;
                                return (
                                    <div
                                        key={i}
                                        className="flex flex-col md:flex-row gap-6 items-start group"
                                    >
                                        {/* Icon */}
                                        <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#0A2342] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
                                            <Icon className="w-7 h-7 text-[#D9B44A]" />
                                        </div>

                                        {/* Text */}
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-[#0A2342] mb-2">
                                                {point.title}
                                            </h3>
                                            <p className="text-slate-600 leading-relaxed text-[15px]">
                                                {point.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                    </div>
                </div>
            </section>


            {/* --- Target Audience (Merged) --- */}
            <section className="py-20 bg-[#0A2342]">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-white mb-12">{content.targetAudience.title}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {content.targetAudience.audiences.map((audience, i) => {
                            // FIX: Assign icon to a capitalized variable to use as a JSX component.
                            const Icon = audience.icon;
                            return (
                                <div key={i} className={`p-8 rounded-xl shadow-2xl flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 ${i === 0 ? 'bg-white' : 'bg-slate-800'}`}>
                                    <div className={`p-4 rounded-full mb-6 ${i === 0 ? 'bg-amber-100' : 'bg-[#D9B44A]'}`}>
                                        <Icon className={`w-10 h-10 ${i === 0 ? 'text-[#D9B44A]' : 'text-[#0A2342]'}`} />
                                    </div>
                                    <h3 className={`text-2xl font-bold mb-3 ${i === 0 ? 'text-slate-800' : 'text-white'}`}>{audience.title}</h3>
                                    <p className={i === 0 ? 'text-slate-600' : 'text-slate-300'}>{audience.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>



            {/* --- Support Journey --- */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">

                    {/* Header */}
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-extrabold text-[#0A2342] mb-4">
                            {content.supportTitle}
                        </h2>
                        <p className="text-slate-500 text-lg max-w-3xl mx-auto">
                            {content.supportIntro}
                        </p>
                    </div>

                    {/* Cards */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
                    >
                        {supportPhases.map((phase, i) => {
                            const Icon = phase.icon;

                            return (
                                <motion.div
                                    key={i}
                                    variants={cardVariants}
                                    className="group relative bg-white rounded-2xl p-8 flex flex-col text-center
              shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]
              hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.12)]
              transition-all duration-300
              border border-slate-100 overflow-hidden"
                                >
                                    {/* Top accent line */}
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D9B44A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    {/* Icon */}
                                    <div className="mx-auto bg-slate-50 p-5 rounded-full mb-6 
              group-hover:bg-[#0A2342] transition-colors duration-300 shadow-sm">
                                        <Icon className="w-8 h-8 text-[#0A2342] group-hover:text-[#D9B44A] transition-colors duration-300" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-6 group-hover:text-[#0A2342] transition-colors">
                                        {phase.title}
                                    </h3>

                                    {/* Services */}
                                    <ul className="space-y-4 text-left flex-grow">
                                        {phase.services.map((service, j) => (
                                            <li key={j} className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-[#D9B44A] mt-1 flex-shrink-0" />
                                                <span className="text-slate-600 leading-relaxed">
                                                    {service.description}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>


            {/* --- Final Steps Section --- */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#0A2342]">
                            {content.readyForJourneyTitle}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

                        {/* Left Card */}
                        <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col">
                            <h3 className="text-2xl font-bold text-[#0A2342] mb-6 flex items-center">
                                <FileText className="w-7 h-7 me-3 text-[#D9B44A]" />
                                {content.docsTitle}
                            </h3>

                            {/* Show only 3 items */}
                            <ul className="space-y-3 flex-grow">
                                {content.docsList.slice(0, 3).map((doc, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start p-3 bg-gray-50 rounded-md border border-gray-100"
                                    >
                                        <ArrowRight className="w-5 h-5 text-[#D9B44A] me-3 flex-shrink-0 mt-1" />
                                        <span className="text-slate-700">{doc}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Read More Button */}
                            <button
                                onClick={() => setCurrentPage('contact')}
                                className="mt-6 self-start px-6 py-2 rounded-md bg-[#0A2342] text-white hover:bg-[#081c35] transition"
                            >
                                {content.readMoreInfo}
                            </button>
                        </div>

                        {/* Right Card */}
                        <div className="bg-blue-900/90 text-white p-8 rounded-lg shadow-lg flex items-center">
                            <AlertCircle size={40} className="me-5 flex-shrink-0 text-amber-300" />
                            <div>
                                <h4 className="text-xl font-bold mb-2">
                                    {content.programRefundTitle}
                                </h4>
                                <p className="opacity-90 whitespace-pre-line">
                                    {content.programRefund}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    )
}

export default StudyInSpain;
