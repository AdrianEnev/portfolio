import { motion } from "framer-motion";
import { useLocation } from "wouter";

const SkillBox = ({title}: any) => {
    return (
        <div className="w-auto px-3 h-auto py-[6px] basic-box flex items-center justify-center">
            <p className="text-center text-sm lg:text-base xl:text-lg font-medium">{title}</p>
        </div>
    )
}

function About() {

    const [_location, setLocation] = useLocation();

    return (
        <motion.div className="w-screen h-screen px-[4%] md:px-[8%] pt-[8%] md:pt-[4%] text-gray-100"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className="w-[84%] md:w-full">
                <p className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-medium text-center text-white">Hey, I'm Adrian Enev!</p>
                <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium text-gray-100 text-center mt-3">A student based in Dobrich, Bulgaria 🇧🇬</p>
            </div>

            <div className="mt-[8%] md:mt-[5%] w-[80%] md:w-full flex flex-col md:flex-row md:gap-x-[10%]">
                <div className="flex flex-col gap-y-6 md:max-w-[45%]">
                    <p className="text-xl md:text-2xl lg:text-3xl font-bold text-white">Get to Know Me 🙋‍♂️</p>
                    <p className="sm:text-sm md:text-base lg:text-lg xl:text-xl">I'm a high school student passionate about full stack app development. I love building things that are both beautiful and useful, from backend APIs to interactive UIs</p>
                    <p className="sm:text-sm md:text-base lg:text-lg xl:text-xl">I've worked primarily with technologies like TypeScript, React, Node.js, and FirebaseDB, but I'm always experimenting with new tools and frameworks. I enjoy both front-end design and back-end logic, and I’m constantly learning to improve my craft.</p>
                    <p className="sm:text-sm md:text-base lg:text-lg xl:text-xl">
                        My biggest project so far is <span className="font-bold text-yellow-300 shadow-md px-1 underline underline-offset-2 hover:opacity-70" onClick={() => window.open('https://apps.apple.com/bg/app/lunge/id6739221997')}>Lunge</span>, a fitness tracker built with <span className="font-bold text-green-300 shadow-md px-1">React</span>, <span className="font-bold text-pink-300 shadow-md px-1">Node.js</span> and <span className="font-bold text-fuchsia-300 shadow-md px-1">Firebase</span>. I’ve also worked on other smaller projects, which have helped me dive deeper into <span className="italic">authentication</span>, <span className="italic">responsive design</span>, <span className="italic">working with APIs</span>, etc. In addition to coding, I’ve taken part in multiple regional and national olympiads during school years. I’ve earned notable achievements in English & IT competitions which I believe have taught me a fair share of discipline and critical thinking. <span className="font-bold text-orange-300 shadow-lg px-1 hover:opacity-70 underline underline-offset-2" onClick={() => setLocation('/achievements')}>Achievements</span>
                    </p>
                    
                    <div className="flex flex-row gap-x-6 w-full h-full">
                        <button className="min-w-[30%] w-1/2 md:w-auto px-2 h-auto py-[6px] basic-button"
                            onClick={() => setLocation('/contact')}
                        >
                            <p className="text-center sm:text-sm lg:text-base xl:text-lg font-medium text-black">Contact Me</p>
                        </button>
                        <button className="min-w-[30%] w-1/2 md:w-auto px-2 h-auto py-[6px] basic-button"
                            onClick={() => setLocation('/projects')}
                        >
                            <p className="text-center sm:text-sm lg:text-base xl:text-lg font-medium text-black">Projects</p>
                        </button>
                    </div>
                </div>

                <div className="w-full h-full flex flex-col gap-y-12 mt-[8%] md:mt-0 mb-[15%] md:mb-0">
                    <div className="flex flex-col gap-y-6">
                        <p className="text-xl md:text-2xl lg:text-3xl font-bold text-white">My Skills 👨‍💻</p>

                        <div className="flex flex-col gap-y-3 text-black">
                            <div className="flex flex-row gap-x-3 w-full">
                                <SkillBox title="Typescript" />
                                <SkillBox title="HTML" />
                                <SkillBox title="CSS" />
                                <SkillBox title="Tailwind CSS" />
                            </div>

                            <div className="flex flex-row gap-x-3 w-full">
                                <SkillBox title="Node.js" />
                                <SkillBox title="Express" />
                                <SkillBox title="Fly.io" />
                                <SkillBox title="Next.js" />
                            </div>
                            
                            <div className="flex flex-row gap-x-3 w-full">
                                <SkillBox title="React" />
                                <SkillBox title="React Native" />
                                <SkillBox title="Expo" />
                            </div>
                            
                            <div className="flex flex-row gap-x-3 w-full">
                                <SkillBox title="Firebase DB" />
                                <SkillBox title="Firebase Auth" />
                                <SkillBox title="MongoDB" />
                            </div>
                            
                            <div className="flex flex-row gap-x-3 w-full">
                                <SkillBox title="Git" />
                                <SkillBox title="Github" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className="text-xl md:text-2xl lg:text-3xl font-bold text-white">Looking to Learn 📖</p>

                        <div className="flex flex-col gap-y-3 mt-4 text-black">
                            <div className="flex flex-row gap-x-3 w-full">
                                <SkillBox title="Docker" />
                                <SkillBox title="Jest" />
                                <SkillBox title="AWS" />
                            </div>
                            
                            <div className="flex flex-row gap-x-3 w-full">
                                <SkillBox title="Figma" />
                                <SkillBox title=".NET" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default About