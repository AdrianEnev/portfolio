import type { PageKey, TabState, TerminalLine } from '../../types/tabs';

const DIRS: Record<string, PageKey> = {
  '': 'intro',
  '/': 'intro',
  '~': 'intro',
  'intro': 'intro',
  'about': 'about',
  'projects': 'projects',
  'achievements': 'achievements',
  'contact': 'contact',
  'resume': 'resume',
  'settings': 'settings',
};

const pageLabels: Record<PageKey, string> = {
  intro: 'Intro',
  about: 'About',
  projects: 'Projects',
  achievements: 'Achievements',
  contact: 'Contact',
  resume: 'Resume',
  settings: 'Settings',
};

const pageHints: Record<PageKey, string> = {
  intro: 'Welcome screen',
  about: 'Who I am',
  projects: 'Things I built',
  achievements: 'Proud moments',
  contact: 'Get in touch',
  resume: 'CV snapshot',
  settings: 'Tweak UI',
};

const aliases: Record<string, PageKey> = {
  intro: 'intro',
  home: 'intro',
  about: 'about',
  projects: 'projects',
  work: 'projects',
  achievements: 'achievements',
  awards: 'achievements',
  contact: 'contact',
  resume: 'resume',
  cv: 'resume',
  settings: 'settings',
  prefs: 'settings',
};

export interface CommandResult {
  lines?: TerminalLine[];
  updates?: Partial<TabState>;
  clear?: boolean;
  outputs?: TerminalLine[];
  nextPath?: string; // e.g. "~/About"
  nextPage?: PageKey;
}

function normalizeDir(arg?: string): string | null {
  if (!arg) return null;
  let a = arg.trim();
  if (a.startsWith('~/')) a = a.slice(2);
  if (a.startsWith('./')) a = a.slice(2);
  if (a.startsWith('/')) a = a.slice(1);
  a = a.replace(/\/$/, '');
  return a.toLowerCase();
}

function toPageKey(name: string): PageKey | null {
  const key = aliases[name.toLowerCase()] as PageKey | undefined;
  return key ?? null;
}

function pathFor(page: PageKey): string {
  if (page === 'intro') return '~/';
  return `~/${pageLabels[page]}`;
}

// ---------- Fancy formatting helpers ----------
function line(text: string): TerminalLine { return { type: 'output', text }; }
function padRight(s: string, n: number): string { return s + ' '.repeat(Math.max(0, n - s.length)); }
function header(title: string): TerminalLine[] {
  const bar = '─'.repeat(Math.max(8, title.length + 4));
  return [line(`[c=sky]┌${bar}┐[/c]`), line(`[c=sky]│  [b]${title}[/b]  │[/c]`), line(`[c=sky]└${bar}┘[/c]`)];
}
function section(title: string): TerminalLine[] {
  return [line(`[c=emerald]›[/c] [b]${title}[/b]`)];
}
function sep(): TerminalLine { return line('[dim]──────────────────────────────────[/dim]'); }

function formatHelp(): TerminalLine[] {
  const cmds: Array<[string, string]> = [
    ['help', 'Show this help'],
    ['ls', 'List sections'],
    ['pwd', 'Print current path'],
    ['history', 'Recent commands'],
    ['echo <text>', 'Print text'],
    ['cd <section>', 'Open a section'],
    ['open <section>', 'Alias of cd'],
    ['clear | cls', 'Clear screen'],
  ];
  const col = 16; // command column width
  const lines: TerminalLine[] = [];
  lines.push(...header('Portfolio Terminal Help'));
  lines.push(sep());
  lines.push(...section('Commands'));
  cmds.forEach(([c, d]) => lines.push(line(`  [b]${padRight(c, col)}[/b] ${d}`)));
  lines.push(sep());
  lines.push(...section('Sections'));
  (Object.keys(pageLabels) as PageKey[]).forEach(k => {
    const name = pageLabels[k];
    const hint = pageHints[k];
    lines.push(line(`  • [c=cyan]${padRight(name, 12)}[/c] [dim]${hint}[/dim]`));
  });
  lines.push(sep());
  lines.push(...section('Tips'));
  lines.push(line('  ↑/↓ history   ⌘/Ctrl+L clear   Try: [b]cd About[/b], [b]open Projects[/b], [b]echo Hello[/b]'));
  return lines;
}

function formatLs(): TerminalLine[] {
  const items = (Object.keys(pageLabels) as PageKey[]).map(k => ({
    name: pageLabels[k],
    hint: pageHints[k],
  }));
  const lines: TerminalLine[] = [];
  lines.push(...header('Sections'));
  items.forEach(({ name, hint }) => {
    lines.push(line(`  • [c=cyan]${padRight(name, 12)}[/c] [dim]${hint}[/dim]`));
  });
  return lines;
}
// ------------------------------------------------

export function executeCommand(currentPath: string, input: string, history: string[]): CommandResult {
  const trimmed = input.trim();
  if (!trimmed) return { outputs: [] };

  const [cmd, ...args] = trimmed.split(/\s+/);
  const a0 = args.join(' ');

  switch (cmd) {
    case 'help':
      return { outputs: formatHelp() };

    case 'ls': {
      return { outputs: formatLs() };
    }

    case 'pwd': {
      return { outputs: [ { type: 'output', text: currentPath || '~/' } ] };
    }

    case 'clear':
    case 'cls':
      return { outputs: [], clear: true };

    case 'history':
      return { outputs: history.map((h, i) => ({ type: 'output', text: `${i + 1}  ${h}` })) };

    case 'echo':
      return { outputs: [ { type: 'output', text: a0 } ] };

    case 'open':
    case 'cd': {
      const d = normalizeDir(a0);
      if (!d) {
        return { outputs: [ { type: 'system', text: 'cd: missing operand' } ] };
      }
      const page = DIRS[d] as PageKey | undefined;
      if (!page) {
        return { outputs: [ { type: 'system', text: `cd: ${a0}: No such directory` } ] };
      }
      const name = d ? d.charAt(0).toUpperCase() + d.slice(1) : '';
      const nextPath = name ? `~/${name}` : '~/';
      return { outputs: [ { type: 'output', text: `moved to ${nextPath}` } ], nextPage: page, nextPath };
    }

    default:
      return { outputs: [ { type: 'system', text: `${cmd}: command not found` } ] };
  }
}

export function runCommand(tab: TabState, input: string): CommandResult {
  const parts = input.trim().split(/\s+/);
  const cmd = (parts[0] || '').toLowerCase();
  const args = parts.slice(1);

  // Built-ins
  if (cmd === 'clear' || cmd === 'cls') {
    return { clear: true };
  }

  if (cmd === 'help') {
    return { lines: formatHelp() };
  }

  if (cmd === 'ls') {
    return { lines: formatLs() };
  }

  if (cmd === 'pwd') {
    return { lines: [{ type: 'output', text: tab.path || '~/' }] };
  }

  if (cmd === 'history') {
    const lines: TerminalLine[] = tab.history.slice(-25).map((h, i) => ({ type: 'output', text: `${i + 1}. ${h}` }));
    if (!lines.length) lines.push({ type: 'output', text: '(empty)' });
    return { lines };
  }

  if (cmd === 'echo') {
    return { lines: [{ type: 'output', text: args.join(' ') }] };
  }

  if (cmd === 'cd' || cmd === 'open') {
    if (!args.length) {
      return { lines: [{ type: 'system', text: 'usage: cd <section>' }] };
    }
    const target = toPageKey(args[0]);
    if (!target) {
      return { lines: [{ type: 'system', text: `unknown section: ${args[0]}` }] };
    }
    return {
      updates: {
        page: target,
        path: pathFor(target),
      },
      lines: [{ type: 'output', text: `[c=emerald]Opened[/c] [b]${pageLabels[target]}[/b]` }],
    };
  }

  // Fallback
  return { lines: [{ type: 'system', text: `unknown command: ${cmd}` }] };
}
