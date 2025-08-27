import './App.css'
import { Route } from "wouter";
import Home from './routes/Home';
import { TabsProvider } from './context/TabsProvider';
//import { useEffect, useState } from 'react';

function App() {

    //const [location, setLocation] = useLocation();

    return (
        <div className={`w-screen`}>
            <main className='w-full h-full'>
                <TabsProvider>
                    <Route path="/" component={Home} />
                </TabsProvider>
            </main>
        </div>
    )
}

export default App;