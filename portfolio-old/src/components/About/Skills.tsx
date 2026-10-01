import { motion } from "framer-motion";

const skills = [
    "Typescript", "HTML", "CSS", "Tailwind CSS", "Node.js", "Express",
    "Fly.io", "Next.js", "React", "React Native", "Expo",
    "Firebase DB", "Firebase Auth", "MongoDB", "Git", "Github"
];

const skillsToLearn = [
    "Docker", "Jest", "AWS", "Figma"
];

const Skills = ({refSecondProject, secondProjectVisible}: any) => (
    <motion.div className="w-full h-full flex flex-col gap-y-12 mt-[8%] md:mt-0 mb-[15%] md:mb-0"
        ref={refSecondProject}
        initial={{ opacity: 0, y: 30 }}
        animate={secondProjectVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
    >
        <div className="flex flex-col gap-y-6">
            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1E1B4B]">My Skills 👨‍💻</p>

            <div className="flex flex-col gap-y-3 text-[#1E1B4B]">
                <div className="flex flex-row flex-wrap gap-x-3 gap-y-3 w-full">
                    {skills.map((skill, index) => (
                        <SkillBox key={index} index={index} title={skill} />
                    ))}
                </div>
            </div>
        </div>

        <div>
            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1E1B4B]">Learning 📖</p>

            <div className="flex flex-col gap-y-3 mt-4 text-[#1E1B4B]">
                <div className="flex flex-row flex-wrap gap-x-3 gap-y-3 w-full">
                    {skillsToLearn.map((skill, index) => (
                        <SkillBox key={index} index={index} title={skill} />
                    ))}
                </div>
            </div>
        </div>
    </motion.div>
)

const SkillBox = ({title, index}: any) => {
    // Alternate small tilts for variety
    const tilt = index % 2 === 0 ? -1.25 : 1.25;
    return (
        <motion.button
            className="w-auto px-3 h-auto py-[6px] basic-box flex items-center justify-center hover:border-blue-300 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6a9be6]"
            whileHover={{ y: -5, scale: 1.06, rotate: tilt }}
            whileTap={{ scale: 0.98, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 500, damping: 22, mass: 0.6 }}
            style={{ willChange: 'transform' }}
            aria-label={`Skill: ${title}`}
        >
            <p className="text-center text-sm lg:text-base xl:text-lg font-medium text-[#1E1B4B]">{title}</p>
        </motion.button>
    )
}

export default Skills;