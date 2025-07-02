import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PageNav = ({location, setLocation, sidebarVisible, setSidebarVisible}: any) => {
    return (
        <button onClick={() => setSidebarVisible(!sidebarVisible)}>
            <div className="hidden md:flex">
                {location == '/contact' ? (
                    <p className="text-2xl font-semibold text-white hover:underline hover:opacity-80"
                        onClick={() => setLocation("/about")}
                    >
                        About
                    </p>
                ) : location == '/projects' ? (
                    <p className="text-2xl font-semibold text-white hover:underline hover:opacity-80"
                        onClick={() => setLocation("/about")}
                    >
                        About
                    </p>
                ) : location == '/achievements' ? (
                    <p className="text-2xl font-semibold text-white hover:underline hover:opacity-80"
                        onClick={() => setLocation("/about")}
                    >
                        About
                    </p>
                ) : (
                    <p className="text-2xl font-semibold text-white hover:underline hover:opacity-80"
                        onClick={() => setLocation("/contact")}
                    >
                        Contact Me
                    </p>
                )}
            </div>
            <div className="flex md:hidden">
                <FontAwesomeIcon icon={faBars} color="#f3f4f6" className="mt-[5px] fa-xl"/>
            </div>
        </button>
    )
}

export default PageNav;