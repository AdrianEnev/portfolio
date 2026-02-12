import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FingerprintJS from "@fingerprintjs/fingerprintjs";
import ConnectPortal from "../components/Contact/ConnectPortal";

function Contact() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [message, setMessage] = useState('');
    const [website, setWebsite] = useState(''); // honeypot
    const [loading, setLoading] = useState(false);
    const [_error, setError] = useState<string | null>(null);
    const [visitorId, setVisitorId] = useState<string | null>(null);
    const [bannerMsg, setBannerMsg] = useState<string>('');
    const [bannerType, setBannerType] = useState<'success' | 'error' | 'info'>('info');

    // Load FingerprintJS and get a visitorId
    useEffect(() => {
        (async () => {
            try {
                const fp = await FingerprintJS.load();
                const result = await fp.get();
                setVisitorId(result.visitorId);
            } catch (e) {
                console.warn('FingerprintJS failed; proceeding without strict rate limit');
            }
        })();
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Helper: get today's key for rate limit bucket
    const getBucketKey = (vid: string) => {
        const d = new Date();
        const day = `${d.getUTCFullYear()}-${(d.getUTCMonth() + 1).toString().padStart(2, '0')}-${d.getUTCDate().toString().padStart(2, '0')}`;
        return `contact_rl:${vid}:${day}`;
    };

    // Helper: check + increment rate limit (3/day). Returns {allowed:boolean, remaining:number}
    const checkAndIncrementRateLimit = (vid: string) => {
        try {
            const key = getBucketKey(vid);
            const count = Number(localStorage.getItem(key) || '0');
            if (count >= 3) {
                return { allowed: false, remaining: 0 };
            }
            localStorage.setItem(key, String(count + 1));
            return { allowed: true, remaining: 3 - (count + 1) };
        } catch {
            // If storage fails, do not block
            return { allowed: true, remaining: -1 };
        }
    };

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (loading) return;
        setLoading(true);
        setError(null);
        setBannerMsg('');

        // Rate limit gate (client-side best-effort)
        if (visitorId) {
            const { allowed } = checkAndIncrementRateLimit(visitorId);
            if (!allowed) {
                setBannerType('error');
                setBannerMsg('You have reached today\'s limit of 3 messages. Please try again tomorrow.');
                setLoading(false);
                return;
            }
        }

        try {
            const res = await fetch('/.netlify/functions/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, company, email, message, website, visitorId }),
            });
            const data = await res.json().catch(() => ({}));
            if (!res.ok || data?.error) {
                throw new Error(data?.error || 'Failed to send');
            }
            setName('');
            setCompany('');
            setEmail('');
            setMessage('');
            setWebsite('');
            setBannerType('success');
            setBannerMsg('Message sent successfully! I\'ll get back to you as soon as possible.');
        } catch (err: any) {
            console.error(err);
            setError(err?.message || 'Something went wrong');
            setBannerType('error');
            setBannerMsg('Sorry, there was a problem sending your message. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative w-full min-h-screen pt-40 pb-12 overflow-x-hidden">
            {/* Background Atmosphere */}
            <div className="fixed top-[10%] inset-x-0 mx-auto w-[600px] h-[600px] bg-[var(--color-electric)]/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen pointer-events-none z-0 opacity-60 dark:opacity-40" />

            <div className="max-w-6xl mx-auto px-6 3xs:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-[var(--color-text-main)] mb-4">
                        Say Hello!
                    </h1>
                    <p className="text-lg md:text-xl text-[var(--color-text-dim)] max-w-2xl mx-auto">
                        Got a project in mind, a question, or just want to chat? Drop me a message below and let's make something cool together.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <ConnectPortal
                        onSubmit={onSubmit}
                        setName={setName}
                        setCompany={setCompany}
                        setEmail={setEmail}
                        setMessage={setMessage}
                        setWebsite={setWebsite}
                        name={name}
                        company={company}
                        email={email}
                        message={message}
                        website={website}
                        loading={loading}
                        bannerType={bannerType}
                        bannerMsg={bannerMsg}
                    />
                </motion.div>
            </div>
        </div>
    )
}

export default Contact;