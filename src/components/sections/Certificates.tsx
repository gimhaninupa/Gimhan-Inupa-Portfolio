import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { certificates } from '../../data/certificates';

export function Certificates() {
    return (
        <section id="certificates" className="py-24 bg-slate-950 relative">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="mb-20 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-6 text-slate-100"
                    >
                        Licences & <span className="text-brand">Certifications</span>
                    </motion.h2>
                    <div className="w-24 h-1 bg-slate-800 mx-auto rounded-full" />
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -5 }}
                            transition={{ delay: index * 0.1, duration: 0.3 }}
                            viewport={{ once: true }}
                            className="bg-slate-900 rounded-2xl p-6 border border-slate-800 shadow-sm hover:shadow-xl transition-all group flex flex-col h-full"
                        >
                            <div className="flex justify-between items-start mb-6">
                                {/* Small Certificate Thumbnail */}
                                <div className="w-16 h-16 rounded-xl overflow-hidden border border-slate-800 shadow-sm group-hover:shadow-md transition-shadow">
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <a
                                    href={cert.credentialUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2.5 text-slate-400 hover:text-brand hover:bg-brand/10 rounded-full transition-colors"
                                >
                                    <ExternalLink size={20} />
                                </a>
                            </div>

                            <div className="flex-1 mb-6">
                                <h3 className="text-lg font-bold text-slate-100 mb-2 line-clamp-2 leading-snug group-hover:text-brand transition-colors">
                                    {cert.title}
                                </h3>

                                <p className="text-slate-400 text-sm font-medium">
                                    {cert.issuer}
                                </p>
                            </div>

                            <div className="pt-4 border-t border-slate-800 flex items-center justify-between mt-auto">
                                <span className="text-slate-500 text-sm font-medium">Issued</span>
                                <span className="bg-slate-950 text-slate-300 px-3 py-1 rounded-full text-sm font-semibold border border-slate-800 group-hover:border-brand/30 group-hover:bg-brand/10 group-hover:text-brand transition-colors">
                                    {cert.date}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
