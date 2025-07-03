import { ValidationError } from "@formspree/react";

const ContactForm = ({onSubmit, formState, setName, setCompany, setEmail, setMessage, name, company, email, message}: any) => (
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
)

export default ContactForm;