import { motion } from "framer-motion"

const TwentyTwentyTwo = ({refSecondProject, secondProjectVisible}: any) => (
    <motion.div className='w-full semilg:w-[48%] h-auto semilg:h-[62%] lg:h-[57.5%] xl:h-[55%] 2xl:h-[40%] flex flex-col  semilg:pb-0 gap-y-3'
        ref={refSecondProject}
        initial={{ opacity: 0, y: 30 }}
        animate={secondProjectVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
    >
        <p className='text-3xl font-medium mb-2 text-white shadow-md w-max px-2 ml-[-6px] py-1 rounded-2xl'>2024</p>

        <div className='max-w-[85%] semilg:max-w-[90%] flex flex-col gap-y-3'>
            <p>• 2nd Place, Regional Round of the National English Language Olympiad</p>
            <p>• 8th Place, National Round of the KGL contest (level B2, contest 2024) + certificate of achievement</p>
            <p>• 92.5% overall score in Stage 1 (regional round) of the 2024 KGL contest, level B2</p>
            
            <div className='flex flex-row gap-x-3'>
                <p className='text-indigo-200 shadow-md px-1 font-bold hover:opacity-60 hover:cursor-grab' onClick={() => {window.open('https://www.kglcontest.org/')}}>Kangaroo Global Linguistics</p>
                <p className='text-orange-300 shadow-md px-1 font-bold hover:opacity-60 hover:cursor-grab' onClick={() => {window.open('')}}>National English olympiad</p>
            </div>
        </div>
    </motion.div>  
)

export default TwentyTwentyTwo