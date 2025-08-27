export type PageKey =
  | 'intro'
  | 'about'
  | 'projects'
  | 'achievements'
  | 'contact'
  | 'resume'
  | 'settings';

export type TerminalLine =
  | { type: 'input'; text: string }
  | { type: 'output'; text: string }
  | { type: 'system'; text: string };

export interface TabState {
  id: string;
  title: string;
  page: PageKey;
  path: string; // e.g. "~/" or "~/About"
  scrollback: TerminalLine[];
  history: string[];
  historyIndex: number | null;
}

export interface TabsState {
  tabs: TabState[];
  activeId: string;
}
