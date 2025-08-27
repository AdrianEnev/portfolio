import React from 'react';

type Project = {
  title: string;
  subtitle: string;
  color: string;
  summary: string[];
  details?: string[];
  href?: string;
};

const projects: Project[] = [
  {
    title: 'Lunge',
    subtitle: 'Fitness Tracker',
    color: 'text-red-400',
    summary: [
      'My first major project and first published app. A year-long learning journey into full‑stack dev in 2024.',
      'Mobile app for custom workout splits, exercise tracking and stats, goals, nutrition logging, AI plan generation, and social features in 7 languages.',
    ],
    details: [
      'Lunge is the first major project I ever worked on, and while it’s not the cleanest or most polished app out there, it represents a full year of growth in my coding journey throughout 2024. It was my introduction to full stack development and also the first app I’ve ever published. If you\'re curious, feel free to check out the nearly 400 commits on my Lunge GitHub repo — it’s a great look into my learning process and how the project evolved over time. I do plan to revisit Lunge in the future to refine it further, especially the web version, which is still a bit unfinished.',
      'Lunge Mobile is a fitness IOS app that lets you create your own custom workout split, track your exercises, and dive into detailed workout statistics. You can log your food and macronutrient intake, set personalized daily goals based on your lifestyle, and even generate custom workout plans using AI. The app also lets you connect with friends and view their stats, all while supporting up to two accounts per device with any email. It’s available in seven languages—Bulgarian, English, German, French, Italian, Spanish, and Russian—and uses AI to monitor and filter inappropriate usernames or profile pictures.',
      'Lunge Web complements the mobile app by allowing you to view your stats, manage your account settings, and access your friends list directly from your browser.',
    ],
    href: 'https://apps.apple.com/bg/app/lunge/id6739221997?platform=iphone',
  },
  {
    title: 'My Portfolio',
    subtitle: '(This Website)',
    color: 'text-green-400',
    summary: [
      'First standalone website I fully hosted with a domain. A living canvas to document progress, iterate on design, and refine UX/animation craft.',
    ],
    details: [
      'This is the first website I’ve ever properly hosted and bought a domain for. Before this, I had only built a basic web app for Lunge, but never a full website from start to finish.',
      'I built this portfolio as a way to track and share my personal growth as a developer — not just the final results, but the learning process behind each project. It’s meant to be a space where I can reflect on how far I’ve come, document what I’m currently working on, and keep a public record of my evolving skills over time. I hope it also gives others a transparent look into the ups and downs of learning to build real software, from early experiments to more polished work.',
      'I’m constantly updating the site as I learn new technologies, design patterns, and animation techniques — treating it as both a portfolio and a canvas. My goal is to eventually shape it into one of those beautifully crafted, highly interactive sites with smooth, fluid animations and a sharp, modern aesthetic — the kind of experience that’s as inspiring to explore as it is to build.',
    ],
  },
  {
    title: 'Adrian Cuts',
    subtitle: 'Barbershop',
    color: 'text-blue-400',
    summary: [
      'A quick barbershop website to sharpen frontend and design fundamentals—layout, responsiveness, and clean UI structure.',
    ],
    details: [
      '“Adrian Cuts” is a simple barbershop website I built to sharpen my frontend and design skills. The original idea was to create a clean, well-designed site that would help me improve visually — skills I could then apply to my own portfolio. Along the way, I thought about turning it into my first freelance project by selling it to a close friend. That didn’t quite work out, so I gave it its current (admittedly funny) name and decided to keep it as part of my personal learning journey.',
      'I built the project in just a week or two, but it ended up teaching me a lot about how to structure a website properly — from layout and responsiveness to how design decisions affect user experience. It was a quick build, but it really helped solidify the basics of creating clean, maintainable frontend code and gave me more confidence in turning ideas into real, presentable websites.',
    ],
    href: 'https://booking.lunge.run',
  },
  {
    title: 'Livepair',
    subtitle: 'Broadcasting',
    color: 'text-yellow-300',
    summary: [
      'A simple code‑livestreaming web app. An exploration of Node.js, MongoDB, Express, and Next.js beyond my earlier Firebase stack.',
    ],
    details: [
      'After spending over a year working with the same tech stack — mostly plain React and TypeScript with Firebase for authentication and data storage — I wanted to step out of my comfort zone. Livepair gave me the perfect opportunity to do that. It was my first real experience using Node.js and MongoDB, and only my second time working with Express, which I had briefly experimented with near the end of Lunge’s development.',
      'Livepair is a simple web app for livestreaming code. It’s far from a full-fledged platform like Twitch — and that was never the goal. Instead, I saw it as a chance to try out Next.js in a more practical setting and get a feel for building a full-stack app from scratch without relying on Firebase. The project focuses on simplicity: users can share their coding sessions in real time through a basic broadcast interface. While the core functionality is minimal, it was a valuable learning experience in backend development, real-time streaming concepts, and getting comfortable with a completely new tech stack.',
      'Currently, the project isn’t public on GitHub because I want to spend some more time refining and polishing it before sharing it with others. I plan to revisit the code when I have the time to clean things up, improve structure, and maybe add some additional features to make it more complete and easier to understand.',
    ],
  },
  {
    title: 'InfraLock',
    subtitle: 'Threat Analysis',
    color: 'text-indigo-300',
    summary: [
      'Geolocation IP intelligence service. Frontend in Next.js, TS Node API, and a Rust microservice with an optimized radix tree for fast IP lookups and threat scoring.',
    ],
    details: [
      'InfraLock is a geolocation service that provides detailed IP address intelligence. This project holds special significance as it marks my first collaborative development experience, where I contributed to approximately 95% of the codebase while working alongside another developer. The project originated during a research camp at the Bulgarian High School of Mathematics and Informatics, where I had the privilege of being mentored by Prof. Zlatogor Minchev, whose guidance was instrumental in shaping the project\'s technical direction.',
      'The service is architected as a modular, API-first solution that can be seamlessly integrated into various applications. The frontend, built with Next.js, offers an intuitive interface for users to perform IP lookups and view comprehensive geolocation data. The backend API, developed in TypeScript with Node.js, handles request routing, authentication, and data transformation between the frontend and the core Rust service.',
      'The Rust-based microservice performs the heavy lifting with its optimized radix tree implementation for lightning-fast IP lookups, consistently delivering results in just 0.02 to 0.05 seconds during local testing. The service aggregates and processes data from various sources, including lists of known VPNs, datacenters, proxies, and TOR nodes. It analyzes this data alongside other intelligence to calculate a comprehensive threat score from 0 to 100 for each IP address.',
      'Looking ahead, we plan to enhance the system\'s threat detection capabilities by integrating advanced user behavior monitoring and browser fingerprinting techniques. These additions will provide deeper insights into potential security risks by analyzing patterns of interaction and device characteristics, enabling even more accurate threat assessment. The system is designed with scalability in mind, featuring background data updates, intelligent caching, and real-time threat analysis. Its service-oriented architecture allows it to be easily integrated into other web applications or services, making it a versatile solution for security applications, user analytics, and any platform requiring IP intelligence capabilities.',
    ],
    href: 'https://github.com/AdrianEnev/InfraLock',
  },
];

const ProjectCard: React.FC<Project> = ({ title, subtitle, color, summary, details, href }) => {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <div className="p-4 rounded-lg border border-white/10 bg-white/5">
      <div className="flex items-baseline justify-between gap-2 flex-wrap">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className={`text-sm font-semibold ${color}`}>{subtitle}</p>
      </div>
      <div className="mt-2 space-y-2 text-white/85">
        {summary.map((s, i) => (
          <p key={i}>{s}</p>
        ))}
        {expanded && details?.length ? (
          <div className="mt-2 space-y-2">
            {details.map((d, i) => (
              <p key={i}>{d}</p>
            ))}
          </div>
        ) : null}
      </div>
      <div className="mt-3 flex items-center gap-4">
        {details?.length ? (
          <button
            className="text-sm text-sky-300 hover:underline"
            onClick={() => setExpanded((e) => !e)}
          >
            {expanded ? 'See less…' : 'See more…'}
          </button>
        ) : null}
        {href ? (
          <button
            className="text-sm text-sky-300 hover:underline"
            onClick={() => window.open(href, '_blank')}
          >
            Open →
          </button>
        ) : null}
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h2 className="text-2xl md:text-3xl font-semibold">My Coding Journey</h2>
        <p className="text-white/70">A selection of projects from 2022–2025.</p>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
