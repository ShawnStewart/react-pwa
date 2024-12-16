import { ComponentProps } from 'react';

import Button from '@mui/material/Button';

import { clsx } from 'clsx';

function HotKeysButton({ className, ...props }: ComponentProps<typeof Button>) {
  return <Button className={clsx('h-fit self-center mr-2', className)} {...props} />;
}

export { HotKeysButton };
