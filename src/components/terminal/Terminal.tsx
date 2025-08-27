import React from 'react';
import { useTabs } from '../../context/TabsProvider';

interface TerminalProps {
  tabId: string;
}

const Terminal: React.FC<TerminalProps> = ({ tabId }) => {
  const { state, actions } = useTabs();
  const tab = state.tabs.find(t => t.id === tabId)!;
  const { execute, historyPrev, historyNext } = actions;

  const [value, setValue] = React.useState('');
  const scrollRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [tab.scrollback.length]);

  const onSubmit = () => {
    execute(tabId, value);
    setValue('');
  };

  const onKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onSubmit();
      return;
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = historyPrev(tabId);
      if (prev !== null) setValue(prev);
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = historyNext(tabId);
      if (next !== null) setValue(next);
      return;
    }
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'l') {
      e.preventDefault();
      actions.clear(tabId);
    }
  };

  return (
    <div className="w-full rounded-md bg-white/5 border border-white/10 shadow-sm overflow-hidden">
      {/* Header: current directory */}
      <div className="flex items-center gap-3 h-10 text-white/85 text-sm mx-3">
        <span className="inline-flex h-5 w-5 items-center justify-center rounded-sm bg-white/15 text-[12px]">~</span>
        <span className="font-mono tracking-tight">{tab.path || '~/'} </span>
      </div>

      {/* Scrollback */}
      <div ref={scrollRef} className="mx-3 h-48 md:h-72 overflow-y-auto no-scrollbar pb-2">
        <div className="space-y-1 font-mono text-[13px] leading-relaxed">
          {tab.scrollback.map((line, i) => (
            <div key={i} className={
              line.type === 'input' ? 'text-white' : line.type === 'system' ? 'text-red-300' : 'text-white/90'
            }>
              {line.text}
            </div>
          ))}
        </div>
      </div>

      {/* Prompt */}
      <div className="mx-3 mb-3">
        <div className="flex items-center gap-3 rounded-md px-1 h-10">
          <span className="font-mono text-white/70 text-sm">$</span>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Type a command (try: help)"
            className="bg-transparent outline-none text-white placeholder:text-white/30 text-base flex-1"
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
