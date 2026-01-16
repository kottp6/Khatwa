import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const WhatsAppButton: React.FC = () => {
    const phoneNumber = "34610992938";
    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            className="fixed bottom-8 left-8 z-50 p-4 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
            aria-label="Contact us on WhatsApp"
        >
            <FaWhatsapp size={32} />
            <span className="absolute left-full ml-4 px-3 py-1 bg-white text-slate-800 text-sm font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-md">
                Chat with us
            </span>
        </motion.a>
    );
};

export default WhatsAppButton;
