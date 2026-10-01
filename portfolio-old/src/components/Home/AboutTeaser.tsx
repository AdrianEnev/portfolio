import { motion } from "framer-motion";
import { Code2, GraduationCap, LineChart, MapPin } from "lucide-react";

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
                        Full-Stack Development & Quant Trading
                    </h2>
                    <p className="text-[var(--color-text-dim)] text-lg leading-relaxed mb-8">
                        I'm a Full Stack Developer based between Dobrich and Varna, studying at Nikola Vaptsarov Naval Academy.
                        My work is split between client-facing web applications and quantitative trading systems, especially trading algorithms and automated market analysis.
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
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                                    <MapPin size={26} />
                                </div>
                                <div>
                                    <p className="text-[var(--color-text-main)] font-bold">Based in</p>
                                    <p className="text-[var(--color-text-dim)]">Dobrich, Bulgaria</p>
                                </div>
                            </div>
                            <div className="h-px bg-[var(--color-text-main)]/10"></div>
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">
                                    <GraduationCap size={28} />
                                </div>
                                <div>
                                    <p className="text-[var(--color-text-main)] font-bold">Study</p>
                                    <p className="text-[var(--color-text-dim)]">Nikola Vaptsarov Naval Academy, Varna</p>
                                </div>
                            </div>
                            <div className="h-px bg-[var(--color-text-main)]/10"></div>
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                                    <Code2 size={28} />
                                </div>
                                <div>
                                    <p className="text-[var(--color-text-main)] font-bold">Software Engineering</p>
                                    <p className="text-[var(--color-text-dim)]">Full-stack apps & client platforms</p>
                                </div>
                            </div>
                            <div className="h-px bg-[var(--color-text-main)]/10"></div>
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                                    <LineChart size={28} />
                                </div>
                                <div>
                                    <p className="text-[var(--color-text-main)] font-bold">Quant Trading</p>
                                    <p className="text-[var(--color-text-dim)]">Trading algorithms & market analysis</p>
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
