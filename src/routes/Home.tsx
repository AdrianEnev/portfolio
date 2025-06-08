import { useLocation } from "wouter";
//import CustomText from "../components/annotation/CustomText";
//import Projects from "./Projects";

/*const UnderlinedName = () => {
    return (
        <CustomText 
            text={"Adrian"} 
            type={"underline"} 
            duration={3000} 
            color={"black"}
            className='font-bold'
        />
    )
}*/


function Home() {

    const [_location, setLocation] = useLocation();

    return (
        <div className='w-screen h-screen px-[8%]'>
            <div className="w-full h-[83%] flex justify-between items-center">
                <div className="w-full h-full flex flex-col justify-center gap-y-6">
                    <div className='max-w-[50%]'>
                        <p className='md:text-3xl lg:text-5xl xl:text-7xl'>
                            Hi, my name is <span className="font-bold">Adrian</span>
                        </p>
                        
                        <p className='md:text-xl lg:text-2xl xl:text-2xl mt-4'>
                            I'm a student passionate about full-stack development. I love building things that solve real world problems and learning by doing.
                        </p>
                    </div> 

                    <div className="flex flex-row gap-x-3 w-full h-[10%] mt-3">
                        <button className="w-[25%] h-[55%] basic-button"
                            onClick={() => setLocation("/about")}
                        >
                            <p className="text-center sm:text-sm lg:text-base xl:text-lg font-medium">About</p>
                        </button>
                        <button className="w-[25%] h-[55%] basic-button"
                            onClick={() => setLocation("/projects")}
                        >
                            <p className="text-center sm:text-sm lg:text-base xl:text-lg font-medium">Projects</p>
                        </button>
                    </div>
                </div>
            
                <div className='flex flex-col w-[65%] h-[65%] mt-[-5%]'>
                    <div className='w-auto h-auto bg-white shadow-lg border border-gray-200 rounded-xl'>
                        <img 
                            src="/assets/headshot_smile.JPG"
                            className="w-auto h-auto rounded-xl object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home

/*
<div className="w-full h-[1px] bg-gray-300"></div>
<Projects />
 <div className="w-full h-[1px] bg-gray-300"></div>
<p className="text-2xl font-medium mt-4">
    More about me! 📖
</p>
*/

/*
    import WorkSwiper from '../components/home/WorkSwiper'
    import CustomText from '../components/annotation/CustomText'

   
 
    <div className='w-screen h-screen flex justify-between items-center px-[8%]'>
        <div className='max-w-[35%] mt-[-15%] sm:text-xl md:text-2xl lg:text-3xl'>
            <p className='text-[#1E1B4B]'>
                Hi, I’m <UnderlinedText />, a student passionate about full-stack development. I love building things that solve real world problems and learning by doing.
            </p>
        </div> 

        <div className='flex flex-col w-[45%] h-[60%] mt-[-15%]'>
            <div className='w-full h-full bg-white shadow-lg border border-gray-200 rounded-xl'>
                <WorkSwiper />
            </div>

            <p className='text-xl font-medium text-center mt-4'>WORK</p>
        </div>
    </div>
 */