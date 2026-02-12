import { useLocation } from "wouter";
import Headshot from "../components/Home/Headshot";
import { motion } from "framer-motion";
import TechStackMarquee from "../components/Home/TechStackMarquee";
import FeaturedProjectsPreview from "../components/Home/FeaturedProjectsPreview";
import AboutTeaser from "../components/Home/AboutTeaser";
import CTASection from "../components/Home/CTASection";

function Home() {
    const [_location, setLocation] = useLocation();

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            }
        }
    };

    const item = {
        hidden: { y: 30, opacity: 0 },
        show: { y: 0, opacity: 1, transition: { type: "spring" as const, stiffness: 50 } }
    };

    return (
        <div className="relative w-full min-h-screen overflow-x-hidden">
            {/* Background Atmosphere - Fixed to viewport for continuity */}
            {/* Background Atmosphere - Fixed to viewport for continuity */}
            <div className="fixed top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-400/30 dark:bg-purple-600/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen pointer-events-none animate-pulse z-0 dark:block hidden" />
            <div className="fixed bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-400/30 dark:bg-blue-600/10 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen pointer-events-none z-0 dark:block hidden" />

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center pt-20 pb-10 md:pt-0 z-10">
                <div className="max-w-7xl w-full px-6 3xs:px-8 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="flex flex-col gap-6 md:gap-8 text-center md:text-left order-2 md:order-1"
                    >
                        <motion.div variants={item}>
                            <span className="inline-block py-1 px-3 rounded-full bg-[var(--color-surface)]/50 border border-[var(--color-text-main)]/10 text-[var(--color-cyan-glow)] text-sm font-medium tracking-wide mb-4 backdrop-blur-sm">
                                Welcome to my portfolio
                            </span>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-[var(--color-text-main)]">
                                Hi, I'm <br className="md:hidden" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-cyan-glow)] to-[var(--color-electric)]">Adrian</span>.
                            </h1>
                        </motion.div>

                        <motion.div variants={item} className="max-w-2xl mx-auto md:mx-0">
                            <p className="text-lg md:text-xl text-[var(--color-text-dim)] leading-relaxed">
                                I'm a passionate student and <span className="text-[var(--color-text-main)] font-medium">Full Stack Developer</span> who loves building things that solve real-world problems. I learn by doing and thrive on creating sophisticated digital experiences.
                            </p>
                        </motion.div>

                        <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mt-2">
                            <button
                                onClick={() => setLocation("/projects")}
                                className="btn btn-lg btn-primary w-full sm:w-auto min-w-[160px] group"
                            >
                                <span>View Projects</span>
                                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                            <button
                                onClick={() => setLocation("/about")}
                                className="btn btn-lg btn-secondary w-full sm:w-auto min-w-[160px]"
                            >
                                More About Me
                            </button>
                        </motion.div>

                        <motion.div variants={item} className="hidden md:flex gap-6 justify-center md:justify-start mt-4 opacity-70">
                            <div className="h-1 w-20 bg-gradient-to-r from-[var(--color-electric)] to-transparent rounded-full"></div>
                        </motion.div>
                    </motion.div>

                    {/* Hero Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
                        className="flex justify-center items-center order-1 md:order-2 relative"
                    >
                        <Headshot />
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer opacity-60 hover:opacity-100 transition-opacity"
                    onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                >
                    <span className="text-[var(--color-text-dim)] text-[10px] tracking-[0.2em] uppercase font-light">Scroll</span>
                    <div className="w-[20px] h-[32px] rounded-full border border-[var(--color-text-dim)] flex justify-center pt-2">
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                            className="w-1 h-1 rounded-full bg-[var(--color-cyan-glow)]"
                        />
                    </div>
                </motion.div>
            </section>

            {/* Tech Stack Marquee */}
            <TechStackMarquee />

            {/* Featured Projects */}
            <FeaturedProjectsPreview setLocation={setLocation} />

            {/* About Teaser */}
            <AboutTeaser setLocation={setLocation} />

            {/* CTA Section */}
            <CTASection setLocation={setLocation} />

        </div>
    )
}

export default Home;