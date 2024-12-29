import { InfoCircledIcon } from '@radix-ui/react-icons';
import type { CustomContentProps } from 'notistack';
import { SnackbarProvider } from 'notistack';
import type { Ref } from 'react';
import { forwardRef } from 'react';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { notifications } from '@/config';

import { Notifier } from './Notifier';

// here how you can define your own notification component

const CustomNotification = forwardRef(function CustomNotification(
  { message }: CustomContentProps,
  ref: Ref<HTMLDivElement>,
) {
  return (
    <Alert ref={ref}>
      <InfoCircledIcon />
      <AlertTitle>Notification demo (random IT jokes :))</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
});

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
