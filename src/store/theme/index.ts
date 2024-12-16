import { useCallback, useMemo } from 'react';
import type { AtomEffect } from 'recoil';
import { atom, useRecoilState } from 'recoil';

import { Themes } from '@/theme/types';

import type { Actions } from './types';

const synchronizeWithLocalStorage: AtomEffect<Themes> = ({ onSet, setSelf }) => {
  const storedTheme = localStorage.getItem('theme-mode');
  if (storedTheme) setSelf(storedTheme as Themes);
  onSet((value) => {
    localStorage.setItem('theme-mode', value);
  });
};

const themeModeState = atom({
  key: 'theme-mode-state',
  default: 'dark' as Themes,
  effects: [synchronizeWithLocalStorage],
});

function useTheme(): [Themes, Actions] {
  const [themeMode, setThemeMode] = useRecoilState(themeModeState);

  const toggle = useCallback(() => {
    setThemeMode((mode: Themes) => (mode === Themes.DARK ? Themes.LIGHT : Themes.DARK));
  }, [setThemeMode]);

  const memoizedActions = useMemo(() => ({ toggle }), [toggle]);

  return [themeMode, memoizedActions];
}

export default useTheme;
