import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import type { SocialLink } from '../types';

interface FooterProps {
  content: {
    companyName: string;
    description: string;
    contactTitle: string;
    address: string;
    phone: string;
    displayPhone?: string;
    email: string;
    legalTitle: string;
    legalText: string;
    copyright: string;
    followTitle: string;
    socialLinks: SocialLink[];
  };
}

const Footer: React.FC<FooterProps> = ({ content }) => {
  const whatsappNumber = content.phone.replace(/[\s+]/g, '');
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <footer className="bg-[#0A2342] text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-2">{content.companyName}</h3>
            <p className="text-gray-300">{content.description}</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">{content.contactTitle}</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <MapPin size={18} className="me-3 mt-1 flex-shrink-0" />
                <span>{content.address}</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="me-3" />
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#D9B44A]">{content.displayPhone || content.phone}</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="me-3" />
                <a href={`mailto:${content.email}`} className="hover:text-[#D9B44A]">{content.email}</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">{content.legalTitle}</h4>
            <p className="text-gray-300 text-sm">{content.legalText}</p>
            <div className="mt-6">
              <h4 className="font-semibold text-lg mb-3">{content.followTitle}</h4>
              <div className="flex space-x-4">
                {content.socialLinks.map((link) => (
                  <div key={link.name} className="relative group/tooltip">
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.name}
                      className="text-gray-300 hover:text-[#D9B44A] transition-colors duration-300"
                    >
                      <link.icon size={24} />
                    </a>

                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-[#D9B44A] text-[#0A2342] text-[10px] font-bold rounded opacity-0 group-hover/tooltip:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap translate-y-2 group-hover/tooltip:translate-y-0">
                      {link.name}
                      {/* Arrow */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#D9B44A]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>{content.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;