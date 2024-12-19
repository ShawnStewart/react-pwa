import type { JSX } from 'react';

export enum Themes {
  DARK = 'dark',
  LIGHT = 'light',
}

export interface CustomThemeProviderProps {
  children: JSX.Element;
}
