import type { SnackbarKey } from 'notistack';
import { useCallback, useMemo } from 'react';
import { atom, useRecoilState } from 'recoil';

import { notifications as notificationsDefaults } from '@/config';

import type { Actions, Notification } from './types';

const notificationsState = atom<Notification[]>({
  default: [],
  key: 'notificationsState',
});

export function useNotifications(): [Notification[], Actions] {
  const [notifications, setNotifications] = useRecoilState(notificationsState);

  const push = useCallback(
    (notification: Partial<Notification>) => {
      // TODO (Suren): use uuid
      const id = Math.random().toString();
      setNotifications((notifications): Notification[] => [
        // TODO (Suren): use immer
        ...notifications,
        {
          ...notification,
          dismissed: false,
          message: notification.message,
          options: {
            ...notificationsDefaults.options,
            ...notification.options,
            key: id,
          },
        },
      ]);

      return id;
    },
    [setNotifications],
  );

  const close = useCallback(
    (key: SnackbarKey, dismissAll = !key) => {
      setNotifications((notifications) =>
        notifications.map((notification) =>
          dismissAll || notification.options.key === key
            ? { ...notification, dismissed: true }
            : { ...notification },
        ),
      );
    },
    [setNotifications],
  );

  const remove = useCallback(
    (key: SnackbarKey) => {
      setNotifications((notifications) =>
        notifications.filter((notification) => notification.options.key !== key),
      );
    },
    [setNotifications],
  );

  const actions = useMemo(() => ({ close, push, remove }), [push, close, remove]);

  return [notifications, actions];
}
