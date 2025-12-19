import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { useEffect } from "react";
import BentoIntro from "../components/About/BentoIntro";
import JourneyTimeline from "../components/About/JourneyTimeline";
import TechStackGrid from "../components/About/TechStackGrid";

function About() {
    const [_location, setLocation] = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="relative w-full min-h-screen pt-24 pb-12 overflow-x-hidden">
            {/* Background Atmosphere - Fixed to viewport for continuity (matches Home) */}
            <div className="fixed top-[20%] right-[10%] w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-[100px] mix-blend-screen pointer-events-none z-0 opacity-50" />
            <div className="fixed bottom-[10%] left-[5%] w-[300px] h-[300px] bg-cyan-500/20 rounded-full blur-[80px] mix-blend-screen pointer-events-none z-0 opacity-40" />

            <div className="max-w-7xl mx-auto px-6 3xs:px-8 relative z-10">

                {/* 1. Bento Grid Intro */}
                <BentoIntro setLocation={setLocation} />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* 2. Journey Timeline - Takes up left side on desktop */}
                    <div className="lg:col-span-5">
                        <JourneyTimeline />
                    </div>

                    {/* 3. Tech Stack - Right side on desktop */}
                    <div className="lg:col-span-7">
                        <TechStackGrid />

                        {/* 4. Contact CTA Mini */}
                        <motion.div
                            className="mt-12 glass rounded-2xl p-8 text-center bg-gradient-to-r from-[var(--color-electric)]/10 to-[var(--color-cyan-glow)]/10"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-bold text-[var(--color-text-main)] mb-2">Ready to create something?</h3>
                            <button
                                onClick={() => setLocation('/contact')}
                                className="mt-4 btn btn-primary px-8 py-2.5 rounded-full"
                            >
                                Let's Talk
                            </button>
                        </motion.div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About