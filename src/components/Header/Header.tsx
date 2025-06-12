import { useLocation } from "wouter";
import PageNav from "./PageNav";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import i18next from "i18next";

const Header = () => {

    const [location, setLocation] = useLocation();
    const {t} = useTranslation();
    
    const [currentLanguage, setCurrentLanguage] = useState('en');
    useEffect(() => {
        const language = i18next.language || 'en';
        setCurrentLanguage(language);
    })

    return (
        <div className="w-full h-20 pt-4 flex flex-row justify-between items-center 3xs:px-[3%] md:px-[10%]">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#1E1B4B] hover:opacity-80 active:opacity-60"
                onClick={() => setLocation("/")}
            >
                {t('header-title')}
            </p>

            <div className="flex flex-row gap-x-[6px] 2xs:gap-x-3 3xs:gap-x-6">

                <div className="flex flex-row gap-x-4 text-xl mt-[2px] mr-3">
                    <p 
                        className={`${currentLanguage == 'bg' ? 'text-gray-600 font-medium underline underline-offset-4' : 'text-gray-400 hover:opacity-60 hover:font-medium'}`}
                        onClick={() => {i18next.changeLanguage('bg'); setCurrentLanguage('bg');}}
                    >
                        BG
                    </p>

                    <p 
                        className={`${currentLanguage == 'en' ? 'text-gray-600 font-medium underline underline-offset-4' : 'text-gray-400 hover:opacity-60 hover:font-medium'}`}
                        onClick={() => {i18next.changeLanguage('en'); setCurrentLanguage('en');}}
                    >
                        EN
                    </p>
                </div>

                <PageNav location={location} setLocation={setLocation} t={t}/>
                
            </div>
        </div>
    )
}   

export default Header;