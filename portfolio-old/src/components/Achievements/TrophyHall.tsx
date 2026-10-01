import { motion } from "framer-motion";
import { Trophy, Medal, Star, ExternalLink } from "lucide-react";

interface AchievementLink {
    label: string;
    url?: string;
    action?: () => void;
    colorClass: string; // e.g., "text-indigo-400"
}

interface YearData {
    year: string;
    achievements: string[];
    links: AchievementLink[];
    color: string; // Hex for glow
    status?: string;
}

const trophyData: YearData[] = [
    {
        year: "2026",
        color: "#22d3ee", // Cyan
        status: "In progress",
        achievements: [
            "• Graduated high school and continued my education at Nikola Vaptsarov Naval Academy, Varna.",
            "• Continuing to develop production web applications and client projects while strengthening my engineering fundamentals.",
            "• Developing quantitative trading algorithms and automated market analysis systems designed to pursue systematic, repeatable profitability."
        ],
        links: []
    },
    {
        year: "2025",
        color: "#fb7185", // Rose
        achievements: [
            "• 1st Place, Regional Round of the National Olympiad in Information Technologies (IT) – Category: Distributed Applications.",
            "• Top 10, National Autumn IT (Information Technology) Tournament “John Atanasoff”, Sofia – Category: Distributed Applications.",
            "• Certificate of Excellent Performance and Medal, 25th Student Section of the High School Student Institute of Mathematics and Informatics (HSSI). (Equivalent to first place, though awarded to multiple top participants)",
            "• 1st Place, Regional Round of the National English Language Olympiad",
            "• Cambridge English: C1 Advanced Exam - 203 points; Result - C2 (Grade A)",
            "• Sold my first ever website — delivered end-to-end from requirements gathering to deployment",
            "• Attended summer programming camp after winning 1st place at HSSMI - HSSMI Summer Research School"
        ],
        links: [
            { label: "Kangaroo Global Linguistics", url: "https://www.kglcontest.org/", colorClass: "text-indigo-400" },
            { label: "National IT olympiad", url: "https://edusoft.fmi.uni-sofia.bg/", colorClass: "text-green-400" },
            { label: "National English olympiad", url: "", colorClass: "text-orange-400" },
            { label: "High School Student Institute of Math and IT", url: "https://www.math.bas.bg/omi/hssimi/?lang=en", colorClass: "text-yellow-400" },
            { label: "Cambridge English", url: "https://www.cambridgeenglish.org/exams-and-tests/advanced/", colorClass: "text-fuchsia-400" },
            { label: "Website", url: "https://fckentacademy.com", colorClass: "text-rose-400" }
        ]
    },
    {
        year: "2024",
        color: "#fbbf24", // Amber
        achievements: [
            "• 2nd Place, Regional Round of the National English Language Olympiad",
            "• 8th Place, National Round of the KGL contest (level B2, contest 2024) + certificate of achievement",
            "• 92.5% overall score in Stage 1 (regional round) of the 2024 KGL contest, level B2",
            "• Built on my earlier programming experience by creating more advanced projects, further strengthening my problem-solving and software development skills."
        ],
        links: [
            { label: "Kangaroo Global Linguistics", url: "https://www.kglcontest.org/", colorClass: "text-indigo-400" },
            { label: "National English olympiad", url: "", colorClass: "text-orange-400" }
        ]
    },
    {
        year: "2023",
        color: "#818cf8", // Indigo
        achievements: [
            "• 3rd Place, Regional Round of the National English Language Olympiad",
            "• 97.5% overall score in Stage 1 (regional round) of the 2023 KGL contest, level B1",
            "• Completed multiple programming side projects that strengthened my technical foundation and prepared me for future software development work"
        ],
        links: [
            { label: "Kangaroo Global Linguistics", url: "https://www.kglcontest.org/", colorClass: "text-indigo-400" }
        ]
    },
    {
        year: "2022",
        color: "#2dd4bf", // Teal
        achievements: [
            "• 10th place, National Round of the KGL contest (level B1, contest 2022) + certificate of achievement",
            "• 92.5% overall score in Stage 1 (regional round) of the 2022 KGL contest, level B1",
            "• 1st place in the 2022 school literary translation competition",
            "• Telerik School Academy certificate, Game Development, 2022"
        ],
        links: [
            { label: "Kangaroo Global Linguistics", url: "https://www.kglcontest.org/", colorClass: "text-indigo-400" },
            { label: "Telerik School Academy", url: "https://www.telerikacademy.com/", colorClass: "text-red-400" }
        ]
    }
];

const TrophyCard = ({ data, index }: { data: YearData; index: number }) => {
    const isInProgress = Boolean(data.status);

    return (
        <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="w-full relative pl-8 md:pl-0"
        >
            {/* Timeline Node (Mobile Only) */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[var(--color-text-dim)]/20 md:hidden"></div>
            <div className={`absolute left-[-5px] top-6 w-3 h-3 rounded-full md:hidden`} style={{ backgroundColor: data.color }}></div>

            <div className="relative group">
                <div
                    className="absolute -inset-0.5 rounded-3xl opacity-20 group-hover:opacity-60 transition duration-500 blur-lg"
                    style={{ backgroundColor: data.color }}
                ></div>

                <div className="relative glass p-6 md:p-10 rounded-3xl border border-[var(--color-text-main)]/10">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                        <div className="flex items-center gap-4">
                            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter" style={{ color: data.color, textShadow: `0 0 20px ${data.color}40` }}>
                                {data.year}
                            </h2>
                            <div className="p-2 rounded-full bg-[var(--color-surface)]/50 border border-[var(--color-text-main)]/5">
                                {isInProgress ? <Star size={24} className="text-cyan-400" /> :
                                    index === 1 ? <Trophy size={24} className="text-[var(--color-electric)]" /> :
                                    index === 2 ? <Medal size={24} className="text-amber-400" /> :
                                        <Star size={24} className="text-[var(--color-text-dim)]" />}
                            </div>
                        </div>
                        {data.status && (
                            <motion.div
                                className="w-max rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-cyan-500"
                            >
                                {data.status}
                            </motion.div>
                        )}
                    </div>

                    {/* Achievements List */}
                    <ul className="space-y-4 mb-8">
                        {data.achievements.map((item, i) => (
                            <li key={i} className="text-[var(--color-text-dim)] text-sm md:text-base leading-relaxed pl-4 border-l-2 border-[var(--color-text-main)]/5 hover:border-[var(--color-electric)] transition-colors">
                                {item}
                            </li>
                        ))}
                    </ul>

                    {/* Links / Badges */}
                    {data.links.length > 0 && (
                        <div className="flex flex-wrap gap-2 md:gap-3">
                            {data.links.map((link, i) => (
                                <button
                                    key={i}
                                    onClick={() => link.action ? link.action() : link.url && window.open(link.url, '_blank')}
                                    className={`px-3 py-1.5 rounded-lg bg-[var(--color-surface)] border border-[var(--color-text-main)]/10 hover:border-[var(--color-text-main)]/30 ${!link.url && !link.action ? 'cursor-default' : ''}
                                              transition-all flex items-center gap-2 text-xs md:text-sm font-medium group/btn ${link.colorClass}`}
                                >
                                    {link.label}
                                    {link.url && <ExternalLink size={12} className="opacity-50 group-hover/btn:opacity-100" />}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

const TrophyHall = () => {
    return (
        <div className="flex flex-col gap-12 md:gap-20">
            {trophyData.map((year, index) => (
                <TrophyCard key={year.year} data={year} index={index} />
            ))}
        </div>
    );
};

export default TrophyHall;
