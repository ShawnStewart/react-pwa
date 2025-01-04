import { useCallback, useEffect, useRef } from 'react';
import { useRegisterSW } from 'virtual:pwa-register/react';

import { ToastAction } from '@/components/ui/toast';
import { useToast } from '@/hooks/useToast';

export function useServiceWorker() {
  const { dismiss, toast } = useToast();
  const refreshToastKey = useRef<string | null>(null);
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW();

  const close = useCallback(() => {
    setOfflineReady(false);
    setNeedRefresh(false);

    if (refreshToastKey.current) {
      dismiss(refreshToastKey.current);
    }
  }, [setOfflineReady, setNeedRefresh, dismiss]);

  useEffect(() => {
    if (offlineReady) {
      toast({
        description: 'App is ready to work offline.',
      });
    } else if (needRefresh) {
      const refreshToast = toast({
        action: (
          <ToastAction
            altText="Refresh the page to update the application."
            onClick={() => updateServiceWorker(true)}
          >
            Refresh
          </ToastAction>
        ),
        description: 'New content is available, refresh the page to update.',
        duration: 30000,
      });
      refreshToastKey.current = refreshToast.id;
    }
  }, [close, needRefresh, offlineReady, toast, updateServiceWorker]);
}
