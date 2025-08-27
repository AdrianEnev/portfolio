import './App.css'
import { Route } from "wouter";
import Home from './routes/Home';
//import { useEffect, useState } from 'react';

function App() {

    //const [location, setLocation] = useLocation();

    return (
        <div className={`w-screen`}>
            <main className='w-full h-full'>
                <Route path="/" component={Home} />
            </main>
        </div>
    )
}

export default App;