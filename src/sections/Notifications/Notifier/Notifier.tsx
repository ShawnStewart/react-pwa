import type { SnackbarKey } from 'notistack';
import { useSnackbar } from 'notistack';
import { useEffect, useRef } from 'react';

import { useNotifications } from '@/store/notifications';

// NOTE: this is a workaround for a missing feature in notistack
// This will be removed once the new version of notistack is released
// But it works great for now :)
export function Notifier() {
  const [notifications, actions] = useNotifications();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const displayed = useRef<SnackbarKey[]>([]);

  function storeDisplayed(key: SnackbarKey) {
    displayed.current = [...displayed.current, key];
  }

  function removeDisplayed(key: SnackbarKey) {
    displayed.current = [...displayed.current.filter((_key) => key !== _key)];
  }

  useEffect(() => {
    notifications.forEach(({ Icon, title, message, options, dismissed }) => {
      if (dismissed) {
        // dismiss snackbar using notistack
        closeSnackbar(options.key);
        return;
      }

      // do nothing if snackbar is already displayed
      if (options.key && displayed.current.includes(options.key)) return;

      // display snackbar using notistack
      if (message) {
        enqueueSnackbar(message, {
          ...options,
          Icon,
          onExited(_event, key) {
            // removen this snackbar from the store
            actions.remove(key);
            removeDisplayed(key);
          },
          title,
        });
      }

      // keep track of snackbars that we've displayed
      if (options.key) storeDisplayed(options.key);
    });
  });

  return null;
}
