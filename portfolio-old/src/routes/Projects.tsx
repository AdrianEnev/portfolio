import { motion } from "framer-motion";
import { useEffect } from "react";
import ProjectsShowcase from "../components/Projects/ProjectsShowcase";

function Projects() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="relative w-full min-h-screen pt-40 pb-12 overflow-x-hidden">
            {/* Background Atmosphere - Consistent with Home/About */}
            <div className="fixed top-[15%] left-[-10%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none z-0 opacity-40" />
            <div className="fixed bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-rose-500/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none z-0 opacity-40" />

            <div className="max-w-7xl mx-auto px-6 3xs:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[var(--color-text-main)] to-[var(--color-text-dim)] mb-6">
                        Featured Work
                    </h1>
                    <p className="text-lg md:text-xl text-[var(--color-text-dim)] max-w-2xl mx-auto leading-relaxed">
                        A selection of work across client platforms, public-facing products, and experimental systems shaped by software and market thinking.
                    </p>
                </motion.div>

                <ProjectsShowcase />

                {/* Footer Quote or Closing */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-center mt-32 mb-10 text-[var(--color-text-dim)]"
                >
                    <p className="italic text-lg">"Build with taste. Test with discipline. Improve with feedback."</p>
                </motion.div>
            </div>
        </div>
    )
}

export default Projects;
