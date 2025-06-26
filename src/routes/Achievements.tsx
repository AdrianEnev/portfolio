function Achievements() {
    return (
        <div className="w-screen h-screen px-[4%] semilg:px-[8%] pt-[8%] semilg:pt-[4%]">
            <div className="w-[84%] semilg:w-full">
                <p className="text-3xl semilg:text-4xl lg:text-5xl xl:text-6xl font-medium text-center">🏆 Notable Achievements</p>
                <p className="text-lg semilg:text-xl lg:text-2xl xl:text-3xl font-medium text-gray-500 text-center mt-3">English & IT academic achievements (2022-2026) </p>
            </div>

            <div className='w-full flex flex-col gap-y-6 semilg:gap-y-0 semilg:flex-row semilg:justify-between mt-[6%]'>
                <div className='w-full semilg:w-[49%] h-auto semilg:h-[62%] lg:h-[57.5%] xl:h-[55%] 2xl:h-[40%] border-b border-gray-300 semilg:border-0 pb-3 semilg:pb-0 flex flex-col gap-y-3'>
                    <p className='text-3xl font-medium mb-2'>2025</p>

                    <div className='max-w-[85%] semilg:max-w-[90%] flex flex-col gap-y-3'>
                        <p>- 1st Place, Regional Round of the National Olympiad in Information Technologies (IT) – Category: Distributed Applications.</p>
                        <p>- Top 10, National Autumn IT (Information Technology) Tournament “John Atanasoff”, Sofia – Category: Distributed Applications.</p>
                        <p>- Certificate of Excellent Performance and Medal, 25th Student Section of the High School Student Institute of Mathematics and Informatics (HSSI). (Equivelent to 1st place, although shared with other participants)</p>
                        <p>- 1st Place, Regional Round of the National English Language Olympiad </p>

                        <div className='flex flex-row flex-wrap gap-y-3 semilg:gap-y-0 gap-x-3'>
                            <p className='text-red-500 font-medium hover:opacity-60 hover:cursor-grab' onClick={() => {window.open('https://www.kglcontest.org/')}}>International Advanced Informatics Tournament</p>
                            <p className='text-green-500 font-medium hover:opacity-60 hover:cursor-grab' onClick={() => {window.open('https://edusoft.fmi.uni-sofia.bg/')}}>National IT olympiad</p>
                            <p className='text-blue-500 font-medium hover:opacity-60 hover:cursor-grab' onClick={() => {window.open('')}}>National English olympiad</p>
                            <p className='text-yellow-500 font-medium hover:opacity-60 hover:cursor-grab' onClick={() => {window.open('https://www.math.bas.bg/omi/hssimi/?lang=en')}}>High School Student Institute of Math and IT</p>
                        </div>
                    </div>
                </div>  
                
                <div className='w-full semilg:w-[48%] h-auto semilg:h-[62%] lg:h-[57.5%] xl:h-[55%] 2xl:h-[40%] flex flex-col border-b border-gray-300 semilg:border-0 pb-3 semilg:pb-0 gap-y-3 ml-3'>
                    <p className='text-3xl font-medium mb-2'>2024</p>

                    <div className='max-w-[85%] semilg:max-w-[90%] flex flex-col gap-y-3'>
                        <p>- 2nd Place, Regional Round of the National English Language Olympiad</p>
                        <p>- 8th Place, National Round of the KGL contest (level B2, contest 2024) + certificate of achievement</p>
                        <p>- 92.5% overall score in Stage 1 (regional round) of the 2024 KGL contest, level B2</p>
                        
                        <div className='flex flex-row gap-x-3'>
                            <p className='text-purple-500 font-medium hover:opacity-60 hover:cursor-grab' onClick={() => {window.open('https://www.kglcontest.org/')}}>Kangaroo Global Linguistics</p>
                            <p className='text-blue-500 font-medium hover:opacity-60 hover:cursor-grab' onClick={() => {window.open('')}}>National English olympiad</p>
                        </div>
                    </div>
                </div>  

               
            </div>

            <div className='w-full h-1/2 flex flex-col gap-y-6 semilg:gap-y-0 semilg:flex-row semilg:justify-between mt-[6%]'>
                <div className='w-full semilg:w-[48%] h-auto semilg:h-[65%] 3xl:h-[60%] flex flex-col border-b border-gray-300 semilg:border-0 pb-3 semilg:pb-0 gap-y-3 ml-3'>
                    <p className='text-3xl font-medium mb-2'>2023</p>
                    
                    <div className='max-w-[85%] semilg:max-w-[90%] flex flex-col gap-y-3'>
                        <p>- 3rd Place, Regional Round of the National English Language Olympiad</p>
                        <p>- 97.5% overall score in Stage 1 (regional round) of the 2023 KGL contest, level B1</p>
                        <p className='text-purple-500 font-medium hover:opacity-60 hover:cursor-grab' onClick={() => {window.open('https://www.kglcontest.org/')}}>Kangaroo Global Linguistics</p>
                    </div>
                </div> 
                
                <div className='w-full semilg:w-[49%] semilg:h-[65%] 3xl:h-[60%] flex flex-col gap-y-3 ml-3'>
                    <p className='text-3xl font-medium mb-2'>2022</p>

                    <div className='max-w-[85%] semilg:max-w-[90%] flex flex-col gap-y-3'>
                        <p>- 10th place, National Round of the KGL contest (level B1, contest 2022) + certificate of achievement</p>
                        <p>- 92.5% overall score in Stage 1 (regional round) of the 2022 KGL contest, level B1</p>
                        <p>- 1st place in the 2022 school literary translation competition</p>
                        <p>- Telerik School Academy certificate, Game Development, 2022</p>
                        <div className='flex flex-row gap-x-3'>
                            <p className='text-purple-500 font-medium hover:opacity-60 hover:cursor-grab' onClick={() => {window.open('https://www.kglcontest.org/')}}>Kangaroo Global Linguistics</p>
                            <p className='text-green-500 font-medium hover:opacity-60 hover:cursor-grab' onClick={() => {window.open('https://www.telerikacademy.com/')}}>Telerik School Academy</p>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default Achievements