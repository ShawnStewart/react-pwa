import { useCallback, useMemo } from 'react';
import { atom, useRecoilState } from 'recoil';

import type { Actions } from './types';

const hotKeysDialogState = atom<boolean>({
  default: false,
  key: 'hotkeys-dialog-state',
});

export function useHotKeysDialog(): [boolean, Actions] {
  const [isOpen, setIsOpen] = useRecoilState(hotKeysDialogState);

  const toggle = useCallback(() => {
    setIsOpen((isOpen: boolean) => !isOpen);
  }, [setIsOpen]);

  const close = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const open = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const memoizedActions = useMemo(() => ({ close, open, toggle }), [toggle, close, open]);

  return [isOpen, memoizedActions];
}
