import { motion } from "framer-motion";

function KentAcademy({ refSixthProject, sixthProjectVisible }: any) {
    return (
        <motion.div
            className="flex flex-col md:flex-row md:justify-between"
            ref={refSixthProject}
            initial={{ opacity: 0, y: 30 }}
            animate={sixthProjectVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="flex flex-col gap-y-3 md:max-w-1/2">
                <p className="text-3xl font-semibold">Kent Academy</p>

                <div className="flex flex-col gap-y-3 text-lg">
                    <p>Kent Academy is the first website I fully built, sold, and continue to maintain myself. It started as a straightforward, production-grade project and has grown into a small but complete platform serving real users and administrators.</p>

                    <p>The site provides a simple structure: a main page, an about page, a contact page, authentication, an admin panel, and a posts section where visitors can view updates published by admins. Admins also have access to an analytics page for high-level insights.</p>

                    <p>Posts have a view count tracked via FingerprintJS-based device identification to better reflect unique engagement. Users with accounts can opt in to receive an email whenever a new post is published by an admin. Email delivery is powered by Amazon SES for reliability and scalability.</p>
                    <p>The system is deployed using a multi-surface approach: the server is hosted on Fly.io, while the frontend is deployed on Netlify for fast global delivery. Together, these services provide a smooth CI/CD flow and solid uptime characteristics for a lean stack.</p>
                </div>
            </div>

            <button
                className="project-button mt-3 md:mt-0"
                style={{ alignSelf: "stretch" }}
                onClick={() => window.open('https://kentfa.netlify.app')}
            >
                <p className="text-5xl font-semibold text-emerald-500">Kent Academy</p>
                <p className="text-3xl font-semibold text-emerald-400">Football Club</p>
            </button>
        </motion.div>
    );
}

export default KentAcademy;
