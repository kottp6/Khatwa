import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
    theme?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ theme = 'dark' }) => {
    const isDark = theme === 'dark';
    const primaryColor = isDark ? '#0A2342' : '#FFFFFF';
    const goldColor = '#D9B44A';
    const textColor = isDark ? 'text-[#0A2342]' : 'text-white';

    return (
        <div className="flex items-center gap-3 group cursor-pointer select-none">
            <div className="relative w-28 h-16 flex items-center justify-center">
                <motion.svg
                    viewBox="-50 0 150 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                >
                    {/* The "Step" part (Vertical bar of K) */}
                    {/* Bottom Step */}
                    <motion.rect
                        x="15" y="65" width="12" height="15"
                        fill={goldColor}
                        variants={{
                            initial: { opacity: 0, scaleY: 0, originY: 1 },
                            animate: { opacity: 1, scaleY: 1, transition: { duration: 0.4, delay: 0.2 } }
                        }}
                    />
                    {/* Middle Step */}
                    <motion.rect
                        x="27" y="50" width="12" height="30"
                        fill={goldColor}
                        variants={{
                            initial: { opacity: 0, scaleY: 0, originY: 1 },
                            animate: { opacity: 1, scaleY: 1, transition: { duration: 0.4, delay: 0.4 } }
                        }}
                    />
                    {/* Top Step */}
                    <motion.rect
                        x="39" y="35" width="12" height="45"
                        fill={goldColor}
                        variants={{
                            initial: { opacity: 0, scaleY: 0, originY: 1 },
                            animate: { opacity: 1, scaleY: 1, transition: { duration: 0.4, delay: 0.6 } }
                        }}
                    />

                    {/* The "K" arms - Moved further right to create a gap */}
                    {/* Top Arm */}
                    <motion.path
                        d="M60 55 L85 20"
                        stroke={primaryColor}
                        strokeWidth="10"
                        strokeLinecap="round"
                        variants={{
                            initial: { pathLength: 0, opacity: 0 },
                            animate: { pathLength: 1, opacity: 1, transition: { duration: 0.5, delay: 0.8 } },
                            hover: { x: 5, y: -5, transition: { duration: 0.3 } }
                        }}
                    />
                    {/* Bottom Arm */}
                    <motion.path
                        d="M60 55 L85 85"
                        stroke={primaryColor}
                        strokeWidth="10"
                        strokeLinecap="round"
                        variants={{
                            initial: { pathLength: 0, opacity: 0 },
                            animate: { pathLength: 1, opacity: 1, transition: { duration: 0.5, delay: 1 } },
                            hover: { x: 5, y: 5, transition: { duration: 0.3 } }
                        }}
                    />

                    {/* Footsteps "Side Stair" - Left Side */}
                   
                </motion.svg>
            </div>

            <div className="flex flex-col">
                <motion.span
                    className={`text-2xl font-bold tracking-tight leading-none ${textColor}`}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                >
                    KHATWA
                </motion.span>
                <div className="flex items-center gap-1">
                    <motion.span
                        className={`text-[0.65rem] font-medium tracking-widest uppercase opacity-60 ${textColor}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                        transition={{ duration: 0.5, delay: 1.4 }}
                    >
                        Your First Step
                    </motion.span>
                </div>
            </div>
        </div>
    );
};
