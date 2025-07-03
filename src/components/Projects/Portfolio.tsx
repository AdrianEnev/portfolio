import { motion } from "framer-motion";

const Portfolio = ({refSecondProject, secondProjectVisible, setLocation}: any) => (
    <motion.div className="flex flex-col md:flex-row md:justify-between"
        ref={refSecondProject}
        initial={{ opacity: 0, y: 30 }}
        animate={secondProjectVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
    >
        <div className="flex flex-col gap-y-3 md:max-w-1/2">
            <p className="text-3xl font-semibold">My Portfolio: First ever standalone website</p>

            <div className="flex flex-col gap-y-3 text-lg font-medium">
                <p>This is the first website I’ve ever properly hosted and bought a domain for. Before this, I had only built a basic web app for Lunge, but never a full website from start to finish.</p>                                    
                <p>I built this portfolio as a way to track and share my personal growth as a developer — not just the final results, but the learning process behind each project. It’s meant to be a space where I can reflect on how far I’ve come, document what I’m currently working on, and keep a public record of my evolving skills over time. I hope it also gives others a transparent look into the ups and downs of learning to build real software, from early experiments to more polished work.</p>
                <p>I’m constantly updating the site as I learn new technologies, design patterns, and animation techniques — treating it as both a portfolio and a canvas. My goal is to eventually shape it into one of those beautifully crafted, highly interactive sites with smooth, fluid animations and a sharp, modern aesthetic — the kind of experience that’s as inspiring to explore as it is to build.</p>
            </div>
        </div>

        <button className="
            project-button mt-3 md:mt-0
        "
            style={{ alignSelf: 'stretch' }}
            onClick={() => setLocation('/')}
        >
            <p className="text-5xl font-semibold text-green-500">My Portfolio</p>
            <p className="text-3xl font-semibold text-green-500">(This Website)</p>
        </button>
    </motion.div>
)

export default Portfolio;