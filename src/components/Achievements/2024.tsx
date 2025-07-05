import { motion } from "framer-motion"

const TwentyTwentyFour = ({refFourthProject, fourthProjectVisible}: any) => (
    <motion.div className='w-full semilg:w-[49%] semilg:h-[65%] 3xl:h-[60%] flex flex-col gap-y-3'
        ref={refFourthProject}
        initial={{ opacity: 0, y: 30 }}
        animate={fourthProjectVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
    >
        <p className='text-3xl font-medium mb-2 shadow-md w-max px-2 ml-[-6px] py-1 rounded-2xl'>2022</p>

        <div className='max-w-[85%] semilg:max-w-[90%] flex flex-col gap-y-3'>
            <p>• 10th place, National Round of the KGL contest (level B1, contest 2022) + certificate of achievement</p>
            <p>• 92.5% overall score in Stage 1 (regional round) of the 2022 KGL contest, level B1</p>
            <p>• 1st place in the 2022 school literary translation competition</p>
            <p>• Telerik School Academy certificate, Game Development, 2022</p>
            <div className='flex flex-row gap-x-3'>
                <p className='text-indigo-200 shadow-md px-1 font-bold hover:opacity-60 hover:cursor-grab' onClick={() => {window.open('https://www.kglcontest.org/')}}>Kangaroo Global Linguistics</p>
                <p className='text-red-300 shadow-md px-1 font-bold hover:opacity-60 hover:cursor-grab' onClick={() => {window.open('https://www.telerikacademy.com/')}}>Telerik School Academy</p>
            </div>
        </div>
    </motion.div>
)

export default TwentyTwentyFour