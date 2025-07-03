import './App.css'
import { Route, useLocation } from "wouter";
import Home from './routes/Home';
import About from './routes/About';
import Header from './components/Header/Header';
import Projects from './routes/Projects';
import Contact from './routes/Contact';
import Achievements from './routes/Achievements';
import Sidebar from './components/Sidebar/Sidebar';
import { useEffect, useState } from 'react';

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
        <div className={`w-screen h-full bg-[url("/assets/background_blue_peaks.svg")] bg-repeat bg-center bg-cover
            ${location !== '/achievements' ? 'md:overflow-hidden' : ''}
        `}>
            
            <main className='w-full h-full px-6 3xs:px-8'>
                {sidebarVisible && <Sidebar sidebarVisible={sidebarVisible} setSidebarVisible={setSidebarVisible}/>}
                <Header sidebarVisible={sidebarVisible} setSidebarVisible={setSidebarVisible} location={location} setLocation={setLocation}/>

                <Route path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/projects" component={Projects} />
                <Route path="/achievements" component={Achievements} />
            </main>
        </div>
    )
}

export default App;