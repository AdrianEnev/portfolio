import React from 'react'
import CustomText from '../components/annotation/CustomText'

const UnderlinedText = () => {
    return (
        <CustomText 
            text={"Adrian"} 
            type={"underline"} 
            duration={3000} 
            color={"#F59E0B"}
        />
    )
}

function Home() {
    return (
            <div className='w-full h-full flex flex-col gap-y-6'>
                <div className='w-screen h-screen flex justify-between items-center px-[8%]'>

                    <div className='max-w-[35%] mt-[-15%] sm:text-xl md:text-2xl lg:text-3xl'>
                        <p className='text-[#1E1B4B]'>
                            Hi, I’m <UnderlinedText />, a student passionate about full-stack development. I love building things that solve real problems and learning by doing.
                        </p>
                    </div> 
                    
                    <div className='bg-white shadow-md w-[45%] h-[60%] rounded-xl border border-[#F59E0B] mt-[-15%]'>
                        
                    </div>
                </div>
            </div>
    )
}

export default Home