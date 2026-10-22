
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, skills, type Project } from '../../data/projects';
import { DepthCarousel } from '../ui/DepthCarousel';
import { useTheme } from '../../context/ThemeContext';
import { Github, ExternalLink, X, Code2, Maximize2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Engineering() {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const carouselItems = useMemo(() => {
        return projects.map((p) => ({
            id: p.id,
            image: p.image || '',
            alt: p.title,
            title: p.title,
            description: p.description,
            tags: p.tags,
            isMobile: p.id === 'fitunique' || p.id === 'taskmaster',
            original: p
        }));
    }, []);

    return (
        <section id="engineering" className="py-24 bg-transparent relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Header */}
                <div className="mb-14">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-4 text-slate-100"
                    >
                        Featured <span className="text-brand">Projects</span>
                    </motion.h2>
                    <div className="w-20 h-1 bg-brand rounded-full mb-3" />
                    <p className="text-slate-400 text-sm md:text-base max-w-xl">
                        Interactive 3D depth showcase of software engineering work. Drag, scroll, or click cards to view details.
                    </p>
                </div>

                {/* 3D Depth Carousel View */}
                <div className="relative w-full h-[480px] sm:h-[520px] md:h-[580px] mb-24 flex items-center justify-center">

                    <DepthCarousel
                        items={carouselItems}
                        cardWidth={640}
                        cardHeight={285}
                        radius={24}
                        depth={240}
                        spread={110}
                        tilt={22}
                        tiltDirection="right"
                        perspective={1400}
                        visibleCards={4}
                        falloff={0.22}
                        blur={6}
                        tint={isDark ? '#05060a' : '#cbd5e1'}
                        autoplay={true}
                        autoplayDelay={3600}
                        loop={true}
                        showControls={true}
                        showIndicators={true}
                        onItemClick={(item) => setSelectedProject((item.original as Project) || null)}
                        renderCardOverlay={(item, _index, isActive) => (
                            <div
                                className={`absolute inset-x-0 bottom-0 p-4 md:p-6 bg-gradient-to-t from-white/95 via-white/80 to-transparent dark:from-slate-950/95 dark:via-slate-950/80 transition-all duration-300 pointer-events-none z-10 ${
                                    isActive ? 'opacity-100' : 'opacity-0'
                                }`}
                            >
                                <div className="flex items-end justify-between gap-4">
                                    <div className="min-w-0 flex-1">
                                        <h3 className="text-xl md:text-2xl font-bold text-slate-100 tracking-wide drop-shadow-sm truncate mb-1">
                                            {item.title}
                                        </h3>
                                        <p className="text-xs md:text-sm text-slate-300 line-clamp-1 drop-shadow-sm max-w-lg mb-2">
                                            {item.description}
                                        </p>
                                        <div className="flex flex-wrap gap-1.5">
                                            {((item.tags as string[]) || []).slice(0, 3).map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-2.5 py-0.5 text-xs font-medium text-slate-100 bg-slate-900/90 border border-slate-800 rounded-md backdrop-blur-md shadow-sm"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                            {((item.tags as string[]) || []).length > 3 && (
                                                <span className="px-2 py-0.5 text-xs font-medium text-slate-400 bg-slate-900/70 border border-slate-800 rounded-md">
                                                    +{((item.tags as string[]) || []).length - 3}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="shrink-0 mb-1">
                                        <span className="p-3 rounded-2xl bg-brand text-white shadow-xl shadow-brand/40 flex items-center justify-center">
                                            <Maximize2 size={16} />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )}
                    />
                </div>

                {/* Skills Section */}
                <div>
                    <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-2xl font-bold mb-8 text-center text-slate-100"
                    >
                        Technical Arsenal
                    </motion.h3>
                    {/* Waving Marquee Skills */}
                    <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                        <motion.div
                            className="flex gap-8 w-max px-4 py-10"
                            animate={{ x: "-50%" }}
                            transition={{
                                duration: 30,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        >
                            {[...skills, ...skills].map((skill, index) => (
                                <motion.div
                                    key={`${skill.name}-${index}`}
                                    animate={{ y: [0, -20, 0] }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: index * 0.1,
                                    }}
                                    className="flex items-center gap-3 px-6 py-3 bg-slate-900 border border-slate-800 rounded-full shadow-sm min-w-max"
                                >
                                    <img
                                        src={skill.icon}
                                        alt={skill.name}
                                        className="w-5 h-5 opacity-70"
                                        loading="lazy"
                                    />
                                    <span className="text-slate-300 font-medium">{skill.name}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8">

                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
                        />

                        {/* Modal Card */}
                        <motion.div
                            layoutId={`project-card-${selectedProject.id}`}
                            className="relative w-full max-w-4xl bg-slate-900 rounded-3xl shadow-2xl shadow-black/50 overflow-hidden flex flex-col md:flex-row max-h-[90vh] border border-slate-800"
                            onClick={(e) => e.stopPropagation()}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors backdrop-blur-md"
                            >
                                <X size={20} />
                            </button>

                            {/* Image Side (Left) */}
                            <div className="w-full md:w-1/2 relative h-[300px] md:h-auto bg-slate-950 flex items-center justify-center overflow-hidden shrink-0">
                                {/* Blurred Background */}
                                <img
                                    src={selectedProject.image}
                                    alt=""
                                    className="absolute inset-0 w-full h-full object-cover blur-xl opacity-50 scale-110 transition-transform"
                                />
                                {/* Main Image */}
                                <motion.img
                                    layoutId={`project-image-${selectedProject.id}`}
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="relative z-10 w-full h-full object-contain shadow-2xl p-4"
                                />
                            </div>

                            {/* Content Side (Right) */}
                            <div className="w-full md:w-1/2 flex flex-col overflow-hidden bg-slate-900">
                                {/* Scrollable Content */}
                                <div className="flex-1 overflow-y-auto p-6 md:p-10">
                                    <div className="mb-6">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="p-2.5 bg-brand/10 rounded-xl text-brand">
                                                <Code2 size={24} />
                                            </div>
                                            <motion.h3
                                                layoutId={`project-title-${selectedProject.id}`}
                                                className="text-3xl font-bold text-slate-100"
                                            >
                                                {selectedProject.title}
                                            </motion.h3>
                                        </div>

                                        <p className="text-slate-300 text-lg leading-relaxed">
                                            {selectedProject.description}
                                        </p>
                                    </div>

                                    <div className="mb-4">
                                        <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">Technologies</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.tags.map(tag => (
                                                <span key={tag} className="px-3 py-1.5 text-sm font-medium text-slate-300 bg-slate-800 rounded-lg border border-slate-800">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Fixed Footer Actions */}
                                <div className="p-6 md:p-10 pt-4 border-t border-slate-800 bg-slate-900 shrink-0 z-20">
                                    <div className="flex gap-4">
                                        {selectedProject.video ? (
                                            <Link
                                                to={`/project/${selectedProject.id}`}
                                                className="flex-1 py-3 bg-brand text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brand/90 transition-all shadow-lg shadow-brand/20"
                                            >
                                                <ExternalLink size={18} />
                                                {selectedProject.buttonText || "Live Demo"}
                                            </Link>
                                        ) : (
                                            selectedProject.links.demo && (
                                                <a
                                                    href={selectedProject.links.demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex-1 py-3 bg-brand text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brand/90 transition-all shadow-lg shadow-brand/20"
                                                >
                                                    <ExternalLink size={18} />
                                                    {selectedProject.buttonText || "Live Demo"}
                                                </a>
                                            )
                                        )}
                                        {selectedProject.links.github && (
                                            <a
                                                href={selectedProject.links.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 py-3 bg-brand text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brand/90 transition-all shadow-lg shadow-brand/20"
                                            >
                                                <Github size={18} />
                                                View Source
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
