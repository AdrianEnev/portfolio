import { motion } from "framer-motion";

const Livepair = ({refFourthProject, fourthProjectVisible}: any) => (
    <motion.div className="flex flex-col md:flex-row md:justify-between"
        ref={refFourthProject}
        initial={{ opacity: 0, y: 30 }}
        animate={fourthProjectVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
    >
        <div className="flex flex-col gap-y-3 md:max-w-1/2">
            <p className="text-3xl font-semibold">Livepair</p>

            <div className="flex flex-col gap-y-3 text-lg font-medium">
                <p>After spending over a year working with the same tech stack — mostly plain React and TypeScript with Firebase for authentication and data storage — I wanted to step out of my comfort zone. Livepair gave me the perfect opportunity to do that. It was my first real experience using Node.js and MongoDB, and only my second time working with Express, which I had briefly experimented with near the end of Lunge’s development.</p> 
                <p>Livepair is a simple web app for livestreaming code. It’s far from a full-fledged platform like Twitch — and that was never the goal. Instead, I saw it as a chance to try out Next.js in a more practical setting and get a feel for building a full-stack app from scratch without relying on Firebase. The project focuses on simplicity: users can share their coding sessions in real time through a basic broadcast interface. While the core functionality is minimal, it was a valuable learning experience in backend development, real-time streaming concepts, and getting comfortable with a completely new tech stack.</p>
                <p>Currently, the project isn’t public on GitHub because I want to spend some more time refining and polishing it before sharing it with others. I plan to revisit the code when I have the time to clean things up, improve structure, and maybe add some additional features to make it more complete and easier to understand.</p>
            </div>
        </div>

        <button className="
            project-button mt-3 md:mt-0
        "
            style={{ alignSelf: 'stretch' }}
        >
            <p className="text-5xl font-semibold text-yellow-400">Livepair</p>
            <p className="text-3xl font-semibold text-yellow-300">Broadcasting</p>
        </button>
    </motion.div>
)

export default Livepair;