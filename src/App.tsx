import './App.css'
import { Link, Route, Switch } from "wouter";
import Home from './routes/Home';
import About from './routes/About';
import Header from './components/Header';

function App() {
    return (
        <div className="bg-[url('/src/assets/background_peach_waves.svg')] bg-no-repeat bg-center bg-cover w-full h-full">
            <Header />

            <main className='w-full h-full pt-4 px-8'>
                <Route path="/" component={Home} />
                <Route path="/about" component={About} />
            </main>
        </div>
    )
}

export default App