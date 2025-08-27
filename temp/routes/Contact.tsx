import { useEffect, useRef, useState } from "react";
import { useLocation } from "wouter";
import { motion, type Variants } from "framer-motion";
import { useIntersectionObserver } from "../use/io/useIntersectionObserver";
import ContactForm from "../../temp/components/Contact/ContactForm";
import Hero from "../../temp/components/Contact/Hero";
import FingerprintJS from "@fingerprintjs/fingerprintjs";

function Contact() {

    const [_location, setLocation] = useLocation();
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

    const refSecondProject = useRef<HTMLDivElement | null>(null);
    const [secondProjectVisible, setSecondProjectVisible] = useState(false);

    useIntersectionObserver(
        refSecondProject,
        () => setSecondProjectVisible(true),
        { root: null, rootMargin: "0px 0px -100px 0px", threshold: 0 }
    );

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

    // Helper: get today's key for rate limit bucket
    const getBucketKey = (vid: string) => {
        const d = new Date();
        const day = `${d.getUTCFullYear()}-${(d.getUTCMonth()+1).toString().padStart(2,'0')}-${d.getUTCDate().toString().padStart(2,'0')}`;
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

    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        // Prevents scroll distance from previous page being applied
        window.scrollTo(0, 0);
    }, []);

    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
    };

    return (
        <motion.div className="w-screen min-h-screen md:px-[8%] pt-[30%] md:pt-[10%] text-[#1E1B4B]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className="w-[84%] md:w-full">
                <p className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-semibold text-[#1E1B4B] text-center">Contact Me</p>
                <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium text-[#1E1B4B]/70 text-center mt-3">Find my links below</p>
            </div>
            
            <div className="mt-[8%] md:mt-[5%] w-[85%] md:w-full flex flex-col md:flex-row gap-x-[10%]">
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="w-full"
                >
                    <Hero setLocation={setLocation} />
                </motion.div>

                <motion.div className="w-full h-auto mb-10 md:mb-0"
                    ref={refSecondProject}
                    initial={{ opacity: 0, y: 30 }}
                    animate={secondProjectVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    <p className="text-xl md:text-2xl lg:text-3xl font-bold">Send me a message</p>
                    
                    <ContactForm
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
        </motion.div>
    )
}

export default Contact