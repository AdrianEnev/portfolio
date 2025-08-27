import React from 'react';

const cards = [
  { label: 'Email', hint: 'enevbuis@gmail.com', color: '#2563eb', action: () => window.open('mailto:enevbuis@gmail.com') },
  { label: 'Instagram', hint: '@adrianenev', color: '#db2777', action: () => window.open('https://www.instagram.com/adrianenev/') },
  { label: 'GitHub', hint: 'github.com/AdrianEnev', color: '#111827', action: () => window.open('https://github.com/AdrianEnev') },
];

const Contact: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl md:text-3xl font-semibold">Contact Me</h2>
        <p className="text-white/70">What I'm looking for</p>
        <p className="text-white/85">
          Hi! I'm a high school student with a strong interest in software development. I'm looking for internships or small projects where I can learn, grow, and contribute.
        </p>
        <p className="text-white/80">Prefer socials? Pick a card below, or use the form.</p>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-3">
        {cards.map((c) => (
          <button
            key={c.label}
            onClick={c.action}
            className="p-4 rounded-lg border border-white/10 bg-white/5 text-left group"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm md:text-base font-semibold">{c.label}</p>
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: c.color }} />
            </div>
            <p className="mt-2 text-xs md:text-sm opacity-70 group-hover:opacity-100 transition">{c.hint}</p>
            <span className="inline-block mt-3 text-xs md:text-sm text-sky-300 group-hover:underline">Open →</span>
          </button>
        ))}
      </div>

      <div className="space-y-3">
        <p className="text-xl md:text-2xl font-bold">Send me a message</p>
        <form
          className="w-full rounded-xl border border-white/10 bg-white/5 p-4 md:p-6 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            // Placeholder only; real sending handled later
            alert('Thanks! Message sending will be enabled soon.');
          }}
        >
          <div className="flex gap-3 flex-col md:flex-row">
            <input
              name="name"
              placeholder="Your Name"
              maxLength={20}
              required
              className="w-full md:w-1/2 h-11 px-3 rounded-lg border border-white/15 bg-white/10 placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-sky-400"
            />
            <input
              name="company"
              placeholder="Company (optional)"
              maxLength={20}
              className="w-full md:w-1/2 h-11 px-3 rounded-lg border border-white/15 bg-white/10 placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-sky-400"
            />
          </div>
          <input
            name="email"
            type="email"
            placeholder="Email"
            maxLength={50}
            required
            className="w-full h-11 px-3 rounded-lg border border-white/15 bg-white/10 placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-sky-400"
          />
          <textarea
            name="message"
            placeholder="Message"
            maxLength={1000}
            required
            className="w-full min-h-24 px-3 py-3 rounded-lg border border-white/15 bg-white/10 placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-sky-400"
          />
          <button
            type="submit"
            className="w-full h-11 rounded-lg bg-sky-600 hover:bg-sky-500 transition text-white font-medium"
          >
            Send Message
          </button>
          <p className="text-xs text-white/60">Temporary UI only. Validation, rate limiting, and backend sending will be wired next.</p>
        </form>
      </div>
    </div>
  );
};

export default Contact;
