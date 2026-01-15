import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle2, Loader2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const whatsappNumber = content.phone.replace(/[\s+]/g, '');
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate premium loading delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    const { name, email, subject, message } = formData;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:${content.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open mail client in new tab
    window.open(mailtoLink, '_blank');

    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset form after a short delay
    setFormData({ name: '', email: '', subject: '', message: '' });

    // Reset success state after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden bg-white">
      {/* Immersive Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] -left-[5%] w-[40%] h-[40%] rounded-full bg-amber-50/50 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[10%] -right-[5%] w-[45%] h-[45%] rounded-full bg-blue-50/50 blur-[150px]"
        />
        <div className="absolute inset-0 opacity-[0.02] mix-blend-multiply" style={{ backgroundImage: 'radial-gradient(#0A2342 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }} />
      </div>

      <div className="container relative mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A2342]/5 text-[#0A2342] mb-6 text-sm font-bold tracking-widest uppercase">
            <Sparkles size={16} className="text-[#D9B44A]" />
            <span>Support</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-[#0A2342] mb-8 tracking-tight">
            {content.pageTitle}
          </h2>
          <p className="text-slate-500 text-xl max-w-3xl mx-auto font-light leading-relaxed">
            {content.intro}
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 perspective-1000">
          {/* Info Panel with 3D effect */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ rotateY: 3, rotateX: -2, y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="lg:col-span-4"
          >
            <div className="bg-[#0A2342] text-white p-10 md:p-12 rounded-[2.5rem] shadow-2xl h-full relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 transition-transform duration-700 group-hover:scale-110" />

              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-10 text-[#D9B44A]">{content.infoTitle}</h3>

                <div className="space-y-10">
                  <div className="flex items-start gap-6 group/item">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center transition-colors group-hover/item:bg-[#D9B44A]/20">
                      <MapPin className="text-[#D9B44A]" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white/50 text-sm uppercase tracking-widest mb-1">Our Location</h4>
                      <p className="text-lg leading-snug">{content.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group/item">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center transition-colors group-hover/item:bg-[#D9B44A]/20">
                      <Phone className="text-[#D9B44A]" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white/50 text-sm uppercase tracking-widest mb-1">WhatsApp / Call</h4>
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-xl font-bold hover:text-[#D9B44A] transition-colors">{content.phone}</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group/item">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center transition-colors group-hover/item:bg-[#D9B44A]/20">
                      <Mail className="text-[#D9B44A]" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white/50 text-sm uppercase tracking-widest mb-1">Email Us</h4>
                      <a href={`mailto:${content.email}`} className="text-lg hover:text-[#D9B44A] transition-colors truncate block">{content.email}</a>
                    </div>
                  </div>
                </div>

                <div className="mt-16 pt-10 border-t border-white/10">
                  <p className="text-white/60 text-sm italic">
                    "Helping you take that first step towards a brighter future in Spain."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8"
          >
            <div className="bg-white/70 backdrop-blur-xl p-10 md:p-14 rounded-[2.5rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)] border border-slate-100">
              <form onSubmit={handleSubmit} className="space-y-8">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                  <motion.div variants={itemVariants} className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1 uppercase tracking-wider">{content.form.name}</label>
                    <input
                      type="text" name="name" required
                      placeholder="Your Full Name"
                      value={formData.name} onChange={handleChange}
                      className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:ring-0 focus:border-[#D9B44A] focus:bg-white transition-all outline-none text-slate-900"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1 uppercase tracking-wider">{content.form.email}</label>
                    <input
                      type="email" name="email" required
                      placeholder="example@yourmail.com"
                      value={formData.email} onChange={handleChange}
                      className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:ring-0 focus:border-[#D9B44A] focus:bg-white transition-all outline-none text-slate-900"
                    />
                  </motion.div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="space-y-2"
                >
                  <label className="text-sm font-bold text-slate-700 ml-1 uppercase tracking-wider">{content.form.subject}</label>
                  <input
                    type="text" name="subject" required
                    placeholder="What are you inquiring about?"
                    value={formData.subject} onChange={handleChange}
                    className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:ring-0 focus:border-[#D9B44A] focus:bg-white transition-all outline-none text-slate-900"
                  />
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="space-y-2"
                >
                  <label className="text-sm font-bold text-slate-700 ml-1 uppercase tracking-wider">{content.form.message}</label>
                  <textarea
                    name="message" rows={5} required
                    placeholder="Tell us how we can help you..."
                    value={formData.message} onChange={handleChange}
                    className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:ring-0 focus:border-[#D9B44A] focus:bg-white transition-all outline-none text-slate-900 resize-none"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="pt-4"
                >
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`group w-full md:w-auto font-black py-5 px-12 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 active:scale-95 ${isSuccess ? 'bg-green-500 text-white' : 'bg-[#D9B44A] text-[#0A2342] hover:bg-[#c4a242]'
                      } ${isSubmitting ? 'opacity-80 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <span>Sending...</span>
                        <Loader2 className="w-5 h-5 animate-spin" />
                      </>
                    ) : isSuccess ? (
                      <>
                        <span>Sent Successfully!</span>
                        <CheckCircle2 className="w-5 h-5" />
                      </>
                    ) : (
                      <>
                        <span>{content.form.cta}</span>
                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;