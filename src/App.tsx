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

    return (
        <div className={`w-screen h-scren mesh-gradient text-[var(--color-text-main)]
            ${location !== '/achievements' ? 'md:overflow-hidden' : ''}
            ${location === '/about' || location === '/contact' ? 'md:min-h-screen' : 'h-full'}
        `}>

            <main className='w-full h-full relative'>
                {sidebarVisible && <Sidebar sidebarVisible={sidebarVisible} setSidebarVisible={setSidebarVisible} />}
                <Header sidebarVisible={sidebarVisible} setSidebarVisible={setSidebarVisible} location={location} setLocation={setLocation} />

                <Route path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/projects" component={Projects} />
                <Route path="/achievements" component={Achievements} />
                <Route path="/адриан-енев" component={CyrilicName} />
                <Route path="/dihh" component={DihhDictionary} />
            </main>
        </div>
    )
}

export default App;