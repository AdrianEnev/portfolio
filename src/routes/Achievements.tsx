import { motion } from "framer-motion";
import { useEffect } from "react";
import TrophyHall from "../components/Achievements/TrophyHall";

function Achievements() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="relative w-full min-h-screen pt-24 pb-20 overflow-x-hidden">
            {/* Background Atmosphere */}
            <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-[var(--color-electric)]/5 rounded-full blur-[120px] pointer-events-none z-0" />
            <div className="fixed top-20 right-0 w-[300px] h-[300px] bg-[var(--color-cyan-glow)]/5 rounded-full blur-[80px] pointer-events-none z-0" />

            <div className="max-w-4xl mx-auto px-6 3xs:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 md:mb-24"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-electric)]/5 border border-[var(--color-electric)]/20 mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-electric)] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-electric)]"></span>
                        </span>
                        <span className="text-xs font-bold text-[var(--color-electric)] uppercase tracking-widest">Hall of Fame</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-[var(--color-text-main)] mb-6 tracking-tight">
                        Notable Achievements
                    </h1>
                    <p className="text-lg md:text-xl text-[var(--color-text-dim)] max-w-2xl mx-auto leading-relaxed">
                        A timeline of academic excellence and competitive milestones in IT and English linguistics (2022-2025).
                    </p>
                </motion.div>

                <TrophyHall />
            </div>
        </div>
    )
}

export default Achievements;