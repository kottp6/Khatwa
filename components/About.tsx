import React from 'react';
import type { FounderLink } from '../types';
import { CheckCircle } from 'lucide-react';
import { useState } from 'react';
import profile from '../assets/profile.jpg'
interface AboutProps {
  content: {
    title: string;
    intro: string;
    founderTitle: string;
    founderName: string;
    founderCredentials: string;
    founderBio: string;
    founderLinks: FounderLink[];
    partnersTitle: string;
    partnersIntro: string;
    partnersList: string[];
    activitiesTitle: string;
    activitiesText: string;
  };
}

const About: React.FC<AboutProps> = ({ content }) => {
  const [isImageOpen, setIsImageOpen] = useState(false);
  return (
    <>
    <section id="about" className="relative py-28 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
  
  {/* Background decorations */}
  <div className="absolute top-20 left-10 w-72 h-72 bg-[#D9B44A]/20 rounded-full blur-3xl" />
  <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0A2342]/10 rounded-full blur-3xl" />

  <div className="container mx-auto px-6 relative z-10">

    {/* Title */}
    <div className="text-center max-w-3xl mx-auto mb-20">
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#0A2342] mb-6">
        {content.title}
      </h2>
      <p className="text-lg text-slate-600 leading-relaxed">
        {content.intro}
      </p>
    </div>

    {/* Founder + Bio */}
    <div className="grid lg:grid-cols-3 gap-12 mb-24 items-start">

      {/* Founder Card */}
      <div className="lg:col-span-1">
        <div className="relative bg-white/70 backdrop-blur-xl border border-slate-200 rounded-3xl p-8 shadow-xl text-center">

          <div
            className="w-44 h-44 mx-auto mb-6 cursor-pointer relative"
            onClick={() => setIsImageOpen(true)}
          >
            <img
              src={profile}
              alt={content.founderName}
              className="w-full h-full rounded-full object-contain bg-white border-4 border-[#D9B44A]"
            />
            <div className="absolute inset-0 rounded-full ring-4 ring-[#D9B44A]/30 animate-pulse" />
          </div>

          <h4 className="text-2xl font-bold text-[#0A2342]">
            {content.founderName}
          </h4>
          <p className="text-[#D9B44A] font-semibold mt-1">
            {content.founderCredentials}
          </p>

          <div className="mt-6 space-y-3">
            {content.founderLinks.map(({ icon: Icon, text, url }) => (
              <a
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-slate-600 hover:text-[#0A2342] transition"
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm font-medium">{text}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Founder Bio */}
      <div className="lg:col-span-2">
        <div className="bg-white rounded-3xl p-10 shadow-lg border border-slate-100 h-full">
          <h3 className="text-3xl font-bold text-[#0A2342] mb-6">
            {content.founderTitle}
          </h3>
          <p className="text-slate-600 leading-loose text-lg">
            {content.founderBio}
          </p>
        </div>
      </div>
    </div>

    {/* Partners & Activities */}
    <div className="grid md:grid-cols-2 gap-12">

      {/* Partners */}
      <div className="bg-white rounded-3xl p-10 shadow-md border border-slate-100">
        <h3 className="text-2xl font-bold text-[#0A2342] mb-6">
          {content.partnersTitle}
        </h3>
        <p className="text-slate-600 mb-6">
          {content.partnersIntro}
        </p>
        <ul className="space-y-4">
          {content.partnersList.map((partner, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#D9B44A] mt-1" />
              <span className="text-slate-600">{partner}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Activities */}
      <div className="bg-gradient-to-br from-[#0A2342] to-[#102f55] text-white rounded-3xl p-10 shadow-xl">
        <h3 className="text-2xl font-bold mb-6">
          {content.activitiesTitle}
        </h3>
        <p className="leading-loose text-white/90 text-lg">
          {content.activitiesText}
        </p>
      </div>
    </div>

  </div>
</section>

    </>
  );
};

export default About;
