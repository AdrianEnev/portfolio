const TwentyTwentyFive = () => (
    <div className='w-full semilg:w-[49%] h-auto semilg:h-[62%] lg:h-[57.5%] xl:h-[55%] 2xl:h-[40%]  semilg:pb-0 flex flex-col gap-y-3'>
        <p className='text-3xl font-medium mb-2 text-white shadow-md w-max px-2 ml-[-6px] py-1 rounded-2xl'>2025</p>

        <div className='max-w-[85%] semilg:max-w-[90%] flex flex-col gap-y-3'>
            <p>• 1st Place, Regional Round of the National Olympiad in Information Technologies (IT) – Category: Distributed Applications.</p>
            <p>• Top 10, National Autumn IT (Information Technology) Tournament “John Atanasoff”, Sofia – Category: Distributed Applications.</p>
            <p>• Certificate of Excellent Performance and Medal, 25th Student Section of the High School Student Institute of Mathematics and Informatics (HSSI). (Equivalent to first place, though awarded to multiple top participants)</p>
            <p>• 1st Place, Regional Round of the National English Language Olympiad </p>
            <p>• Cambridge English: C1 Advanced Exam - 203 points, C2 (Grade A) <a href="/assets/AdrianEnev_Cambridge_English_C1_Advanced_Exam_Statement.pdf" download className="text-white shadow-md px-1 font-bold underline underline-offset-2 hover:opacity-70">(Download Statement)</a></p>

            <div className='flex flex-row flex-wrap gap-y-3 semilg:gap-y-0 gap-x-3'>
                <p className='text-indigo-200 shadow-md px-1 font-bold hover:opacity-60 hover:cursor-grab' onClick={() => {window.open('https://www.kglcontest.org/')}}>International Advanced Informatics Tournament</p>
                <p className='text-green-300 shadow-md px-1 font-bold hover:opacity-60 hover:cursor-grab' onClick={() => {window.open('https://edusoft.fmi.uni-sofia.bg/')}}>National IT olympiad</p>
                <p className='text-orange-300 shadow-md px-1 font-bold hover:opacity-60 hover:cursor-grab' onClick={() => {window.open('')}}>National English olympiad</p>
                <p className='text-yellow-300 shadow-md px-1 font-bold hover:opacity-60 hover:cursor-grab' onClick={() => {window.open('https://www.math.bas.bg/omi/hssimi/?lang=en')}}>High School Student Institute of Math and IT</p>
                <p className='text-fuchsia-300 shadow-md px-1 font-bold hover:opacity-60 hover:cursor-grab' onClick={() => {window.open('https://www.cambridgeenglish.org/exams-and-tests/advanced/')}}>Cambridge English</p>
            </div>
        </div>
    </div> 
)

export default TwentyTwentyFive;