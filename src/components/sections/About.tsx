import { motion } from 'framer-motion';
import { GitBranch, Code, Camera } from 'lucide-react';

export function About() {
    return (
        <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-16">

                    {/* Image / Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-5/12 relative max-w-sm mx-auto md:mx-0"
                    >
                        <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-slate-900 relative z-10 transition-transform">
                            <img
                                src="/images/about/Profile.jpg"
                                alt="Portrait"
                                className="w-full h-full object-cover transition-all duration-700"
                            />
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-7/12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-100">
                            <br />
                            <span className="text-brand">About</span> <span className="text-purple-500">Me</span>
                        </h2>

                        <div className="space-y-4 text-slate-400 text-base leading-relaxed">
                            <p>
                                I’m a full-stack Software Engineering undergraduate at Sri Lanka Technological Campus (SLTC) and a freelance photographer, passionate about blending technology with creativity. With a strong foundation in software development, web technologies, and data-driven problem-solving, I enjoy building innovative digital solutions that make an impact.
                            </p>
                            <p>
                                Alongside coding, photography allows me to express my artistic side — capturing stories, emotions, and perspectives through my lens. I also volunteer as a photographer in the Media Unit of SLTC, where I contribute to documenting campus events and creative projects. Whether I’m developing an application or composing a shot, I’m driven by curiosity, precision, and a desire to create meaningful experiences.
                            </p>
                        </div>

                        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-6">
                            {/* Projects Card */}
                            <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow group">
                                <GitBranch className="w-8 h-8 text-brand mb-4 group-hover:scale-110 transition-transform" />
                                <span className="text-3xl font-bold text-slate-900 dark:text-slate-100">6+</span>
                                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-2">Projects</span>
                            </div>

                            {/* Experience Card */}
                            <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow group">
                                <Code className="w-8 h-8 text-brand mb-4 group-hover:scale-110 transition-transform" />
                                <span className="text-3xl font-bold text-slate-900 dark:text-slate-100">2+</span>
                                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-2">Experience</span>
                            </div>

                            {/* Photography Card */}
                            <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow group">
                                <Camera className="w-8 h-8 text-brand mb-4 group-hover:scale-110 transition-transform" />
                                <span className="text-3xl font-bold text-slate-900 dark:text-slate-100">2+</span>
                                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-2">Years Photography</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
