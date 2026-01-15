import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SplashScreenProps {
    onLoadingComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onLoadingComplete }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Hide splash screen after 2.5 seconds
        const timer = setTimeout(() => {
            setIsVisible(false);
            // Call onLoadingComplete after fade out animation
            setTimeout(onLoadingComplete, 500);
        }, 2500);

        return () => clearTimeout(timer);
    }, [onLoadingComplete]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-[#0A2342] via-[#0D2D52] to-[#0A2342]"
                >
                    {/* Animated background particles */}
                    <div className="absolute inset-0 overflow-hidden">
                        {[...Array(20)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-[#D9B44A] rounded-full"
                                initial={{
                                    x: Math.random() * window.innerWidth,
                                    y: Math.random() * window.innerHeight,
                                    opacity: 0,
                                }}
                                animate={{
                                    y: [null, Math.random() * window.innerHeight],
                                    opacity: [0, 0.6, 0],
                                }}
                                transition={{
                                    duration: 2 + Math.random() * 2,
                                    repeat: Infinity,
                                    delay: Math.random() * 2,
                                }}
                            />
                        ))}
                    </div>

                    {/* Main content */}
                    <div className="relative z-10 text-center">
                        {/* Khatwa text with animation */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="mb-8"
                        >
                            <motion.h1
                                className="text-7xl md:text-8xl font-bold text-white mb-4"
                                initial={{ letterSpacing: '0.5em', opacity: 0 }}
                                animate={{ letterSpacing: '0.1em', opacity: 1 }}
                                transition={{ duration: 1, delay: 0.3 }}
                            >
                                Khatwa
                            </motion.h1>

                            {/* Arabic text */}
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                className="text-2xl md:text-3xl text-[#D9B44A] font-semibold"
                            >
                                خطوة
                            </motion.p>
                        </motion.div>

                        {/* Tagline */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                            className="text-lg md:text-xl text-gray-300 font-light"
                        >
                            Your First Step to Spain
                        </motion.p>

                        {/* Loading animation */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 1.5 }}
                            className="mt-12 flex justify-center items-center gap-2"
                        >
                            {[0, 1, 2].map((i) => (
                                <motion.div
                                    key={i}
                                    className="w-3 h-3 bg-[#D9B44A] rounded-full"
                                    animate={{
                                        scale: [1, 1.5, 1],
                                        opacity: [0.5, 1, 0.5],
                                    }}
                                    transition={{
                                        duration: 1,
                                        repeat: Infinity,
                                        delay: i * 0.2,
                                    }}
                                />
                            ))}
                        </motion.div>
                    </div>

                    {/* Decorative corner elements */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 0.1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="absolute top-0 left-0 w-64 h-64 border-t-4 border-l-4 border-[#D9B44A] rounded-tl-3xl"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 0.1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="absolute bottom-0 right-0 w-64 h-64 border-b-4 border-r-4 border-[#D9B44A] rounded-br-3xl"
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SplashScreen;
