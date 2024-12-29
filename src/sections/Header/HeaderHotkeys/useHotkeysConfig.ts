import { useHotkeys } from 'react-hotkeys-hook';

import { useHeaderDrawer } from '@/store/headerDrawer';
import { useHotKeysDialog } from '@/store/hotkeys';
import { useTheme } from '@/store/theme';

export function useHotkeysConfig() {
  const [, themeActions] = useTheme();
  const [, headerDrawerActions] = useHeaderDrawer();
  const [, hotKeysDialogActions] = useHotKeysDialog();

  const HOTKEYS_CONFIG = {
    HEADER_DRAWER: {
      action: () => {
        hotKeysDialogActions.close();
        headerDrawerActions.toggle();
      },
      key: 'alt+s',
      description: 'Toggle navigation menu',
    },
    THEME: {
      action: themeActions.toggle,
      key: 'alt+t',
      description: 'Toggle theme',
    },
    HOTKEYS_MENU: {
      action: hotKeysDialogActions.toggle,
      key: 'alt+k',
      description: 'Toggle hotkeys menu',
    },
  } as const;

  useHotkeys(HOTKEYS_CONFIG.HEADER_DRAWER.key, () => HOTKEYS_CONFIG.HEADER_DRAWER.action());
  useHotkeys(HOTKEYS_CONFIG.THEME.key, HOTKEYS_CONFIG.THEME.action);
  useHotkeys(HOTKEYS_CONFIG.HOTKEYS_MENU.key, HOTKEYS_CONFIG.HOTKEYS_MENU.action);

  return HOTKEYS_CONFIG;
}

export { useHotKeysDialog };
