import React from 'react';

const Intro: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
      {/* Left: text content */}
      <div className="flex-1 min-w-0">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
          Hi, my name is <span className="font-bold">Adrian</span>!
        </h2>
        <p className="mt-3 text-white/85 text-base md:text-lg">
          I'm a student passionate about full-stack development. I love building things that solve real world
          problems and learning by doing.
        </p>
        <div className="mt-5 text-white/70 font-mono text-sm">
          <p>
            Use the terminal on the left to explore sections. Try commands like <span className="text-white">help</span>,
            <span className="text-white"> ls</span>, or <span className="text-white">cd About</span>.
          </p>
        </div>
      </div>

      {/* Right: placeholder for headshot image */}
      <div className="w-full md:w-auto">
        <div
          aria-label="Headshot placeholder"
          className="mx-auto md:mx-0 rounded-md border-2 border-dashed border-white/25 bg-white/5 shadow-sm"
          style={{ width: 260, height: 320 }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center text-white/50 text-sm">
              <div className="font-medium">Headshot Placeholder</div>
              <div className="text-xs">260 × 320</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
