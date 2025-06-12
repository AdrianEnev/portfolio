import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { useForm, ValidationError } from '@formspree/react';
import { Trans, useTranslation } from "react-i18next";

function Contact() {

    const [_location, setLocation] = useLocation();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [message, setMessage] = useState('');
    const [formState, onSubmit] = useForm(import.meta.env.VITE_FORMSPREE_URL);
    const {t} = useTranslation();

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
            
            <div className="w-[84%] md:w-full">
                <p className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-medium text-center">{t('contact-me')}!</p>
                <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium text-gray-500 text-center mt-3">{t('contact-me-title-description')} 🔗</p>
            </div>
            
            <div className="mt-[8%] md:mt-[5%] w-[80%] md:w-full flex flex-col md:flex-row gap-x-[10%]">
                <div className="flex flex-col gap-y-6 md:max-w-[45%]">
                    <p className="text-xl md:text-2xl lg:text-3xl font-bold">{t('contact-me-title-looking-for')} 💡</p>
                    <p className="sm:text-sm md:text-base lg:text-lg xl:text-xl">{t('contact-me-description')}</p>
                    <p className="sm:text-sm md:text-base lg:text-lg xl:text-xl">{t('contact-me-description2')}</p>
                    <p className="sm:text-sm md:text-base lg:text-lg xl:text-xl">📬 {t('contact-me-description3')}</p>
                    <p className="sm:text-sm md:text-base lg:text-lg xl:text-xl">
                        🔍 
                        <Trans
                            i18nKey="contact-me-description4"
                            components={{
                                projects: <span onClick={() => {setLocation('/projects')}} className="font-bold text-blue-500 hover:opacity-60">Projects</span>
                            }}
                        />
                    </p>
                
                    <div className="flex flex-row gap-x-3 w-full mt-[6px] md:mt-8 mb-[12%] md:mb-0">
                        <button className="min-w-[20%] w-[30%] md:w-auto px-2 h-auto py-[6px] basic-button"
                            onClick={() => window.open('mailto:enevbuis@gmail.com')}
                        >
                            <p className="text-center sm:text-sm lg:text-base xl:text-lg font-medium">Email</p>
                        </button>
                        <button className="min-w-[20%] w-[33%] md:w-auto px-2 h-auto py-[6px] basic-button"
                            onClick={() => window.open('https://www.instagram.com/adrianenev/')}
                        >
                            <p className="text-center sm:text-sm lg:text-base xl:text-lg font-medium">Instagram</p>
                        </button>
                        <button className="min-w-[20%] w-[30%] md:w-auto px-2 h-auto py-[6px] basic-button"
                            onClick={() => window.open('https://github.com/AdrianEnev')}
                        >
                            <p className="text-center sm:text-sm lg:text-base xl:text-lg font-medium">Github</p>
                        </button>
                    </div>
                </div>

                <div className="w-full h-auto mb-10 md:mb-0">
                    <p className="text-xl md:text-2xl lg:text-3xl font-bold">{t('contact-me-title-send-message')} 💬</p>
                    
                    <form className="w-full min-h-[92%] mt-3 bg-white shadow-md border border-gray-300 rounded-xl px-[10%] py-[10%]"
                        onSubmit={onSubmit}
                    >
                        <div className="flex flex-row gap-x-3">
                            <input id="name" name="name" type="text" placeholder={t('contact-me-form-name')} maxLength={20} required onChange={(e) => setName(e.target.value)} value={name}
                                className="w-[50%] h-14 px-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            />
                            <ValidationError 
                                prefix="Name" 
                                field="name"
                                errors={formState.errors}
                            />
                            <input id="company" name="company" type="text" placeholder={t('contact-me-form-company')} maxLength={20} onChange={(e) => setCompany(e.target.value)} value={company}
                                className="w-[50%] h-14 px-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            />
                            <ValidationError 
                                prefix="Company" 
                                field="company"
                                errors={formState.errors}
                            />
                        </div>

                        <div className="flex flex-col gap-y-6 mt-6">
                            <input id="email" name="email" type="email" placeholder={t('contact-me-form-email')} maxLength={50} required onChange={(e) => setEmail(e.target.value)} value={email}
                                className="w-full h-14 px-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            />
                            <ValidationError 
                                prefix="Email" 
                                field="email"
                                errors={formState.errors}
                            />
                            <textarea id="message" name="message" placeholder={t('contact-me-form-message')} maxLength={1000} required onChange={(e) => setMessage(e.target.value)} value={message}
                                className="w-full h-24 px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            />
                            <ValidationError 
                                prefix="Message" 
                                field="message"
                                errors={formState.errors}
                            />

                            <button className="w-full h-14 !bg-blue-500 !text-white basic-button" type="submit">
                                <p className="text-center sm:text-sm lg:text-base xl:text-lg font-medium">{t('contact-me-button')}</p>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact