import { motion } from "framer-motion";
import { MapPin, Trophy, LineChart, Code2 } from "lucide-react";

const BentoIntro = ({ setLocation }: { setLocation: any }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-12">

            {/* Main Intro Card - Spans 2 cols */}
            <motion.div
                className="md:col-span-2 glass rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[var(--color-electric)]/20 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[var(--color-electric)]/30 transition-colors duration-500"></div>

                <h1 className="text-3xl md:text-5xl font-bold text-[var(--color-text-main)] mb-4 relative z-10">
                    Hey, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-cyan-glow)] to-[var(--color-electric)]">Adrian Enev</span>
                </h1>
                <p className="text-lg md:text-xl text-[var(--color-text-dim)] leading-relaxed relative z-10">
                    I design and ship end-to-end products while studying at Nikola Vaptsarov Naval Academy in Varna.
                    Beyond client software, I am deeply interested in algorithmic and quantitative trading: the craft of turning fast-moving markets into testable systems, risk rules, and disciplined execution.
                </p>
            </motion.div>

            {/* Location Card */}
            <motion.div
                className="glass rounded-3xl p-6 flex flex-col items-center justify-center text-center relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ scale: 1.02 }}
            >
                <div className="absolute inset-0 bg-[url('/assets/map-bg.png')] opacity-10 bg-cover bg-center"></div> {/* Placeholder or abstract map pattern */}
                <div className="bg-[var(--color-cyan-glow)]/20 p-4 rounded-full mb-4 text-[var(--color-cyan-glow)]">
                    <MapPin size={32} />
                </div>
                <h3 className="text-xl font-bold text-[var(--color-text-main)]">Based in</h3>
                <p className="text-[var(--color-text-dim)]">Dobrich / Varna, Bulgaria 🇧🇬</p>
            </motion.div>

            {/* Achievements/Olympiads */}
            <motion.div
                className="glass rounded-3xl p-6 flex flex-col justify-between"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -5 }}
                onClick={() => setLocation('/achievements')}
            >
                <div className="flex justify-between items-start">
                    <div className="bg-yellow-500/20 p-3 rounded-2xl text-yellow-500">
                        <Trophy size={28} />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-dim)] border border-[var(--color-text-dim)]/20 px-2 py-1 rounded-full">Explore</span>
                </div>
                <div className="mt-8 cursor-pointer">
                    <h3 className="text-xl font-bold text-[var(--color-text-main)] group-hover:text-yellow-400 transition-colors">Achievements</h3>
                    <p className="text-sm text-[var(--color-text-dim)] mt-1">
                        A high-school-to-now timeline of competitions, milestones, and visible growth.
                    </p>
                </div>
            </motion.div>

            {/* Philosophy: Build & Trade */}
            <motion.div
                className="md:col-span-2 glass rounded-3xl p-8 flex items-center justify-between"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <div className="max-w-[70%]">
                    <h3 className="text-xl font-bold text-[var(--color-text-main)] mb-3 flex items-center gap-3">
                        <Code2 className="text-[var(--color-electric)]" />
                        <LineChart className="text-[var(--color-cyan-glow)]" />
                        Engineering Focus
                    </h3>
                    <p className="text-[var(--color-text-dim)]">
                        I work across full-stack development and quantitative trading systems, with a focus on practical software, clear architecture, and disciplined analysis.
                    </p>
                </div>
                <button
                    onClick={() => setLocation('/projects')}
                    className="btn btn-primary h-12 px-6 shadow-lg hidden md:flex"
                >
                    View Work
                </button>
            </motion.div>
        </div>
    );
}

export default BentoIntro;
