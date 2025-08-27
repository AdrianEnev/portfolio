import { motion } from "framer-motion";
import { Asterisk, Binary, Braces, BugPlay, CodeXml, FileJson } from "lucide-react";
import { useLocation } from "wouter";

const Sidebar = ({ sidebarVisible, setSidebarVisible }: { sidebarVisible: boolean, setSidebarVisible: any }) => {
    
    const variants = {
        open: { x: 0 },
        closed: { x: "-100%" },
    };

    const [_location, setLocation] = useLocation();

    return (
        <motion.div
            className="absolute top-0 left-0 w-1/2 h-screen bg-white shadow-md z-40 py-4 flex flex-col md:hidden border-r border-blue-400 opacity-[97.5%]" 
            initial="closed"
            animate={sidebarVisible ? "open" : "closed"}
            variants={variants}
            transition={{ type: "tween", duration: 0.2 }}
        >
            <div className="flex flex-row pb-[10px]">
                <CodeXml className="mt-[-3px] md:mt-0 ml-3" color="#6a9be6" width={30} height={40}/>
                <p className="text-xl font-semibold text-[#6a9be6] mx-3 mt-[4px]">Adrian Enev</p>
            </div>

            <div className="w-full h-[2px] bg-[#6a9be6] mt-[-1px]"></div>

            <ul className="flex flex-col text-base font-medium">
                <li onClick={() => {
                    setSidebarVisible(false)
                    setLocation('/')
                }}>
                    <button className="w-full h-12 hover:opacity-60 hover:bg-blue-100 max-w-[98%] flex items-center flex-row gap-x-3 mx-1">
                        <FileJson color="#6a9be6" className="ml-1"/>
                        <p className="text-gray-600 text-lg">Home</p>
                    </button>
                </li>
                <li onClick={() => {
                    setSidebarVisible(false)
                    setLocation('/about')
                }}>
                    <button className="w-full h-12 hover:opacity-60 hover:bg-blue-100 max-w-[98%] flex items-center flex-row gap-x-3 mx-1">
                        <Braces color="#6a9be6" className="ml-1"/>
                        <p className="text-gray-600 text-lg">About</p>
                    </button>
                </li>
                <li onClick={() => {
                    setSidebarVisible(false)
                    setLocation('/contact')
                }}>
                    <button className="w-full h-12 hover:opacity-60 hover:bg-blue-100 max-w-[98%] flex items-center flex-row gap-x-3 mx-1">
                        <BugPlay color="#6a9be6" className="ml-1"/>
                        <p className="text-gray-600 text-lg">Contact</p>
                    </button>
                </li>
                <li onClick={() => {
                    setSidebarVisible(false)
                    setLocation('/projects')
                }}>
                    <button className="w-full h-12 hover:opacity-60 hover:bg-blue-100 max-w-[98%] flex items-center flex-row gap-x-3 mx-1">
                        <Binary color="#6a9be6" className="ml-1"/>
                        <p className="text-gray-600 text-lg">Projects</p>
                    </button>
                </li>
                <li onClick={() => {
                    setSidebarVisible(false)
                    setLocation('/achievements')
                }}>
                    <button className="w-full h-12 hover:opacity-60 hover:bg-blue-100 max-w-[98%] flex items-center flex-row gap-x-3 mx-1">
                        <Asterisk color="#6a9be6" className="ml-1"/>
                        <p className="text-gray-600 text-lg">Achievements</p>
                    </button>
                </li>
            </ul>
        </motion.div>
    );
};

export default Sidebar;