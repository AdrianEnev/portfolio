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

//bg-[url('/assets/background_peach_waves.svg')] bg-no-repeat bg-center bg-cover

function App() {

    const [location, _setLocation] = useLocation();
    const [sidebarVisible, setSidebarVisible] = useState(false)

    return (
        <div className={`w-screen min-h-screen bg-[url("/assets/background_blue_peaks.svg")] bg-repeat bg-center bg-cover
            ${location !== '/achievements' ? 'md:overflow-hidden' : ''}
            ${
                location === '/about' ? 'pb-[75%] md:pb-0' : 
                location === '/projects' ? 'pb-[335%] md:pb-0' : 
                location === '/contact' ? 'pb-[40%] md:pb-0' : 
                location === '/achievements' ? 'pb-[5%] md:pb-0' : 
                ''
            }
        `}>
            
            <main className='w-full h-full pt-4 px-6 3xs:px-8 '>
                {sidebarVisible && <Sidebar sidebarVisible={sidebarVisible} setSidebarVisible={setSidebarVisible}/>}
                <Header sidebarVisible={sidebarVisible} setSidebarVisible={setSidebarVisible}/>

                <Route path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/projects" component={Projects} />
                <Route path="/achievements" component={Achievements} />
            </main>
        </div>
    )
}

export default App