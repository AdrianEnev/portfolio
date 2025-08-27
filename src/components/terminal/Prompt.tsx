import React from 'react';
import { useTabs } from '../../context/TabsProvider';

interface PromptProps {
  tabId: string;
}

const Prompt: React.FC<PromptProps> = ({ tabId }) => {
  const { state, actions } = useTabs();
  const tab = state.tabs.find(t => t.id === tabId)!;
  const [value, setValue] = React.useState('');

  const submit = () => {
    const v = value.trim();
    if (!v) return;
    actions.execute(tabId, v);
    setValue('');
  };

  const onKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      submit();
      return;
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = actions.historyPrev(tabId);
      if (prev !== null) setValue(prev);
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = actions.historyNext(tabId);
      if (next !== null) setValue(next);
      return;
    }
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'l') {
      e.preventDefault();
      actions.clear(tabId);
      return;
    }
  };

  return (
    <div className="w-full bg-white/5 border-t border-white/10 my-2 rounded-lg">
      <div className="mx-3">
        {/* Header row: current directory */}
        <div className="flex items-center gap-3 h-8 text-white/85 text-sm">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-sm bg-white/15 text-[12px]">~</span>
          <span className="font-mono tracking-tight">{tab.path || '~/'} </span>
        </div>
        {/* Prompt row */}
        <div className="flex items-center gap-3 h-10">
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

export default Prompt;
