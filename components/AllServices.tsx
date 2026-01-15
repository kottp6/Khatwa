import React from 'react';
import type { Page, ServiceOverviewCategory } from '../types';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface AllServicesProps {
    content: {
        pageTitle: string;
        intro: string;
        categories: ServiceOverviewCategory[];
        cta: string;
    },
    onNavigate: (page: Page) => void;
}

const AllServices: React.FC<AllServicesProps> = ({ content, onNavigate }) => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    const categoryColors = [
        { bg: 'from-blue-500/10 to-purple-500/10', border: 'border-blue-500/20', accent: 'text-blue-600', iconBg: 'bg-blue-500/10' },
        { bg: 'from-amber-500/10 to-orange-500/10', border: 'border-amber-500/20', accent: 'text-amber-600', iconBg: 'bg-amber-500/10' },
        { bg: 'from-emerald-500/10 to-teal-500/10', border: 'border-emerald-500/20', accent: 'text-emerald-600', iconBg: 'bg-emerald-500/10' },
    ];

    return (
        <section id="services-overview" className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#D9B44A]/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0A2342]/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#D9B44A]/10 to-[#0A2342]/10 rounded-full mb-6">
                        <Sparkles className="w-5 h-5 text-[#D9B44A]" />
                        <span className="text-sm font-semibold text-[#0A2342]">All Services</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A2342] mb-6 leading-tight">
                        {content.pageTitle}
                    </h2>

                    <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        {content.intro}
                    </p>

                    {/* Decorative line */}
                    <div className="mt-8 flex items-center justify-center gap-3">
                        <div className="h-1 w-20 bg-gradient-to-r from-transparent via-[#D9B44A] to-transparent rounded-full" />
                        <div className="w-2 h-2 bg-[#D9B44A] rounded-full" />
                        <div className="h-1 w-20 bg-gradient-to-r from-transparent via-[#D9B44A] to-transparent rounded-full" />
                    </div>
                </motion.div>

                {/* Categories Section */}
                <div className="space-y-20">
                    {content.categories.map((category, categoryIndex) => {
                        const colorScheme = categoryColors[categoryIndex % categoryColors.length];

                        return (
                            <motion.div
                                key={category.title}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={containerVariants}
                            >
                                {/* Category Header */}
                                <div className="mb-10">
                                    <motion.div
                                        variants={itemVariants}
                                        className="flex items-center gap-4 mb-4"
                                    >
                                        <div className={`h-12 w-1.5 bg-gradient-to-b ${colorScheme.bg.replace('/10', '')} rounded-full`} />
                                        <h3 className="text-3xl md:text-4xl font-bold text-[#0A2342]">
                                            {category.title}
                                        </h3>
                                    </motion.div>
                                    <motion.div
                                        variants={itemVariants}
                                        className="h-px bg-gradient-to-r from-slate-200 via-slate-300 to-transparent ml-6"
                                    />
                                </div>

                                {/* Services Grid */}
                                <motion.div
                                    variants={containerVariants}
                                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                                >
                                    {category.items.map((service, index) => (
                                        <motion.div
                                            key={service.page}
                                            variants={itemVariants}
                                            whileHover={{ y: -8, scale: 1.02 }}
                                            transition={{ duration: 0.3 }}
                                            className="group relative"
                                        >
                                            {/* Card */}
                                            <div className={`h-full bg-white rounded-2xl border-2 ${colorScheme.border} p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}>
                                                {/* Gradient overlay on hover */}
                                                <div className={`absolute inset-0 bg-gradient-to-br ${colorScheme.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />

                                                {/* Content */}
                                                <div className="relative z-10">
                                                    {/* Number badge */}
                                                    <div className={`inline-flex items-center justify-center w-10 h-10 ${colorScheme.iconBg} rounded-xl mb-4 font-bold ${colorScheme.accent} text-sm`}>
                                                        {String(index + 1).padStart(2, '0')}
                                                    </div>

                                                    {/* Title */}
                                                    <h4 className="text-xl md:text-2xl font-bold text-[#0A2342] mb-4 leading-tight group-hover:text-[#0A2342] transition-colors">
                                                        {service.title}
                                                    </h4>

                                                    {/* Description */}
                                                    <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                                                        {service.description}
                                                    </p>

                                                    {/* CTA Button */}
                                                    <button
                                                        onClick={() => onNavigate(service.page)}
                                                        className={`inline-flex items-center gap-2 font-semibold ${colorScheme.accent} hover:gap-3 transition-all duration-300 group/btn`}
                                                    >
                                                        <span>{content.cta}</span>
                                                        <ArrowRight className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform" />
                                                    </button>
                                                </div>

                                                {/* Decorative corner element */}
                                                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${colorScheme.bg} rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity duration-300`} />
                                            </div>

                                            {/* Glow effect on hover */}
                                            <div className={`absolute inset-0 bg-gradient-to-br ${colorScheme.bg.replace('/10', '/20')} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10`} />
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-20 text-center"
                >
                    <div className="inline-block bg-gradient-to-r from-[#0A2342] to-[#0D2D52] rounded-2xl p-12 shadow-2xl">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            {content.pageTitle === "All Our Services"
                                ? "Ready to Start Your Journey?"
                                : content.pageTitle === "Todos Nuestros Servicios"
                                    ? "¿Listo para Comenzar Tu Viaje?"
                                    : "هل أنت مستعد لبدء رحلتك؟"}
                        </h3>
                        <p className="text-slate-300 mb-6 max-w-2xl">
                            {content.pageTitle === "All Our Services"
                                ? "Contact us today to discuss which service is right for you"
                                : content.pageTitle === "Todos Nuestros Servicios"
                                    ? "Contáctanos hoy para discutir qué servicio es adecuado para ti"
                                    : "اتصل بنا اليوم لمناقشة الخدمة المناسبة لك"}
                        </p>
                        <button
                            onClick={() => onNavigate('contact')}
                            className="px-8 py-4 bg-gradient-to-r from-[#D9B44A] to-[#C9A43A] text-white font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300"
                        >
                            {content.pageTitle === "All Our Services"
                                ? "Get in Touch"
                                : content.pageTitle === "Todos Nuestros Servicios"
                                    ? "Ponte en Contacto"
                                    : "تواصل معنا"}
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AllServices;
