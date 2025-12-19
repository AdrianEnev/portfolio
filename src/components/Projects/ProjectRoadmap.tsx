import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
    {
        title: "Kent Academy",
        subtitle: "Production Platform for Football Club",
        year: "2025",
        tech: ["React", "TypeScript", "Fly.io", "Netlify"],
        description: [
            "Kent Academy is the first website I fully built, sold, and continue to maintain myself. It started as a straightforward, production-grade project and has grown into a small but complete platform serving real users and administrators.",
            "The site provides a simple structure: a main page, an about page, a contact page, authentication, an admin panel, and a posts section where visitors can view updates published by admins. Admins also have access to an analytics page for high-level insights.",
            "Posts have a view count tracked via FingerprintJS-based device identification to better reflect unique engagement. Users with accounts can opt in to receive an email whenever a new post is published by an admin. Email delivery is powered by Amazon SES for reliability and scalability.",
            "The system is deployed using a multi-surface approach: the server is hosted on Fly.io, while the frontend is deployed on Netlify for fast global delivery. Together, these services provide a smooth CI/CD flow and solid uptime characteristics for a lean stack."
        ],
        link: "https://fckentacademy.com",
        color: "rose"
    },
    {
        title: "Cryptocurrency Trading System",
        subtitle: "ML-Powered Financial Platform",
        year: "2025",
        tech: ["Python", "Machine Learning", "Financial APIs"],
        description: [
            "Enterprise-grade cryptocurrency trading platform combining technical analysis with machine learning. Features insider wallet tracking, dynamic meme coin discovery, ML-powered strategies, and comprehensive risk management with automated kill switches and real-time exposure monitoring."
        ],
        color: "emerald"
    },
    {
        title: "InfraLock",
        subtitle: "High-Performance IP Intelligence",
        year: "2025",
        tech: ["Rust", "Next.js", "TypeScript", "Security"],
        description: [
            "High-performance IP intelligence service with Rust microservice delivering 0.02-0.05s lookups. Features threat scoring, VPN detection, and comprehensive geolocation data.",
            "This project represents a shift towards systems programming and performance optimization, moving beyond standard web development into high-throughput microservices."
        ],
        color: "indigo"
    },
    {
        title: "Livepair",
        subtitle: "Real-time Broadcasting Experiment",
        year: "2024",
        tech: ["Node.js", "MongoDB", "Express", "WebSockets"],
        description: [
            "After spending over a year working with the same tech stack — mostly plain React and TypeScript with Firebase for authentication and data storage — I wanted to step out of my comfort zone. Livepair gave me the perfect opportunity to do that. It was my first real experience using Node.js and MongoDB, and only my second time working with Express.",
            "Livepair is a simple web app for livestreaming code. It’s far from a full-fledged platform like Twitch — and that was never the goal. Instead, I saw it as a chance to try out Next.js in a more practical setting and get a feel for building a full-stack app from scratch without relying on Firebase. The project focuses on simplicity: users can share their coding sessions in real time through a basic broadcast interface.",
            "Currently, the project isn’t public on GitHub because I want to spend some more time refining and polishing it before sharing it with others."
        ],
        color: "yellow"
    },
    {
        title: "My Portfolio",
        subtitle: "The First Standalone Website",
        year: "2024",
        tech: ["React", "Vite", "Framer Motion"],
        description: [
            "This is the first website I’ve ever properly hosted and bought a domain for. Before this, I had only built a basic web app for Lunge, but never a full website from start to finish.",
            "I built this portfolio as a way to track and share my personal growth as a developer — not just the final results, but the learning process behind each project. It’s meant to be a space where I can reflect on how far I’ve come, document what I’m currently working on, and keep a public record of my evolving skills over time.",
            "I’m constantly updating the site as I learn new technologies, design patterns, and animation techniques — treating it as both a portfolio and a canvas."
        ],
        color: "green"
    },
    {
        title: "Adrian Cuts",
        subtitle: "Frontend Design Practice",
        year: "2024",
        tech: ["React", "Tailwind CSS"],
        description: [
            "“Adrian Cuts” is a simple barbershop website I built to sharpen my frontend and design skills. The original idea was to create a clean, well-designed site that would help me improve visually — skills I could then apply to my own portfolio. Along the way, I thought about turning it into my first freelance project by selling it to a close friend.",
            "That didn’t quite work out, so I gave it its current (admittedly funny) name and decided to keep it as part of my personal learning journey. I built the project in just a week or two, but it ended up teaching me a lot about how to structure a website properly — from layout and responsiveness to how design decisions affect user experience."
        ],
        link: "https://github.com/AdrianEnev/booking.git",
        color: "blue"
    },
    {
        title: "Lunge",
        subtitle: "The Start of the Journey",
        year: "2024",
        tech: ["React Native", "Expo", "Firebase", "AI"],
        description: [
            "Lunge is the first major project I ever worked on, and while it's not the cleanest or most polished app out there, it represents a full year of growth in my coding journey throughout 2024. It was my introduction to full stack development and also the first app I've ever published.",
            "Lunge Mobile is a fitness IOS app that lets you create your own custom workout split, track your exercises, and dive into detailed workout statistics. You can log your food and macronutrient intake, set personalized daily goals based on your lifestyle, and even generate custom workout plans using AI. The app also lets you connect with friends and view their stats.",
            " It's available in seven languages—Bulgarian, English, German, French, Italian, Spanish, and Russian—and uses AI to monitor and filter inappropriate usernames or profile pictures."
        ],
        link: "https://github.com/AdrianEnev/Lunge.git",
        color: "red"
    }
];

const ProjectRoadmap = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <div ref={containerRef} className="relative w-full max-w-5xl mx-auto py-20 px-4">
            {/* Central Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-40 bottom-20 w-1 bg-[var(--color-text-dim)]/20 -translate-x-1/2 rounded-full hidden md:block">
                <motion.div
                    style={{ height: lineHeight }}
                    className="w-full bg-gradient-to-b from-[var(--color-cyan-glow)] to-[var(--color-electric)] rounded-full shadow-[0_0_15px_var(--color-electric)]"
                />
            </div>

            <div className="flex flex-col gap-20">
                {projects.map((project, index) => (
                    <div key={index} className={`relative flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                        {/* Timeline Node (Desktop) */}
                        <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[var(--color-surface)] border-4 border-[var(--color-text-main)] z-10 hidden md:flex items-center justify-center">
                            <div className={`w-3 h-3 rounded-full bg-${project.color}-500/80`}></div>
                        </div>

                        {/* Content Card */}
                        <motion.div
                            className="w-full md:w-[calc(50%-40px)]"
                            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className={`glass p-8 rounded-3xl border-t-4 border-${project.color}-500/50 hover:shadow-[0_0_30px_rgba(0,0,0,0.1)] transition-all group`}>
                                <div className="flex flex-col gap-4">
                                    <div>
                                        <div className="flex justify-between items-start mb-2">
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold bg-${project.color}-500/10 text-${project.color}-500 uppercase tracking-widest`}>
                                                {project.year}
                                            </span>
                                            {project.link && (
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-[var(--color-text-dim)] hover:text-[var(--color-electric)] transition-colors"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                                </a>
                                            )}
                                        </div>
                                        <h3 className="text-3xl font-bold text-[var(--color-text-main)] mb-1 group-hover:scale-[1.02] transition-transform origin-left">
                                            {project.title}
                                        </h3>
                                        <p className="text-lg text-[var(--color-text-dim)] font-medium">
                                            {project.subtitle}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-2 text-sm">
                                        {project.tech.map(t => (
                                            <span key={t} className="px-2 py-1 bg-[var(--color-text-main)]/5 rounded-md text-[var(--color-text-dim)]">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="space-y-3 text-[var(--color-text-main)]/80 leading-relaxed">
                                        {project.description.map((para, i) => (
                                            <p key={i}>{para}</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Empty Space for the other side of timeline */}
                        <div className="hidden md:block w-[calc(50%-40px)]"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectRoadmap;
