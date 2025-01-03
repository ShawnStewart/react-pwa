import type { CustomContentProps, OptionsObject, SnackbarKey } from 'notistack';
import type { FunctionComponent, ReactNode } from 'react';

interface Notification {
  Icon?: FunctionComponent;
  title?: ReactNode;
  message: ReactNode;
  options: OptionsObject;
  dismissed: boolean;
}

export interface CustomNotificationProps extends CustomContentProps {
  Icon?: FunctionComponent;
  title?: ReactNode;
  message?: ReactNode;
}

declare module 'notistack' {
  export interface VariantOverrides {
    // define custom variants
    customNotification: {
      Icon?: FunctionComponent;
      title?: ReactNode;
      message?: ReactNode;
    };
  }
}

interface Actions {
  push: (notification: Partial<Notification>) => SnackbarKey;
  close: (key: SnackbarKey, dismissAll?: boolean) => void;
  remove: (key: SnackbarKey) => void;
}

export type { Actions, Notification };
