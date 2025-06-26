import { useLocation } from "wouter";
import PageNav from "./PageNav";
import { useState } from "react";

const Header = () => {

    const [location, setLocation] = useLocation();
    const [sidebarShown, setSidebarShown] = useState(false);
    
    return (
        <>      
            <div className="w-full h-20 pt-4 flex flex-row justify-between items-center 3xs:px-[3%] md:px-[10%]">
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#1E1B4B] hover:opacity-80 active:opacity-60"
                    onClick={() => setLocation("/")}
                >
                    Full-Stack Dev
                </p>

                <PageNav location={location} setLocation={setLocation} sidebarShown={sidebarShown} setSidebarShown={setSidebarShown}/>
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