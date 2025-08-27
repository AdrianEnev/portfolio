import { motion } from "framer-motion"

const achievements = [
    "• 10th place, National Round of the KGL contest (level B1, contest 2022) + certificate of achievement",
    "• 92.5% overall score in Stage 1 (regional round) of the 2022 KGL contest, level B1",
    "• 1st place in the 2022 school literary translation competition",
    "• Telerik School Academy certificate, Game Development, 2022"
]

const TwentyTwentyTwo = ({refFourthProject, fourthProjectVisible}: any) => (
    <motion.div className='w-full semilg:w-[49%] semilg:h-[65%] 3xl:h-[60%] flex flex-col gap-y-3'
        ref={refFourthProject}
        initial={{ opacity: 0, y: 30 }}
        animate={fourthProjectVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
    >
        <motion.p className='text-3xl font-bold mb-2 highlight-text-teal shadow-md w-max px-2 ml-[-6px] py-1 rounded-2xl'
            whileHover={{ y: -5, scale: 1.06, rotate: -1.25 }}
            whileTap={{ scale: 0.98, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 500, damping: 22, mass: 0.6 }}
            style={{ willChange: 'transform' }}
        >2022</motion.p>

        <div className='max-w-[85%] semilg:max-w-[90%] flex flex-col gap-y-3'>
            {achievements.map((achievement, index) => (
                <p key={index}>{achievement}</p>
            ))}

            <div className='flex flex-row gap-x-3'>
                <motion.p
                    className='text-indigo-400 shadow-md px-1 py-0.5 font-bold hover:opacity-60 hover:cursor-grab w-max'
                    whileHover={{ y: -5, scale: 1.005 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 22, mass: 0.6 }}
                    style={{ willChange: 'transform' }}
                    onClick={() => {window.open('https://www.kglcontest.org/')}}
                >Kangaroo Global Linguistics</motion.p>
                <motion.p
                    className='text-red-400 shadow-md px-1 py-0.5 font-bold hover:opacity-60 hover:cursor-grab w-max'
                    whileHover={{ y: -5, scale: 1.005 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 22, mass: 0.6 }}
                    style={{ willChange: 'transform' }}
                    onClick={() => {window.open('https://www.telerikacademy.com/')}}
                >Telerik School Academy</motion.p>
            </div>
        </div>
    </motion.div>
)

export default TwentyTwentyTwo