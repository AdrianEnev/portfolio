import { motion } from "framer-motion";
import { useLocation } from "wouter";

function Projects() {

    const [_location, setLocation] = useLocation();

    return (
        <motion.div className="w-screen h-screen px-[8%] pt-[4%] text-gray-100"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            
            <div className="w-[84%] md:w-full">
                <p className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-medium text-center text-white">My Work 🌲</p>
                <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium text-gray-100 text-center mt-3">Projects and Academic Achievements</p>
            </div>

            <div className="mt-[8%] md:mt-[3%] w-[84.5%] md:w-full flex flex-col md:flex-row gap-x-[15%]">
                <div className="flex flex-col gap-y-6 md:max-w-[45%]">
                    <p className="text-2xl md:text-3xl lg:text-4xl font-bold shadow-md w-max px-2 py-1 rounded-2xl">Finished 📦</p>

                    <div className="flex flex-col md:flex-row md:flex-wrap gap-x-3 gap-y-3">
                        <button className="w-full min-h-72 h-[55%] md:w-64 md:h-64 bg-red-500 border-gray-300 shadow-md rounded-xl flex items-center justify-center hover:opacity-60"
                            onClick={() => window.open('https://apps.apple.com/bg/app/lunge/id6739221997')}
                        >
                            <p className="text-6xl font-semibold text-white">Lunge</p>
                        </button>
                        <button className="w-full min-h-72 h-[55%] md:w-64 md:h-64 bg-blue-500 border-gray-300 shadow-md rounded-xl flex flex-col gap-y-1 items-center justify-center hover:opacity-60"
                            onClick={() => window.open('https://booking.lunge.run')}
                        >
                            <p className="text-5xl font-semibold text-white">Adrian</p>
                            <p className="text-5xl font-semibold text-white">Cuts</p>
                        </button>
                        <button className="w-full min-h-72 h-[55%] md:w-64 md:h-64 bg-green-500 border-gray-300 shadow-md rounded-xl flex flex-col gap-y-1 items-center justify-center hover:opacity-60"
                            onClick={() => setLocation('/')}
                        >
                            <p className={`text-5xl font-semibold text-white`}>This</p>
                            <p className={`text-5xl font-semibold text-white`}>Portfolio</p>
                        </button>
                        <button className="w-full min-h-72 h-[55%] md:w-64 md:h-64 bg-yellow-400 border-gray-300 shadow-md rounded-xl flex items-center justify-center hover:opacity-60"
                        >
                            <p className="text-4xl font-semibold text-white">Livepair</p>
                        </button>
                    </div>
                </div>

                <div className="w-full h-full mt-[8%] md:mt-0 mb-[15%] md:mb-0">
                    <div className="flex flex-col gap-y-6">
                        <p className="text-2xl md:text-3xl lg:text-4xl font-bold shadow-md w-max px-2 py-1 rounded-2xl">In Progress ⏳</p>

                        <div className="flex flex-row flex-wrap gap-x-3 gap-y-3">
                            <div className="w-full min-h-72 h-[55%] md:w-64 md:h-64 bg-purple-500 border-gray-300 shadow-md rounded-xl flex items-center justify-center hover:opacity-60">
                                <p className="text-4xl font-semibold text-white">Soon...</p>
                            </div>
                            <div className="w-full min-h-72 h-[55%] md:w-64 md:h-64 bg-rose-500 border-gray-300 shadow-md rounded-xl flex items-center justify-center hover:opacity-60">
                                <p className="text-4xl font-semibold text-white">Soon...</p>
                            </div> 
                            <div className="w-full min-h-72 h-[55%] md:w-64 md:h-64 bg-pink-500 border-gray-300 shadow-md rounded-xl flex items-center justify-center hover:opacity-60">
                                <p className="text-4xl font-semibold text-white">Soon...</p>
                            </div>
                            <div className="w-full min-h-72 h-[55%] md:w-64 md:h-64 bg-orange-500 border-gray-300 shadow-md rounded-xl flex items-center justify-center hover:opacity-60">
                                <p className="text-4xl font-semibold text-white">Soon...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Projects