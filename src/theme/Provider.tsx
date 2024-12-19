import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useTheme } from '@/store/theme';

import { themes } from './themes';
import type { CustomThemeProviderProps } from './types';

export function CustomThemeProvider({ children }: CustomThemeProviderProps) {
  const [theme] = useTheme();

  return <ThemeProvider theme={createTheme(themes[theme])}>{children}</ThemeProvider>;
}
