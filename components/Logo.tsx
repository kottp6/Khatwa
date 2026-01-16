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
        <div className="flex items-center gap-4 group cursor-pointer select-none">
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
                    <g className="text-slate-400/50">
                        {/* Step 1 (Bottom Left) */}
                        <motion.path
                            d="M-40 75 Q-35 70 -30 75 Q-28 82 -32 88 Q-38 92 -42 88 Q-45 82 -40 75 Z"
                            fill={goldColor}
                            opacity={0.6}
                            variants={{
                                initial: { opacity: 0, scale: 0 },
                                animate: { opacity: 0.6, scale: 1, transition: { delay: 1.2 } },
                                hover: { y: -2, transition: { duration: 0.2 } }
                            }}
                        />
                        {/* Step 2 (Middle Left) */}
                        <motion.path
                            d="M-25 55 Q-20 50 -15 55 Q-13 62 -17 68 Q-23 72 -27 68 Q-30 62 -25 55 Z"
                            fill={goldColor}
                            opacity={0.6}
                            variants={{
                                initial: { opacity: 0, scale: 0 },
                                animate: { opacity: 0.6, scale: 1, transition: { delay: 1.4 } },
                                hover: { y: -2, transition: { duration: 0.2, delay: 0.1 } }
                            }}
                        />
                        {/* Step 3 (Top Left) */}
                        <motion.path
                            d="M-10 35 Q-5 30 0 35 Q2 42 -2 48 Q-8 52 -12 48 Q-15 42 -10 35 Z"
                            fill={goldColor}
                            opacity={0.6}
                            variants={{
                                initial: { opacity: 0, scale: 0 },
                                animate: { opacity: 0.6, scale: 1, transition: { delay: 1.6 } },
                                hover: { y: -2, transition: { duration: 0.2, delay: 0.2 } }
                            }}
                        />
                    </g>
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
