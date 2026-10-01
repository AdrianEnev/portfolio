import { motion } from "framer-motion";
import { Asterisk, Binary, Braces, BugPlay, CodeXml, Home } from "lucide-react";
import { useLocation } from "wouter";

const Sidebar = ({ sidebarVisible, setSidebarVisible }: { sidebarVisible: boolean, setSidebarVisible: any }) => {

    const variants = {
        open: { x: 0 },
        closed: { x: "-100%" },
    };

    const [_location, setLocation] = useLocation();

    const navItems = [
        { path: '/', label: 'Home', icon: Home },
        { path: '/about', label: 'About', icon: Braces },
        { path: '/contact', label: 'Contact', icon: BugPlay },
        { path: '/projects', label: 'Projects', icon: Binary },
        { path: '/achievements', label: 'Achievements', icon: Asterisk },
    ];

    return (
        <motion.div
            className="fixed top-0 left-0 w-[75%] max-w-[300px] h-screen glass z-[60] py-6 flex flex-col md:hidden border-r border-[var(--color-text-main)]/20 shadow-2xl backdrop-blur-2xl"
            initial="closed"
            animate={sidebarVisible ? "open" : "closed"}
            variants={variants}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
        >
            {/* Header Section */}
            <div className="flex flex-row items-center pb-4 px-4">
                <CodeXml
                    className="text-[var(--color-electric)]"
                    width={28}
                    height={28}
                />
                <p className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-electric)] to-[var(--color-cyan-glow)] ml-3">
                    Adrian Enev
                </p>
            </div>

            {/* Divider with gradient */}
            <div className="w-full h-[2px] bg-gradient-to-r from-[var(--color-electric)] via-[var(--color-cyan-glow)] to-transparent mb-4"></div>

            {/* Navigation Items */}
            <ul className="flex flex-col gap-2 px-3">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = _location === item.path;

                    return (
                        <li key={item.path}>
                            <button
                                onClick={() => {
                                    setSidebarVisible(false);
                                    setLocation(item.path);
                                }}
                                className={`
                                    w-full h-12 rounded-xl flex items-center gap-3 px-4
                                    transition-all duration-300 group
                                    ${isActive
                                        ? 'bg-gradient-to-r from-[var(--color-electric)]/20 to-[var(--color-cyan-glow)]/20 border border-[var(--color-electric)]/30'
                                        : 'hover:bg-slate-100 dark:hover:bg-[var(--color-surface-light)]/50 border border-transparent hover:border-slate-200 dark:hover:border-white/5'
                                    }
                                `}
                            >
                                <Icon
                                    className={`
                                        transition-all duration-300
                                        ${isActive
                                            ? 'text-[var(--color-electric)]'
                                            : 'text-[var(--color-text-dim)] group-hover:text-[var(--color-electric)] dark:group-hover:text-[var(--color-cyan-glow)]'
                                        }
                                    `}
                                    size={20}
                                />
                                <p className={`
                                    text-base font-semibold transition-all duration-300
                                    ${isActive
                                        ? 'text-[var(--color-text-main)]'
                                        : 'text-[var(--color-text-dim)] group-hover:text-[var(--color-text-main)]'
                                    }
                                `}>
                                    {item.label}
                                </p>
                            </button>
                        </li>
                    );
                })}
            </ul>
        </motion.div>
    );
};

export default Sidebar;