import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "wouter";
import { useIntersectionObserver } from "../use/io/useIntersectionObserver";
import Lunge from "../components/Projects/Lunge";
import Portfolio from "../components/Projects/Portfolio";
import AdrianCuts from "../components/Projects/AdrianCuts";
import Livepair from "../components/Projects/Livepair";
import InfraLock from "../components/Projects/InfraLock";
import KentAcademy from "../components/Projects/KentAcademy";
import CryptoTradingSystem from "../components/Projects/CryptoTradingSystem";

function Projects() {

    const [_location, setLocation] = useLocation();

    const refSecondProject = useRef<HTMLDivElement | null>(null);
    const refThirdProject = useRef<HTMLDivElement | null>(null);
    const refFourthProject = useRef<HTMLDivElement | null>(null);
    const refFifthProject = useRef<HTMLDivElement | null>(null);
    const refSixthProject = useRef<HTMLDivElement | null>(null);
    const refSeventhProject = useRef<HTMLDivElement | null>(null);

    const [secondProjectVisible, setSecondProjectVisible] = useState(false);
    const [thirdProjectVisible, setThirdProjectVisible] = useState(false);
    const [fourthProjectVisible, setFourthProjectVisible] = useState(false);
    const [fifthProjectVisible, setFifthProjectVisible] = useState(false);
    const [sixthProjectVisible, setSixthProjectVisible] = useState(false);
    const [seventhProjectVisible, setSeventhProjectVisible] = useState(false);

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

    useIntersectionObserver(
        refFifthProject,
        () => setFifthProjectVisible(true),
        { root: null, rootMargin: "0px 0px -150px 0px", threshold: 0 }
    );

    useIntersectionObserver(
        refSixthProject,
        () => setSixthProjectVisible(true),
        { root: null, rootMargin: "0px 0px -150px 0px", threshold: 0 }
    );

    useIntersectionObserver(
        refSeventhProject,
        () => setSeventhProjectVisible(true),
        { root: null, rootMargin: "0px 0px -150px 0px", threshold: 0 }
    );

    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        // Prevents scroll distance from previous page being applied
        window.scrollTo(0, 0);
    }, []);

    return (
        <motion.div className="w-screen min-h-screen px-[8%] pt-[30%] md:pt-[10%] text-[#1E1B4B] pb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className="w-[84%] md:w-full">
                <p className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-medium text-center text-[#1E1B4B]">My Coding Journey</p>
                <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium text-[#1E1B4B] text-center mt-3">All my projects throughout the years!</p>
            </div>

            <div className="mt-[8%] md:mt-[3%] w-[84.5%] md:w-full flex flex-col">
                <div className="flex flex-col gap-y-6">
                    <motion.p className='text-3xl font-bold mb-2 highlight-text-teal shadow-md w-max px-2 ml-[-6px] py-0.5 rounded-2xl'
                        whileHover={{ y: -5, scale: 1.005, rotate: 1.25 }}
                        whileTap={{ scale: 0.98, rotate: 0 }}
                        transition={{ type: 'spring', stiffness: 500, damping: 22, mass: 0.6 }}
                        style={{ willChange: 'transform' }}
                    >2024 & 2025</motion.p>

                    <div className="flex flex-col gap-y-8 md:mt-5 w-full h-full">
                        {/* Lunge */}
                        <Lunge />

                        {/* My Portfolio */}
                       <Portfolio secondProjectVisible={secondProjectVisible} refSecondProject={refSecondProject} setLocation={setLocation} />

                        {/* Adrian Cuts */}
                        <AdrianCuts thirdProjectVisible={thirdProjectVisible} refThirdProject={refThirdProject} />

                        {/* Livepair */}
                        <Livepair fourthProjectVisible={fourthProjectVisible} refFourthProject={refFourthProject} />

                        {/* InfraLock */}
                        <InfraLock fifthProjectVisible={fifthProjectVisible} refFifthProject={refFifthProject} />

                        {/* Kent Academy */}
                        <KentAcademy sixthProjectVisible={sixthProjectVisible} refSixthProject={refSixthProject} />

                        {/* Cryptocurrency Trading System */}
                        <CryptoTradingSystem seventhProjectVisible={seventhProjectVisible} refSeventhProject={refSeventhProject} />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Projects