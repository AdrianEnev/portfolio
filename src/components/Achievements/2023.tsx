import { motion } from "framer-motion"

const TwentyTwentyThree = ({refThirdProject, thirdProjectVisible}: any) => (
    <motion.div className='w-full semilg:w-[48%] h-auto semilg:h-[65%] 3xl:h-[60%] flex flex-col semilg:pb-0 gap-y-3'
        ref={refThirdProject}
        initial={{ opacity: 0, y: 30 }}
        animate={thirdProjectVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
    >
        <p className='text-3xl font-medium mb-2 shadow-md w-max px-2 ml-[-6px] py-1 rounded-2xl'>2023</p>
        
        <div className='max-w-[85%] semilg:max-w-[90%] flex flex-col gap-y-3'>
            <p>• 3rd Place, Regional Round of the National English Language Olympiad</p>
            <p>• 97.5% overall score in Stage 1 (regional round) of the 2023 KGL contest, level B1</p>
            <p className='text-indigo-200 shadow-md px-1 font-bold hover:opacity-60 hover:cursor-grab w-max' onClick={() => {window.open('https://www.kglcontest.org/')}}>Kangaroo Global Linguistics</p>
        </div>
    </motion.div> 
)

export default TwentyTwentyThree