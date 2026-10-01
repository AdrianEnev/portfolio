import { motion } from "framer-motion";
import { projects } from "../../data/projects";

const ProjectsShowcase = () => {
    return (
        <div className="w-full max-w-7xl mx-auto px-6 py-20 flex flex-col gap-24">
            {projects.map((project, index) => {
                const isFeatured = project.status === 'featured';
                const isEven = index % 2 === 0;

                return (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, delay: index * 0.1 }}
                        className={`relative flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16`}
                    >
                        {/* Visual Side */}
                        <div className={`w-full md:w-3/5 group relative perspective-1000`}>
                            <div className={`relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm 
                                ${isFeatured ? 'shadow-[0_0_100px_-20px_rgba(var(--color-rose-500-rgb),0.3)]' : 'opacity-80 grayscale contrast-125'}
                                transition-all duration-500 group-hover:scale-[1.02]`}
                            >
                                {/* Abstract Geometric placeholder since we don't have images yet */}
                                <div className={`absolute inset-0 bg-gradient-to-br 
                                    ${project.color === 'rose' ? 'from-rose-500/20 via-transparent to-purple-900/40' : ''}
                                    ${project.color === 'emerald' ? 'from-emerald-500/20 via-transparent to-cyan-900/40' : ''}
                                    ${project.color === 'cyan' ? 'from-cyan-500/20 via-transparent to-blue-900/40' : ''}
                                `} />

                                <div className="absolute inset-0 flex items-center justify-center">
                                    {isFeatured ? (
                                        <div className="w-20 h-20 rounded-full bg-white/5 backdrop-blur-md border border-white/20 flex items-center justify-center"
                                            onClick={() => window.open(project.link, '_blank')}
                                        >
                                            <svg className="w-8 h-8 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </div>
                                    ) : (
                                        <div className="flex flex-col items-center gap-3">
                                            <div className="w-16 h-16 rounded-full bg-black/50 border border-white/10 flex items-center justify-center">
                                                <svg className="w-6 h-6 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                                </svg>
                                            </div>
                                            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/60 tracking-wider uppercase">
                                                Coming Soon
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="w-full md:w-2/5 flex flex-col items-start text-left">
                            <div className="flex items-center gap-4 mb-4">
                                <span className={`text-${project.color}-500 dark:text-${project.color}-400 font-mono text-sm tracking-wider`}>0{index + 1} — {project.year}</span>
                                {project.isWIP && (
                                    <span className="px-2 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/20 text-[10px] font-bold text-amber-500 uppercase tracking-tighter">
                                        Work in progress
                                    </span>
                                )}
                                {project.isClientWork && (
                                    <span className="px-2 py-0.5 rounded-md bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold text-blue-500 uppercase tracking-tighter">
                                        Client Work
                                    </span>
                                )}
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-main)] mb-4 leading-tight">
                                {project.title}
                            </h2>
                            <h3 className="text-xl text-[var(--color-text-dim)] mb-6 font-light">
                                {project.subtitle}
                            </h3>
                            <p className="text-[var(--color-text-dim)] leading-relaxed mb-8">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tech.map(t => (
                                    <span key={t} className="px-3 py-1 bg-[var(--color-surface)]/50 border border-[var(--color-text-main)]/10 rounded-full text-xs text-[var(--color-text-dim)]">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {isFeatured && project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`group flex items-center gap-3 text-${project.color}-500 hover:text-${project.color}-600 dark:text-${project.color}-400 dark:hover:text-${project.color}-300 transition-colors`}
                                >
                                    <span className="font-medium text-lg">View Project</span>
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            )}
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
};

export default ProjectsShowcase;
