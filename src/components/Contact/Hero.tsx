import { motion, type Variants } from "framer-motion";
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

const Hero = ({setLocation}: any) => {
    const cards = [
        { label: 'Email', action: () => window.open('mailto:enevbuis@gmail.com'), color: '#2563eb', hint: 'enevbuis@gmail.com' },
        { label: 'Instagram', action: () => window.open('https://www.instagram.com/adrianenev/'), color: '#db2777', hint: '@adrianenev' },
        { label: 'GitHub', action: () => window.open('https://github.com/AdrianEnev'), color: '#111827', hint: 'github.com/AdrianEnev' },
    ];

    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <div className="flex flex-col gap-y-6 md:max-w-[95%]">
            <p className="text-xl md:text-2xl lg:text-3xl font-bold">What I'm looking for</p>
            <p className="sm:text-sm md:text-base lg:text-lg xl:text-xl">Hi! I'm a high school student with a strong interest in software development. I'm looking for <span className="highlight-text highlight-text-blue font-semibold">internships</span> or <span className="highlight-text highlight-text-pink font-semibold">small projects</span> where I can <span className="highlight-text highlight-text-indigo font-semibold">learn, grow, and contribute</span>.</p>
            <p className="sm:text-sm md:text-base lg:text-lg xl:text-xl">If you're <span className="highlight-text highlight-text-blue font-semibold">hiring interns</span>, <span className="highlight-text highlight-text-pink font-semibold">collaborating on tech projects</span>, or just open to <span className="highlight-text highlight-text-emerald font-semibold">connecting</span>, I'd love to hear from you.</p>
            <p className="sm:text-sm md:text-base lg:text-lg xl:text-xl">Prefer <span className="highlight-text highlight-text-rose font-semibold">socials</span>? Pick a card below, or use the form.</p>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-2 md:gap-3">
                {cards.map((c) => (
                    <motion.button
                        key={c.label}
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.2 }}
                        onClick={c.action}
                        className="basic-box p-3 md:p-4 text-left group card-tight min-h-24"
                    >
                        <div className="flex items-center justify-between">
                            <p className="text-sm md:text-base font-semibold">{c.label}</p>
                            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: c.color }} />
                        </div>
                        <p className="mt-2 text-[12px] md:text-sm opacity-70 group-hover:opacity-100 transition">{c.hint}</p>
                        <span className="inline-block mt-3 text-[12px] md:text-sm text-[#6a9be6] group-hover:underline">Open →</span>
                    </motion.button>
                ))}
            </div>

            <div className="flex flex-row gap-x-3 w-full mt-2 mb-6 md:mb-0 md:mt-4">
                <AxisTiltButton className="btn btn-secondary btn-lg btn-pop-shadow min-w-[20%] w-[49%] md:w-auto" onClick={() => setLocation('/projects')}>
                    <p className="text-center sm:text-sm lg:text-base xl:text-lg font-medium">Projects</p>
                </AxisTiltButton>
                <AxisTiltButton className="btn btn-secondary btn-lg btn-pop-shadow btn-about min-w-[20%] w-[49%] md:w-auto" onClick={() => setLocation('/about')}>
                    <p className="text-center sm:text-sm lg:text-base xl:text-lg font-medium">About</p>
                </AxisTiltButton>
            </div>
        </div>
    );
}

export default Hero;