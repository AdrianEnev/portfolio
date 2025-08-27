import React from 'react';
import { useTabs } from '../../context/TabsProvider';
import History from '../terminal/History';
import Prompt from '../terminal/Prompt';
import Intro from '../pages/Intro';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Achievements from '../pages/Achievements';
import Contact from '../pages/Contact';
import Resume from '../pages/Resume';
import Settings from '../pages/Settings';

const PageSwitch: React.FC<{ page: string }> = ({ page }) => {
  switch (page) {
    case 'about': return <About />;
    case 'projects': return <Projects />;
    case 'achievements': return <Achievements />;
    case 'contact': return <Contact />;
    case 'resume': return <Resume />;
    case 'settings': return <Settings />;
    case 'intro':
    default:
      return <Intro />;
  }
};

const Window: React.FC = () => {
  const { state } = useTabs();
  const active = state.tabs.find(t => t.id === state.activeId);
  if (!active) return null;

  return (
    <div className="w-full flex-1 flex flex-col px-3 pb-0 min-h-0 overflow-hidden">
      {/* Main content area fills remaining space between TabBar and Prompt */}
      <div className="flex-1 min-h-0 h-full grid grid-cols-1 md:grid-cols-[0.3fr_0.7fr] gap-3 overflow-hidden">
        {/* Left: floating History panel (transparent bg, subtle border) */}
        <div className="min-h-0 h-full overflow-hidden">
          <History tabId={active.id} />
        </div>
        {/* Right: page content */}
        <div className="rounded-md border border-white/10 bg-white/5 p-4 min-h-0 h-full overflow-y-auto">
          <PageSwitch page={active.page} />
        </div>
      </div>
      {/* Full-width compact command line at the very bottom */}
      <Prompt tabId={active.id} />
    </div>
  );
};

export default Window;
