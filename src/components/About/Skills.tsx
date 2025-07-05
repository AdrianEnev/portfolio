import { motion } from "framer-motion";

const skills = [
    "Typescript", "HTML", "CSS", "Tailwind CSS", "Node.js", "Express",
    "Fly.io", "Next.js", "React", "React Native", "Expo",
    "Firebase DB", "Firebase Auth", "MongoDB", "Git", "Github"
];

const Skills = ({refSecondProject, secondProjectVisible}: any) => (
    <motion.div className="w-full h-full flex flex-col gap-y-12 mt-[8%] md:mt-0 mb-[15%] md:mb-0"
        ref={refSecondProject}
        initial={{ opacity: 0, y: 30 }}
        animate={secondProjectVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
    >
        <div className="flex flex-col gap-y-6">
            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-white">My Skills 👨‍💻</p>

            <div className="flex flex-col gap-y-3 text-black">
                <div className="flex flex-row flex-wrap gap-x-3 gap-y-3 w-full">
                    {skills.map((skill, index) => (
                        <SkillBox key={index} title={skill} />
                    ))}
                </div>
            </div>
        </div>

        <div>
            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-white">Looking to Learn 📖</p>

            <div className="flex flex-col gap-y-3 mt-4 text-black">
                <div className="flex flex-row flex-wrap gap-x-3 gap-y-3 w-full">
                    <SkillBox title="Docker" />
                    <SkillBox title="Jest" />
                    <SkillBox title="AWS" />
                </div>
                
                <div className="flex flex-row flex-wrap gap-x-3 gap-y-3 w-full">
                    <SkillBox title="Figma" />
                    <SkillBox title=".NET" />
                </div>
            </div>
        </div>
    </motion.div>
)

const SkillBox = ({title}: any) => {
    return (
        <div className="w-auto px-3 h-auto py-[6px] basic-box flex items-center justify-center">
            <p className="text-center text-sm lg:text-base xl:text-lg font-medium">{title}</p>
        </div>
    )
}

export default Skills;