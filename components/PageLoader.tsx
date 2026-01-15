import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PageLoaderProps {
    isVisible: boolean;
}

const PageLoader: React.FC<PageLoaderProps> = ({ isVisible }) => {
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-[60] flex items-center justify-center bg-white/80 backdrop-blur-sm"
                >
                    <div className="flex flex-col items-center">
                        <motion.div
                            animate={{
                                rotate: 360,
                                borderRadius: ["20%", "50%", "50%", "20%"],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="w-16 h-16 border-4 border-[#D9B44A] border-t-transparent rounded-full shadow-lg"
                        />
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="mt-4 text-[#0A2342] font-semibold tracking-widest uppercase text-sm"
                        >
                            Khatwa
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PageLoader;
