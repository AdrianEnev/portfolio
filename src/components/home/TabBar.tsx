import React, { useMemo, useRef, useState } from "react";
import { useTabs } from "../../context/TabsProvider";

interface Tab {
  id: string;
  title: string;
}

const macCircleBase =
  "h-[0.79rem] w-[0.79rem] rounded-full shadow-inner transition-transform hover:scale-105 active:scale-95";

const TabBar: React.FC = () => {
  const { state, actions } = useTabs();
  const { tabs, activeId } = state;
  const { addTab, closeTab, setActive, clear } = actions;

  const [paletteOpen, setPaletteOpen] = useState(false);
  const paletteRef = useRef<HTMLDivElement | null>(null);

  const activeIndex = useMemo(
    () => tabs.findIndex((t) => t.id === activeId),
    [tabs, activeId]
  );

  const atLimit = tabs.length >= 25;

  const sidebarItems = [
    { key: 'about', label: 'About Me', icon: '👤' },
    { key: 'projects', label: 'Projects', icon: '📦' },
    { key: 'achievements', label: 'Achievements', icon: '🏆' },
    { key: 'contact', label: 'Contact', icon: '✉️' },
    { key: 'resume', label: 'Resume', icon: '📄' },
    { key: 'settings', label: 'Settings', icon: '⚙️' },
  ];

  // Derive a directory-like label from the tab's current page
  const displayDir = (page?: string) => {
    const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
    switch (page) {
      case 'about': return `~/${cap('about')}`;
      case 'projects': return `~/${cap('projects')}`;
      case 'achievements': return `~/${cap('achievements')}`;
      case 'contact': return `~/${cap('contact')}`;
      case 'resume': return `~/${cap('resume')}`;
      case 'settings': return `~/${cap('settings')}`;
      case 'intro':
      default:
        return '~';
    }
  };

  // Close palette on outside click
  React.useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!paletteRef.current) return;
      if (!paletteRef.current.contains(e.target as Node)) {
        setPaletteOpen(false);
      }
    };
    if (paletteOpen) document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [paletteOpen]);

  return (
    <div className="relative w-full select-none">
      <div
        className="flex items-center gap-6 h-10 px-3"
        role="toolbar"
        aria-label="Tab bar"
      >
        {/* Left traffic lights */}
        <div className="flex items-center gap-2">
          <button
            aria-label="Close"
            className={`${macCircleBase} bg-[#ff5f56] ring-1 ring-black/20`}
            title="Close"
          />
          <button
            aria-label="Minimize"
            className={`${macCircleBase} bg-[#ffbd2e] ring-1 ring-black/20`}
            title="Minimize"
          />
          <button
            aria-label="Zoom"
            className={`${macCircleBase} bg-[#27c93f] ring-1 ring-black/20`}
            title="Zoom"
          />
        </div>

        {/* Tabs */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            {tabs.map((tab) => {
              const active = tab.id === activeId;
              return (
                <div
                  key={tab.id}
                  className={`group grid grid-cols-[auto_1fr_auto] items-center flex-none w-[clamp(180px,5vw,280px)] rounded-md px-2 h-8 cursor-default border ${
                    active
                      ? "bg-white/10 text-white border-white/20"
                      : "bg-white/5 text-white/70 hover:bg-white/5 border-white/10"
                  }`}
                  onClick={() => setActive(tab.id)}
                  role="tab"
                  aria-selected={active}
                >
                  {/* left spacer to keep title perfectly centered */}
                  <span aria-hidden className="opacity-0 select-none grid place-items-center h-5 w-5 px-1">×</span>

                  <span className="truncate text-xs text-center mx-2">{displayDir(tab.page as any)}</span>

                  <button
                    aria-label={`Close ${displayDir(tab.page as any)}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (tab.id === '1') {
                        clear(tab.id);
                      } else {
                        closeTab(tab.id);
                      }
                    }}
                    className="ml-2 grid place-items-center h-5 w-5 rounded text-white/60 hover:text-white hover:bg-white/20 transition-colors"
                  >
                    <span className="mt-[-2px]">×</span>
                  </button>
                </div>
              );
            })}

            {/* New tab (inline) */}
            <button
              aria-label="New Tab"
              onClick={addTab}
              disabled={atLimit}
              className={`ml-1 flex items-center justify-center h-8 w-8 rounded-md ${
                atLimit
                  ? "text-white/30 cursor-not-allowed"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
              title={atLimit ? "Tab limit reached" : "New Tab"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-4 w-4"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right actions: plus with palette like Warp */}
        <div className="relative">
          <button
            aria-label="Command Palette"
            onClick={() => setPaletteOpen((s) => !s)}
            className="flex items-center justify-center h-8 w-8 rounded-md text-white/80 hover:text-white hover:bg-white/10"
            title="Open Tab Actions"
          >
            <p>{'{ }'}</p>
          </button>

          {paletteOpen && (
            <div
              ref={paletteRef}
              className="absolute top-full right-0 mt-2 w-[200px] h-auto max-h-[70vh] overflow-auto rounded-md border border-white/10 bg-[#1d1f2a]/95 shadow-xl backdrop-blur p-2 z-50"
            >
              <div className="px-2 py-1 text-[10px] uppercase tracking-wide text-white/50">Navigate</div>
              <nav aria-label="Sidebar Navigation" className="mt-1 space-y-1">
                {sidebarItems.map((item) => (
                  <button
                    key={item.key}
                    className="w-full flex items-center gap-2 px-2 py-2 rounded-md hover:bg-white/10 text-sm text-white/90 text-left"
                    onClick={() => {
                      // will be wired to navigate active tab later
                      setPaletteOpen(false);
                    }}
                  >
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded bg-white/10 text-xs">
                      {item.icon}
                    </span>
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TabBar;