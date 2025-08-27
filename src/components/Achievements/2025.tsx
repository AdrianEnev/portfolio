import { motion } from "framer-motion"

const achievements = [
    "• 1st Place, Regional Round of the National Olympiad in Information Technologies (IT) – Category: Distributed Applications.",
    "• Top 10, National Autumn IT (Information Technology) Tournament “John Atanasoff”, Sofia – Category: Distributed Applications.",
    "• Certificate of Excellent Performance and Medal, 25th Student Section of the High School Student Institute of Mathematics and Informatics (HSSI). (Equivalent to first place, though awarded to multiple top participants)",
    "• 1st Place, Regional Round of the National English Language Olympiad",
    "• Cambridge English: C1 Advanced Exam - 203 points; Result - C2 (Grade A)",
    "• Sold my first ever website — delivered end-to-end from requirements gathering to deployment",
    "• Attended 20 day programming camp after winning 1st place at HSSMI - HSSMI Summer Research School"
]

const TwentyTwentyFive = () => (
    <div className='w-full semilg:w-[49%] h-auto semilg:h-[62%] lg:h-[57.5%] xl:h-[55%] 2xl:h-[40%]  semilg:pb-0 flex flex-col gap-y-3'>
        <motion.p className='text-3xl font-bold mb-2 highlight-text-rose shadow-md w-max px-2 ml-[-6px] py-0.5 rounded-2xl'
            whileHover={{ y: -5, scale: 1.005, rotate: 1.25 }}
            whileTap={{ scale: 0.98, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 500, damping: 22, mass: 0.6 }}
            style={{ willChange: 'transform' }}
        >2025</motion.p>

        <div className='max-w-[85%] semilg:max-w-[90%] flex flex-col gap-y-3'>
            {achievements.map((achievement, index) => (
                <p key={index}>{achievement}</p>
            ))}

            <div className='flex flex-row flex-wrap gap-y-3 semilg:gap-y-2 gap-x-3'>
                <motion.p
                    className='text-indigo-400 shadow-md px-1 py-0.5 font-bold hover:opacity-60 hover:cursor-grab'
                    whileHover={{ y: -5, scale: 1.005 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 22, mass: 0.6 }}
                    style={{ willChange: 'transform' }}
                    onClick={() => {window.open('https://www.kglcontest.org/')}}>Kangaroo Global Linguistics</motion.p>
                <motion.p
                    className='text-green-400 shadow-md px-1 py-0.5 font-bold hover:opacity-60 hover:cursor-grab'
                    whileHover={{ y: -5, scale: 1.005 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 22, mass: 0.6 }}
                    style={{ willChange: 'transform' }}
                    onClick={() => {window.open('https://edusoft.fmi.uni-sofia.bg/')}}>National IT olympiad</motion.p>
                <motion.p
                    className='text-orange-400 shadow-md px-1 py-0.5 font-bold hover:opacity-60 hover:cursor-grab'
                    whileHover={{ y: -5, scale: 1.005 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 22, mass: 0.6 }}
                    style={{ willChange: 'transform' }}
                    onClick={() => {window.open('')}}>National English olympiad</motion.p>
                <motion.p
                    className='text-yellow-400 shadow-md px-1 py-0.5 font-bold hover:opacity-60 hover:cursor-grab'
                    whileHover={{ y: -5, scale: 1.005 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 22, mass: 0.6 }}
                    style={{ willChange: 'transform' }}
                    onClick={() => {window.open('https://www.math.bas.bg/omi/hssimi/?lang=en')}}>High School Student Institute of Math and IT</motion.p>
                <motion.p
                    className='text-fuchsia-400 shadow-md px-1 py-0.5 font-bold hover:opacity-60 hover:cursor-grab'
                    whileHover={{ y: -5, scale: 1.005 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 22, mass: 0.6 }}
                    style={{ willChange: 'transform' }}
                    onClick={() => {window.open('https://www.cambridgeenglish.org/exams-and-tests/advanced/')}}>Cambridge English</motion.p>
                <motion.p
                    className='text-rose-400 shadow-md px-1 py-0.5 font-bold hover:opacity-60 hover:cursor-grab'
                    whileHover={{ y: -5, scale: 1.005 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 22, mass: 0.6 }}
                    style={{ willChange: 'transform' }}
                    onClick={() => {alert('Public domain will be available soon!')}}>Website</motion.p>
            </div>
        </div>
    </div> 
)

export default TwentyTwentyFive;