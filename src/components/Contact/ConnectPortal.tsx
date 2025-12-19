import { motion } from "framer-motion";
import { Mail, Github, Instagram, Send, Loader2, AlertCircle, CheckCircle } from "lucide-react";
import { useState } from "react";

// Types for props
interface ConnectPortalProps {
    onSubmit: (e: React.FormEvent) => Promise<void>;
    setName: (val: string) => void;
    setCompany: (val: string) => void;
    setEmail: (val: string) => void;
    setMessage: (val: string) => void;
    setWebsite: (val: string) => void; // Honeypot
    name: string;
    company: string;
    email: string;
    message: string;
    website: string;
    loading: boolean;
    bannerType: 'success' | 'error' | 'info';
    bannerMsg: string;
}

const ConnectPortal = ({
    onSubmit, setName, setCompany, setEmail, setMessage, setWebsite,
    name, company, email, message, website, loading, bannerType, bannerMsg
}: ConnectPortalProps) => {

    const [activeField, setActiveField] = useState<string | null>(null);

    return (
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

            {/* LEFT: Holographic Business Card */}
            <div className="flex flex-col items-center lg:items-start perspective-1000">
                <motion.div
                    className="relative w-full max-w-md aspect-[1.58/1] rounded-3xl overflow-hidden glass group"
                    initial={{ rotateX: 0, rotateY: 0 }}
                    whileHover={{ rotateX: 5, rotateY: 5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {/* Card Background / Glare */}
                    {/* Card Background / Glare */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-surface)]/80 to-[var(--color-surface)]/20 backdrop-blur-md border border-[var(--color-text-main)]/10 z-0 dark:block hidden"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-electric)]/10 via-transparent to-[var(--color-cyan-glow)]/10 z-0 opacity-50 group-hover:opacity-100 transition-opacity duration-500 dark:block hidden"></div>

                    {/* Light Mode Specific Background - Clean Solid */}
                    <div className="absolute inset-0 bg-white border border-slate-200 z-0 hidden dark:hidden group-[.light]:block"></div>
                    {/* Note: Tailwind v4 might not support group-[.light], relying on standard dark variant negation or root CSS for glass class is safer. 
                       Actually, since I updated .glass class in index.css to be solid in light mode, I might not need this if the .glass class is on the parent. 
                       The parent (line 36) has 'glass'. 
                       The inner divs (43, 44) provide the "glare". I should hide them in light mode so the solid .glass style prevails.
                    */}

                    {/* Content Layer */}
                    <div className="relative z-10 w-full h-full p-8 flex flex-col justify-between">
                        <div>
                            <div className="flex justify-between items-start mb-6">
                                <span className="px-3 py-1 rounded-full border border-[var(--color-electric)]/30 text-[var(--color-electric)] text-xs font-mono uppercase tracking-widest bg-[var(--color-electric)]/5">
                                    Identity Card
                                </span>
                                <div className="w-8 h-8 rounded-full border-2 border-[var(--color-cyan-glow)] animate-pulse shadow-[0_0_10px_var(--color-cyan-glow)]"></div>
                            </div>
                            <h2 className="text-3xl font-bold text-[var(--color-text-main)] mb-1">Adrian Enev</h2>
                            <p className="text-[var(--color-text-dim)] font-mono text-sm">Full Stack Engineer</p>
                        </div>

                        {/* Social Links Grid */}
                        <div className="grid grid-cols-3 gap-4">
                            <a href="mailto:enevbuis@gmail.com" className="flex flex-col items-center justify-center p-3 rounded-xl bg-[var(--color-text-main)]/5 hover:bg-[var(--color-electric)]/20 transition-colors border border-transparent hover:border-[var(--color-electric)]/50 group/link">
                                <Mail size={24} className="mb-2 text-[var(--color-text-dim)] group-hover/link:text-[var(--color-electric)] transition-colors" />
                                <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--color-text-dim)]">Email</span>
                            </a>
                            <a href="https://github.com/AdrianEnev" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-3 rounded-xl bg-[var(--color-text-main)]/5 hover:bg-[var(--color-text-main)]/20 transition-colors border border-transparent hover:border-[var(--color-text-main)]/50 group/link">
                                <Github size={24} className="mb-2 text-[var(--color-text-dim)] group-hover/link:text-[var(--color-text-main)] transition-colors" />
                                <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--color-text-dim)]">GitHub</span>
                            </a>
                            <a href="https://www.instagram.com/adrianenev/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-3 rounded-xl bg-[var(--color-text-main)]/5 hover:bg-pink-500/20 transition-colors border border-transparent hover:border-pink-500/50 group/link">
                                <Instagram size={24} className="mb-2 text-[var(--color-text-dim)] group-hover/link:text-pink-500 transition-colors" />
                                <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--color-text-dim)]">Insta</span>
                            </a>
                        </div>
                    </div>
                </motion.div>

                <p className="mt-8 text-center lg:text-left text-[var(--color-text-dim)] max-w-sm">
                    Initiating a connection sequence? Use the encrypted channel on the right or access the direct links above.
                </p>
            </div>

            {/* RIGHT: Transmission Form */}
            <div className="relative">
                {/* Form Decoration */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--color-electric)]/10 rounded-full blur-3xl -z-10"></div>

                <form onSubmit={onSubmit} className="flex flex-col gap-6">
                    {/* Status Banner */}
                    {bannerMsg && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className={`p-4 rounded-xl border flex items-center gap-3 ${bannerType === 'success' ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-500' :
                                bannerType === 'error' ? 'bg-red-500/10 border-red-500/30 text-red-500' :
                                    'bg-blue-500/10 border-blue-500/30 text-blue-500'
                                }`}
                        >
                            {bannerType === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                            <span className="text-sm font-medium">{bannerMsg}</span>
                        </motion.div>
                    )}

                    <div className="grid grid-cols-2 gap-6">
                        <div className="relative group">
                            <label className={`absolute left-4 transition-all duration-200 pointer-events-none ${activeField === 'name' || name ? 'top-2 text-[10px] text-[var(--color-electric)]' : 'top-4 text-sm text-[var(--color-text-dim)]'}`}>
                                Your Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                onFocus={() => setActiveField('name')}
                                onBlur={() => setActiveField(null)}
                                required
                                className="w-full bg-[var(--color-surface)] border border-[var(--color-text-main)]/10 rounded-xl px-4 pt-7 pb-3 outline-none focus:border-[var(--color-electric)] transition-colors text-[var(--color-text-main)]"
                            />
                        </div>
                        <div className="relative group">
                            <label className={`absolute left-4 transition-all duration-200 pointer-events-none ${activeField === 'company' || company ? 'top-2 text-[10px] text-[var(--color-electric)]' : 'top-4 text-sm text-[var(--color-text-dim)]'}`}>
                                Company (Optional)
                            </label>
                            <input
                                type="text"
                                name="company"
                                value={company}
                                onChange={e => setCompany(e.target.value)}
                                onFocus={() => setActiveField('company')}
                                onBlur={() => setActiveField(null)}
                                className="w-full bg-[var(--color-surface)] border border-[var(--color-text-main)]/10 rounded-xl px-4 pt-7 pb-3 outline-none focus:border-[var(--color-electric)] transition-colors text-[var(--color-text-main)]"
                            />
                        </div>
                    </div>

                    <div className="relative group">
                        <label className={`absolute left-4 transition-all duration-200 pointer-events-none ${activeField === 'email' || email ? 'top-2 text-[10px] text-[var(--color-electric)]' : 'top-4 text-sm text-[var(--color-text-dim)]'}`}>
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            onFocus={() => setActiveField('email')}
                            onBlur={() => setActiveField(null)}
                            required
                            className="w-full bg-[var(--color-surface)] border border-[var(--color-text-main)]/10 rounded-xl px-4 pt-7 pb-3 outline-none focus:border-[var(--color-electric)] transition-colors text-[var(--color-text-main)]"
                        />
                    </div>

                    {/* Honeypot */}
                    <input
                        type="text"
                        name="website"
                        value={website}
                        onChange={e => setWebsite(e.target.value)}
                        className="hidden"
                        tabIndex={-1}
                        autoComplete="off"
                    />

                    <div className="relative group">
                        <label className={`absolute left-4 transition-all duration-200 pointer-events-none ${activeField === 'message' || message ? 'top-2 text-[10px] text-[var(--color-electric)]' : 'top-4 text-sm text-[var(--color-text-dim)]'}`}>
                            What's on your mind?
                        </label>
                        <textarea
                            name="message"
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            onFocus={() => setActiveField('message')}
                            onBlur={() => setActiveField(null)}
                            required
                            rows={5}
                            className="w-full bg-[var(--color-surface)] border border-[var(--color-text-main)]/10 rounded-xl px-4 pt-7 pb-3 outline-none focus:border-[var(--color-electric)] transition-colors text-[var(--color-text-main)] resize-none"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full btn btn-primary h-14 rounded-xl flex items-center justify-center gap-2 group relative overflow-hidden"
                    >
                        {loading ? (
                            <>
                                <Loader2 className="animate-spin" size={20} />
                                <span>Sending...</span>
                            </>
                        ) : (
                            <>
                                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                <span>Send Message</span>
                            </>
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ConnectPortal;
