import { motion } from "framer-motion"
import { useIntersectionObserver } from "../use/io/useIntersectionObserver";
import { useEffect, useRef, useState } from "react";
import TwentyTwentyFour from "../../temp/components/Achievements/2024";
import TwentyTwentyThree from "../../temp/components/Achievements/2023";
import TwentyTwentyTwo from "../../temp/components/Achievements/2022";
import TwentyTwentyFive from "../../temp/components/Achievements/2025";

function Achievements() {

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
        <motion.div className={`
            w-screen min-h-screen semilg:px-[8%] pt-[30%] md:pt-[8%] semilg:pt-[10%]
            pb-12 text-[#1E1B4B]
        `}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className="w-[84%] px-[3%] semilg:w-full">
                <p className="text-3xl semilg:text-4xl lg:text-5xl xl:text-6xl font-medium text-center text-[#1E1B4B]">🏆 Notable Achievements</p>
                <p className="text-lg semilg:text-xl lg:text-2xl xl:text-3xl font-medium text-[#1E1B4B] text-center mt-3">English & IT academic achievements (2022-2026) </p>
            </div>

            <div className='w-[97.5%] md:w-full flex flex-col gap-y-6 semilg:gap-y-0 semilg:flex-row semilg:justify-between mt-[6%]'>
                <TwentyTwentyFive /> 
                <TwentyTwentyFour refSecondProject={refSecondProject} secondProjectVisible={secondProjectVisible}/>
            </div>

            <div className='w-[97.5%] md:w-full h-1/2 flex flex-col gap-y-6 semilg:gap-y-0 semilg:flex-row semilg:justify-between mt-[6%]'>
                <TwentyTwentyThree refThirdProject={refThirdProject} thirdProjectVisible={thirdProjectVisible}/>
                <TwentyTwentyTwo refFourthProject={refFourthProject} fourthProjectVisible={fourthProjectVisible}/>  
            </div>
        </motion.div>
    )
}

export default Achievements