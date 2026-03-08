import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

export function WelcomeScreen() {
    const location = useLocation();
    const [isVisible, setIsVisible] = useState(true);
    const text = "Gimhan Inupa...";

    useEffect(() => {
        setIsVisible(true);
        // Prevent scrolling while the welcome screen is active
        document.body.style.overflow = 'hidden';

        // Hide after animation + small delay
        const timer = setTimeout(() => {
            setIsVisible(false);
            document.body.style.overflow = 'unset';
        }, 2500); // Adjust based on animation duration

        return () => {
            clearTimeout(timer);
            document.body.style.overflow = 'unset';
        };
    }, [location.pathname]);

    const container = {
        hidden: { opacity: 1 }, // Start fully opaque instantly to block flashing
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
        exit: {
            opacity: 0,
            transition: { duration: 0.5 }
        }
    };

    const child = {
        hidden: {
            opacity: 0,
            y: 20,
            filter: "blur(10px)"
        },
        show: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <AnimatePresence mode="wait">
            {isVisible && (
                <motion.div
                    key={`welcome-${location.pathname}`}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    variants={container}
                    className="fixed inset-0 z-[100] bg-slate-950 flex items-center justify-center"
                >
                    <div className="text-4xl md:text-6xl font-bold font-mono text-brand tracking-wider flex flex-wrap justify-center">
                        {text.split("").map((item, index) => (
                            <motion.span variants={child} key={index}>
                                {item === " " ? "\u00A0" : item}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
