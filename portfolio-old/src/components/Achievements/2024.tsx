import { motion } from "framer-motion"

const achievements = [
    "• 2nd Place, Regional Round of the National English Language Olympiad",
    "• 8th Place, National Round of the KGL contest (level B2, contest 2024) + certificate of achievement",
    "• 92.5% overall score in Stage 1 (regional round) of the 2024 KGL contest, level B2"
]

const TwentyTwentyFour = ({refSecondProject, secondProjectVisible}: any) => (
    <motion.div className='w-full semilg:w-[48%] h-auto semilg:h-[62%] lg:h-[57.5%] xl:h-[55%] 2xl:h-[40%] flex flex-col  semilg:pb-0 gap-y-3'
        ref={refSecondProject}
        initial={{ opacity: 0, y: 30 }}
        animate={secondProjectVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
    >
        <motion.p className='text-3xl font-bold mb-2 highlight-text-amber shadow-md w-max px-2 ml-[-6px] py-1 rounded-2xl'
            whileHover={{ y: -5, scale: 1.06, rotate: -1.25 }}
            whileTap={{ scale: 0.98, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 500, damping: 22, mass: 0.6 }}
            style={{ willChange: 'transform' }}
        >2024</motion.p>

        <div className='max-w-[85%] semilg:max-w-[90%] flex flex-col gap-y-3'>
            {achievements.map((achievement, index) => (
                <p key={index}>{achievement}</p>
            ))}
            
            <div className='flex flex-row gap-y-3 semilg:gap-y-2 gap-x-3'>
                <motion.p
                    className='text-indigo-400 shadow-md px-1 py-0.5 font-bold hover:opacity-60 hover:cursor-grab'
                    whileHover={{ y: -5, scale: 1.005 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 22, mass: 0.6 }}
                    style={{ willChange: 'transform' }}
                    onClick={() => {window.open('https://www.kglcontest.org/')}}
                >Kangaroo Global Linguistics</motion.p>
                <motion.p
                    className='text-orange-400 shadow-md px-1 py-0.5 font-bold hover:opacity-60 hover:cursor-grab'
                    whileHover={{ y: -5, scale: 1.005 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 22, mass: 0.6 }}
                    style={{ willChange: 'transform' }}
                    onClick={() => {window.open('')}}
                >National English olympiad</motion.p>
            </div>
        </div>
    </motion.div>  
)

export default TwentyTwentyFour