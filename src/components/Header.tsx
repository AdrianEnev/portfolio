import { useLocation } from "wouter";

const Header = () => {

    const [location, setLocation] = useLocation();

    return (
        <div className="w-full h-20 pt-4 flex flex-row justify-between items-center px-[10%]">
            <p className="text-2xl font-semibold text-[#1E1B4B] hover:opacity-80 active:opacity-60"
                onClick={() => setLocation("/")}
            >
                Full-Stack Dev
            </p>

            <div className="flex flex-row gap-x-6">

                <div className="flex flex-row gap-x-4 text-xl mt-[2px] mr-3">
                    <p className="text-gray-400">BG</p>
                    <p className="text-gray-600 font-medium underline underline-offset-4">EN</p>
                </div>

                {location == '/contact' ? (
                    <p className="text-2xl font-semibold text-[#1E1B4B] hover:underline hover:opacity-80"
                        onClick={() => setLocation("/about")}
                    >
                        About
                    </p>
                ) : (
                    <p className="text-2xl font-semibold text-[#1E1B4B] hover:underline hover:opacity-80"
                        onClick={() => setLocation("/contact")}
                    >
                        Contact Me
                    </p>
                )}
                
            </div>
        </div>
    )
}   

export default Header;