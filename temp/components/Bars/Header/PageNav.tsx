import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PageNav = ({location, setLocation, sidebarVisible, setSidebarVisible}: any) => {
    const links = [
        { label: 'About', path: '/about' },
        { label: 'Projects', path: '/projects' },
        { label: 'Achievements', path: '/achievements' },
        { label: 'Contact', path: '/contact' },
    ];

    return (
        <div>
            <div className="hidden md:flex items-center gap-x-6">
                {links.map(({ label, path }) => {
                    const active = location === path;
                    return (
                        <button
                            key={path}
                            onClick={() => setLocation(path)}
                            className={`nav-link ${active ? 'active' : ''}`}
                        >
                            {label}
                        </button>
                    );
                })}
            </div>
            <button className="flex md:hidden" onClick={() => setSidebarVisible(!sidebarVisible)}>
                <FontAwesomeIcon icon={faBars} color="#1E1B4B" className="mt-[2px] fa-xl"/>
            </button>
        </div>
    )
}

export default PageNav;