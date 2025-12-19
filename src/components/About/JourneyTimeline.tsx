import { motion } from "framer-motion";

const timelineEvents = [
    {
        year: "2024 - Present",
        title: "Full Stack Engineer",
        description: "Building production-grade applications using the T3 Stack, Rust, and Cloud infrastructure. Launching SaaS products and client platforms.",
        tech: "React, Node.js, Rust"
    },
    {
        year: "2022 - 2024",
        title: "Deep Dive into Development",
        description: "Mastered React ecosystems, backend logic with Node/Express, and database architecture. Started building complex side projects.",
        tech: "JS, TypeScript, Firebase"
    },
    {
        year: "2018 - 2022",
        title: "Foundations & Competitions",
        description: "Active participant in National IT and English Olympiads. Developed core problem-solving discipline and algorithmic thinking.",
        tech: "C++, Python, Algorithms"
    }
];

const JourneyTimeline = () => {
    return (
        <div className="w-full mb-20">
            <h2 className="text-3xl font-bold text-[var(--color-text-main)] mb-8 text-center md:text-left">My Journey</h2>
            <div className="relative border-l-2 border-[var(--color-text-dim)]/20 ml-4 md:ml-8 space-y-12 pb-4">
                {timelineEvents.map((event, index) => (
                    <motion.div
                        key={index}
                        className="relative pl-8 md:pl-12"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                    >
                        {/* Dot */}
                        <div className="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-[var(--color-midnight)] border-4 border-[var(--color-cyan-glow)]"></div>

                        <div className="flex flex-col sm:flex-row gap-2 sm:items-baseline mb-2">
                            <h3 className="text-xl font-bold text-[var(--color-text-main)]">{event.title}</h3>
                            <span className="text-sm font-mono text-[var(--color-electric)] bg-[var(--color-electric)]/10 px-2 py-1 rounded-md w-max">
                                {event.year}
                            </span>
                        </div>
                        <p className="text-[var(--color-text-dim)] mb-3 leading-relaxed max-w-2xl">
                            {event.description}
                        </p>
                        <p className="text-sm font-medium text-[var(--color-text-dim)]/60">
                            Focus: {event.tech}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default JourneyTimeline;
