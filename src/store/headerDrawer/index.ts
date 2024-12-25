import { useCallback, useMemo } from 'react';
import { atom, useRecoilState } from 'recoil';

import type { Actions } from './types';

const headerDrawerIsOpenState = atom<boolean>({
  key: 'header-drawer-open-state',
  default: false,
});

export function useHeaderDrawer(): [isOpen: boolean, actions: Actions] {
  const [isOpen, setIsOpen] = useRecoilState(headerDrawerIsOpenState);

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

  const memoizedActions = useMemo(() => ({ toggle, close, open }), [toggle, close, open]);

  return [isOpen, memoizedActions];
}
