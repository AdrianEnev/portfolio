import { useEffect, useRef, useState } from "react";
import { useLocation } from "wouter";
import { useForm } from '@formspree/react';
import { motion } from "framer-motion";
import { useIntersectionObserver } from "../use/io/useIntersectionObserver";
import ContactForm from "../components/Contact/ContactForm";
import Hero from "../components/Contact/Hero";

function Contact() {

    const [_location, setLocation] = useLocation();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [message, setMessage] = useState('');
    const [formState, onSubmit] = useForm(import.meta.env.VITE_FORMSPREE_URL);

    const refSecondProject = useRef<HTMLDivElement | null>(null);
    const [secondProjectVisible, setSecondProjectVisible] = useState(false);

    useIntersectionObserver(
        refSecondProject,
        () => setSecondProjectVisible(true),
        { root: null, rootMargin: "0px 0px -100px 0px", threshold: 0 }
    );

    useEffect(() => {
        if (!formState.succeeded) {
            return
        }

        setName('');
        setCompany('');
        setEmail('');
        setMessage('');
        alert('Form submitted successfully! I will get back to you as soon as possible.');
    }, [formState])

    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        // Prevents scroll distance from previous page being applied
        window.scrollTo(0, 0);
    }, []);

    return (
        <motion.div className="w-screen min-h-screen px-[8%] pt-[5%] text-gray-100"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            
            <div className="w-[84%] md:w-full">
                <p className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-medium text-center text-white">Contact Me</p>
                <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium text-gray-100 text-center mt-3">Find my Links Below 🔗</p>
            </div>
            
            <div className="mt-[8%] md:mt-[5%] w-[80%] md:w-full flex flex-col md:flex-row gap-x-[10%]">
                <Hero setLocation={setLocation} />

                <motion.div className="w-full h-auto mb-10 md:mb-0"
                    ref={refSecondProject}
                    initial={{ opacity: 0, y: 30 }}
                    animate={secondProjectVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <p className="text-xl md:text-2xl lg:text-3xl font-bold">Send Me a Message 💬</p>
                    
                    <ContactForm
                        onSubmit={onSubmit}
                        formState={formState}
                        setName={setName}
                        setCompany={setCompany}
                        setEmail={setEmail}
                        setMessage={setMessage}
                        name={name}
                        company={company}
                        email={email}
                        message={message}
                    />
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Contact