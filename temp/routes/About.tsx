import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useLocation } from "wouter";
import { useIntersectionObserver } from "../use/io/useIntersectionObserver"
import Skills from "../../temp/components/About/Skills";
import Hero from "../../temp/components/About/Hero";

function About() {
    const [_location, setLocation] = useLocation();

    const refSecondProject = useRef<HTMLDivElement | null>(null);
    const [secondProjectVisible, setSecondProjectVisible] = useState(false);

    useIntersectionObserver(
        refSecondProject,
        () => setSecondProjectVisible(true),
        { root: null, rootMargin: "0px 0px -100px 0px", threshold: 0 }
    );

    return (
        <motion.div className="w-screen min-h-screen md:px-[8%] pt-[30%] md:pt-[10%] text-[#1E1B4B]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className="w-[84%] md:w-full">
                <p className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-medium text-center text-[#1E1B4B]">Hey, I'm Adrian Enev!</p>
                <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium text-[#1E1B4B] text-center mt-3">A student based in Dobrich, Bulgaria 🇧🇬</p>
            </div>

            <div className="mt-[8%] md:mt-[5%] w-[80%] md:w-full flex flex-col md:flex-row md:gap-x-[10%]">
                <Hero setLocation={setLocation} />
                <Skills refSecondProject={refSecondProject} secondProjectVisible={secondProjectVisible} />
            </div>
        </motion.div>
    )
}

export default About