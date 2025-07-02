import { useLocation } from "wouter";
import Headshot from "../components/Home/Headshot";
import { motion } from "framer-motion";

function Home() {
    const [_location, setLocation] = useLocation();

    return (
        <motion.div className='w-screen h-screen px-[15%] ml-[-8%] md:ml-0 md:px-[8%]'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="w-full h-[80%] md:h-[83%] flex flex-col md:flex-row md:justify-between items-center">

                <div className="w-full h-full flex flex-col justify-center gap-y-6 text-gray-100">
                    <div className='md:max-w-[70%]'>
                        <p className=
                            'text-2xl md:text-3xl lg:text-5xl xl:text-7xl text-center md:text-start'
                        >
                            Hi, my name is <span className="font-bold">Adrian</span>!
                        </p>
                        
                        <p className=
                            'text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl mt-4 text-center md:text-start'
                        >
                           I'm a student passionate about full-stack development. I love building things that solve real world problems and learning by doing.
                        </p>
                    </div> 

                    <div className="flex flex-row gap-x-3 w-full h-[10%] mt-3">
                        <button className="w-[65%] md:w-[25%] h-10 md:h-[55%] basic-button"
                            onClick={() => setLocation("/about")}
                        >
                            <p className="text-center sm:text-sm lg:text-base xl:text-lg font-medium text-black">About</p>
                        </button>
                        <button className="w-[65%] md:w-[25%] h-10 md:h-[55%] basic-button"
                            onClick={() => setLocation("/projects")}
                        >
                            <p className="text-center sm:text-sm lg:text-base xl:text-lg font-medium text-black">Projects</p>
                        </button>
                    </div>
                </div>
            
                <Headshot setLocation={setLocation}/>
            </div>
        </motion.div>
    )
}

export default Home;