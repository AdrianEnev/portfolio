import { motion } from "framer-motion";

const AboutTeaser = ({ setLocation }: { setLocation: any }) => {
    return (
        <div className="w-full py-20 bg-[var(--color-surface)]/30 border-y border-[var(--color-text-main)]/5 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-text-main)] mb-6">
                        More Than Just Code
                    </h2>
                    <p className="text-[var(--color-text-dim)] text-lg leading-relaxed mb-8">
                        I'm a Full Stack Developer based in Bulgaria, specializing in building high-performance web applications and secure backend systems.
                        My journey involves constant learning, from mastering React ecosystems to diving deep into Rust and Microservices.
                    </p>
                    <button
                        onClick={() => setLocation("/about")}
                        className="btn btn-secondary px-6 py-2 rounded-xl"
                    >
                        Read My Story
                    </button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-electric)] to-[var(--color-cyan-glow)] rounded-2xl blur-2xl opacity-20 animate-pulse"></div>
                    <div className="glass p-8 rounded-2xl relative">
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <span className="text-4xl">🇧🇬</span>
                                <div>
                                    <p className="text-[var(--color-text-main)] font-bold">Based in</p>
                                    <p className="text-[var(--color-text-dim)]">Dobrich, Bulgaria</p>
                                </div>
                            </div>
                            <div className="h-px bg-[var(--color-text-main)]/10"></div>
                            <div className="flex items-center gap-4">
                                <span className="text-4xl">🎓</span>
                                <div>
                                    <p className="text-[var(--color-text-main)] font-bold">Focus</p>
                                    <p className="text-[var(--color-text-dim)]">Full Stack Engineering</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AboutTeaser;
