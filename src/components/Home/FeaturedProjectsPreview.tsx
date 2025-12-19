import { motion } from "framer-motion";

const projects = [
    {
        title: "Kent Academy",
        description: "Production platform for a football club with analytics, auth, and email systems.",
        tech: ["React", "TypeScript", "Fly.io"],
        gradient: "from-rose-500/10 to-rose-500/5",
        border: "border-rose-500/20",
        text: "text-rose-500",
        delay: 0
    },
    {
        title: "Crypto Tracker",
        description: "ML-powered trading system with real-time risk management and memes detection.",
        tech: ["Python", "ML", "APIs"],
        gradient: "from-emerald-500/10 to-emerald-500/5",
        border: "border-emerald-500/20",
        text: "text-emerald-500",
        delay: 0.1
    },
    {
        title: "InfraLock",
        description: "High-performance IP intelligence microservice in Rust with sub-50ms lookups.",
        tech: ["Rust", "Security", "Microservices"],
        gradient: "from-indigo-500/10 to-indigo-500/5",
        border: "border-indigo-500/20",
        text: "text-indigo-400",
        delay: 0.2
    }
];

const FeaturedProjectsPreview = ({ setLocation }: { setLocation: any }) => {
    return (
        <div className="w-full py-20 px-4">
            <div className="max-w-7xl mx-auto flex flex-col gap-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-text-main)] mb-4">
                        Selected Works
                    </h2>
                    <p className="text-[var(--color-text-dim)] text-lg max-w-2xl mx-auto">
                        A glimpse into my technical journey, from production apps to systems programming.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: project.delay }}
                            whileHover={{ y: -10 }}
                            className={`group p-6 rounded-3xl bg-gradient-to-br ${project.gradient} border ${project.border} backdrop-blur-sm relative overflow-hidden`}
                        >
                            <div className="flex flex-col h-full gap-4">
                                <h3 className={`text-2xl font-bold ${project.text} group-hover:scale-105 transition-transform origin-left`}>
                                    {project.title}
                                </h3>
                                <div className="flex flex-wrap gap-2 text-sm text-[var(--color-text-dim)]">
                                    {project.tech.map(t => (
                                        <span key={t} className="bg-[var(--color-text-main)]/5 px-2 py-1 rounded-md">{t}</span>
                                    ))}
                                </div>
                                <p className="text-[var(--color-text-main)]/80 leading-relaxed">
                                    {project.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="flex justify-center mt-8">
                    <button
                        onClick={() => setLocation("/projects")}
                        className="btn btn-primary px-8 py-3 rounded-full text-lg shadow-lg hover:shadow-xl transition-all"
                    >
                        View All Projects
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProjectsPreview;
