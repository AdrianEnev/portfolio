import { motion } from "framer-motion";

const techCategories = [
    {
        name: "Frontend",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React Native", "Expo"]
    },
    {
        name: "Backend",
        skills: ["Node.js", "Express", "Rust", "Python", "PostgreSQL", "MongoDB", "Auth.js"]
    },
    {
        name: "DevOps & Tools",
        skills: ["Docker", "AWS", "Fly.io", "Git", "GitHub", "Figma", "Linux"]
    }
];

const TechStackGrid = () => {
    return (
        <div className="w-full mb-12">
            <h2 className="text-3xl font-bold text-[var(--color-text-main)] mb-8">Technical Arsenal</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {techCategories.map((category, idx) => (
                    <motion.div
                        key={idx}
                        className="glass rounded-2xl p-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                    >
                        <h3 className="text-xl font-semibold text-[var(--color-electric)] mb-4 border-b border-[var(--color-text-main)]/10 pb-2">
                            {category.name}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map(skill => (
                                <span
                                    key={skill}
                                    className="px-3 py-1.5 rounded-lg bg-[var(--color-surface)]/50 text-[var(--color-text-main)] text-sm font-medium border border-[var(--color-text-main)]/5 hover:border-[var(--color-cyan-glow)]/30 transition-colors"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default TechStackGrid;
