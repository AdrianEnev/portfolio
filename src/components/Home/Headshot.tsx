const Headshot = ({setLocation}: any) => {
    return (
        <div className='flex flex-col w-[85%] h-[85%] max-w-64 min-w-48 md:max-w-full md:w-[65%] md:h-[65%] mt-[10%] md:mt-[-5%]'>
            <div className='w-full h-auto bg-white shadow-lg border border-gray-200 rounded-xl'>
                <picture>
                    <source
                        type="image/avif"
                        srcSet="/.netlify/images?url=/assets/headshot_smile.JPG&w=320&fit=cover&fm=avif 320w, /.netlify/images?url=/assets/headshot_smile.JPG&w=640&fit=cover&fm=avif 640w, /.netlify/images?url=/assets/headshot_smile.JPG&w=960&fit=cover&fm=avif 960w, /.netlify/images?url=/assets/headshot_smile.JPG&w=1280&fit=cover&fm=avif 1280w"
                        sizes="(max-width: 640px) 85vw, (max-width: 1024px) 65vw, 512px"
                    />
                    <source
                        type="image/webp"
                        srcSet="/.netlify/images?url=/assets/headshot_smile.JPG&w=320&fit=cover&fm=webp 320w, /.netlify/images?url=/assets/headshot_smile.JPG&w=640&fit=cover&fm=webp 640w, /.netlify/images?url=/assets/headshot_smile.JPG&w=960&fit=cover&fm=webp 960w, /.netlify/images?url=/assets/headshot_smile.JPG&w=1280&fit=cover&fm=webp 1280w"
                        sizes="(max-width: 640px) 85vw, (max-width: 1024px) 65vw, 512px"
                    />
                    <img 
                        src="/.netlify/images?url=/assets/headshot_smile.JPG&w=960&fit=cover&fm=jpg"
                        srcSet="/.netlify/images?url=/assets/headshot_smile.JPG&w=320&fit=cover&fm=jpg 320w, /.netlify/images?url=/assets/headshot_smile.JPG&w=640&fit=cover&fm=jpg 640w, /.netlify/images?url=/assets/headshot_smile.JPG&w=960&fit=cover&fm=jpg 960w, /.netlify/images?url=/assets/headshot_smile.JPG&w=1280&fit=cover&fm=jpg 1280w"
                        sizes="(max-width: 640px) 85vw, (max-width: 1024px) 65vw, 512px"
                        alt="Portrait of me (Adrian Enev)"
                        className="w-full h-auto rounded-xl object-cover block"
                        loading="eager"
                        decoding="async"
                        fetchPriority="high"
                    />
                </picture>
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