import Button from '@mui/material/Button';
import { clsx } from 'clsx';
import { type ComponentProps, forwardRef } from 'react';

export const HotKeysButton = forwardRef<HTMLButtonElement, ComponentProps<typeof Button>>(
  ({ className, ...props }, ref) => {
    return <Button className={clsx('h-fit self-center mr-2', className)} {...{ ...props, ref }} />;
  },
);

HotKeysButton.displayName = 'HotKeysButton';
