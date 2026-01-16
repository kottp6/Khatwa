import React, { useState, useEffect } from 'react';
import type { Language, Page } from '../types';
import { Globe, Menu, X, ChevronDown } from 'lucide-react';
import { Logo } from './Logo';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
} from 'react-icons/fa';

interface ServiceCategory {
  title: string;
  items: { [key: string]: string };
}

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  content: {
    logo: string;
    nav: {
      home: string;
      about: string;
      services: {
        title: string;
        overview: { title: string; page: Page };
        categories: ServiceCategory[];
      };
      faq: string;
      contact: string;
    };
    language: string;
  };
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

export const socialLinks = [
  {
    name: 'Facebook',
    icon: FaFacebookF,
    url: 'https://www.facebook.com/people/Khatwa/100094319869714/',
  },
  {
    name: 'YouTube',
    icon: FaYoutube,
    url: 'https://www.youtube.com/@AbdelrahmanHamad-l8t7k',
  },
  {
    name: 'Instagram',
    icon: FaInstagram,
    url: 'https://www.instagram.com/khatwa.es',
  },
]

const Header: React.FC<HeaderProps> = ({ language, setLanguage, content, currentPage, setCurrentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [expandedMobileCategories, setExpandedMobileCategories] = useState<string[]>([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  // List of pages that have a hero section (transparent navbar initially)
  const pagesWithHero: Page[] = [
    'home',
    'study',
    'students-under-18',
    'postgraduate-study',
    'digital-nomad',
    'non-lucrative',
    'family-reunification',
    'tourism',
  ];

  const hasHero = pagesWithHero.includes(currentPage);
  const showSolidBackground = isScrolled || !hasHero;

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languageOptions = [
    { code: 'en' as Language, name: 'English', flag: 'EN' },
    { code: 'ar' as Language, name: 'العربية', flag: 'AR' },
    { code: 'es' as Language, name: 'Español', flag: 'ES' },
  ];

  const currentLanguage = languageOptions.find(lang => lang.code === language) || languageOptions[0];

  const selectLanguage = (lang: Language) => {
    setLanguage(lang);
    setIsLanguageMenuOpen(false);
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (page: Page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
    if (isServicesMenuOpen) {
      setIsServicesMenuOpen(false);
    }
  };

  const toggleMobileCategory = (title: string) => {
    setExpandedMobileCategories(prev =>
      prev.includes(title) ? prev.filter(t => t !== title) : [...prev, title]
    );
  };

  const servicePageMapping: Record<string, Page> = {
    study: 'study',
    studentsUnder18: 'students-under-18',
    postgraduateStudy: 'postgraduate-study',
    digitalNomad: 'digital-nomad',
    nonLucrative: 'non-lucrative',
    familyReunification: 'family-reunification',
    tourism: 'tourism',
    servicesOverview: 'services-overview',
  };

  const servicePages = Object.values(servicePageMapping);
  const isServicesActive = servicePages.includes(currentPage);

  const navLinks = [
    { name: content.nav.home, page: 'home' as Page },
    { name: content.nav.about, page: 'about' as Page },
  ];

  const faqLink = { name: content.nav.faq, page: 'faq' as Page };
  const contactLink = { name: content.nav.contact, page: 'contact' as Page };

  const renderServicesDropdown = (isMobile = false) => {
    const renderCategoryItems = (items: { [key: string]: string }) => {
      return Object.entries(items).map(([key, name]) => {
        const page = servicePageMapping[key];
        if (!page) return null;
        return (
          <button
            key={page}
            onClick={() => handleNavClick(page)}
            className={`w-full text-left px-3 py-2 text-xs rounded-md transition-all duration-200 group flex items-center ${isMobile
              ? `py-3 ${language === 'ar' ? 'pr-10' : 'pl-10'} ${currentPage === page ? 'bg-amber-100 text-[#0A2342] font-semibold' : 'text-slate-600 hover:bg-gray-50'}`
              : `${currentPage === page ? 'bg-amber-100 text-[#0A2342] font-semibold' : 'text-slate-600 hover:bg-slate-50 hover:text-[#0A2342]'}`
              }`}
          >
            {/* Bullet decoration on hover */}
            {!isMobile && (
              <span className={`w-1.5 h-1.5 rounded-full bg-[#D9B44A] mr-2 transition-transform duration-200 scale-0 group-hover:scale-100 ${currentPage === page ? 'scale-100' : ''}`} />
            )}
            <span className="line-clamp-1">{name}</span>
          </button>
        );
      });
    };

    if (isMobile) {
      return (
        <div className="w-full">
          <button
            onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
            className={`text-lg w-full p-3 rounded-md transition-colors duration-200 flex justify-between items-center ${language === 'ar' ? 'text-right' : 'text-left'} ${isServicesActive ? 'bg-amber-100 text-[#0A2342] font-semibold' : 'text-slate-700 hover:bg-gray-100'}`}
          >
            <span>{content.nav.services.title}</span>
            <ChevronDown size={20} className={`transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
          </button>
          <AnimatePresence>
            {isMobileServicesOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="py-1 flex flex-col">
                  <button
                    onClick={() => handleNavClick(content.nav.services.overview.page)}
                    className={`w-full text-left font-semibold px-4 py-2 text-sm rounded-md transition-colors duration-200 my-1 ${language === 'ar' ? 'pr-8' : 'pl-8'} ${currentPage === content.nav.services.overview.page ? 'bg-amber-100 text-[#0A2342]' : 'text-[#0A2342] hover:bg-gray-100'}`}
                  >
                    {content.nav.services.overview.title}
                  </button>
                  {content.nav.services.categories.map(category => {
                    const isExpanded = expandedMobileCategories.includes(category.title);
                    return (
                      <div key={category.title} className="py-1">
                        <button
                          onClick={() => toggleMobileCategory(category.title)}
                          className={`w-full flex justify-between items-center px-4 py-3 text-sm rounded-md transition-colors duration-200 ${language === 'ar' ? 'pr-8 text-right' : 'pl-8 text-left'} font-semibold text-slate-600 hover:bg-gray-100`}
                        >
                          <span>{category.title}</span>
                          <ChevronDown size={16} className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: "auto" }}
                              exit={{ height: 0 }}
                              className="overflow-hidden pt-1 pb-2 flex flex-col"
                            >
                              {renderCategoryItems(category.items)}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )
    }

    // Desktop Dropdown
    return (
      <div
        className="relative"
        onMouseEnter={() => setIsServicesMenuOpen(true)}
        onMouseLeave={() => setIsServicesMenuOpen(false)}
      >
        <button className={`flex items-center gap-1 transition-all duration-300 py-2 relative group ${isServicesActive
          ? (showSolidBackground ? 'text-[#0A2342] font-bold' : 'text-white font-bold')
          : showSolidBackground ? 'text-[#0A2342] hover:text-[#D9B44A]' : 'text-white hover:text-[#D9B44A]'
          }`}>
          {content.nav.services.title}
          <ChevronDown size={14} className={`transition-transform duration-300 ${isServicesMenuOpen ? 'rotate-180' : ''}`} />
          <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#D9B44A] transform transition-transform duration-300 origin-left ${isServicesActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
        </button>

        <AnimatePresence>
          {isServicesMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] ring-1 ring-black/5 py-3 z-50"
            >
              {/* Triangle pointer */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-l border-t border-black/5" />

              {/* All Services Overview */}
              <button
                onClick={() => handleNavClick(content.nav.services.overview.page)}
                className={`relative w-full text-left px-5 py-3 text-sm transition-colors duration-200 font-bold mb-1 hover:bg-slate-50 ${currentPage === content.nav.services.overview.page ? 'text-[#D9B44A]' : 'text-[#0A2342]'}`}
              >
                {content.nav.services.overview.title}
              </button>
              <div className="my-1 mx-4 h-px bg-slate-100"></div>

              {/* Categories with expandable items */}
              <div className="grid grid-cols-2 gap-2 px-3">
                {content.nav.services.categories.map((category) => (
                  <CategoryDropdown
                    key={category.title}
                    category={category}
                    renderCategoryItems={renderCategoryItems}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }

  // Category Dropdown Component for Desktop
  const CategoryDropdown: React.FC<{
    category: { title: string; items: { [key: string]: string } };
    renderCategoryItems: (items: { [key: string]: string }) => React.ReactNode;
  }> = ({ category, renderCategoryItems }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
      <div
        className="relative"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <div className={`px-3 py-2.5 rounded-lg cursor-pointer transition-all duration-200 ${isExpanded ? 'bg-gradient-to-r from-[#D9B44A]/10 to-[#0A2342]/5' : 'hover:bg-slate-50'}`}>
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold text-[#0A2342]">{category.title}</span>
            <ChevronDown
              size={14}
              className={`text-[#D9B44A] transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
            />
          </div>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="pl-3 pt-1 space-y-0.5">
                {renderCategoryItems(category.items)}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${showSolidBackground
          ? 'bg-white/90 backdrop-blur-lg shadow-sm py-2'
          : 'bg-transparent py-4 md:py-6'
          }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div onClick={() => setCurrentPage('home')}>
            <Logo theme={showSolidBackground ? 'dark' : 'light'} />
          </div>

          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => setCurrentPage(link.page)}
                className={`transition-all duration-300 py-2 relative group ${currentPage === link.page
                  ? (showSolidBackground ? 'text-[#0A2342] font-bold' : 'text-white font-bold')
                  : showSolidBackground ? 'text-[#0A2342] hover:text-[#D9B44A]' : 'text-white hover:text-[#D9B44A]'
                  }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#D9B44A] transform transition-transform duration-300 origin-left ${currentPage === link.page ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
              </button>
            ))}
            {renderServicesDropdown(false)}
            <button
              onClick={() => setCurrentPage(faqLink.page)}
              className={`transition-all duration-300 py-2 relative group ${currentPage === faqLink.page
                ? 'text-[#0A2342] font-bold'
                : showSolidBackground ? 'text-[#0A2342] hover:text-[#D9B44A]' : 'text-white hover:text-[#D9B44A]'
                }`}
            >
              {faqLink.name}
              <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#D9B44A] transform transition-transform duration-300 origin-left ${currentPage === faqLink.page ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
            </button>
            <button
              onClick={() => setCurrentPage(contactLink.page)}
              className={`transition-all duration-300 py-2 relative group ${currentPage === contactLink.page
                ? (showSolidBackground ? 'text-[#0A2342] font-bold' : 'text-white font-bold')
                : showSolidBackground ? 'text-[#0A2342] hover:text-[#D9B44A]' : 'text-white hover:text-[#D9B44A]'
                }`}
            >
              {contactLink.name}
              <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#D9B44A] transform transition-transform duration-300 origin-left ${currentPage === contactLink.page ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
            </button>
          </nav>

          <div className="flex items-center gap-6">
            {/* Social Media Icons */}
            <div className={`hidden lg:flex items-center gap-4 ${language === 'ar' ? 'border-l pl-6' : 'border-r pr-6'} border-slate-200`}>
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    className={`transition-all duration-300 hover:scale-110 ${showSolidBackground ? 'text-[#0A2342] hover:text-[#D9B44A]' : 'text-white hover:text-[#D9B44A]'}`}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>

            {/* Language Dropdown - Desktop */}
            <div
              className="relative hidden lg:block"
              onMouseEnter={() => setIsLanguageMenuOpen(true)}
              onMouseLeave={() => setIsLanguageMenuOpen(false)}
            >
              <button
                className={`flex items-center gap-2 transition-colors duration-300 font-medium ${showSolidBackground ? 'text-[#0A2342] hover:text-[#D9B44A]' : 'text-white hover:text-[#D9B44A]'}`}
                aria-label="Select language"
              >
                <Globe size={20} className="text-[#D9B44A]" />
                <span>{currentLanguage.flag} {currentLanguage.name}</span>
                <ChevronDown size={14} className={`transition-transform duration-300 ${isLanguageMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isLanguageMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] ring-1 ring-black/5 py-2 z-50"
                  >
                    {/* Triangle pointer */}
                    <div className="absolute -top-2 right-4 w-4 h-4 bg-white rotate-45 border-l border-t border-black/5" />

                    {languageOptions.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => selectLanguage(lang.code)}
                        className={`w-full text-left px-4 py-3 text-sm transition-colors duration-200 flex items-center gap-3 hover:bg-slate-50 ${language === lang.code ? 'bg-amber-50 text-[#D9B44A] font-semibold' : 'text-slate-700'
                          }`}
                      >
                        <span className="text-xl">{lang.flag}</span>
                        <span>{lang.name}</span>
                        {language === lang.code && (
                          <span className="ml-auto text-[#D9B44A]">✓</span>
                        )}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              className={`lg:hidden transition-colors ${showSolidBackground ? 'text-[#0A2342]' : 'text-white'}`}
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed inset-0 bg-[#0A2342]/60 backdrop-blur-sm z-50 lg:hidden`}
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: language === 'ar' ? '-100%' : '100%' }}
            animate={{ x: 0 }}
            exit={{ x: language === 'ar' ? '-100%' : '100%' }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className={`fixed top-0 bottom-0 ${language === 'ar' ? 'left-0' : 'right-0'} w-4/5 max-w-sm bg-white z-50 shadow-2xl lg:hidden`}
            role="dialog"
            aria-modal="true"
          >
            <div className="flex justify-between items-center p-6 border-b border-slate-100">
              <div onClick={() => setIsMobileMenuOpen(false)}>
                <Logo />
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu" className="p-2 bg-slate-50 rounded-full hover:bg-slate-100 transition-colors">
                <X size={24} className="text-slate-600" />
              </button>
            </div>
            <nav className="flex flex-col p-4 overflow-y-auto h-[calc(100%-80px)]">
              {navLinks.map((link) => (
                <button
                  key={link.page}
                  onClick={() => handleNavClick(link.page)}
                  className={`text-lg w-full p-3 rounded-xl transition-all duration-200 mb-2 font-medium ${language === 'ar' ? 'text-right' : 'text-left'} ${currentPage === link.page ? 'bg-[#0A2342] text-white' : 'text-slate-600 hover:bg-slate-50'}`}
                >
                  {link.name}
                </button>
              ))}
              {renderServicesDropdown(true)}
              <button
                onClick={() => handleNavClick(faqLink.page)}
                className={`text-lg w-full p-3 rounded-xl transition-all duration-200 mb-2 font-medium ${language === 'ar' ? 'text-right' : 'text-left'} ${currentPage === faqLink.page ? 'bg-[#0A2342] text-white' : 'text-slate-600 hover:bg-slate-50'}`}
              >
                {faqLink.name}
              </button>
              <button
                onClick={() => handleNavClick(contactLink.page)}
                className={`text-lg w-full p-3 rounded-xl transition-all duration-200 mb-2 font-medium ${language === 'ar' ? 'text-right' : 'text-left'} ${currentPage === contactLink.page ? 'bg-[#0A2342] text-white' : 'text-slate-600 hover:bg-slate-50'}`}
              >
                {contactLink.name}
              </button>

              <div className="mt-auto border-t border-slate-100 pt-6">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 px-3">
                  {language === 'en' ? 'Select Language' : language === 'ar' ? 'اختر اللغة' : 'Seleccionar Idioma'}
                </div>
                <div className="space-y-2">
                  {languageOptions.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => selectLanguage(lang.code)}
                      className={`flex items-center gap-3 w-full p-3 rounded-xl transition-all duration-200 font-medium ${language === lang.code
                        ? 'bg-[#0A2342] text-white'
                        : 'text-slate-600 hover:bg-slate-50'
                        }`}
                    >
                      <span className="text-xl">{lang.flag}</span>
                      <span>{lang.name}</span>
                      {language === lang.code && (
                        <span className="ml-auto">✓</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;