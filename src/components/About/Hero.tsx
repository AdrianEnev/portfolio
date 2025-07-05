const Hero = ({ setLocation }: any) => (
    <div className="flex flex-col gap-y-6 md:max-w-[45%]">
        <p className="text-xl md:text-2xl lg:text-3xl font-bold text-white">Get to Know Me 🙋‍♂️</p>
        <p className="sm:text-sm md:text-base lg:text-lg xl:text-xl">I'm a high school student passionate about full stack app development. I love building things that are both beautiful and useful, from backend APIs to interactive UIs</p>
        <p className="sm:text-sm md:text-base lg:text-lg xl:text-xl">I've worked primarily with technologies like TypeScript, React, Node.js, and FirebaseDB, but I'm always experimenting with new tools and frameworks. I enjoy both front-end design and back-end logic, and I’m constantly learning to improve my craft.</p>
        <p className="sm:text-sm md:text-base lg:text-lg xl:text-xl">
            My biggest project so far is <span className="font-bold text-yellow-300 shadow-md px-1 underline underline-offset-2 hover:opacity-70" onClick={() => window.open('https://apps.apple.com/bg/app/lunge/id6739221997?platform=iphone')}>Lunge</span>, a fitness tracker built with <span className="font-bold text-green-300 shadow-md px-1">React</span>, <span className="font-bold text-pink-300 shadow-md px-1">Node.js</span> and <span className="font-bold text-fuchsia-300 shadow-md px-1">Firebase</span>. I’ve also worked on other smaller projects, which have helped me dive deeper into <span className="italic">authentication</span>, <span className="italic">responsive design</span>, <span className="italic">working with APIs</span>, etc. In addition to coding, I’ve taken part in multiple regional and national olympiads during school years. I’ve earned notable achievements in English & IT competitions which I believe have taught me a fair share of discipline and critical thinking. <span className="font-bold text-orange-300 shadow-lg px-1 hover:opacity-70 underline underline-offset-2" onClick={() => setLocation('/achievements')}>Achievements</span>
        </p>
        
        <div className="flex flex-row gap-x-6 w-full h-full">
            <button className="min-w-[30%] w-1/2 md:w-auto px-2 h-auto py-[6px] basic-button"
                onClick={() => setLocation('/contact')}
            >
                <p className="text-center sm:text-sm lg:text-base xl:text-lg font-medium text-black">Contact Me</p>
            </button>
            <button className="min-w-[30%] w-1/2 md:w-auto px-2 h-auto py-[6px] basic-button"
                onClick={() => setLocation('/projects')}
            >
                <p className="text-center sm:text-sm lg:text-base xl:text-lg font-medium text-black">Projects</p>
            </button>
        </div>
    </div>
)

export default Hero;