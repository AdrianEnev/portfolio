import './App.css'
import { Route, useLocation } from "wouter";
import Home from './routes/Home';
import About from './routes/About';
import Header from './components/Bars/Header/Header';
import Projects from './routes/Projects';
import Contact from './routes/Contact';
import Achievements from './routes/Achievements';
import Sidebar from './components/Bars/Sidebar';
import { useEffect, useState } from 'react';
import CyrilicName from './routes/CyrilicName';
import DihhDictionary from './routes/DihhDictionary';
import Maintenance from './routes/Maintenance';

const MAINTENANCE_MODE = import.meta.env.VITE_MAINTENANCE_MODE === "true";

function App() {

    const [location, setLocation] = useLocation();
    const [sidebarVisible, setSidebarVisible] = useState(false);

    // Disable scrolling on sidebarVisible using useEffect
    useEffect(() => {
        const body = document.body;

        if (sidebarVisible) {
            body.classList.add('no-scroll');
        } else {
            body.classList.remove('no-scroll');
        }

        // Cleanup on unmount
        return () => {
            body.classList.remove('no-scroll');
        };
    }, [sidebarVisible]);

    useEffect(() => {
        if (MAINTENANCE_MODE && location !== "/maintenance") {
            setLocation("/maintenance", { replace: true });
        }
    }, [location, setLocation]);

    if (MAINTENANCE_MODE) {
        return (
            <div className="w-screen min-h-screen text-[#111827]">
                <main className="w-full min-h-screen">
                    <Maintenance />
                </main>
            </div>
        );
    }

    return (
        <div className="w-screen min-h-screen mesh-gradient text-[var(--color-text-main)]">
            <main className="w-full min-h-screen relative">
                {sidebarVisible && <Sidebar sidebarVisible={sidebarVisible} setSidebarVisible={setSidebarVisible} />}
                <Header sidebarVisible={sidebarVisible} setSidebarVisible={setSidebarVisible} location={location} setLocation={setLocation} />

                <Route path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/projects" component={Projects} />
                <Route path="/achievements" component={Achievements} />
                <Route path="/maintenance" component={Maintenance} />
                <Route path="/адриан-енев" component={CyrilicName} />
                <Route path="/dihh" component={DihhDictionary} />
            </main>
        </div>
    )
}

export default App;
