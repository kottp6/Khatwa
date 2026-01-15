import React, { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import HomeAbout from './components/HomeAbout';
import About from './components/About';
import StudyInSpain from './components/Services';
import Tourism from './components/Tourism';
import OtherServices from './components/VisaDetails';
import AllServices from './components/AllServices';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import ScrollToTop from './components/ScrollToTop';
import SplashScreen from './components/SplashScreen';
import PageLoader from './components/PageLoader';
import SEO from './components/SEO';
import { content } from './constants';
import type { Language, Page } from './types';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('en');
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const handlePageNavigation = (page: Page) => {
    if (page === currentPage) return;

    setIsTransitioning(true);
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Simulate a short loading time for the transition effect
    setTimeout(() => {
      setCurrentPage(page);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }, 400);
  };

  const currentContent = content[language];

  // Mapping from Page (kebab-case) to metadata keys (camelCase)
  const getSeoData = (page: Page) => {
    const keyMap: Record<string, string> = {
      'students-under-18': 'studentsUnder18',
      'postgraduate-study': 'postgraduateStudy',
      'digital-nomad': 'digitalNomad',
      'non-lucrative': 'nonLucrative',
      'family-reunification': 'familyReunification',
      'services-overview': 'servicesOverview',
      'other-services': 'otherServices'
    };
    const key = keyMap[page] || page;
    // Fallback to home metadata if not found, though types ensure it should be there
    return currentContent.metadata?.[key] || currentContent.metadata?.home;
  };

  const seoData = getSeoData(currentPage);

  const navigateToContact = () => {
    handlePageNavigation('contact');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero content={currentContent.hero} language={language} />
            <HomeCards content={currentContent.hero.cardsSection} onCardClick={handlePageNavigation} language={language} />
            <HomeAbout
              content={{
                ...currentContent.about,
                founderLinks: currentContent.about.founderLinks
              }}
              onNavigate={() => handlePageNavigation('about')}
            />
          </>
        );
      case 'about':
        return <About content={currentContent.about} />;
      case 'services-overview':
        return <AllServices content={currentContent.servicesOverview} onNavigate={handlePageNavigation} />;
      case 'study':
        return <StudyInSpain content={currentContent.studyInSpain} setCurrentPage={handlePageNavigation} />;
      case 'students-under-18':
        return <StudyInSpain content={currentContent.studentsUnder18} setCurrentPage={handlePageNavigation} />;
      case 'postgraduate-study':
        return <StudyInSpain content={currentContent.postgraduateStudy} setCurrentPage={handlePageNavigation} />;
      case 'digital-nomad':
        return <StudyInSpain content={currentContent.digitalNomad} setCurrentPage={handlePageNavigation} />;
      case 'non-lucrative':
        return <StudyInSpain content={currentContent.nonLucrative} setCurrentPage={handlePageNavigation} />;
      case 'family-reunification':
        return <StudyInSpain content={currentContent.familyReunification} setCurrentPage={handlePageNavigation} />;
      case 'tourism':
        return <Tourism content={currentContent.tourism} onNavigateToContact={navigateToContact} />;
      case 'faq':
        return <FAQ content={currentContent.faq} />;
      case 'contact':
        return <Contact content={currentContent.contactPage} />;
      case 'other-services':
        return <OtherServices content={currentContent.otherServices} />;
      default:
        // Fallback to home for any unknown page
        return (
          <>
            <Hero content={currentContent.hero} language={language} />
            <HomeCards content={currentContent.hero.cardsSection} onCardClick={handlePageNavigation} language={language} />
            <HomeAbout
              content={{
                ...currentContent.about,
                founderLinks: currentContent.about.founderLinks
              }}
              onNavigate={() => handlePageNavigation('about')}
            />
          </>
        );
    }
  };

  return (
    <HelmetProvider>
      {seoData && <SEO data={seoData} lang={language} />}

      {/* Splash Screen */}
      <SplashScreen onLoadingComplete={() => setIsLoading(false)} />

      {/* Page Transition Loader */}
      <PageLoader isVisible={isTransitioning} />

      {/* Main App Content */}
      {!isLoading && (
        <div>
          <Header
            language={language}
            setLanguage={setLanguage}
            content={currentContent.header}
            currentPage={currentPage}
            setCurrentPage={handlePageNavigation}
          />
          <main>
            {renderPage()}
          </main>
          <Footer content={currentContent.footer} />
          <ScrollToTop />
        </div>
      )}
    </HelmetProvider>
  );
};

export default App;