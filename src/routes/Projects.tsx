import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "wouter";
import { useIntersectionObserver } from "../use/io/useIntersectionObserver";
import Lunge from "../components/Projects/Lunge";
import Portfolio from "../components/Projects/Portfolio";
import AdrianCuts from "../components/Projects/AdrianCuts";
import Livepair from "../components/Projects/Livepair";
import KentAcademy from "../components/Projects/KentAcademy";

function Projects() {
    const [_location, setLocation] = useLocation();

    // Featured Projects Refs
    const refFeatured1 = useRef<HTMLDivElement | null>(null);
    const refFeatured2 = useRef<HTMLDivElement | null>(null);
    const refFeatured3 = useRef<HTMLDivElement | null>(null);
    
    // Learning Journey Refs
    const refJourney1 = useRef<HTMLDivElement | null>(null);
    const refJourney2 = useRef<HTMLDivElement | null>(null);
    const refJourney3 = useRef<HTMLDivElement | null>(null);
    const refJourney4 = useRef<HTMLDivElement | null>(null);
    const refJourney5 = useRef<HTMLDivElement | null>(null);

    // Featured Projects Visibility States
    const [featured1Visible, setFeatured1Visible] = useState(false);
    const [featured2Visible, setFeatured2Visible] = useState(false);
    const [featured3Visible, setFeatured3Visible] = useState(false);
    
    // Learning Journey Visibility States
    const [journey1Visible, setJourney1Visible] = useState(false);
    const [journey2Visible, setJourney2Visible] = useState(false);
    const [journey3Visible, setJourney3Visible] = useState(false);
    const [journey4Visible, setJourney4Visible] = useState(false);
    const [journey5Visible, setJourney5Visible] = useState(false);

    // Featured Projects Intersection Observers
    useIntersectionObserver(
        refFeatured1,
        () => setFeatured1Visible(true),
        { root: null, rootMargin: "0px 0px -100px 0px", threshold: 0 }
    );

    useIntersectionObserver(
        refFeatured2,
        () => setFeatured2Visible(true),
        { root: null, rootMargin: "0px 0px -100px 0px", threshold: 0 }
    );

    useIntersectionObserver(
        refFeatured3,
        () => setFeatured3Visible(true),
        { root: null, rootMargin: "0px 0px -100px 0px", threshold: 0 }
    );

    // Learning Journey Intersection Observers
    useIntersectionObserver(
        refJourney1,
        () => setJourney1Visible(true),
        { root: null, rootMargin: "0px 0px -150px 0px", threshold: 0 }
    );

    useIntersectionObserver(
        refJourney2,
        () => setJourney2Visible(true),
        { root: null, rootMargin: "0px 0px -150px 0px", threshold: 0 }
    );

    useIntersectionObserver(
        refJourney3,
        () => setJourney3Visible(true),
        { root: null, rootMargin: "0px 0px -150px 0px", threshold: 0 }
    );

    useIntersectionObserver(
        refJourney4,
        () => setJourney4Visible(true),
        { root: null, rootMargin: "0px 0px -150px 0px", threshold: 0 }
    );

    useIntersectionObserver(
        refJourney5,
        () => setJourney5Visible(true),
        { root: null, rootMargin: "0px 0px -150px 0px", threshold: 0 }
    );

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <motion.div className="w-screen min-h-screen px-[8%] pt-[30%] md:pt-[10%] text-[#1E1B4B] pb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            {/* Hero Section */}
            <div className="w-[84%] md:w-full mb-16">
                <motion.p 
                    className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-medium text-center text-[#1E1B4B]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Featured Projects
                </motion.p>
                <motion.p 
                    className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium text-[#1E1B4B] text-center mt-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    My most impactful and technically sophisticated work
                </motion.p>
            </div>

            {/* Featured Projects Grid */}
            <div className="w-[84.5%] md:w-full mb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {/* Cryptocurrency Trading System - Featured 1 */}
                    <motion.div
                        ref={refFeatured1}
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        animate={featured1Visible ? { opacity: 1, y: 0, scale: 1 } : {}}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="lg:col-span-2 xl:col-span-1"
                    >
                        <motion.div 
                            className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 h-full border border-orange-200 shadow-lg hover:shadow-xl"
                            whileHover={{ y: -5, scale: 1.02, rotate: 1.25 }}
                            whileTap={{ scale: 0.98, rotate: 0 }}
                            transition={{ type: 'spring', stiffness: 500, damping: 22, mass: 0.6 }}
                            style={{ willChange: 'transform' }}
                        >
                            <div className="flex flex-col h-full">
                                <div className="mb-4">
                                    <h3 className="text-2xl font-bold text-orange-600 mb-2">Cryptocurrency Trading System</h3>
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        <span className="px-3 py-1 bg-orange-200 text-orange-800 rounded-full text-sm font-medium">Python</span>
                                        <span className="px-3 py-1 bg-orange-200 text-orange-800 rounded-full text-sm font-medium">Machine Learning</span>
                                        <span className="px-3 py-1 bg-orange-200 text-orange-800 rounded-full text-sm font-medium">Financial APIs</span>
                                        <span className="px-3 py-1 bg-orange-200 text-orange-800 rounded-full text-sm font-medium">Risk Management</span>
                                    </div>
                                </div>
                                
                                <div className="flex-grow mb-4">
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        Enterprise-grade cryptocurrency trading platform combining technical analysis with machine learning. 
                                        Features insider wallet tracking, dynamic meme coin discovery, ML-powered strategies, and comprehensive 
                                        risk management with automated kill switches and real-time exposure monitoring.
                                    </p>
                                </div>
                                
                                <div className="mt-auto">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-xs text-gray-500">Complexity</span>
                                        <div className="flex space-x-1">
                                            {[...Array(5)].map((_, i) => (
                                                <div key={i} className="w-2 h-2 bg-orange-400 rounded-full"></div>
                                            ))}
                                        </div>
                                    </div>
                                    <button 
                                        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
                                        onClick={() => window.open('https://github.com/AdrianEnev/Crypto-Tracker')}
                                    >
                                        View Project
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* InfraLock - Featured 2 */}
                    <motion.div
                        ref={refFeatured2}
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        animate={featured2Visible ? { opacity: 1, y: 0, scale: 1 } : {}}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                        className="lg:col-span-1"
                    >
                        <motion.div 
                            className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-6 h-full border border-indigo-200 shadow-lg hover:shadow-xl"
                            whileHover={{ y: -5, scale: 1.02, rotate: -1.25 }}
                            whileTap={{ scale: 0.98, rotate: 0 }}
                            transition={{ type: 'spring', stiffness: 500, damping: 22, mass: 0.6 }}
                            style={{ willChange: 'transform' }}
                        >
                            <div className="flex flex-col h-full">
                                <div className="mb-4">
                                    <h3 className="text-2xl font-bold text-indigo-600 mb-2">InfraLock</h3>
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        <span className="px-3 py-1 bg-indigo-200 text-indigo-800 rounded-full text-sm font-medium">Rust</span>
                                        <span className="px-3 py-1 bg-indigo-200 text-indigo-800 rounded-full text-sm font-medium">Next.js</span>
                                        <span className="px-3 py-1 bg-indigo-200 text-indigo-800 rounded-full text-sm font-medium">TypeScript</span>
                                        <span className="px-3 py-1 bg-indigo-200 text-indigo-800 rounded-full text-sm font-medium">Security</span>
                                    </div>
                                </div>
                                
                                <div className="flex-grow mb-4">
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        High-performance IP intelligence service with Rust microservice delivering 0.02-0.05s lookups. 
                                        Features threat scoring, VPN detection, and comprehensive geolocation data.
                                    </p>
                                </div>
                                
                                <div className="mt-auto">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-xs text-gray-500">Complexity</span>
                                        <div className="flex space-x-1">
                                            {[...Array(4)].map((_, i) => (
                                                <div key={i} className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                                            ))}
                                            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                                        </div>
                                    </div>
                                    <button 
                                        className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
                                        onClick={() => window.open('https://github.com/AdrianEnev/InfraLock')}
                                    >
                                        View Project
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Kent Academy - Featured 3 */}
                    <motion.div
                        ref={refFeatured3}
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        animate={featured3Visible ? { opacity: 1, y: 0, scale: 1 } : {}}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
                        className="lg:col-span-2 xl:col-span-1"
                    >
                        <motion.div 
                            className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 h-full border border-gray-200 shadow-lg hover:shadow-xl"
                            whileHover={{ y: -5, scale: 1.02, rotate: 1.25 }}
                            whileTap={{ scale: 0.98, rotate: 0 }}
                            transition={{ type: 'spring', stiffness: 500, damping: 22, mass: 0.6 }}
                            style={{ willChange: 'transform' }}
                        >
                            <div className="flex flex-col h-full">
                                <div className="mb-4">
                                    <h3 className="text-2xl font-bold text-gray-600 mb-2">Soon</h3>
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm font-medium">Coming Soon</span>
                                        <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm font-medium">In Development</span>
                                    </div>
                                </div>
                                
                                <div className="flex-grow mb-4">
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        Working on something exciting! This space will showcase my next major project.
                                    </p>
                                </div>
                                
                                <div className="mt-auto">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-xs text-gray-500">Status</span>
                                        <div className="flex space-x-1">
                                            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                                            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                                            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                                            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                                            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                                        </div>
                                    </div>
                                    <button 
                                        className="w-full bg-gray-400 text-white font-semibold py-3 px-4 rounded-lg cursor-not-allowed opacity-50"
                                        disabled
                                    >
                                        Coming Soon
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Learning Journey Section */}
            <div className="w-[84.5%] md:w-full">
                <motion.div 
                    className="flex flex-col gap-y-6 mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <motion.p className='text-3xl font-bold mb-2 highlight-text-teal shadow-md w-max px-2 ml-[-6px] py-0.5 rounded-2xl'
                        whileHover={{ y: -5, scale: 1.005, rotate: 1.25 }}
                        whileTap={{ scale: 0.98, rotate: 0 }}
                        transition={{ type: 'spring', stiffness: 500, damping: 22, mass: 0.6 }}
                        style={{ willChange: 'transform' }}
                    >
                        Learning Journey
                    </motion.p>
                    <p className="text-lg text-gray-600 max-w-2xl">
                        The evolution of my development skills through hands-on projects, from foundational learning to advanced implementations.
                    </p>
                </motion.div>

                    <div className="flex flex-col gap-y-8 md:mt-5 w-full h-full">
                    {/* Portfolio */}
                    <Portfolio secondProjectVisible={journey1Visible} refSecondProject={refJourney1} setLocation={setLocation} />

                    {/* Livepair */}
                    <Livepair fourthProjectVisible={journey2Visible} refFourthProject={refJourney2} />

                    {/* Adrian Cuts */}
                    <AdrianCuts thirdProjectVisible={journey3Visible} refThirdProject={refJourney3} />

                    {/* Kent Academy */}
                    <KentAcademy sixthProjectVisible={journey4Visible} refSixthProject={refJourney4} />

                        {/* Lunge */}
                        <Lunge fifthProjectVisible={journey5Visible} refFifthProject={refJourney5} />
                </div>
            </div>
        </motion.div>
    )
}

export default Projects