import { motion } from "framer-motion"
import { useState, useRef, useEffect } from "react";

function InfraLock({refFifthProject, fifthProjectVisible}: any) {
    const [showFullDescription, setShowFullDescription] = useState(false);
    const descriptionRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    // Handle smooth scrolling when content expands
    useEffect(() => {
        if (showFullDescription && contentRef.current) {
            // Small timeout to allow the content to render before scrolling
            const timer = setTimeout(() => {
                const element = contentRef.current;
                if (element) {
                    const yOffset = -30; // 30 pixels up from the element
                    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }
            }, 120);
            return () => clearTimeout(timer);
        }
    }, [showFullDescription]);

    return (
        <motion.div className="flex flex-col md:flex-row md:justify-between"
            ref={refFifthProject}
            initial={{ opacity: 0, y: 30 }}
            animate={fifthProjectVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <div className="flex flex-col gap-y-3 md:max-w-1/2" ref={descriptionRef}>
                <p className="text-3xl font-semibold">InfraLock</p>

                <div className="flex flex-col gap-y-3 text-lg" ref={contentRef}>
                    <p>InfraLock is a geolocation service that provides detailed IP address intelligence. This project holds special significance as it marks my first collaborative development experience, where I contributed to approximately 95% of the codebase while working alongside another developer. The project originated during a research camp at the Bulgarian High School of Mathematics and Informatics, where I had the privilege of being mentored by Prof. Zlatogor Minchev, whose guidance was instrumental in shaping the project's technical direction.</p>
                    
                    <p>The service is architected as a modular, API-first solution that can be seamlessly integrated into various applications. The frontend, built with Next.js, offers an intuitive interface for users to perform IP lookups and view comprehensive geolocation data. The backend API, developed in TypeScript with Node.js, handles request routing, authentication, and data transformation between the frontend and the core Rust service.</p>
                    
                    {!showFullDescription ? (
                        <button 
                            className="text-[#1E1B4B] px-2 py-1 rounded-md hover:opacity-80 transition duration-200" 
                            onClick={() => setShowFullDescription(true)}
                        >
                            <p>See more...</p>
                        </button>
                    ) : (
                        <>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: 'easeOut' }}
                            >
                                <p>The Rust-based microservice performs the heavy lifting with its optimized radix tree implementation for lightning-fast IP lookups, consistently delivering results in just 0.02 to 0.05 seconds during local testing. The service aggregates and processes data from various sources, including lists of known VPNs, datacenters, proxies, and TOR nodes. It analyzes this data alongside other intelligence to calculate a comprehensive threat score from 0 to 100 for each IP address.</p>
                                <p>Looking ahead, we plan to enhance the system's threat detection capabilities by integrating advanced user behavior monitoring and browser fingerprinting techniques. These additions will provide deeper insights into potential security risks by analyzing patterns of interaction and device characteristics, enabling even more accurate threat assessment. The system is designed with scalability in mind, featuring background data updates, intelligent caching, and real-time threat analysis. Its service-oriented architecture allows it to be easily integrated into other web applications or services, making it a versatile solution for security applications, user analytics, and any platform requiring IP intelligence capabilities.</p>
                            </motion.div>
                            <button 
                                className="text-[#1E1B4B] px-2 py-1 rounded-md hover:opacity-80 transition duration-200" 
                                onClick={() => {
                                    setShowFullDescription(false);
                                    descriptionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }}
                            >
                                <p>See less...</p>
                            </button>
                        </>
                    )}
                </div>
            </div>

            <button 
                className="project-button mt-3 md:mt-0"
                style={{ alignSelf: 'stretch' }}
                onClick={() => window.open('https://github.com/AdrianEnev/InfraLock')}
            >
                <p className="text-5xl font-semibold text-indigo-500">InfraLock</p>
                <p className="text-3xl font-semibold text-indigo-400">Threat Analysis</p>
            </button>
        </motion.div>
    );
}

export default InfraLock;

/*This geolocation service is a high-performance, distributed system that provides detailed IP address intelligence. The frontend, built with Next.js, offers an intuitive interface for users to perform IP lookups and view comprehensive geolocation data. The backend API, developed in TypeScript with Node.js, handles request routing, authentication, and data transformation between the frontend and the core Rust service. The Rust-based microservice performs the heavy lifting with its optimized radix tree implementation for fast IP lookups, supporting features like VPN/proxy detection, threat scoring, and geolocation. The system is designed with scalability in mind, featuring background data updates, caching, and real-time threat analysis, making it suitable for security applications and user analytics. */