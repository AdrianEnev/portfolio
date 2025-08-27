import React from 'react';
import { useTabs } from '../../context/TabsProvider';

interface HistoryProps {
  tabId: string;
}

type ColorKey = 'cyan' | 'emerald' | 'amber' | 'pink' | 'red' | 'violet' | 'sky' | 'slate';
const colorClass: Record<ColorKey, string> = {
  cyan: 'text-cyan-300',
  emerald: 'text-emerald-300',
  amber: 'text-amber-300',
  pink: 'text-pink-300',
  red: 'text-red-300',
  violet: 'text-violet-300',
  sky: 'text-sky-300',
  slate: 'text-slate-300',
};

function renderRich(text: string): React.ReactNode {
  // Supports [b]bold[/b], [dim]text[/dim], [c=color]text[/c]
  const nodes: React.ReactNode[] = [];
  let rest = text;
  const pattern = /(\[b\]|\[\/b\]|\[dim\]|\[\/dim\]|\[c=([a-z]+)\]|\[\/c\])/i;
  const stack: Array<{ type: 'b' | 'dim' | 'c'; color?: ColorKey }> = [];
  while (rest.length) {
    const m = rest.match(pattern);
    if (!m) {
      nodes.push(applyStack(rest, stack));
      break;
    }
    const idx = m.index ?? 0;
    if (idx > 0) nodes.push(applyStack(rest.slice(0, idx), stack));
    const tag = m[0].toLowerCase();
    if (tag === '[b]') stack.push({ type: 'b' });
    else if (tag === '[/b]') popType(stack, 'b');
    else if (tag === '[dim]') stack.push({ type: 'dim' });
    else if (tag === '[/dim]') popType(stack, 'dim');
    else if (tag.startsWith('[c=')) {
      const c = (m[2]?.toLowerCase() ?? 'cyan') as ColorKey;
      stack.push({ type: 'c', color: (colorClass[c] ? c : 'cyan') as ColorKey });
    } else if (tag === '[/c]') popType(stack, 'c');
    rest = rest.slice((m.index ?? 0) + m[0].length);
  }
  return <>{nodes}</>;
}

function popType(stack: Array<{ type: 'b' | 'dim' | 'c'; color?: ColorKey }>, t: 'b' | 'dim' | 'c') {
  for (let i = stack.length - 1; i >= 0; i--) {
    if (stack[i].type === t) { stack.splice(i, 1); break; }
  }
}

function applyStack(str: string, stack: Array<{ type: 'b' | 'dim' | 'c'; color?: ColorKey }>): React.ReactNode {
  let el: React.ReactNode = str;
  // apply sequentially based on stack order
  stack.forEach(s => {
    if (s.type === 'b') el = <strong className="font-semibold text-white">{el}</strong>;
    else if (s.type === 'dim') el = <span className="text-white/60">{el}</span>;
    else if (s.type === 'c') el = <span className={colorClass[s.color ?? 'cyan']}>{el}</span>;
  });
  return el;
}

const History: React.FC<HistoryProps> = ({ tabId }) => {
  const { state } = useTabs();
  const tab = state.tabs.find(t => t.id === tabId);
  const scrollRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [tab?.scrollback.length]);

  if (!tab) return null;

  return (
    <div className="rounded-md border border-white/15 h-full overflow-hidden flex flex-col">
      <div ref={scrollRef} className="flex-1 min-h-0 overflow-y-auto p-3">
        <div className="space-y-1 font-mono text-[13px] leading-relaxed">
          {tab.scrollback.length === 0 && (
            <div className="text-white/40">No commands yet. Try typing "help" below.</div>
          )}
          {tab.scrollback.map((line, i) => (
            <div key={i} className={
              line.type === 'input' ? 'text-white' : line.type === 'system' ? 'text-red-300' : 'text-white/90'
            }>
              {renderRich(line.text)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default History;
