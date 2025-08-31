const Headshot = ({setLocation}: any) => {
    return (
        <div className='flex flex-col w-[85%] h-[85%] max-w-64 min-w-48 md:max-w-full md:w-[65%] md:h-[65%] mt-[10%] md:mt-[-5%]'>
            <div className='w-full h-auto bg-white shadow-lg border border-gray-200 rounded-xl'>
                {/* Use local asset to ensure it loads during local dev */}
                <img 
                    src="/assets/headshot_smile.JPG"
                    alt="Portrait of me (Adrian Enev)"
                    className="w-full h-auto rounded-xl object-cover block"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                />
            </div>

            <div className="md:hidden w-full flex justify-center mt-2 ">
                <button className="w-[65%] md:w-[25%] h-10 md:h-[55%] basic-button"
                    onClick={() => setLocation("/contact")}
                >
                    <p className="text-center sm:text-sm lg:text-base xl:text-lg font-medium">Contact Me</p>
                </button>
            </div>
            
        </div>
    )
}

export default Headshot;