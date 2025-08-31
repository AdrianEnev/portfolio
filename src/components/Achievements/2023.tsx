import { motion } from "framer-motion"

const achievements = [
    "• 3rd Place, Regional Round of the National English Language Olympiad",
    "• 97.5% overall score in Stage 1 (regional round) of the 2023 KGL contest, level B1"
]

const TwentyTwentyThree = ({refThirdProject, thirdProjectVisible}: any) => (
    <motion.div className='w-full semilg:w-[48%] h-auto semilg:h-[65%] 3xl:h-[60%] flex flex-col semilg:pb-0 gap-y-3'
        ref={refThirdProject}
        initial={{ opacity: 0, y: 30 }}
        animate={thirdProjectVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
    >
        <motion.p className='text-3xl font-bold mb-2 shadow-md highlight-text-indigo w-max px-2 ml-[-6px] py-1 rounded-2xl'
            whileHover={{ y: -5, scale: 1.06, rotate: 1.25 }}
            whileTap={{ scale: 0.98, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 500, damping: 22, mass: 0.6 }}
            style={{ willChange: 'transform' }}
        >2023</motion.p>
        
        <div className='max-w-[85%] semilg:max-w-[90%] flex flex-col gap-y-3'>
            {achievements.map((achievement, index) => (
                <p key={index}>{achievement}</p>
            ))}

            <motion.p
                className='text-indigo-400 shadow-md px-1 py-0.5 font-bold hover:opacity-60 hover:cursor-grab w-max'
                whileHover={{ y: -5, scale: 1.005 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 500, damping: 22, mass: 0.6 }}
                style={{ willChange: 'transform' }}
                onClick={() => {window.open('https://www.kglcontest.org/')}}
            >Kangaroo Global Linguistics</motion.p>
        </div>
    </motion.div> 
)

export default TwentyTwentyThree