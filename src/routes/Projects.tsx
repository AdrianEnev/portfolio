import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "wouter";
import { useIntersectionObserver } from "../use/io/useIntersectionObserver";
import Lunge from "../components/Projects/Lunge";
import Portfolio from "../components/Projects/Portfolio";
import AdrianCuts from "../components/Projects/AdrianCuts";
import Livepair from "../components/Projects/Livepair";

function Projects() {

    const [_location, setLocation] = useLocation();

    const refSecondProject = useRef<HTMLDivElement | null>(null);
    const refThirdProject = useRef<HTMLDivElement | null>(null);
    const refFourthProject = useRef<HTMLDivElement | null>(null);

    const [secondProjectVisible, setSecondProjectVisible] = useState(false);
    const [thirdProjectVisible, setThirdProjectVisible] = useState(false);
    const [fourthProjectVisible, setFourthProjectVisible] = useState(false);

    useIntersectionObserver(
        refSecondProject,
        () => setSecondProjectVisible(true),
        { root: null, rootMargin: "0px 0px -150px 0px", threshold: 0 }
    );

    useIntersectionObserver(
        refThirdProject,
        () => setThirdProjectVisible(true),
        { root: null, rootMargin: "0px 0px -150px 0px", threshold: 0 }
    );

    useIntersectionObserver(
        refFourthProject,
        () => setFourthProjectVisible(true),
        { root: null, rootMargin: "0px 0px -150px 0px", threshold: 0 }
    );

    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        // Prevents scroll distance from previous page being applied
        window.scrollTo(0, 0);
    }, []);

    return (
        <motion.div className="w-screen min-h-screen px-[8%] pt-[5%] text-gray-100 pb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className="w-[84%] md:w-full">
                <p className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-medium text-center text-white">My Coding Journey</p>
                <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium text-gray-100 text-center mt-3">All my projects throughout the years!</p>
            </div>

            <div className="mt-[8%] md:mt-[3%] w-[84.5%] md:w-full flex flex-col">
                <div className="flex flex-col gap-y-6">
                    <p className="text-2xl md:text-3xl lg:text-4xl font-bold shadow-md w-max px-2 py-1 rounded-2xl">2024 & 2025</p>

                    <div className="flex flex-col gap-y-8 md:mt-5 w-full h-full">
                        {/* Lunge */}
                        <Lunge />

                        {/* My Portfolio */}
                       <Portfolio secondProjectVisible={secondProjectVisible} refSecondProject={refSecondProject} setLocation={setLocation} />

                        {/* Adrian Cuts */}
                        <AdrianCuts thirdProjectVisible={thirdProjectVisible} refThirdProject={refThirdProject} />

                        {/* Livepair */}
                        <Livepair fourthProjectVisible={fourthProjectVisible} refFourthProject={refFourthProject} />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Projects

/*

    <motion.div className="w-full h-full mt-8 md:mt-0 mb-8 md:mb-0"
                    ref={refUnfinishedProjects}
                    initial={{ opacity: 0, y: 30 }}
                    animate={unfinishedProjectsVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <div className="flex flex-col gap-y-6">
                        <p className="text-2xl md:text-3xl lg:text-4xl font-bold shadow-md w-max px-2 py-1 rounded-2xl">In Progress ⏳</p>

                        <div className="flex flex-row flex-wrap gap-x-3 gap-y-3">
                            <div className="w-full min-h-72 h-[55%] md:w-64 md:h-64 bg-white border-gray-300 shadow-md rounded-xl flex items-center justify-center hover:opacity-60">
                                <p className="text-5xl font-semibold text-purple-500">Livepair</p>
                            </div>
                            <div className="w-full min-h-72 h-[55%] md:w-64 md:h-64 bg-white border-gray-300 shadow-md rounded-xl flex items-center justify-center hover:opacity-60">
                                <p className="text-5xl font-semibold text-rose-500">KFA</p>
                            </div> 
                            <div className="w-full min-h-72 h-[55%] md:w-64 md:h-64 bg-white border-gray-300 shadow-md rounded-xl flex items-center justify-center hover:opacity-60">
                                <p className="text-5xl font-semibold text-pink-500">HSSIMI</p>
                            </div>
                            <div className="w-full min-h-72 h-[55%] md:w-64 md:h-64 bg-white border-gray-300 shadow-md rounded-xl flex items-center justify-center hover:opacity-60">
                                <p className="text-5xl font-semibold text-orange-500">Soon...</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
*/