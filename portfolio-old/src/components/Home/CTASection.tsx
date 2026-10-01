import { motion } from "framer-motion";

const CTASection = ({ setLocation }: { setLocation: any }) => {
    return (
        <div className="w-full py-32 px-6 flex justify-center text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl"
            >
                <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-text-main)] via-[var(--color-cyan-glow)] to-[var(--color-electric)] mb-6">
                    Have something ambitious in mind?
                </h2>
                <p className="text-[var(--color-text-dim)] text-xl mb-10">
                    Whether it is a client product, a technical system, or a market idea that needs structure, I can help turn the signal into something real.
                </p>

                <button
                    onClick={() => setLocation("/contact")}
                    className="btn btn-primary px-10 py-4 text-xl rounded-full shadow-[0_0_30px_rgba(99,102,241,0.3)] hover:shadow-[0_0_50px_rgba(6,182,212,0.5)] transition-shadow duration-500"
                >
                    Let's Talk
                </button>
            </motion.div>
        </div>
    );
};

export default CTASection;
