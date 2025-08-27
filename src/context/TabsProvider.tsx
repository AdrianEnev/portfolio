import React from 'react';
import type { PageKey, TabState, TabsState, TerminalLine } from '../types/tabs';
import { runCommand } from '../use/io/commands';

interface TabsActions {
  addTab: () => void;
  closeTab: (id: string) => void;
  setActive: (id: string) => void;
  execute: (tabId: string, input: string) => void;
  historyPrev: (tabId: string) => string | null;
  historyNext: (tabId: string) => string | null;
  clear: (tabId: string) => void;
}

const TabsContext = React.createContext<{
  state: TabsState;
  actions: TabsActions;
} | null>(null);

function createInitialTab(id: string): TabState {
  return {
    id,
    title: `tab ${id}`,
    page: 'intro',
    path: '~/\u200b', // thin space to avoid tail trimming visuals
    scrollback: [],
    history: [],
    historyIndex: null,
  };
}

export const TabsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [counter, setCounter] = React.useState(2);
  const [state, setState] = React.useState<TabsState>({
    tabs: [createInitialTab('1')],
    activeId: '1',
  });

  const findIndex = React.useCallback((id: string) => state.tabs.findIndex(t => t.id === id), [state.tabs]);

  const addTab = React.useCallback(() => {
    const id = String(counter);
    setCounter(c => c + 1);
    setState(prev => ({
      tabs: [...prev.tabs, createInitialTab(id)],
      activeId: id,
    }));
  }, [counter]);

  const closeTab = React.useCallback((id: string) => {
    setState(prev => {
      if (prev.tabs.length === 1) return prev; // keep at least one tab
      const idx = prev.tabs.findIndex(t => t.id === id);
      const nextTabs = prev.tabs.filter(t => t.id !== id);
      let activeId = prev.activeId;
      if (prev.activeId === id) {
        const fallback = nextTabs[Math.max(0, idx - 1)]?.id;
        if (fallback) activeId = fallback;
      }
      return { tabs: nextTabs, activeId };
    });
  }, []);

  const setActive = React.useCallback((id: string) => {
    setState(prev => ({ ...prev, activeId: id }));
  }, []);

  const pushLines = React.useCallback((tabId: string, lines: TerminalLine[]) => {
    setState(prev => {
      const idx = prev.tabs.findIndex(t => t.id === tabId);
      if (idx === -1) return prev;
      const tab = prev.tabs[idx];
      const nextTab: TabState = { ...tab, scrollback: [...tab.scrollback, ...lines] };
      const tabs = [...prev.tabs];
      tabs[idx] = nextTab;
      return { ...prev, tabs };
    });
  }, []);

  const setTab = React.useCallback((tabId: string, updater: (t: TabState) => TabState) => {
    setState(prev => {
      const idx = prev.tabs.findIndex(t => t.id === tabId);
      if (idx === -1) return prev;
      const tabs = [...prev.tabs];
      tabs[idx] = updater(tabs[idx]);
      return { ...prev, tabs };
    });
  }, []);

  // Wire into the command engine for predictable state updates
  const execute = React.useCallback((tabId: string, input: string) => {
    const trimmed = input.trim();
    if (!trimmed) return;

    setState(prev => {
      const idx = prev.tabs.findIndex(t => t.id === tabId);
      if (idx === -1) return prev;
      const tabs = [...prev.tabs];
      const current = tabs[idx];

      // Start with appending the input and history
      let nextTab: TabState = {
        ...current,
        history: [...current.history, trimmed],
        historyIndex: null,
        scrollback: [...current.scrollback, { type: 'input', text: `$ ${trimmed}` }],
      };

      // Run command using snapshot of the tab BEFORE applying updates
      const result = runCommand(nextTab, trimmed);

      if (result.clear) {
        nextTab = { ...nextTab, scrollback: [] };
      }
      if (result.lines && result.lines.length) {
        nextTab = { ...nextTab, scrollback: [...nextTab.scrollback, ...result.lines] };
      }
      if (result.updates) {
        nextTab = { ...nextTab, ...result.updates };
      }

      tabs[idx] = nextTab;
      return { ...prev, tabs };
    });
  }, []);

  const historyPrev = React.useCallback((tabId: string) => {
    let value: string | null = null;
    setTab(tabId, (t) => {
      if (!t.history.length) return t;
      const nextIndex = t.historyIndex === null ? t.history.length - 1 : Math.max(0, t.historyIndex - 1);
      value = t.history[nextIndex] ?? null;
      return { ...t, historyIndex: nextIndex };
    });
    return value;
  }, [setTab]);

  const historyNext = React.useCallback((tabId: string) => {
    let value: string | null = '';
    setTab(tabId, (t) => {
      if (t.historyIndex === null) return t; // already at live input
      const nextIndex = t.historyIndex + 1;
      if (nextIndex >= t.history.length) {
        value = '';
        return { ...t, historyIndex: null };
      }
      value = t.history[nextIndex] ?? '';
      return { ...t, historyIndex: nextIndex };
    });
    return value;
  }, [setTab]);

  const clear = React.useCallback((tabId: string) => {
    setTab(tabId, (t) => ({ ...t, scrollback: [] }));
  }, [setTab]);

  const value = React.useMemo(() => ({
    state,
    actions: { addTab, closeTab, setActive, execute, historyPrev, historyNext, clear },
  }), [state, addTab, closeTab, setActive, execute, historyPrev, historyNext, clear]);

  return <TabsContext.Provider value={value}>{children}</TabsContext.Provider>;
};

export function useTabs() {
  const ctx = React.useContext(TabsContext);
  if (!ctx) throw new Error('useTabs must be used within TabsProvider');
  return ctx;
}
