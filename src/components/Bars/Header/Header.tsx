import PageNav from "./PageNav";
import { ThemeToggle } from "../../ThemeToggle";

//dark:text-[#1E1B4B]

const Header = (
    { sidebarVisible, setSidebarVisible, location, setLocation }: {
        sidebarVisible: boolean, setSidebarVisible: any,
        location: string, setLocation: any
    }
) => {
    return (
        <>
            <div className="fixed z-50 top-4 left-1/2 -translate-x-1/2 w-[90%] md:w-auto md:min-w-[500px]">
                <div className="glass rounded-full h-14 md:h-16 flex items-center justify-between px-6 3xs:px-8 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
                    <p className="text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-text-main)] to-[var(--color-text-dim)] hover:to-[var(--color-text-main)] cursor-pointer transition-all mr-8"
                        onClick={() => setLocation("/")}
                    >
                        Adrian Enev
                    </p>
                    <div className="flex items-center gap-2">
                        <div className="order-1 md:order-3">
                            <ThemeToggle />
                        </div>

                        <div className="h-6 w-[1px] bg-[var(--color-text-dim)]/20 mx-1 hidden md:block order-2"></div>

                        <div className="order-2 md:order-1">
                            <PageNav location={location} setLocation={setLocation} sidebarVisible={sidebarVisible} setSidebarVisible={setSidebarVisible} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;