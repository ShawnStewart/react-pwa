import type { PropsWithChildren } from 'react';
import { createContext, useCallback, useContext, useMemo, useState } from 'react';

interface HeaderDrawerContextValue {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

const headerDrawerContext = createContext<HeaderDrawerContextValue | null>(null);

export function HeaderDrawerContext({ children }: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(
    (forceState?: boolean) => {
      setIsOpen((isOpen: boolean) => forceState ?? !isOpen);
    },
    [setIsOpen],
  );

  const close = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const open = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const memoizedActions = useMemo(
    () => ({ close, isOpen, open, toggle }),
    [close, isOpen, open, toggle],
  );

  return (
    <headerDrawerContext.Provider value={memoizedActions}>{children}</headerDrawerContext.Provider>
  );
}

export function useHeaderDrawer() {
  const context = useContext(headerDrawerContext);

  if (!context) throw new Error('useHeaderDrawer must be used within a HeaderDrawerContext');

  return context;
}
