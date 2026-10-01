import { Clock3, Mail, ShieldCheck, Wrench } from "lucide-react";

function Maintenance() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-[#f7faf7] text-[#111827]">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,24,39,0.06)_1px,transparent_1px),linear-gradient(rgba(17,24,39,0.06)_1px,transparent_1px)] bg-[size:44px_44px]" />
            <div className="absolute inset-x-0 top-0 h-2 bg-[linear-gradient(90deg,#0891b2,#f97316,#65a30d,#4f46e5)]" />

            <main className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-16 sm:px-8">
                <div className="max-w-3xl">
                    <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#111827]/10 bg-white/85 px-4 py-2 text-sm font-semibold text-[#0f766e] shadow-sm backdrop-blur">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#f97316] shadow-[0_0_0_6px_rgba(249,115,22,0.16)]" />
                        Maintenance mode
                    </div>

                    <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#111827] text-white shadow-xl shadow-[#111827]/20">
                        <Wrench className="h-8 w-8" aria-hidden="true" />
                    </div>

                    <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-normal text-[#111827] sm:text-5xl md:text-6xl">
                        Portfolio updates in progress.
                    </h1>

                    <p className="mt-6 max-w-2xl text-lg leading-8 text-[#374151] sm:text-xl">
                        I am making a few improvements behind the scenes. The site is temporarily unavailable and will be back shortly.
                    </p>
                </div>

                <div className="mt-10 grid max-w-4xl gap-4 md:grid-cols-3">
                    <div className="rounded-lg border border-[#111827]/10 bg-white/90 p-5 shadow-sm backdrop-blur">
                        <ShieldCheck className="mb-4 h-6 w-6 text-[#0f766e]" aria-hidden="true" />
                        <h2 className="text-base font-bold text-[#111827]">Content protected</h2>
                        <p className="mt-2 text-sm leading-6 text-[#4b5563]">Existing project pages are offline while maintenance is active.</p>
                    </div>

                    <div className="rounded-lg border border-[#111827]/10 bg-white/90 p-5 shadow-sm backdrop-blur">
                        <Clock3 className="mb-4 h-6 w-6 text-[#c2410c]" aria-hidden="true" />
                        <h2 className="text-base font-bold text-[#111827]">Back soon</h2>
                        <p className="mt-2 text-sm leading-6 text-[#4b5563]">The public portfolio will reopen after the current update window.</p>
                    </div>

                    <div className="rounded-lg border border-[#111827]/10 bg-white/90 p-5 shadow-sm backdrop-blur">
                        <Mail className="mb-4 h-6 w-6 text-[#4338ca]" aria-hidden="true" />
                        <h2 className="text-base font-bold text-[#111827]">Reach me</h2>
                        <p className="mt-2 text-sm leading-6 text-[#4b5563]">Urgent messages can still go directly to my inbox.</p>
                    </div>
                </div>

                <a
                    href="mailto:enevbuis@gmail.com"
                    className="mt-10 inline-flex w-fit items-center gap-3 rounded-lg bg-[#111827] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#111827]/20 transition hover:bg-[#243047] focus:outline-none focus:ring-4 focus:ring-[#0891b2]/30"
                >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    Contact Me
                </a>
            </main>
        </section>
    );
}

export default Maintenance;
