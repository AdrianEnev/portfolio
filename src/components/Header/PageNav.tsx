import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PageNav = ({location, setLocation, t}: any) => {
    return (
        <div>
            <div className="hidden md:flex">
                {location == '/contact' ? (
                    <p className="text-2xl font-semibold text-[#1E1B4B] hover:underline hover:opacity-80"
                        onClick={() => setLocation("/about")}
                    >
                        {t('about')}
                    </p>
                ) : location == '/projects' ? (
                    <p className="text-2xl font-semibold text-[#1E1B4B] hover:underline hover:opacity-80"
                        onClick={() => setLocation("/about")}
                    >
                        {t('about')}
                    </p>
                ) : (
                    <p className="text-2xl font-semibold text-[#1E1B4B] hover:underline hover:opacity-80"
                        onClick={() => setLocation("/contact")}
                    >
                        {t('contact-me')}
                    </p>
                )}
            </div>
            <div className="flex md:hidden">
                <FontAwesomeIcon icon={faBars} className="mt-[5px] fa-xl"/>
            </div>
        </div>
    )
}

export default PageNav;