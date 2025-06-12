import './App.css'
import './services/i18next';
import { Route } from "wouter";
import Home from './routes/Home';
import About from './routes/About';
import Header from './components/Header/Header';
import Projects from './routes/Projects';
import Contact from './routes/Contact';

//bg-[url('/assets/background_peach_waves.svg')] bg-no-repeat bg-center bg-cover

function App() {
    return (
        <div className="w-screen h-screen">
            <main className='w-full h-full pt-4 px-6 3xs:px-8'>
                <Header />

                <Route path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/projects" component={Projects} />
            </main>
        </div>
    )
}

export default App