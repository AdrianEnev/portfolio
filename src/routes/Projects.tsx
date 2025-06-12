import { useTranslation } from "react-i18next";
import { useLocation } from "wouter";

function Projects() {

    const [_location, _setLocation] = useLocation();
    const {t} = useTranslation();

    return (
        <div className="w-screen h-screen px-[8%] pt-[4%]">
            
            <div className="w-[84%] md:w-full">
                <p className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-medium text-center">{t('projects-title')} 🌲</p>
                <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium text-gray-500 text-center mt-3">{t('projects-title-description')}</p>
            </div>

            <div className="mt-[8%] md:mt-[3%] w-[84.5%] md:w-full flex flex-col md:flex-row gap-x-[15%]">
                <div className="flex flex-col gap-y-6 md:max-w-[45%]">
                    <p className="text-2xl md:text-3xl lg:text-4xl font-bold">{t('projects-title-finished')} 📦</p>

                    <div className="flex flex-col md:flex-row md:flex-wrap gap-x-3 gap-y-3">
                        <div className="w-full min-h-72 h-[55%] md:w-64 md:h-64 bg-red-500 border-gray-300 shadow-md rounded-xl flex items-center justify-center hover:opacity-60">
                            <p className="text-6xl font-semibold text-white">Lunge</p>
                        </div>
                        <div className="w-full min-h-72 h-[55%] md:w-64 md:h-64 bg-blue-500 border-gray-300 shadow-md rounded-xl flex flex-col gap-y-1 items-center justify-center hover:opacity-60">
                            <p className="text-5xl font-semibold text-white">Adrian</p>
                            <p className="text-5xl font-semibold text-white">Cuts</p>
                        </div>
                        <div className="w-full min-h-72 h-[55%] md:w-64 md:h-64 bg-green-500 border-gray-300 shadow-md rounded-xl flex flex-col gap-y-1 items-center justify-center hover:opacity-60">
                            <p className="text-5xl font-semibold text-white">{t('projects-description-this')}</p>
                            <p className="text-5xl font-semibold text-white">{t('projects-description-portfolio')}</p>
                        </div>
                        <div className="w-full min-h-72 h-[55%] md:w-64 md:h-64 bg-yellow-400 border-gray-300 shadow-md rounded-xl flex items-center justify-center hover:opacity-60">
                            <p className="text-4xl font-semibold text-white">{t('projects-description-soon')}</p>
                        </div>
                    </div>
                </div>

                <div className="w-full h-full mt-[8%] md:mt-0 mb-[15%] md:mb-0">
                    <div className="flex flex-col gap-y-6">
                        <p className="text-2xl md:text-3xl lg:text-4xl font-bold">{t('projects-title-in-progress')} ⏳</p>

                        <div className="flex flex-row flex-wrap gap-x-3 gap-y-3">
                            <div className="w-full min-h-72 h-[55%] md:w-64 md:h-64 bg-purple-500 border-gray-300 shadow-md rounded-xl flex items-center justify-center hover:opacity-60">
                                <p className="text-4xl font-semibold text-white">{t('projects-description-soon')}</p>
                            </div>
                            <div className="w-full min-h-72 h-[55%] md:w-64 md:h-64 bg-orange-500 border-gray-300 shadow-md rounded-xl flex items-center justify-center hover:opacity-60">
                                <p className="text-4xl font-semibold text-white">{t('projects-description-soon')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects