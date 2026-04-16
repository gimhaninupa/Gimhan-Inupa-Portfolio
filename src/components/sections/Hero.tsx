import { motion } from 'framer-motion';
import { ArrowRight, Camera, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
    return (
        <section className="relative min-h-screen pt-32 flex items-center justify-center overflow-hidden bg-slate-950 selection:bg-brand/30 selection:text-white">

            {/* Background Elements - Light Theme (using brand/purple glows) */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-brand/5 rounded-full blur-[120px] mix-blend-multiply opacity-50 animate-pulse" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-purple-500/5 rounded-full blur-[100px] mix-blend-multiply opacity-50 animate-pulse delay-700" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Image - Circular */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, x: -50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-center md:justify-center order-1 md:order-1"
                    >
                        <div className="relative w-64 h-64 md:w-96 md:h-96">
                            {/* Glow/Shadow behind circle */}
                            <div className="absolute inset-0 bg-brand/10 blur-3xl rounded-full scale-110 opacity-50" />

                            <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-slate-900/50 shadow-2xl">
                                <img
                                    src="/Gimhan.png"
                                    alt="Profile"
                                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                                />
                            </div>
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
                            className="text-5xl md:text-5xl font-bold tracking-tighter text-slate-100 mb-8 font-display leading-[1.1]"
                        >
                            Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-violet-600">Gimhan Inupa</span> <br />

                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-slate-400 text-lg md:text-xl mb-12 leading-relaxed font-light max-w-lg mx-auto md:mx-0"
                        >
                            Forging scalable software solutions and capturing the beauty of the stillness in a chaotic world.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-6"
                        >
                            <a
                                href="#engineering"
                                className="group flex items-center gap-2 px-8 py-4 bg-brand text-white rounded-full font-bold hover:bg-brand/90 transition-all text-lg shadow-lg hover:shadow-xl"
                            >
                                <Code className="w-5 h-5" />
                                <span>Featured Projects</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>

                            <Link
                                to="/photography"
                                className="group flex items-center gap-2 px-8 py-4 bg-transparent border border-brand/20 text-brand rounded-full font-bold hover:bg-brand/5 transition-all text-lg"
                            >
                                <Camera className="w-5 h-5" />
                                <span>Visual Gallery</span>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
