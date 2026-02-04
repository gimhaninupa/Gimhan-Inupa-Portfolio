import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export function ProjectVideoPage() {
    const { id } = useParams();
    const project = projects.find(p => p.id === id);

    if (!project || !project.video) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white">
                <h1 className="text-2xl font-bold mb-4">Project not found or no video available.</h1>
                <Link to="/" className="text-brand hover:text-white transition-colors">Return Home</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col pt-20"> {/* pt-20 for navbar space */}
            <div className="max-w-7xl mx-auto px-6 w-full flex-1 flex flex-col">

                {/* Header / Back Button */}
                <div className="mb-8">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-brand transition-colors font-medium text-lg group"
                    >
                        <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                        Back to Portfolio
                    </Link>
                </div>

                {/* Video Container */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-800"
                >
                    <div className="aspect-video w-full bg-black relative">
                        <video
                            src={project.video}
                            controls
                            autoPlay
                            className="w-full h-full"
                            poster={project.image}
                        />
                    </div>
                    <div className="p-8 md:p-12">
                        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">{project.title}</h1>
                        <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-3xl">{project.description}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
