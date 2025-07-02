import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { useForm, ValidationError } from '@formspree/react';
import { motion } from "framer-motion";

function Contact() {

    const [_location, setLocation] = useLocation();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [message, setMessage] = useState('');
    const [formState, onSubmit] = useForm(import.meta.env.VITE_FORMSPREE_URL);

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

    return (
        <motion.div className="w-screen h-screen px-[8%] pt-[4%] text-gray-100"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            
            <div className="w-[84%] md:w-full">
                <p className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-medium text-center text-white">Contact Me</p>
                <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium text-gray-100 text-center mt-3">Find my Links Below 🔗</p>
            </div>
            
            <div className="mt-[8%] md:mt-[5%] w-[80%] md:w-full flex flex-col md:flex-row gap-x-[10%]">
                <div className="flex flex-col gap-y-6 md:max-w-[45%]">
                    <p className="text-xl md:text-2xl lg:text-3xl font-bold">What I'm Looking For 💡</p>
                    <p className="sm:text-sm md:text-base lg:text-lg xl:text-xl">Hi! I'm a high school student with a strong interest in software development. I'm currently looking for internship opportunities or small projects where I can learn, grow, and make meaningful contributions.</p>
                    <p className="sm:text-sm md:text-base lg:text-lg xl:text-xl">If you're hiring interns, collaborating on tech projects, or just open to connecting, I'd love to hear from you!</p>
                    <p className="sm:text-sm md:text-base lg:text-lg xl:text-xl">📬 You can use the form below to get in touch—or reach out via the social buttons if you prefer.</p>
                    <p className="sm:text-sm md:text-base lg:text-lg xl:text-xl">
                        🔍 Curious about my work? Feel free to check out my GitHub or explore the <span onClick={() => {setLocation('/projects')}} className="text-orange-300 shadow-md px-1 font-bold hover:opacity-60">Projects</span> section of this website.
                    </p>
                
                    <div className="flex flex-row gap-x-3 w-full mt-[6px] md:mt-8 mb-[12%] md:mb-0">
                        <button className="min-w-[20%] w-[30%] md:w-auto px-2 h-auto py-[6px] basic-button"
                            onClick={() => window.open('mailto:enevbuis@gmail.com')}
                        >
                            <p className="text-center sm:text-sm lg:text-base xl:text-lg font-medium text-black">Email</p>
                        </button>
                        <button className="min-w-[20%] w-[33%] md:w-auto px-2 h-auto py-[6px] basic-button"
                            onClick={() => window.open('https://www.instagram.com/adrianenev/')}
                        >
                            <p className="text-center sm:text-sm lg:text-base xl:text-lg font-medium text-black">Instagram</p>
                        </button>
                        <button className="min-w-[20%] w-[30%] md:w-auto px-2 h-auto py-[6px] basic-button"
                            onClick={() => window.open('https://github.com/AdrianEnev')}
                        >
                            <p className="text-center sm:text-sm lg:text-base xl:text-lg font-medium text-black">Github</p>
                        </button> 
                    </div>
                </div>

                <div className="w-full h-auto mb-10 md:mb-0">
                    <p className="text-xl md:text-2xl lg:text-3xl font-bold">Send Me a Message 💬</p>
                    
                    <form className="w-full min-h-[92%] mt-3 bg-white shadow-md border border-gray-300 rounded-xl px-[10%] py-[10%]"
                        onSubmit={onSubmit}
                    >
                        <div className="flex flex-row gap-x-3">
                            <input id="name" name="name" type="text" placeholder={'Your Name'} maxLength={20} required onChange={(e) => setName(e.target.value)} value={name}
                                className="w-[50%] h-14 px-3 text-black border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            />
                            <ValidationError 
                                prefix="Name" 
                                field="name"
                                errors={formState.errors}
                            />
                            <input id="company" name="company" type="text" placeholder={'Company (optional)'} maxLength={20} onChange={(e) => setCompany(e.target.value)} value={company}
                                className="w-[50%] h-14 px-3 text-black border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            />
                            <ValidationError 
                                prefix="Company" 
                                field="company"
                                errors={formState.errors}
                            />
                        </div>

                        <div className="flex flex-col gap-y-6 mt-6">
                            <input id="email" name="email" type="email" placeholder={'Email'} maxLength={50} required onChange={(e) => setEmail(e.target.value)} value={email}
                                className="w-full h-14 px-3 text-black border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            />
                            <ValidationError 
                                prefix="Email" 
                                field="email"
                                errors={formState.errors}
                            />
                            <textarea id="message" name="message" placeholder={'Message'} maxLength={1000} required onChange={(e) => setMessage(e.target.value)} value={message}
                                className="w-full h-24 px-3 text-black py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            />
                            <ValidationError 
                                prefix="Message" 
                                field="message"
                                errors={formState.errors}
                            />

                            <button className="w-full h-14 !bg-blue-500 !text-white basic-button" type="submit">
                                <p className="text-center sm:text-sm lg:text-base xl:text-lg font-medium">Send Message</p>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </motion.div>
    )
}

export default Contact