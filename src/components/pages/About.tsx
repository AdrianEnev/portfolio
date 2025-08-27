import React from 'react';

const skills = [
  'Typescript', 'HTML', 'CSS', 'Tailwind CSS', 'Node.js', 'Express',
  'Fly.io', 'Next.js', 'React', 'React Native', 'Expo',
  'Firebase DB', 'Firebase Auth', 'MongoDB', 'Git', 'Github',
];

const skillsToLearn = ['Docker', 'Jest', 'AWS', 'Figma'];

const Pill: React.FC<{ title: string }> = ({ title }) => (
  <span className="inline-block text-xs md:text-sm px-2 py-[6px] rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 transition">
    {title}
  </span>
);

const About: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl md:text-3xl font-semibold">Get to Know Me 🙋‍♂️</h2>
        <p className="text-white/85">
          I design and build end‑to‑end software. I enjoy turning ideas into dependable products — balancing thoughtful user experiences with solid engineering under the hood.
        </p>
        <p className="text-white/80">
          I build across the stack — from polished websites and responsive apps to backend services that handle real-world complexity. I choose tools based on the problem, learn new stacks quickly, and care deeply about reliability, performance, and thoughtful UX.
        </p>
        <p className="text-white/80">
          In addition to coding, I’ve taken part in multiple regional and national olympiads during school years. I’ve earned notable achievements in English & IT competitions which taught me discipline and critical thinking. See <span className="font-semibold underline underline-offset-4">Achievements</span> (tip: type "cd Achievements" in the terminal).
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl md:text-2xl font-bold">My Skills 👨‍💻</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <Pill key={s} title={s} />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl md:text-2xl font-bold">Learning 📖</h3>
        <div className="flex flex-wrap gap-2">
          {skillsToLearn.map((s) => (
            <Pill key={s} title={s} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
