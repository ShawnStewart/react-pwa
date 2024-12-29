import { CheckCircledIcon } from '@radix-ui/react-icons';
import type { SnackbarKey } from 'notistack';
import { useCallback, useEffect, useRef } from 'react';
import { useRegisterSW } from 'virtual:pwa-register/react';

import { Alert, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { useNotifications } from '@/store/notifications';

// TODO (Suren): this should be a custom hook :)
export function SW() {
  const [, notificationsActions] = useNotifications();
  const notificationKey = useRef<SnackbarKey | null>(null);
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW();

  const close = useCallback(() => {
    setOfflineReady(false);
    setNeedRefresh(false);

    if (notificationKey.current) {
      notificationsActions.close(notificationKey.current);
    }
  }, [setOfflineReady, setNeedRefresh, notificationsActions]);

  useEffect(() => {
    if (offlineReady) {
      notificationsActions.push({
        options: {
          autoHideDuration: 4500,
          content: (
            <Alert>
              <CheckCircledIcon /> <AlertTitle>App is ready to work offline.</AlertTitle>
            </Alert>
          ),
        },
      });
    } else if (needRefresh) {
      notificationKey.current = notificationsActions.push({
        message: 'New content is available, click on reload button to update.',
        options: {
          variant: 'warning',
          persist: true,
          action: (
            <>
              <Button onClick={() => updateServiceWorker(true)}>Reload</Button>
              <Button onClick={close}>Close</Button>
            </>
          ),
        },
      });
    }
  }, [close, needRefresh, notificationsActions, offlineReady, updateServiceWorker]);

  return null;
}
