import PageNav from "./PageNav";

//dark:text-[#1E1B4B]

const Header = (
    { sidebarVisible, setSidebarVisible, location, setLocation }: { 
    sidebarVisible: boolean, setSidebarVisible: any,
    location: string, setLocation: any}
) => {
    return (
        <>      
            <div className="absolute z-30 top-1 left-1/2 -translate-x-1/2 w-4/5 md:top-3 md:left-0 md:translate-x-0 md:w-full">
                <div className="mx-auto max-w-7xl px-6 3xs:px-8 py-3 mt-3">
                    <div className="glass rounded-2xl h-12 md:h-14 flex items-center justify-between px-3 3xs:px-4 md:px-6">
                        <p className="text-base sm:text-lg md:text-2xl font-semibold text-[#1E1B4B] hover:opacity-80 active:opacity-60 whitespace-nowrap"
                            onClick={() => setLocation("/")}
                        >
                            Adrian Enev
                        </p>
                        <PageNav location={location} setLocation={setLocation} sidebarVisible={sidebarVisible} setSidebarVisible={setSidebarVisible}/>
                    </div>
                </div>
            </div>
        </>
    )
}   

export default Header;