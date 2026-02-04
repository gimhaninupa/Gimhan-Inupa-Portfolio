
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2 } from 'lucide-react';
import type { Project } from '../../data/projects';

interface ProjectCardProps {
    project: Project;
    index: number;
    onClick: (project: Project) => void;
}

export function ProjectCard({ project, index, onClick }: ProjectCardProps) {
    return (
        <motion.div
            layoutId={`project-card-${project.id}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            onClick={() => onClick(project)}
            className="group relative bg-slate-900 border border-slate-200 rounded-2xl overflow-hidden hover:border-brand/30 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col h-full"
        >
            {/* Image Section */}
            {project.image && (
                <div className="relative h-48 overflow-hidden">
                    <motion.img
                        layoutId={`project-image-${project.id}`}
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-brand/0 group-hover:bg-brand/10 transition-colors duration-300" />
                </div>
            )}

            <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-brand/5 rounded-xl text-brand group-hover:bg-brand/10 transition-colors">
                        <Code2 size={24} />
                    </div>
                </div>

                <motion.h3
                    layoutId={`project-title-${project.id}`}
                    className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-brand transition-colors"
                >
                    {project.title}
                </motion.h3>

                <p className="text-slate-400 mb-6 leading-relaxed line-clamp-3">
                    {project.description}
                </p>

                <div className="mt-auto pt-4 flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="px-3 py-1 text-xs font-medium text-slate-300 bg-slate-800 rounded-full border border-slate-700">
                            {tag}
                        </span>
                    ))}
                    {project.tags.length > 3 && (
                        <span className="px-3 py-1 text-xs font-medium text-slate-400 bg-slate-800 rounded-full border border-slate-700">
                            +{project.tags.length - 3}
                        </span>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
