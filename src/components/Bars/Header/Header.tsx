import PageNav from "./PageNav";

//dark:text-[#1E1B4B]

const Header = (
    { sidebarVisible, setSidebarVisible, location, setLocation }: { 
    sidebarVisible: boolean, setSidebarVisible: any,
    location: string, setLocation: any}
) => {
    return (
        <>      
            <div className={`h-20 pt-4 flex flex-row justify-between items-center 3xs:px-[3%] md:px-[10%] ${location === '/' ? 'absolute w-[85%] md:w-[95%]' : 'w-full'}`}>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white hover:opacity-80 active:opacity-60"
                    onClick={() => setLocation("/")}
                >
                    Full-Stack Dev
                </p>

                <PageNav location={location} setLocation={setLocation} sidebarVisible={sidebarVisible} setSidebarVisible={setSidebarVisible}/>
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