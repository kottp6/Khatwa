import React from 'react';

export type Language = 'en' | 'ar' | 'es';
export type Page = 'home' | 'about' | 'study' | 'digital-nomad' | 'tourism' | 'other-services' | 'contact' | 'non-lucrative' | 'family-reunification' | 'students-under-18' | 'postgraduate-study' | 'services-overview' | 'faq';

export interface Slide {
  title: string;
  subtitle: string;
  image: string;
}

export interface FounderLink {
  icon: React.ElementType;
  text: string;
  url: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ElementType;
}

export interface HomeCard {
  icon: React.ElementType;
  title: string;
  description: string;
  page: Page;
  cta: string;
}

export interface EducationStep {
  title: string;
  duration: string;
  description: string;
  level: string;
  image?: string;
}

export interface ServiceOverviewItem {
  title: string;
  description: string;
  page: Page;
}

export interface ServiceOverviewCategory {
  title: string;
  items: ServiceOverviewItem[];
}

export interface OtherServiceItem {
  title: string;
  description: string;
  image?: string;
}

export interface Package {
  title: string;
  description: string;
  features: string[];
  isPopular: boolean;
}

export interface TourismPackage {
  title: string;
  duration: string;
  description: string;
  highlights: string[];
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  title: string;
  icon: React.ElementType;
  items: FAQItem[];
}

export interface FeaturePoint {
  icon: React.ElementType;
  title: string;
  description: string;
}

export interface ServicePoint {
  icon: React.ElementType;
  description: string;
}

export interface TourismProgramComparison {
  name: string;
  description: string;
  focus: string;
  uniqueFeatures: string[];
  priceHint: string;
}

export interface TourismItinerary {
  title: string;
  points: string[];
  image: string;
}

export interface TourismContent {
  id: string;
  pageTitle: string;
  intro: string;
  heroImage: string;
  itinerariesTitle: string;
  itineraries: TourismItinerary[];
  comparisonTitle: string;
  comparisonPrograms: TourismProgramComparison[];
  ctaBlock: {
    title: string;
    text: string;
    button: string;
  };
}

export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
}

export interface PageMetadata {
  [key: string]: SEOData;
}