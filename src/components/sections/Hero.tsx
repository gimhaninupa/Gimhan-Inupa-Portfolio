import { motion } from 'framer-motion';
import { ArrowRight, Camera, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Magnetic } from '../ui/Magnetic';

export function Hero() {
    return (
        <section className="relative min-h-screen pt-32 flex items-center justify-center overflow-hidden bg-slate-950 selection:bg-brand/30 selection:text-white">

            {/* Dynamic Background - Animated Grid Beams */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {/* Base Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--bg-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--bg-border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.2] dark:opacity-[0.2]" />



                {/* Ambient Glows */}
                <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-brand/10 dark:bg-brand/5 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-pulse" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-purple-500/10 dark:bg-purple-900/5 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-pulse delay-700" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, x: -50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-center md:justify-center order-1 md:order-1"
                    >
                        <div className="relative w-64 h-64 md:w-96 md:h-96">
                            <div className="absolute inset-0 bg-brand/20 rounded-full blur-3xl animate-pulse" />
                            <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-slate-800 shadow-2xl">
                                <img
                                    src="/Gimhan.jpg"
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Floating Badge */}
                        </div>
                    </motion.div>

                    {/* Right Column: Content */}
                    <div className="text-center md:text-left order-2 md:order-2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="inline-block mb-6 px-4 py-1.5 rounded-full border border-slate-800 bg-slate-900/50 backdrop-blur-md shadow-sm"
                        >
                            <span className="text-brand text-sm font-medium tracking-wide uppercase">
                                Digital Craftsman & Visual Storyteller
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-5xl md:text-8xl font-bold tracking-tighter text-slate-100 mb-8 font-display leading-[0.9]"
                        >
                            LOGIC <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-violet-500">&</span> <br />
                            PASSION
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-slate-600 text-lg md:text-2xl mb-12 leading-relaxed font-light"
                        >
                            Forging scalable software solutions and capturing the beauty of the stillness in a chaotic world.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-6"
                        >
                            <Magnetic>
                                <a
                                    href="#engineering"
                                    className="group flex items-center gap-2 px-8 py-4 bg-brand text-white rounded-full font-bold hover:bg-brand/90 transition-all text-lg shadow-lg shadow-brand/20"
                                >
                                    <Code className="w-5 h-5" />
                                    <span>Featured Projects</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </Magnetic>

                            <Magnetic>
                                <Link
                                    to="/photography"
                                    className="group flex items-center gap-2 px-8 py-4 bg-transparent border border-brand/20 text-brand rounded-full font-bold hover:bg-brand/5 transition-all backdrop-blur-sm text-lg"
                                >
                                    <Camera className="w-5 h-5" />
                                    <span>Visual Gallery</span>
                                </Link>
                            </Magnetic>
                        </motion.div>
                    </div>
                </div>
            </div>


        </section>
    );
}
