import { InfoCircledIcon } from '@radix-ui/react-icons';
import { SnackbarProvider } from 'notistack';
import { forwardRef } from 'react';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { notifications } from '@/config';
import type { CustomNotificationProps } from '@/store/notifications/types';

import { Notifier } from './Notifier';

const CustomNotification = forwardRef<HTMLDivElement, CustomNotificationProps>(
  function CustomNotification({ Icon = InfoCircledIcon, message, title }, ref) {
    return (
      <Alert ref={ref}>
        <Icon />
        {title && <AlertTitle>{title}</AlertTitle>}
        <AlertDescription>{message}</AlertDescription>
      </Alert>
    );
  },
);

export function Notifications() {
  return (
    <SnackbarProvider
      maxSnack={notifications.maxSnack}
      Components={{
        customNotification: CustomNotification,
      }}
    >
      <Notifier />
    </SnackbarProvider>
  );
}
