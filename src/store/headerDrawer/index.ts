import { useCallback, useMemo } from 'react';
import { atom, useRecoilState } from 'recoil';

import type { Actions } from './types';

const headerDrawerIsOpenState = atom<boolean>({
  default: false,
  key: 'header-drawer-open-state',
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

  const memoizedActions = useMemo(() => ({ close, open, toggle }), [toggle, close, open]);

  return [isOpen, memoizedActions];
}
