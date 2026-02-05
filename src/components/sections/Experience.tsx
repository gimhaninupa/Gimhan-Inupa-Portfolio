
import { motion } from 'framer-motion';
import { Calendar, Briefcase, MapPin } from 'lucide-react';

export function Experience() {
    const experiences = [
        {
            id: 1,
            role: "Software Engineer",
            company: "Zylon Labs",
            period: "2025 - Present",
            location: "Remote",
        },
        {
            id: 2,
            role: "Co-Founder & Web Developer",
            company: "ArcLight",
            period: "2025 - Present",
            location: "Remote",
        },
        {
            id: 3,
            role: "Bsc Hons in Software Engineering (Undergraduate)",
            company: "Sri Lanka Technology Campus (SLTC)",
            period: "2024 - 2028",
            location: "Padukka, Sri Lanka",
        },
        {
            id: 4,
            role: "Advanced Level in Biological Science",
            company: "R/Balangoda Ananda Maithreya Central College",
            period: "2019 - 2022",
            location: "Balangoda, Sri Lanka",
        },
    ];

    return (
        <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-950 relative">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-slate-100">
                        Education & <span className="text-brand">Experience</span>
                    </h2>
                    <div className="w-24 h-1 bg-brand mx-auto rounded-full" />
                </motion.div>

                <div className="relative">
                    {/* Center Line - Thicker and Theme Aware */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-slate-300 dark:bg-slate-800" />

                    <div className="space-y-4 md:space-y-0">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Content Side */}
                                <div className="md:w-1/2 w-full px-0 md:px-12">
                                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 hover:border-brand/20 group">
                                        <div className="flex flex-col gap-4 mb-4">
                                            <div className="flex justify-between items-start">
                                                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-brand transition-colors">
                                                    {exp.role}
                                                </h3>
                                                <span className="md:hidden bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
                                                    {exp.period}
                                                </span>
                                            </div>

                                            <div className="flex items-center gap-4 text-sm">
                                                <div className="flex items-center gap-1.5 text-brand font-medium">
                                                    <Briefcase size={16} />
                                                    <span>{exp.company}</span>
                                                </div>
                                                <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
                                                    <MapPin size={16} />
                                                    <span>{exp.location}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Timeline Point */}
                                <div className="absolute left-0 top-0 md:left-1/2 md:top-8 transform md:-translate-x-1/2 flex items-center justify-center w-8 h-8">
                                    <div className="w-4 h-4 bg-brand rounded-full ring-4 ring-slate-50 dark:ring-slate-950 shadow-sm z-10" />
                                </div>

                                {/* Date Side (Desktop only) */}
                                <div className={`hidden md:flex md:w-1/2 px-12 items-center ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 px-4 py-2 rounded-full font-semibold shadow-sm flex items-center gap-2">
                                        <Calendar size={16} className="text-brand" />
                                        {exp.period}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
