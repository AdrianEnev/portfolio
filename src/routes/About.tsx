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
        <div className="w-screen h-screen px-[8%] pt-[4%]">
            <div>
                <p className="sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-center">Hey, I'm Adrian Enev!</p>
                <p className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium text-gray-500 text-center mt-3">A student based in Dobrich, Bulgaria 🇧🇬</p>
            </div>

            <div className="mt-[5%] w-full flex flex-row gap-x-[10%]">
                <div className="flex flex-col gap-y-6 max-w-[45%]">
                    <p className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">Get to Know Me 🙋‍♂️</p>
                    <p className="sm:text-sm md:text-base lg:text-lg xl:text-xl">I'm a high school student passionate about full stack app development. I love building things that are both useful and beautiful, from backend APIs to interactive UIs.</p>
                    <p className="sm:text-sm md:text-base lg:text-lg xl:text-xl">I've worked primarily with technologies like TypeScript, React, Node.js, and FirebaseDB, but I'm always experimenting with new tools and frameworks. I enjoy both front-end design and back-end logic, and I’m constantly learning to improve my craft.</p>
                    <p className="sm:text-sm md:text-base lg:text-lg xl:text-xl">
                        My biggest project so far is <span className="font-bold text-blue-600 underline underline-offset-2 hover:opacity-70" onClick={() => window.open('https://apps.apple.com/bg/app/lunge/id6739221997')}>Lunge</span>, a fitness tracker built with 
                        <span className="text-purple-600"> React</span>, <span className="text-green-600">Node.js</span> and 
                        <span className="text-yellow-600"> Firebase</span>. I’ve also worked on other smaller projects, which have helped me 
                        dive deeper into <span className="italic">authentication</span>, <span className="italic">responsive design</span>  
                        and <span className="italic">working with APIs</span>.
                        In addition to coding, I’ve participated in various regional and national competitions 
                        (<span className="underline">English & IT</span>), where I've placed in top places and gained valuable experience 
                        in problem-solving and work ethic.
                    </p>
                    
                    <div className="flex flex-row gap-x-6 w-full h-full">
                        <button className="min-w-[30%] w-auto px-2 h-auto py-[6px] basic-button"
                            onClick={() => setLocation('/contact')}
                        >
                            <p className="text-center sm:text-sm lg:text-base xl:text-lg font-medium">Contact Me</p>
                        </button>
                        <button className="min-w-[30%] w-auto px-2 h-auto py-[6px] basic-button">
                            <p className="text-center sm:text-sm lg:text-base xl:text-lg font-medium">Projects</p>
                        </button>
                    </div>
                </div>

                <div className="w-full h-full flex flex-col gap-y-12">
                    <div className="flex flex-col gap-y-6">
                        <p className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">My Skills 👨‍💻</p>

                        <div className="flex flex-col gap-y-3">
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
                            </div>
                            
                            <div className="flex flex-row gap-x-3 w-full">
                                <SkillBox title="React" />
                                <SkillBox title="React Native" />
                                <SkillBox title="Expo" />
                            </div>
                            
                            <div className="flex flex-row gap-x-3 w-full">
                                <SkillBox title="Firebase DB" />
                                <SkillBox title="Firebase Auth" />
                            </div>
                            
                            <div className="flex flex-row gap-x-3 w-full">
                                <SkillBox title="Git" />
                                <SkillBox title="Github" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">Looking to Learn 📖</p>

                        <div className="flex flex-col gap-y-3 mt-4">
                            <div className="flex flex-row gap-x-3 w-full">
                                <SkillBox title="Docker" />
                                <SkillBox title="Jest" />
                                <SkillBox title="Next.js" />
                                <SkillBox title="AWS" />
                            </div>
                            
                            <div className="flex flex-row gap-x-3 w-full">
                                <SkillBox title="Figma" />
                                <SkillBox title="Angular" />
                                <SkillBox title=".NET" />
                                <SkillBox title="MongoDB" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About