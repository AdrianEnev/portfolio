import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import TabBar from "../components/home/TabBar";
import CommandLine from "../components/home/CommandLine";

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
        <div className="w-full min-h-screen flex flex-col">
            <TabBar />
            <div className="flex-1" />
            <div className="p-2 mt-auto">
                <CommandLine currentPath="~/About" />
            </div>
        </div>
    )
}

export default Home;