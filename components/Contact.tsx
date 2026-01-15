import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

interface ContactProps {
  content: {
    pageTitle: string;
    intro: string;
    form: {
      name: string;
      email: string;
      subject: string;
      message: string;
      cta: string;
    };
    infoTitle: string;
    address: string;
    phone: string;
    email: string;
  };
}

const Contact: React.FC<ContactProps> = ({ content }) => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  
  const whatsappNumber = content.phone.replace(/[\s+]/g, '');
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:${content.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">{content.pageTitle}</h2>
          <p className="text-slate-500 mt-2 text-lg max-w-3xl mx-auto">{content.intro}</p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 bg-gray-50 p-8 md:p-12 rounded-lg shadow-md">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-[#0A2342] mb-6">{content.infoTitle}</h3>
            <ul className="space-y-6 text-slate-700">
              <li className="flex items-start">
                <MapPin size={20} className="me-4 mt-1 flex-shrink-0 text-[#D9B44A]"/>
                <span>{content.address}</span>
              </li>
              <li className="flex items-start">
                <Phone size={20} className="me-4 mt-1 flex-shrink-0 text-[#D9B44A]"/>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#D9B44A]">{content.phone}</a>
              </li>
              <li className="flex items-start">
                <Mail size={20} className="me-4 mt-1 flex-shrink-0 text-[#D9B44A]"/>
                <a href={`mailto:${content.email}`} className="hover:text-[#D9B44A]">{content.email}</a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">{content.form.name}</label>
                <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-[#D9B44A] focus:border-[#D9B44A] shadow-sm"/>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">{content.form.email}</label>
                <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-[#D9B44A] focus:border-[#D9B44A] shadow-sm"/>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">{content.form.subject}</label>
                <input type="text" name="subject" id="subject" required value={formData.subject} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-[#D9B44A] focus:border-[#D9B44A] shadow-sm"/>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">{content.form.message}</label>
                <textarea name="message" id="message" rows={5} required value={formData.message} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-[#D9B44A] focus:border-[#D9B44A] shadow-sm"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-[#0A2342] text-white font-bold py-3 px-8 rounded-full hover:bg-slate-700 transition-colors duration-300 shadow-lg transform hover:scale-105">
                  {content.form.cta}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;