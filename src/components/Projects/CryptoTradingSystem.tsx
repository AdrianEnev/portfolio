import { motion } from "framer-motion"
import { useState, useRef, useEffect } from "react";

function CryptoTradingSystem({refSeventhProject, seventhProjectVisible}: any) {
    const [showFullDescription, setShowFullDescription] = useState(false);
    const descriptionRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    // Handle smooth scrolling when content expands
    useEffect(() => {
        if (showFullDescription && contentRef.current) {
            // Small timeout to allow the content to render before scrolling
            const timer = setTimeout(() => {
                const element = contentRef.current;
                if (element) {
                    const yOffset = -30; // 30 pixels up from the element
                    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }
            }, 120);
            return () => clearTimeout(timer);
        }
    }, [showFullDescription]);

    return (
        <motion.div className="flex flex-col md:flex-row md:justify-between"
            ref={refSeventhProject}
            initial={{ opacity: 0, y: 30 }}
            animate={seventhProjectVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <div className="flex flex-col gap-y-3 md:max-w-1/2" ref={descriptionRef}>
                <p className="text-3xl font-semibold">Advanced Cryptocurrency Trading System</p>

                <div className="flex flex-col gap-y-3 text-lg" ref={contentRef}>
                    <p>I've developed a sophisticated, enterprise-grade cryptocurrency trading platform that combines traditional technical analysis with cutting-edge machine learning to deliver intelligent, adaptive trading strategies. This system represents over 3,000 lines of production-ready Python code and implements a comprehensive trading infrastructure that rivals professional trading firms.</p>
                    
                    <p>The core architecture consists of three main layers: a data layer that aggregates market data from multiple sources including CoinGecko, CCXT exchanges, and on-chain metrics; a strategy layer featuring technical analysis strategies like mean reversion, momentum, and breakout patterns enhanced with ML-powered parameter optimization; and an execution layer with smart order routing, TWAP/VWAP algorithms, and comprehensive risk management.</p>
                    
                    {!showFullDescription ? (
                        <button 
                            className="text-[#1E1B4B] px-2 py-1 rounded-md hover:opacity-80 transition duration-200" 
                            onClick={() => setShowFullDescription(true)}
                        >
                            <p>See more...</p>
                        </button>
                    ) : (
                        <>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: 'easeOut' }}
                            >
                                <p>What makes this system unique is its integration of multiple advanced features including insider tracking capabilities that monitor successful traders' wallets to identify emerging opportunities, dynamic meme coin discovery that automatically finds and configures new trading opportunities, and a robust risk management system with 10-category risk assessment, automated kill switches, and real-time exposure tracking.</p>
                                
                                <p>The platform also includes enterprise-grade ML infrastructure with feature engineering pipelines, automated model training and deployment, hyperparameter optimization using Bayesian methods, and comprehensive model monitoring with drift detection. The system supports both paper trading and live trading modes, with comprehensive backtesting capabilities including walk-forward validation, Monte Carlo stress testing, and crisis simulation.</p>
                                
                                <p>It features advanced order management with state machines, retry logic, circuit breakers, and reconciliation systems. The platform also includes social media sentiment analysis integration, LLM-powered market analysis, and comprehensive observability with real-time dashboards, audit trails, and compliance monitoring for GDPR, CCPA, and AI Act frameworks.</p>
                                
                                <p>Future improvements I'm planning include expanding the ML model portfolio with deep learning architectures for pattern recognition, implementing cross-exchange arbitrage strategies, adding more sophisticated portfolio optimization algorithms, and developing a web-based dashboard for remote monitoring and control. The modular architecture makes it easy to add new strategies, data sources, and execution venues as the cryptocurrency market continues to evolve.</p>
                            </motion.div>
                            <button 
                                className="text-[#1E1B4B] px-2 py-1 rounded-md hover:opacity-80 transition duration-200" 
                                onClick={() => {
                                    setShowFullDescription(false);
                                    descriptionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }}
                            >
                                <p>See less...</p>
                            </button>
                        </>
                    )}
                </div>
            </div>

            <button 
                className="project-button mt-3 md:mt-0"
                style={{ alignSelf: 'stretch' }}
                onClick={() => window.open('https://github.com/AdrianEnev/Crypto-Tracker')}
            >
                <p className="text-5xl font-semibold text-orange-500">Crypto</p>
                <p className="text-3xl font-semibold text-orange-400">Trading System</p>
            </button>
        </motion.div>
    );
}

export default CryptoTradingSystem;
