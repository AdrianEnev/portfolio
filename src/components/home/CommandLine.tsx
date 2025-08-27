import React, { useState } from "react";

interface CommandLineProps {
  currentPath?: string; // e.g. ~/Contact
  onCommandSubmit?: (cmd: string) => void;
}

const CommandLine: React.FC<CommandLineProps> = ({
  currentPath = "~/",
  onCommandSubmit,
}) => {
  const [value, setValue] = useState("");

  const submit = () => {
    if (onCommandSubmit) onCommandSubmit(value);
    setValue("");
  };

  return (
    <div className="w-full">
      {/* Darker unified container, rounded only at the top, no outer padding */}
      <div className="rounded-t-md bg-white/5 border border-white/10 shadow-sm overflow-hidden">
        {/* Header: current directory */}
        <div className="flex items-center gap-3 h-12 text-white/85 text-base mx-3">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-sm bg-white/15 text-[12px]">~</span>
          <span className="font-mono tracking-tight">{currentPath}</span>
        </div>

        {/* Input line */}
        <div className="mx-3">
          <div className="flex items-center gap-3 rounded-md px-1 h-8">
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  submit();
                }
              }}
              placeholder="Try typing something!"
              className="bg-transparent outline-none text-white placeholder:text-white/30 text-lg flex-1"
            />
          </div>

          {/* Small toolbar buttons below input (scaled up) */}
          <div className="mt-3 mb-3 flex items-center gap-3">
            {[
              { key: "img", label: "IMG" },
              { key: "cmd", label: "⌘K" },
              { key: "slash", label: "/" },
              { key: "star", label: "*" },
            ].map((b) => (
              <button
                key={b.key}
                className="h-9 px-3 rounded bg-white/10 text-white/70 hover:text-white hover:bg-white/20 text-base leading-none"
                onClick={() => {}}
                aria-label={b.label}
              >
                {b.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommandLine;