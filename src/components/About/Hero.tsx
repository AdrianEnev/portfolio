import { motion } from "framer-motion";
import { useRef, useState } from "react";

// Axis-locked 3D tilt button (rotateY only)
const AxisTiltButton = ({ className = '', onClick, children, tiltMax = 8 }: { className?: string; onClick?: () => void; children: React.ReactNode; tiltMax?: number }) => {
    const ref = useRef<HTMLButtonElement | null>(null);
    const [tiltY, setTiltY] = useState(0);

    const onMove: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width; // 0..1
        const nx = px * 2 - 1; // -1..1
        setTiltY(nx * tiltMax);
    };

    const onLeave = () => setTiltY(0);

    return (
        <motion.button
            ref={ref}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            onClick={onClick}
            whileHover={{ scale: 1.06, y: -4 }}
            whileTap={{ scale: 0.98, y: 0 }}
            animate={{ rotateY: tiltY }}
            transition={{ type: 'spring', stiffness: 600, damping: 20, mass: 0.55 }}
            style={{ transformPerspective: 800, willChange: 'transform' }}
            className={className}
        >
            {children}
        </motion.button>
    );
};

const Hero = ({ setLocation }: any) => (
    <div className="flex flex-col gap-y-6 md:max-w-[45%]">
        <p className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1E1B4B]">Get to Know Me 🙋‍♂️</p>
        <p className="sm:text-sm md:text-base lg:text-lg xl:text-xl text-[#1E1B4B]">I design and build end‑to‑end software. I enjoy turning ideas into dependable products — balancing thoughtful user experiences with solid engineering under the hood.</p>
        <p className="sm:text-sm md:text-base lg:text-lg xl:text-xl text-[#1E1B4B]">I build across the stack — from polished websites and responsive apps to backend services that handle real-world complexity. I choose tools based on the problem, learn new stacks quickly, and care deeply about reliability, performance, and thoughtful UX.</p>
        <p className="sm:text-sm md:text-base lg:text-lg xl:text-xl text-[#1E1B4B]">
            In addition to coding, I’ve taken part in multiple regional and national olympiads during school years. I’ve earned notable achievements in English & IT competitions which I believe have taught me a fair share of discipline and critical thinking. <span className="highlight-text highlight-text-violet font-bold hover:opacity-90 cursor-pointer underline underline-offset-2" onClick={() => setLocation('/achievements')}>Achievements</span>
        </p>
        
        <div className="flex flex-row gap-x-6 w-full h-full">
            <AxisTiltButton
                className="btn btn-secondary btn-lg btn-pop-shadow min-w-[30%] w-1/2 md:w-auto"
                onClick={() => setLocation('/contact')}
            >
                <p className="text-center sm:text-sm lg:text-base xl:text-lg font-medium">Contact Me</p>
            </AxisTiltButton>
            <AxisTiltButton
                className="btn btn-secondary btn-lg btn-pop-shadow min-w-[30%] w-1/2 md:w-auto"
                onClick={() => setLocation('/projects')}
            >
                <p className="text-center sm:text-sm lg:text-base xl:text-lg font-medium">Projects</p>
            </AxisTiltButton>
        </div>
    </div>
)

export default Hero