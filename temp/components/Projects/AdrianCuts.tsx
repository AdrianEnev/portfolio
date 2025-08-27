import { motion } from "framer-motion";

const AdrianCuts = ({refThirdProject, thirdProjectVisible}: any) => (
    <motion.div className="flex flex-col md:flex-row md:justify-between"
        ref={refThirdProject}
        initial={{ opacity: 0, y: 30 }}
        animate={thirdProjectVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
    >
        <div className="flex flex-col gap-y-3 md:max-w-1/2">
            <p className="text-3xl font-semibold">Adrian Cuts</p>

            <div className="flex flex-col gap-y-3 text-lg">
                <p>“Adrian Cuts” is a simple barbershop website I built to sharpen my frontend and design skills. The original idea was to create a clean, well-designed site that would help me improve visually — skills I could then apply to my own portfolio. Along the way, I thought about turning it into my first freelance project by selling it to a close friend. That didn’t quite work out, so I gave it its current (admittedly funny) name and decided to keep it as part of my personal learning journey.</p>
                <p>I built the project in just a week or two, but it ended up teaching me a lot about how to structure a website properly — from layout and responsiveness to how design decisions affect user experience. It was a quick build, but it really helped solidify the basics of creating clean, maintainable frontend code and gave me more confidence in turning ideas into real, presentable websites.</p>
            </div>
        </div>

        <button className="
            project-button mt-3 md:mt-0
        "
            style={{ alignSelf: 'stretch' }}
            onClick={() => window.open('https://booking.lunge.run')}
        >
            <p className="text-5xl font-semibold text-blue-500">Adrian Cuts</p>
            <p className="text-3xl font-semibold text-blue-400">Barbershop</p>
        </button>
    </motion.div>
)

export default AdrianCuts;