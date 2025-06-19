import { useLocation } from "wouter";
import PageNav from "./PageNav";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import i18next from "i18next";

const Header = () => {

    const [location, setLocation] = useLocation();
    const [sidebarShown, setSidebarShown] = useState(false);
    const {t} = useTranslation();
    
    const [currentLanguage, setCurrentLanguage] = useState('en');
    useEffect(() => {
        const language = i18next.language || 'en';
        setCurrentLanguage(language);
    }, [])
    
    return (
        <>      
            <div className={`absolute right-0 top-0 h-full w-[40%] mt-[22%] `}>
                <p>test</p>
            </div>

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

                    <PageNav location={location} setLocation={setLocation} t={t} sidebarShown={sidebarShown} setSidebarShown={setSidebarShown}/>
                    
                </div>
            </div>
        </>
    )
}   

{/**
    
    {sidebarShown && (
                <div className="absolute right-0 top-0 h-full w-[40%] border-l border-gray-300 shadow-md bg-gray-100">
                    <button className="absolute top-3 right-5">
                        <FontAwesomeIcon icon={faClose} className="mt-[5px] fa-2xl text-red-400"/>
                    </button>
                </div>
            )}*/}

export default Header;