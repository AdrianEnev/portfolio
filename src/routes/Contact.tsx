import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { useForm, ValidationError } from '@formspree/react';

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
        <div className="w-screen h-screen px-[8%] pt-[4%]">

            <div>
                <p className="text-7xl font-medium text-center">Contact Me!</p>
                <p className="text-3xl font-medium text-gray-500 text-center mt-3">Find my links below 🔗</p>
            </div>
            
            <div className="mt-[5%] w-full flex flex-row gap-x-[10%]">
                <div className="flex flex-col gap-y-6 max-w-[45%]">
                    <p className="text-3xl font-bold">What I’m Looking For 💡</p>
                    <p className="text-xl">
                        Hi! I'm a high school student with a strong interest in software development. I'm currently looking for internship opportunities or small projects where I can learn, grow, and make meaningful contributions.
                    </p>
                    <p className="text-xl">If you're hiring interns, collaborating on tech projects, or just open to connecting, I'd love to hear from you!</p>
                    <p className="text-xl">📬 You can use the form below to get in touch—or reach out via the social buttons if you prefer.</p>
                    <p className="text-xl">🔍 Curious about my work? Feel free to check out my GitHub or explore the <span onClick={() => {setLocation('/projects')}} className="font-bold text-blue-500 hover:opacity-60">Projects</span> section of this website.                    </p>
                
                    <div className="flex flex-row gap-x-3 w-full mt-8">
                        <button className="w-[30%] h-12 basic-button"
                            onClick={() => window.open('mailto:enevbuis@gmail.com')}
                        >
                            <p className="text-center text-lg font-medium">Email</p>
                        </button>
                        <button className="w-[30%] h-12 basic-button"
                            onClick={() => window.open('https://www.instagram.com/adrianenev/')}
                        >
                            <p className="text-center text-lg font-medium">Instagram</p>
                        </button>
                        <button className="w-[30%] h-12 basic-button"
                            onClick={() => window.open('https://github.com/AdrianEnev')}
                        >
                            <p className="text-center text-lg font-medium">Github</p>
                        </button>
                    </div>
                </div>

                <div className="w-full h-auto">
                    <p className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">Send Me a Message 💬</p>
                    
                    <form className="w-full min-h-[92%] mt-3 bg-white shadow-md border border-gray-300 rounded-xl px-[10%] py-[10%]"
                        onSubmit={onSubmit}
                    >
                        <div className="flex flex-row gap-x-3">
                            <input id="name" name="name" type="text" placeholder="Your Name" maxLength={20} required onChange={(e) => setName(e.target.value)} value={name}
                                className="w-[50%] h-14 px-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            />
                            <ValidationError 
                                prefix="Name" 
                                field="name"
                                errors={formState.errors}
                            />
                            <input id="company" name="company" type="text" placeholder="Company (optional)" maxLength={20} onChange={(e) => setCompany(e.target.value)} value={company}
                                className="w-[50%] h-14 px-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            />
                            <ValidationError 
                                prefix="Company" 
                                field="company"
                                errors={formState.errors}
                            />
                        </div>

                        <div className="flex flex-col gap-y-6 mt-6">
                            <input id="email" name="email" type="email" placeholder="Email" maxLength={50} required onChange={(e) => setEmail(e.target.value)} value={email}
                                className="w-full h-14 px-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            />
                            <ValidationError 
                                prefix="Email" 
                                field="email"
                                errors={formState.errors}
                            />
                            <textarea id="message" name="message" placeholder="Message" maxLength={1000} required onChange={(e) => setMessage(e.target.value)} value={message}
                                className="w-full h-24 px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            />
                            <ValidationError 
                                prefix="Message" 
                                field="message"
                                errors={formState.errors}
                            />

                            <button className="w-full h-14 !bg-blue-500 !text-white basic-button" type="submit">
                                <p className="text-center text-lg font-medium">Send Message</p>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact