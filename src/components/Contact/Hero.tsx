const Hero = ({setLocation}: any) => (
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
)

export default Hero