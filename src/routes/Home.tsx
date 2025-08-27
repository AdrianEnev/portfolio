import { useLocation } from "wouter";
import Headshot from "../components/Home/Headshot";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

function Home() {
    
    const [_location, setLocation] = useLocation();

    // Local 3D tilt wrapper for hero buttons
    const Button3DTilt: React.FC<{
        className?: string;
        onClick?: () => void;
        children: React.ReactNode;
        tiltMax?: number;
    }> = ({ className = '', onClick, children, tiltMax = 10 }) => {
        const ref = useRef<HTMLButtonElement | null>(null);
        const [tilt, setTilt] = useState({ x: 0, y: 0 });

        const onMove: React.MouseEventHandler<HTMLButtonElement> = (e) => {
            const el = ref.current;
            if (!el) return;
            const rect = el.getBoundingClientRect();
            const px = (e.clientX - rect.left) / rect.width;  // 0..1
            const py = (e.clientY - rect.top) / rect.height; // 0..1
            const nx = px * 2 - 1; // -1..1
            const ny = py * 2 - 1; // -1..1
            // Tilt toward cursor: rotateY by x, rotateX inverse by y
            setTilt({ x: -(ny * tiltMax), y: nx * tiltMax });
        };

        const onLeave = () => setTilt({ x: 0, y: 0 });

        return (
            <motion.button
                ref={ref}
                onMouseMove={onMove}
                onMouseLeave={onLeave}
                onClick={onClick}
                whileHover={{ scale: 1.06, y: -4 }}
                whileTap={{ scale: 0.98, y: 0 }}
                animate={{ rotateX: tilt.x, rotateY: tilt.y }}
                transition={{ type: 'spring', stiffness: 600, damping: 20, mass: 0.55 }}
                style={{ transformPerspective: 700, willChange: 'transform' }}
                className={className}
            >
                {children}
            </motion.button>
        );
    };

    return (
        <motion.div className='w-screen h-screen pt-[30%] md:pt-[6%] px-[5%] ml-[-8%] md:ml-0 md:px-[8%] overflow-y-hidden'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="w-full h-[80%] md:h-[83%] flex flex-col md:flex-row md:justify-between items-center">

                <div className="w-full h-full flex flex-col justify-center gap-y-6 text-[#1E1B4B]">
                    <div className='md:max-w-[70%]'>
                        <p className=
                            'text-2xl md:text-3xl lg:text-5xl xl:text-7xl text-center md:text-start'
                        >
                            Hi, my name is <span className="font-bold">Adrian</span>!
                        </p>
                        
                        <p className=
                            'text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl mt-4 text-center md:text-start'
                        >
                           I'm a student passionate about full-stack development. I love building things that solve real world problems and learning by doing.
                        </p>
                    </div> 

                    <div className="flex flex-row gap-x-3 w-full h-[10%] mt-3 pl-[15%] md:pl-0">
                        <Button3DTilt
                            className="btn btn-primary btn-lg btn-about btn-pop-shadow md:w-44 md:h-12 w-32 h-10"
                            onClick={() => setLocation("/about")}
                        >
                            About
                        </Button3DTilt>
                         
                        <Button3DTilt
                            className="btn btn-secondary btn-lg btn-pop-shadow md:w-44 md:h-12 w-32 h-10"
                            onClick={() => setLocation("/projects")}
                        >
                            Projects
                        </Button3DTilt>
                    </div>
                </div>
            
                <Headshot setLocation={setLocation}/>
            </div>
        </motion.div>
    )
}

export default Home;


/* */