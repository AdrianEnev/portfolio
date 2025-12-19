const Headshot = () => {
    return (
        <div className='relative group w-[280px] h-[280px] md:w-[400px] md:h-[400px] mt-8 md:mt-0 perspective-1000'>
            {/* Gradient Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-electric)] to-[var(--color-cyan-glow)] rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-tilt"></div>

            {/* Image Container */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[var(--color-surface)] border border-[var(--color-text-main)]/10 ring-1 ring-[var(--color-text-main)]/5 transform transition duration-500 hover:scale-[1.01]">
                <img
                    src="/assets/headshot_smile.JPG"
                    alt="Portrait of Adrian Enev"
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition duration-500 scale-105 group-hover:scale-110"
                    loading="eager"
                />

                {/* Overlay gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-midnight)] via-transparent to-transparent opacity-40"></div>
            </div>

            {/* Floating Badge (Optional decoration) */}
            <div className="absolute -bottom-6 -right-6 glass px-4 py-2 rounded-xl text-sm font-semibold text-[var(--color-text-main)] animate-float shadow-xl hidden md:block">
                Full Stack Dev 🚀
            </div>
        </div>
    )
}

export default Headshot;