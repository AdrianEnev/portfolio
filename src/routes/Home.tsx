import { useLocation } from "wouter";
import Headshot from "../components/Home/Headshot";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
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
    const {t} = useTranslation();
    const currentLanguage = i18next.language || 'en';

    return (
        <div className='w-screen h-screen px-[15%] ml-[-8%] md:ml-0 md:px-[8%]'>
            <div className="w-full h-[80%] md:h-[83%] flex flex-col md:flex-row md:justify-between items-center">

                <div className="w-full h-full flex flex-col justify-center gap-y-6">
                    <div className={`${currentLanguage == 'en' ? 'md:max-w-[50%]' : 'md:max-w-[70%]'}`}>
                        <p className=
                            'text-2xl md:text-3xl lg:text-5xl xl:text-7xl text-center md:text-start'
                        >
                            {t('greeting-formal')} <span className="font-bold">{t('first-name')}</span>!
                        </p>
                        
                        <p className=
                            'text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl mt-4 text-center md:text-start'
                        >
                           {t('greeting-description')}
                        </p>
                    </div> 

                    <div className="flex flex-row gap-x-3 w-full h-[10%] mt-3">
                        <button className="w-[65%] md:w-[25%] h-10 md:h-[55%] basic-button"
                            onClick={() => setLocation("/about")}
                        >
                            <p className="text-center sm:text-sm lg:text-base xl:text-lg font-medium">{t('about')}</p>
                        </button>
                        <button className="w-[65%] md:w-[25%] h-10 md:h-[55%] basic-button"
                            onClick={() => setLocation("/projects")}
                        >
                            <p className="text-center sm:text-sm lg:text-base xl:text-lg font-medium">{t('projects')}</p>
                        </button>
                    </div>
                </div>
            
                <Headshot setLocation={setLocation}/>
            </div>
        </div>
    )
}

export default Home;