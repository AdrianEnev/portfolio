import { motion } from "framer-motion";

const skills = [
    "TypeScript", "React", "Next.js", "Node.js", "Tailwind CSS",
    "PostgreSQL", "MongoDB", "AWS", "Docker", "Git",
    "Python", "Rust", "Figma", "Redux", "GraphQL"
];

const TechStackMarquee = () => {
    // Duplicate the array to create the infinite loop effect
    const marqueeSkills = [...skills, ...skills, ...skills];

    return (
        <div className="w-full py-10 overflow-hidden relative z-10">
            {/* Fade edges */}
            <div className="absolute top-0 left-0 w-20 md:w-40 h-full bg-gradient-to-r from-[var(--color-midnight)] to-transparent z-10"></div>
            <div className="absolute top-0 right-0 w-20 md:w-40 h-full bg-gradient-to-l from-[var(--color-midnight)] to-transparent z-10"></div>

            <motion.div
                className="flex w-max gap-8 items-center"
                animate={{ x: [0, -1000] }} // Adjust value based on content width approx
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 30, // Adjust speed
                        ease: "linear",
                    },
                }}
            >
                {marqueeSkills.map((skill, index) => (
                    <div
                        key={index}
                        className="px-6 py-3 rounded-full border border-[var(--color-text-dim)]/20 bg-[var(--color-surface)]/30 backdrop-blur-sm text-[var(--color-text-main)] font-semibold text-lg whitespace-nowrap shadow-lg hover:border-[var(--color-electric)]/50 hover:text-[var(--color-electric)] transition-colors duration-300 cursor-default"
                    >
                        {skill}
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default TechStackMarquee;
